<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @input="$emit('input', $event.target.value)"
    />
</template>

<script setup>
defineEmits(['focus', 'blur', 'input']);

defineProps({
    type: {
        type: String,
        required: false,
        default: 'text',
    },
    placeholder: {
        type: String,
        required: false,
        default: '',
    },
    value: {
        type: String,
        required: false,
        default: '',
    },
});
</script>
