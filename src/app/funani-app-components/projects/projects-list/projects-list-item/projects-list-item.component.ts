import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/shared/project.model';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.css']
})
export class ProjectsListItemComponent implements OnInit {

  @Input() project: Project;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
