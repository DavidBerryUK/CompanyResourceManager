<template>
<div>
    <v-btn flat small fab @click="onFilterClicked">
        <div v-if="isFilterSet">
            <i class="fas fa-filter icon-button-border selected "></i>
        </div>
        <div v-else>        
            <i class="fas fa-filter icon-button-border "></i>
        </div>

    </v-btn>
</div>
</template>

<script  lang='ts'  src='./FilterButton.ts'>
</script>
