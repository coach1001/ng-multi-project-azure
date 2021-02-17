const { exec } = require("child_process");

exec("echo ##vso[task.setvariable variable=temp]TempVal", (error, stdout, stderr) => {
});