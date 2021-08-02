import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: NewUserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewUserComponent,
    LoginInputComponent,
    ButtonComponent,
    SpinnerComponent,
    NavbarComponent,
    HeaderComponent,
    TextInputComponent,
    SelectInputComponent,
    NewUserFormComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
