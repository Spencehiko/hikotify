<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { sortBy, searchBy, activeAlbumSongs } = storeToRefs(store);
const { convertDuration, revertLike } = store;
</script>
<template>
    <div class="m-16">
        <div class="flex flex-row px-5">
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
                    <th class="text-left pl-5">#</th>
                    <th class="text-left">TITLE</th>
                    <th class="text-left">ALBUM</th>
                    <th class="text-left"></th>
                    <th class="text-right pr-5">DURATION</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(song, index) in activeAlbumSongs"
                    :key="song.id"
                    class="group hover:bg-gray-light"
                >
                    <td class="text-left pl-5 w-11">
                        <span class="group-hover:hidden">{{ index + 1 }}</span>
                        <button class="hidden group-hover:block">
                            <img src="play.png" alt="Play" class="w-4" />
                        </button>
                    </td>
                    <td class="flex flex-row items-center py-2">
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
                    <td class="text-right pr-5">
                        {{ convertDuration(song.duration) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
