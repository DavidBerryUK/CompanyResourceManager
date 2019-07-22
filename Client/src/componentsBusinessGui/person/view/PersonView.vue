<template>
  <crm-entity-view-template 
      title="Person" 
      :isActive="model.isActive"
      @onEdit="onEdit"
      @onRestore="onRestore">

    <!-- HEADER -->
    <v-layout row slot="header">
      <v-flex xs5>
        <custom-label-data label="Person Name" :stringValue="model.forename + ' ' + model.surname"></custom-label-data>
      </v-flex>
    </v-layout>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">
      <v-layout row>
        <v-flex xs4>
          <custom-label-data label="Forename" :stringValue="model.forename"></custom-label-data>
        </v-flex>
        <v-flex xs4>
          <custom-label-data label="Surname" :stringValue="model.surname"></custom-label-data>
        </v-flex>
        <v-flex xs4>
          <custom-label-data label="Email Address" :stringValue="model.email"></custom-label-data>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <custom-label-data label="Job Role" :stringValue="model.jobRoleName"></custom-label-data>
        </v-flex>
      </v-layout>
    </div>
    <!-- BODY -->

  </crm-entity-view-template>
</template>

<script lang="ts" src='./PersonView.ts'>
</script>
