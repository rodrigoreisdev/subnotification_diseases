import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import jwt_decode from "jwt-decode";
import { CookiesService } from './cookies.service';


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _commonService: CommonService,
        private cookieService: CookiesService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        try {
            const userData = this._commonService.getUserData();
            if (userData) {
              if (Object(userData).role === 'admin') {
                return true;
              }
            }
            this.cookieService.deleteCookie('authentication');

            this._router.navigate(['/admin']);
            return false;
        } catch (error) {
            this._router.navigate(['/admin']);
            return false;
        }
    }
}
