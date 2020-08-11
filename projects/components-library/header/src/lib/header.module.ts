import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { NavComponent } from './nav/nav.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent, NavigationComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
