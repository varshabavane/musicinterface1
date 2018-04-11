import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  tracks: any;
  playing: boolean = true;
  currentTrack: any;
  progressInterval: any;

  constructor(public navCtrl: NavController) {
    this.tracks = [
      { title: "main rang sharbatonka", artist: "shahid", playing: 'assets\songs\ppnh.mp3', progress: 0 },
      { title: "phone me teri photo", artist: "neha kakkar", playing:'assets\songs\Pmtp.mp3' , progress: 0 },
      {
        title: "dhaga dhaga",
        artist: "pooja sawant",
        playing:'assets\songs\dhagadhaga.mp3',
        progress: 0
      },
      {
        title: "Tere sang yara",
        artist: "akshay",
        playing:'assets\songs\tere sang Yaara.mp3',
        progress: 0
      },
      {
        title: "rain Mashup",
        artist: "neha kakar",
        playing:'assets\songs\rainMashup.mp3',
        progress: 0
      }
    ];
    this.currentTrack = this.tracks[0];
  }

  playTrack(track) {
    for (let checkTrack of this.tracks) {
      if (checkTrack.playing) {
        this.pauseTrack(checkTrack);
      }
    }
    track.playing = true;
    this.currentTrack = track;
    this.progressInterval = setInterval(() => {
      track.progress < 100 ? track.progress++ : (track.progress = 0);
    }, 10000);
  }

  pauseTrack(track) {
    track.playing = false;
    clearInterval(this.progressInterval);
  }

  nextTrack() {
    let index = this.tracks.indexOf(this.currentTrack);
    index >= this.tracks.length - 1 ? (index = 0) : index++;
    this.playTrack(this.tracks[index]);
  }

  prevTrack() {
    let index = this.tracks.indexOf(this.currentTrack);
    index > 0 ? index-- : (index = this.tracks.length - 1);

    this.playTrack(this.tracks[index]);
  }
}
