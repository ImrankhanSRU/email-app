import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LabelComponent } from './components/label/label.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DetailsComponent } from './components/details/details.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { ComposeMailComponent } from './components/compose-mail/compose-mail.component';
import { ViewMailComponent } from './components/view-mail/view-mail.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard'
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: HeaderComponent, canActivate: [AuthGuard] }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LabelComponent,
    DetailsComponent,
    InboxComponent,
    MailListComponent,
    ComposeMailComponent,
    ViewMailComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
