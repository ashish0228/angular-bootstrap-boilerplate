import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmit = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    // In case you want to use email pattern for validators then use below patter.
    // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
   }

  ngOnInit(): void {
  }

  get formControlLog(): any {
    return this.loginForm['controls'];
  }
  resetForm() {
    this.formSubmit = false;
    this.loginForm.reset();
  }
  submit() {
    this.formSubmit = true;
    if (this.loginForm.invalid) {
      return
    }
    this.authService.registration(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('access-token', 'tokenValue');
      this.router.navigateByUrl('/dashboard');
      this.authService.setisLoginValue(true);
    });
      localStorage.setItem('access-token', 'tokenValue');
      this.router.navigateByUrl('/dashboard');
      this.authService.setisLoginValue(true);
  }
}
