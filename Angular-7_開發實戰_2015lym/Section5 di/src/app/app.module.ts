import { UtilsService } from './utils.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { UserInfoComponent } from './user-info/user-info.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDatePickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
