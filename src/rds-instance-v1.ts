// https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#availabilityzone RdsInstanceV1#availabilityzone}
  */
  readonly availabilityzone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#dbport RdsInstanceV1#dbport}
  */
  readonly dbport?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#dbrtpd RdsInstanceV1#dbrtpd}
  */
  readonly dbrtpd: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#flavorref RdsInstanceV1#flavorref}
  */
  readonly flavorref: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#name RdsInstanceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#region RdsInstanceV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#tag RdsInstanceV1#tag}
  */
  readonly tag?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#vpc RdsInstanceV1#vpc}
  */
  readonly vpc: string;
  /**
  * backupstrategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#backupstrategy RdsInstanceV1#backupstrategy}
  */
  readonly backupstrategy?: RdsInstanceV1Backupstrategy;
  /**
  * datastore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#datastore RdsInstanceV1#datastore}
  */
  readonly datastore: RdsInstanceV1Datastore;
  /**
  * ha block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#ha RdsInstanceV1#ha}
  */
  readonly ha?: RdsInstanceV1Ha;
  /**
  * nics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#nics RdsInstanceV1#nics}
  */
  readonly nics: RdsInstanceV1Nics;
  /**
  * securitygroup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#securitygroup RdsInstanceV1#securitygroup}
  */
  readonly securitygroup: RdsInstanceV1Securitygroup;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#timeouts RdsInstanceV1#timeouts}
  */
  readonly timeouts?: RdsInstanceV1Timeouts;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#volume RdsInstanceV1#volume}
  */
  readonly volume: RdsInstanceV1Volume;
}
export interface RdsInstanceV1Backupstrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#keepdays RdsInstanceV1#keepdays}
  */
  readonly keepdays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#starttime RdsInstanceV1#starttime}
  */
  readonly starttime?: string;
}

export function rdsInstanceV1BackupstrategyToTerraform(struct?: RdsInstanceV1BackupstrategyOutputReference | RdsInstanceV1Backupstrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keepdays: cdktf.numberToTerraform(struct!.keepdays),
    starttime: cdktf.stringToTerraform(struct!.starttime),
  }
}

export class RdsInstanceV1BackupstrategyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RdsInstanceV1Backupstrategy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._keepdays) {
      hasAnyValues = true;
      internalValueResult.keepdays = this._keepdays;
    }
    if (this._starttime) {
      hasAnyValues = true;
      internalValueResult.starttime = this._starttime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Backupstrategy | undefined) {
    if (value === undefined) {
      this._keepdays = undefined;
      this._starttime = undefined;
    }
    else {
      this._keepdays = value.keepdays;
      this._starttime = value.starttime;
    }
  }

  // keepdays - computed: false, optional: true, required: false
  private _keepdays?: number; 
  public get keepdays() {
    return this.getNumberAttribute('keepdays');
  }
  public set keepdays(value: number) {
    this._keepdays = value;
  }
  public resetKeepdays() {
    this._keepdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepdaysInput() {
    return this._keepdays;
  }

  // starttime - computed: false, optional: true, required: false
  private _starttime?: string; 
  public get starttime() {
    return this.getStringAttribute('starttime');
  }
  public set starttime(value: string) {
    this._starttime = value;
  }
  public resetStarttime() {
    this._starttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttimeInput() {
    return this._starttime;
  }
}
export interface RdsInstanceV1Datastore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#type RdsInstanceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#version RdsInstanceV1#version}
  */
  readonly version: string;
}

export function rdsInstanceV1DatastoreToTerraform(struct?: RdsInstanceV1DatastoreOutputReference | RdsInstanceV1Datastore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class RdsInstanceV1DatastoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RdsInstanceV1Datastore | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Datastore | undefined) {
    if (value === undefined) {
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this._type = value.type;
      this._version = value.version;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RdsInstanceV1Ha {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#enable RdsInstanceV1#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#replicationmode RdsInstanceV1#replicationmode}
  */
  readonly replicationmode?: string;
}

export function rdsInstanceV1HaToTerraform(struct?: RdsInstanceV1HaOutputReference | RdsInstanceV1Ha): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    replicationmode: cdktf.stringToTerraform(struct!.replicationmode),
  }
}

export class RdsInstanceV1HaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RdsInstanceV1Ha | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enable) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._replicationmode) {
      hasAnyValues = true;
      internalValueResult.replicationmode = this._replicationmode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Ha | undefined) {
    if (value === undefined) {
      this._enable = undefined;
      this._replicationmode = undefined;
    }
    else {
      this._enable = value.enable;
      this._replicationmode = value.replicationmode;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // replicationmode - computed: false, optional: true, required: false
  private _replicationmode?: string; 
  public get replicationmode() {
    return this.getStringAttribute('replicationmode');
  }
  public set replicationmode(value: string) {
    this._replicationmode = value;
  }
  public resetReplicationmode() {
    this._replicationmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationmodeInput() {
    return this._replicationmode;
  }
}
export interface RdsInstanceV1Nics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#subnetid RdsInstanceV1#subnetid}
  */
  readonly subnetid: string;
}

export function rdsInstanceV1NicsToTerraform(struct?: RdsInstanceV1NicsOutputReference | RdsInstanceV1Nics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnetid: cdktf.stringToTerraform(struct!.subnetid),
  }
}

export class RdsInstanceV1NicsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RdsInstanceV1Nics | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._subnetid) {
      hasAnyValues = true;
      internalValueResult.subnetid = this._subnetid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Nics | undefined) {
    if (value === undefined) {
      this._subnetid = undefined;
    }
    else {
      this._subnetid = value.subnetid;
    }
  }

  // subnetid - computed: false, optional: false, required: true
  private _subnetid?: string; 
  public get subnetid() {
    return this.getStringAttribute('subnetid');
  }
  public set subnetid(value: string) {
    this._subnetid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetidInput() {
    return this._subnetid;
  }
}
export interface RdsInstanceV1Securitygroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#id RdsInstanceV1#id}
  */
  readonly id: string;
}

export function rdsInstanceV1SecuritygroupToTerraform(struct?: RdsInstanceV1SecuritygroupOutputReference | RdsInstanceV1Securitygroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class RdsInstanceV1SecuritygroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RdsInstanceV1Securitygroup | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._id) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Securitygroup | undefined) {
    if (value === undefined) {
      this._id = undefined;
    }
    else {
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface RdsInstanceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#create RdsInstanceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#delete RdsInstanceV1#delete}
  */
  readonly delete?: string;
}

export function rdsInstanceV1TimeoutsToTerraform(struct?: RdsInstanceV1TimeoutsOutputReference | RdsInstanceV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class RdsInstanceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RdsInstanceV1Timeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
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
}
export interface RdsInstanceV1Volume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#size RdsInstanceV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html#type RdsInstanceV1#type}
  */
  readonly type: string;
}

export function rdsInstanceV1VolumeToTerraform(struct?: RdsInstanceV1VolumeOutputReference | RdsInstanceV1Volume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class RdsInstanceV1VolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RdsInstanceV1Volume | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._size) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsInstanceV1Volume | undefined) {
    if (value === undefined) {
      this._size = undefined;
      this._type = undefined;
    }
    else {
      this._size = value.size;
      this._type = value.type;
    }
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html opentelekomcloud_rds_instance_v1}
*/
export class RdsInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rds_instance_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rds_instance_v1.html opentelekomcloud_rds_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: RdsInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rds_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityzone = config.availabilityzone;
    this._dbport = config.dbport;
    this._dbrtpd = config.dbrtpd;
    this._flavorref = config.flavorref;
    this._name = config.name;
    this._region = config.region;
    this._tag = config.tag;
    this._vpc = config.vpc;
    this._backupstrategy.internalValue = config.backupstrategy;
    this._datastore.internalValue = config.datastore;
    this._ha.internalValue = config.ha;
    this._nics.internalValue = config.nics;
    this._securitygroup.internalValue = config.securitygroup;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availabilityzone - computed: false, optional: false, required: true
  private _availabilityzone?: string; 
  public get availabilityzone() {
    return this.getStringAttribute('availabilityzone');
  }
  public set availabilityzone(value: string) {
    this._availabilityzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityzoneInput() {
    return this._availabilityzone;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // dbport - computed: false, optional: true, required: false
  private _dbport?: string; 
  public get dbport() {
    return this.getStringAttribute('dbport');
  }
  public set dbport(value: string) {
    this._dbport = value;
  }
  public resetDbport() {
    this._dbport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbportInput() {
    return this._dbport;
  }

  // dbrtpd - computed: false, optional: false, required: true
  private _dbrtpd?: string; 
  public get dbrtpd() {
    return this.getStringAttribute('dbrtpd');
  }
  public set dbrtpd(value: string) {
    this._dbrtpd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbrtpdInput() {
    return this._dbrtpd;
  }

  // flavorref - computed: false, optional: false, required: true
  private _flavorref?: string; 
  public get flavorref() {
    return this.getStringAttribute('flavorref');
  }
  public set flavorref(value: string) {
    this._flavorref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorrefInput() {
    return this._flavorref;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: { [key: string]: string } | cdktf.IResolvable; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // backupstrategy - computed: false, optional: true, required: false
  private _backupstrategy = new RdsInstanceV1BackupstrategyOutputReference(this as any, "backupstrategy", true);
  public get backupstrategy() {
    return this._backupstrategy;
  }
  public putBackupstrategy(value: RdsInstanceV1Backupstrategy) {
    this._backupstrategy.internalValue = value;
  }
  public resetBackupstrategy() {
    this._backupstrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstrategyInput() {
    return this._backupstrategy.internalValue;
  }

  // datastore - computed: false, optional: false, required: true
  private _datastore = new RdsInstanceV1DatastoreOutputReference(this as any, "datastore", true);
  public get datastore() {
    return this._datastore;
  }
  public putDatastore(value: RdsInstanceV1Datastore) {
    this._datastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore.internalValue;
  }

  // ha - computed: false, optional: true, required: false
  private _ha = new RdsInstanceV1HaOutputReference(this as any, "ha", true);
  public get ha() {
    return this._ha;
  }
  public putHa(value: RdsInstanceV1Ha) {
    this._ha.internalValue = value;
  }
  public resetHa() {
    this._ha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha.internalValue;
  }

  // nics - computed: false, optional: false, required: true
  private _nics = new RdsInstanceV1NicsOutputReference(this as any, "nics", true);
  public get nics() {
    return this._nics;
  }
  public putNics(value: RdsInstanceV1Nics) {
    this._nics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // securitygroup - computed: false, optional: false, required: true
  private _securitygroup = new RdsInstanceV1SecuritygroupOutputReference(this as any, "securitygroup", true);
  public get securitygroup() {
    return this._securitygroup;
  }
  public putSecuritygroup(value: RdsInstanceV1Securitygroup) {
    this._securitygroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitygroupInput() {
    return this._securitygroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsInstanceV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsInstanceV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new RdsInstanceV1VolumeOutputReference(this as any, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: RdsInstanceV1Volume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availabilityzone: cdktf.stringToTerraform(this._availabilityzone),
      dbport: cdktf.stringToTerraform(this._dbport),
      dbrtpd: cdktf.stringToTerraform(this._dbrtpd),
      flavorref: cdktf.stringToTerraform(this._flavorref),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tag: cdktf.hashMapper(cdktf.anyToTerraform)(this._tag),
      vpc: cdktf.stringToTerraform(this._vpc),
      backupstrategy: rdsInstanceV1BackupstrategyToTerraform(this._backupstrategy.internalValue),
      datastore: rdsInstanceV1DatastoreToTerraform(this._datastore.internalValue),
      ha: rdsInstanceV1HaToTerraform(this._ha.internalValue),
      nics: rdsInstanceV1NicsToTerraform(this._nics.internalValue),
      securitygroup: rdsInstanceV1SecuritygroupToTerraform(this._securitygroup.internalValue),
      timeouts: rdsInstanceV1TimeoutsToTerraform(this._timeouts.internalValue),
      volume: rdsInstanceV1VolumeToTerraform(this._volume.internalValue),
    };
  }
}
