<script lang="ts" setup>
import HeaderMenuVue from "@/components/Album/HeaderMenu.vue";
import SongListVue from "@/components/Album/SongList.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";

const route = useRoute();

console.log(route.params);
watch(
    () => route.params.albumId,
    async (newId) => {
        console.log(newId);
    }
);
</script>
<template>
    <div class="flex flex-col w-full">
        <header>
            <HeaderMenuVue />
        </header>
        <main>
            <SongListVue />
        </main>
    </div>
</template>
