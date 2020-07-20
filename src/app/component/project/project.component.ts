import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService],
})
export class ProjectComponent implements OnInit {
  public url: string;
  public project: Project; 
  public confirm: boolean;


  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm= false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;
      
      this.getProject(id);
    });
  }
  getProject(id){
    this._projectService.getProject(id).subscribe(
      response =>{
        console.log(response.project);
        this.project = response.project;
      },
      error => {
        console.log(<any>error)
      }
    )
  }
  setConfirm(confirm){
    this.confirm= confirm;
  }
  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        console.log(response.project);
        this._router.navigate(["/home"]);
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}

