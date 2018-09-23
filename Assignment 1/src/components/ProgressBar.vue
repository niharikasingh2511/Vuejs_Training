<template>
    <div class="progress text-center">
        <div :class="['progress-bar', 'progress-bar-'+progressStatus]" :style="{ width: percentage + '%' }"></div>
        <span v-if="percentage" class="percentage"> Your List is {{percentage}}% Full </span>
    </div>
</template>

<script>
    export default {
        props: ['list', 'total'],
        computed: {
            percentage: function () {
                return Math.round((this.list.length / this.total) * 100);
            },
            progressStatus: function() {
                const {percentage} = this;

                if (percentage < 50) {
                    return "success";
                } else if (percentage >= 50 && percentage < 80) {
                    return "warning";
                } else if (percentage >= 80) {
                    return "danger";
                }
            }
        }
    };
</script>

<style>
    .percentage {
        position: absolute;
        width: 100%;
        left: 0;
    }
    .progress{
        height: 100px;
    }
</style>
