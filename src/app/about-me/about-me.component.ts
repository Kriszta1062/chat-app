import { Component, OnInit } from '@angular/core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCake } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  faMailBulk=faMailBulk;
  faPhone=faPhone;
  faCake=faCake;
  faHome=faHome;

  users = [
    {
      id: 1,
      name: 'Kriszta Fejes',
      email: 'kriszta1062@gmail.com',
      phone: '306166172', 
      birth: '2000.09.25',
      location: 'Szeged',
      picture: '/assets/images/cat.png'

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
