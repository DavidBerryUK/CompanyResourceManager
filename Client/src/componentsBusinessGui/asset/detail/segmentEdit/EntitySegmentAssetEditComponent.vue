<template>
  <div>
   <v-layout row>
        <v-flex xs4 pr-4>
          <v-text-field
            label="Name"
            v-model="entityModel.entity.description"
            v-validate="'required|min:4|max:100'"
            data-vv-name="Description"
            required
            :error-messages="errors.collect('Description')"
          ></v-text-field>
        </v-flex>
        <v-flex xs4 pr-4>
          <v-select
            :items="entityModel.AssetTypesList"
            label="Asset Type "
            item-value="id"
            item-text="name"
            required
            data-vv-name="Asset Type"
            v-validate="'required'"
            :error-messages="errors.collect('Asset Type')"
            v-model="entityModel.entity.assetTypeId"
          ></v-select>
        </v-flex>
        <v-flex xs4>
          <v-text-field
            label="badgeNo"
            v-model="entityModel.entity.badgeNo"
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
          <v-switch readonly class="controls-no-top" v-model="entityModel.entity.hasAssetBadge"></v-switch>
        </v-flex>
        <v-flex xs4>
          <v-switch readonly class="controls-no-top" v-model="entityModel.entity.hasOperatingSystem"></v-switch>
        </v-flex>
      </v-layout>
  </div>
</template>

<script lang='ts' src='./EntitySegmentAssetEditComponent.ts'>
</script>
