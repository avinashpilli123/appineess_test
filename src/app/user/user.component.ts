import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  pageTitle="Git List";
  search: string = "";
  user: Array<any>;
  constructor(private http: HttpClient) { }
  urlRef = 'https://api.github.com/users?since=XXX';

  ngOnInit() {
    this.http.get(this.urlRef).subscribe((Data: any) => this.user = Data);
  }

}
