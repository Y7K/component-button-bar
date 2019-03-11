0<script>

    import ButtonBarButton from './ButtonBarButton';

    /**
     *
     */
    export default {

        components: {
            ButtonBarButton,
        },


        props: {
            options: {
                type: Array,
                required: true,
            },
            value: {
                type: String,
                default: null,
            },
        },


        methods: {
            input(value) {
                this.$emit('input', value);
            },
        },
    };

</script>

<template>

    <div class="buttonBar">
        <button-bar-button
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :is-selected="option.value === value"
            :label="option.label"
            @input="input"
        ></button-bar-button>
    </div>

</template>
