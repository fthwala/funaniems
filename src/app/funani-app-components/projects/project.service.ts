import { PROJECT } from "../../shared/mock-project";
import { Project } from "../../shared/project.model";
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService{
   private project: Project[] = PROJECT;

   getProjects = () => {
    return this.project.slice();
   }

   getProjectId = (id: number) =>{
      return this.project[id];
  }
}