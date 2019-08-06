
import ContactExtendedModel             from '@/repositories/models/contact/ContactExtendedModel';
import MappingConfig                    from '../MappingConfig';
import ModelFactoryContactExtended      from '@/repositories/modelFactories/ModelFactoryContactExtended';
import ModelFactoryContactGroupExtended from '@/repositories/modelFactories/ModelFactoryContactGroupExtended';
import ObjectMapper2                    from '../ObjectMapper2';
import ObjectMapperRegistry             from '../ObjectMapperRegistry';
import PropertyConfig                   from '../PropertyConfig';

describe('Object Mapper Tests', () => {


    test('map javascript object to PersonBase', () => {
        const config = new MappingConfig(
            new ModelFactoryContactGroupExtended(),
            [
                new PropertyConfig('contacts', new ModelFactoryContactExtended()),
            ]);

        ObjectMapperRegistry.register('ContactGroupExtended', config);

        const obj = {
            contacts: [
                {
                    contactId: 'f38626de-9ee4-47a0-8c32-9a91dd571799',
                    contactGroupId: '326f4b79-a524-4190-9524-f682e0aacb0e',
                    contactTypeId: '6f00f977-9720-4990-842c-373fd990d576',
                    contactTypeName: 'Personal Email',
                    value: 'Dave@Home.com',
                    isActive: true,
                },
                {
                    contactId: '7b05805c-8833-48be-bd98-ad2b2c3aefff',
                    contactGroupId: '326f4b79-a524-4190-9524-f682e0aacb0e',
                    contactTypeId: 'aa2fe7d2-79a4-4dce-a16b-796b82aad34c',
                    contactTypeName: 'Work Email',
                    value: 'Dave.Berry@Work.com',
                    isActive: true,
                },
                {
                    contactId: 'f4fbcd77-46dc-4693-97c0-3205eeca63ca',
                    contactGroupId: '326f4b79-a524-4190-9524-f682e0aacb0e',
                    contactTypeId: 'c613ab3c-6dea-4c47-a747-0c533003acb5',
                    contactTypeName: 'Work Phone',
                    value: '0113 39202013',
                    isActive: true,
                },
            ],
            contactGroupId: '326f4b79-a524-4190-9524-f682e0aacb0e',
            preferredContactId: '00000000-0000-0000-0000-000000000000',
            notes: 'Sample Notes',
            isActive: true,
        };

        const mappingConfig = ObjectMapperRegistry.get('ContactGroupExtended');
        if ( mappingConfig === null ) {
            throw new Error('mapping configuration not found');
        }

        const group = ObjectMapper2.MapItem(obj, mappingConfig);

        expect(group.contactGroupId).toBe('326f4b79-a524-4190-9524-f682e0aacb0e');
        expect(group.preferredContactId).toBe('00000000-0000-0000-0000-000000000000');
        expect(group.notes).toBe('Sample Notes');
        expect(group.isActive).toBeTruthy();

        expect(group.contacts.length).toBe(3);

        const contact = new ContactExtendedModel();
        group.contacts.push(contact);

    });
});
