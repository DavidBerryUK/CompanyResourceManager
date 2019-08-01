<template>
  <div>
    <v-layout row>
      <v-flex xs4>
        <crm-label-data label="Description" :stringValue="entityModel.entity.description"></crm-label-data>
      </v-flex>
      <v-flex xs4>
        <crm-label-data label="Asset Type" :stringValue="entityModel.entity.assetTypeName"></crm-label-data>
      </v-flex>
      <v-flex xs4>
        <crm-label-data label="Asset Badge" :stringValue="entityModel.entity.badgeNo"></crm-label-data>
      </v-flex>
    </v-layout>

    <v-layout row pt-3>
      <v-flex xs4>Has Asset Badge</v-flex>
      <v-flex xs4>Has Operating System</v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-switch readonly class="controls-no-top" v-model="entityModel.entity.hasAssetBadge"></v-switch>
      </v-flex>
      <v-flex xs4>
        <v-switch readonly class="controls-no-top" v-model="entityModel.entity.hasOperatingSystem"></v-switch>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang='ts' src='./EntitySegmentAssetViewComponent.ts'>
</script>
