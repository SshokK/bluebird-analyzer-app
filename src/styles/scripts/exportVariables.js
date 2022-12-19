/* eslint-disable @typescript-eslint/no-var-requires */
const exporter = require('sass-export').exporter;
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const EXPORT_TEMPLATE = fs.readFileSync('./src/styles/templates/exportVariables.hbs', {
  encoding: 'UTF8'
});

const EXPORTER_OPTIONS = {
  inputFiles: ['./src/styles/variables.scss'],
  includePaths: ['./src/styles']
};

const createStyleMap = (variables, variable) => {
  const variableNameCharacterToReplace = /-/g;
  const variableNameCharacterToSet = '_';

  const variableName = variable.name
    .substring(1) // Removes the $ sign
    .replace(variableNameCharacterToReplace, variableNameCharacterToSet) // Replaces dashes with underscores
    .toUpperCase();

  const variableValue = variable.compiledValue;

  return {
    ...variables,
    [variableName]: variableValue
  };
};

const exportVariables = () => {
  console.log(
    '\x1b[36m',
    `Parsing ${EXPORTER_OPTIONS.inputFiles} for SASS variables...`,
    '\x1b[0m'
  );

  const sassExport = exporter(EXPORTER_OPTIONS).getStructured();

  const styleMap = sassExport.variables.reduce(createStyleMap, {});

  console.log('\x1b[36m', `Generating the variables file...`, '\x1b[0m');

  const template = Handlebars.compile(EXPORT_TEMPLATE);
  const templateStr = template({ variables: JSON.stringify(styleMap) });

  const dir = path.resolve(__dirname, '../temp');
  const dest = path.resolve(__dirname, '../variables.ts');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  console.log('\x1b[36m', `Writing the the variables file to ${dest}`, '\x1b[0m');

  fs.writeFileSync(dest, templateStr);
};

exportVariables();
