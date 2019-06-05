import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../../../../shared/offer.model';


@Component({
  selector: 'app-offers-list-item',
  templateUrl: './offers-list-item.component.html',
  styleUrls: ['./offers-list-item.component.css']
})
export class OffersListItemComponent implements OnInit {
  @Input() offer: Offer;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
