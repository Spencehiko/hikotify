<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { activeSong, volume, isSongPlaying, songSeconds } = storeToRefs(store);
const { revertLike, prevSong, nextSong, toggleSong, toggleVolume } = store;
</script>
<template>
    <div
        class="fixed bottom-0 left-0 w-screen flex flex-row justify-around px-20 py-3 bg-gray-dark border-t-2 border-gray-lightest"
    >
        <div class="flex flex-row items-center mr-auto basis-1/4">
            <img
                class="w-16 h-16"
                :src="'album-covers/' + activeSong.imgPath"
            />
            <div class="flex flex-col ml-2">
                <span class="text-lg font-bold">{{ activeSong.title }}</span>
                <span class="text-xs text-gray-400">{{
                    activeSong.artistName
                }}</span>
            </div>
            <button @click="revertLike(activeSong.id)" class="ml-5">
                <img
                    :src="activeSong.isLiked ? 'heart-filled.png' : 'heart.png'"
                    class="w-8 h-8 p-1"
                />
            </button>
        </div>
        <div class="flex flex-col items-center basis-1/2">
            <div class="flex flex-row justify-evenly w-full">
                <button @click="prevSong">
                    <img src="prev.png" alt="Prev" class="w-8 h-8 p-1" />
                </button>
                <button @click="toggleSong(activeSong.id)">
                    <img
                        :src="isSongPlaying ? 'stop.png' : 'play.png'"
                        alt="Play"
                        class="w-8 h-8 p-1"
                    />
                </button>
                <button @click="nextSong">
                    <img src="next.png" alt="Next" class="w-8 h-8 p-1" />
                </button>
            </div>
            <input
                type="range"
                class="w-3/4 h-0.5 bg-white accent-gray-300 rounded outline-none slider-thumb mt-4 cursor-pointer hover:accent-primary-normal"
                min="0"
                max="100"
                v-model="songSeconds"
            />
        </div>
        <div
            class="ml-auto my-auto items-center basis-1/4 flex flex-row justify-end"
        >
            <button @click="toggleVolume">
                <img
                    :src="volume === 0 ? 'muted.png' : 'volume.png'"
                    alt="Volume"
                    class="w-8 h-8 p-1 mr-2"
                />
            </button>
            <input
                type="range"
                class="w-1/2 h-1 bg-white accent-gray-300 rounded outline-none slider-thumb text-right cursor-pointer hover:accent-primary-normal"
                min="0"
                max="100"
                step="1"
                v-model="volume"
            />
        </div>
    </div>
</template>
