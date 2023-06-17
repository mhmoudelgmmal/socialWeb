import { Component, OnInit } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit {
  allPosts:any
  constructor(private panelServeice:PanelService){}

  ngOnInit(): void {

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
        console.log(this.allPosts)
      },(error:any)=>{
        alert(error.message)
      }
    )
  }

}
