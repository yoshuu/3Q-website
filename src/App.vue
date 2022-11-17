<script setup>
import Front_header from "./components/Front_header.vue";
import Front_main from "./components/Front_main.vue";
import Front_footer from "./components/Front_footer.vue";
</script>

<template>
  <Suspense>
    <div class="front">
      <header>
        <Front_header />
      </header>
      <main>
        <Front_main />
      </main>
      <footer>
        <Front_footer />
      </footer>
    </div>
  </Suspense>
</template>

<style scoped lang="scss">
.front {
  position: relative;
  overflow: hidden;
}
</style>
