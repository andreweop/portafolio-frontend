import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService],
})
export class HomeComponent implements OnInit {
  public projects: Project[];
  public url: string;
  public title: string;
  public firstProject: string;

  constructor(
    private _projectService: ProjectService
  ) {
      this.url = Global.url;
      this.title = "Projects";
   }

  ngOnInit(): void {
    this.getProjects();
 

  }
  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        if(response.projects){
        this.projects = response.projects;
        
        this.sepreateProjects(this.projects);
        }

      },error =>{
        console.log(<any>error);
      }
    )
  }
  sepreateProjects(projects){
    this.firstProject = projects[0];
    console.log(this.firstProject);
    

  }
}
