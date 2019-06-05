import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { Project } from 'src/app/shared/project.model';
import { clientListService } from '../client-list.service';
import { OfferService } from 'src/app/funani-app-components/offers/offer.service';
import { Offer } from 'src/app/shared/offer.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-list-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientListEditComponent implements OnInit {
  @ViewChild('clientNameInput') clientNameInputRef: ElementRef;
  @ViewChild('clientSurnameInput') clientSurnameInputRef: ElementRef;
  @ViewChild('companyInput') companyInputRef: ElementRef;
  @ViewChild('emailInput') emailInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;
  @ViewChild('projectNameInput') projectNameInputRef: ElementRef;
  @ViewChild('projectDescriptionInput') projectDescriptionInputRef: ElementRef;
  @ViewChild('yearInput') yearInputRef: ElementRef;
  @ViewChild('offerNameInput') offerNameInputRef: ElementRef;
  offerValue= '';
  constructor(private clientService: clientListService, private offerService: OfferService) { }

  ngOnInit() {
  }

  offers: Offer[] = this.offerService.getOffer();

  onSelect = () => {
    this.offerValue = this.offerNameInputRef.nativeElement.value;
  }

  onAddItem(){
    const cliName = this.clientNameInputRef.nativeElement.value;
    const cliSurname = this.clientSurnameInputRef.nativeElement.value;
    const campany = this.companyInputRef.nativeElement.value;
    const email = this.emailInputRef.nativeElement.value;
    const phone = this.phoneInputRef.nativeElement.value;
    const projectName = this.projectNameInputRef.nativeElement.value;
    const projectDescription = this.projectDescriptionInputRef.nativeElement.value;
    const year = this.yearInputRef.nativeElement.value;
    const imagePath = "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg";
    const offerName = 'eia'
    const newProject = new Project(projectName, cliName, offerName, projectDescription, year, imagePath,);
    const newClient = new Client(cliName, cliSurname, campany, email, phone, projectName, offerName);
    this.clientService.addClent(newClient, newProject);
    //console.log(this.offers);
  }

}
