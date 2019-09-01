const inquirer = require('inquirer');
const yaml = require('js-yaml');

const defaults = require('./defaults');
const {
  mainOptions,
  propertiesOptions,
  editPropertiesOptions,
  fileOptions
} = require('./questions');

module.exports = inquirer
  .prompt(mainOptions)
  .then(
    ({ type }) =>
      type === 'custom'
        ? inquirer
            .prompt(propertiesOptions)
            .then(({ properties }) =>
              inquirer.prompt(
                editPropertiesOptions.filter(
                  question => properties.indexOf(question.name) !== -1
                )
              )
            )
        : defaults
  )
  .then(options =>
    inquirer.prompt(fileOptions).then(({ output }) => {
      const content = (() => {
        switch (output) {
          case 'json':
            return JSON.stringify(options, null, 2);
          case 'yml':
            return yaml.dump(options);
          default:
            throw new Error('file extension not valid');
        }
      })();

      return { extension: output, content };
    })
  );
