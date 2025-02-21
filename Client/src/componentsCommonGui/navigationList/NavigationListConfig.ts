import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IListFilterArchiveFlag }               from '@/repositories/models/listFilter/interfaces/IListFilterInterfaces';
import { IListFilterByText }                    from '@/services/filters/interfaces/FilterInterfaces';
import { IModelFactory }                        from './../../repositories/modelFactories/interfaces/IModelFactory';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import GenericApiExtendedRepository             from '@/repositories/apiBase/GenericApiExtendedRepository';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';

type ILineTextForDataItem = (data: IApiModel )  => string;

export default class NavigationListConfig<S extends IApiModel, E extends S> {

    public title: string;
    public filterListService: IListFilterByText<S>;
    public navigationHandler: INavigationCrud;
    public repository: GenericApiExtendedRepository<S, any, any>;
    public summaryEntityName: string;
    public extendedEntityName: string;
    // the currently selected person
    public selectedItem: S;
    // Primary list of data read via the API
    public dataList: GenericCollectionModel<S> = new GenericCollectionModel<S>();

    public filterModel: IListFilterArchiveFlag = new ListFilterWithArchiveFlag();

    public line1TextFunction: ((data: S ) => string );
    public line2TextFunction: ((data: S ) => string );
    public line3TextFunction: ((data: S ) => string );

    constructor(
        title: string,
        navigationHandler: INavigationCrud,
        repository: GenericApiExtendedRepository<S, any, any>,
        summaryModelFactory: IModelFactory<S>,
        extendedModelFactory: IModelFactory<E>,
        filterListService: IListFilterByText<S>,
        line1TextFunction: ((data: S ) => string  ),
        line2TextFunction: ((data: S ) => string  ),
        line3TextFunction: ((data: S ) => string  ),
        ) {

        this.title = title;
        this.filterListService = filterListService;
        this.repository = repository;
        this.navigationHandler = navigationHandler;
        this.selectedItem =  summaryModelFactory.create();
        this.dataList.items = summaryModelFactory.createArray();
        this.summaryEntityName = this.selectedItem.entityName;
        this.extendedEntityName = extendedModelFactory.create().entityName;
        this.line1TextFunction = line1TextFunction;
        this.line2TextFunction = line2TextFunction;
        this.line3TextFunction = line3TextFunction;
    }
}
