const WordPress = require("wpapi");
const { backendURL } = require("./constants");
const wordpressURL = `${backendURL}/wp-json`;

const wp = new WordPress({
    endpoint: wordpressURL,
});

module.exports = wp;
