import { Component, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faComment = faComment;
  faUserCircle = faUserCircle;

  constructor() {}

  ngOnInit(): void {}
}
