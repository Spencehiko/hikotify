<script lang="ts" setup></script>
<template>
    <div class="w-48 h-screen bg-black p-2">
        <img src="hikotify-wide.png" class="mx-auto w-full mb-5" alt="Logo" />
        <div class="flex flex-col justify-center items-center p-2">
            <div class="home w-full flex flex-row cursor-pointer">
                <button class="flex justify-start w-full">
                    <div
                        class="home-logo inline-block w-8 h-8 mr-3 bg-white"
                    ></div>
                    <span class="font-semibold my-auto text-2xl">Home</span>
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.home-logo {
    mask: url(home.svg) no-repeat center;
    -webkit-mask: url(home.svg) 0 0/32px 32px no-repeat;
}
</style>
