/* 
Router for get all venues for angular-colombia meetup, 
using version 3 from meetup official api
*/
const express = require('express'),
    request = require('request'),
    MeetupApi = require('./config'),
    router = express.Router();

const api_key = process.env.MEETUP_API_KEY;

/*get venues*/
router.get('/v3/venues', (req, res) => {
    request(MeetupApi.v3.getAllVenues(api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

module.exports = router;