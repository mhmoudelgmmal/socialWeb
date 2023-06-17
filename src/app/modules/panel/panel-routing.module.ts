import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { PostControlComponent } from './components/post-control/post-control.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import { AddAndUpdatePostComponent } from './components/add-and-update-post/add-and-update-post.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'',component:NavbarComponent,children:[
    { path: "posts/all", component:AllPostsComponent },
    { path: "posts/control", component:PostControlComponent },
    { path: "comments/all", component:AllCommentsComponent },
    { path: "comments/control", component:AllCommentsComponent },
    { path: "single-post/:id", component:SinglePostComponent },
    { path: "single-comment", component:SingleCommentComponent },
    { path: "add-post", component:AddAndUpdatePostComponent },
    { path: "update-post/:id", component:AddAndUpdatePostComponent },
  ]},
  { path: '**', component:NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
