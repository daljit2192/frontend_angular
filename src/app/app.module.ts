import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TrainerComponent } from './trainer/trainer.component';
import { BlogComponent } from './blog/blog.component';
import { PriceComponent } from './price/price.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const appRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'trainer', component: TrainerComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'price', component: PriceComponent },
{ path: 'testimonial', component: TestimonialComponent },
{ path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    TrainerComponent,
    BlogComponent,
    PriceComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
