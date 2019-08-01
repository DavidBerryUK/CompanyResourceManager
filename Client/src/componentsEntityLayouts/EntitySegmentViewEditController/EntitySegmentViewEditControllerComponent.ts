import { Component }                            from 'vue-property-decorator';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';

enum EnumControllerMode {
    viewing,
    editing,
}

@Component
export default class EntitySegmentViewEditControllerComponent extends Vue {

    @Prop() public title!: string;
    @Prop() public entityModel!: EntityPageModel<IApiModel>;

    private entityBackup: string = '';

    private mode: EnumControllerMode = EnumControllerMode.viewing;

    constructor() {
        super();
    }

    public get isViewing(): boolean {
        return this.mode === EnumControllerMode.viewing;
    }

    public get isEditing(): boolean {
        return this.mode === EnumControllerMode.editing;
    }

    public onCancel() {
        this.mode = EnumControllerMode.viewing;
        this.$emit('onCancel');
    }

    public onEdit() {
        this.mode = EnumControllerMode.editing;
        this.$emit('onEditBegins');
    }

    public onSave() {
        this.mode = EnumControllerMode.viewing;
        this.$emit('onSave');
    }

    /**
     * Watch the id of the record, it this changes it means that another record has loaded
     * And the edit mode should return to EnumControllerMode.viewing.
     */
    @Watch('entityModel.entity.entityKey')
    private watchIdChanges() {
        this.mode = EnumControllerMode.viewing;
    }

}

Vue.component('crm-entity-segment-view-edit-controller', EntitySegmentViewEditControllerComponent);
