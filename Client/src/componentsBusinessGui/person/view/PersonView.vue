<template>
  <crm-entity-view-template
    title="Person"
    :isActive="model.isActive"
    @onEdit="onEdit"
    @onRestore="onRestore"
  >
    <!-- HEADER -->
    <v-layout row slot="header">
      <v-flex xs5>
        <crm-label-data label="Person Name" :stringValue="model.forename + ' ' + model.surname"></crm-label-data>
      </v-flex>
    </v-layout>
    <!-- HEADER -->

    <!-- FORM -->
    <div slot="form">
      <v-layout row>
        <v-flex xs4>
          <crm-label-data label="Forename" :stringValue="model.forename"></crm-label-data>
        </v-flex>
        <v-flex xs4>
          <crm-label-data label="Surname" :stringValue="model.surname"></crm-label-data>
        </v-flex>
        <v-flex xs4>
          <crm-label-data label="Email Address" :stringValue="model.email"></crm-label-data>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Job Role" :stringValue="model.jobRoleName"></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
    <!-- FORM -->

    <!-- BODY -->
    <div slot="body">
      <v-layout row>        

        <v-flex xs-6 pr-2>
          <crm-list-items
            title="Teams"
            :repoDataSource="EnumRepositoryDataSource.TeamPerson"
            :repoListMode="EnumRepositoryListMode.All"
            :repoReferenceId="model.personId"
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
            :repoReferenceId="model.personId"
            :listStyle="EnumListComponentStyle.list"
            :valueDisplay="EnumListComponentValueDisplay.checkbox"            
            :showTextFilter="EnumListTextFilter.inHeader"
            :titleStyle="EnumListCompomentTitle.header"
          ></crm-list-items>
        </v-flex>

      </v-layout>
    </div>
    <!-- BODY -->
  </crm-entity-view-template>
</template>

<script lang='ts' src='./PersonView.ts'>
</script>
