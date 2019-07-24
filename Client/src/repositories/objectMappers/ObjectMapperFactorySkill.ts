import { IObjectGenericMapper }                 from './interfaces/IObjectGenericMapper';
import EntityFactorySkillExtended               from '../modelFactories/EntityFactorySkillExtended';
import EntityFactorySkillSummary                from '../modelFactories/EntityFactorySkillSummary';
import ObjectGenericMapper                      from './generic/ObjectGenericMapper';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';
import SkillSummaryModel                        from '../models/skill/SkillSummaryModel';

export default class ObjectMapperFactorySkill {

    public static createSummaryMapper(): IObjectGenericMapper<SkillSummaryModel> {
        return new ObjectGenericMapper<SkillSummaryModel> (
            new EntityFactorySkillSummary());
    }

    public static createExtendedMapper(): IObjectGenericMapper<SkillExtendedModel> {
        return new ObjectGenericMapper<SkillExtendedModel> (
            new EntityFactorySkillExtended());
    }
}
