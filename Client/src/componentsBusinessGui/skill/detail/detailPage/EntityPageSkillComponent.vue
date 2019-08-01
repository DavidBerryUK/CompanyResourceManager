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

      <h2>IsLoading : {{entityModel.isLoading}}</h2>
      <!-- Skill - VIEW EDIT MAIN DETAILS -->
      <crm-entity-segment-view-edit-controller 
          :entityModel="entityModel" 
          title="Skill Details" 
          @onSave="onSave"
          @onEditBegins="onEditBegins"
          @onCancel="onCancel">
        <crm-entity-segment-skill-view slot="view" :entityModel="entityModel" />
        <crm-entity-segment-skill-edit slot="edit" :entityModel="entityModel" />
      </crm-entity-segment-view-edit-controller>
      <!-- SKILL - VIEW EDIT MAIN DETAILS -->
      
    </div>
    <!-- BODY -->

  </crm-entity-layout-page-template>
</template>

<script  lang='ts'  src='./EntityPageSkillComponent.ts'>
</script>
