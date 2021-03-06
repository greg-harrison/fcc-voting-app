<template>
  <div class="poll create container p-0">
    <div class="card">
      <div class="card-header">
        {{compActionType}}
      </div>
      <div class="card-body p-5 ">
        <form class="container">
          <label class="col text-left question">
            <p class="m-0" v-bind:class="{ error: !!errors.questionError}">
              Question
              <span v-if="!!errors.questionError" class="error">{{errors.questionError}}</span>
            </p>
            <input v-model="poll.question" placeholder="question">
          </label>
          <div class="col text-left mt-3 options">
            <span v-bind:class="{ error: !!errors.optionsError}">
              Options
              <span v-if="!!errors.optionsError" class="error">{{errors.optionsError}}</span>
            </span>
            <div v-if="compActionType === 'Edit'" v-for="(option, index) in poll.original_options" :key="index">
              <label class="d-block">
                <input v-model="option.option_value" placeholder="option value" v-bind:disabled="true">
              </label>
            </div>
            <div v-for="(option, index) in poll.options" :key="index">
              <label class="d-block">
                <input v-model="option.option_value" placeholder="option value">
                <strong v-if="index >= 1 || compActionType === 'Edit'" @click.prevent="removeOption(index)">X</strong>
              </label>
            </div>
            <button class="btn btn-main add-btn" @click.prevent="addOption()">Add Option</button>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button v-if="compActionType === 'Edit'" class="btn btn-main close-btn" @click.prevent="edit()" type="submit">{{compActionType}}</button>
        <button v-if="compActionType === 'Create'" class="btn btn-main close-btn" @click.prevent="create()" type="submit">{{compActionType}}</button>
        <span v-if="!!errors.formError" class="error">{{errors.formError}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty, filter, pullAt, omitBy, pickBy, some, merge } from "lodash";
import polls from "../../../restCalls/polls";

export default {
  data: () => ({
    compActionType: "Create",
    poll: {
      options: [
        {
          option_value: ""
        }
      ],
      deleted: []
    },
    isEditting: false,
    errors: {}
  }),
  props: ["poll_id"],
  created() {
    if (this.$route.params.poll_id) {
      this.fetchData();
    }
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.isEditting = true
      polls.getPoll(this, this.$route.params);
      this.compActionType = "Edit";
    },
    addOption() {
      this.poll.options.push({ option_value: "" });
    },
    removeOption(index) {
      var array = this.poll.options;
      let test = pullAt(array, index);
      let deletedArr = this.poll.deleted;

      deletedArr.push(test[0]);

      if (array.length > 1) {
        this.poll = merge(
          {
            options: array,
            deleted: deletedArr
          },
          this.poll
        );
      }
    },
    validate() {
      let errors = {};

      if (!this.poll.question) {
        errors.questionError = " cannot be empty";
      } else {
        errors.questionError = null;
      }

      let emptyOption = some(this.poll.options, o => {
        return isEmpty(o.option_value.toString().trim());
      });

      if (emptyOption) {
        errors.optionsError = " cannot be empty";
      } else {
        errors.optionsError = null;
      }

      errors = omitBy(errors, isEmpty);

      if (Object.keys(errors).length > 1) {
        errors.formError = "Form has multiple errors";
      } else {
        errors.formError = null;
      }

      errors = omitBy(errors, isEmpty);

      this.errors = errors;
    },
    edit() {
      this.validate;

      this.poll.poll_id = this.$route.params.poll_id;

      if (!isEmpty(this.errors)) {
      } else {
        polls.editPoll(this, this.poll, "/");
      }
    },
    create() {
      this.validate;

      if (!isEmpty(this.errors)) {
      } else {
        polls.createPoll(this, this.poll, "/");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../style/_variables.scss";

.poll {
  &.create {
    .error {
      color: $orange;
      padding: 0;
      margin: 0;
    }
    .add-btn {
      background-color: $green;
      color: $white;
      &:hover,
      &:active,
      &:focus {
        background-color: darken($green, 5%);
        color: darken($white, 5%);
      }
    }
    .close-btn {
      background-color: $blue;
      color: $white;
      &:hover,
      &:active,
      &:focus {
        background-color: darken($blue, 5%);
        color: darken($white, 5%);
      }
    }
    .question,
    .options {
      input {
        border: 1px solid $grey;
        border-radius: 4px;
        padding: 4px 5px;

        outline: none;

        &:hover,
        &:active,
        &:focus {
          border-color: $blue;
        }
      }
    }
  }
}
</style>
