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
        <h2 class="text-xl font-bold mb-2">Популярные товары</h2>
        <ul class="flex gap-4">
          <li class="border p-2">Варежки</li>
          <li class="border p-2">Батон</li>
          <li class="border p-2">Капуста</li>
        </ul>
      </section>
      <section>
        <h2 class="text-xl font-bold mb-2">Новинки</h2>
        <ul class="flex gap-4">
          <li class="border p-2">Шапка ушанка</li>
          <li class="border p-2">Зеленые шары</li>
        </ul>
      </section>
      <section>
        <h2 class="text-xl font-bold mb-2">Коллекции</h2>
        <ul>
          <li>Летняя коллекция</li>
          <li>Зимняя коллекция</li>
        </ul>
      </section>
    </main>
    <footer class="bg-gray-700 text-white p-4">
      <p>Мой Магазин © 2025</p>
      <a href="../../public/policy.pdf" target="_blank" class="hover:underline">Политика конфиденциальности</a>
    </footer>
  </div>
</template>
