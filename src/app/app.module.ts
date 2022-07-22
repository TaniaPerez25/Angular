import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HeaderComponent } from './partial/header/header.component';
import { FooterComponent } from './partial/footer/footer.component';
import { MenuComponent } from './partial/menu/menu.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MainComponent } from './admin/main/main.component';
import { PostComponent } from './pages/posts/posts.component';
import { CommentComponent } from './pages/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    AboutComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MaintenanceComponent,
    MainComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




