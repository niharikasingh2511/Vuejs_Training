<template>
  <div class="Exercise8">
    <li>
      <router-link to="/">Return to Homepage</router-link>
    </li>
    <h1>{{msg}}</h1>

    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <form v-on:submit.prevent="isFormSubmitted=true" >
                          <div class="row">
                              <div>
                                  <full-name :value="userDetails.name"/>
                                  <div class="form-group">
                                      <label for="email">Mail</label>
                                      <input v-model="userDetails.email"
                                        type="text"
                                        id="email"
                                        class="form-control">
                                  </div>
                                  <div class="form-group">
                                      <label for="password">Password</label>
                                      <input v-model="userDetails.password"
                                        type="password"
                                        id="password"
                                        class="form-control">
                                  </div>
                                  <div  class="form-group">Store Data?
                                      <label style="margin-left: 15px" for="yes">
                                          <input
                                            type="radio"
                                            id="yes" value="yes"
                                            v-model="userDetails.isDataStored">Yes
                                      </label>
                                      <label for="no">
                                          <input
                                            type="radio"
                                            id="no" value="no"
                                            v-model="userDetails.isDataStored"> No
                                      </label>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                  <button class="btn btn-primary" style="margin-top: 10px">Submit!</button>
                              </div>
                          </div>
                      </form>
                    </div>
                    <div  v-if="isFormSubmitted" class="row">
                      <hr />
                      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                          <div class="panel panel-default data-summary">
                              <div class="panel-heading">
                                  <h4>Your Data</h4>
                              </div>
                              <div class="panel-body">
                                  <p>First Name: {{ userDetails.name.firstName }}</p>
                                  <p>Last Name:  {{ userDetails.name.lastName }}</p>
                                  <p>Mail:  {{ userDetails.email }}</p>
                                  <p>Password:  {{ userDetails.password }}</p>
                                  <p>Store in Database?:  {{ userDetails.isDataStored }}</p>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FullName from "@/components/common/FullName.vue";
export default {
  name: "Exercise8",
  components: { fullName: FullName },
  data() {
    return {
      msg: "Excercise 8",
      userDetails: {
        name: {
          firstName: "",
          lastName: ""
        },
        email: "",
        password: "",
        isDataStored: "no"
      },
      isFormSubmitted: false
    };
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  list-style: none;
}
a {
  color: #42b983;
}
.form-group {
  margin-top: 10px;
}
.form-group label {
  width: 100px;
  display: inline-block;
}
</style>
