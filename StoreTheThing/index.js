const datastore = require('@google-cloud/datastore')();
var key = datastore.key(['Thing']);

function getTheThings(req, res) {
  let query = datastore.createQuery("Thing");

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

  datastore.runQuery(query, function(err, entities) {
    let entitiesWithKeys = entities.map((obj) => {
      obj.key = entity[datastore.KEY];
      return obj;
  })

    res.status(200).send(entitiesWithKeys);
    // return;
  });

  // res.status(200).send("SHOULD NOT GET HERE");
}

function saveNewThing(req, res) {

  var data = {
    data: req.body.theThing + ""
  };

  datastore.save({
    key: key,
    data: data
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
