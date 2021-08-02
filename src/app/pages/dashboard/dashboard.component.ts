import { Component, OnInit } from '@angular/core';
import { SelectableOption } from 'src/app/interfaces/SelectableOption';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectOptionsPerfil: SelectableOption[] = [
    {
      id: 1,
      name: 'Perilf1',
      selected: false,
    },
    {
      id: 2,
      name: 'Perilf2',
      selected: true,
    },
    {
      id: 3,
      name: 'Perilf3',
      selected: false,
    },
  ];
  selectOptionsStatus: SelectableOption[] = [
    {
      id: 1,
      name: 'Ativo',
      selected: true,
    },
    {
      id: 2,
      name: 'Inativo',
      selected: true,
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
      selected: true,
    },
  ];

  userList: User[] = [
    {
      id: 1,
      nome: 'Joao',
      atende_a: 1,
      cnpj: '35621873512361',
      empresa: 1,
      fonetico: 'fonetico',
      matricula: '3213123',
      perfil: 1,
      razao_social: 'razao',
      setor: 'vendas',
      status: 1,
      ultimo_acesso: '2021-08-01',
    },
    {
      id: 2,
      nome: 'Elaine',
      atende_a: 1,
      cnpj: '35621873512361',
      empresa: 1,
      fonetico: 'fonetico',
      matricula: '3213123',
      perfil: 1,
      razao_social: 'razao',
      setor: 'tecnologia',
      status: 1,
      ultimo_acesso: '2021-08-01',
    },
    {
      id: 3,
      nome: 'Francisco',
      atende_a: 1,
      cnpj: '35621873512361',
      empresa: 1,
      fonetico: 'fonetico',
      matricula: '3213123',
      perfil: 1,
      razao_social: 'razao',
      setor: 'vendas',
      status: 2,
      ultimo_acesso: '2021-08-01',
    },
    {
      id: 4,
      nome: 'Mariah',
      atende_a: 1,
      cnpj: '35621873512361',
      empresa: 1,
      fonetico: 'fonetico',
      matricula: '3213123',
      perfil: 1,
      razao_social: 'razao',
      setor: 'direito',
      status: 1,
      ultimo_acesso: '2021-08-01',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
