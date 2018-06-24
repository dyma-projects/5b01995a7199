import { Directive, HostListener, HostBinding } from '@angular/core';
import { KeyEventsPlugin } from '@angular/platform-browser/src/dom/events/key_events';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding('style.color') hColor: string;
  @HostListener('window:keyup', ['$event'])
  keyUp(event) {
    console.log(event.key);
    switch (event.key) {
      case 'ArrowUp':
        this.hColor = 'red';
        break;
      case 'ArrowRight':
        this.hColor = 'green';
        break;
      case 'ArrowDown':
        this.hColor = 'pink';
        break;
      case 'ArrowLeft':
        this.hColor = 'black';
        break;
    }
  }
  constructor() {
    this.hColor = 'black';
  }
}
