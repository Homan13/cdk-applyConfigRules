const cdk = require('@aws-cdk/core');
const config = require('@aws-cdk/aws-config');

class CdkApplyConfigRulesComputeStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const apprvdAMIsID = new config.ManagedRule(this, 'approvedAMIsByID', {
      identifier: 'APPROVED_AMIS_BY_ID', // required field
      configRuleName: 'approvedAMIsByID',
      description: 'Config rule that checks that instances are running approved AMIs',
      inputParameters: {
        amiIds: ''
      }
    });

    const apprvdAMIsTag = new config.ManagedRule(this, 'approvedAMIsByTag', {
      identifier: 'APPROVED_AMIS_BY_TAG', // required field
      configRuleName: 'approvedAMIsByTag',
      description: 'Config rule that checks that instances are running approved AMIs by tag',
      inputParameters: {
        amisByTagKeyAndValue: ''
      }
    });

    const autosclngGrpELBHlthchkRqrd = new config.ManagedRule(this, 'autoscalingGroupELBHealthcheckRequired', {
      identifier: 'AUTOSCALING_GROUP_ELB_HEALTHCHECK_REQUIRED', // required field
      configRuleName: 'autoscalingGroupELBHealthcheckRequired',
      description: 'Config rule that checks that your ASGs have an associated ELB healthcheck'
    });

    const dsrdInstanceTency = new config.ManagedRule(this, 'desiredInstanceTenancy', {
      identifier: 'DESIRED_INSTANCE_TENANCY', // required field
      configRuleName: 'desiredInstanceTenancy',
      description: 'Config rule that checks that instances have a specified tenancy',
      inputParameters: {
        tenancy: 'DEFAULT',
        imageId: ''
      }
    });

    const desiredInstanceType = new config.ManagedRule(this, 'desiredInstanceType', {
      identifier: 'DESIRED_INSTANCE_TYPE', // required field
      configRuleName: 'desiredInstanceType',
      description: 'Config rule that checks that instances are of the specified type',
      inputParameters: {
        instanceType: 't2.micro'
      }
    });

    const ebsOptmzdInstance = new config.ManagedRule(this, 'ebsOptimizedInstance', {
      identifier: 'EBS_OPTIMIZED_INSTANCE', // required field
      configRuleName: 'ebsOptmzdInstance',
      description: 'Config rule that checks whether EBS opimization is enabled on compatible instance types'
    });

    const ec2InstanceDetldMntrngEnbld = new config.ManagedRule(this, 'ec2InstanceDetailedMonitoringEnabled', {
      identifier: 'EC2_INSTANCE_DETAILED_MONITORING_ENABLED', // required field
      configRuleName: 'ec2InstanceDetailedMonitoringEnabled',
      description: 'Config rule that checks detailed monitoring is enabled on EC2 instances'
    });

    const ec2InstanceMngdBySSM = new config.ManagedRule(this, 'ec2InstanceManagedBySSM', {
      identifier: 'EC2_INSTANCE_MANAGED_BY_SSM', // required field
      configRuleName: 'ec2InstanceManagedBySSM',
      description: 'Config rule that checks that EC2 instances are managed by SSM'
    });

    const ec2InstancesInVPC = new config.ManagedRule(this, 'ec2InstancesInVPC', {
      identifier: 'INSTANCES_IN_VPC', // required field
      configRuleName: 'ec2InstancesInVPC',
      description: 'Config rule that checks whether your instances belong to a VPC'
    });

    const ec2MngdInstanceAppBlklstd = new config.ManagedRule(this, 'ec2ManagedInstanceApplicationBlacklisted', {
      identifier: 'EC2_MANAGEDINSTANCE_APPLICATIONS_BLACKLISTED', // required field
      configRuleName: 'ec2ManagedInstanceApplicationBlacklisted',
      description: 'Config rule that checks that listed applications are not installed on EC2 instances',
      inputParameters: {
        applicationNames: ''
      }
    });

    const ec2MngdInstanceAppRqrd = new config.ManagedRule(this, 'ec2ManagedInstanceApplicationsRequired', {
      identifier: 'EC2_MANAGEDINSTANCE_APPLICATIONS_REQUIRED', // required field
      configRuleName: 'ec2ManagedInstanceApplicationsRequired',
      description: 'Config rule that checks whether specified applications are installed on instances',
      inputParameters: {
        applicationNames: ''
      }
    });

    const ec2MngdInstanceAsscnCmplncChk = new config.ManagedRule(this, 'ec2ManagedInstanceAssociationComplianceCheck', {
      identifier: 'EC2_MANAGEDINSTANCE_ASSOCIATION_COMPLIANCE_STATUS_CHECK', // required field
      configRuleName: 'ec2ManagedInstanceAssociationComplianceCheck',
      description: 'Config rule that checks that the compliance check of the instance is comliant or non-compliant'
    });

    const ec2MngdInstanceInvntryBlcklstd = new config.ManagedRule(this, 'ec2ManagedInstanceInventoryBlacklisted', {
      identifier: 'EC2_MANAGEDINSTANCE_INVENTORY_BLACKLISTED', // required field
      configRuleName: 'ec2ManagedInstanceInventoryBlacklisted',
      description: 'Config rule that checks whether managed instances are configured to collect blacklisted types',
      inputParameters: {
        inventoryTypes: ''
      }
    });

    const ec2MngdInstancePtchCmplncStsChk = new config.ManagedRule(this, 'ec2ManagedInstancePatchComplianceStatusCheck', {
      identifier: 'EC2_MANAGEDINSTANCE_PATCH_COMPLIANCE_STATUS_CHECK', // required field
      configRuleName: 'ec2ManagedInstancePatchComplianceStatusCheck',
      description: 'Config rule that checks that patch compliance is compliant or non-compliant'
    });

    const ec2MngdInstancePltfrmChk = new config.ManagedRule(this, 'ec2ManagedInstancePlatformCheck', {
      identifier: 'EC2_MANAGEDINSTANCE_PLATFORM_CHECK', // required field
      configRuleName: 'ec2ManagedInstancePlatformCheck',
      description: 'Config rule that checks that access keys have been rotated within the number of days specified',
      inputParameters: {
        agentVersion: '',
        platformType: '',
        platformVersion: ''
      }
    });

    const ec2VolInUseChk = new config.ManagedRule(this, 'ec2VolumeInUseCheck', {
      identifier: 'EC2_VOLUME_INUSE_CHECK', // required field
      configRuleName: 'ec2VolumeInUseCheck',
      description: 'Config rule that checks that EBS volumes are in use',
      inputParameters: {
        deleteOnTermination: 'True'
      }
    });

    const eipAttchd = new config.ManagedRule(this, 'eipAttached', {
      identifier: 'EIP_ATTACHED', // required field
      configRuleName: 'eipAttached',
      description: 'Config rule that checks that all EIPs in a VPC are attached'
    });

    const encrptdVols = new config.ManagedRule(this, 'encryptedVolumes', {
      identifier: 'ENCRYPTED_VOLUMES', // required field
      configRuleName: 'encryptedVolumes',
      description: 'Config rule that checks that attached volumes are encrypted',
      inputParameters: {
        kmsId: ''
      }
    });

    const elbACMCertRqrd = new config.ManagedRule(this, 'elbACMCertificateRequired', {
      identifier: 'ELB_ACM_CERTIFICATE_REQUIRED', // required field
      configRuleName: 'elbACMCertificateRequired',
      description: 'Config rule that checks that LBs use ACM certificates'
    });

    const elbCstmSecPlcySslChk = new config.ManagedRule(this, 'elbCustomSecurityPolicySSLCheck', {
      identifier: 'ELB_CUSTOM_SECURITY_POLICY_SSL_CHECK', // required field
      configRuleName: 'elbCustomSecurityPolicySSLCheck',
      description: 'Config rule that checks that whether your ELB SSL listeners use a custom policy',
      inputParameters: {
        // ssl-protocols-and-ciphers: ''
      }
    });

    const elbLogEnbld = new config.ManagedRule(this, 'elbLoggingEnabled', {
      identifier: 'ELB_LOGGING_ENABLED', // required field
      configRuleName: 'elbLoggingEnabled',
      description: 'Config rule that checks that LBs have logging enabled',
      inputParameters: {
        s3BucketNames: ''
      }
    });

    const elbPredfndSecPlcySSLChk = new config.ManagedRule(this, 'elbPredefinedSecurityPolicySSLCheck', {
      identifier: 'ELB_PREDEFINED_SECURITY_POLICY_SSL_CHECK', // required field
      configRuleName: 'elbPredefinedSecurityPolicySSLCheck',
      description: 'Config rule that checks that LB listeners use a pre-defined policy',
      inputParameters: {
        // predefined-policy-name: ''
      }
    });

    const lmbdaFctnStgnsChk = new config.ManagedRule(this, 'lambdaFunctionSettingsCheck', {
      identifier: 'LAMBDA_FUNCTION_SETTINGS_CHECK', // required field
      configRuleName: 'lambdaFunctionSettingsCheck',
      description: 'Config rule that checks that lambda function settings match expected values',
      inputParameters: {
        runtime: '',
        role: '',
        timeout: '',
        memorySize: ''
      }
    });

    const lmbdaFctnPblcAccessProhib = new config.ManagedRule(this, 'lambdaFunctionPublicAccessProhibited', {
      identifier: 'LAMBDA_FUNCTION_PUBLIC_ACCESS_PROHIBITED', // required field
      configRuleName: 'lambdaFunctionPublicAccessProhibited',
      description: 'Config rule that checks that lambda policy prohibits public access'
    });

    const rstrcdCmnPrts = new config.ManagedRule(this, 'restrictedCommonPorts', {
      identifier: 'RESTRICTED_INCOMING_TRAFFIC', // required field
      configRuleName: 'restrictedCommonPorts',
      description: 'Config rule that checks if incoming SSH traffic is accessable to specified ports',
      inputParameters: {
        blockedPort1: ''
      }
    });

    const rstrctSSH = new config.ManagedRule(this, 'restrictSSH', {
      identifier: 'INCOMING_SSH_DISABLED', // required field
      configRuleName: 'restrictSSH',
      description: 'Config rule that checks whether incoming SSH is accessable'
    });
  }
}

module.exports = { CdkApplyConfigRulesComputeStack }
