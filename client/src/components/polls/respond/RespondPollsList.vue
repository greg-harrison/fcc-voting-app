<template>
  <div class="multi-poll container p-0">
    <div class="card">
      <div class="card-body">
        <ul class="poll-list list-group m-0">
          <li class="list-group-item text-left" v-bind:key="index" v-for="(poll, index) in polls">
            <div class="col-10 p-0">
              <p class="clearfix w-100 m-0">
                <strong>
                  {{ poll.question }}
                </strong>
              </p>
              <p class="m-0">Created By: {{poll.name | capitalize }}</p>
              <p class="m-0">Created Date: {{moment(poll.created_date).format('MM/DD/YYYY')}}</p>
            </div>
            <div class="col-2 p-0 text-right">
              <!-- UPDATE TO RESPOND PATH -->
              <!-- Need to add Responses to UserSettings Page (basically just showing the list of polls to which the user has submitted a response) -->
              <!-- Collapsing on the User Settings -->
              <!-- Pagination/Infinite Scroll for the lists -->
              <router-link :to="{path: `/poll/create/`+poll.poll_id}">
                Respond
              </router-link>
            </div>
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
import poll from "../../../restCalls/polls";
import moment from "moment";
import { capitalize } from "../../reusable_components/filters";

export default {
  data: () => ({
    moment: moment,
    polls: {}
  }),
  methods: {
    loadData: function() {
      poll.getAllPollsList(this);
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
    this.loadData();
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

<style scoped lang="scss">
@import "../../../style/_variables.scss";
.multi-poll {
  margin-top: 3rem;
  text-align: center;
}
</style>
