import { Component, OnInit, Input } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  faLock = faLock;
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() showLabel: boolean = true;
  @Input() required: boolean = false;
  @Input() passwordField: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
