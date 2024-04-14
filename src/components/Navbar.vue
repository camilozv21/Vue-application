<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch px-3">
    <router-link :to="{ name: 'home' }" class="flex items-center">
      Home
    </router-link>
    <div>
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-all hover:bg-purple-200"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-all hover:bg-purple-200"
      >
        Meals By letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full transition-all hover:bg-purple-200"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
