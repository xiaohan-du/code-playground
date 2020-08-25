import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ClickEventComponent } from './click-event/click-event.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    NgForComponent,
    ClickEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
