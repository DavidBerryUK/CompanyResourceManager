import { EnumModalButton }                      from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { ValidationMessage }                    from '@/repositories/contracts/ApiResponseContract';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                from "vue-class-component";
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';

@Component({
  components: {
    FormViewHeader,
    LabelDataReadOnly
  }
})
export default class AssetView extends BaseViewPage<AssetSummaryModel> implements IComponentMetaData {

  //IComponentMetaData
  public componentName : string = "Asset View";
  public componentDescription : string = "Enables the user to view an Asset";
  //IComponentMetaData
  
  constructor() {
    super(new NavigationCrudAsset());   
    this.model = new AssetSummaryModel();
  }

  mounted() {
    super.mounted()
  }

  onRestore() {

    //
    // ask the user to confirm they with to restore the asset
    //
    var dialog = new CommonAppDialogController(this);
    dialog.createWithParameters(`Restore ${this.model.name} ?`,
                                "Are you sure you wish to make this asset active again?",
                                EnumModalIcon.Question,
                                EnumModalButton.YesNo,
                                EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to restore the asset, on success display the read only version
        //
        var apiRepository = AssetRepositoryFactory.getRepository();
        apiRepository
          .activate(this.model.assetId)
          .onSuccess((data: AssetSummaryModel | null) => {
            if ( data)
            {
              this.model = data;
            }
            
          })
          .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
            this.addValidationErrors(validationMessages);
          })
          .onFailed((message: string) => {
            //
            // if failed, show user why
            //
            var dialog = new CommonAppDialogController(this);
            dialog.createWithParameters(`Restore ${this.model.name}`,
                                        `Failed to restore asset :${message}`,
                                        EnumModalIcon.Error,
                                        EnumModalButton.Ok,
                                        EnumModalWidth.FixedMedium)
                    .show();
          });

      }).show();
  }

  retrieveData() {
    var repository = AssetRepositoryFactory.getRepository();

    repository
      .getById(this.id)
      .onSuccess((data: AssetSummaryModel | null) => {

        if (data !== null) {
          this.model = data as AssetSummaryModel;
        }
        this.$forceUpdate();
      });

  }
}
