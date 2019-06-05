import { Component, OnInit } from '@angular/core';
import { Offer } from '../../../shared/offer.model';
import { OfferService } from '../offer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  offers: Offer[];
  constructor(private offerService: OfferService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.offers = this.offerService.getOffer();
  }

  onNewOffer = () => {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
