<template>
  <v-card>
    <v-toolbar :color="`${themeColor} darken-1`" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="text-xs-right mr-4">
        <v-fade-transition>
          <v-text-field
            v-model="listFilterText"
            v-show="!itemCollection.allSelected"
            append-outer-icon="search"
            clear-icon="clear"
            clearable
            hide-details
            placeholder="Search..."
            @click:clear="onFilterClearPressed"
          ></v-text-field>
        </v-fade-transition>
      </div>

      <div class="text-xs-right">
        <v-switch
          v-model="itemCollection.allSelected"
          change="onShowAllItemsChanged"
          label="Select all"
          hide-details
        ></v-switch>
      </div>
    </v-toolbar>

    <div class="pl-0 pr-0" style="height: 300px;overflow:auto;">
      <crm-loader v-if="itemCollection.isLoading"></crm-loader>
      <v-list v-else row>
        <v-list-tile
          v-for="item in filteredListItems"
          :key="item.id"
          @click="item.toggle()"
          :disabled="itemCollection.allSelected"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-switch
              :disabled="itemCollection.allSelected"
              v-model="item.selected"
              @click="item.toggle()"
              height="0"
            ></v-switch>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </div>
  </v-card>
</template>

<script  lang='ts'  src='./ListItemComponent.ts'>
</script>
