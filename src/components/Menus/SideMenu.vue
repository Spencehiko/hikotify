<script lang="ts" setup></script>
<template>
    <div class="w-48 h-screen bg-black p-5">
        <img src="hikotify-wide.png" class="mx-auto w-full mb-5" alt="Logo" />
        <div class="routers">
            <div class="home w-full">
                <button class="flex justify-start w-full">
                    <div class="home-logo inline-block"></div>
                    <span class="font-semibold my-auto text-2xl">Home</span>
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.routers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .home {
        display: flex;
        flex-direction: row;
        &-logo {
            width: 30px;
            height: 30px;
            background-color: #fff;
            mask: url(home.svg) no-repeat center;
            -webkit-mask: url(home.svg) 0 0/30px 30px no-repeat;
            margin-right: 10px;
        }
    }
}
</style>
