import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreateReclamationComponent } from './reclamation/create-reclamation/create-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { AdminReclamationComponent } from './reclamation/admin-reclamation/admin-reclamation.component';
import { ListReclamationComponent } from './reclamation/list-reclamation/list-reclamation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { CreateMobilierComponent } from './mobilier/create-mobilier/create-mobilier.component';
import { ListMobilierComponent } from './mobilier/list-mobilier/list-mobilier.component';
import { UpdateMobilierComponent } from './mobilier/update-mobilier/update-mobilier.component';
import {MatSelectModule} from '@angular/material/select';
import { AdminCreateReclamationComponent } from './reclamation/admin-create-reclamation/admin-create-reclamation.component';
import { DetailMobilierComponent } from './mobilier/detail-mobilier/detail-mobilier.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { StatMobilierComponent } from './mobilier/stat-mobilier/stat-mobilier.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AfficheAnnonceComponent } from './components/affiche-annonce/affiche-annonce.component';
import { UpdateAnnonceComponent } from './components/update-annonce/update-annonce.component';
import { UpdateSujetComponent } from './sujet/update-sujet/update-sujet.component';
import { ListSujetComponent } from './sujet/list-sujet/list-sujet.component';
import { CreateSujetComponent } from './sujet/create-sujet/create-sujet.component';
import { ShowSujetComponent } from './sujet/show-sujet/show-sujet.component';
import { ListCommentaireComponent } from './commentaire/list-commentaire/list-commentaire.component';
import { VideoStreamingComponent } from './video-streaming/video-streaming.component';
import {WebcamModule} from "ngx-webcam";
import { VideoStreaming2Component } from './video-streaming2/video-streaming2.component';
import { VideoStreaming3Component } from './video-streaming3/video-streaming3.component';
import { CreateCommentaireComponent } from './commentaire/create-commentaire/create-commentaire.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { EditUserComponent } from './popup/edit-user/edit-user.component';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminUserHandlerComponent } from './admin-user-handler/admin-user-handler.component';
import { AffecterCouponComponent } from './components/affecter-coupon/affecter-coupon.component';
import {CreateTransporteurComponent} from "./transporteur/create-transporteur/create-transporteur.component";
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

import { CoorndonneesComponent } from './components/coorndonnees/coorndonnees.component';

import {ReactiveFormsModule} from "@angular/forms";

import { ShowReactionCommentaireComponent } from './reactionCommentaire/show-reaction-commentaire/show-reaction-commentaire.component';
import { StatAnnonceComponent } from './components/stat-annonce/stat-annonce.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FrontTransporteurComponent } from './transporteur/front-transporteur/front-transporteur.component';
import { ListTransporteurComponent } from './transporteur/list-transporteur/list-transporteur.component';
import { UpdateTransporteurComponent } from './transporteur/update-transporteur/update-transporteur.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup';
import {CreateDemenagementComponent} from "./demenagement/create-demenagement/create-demenagement.component";
import {ListDemenagementComponent} from "./demenagement/list-demenagement/list-demenagement.component";
import { AgmCoreModule } from '@agm/core';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    FooterComponent,
    CreateReclamationComponent,
    UpdateReclamationComponent,
    AdminReclamationComponent,
    ListReclamationComponent,
    CreateMobilierComponent,
    ListMobilierComponent,
    UpdateMobilierComponent,
    AdminCreateReclamationComponent,
    DetailMobilierComponent,
    StatMobilierComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    EditUserComponent,
    AnnonceListComponent,
    AnnonceDetailsComponent,
    AddAnnonceComponent,
    AfficheAnnonceComponent,
    UpdateAnnonceComponent,
    DashboardComponent,
    AdminNavComponent,
    CreateDemenagementComponent,
    ListDemenagementComponent,
    AdminUserHandlerComponent,

          RendezVousComponent,
    

    AffecterCouponComponent,
    CoorndonneesComponent,
    UpdateSujetComponent,
    ListSujetComponent,
    CreateSujetComponent,
    HomeComponent,
    FooterComponent,
    ShowSujetComponent,
    ListCommentaireComponent,
    VideoStreamingComponent,
    VideoStreaming2Component,
    VideoStreaming3Component,
    CreateCommentaireComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    ShowReactionCommentaireComponent,
    StatAnnonceComponent,
    CreateTransporteurComponent,
    ListTransporteurComponent,
    UpdateTransporteurComponent,
    FrontTransporteurComponent
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    NgbModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    WebcamModule,
    NgApexchartsModule,
    FullCalendarModule,
    ReactiveFormsModule,
     NgbModule,
    NgbModalModule,
 
    NgToastModule,
    FormsModule  ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYaxnRCGmV-16zCP_PL6P9cZKZg0oFpjQ',
      libraries: ['places']
     
    })
  
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
