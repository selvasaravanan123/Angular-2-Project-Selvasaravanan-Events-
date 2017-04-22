import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { EditeventComponent } from './components/editevent/editevent.component';

const APP_ROUTES : Routes = [

    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'events', component:EventsComponent},
    {path:'event/:id', component:EventComponent},
    {path:'add-events', component:AddeventComponent},
    {path:'edit-event/:id', component:EditeventComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);