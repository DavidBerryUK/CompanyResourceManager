<template>
  <v-layout row>

        <v-flex xs4 pr-4>
          <v-select
            :items="this.contactTypes"
            label="Contact Type"
            item-value="id"
            item-text="name"
            required
            data-vv-name="Contact Type"
            v-validate="'required'"
            :error-messages="errors.collect('Contact Type')"
            v-model="contact.contactTypeId"
          ></v-select>
        </v-flex>

        <v-flex xs4 pr-4>
          <v-text-field
            label="Value"
            v-model="contact.value"
            v-validate="'required|min:2|max:200'"
            data-vv-name="Value"
            required
            :error-messages="errors.collect('Value')"
          ></v-text-field>
        </v-flex>

        <v-flex xs2 pr-2>
          {{state.description}}
        </v-flex>

        <v-flex xs2 pr-2>
          {{changeTracker.hasObjectChanged}}
        </v-flex>

  </v-layout>
</template>

<script  lang='ts'  src='./ContactLineComponent.ts'>
</script>
