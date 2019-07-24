import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperSkillSummaryModel implements IObjectMapper<SkillSummaryModel> {

    public map(item: any): SkillSummaryModel {
        const response = Object.assign(new SkillSummaryModel(), item);
        return response;
    }
}
