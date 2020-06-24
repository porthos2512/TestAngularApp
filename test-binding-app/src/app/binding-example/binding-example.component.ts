import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css'],
})
export class BindingExampleComponent implements OnInit {
  username = '';
  enableButton = false;
  constructor() {}

  ngOnInit(): void {}

  onClearClick() {
    this.username = '';
  }
}
