<template>
  <div class="scrollable-list">
    <v-toolbar color="purple" dark class="scroll-header">
      <v-toolbar-title>{{configuration.title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <custom-filter-button :isFilterSet="false" @onFilterClicked="onFilterClicked"></custom-filter-button>
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
      <crm-loader v-if="isLoading"></crm-loader>      
      <div v-else-if="isAnApiError" @click="onReload">        
        <v-alert :value="true" type="warning">
          Could not obtain data, click here try again. 
        </v-alert>        
      </div>
      <v-layout v-else row wrap>
        <v-card width="100%">
          <v-list three-line>
            <template v-for="item in filteredList.items">
              <v-list-tile
                ripple
                @click="onSelectItem(item)"
                :key="item.entityKey"
                :class="itemStyle(item)"
              >
                <v-list-tile-content>
                  <div
                    v-if="!item.isActive"
                    class="caption red white--text text-alert fixed-top-right"
                  >Archived</div>
                  <v-list-tile primary-title>
                    <div>
                      <div :class="theme.listTitleStyle">{{configuration.line1TextFunction(item)}}</div>
                      <div :class="theme.listBodyStyle">{{configuration.line2TextFunction(item)}}</div>
                      <div :class="theme.listFooterStyle">{{configuration.line3TextFunction(item)}}</div>
                    </div>
                  </v-list-tile>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider :key="item.entityKey + '_'"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang='ts' src='./NavigationListComponent.ts'>
</script>

<style lang="stylus" scoped src='./Styles.styl'>
</style>
