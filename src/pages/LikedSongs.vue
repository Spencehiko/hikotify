<script lang="ts" setup>
import HeaderMenuVue from "@/components/LikedSongs/HeaderMenu.vue";
import SongListVue from "@/components/LikedSongs/SongList.vue";
import FooterMenuVue from "@/components/LikedSongs/FooterMenu.vue";
</script>
<template>
    <div class="flex flex-col w-full">
        <header>
            <HeaderMenuVue />
        </header>
        <main>
            <SongListVue />
        </main>
        <footer>
            <FooterMenuVue />
        </footer>
    </div>
</template>
