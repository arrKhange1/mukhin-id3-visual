import {Component, OnInit} from '@angular/core';
import {DataRow} from "../../tree/types";
import {attrs, data} from "./data";
import {ExampleDataBaseComponent} from "../example-data-base/example-data-base.component";

@Component({
  selector: 'app-video-card-example-data',
  templateUrl: './video-card-example-data.component.html',
  styleUrls: ['./video-card-example-data.component.css']
})
export class VideoCardExampleDataComponent extends ExampleDataBaseComponent implements OnInit {
  protected override data: DataRow[] = data;
  protected override attrs: string[] = attrs;
}
