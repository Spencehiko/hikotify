<script lang="ts" setup>
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
    <div class="flex flex-row p-4">
        <div class="my-auto">
            <button class="bg-gray-dark rounded-full w-10 h-10">&#9665;</button>
            <button class="bg-gray-dark rounded-full w-10 h-10 ml-5">
                &#9655;
            </button>
        </div>
        <div
            class="flex flex-row ml-auto bg-gray-dark rounded-full gap-3 cursor-pointer hover:bg-gray-light"
        >
            <img
                src="https://via.placeholder.com/40"
                alt="PP"
                class="rounded-full p-1 w-10 h-10"
            />
            <span class="p-2">_hiko_</span>
            <span class="p-2">&#9660;</span>
        </div>
    </div>
    <h2 class="pl-4 mt-4 text-4xl font-bold">{{ message }}</h2>
</template>
