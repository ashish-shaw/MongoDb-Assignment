const EventEmitter = require("events");

const verificationEmail = require("./verification.js");
const welcomeEmail = require("./welcome.js");
const adminEmail = require("./admin.js");

const eventEmitter = new EventEmitter();

module.exports = function () {
  const user = { firstName: "Ashish" };

  eventEmitter.on("reg", verificationEmail);
  eventEmitter.on("reg", welcomeEmail);
  eventEmitter.on("reg", adminEmail);

  eventEmitter.emit("reg", user);
};
