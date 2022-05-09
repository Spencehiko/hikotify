<script setup lang="ts">
import HeaderMenuVue from "@/components/Menus/HeaderMenu.vue";
import FooterMenuVue from "@/components/Menus/FooterMenu.vue";
import SideMenuVue from "@/components/Menus/SideMenu.vue";
import RecentSongsVue from "@/components/Home/RecentSongs.vue";
import RecommendSongsVue from "@/components/Home/RecommendSongs.vue";
import PopularSongsVue from "@/components/Home/PopularSongs.vue";
</script>
<template>
    <div class="flex flex-row max-h-screen">
        <SideMenuVue />
        <div class="flex flex-col w-full">
            <header class="bg-gradient-to-b from-indigo-700 to-background">
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
    </div>
</template>
