import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingControllerService {

  constructor(private _router: Router, private _route: ActivatedRoute) { }
  router = this._router;
  route = this._route;
  
  getCurrentRoute(){
    this.route.params.subscribe((params:Params) =>{
      const locArr:string[] = [];
      
    })
  }

  navigateTo(...routeArgs: string[]){
    this.router.navigate
  }


}
