import { OFFER } from "../../shared/mock-offer";
import { Offer } from "../../shared/offer.model";
import { Injectable } from '@angular/core';

@Injectable()
export class OfferService{
    //offerSelected = new EventEmitter<Offer>();
    private offer: Offer[] = OFFER;

    getOffer = () => {
        return this.offer.slice();
    }

    getOfferId = (id: number) =>{
        return this.offer[id];
    }
}