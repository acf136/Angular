import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Http client
import { HttpClientModule } from '@angular/common/http';
// simulating Http client through In-memory Web API
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/service/in-memory-data.service';

// Routing
import { AppRoutingModule } from './app-routing.module';
// RxJS Forms
import { ReactiveFormsModule } from '@angular/forms';
// Template-Driven Forms
// import { FormsModule } from '@angular/forms';

// Modules
import { UsersModule } from './users/users.module';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './application/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses.
// Remove it when a real server is ready to receive requests, or use
// ( environment.production ? HttpClientInMemoryWebApiModule.forRoot(DataService) : [] )
// in environment files
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false, delay : 1000 } ),
    AppRoutingModule,
    ReactiveFormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
