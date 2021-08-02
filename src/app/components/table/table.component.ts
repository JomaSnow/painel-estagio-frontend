import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import {
  faCaretRight,
  faCaretLeft,
  faForward,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;
  faForward = faForward;
  faBackward = faBackward;
  @Input() userList: User[] = [];

  constructor() {}

  ngOnInit(): void {}
}
