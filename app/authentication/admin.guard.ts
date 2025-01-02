import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthenticationService,private router: Router,private loader:LoaderService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // this.loader.showLoader();
    // this.authService.isAdmin$.subscribe(isAdmin=>{
    //   if(!isAdmin){
    //     this.loader.hideLoader();
    //   }
    //   else{
    //     this.loader.hideLoader();
    //     this.router.navigate(["/admin"])
        
    //   }
    // })
    return true;
  }
}
