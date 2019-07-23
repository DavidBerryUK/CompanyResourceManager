<template>
  <div class="form-style">
    <crm-form-edit-header
      :title="title"
      :saveEnabled="modelChangeTracker.hasObjectChanged"
      :isActive="isActive"
      @onSave="onSave"
      @onCancel="onCancel"
      @onArchive="onArchive"
    ></crm-form-edit-header>

    <crm-loader v-if="isLoading" key="panel-loading"></crm-loader>

    <div v-else class="form-body" key="panel-editing">
      <div>
        <v-card dark color="orange">
          <v-container fluid>
            <!-- --->
            <slot name="header"></slot>
            <!-- --->
          </v-container>
        </v-card>

        <v-form ref="editForm" class="form-body">
          <v-card class="mt-2 pt-4 pl-4 pr-4 pb-2">
            <!-- --->
            <slot name="body"></slot>
            <!-- --->
          </v-card>
        </v-form>
      </div>
    </div>
    
  </div>
</template>

<script lang='ts' src='./EntityEditTemplateComponent.ts'>
</script>
