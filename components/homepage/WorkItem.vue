<script setup>
import backit_logo from "../../assets/imgs/backit_logo.png";
import veedback_logo from "../../assets/imgs/veedback_logo.png";
import { BriefcaseIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  icon: String,
  title: String,
  company_name: String,
  date: String,
});

const icons = {
  backit: backit_logo,
  veedback: veedback_logo,
};
</script>

<template>
  <li class="flex gap-4">
    <div
      class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5"
    >
      <img v-if="icons[icon]" :src="icons[icon]" alt="" class="h-7 w-7" />
      <BriefcaseIcon v-else class="h-5 w-5 text-gray-600" />
    </div>
    <dl class="flex flex-auto flex-wrap gap-x-2">
      <dt class="sr-only">Company</dt>
      <dd class="w-full flex-none text-sm font-medium text-zinc-900">
        {{ company_name }}
      </dd>
      <dt class="sr-only">Role</dt>
      <dd class="text-xs text-zinc-500">
        {{ title }}
      </dd>
      <dt class="sr-only">Date</dt>
      <dd class="ml-auto text-xs text-zinc-400">
        {{ date }}
      </dd>
    </dl>
  </li>
</template>
