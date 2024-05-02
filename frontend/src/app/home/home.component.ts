import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  ngAfterViewInit(): void {
    this.loadVideo();
  }
  loadVideo() {
    const videoElement: HTMLVideoElement = this.videoPlayer.nativeElement;
    videoElement.src = '../../assets/Success.mp4';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
  }
}
