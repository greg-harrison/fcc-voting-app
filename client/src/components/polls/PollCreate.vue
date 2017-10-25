<template>
  <div class="poll create container p-0">
    <div class="card">
      <div class="card-header">
        Create
      </div>
      <div class="card-body">
        <form>
          <label class="d-block">
            <p v-if="!!errors.questionError" class="error">{{errors.questionError}}</p>
            <input v-model="poll.question" placeholder="question">
          </label>
          <div>
            <span v-bind:class="{ error: !!errors.optionsError}">
              Options
              <span v-if="!!errors.optionsError" class="error">{{errors.optionsError}}</span>
            </span>
            <div v-for="(option, index) in poll.options" :key="index">
              <label class="d-block">
                <input v-model="option.option" placeholder="option value">
                <strong v-if="index >= 1" @click.prevent="removeOption(index)">X</strong>
              </label>
            </div>
            <button @click.prevent="addOption()">Add Option</button>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-main" @click.prevent="create()" type="submit">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
// Awesome! This type of import works for Lodash!
import { isEmpty, filter, pullAt, omitBy, pickBy, some } from "lodash";
import polls from "../../restCalls/polls";

export default {
  data: () => ({
    poll: {
      // Change to options?
      options: []
    },
    errors: {}
  }),
  methods: {
    addOption() {
      this.poll.options.push({ option: "" });
    },
    removeOption(index) {
      var array = this.poll.options;

      if (array.length > 1) {
        pullAt(array, index);

        this.poll = Object.assign(
          {},
          {
            options: array
          }
        );
      }
    },
    validate() {
      let errors = {};

      if (!this.poll.question) {
        errors.questionError = "Please Enter a Question";
      } else {
        errors.questionError = null;
      }

      let emptyOption = some(this.poll.options, o => {
        return isEmpty(o.option.toString().trim());
      });

      if (emptyOption) {
        errors.optionsError = " cannot be empty";
      } else {
        errors.optionsError = null;
      }

      errors = omitBy(errors, isEmpty);

      this.errors = errors;
    },
    create() {
      this.validate;

      if (!isEmpty(this.errors)) {
        console.log("has errors");
      } else {
        console.log("this.poll", this.poll);
        polls.createPoll(this, this.poll, "/");
        console.log("Can make the call to the backend now");
      }
    },
    testClick() {
      console.log("click from parent");
    }
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/_variables.scss";

.poll {
  &.create {
    .error {
      color: $orange;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
