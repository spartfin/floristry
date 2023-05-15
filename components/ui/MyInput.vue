<template>
    <div class="input" :class="{ disabled: disabled }">
        <span v-if="label" class="input__label">{{ label }}</span>

        <input
            :id="`input-${_uid}`"
            v-mask="mask"
            class="input__input"
            :class="{ 'is-error': isError }"
            :type="type"
            :placeholder="placeholder"
            :value="value"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
            @input="$emit('input', $event.target.value)"
        />

        <div v-if="isError" class="input__error">
            <svg
                class="input__error-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    clip-path="url(#a)"
                    stroke="#FF3D00"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334ZM8 10.667V8M8 5.333h.006"
                    />
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                </defs>
            </svg>

            <span class="input__error-text">{{ errorFeedback }}</span>
        </div>
    </div>
</template>

<script setup>
defineEmits(['focus', 'blur', 'input']);

defineProps({
    type: {
        type: String,
        required: false,
        default: 'text',
    },
    label: {
        type: String,
        required: false,
        default: '',
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
    isError: {
        type: Boolean,
        required: false,
        default: false,
    },
    errorFeedback: {
        type: String,
        required: false,
        default: '',
    },
    eye: {
        type: Boolean,
        required: false,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    mask: {
        type: String,
        default: null,
    },
});
</script>

<script>
export default {
    name: 'MyInput',
};
</script>

<style lang="scss" scoped>
.input {
    position: relative;

    &__label {
        position: absolute;
        z-index: 1;
        top: -11px;
        left: 16px;
        padding: 0 8px;
        font-size: 14px;
        line-height: calc(22 / 14);
        font-weight: 400;
        white-space: nowrap;
        color: $colorGrayHard;
        background-color: $colorWhite;
    }

    &__input {
        height: 56px;
    }

    &__error {
        display: flex;
        margin-top: 8px;
    }

    &__error-icon {
        width: 16px;
        min-width: 16px;
        height: 16px;
        min-height: 16px;
        margin: 3px 8px 0 0;
    }

    &__error-text {
        font-size: 14px;
        line-height: calc(22 / 14);
        font-weight: 400;
        color: $colorError;
    }

    &__eye {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 24px;
        height: 24px;
        background-color: $colorWhite;
        cursor: pointer;

        path {
            transition: 0.45s;
        }

        &:hover,
        &:active {
            path {
                stroke: $colorPrimary;
            }
        }
    }

    &.disabled {
        pointer-events: none;

        .input__label {
            position: absolute;
            color: $colorWhite;
            border-radius: 4px;
            background-color: $colorDisable;
        }

        .input__input {
            color: $colorDisable;
            background-color: $colorLight;
        }
    }
}
</style>
