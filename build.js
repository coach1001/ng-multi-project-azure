const { exec } = require("child_process");

exec('echo "##vso[task.setvariable variable=sauce]crushed tomatoes"', (error, stdout, stderr) => {
});