import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCogs,
  faSignOutAlt,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faCogs = faCogs;
  faSignOutAlt = faSignOutAlt;
  faHeadset = faHeadset;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isOnDashboard(): boolean {
    if (this.router.url === '/dashboard') {
      return true;
    }
    return false;
  }

  handleClick() {
    if (this.isOnDashboard()) {
      this.router.navigateByUrl('/user');
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }

  signOut() {
    if (confirm('Tem certeza que gostaria de sair do portal?')) {
      // signout
      this.router.navigateByUrl('/');
    }
  }
}
