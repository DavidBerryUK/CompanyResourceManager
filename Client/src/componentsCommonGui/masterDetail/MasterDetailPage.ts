import { EnumModalButton }                      from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                from 'vue-class-component';
import ComponentIconConstants                   from '@/constants/ComponentIconConstants';
import ElementPageWrapperComponent              from '@/componentsCommonGui/elementPageWrapper/ElementPageWrapperComponent';
import ElementTitleWrapperComponent             from '@/componentsCommonGui/elementTitleComponent/ElementTitleWrapperComponent';
import NavigationCheckInterfaceGuards           from '@/router/interfaces/NavigationCheckInterfaces';
import Vue                                      from 'vue';


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
       if (this) {
         this.checkIfCanNavigateAwayFromPage(next);
       } else {
         next();
       }
     }

     public beforeRouteUpdate(from: any, to: any, next: any) {
         this.checkIfCanNavigateAwayFromPage(next);
     }

     public beforeRouteLeave(from: any, to: any, next: any) {
       if (this) {
         this.checkIfCanNavigateAwayFromPage(next);
       } else {
         next();
       }
     }


     private checkIfCanNavigateAwayFromPage(next: any) {
       console.log('MasterDetailPage - do All the Checking');

       let doNeedToAskForPermission = false;

       if ( !this.recursivelyCheckIfCanNavigateAwayFromCurrentView(this) ) {
         doNeedToAskForPermission = true;
       }

      //  // Check each component to see if can navigate away from the page
      //  this.$children.forEach((child: Vue) => {

      //     if ( NavigationCheckInterfaceGuards.doesSupportIRouteBeforeNavigationCheck(child)) {
      //       const canClose = child.canCloseComponentBeforeNavigation();
      //       if (canClose === false) {
      //         doNeedToAskForPermission = true;
      //       }
      //    }
      //  });

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

     /**
      * Recursively check all components to see if they support the IRouteBeforeNavigationCheck
      * interface, and if so, can they be navigated away from
      * @param instance - a vue instance
      */
     private recursivelyCheckIfCanNavigateAwayFromCurrentView(instance: Vue): boolean {

      if ( NavigationCheckInterfaceGuards.doesSupportIRouteBeforeNavigationCheck(instance)) {
        const canClose = instance.canCloseComponentBeforeNavigation();
        if (canClose === false) {
          return false;
        }
     }

      instance.$children.forEach((child: Vue) => {
        if ( !this.recursivelyCheckIfCanNavigateAwayFromCurrentView(child)) {
          return false;
        }
      });

      return true;
     }
  }
