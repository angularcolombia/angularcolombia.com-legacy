/* 
Router for handle events for angular-colombia meetup, 
using version 3 from meetup official api
*/
const express = require('express'),
    request = require('request'),
    MeetupApi = require('./config'),
    router = express.Router();

const api_key = process.env.MEETUP_API_KEY;

/*get next events*/
router.get('/v3/events/next', (req, res) => {
    request(MeetupApi.v3.getNextEvents(api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

/*get events*/
router.get('/v3/events', (req, res) => {
    request(MeetupApi.v3.getAllEvents(api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

/*get event detail*/
router.get('/v3/events/:event_id', (req, res) => {
    request(MeetupApi.v3.getEventDetail(req.params.event_id, api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

/*get event comments*/
router.get('/v3/events/:event_id/comments', (req, res) => {
    request(MeetupApi.v3.getEventComments(req.params.event_id, api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

/*get event photos*/
router.get('/v3/events/:event_id/photos', (req, res) => {
    request(MeetupApi.v3.getEventPhotos(req.params.event_id, api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

/*get event RVSPS*/
router.get('/v3/events/:event_id/rsvps', (req, res) => {
    request(MeetupApi.v3.getEventRsvps(req.params.event_id, api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

module.exports = router;