// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnaasSiteConnectionV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#admin_state_up VpnaasSiteConnectionV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#description VpnaasSiteConnectionV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#ikepolicy_id VpnaasSiteConnectionV2#ikepolicy_id}
  */
  readonly ikepolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#initiator VpnaasSiteConnectionV2#initiator}
  */
  readonly initiator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#ipsecpolicy_id VpnaasSiteConnectionV2#ipsecpolicy_id}
  */
  readonly ipsecpolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#local_ep_group_id VpnaasSiteConnectionV2#local_ep_group_id}
  */
  readonly localEpGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#local_id VpnaasSiteConnectionV2#local_id}
  */
  readonly localId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#mtu VpnaasSiteConnectionV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#name VpnaasSiteConnectionV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_address VpnaasSiteConnectionV2#peer_address}
  */
  readonly peerAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_cidrs VpnaasSiteConnectionV2#peer_cidrs}
  */
  readonly peerCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_ep_group_id VpnaasSiteConnectionV2#peer_ep_group_id}
  */
  readonly peerEpGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#peer_id VpnaasSiteConnectionV2#peer_id}
  */
  readonly peerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#psk VpnaasSiteConnectionV2#psk}
  */
  readonly psk: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#region VpnaasSiteConnectionV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#tags VpnaasSiteConnectionV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#tenant_id VpnaasSiteConnectionV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#value_specs VpnaasSiteConnectionV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#vpnservice_id VpnaasSiteConnectionV2#vpnservice_id}
  */
  readonly vpnserviceId: string;
  /**
  * dpd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#dpd VpnaasSiteConnectionV2#dpd}
  */
  readonly dpd?: VpnaasSiteConnectionV2Dpd[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#timeouts VpnaasSiteConnectionV2#timeouts}
  */
  readonly timeouts?: VpnaasSiteConnectionV2Timeouts;
}
export interface VpnaasSiteConnectionV2Dpd {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#action VpnaasSiteConnectionV2#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#interval VpnaasSiteConnectionV2#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#timeout VpnaasSiteConnectionV2#timeout}
  */
  readonly timeout?: number;
}

export function vpnaasSiteConnectionV2DpdToTerraform(struct?: VpnaasSiteConnectionV2Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    interval: cdktf.numberToTerraform(struct!.interval),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}

export interface VpnaasSiteConnectionV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#create VpnaasSiteConnectionV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#delete VpnaasSiteConnectionV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2#update VpnaasSiteConnectionV2#update}
  */
  readonly update?: string;
}

export function vpnaasSiteConnectionV2TimeoutsToTerraform(struct?: VpnaasSiteConnectionV2TimeoutsOutputReference | VpnaasSiteConnectionV2Timeouts | cdktf.IResolvable): any {
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

export class VpnaasSiteConnectionV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnaasSiteConnectionV2Timeouts | undefined {
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

  public set internalValue(value: VpnaasSiteConnectionV2Timeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2 opentelekomcloud_vpnaas_site_connection_v2}
*/
export class VpnaasSiteConnectionV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpnaas_site_connection_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_site_connection_v2 opentelekomcloud_vpnaas_site_connection_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnaasSiteConnectionV2Config
  */
  public constructor(scope: Construct, id: string, config: VpnaasSiteConnectionV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpnaas_site_connection_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminStateUp = config.adminStateUp;
    this._description = config.description;
    this._ikepolicyId = config.ikepolicyId;
    this._initiator = config.initiator;
    this._ipsecpolicyId = config.ipsecpolicyId;
    this._localEpGroupId = config.localEpGroupId;
    this._localId = config.localId;
    this._mtu = config.mtu;
    this._name = config.name;
    this._peerAddress = config.peerAddress;
    this._peerCidrs = config.peerCidrs;
    this._peerEpGroupId = config.peerEpGroupId;
    this._peerId = config.peerId;
    this._psk = config.psk;
    this._region = config.region;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._vpnserviceId = config.vpnserviceId;
    this._dpd = config.dpd;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ikepolicy_id - computed: false, optional: false, required: true
  private _ikepolicyId?: string; 
  public get ikepolicyId() {
    return this.getStringAttribute('ikepolicy_id');
  }
  public set ikepolicyId(value: string) {
    this._ikepolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikepolicyIdInput() {
    return this._ikepolicyId;
  }

  // initiator - computed: true, optional: true, required: false
  private _initiator?: string; 
  public get initiator() {
    return this.getStringAttribute('initiator');
  }
  public set initiator(value: string) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // ipsecpolicy_id - computed: false, optional: false, required: true
  private _ipsecpolicyId?: string; 
  public get ipsecpolicyId() {
    return this.getStringAttribute('ipsecpolicy_id');
  }
  public set ipsecpolicyId(value: string) {
    this._ipsecpolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecpolicyIdInput() {
    return this._ipsecpolicyId;
  }

  // local_ep_group_id - computed: false, optional: true, required: false
  private _localEpGroupId?: string; 
  public get localEpGroupId() {
    return this.getStringAttribute('local_ep_group_id');
  }
  public set localEpGroupId(value: string) {
    this._localEpGroupId = value;
  }
  public resetLocalEpGroupId() {
    this._localEpGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEpGroupIdInput() {
    return this._localEpGroupId;
  }

  // local_id - computed: false, optional: true, required: false
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  public resetLocalId() {
    this._localId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: true, required: false
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

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress;
  }

  // peer_cidrs - computed: false, optional: true, required: false
  private _peerCidrs?: string[]; 
  public get peerCidrs() {
    return this.getListAttribute('peer_cidrs');
  }
  public set peerCidrs(value: string[]) {
    this._peerCidrs = value;
  }
  public resetPeerCidrs() {
    this._peerCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCidrsInput() {
    return this._peerCidrs;
  }

  // peer_ep_group_id - computed: false, optional: true, required: false
  private _peerEpGroupId?: string; 
  public get peerEpGroupId() {
    return this.getStringAttribute('peer_ep_group_id');
  }
  public set peerEpGroupId(value: string) {
    this._peerEpGroupId = value;
  }
  public resetPeerEpGroupId() {
    this._peerEpGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerEpGroupIdInput() {
    return this._peerEpGroupId;
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // psk - computed: false, optional: false, required: true
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string }; 
  public get valueSpecs() {
    return this.getStringMapAttribute('value_specs');
  }
  public set valueSpecs(value: { [key: string]: string }) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs;
  }

  // vpnservice_id - computed: false, optional: false, required: true
  private _vpnserviceId?: string; 
  public get vpnserviceId() {
    return this.getStringAttribute('vpnservice_id');
  }
  public set vpnserviceId(value: string) {
    this._vpnserviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnserviceIdInput() {
    return this._vpnserviceId;
  }

  // dpd - computed: false, optional: true, required: false
  private _dpd?: VpnaasSiteConnectionV2Dpd[] | cdktf.IResolvable; 
  public get dpd() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('dpd')));
  }
  public set dpd(value: VpnaasSiteConnectionV2Dpd[] | cdktf.IResolvable) {
    this._dpd = value;
  }
  public resetDpd() {
    this._dpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnaasSiteConnectionV2TimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnaasSiteConnectionV2Timeouts) {
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
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      description: cdktf.stringToTerraform(this._description),
      ikepolicy_id: cdktf.stringToTerraform(this._ikepolicyId),
      initiator: cdktf.stringToTerraform(this._initiator),
      ipsecpolicy_id: cdktf.stringToTerraform(this._ipsecpolicyId),
      local_ep_group_id: cdktf.stringToTerraform(this._localEpGroupId),
      local_id: cdktf.stringToTerraform(this._localId),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      peer_address: cdktf.stringToTerraform(this._peerAddress),
      peer_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(this._peerCidrs),
      peer_ep_group_id: cdktf.stringToTerraform(this._peerEpGroupId),
      peer_id: cdktf.stringToTerraform(this._peerId),
      psk: cdktf.stringToTerraform(this._psk),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.stringToTerraform)(this._valueSpecs),
      vpnservice_id: cdktf.stringToTerraform(this._vpnserviceId),
      dpd: cdktf.listMapper(vpnaasSiteConnectionV2DpdToTerraform)(this._dpd),
      timeouts: vpnaasSiteConnectionV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
