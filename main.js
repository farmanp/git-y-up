'use strict';

const chalk = require('chalk');
const log = console.log;
const box = require('ascii-box').box;
const inquirer = require('inquirer');
const { MENU_QUESTIONS } = require('./workflow/constants');

console.log(MENU_QUESTIONS)


function execute(command) {
  const exec = require('child_process').exec

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}

const WelcomeBox = log(chalk.green(
  box(
    `Welcome to Git-Y-Up: The git command line tool where the only 
    cowboy coding is you 🤠: now go on, git! `
  )
 )
);


const questions = [
	{
		type: 'list', 
		name: 'menu options',
		message: 'You may:',
		choices: [
				 'Create branch', 
				 'Travel the trail (git log)',
				 'Learn more about the trail'
				 ]
	}
	// {
	// 	type: 'list', 
	// 	name: 'story/bug',
	// 	message: 'what type of issue is this?',
	// 	choices: ['bug', 'story']
	// },
	// {
	// 	type: 'input', 
	// 	name: 'project',
	// 	message: 'what project is this for (Copy and paste number)',
	// 	validate: function(input) {
	// 		const projectNameCheck =/[APEX|AP|LOS]-[\d+$/]/;
	// 		const pass = input.match(projectNameCheck);
	// 		if (pass) {
	// 			return true;
	// 		}

	// 		return 'Project must be written as follows: [APEX, AP, LOS]-[story #]';
	// 	}		
	// },
	// {
	// 	type: 'input', 
	// 	name: 'story',
	// 	message: 'what is the name of the story? (Copy and paste from JIRA)'
	// }
]

inquirer.prompt(questions).then(answers => {
	if (answers['menu options'].includes('Travel the trail')) {
		execute('git lg');
	}
	// if (answers['project']) {
	// 	const branch = answers['story/bug'] + "/" + answers['project']+ "/" + answers['story'].replace(/[`&\/\\#,+()$~%.'":*?<>{}]/g,'').replace(/ /g, "_").toLowerCase()
	// 	console.log('Creating branch')
	// 	execute(`git checkout -b ${branch}`)
	// 	console.log(`Branch created as ${branch}`)		
	// } else {
	// 	const branch = answers['story/bug'] + "/" + answers['create branch for']
	// 	console.log('Creating branch')
	// 	execute(`git checkout -b ${branch}`)
	// 	console.log(`Branch created as ${branch}`)		
	// }
});
// Default
WelcomeBox

