import { IObjectGenericMapper }                 from './interfaces/IObjectGenericMapper';
import EntityFactoryPersonExtended              from '../modelFactories/EntityFactoryPersonExtended';
import EntityFactoryPersonSummary               from '../modelFactories/EntityFactoryPersonSummary';
import ObjectGenericMapper                      from './generic/ObjectGenericMapper';
import PersonExtendedModel                      from '../models/person/PersonExtendedModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class ObjectMapperFactoryPerson {

    public static createSummaryMapper(): IObjectGenericMapper<PersonSummaryModel> {
        return new ObjectGenericMapper<PersonSummaryModel> (
            new EntityFactoryPersonSummary());
    }

    public static createExtendedMapper(): IObjectGenericMapper<PersonExtendedModel> {
        return new ObjectGenericMapper<PersonExtendedModel> (
            new EntityFactoryPersonExtended());
    }
}
