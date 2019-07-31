<template>
    <div>
      <v-layout row>
        <v-flex xs4 pr-4>
          <v-text-field
            label="Forename"
            v-model="entityModel.forename"
            v-validate="'required|min:2|max:100'"
            data-vv-name="Forename"
            required
            :error-messages="errors.collect('Forename')"
          >></v-text-field>
        </v-flex>

        <v-flex xs4 pr-4>
          <v-text-field
            label="Surname"
            v-model="entityModel.surname"
            v-validate="'required|min:2|max:100'"
            data-vv-name="Surname"
            required
            :error-messages="errors.collect('Surname')"
          >></v-text-field>
        </v-flex>

        <v-flex xs4>
          <v-text-field
            label="Email Address"
            v-model="entityModel.email"
            v-validate="'required'"
            data-vv-name="Email"
            required
            :error-messages="errors.collect('Email')"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs4 pr-4>
          <v-select
            :items="jobRoleList.items"
            label="Job Role"
            item-value="id"
            item-text="name"
            required
            data-vv-name="Job Role"
            v-validate="'required'"
            :error-messages="errors.collect('Job Role')"
            v-model="entityModel.jobRoleId"
          ></v-select>
        </v-flex>
      </v-layout>
    </div>
</template>

<script lang='ts' src='./EntitySegmentPersonEditComponent.ts'>
</script>
