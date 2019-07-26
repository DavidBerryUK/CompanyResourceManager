import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ModelFactorySkillExtended               from '../modelFactories/ModelFactorySkillExtended';
import ModelFactorySkillSummary                from '../modelFactories/ModelFactorySkillSummary';
import ModelGenericMapper                       from './generic/ModelGenericMapper';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';
import SkillSummaryModel                        from '../models/skill/SkillSummaryModel';

export default class ModelMapperFactorySkill {

    public static createSummaryMapper(): IModelGenericMapper<SkillSummaryModel> {
        return new ModelGenericMapper<SkillSummaryModel> (
            new ModelFactorySkillSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<SkillExtendedModel> {
        return new ModelGenericMapper<SkillExtendedModel> (
            new ModelFactorySkillExtended());
    }
}
