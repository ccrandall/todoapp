import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    public pageName: string = '';
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.pageName = this.router.url;
    }
}