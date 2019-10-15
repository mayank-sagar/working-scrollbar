import { Component, OnInit, Input, AfterViewInit,HostListener, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'working-scrollbar',
  templateUrl: './working-scrollbar.component.html',
  styleUrls: ['./working-scrollbar.component.css']
})
export class WorkingScrollbarComponent implements OnInit {
  containerWidth = '20px';
  containerHeight;
  thumbHeight;
  
  isMouseDown:boolean = false;
  isMouseIn:boolean = false;

  previousY = -1;
  previousDiff = 0;
  currentY;
  thumbTop:string = '0px';
  private prevThumbTop:number = 0;

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
    this.isMouseDown = true;
    this.previousY = event.pageY;
    this.previousDiff = 0;
  }

  onMouseUp(event) {
    console.log(event);
    this.isMouseDown = false;
  }

  onMouseMove(event) {
    if(this.isMouseDown) {
        this.currentY = event.pageY;
        let currentDiff = (this.currentY - this.previousY) ; 
        let thumbDistance = null;
        if ( (thumbDistance = this.computerThumbTop(currentDiff)) != null && 
          ((this.convertPxToInt(thumbDistance) + 
          this.convertPxToInt(this.thumbHeight)) 
          <= this.convertPxToInt(this.containerHeight)) && 
          this.convertPxToInt(thumbDistance)  >= 0 )
          
      {
      
      
        this.thumbTop =  this.computerThumbTop(currentDiff);
        this.previousDiff = currentDiff ;
       // document.documentElement.scrollTo(0,document.documentElement.clientHeight+this.convertPxToInt(this.thumbTop))
        //console.log('client height',document.documentElement.clientHeight)
      }
    }
  }

  computerThumbTop(currentDiff) {
    return this.convertToPx(
      this.convertPxToInt(this.thumbTop) + 
      (currentDiff  - this.previousDiff))
  }

  onMouseIn(event) {
  }

  onMouseOut(event) {
    this.isMouseDown=false;
  }

  @HostListener('window:scroll') onScroll(event) {
    console.log(window.scrollY);
  }

  private convertPxToInt(value:string) {
    return parseInt(value.substr(0,value.length-2))
  }
}
