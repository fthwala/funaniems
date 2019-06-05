import { Project } from './project.model';
import { Offer } from './offer.model';
export class Client{
    public name: string;
    public surname: string;
    public campany: string;
    public email: string;
    public phone: number;
    public project: string;
    public offer: string;

    constructor(name: string, surname: string, campany: string, email: string, phone: number, project: string, offer: string){
        this.name = name;
        this.surname =surname;
        this.campany = campany;
        this.email = email;
        this.phone = phone;
        this.project = project;
        this.offer = offer;
    }
}