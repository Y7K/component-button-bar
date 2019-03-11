<script>

    /**
     *
     */
    export default {

        props: {
            value: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
            isSelected: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            classes() {
                return {
                    'buttonBar-button-isSelected': this.isSelected,
                };
            },
        },

    };

</script>

<template>
    <button
        class="buttonBar-button"
        :class="classes"
        @click="$emit('input', value)"
    >
        {{ label }}
    </button>
</template>
