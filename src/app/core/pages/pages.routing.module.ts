import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Route[] = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@codecom/codecom/portfolio/src').then((m) => m.CodecomPortfolioModule),
      },
      // Other routes goes here...
      // {
      //   path: 'hello',
      //   component: PageNotFoundComponent,
      // },
    ],
  },
  { path: '**', redirectTo: '404' },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
