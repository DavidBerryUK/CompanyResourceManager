<template>
  <v-container pa-0 ma-0>
    <v-flex>

      <v-toolbar dark color="indigo lighten-1">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="isViewing" flat @click="onEdit">
          <i class="fas fa-edit fa-2x"></i>
        </v-btn>
        <v-btn v-if="isEditing" color="error" @click="onSave">Cancel</v-btn>
        <v-btn v-if="isEditing" color="info" :disabled="entityModel.modelHasNoChanges" @click="onSave">Save</v-btn>
      </v-toolbar>

      <v-card>
        <v-container>
          <slot v-if="isViewing" name="view"></slot>
          <slot v-if="isEditing" name="edit"></slot>
        </v-container>
      </v-card>
      
    </v-flex>
  </v-container>
</template>

<script  lang='ts'  src='./EntitySegmentViewEditControllerComponent.ts'>
</script>
