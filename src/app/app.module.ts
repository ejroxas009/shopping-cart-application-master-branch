import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> master


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
