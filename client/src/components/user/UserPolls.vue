<template>
  <div class="col col-sm-6">
    <div v-bind:hidden="user.pollLength<1" class="user display-polls container p-0">
      <div class="card">
        <div class="card-body">
          <ul class="poll-list list-group m-0">
            <li class="list-group-item text-left" v-bind:key="index" v-for="(poll, index) in user.polls">
              <div class="col-9 p-0">
                <p class="clearfix w-100 m-0">
                  <strong>
                    {{ poll.question }}
                  </strong>
                </p>
                <p class="m-0">Created: {{moment(poll.created_date).format('MM/DD/YYYY')}}</p>
              </div>
              <div class="col-3 p-0 text-right">
                <p class="m-0">
                  <router-link :to="{path: `/poll/create/`+poll.poll_id}">
                    Edit
                    <span class="hidden-sm-down">
                      Poll
                    </span>
                  </router-link>
                </p>
                <p class="m-0">
                  <router-link :to="{path: `/poll/results/`+poll.poll_id}">
                    <span class="hidden-md-down">
                      View
                    </span>
                    Results
                  </router-link>
                </p>
              </div>
            </li>
          </ul>
          <p v-if="error" class="error">
            {{ error }}, please try again
          </p>
        </div>
      </div>
    </div>
    <div v-bind:hidden="user.pollLength>0" class="user display-polls container p-0">
      <div class="card">
        <div class="card-body p-3">
          You have created no polls.
          <router-link to="/poll/create">
            Click here to get started.
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import poll from "../../restCalls/polls";
import auth from "../../auth";
import moment from "moment";
import { capitalize } from "../reusable_components/filters";

export default {
  data: () => ({
    moment: moment,
    user: {
      details: {},
      polls: [],
      pollLength: 0
    },
    error: ""
  }),
  methods: {
    getUser() {
      this.user.details = auth.user.user_detail;
    },
    getPolls() {
      this.user.polls = poll.getUserPolls(this, auth.user.user_detail);
    },
    checkPollLength() {
      this.user.pollLength = this.user.polls.length;
    }
  },
  filters: {
    capitalize
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    this.getUser();
    this.getPolls();
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    this.checkPollLength();
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
.user {
  &.display-polls {
    .poll-list {
      list-style: none;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
