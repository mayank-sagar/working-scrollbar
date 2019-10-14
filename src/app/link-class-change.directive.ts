import { Directive } from '@angular/core';
import { ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import * as $ from 'jquery'

@Directive({
  selector: '[LinkClassChange]'
})
export class LinkClassChangeDirective implements AfterViewInit{

  constructor(private elr:ElementRef,private render:Renderer2) { 
  

  }

  ngAfterViewInit() {
    console.log(this.elr.nativeElement.childNodes);
    $(this.elr.nativeElement).find('.link2').addClass('changeMe');
  //  this.elr.nativeElement.childNodes[1].querySelector('.link2').className = 'changeMe';
  }


}
