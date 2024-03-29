import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// MATERIAL IMPORTS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// APP IMPORTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactService } from './services/contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponentComponent } from './loading-component/loading-component.component';

// Register locale to FR.
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    LoadingComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
