
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() thisGame: {appid: number, has_community_visible_stats: boolean, img_icon_url: string, img_logo_url: string, 
    name: string, news: {appnews: {appid: number, count: number, newsitems}}, playtime_forever: number, playtime_linux_forever: number, playtime_mac_forever: number,
    playtime_windows_forever: number }; 


  @Output() exit = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.thisGame)
    console.log(this.thisGame[0].img_logo_url)
  }

  onExit(){
    this.exit.emit("library")
  }

}
