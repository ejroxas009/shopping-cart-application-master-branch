import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public searchTerm !: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  search(event:any){
    this.searchTerm = (event.target).value;
    console.log(this.searchTerm);
    this.userService.search.next(this.searchTerm);
  }

}
