import GenericApiRepository                         from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                    from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectMapperFactorySecuityGroup              from '../objectMappers/ObjectMapperFactorySecurityGroup';
import SecurityGroupSummaryModel                    from '../models/securityGroup/SecurityGroupSummaryModel';

export default class SecurityGroupRepositoryFactory {

    //
    // create a Security Group Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<SecurityGroupSummaryModel, SecurityGroupSummaryModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<SecurityGroupSummaryModel, SecurityGroupSummaryModel, ListFilterWithArchiveFlag>(
            new SecurityGroupSummaryModel().entityName,
            'api/security/group',
            ObjectMapperFactorySecuityGroup.createSummaryMapper(),
            ObjectMapperFactorySecuityGroup.createExtendedMapper());
        return repository;
    }
}
