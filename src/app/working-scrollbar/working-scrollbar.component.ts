import { Component, OnInit, Input, AfterViewInit,HostListener, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'working-scrollbar',
  templateUrl: './working-scrollbar.component.html',
  styleUrls: ['./working-scrollbar.component.css']
})
export class WorkingScrollbarComponent implements OnInit {
  containerWidth = '15px';
  containerHeight;
  thumbHeight;
  
  isMouseDown:boolean = false;
  isMouseIn:boolean = false;

  previousY = -1;
  currentY;
  thumbTop:string = '0px';
  constructor() {}

  ngOnInit() {
    this.containerHeight = this.convertToPx(this.getHeight());
    this.thumbHeight = this.convertToPx(this.getThumbHeight());
  }




  private getScrollableHeight() {
    console.log(document.documentElement.scrollHeight);
    console.log(window.innerHeight);

    var innerHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight

    return document.documentElement.scrollHeight - innerHeight
  }

  private getThumbHeight() {
    return parseInt(this.containerHeight.substr(0,this.containerHeight.length-2)) / 50;
  }

  private getHeight() {
    return document.documentElement.scrollHeight;
  }
  private convertToPx(input) {
    return input+'px';
  }

  onMouseDown(event) {
    console.log(event);
    this.isMouseIn = this.isMouseDown = true;
    this.previousY = event.pageY;
  }

  onMouseUp(event) {
    console.log(event);
    this.isMouseIn = this.isMouseDown = false;
  }

  onMouseMove(event) {
    if(this.isMouseDown ) {
    this.currentY = event.pageY;
    let diff = this.currentY > this.previousY?3:-3;
    this.thumbTop = this.convertToPx(this.convertPxToInt(this.thumbTop)+diff)
    console.log(this.thumbTop);
  }
  }

  onMouseIn(event) {
    this.isMouseIn = true;
    this.previousY = event.pageY;
  }

  onMouseOut(event) {
    this.isMouseDown = false;
  }

  @HostListener('window:scroll') onScroll(event) {
    console.log(window.scrollY);
  }

  private convertPxToInt(value:string) {
    return parseInt(value.substr(0,value.length-2))
  }

 
}
