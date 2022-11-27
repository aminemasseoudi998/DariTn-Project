import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../../model/annonce';
import { AnnonceService } from '../../service/annonce.service';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[];
  p: number = 1;
  localisation: any;
  nbannoncecoupon:any;
  annoncecoupon:Annonce[];
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder ;



  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(private annonceservice: AnnonceService, private router: Router , private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }



  ngOnInit(): void {

       //load Places Autocomplete
       this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        this.geoCoder = new google.maps.Geocoder;
  
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    this.getAnnonce();
    this.getAnnonceCoupon();

  }


// Get Current Location Coordinates
private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 8;
      this.getAddress(this.latitude, this.longitude);
    });
  }
}


markerDragEnd($event: MouseEvent) {
  console.log($event);
  this.latitude = $event.coords.lat;
  this.longitude = $event.coords.lng;
  this.getAddress(this.latitude, this.longitude);
}


getAddress(latitude, longitude) {
  this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
    console.log(results);
    console.log(status);
    if (status === 'OK') {
      if (results[0]) {
        this.zoom = 12;
        this.address = results[0].formatted_address;
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }

  });
}




  private getAnnonce(){
    this.annonceservice.getAnnoncelist().subscribe(data => {
      this.annonces = data;
      this.annonces.forEach(m => m.imageVideo?.length > 0 ?  m.placeholder = m.imageVideo[0].image: m.placeholder = '/assets/img/property-1.jpg')
    });
  }

  Search(){
    if(this.localisation == ""){
      this.ngOnInit();

    } else {
      this.annonces = this.annonces.filter(data => {
        return data.localisation.toLocaleLowerCase().match(this.localisation.toLocaleLowerCase());
      })
    }
  }

  

  detailAnnonce(id:any){
    this.router.navigate(['/annonces',id]);

  }

   create(){
    this.router.navigate(['/add']);

  }

  private getAnnonceCoupon(){
    this.annonceservice.getAnnonceCoupon().subscribe(data => {
      this.annoncecoupon = data;
      this.nbannoncecoupon=data.length;
      this.annoncecoupon.forEach(m => m.imageVideo?.length > 0 ?  m.placeholder = m.imageVideo[0].image: m.placeholder = '/assets/img/property-1.jpg')
    });
  }



 

  
}

