<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-primary">
                    <div class="panel-heading text-center">Your To-Do List</div>
                    <div class="panel-body">
                        <progress-bar :list="todoList" :total="total"/>
                        <form>
                            <div class="input-group">
                                <input
                                    type="text"
                                    v-model="item"
                                    class="form-control"
                                    placeholder="Add your new todo here"
                                    :disabled="listFull"
                                >
                                <div class="input-group-btn">
                                    <button
                                        class="btn btn-default"
                                        @click.prevent="add"
                                        :disabled="listFull">
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div class="alert alert-danger" v-if="listFull">
                            <strong>Hey!</strong>
                            Your List is <b>FULL.</b> To add more please delete one or more items.
                        </div>
                        <div class="alert alert-info" v-if="listEmpty">
                            <strong>Hey!</strong> Lets do some work.
                        </div>
                        <todo-list :list="todoList" @remove="remove"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DisplayData from './components/DisplayData.vue';
    import progressBar from './components/ProgressBar.vue';
    const TOTAL = 12;

    export default {
        data() {
            return {
                item: null,
                todoList: [],
                total: TOTAL
            }
        },
        computed: {
            listFull: function() {
                return this.todoList.length === TOTAL;
            },
            listEmpty: function() {
                return this.todoList.length === 0;
            }
        },
        methods: {
            add() {
                if (!this.listFull && this.item) {
                    this.todoList.push(this.item);
                    this.item = '';
                }
            },
            remove(index) {
                this.todoList.splice(index, 1);
            }
        },
        components: {
            todoList: DisplayData,
            progressBar
        }
    }
</script>

<style>
    .container {
        padding-top: 50px;
    }
    form {
        margin-bottom: 20px;
    }
</style>
