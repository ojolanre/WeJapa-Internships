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
    const mappedArray = meetArr.map((val) => {
      if (typeof(val) === 'object') {
            let items = Object.values(val)
            for (let i = 0; i < items.length ; i++) {
              if (items[i] !== " " || items[i] !== "N/A" || items[i] !== "-") {
                console.log(items[i]);
              }
          }
            console.log(items)
      } else if (val !== " " || val !== "N/A" || val !== "-") {
        console.log(val);
      }
    });;
    // console.log(meetArr);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
