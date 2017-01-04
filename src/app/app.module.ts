import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { TestAction } from './test-action.service';
import { InnerComponent } from './inner/inner.component';

export function testActionFactory(http: Http){ return new TestAction(http); }

@NgModule({
  declarations: [
    AppComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{ provide: TestAction, useFactory: testActionFactory, deps: [Http] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
