<script setup lang="ts">
import HeaderMenuVue from "@/components/Menus/HeaderMenu.vue";
import FooterMenuVue from "@/components/Menus/FooterMenu.vue";
import RecentSongsVue from "@/components/Home/RecentSongs.vue";
import RecommendSongsVue from "@/components/Home/RecommendSongs.vue";
import PopularSongsVue from "@/components/Home/PopularSongs.vue";
</script>
<template>
    <div class="flex flex-col w-full">
        <header>
            <HeaderMenuVue />
        </header>
        <main>
            <RecentSongsVue />
            <RecommendSongsVue />
            <PopularSongsVue />
        </main>
        <footer>
            <FooterMenuVue />
        </footer>
    </div>
</template>
