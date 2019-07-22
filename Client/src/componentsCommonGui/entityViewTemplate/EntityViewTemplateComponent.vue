<template>
  <div class="form-style">
        <custom-form-view-header
      :title="title"
      :isActive="isActive"
       @onRestore="onRestore"
      @onEdit="onEdit"
    ></custom-form-view-header>

    <div class="form-body">
      <v-card dark color="blue">
        <v-container fluid>
          <!-- --->
          <slot name="header"></slot>
          <!-- --->
        </v-container>
      </v-card>

      <v-card class="mt-2 pt-4 pl-4 pr-4 pb-2">
        <!-- --->
        <slot name="body"></slot>
        <!-- --->
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" src='./EntityViewTemplateComponent.ts'>
</script>
