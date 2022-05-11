<script lang="ts" setup>
import HeaderGenericVue from "@/components/Generic/HeaderGeneric.vue";
</script>
<template>
    <div class="bg-gradient-to-b from-indigo-700 to-background">
        <HeaderGenericVue />
        <div class="flex flex-row flex-wrap gap-5 mt-5 p-4">
            <img src="liked.png" alt="Liked" class="rounded w-60 h-60" />
            <div class="flex flex-col justify-end">
                <span class="font-bold text-lg">Playlist</span>
                <h1 class="font-extrabold text-6xl">Liked Songs</h1>
                <p class="text-sm mt-2">_hiko_ has liked 300 songs.</p>
            </div>
        </div>
    </div>
</template>
