const cdk = require('@aws-cdk/core');
const config = require('@aws-cdk/aws-config');

class CdkApplyConfigRulesIAMStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const keysRotated = new config.ManagedRule(this, 'accessKeysRotated', {
      identifier: 'ACCESS_KEYS_ROTATED', // required field
      configRuleName: 'accessKeysRotated',
      description: 'Config rule that checks that access keys have been rotated within the number of days specified'
    });

    const acmExpiryChck = new config.ManagedRule(this, 'acmCertExpiryCheck', {
      identifier: 'ACM_CERTIFICATE_EXPIRATION_CHECK', // required field
      configRuleName: 'acmCertExpiryCheck',
      description: 'Config rule that checks whether certificates in your account are marked for expiration',
      inputParameters: {
        daysToExpiration: 90
      }
    });

    const cmkKeyRotate = new config.ManagedRule(this, 'cmkKeyRotationEnabled', {
      identifier: 'CMK_BACKING_KEYROTATION_ENABLED', // required field
      configRuleName: 'cmkBackingKeyRotationEnabled',
      description: 'Config rule that checks whether key rotation is enabled for each customer managed key'
    });

    const shldPlcyChk = new config.ManagedRule(this, 'fmsShieldResourcePolicyCheck', {
      identifier: 'FMS_SHIELD_RESOURCE_POLICY_CHECK', // required field
      configRuleName: 'fmsShieldResourcePolicyCheck',
      description: 'Config rule that checks for Shield protection, and also for a web ACL',
      inputParameters: {
        webACLId: ''
      }
    });

    const webALCPlcyChk = new config.ManagedRule(this, 'fmsWebACLPolicyCheck', {
      identifier: 'FMS_WEBACL_RESOURCE_POLICY_CHECK', //required field
      configRuleName: 'fmsWebACLPolicyCheck',
      description: 'Config rule that checks for a web ACL associated with an ALB or CF distro',
      inputParameters: {
        webACLId: ''
      }
    });

    const webACLRulegrpAsscnChk = new config.ManagedRule(this, 'fmsWebACLRulegroupAssociationCheck', {
      identifier: 'FMS_WEBACL_RULEGROUP_ASSOCIATION_CHECK', // required field
      configRuleName: 'fmsWebACLRulegroupAssociationCheck',
      description: 'Config rule that checks rule groups associate w/ ACL at correct priority',
      inputParameters: {
        ruleGroups: ''
      }
    });

    const grddtyEnbldCentrlzd = new config.ManagedRule(this, 'guarddutyEnabledCentralized', {
      identifier: 'GUARDDUTY_ENABLED_CENTRALIZED', // required field
      configRuleName: 'guarddutyEnabledCentralized',
      description: 'Config rule that checks for GuardDuty being enabled in your account and region'
    });

    const iamGrpUsersChk = new config.ManagedRule(this, 'iamGroupHasUsersCheck', {
      identifier: 'IAM_GROUP_HAS_USERS_CHECK', //required field
      configRuleName: 'iamGroupHasUsersCheck',
      description: 'Config rule that checks IAM groups have at least one user'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPlcyBlcklstChk = new config.ManagedRule(this, 'iamPolicyBlacklistedCheck', {
      identifier: 'IAM_POLICY_BLACKLISTED_CHECK', // required field
      configRuleName: 'iamPolicyBlacklistedCheck',
      description: 'Config rule that checks each IAM resource for an attached policy statement',
      inputParameters: {
        policyArns: '',
        exceptionList: ''
      }
    });

    const iamPlcyNoAdmAccess = new config.ManagedRule(this, 'iamPolicyNoStatementsWithAdminAccess', {
      identifier: 'IAM_POLICY_NO_STATEMENTS_WITH_ADMIN_ACCESS', // required field
      configRuleName: 'iamPolicyNoStatementsWithAdminAccess',
      description: 'Config rule that checks that default IAM policies do not have admin acces'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

    const iamPwdPlcy = new config.ManagedRule(this, 'iamPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY', // required field
      configRuleName: 'iamPasswordPolicy',
      description: 'Config rule that checks that password policy meets requirements'
    });

  }
}

module.exports = { CdkApplyConfigRulesIAMStack }
