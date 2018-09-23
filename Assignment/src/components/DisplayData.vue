<template>
    <div>
        <ul class="list-group">
            <li
                v-for="(item, index) in list"
                :key="index"
                class="list-group-item"
                @click="$emit('remove', index)"
            >
                <span class="index"><b>{{index+1}}</b></span>
                <span class="name">{{item}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['list', 'remove']
    };
</script>

<style>
    .index {
        margin-right: 15px;
    }
    .list-group-item:hover::after {
        font-family: FontAwesome;
        content: '\f00d';
        color: red;
        font-weight: bold;
        float: right;
    }
</style>
