<template>
  <div>
    <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Мой Магазин</h1>
      <nav class="flex gap-4">
        <router-link class="hover:underline" to="/">Главная</router-link>
        <router-link class="hover:underline" to="/catalog">Каталог</router-link>
        <router-link class="hover:underline" to="/contacts">Контакты</router-link>
      </nav>
    </header>
    <main class="p-4">
      <section>
        <h2 class="text-xl font-bold mb-2">Контакты</h2>
        <p>Телефон: +7 123 456 7890</p>
        <p>Почта: contact@myshop.ru</p>
        <p>Адрес: ул. Ленина, д. 1, Москва</p>
        <img src="/map.png" alt="Карта" class="rounded-lg"
             style="width: 192px; height: 192px; object-fit: cover;">
      </section>
    </main>
    <footer class="bg-gray-700 text-white p-4">
      <p>Мой Магазин © 2025</p>
      <a href="../../public/policy.pdf" target="_blank" class="hover:underline">Политика конфиденциальности</a>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>