import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Media, MediaObject } from "@ionic-native/media";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  music: MediaObject;
  tracks: any;
  playing: boolean = true;
  currentTrack: any;
  progressInterval: any;

  constructor(public navCtrl: NavController, private media: Media) {
    this.tracks = [
      {
        title: "main rang sharbatonka",
        artist: "shahid",
        playing: false,
        progress: 0,
        songPath:'/android_asset/www/assets/songs/ppnh.mp3',
        img:'/android_asset/www/assets/imgs/deepika.jpg'
      },
      {
        title: "phone me teri photo",
        artist: "neha kakkar",
        playing: false,
        progress: 0,
        songPath:'/android_asset/www/assets/songs/pmtp.mp3',
        img:'/android_asset/www/assets/imgs/deepika.jpg'
      },
      {
        title: "dhaga dhaga",
        artist: "pooja sawant",
        playing: false,
        progress: 0,
        songPath:'/android_asset/www/assets/songs/dhagadhaga.mp3',
        img:'/android_asset/www/assets/imgs/deepika.jpg'
      },
      {
        title: "Tere sang yara",
        artist: "akshay",
        playing: false,
        progress: 0,
        songPath:'/android_asset/www/assets/songs/rainMashup.mp3',
        img:'/android_asset/www/assets/imgs/1.jpg'
      },
      {
        title: "rain Mashup",
        artist: "neha kakar",
        playing: false,
        progress: 0,
        songPath:'/android_asset/www/assets/songs/Tere Sang Yaara - 320Kbps.mp3',
        img:'/android_asset/www/assets/imgs/ranbir.jpg'
      }
    ];
    this.currentTrack = this.tracks[0];
  }

  playTrack(track) {
    //this.music=this.media.create(this.currentTrack)
    for (let checkTrack of this.tracks) {
      if (checkTrack.playing) {
        this.pauseTrack(checkTrack);
      }
    }
    track.playing = true;
    this.currentTrack = track;
    this.music=this.media.create(this.currentTrack.songPath);
    this.music.play();
    this.progressInterval = setInterval(() => {
      track.progress < 100 ? track.progress++ : (track.progress = 0);
    }, 10000);
  }

  pauseTrack(track) {
    track.playing = false;
    this.music.pause();
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
