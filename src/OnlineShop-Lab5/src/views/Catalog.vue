<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Мой Магазин</h1>
      <nav class="flex gap-4">
        <router-link class="hover:underline" to="/">Главная</router-link>
        <router-link class="hover:underline" to="/catalog">Каталог</router-link>
        <router-link class="hover:underline" to="/contacts">Контакты</router-link>
      </nav>
    </header>

    <main class="p-4 container mx-auto">
      <section>
        <h2 class="text-xl font-bold mb-6 text-center md:text-left">Каталог</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Первый товар -->
          <div class="flex flex-col md:flex-row items-center border rounded-lg p-4 gap-4">
            <img
                src="/fish.gif"
                alt="Рыба живая"
                class="rounded-lg"
                style="width: 192px; height: 192px; object-fit: cover;"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2">Рыба живая (крутится)</h3>
              <p class="text-gray-600 mb-4">Свежая живая рыба из экологически чистых источников</p>
              <p class="text-2xl font-bold text-blue-600">777 руб.</p>
            </div>
          </div>

          <!-- Второй товар -->
          <div class="flex flex-col md:flex-row items-center border rounded-lg p-4 gap-4">
            <img
                src="/Bread.png"
                alt="Батон (нарезной)"
                class="rounded-lg"
                style="width: 192px; height: 192px; object-fit: cover;"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-2">Батон (нарезной)</h3>
              <p class="text-gray-600 mb-4">Свежий пшеничный батон с хрустящей корочкой</p>
              <p class="text-2xl font-bold text-blue-600">45 руб.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-700 text-white p-4 mt-auto">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Мой Магазин © 2025</p>
        <a href="/policy.pdf" target="_blank" class="hover:underline">Политика конфиденциальности</a>
      </div>
    </footer>
  </div>
</template>

<style>
.router-link-exact-active {
  @apply underline decoration-2;
}
</style>
