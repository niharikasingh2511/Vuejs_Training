<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small class="font-weight-light">({{ stock.quantity }})</small>
                    <div class="pull-right font-weight-light">{{ stock.price | toCurrency}}</div>
                </h3>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <input placeholder="Quantity" v-model.number="quantity" type="number" min="0" class="form-control" :class="{danger : checkAvaliableQuantity}">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <button :disabled="quantity <= 0 || checkAvaliableQuantity" :class="(checkAvaliableQuantity ? 'btn-danger' : 'btn-primary')" type="button" class="btn btn-block" @click="sell">
                            {{ checkAvaliableQuantity ? 'Too Much Quantity' : 'Sell' }}
                          </button>
                        </div>
                    </div>
                </form>
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
import { mapActions, mapGetters } from "vuex";

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
      checkAvaliableQuantity() {
          return this.quantity > this.stock.quantity;
      }
  },
  methods: {
    ...mapActions(["sellStock"]),
    sell() {
      this.sellStock({
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
