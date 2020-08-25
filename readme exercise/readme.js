const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


 let  message1 = "What is the title of your project?",
      message2 = "Write a description Header.",
      message2a = "Write a description body",
      message3 = "Installation instructions.",
      message4 = "describe usage.",
      message5 = "Choose a license.",
      message6 = "What are the rules for contributing?",
      message7 = "Who are the authors?",
      message8 = "How do you run tests?",
      message9 = "Enter the url of your profile picture",
      message10 = "Enter email for contact",
      message11 = "Write a table of contents separated by commas";


    const appendToFileH = (dataName) => {
        fs.appendFile('readme.md', `## ${dataName}` + "\n", (err) => {
            if (err) throw err;
            })        
    }

    const appendToFileD = (dataName) => {
        fs.appendFile('readme.md', `${dataName}` + "\n", (err) => {
            if (err) throw err;
            })        
    }


rl.question(`${message1} \n`, (ans) => {
    let data = `${ans}`;
    appendToFileH(data);

        rl.question(`${message2} \n`, (ans) => {
            let data = `${ans}`;
            appendToFileH(data);
                rl.question(`${message2a} \n`, (ans) => {
                let data = `${ans}`;
                appendToFileD(data);

        rl.question(`${message11} \n`, (ans) => {
            let data = (`${ans}`).split(", ").join("\n" + " - ");
             appendToFileD(`## Table of Contents \n + ${data}`);

        rl.question(`${message3} \n`, (ans) => {
            let data = `${ans}`;
             appendToFileD(`## Installation instructions \n + ${data}`);

             rl.question(`${message4} \n`, (ans) => {
                let data = `${ans}`;
                 appendToFileD(`## Usage \n + ${data}`);

             rl.question(`${message7} \n`, (ans) => {
                let data = `${ans}`;
                 appendToFileD(`## Authors \n + ${data}`);
                 
                 rl.question(`${message8} \n`, (ans) => {
                    let data = `${ans}`;
                     appendToFileD(`## Tests \n + ${data}`);
                     
                 rl.question(`${message10} \n`, (ans) => {
                    let data = `${ans}`;
                     appendToFileD(`## Email \n + ${data}`);                 
                            })                     

                            })

                        })                 

                    })

                })
    
            })

        })
    
    })
});
