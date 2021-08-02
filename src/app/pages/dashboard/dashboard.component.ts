import { Component, OnInit } from '@angular/core';
import { SelectableOption } from 'src/app/interfaces/SelectableOption';

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

  constructor() {}

  ngOnInit(): void {}
}
