<template>
  <div class="form-style">
    <custom-form-view-header
      title="Asset Type"
      :isActive="model.isActive"
      @onRestore="onRestore"
      @onEdit="onEdit"
    ></custom-form-view-header>

    <div class="form-body">
      <v-card dark color="blue">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5>
              <custom-label-data label="Asset Type" :stringValue="model.name"></custom-label-data>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>

      <v-card class="mt-2 pt-4 pl-4 pr-4 pb-2">
          

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
            
          </v-card>
    </div>
  </div>
</template>

<script lang="ts" src='./AssetTypeView.ts'>
</script>

