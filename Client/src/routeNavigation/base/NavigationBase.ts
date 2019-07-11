import { Location }                             from "vue-router";
import Vue                                      from "vue";

export default class NavigationBaseCrud {

    navigateTo(instance: Vue, name : string, entityId: string)
    {
        var location: Location = {name: name,params: { id: entityId }};
        instance.$router.push(location);
    }

}