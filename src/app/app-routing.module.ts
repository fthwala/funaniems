import { Routes, RouterModule } from "@angular/router";
import { ClientListComponent } from "./funani-app-components/client/client-list/client-list.component";
import { offersComponent } from "./funani-app-components/offers/offers.component";
import { projectsComponent } from "./funani-app-components/projects/projects.component";
import { NgModule } from '@angular/core';
import { OfferStartComponent } from './funani-app-components/offers/offer-start/offer-start.component';
import { ProjectStarrComponent } from './funani-app-components/projects/project-starr/project-starr.component';
import { OffersListDetailsComponent } from './funani-app-components/offers/offers-details/offers-details.component';
import { ProjectListDetailsComponent } from './funani-app-components/projects/project-details/project-details.component';
import { OfferEditComponent } from './funani-app-components/offers/offer-edit/offer-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'clients', pathMatch: 'full'},
    {path: 'clients', component: ClientListComponent},
    {path: 'offers', component: offersComponent, children: [
        {path: '', component: OfferStartComponent},
        {path: 'new', component: OfferEditComponent},
        {path: ':id', component: OffersListDetailsComponent},
        {path: ':id/edit', component: OfferEditComponent}
    ]},
    {path: 'projects', component: projectsComponent, children: [
        {path: '', component: ProjectStarrComponent},
        {path: ':id', component: ProjectListDetailsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class appRoutingModule {

}