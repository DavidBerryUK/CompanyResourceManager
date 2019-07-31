import { Component }                            from 'vue-property-decorator';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';

enum EnumControllerMode {
    viewing,
    editing,
}

@Component
export default class EntitySegmentViewEditControllerComponent extends Vue {

    @Prop() public title!: string;
    @Prop() public model!: EntityPageModel<IApiModel>;

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

    public onEdit() {
        this.mode = EnumControllerMode.editing;
    }

    public onSave() {
        this.mode = EnumControllerMode.viewing;
        this.$emit('onSaveRequested');
    }
}

Vue.component('crm-entity-segment-view-edit-controller', EntitySegmentViewEditControllerComponent);
