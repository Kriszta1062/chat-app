import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  faTimes=faTimes; // got the idea from traversy media
  faSearch=faSearch;
  faPlus=faPlus;
  faCircle=faCircle;


  rooms = [
    {
      id: 1,
      name: 'workers',
      members: [' Lina', ' Alexa', ' Ronnie'],
      pic: '/assets/images/profile.jpg',
      active: true,
      chosen: false

    },
    {
      id: 2,
      name: 'home',
      members: [' Lina', ' Alexa', ' Mag'],
      pic: '/assets/images/profile.jpg',
      active: false,
      chosen: false
    },
    {
      id: 3,
      name: 'friends',
      members: [' Lina', ' Ciara', ' Ronnie'],
      pic: '/assets/images/profile.jpg',
      active: true,
      chosen: false

    },
    {
      id: 4,
      name: 'idk ',
      members: [' Lina', ' Alexa', ' Ambrows'],
      pic: '/assets/images/profile.jpg',
      active: true,
      chosen: true
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }


}
