import { Component }                            from 'vue-property-decorator';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';
import VueUtilities                             from '@/utilities/vueUtilities/VueUtilities';

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

    public mounted() {
        console.log(`EntitySegmentViewEditControllerComponent-mounted:${this.entityModel.entity.entityKey}`);
        this.evaluateDefaultViewMode();
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
        // Get the component in the Edit Slot and validate it. If the validation is ok
        // then emit the 'onSave' message to tell the host page to save the entity
        //
        const editVueInstance = VueUtilities.getNamedSlotInstance(this, 'edit');
        if ( editVueInstance !== null ) {
            editVueInstance.$validator.validate().then((response) => {
                if ( response ) {
                    this.$emit('onSave');
                }
            });
        }
    }

    /**
     * Watch the id of the record, it this changes it means that another record has loaded
     * And the edit mode should return to EnumControllerMode.viewing.
     */
    @Watch('entityModel.entity.entityKey')
    public watchIdChanges() {
        console.log(`EntitySegmentViewEditControllerComponent-WatchIdChanged:${this.entityModel.entity.entityKey}`);
        this.evaluateDefaultViewMode();
    }

    private evaluateDefaultViewMode() {
        console.log(`EntitySegmentViewEditControllerComponent-evaluateDefaultViewMode:${this.entityModel.entity.entityKey}`);
        if ( this.entityModel.isNewRecord ) {
            console.log('mode = editing');
            this.mode = EnumControllerMode.editing;
        } else {
            console.log('mode = viewing');
            this.mode = EnumControllerMode.viewing;
        }
    }

}

Vue.component('crm-entity-segment-view-edit-controller', EntitySegmentViewEditControllerComponent);
