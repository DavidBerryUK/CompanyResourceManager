import GenericApiExtendedRepository                     from '@/repositories/apiBase/GenericApiExtendedRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactorySecurityGroupExtended        from '@/repositories/modelFactories/securityGroup/ModelFactorySecurityGroupExtended';
import ModelFactorySecurityGroupSummary         from '@/repositories/modelFactories/securityGroup/ModelFactorySecurityGroupSummary';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';

export default class SecurityGroupRepositoryFactory {

    //
    // create a Security Group Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiExtendedRepository<SecurityGroupSummaryModel, SecurityGroupExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiExtendedRepository<SecurityGroupSummaryModel, SecurityGroupExtendedModel, ListFilterWithArchiveFlag>(
            'api/security/group',
            new ModelFactorySecurityGroupSummary(),
            new ModelFactorySecurityGroupExtended());

        return repository;
    }
}
