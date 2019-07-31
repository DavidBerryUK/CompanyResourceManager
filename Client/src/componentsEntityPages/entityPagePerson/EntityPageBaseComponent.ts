import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import ContractListener                         from '@/repositories/contracts/ContractListener';
import EntityPageModel                          from '../../componentsEntityLayouts/models/EntityPageModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import Vue                                      from 'vue';

/**
 * E = EntityType
 * T = EntityPageModel
 */
export default class EntityPageBaseComponent<E extends IApiModel, T extends EntityPageModel<E>>
    extends Vue implements IComponentMetaData {

    @Prop() public id!: string;

    public entityModel!: T;

    public repository: GenericApiRepository<any, E, any>;

    // IComponentMetaData
    public componentName: string = 'EntityPageBaseComponent';
    public componentDescription: string = 'Entity Page Base Component';
    // IComponentMetaData

    private modelFactory: IModelFactory<E>;

    constructor(
        entityPageModel: T,
        repository: GenericApiRepository<any, E, any>,
        modelFactory: IModelFactory<E>) {
        super();
        this.modelFactory = modelFactory;
        this.entityModel = entityPageModel;
        this.repository = repository;
        this.entityModel.id = this.id;
        this.entityModel.entity = this.modelFactory.create();
        this.getData();
    }

    @Watch('entityModel.entity', { deep: true })
    public onModelChanged(newValue: T, oldValue: T) {
      // check to see if the object has returned to its original value
      this.entityModel.changeTracker.evaluateHasObjectChanged(this.entityModel.entity);
    }

    @Watch('id')
    public watchPropertyId() {
        console.log('EntityPageBaseComponent:id updated');
        this.entityModel.id = this.id;
        this.getData();
    }

    public onSaveRequested() {
        console.log('EntityPageBaseComponent - request to save entity');
    }

    public getData() {

        const listener = new ContractListener();

        listener.monitor()
          .onAllResponded(() => {
            this.entityModel.isLoading = false;
          });

        this.entityModel.isLoading = true;

        this.retrieveSecondaryData(listener);
        this.repository
            .getById(this.entityModel.id)
            .onSuccess((data) => {

                if (data !== null) {
                    this.entityModel.entity = data as E;
                    this.entityModel.resetTracker();
                }

                this.$forceUpdate();
            })
            .contractListener(listener);
    }

    public retrieveSecondaryData(contractListener: ContractListener) {
    }
}
