const cdk = require('@aws-cdk/core');
const config = require('@aws-cdk/aws-config');

class CdkApplyConfigRulesStorageStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const s3BlklstdActnsPrhbtd = new config.ManagedRule(this, 's3BlacklistedActionsProhobited', {
      identifier: 'S3_BLACKLISTED_ACTIONS_PROHIBITED', // required field
      configRuleName: 's3BlacklistedActionsProhobited',
      description: 'Config rule that checks that bucket policy does not allow blacklisted bucket and object level actions',
      inputParameters: {
        blacklistedactionpatterns: ''
      }
    });

    const s3BcktLggngEnbld = new config.ManagedRule(this, 's3BucketLoggingEnabled', {
      identifier: 'S3_BUCKET_LOGGING_ENABLED', // required field
      configRuleName: 's3BucketLoggingEnabled',
      description: 'Config rule that checks whether bucket logging is enabled',
      inputParameters: {
        targetBucket: '',
        targetPrefix: ''
      }
    });

    const s3BcktPlcyGrnteChk = new config.ManagedRule(this, 's3BucketPolicyGranteeCheck', {
      identifier: 'S3_BUCKET_POLICY_GRANTEE_CHECK', // required field
      configRuleName: 's3BucketPolicyGranteeCheck',
      description: 'Config rule that checks that access to a bucket is restricted based on AWS principles',
      inputParameters: {
        awsPrinciples: ''
      }
    });

    const s3BcktPlcyNotMrePrmsv = new config.ManagedRule(this, 's3BucketPolicyNotMorePermissive', {
      identifier: 'S3_BUCKET_POLICY_NOT_MORE_PERMISSIVE', // required field
      configRuleName: 's3BucketPolicyNotMorePermissive',
      description: 'Config rule that checks whether S3 policy does not allow inter-account permissions other than your control',
      inputParameters: {
        controlPolicy: ''
      }
    });

    const s3BcktPblcReadPrhbtd = new config.ManagedRule(this, 's3BucketPublicReadProhibited', {
      identifier: 'S3_BUCKET_PUBLIC_READ_PROHIBITED', // required field
      configRuleName: 's3BucketPublicReadProhibited',
      description: 'Config rule that checks that your buckets prohibit public read access'
    });

    const s3BcktPblcWrtPrhbtd = new config.ManagedRule(this, 's3BucketPublicWriteProhibited', {
      identifier: 'S3_BUCKET_PUBLIC_WRITE_PROHIBITED', // required field
      configRuleName: 's3BucketPublicWriteProhibited',
      description: 'Config rule that checks that your buckets prohibited public write access'
    });

    const s3BcktRplctnEnbld = new config.ManagedRule(this, 's3BucketReplicationEnabled', {
      identifier: 'S3_BUCKET_REPLICATION_ENABLED', // required field
      configRuleName: 's3BucketReplicationEnabled',
      description: 'Config rule that checks whether buckets have cross-region replication enabled'
    });

    const s3BcktSrvrSdeEncryptEnbld = new config.ManagedRule(this, 's3BucketServerSideEncryptionEnabled', {
      identifier: 'S3_BUCKET_SERVER_SIDE_ENCRYPTION_ENABLED', // required field
      configRuleName: 's3BucketServerSideEncryptionEnabled',
      description: 'Config rule that checks whether S3 buckets are encrypted'
    });

    const s3BcktSSLRqstsOnly = new config.ManagedRule(this, 's3BucketSSLRequestsOnly', {
      identifier: 'S3_BUCKET_SSL_REQUESTS_ONLY', // required field
      configRuleName: 's3BucketSSLRequestsOnly',
      description: 'Config rule that checks whether buckets have policies that enforce SSL'
    });

    const s3BcktVrsnEnbld = new config.ManagedRule(this, 's3BucketVersioningEnabled', {
      identifier: 'S3_BUCKET_VERSIONING_ENABLED', // required field
      configRuleName: 's3BucketVersioningEnabled',
      description: 'Config rule that checks whether versioning is enabled on your buckets',
      inputParameters: {
        isMfaDeleteEnabled: ''
      }
    });
  }
}

module.exports = { CdkApplyConfigRulesStorageStack }
