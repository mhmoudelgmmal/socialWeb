import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PanelService } from './../../services/panel.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  constructor(private panelServeice:PanelService,
    private _router:Router,
    private _ActivatedRoute:ActivatedRoute){}
    post!:any
  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params['id']
    this.getSinglePost(id)
  }
  getSinglePost(id:string){
    this.panelServeice.getSinglePost(id).subscribe(
      (res:any)=>{
        this.post = res
        console.log(res);

      }
    )
  }

}
