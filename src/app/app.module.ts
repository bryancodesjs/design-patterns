import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { FactoryComponent } from './views/factory/factory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StrategyComponent } from './views/strategy/strategy.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FactoryComponent,
    StrategyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
