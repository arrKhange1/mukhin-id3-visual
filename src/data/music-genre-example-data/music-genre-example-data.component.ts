import { Component } from '@angular/core';
import {DataRow} from "../../tree/types";
import {attrs, data } from './data';
import {ExampleDataBaseComponent} from "../example-data-base/example-data-base.component";

@Component({
  selector: 'app-music-genre-example-data',
  templateUrl: './music-genre-example-data.component.html',
  styleUrls: ['./music-genre-example-data.component.css']
})
export class MusicGenreExampleDataComponent extends ExampleDataBaseComponent {
  protected override data: DataRow[] = data;
  protected override attrs: string[] = attrs;
}
