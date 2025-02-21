import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterAssetSummaryService                from '@/services/filters/assetSummaryFilterService/FilterAssetSummaryService';
import ModelFactoryAssetExtended                from '@/repositories/modelFactories/asset/ModelFactoryAssetExtended';
import ModelFactoryAssetSummary                 from '@/repositories/modelFactories/asset/ModelFactoryAssetSummary';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';

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

  public listConfiguration: NavigationListConfig<AssetSummaryModel, AssetExtendedModel> =
    new NavigationListConfig<AssetSummaryModel, AssetExtendedModel>(
      'Assets',                                           // Title
      new NavigationCrudAsset(),                          // People Navigation Provider
      AssetRepositoryFactory.getRepository(),             // People Repository Provider
      new ModelFactoryAssetSummary(),                     // Map Java Object to Typescript  Object
      new ModelFactoryAssetExtended(),                    // factory to create extended objects
      new FilterAssetSummaryService(),                    // Filter People list (user text search)
      (data: AssetSummaryModel) => `${data.description}`, // Format of text for cell line 1 (header)
      (data: AssetSummaryModel) => ``,                    // Format of text for cell line 2 (body)
      (data: AssetSummaryModel) => `${data.badgeNo}`,     // Format of text for cell line 3 (footer)
    );


}
