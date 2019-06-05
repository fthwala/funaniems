import { Client } from './client.model';
import { PROJECT } from './mock-project';
import { OFFER } from './mock-offer';

export const CLIENT : Client[] = [
    {campany:"Nkanyeli",name:"Sam",surname:"Makhunga",email:"sam@nkanyei.com",phone: 74, project:PROJECT[1].name, offer:OFFER[1].name},
    {campany:"Nkanyeli",name:"Sam",surname:"Makhunga",email:"sam@nkanyei.com",phone: 74, project:PROJECT[2].name, offer:OFFER[1].name},
]