<template>
    <div>
     <v-layout row>
        <v-flex xs4>
          <crm-label-data label="Forename" :stringValue="entityModel.forename"></crm-label-data>
        </v-flex>
        <v-flex xs4>
          <crm-label-data label="Surname" :stringValue="entityModel.surname"></crm-label-data>
        </v-flex>
        <v-flex xs4>
          <crm-label-data label="Email Address" :stringValue="entityModel.email"></crm-label-data>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Job Role" :stringValue="entityModel.jobRoleName"></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
</template>

<script lang='ts' src='./EntitySegmentPersonViewComponent.ts'>
</script>
