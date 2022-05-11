<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenuVue from "@/components/Menus/SideMenu.vue";
</script>

<template>
    <div class="flex flex-row max-h-screen text-white">
        <SideMenuVue />
        <RouterView class="bg-background min-h-screen text-base" />
    </div>
</template>
