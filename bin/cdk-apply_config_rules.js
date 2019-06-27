#!/usr/bin/env node

// @ts-ignore: Cannot find declaration file
require('source-map-support/register');
const cdk = require('@aws-cdk/core');
const { CdkApplyConfigRulesStack } = require('../lib/cdk-apply_config_rules-stack');

const app = new cdk.App();
new CdkApplyConfigRulesStack(app, 'CdkApplyConfigRulesStack');
