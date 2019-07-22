import { Location }                             from 'vue-router';
import Vue                                      from 'vue';

export default class NavigationBaseCrud {

    public navigateTo(instance: Vue, name: string, entityId: string) {
        const location: Location = {name, params: { id: entityId }};
        instance.$router.push(location);
    }
}
