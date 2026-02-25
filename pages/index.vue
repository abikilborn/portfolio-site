<template>
    <div class="px-4 sm:px-8 lg:px-0 max-w-5xl mx-auto py-40">
        <!--Section 1: Brief Intro-->
        <div>
            <div>
                <img src="../assets/imgs/abi_kilborn.png" class="w-20">
            </div>
            <div class="max-w-2xl mt-9">
                <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">Front-End developer, UX/UI designer, and people enthusiast.</h1>
                <p class="mt-6 text-base text-zinc-600">
                    I'm Abi, a front-end developer & UX/UI designer based in Colorado. With 6 years of professional experience in development and design, I know we'd make a great team.
                </p>
            </div>
            <div class="mt-6 flex gap-6">
                <!--LinkedIn-->
                <a href="https://www.linkedin.com/in/abigail-kilborn-8170521ab/" target="_blank" rel="noopener noreferrer">
                    <IconLinkedIn class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
                </a>
                <!--Github-->
                <a href="https://github.com/abikilborn" target="_blank" rel="noopener noreferrer">
                    <IconGitHub class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
                </a>
            </div>
        </div>
        <div class="mt-16 gap-y-20 grid grid-cols-1 lg:grid-cols-2">
            <articles />
            <div class="space-y-10 lg:pl-16 xl:pl-24">
                <work />
            </div>
        </div>
    </div>
</template>

<script setup>
import Articles from "@/components/homepage/Articles.vue"
import Work from "@/components/homepage/Work.vue"
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";
</script>