import { Component } from '@angular/core';
import { NavbarComponent } from '../../../theme/src/lib/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'codecom-pages',
  standalone: true,
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
  imports: [NavbarComponent, RouterModule],
})
export class PagesComponent {}
