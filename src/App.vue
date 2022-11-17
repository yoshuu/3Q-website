<script setup>
import Front_header from "./components/Front_header.vue";
import Front_main from "./components/Front_main.vue";
import Front_footer from "./components/Front_footer.vue";
</script>

<template>
  <header>
    <Front_header />
  </header>
  <main>
    <Suspense>
      <Front_main />
    </Suspense>
  </main>
  <footer>
    <Front_footer />
  </footer>
</template>

<style scoped lang="scss"></style>
