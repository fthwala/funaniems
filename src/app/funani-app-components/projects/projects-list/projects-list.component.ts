import { Component, OnInit } from '@angular/core';
import { Project } from '../../../shared/project.model';
import { Client } from '../../../shared/client.model';
import {CLIENT } from '../../../shared/mock-client';
import { Offer } from '../../../shared/offer.model';
import { ProjectService } from "../project.service";
import { OfferService } from '../../offers/offer.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  cliants: Client[] = CLIENT;
  offers: Offer[];
  projects: Project[];

  constructor(private projectService: ProjectService, private offerService: OfferService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.offers = this.offerService.getOffer();
  }
 

}
