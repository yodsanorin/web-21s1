<template>
  <div class="page-athlete-create">
    <div class="section">
      <p class="title is-2">Create Team</p>
      <div class="columns">
          <div class="column">
      <b-field label="Slug" label-position="on-border">
              <b-input v-model="slug"/>
            </b-field>

      <b-field label="Age" label-position="on-border">
        <b-input type="number" />
      </b-field>

      <b-field label="Gender" label-position="on-border">
        <b-select expanded>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </b-select>
      </b-field>

      <b-field label="Name" label-position="on-border">
       <b-input v-model="name"/>
      </b-field>

      <b-field label="Slug" label-position="on-border">
        <b-input v-model="slug"/>
      </b-field>

      <b-field label="Team Name" label-position="on-border">
        <b-input v-model="team"/>
      </b-field>

      <b-field label="Team Slug" label-position="on-border">
        <b-input v-model="teamSlug"/>
      </b-field>
       </div>
  </div>

      <b-button type="is-primary" size="is-large" expanded>Save Athlete</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Athlete } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteCreate extends Vue {
  slug = 'panipak-wongpattanakit'
  name = 'Panipak Wongpattanakit'
  teamSlug = 'thailand'
  team = 'Thailand'
  age = 24
  gender = 'Female'

  async save (): Promise<void> {
    const { slug, name, teamSlug, team, age, gender } = this
    const athlete: Athlete = { slug, name, teamSlug, team, age, gender }
    // TODO: Save & redirect
    this.$store.dispatch('create-athlete', athlete)
    this.$router.push({ name: 'AthleteDetails', params: { resultSlug: athlete.slug } })
  }
}
</script>
