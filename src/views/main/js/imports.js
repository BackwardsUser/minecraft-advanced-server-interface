// Variables
// production
// development
// ex_server_test
const env = "development"

// Imports
const { readdirSync, mkdirSync, lstatSync, rmSync, createWriteStream } = require("node:fs");
const { join } = require("node:path");
const config = require("../../../../config.json");
const { ipcRenderer } = require("electron");
const https = require("https");
const checkInternetConnected = require("check-internet-connected");