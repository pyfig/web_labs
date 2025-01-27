<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <About />
      <ProductList />
      <MapSection />
      <NewsSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import ProductList from './components/ProductList.vue'
import NewsSection from './components/NewsSection.vue'
import MapSection from './components/MapSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    About,
    ProductList,
    NewsSection,
    MapSection,
    Footer
  }
}
</script>

<style scoped>
/* Global styles or scoped component styles can go here */
</style>
