import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataRow, groupDataByAttr, ResNode} from "../../tree/types";
import {attrs, data} from "../class-example-data/data";
import {findTree, getAttrWithMinUncertainty} from "../../tree/tree-data";

@Component({
  selector: 'app-example-data-base',
  templateUrl: './example-data-base.component.html',
  styleUrls: ['./example-data-base.component.css']
})
export class ExampleDataBaseComponent implements OnInit {
  protected rootNode?: ResNode;
  protected data: DataRow[] = data;
  protected attrs: string[] = attrs;
  public ngOnInit(): void {
    const groupedDataByAttr = groupDataByAttr(this.data);
    const rootNode = getAttrWithMinUncertainty(this.data, this.attrs, groupedDataByAttr);
    findTree(rootNode, groupedDataByAttr);
    this.rootNode = rootNode;
  }
}
