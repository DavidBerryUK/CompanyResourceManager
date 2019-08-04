import { Component }                            from 'vue-property-decorator';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';
import VueUtilities                             from '@/utilities/vueUtilities/VueUtilities';

@Component
export default class EntitySegmentViewEditControllerComponent extends Vue {

    @Prop() public title!: string;
    @Prop() public entityModel!: EntityPageModel<IApiModel>;

    private entityBackup: string = '';

    public mounted() {
        this.evaluateDefaultViewMode();
    }

    public get isViewing(): boolean {
        return !this.entityModel.isEditing;
    }

    public get isEditing(): boolean {
        return this.entityModel.isEditing;
    }

    public onCancel() {
        this.entityModel.isEditing = false;
        this.$emit('onCancel');
    }

    public onEdit() {
        this.entityModel.isEditing = true;
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
        this.evaluateDefaultViewMode();
    }

    private evaluateDefaultViewMode() {
        if ( this.entityModel.isNewRecord ) {
            this.entityModel.isEditing = true;
        } else {
            this.entityModel.isEditing = false;
        }
    }

}

Vue.component('crm-entity-segment-view-edit-controller', EntitySegmentViewEditControllerComponent);
