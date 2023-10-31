import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FactoryComponent } from './views/factory/factory.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'factory', component: FactoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
