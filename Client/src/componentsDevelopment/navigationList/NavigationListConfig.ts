import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IListFilterArchiveFlag }               from '@/repositories/models/listFilter/interfaces/IListFilterInterfaces';
import { IListFilterByText }                    from '@/services/filters/interfaces/FilterInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';

export default class NavigationListConfig<S extends IApiModel> {

    public filterListService: IListFilterByText<S>;
    public navigationHandler: INavigationCrud;
    public repository: GenericApiRepository<S, any, any>;
    public objectArrayMapper: IObjectArrayMapper<S>;
    public objectMapper: IObjectMapper<S>;
    public summaryEntityName: string;
    // the currently selected person
    public selectedItem: S;
    // Primary list of data read via the API
    public dataList: GenericCollectionModel<S> = new GenericCollectionModel<S>();

    public filterModel: IListFilterArchiveFlag = new ListFilterWithArchiveFlag();

    constructor(
        navigationHandler: INavigationCrud,
        repository: GenericApiRepository<S, any, any>,
        objectMapper: IObjectMapper<S>,
        objectArrayMapper: IObjectArrayMapper<S>,
        filterListService: IListFilterByText<S>) {


        this.filterListService = filterListService,
            this.repository = repository;
        this.navigationHandler = navigationHandler;
        this.objectMapper = objectMapper;
        this.objectArrayMapper = objectArrayMapper;
        this.selectedItem = this.objectMapper.map({});
        this.dataList.items = this.objectArrayMapper.map([]);
        this.summaryEntityName = this.objectMapper.map({}).entityName;
    }
}
