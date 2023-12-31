import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShellComponent } from './shell/shell.component';

@Component({
  selector: 'score-root',
  standalone: true,
  imports: [CommonModule, ShellComponent],
  template: '<score-shell appTitle="{{title}}"></score-shell>',
})
export class AppComponent {
  public title = 'Angular 16 workshop';
}
