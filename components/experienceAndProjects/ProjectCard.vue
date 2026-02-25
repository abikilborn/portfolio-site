<script setup>
import { LinkIcon } from '@heroicons/vue/20/solid'
import veedbackLogo from '../../assets/imgs/veedback_logo.png'
import backItlogo from '../../assets/imgs/backit_logo.png'
import portfolioLogo from '../../assets/imgs/abi_kilborn.png'
import pokedexLogo from '../../assets/imgs/pokeball.png'
import repayLogo from '../../assets/imgs/repay_logo.png'

const projectImgs = {
    veedback: veedbackLogo,
    backit: backItlogo,
    portfolio: portfolioLogo,
    pokedex: pokedexLogo,
    repay: repayLogo
}

const props = defineProps({
    projectName: String,
    projectId: String,
    projectLink: String,
    projectLinkLabel: String,
    projectDesc: String,
})

</script>

<template>
    <div class="group relative flex flex-col items-start">
        <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
            <img
                :src="projectImgs[projectId]"
                alt=""
                class="h-8 w-8"
            />
        </div>
        <h2 class="mt-6 text-base font-semibold text-zinc-800">
            <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
            <a :href="projectLink" target="_blank" rel="noopener noreferrer">
                <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span class="relative z-10">{{projectName}}</span>
            </a>
        </h2>
        <p class="relative z-10 mt-2 text-sm text-zinc-600">
            {{ projectDesc }}
        </p>
        <p class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
            <LinkIcon class="h-6 w-6 flex-none" />
            <span class="ml-2">
                {{ projectLinkLabel }}
            </span>
        </p>
    </div>
</template>

