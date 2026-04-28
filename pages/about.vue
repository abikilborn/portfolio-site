<script setup>
import SocialLink from "@/components/homepage/SocialLink.vue";
</script>

<template>
  <div
    class="px-4 max-w-5xl mx-auto pt-40 pb-32 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:px-6"
  >
    <div class="lg:pl-20">
      <div class="max-w-xs px-2.5 lg:max-w-none">
        <img
          src="../assets/imgs/hero_img.png"
          alt=""
          class="aspect-square rounded-2xl object-cover max-w-xs"
        />
      </div>
    </div>
    <div class="lg:order-first lg:row-span-2">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
        I’m Abi. I like building things that help people.
      </h1>
      <div class="mt-6 space-y-7 text-base text-zinc-600">
        <p>
          Tech has been a love of mine since I can remember, but so has art.
          When I figured out that I could combine the two with the career path
          called "Front-End Developer", I was thrilled.
        </p>
        <p>
          In 2018 I attended Western Oregon University, and earned my Bachelor
          of Science in Computer Science in 2020 (the best year to graduate,
          right?). Shortly after, I had the privilege of beginning my career on
          a small, tight-knit startup team. While on that team, I began a UX/UI
          Designer role in tandem with my Front-End Development role, which gave
          me not only a unique perspective on the front-end, but a passion for
          pixel-perfect implementation. Ever since then, I've been able to keep
          doing both development and design, which helps me grow in both areas!
        </p>
        <p>
          Aside from development, I love connecting with people, reading books,
          and crocheting gifts for my family and friends!
        </p>
      </div>
    </div>
    <div class="lg:pl-20">
      <ul role="list">
        <SocialLink
          link="https://www.linkedin.com/in/abigail-kilborn-8170521ab/"
          icon="linkedIn"
        >
          Connect on LinkedIn
        </SocialLink>
        <SocialLink
          link="https://github.com/abikilborn"
          icon="github"
          class="mt-4"
        >
          Follow on GitHub
        </SocialLink>
        <SocialLink
          link="mailto:abikilborn@gmail.com"
          icon="email"
          class="mt-8 border-t border-zinc-100 pt-8"
        >
          abikilborn@gmail.com
        </SocialLink>
      </ul>
    </div>
  </div>
</template>
