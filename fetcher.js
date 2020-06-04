const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1];


request(url, (error, response, body) => {
  // a thing to remember: even if I don't need use 'response', I still have to put 'response' in the parameter.
  if (error) {
    console.log("error!");
  }
  fs.writeFile(localPath, body, (error) => {
    if (error) {
      console.log("error");
    }
    const stat = fs.statSync(localPath);
    console.log(`Downloaded and saved ${stat.size} bytes to ${localPath}`);
  });
  
});



