var util = require('util');
var Device = require('zetta-device');
var Sensor = require('node-adafruit-bme280')

var BME280 = module.exports = function() {
  this.temperature = null;
  this.pressure = null;
  this.humidity = null;

  Device.call(this);
};

util.inherits(BME280, Device);

BME280.prototype.init = function(config) {
  config
    .type('sensor')
    .monitor('temperature')
    .monitor('pressure')
    .monitor('humidity');

  var self = this;

  setInterval(function() {
    Sensor.probe(function(temperature, pressure, humidity) {
      self.temperature = temperature;
      self.pressure = pressure;
      self.humidity = humidity;
    });
  }, 5000);
};
