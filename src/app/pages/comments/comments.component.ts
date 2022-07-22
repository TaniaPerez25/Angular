
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

import { CommentResult, Comment } from 'src/app/interfaces/comments';
import { Post, PostResult } from 'src/app/interfaces/posts';

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];
  posts: Post[] = [];
  constructor(private service: UsersService) { 
    this.getComments();
    this.getPosts();
  }

  ngOnInit(): void {
  }
  getComments(): void{
    this.service.getComments().subscribe((result: CommentResult) =>{

      const geturl = new URLSearchParams(window.location.search);
      const parurl = geturl.get("id");

      const commentid = result.data.filter(({postid}) => postid === Number(parurl));

      this.comments =  commentid;
    });
  }
  getPosts(): void{
    this.service.getPosts().subscribe((result: PostResult) =>{
      const geturl = new URLSearchParams(window.location.search);
      const parurl = geturl.get("id");
      const postid = result.data.filter(({postid}) => postid === Number(parurl));
      this.posts =  postid;
    });
  }
  
}
