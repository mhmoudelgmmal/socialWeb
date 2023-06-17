import { Component, OnInit } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  allComments:any
  constructor(private panelServeice:PanelService,
    private _router:Router,){}

  ngOnInit(): void {

  }
  getComments(){
    this.panelServeice.getAllComments().subscribe(
      (res)=>{
        this.allComments = res
      },(error)=>{

      }
    )
  }
}
