import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraryData: any;

  @Output() selectedGame = new EventEmitter<{appid: number, has_community_visible_stats: boolean, img_icon_url: string, img_logo_url: string, 
    name: string, news: {appnews: {appid: number, count: number, newsitems}}, playtime_forever: number, playtime_linux_forever: number, playtime_mac_forever: number,
    playtime_windows_forever: number }>();


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/library_data.json").subscribe(data =>{
      console.log(data);
      this.libraryData = data["response"]["games"];
      console.log(this.libraryData);
    })
  }

  onSelectedGame(game){
    this.selectedGame.emit(game);
    
  }


}
