<template>
    <div>
        <v-layout row>
        <v-flex xs6>
          <crm-label-data label="Contact Type" :stringValue="entityModel.entity.name"></crm-label-data>
        </v-flex>
        <v-flex xs6>
          <crm-label-data label="Validation Type" :stringValue="entityModel.entity.contactValidationName"></crm-label-data>
        </v-flex>
      </v-layout>      
    </div>
</template>

<script lang='ts' src='./EntitySegmentContactTypeViewComponent.ts'>
</script>
