import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {data, ResNode} from "../tree/types";
import {findTree, getAttrWithMinUncertainty} from "../tree/tree-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  protected rootNode?: ResNode;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
  public ngOnInit(): void {
    const rootNode = getAttrWithMinUncertainty(data, ['Курс доллара', 'Кризис', 'Скидка', 'Сезон']);
    findTree(rootNode);
    this.rootNode = rootNode;
    this.changeDetectorRef.markForCheck();
  }

}
