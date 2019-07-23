<template>
  <div class="form-style">
    <crm-form-edit-header
      title="Job Role"
      :saveEnabled="modelChangeTracker.hasObjectChanged"
      :isActive="model.isActive"
      @onSave="onSave"
      @onCancel="onCancel"
      @onArchive="onArchive"
    ></crm-form-edit-header>

    <crm-loader v-if="isLoading" key="panel-loading"></crm-loader>

    <div v-else class="form-body" key="panel-editing">
      <div>
        <v-card dark color="orange">
          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <crm-label-data label="Name" :stringValue="model.name" one-time-bind></crm-label-data>
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

            
          </v-card>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script lang='ts' src='./JobRoleEdit.ts'>
</script>
