<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenuVue from "@/components/Menus/SideMenu.vue";
import AlertGenericVue from "./components/Generic/AlertGeneric.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const route = useRoute();

const store = useStore();
const { activeAlbumId, activeGenreId } = storeToRefs(store);
watch(
    () => route.params.albumId,
    (newValue) => {
        if (newValue) {
            activeAlbumId.value = parseInt(newValue.toString());
        }
    }
);
watch(
    () => route.params.genreId,
    (newValue) => {
        if (newValue) {
            activeGenreId.value = parseInt(newValue.toString());
        }
    }
);
</script>

<template>
    <div class="flex flex-row text-white">
        <SideMenuVue />
        <RouterView class="bg-background min-h-screen text-base" />
        <AlertGenericVue />
    </div>
</template>
