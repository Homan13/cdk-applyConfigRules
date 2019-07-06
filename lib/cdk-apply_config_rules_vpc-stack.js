const cdk = require('@aws-cdk/core');
const config = require('@aws-cdk/aws-config');

class CdkApplyConfigRulesVPCStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const vpcDfltScrtyGrpClsd = new config.ManagedRule(this, 'vpcDefaultSecurityGroupClosed', {
      identifier: 'VPC_DEFAULT_SECURITY_GROUP_CLOSED', // required field
      configRuleName: 'vpcDefaultSecurityGroupClosed',
      description: 'Config rule that checks that your default SG does not allow inbound and outbound traffic'
    });

    const vpcFlwLgsEnbld = new config.ManagedRule(this, 'vpcFlowLogsEnabled', {
      identifier: 'VPC_FLOW_LOGS_ENABLED', // required field
      configRuleName: 'vpcFlowLogsEnabled',
      description: 'Config rule that checks that flow logs are enabled for your VPC',
      inputParameters: {
        trafficType: 'ALL'
      }
    });
  }
}

module.exports = { CdkApplyConfigRulesVPCStack }
