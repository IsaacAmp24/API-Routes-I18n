import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  options = [
    { path: '/home', title: 'toolbar.home'},
    { path: '/nursing/mental-state-exams', title: 'toolbar.mentalStateExams'},
  ]
}
