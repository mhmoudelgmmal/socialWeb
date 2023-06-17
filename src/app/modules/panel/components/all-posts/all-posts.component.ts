import { Component, OnInit } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPosts:any
  displayStyle = "none";

  constructor(private panelServeice:PanelService,
              private _router:Router,
              ){}

  ngOnInit(): void {
    debugger
    if (this.panelServeice.allPosts.value == null) {
      this.getAllPosts()
    }else{
      this.allPosts = this.panelServeice.getAllPostsArray()
    }
  }

  getAllPosts(){
    this.panelServeice.getAllPosts().subscribe(
      (res:any)=>{
        this.allPosts = res
        this.panelServeice.setAllPostsArray(this.allPosts)
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
        let postIndex = this.allPosts.findIndex((post:any)=>post.id  == id)
        this.allPosts.splice(postIndex,1)
        this.panelServeice.setAllPostsArray(this.allPosts)
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
