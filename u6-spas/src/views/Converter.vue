<template>
  <table>
    <tr>
      <td><input v-model="input" type="number" /></td>
      <td>=</td>
      <td>
        <span class="output">{{ output.toFixed(2) }}</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Converter extends Vue {
  input = 100
  inputUnit = 'f'
  outputUnit = 'c'

  get output (): number {
    const converters: Record<string, (input: number) => number> = {
      'c-c': (input: number) => input || 0,
      'c-f': (input: number) => ((input || 0) * 9 / 5) + 32,
      'c-k': (input: number) => (input || 0) + 273.15,
      'f-c': (input: number) => ((input || 0) - 32) * 5 / 9,
      'f-f': (input: number) => input || 0,
      'f-k': (input: number) => ((input || 0) - 32) * 5 / 9 + 273.15,
      'k-c': (input: number) => (input || 0) - 273.15,
      'k-f': (input: number) => ((input || 0) - 273.15) * 9 / 5 + 32,
      'k-k': (input: number) => input || 0
    }

    return converters[`${this.inputUnit}-${this.outputUnit}`](this.input)
  }
}
</script>
