import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { NavFirstComponent } from './nav-first/nav-first.component';
import { NavSecondComponent } from './nav-second/nav-second.component';
import { NavThirdComponent } from './nav-third/nav-third.component';
import { LogoComponent } from './logo/logo.component';
import { HumbergurComponent } from './humbergur/humbergur.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { UserSkalitonComponent } from './user-skaliton/user-skaliton.component';



@NgModule({
  declarations: [
    HeaderTopComponent,
    HeaderBottomComponent,
    NavFirstComponent,
    NavSecondComponent,
    NavThirdComponent,
    LogoComponent,
    HumbergurComponent,
    UserIconComponent,
    UserSkalitonComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderTopComponent,
    HeaderBottomComponent,
    NavFirstComponent,
    NavSecondComponent,
    NavThirdComponent,
    LogoComponent,
    HumbergurComponent,
    UserIconComponent,
    UserSkalitonComponent
  ]
})
export class HeaderModule { }
