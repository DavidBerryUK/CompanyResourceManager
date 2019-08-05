import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactSummaryModel                      from '@/repositories/models/contact/ContactSummaryModel';
import Vue                                      from 'vue';

@Component
export default class ContactLineComponent extends Vue {

  @Prop() public contact!: ContactSummaryModel;

  constructor() {
    super();
  }
}

Vue.component('crm-contact-line', ContactLineComponent);
