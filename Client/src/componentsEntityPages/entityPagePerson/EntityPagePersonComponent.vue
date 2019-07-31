<template>
  <crm-entity-layout-page-template :entityModel="entityModel">    

    <!-- HEADER -->
    <div slot="header">
          <v-layout row slot="header">
      <v-flex >
        <crm-label-data label="Person Name" :stringValue="entityModel.forename + ' ' + entityModel.surname"></crm-label-data>
      </v-flex>
    </v-layout>
    </div>
    <!-- HEADER -->    

    <!-- HEADER -->
    <div slot="body">
       <!-- PERSON SEGMENT VIEW CONTROLER -->
    <crm-entity-segment-view-edit-controller :entityModel="entityModel" title="Person Details">
        <crm-entity-segment-person-view slot="view" :entityModel="entityModel" />
        <crm-entity-segment-person-edit slot="edit" :entityModel="entityModel" />
    </crm-entity-segment-view-edit-controller>
    <!-- PERSON SEGMENT VIEW CONTROLER -->
    </div>
    <!-- HEADER -->

  </crm-entity-layout-page-template>
</template>

<script  lang='ts'  src='./EntityPagePersonComponent.ts'>
</script>
