import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  log : boolean = false;
   singupUsers : any[] =[];
   signupObj : any ={
    userName:'',
    email:'',
    password:''
   };
   loginObj:any={
    userName:'',
    password:''
   }
   constructor(private router :Router){}
   ngOnInit(){
    const localdata = localStorage.getItem('signUpUsers');
    if(localdata != null){
      this.singupUsers= JSON.parse(localdata);
    }
   }
   onLogin(){
    debugger
    const isUserExist = this.singupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert("User Login Successfully");
      this.router.navigate(['/navbar']);
      
      
    }
    else{
      alert("Wrong Credentials");
      this.router.navigate(['']);
    }
   }
   onSingup(){
    this.singupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.singupUsers));
    this.signupObj  ={
      userName:'',
      email:'',
      password:''
     };
  }
}
