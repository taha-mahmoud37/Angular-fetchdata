import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../usersdata.service';
import { Users } from './../users';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  data: any = new BehaviorSubject(null);
  userData: Users[] = [];
  errorMessage: string = '';
  term: string = '';
  isLoading: boolean = false;
  constructor(_UsersdataService: UsersdataService) {
    this.isLoading = true;
    _UsersdataService.getAllUsers().subscribe({
      next: (response) => {
        this.userData = response;
        this.data = undefined;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => (this.isLoading = false),
    });
  }

  ngOnInit(): void {}
  sortByName($event: Event): void {
    this.userData = this.userData.sort((a: any, b: any) => {
      return a.name.toLowerCase() - b.name.toLowerCase();
    });
    console.log(this.userData);
  }
  sortByName1($event: Event): void {
    this.userData = this.userData.sort((a: any, b: any) => {
      return b.name.toLowerCase() - a.name.toLowerCase();
    });
    console.log(this.userData);
  }
}
