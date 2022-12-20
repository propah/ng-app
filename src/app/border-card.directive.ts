import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective implements OnInit {

  @Input('appBorderCard') borderColor?: string;
  private initColor: string = 'grey';
  private defaultColor: string = 'green';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.setBorderColor(this.initColor);
    this.setHeight(this.defaultHeight);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(this.initColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorderColor(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
