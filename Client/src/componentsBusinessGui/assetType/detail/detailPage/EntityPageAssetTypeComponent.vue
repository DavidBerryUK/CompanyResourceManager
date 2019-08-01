<template>
  <crm-entity-layout-page-template
    :entityModel="entityModel"
    @onArchive="onArchive"
    @onRestore="onRestore">

    <!-- HEADER -->
    <div slot="header">
      <v-layout row slot="header">
          <crm-label-data 
            label="Asset Types"          
            :stringValue="entityModel.entity.name"></crm-label-data>
      </v-layout>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">

      <h2>IsLoading : {{entityModel.isLoading}}</h2>
      <!-- JOB ROLE - VIEW EDIT MAIN DETAILS -->
      <crm-entity-segment-view-edit-controller 
          :entityModel="entityModel" 
          title="Asset Type Details" 
          @onSave="onSave"
          @onEditBegins="onEditBegins"
          @onCancel="onCancel">
        <crm-entity-segment-assettype-view slot="view" :entityModel="entityModel" />
        <crm-entity-segment-assettype-edit slot="edit" :entityModel="entityModel" />
      </crm-entity-segment-view-edit-controller>
      <!-- JOB ROLE - VIEW EDIT MAIN DETAILS -->
      
    </div>
    <!-- BODY -->

  </crm-entity-layout-page-template>
</template>

<script  lang='ts'  src='./EntityPageAssetTypeComponent.ts'>
</script>
