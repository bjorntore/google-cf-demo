const datastore = require('@google-cloud/datastore')();
var key = datastore.key(['Thing']);

function getTheThings(req, res) {
  let keyTwo = datastore.key(['Thing']);
  let query = datastore.createQuery(keyTwo);

  // datastore.runQuery(query, function (err, entities) {

  //   if (Object.keys(err).length > 0) {
  //     // Error handling omitted.
  //     res.status(400)
  //     .send({error: JSON.stringify(err)});
  //   }

  //   res.status(200)
  //   .send({helloFromBT: "Is veryyyy naaaice"});

  //   res.status(200)
  //     .send(entities);
  // });

  // datastore.runQuery(query, function(err, entities) {
  //   // entities = An array of records.
  
  //   // Access the Key object for an entity.
  //   // var firstEntityKey = entities[0];

  //   res.status(200).send({entities: JSON.stringify(entities)});
  // });

  datastore.runQuery(query, function(err, entities, info) {
    if (err) {
      res.status(400).send({error: JSON.stringify(err)});
    }

    // Respond to the front end with the contacts and the cursoring token
    // from the query we just ran.
    res.status(200).send(entities);
  });
}

function saveNewThing(req, res) {

  datastore.save({
    key: key,
    data: JSON.stringify(req.body.theThing)
  }, function (err) {
    if (!err) {
      res
        .status(200)
        .send("All is good.");
    } else {
      res
        .status(400)
        .send({error: err});
    }
  });
}

exports.storeTheTing = function (req, res) {
  switch (req.method) {
    case 'GET':
      getTheThings(req, res);
      break;
    case 'POST':
      saveNewThing(req, res);
      break;
    default:
      res
        .status(500)
        .send({error: 'Something blew up!'});
      break;
  }
};
