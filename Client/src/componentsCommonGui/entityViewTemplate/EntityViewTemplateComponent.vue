<template>
  <div class="form-style">
    <crm-form-view-header
      :title="title"
      :isActive="isActive"
      @onRestore="onRestore"
      @onEdit="onEdit"
    ></crm-form-view-header>

    <div class="form-body">
      <v-card dark color="blue" class="form-header-sticky">
        <v-container fluid>
          <!-- --->
          <slot name="header"></slot>
          <!-- --->
        </v-container>
      </v-card>

      <v-card class="mt-2 pt-0 pb-2 pl-4 pr-4 form-body-sticky-adjust">
        <!-- --->
        <slot name="form"></slot>
        <!-- --->
      </v-card>

      <div class="pt-2">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' src='./EntityViewTemplateComponent.ts'>
</script>

<style lang="stylus" src="./EntityViewTemplateComponent.styl">
</style>
