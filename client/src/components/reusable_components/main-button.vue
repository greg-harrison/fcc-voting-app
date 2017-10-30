<template>
  <button v-bind:class="'btn '+ 'va-c-'+ textColor +' va-bg-'+ btnColor" @click.prevent="onClick">
    {{btnText}}
  </button>
</template>

<script>
export default {
  props: {
    btnText: String,
    btnColor: String,
    textColor: {
      type: String,
      default() {
        return "white";
      }
    },
    onClick: {
      type: Function,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/_variables.scss";
@import "../../style/_global.scss";

.btn {
  cursor: pointer;
  color: $white;
}
</style>
