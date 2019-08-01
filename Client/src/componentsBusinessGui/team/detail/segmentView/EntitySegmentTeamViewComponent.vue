<template>
    <div>
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Name" :stringValue="entityModel.entity.name"></crm-label-data>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Description" :stringValue="entityModel.entity.description"></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
</template>

<script lang='ts' src='./EntitySegmentTeamViewComponent.ts'>
</script>
