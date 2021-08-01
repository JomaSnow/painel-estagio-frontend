import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMsg: string = '';
  loading: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  errorValidation(): boolean {
    if (this.username.length < 2) {
      this.errorMsg = 'Ocorreu um erro.';
      return true;
    }
    return false;
  }

  handleSubmit() {
    this.loading = true;
    this.errorMsg = '';
    setTimeout(() => {
      this.loading = false;
      if (this.errorValidation()) {
        return;
      }
      if (this.password === '123456') {
        this.router.navigateByUrl('/dashboard');
      }
    }, 1000);
  }
}
