const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Square, Circle, } = require('./lib/shapes')



function start() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'enter three letters',

        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'what color would you like your text to be',
        },

        {
            type: 'list',
            name: 'shape',
            message: 'what shape would you like',
            choices: ['Triangle', 'Square', 'Circle'],
        },

        {
            type: 'input',
            name: 'backgroundcolor',
            message: 'what color would you like the background',

        },

    ]).then((shapeanswer) => {
        let shapechoice;
        switch (shapeanswer.shape) {
            case 'Triangle':
                shapechoice = new Triangle(shapeanswer.backgroundcolor, shapeanswer.text, shapeanswer.textcolor)
                break;
            case 'Square':
                shapechoice = new Square(shapeanswer.backgroundcolor, shapeanswer.text, shapeanswer.textcolor)
                break;
            case 'Circle':
                shapechoice = new Circle(shapeanswer.backgroundcolor, shapeanswer.text, shapeanswer.textcolor)
                break;
        }
        fs.writeFileSync('trouble.svg', shapechoice.create())
    })
}

start()