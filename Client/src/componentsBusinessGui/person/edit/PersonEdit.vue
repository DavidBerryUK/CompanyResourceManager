<template>
  <div class="form-style">

    <custom-form-edit-header
      title="Person"
      :saveEnabled="modelChangeTracker.hasObjectChanged"
      :isActive="model.isActive"
      @onSave="onSave"
      @onCancel="onCancel"
      @onArchive="onArchive"
    ></custom-form-edit-header>

    <custom-loader v-if="isLoading" key="panel-loading"></custom-loader>

    <div v-else class="form-body" key="panel-editing">
      <div>
        <v-card dark color="orange">
          <v-container fluid>
            <v-layout row>
              <v-flex xs6>
                <custom-label-data label="Forename" :stringValue="model.forename" one-time-bind></custom-label-data>
              </v-flex>

              <v-flex xs6>
                <custom-label-data label="Surname" :stringValue="model.surname" one-time-bind></custom-label-data>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <v-form ref="editForm" class="form-body">
          <v-card class="mt-2 pt-4 pl-4 pr-4 pb-2">
            
            <v-layout row>
              <v-flex xs4 pr-4>
                <v-text-field
                  label="Forename"
                  v-model="model.forename"
                  v-validate="'required|min:2|max:100'"
                  data-vv-name="Forename"
                  required
                  :error-messages="errors.collect('Forename')"
                >></v-text-field>
              </v-flex>

              <v-flex xs4 pr-4>
                <v-text-field
                  label="Surname"
                  v-model="model.surname"
                  v-validate="'required|min:2|max:100'"
                  data-vv-name="Surname"
                  required
                  :error-messages="errors.collect('Surname')"
                >></v-text-field>
              </v-flex>

              <v-flex xs4>
                <v-text-field
                  label="Email Address"
                  v-model="model.email"
                  v-validate="'required'"
                  data-vv-name="Email"
                  required
                  :error-messages="errors.collect('Email')"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4 pr-4>
                <v-select
                  :items="jobRoleList.items"
                  label="Job Role"
                  item-value="id"
                  item-text="name"
                  required
                  data-vv-name="Job Role"
                  v-validate="'required'"
                  :error-messages="errors.collect('Job Role')"
                  v-model="model.jobRoleId"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-card>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PersonEdit.ts"></script>
