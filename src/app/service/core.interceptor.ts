import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {

    constructor(private coreService: CoreService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copiedReq = req.clone({
            params: req.params.set('launch_success', this.coreService.getFilterParams()[0])
                .append('land_success', this.coreService.getFilterParams()[1])
                .append('launch_year', this.coreService.getFilterParams()[2])
        });
        return next.handle(copiedReq);
    }
}
