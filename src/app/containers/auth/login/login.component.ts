import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      "name": ["", [Validators.required]],
      "email": ["", [Validators.required, Validators.email]],
      "pass": ["", [Validators.required, Validators.minLength(6)]],
      "phones": fb.array([]),
    })
  }

  ngOnInit(): void {
    
  }

  onAddPhone() {
    (<FormArray>this.loginForm.controls['phones']).push(new FormControl("+38", Validators.required))
  }

  onRemovePhone(index: number) {
    (<FormArray>this.loginForm.controls['phones']).removeAt(index);
  }

  onSubmit({value}) {
    console.log(value);
    this.loginForm.reset();
  }

}
