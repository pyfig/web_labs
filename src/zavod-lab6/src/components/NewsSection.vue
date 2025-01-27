<template>
  <section class="py-16">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-8">Новости</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 class="font-bold text-lg mb-4"></h3>
          <p class="text-sm">20.07.2020</p>
          <button class="text-blue-600 mt-2">Читать далее</button>
        </div>
        <!-- Repeat for other news -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsSection'
}
</script>
