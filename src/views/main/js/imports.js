// Variables
// production
// development
// ex_server_test
const env = "ex_server_test"

// Imports
const { readdirSync, mkdirSync, lstatSync, rmSync } = require("node:fs");
const { join } = require("node:path");
const config = require("../../../../config.json");