<template>
    <div>
     <v-layout row>
        <v-flex xs4>
          <crm-label-data label="Forename" :stringValue="entityModel.entity.forename"></crm-label-data>
        </v-flex>
        <v-flex xs4>
          <crm-label-data label="Surname" :stringValue="entityModel.entity.surname"></crm-label-data>
        </v-flex>
        
      </v-layout>
      <v-layout row>
        <v-flex xs4>
          <crm-label-data label="Job Role" :stringValue="entityModel.entity.jobRoleName"></crm-label-data>
        </v-flex>
        <v-flex xs8>
          <crm-label-data label="Email Address" :stringValue="entityModel.entity.email"></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
</template>

<script lang='ts' src='./EntitySegmentPersonViewComponent.ts'>
</script>
