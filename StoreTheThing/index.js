function handleGET (req, res) {
    res.status(200).send('Hello World!');
  }
  
  function handlePOST (req, res) {
    res.status(403).send('Forbidden!');
  }
  
  exports.storeTheTing = function (req, res) {
    switch (req.method) {
      case 'GET':
        handleGET(req, res);
        break;
      case 'POST':
        handlePOST(req, res);
        break;
      default:
        res.status(500).send({ error: 'Something blew up!' });
        break;
    }
  };