<template>
  <crm-entity-view-template
    title="Asset Type"
    :isActive="model.isActive"
    @onEdit="onEdit"
    @onRestore="onRestore"
  >
    <!-- HEADER -->
    <v-layout row slot="header">
      <v-flex xs5>
        <crm-label-data label="Asset Type" :stringValue="model.name"></crm-label-data>
      </v-flex>
    </v-layout>
    <!-- HEADER -->

    <!-- FORM -->
    <div slot="form">
    
      <v-layout row>
        <v-flex xs4>Has Asset Badge</v-flex>
        <v-flex xs4>Has Operating System</v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs4>
          <v-switch readonly class="controls-no-top" v-model="model.hasAssetBadge"></v-switch>
        </v-flex>
        <v-flex xs4>
          <v-switch readonly class="controls-no-top" v-model="model.hasOperatingSystem"></v-switch>
        </v-flex>
      </v-layout>
      
    </div>
    <!-- FORM -->

  </crm-entity-view-template>
</template>

<script lang='ts' src='./AssetTypeView.ts'>
</script>
