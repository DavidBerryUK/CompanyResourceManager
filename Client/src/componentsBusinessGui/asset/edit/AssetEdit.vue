<template>
  <div class="form-style">
    <custom-form-edit-header
      title="Asset"
      :saveEnabled="modelChangeTracker.hasObjectChanged"
      :isActive="model.isActive"
      @onSave="onSave"
      @onCancel="onCancel"
      @onDelete="onDelete"
    ></custom-form-edit-header>

    <custom-loader v-if="isLoading" key="panel-loading"></custom-loader>

    <div v-else class="form-body" key="panel-editing">
      <div>
        <v-card dark color="orange">
          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <custom-label-data label="Name" :stringValue="model.name" one-time-bind></custom-label-data>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-form ref="editForm" class="form-body">
          <v-card class="mt-2 pt-4 pl-4 pr-4 pb-2">
            <v-layout row>
              <v-flex xs4  pr-4>
                <v-text-field 
                  label="Name"
                  v-model="model.description"
                  v-validate="'required|min:4|max:100'"
                  data-vv-name="Description"
                  required
                  :error-messages="errors.collect('Description')"
                ></v-text-field>
              </v-flex>
              <v-flex xs4  pr-4>
            
            <v-select :items="assetTypesList.items" 
                          label="Asset Type " 
                          item-value="id" 
                          item-text="name" required 
                          data-vv-name="Asset Type"
                          v-validate="'required'"
                          :error-messages="errors.collect('Asset Type')"
                          v-model="model.assetTypeId"></v-select>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  label="Name"
                  v-model="model.assetTypeName"></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field
                  label="badgeNo"
                  v-model="model.badgeNo"
                  v-validate="'required|min:4|max:20'"
                  data-vv-name="BadgeNo"
                  required
                  :error-messages="errors.collect('BadgeNo')"
                ></v-text-field>
              </v-flex>
            </v-layout>

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
        </v-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./AssetEdit.ts"></script>
