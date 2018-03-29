import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:no-unused-expression
import {Component} from '@angular/core';
import { MatTooltipModule } from '@angular/material';
import { importType } from '@angular/compiler/src/output/output_ast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared';
import {  HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { SearchFilterPipe } from './shared/filter-pipe';
import { ClickOutsideDirective } from './shared/dropdown.directive';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { YogaComponent } from './yoga/yoga.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { DietplannerComponent } from './dietplanner/dietplanner.component';
import { RecepieComponent } from './recepie/recepie.component';
import { ShareModule } from '@ngx-share/core';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtons } from '@ngx-share/core';
import {AuthService} from './services/auth.service';
import {SubscribeService} from './services/subscribe.service';
import {FeedbackService} from './services/feedback.service';
import {CaloriemeterService} from './services/caloriemeter.service';
import { ViewfoodService } from './services/viewfood.service';
import { CaloriemeterComponent } from './caloriemeter/caloriemeter.component';
import { TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



const appRoutes: Routes = [
{ path: 'exsi', component: ExerciseComponent},
{ path: 'yoga', component: YogaComponent},
{ path: '', component: HomeComponent},
{ path: '', component: FooterComponent},
{ path: 'bmi', component: BmiComponent},
{ path: 'login', component: LoginComponent},
{ path: 'registration', component: RegistrationComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'planner', component: DietplannerComponent},
{ path: 'recepie', component:  RecepieComponent},
{ path: 'caloriemeter', component:  CaloriemeterComponent},




// tslint:disable-next-line:semicolon
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseComponent,
    YogaComponent,
    FooterComponent,
    BmiComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    DietplannerComponent,
    RecepieComponent,
    CaloriemeterComponent,
    AppComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    LetterBoldPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeR2XlYu00X-ToT0E4n7AxtV6CP89PMX4'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ShareModule.forRoot(),
    HttpClientModule,
  ],
  providers: [AuthService, ApiService, SubscribeService, FeedbackService, TranslateService, ViewfoodService, CaloriemeterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
