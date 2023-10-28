import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassExampleDataComponent } from './class-example-data/class-example-data.component';
import {TreeModule} from "../tree/tree.module";
import { VideoCardExampleDataComponent } from './video-card-example-data/video-card-example-data.component';
import { ExampleDataBaseComponent } from './example-data-base/example-data-base.component';
import { MusicGenreExampleDataComponent } from './music-genre-example-data/music-genre-example-data.component';



@NgModule({
  declarations: [
    ClassExampleDataComponent,
    VideoCardExampleDataComponent,
    ExampleDataBaseComponent,
    MusicGenreExampleDataComponent
  ],
  exports: [
    ClassExampleDataComponent,
    VideoCardExampleDataComponent,
    MusicGenreExampleDataComponent
  ],
  imports: [
    CommonModule,
    TreeModule
  ]
})
export class DataModule { }
