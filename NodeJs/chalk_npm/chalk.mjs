import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
console.log(chalk.blue("Hello"));
console.log(chalk.blue.underline("Hello"));
console.log(chalk.blue.underline.bold("Hello"));
console.log(chalk.blue.underline.inverse("Hello"));
console.log(chalk.bgCyan("Chirag"));
chalkAnimation.rainbow("I am Chirag Goel. I am Sophomore at IIIT Ranchi.");
setTimeout(() => {
 console.log('Task Completed.')
}, 1000);
