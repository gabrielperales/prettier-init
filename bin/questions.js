exports.mainOptions = [
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
];

exports.propertiesOptions = [
  {
    type: 'checkbox',
    name: 'properties',
    message: 'Select the properties you want to add to your .prettierrc file:',
    choices: [
      'arrowParens',
      'bracketSpacing',
      'jsxBracketSameLine',
      'parser',
      'printWidth',
      'semi',
      'singleQuote',
      'tabWidth',
      'trailingComma',
      'useTabs',
    ].map(x => ({name: x, value: x})),
  },
];

exports.editPropertiesOptions = [
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
    name: 'jsxBracketSameLine',
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
    message: 'Include parentheses around a sole arrow function parameter?',
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
];

exports.fileOptions = [
  {
    type: 'rawlist',
    name: 'output',
    message: 'What format do you want your config file to be in?',
    choices: ['json', 'yml'],
  },
];
