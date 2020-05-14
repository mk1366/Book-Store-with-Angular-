import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewListComponent } from './view-list/view-list.component';
import { UpdateComponent } from './update/update.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDataService } from './book-data.service';
import { PageNotFoundComponent } from './header/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ViewBookComponent,
    ViewListComponent,
    UpdateComponent,
    AddBookComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
