<template>
     <div class='title-wrapper-container font-weight-light  primary--text'>
         <i :class="`title-icon ${iconCss}`"></i>
         <div class='text'>
         <slot></slot>
         </div>
    </div>
</template>

<script lang='ts' src='./ElementTitleWrapperComponent.ts'>
</script>
<style lang="stylus" scoped src='./Styles.styl'>
</style>
