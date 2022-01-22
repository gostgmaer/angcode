import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarglobalComponent } from './sidebarglobal/sidebarglobal.component';
import { SidebarrightComponent } from './sidebarright/sidebarright.component';
import { SidebarleftComponent } from './sidebarleft/sidebarleft.component';
import { FootertopComponent } from './footertop/footertop.component';
import { HeadertopComponent } from './headertop/headertop.component';
import { HeaderbottomComponent } from './headerbottom/headerbottom.component';
import { LandingComponent } from './landing/landing.component';
import { ContentComponent } from './content/content.component';
import { BlogComponent } from './blog/blog.component';
import { DefaultComponent } from './default/default.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarglobalComponent,
    SidebarrightComponent,
    SidebarleftComponent,
    FootertopComponent,
    HeadertopComponent,
    HeaderbottomComponent,
    LandingComponent,
    ContentComponent,
    BlogComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FootertopComponent,
    HeadertopComponent,
    HeaderbottomComponent,
    LandingComponent,
    SidebarglobalComponent,
    SidebarleftComponent,
    SidebarrightComponent,
    BlogComponent,
    ContentComponent,
    DefaultComponent
  ]
})
export class TemplateModule { }
