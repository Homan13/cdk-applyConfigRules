#!/usr/bin/env node

// @ts-ignore: Cannot find declaration file
require('source-map-support/register');
const cdk = require('@aws-cdk/core');
const { CdkApplyConfigRulesMgmtStack } = require('../lib/cdk-apply_config_rules_mgmt-stack');

const app = new cdk.App();
new CdkApplyConfigRulesMgmtStack(app, 'CdkApplyConfigRulesMgmtStack');
