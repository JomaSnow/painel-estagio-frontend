import { Component, OnInit, Input } from '@angular/core';
import { SelectableOption } from 'src/app/interfaces/SelectableOption';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
})
export class SelectInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() showLabel: boolean = true;
  @Input() required: boolean = false;
  @Input() selectOptions: SelectableOption[] = [];

  constructor() {}

  ngOnInit(): void {}
}
