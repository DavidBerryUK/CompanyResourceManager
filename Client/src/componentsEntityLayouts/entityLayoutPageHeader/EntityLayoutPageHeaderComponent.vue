<template>
<v-toolbar color="indigo" dark class='toolbar-fixed'>      
      <v-toolbar-title>{{entityModel.headerTitle}}</v-toolbar-title>
      <v-toolbar-title  v-if="showIsArchived"  class="blue--text text--lighten-4">ARCHIVED</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="showIsArchived" color="info" @click="onRestore">Restore</v-btn>
      <v-btn v-if="showIsActive" color="info" @click="onArchive">Archive</v-btn>            
    </v-toolbar>
</template>

<script lang='ts' src='./EntityLayoutPageHeaderComponent.ts'>
</script>

<style lang="stylus" src="./EntityLayoutPageHeaderComponent.styl">
</style>
