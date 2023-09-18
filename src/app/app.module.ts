import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './pages/slider/slider.component';
import { HippoComponent } from './pages/hippo/hippo.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SliderComponent,
    HippoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
