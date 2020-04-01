import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from  '@angular/router';

import { AuthService } from '../../containers/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      pass: new FormControl("", [Validators.required, Validators.minLength(6)]),
      phones: new FormArray([]),
    })
  }

  onAddPhone() {
    (<FormArray>this.signupForm.controls['phones']).push(new FormControl("+38", Validators.required))
  }

  onRemovePhone(index: number) {
    (<FormArray>this.signupForm.controls['phones']).removeAt(index);
  }

  onSubmit({value}) {
    // this.auth.register(value).subscribe(res => this.router.navigate(['login']));
    this.auth.register(value);
    this.router.navigate(['login']);
    console.log(value);
    this.signupForm.reset();
  }


}
