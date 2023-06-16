import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { PostControlComponent } from './components/post-control/post-control.component';
import { CommentControlComponent } from './components/comment-control/comment-control.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AllPostsComponent,
    NavbarComponent,
    AllCommentsComponent,
    PostControlComponent,
    CommentControlComponent,
    SingleCommentComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,

  ]
})
export class PanelModule { }
