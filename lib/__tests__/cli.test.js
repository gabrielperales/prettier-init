const validate = require('jsonschema').validate;
const defaults = require('../defaults');
const schema = require('./json-schema/prettierrc.schema.json');
const prettierSchema = schema.definitions.optionsDefinition.properties;

describe('prettierInit', () => {
  it('default options are valid', () => {
    expect(validate(defaults, prettierSchema).valid).toBe(true);
  });
});
