import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomHover]'
})
export class CustomHoverDirective {

  @Input() public appCustomHover: string = ''

  private defaultColor: string

  constructor(private elementRef: ElementRef<HTMLParagraphElement>) {
    this.defaultColor = this.elementRef.nativeElement.style.backgroundColor || 'transparent'
  }

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.appCustomHover || 'yellow'
  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.defaultColor
  }
}
