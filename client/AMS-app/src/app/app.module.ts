import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AlertMsgComponent } from './user-form/alert-msg/alert-msg.component';
import { LogInOutComponent } from './log-in-out/log-in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    NavbarComponent,
    AlertMsgComponent,
    LogInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
