<script setup>
import ProjectCard from '@/components/experienceAndProjects/ProjectCard.vue'
import projects from '../data-files/projects.json'
</script>

<template>
    <div class="px-4 max-w-5xl mx-auto pt-40 pb-32 grid grid-cols-1 gap-y-16 lg:gap-y-12 lg:px-6 ">
        <div class="max-w-2xl">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                What do I know?
            </h1>
            <div class="mt-6 space-y-7 text-base text-zinc-600">
                <p>
                    Over the last 6 years I've had the joy of getting to know
                    a lot of different technologies, use many different apps, and make my
                    own little mark in the vast world of the internet.
                </p>
            </div>
        </div>
        <div>
            <p class="font-bold tracking-tight text-zinc-800 text-2xl mb-5 decoration-teal-500 underline-offset-2 underline">
                Tech/Languages/Frameworks
            </p>
            <p class="text-zinc-600 leading-6 ">
                Vue3, Vue2, Nuxt2, Nuxt3, TailwindCSS, Figma, Javascript, HTML, CSS, Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro), Agile Methodologies, Monday, Jira, RESTful APIs, Pinia, Vuex, Vue Router
            </p>
        </div>
        <div>
            <p class="font-bold tracking-tight text-zinc-800 text-2xl mb-10 decoration-teal-500 underline-offset-2 underline">
                Projects
            </p>
            <ul
                role="list"
                class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                <ProjectCard v-for="project in projects" :project-id="project.project_id" :project-desc="project.project_desc" :project-link="project.project_link" :project-link-label="project.project_link_label" :project-name="project.project_name" />
            </ul>
        </div>
    </div>
</template>
