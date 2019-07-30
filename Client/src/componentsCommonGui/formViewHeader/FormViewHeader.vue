<template>
    <v-toolbar color="indigo" dark class='toolbar-fixed'>      
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-toolbar-title  v-if="!isActive"  class="blue--text text--lighten-4">ARCHIVED</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isActive" color="info" @click="onRestore">Restore</v-btn>
      <v-btn v-if="isActive" color="info" @click="onEdit">Edit</v-btn>            
    </v-toolbar>
</template>

<script lang='ts' src='./FormViewHeader.ts'>
</script>

<style lang="stylus" src="./FormViewHeader.styl">
</style>

