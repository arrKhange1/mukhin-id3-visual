import {DataRow, ResNode} from "./types";

function getDataRowsForGroup(dataRows: DataRow[], attr: string, group: string): DataRow[] {
  const rows: DataRow[] = [];
  for (const dataRow of dataRows) {
    const foundGroup = dataRow.attributeVars.find(row => row.varName === attr && row.varValue === group);
    if (foundGroup) rows.push(dataRow);
  }
  return rows;
}

function groupDataRowsByResults(dataRowsForGroup: DataRow[]): {[key: string]: number} {
  return dataRowsForGroup.reduce((acc, currDataRow) => {
    acc[currDataRow.yVar.varValue] = acc[currDataRow.yVar.varValue] ?? 0;
    ++acc[currDataRow.yVar.varValue];
    return acc;
  }, {} as {[key: string]: number});
}

function calculateUncertainty(groupedResults: {[p: string]: number}, dataRowsForGroup: DataRow[]): number {
  let uncertainty = 0;
  if (Object.keys(groupedResults).length === 0) return 1000;
  if (Object.keys(groupedResults).length === 1) return 0;
  else {
    for (let key in groupedResults) {
      const pj = (groupedResults[key] / dataRowsForGroup.length);
      uncertainty += pj * Math.log2(pj);
    }
    return -uncertainty;
  }
}

// full iteration func
export function getAttrWithMinUncertainty(dataRows: DataRow[], attrs: string[], groupedDataByAttr: {[key: string]: Set<string>}): ResNode {
  let minUncertainty = Infinity;
  let minAttrNode: ResNode = {
    dataRows: [],
    commonUncertainty: -1,
    children: [],
    ancestorAttrs: attrs
  };
  for (const attr of attrs) {
    const attrNode: ResNode = {
      dataRows,
      commonUncertainty: -1,
      children: [],
      ancestorAttrs: attrs
    };
    let attrUncertainty = 0;
    for (const group of groupedDataByAttr[attr]) {
      const dataRowsForGroup = getDataRowsForGroup(dataRows, attr, group);
      const groupedResults = groupDataRowsByResults(dataRowsForGroup);
      const groupUncertainty = calculateUncertainty(groupedResults, dataRowsForGroup);
      attrUncertainty += (dataRowsForGroup.length / dataRows.length) * groupUncertainty;

      attrNode.attrName = attr;
      attrNode.children = attrNode.children ?? [];
      attrNode.children.push({
        condition: group,
        y: Object.keys(groupedResults)[0],
        dataRows: dataRowsForGroup,
        commonUncertainty: groupUncertainty,
        ancestorAttrs: attrs.filter(inputAttr => inputAttr !== attr),
        children: []
      })
    }
    attrNode.commonUncertainty = attrUncertainty;
    if (attrUncertainty < minUncertainty) {
      minUncertainty = attrUncertainty;
      minAttrNode = attrNode;
    }
  }
  return minAttrNode;
}

export function findTree(node: ResNode, groupedDataByAttr: {[key: string]: Set<string>}): void {
  for (let i= 0; i < node.children.length; ++i) {
    if (node.children[i].commonUncertainty !== 0) {
      const clarifiedAttr = getAttrWithMinUncertainty(node.children[i].dataRows, node.children[i].ancestorAttrs, groupedDataByAttr);
      clarifiedAttr.condition = node.children[i].condition;
      node.children[i] = clarifiedAttr;
      if (clarifiedAttr.commonUncertainty !== 0) {
        findTree(clarifiedAttr, groupedDataByAttr);
      }
    }
  }
}
