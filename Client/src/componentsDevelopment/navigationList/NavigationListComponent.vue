<template>
     <div class="scrollable-list">
    <v-toolbar color="purple" dark class="scroll-header">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <custom-filter-button
        :isFilterSet="false"
        @onFilterClicked="onFilterClicked"
      ></custom-filter-button>
      <v-btn fab small color="pink" @click="onAddClicked">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container class="scroll-search-header" fluid>
      <v-text-field
        v-model="listFilterText"
        append-icon="search"
        clear-icon="clear"
        class="pl-3 pr-3"
        clearable
        placeholder="Search..."
        @click:clear="onFilterClearClicked"
      ></v-text-field>
    </v-container>

    <v-container fluid class="scroll-content with-search-header" grid-list-lg>
      <custom-loader v-if="isLoading"></custom-loader>

      <v-layout v-else row wrap>
        <v-card width="100%">
          <v-list three-line>
            <template v-for="item in filteredList.items">
              <v-list-tile
                ripple
                @click="onSelectItem(item)"
                :key="item.personId"
                :class="itemStyle(item)"
              >
                <v-list-tile-content>
                  <div
                      v-if="!item.isActive"
                      class="caption red white--text text-alert fixed-top-right"                      
                    >Archived</div>

                  

                   <v-list-tile primary-title>
                      <div>
                        <div :class="theme.listTitleStyle">{{item.forename}} {{item.surname}}</div>
                        
                            <div :class="theme.listBodyStyle">{{item.jobRoleName}}</div>
                            <div :class="theme.listFooterStyle">{{item.email}}</div>                        
                    </div>
                  </v-list-tile>
                  

                                      
                  

                  
                </v-list-tile-content>
              </v-list-tile>
              <v-divider :key="item.personId + '_'"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts" src='./NavigationListComponent.ts'/>
</script>
<style lang="stylus" scoped src='./Styles.styl'>
</style>

