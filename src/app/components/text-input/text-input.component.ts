import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() showLabel: boolean = true;
  @Input() required: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
