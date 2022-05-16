<script setup lang="ts">
import HeaderMenuVue from "@/components/Menus/HeaderMenu.vue";
import FooterMenuVue from "@/components/Menus/FooterMenu.vue";
import RecommendedSongsVue from "@/components/Home/RecommendedSongs.vue";
import GenreSongsVue from "@/components/Home/GenreSongs.vue";
</script>
<template>
    <div class="flex flex-col w-full">
        <header>
            <HeaderMenuVue />
        </header>
        <main>
            <GenreSongsVue />
            <RecommendedSongsVue />
        </main>
        <footer>
            <FooterMenuVue />
        </footer>
    </div>
</template>
