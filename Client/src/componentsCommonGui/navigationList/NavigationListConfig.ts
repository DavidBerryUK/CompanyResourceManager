import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IListFilterArchiveFlag }               from '@/repositories/models/listFilter/interfaces/IListFilterInterfaces';
import { IListFilterByText }                    from '@/services/filters/interfaces/FilterInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';

type ILineTextForDataItem = (data: IApiModel )  => string;

export default class NavigationListConfig<S extends IApiModel> {

    public title: string;
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

    public line1TextFunction: ((data: S ) => string );
    public line2TextFunction: ((data: S ) => string );
    public line3TextFunction: ((data: S ) => string );

    constructor(
        title: string,
        navigationHandler: INavigationCrud,
        repository: GenericApiRepository<S, any, any>,
        objectMapper: IObjectMapper<S>,
        objectArrayMapper: IObjectArrayMapper<S>,
        filterListService: IListFilterByText<S>,
        line1TextFunction: ((data: S ) => string  ),
        line2TextFunction: ((data: S ) => string  ),
        line3TextFunction: ((data: S ) => string  ),
        ) {

        this.title = title;
        this.filterListService = filterListService;
        this.repository = repository;
        this.navigationHandler = navigationHandler;
        this.objectMapper = objectMapper;
        this.objectArrayMapper = objectArrayMapper;
        this.selectedItem = this.objectMapper.map({});
        this.dataList.items = this.objectArrayMapper.map([]);
        this.summaryEntityName = this.objectMapper.map({}).entityName;
        this.line1TextFunction = line1TextFunction;
        this.line2TextFunction = line2TextFunction;
        this.line3TextFunction = line3TextFunction;
    }
}
