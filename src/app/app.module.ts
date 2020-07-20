import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, AppRoutingProviders } from './app.routing';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { WorkComponent } from './component/work/work.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { ProjectComponent } from './component/project/project.component';
import { CreateComponent } from './component/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    ProjectComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
