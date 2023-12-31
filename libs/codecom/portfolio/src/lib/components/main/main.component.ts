import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-main',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
