<template>
  <span
    class="badge"
    :style="{ color: color, borderColor: color, fontSize: fontSize }">{{ text }}</span>
</template>

<script>
  export default {
    name: 'Badge',
    props: {
      color: {
        default: '#d33d3e',
        validator (value) {
          return value.indexOf('#') === 0 && (value.length === 4 || value.length === 7)
        }
      },
      text: {
        default: ''
      },
      fontSize: {
        default: '12px'
      }
    }
  }
</script>

<style scoped>
  .badge {
    padding-left: 3px;
    padding-right: 3px;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
  }
</style>
