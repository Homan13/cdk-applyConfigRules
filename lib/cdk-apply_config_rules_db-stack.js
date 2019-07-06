const cdk = require('@aws-cdk/core');
const config = require('@aws-cdk/aws-config');

class CdkApplyConfigRulesDBStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const dbInstanceBckupEnbld = new config.ManagedRule(this, 'dbInstanceBackupEnabled', {
      identifier: 'DB_INSTANCE_BACKUP_ENABLED', // required field
      configRuleName: 'dbInstanceBackupEnabled',
      description: 'Config rule that checks whether RDS DBs have backups enabled'
    });

    const dnmoAutoscaleEnbld = new config.ManagedRule(this, 'dynamoDBAutoscalingEnabled', {
      identifier: 'DYNAMODB_AUTOSCALING_ENABLED', // required field
      configRuleName: 'dynamoDBAutoscalingEnabled',
      description: 'Config rule that checks whether auto-scaling or on-demand is enabled on Dynamo'
    });

    const dnmoTbleEncryptEnbld = new config.ManagedRule(this, 'dynamoDBTableEncryptionEnabled', {
      identifier: 'DYNAMODB_TABLE_ENCRYPTION_ENABLED', // required field
      configRuleName: 'dynamoDBTableEncryptionEnabled',
      description: 'Config rule that checks whether Dynamo tables are encrypted and their status'
    });

    const dnmoThrputLmtChk = new config.ManagedRule(this, 'dynamoDBThroughputLimitCheck', {
      identifier: 'DYNAMODB_THROUGHPUT_LIMIT_CHECK', // required field
      configRuleName: 'dynamoDBThroughputLimitCheck',
      description: 'Config rule that checks whether Dynamo tables are approaching configured limits',
      inputParameters: {
        accountRCUThresholdPercentage: 85,
        accountWCUThresholdPercentage: 85
      }
    });

    const rdsInstancePblcAccessChk = new config.ManagedRule(this, 'rdsInstancePublicAccessCheck', {
      identifier: 'RDS_INSTANCE_PUBLIC_ACCESS_CHECK', // required field
      configRuleName: 'rdsInstancePublicAccessCheck',
      description: 'Config rule that checks whether RDS instances are publicly accessable'
    });

    const rdsMltiAZSpprt = new config.ManagedRule(this, 'rdsMultiAZSupport', {
      identifier: 'RDS_MULTI_AZ_SUPPORT', // required field
      configRuleName: 'rdsMultiAZSupport',
      description: 'Config rule that checks whether HA is enabled on RDS (doesnt apply to Aurora)'
    });

    const rdsSnpshtPblcProhib = new config.ManagedRule(this, 'rdsSnapshotsPublicProhibited', {
      identifier: 'RDS_SNAPSHOTS_PUBLIC_PROHIBITED', // required field
      configRuleName: 'rdsSnapshotsPublicProhibited',
      description: 'Config rule that checks if RDS snapshots are public'
    });

    const rdsStrgEncrypt = new config.ManagedRule(this, 'rdsStorageEncrypted', {
      identifier: 'RDS_STORAGE_ENCRYPTED', // required field
      configRuleName: 'rdsStorageEncrypted',
      description: 'Config rule that checks whether storage encryption is enabled',
      inputParameters: {
        kmsKeyId: ''
      }
    });

    const rdshftClstrConfigChk = new config.ManagedRule(this, 'redshiftClusterConfigurationCheck', {
      identifier: 'REDSHIFT_CLUSTER_CONFIGURATION_CHECK', // required field
      configRuleName: 'redshiftClusterConfigurationCheck',
      description: 'Config rule that checks whether Redshift clusters have specified configs',
      inputParameters: {
        clusterDbEncrypted: '',
        nodeTypes: '',
        loggingEnabled: ''
      }
    });

    const rdshftClstrMntncSttngsChk = new config.ManagedRule(this, 'redshiftClusterMaintenanceSettingsCheck', {
      identifier: 'REDSHIFT_CLUSTER_MAINTENANCESETTINGS_CHECK', // required field
      configRuleName: 'redshiftClusterMaintenanceSettingsCheck',
      description: 'Config rule that checks whether Redshift cluster have specified maintenance settings',
      inputParameters: {
        allowVersionUpgrade: '',
        preferredMaintenanceWindow: '',
        automatedSnapshotRetentionPeriod: ''
      }
    });
  }
}

module.exports = { CdkApplyConfigRulesDBStack }
