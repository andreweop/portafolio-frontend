import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WorkComponent } from './component/work/work.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { ProjectComponent } from './component/project/project.component';
import { CreateComponent } from './component/create/create.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"work", component: WorkComponent},
  {path:"contact", component: ContactComponent},
  {path:"create", component: CreateComponent},
  {path:"project/:id", component: ProjectComponent},
  {path:"**", component: ErrorComponent},
 
  
];
export const AppRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);