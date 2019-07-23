<template>
  <crm-entity-edit-template
    title="Asset"
    :modelChangeTracker="modelChangeTracker"
    :isActive="model.isActive"
    :isLoading="isLoading"
    @onSave="onSave"
    @onCancel="onCancel"
    @onArchive="onArchive"
  >
    <!-- HEADER -->
    <div slot="header">
      <v-layout row>
        <v-flex xs12>
          <crm-label-data label="Name" :stringValue="model.name" one-time-bind></crm-label-data>
        </v-flex>
      </v-layout>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div slot="body">
      <v-layout row>
        <v-flex xs4 pr-4>
          <v-text-field
            label="Name"
            v-model="model.description"
            v-validate="'required|min:4|max:100'"
            data-vv-name="Description"
            required
            :error-messages="errors.collect('Description')"
          ></v-text-field>
        </v-flex>
        <v-flex xs4 pr-4>
          <v-select
            :items="assetTypesList.items"
            label="Asset Type "
            item-value="id"
            item-text="name"
            required
            data-vv-name="Asset Type"
            v-validate="'required'"
            :error-messages="errors.collect('Asset Type')"
            v-model="model.assetTypeId"
          ></v-select>
        </v-flex>
        <v-flex xs4>
          <v-text-field label="Name" v-model="model.assetTypeName"></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            label="badgeNo"
            v-model="model.badgeNo"
            v-validate="'required|min:4|max:20'"
            data-vv-name="BadgeNo"
            required
            :error-messages="errors.collect('BadgeNo')"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs4>Has Asset Badge</v-flex>
        <v-flex xs4>Has Operating System</v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs4>
          <v-switch readonly class="controls-no-top" v-model="model.hasAssetBadge"></v-switch>
        </v-flex>
        <v-flex xs4>
          <v-switch readonly class="controls-no-top" v-model="model.hasOperatingSystem"></v-switch>
        </v-flex>
      </v-layout>
    </div>
    <!-- BODY -->
    
  </crm-entity-edit-template>
</template>


<script lang='ts' src='./AssetEdit.ts'>
</script>
