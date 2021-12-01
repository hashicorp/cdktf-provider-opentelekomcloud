// https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityAgencyV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#delegated_domain_name IdentityAgencyV3#delegated_domain_name}
  */
  readonly delegatedDomainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#description IdentityAgencyV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#domain_roles IdentityAgencyV3#domain_roles}
  */
  readonly domainRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#name IdentityAgencyV3#name}
  */
  readonly name: string;
  /**
  * project_role block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#project_role IdentityAgencyV3#project_role}
  */
  readonly projectRole?: IdentityAgencyV3ProjectRole[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#timeouts IdentityAgencyV3#timeouts}
  */
  readonly timeouts?: IdentityAgencyV3Timeouts;
}
export interface IdentityAgencyV3ProjectRole {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#project IdentityAgencyV3#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#roles IdentityAgencyV3#roles}
  */
  readonly roles: string[];
}

export function identityAgencyV3ProjectRoleToTerraform(struct?: IdentityAgencyV3ProjectRole): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.roles),
  }
}

export interface IdentityAgencyV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#create IdentityAgencyV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#delete IdentityAgencyV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html#update IdentityAgencyV3#update}
  */
  readonly update?: string;
}

export function identityAgencyV3TimeoutsToTerraform(struct?: IdentityAgencyV3TimeoutsOutputReference | IdentityAgencyV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class IdentityAgencyV3TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IdentityAgencyV3Timeouts | undefined {
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
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAgencyV3Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html opentelekomcloud_identity_agency_v3}
*/
export class IdentityAgencyV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_identity_agency_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/identity_agency_v3.html opentelekomcloud_identity_agency_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityAgencyV3Config
  */
  public constructor(scope: Construct, id: string, config: IdentityAgencyV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_identity_agency_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._delegatedDomainName = config.delegatedDomainName;
    this._description = config.description;
    this._domainRoles = config.domainRoles;
    this._name = config.name;
    this._projectRole = config.projectRole;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delegated_domain_name - computed: false, optional: false, required: true
  private _delegatedDomainName?: string; 
  public get delegatedDomainName() {
    return this.getStringAttribute('delegated_domain_name');
  }
  public set delegatedDomainName(value: string) {
    this._delegatedDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedDomainNameInput() {
    return this._delegatedDomainName;
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

  // domain_roles - computed: false, optional: true, required: false
  private _domainRoles?: string[]; 
  public get domainRoles() {
    return this.getListAttribute('domain_roles');
  }
  public set domainRoles(value: string[]) {
    this._domainRoles = value;
  }
  public resetDomainRoles() {
    this._domainRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRolesInput() {
    return this._domainRoles;
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_role - computed: false, optional: true, required: false
  private _projectRole?: IdentityAgencyV3ProjectRole[]; 
  public get projectRole() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('project_role') as any;
  }
  public set projectRole(value: IdentityAgencyV3ProjectRole[]) {
    this._projectRole = value;
  }
  public resetProjectRole() {
    this._projectRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRoleInput() {
    return this._projectRole;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityAgencyV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityAgencyV3Timeouts) {
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
      delegated_domain_name: cdktf.stringToTerraform(this._delegatedDomainName),
      description: cdktf.stringToTerraform(this._description),
      domain_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._domainRoles),
      name: cdktf.stringToTerraform(this._name),
      project_role: cdktf.listMapper(identityAgencyV3ProjectRoleToTerraform)(this._projectRole),
      timeouts: identityAgencyV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
