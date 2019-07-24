import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectMapperFactorySkill                 from '../objectMappers/ObjectMapperFactorySkill';
import SkillSummaryModel                        from '../models/skill/SkillSummaryModel';

export default class SkillRepositoryFactory {

    //
    // create a Skill Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<SkillSummaryModel, SkillSummaryModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<SkillSummaryModel, SkillSummaryModel, ListFilterWithArchiveFlag>(
            new SkillSummaryModel().entityName,
            'api/skill',
            ObjectMapperFactorySkill.createSummaryMapper(),
            ObjectMapperFactorySkill.createExtendedMapper());
        return repository;
    }
}
