import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResult } from '../interfaces/user';
import { languageResult } from '../interfaces/language';
import{ PostResult } from '../interfaces/posts';
import{ CommentResult } from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient){
    this.getUsers().subscribe((result:UserResult)=> {
      console.log(result.data);
    });
  }

  getUsers(){
    return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
  }

  getLanguages(){
    return this.http.get<languageResult>("https://localhost:3000/languages");
  }
  
  getComments(){
    return this.http.get<CommentResult>("http://localhost:3000/comments");
  }

  getPosts(){
    return this.http.get<PostResult>("http://localhost:3000/posts");
  }
  
}
