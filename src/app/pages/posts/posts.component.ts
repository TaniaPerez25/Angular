import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Post, PostResult } from 'src/app/interfaces/posts';


@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  constructor(private service: UsersService) {
    this.getPosts();
   }

  ngOnInit(): void {
  }
  getPosts(): void{
    this.service.getPosts().subscribe((result: PostResult) =>{
      console.log(result.data);
      this.posts = result.data;
    });
  }

}
