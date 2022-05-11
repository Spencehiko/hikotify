<script lang="ts" setup>
import HeaderGenericVue from "@/components/Generic/HeaderGeneric.vue";
import { useStore } from "@/stores/index";

const store = useStore();
const { favoriteAlbums } = store;
const messages = [
    "Good Night",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
];
const time = new Date().getHours();
const message = messages[Math.floor(time / 6)];
</script>
<template>
    <div class="bg-gradient-to-b from-indigo-700 to-background">
        <HeaderGenericVue />
        <h2 class="pl-4 mt-4 text-4xl font-bold">{{ message }}</h2>
        <div class="flex flex-row flex-wrap gap-5 mt-5 p-4">
            <div
                class="w-full-20 flex flex-row items-center bg-gray-lightest h-24 cursor-pointer sm:w-1/2-20 md:w-1/3-20"
            >
                <img src="liked.png" alt="Liked" class="rounded w-24 h-24" />
                <span class="font-bold ml-1 p-1">Liked Songs</span>
            </div>
            <div
                v-for="(album, index) in favoriteAlbums"
                :key="index"
                class="w-full-20 flex flex-row items-center bg-gray-lightest h-24 cursor-pointer sm:w-1/2-20 md:w-1/3-20"
            >
                <img
                    :src="'album-covers/' + album.image"
                    alt="Album"
                    class="rounded w-24 h-24"
                />
                <span class="font-bold ml-1 p-1">{{ album.name }}</span>
            </div>
        </div>
    </div>
</template>
