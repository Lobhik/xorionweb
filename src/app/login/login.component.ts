import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.log("data", data);
      this.users = data;
    });
  }
  getUserFormData(data: any) {
    console.log(data)
    this.userData.saveUser(data).subscribe((result) => {
      console.log(result)
    })
  }

  ngOnInit(): void {
  }

}
