<template>
  <div class="user display-polls container p-0">
    <div class="card">
      <div class="card-header">
        {{ user.details.name }}'s Polls
      </div>
      <div class="card-body">
        <ul class="poll-list list-group m-0">
          <li class="list-group-item" v-bind:key="index" v-for="(poll, index) in user.polls">
            <p class="clearfix w-100 m-0">
              <strong>
              {{ poll.question }}
              </strong>
            </p>
            <p class="m-0">Created: {{moment(poll.created_date).format('MM/DD/YYYY')}}</p>
            <router-link
              :to="{
                path: `/poll/create/`+poll.poll_id,
              }">
            Trying {{poll.poll_id}}
            </router-link>
          </li>
        </ul>
        <p v-if="error" class="error">
          {{ error }}, please try again
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import poll from "../../restCalls/polls";
import auth from "../../auth";
import moment from "moment";

export default {
  data: () => ({
    moment: moment,
    user: {
      details: {},
      polls: []
    },
    error: ""
  }),
  methods: {
    getUser() {
      this.user.details = auth.user.user_detail;
    },
    getPolls() {
      if (auth.user.user_detail.user_id) {
        let credentials = {
          user_id: auth.user.user_detail.user_id
        };

        poll.getUserPolls(this, credentials);
      }
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
