<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenuVue from "@/components/Menus/SideMenu.vue";
import AlertGenericVue from "./components/Generic/AlertGeneric.vue";
</script>

<template>
    <div class="flex flex-row text-white">
        <SideMenuVue />
        <RouterView class="bg-background min-h-screen text-base" />
        <AlertGenericVue />
    </div>
</template>
