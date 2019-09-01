#!/usr/bin/env node

const fs = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);

const cli = require('../lib/cli');

cli
  .then(({ extension, content }) => writeFileAsync(`.prettierrc.${extension}`, content))
  .catch(error => console.error(error));
