<template>
    <v-toolbar color="amber" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isActive" color="error" @click="onDelete">Archive</v-btn>
      <v-btn color="info" @click="onCancel">Cancel</v-btn>
      <v-btn color="info" @click="onSave" :disabled="!saveEnabled">Save</v-btn>
    </v-toolbar>
</template>

<script lang="ts" src='./FormEditHeader.ts'></script>