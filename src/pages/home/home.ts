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
      { title: "hi", artist: "odesza", playing: false, progress: 0 },
      { title: "hello", artist: "abcd", playing: false, progress: 0 },
      {
        title: "HyperParadise",
        artist: "Hermitude",
        playing: false,
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
