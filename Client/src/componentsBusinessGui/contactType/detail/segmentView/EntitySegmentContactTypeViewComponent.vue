<template>
    <div>
        <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Contact Type" :stringValue="entityModel.entity.name"></crm-label-data>
        </v-flex>
      </v-layout>      
    </div>
</template>

<script lang='ts' src='./EntitySegmentContactTypeViewComponent.ts'>
</script>
