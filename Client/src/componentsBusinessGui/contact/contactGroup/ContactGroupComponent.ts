import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactLineComponent                     from '../contactLine/ContactLineComponent';
import Vue                                      from 'vue';

@Component({
  components: {
    ContactLineComponent,
  },
})
export default class ContactGroupComponent extends Vue {

  @Prop() public contactGroupId!: string;

  constructor() {
    super();
  }
}

Vue.component('crm-contact-group', ContactGroupComponent);
