import { EnumModalButton }                      from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { ValidationMessage }                    from '@/repositories/contracts/ApiResponseContract';
import AssetTypeModel                           from '@/repositories/models/assetType/AssetTypeModel';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                from "vue-class-component";
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';

@Component({
  components: {
    FormViewHeader,
    LabelDataReadOnly
  }
})
export default class AssetTypeView extends BaseViewPage<AssetTypeModel> implements IComponentMetaData {

  //IComponentMetaData
  public componentName : string = "Asset Type View";
  public componentDescription : string = "Enables the user to view an Asset Type";
  //IComponentMetaData
  
  constructor() {
    super(new NavigationCrudAssetType(), AssetTypeRepositoryFactory.getRepository() );   
    this.model = new AssetTypeModel();
  }

  mounted() {
    super.mounted()
  }

  onEdit() {
    super.onEdit()
  }

  onRestore() {

    //
    // ask the user to confirm they with to restore the asset type
    //
    var dialog = new CommonAppDialogController(this);
    dialog.createWithParameters(`Restore ${this.model.name} ?`,
                                "Are you sure you wish to make this asset type active again?",
                                EnumModalIcon.Question,
                                EnumModalButton.YesNo,
                                EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to restore the asset type, on success display the read only version
        //
        var apiPersonRepository = AssetTypeRepositoryFactory.getRepository();
        apiPersonRepository
          .activate(this.model.assetTypeId)
          .onSuccess((data: AssetTypeModel | null) => {
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
                                        `Failed to restore asset type :${message}`,
                                        EnumModalIcon.Error,
                                        EnumModalButton.Ok,
                                        EnumModalWidth.FixedMedium)
                    .show();
          });

      }).show();
  }
}
