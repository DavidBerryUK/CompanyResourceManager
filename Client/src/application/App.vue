<template>
  <v-app>
    
    <transition appear name="fade" mode="out-in">
    <db-header></db-header>
    </transition>
    
<transition appear name="fade" mode="out-in">
 <v-navigation-drawer       
      :clipped="true"
      fixed
      permanent
      app
      width="210"
      disable-resize-watcher>
      <db-menu></db-menu>
    </v-navigation-drawer>
</transition>
    <v-content>
      
     <router-view></router-view>
      

    </v-content>
  </v-app>
</template>


<script src="./App.ts"></script>