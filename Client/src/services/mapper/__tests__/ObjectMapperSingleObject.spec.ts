import ModelFactoryPersonExtended               from '@/repositories/modelFactories/ModelFactoryPersonExtended';
import ModelFactoryPersonSummary                from '@/repositories/modelFactories/ModelFactoryPersonSummary';
import ObjectMapper                             from '../ObjectMapper';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

describe('Object Mapper Tests', () => {

    test('map javascript object to PersonBase', () => {
        const obj = {personId: '100', forename: 'Sid', surname: 'James'};
        const person = ObjectMapper.MapItem(obj, new ModelFactoryPersonSummary());
        expect(person.personId).toBe('100');
        expect(person.forename).toBe('Sid');
        expect(person.surname).toBe('James');
    });

    test('map PersonBase to PersonExtended', () => {

        const person = new PersonSummaryModel();
        person.personId = '100';
        person.forename = 'Janet';
        person.surname = 'Ellis';

        const personExtended = ObjectMapper.MapItem(person, new ModelFactoryPersonExtended());

        expect(person.personId).toBe('100');
        expect(person.forename).toBe('Janet');
        expect(person.surname).toBe('Ellis');

        expect(personExtended.personId).toBe('100');
        expect(personExtended.forename).toBe('Janet');
        expect(personExtended.surname).toBe('Ellis');
    });

    test('map array', () => {

        const personA = {personId: '100', forename: 'John', surname: 'Waters'};
        const personB = {personId: '200', forename: 'Kathy', surname: 'Stockard'};
        const personC = {personId: '300', forename: 'Jim', surname: 'Kettles'};
        const sourceArray = [personA, personB, personC];

        const result = ObjectMapper.MapArray(sourceArray, new ModelFactoryPersonSummary());

        expect(result.length).toBe(3);
        expect(result[0].personId).toBe('100');
        expect(result[0].forename).toBe('John');
        expect(result[0].surname).toBe('Waters');

        expect(result[1].personId).toBe('200');
        expect(result[1].forename).toBe('Kathy');
        expect(result[1].surname).toBe('Stockard');

        expect(result[2].personId).toBe('300');
        expect(result[2].forename).toBe('Jim');
        expect(result[2].surname).toBe('Kettles');
    });

    test('map PersonExtended to PersonBase', () => {

        // should remove 'SkillsSummary as this does not exist in the PersonSummary Object
        //
        const personExtended = {
            personId: '100',
            forename: 'Janet',
            surname: 'Ellis',
            SkillsSummary: 'Testing, UX'};

        const person = ObjectMapper.MapItem(personExtended, new ModelFactoryPersonSummary());

        expect(person.personId).toBe('100');
        expect(person.forename).toBe('Janet');
        expect(person.surname).toBe('Ellis');

        // tslint:disable-next-line:forin
        for (const key in person) {
            switch (key) {
                case 'SkillsSummary':
                    expect(key).toBe('property should not exist');
                    break;
            }
        }

    });

});
