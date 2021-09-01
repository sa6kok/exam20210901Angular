import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { IPicture } from 'src/app/shared/interfaces/picture';

const PICTURES =  [
{name: 'The Best Beach',
 url: 'https://www.orientalescape.com/images/thailand/header/1900x800/phuket02.jpg'},
{name: 'The best Sunset',
url: 'https://i.pinimg.com/originals/b3/0a/8a/b30a8a2e813848087c7d22ed7ea0365a.jpg'},
];

@Component({selector: 'app-carousel-pause',
 templateUrl: './carousel-pause.component.html',
 styleUrls: ['./carousel-pause.component.scss'],
 })
export class CarouselPauseComponent {
  images: IPicture[] = PICTURES;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
