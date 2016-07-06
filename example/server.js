var zetta = require('zetta');
var BME280 = require('../index');

zetta()
  .use(BME280)
  .listen(1337);
