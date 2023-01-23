// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App } from "cdktf";
import simpleGit from 'simple-git';
import { NutrinoCdktfStack , repoName } from "nutrino-tf/NutrinoCdktfStack";
import { NutrinoTFOutput } from "nutrino-tf/NutrinoTFOutput";
// Import modules here  
// import { ModuleName } from "./.gen/modules/<ModuleName>"
// The ModuleName is the name you set to it in the cdktf.json with a capital first letter

async function getGitRootDir() {
    const git = simpleGit(process.cwd()) as any;
    return await git.revparse('--show-toplevel')
}

class MyStack extends NutrinoCdktfStack {
    constructor(scope: Construct, id: string){
        super(scope, id);

    // define resources here


    // define outputs here
  }
}

(async() => {
    const app = new App();
    const stack_id = await getGitRootDir();
    new MyStack(app, stack_id);
    app.synth();
})()