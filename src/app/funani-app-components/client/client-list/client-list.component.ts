import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from '../../../shared/client.model';
import { CLIENT } from '../../../shared/mock-client';
import { Project } from '../../../shared/project.model';
import { PROJECT } from '../../../shared/mock-project'
import { Offer } from '../../../shared/offer.model';
import { OFFER } from '../../../shared/mock-offer';
import { clientListService } from './client-list.service';
import { OfferService } from '../../offers/offer.service';
import { ProjectService } from '../../projects/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnDestroy {

  offers: Offer[];
  clients: Client[];
  projects: Project[];
  private subsription: Subscription;

  constructor(
    private clientService: clientListService, 
    private offerService: OfferService, 
    private ProjectSevice: ProjectService) { }

  ngOnInit() {
    this.clients = this.clientService.getClient();
    this.subsription = this.clientService.clientsChanged.subscribe(
      (client: Client[]) => {
        this.clients = client;
      }
    );
    this.projects = this.ProjectSevice.getProjects();
    this.offers = this.offerService.getOffer();
  }

  ngOnDestroy(){
    this.subsription.unsubscribe();
  }

}
