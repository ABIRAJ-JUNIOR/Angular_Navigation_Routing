import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // default route
    { path: 'about', component: AboutComponent },
    { path: 'contact/:id', component: ContactComponent , canActivate: [authGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404 page
];
