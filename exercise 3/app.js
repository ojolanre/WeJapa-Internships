const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    const meet = JSON.parse(data); 
    let meetArr = Object.values(meet); 
    for (var i =  0; i < meetArr.length; i++) {
      let arr = [];
      
        if (items.includes("N/A" || "" || "-")) {
          arr = arr.push(items);
          return arr
      }       
    }
    console.log(meetArr);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

// const https = require('https');

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });