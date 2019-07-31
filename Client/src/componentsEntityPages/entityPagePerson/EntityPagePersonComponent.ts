import Component                                from 'vue-class-component';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from './EntityPageBaseComponent';
import EntitySegmentPersonEdit                  from '../entitySegmentPersonEdit/EntitySegmentPersonEditComponent';
import EntitySegmentPersonView                  from '../entitySegmentPersonView/EntitySegmentPersonViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';

@Component({
    components: {
        EntityLayoutPageTemplateComponent,
        EntitySegmentPersonEdit,
        EntitySegmentPersonView,
        EntitySegmentViewEditControllerComponent,
    },
  })export default class EntityPagePersonComponent extends EntityPageBaseComponent<PersonExtendedModel> {

    constructor() {
        super();
        this.entityModel.headerTitle = 'Person';
        this.entityModel.canArchive = true;
    }
}
