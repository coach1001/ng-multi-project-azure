'use strict';
console.log(process.env.NG_PROJECTS, process.env.BUILD_COMMIT_MESSAGE);
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
