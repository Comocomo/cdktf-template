// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { NutrinoCdktfStack, NutrinoTFOutput, EnvData, apply} from "@comocomo/cdktf-nutrino-class";
// Import modules here
// import { ModuleName } from "./.gen/modules/<ModuleName>"
// The ModuleName is the name you set to it in the cdktf.json with a capital first letter
class MyStack extends NutrinoCdktfStack {
  constructor(scope: Construct, id: string, env: EnvData) {
    super(scope, id, env);
  }

  async myStackInit() {
    // define resources here

    // define outputs here
  }
}

apply(MyStack);