import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseover') mouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');

  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

  }

}
