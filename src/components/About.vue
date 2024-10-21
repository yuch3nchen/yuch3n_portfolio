<script></script>
<template>
  <section
    class="container mx-auto md:px-16 xl:px-48 mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-4 place-content-between items-center"
  >
    <img
      src="../assets/images/profile.jpeg"
      alt="Yuchen's profile photo"
      class="profile-img place-self-center md:shadow-lg md:hover:shadow-xl md:col-span-2 lg:col-span-1"
    />
    <article class="md:px-0 px-6 md:col-span-2 lg:col-span-3">
      <h2 class="font-bold text-2xl tex-pretty">
        Hi there! I'm Yuch3n. Based in Taiwan.
      </h2>
      <p class="text-pretty">
        As a multidisciplinary talent, I'm actively advancing towards the field
        of software development. My rich experience in customer service and
        project management has laid a solid foundation for my technical learning
        journey. Passionate about front-end development, I focus on learning
        Vue3.js and have applied SCSS and Bootstrap5 in personal projects.
        Furthermore, I've explored Node.js and Tailwind CSS, demonstrating my
        enthusiasm and potential in front-end technologies.
      </p>
    </article>
  </section>
</template>
<style>
.profile-img {
  &:hover {
    animation: shake 1000ms ease-in-out infinite;
  }
}
</style>
