import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  id;
  title;
  author;
  details;
  duration;
  name;
  date;
  time;
  address;
  city;
  image;

  constructor(private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
     this.id = this.route.snapshot.params['id'];

    this.firebaseService.getEventDetails(this.id).subscribe(event => {

      this.title = event.title;
      this.author = event.author;
      this.details= event.duration;
      this.duration= event.duration;
      this.name= event.name;
      this.date= event.date;
      this.time= event.time;
      this.address= event.address;
      this.city = event.city;

    });
  }

   onEditSubmit(){
    let event = {

      title: this.title,
      author:this.author,
      details:this.details,
      duration:this.duration,
      name:this.name,
      date:this.date,
      time:this.time,
      address:this.address,
      city:this.city 

    }

    this.firebaseService.updateEvent(this.id, event);

    this.router.navigate(['/events']);
  }

  

}
