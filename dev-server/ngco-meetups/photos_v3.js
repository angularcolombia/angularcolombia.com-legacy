/* 
Router for get all photos for angular-colombia meetup, 
using version 3 from meetup official api
*/
const express = require('express'),
    request = require('request'),
    MeetupApi = require('./config'),
    router = express.Router();

const api_key = process.env.MEETUP_API_KEY;

/*get events*/
router.get('/v3/photos', (req, res) => {
    request(MeetupApi.v3.getAllPhotos(api_key), (_error, _response, _body) => {
        MeetupApi.procesApiResponse(res, _error, _body);
    });
});

module.exports = router;