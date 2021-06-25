import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageDialogComponent } from './shared/message-dialog/message-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [MessageDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
