export const updateWidth = () => {
    const windowWidth = ref(window.innerWidth);

    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
    });

    return {
        windowWidth,
    };
};
