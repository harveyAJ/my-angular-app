import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info-display.component.html',
  styleUrl: './user-info-display.component.css'
})
export class UserInfoDisplayComponent implements OnInit {
  info: any = {};
  isLoading: boolean = true;
  constructor(
    private userInfoSvc: UserInfoService
  ) {
  }
  ngOnInit(): void {
    this.userInfoSvc.loadData().subscribe(x => {
      console.log(x);
      this.info = x;
    });
    this.isLoading = false;
  }
}