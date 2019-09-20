<template>
  <crm-entity-layout-page-template
    :entityModel="entityModel"
    @onArchive="onArchive"
    @onRestore="onRestore">

    <!-- HEADER -->
    <div slot="header">
      <v-layout row slot="header">
          <crm-label-data 
            label="Asset"          
            :stringValue="entityModel.entity.description"></crm-label-data>
      </v-layout>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">

      <!-- ASSET - VIEW EDIT MAIN DETAILS -->
      <crm-entity-segment-view-edit-controller 
          :entityModel="entityModel" 
          title="Asset Details" 
          @onSave="onSave"
          @onEditBegins="onEditBegins"
          @onCancel="onCancel">
        <crm-entity-segment-asset-view slot="view" :entityModel="entityModel" />
        <crm-entity-segment-asset-edit slot="edit" :entityModel="entityModel" />
      </crm-entity-segment-view-edit-controller>
      <!-- ASSET - VIEW EDIT MAIN DETAILS -->
      
    </div>
    <!-- BODY -->

  </crm-entity-layout-page-template>
</template>

<script  lang='ts'  src='./EntityPageAssetComponent.ts'>
</script>
