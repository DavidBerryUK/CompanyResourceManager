<template>
  <crm-entity-layout-page-template
    :entityModel="entityModel"
    @onArchive="onArchive"
    @onRestore="onRestore">

    <!-- HEADER -->
    <div slot="header">
      <v-layout row slot="header">
          <crm-label-data 
            label="Person Name"          
            :stringValue="entityModel.entity.forename + ' ' + entityModel.entity.surname"></crm-label-data>
      </v-layout>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">

      <h2>IsLoading : {{entityModel.isLoading}}</h2>
      <!-- PERSON - VIEW EDIT MAIN DETAILS -->
      <crm-entity-segment-view-edit-controller 
          :entityModel="entityModel" 
          title="Person Details" 
          @onSave="onSave"
          @onEditBegins="onEditBegins"
          @onCancel="onCancel">
        <crm-entity-segment-person-view slot="view" :entityModel="entityModel" />
        <crm-entity-segment-person-edit slot="edit" :entityModel="entityModel" />
      </crm-entity-segment-view-edit-controller>
      <!-- PERSON - VIEW EDIT MAIN DETAILS -->

      <v-layout v-if="entityModel.isExistingRecord" row pt-2 pb-2>         

        <v-flex xs-6 pr-2>
          <crm-list-items
            title="Teams"
            :repoDataSource="EnumRepositoryDataSource.TeamPerson"
            :repoListMode="EnumRepositoryListMode.All"
            :repoReferenceId="entityModel.id"
            :listStyle="EnumListComponentStyle.list"
            :valueDisplay="EnumListComponentValueDisplay.checkbox"            
            :showTextFilter="EnumListTextFilter.inHeader"
            :titleStyle="EnumListCompomentTitle.header"
          ></crm-list-items>
        </v-flex>

        <v-flex xs-6>
          <crm-list-items
            title="Skills"
            :repoDataSource="EnumRepositoryDataSource.SkillPerson"
            :repoListMode="EnumRepositoryListMode.All"
            :repoReferenceId="entityModel.id"
            :listStyle="EnumListComponentStyle.list"
            :valueDisplay="EnumListComponentValueDisplay.checkbox"            
            :showTextFilter="EnumListTextFilter.inHeader"
            :titleStyle="EnumListCompomentTitle.header"
          ></crm-list-items>
        </v-flex>

      </v-layout>
    </div>
    <!-- BODY -->

  </crm-entity-layout-page-template>
</template>

<script  lang='ts'  src='./EntityPagePersonComponent.ts'>
</script>
