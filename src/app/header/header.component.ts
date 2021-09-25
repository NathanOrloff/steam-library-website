import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  libraryData: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data/library_data.json").subscribe(data =>{
      console.log(data);
      this.libraryData = data["response"];
      console.log(this.libraryData);
    })
  }

  
}
