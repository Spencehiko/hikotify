<script lang="ts" setup>
import HeaderGenericVue from "@/components/Generic/HeaderGeneric.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { activeAlbum } = storeToRefs(store);
</script>
<template>
    <div
        class="bg-gradient-to-b to-background"
        :class="['from-' + activeAlbum.backgroundColor + '-700']"
    >
        <HeaderGenericVue />
        <div class="flex flex-row flex-wrap gap-5 mt-5 p-4">
            <img
                :src="'album-covers/' + activeAlbum.image"
                alt="Liked"
                class="rounded w-60 h-60"
            />
            <div class="flex flex-col justify-end">
                <span class="font-bold text-lg">Album</span>
                <h1 class="font-extrabold text-5xl">
                    {{ activeAlbum.name }}
                </h1>
                <p class="text-sm mt-2">
                    {{ activeAlbum.year }}
                </p>
            </div>
        </div>
    </div>
</template>
