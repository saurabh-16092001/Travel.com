import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // title = 'Website';

  // boolLoginSuccess = false;

  // constructor(private router: Router) { }

  // //variable for displaying login and register form.
  // boolLogin = true;

  // displayLogin() {
  //   this.boolLogin = true;
  // }

  // displayRegister() {
  //   this.boolLogin = false;
  // }

  // //users database.
  // arrUsers = [
  //   new Users('admin', 'admin@wissen.com', 'admin')
  // ];
  // strLoginUname = new FormControl('');
  // strLoginPwd = new FormControl('');

  // //login method.
  // submitLogin() {
  //   let obj: any = this.arrUsers.find(o => o.uname === this.strLoginUname.value);

  //   if (obj != null && this.strLoginPwd.value === obj.pwd) {
  //     alert("Login Successfully");
  //     this.boolLoginSuccess = true;
  //     this.router.navigate(['/Home']);
  //   }
  //   else {
  //     alert("Invalid Crediantials");
  //   }
  // }

  // strRegisterUname = new FormControl('');
  // strRegisterEmail = new FormControl('');
  // strRegisterPwd = new FormControl('');
  // strRegisterRepeatPwd = new FormControl('');
  // //register method.
  // submitRegister() {
  //   if (this.strRegisterUname.value != '' && this.strRegisterEmail.value != '' && this.strRegisterPwd.value != '' && this.strRegisterPwd.value === this.strRegisterRepeatPwd.value) {
  //     this.arrUsers.push(new Users(this.strRegisterUname.value, this.strRegisterEmail.value, this.strRegisterPwd.value));
  //     alert("Register Successfully");
  //     this.displayLogin();
  //   }
  //   else {
  //     alert("Please Enter Valid Info");
  //   }
  // }
}
