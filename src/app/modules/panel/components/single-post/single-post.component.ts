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
    allPosts:any
  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params['id']
    if (this.panelServeice.allPosts.value == null) {
      this.getSinglePost(id)
    }else{
      debugger
      this.allPosts = this.panelServeice.getAllPostsArray()
      for (let i = 0; i < this.allPosts.length; i++) {
        if (this.allPosts[i].id == id) {
          this.post = this.allPosts[i]
        }
      }
      // this.post = this.allPosts.filter((post:any)=>post.id == id)
    }
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
