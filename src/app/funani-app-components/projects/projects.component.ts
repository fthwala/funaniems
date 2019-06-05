import { Component, OnInit} from '@angular/core';
import { ProjectService } from './project.service';

@Component({
    selector: 'app-projects-component',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css'],
    providers: [ProjectService]
})

export class projectsComponent implements OnInit{
    constructor(){}
    ngOnInit(){
    }
}