<template>
  <header class="sticky top-0 bg-white shadow-sm z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Верхняя часть хедера -->
      <div class="flex items-center justify-between h-16">
        <!-- Логотип -->
        <a href="/" class="flex-shrink-0">
          <img
              src="/public/logo.svg"
              alt="Company Logo"
              class="h-8 w-auto"
          />
        </a>
        <!-- Контакты -->
        <div class="hidden md:flex gap-x-6">
          <!-- Первый блок -->
          <div class="flex flex-col items-end text-right">
            <span class="text-gray-500 text-sm">По вопросам и предложениям</span>
            <a href="mailto:pionerrr@sila.ru" class="text-blue-600 hover:underline text-sm">
              pionerrr@sila.ru
            </a>
          </div>
          <!-- Второй блок -->
          <div class="flex flex-col items-end text-right">
            <span class="text-gray-500 text-sm">Для консультаций</span>
            <a href="tel:+74954562421" class="text-blue-600 hover:underline text-sm">
              +7 (495) 456-24-21
            </a>
          </div>
        </div>
        <!-- Кнопка мобильного меню -->
        <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Серая линия с навигацией -->
      <div class="border-t border-gray-200 pt-4 pb-5 flex items-center">
        <nav class="hidden md:flex space-x-8 justify-center">
          <a
              v-for="link in navigationLinks"
              :key="link.name"
              :href="link.href"
              class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="{ 'text-blue-600 font-semibold': link.primary }"
          >
            {{ link.name }}
          </a>
        </nav>
        <!-- Кнопка "Перезвоните мне" -->
        <button
            class="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm ml-10"
        >
          <img
              src="/public/phone%201.svg"
              alt="Phone Icon"
              class="h-5 w-5 mr-2"
          />
          Перезвоните мне
        </button>
      </div>

      <!-- Мобильное меню -->
      <div v-show="isOpen" class="md:hidden pb-4">
        <div class="px-2 pt-2 space-y-1">
          <a
              v-for="link in navigationLinks"
              :key="link.name"
              :href="link.href"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              :class="{ 'text-blue-600 font-semibold': link.primary }"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isOpen: false,
      navigationLinks: [
        { name: "Главная", href: "#primary", primary: true },
        { name: "О предприятии", href: "#about" },
        { name: "Новости", href: "#news" },
        { name: "Продукция", href: "#products" },
        { name: "Услуги", href: "#services" },
        { name: "Поддержка", href: "#support" },
        { name: "География поставок", href: "#geography" },
        { name: "Контакты", href: "#contacts" },
      ],
    };
  },
};
</script>

<style scoped>
/* Убираем фон у кнопки и настраиваем цвет */
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
