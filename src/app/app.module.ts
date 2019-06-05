import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OffersListComponent } from './funani-app-components/offers/offers-list/offers-list.component';
import { offersComponent } from './funani-app-components/offers/offers.component';
import { OffersListItemComponent } from './funani-app-components/offers/offers-list/offers-list-item/offers-list-item.component';
import { OffersListDetailsComponent } from './funani-app-components/offers/offers-details/offers-details.component';
import { ClientListComponent } from './funani-app-components/client/client-list/client-list.component';
import { ClientListEditComponent } from './funani-app-components/client/client-list/client-edit/client-edit.component';
import { ProjectListDetailsComponent } from './funani-app-components/projects/project-details/project-details.component';
import { ProjectsListItemComponent } from './funani-app-components/projects/projects-list/projects-list-item/projects-list-item.component';
import { ProjectsListComponent } from './funani-app-components/projects/projects-list/projects-list.component';
import { headerComponent } from './header/header.component';
import { projectsComponent } from './funani-app-components/projects/projects.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProjectService } from "./funani-app-components/projects/project.service";
import { OfferService } from './funani-app-components/offers/offer.service';
import { clientListService } from './funani-app-components/client/client-list/client-list.service';
import { appRoutingModule } from './app-routing.module';
import { OfferStartComponent } from './funani-app-components/offers/offer-start/offer-start.component';
import { ProjectStarrComponent } from './funani-app-components/projects/project-starr/project-starr.component';
import { OfferEditComponent } from './funani-app-components/offers/offer-edit/offer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersListComponent,
    OffersListItemComponent,
    OffersListDetailsComponent,
    ClientListComponent,
    ClientListEditComponent,
    ProjectListDetailsComponent,
    ProjectsListItemComponent,
    ProjectsListComponent,
    headerComponent,
    projectsComponent,
    offersComponent,
    DropdownDirective,
    OfferStartComponent,
    ProjectStarrComponent,
    OfferEditComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [ProjectService, OfferService, clientListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
