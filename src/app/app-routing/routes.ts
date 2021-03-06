import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'certificate/:id',     component: CertificatesComponent },
  { path: 'contactus',     component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];