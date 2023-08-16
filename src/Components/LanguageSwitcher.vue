<template>
  <div class="language-switcher">
    <img
        :src="getFlagImage(selectedLanguage)"
        :alt="selectedLanguage === 'mk' ? 'Македонски' : 'English'"
        @click="switchLanguage(selectedLanguage === 'mk' ? 'en' : 'mk')"
        :class="{ active: selectedLanguage === 'mk' }"
        class="flag-image"
    />
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useI18n} from "vue-i18n";
import Tr from "../i18n/translation"
import mkImage from "../assets/images/flags/mk.png"
import enImage from "../assets/images/flags/en.png"

const { t, locale } = useI18n()
const selectedLanguage = ref(locale);

const languages = [
  { code: 'mk', name: 'Македонски', image: mkImage },
  { code: 'en', name: 'English', image: enImage },
  // Add more languages and images as needed
];
const switchLanguage = async (event) => {
  await Tr.switchLanguage(event)
  localStorage.setItem('selectedLanguage', event);
}

const getFlagImage = (languageCode) => {
  return languages.find((language) => language.code !== languageCode).image;
};

onMounted(() => {
  const storedLanguage = localStorage.getItem('selectedLanguage');
  if (storedLanguage) {
    switchLanguage(storedLanguage);
  }
});

</script>

<script>

</script>

<style scoped>
.language-switcher {
  display: flex;
}

.flag-image {
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.language-switcher.hover{
  border: #800020 3px solid; /* Example: Highlight the active language */
}
</style>