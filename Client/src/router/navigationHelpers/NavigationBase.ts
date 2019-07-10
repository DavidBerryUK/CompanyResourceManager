import { Location }                             from "vue-router";
import Vue                                      from "vue";

export default class NavigationBase {

    static navigateTo(instance: Vue, name : string, id: string)
    {
        var location: Location = {name: name,params: { id: id }};
        instance.$router.push(location);
    }

}