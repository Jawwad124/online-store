import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { OnlineStoreSharedModule } from 'app/shared/shared.module';
import { OnlineStoreCoreModule } from 'app/core/core.module';
import { OnlineStoreAppRoutingModule } from './app-routing.module';
import { OnlineStoreHomeModule } from './home/home.module';
import { OnlineStoreEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    OnlineStoreSharedModule,
    OnlineStoreCoreModule,
    OnlineStoreHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    OnlineStoreEntityModule,
    OnlineStoreAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class OnlineStoreAppModule {}
