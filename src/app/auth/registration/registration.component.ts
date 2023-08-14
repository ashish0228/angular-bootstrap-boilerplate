import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  formSubmit = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    // In case you want to use email pattern for validators then use below patter.
    // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    this.registrationForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      lastName: [null, [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  ngOnInit(): void {
  }
  
  get formControlReg(): any {
    return this.registrationForm['controls'];
  }
  resetForm() {
    this.formSubmit = false;
    this.registrationForm.reset();
  }
  submit() {
    console.log('this.registrationForm.value', this.registrationForm.value)
    this.formSubmit = true;
    if (this.registrationForm.invalid) {
      return
    }
    this.authService.registration(this.registrationForm.value).subscribe((res: any) => {
      this.router.navigateByUrl('/login');
    });
    this.router.navigateByUrl('/login');
  }
}
