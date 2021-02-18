'use strict';
let pipelineNgProjects = [];
let commitMessageNgProjects = [];
const commitMessage = process.env.BUILD_COMMIT_MESSAGE;
Object.keys(process.env).forEach(k => {
  console.log(`##[debug]ENV_VAR=${k}`);
  if(k.startsWith('NG_PROJECT_')) {
    pipelineNgProjects.push(process.env[k]);
  }
});
let runProjects = commitMessage.split('##');
let temp = commitMessage.split('##');
if(temp.length > 1) {
  temp = temp[1].split(',').map(v => v.trim());
} else {
  commitMessageNgProjects = pipelineNgProjects.join(',');
}
console.log(`##[debug]BUILD_COMMIT_MESSAGE=${commitMessage}`);
console.log(`##[debug]PIPELINE_NG_PROJECTS=${JSON.stringify(pipelineNgProjects)}`);
console.log(`##[debug]COMMIT_MESSAGE_NG_PROJECTS=${JSON.stringify(commitMessageNgProjects)}`);

//console.log(`##[debug]BUILD_COMMIT_MESSAGE=${process.env.BUILD_COMMIT_MESSAGE}`);
/*const fs = require('fs');
const commitMessage = 'Test ##project-a##';
// const commitMessage = 'Test';
let runProjects = commitMessage.split('##');
let workSpaceProjects = [];
let rawData = fs.readFileSync('angular.json');
let ngConfig = JSON.parse(rawData);
Object.keys(ngConfig.projects).forEach(k => {
  workSpaceProjects.push(k);
});
let buildProjects = [];
if(runProjects.length > 1) {
  runProjects = runProjects[1].split(',').map(v => v.trim());
  workSpaceProjects.forEach(wp => {
    runProjects.forEach(rp => {
      if (wp === rp) buildProjects.push(rp);
    });
  });
} else {
  buildProjects = workSpaceProjects;
}

console.log(buildProjects);
console.log(`echo ##vso[task.setvariable variable=sauce]crushed tomatoes`);*/
