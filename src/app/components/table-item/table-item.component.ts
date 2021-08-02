import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import {
  faSearch,
  faEdit,
  faCheck,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css'],
})
export class TableItemComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faCheck = faCheck;
  faTrashAlt = faTrashAlt;
  @Input() item: User = {
    id: 0,
    nome: 'carregando...',
    atende_a: 0,
    cnpj: 'carregando...',
    empresa: 0,
    fonetico: 'carregando...',
    matricula: 'carregando...',
    perfil: 0,
    razao_social: 'carregando...',
    setor: 'carregando...',
    status: 0,
    ultimo_acesso: 'carregando...',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showInfo() {
    alert(JSON.stringify(this.item));
  }

  edit() {
    this.router.navigateByUrl(`/user/${this.item.id}`);
  }

  toggleStatus() {
    if(this.item.status===1){
      this.item.status=2;
    }else{
      this.item.status=1;
    }
  }

  delete() {
    if (confirm('Deseja mesmo excluir usuário ' + this.item.nome + '?')) {
      //deleta
      console.log('Deletou id: ' + this.item.id);
    }
  }
}
