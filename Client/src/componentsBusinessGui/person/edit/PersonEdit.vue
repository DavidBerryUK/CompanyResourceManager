<template>
  <crm-entity-edit-template
    title="Person"
    :modelChangeTracker="modelChangeTracker"
    :isActive="model.isActive"
    :isLoading="isLoading"
    @onSave="onSave"
    @onCancel="onCancel"
    @onArchive="onArchive">

    <!-- HEADER -->
    <div slot="header">
      <v-layout row>
        <v-flex xs6>
          <crm-label-data label="Forename" :stringValue="model.forename" one-time-bind></crm-label-data>
        </v-flex>

        <v-flex xs6>
          <crm-label-data label="Surname" :stringValue="model.surname" one-time-bind></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">
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
    </div>
    <!-- BODY -->

  </crm-entity-edit-template>
</template>

<script lang='ts' src="./PersonEdit.ts">
</script>
