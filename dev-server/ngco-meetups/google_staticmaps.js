/** 
 * Router for handle google staticmap image downloading.
 */
const express = require('express'),
    request = require('request'),
    router = express.Router(),
    StaticMaps = {
        baseHost: "https://maps.googleapis.com/maps/api"
    };

/**
 * Download google staticmaps image.
 */
router.get('/staticmap', (req, resp) => {
    let map_position = req.query.center,
        image_url = StaticMaps.baseHost
            .concat('/staticmap?center=#MAP_LOCATION&zoom=16&scale=1&size=260x200&maptype=roadmap&format=jpg&sensor=false&visual_refresh=true&markers=size:normal|color:0xff0000|label:A|#MAP_LOCATION')
            .replace('#MAP_LOCATION', map_position).replace('#MAP_LOCATION', map_position);

    request(encodeURI(image_url)).pipe(resp);
});


module.exports = router;