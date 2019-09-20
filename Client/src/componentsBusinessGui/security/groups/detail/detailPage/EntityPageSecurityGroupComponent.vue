<template>
  <crm-entity-layout-page-template
    :entityModel="entityModel"
    @onArchive="onArchive"
    @onRestore="onRestore">

    <!-- HEADER -->
    <div slot="header">
      <v-layout row slot="header">
          <crm-label-data 
            label="Job Role"          
            :stringValue="entityModel.entity.name"></crm-label-data>
      </v-layout>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">

      <!-- VIEW / EDIT MAIN DETAILS -->
      <crm-entity-segment-view-edit-controller 
          :entityModel="entityModel" 
          title="Security Group Details" 
          @onSave="onSave"
          @onEditBegins="onEditBegins"
          @onCancel="onCancel">
        <crm-entity-segment-securitygroup-view slot="view" :entityModel="entityModel" />
        <crm-entity-segment-securitygroup-edit slot="edit" :entityModel="entityModel" />
      </crm-entity-segment-view-edit-controller>
      <!-- VIEW / EDIT MAIN DETAILS -->
      
    </div>
    <!-- BODY -->

  </crm-entity-layout-page-template>
</template>

<script  lang='ts'  src='./EntityPageSecurityGroupComponent.ts'>
</script>
