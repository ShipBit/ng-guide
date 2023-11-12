import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'score-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export default class SettingsComponent {}