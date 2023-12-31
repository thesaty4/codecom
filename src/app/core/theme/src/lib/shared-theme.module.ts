import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoaderComponent, NavbarComponent],
  exports: [LoaderComponent, NavbarComponent],
})
export class SharedThemeModule {}
