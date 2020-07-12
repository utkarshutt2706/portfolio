import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SnotifyModule, ToastDefaults, SnotifyService } from 'ng-snotify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderComponent } from './loader/loader.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProfileComponent,
        CertificationsComponent,
        EducationComponent,
        InterestsComponent,
        FooterComponent,
        ModalComponent,
        ResumeComponent,
        AboutComponent,
        PageNotFoundComponent,
        LoaderComponent,
        PrivacyComponent,
        TermsComponent,
        FaqComponent,
        ServicesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        SnotifyModule
    ],
    providers: [
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
        SnotifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
