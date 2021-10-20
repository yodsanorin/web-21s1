<template>
  <div class="page-athlete-list">
    <div class="section">
    <p class="title is-2">Athletes</p>
      <div v-for="athlete in athletes" :key="athlete.slug">
        <router-link
          :to="{
            name: 'AthleteDetails',
            params: { athleteSlug: athlete.slug },
          }">{{ athlete.team }}-{{ athlete.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Athlete } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteList extends Vue {
  get athletes (): Athlete [] {
    return this.$store.state.athletes.sort((a: Athlete, b: Athlete) => a.team.localeCompare(b.team))
  }
}
</script>
