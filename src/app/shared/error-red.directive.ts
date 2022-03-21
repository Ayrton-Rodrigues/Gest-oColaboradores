import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorRed]'
})
export class ErrorRedDirective {

  constructor(private element: ElementRef){
    element.nativeElement.style.color = 'red' 
    
  }

}
