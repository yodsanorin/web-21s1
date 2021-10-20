<template>
  <div class="page-result-details">
    <div class="section" v-if="result">
      <p class="title is-2">{{ athlete.name }}</p>
      <p>Age: {{ athlete.age }}</p>
      <p>gender: {{ athlete.gender }}</p>
    <img
          :src="`/images/athletes/${athleteSlug}.jpg`"
          alt="athletes.slug"
        />
    </div>
    <div class="section" v-else>
      <p class="title is-2">Athlete not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Athlete } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteDetails extends Vue {
  get Athlete (): Athlete | undefined {
    return this.$store.getters.athletesBySlug[this.$route.params.athleteSlug]
  }
}
</script>
