import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { WebsocketServiceService } from './services/websocket-service.service';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, ChartsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgChartsModule],
  providers: [WebsocketServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
