// https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_kubeconfig_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCceClusterKubeconfigV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_kubeconfig_v3#cluster_id DataOpentelekomcloudCceClusterKubeconfigV3#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_kubeconfig_v3#duration DataOpentelekomcloudCceClusterKubeconfigV3#duration}
  */
  readonly duration?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_kubeconfig_v3 opentelekomcloud_cce_cluster_kubeconfig_v3}
*/
export class DataOpentelekomcloudCceClusterKubeconfigV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cce_cluster_kubeconfig_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/cce_cluster_kubeconfig_v3 opentelekomcloud_cce_cluster_kubeconfig_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCceClusterKubeconfigV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCceClusterKubeconfigV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_cluster_kubeconfig_v3',
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
    this._clusterId = config.clusterId;
    this._duration = config.duration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      duration: cdktf.numberToTerraform(this._duration),
    };
  }
}
