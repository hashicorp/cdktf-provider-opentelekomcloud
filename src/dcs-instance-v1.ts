// https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcsInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#access_user DcsInstanceV1#access_user}
  */
  readonly accessUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}
  */
  readonly availableZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}
  */
  readonly backupAt?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}
  */
  readonly beginAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#capacity DcsInstanceV1#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#description DcsInstanceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#engine DcsInstanceV1#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}
  */
  readonly maintainBegin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}
  */
  readonly maintainEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#name DcsInstanceV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#password DcsInstanceV1#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#period_type DcsInstanceV1#period_type}
  */
  readonly periodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#product_id DcsInstanceV1#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#save_days DcsInstanceV1#save_days}
  */
  readonly saveDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * backup_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_policy DcsInstanceV1#backup_policy}
  */
  readonly backupPolicy?: DcsInstanceV1BackupPolicy;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#configuration DcsInstanceV1#configuration}
  */
  readonly configuration?: DcsInstanceV1Configuration[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}
  */
  readonly timeouts?: DcsInstanceV1Timeouts;
}
export interface DcsInstanceV1BackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}
  */
  readonly backupAt: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}
  */
  readonly beginAt: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#period_type DcsInstanceV1#period_type}
  */
  readonly periodType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#save_days DcsInstanceV1#save_days}
  */
  readonly saveDays?: number;
}

export function dcsInstanceV1BackupPolicyToTerraform(struct?: DcsInstanceV1BackupPolicyOutputReference | DcsInstanceV1BackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_at: cdktf.listMapper(cdktf.numberToTerraform)(struct!.backupAt),
    backup_type: cdktf.stringToTerraform(struct!.backupType),
    begin_at: cdktf.stringToTerraform(struct!.beginAt),
    period_type: cdktf.stringToTerraform(struct!.periodType),
    save_days: cdktf.numberToTerraform(struct!.saveDays),
  }
}

export class DcsInstanceV1BackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcsInstanceV1BackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupAt = this._backupAt;
    }
    if (this._backupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupType = this._backupType;
    }
    if (this._beginAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginAt = this._beginAt;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    if (this._saveDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveDays = this._saveDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcsInstanceV1BackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupAt = undefined;
      this._backupType = undefined;
      this._beginAt = undefined;
      this._periodType = undefined;
      this._saveDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupAt = value.backupAt;
      this._backupType = value.backupType;
      this._beginAt = value.beginAt;
      this._periodType = value.periodType;
      this._saveDays = value.saveDays;
    }
  }

  // backup_at - computed: false, optional: false, required: true
  private _backupAt?: number[]; 
  public get backupAt() {
    return this.getNumberListAttribute('backup_at');
  }
  public set backupAt(value: number[]) {
    this._backupAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAtInput() {
    return this._backupAt;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // begin_at - computed: false, optional: false, required: true
  private _beginAt?: string; 
  public get beginAt() {
    return this.getStringAttribute('begin_at');
  }
  public set beginAt(value: string) {
    this._beginAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginAtInput() {
    return this._beginAt;
  }

  // period_type - computed: false, optional: false, required: true
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // save_days - computed: false, optional: true, required: false
  private _saveDays?: number; 
  public get saveDays() {
    return this.getNumberAttribute('save_days');
  }
  public set saveDays(value: number) {
    this._saveDays = value;
  }
  public resetSaveDays() {
    this._saveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveDaysInput() {
    return this._saveDays;
  }
}
export interface DcsInstanceV1Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}
  */
  readonly parameterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}
  */
  readonly parameterValue: string;
}

export function dcsInstanceV1ConfigurationToTerraform(struct?: DcsInstanceV1Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_id: cdktf.stringToTerraform(struct!.parameterId),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface DcsInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#create DcsInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#delete DcsInstanceV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1#update DcsInstanceV1#update}
  */
  readonly update?: string;
}

export function dcsInstanceV1TimeoutsToTerraform(struct?: DcsInstanceV1TimeoutsOutputReference | DcsInstanceV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DcsInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcsInstanceV1Timeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcsInstanceV1Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1 opentelekomcloud_dcs_instance_v1}
*/
export class DcsInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dcs_instance_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dcs_instance_v1 opentelekomcloud_dcs_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcsInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: DcsInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dcs_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.29.1',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessUser = config.accessUser;
    this._availableZones = config.availableZones;
    this._backupAt = config.backupAt;
    this._backupType = config.backupType;
    this._beginAt = config.beginAt;
    this._capacity = config.capacity;
    this._description = config.description;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._maintainBegin = config.maintainBegin;
    this._maintainEnd = config.maintainEnd;
    this._name = config.name;
    this._password = config.password;
    this._periodType = config.periodType;
    this._productId = config.productId;
    this._saveDays = config.saveDays;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._configuration = config.configuration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_user - computed: true, optional: true, required: false
  private _accessUser?: string; 
  public get accessUser() {
    return this.getStringAttribute('access_user');
  }
  public set accessUser(value: string) {
    this._accessUser = value;
  }
  public resetAccessUser() {
    this._accessUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUserInput() {
    return this._accessUser;
  }

  // available_zones - computed: false, optional: false, required: true
  private _availableZones?: string[]; 
  public get availableZones() {
    return this.getListAttribute('available_zones');
  }
  public set availableZones(value: string[]) {
    this._availableZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZonesInput() {
    return this._availableZones;
  }

  // backup_at - computed: false, optional: true, required: false
  private _backupAt?: number[]; 
  public get backupAt() {
    return this.getNumberListAttribute('backup_at');
  }
  public set backupAt(value: number[]) {
    this._backupAt = value;
  }
  public resetBackupAt() {
    this._backupAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAtInput() {
    return this._backupAt;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // begin_at - computed: false, optional: true, required: false
  private _beginAt?: string; 
  public get beginAt() {
    return this.getStringAttribute('begin_at');
  }
  public set beginAt(value: string) {
    this._beginAt = value;
  }
  public resetBeginAt() {
    this._beginAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginAtInput() {
    return this._beginAt;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_version - computed: true, optional: false, required: false
  public get internalVersion() {
    return this.getStringAttribute('internal_version');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // maintain_begin - computed: true, optional: true, required: false
  private _maintainBegin?: string; 
  public get maintainBegin() {
    return this.getStringAttribute('maintain_begin');
  }
  public set maintainBegin(value: string) {
    this._maintainBegin = value;
  }
  public resetMaintainBegin() {
    this._maintainBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainBeginInput() {
    return this._maintainBegin;
  }

  // maintain_end - computed: true, optional: true, required: false
  private _maintainEnd?: string; 
  public get maintainEnd() {
    return this.getStringAttribute('maintain_end');
  }
  public set maintainEnd(value: string) {
    this._maintainEnd = value;
  }
  public resetMaintainEnd() {
    this._maintainEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndInput() {
    return this._maintainEnd;
  }

  // max_memory - computed: true, optional: false, required: false
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // period_type - computed: false, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // resource_spec_code - computed: true, optional: false, required: false
  public get resourceSpecCode() {
    return this.getStringAttribute('resource_spec_code');
  }

  // save_days - computed: false, optional: true, required: false
  private _saveDays?: number; 
  public get saveDays() {
    return this.getNumberAttribute('save_days');
  }
  public set saveDays(value: number) {
    this._saveDays = value;
  }
  public resetSaveDays() {
    this._saveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveDaysInput() {
    return this._saveDays;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // used_memory - computed: true, optional: false, required: false
  public get usedMemory() {
    return this.getNumberAttribute('used_memory');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new DcsInstanceV1BackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: DcsInstanceV1BackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: DcsInstanceV1Configuration[] | cdktf.IResolvable; 
  public get configuration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('configuration');
  }
  public set configuration(value: DcsInstanceV1Configuration[] | cdktf.IResolvable) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DcsInstanceV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DcsInstanceV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_user: cdktf.stringToTerraform(this._accessUser),
      available_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availableZones),
      backup_at: cdktf.listMapper(cdktf.numberToTerraform)(this._backupAt),
      backup_type: cdktf.stringToTerraform(this._backupType),
      begin_at: cdktf.stringToTerraform(this._beginAt),
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      maintain_begin: cdktf.stringToTerraform(this._maintainBegin),
      maintain_end: cdktf.stringToTerraform(this._maintainEnd),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      period_type: cdktf.stringToTerraform(this._periodType),
      product_id: cdktf.stringToTerraform(this._productId),
      save_days: cdktf.numberToTerraform(this._saveDays),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      backup_policy: dcsInstanceV1BackupPolicyToTerraform(this._backupPolicy.internalValue),
      configuration: cdktf.listMapper(dcsInstanceV1ConfigurationToTerraform)(this._configuration),
      timeouts: dcsInstanceV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
