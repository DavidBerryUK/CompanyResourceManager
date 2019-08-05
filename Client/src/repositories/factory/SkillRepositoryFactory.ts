import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactorySkillExtended                from '@/repositories/modelFactories/ModelFactorySkillExtended';
import ModelFactorySkillSummary                 from '../modelFactories/ModelFactorySkillSummary';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';

export default class SkillRepositoryFactory {

    //
    // create a Skill Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<SkillSummaryModel, SkillExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<SkillSummaryModel, SkillExtendedModel, ListFilterWithArchiveFlag>(
            'api/skill',
            new ModelFactorySkillSummary(),
            new ModelFactorySkillExtended());
        return repository;
    }
}
