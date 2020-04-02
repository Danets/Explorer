import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from  '@angular/router';

import { AuthService } from '../../containers/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authentificated: boolean = false;
  name: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      "name": ["", Validators.required],
      "pass": ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    const {value} = this.loginForm;
    // this.auth.login(value).subscribe(res => {
    //   this.router.navigateByUrl('admin')
    //   console.log(res);
    // });
    this.auth.login(value);
    this.authentificated = true;
    this.router.navigateByUrl('dashboard');
    this.name = value.name;
    this.loginForm.reset();
  }

}
