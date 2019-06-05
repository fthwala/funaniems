import { Project } from './project.model';
import { CLIENT } from './mock-client';
import { Client } from './client.model';
import { Offer } from './offer.model'

export const PROJECT : Project[] = [
    {name: "Sebokeng", client: Client.name, offer: Offer.name, description: "This EIA is per regulation of RSA", date: new Date('1995-12-17T03:24:00'), imagePath: "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"},
    {name: "Fahad", client: Client.name, offer: Offer.name, description: "This Moniterring is per regulation of RSA", date: new Date('1995-12-17T03:24:00'), imagePath: "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"},
    {name: "Emendo", client: Client.name, offer: Offer.name, description: "This Basic Assement is per regulation of RSA", date: new Date('1995-12-17T03:24:00'), imagePath: "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"},
]