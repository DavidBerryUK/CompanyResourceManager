<template>
  <div>    
    <!-- HTML LIST -->
    <div v-if="isHeaderHtmlList">
      <crm-loader v-if="isLoading" key="panel-loading"></crm-loader>      
      <ul v-else value="true" v-for="(item) in listFilterd" :key="item.id">
        <li>{{item.name}}-{{item.selected}}</li>
      </ul>
    </div>
    <!-- HTML LIST -->

    <!-- WORDS -->
    <div v-if="isStyleWords">
      <crm-loader v-if="isLoading" key="panel-loading"></crm-loader>
      <div v-else>
      {{words}}
      </div>
    </div>
    <!-- WORDS -->

    <!-- LIST -->
    <div v-if="isList">
      <!-- TOOL BAR HEADER -->
      <v-toolbar v-if="isHeaderStyleHeader" color="purple" dense>
        <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
        <v-spacer v-if="isTextFilterInHeader"></v-spacer>        
        <v-text-field v-if="isTextFilterInHeader"
          v-model="listFilterText"
          append-icon="search"
          clear-icon="clear"
          color="white"
          dark
          clearable
          placeholder="Filter..."
        ></v-text-field>        
      </v-toolbar>
      <!-- TOOL BAR HEADER -->

      <!-- SIMPLE HEADER -->
      <div v-if="isHeaderStyleSimple">
        <h3>{{title}}</h3>
      </div>
      <!-- SIMPLE HEADER -->

      <!-- SEARCH BY TEXT (if not in header) -->
      <v-card v-if="isTextFilterUnderHeader">
        <v-list>
          <v-list-tile-content>
            <v-container class fluid pt-0 pb-0>
              <v-text-field
                v-model="listFilterText"
                append-icon="search"
                clear-icon="clear"
                class="pl-1 pr-1 pt-0 pb-0"
                clearable
                placeholder="Filter..."                
              ></v-text-field>
            </v-container>
          </v-list-tile-content>
        </v-list>
      </v-card>
      <!-- SEARCH BY TEXT -->

      <crm-loader v-if="isLoading" key="panel-loading"></crm-loader>
      <v-card v-else>
        <v-list>
          <template v-for="(item) in listFiltered">
            <v-list-tile :key="item.id" ripple>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-checkbox v-if="isValueCheckboxVisible" v-model="item.selected" @change="itemValueChange(item)"></v-checkbox>
                <v-switch v-if="isValueSwitchVisible" v-model="item.selected" @change="itemValueChange(item)"></v-switch>
                <div v-if="isValueTextVisible">{{item.selectedAsText}}</div>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </div>
    <!-- LIST -->
  </div>  
</template>

<script  lang='ts' src='./ListItemComponent.ts'>
</script>
