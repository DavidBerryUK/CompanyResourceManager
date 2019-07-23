<template>
<v-list>

    <template value="true" v-for="(item, index) in menuItems">
        <v-list-tile v-if='item.isMenuItem' ripple :key="item.id" :to="{name:item.route}">
            <v-list-tile-action>
                <i :class="item.icon"></i>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
        </v-list-tile>

        <v-list-group v-if='item.isMenuContainer' :key="item.id" v-model="menuItems[index].active" no-action>

            <v-list-tile slot="activator">
                <v-list-tile-content>
                    <v-list-tile-title class="font-weight-bold title">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="subItem in menuItems[index].subMenus" :key="subItem.id" :to='{name:subItem.route}'>
                <v-list-tile-action>
                    <i :class="subItem.icon"></i>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{subItem.title}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

        </v-list-group>

    </template>

</v-list>
</template>



<script lang='ts' src='./MenuComponent.ts'>
</script>
<style lang="stylus"  src='./Styles.styl'>
</style>
