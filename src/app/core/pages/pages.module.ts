import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing.module';
import { SharedThemeModule } from '../theme/src';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule, SharedThemeModule],
})
export class PagesModule {}
