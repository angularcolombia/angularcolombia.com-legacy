import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  /* community topics*/
  topics = ['AngularJS',
	'Computer programming',
	'Front-end Development',
	'HTML5',
	'JavaScript Applications',
	'JavaScript Frameworks',
	'JavaScript Libraries',
	'JavaScript',
	'Software Development',
	'Web Design',
	'Web Development',
  'Web Technology'];
  
  constructor() { }

  ngOnInit() {
  }

}
