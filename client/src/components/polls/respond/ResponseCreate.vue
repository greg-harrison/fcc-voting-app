<template>
  <div class="response create container p-0">
    <div class="card">
      <div class="card-header">
        {{compActionType}} Response
      </div>
      <div class="card-body p-5">
        <form class="container">
          <label class="col text-left question">
            {{poll.question}}
          </label>
          <div class="form-group">
            <div class="form-check" v-for="(option, index) in poll.options" :key="index">
              <label v-if="!!option.option_value" class="form-check-label">
                <input type="radio" class="form-check-input" v-model="response.poll_option_id" v-bind:value="option.poll_option_id" placeholder="option value"> {{option.option_value}}
              </label>
              <label v-if="!!!option.option_value" class="form-check-label">
                RESPONSE UNAVAILABLE
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-main close-btn" @click.prevent="submit()" type="submit">Submit Response</button>
        <span v-if="!!errors.formError" class="error">{{errors.formError}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty, filter, pullAt, omitBy, pickBy, some } from "lodash";
import polls from "../../../restCalls/polls";
import response from "../../../restCalls/response";

export default {
  data: () => ({
    compActionType: "Create",
    poll: {
      options: [
        {
          option_value: ""
        }
      ]
    },
    response: {
      poll_id: "",
      poll_option_id: ""
    },
    errors: {}
  }),
  created() {
    // Instead of poll_id, we'll look for RESPONSE_ID
    // WHEN WE DO EDIT
    if (this.$route.params.poll_id) {
      this.fetchData();
    }
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      polls.getPoll(this, this.$route.params);
      this.compActionType = "Create";
      this.response.poll_id = this.$route.params.poll_id;
    },
    validate() {
      let errors = {};
    },
    submit() {
      this.validate;

      if (!isEmpty(this.errors)) {
      } else {
        response.createResponse(this, this.response, "/");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../style/_variables.scss";
.response {
}
</style>
