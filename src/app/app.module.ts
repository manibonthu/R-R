import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ListGratitudeComponent } from './components/list-gratitude/list-gratitude.component';
import { ListRecognitionComponent } from './components/list-recognition/list-recognition.component';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { BirthdayEventComponent } from './components/birthday-event/birthday-event.component';
import { AnniversaryEventComponent } from './components/anniversary-event/anniversary-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/common.service';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListGratitudeComponent,
    ListRecognitionComponent,
    LoginComponent,
    ToolbarComponent,
    DashboardComponent,
    EventsComponent,
    BirthdayEventComponent,
    AnniversaryEventComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
