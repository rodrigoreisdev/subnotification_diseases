import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import jwt_decode from "jwt-decode";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _commonService: CommonService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        try {
            const userData = this._commonService.getUserData();
            if (userData) {
                return true;
            }

            this._router.navigate(['/login']);
            return false;
        } catch (error) {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
