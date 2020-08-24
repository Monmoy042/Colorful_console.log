// Chalk Library
/*
This ia s library for colorizing the console texts. 
Link: https://www.npmjs.com/package/chalk#256-and-truecolor-color-support

Step-1
------
First we need to install the library by using npm
Command: npm i chalk

Now good to go.....
*/

const chalk = require("chalk"); // First we need to require the library
const log = console.log;

// Basic Color
log(chalk.red("Hello World!"));
log(chalk.green("Hello World!"));
log(chalk.gray("Hello World!"));

// Background Color
log(chalk.bgRed("Hello there!!"));
log(chalk.bgCyan("Hello there!!"));
log(chalk.bgMagenta("Hello there!!"));
log(chalk.bgWhite(chalk.black("Hello from the Code Planet!!")));

// Styling and test decoration
log(chalk.bold("Here is BOLD"));
log(chalk.italic("This is Italic"));
log(chalk.underline("This is underline"));
log(chalk.white.bgRed.bold("Hello world!"));
log(chalk.white.bgRed.bold.inverse("Hello world!")); // This is called Chain Method

// Custom Colors
log(chalk.hex('#156g44').bold('Programming is Awesome...!'));
log(chalk.rgb(20,50,200).italic('Hello from the other planet'));

// Custom Themes
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
log(error('Error!'));
log(warning('Warning!!'));

// Template Literal
log(`
Battery: ${chalk.red('14%')}
Storage: ${chalk.yellow('78%')}
`);

let a = 10;
let b = false;
let c = "Programmers have no life...👨🏼‍💻"
log(`
a: ${chalk.cyan(a)}
b: ${chalk.cyan(b)}
c: ${chalk.cyan(c)}
`);