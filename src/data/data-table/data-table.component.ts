import {Component, Input} from '@angular/core';
import {DataRow} from "../../tree/types";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  @Input()
  public data: DataRow[] = [];
  @Input()
  public attrs: string[] = [];
}
