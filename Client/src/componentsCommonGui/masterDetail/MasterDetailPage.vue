<template>
    <div class="layout-navigation-detail">       
        <div class="navigation"><router-view name='navigation'></router-view></div>
        <div class="detail"><router-view name='detail'></router-view></div>       
    </div>
</template>


<script lang="ts"  src='./MasterDetailPage.ts'></script>
<style lang="stylus" src="./NavigationDetail.styl"></script>

