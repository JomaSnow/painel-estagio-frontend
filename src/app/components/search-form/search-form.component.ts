import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  admin: string = '';
  matricula: string = '';
  fonetico: string = '';
  nome: string = '';
  setor: string = '';
  cnpj: string = '';
  razao: string = '';
  perfil: string = '';
  status: string = '';
  atende_a: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  newUser() {
    this.router.navigateByUrl('/user');
  }

  search() {
    console.log('matricula: ' + this.matricula);
  }

  clear() {
    this.matricula = '';
    console.log('matricula: ' + this.matricula);
  }
}
