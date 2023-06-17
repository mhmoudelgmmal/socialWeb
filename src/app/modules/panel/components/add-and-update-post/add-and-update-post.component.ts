import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-add-and-update-post',
  templateUrl: './add-and-update-post.component.html',
  styleUrls: ['./add-and-update-post.component.css']
})
export class AddAndUpdatePostComponent implements OnInit {
  isAdd?:Boolean;
  isValid:boolean = false
  addAndUpdateForm!:FormGroup
  id!:string
  allPosts:any
  post:any
  constructor(private _router:Router,
              private _ActivatedRoute:ActivatedRoute,
              private panelService:PanelService){}
  initForm(){
    this.addAndUpdateForm = new FormGroup({
      title: new FormControl('',Validators.required),
      body: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
    debugger
    this.id = this._ActivatedRoute.snapshot.params['id']
    this.initForm()
    if (this.panelService.allPosts.value == null) {
      this.getAllPosts()

    }else{
      this.allPosts = this.panelService.getAllPostsArray()
      console.log(this.post);

    }
    if(this._router.url.includes('add-post')){
      this.isAdd = true
    }else{

      // this.getPost()
      this.isAdd = false
    }
    this.getTheUpdatedPost()
  }
  getTheUpdatedPost(){

    debugger
    this.allPosts.forEach((element:any) => {
        if (element.id == this.id) {
          this.post = element
        }
      });
    this.addAndUpdateForm.controls['title'].setValue(this.post.title)
    this.addAndUpdateForm.controls['body'].setValue(this.post.body)
      console.log(this.post);

  }

  getAllPosts(){
    this.panelService.getAllPosts().subscribe(
      (res:any)=>{
        this.allPosts = res
        this.panelService.setAllPostsArray(this.allPosts)
        console.log(this.allPosts)
      },(error:any)=>{

      }
    )
  }

  addOrUpdatePost(form:FormGroup){
    if (!form.valid) {
      this.isValid = true
      return
    }
    if (this.isAdd) {
      this.addPost()
    }else{
      this.updatePost()
    }
  }
  addPost(){
    let id = this.allPosts.length;
    let body = {
      // I put it static because I don't have user id and the api not implement the changes in the server so i make all the changes in the memory
      userId:1,
      id:Number(id)+1,
      title: this.addAndUpdateForm.controls['title'].value,
      body:this.addAndUpdateForm.controls['body'].value,
    }
    this.panelService.addSinglePost(body).subscribe(
      (res)=>{
      this.allPosts.unshift(body)
      this.panelService.setAllPostsArray(this.allPosts)
      this._router.navigate(['/panel/posts/all'])
      },(error)=>{

      }
    )
  }
  updatePost(){
    // this.getTheUpdatedPost()
    console.log(this.post);

    // let body
        this.post.userId = this.post.userId
        this.post.id = this.post.id
        this.post.title = this.addAndUpdateForm.controls['title'].value
        this.post.body = this.addAndUpdateForm.controls['body'].value
    // body = this.post

    this.panelService.updateSinglePost(this.id,this.post).subscribe(
      (res)=>{

        this.panelService.setAllPostsArray(this.allPosts)
        console.log(this.allPosts)
        this._router.navigate(['/panel/posts/all'])
      },(error)=>{
        console.log(error);

      }
    )
  }
}
