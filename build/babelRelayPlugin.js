var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../graphql.schema.json');

module.exports = getBabelRelayPlugin(schema.data);