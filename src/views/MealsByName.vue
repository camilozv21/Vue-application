<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals..."
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-lg"
    >
      <img
        :src="meal.strMealThumb"
        :alt="strMeal"
        class="rounded-t-lg w-full h-48 object-cover"
      />
      <div class="p-3">
        <h3 class="font-bold pb-2">{{ meal.strMeal }}</h3>
        <p class="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          nisi soluta, facere reiciendis labore placeat veniam, deserunt et eos
          error, quisquam unde ea libero consequuntur quas provident a quam
          facilis!
        </p>
        <div class="pt-2">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-3 rounded border-black bg-red-500 text-white hover:bg-red-600 transition-colors duration-300"
            >Youtube</a
          >
          <router-link
            to="/"
            target="_blank"
            class="px-3 py-3 rounded border border-purple-600 hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../store";
import { computed } from "@vue/reactivity";
import { RouterLink } from "vue-router";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
