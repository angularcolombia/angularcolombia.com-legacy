// The actual working server:

// const meetup = require('@unjavascripter/meetup-api');
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 8090;

// const MEETUP_API_KEY = process.env.MEETUP_API_KEY;

// const MEETUP_GROUP_NAME = process.env.MEETUP_GROUP_NAME;

// const Meetup = new meetup(MEETUP_API_KEY);


// app.get('/', function (req, res) {
//   Meetup.getNextEvent(MEETUP_GROUP_NAME).then(event => {
//     res.send(event);
//   }).catch(err => {
//     res.end();
//   });
// });

// app.listen(port, () => {
//   console.log(`listening in port ${port}...`);
// });

// -----------------------------------------------------------------------------------------------------------

// A mock server for development purposes

const express = require('express');
const app = express();
const port = process.env.PORT || 8090;

app.use(function (req, res, next) {
  res.header('X-XSS-Protection', 0);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/meetup', function (req, res) {
  res.json([{ "created": 1506830751000, "id": "243818191", "name": "test event title", "status": "upcoming", "time": 1514781900000, "rsvp_open_offset": "PT24H", "updated": 1506831171000, "utc_offset": -18000000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 25523933, "name": "Centro de eventos Angular Colombia", "lat": 4.658224105834961, "lon": -74.09464263916016, "repinned": true, "address_1": "Calle 72 # 50 - 62", "city": "Bogotá", "country": "co", "localized_country_name": "Colombia" }, "group": { "created": 1417366466000, "name": "Angular Colombia", "id": 18223068, "join_mode": "open", "lat": 4.630000114440918, "lon": -74.08999633789062, "urlname": "Angular-Colombia", "who": "Desarrolladores Angular", "localized_location": "Bogotá, Colombia", "region": "en_US" }, "link": "https://www.meetup.com/Angular-Colombia/events/243818191/", "description": "<p><b>Test headline</b></p> <p>Test test</p> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur odio, dolores neque temporibus quaerat ab inventore facilis facere amet perspiciatis dolorum tempore dignissimos, itaque vel quae sunt deserunt blanditiis totam.</p> <p><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In temporibus aspernatur cupiditate voluptate eos perspiciatis nemo, blanditiis nisi voluptatibus inventore, saepe dolorum veritatis, doloribus earum ipsa eveniet fuga! Architecto, possimus?Consequatur numquam exercitationem cupiditate quas voluptatum veniam molestias rerum. Laboriosam, placeat et, doloribus aliquam nobis ut illum dolorum, quisquam mollitia quod omnis. Ipsa ratione, ea quae beatae rem sequi. Nostrum?Maiores magnam eligendi numquam eaque cumque ipsum, delectus assumenda, modi quam dolore, hic minima animi quo nostrum autem! Odit similique debitis repellat, quod accusamus animi ducimus earum provident ipsum quae!</p> <p><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum aut reprehenderit, ratione eaque at a deleniti quo doloremque quis, magnam consectetur in est accusamus corporis repudiandae similique quos? Excepturi, itaque.Illo architecto ratione aspernatur unde rem facilis aperiam iusto ipsa asperiores, fugiat cum expedita ipsum similique sed placeat ipsam animi quidem. Natus iusto ratione, excepturi dolor adipisci illum. Dolores, nobis.</p> <p><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus fugiat totam! Repellendus ut veniam, recusandae placeat reiciendis enim molestiae inventore est excepturi temporibus consectetur, quibusdam officiis obcaecati? Aperiam, et!</p> <p>\n\n\nPor: test // <a href=\"https://www.te.st/test\">@test</a></p> ", "visibility": "public" }]);
});

/* Custom meetups api usage ( by @marlonlom ) */
app.use(require('body-parser').urlencoded({ extended: false }));

app.use('/meetup', require('./ngco-meetups/events_v3'));
app.use('/meetup', require('./ngco-meetups/photos_v3'));
app.use('/meetup', require('./ngco-meetups/venues_v3'));
app.use('/meetup', require('./ngco-meetups/google_staticmaps'));

app.listen(port, () => {
  console.log(`listening in port ${port}...`);
});