import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  user = {
    email: '',
    password: '',
    displayName: '',
    photoURL: ''
  }
  edit_profile() {
    this.authService.updateUserData(this.user.displayName, this.user.photoURL);
  }
  ngOnInit() {
  }

}
