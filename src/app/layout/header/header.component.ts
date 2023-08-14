import { Component, OnInit } from '@angular/core';
import { responseModel } from '../../model/reponseModel';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogout = false;
  userToken: any;
  constructor(private authService: AuthService,
    private router: Router) {
      /**
       * check that use is login or not base on that we will show hide login logout button
       */
    this.authService.isLogin.subscribe((res: any) => {
      this.userToken = localStorage.getItem('access-token');
      if (this.userToken) {
        this.showLogout = true;
      } else {
        this.showLogout = res;
      }
    })
  }

  ngOnInit(): void {
  }

  /**
   * Logut api will call and if api goes successfull it will clear localstorage and return t login page
   */
  logout() {
    this.authService.logout(this.userToken).subscribe((res: responseModel) => {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    });
    
    localStorage.clear();
    this.authService.setisLoginValue(false);
    this.router.navigateByUrl('/login');
  }

}
