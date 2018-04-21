#!/usr/bin/env node
const fs = require('fs');
const {promisify} = require('util');

const writeFileAsync = promisify(fs.writeFile);
const inquirer = require('inquirer');

const defaults = {
  parser: 'babylon',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  rangeStart: 0,
  rangeEnd: null,
};

inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      message: 'How do you want to create your .prettierrc file?',
      choices: [
        {
          name: 'Aswering questions about the style',
          value: 'custom',
        },
        {
          name: 'With the default config',
          value: 'default',
        },
      ],
    },
  ])
  .then(({type}) => {
    if (type === 'custom') {
      return inquirer.prompt([
        {
          type: 'rawlist',
          name: 'parser',
          message: 'Select a parser:',
          choices: [
            'babylon',
            'flow',
            'typescript',
            'css',
            'less',
            'scss',
            'json',
            'graphql',
            'markdown',
            'vue',
          ],
          default: 'babylon',
        },
        {
          type: 'input',
          name: 'printWidth',
          message: 'Insert a print width:',
          default: '80',
          validate: input => /\d+/.test(input),
          filter: input => parseInt(input, 10),
        },
        {
          type: 'input',
          name: 'tabWidth',
          message: 'Insert a tab width:',
          default: '2',
          validate: input => /\d+/.test(input) || 'Width must be a number',
          filter: input => parseInt(input, 10),
        },
        {
          type: 'expand',
          name: 'semi',
          message: 'Do you want to use semicolons?',
          choices: [
            {
              key: 'y',
              name: 'Yes',
              value: true,
            },
            {
              key: 'n',
              name: 'No',
              value: false,
            },
          ],
          default: 0,
        },
        {
          type: 'expand',
          name: 'bracketSpacing',
          message: 'Print spaces between brackets?',
          choices: [
            {
              key: 'y',
              name: 'Yes',
              value: true,
            },
            {
              key: 'n',
              name: 'No',
              value: false,
            },
          ],
          default: 0,
        },
        {
          type: 'expand',
          name: 'jsxBrackedSameLine',
          message: 'Put > on the last line instead of at a new line?',
          choices: [
            {
              key: 'y',
              name: 'Yes',
              value: true,
            },
            {
              key: 'n',
              name: 'No',
              value: false,
            },
          ],
          default: 1,
        },
        {
          type: 'expand',
          name: 'singleQuote',
          message: 'Use single quotes instead of double quotes?',
          choices: [
            {
              key: 'y',
              name: 'Yes',
              value: true,
            },
            {
              key: 'n',
              name: 'No',
              value: false,
            },
          ],
          default: 1,
        },
        {
          type: 'rawlist',
          name: 'trailingComma',
          message: 'Print trailing commas wherever possible multi-line:',
          choices: ['none', 'es5', 'all'],
          default: 'none',
        },
        {
          type: 'rawlist',
          name: 'arrowParens',
          message:
            'Include parentheses around a solre arrow function parameter?',
          choices: ['avoid', 'always'],
          default: 'avoid',
        },
        {
          type: 'expand',
          name: 'useTabs',
          message: 'Indent with tabs instead of spaces?',
          choices: [
            {
              key: 'y',
              name: 'Yes',
              value: true,
            },
            {
              key: 'n',
              name: 'No',
              value: false,
            },
          ],
          default: 1,
        },
      ]);
    }

    return defaults;
  })
  .then(options => JSON.stringify(options, null, 2))
  .then(content => writeFileAsync('.prettierrc', content))
  .catch(error => console.error(error));
