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
    // this.loginForm = fb.group({
    //   "name": ["", [Validators.required]],
    //   // "email": ["", [Validators.required, Validators.email]],
    //   "pass": ["", [Validators.required, Validators.minLength(6)]],
    //   // "phones": fb.array([]),
    // })
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      "name": ["", Validators.required],
      // "email": ["", [Validators.required, Validators.email]],
      "pass": ["", [Validators.required, Validators.minLength(6)]],
      // "phones": fb.array([]),
    })
  }

  // onAddPhone() {
  //   (<FormArray>this.loginForm.controls['phones']).push(new FormControl("+38", Validators.required))
  // }

  // onRemovePhone(index: number) {
  //   (<FormArray>this.loginForm.controls['phones']).removeAt(index);
  // }

  onSubmit() {
    const {value} = this.loginForm;
    this.auth.login(value).subscribe(res => {
      this.router.navigateByUrl('admin')
      console.log(res);
    });
    this.authentificated = true;
    this.name = value.name;
    console.log(value);
    this.loginForm.reset();
  }

}
