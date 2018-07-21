import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './main-layout/app.component';
import { SupportBarComponent } from './supportbar/supportbar.component';
import { MainBarComponent } from './mainbar/mainbar.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menubar/menubar.component';
import { TopSellingComponent } from './topselling/topselling.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './service/data.service';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: TopSellingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    SupportBarComponent,
    MainBarComponent,
    CartComponent,
    SearchComponent,
    MenuComponent,
    TopSellingComponent,
    ProductComponent,
    FooterComponent,
    AboutComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
