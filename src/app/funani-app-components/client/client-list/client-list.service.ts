import { Client } from "../../../shared/client.model";
import { CLIENT } from "../../../shared/mock-client";
import { PROJECT } from "../../../shared/mock-project";
import { Project } from 'src/app/shared/project.model';
import { Subject } from 'rxjs';

export class clientListService{
    clientsChanged = new Subject<Client[]>();
    private client: Client[] = CLIENT;
    project: Project[] = PROJECT;

    constructor(){}

    getClient = () => {
        return this.client.slice();
    }

    addClent(client: Client, project: Project){
        this.client.push(client);
        this.clientsChanged.next(this.client.slice());
        this.project.push(project);
    }
    
    
}