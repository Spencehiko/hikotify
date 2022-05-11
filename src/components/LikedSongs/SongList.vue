<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { likedSongs, sortBy } = storeToRefs(store);
</script>
<template>
    <div class="flex flex-row">
        <input
            class="border-2 border-gray-200 rounded-lg p-2"
            type="text"
            placeholder="Filter"
        />
        <select
            class="border-2 border-gray-200 rounded-lg p-2"
            v-model="sortBy"
        >
            <option value="title">Title</option>
            <option value="artist">Artist</option>
            <option value="album">Album</option>
        </select>
    </div>
</template>
