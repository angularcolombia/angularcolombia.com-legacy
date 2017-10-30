// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAHvpUkzcJT4_8SUZO-kdKVL3ZeQBDKGok",
    authDomain: "angularcolombia-dev.firebaseapp.com",
    databaseURL: "https://angularcolombia-dev.firebaseio.com",
    projectId: "angularcolombia-dev",
    storageBucket: "",
    messagingSenderId: "824157910462"
  },
  functionsUrl: 'https://us-central1-angularcolombia-dev.cloudfunctions.net',
  meetupApi: 'http://angularcolombia.local:8090/meetup',
  staticMapsKey: 'AIzaSyCgHnacoojWqeSvsAHK9kNE7hbBb5lIK04'
};
