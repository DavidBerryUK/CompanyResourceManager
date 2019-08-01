import { IApiModel }                            from '../../repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';

@Component
export default class EntityLayoutPageHeaderComponent extends Vue {

    @Prop() public entityModel!: EntityPageModel<IApiModel>;

    constructor() {
        super();
    }

    /** Event Handler - the user has pressed the archive button */
    public onArchive() {
        this.$emit('onArchive');
    }

    /** Event Handler - the user has pressed the restore button */
    public onRestore() {
        this.$emit('onRestore');
    }

    public get showIsActive() {
        if ( this.entityModel.canArchive === false ) {
            return false;
        }
        return this.entityModel.isActive;
    }

    public get showIsArchived(): boolean {
        if ( this.entityModel.canArchive === false ) {
            return false;
        }
        return !this.entityModel.isActive;
    }
}

Vue.component('crm-entity-layout-page-header', EntityLayoutPageHeaderComponent);
