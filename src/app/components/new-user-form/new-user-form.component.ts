import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent implements OnInit {
  nome: string = '';
  matricula: string = '';
  fonetico: string = '';
  senha: string = '';
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveUser() {
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
      //salva
      this.router.navigateByUrl('/dashboard');
    }, 1500);
  }

  cancel() {
    this.router.navigateByUrl('/dashboard');
  }
}
