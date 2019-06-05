import { Component, OnInit } from '@angular/core';
import { Offer } from '../../shared/offer.model'
import { OfferService } from './offer.service';
@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css'],
    providers: [OfferService]
})

export class offersComponent implements OnInit{
    offer: Offer[] = [];
    constructor(){

    }
    ngOnInit(){
    }
}