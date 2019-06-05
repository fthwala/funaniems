import { Client } from './client.model';
import { Offer } from './offer.model'

export class Project{
    public name: string;
    public client: string;
    public offer: string;
    public description: string;
    public date: Date;
    public imagePath: string

    constructor(name: string, client: string, offer: string, description: string, date: Date, imagePath: string){
        this.name = name;
        this.client = client;
        this.offer =offer;
        this.description =description;
        this.date = date;
        this.imagePath = imagePath;
    }
}