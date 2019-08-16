import GenericApiExtendedRepository                     from '@/repositories/apiBase/GenericApiExtendedRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactorySkillExtended                from '@/repositories/modelFactories/skill/ModelFactorySkillExtended';
import ModelFactorySkillSummary                 from '@/repositories/modelFactories/skill/ModelFactorySkillSummary';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';

export default class SkillRepositoryFactory {

    //
    // create a Skill Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiExtendedRepository<SkillSummaryModel, SkillExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiExtendedRepository<SkillSummaryModel, SkillExtendedModel, ListFilterWithArchiveFlag>(
            'api/skill',
            new ModelFactorySkillSummary(),
            new ModelFactorySkillExtended());
        return repository;
    }
}
