import { Component, OnInit, Input } from '@angular/core';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css'],
})
export class LoginInputComponent implements OnInit {
  @Input() isPassword: boolean = false;
  @Input() label: string = "";
  @Input() name: string = "";
  faKey = faKey;
  faUser = faUser;

  constructor() {}

  ngOnInit(): void {}
}
