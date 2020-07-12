import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'terms',
        component: TermsComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'privacy',
        component: PrivacyComponent
    },
    {
        path: '**',
        redirectTo: '404'
    },
    {
        path: '404',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
