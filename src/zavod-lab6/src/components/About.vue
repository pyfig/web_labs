<template>
  <section class="py-8 px-8 bg-gray-100">
    <div class="container mx-auto text-left p-10">
      <h1 class="text-5xl font-semibold mb-1">Российский завод</h1>
      <h1 class="text-5xl font-semibold mb-1">силовых машин</h1>
      <div class="flex gap-6 mt-8">
        <img
            src="/ehud-neuhaus-wW5854gAm1c-unsplash%201.png"
            alt="zavod"
            class="w-auto h-128 rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>

  <section class="py-16 px-8 bg-gray-100">
    <div class="container mx-auto text-left p-10">
      <h2 class="text-5xl font-semibold mb-10">О предприятии</h2>

      <div class="flex flex-col md:flex-row gap-8 mb-6">
        <div class="md:w-1/2">
          <p class="text-lg leading-relaxed mb-6">
            За 30 лет развития в структуре завода сформирован мощный производственный потенциал,
            научно-технический центр, испытательная лаборатория, современная база, учебный центр
            и широкая сеть региональных и международных представительств в Российской Федерации,
            Республике Беларусь, Узбекистане и Казахстане.
          </p>

          <p class="text-lg leading-relaxed">
            Ежегодно НПП «ПИОНЕР» реализует несколько проектов по модернизации серийных и разработке
            новых приборов, призванные в наибольшей степени удовлетворять возрастающие требования
            наших заказчиков.
          </p>
        </div>

        <div class="md:w-1/2">
          <div class="p-1 h-full">
            <p class="text-lg">
              В номенклатуре выпускаемой НПП «ПИОНЕР» продукции найдется все, что необходимо для
              успешного решения задачи автоматизации технологических процессов на любом предприятии.
              Все средства измерения производства «ПИОНЕР» внесены в Государственный реестр СИ и
              имеют необходимые разрешительные документы.
            </p>
          </div>
        </div>
      </div>

      <!-- Images Row -->
      <div class="flex gap-6 mt-8">
        <img
            src="/aurelien-romain-DB_q6rPFnBM-unsplash%201.jpg"
            alt="Workshop"
            class="w-1/2 h-auto rounded-lg shadow-lg"
        />
        <img
            src="/carlos-aranda-QMjCzOGeglA-unsplash%201.jpg"
            alt="Assembly Line"
            class="w-1/2 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>