import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StandingService} from '../../services/standing.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  userList: [];
  userInfo: [];
  userHandleList = [];
  bdUsers = [];
  startIndex = 1;
  count = 500;
  contestId = 1354;
  showUnofficial = true;

  constructor(
    private standingService: StandingService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.startIndex = 1;
    this.count = 500;
    this.showUnofficial = true;
    this.getUserList();
  }

  getUserList() {
    this.userList = [];
    this.userInfo = [];
    this.userHandleList = [];
    this.standingService.getStandingsList(this.contestId, this.startIndex, this.count, this.showUnofficial).subscribe((response: any) => {
      this.userList = response.result.rows;
      this.userList.forEach((item: any) => {
        this.userHandleList.push(item.party.members[0].handle);
      });
      this.getUsersInfo();
    });
  }

  getUsersInfo() {
    this.standingService.getUserInfo(this.userHandleList.join(';')).subscribe((response: any) => {
      this.userInfo = response.result;
      this.userInfo.forEach((item: any, i: number) => {
        if (item.country === 'Bangladesh') {
          this.bdUsers.push(this.userList[i]);
        }
      });
      console.log(this.bdUsers);
    });
  }

  loadMorePost() {
    this.startIndex += this.count;
    this.getUserList();
  }
}
