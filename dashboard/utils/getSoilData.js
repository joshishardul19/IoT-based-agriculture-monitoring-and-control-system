const fetch = require("node-fetch");

module.exports.getSoilDataAPI = async () => {
  try {
    const url = `https://api.thingspeak.com/channels/1967576/feeds.json`;

    const res = await fetch(url);
    const data = await res.json();
    return data.feeds;
  } catch (e) {
    console.log("GET OUT");
  }
};
