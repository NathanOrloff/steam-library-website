import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.css']
})
export class LibraryCardComponent implements OnInit {

  @Input() game: {appid: number, has_community_visible_stats: boolean, img_icon_url: string, img_logo_url: string, 
                  name: string, news: {appnews: {appid: number, count: number, newsitems}}, playtime_forever: number, playtime_linux_forever: number, playtime_mac_forever: number,
                  playtime_windows_forever: number } ;
  
  @Output() gameSelected = new EventEmitter<{appid: number, has_community_visible_stats: boolean, img_icon_url: string, img_logo_url: string, 
    name: string, news: {appnews: {appid: number, count: number, newsitems}}, playtime_forever: number, playtime_linux_forever: number, playtime_mac_forever: number,
    playtime_windows_forever: number }>();
  



  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  onSelected(){
    this.gameSelected.emit(this.game);
    
  }

}
