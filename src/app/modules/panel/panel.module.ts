import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { PostControlComponent } from './components/post-control/post-control.component';
import { CommentControlComponent } from './components/comment-control/comment-control.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AddAndUpdatePostComponent } from './components/add-and-update-post/add-and-update-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllPostsComponent,
    NavbarComponent,
    AllCommentsComponent,
    PostControlComponent,
    CommentControlComponent,
    SinglePostComponent,
    AddAndUpdatePostComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PanelModule { }
