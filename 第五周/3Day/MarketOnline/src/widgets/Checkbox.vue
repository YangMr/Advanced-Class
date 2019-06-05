<template>
  <span
    class="checkbox"
    :class="{active: value}"
    @click="toggleChecked"></span>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleChecked () {
        this.$emit('input', !this.value)
        this.$emit('change')
      }
    }
  }
</script>

<style scoped>
  .checkbox {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
  }
  .checkbox:after {
    position: absolute;
    width: 8px;
    height: 8px;
    top: 2px;
    left: 2px;
    content: '';
    display: block;
  }
  .checkbox:hover {
    border-color: #95bf47;
  }
  .checkbox.active {
    border-width: 2px;
    border-color: #95bf47;
  }
  .checkbox.active:after {
    background-color: #95bf47;
  }
</style>
