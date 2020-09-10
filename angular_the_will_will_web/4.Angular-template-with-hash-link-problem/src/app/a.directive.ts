import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[href="#"]'
})
export class ADirective {
  @HostListener('click', ['$event'])
  onClick(e) {
    e.preventDefault();
  }
}
