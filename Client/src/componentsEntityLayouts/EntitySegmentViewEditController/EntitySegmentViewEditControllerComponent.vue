<template>
  <v-container flex pa-0 ma-0>
    <v-layout row>
    <v-flex xs-12>      
      <v-toolbar dark color="indigo lighten-1">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="isViewing" flat @click="onEdit">
          <i class="fas fa-edit fa-2x"></i>
        </v-btn>
        <v-btn v-if="isEditing" color="error" @click="onCancel">Cancel</v-btn>
        <v-btn v-if="isEditing" color="info" :disabled="entityModel.modelHasNoChanges" @click="onSave">Save</v-btn>
      </v-toolbar>

      <v-card>
        <v-container>
          <slot v-if="isViewing" name="view"></slot>
          <slot v-if="isEditing" name="edit"></slot>
        </v-container>
      </v-card>
      
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script  lang='ts'  src='./EntitySegmentViewEditControllerComponent.ts'>
</script>
