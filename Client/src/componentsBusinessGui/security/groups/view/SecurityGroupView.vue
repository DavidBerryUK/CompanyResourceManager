<template>
  <crm-entity-view-template
    title="Security Group"
    :isActive="model.isActive"
    @onEdit="onEdit"
    @onRestore="onRestore"
  >
    <!-- HEADER -->
    <v-layout row slot="header">
      <v-flex xs5>
        <crm-label-data label="Name" :stringValue="model.name"></crm-label-data>
      </v-flex>
    </v-layout>
    <!-- HEADER -->

    <!-- FORM -->
    <div slot="form">
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Name" :stringValue="model.name"></crm-label-data>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Description" :stringValue="model.description"></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
    <!-- FORM -->

  </crm-entity-view-template>
</template>

<script lang='ts' src='./SecurityGroupView.ts'>
</script>
