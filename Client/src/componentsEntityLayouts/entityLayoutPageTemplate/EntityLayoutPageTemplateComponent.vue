<template>
  <div class="form-style">

    <!-- PAGE HEADER -->
    <crm-entity-layout-page-header :entityModel="entityModel"/>
    <!-- PAGE HEADER -->

    <div class="form-body">
      <v-card dark color="blue" class="form-header-sticky">
        <v-container fluid pl-4 pr-4 pt-1 pb-1>
          <!-- --->
          <slot name="header"></slot>
          <!-- --->
        </v-container>
      </v-card>

      <div class="pt-2">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' src='./EntityLayoutPageTemplateComponent.ts'>
</script>

<style lang="stylus" src="./EntityLayoutPageTemplateComponent.styl">
</style>
