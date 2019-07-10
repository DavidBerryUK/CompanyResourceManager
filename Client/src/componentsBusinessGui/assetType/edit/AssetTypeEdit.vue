<template>
  <div class="form-style">
    <custom-form-edit-header
      title="Asset Type"
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
              <v-flex xs12>
                <v-text-field
                  label="Name"
                  v-model="model.name"
                  v-validate="'required|min:4|max:100'"
                  data-vv-name="Name"
                  required
                  :error-messages="errors.collect('Name')"
                >></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4>Has Asset Badge</v-flex>
              <v-flex xs4>Has Operating System</v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4>
                <v-switch class="controls-no-top" v-model="model.hasAssetBadge"></v-switch>
              </v-flex>
              <v-flex xs4>
                <v-switch class="controls-no-top" v-model="model.hasOperatingSystem"></v-switch>
              </v-flex>
            </v-layout>
            
          </v-card>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./AssetTypeEdit.ts"></script>
