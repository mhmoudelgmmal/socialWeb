import { Component, OnInit } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPosts:Array<any> = new Array<any>
  displayStyle = "none";

  constructor(private panelServeice:PanelService,
              private _router:Router,
              ){}

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this.panelServeice.getAllPosts().subscribe(
      (res:any)=>{
        this.allPosts = res
        console.log(this.allPosts)
      },(error:any)=>{

      }
    )
  }
  DeletePost(id:string){
    debugger
    this.panelServeice.DeleteSinglePost(id).subscribe(
      (res:any)=>{
        console.log(res)
        this.closePopup()
        debugger
        let postIndex = this.allPosts.findIndex((post)=>post.id  == id)
        this.allPosts.splice(postIndex,1)
        console.log(postIndex)

      },(error)=>{
        console.log(error)
      }
    )
  }
  idOfDeletedPost!:any
  openPopup(id:string) {

    this.idOfDeletedPost = id
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
