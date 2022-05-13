<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { likedSongs, sortBy, searchBy, activeAlbumSongs } = storeToRefs(store);
const { convertDuration, revertLike, alertShow } = store;
</script>
<template>
    <div class="m-16">
        <div class="flex flex-row">
            <input
                class="border-2 border-gray-200 rounded-lg p-2 text-black outline-none"
                type="text"
                placeholder="Search"
                v-model="searchBy"
            />
            <select
                class="border-2 border-gray-200 rounded-lg p-2 ml-2 text-black outline-none"
                v-model="sortBy"
            >
                <option value="title">TITLE</option>
                <option value="album">ALBUM</option>
                <option value="duration">DURATION</option>
            </select>
        </div>
        <table class="w-full mt-5">
            <thead>
                <tr>
                    <th class="text-left">#</th>
                    <th class="text-left">TITLE</th>
                    <th class="text-left">ALBUM</th>
                    <th class="text-left"></th>
                    <th class="text-right">DURATION</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(song, index) in activeAlbumSongs" :key="song.id">
                    <td class="text-left">{{ index + 1 }}</td>
                    <td class="flex flex-row items-center">
                        <img
                            :src="'album-covers/' + song.imgPath"
                            class="rounded-sm w-12 h-12"
                            alt="Song"
                        />
                        <div class="flex flex-col ml-2">
                            <span class="font-bold">{{ song.title }}</span>
                            <span class="text-sm text-gray-400">{{
                                song.artistName
                            }}</span>
                        </div>
                    </td>
                    <td class="text-left">
                        {{ song.albumName }}
                    </td>
                    <td>
                        <button @click="revertLike(song.id)">
                            <img
                                :src="
                                    song.isLiked
                                        ? 'heart-filled.png'
                                        : 'heart.png'
                                "
                                class="w-8 h-8 p-1"
                            />
                        </button>
                    </td>
                    <td class="text-right">
                        {{ convertDuration(song.duration) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
