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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LabelComponent,
    DetailsComponent,
    InboxComponent,
    MailListComponent,
    ComposeMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
