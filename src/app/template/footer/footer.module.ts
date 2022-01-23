import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { FooterContentComponent } from './footer-content/footer-content.component';



@NgModule({
  declarations: [
    FooterBottomComponent,
    FooterTopComponent,
    FooterCopyrightComponent,
    FooterContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterBottomComponent,
    FooterTopComponent,
    FooterCopyrightComponent,
    FooterContentComponent
  ]
})
export class FooterModule { }
