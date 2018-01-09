import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngco-pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomePageComponent implements OnInit {

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
