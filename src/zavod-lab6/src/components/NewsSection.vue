<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-semibold mb-8 text-left">Новости</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img
              src="/greg-rosenke-xoxnfVIE7Qw-unsplash%201.jpg"
              alt="News 1"
              class="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 class="font-bold text-lg mb-2">
            НПП «ПИОНЕР» подтвердило свои компетенции в области консультирования и изготовления...
          </h3>
          <p class="text-gray-500 text-sm mb-4">20.07.2020</p>
          <button class="text-blue-600 font-medium">Читать далее</button>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img
              src="/jonas-morgner-F7u5fL11Lt0-unsplash%201.jpg"
              alt="News 2"
              class="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 class="font-bold text-lg mb-2">
            Поздравляем коллектив регионального представительства «ПИОНЕР» с праздником!
          </h3>
          <p class="text-gray-500 text-sm mb-4">18.07.2020</p>
          <button class="text-blue-600 font-medium">Читать далее</button>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img
              src="/rafael-juarez-hTUdXgbhd3o-unsplash%201.jpg"
              alt="News 3"
              class="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 class="font-bold text-lg mb-2">
            Перенос сроков проведения запланированных работ в 2020 году
          </h3>
          <p class="text-gray-500 text-sm mb-4">20.06.2020</p>
          <button class="text-blue-600 font-medium">Читать далее</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsSection",
};
</script>
