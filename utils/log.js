const chalk = require('chalk');
const gradient = require('gradient-string');

module.exports = (data, option) => {
  let coloredData = '';

  switch (option) {
    case 'warn':
      coloredData = gradient('#3aed34', '#c2ed34').multiline('[ Warn ] - ' + data);
      console.log(chalk.bold(coloredData));
      break;
    case 'error':
      coloredData = chalk.bold.hex('#FF0000')('[ Error ] - ') + chalk.bold.red(data);
      console.log(coloredData);
      break;
    default:
      coloredData = gradient("#C805F8","#B905F8","#AE05F8","#A305F8","#8605F8","#6105F8","#4405F8","#3505F8","#2D05F8").multiline('[Warthog-12S1] - ' + data);
      console.log(chalk.bold(coloredData));
      break;
  }
};

module.exports.loader = (data, option) => {
  let coloredData = '';

  switch (option) {
    case 'warn':
      coloredData = gradient("#C805F8","#B905F8","#AE05F8","#A305F8","#8605F8","#6105F8","#4405F8","#3505F8","#2D05F8").multiline('[===== Warn =====] - ' + data);
      console.log(chalk.bold(coloredData));
      break;
    case 'error':
      coloredData = chalk.bold.hex('#FF0000')('[ Error ] - ') + chalk.bold.red(data);
      console.log(coloredData);
      break;
    default:
      coloredData = gradient("#C805F8","#B905F8","#AE05F8","#A305F8","#8605F8","#6105F8","#4405F8","#3505F8","#2D05F8").multiline('[Warthog-12S1] - ' + data);
      console.log(chalk.bold(coloredData));
      break;
  }
};