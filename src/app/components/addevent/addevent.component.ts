import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  title: any;
  author:any;
  details:any;
  duration:any;
  name:any;
  date:any;
  time:number;
  address:any;
  city:any;
  image:any;

  constructor( private firebaseService: FirebaseService , private router: Router) { }

  ngOnInit() {
  }

  OnAddSubmit(){
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

    this.firebaseService.addEvent(event);

    this.router.navigate(['events']);
  }

}
