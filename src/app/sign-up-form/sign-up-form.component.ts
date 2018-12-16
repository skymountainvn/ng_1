import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl} from '@angular/forms'

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSignUp = new FormGroup({
      // email: ['', Validators.email && Validators.required],
      email: new FormControl('', gmail),
      password: new FormControl('', Validators.required),
      rePassword: new FormControl('', Validators.required),
    }, passwordsMustMatch);
  }

  onSubmitForm() {
    console.log(this.formSignUp.value)
  }

  getShouldShowEmailWarning(controlName) { 
    // k nhập vào thi báo đỏ
    const emailControl = this.formSignUp.get(controlName);
    return emailControl.invalid && emailControl.touched;
  }

  get shouldShowPasswordWarning() {
    const pw1= this.formSignUp.get('password');
    const pw2= this.formSignUp.get('rePassword');
    return pw1.touched && pw1.valid && pw2.dirty && pw1.value !== pw2.value 
  }

  // get passwordMatched() {
  //   const pw1= this.formSignUp.get('password');
  //   const pw2= this.formSignUp.get('rePassword');
  //   return pw1.value === pw2.value;
  // }
}

function passwordsMustMatch(FormGroup:FormGroup) : ValidationErrors | null {
  const pw1 = FormGroup.get('password');
  const pw2 = FormGroup.get('rePassword');
  if (pw1.value !== pw2.value) return { err: 'passwordsMustMatch'}
  return null;
}

function gmail(control : AbstractControl) : ValidationErrors | null {
  if ((control.value as string).trim().endsWith('@gmail.com')) return null;
  return {error: 'gmail'};
}