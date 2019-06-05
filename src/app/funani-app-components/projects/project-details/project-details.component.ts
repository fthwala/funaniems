import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.model';
import { OFFER } from 'src/app/shared/mock-offer';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service';
import { PROJECT } from 'src/app/shared/mock-project';

@Component({
  selector: 'app-project-list-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectListDetailsComponent implements OnInit {
  projects: Project[] = PROJECT;
  project: Project;
  id: number;
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.project = this.projectService.getProjectId(this.id);
      }
    )
  }

}
