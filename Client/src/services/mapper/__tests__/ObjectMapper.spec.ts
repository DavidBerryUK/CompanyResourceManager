import ObjectMapper                             from '../ObjectMapper';

class PersonBase {
    public id: number = 0;
    public forename: string = '';
    public surname: string = '';
    public get fullName(): string {
        return `${this.forename} ${this.surname}`;
    }
}

class PersonExtended extends PersonBase {
    public dob: string = '';
    public gender: string = '';
    public postCode: string = '';
}

describe('Object Mapper Tests', () => {

    test('map javascript object to PersonBase', () => {
        const obj = {id: 100, forename: 'Sid', surname: 'James'};
        const person = ObjectMapper.Map(obj, new PersonBase());
        expect(person.id).toBe(100);
        expect(person.forename).toBe('Sid');
        expect(person.surname).toBe('James');
        expect(person.fullName).toBe('Sid James');
    });

    test('map PersonBase to PersonExtended', () => {

        const person = new PersonBase();
        person.id = 100;
        person.forename = `Janet`;
        person.surname = 'Ellis';

        const personExtended = ObjectMapper.Map(person, new PersonExtended());

        expect(person.id).toBe(100);
        expect(person.forename).toBe('Janet');
        expect(person.surname).toBe('Ellis');
        expect(person.fullName).toBe('Janet Ellis');

        expect(personExtended.id).toBe(100);
        expect(personExtended.forename).toBe('Janet');
        expect(personExtended.surname).toBe('Ellis');
        expect(personExtended.fullName).toBe('Janet Ellis');
    });

    test('map PersonExtended to PersonBase', () => {

        const personExtended = new PersonExtended();
        personExtended.id = 100;
        personExtended.forename = `Janet`;
        personExtended.surname = 'Ellis';
        personExtended.gender = 'female';
        personExtended.dob = '1975';
        personExtended.postCode  = 'LS11PZ';

        const person = ObjectMapper.Map(personExtended, new PersonBase());

        expect(person.id).toBe(100);
        expect(person.forename).toBe('Janet');
        expect(person.surname).toBe('Ellis');
        expect(person.fullName).toBe('Janet Ellis');

        // tslint:disable-next-line:forin
        for (const key in person) {
            switch (key) {
                case 'id':
                case 'forename':
                case 'surname':
                break;

                default:
                    expect(key).toBe('property should not exist');
                    break;
            }
        }

    });

});
