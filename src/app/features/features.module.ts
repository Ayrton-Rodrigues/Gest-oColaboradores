import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListColaboratorComponent } from './components/list-colaborator/list-colaborator.component';
import { ColaboratorComponent } from './components/colaborator/colaborator.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListColaboratorComponent,
    ColaboratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListColaboratorComponent,
    ColaboratorComponent
  ]
})
export class FeaturesModule { }
