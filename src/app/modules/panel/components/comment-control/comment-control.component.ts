import { Component } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-control',
  templateUrl: './comment-control.component.html',
  styleUrls: ['./comment-control.component.css']
})
export class CommentControlComponent {
  allComments:any
  ShowComments!:Boolean
  constructor(private panelServeice:PanelService,
    private _router:Router,
    private _ActivatedRout:ActivatedRoute){}
    postId!:string
  ngOnInit(): void {
    this.postId = this._ActivatedRout.snapshot.params['id']
    this.getPostComments(this.postId)
    console.log("comments Works")
  }
  getPostComments(id:string){
    this.panelServeice.getPostComments(id).subscribe(
      (res)=>{
        debugger
        if (res.length > 0) {
          this.ShowComments = true
        this.allComments = res
        }else{
          this.ShowComments = false
        }

        console.log(res);

      },(error)=>{
        alert(error.message)
      }
    )
  }
}
