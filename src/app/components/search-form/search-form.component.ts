import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SelectableOption } from 'src/app/interfaces/SelectableOption';

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
  perfil: number = 0;
  status: number = 0;
  atende_a: number = 0;
  @Input() selectOptionsPerfil: SelectableOption[] = [];
  @Input() selectOptionsStatus: SelectableOption[] = [];
  @Input() selectOptionsAtendeA: SelectableOption[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    for (let p of this.selectOptionsPerfil) {
      if (p.selected) {
        this.perfil = p.id;
      }
    }
    for (let p of this.selectOptionsStatus) {
      if (p.selected) {
        this.status = p.id;
      }
    }
    for (let p of this.selectOptionsAtendeA) {
      if (p.selected) {
        this.atende_a = p.id;
      }
    }
  }

  newUser() {
    this.router.navigateByUrl('/user');
  }

  search() {
    console.log('perfil: ' + this.perfil);
    console.log('status: ' + this.status);
    console.log('atende a: ' + this.atende_a);
  }

  clear() {
    this.matricula = '';
    console.log('matricula: ' + this.matricula);
  }
}
