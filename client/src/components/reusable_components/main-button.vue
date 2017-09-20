<template>
  <button v-bind:class="'btn '+ 'va-c-'+ textColor +' va-bg-'+ btnColor" @click="onClick">
    {{btnText}}
  </button>
</template>

<script>
export default {
  props: {
    btnText: String,
    btnColor: String,
    textColor: String,
    onClick: {
      type: Function,
      required: false
    }
  },
  data: () => ({
    textColor: 'white'
  })
}
</script>

<style lang="scss" scoped>
@import '../../style/_variables.scss';
@import '../../style/_global.scss';

.btn {
  cursor: pointer;
  color: $white;
}
</style>
