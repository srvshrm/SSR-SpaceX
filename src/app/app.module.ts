import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { CoreService } from './service/core.service';
import { CoreInterceptor } from './service/core.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    DashboardModule,
  ],
  providers: [
    CoreService,
    {provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
