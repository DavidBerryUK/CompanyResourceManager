import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterAssetSummaryService                from '@/services/filters/assetSummaryFilterService/FilterAssetSummaryService';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';
import ObjectArrayMapperAssetSummaryModel       from '@/repositories/objectMappers/asset/ObjectArrayMapperAssetSummaryModel';
import ObjectMapperAssetSummaryModel            from '@/repositories/objectMappers/asset/ObjectMapperAssetSummaryModel';

/**
 * Presents a list of assets to the user that can be filtered
 * by record status (current,deleted or all)
 * when a asset is selected its details will be displayed
 * @export
 * @class AssetTypeList
 * @extends {BaseListPage}
 * @implements {IComponentMetaData}
 */
@Component({
  components: {
    NavigationListComponent,
  },
})
export default class AssetList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Asset List';
  public componentDescription: string = 'Displays a list of Assets';
  // IComponentMetaData

  public listConfiguration: NavigationListConfig<AssetSummaryModel> =
  new NavigationListConfig<AssetSummaryModel>(
  'Assets',                                           // Title
  new NavigationCrudAsset(),                          // People Navigation Provider
  AssetRepositoryFactory.getRepository(),             // People Repository Provider
  new ObjectMapperAssetSummaryModel(),                // Map Java Object to Typescript People Object
  new ObjectArrayMapperAssetSummaryModel(),           // Map Java Object Array to Typescript Array of People Objects
  new FilterAssetSummaryService(),                    // Filter People list (user text search)
  (data: AssetSummaryModel) => `${data.description}`, // Format of text for cell line 1 (header)
  (data: AssetSummaryModel) => ``,                    // Format of text for cell line 2 (body)
  (data: AssetSummaryModel) => `${data.badgeNo}`,     // Format of text for cell line 3 (footer)
);


}
