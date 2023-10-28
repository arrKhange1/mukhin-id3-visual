export interface Var {
  varName: string;
  varValue: string;
}

export interface DataRow {
  yVar: Var;
  attributeVars: Var[];
}

export interface ResNode {
  dataRows: DataRow[],
  commonUncertainty: number;
  children: ResNode[];
  attrName?: string;
  ancestorAttrs: string[];
  y?: string;
  condition?: string;
}

export function groupDataByAttr(data: DataRow[]): {[key: string]: Set<string>} {
  return data.reduce((acc, currDataRow) => {
    for (const v of currDataRow.attributeVars) {
      acc[v.varName] = acc[v.varName] ?? new Set<string>();
      acc[v.varName].add(v.varValue);
    }
    return acc;
  }, {} as {[key: string]: Set<string>});
}


