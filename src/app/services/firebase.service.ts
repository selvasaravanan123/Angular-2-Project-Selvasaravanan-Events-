import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  events: FirebaseListObservable<any[]>;
  event: FirebaseObjectObservable<any>;
  folder:any;

  constructor(private af: AngularFire) {
       this.events = this.af.database.list('/events') as FirebaseListObservable<Event[]>
       this.folder= 'Eventimages';
  }

  getEvents(){
       this.events = this.af.database.list('/events') as FirebaseListObservable<Event[]>
       return this.events;
  }

  getEventDetails(id){

    this.event = this.af.database.object('/events/'+id) as FirebaseObjectObservable<Event>
    return this.event;

  }

  getEventsByTitle(title: any): Observable<Event[]> {
    return this.af.database.list('events')
      .map(_events => _events.filter(event => event.title.toLowerCase().indexOf(title) !== -1));

  }

  addEvent(event){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        event.image = selectedFile.name;
        event.path = path;
        return this.events.push(event);
      });
    }
  }

   updateEvent(id, event){
    return this.events.update(id, event);
  }

  deleteEvent(id){
    return this.events.remove(id);
  }


}


interface Event{
  $key?:string;
  title?:string;
  author?:string;
  Details?:string;
  Duration?:string;
  Name?:string;
  Date?:string;
  Time?:number;
  Address?:string;
  City?:string;
}
