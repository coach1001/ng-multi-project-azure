'use strict';
let pipelineNgProjects = [];
let commitMessageNgProjects = [];
const commitMessage = process.env.BUILD_COMMIT_MESSAGE;
Object.keys(process.env).forEach(k => {
  if(k.startsWith('NG_PROJECT_')) {
    pipelineNgProjects.push(process.env[k]);
  }
});
let runProjects = commitMessage.split('##');
let temp = commitMessage.split('##');
if(temp.length > 1) {
  temp = temp[1].split(',').map(v => v.trim());
  commitMessageNgProjects = temp.join(',');
} else {
  commitMessageNgProjects = pipelineNgProjects.join(',');
}
console.log(`##[debug]BUILD_COMMIT_MESSAGE=${commitMessage}`);
console.log(`##[debug]PIPELINE_NG_PROJECTS=${JSON.stringify(pipelineNgProjects)}`);
console.log(`##[debug]COMMIT_MESSAGE_NG_PROJECTS=${JSON.stringify(commitMessageNgProjects)}`);
console.log(`##vso[task.setvariable variable=NG_PROJECTS]${commitMessageNgProjects}`);
