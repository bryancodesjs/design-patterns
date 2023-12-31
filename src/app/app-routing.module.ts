import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FactoryComponent } from './views/factory/factory.component';
import { StrategyComponent } from './views/strategy/strategy.component';
import { DecoratorComponent } from './views/decorator/decorator.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'decorator', component: DecoratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
