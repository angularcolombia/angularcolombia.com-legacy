const Config = {
    apiHost: "https://api.meetup.com/",
    groupName: "angular-colombia"
};

Config.v2 = Config.v2 || {};
Config.v3 = Config.v3 || {};

/* Process api responses from request module (error, body), using objects from expressjs (response) */
Config.procesApiResponse = (expressResponse, curlError, curlReponseBody) => {
    if (curlError) {
        expressResponse.status(500).json(curlError);
    }
    expressResponse.status(200).json(JSON.parse(curlReponseBody));
};

/* ::: Community events ::: */

/* Get all events */
Config.v3.getAllEvents = (apiKey) => {
    let eventsUrl = Config.apiHost + Config.groupName + '/events';
    if (!apiKey) {
        throw new Error('must use an API KEY');
    }
    eventsUrl = eventsUrl.concat('?sign=true&key=' + apiKey)
        .concat('&status=upcoming,past,proposed&desc=true&fields=plain_text_description');
    return eventsUrl;
};

/* Get event details using its id */
Config.v3.getEventDetail = (eventId, apiKey) => {
    if (!eventId) {
        throw new Error('must use an event ID');
    } else if (!apiKey) {
        throw new Error('must use an API KEY');
    }
    let eventsUrl = Config.apiHost + Config.groupName + '/events/' + eventId;
    eventsUrl = eventsUrl.concat('?sign=true&key=' + apiKey)
        .concat('&fields=plain_text_description,comment_count,short_link');
    return eventsUrl;
};

/* Get event comments using its id */
Config.v3.getEventComments = (eventId, apiKey) => {
    if (!eventId) {
        throw new Error('must use an event ID');
    } else if (!apiKey) {
        throw new Error('must use an API KEY');
    }
    let eventsUrl = Config.apiHost + Config.groupName + '/events/' + eventId + '/comments';
    eventsUrl = eventsUrl.concat('?sign=true&key=' + apiKey);
    return eventsUrl;
};

/* Get event photos using its id */
Config.v3.getEventPhotos = (eventId, apiKey) => {
    if (!eventId) {
        throw new Error('must use an event ID');
    } else if (!apiKey) {
        throw new Error('must use an API KEY');
    }
    let eventsUrl = Config.apiHost + Config.groupName + '/events/' + eventId + '/photos';
    eventsUrl = eventsUrl.concat('?sign=true&key=' + apiKey)
        .concat('&desc=true&fields=comment_count,short_link');
    return eventsUrl;
};

/* Get event RSVP using its id */
Config.v3.getEventRsvps = (eventId, apiKey) => {
    if (!eventId) {
        throw new Error('must use an event ID');
    } else if (!apiKey) {
        throw new Error('must use an API KEY');
    }
    let eventsUrl = Config.apiHost + Config.groupName + '/events/' + eventId + '/rsvps';
    eventsUrl = eventsUrl.concat('?sign=true&key=' + apiKey)
        .concat('&desc=true&order=time');
    return eventsUrl;
};

/* ::: Community photos ::: */

/* Get all photos */
Config.v3.getAllPhotos = (apiKey) => {
    let eventsUrl = Config.apiHost + Config.groupName + '/photos';
    if (!apiKey) {
        throw new Error('must use an API KEY');
    }
    eventsUrl = eventsUrl.concat('?sign=true&key=' + apiKey)
        .concat('&desc=true&fields=comment_count');
    return eventsUrl;
};

/* ::: Community venues ::: */

/* Get all venues */
Config.v3.getAllVenues = (apiKey) => {
    let eventsUrl = Config.apiHost + Config.groupName + '/venues';
    if (!apiKey) {
        throw new Error('must use an API KEY');
    }
    eventsUrl = eventsUrl.concat('?sign=true&key=' + apiKey)
        .concat('&desc=true');
    return eventsUrl;
};

/* ::: Module exports ::: */
module.exports = Config;