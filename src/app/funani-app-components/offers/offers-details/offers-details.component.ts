import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/offer.model';
import { OFFER } from "src/app/shared/mock-offer";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offers-list-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.css']
})
export class OffersListDetailsComponent implements OnInit {
  offers: Offer[] = OFFER;
  offer: Offer;

  id: number;
  constructor(private route: ActivatedRoute, 
    private offerService: OfferService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.offer= this.offerService.getOfferId(this.id);
        
        console.log(this.offers[0].imagePath);
      }
    );
  }

  onEditOffer = () => {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
