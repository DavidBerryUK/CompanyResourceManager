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
        <v-flex xs12>
          <v-text-field
            label="Description"
            v-model="entityModel.entity.description"
            v-validate="'required|min:4|max:2000'"
            data-vv-name="Name"
            required
            :error-messages="errors.collect('Description')"
          >></v-text-field>
        </v-flex>
      </v-layout>
  </div>
</template>

<script lang='ts' src='./EntitySegmentSecurityGroupEditComponent.ts'>
</script>
