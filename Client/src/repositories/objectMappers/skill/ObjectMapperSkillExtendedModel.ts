import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperSkillExtendedModel implements IObjectMapper<SkillExtendedModel> {

    public map(item: any): SkillExtendedModel {
        const response = Object.assign(new SkillExtendedModel(), item);
        return response;
    }
}
