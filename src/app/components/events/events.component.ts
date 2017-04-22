import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:any;
  search:any;
  count:any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getEvents().subscribe(events => {
      console.log(events);
      this.events = events;
      this.count = events.length;
    });
  }

  searchEvents(){    
    this.firebaseService.getEventsByTitle(this.search.toLowerCase()).subscribe(events => { 
      this.events = events;
    });
  }

}
