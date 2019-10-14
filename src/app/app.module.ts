import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinkClassChangeDirective } from './link-class-change.directive';
import { WorkingScrollbarComponent } from './working-scrollbar/working-scrollbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkClassChangeDirective,
    WorkingScrollbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
