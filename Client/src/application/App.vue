<template>
  <v-app>
    <transition appear name="fade" mode="out-in">
      <crm-header></crm-header>
    </transition>
    <transition appear name="fade" mode="out-in">
      <v-navigation-drawer :clipped="true" fixed permanent app width="210" disable-resize-watcher>
        <crm-menu></crm-menu>
      </v-navigation-drawer>
    </transition>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<script lang='ts' src='./App.ts'>
</script>
