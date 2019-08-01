<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-text-field
          label="Name"
          v-model="entityModel.entity.name"
          v-validate="'required|min:4|max:100'"
          data-vv-name="Name"
          required
          :error-messages="errors.collect('Name')"
        >></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>Has Asset Badge</v-flex>
      <v-flex xs4>Has Operating System</v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4>
        <v-switch class="controls-no-top" v-model="entityModel.entity.hasAssetBadge"></v-switch>
      </v-flex>
      <v-flex xs4>
        <v-switch class="controls-no-top" v-model="entityModel.entity.hasOperatingSystem"></v-switch>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang='ts' src='./EntitySegmentAssetTypeEditComponent.ts'>
</script>
