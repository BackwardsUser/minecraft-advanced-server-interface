const { readdirSync, mkdirSync, lstatSync, rmSync } = require("node:fs");
const { join } = require("node:path");
const config = require("../../../../config.json");