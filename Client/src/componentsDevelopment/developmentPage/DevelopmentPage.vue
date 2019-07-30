<template>
  <crm-element-page>

<!-- :list="listData.all" -->

  <v-layout row>
    <v-flex xs-6 pr-2>

    <crm-list-items      
      title="Teams"
      :repoDataSource="EnumRepositoryDataSource.TeamPerson"
      :repoListMode="EnumRepositoryListMode.All"
      repoReferenceId="326F4B79-A524-4190-9524-F682E0AACB0E"
      :valueDisplay="EnumListComponentValueDisplay.checkbox"
      :listStyle="EnumListComponentStyle.list"
      :showTextFilter="EnumListTextFilter.inHeader"
      :titleStyle="EnumListCompomentTitle.header"
    ></crm-list-items>

    </v-flex>
    <v-flex xs-6>

    <crm-list-items      
      title="Skills"
      :repoDataSource="EnumRepositoryDataSource.SkillPerson"
      :repoListMode="EnumRepositoryListMode.All"
      repoReferenceId="326F4B79-A524-4190-9524-F682E0AACB0E"
      :valueDisplay="EnumListComponentValueDisplay.checkbox"
      :listStyle="EnumListComponentStyle.list"
      :showTextFilter="EnumListTextFilter.inHeader"
      :titleStyle="EnumListCompomentTitle.header"
    ></crm-list-items>

    </v-flex>
  </v-layout>

  </crm-element-page>
</template>

<script lang='ts' src='./DevelopmentPage.ts'>
</script>
