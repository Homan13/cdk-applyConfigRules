#!/usr/bin/env node

// @ts-ignore: Cannot find declaration file
require('source-map-support/register');
const cdk = require('@aws-cdk/core');
const { CdkApplyConfigRulesMgmtStack } = require('../lib/cdk-apply_config_rules_mgmt-stack');
const { CdkApplyConfigRulesIAMStack } = require('../lib/cdk-apply_config_rules_iam-stack');
const { CdkApplyConfigRulesComputeStack } = require('../lib/cdk-apply_config_rules_compute-stack');
const { CdkApplyConfigRulesDBStack } = require('../lib/cdk-apply_config_rules_db-stack');
const { CdkApplyConfigRulesStorageStack } = require('../lib/cdk-apply_config_rules_storage-stack');
const { CdkApplyConfigRulesVPCStack } = require('../lib/cdk-apply_config_rules_vpc-stack');

const app = new cdk.App();
new CdkApplyConfigRulesMgmtStack(app, 'CdkApplyConfigRulesMgmtStack');
new CdkApplyConfigRulesIAMStack(app, 'CdkApplyConfigRulesIAMStack');
new CdkApplyConfigRulesComputeStack(app, 'CdkApplyConfigRulesComputeStack');
new CdkApplyConfigRulesDBStack(app, 'CdkApplyConfigRulesDBStack');
new CdkApplyConfigRulesStorageStack(app, 'CdkApplyConfigRulesStorageStack');
new CdkApplyConfigRulesVPCStack(app, 'CdkApplyConfigRulesVPCStack');
