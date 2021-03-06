const cdk = require('@aws-cdk/core');
const config = require('@aws-cdk/aws-config');

class CdkApplyConfigRulesMgmtStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const cloudTrail2CloudWatch = new config.ManagedRule(this, 'cloudTrailCloudWatchLogsEnabled', {
      identifier: 'CLOUD_TRAIL_CLOUD_WATCH_LOGS_ENABLED', // required field
      configRuleName: 'cloudTrailLogs2CloudWatch',
      description: 'Config rule that checks for CloudTrail logs being logged off to CloudWatch'
    });

    const cloudTrailEncrypted = new config.ManagedRule(this, 'cloudTrailEncryptionEnabled', {
      identifier: 'CLOUD_TRAIL_ENCRYPTION_ENABLED', // required field
      configRuleName: 'cloudTrailsEncrypted',
      description: 'Config rule that checks for CloudTrail is configured to use server side encryption'
    });

    const cloudTrailEnbld = new config.ManagedRule(this, 'cloudTrailEnabled', {
      identifier: 'CLOUD_TRAIL_ENABLED', // required field
      configRuleName: 'cloudTrailEnabled',
      description: 'Config rule that checks for CloudTrail being enabled in an account'
    });

    const cloudTrailLogFileValidation = new config.ManagedRule(this, 'cloudTrailLogFileValidationEnabled', {
      identifier: 'CLOUD_TRAIL_LOG_FILE_VALIDATION_ENABLED', // required field
      configRuleName: 'cloudTrailLogFileValidationEnabled',
      description: 'Config rule that checks that CloudTrail log files have validation checks enabled'
    });

    const cfnStackDriftDetectionEnabled = new config.ManagedRule(this, 'cfnStackDriftDetectionEnabled', {
      identifier: 'CLOUDFORMATION_STACK_DRIFT_DETECTION_CHECK', // required field
      configRuleName: 'cfnDriftDetectionEnabled',
      description: 'Config rule that checks that drift detection for CloudFormation is enabled',
      inputParameters: {cloudformationRoleArn: 'arn:aws:iam::361722089173:role/cfReadOnly'}
    });

    const cfnNotificationCheck = new config.ManagedRule(this, 'cfnNotificationCheck', {
      identifier: 'CLOUDFORMATION_STACK_NOTIFICATION_CHECK', // required field
      configRuleName: 'cfnStackUpdateNotificationsEnabled',
      description: 'Config rule that checks your cfn stacks to see if they notify SNS per event'
    });

    const cloudWatchAlrmActnChk = new config.ManagedRule(this, 'cloudWatchAlarmActionCheck', {
      identifier: 'CLOUDWATCH_ALARM_ACTION_CHECK', // required field
      configRuleName: 'cloudWatchAlarmActionCheck',
      description: 'Config rule that checks if there is at least one CloudWatch action alarm set on the account',
      inputParameters: {
        alarmActionRequired: 'true',
        insufficientDataActionRequired: 'true',
        okActionRequired: 'false'
      }
    });

    const cloudWatchAlrmResourceChk = new config.ManagedRule(this, 'cloudWatchAlarmResourceCheck', {
      identifier: 'CLOUDWATCH_ALARM_RESOURCE_CHECK', // required field
      configRuleName: 'cloudWatchAlarmResourceCheck',
      description: 'Config rule that checks whether a specified resource has a CloudWatch alarm for specified alarm type',
      inputParameters: {
        resourceType: 'AWS::S3::Bucket',
        metricName: 'GetRequests'
      }
    });

    const cloudWatchAlrmSttngsChk = new config.ManagedRule(this, 'cloudWatchAlarmSettingsCheck', {
      identifier: 'CLOUDWATCH_ALARM_SETTINGS_CHECK', // required field
      configRuleName: 'cloudWatchAlarmSettingsCheck',
      description: 'Config rule that checks for CloudWatch alarms with a given metric with specified settings',
      inputParameters: {
        metricName: 'GetRequests'
      }
    });

    const codeBuildCredChk = new config.ManagedRule(this, 'codeBuildCredentialsCheck', {
      identifier: 'CODEBUILD_PROJECT_ENVVAR_AWSCRED_CHECK', // required field
      configRuleName: 'codeBuildEnvCredentialsCheck',
      description: 'Config rule that checks for AWS Access and Secret keys in your CodeBuild project'
    });

    const codeBuildSourceRepoChk = new config.ManagedRule(this, 'codeBuildSourceRepoURLCheck', {
      identifier: 'CODEBUILD_PROJECT_SOURCE_REPO_URL_CHECK', // required field
      configRuleName: 'codeBuildProjectSourceRepoURLCheck',
      description: 'Config rule that checks for AWS credentials in the attached source repo'
    });

    const codePipelineDeployCntChk = new config.ManagedRule(this, 'codePipelineDeploymentCountCheck', {
      identifier: 'CODEPIPELINE_DEPLOYMENT_COUNT_CHECK', // required field
      configRuleName: 'codePipelineDeploymentCountCheck',
      description: 'Config rule that checks if a Pipelines first deployment deploys more than once'
    });

    const codePipelineRgnFanOutTst = new config.ManagedRule(this, 'codePipelineRegionFanOutTest', {
      identifier: 'CODEPIPELINE_REGION_FANOUT_CHECK', // required field
      configRuleName: 'codePipelineRegionFanOutTest',
      description: 'Config rule that checks to more than N times the regions the Pipeline has previously deployed to'
    });

    const multiRgnCloudTrailEnbld = new config.ManagedRule(this, 'multiRegionCloudTrailEnabled', {
      identifier: 'MULTI_REGION_CLOUD_TRAIL_ENABLED', // required field
      configRuleName: 'multiRegionCloudTrailEnabled',
      description: 'Config rule that checks for at least one multi-region enabled CloudTrail'
    });

    const requiredTags = new config.ManagedRule(this, 'requiredTags', {
      identifier: 'REQUIRED_TAGS', // required field
      configRuleName: 'requiredTags',
      description: 'Config rule that checks resources for required, specified tags',
      inputParameters: {tag1Key: 'Name'}
    });
  }
}

module.exports = { CdkApplyConfigRulesMgmtStack }
