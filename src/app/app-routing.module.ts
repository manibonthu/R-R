import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { ListGratitudeComponent } from './components/list-gratitude/list-gratitude.component';
import { ListRecognitionComponent } from './components/list-recognition/list-recognition.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/app/gratitude', pathMatch: 'full' },
      {
        path: 'gratitude',
        component: ListGratitudeComponent,
        pathMatch: 'full',
      },
      {
        path: 'recognition',
        component: ListRecognitionComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
