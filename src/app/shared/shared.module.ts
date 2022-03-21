import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorRedDirective } from './error-red.directive';



@NgModule({
  declarations: [
    PipesComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    ErrorRedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    ErrorRedDirective
  ]
})
export class SharedModule { }
