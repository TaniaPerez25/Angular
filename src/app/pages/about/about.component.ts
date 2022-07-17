import { Component, OnInit } from '@angular/core';
import { User, UserResult} from 'src/app/interfaces/user';
import { UsersService} from 'src/app/services/users.service';
import {language, languageResult} from 'src/app/interfaces/language';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[]=[];
  languages:language[]=[];

  constructor(private service: UsersService) {
    this.getUsers();
    this.giveMeLanguages();
   }

  ngOnInit(): void {
  }

  getUsers():void{
    this.service.getUsers().subscribe((result: UserResult) => {
      console.log(result.data);
      this.users = result.data;
    });
  }

  giveMeLanguages():void{
    this.service.getLanguages().subscribe((result:languageResult)=>{
      console.log(result.data);
      this.languages=result.data;
    });
  }

}
