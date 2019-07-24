<template>
  <crm-entity-edit-template
    title="Security Groups"
    :modelChangeTracker="modelChangeTracker"
    :isActive="model.isActive"
    :isLoading="isLoading"
    @onSave="onSave"
    @onCancel="onCancel"
    @onArchive="onArchive"
  >
    <!-- HEADER -->
    <div slot="header">
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Name" :stringValue="model.name" one-time-bind></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">
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
    </div>
    <!-- BODY -->
  </crm-entity-edit-template>
</template>

<script lang='ts' src='./SecurityGroupEdit.ts'>
</script>
