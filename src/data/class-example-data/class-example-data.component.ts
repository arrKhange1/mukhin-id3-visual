import {Component, OnInit} from '@angular/core';
import {ExampleDataBaseComponent} from "../example-data-base/example-data-base.component";

@Component({
  selector: 'app-class-example-data',
  templateUrl: './class-example-data.component.html',
  styleUrls: ['./class-example-data.component.css']
})
export class ClassExampleDataComponent extends ExampleDataBaseComponent  implements OnInit {
}
