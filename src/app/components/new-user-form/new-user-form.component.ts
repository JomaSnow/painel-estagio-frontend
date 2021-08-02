import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectableOption } from 'src/app/interfaces/SelectableOption';

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
  perfil: number = 0;
  atende_a: number = 0;

  selectOptionsPerfil: SelectableOption[] = [
    {
      id: 1,
      name: 'Perilf1',
      selected: false,
    },
    {
      id: 2,
      name: 'Perilf2',
      selected: false,
    },
    {
      id: 3,
      name: 'Perilf3',
      selected: false,
    },
  ];

  selectOptionsAtendeA: SelectableOption[] = [
    {
      id: 1,
      name: 'Emp1',
      selected: false,
    },
    {
      id: 2,
      name: 'Emp2',
      selected: false,
    },
    {
      id: 3,
      name: 'Emp3',
      selected: false,
    },
    {
      id: 4,
      name: 'Emp4',
      selected: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    for (let p of this.selectOptionsPerfil) {
      if (p.selected) {
        this.perfil = p.id;
      }
    }
    for (let p of this.selectOptionsAtendeA) {
      if (p.selected) {
        this.atende_a = p.id;
      }
    }
  }

  saveUser() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      //salva
      this.router.navigateByUrl('/dashboard');
    }, 1500);
  }

  cancel() {
    this.router.navigateByUrl('/dashboard');
  }
}
