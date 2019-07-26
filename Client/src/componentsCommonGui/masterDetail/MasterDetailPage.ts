import { EnumModalButton }                        from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                          from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                         from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import CommonAppDialogController                  from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                  from 'vue-class-component';
import ComponentIconConstants                     from '@/constants/ComponentIconConstants';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapper/ElementPageWrapperComponent';
import ElementTitleWrapperComponent               from '@/componentsCommonGui/elementTitleComponent/ElementTitleWrapperComponent';
import NavigationCheckInterfaceGuards             from '@/router/interfaces/NavigationCheckInterfaces';
import Vue                                        from 'vue';



@Component({
  components: {
    ElementTitleWrapperComponent,
    ElementPageWrapperComponent,
  },
})
export default class MasterDetailPage extends Vue {

    public ComponentIconConstants = ComponentIconConstants;

    constructor() {
      super();
    }

    public data(): any  {
      return {};
    }

    public beforeRouteEnter(from: any, to: any, next: any) {
      //  console.log('Navigation Detail:beforeRouter     Enter');
      //  console.log('----------------------------------------');
       if (this) {
         this.doAllTheChecking(next);
       } else {
         next();
       }
     }

     public beforeRouteUpdate(from: any, to: any, next: any) {
       // console.log("Navigation Detail:beforeRouter     Update");
       // console.log("------------------------------------");
         this.doAllTheChecking(next);
     }

     public beforeRouteLeave(from: any, to: any, next: any) {
       // console.log("Navigation Detail:beforeRouter   Leave");
       // console.log("------------------------------------");
       if (this) {
         this.doAllTheChecking(next);
       } else {
         next();
       }
     }

     private doAllTheChecking(next: any) {
      // console.log("MasterDetailPage - do All the Checking");

       let doNeedToAskForPermission = false;

       // console.log("checking children in the view: count=" + this.$children.length);
       this.$children.forEach((child: Vue) => {
        //  if ( ComponentMetaDataInterfaceGuards.doesSupportIComponentMetaData(child) ) {
        //    //console.log("checking for navigation guards on " + child.componentName);
        //  }
        //  else{
        //    //console.log("checking for navigation guards on ");
        //  }

         if ( NavigationCheckInterfaceGuards.doesSupportIRouteBeforeNavigationCheck(child)) {
           const canClose = child.canCloseComponentBeforeNavigation();
           if (canClose === false) {
             doNeedToAskForPermission = true;
           }
         }
       });

       if (doNeedToAskForPermission) {

         // console.log("NEED TO ASK FOR PERMISSION");

         const dialogController = new CommonAppDialogController(this);
         dialogController.createWithParameters(  'Unsaved Changes',
                                                 'There are unsaved changes, do you want to abandon these?',
                                                 EnumModalIcon.Question,
                                                 EnumModalButton.YesNo,
                                                 EnumModalWidth.FixedMedium,
         ).yesPressed(() => {
           return next();
         }).show();
       } else {
         next();
       }
     }
  }
