// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App } from "cdktf";
import { NutrinoCdktfStack , repoName } from "nutrino-tf/NutrinoCdktfStack";
// Import modules here  
// import { ModuleName } from "./.gen/modules/<ModuleName>"
// The ModuleName is the name you set to it in the cdktf.json with a capital first letter

class MyStack extends NutrinoCdktfStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    // define resources here


    // define outputs here
  }
}

const app = new App();
new MyStack(app, `${repoName}-infra`);
app.synth();
