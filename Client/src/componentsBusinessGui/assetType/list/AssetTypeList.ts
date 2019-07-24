import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterAssetTypeService                   from '@/services/filters/assetTypeFilterService/FilterAssetTypeService';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';
import ObjectMapperFactoryAssetType             from '@/repositories/objectMappers/ObjectMapperFactoryAssetType';

/**
 * Presents a list of Asset Types to the user that can be filtered
 * by record status (current,deleted or all)
 *
 * when a Tsset Type is selected its details will be displayed
 */
@Component({
  components: {
    NavigationListComponent,
  },
})
export default class AssetTypeList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Asset Type List';
  public componentDescription: string = 'Displays a list of asset types';
  // IComponentMetaData

  public listConfiguration: NavigationListConfig<AssetTypeSummmaryModel> =
  new NavigationListConfig<AssetTypeSummmaryModel>(
  'Asset Types',                                              // Title
  new NavigationCrudAssetType(),                              // People Navigation Provider
  AssetTypeRepositoryFactory.getRepository(),                 // People Repository Provider
  ObjectMapperFactoryAssetType.createSummaryMapper(),         // Map Java Object to Typescript People Object
  new FilterAssetTypeService(),                               // Filter People list (user text search)
  (data: AssetTypeSummmaryModel) => `${data.name}`,           // Format of text for cell line 1 (header)
  (data: AssetTypeSummmaryModel) => ``,                       // Format of text for cell line 2 (body)
  (data: AssetTypeSummmaryModel) => `${this.footerMessage(data)}`,  // Format of text for cell line 3 (footer)
);


    public footerMessage(data: AssetTypeSummmaryModel): string {
      if ( data.hasAssetBadge ) {
        return 'Tracked with Asset Badge';
      }
      return '';
    }

}
