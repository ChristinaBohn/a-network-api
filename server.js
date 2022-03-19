const express = require('express');
const mongodb = require('mongodb').MongoClient;
const data = require('./utils/data');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/aNetworkApi`;

let db;

mongodb.connect(

  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    
    db = client.db();
    db.collection('aNetworkApi').deleteMany({});
    db.collection('aNetworkApi').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      } else {
        console.err(err);
      }
      console.log(res.ops);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());