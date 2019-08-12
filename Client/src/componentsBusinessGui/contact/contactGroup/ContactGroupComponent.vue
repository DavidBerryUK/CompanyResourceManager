<template>
  <div>
    <h2>Contact Group</h2>

    <template value="true" v-for="(contact, index) in contactGroup.contacts">
      <crm-contact-line   :key="index" 
                          :contact="contact" 
                          :contactTypes="contactTypes">
      </crm-contact-line>
    </template> 
  </div>
</template>

<script  lang='ts'  src='./ContactGroupComponent.ts'>
</script>
