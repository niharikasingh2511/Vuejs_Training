<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link class="navbar-brand primary" to="/" >Stock Trader</router-link>
            </div>
            <div :class="{'show': openMobileMenu}" class="collapse navbar-collapse">
                <ul class="nav navbar-nav mr-auto">
                    <li><router-link to="/portfolio">Portfolio</router-link></li>
                    <li><router-link to="/stocks">Stocks</router-link></li>
                </ul>
                <strong class="navbar-text navbar-right">Funds:  ${{funds}} </strong>
                <ul class="nav navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" @click="dayEnd">End Day<span class="sr-only">(current)</span></a>
                    </li>

                    <li class="dropdown">
                      <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" @click="isDropdownOpen = !isDropdownOpen">
                        Save & Load<span class="caret"></span>
                      </a>
                      <ul :class="{'show': isDropdownOpen}" class="dropdown-menu">
                       <li> <a class="dropdown-item" @click="save">Save Data</a></li>
                       <li> <a class="dropdown-item" @click="load">Load Data</a></li>
                      </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false,
      openMobileMenu: false
    };
  },
  computed: {
    ...mapGetters(["funds"])
  },
  methods: {
    ...mapActions(["dayEnd", "save", "load"])
  }
};
</script>
