import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../../services/meetup.service';

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

	/* events list */
	events: any;

	constructor(private meetupService: MeetupService) { }

	ngOnInit() {
		/* Call Meetup service for listing events, then, get the first items from it */
		this.meetupService.getAllEvents()
			.map(data => data.slice(0, 5))
			.subscribe(events => this.events = events);
	}

}
