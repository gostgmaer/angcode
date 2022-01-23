import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarglobalComponent } from './sidebarglobal/sidebarglobal.component';
import { SidebarrightComponent } from './sidebarright/sidebarright.component';
import { SidebarleftComponent } from './sidebarleft/sidebarleft.component';


import { LandingComponent } from './landing/landing.component';
import { ContentComponent } from './content/content.component';
import { BlogComponent } from './blog/blog.component';
import { DefaultComponent } from './default/default.component';

import { FormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [

    SidebarglobalComponent,
    SidebarrightComponent,
    SidebarleftComponent,


    LandingComponent,
    ContentComponent,
    BlogComponent,
    DefaultComponent,
  ],
  imports: [CommonModule, FormsModule, HeaderModule, FooterModule],
  exports: [

    HeaderModule,
    LandingComponent,
    SidebarglobalComponent,
    SidebarleftComponent,
    SidebarrightComponent,
    BlogComponent,
    ContentComponent,
    DefaultComponent,
  ],
})
export class TemplateModule {}
