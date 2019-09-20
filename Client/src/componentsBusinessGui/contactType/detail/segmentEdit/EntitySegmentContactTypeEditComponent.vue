<template>
  <div>
    <v-layout row>
        <v-flex xs6 pr-4>
          <v-text-field
            label="Name"
            v-model="entityModel.entity.name"
            v-validate="'required|min:4|max:100'"
            data-vv-name="Name"
            required
            :error-messages="errors.collect('Name')"
          >></v-text-field>
        </v-flex>


        <v-flex xs6>
          <v-select
            :items="this.entityModel.contactValidationList"
            label="Validation Type"
            item-value="id"
            item-text="name"
            required
            data-vv-name="Validation Type"
            v-validate="'required'"
            :error-messages="errors.collect('Validation Type')"
            v-model="entityModel.entity.contactValidationId"
          ></v-select>
        </v-flex>

      </v-layout>
  </div>
</template>

<script lang='ts' src='./EntitySegmentContactTypeEditComponent.ts'>
</script>
