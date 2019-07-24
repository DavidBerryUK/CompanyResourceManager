import { IObjectArrayMapper }                   from '../interfaces/IObjectArrayMapper';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperSkillModel implements IObjectArrayMapper<SkillSummaryModel> {

    public map(dataArray: any[]): Array<SkillSummaryModel> {
        let response = new Array<SkillSummaryModel>();
        response = dataArray.map((item) => Object.assign(new SkillSummaryModel(), item));
        return response;
    }
}
