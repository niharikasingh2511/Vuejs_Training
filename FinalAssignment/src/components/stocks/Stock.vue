<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <div class="pull-right font-weight-light">Price: {{ stock.price | tocurrency }}</div>
                </h3>
            </div>
            <div class="panel-body">
                <div >
                    <form>
                      <div class="form-row">
                          <div class="form-group col-12">
                              <input v-model.number="quantity" type="number" min="0" class="form-control" :class="{ danger: checkAvlFunds }" placeholder="Quantity">
                          </div>
                      </div>
                      <div class="form-row">
                          <div class="form-group col-12">
                              <button :disabled="quantity <= 0 || checkAvlFunds" :class="(checkAvlFunds ? 'btn-danger' : 'btn-primary')" type="button" class="btn btn-block"
                              @click="buy">
                                {{ checkAvlFunds ? 'Insufficient funds' : 'Buy' }}
                              </button>
                          </div>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters(["funds"]),
    checkAvlFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    ...mapActions(["buyStock"]),
    buy() {
      this.buyStock({
        id: this.stock.id,
        quantity: this.quantity,
        price: this.stock.price
      });
      this.quantity = 0;
    }
  },
  filters: {
    toCurrency: function(value) {
      if (typeof value !== "number") {
        return value;
      }
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    }
  }
};
</script>
