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

        // Search all sub forms for the one that supports editing.
        // If validates, then save.
        console.log('EntitySegmentViewEditController-> begin validation attempt');

        console.log('');
        console.log('!!!');


        // const editInstance = this.$scopedSlots.edit()[0].componentInstance as Vue;
        const editSlot = this.$scopedSlots.edit;
        if ( editSlot !==  undefined ) {
            const vnode = editSlot([]);
            if ( vnode !== undefined) {
                const componentInstance = vnode[0].componentInstance;
                console.log(componentInstance);
                if (componentInstance !== undefined) {
                componentInstance.$validator.validate().then((response) => {
                    console.log(`validation response:${response}`);
                });
            }
            }
        }

        // editInstance.$validator.validate().then((response) => {
        //     console.log(response);
        // });

        console.log('!!!');
        // const edit = this.$scopedSlots;
        // if ( edit !== null && edit !== undefined ) {
        //     console.log(edit);


        //     // if ( edit.componentInstance  !== null) {
        //         // edit.componentInstance.validate().then((response) => { console.log('validated')})
        //     // }
        // }
        console.log('');
        console.log('');
    }

    /**
     * Watch the id of the record, it this changes it means that another record has loaded
     * And the edit mode should return to EnumControllerMode.viewing.
     */
    @Watch('entityModel.entity.entityKey')
    private watchIdChanges() {
        if ( this.entityModel.isNewRecord ) {
            this.mode = EnumControllerMode.editing;
        } else {
            this.mode = EnumControllerMode.viewing;
        }
    }

}

Vue.component('crm-entity-segment-view-edit-controller', EntitySegmentViewEditControllerComponent);
