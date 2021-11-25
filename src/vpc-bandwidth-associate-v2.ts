// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcBandwidthAssociateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2.html#backup_charge_mode VpcBandwidthAssociateV2#backup_charge_mode}
  */
  readonly backupChargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2.html#backup_size VpcBandwidthAssociateV2#backup_size}
  */
  readonly backupSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2.html#bandwidth VpcBandwidthAssociateV2#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2.html#floating_ips VpcBandwidthAssociateV2#floating_ips}
  */
  readonly floatingIps: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2.html opentelekomcloud_vpc_bandwidth_associate_v2}
*/
export class VpcBandwidthAssociateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpc_bandwidth_associate_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_bandwidth_associate_v2.html opentelekomcloud_vpc_bandwidth_associate_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcBandwidthAssociateV2Config
  */
  public constructor(scope: Construct, id: string, config: VpcBandwidthAssociateV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_bandwidth_associate_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupChargeMode = config.backupChargeMode;
    this._backupSize = config.backupSize;
    this._bandwidth = config.bandwidth;
    this._floatingIps = config.floatingIps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_charge_mode - computed: false, optional: true, required: false
  private _backupChargeMode?: string | undefined; 
  public get backupChargeMode() {
    return this.getStringAttribute('backup_charge_mode');
  }
  public set backupChargeMode(value: string | undefined) {
    this._backupChargeMode = value;
  }
  public resetBackupChargeMode() {
    this._backupChargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupChargeModeInput() {
    return this._backupChargeMode
  }

  // backup_size - computed: false, optional: true, required: false
  private _backupSize?: number | undefined; 
  public get backupSize() {
    return this.getNumberAttribute('backup_size');
  }
  public set backupSize(value: number | undefined) {
    this._backupSize = value;
  }
  public resetBackupSize() {
    this._backupSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSizeInput() {
    return this._backupSize
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth
  }

  // floating_ips - computed: false, optional: false, required: true
  private _floatingIps?: string[]; 
  public get floatingIps() {
    return this.getListAttribute('floating_ips');
  }
  public set floatingIps(value: string[]) {
    this._floatingIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpsInput() {
    return this._floatingIps
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_charge_mode: cdktf.stringToTerraform(this._backupChargeMode),
      backup_size: cdktf.numberToTerraform(this._backupSize),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      floating_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._floatingIps),
    };
  }
}
