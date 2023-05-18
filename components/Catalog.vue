<template>
    <section>
        <h2>Swiper Card Effect</h2>

        <Swiper
            class="swiper-cards"
            :width="240"
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            :slides-per-view="1"
            :loop="true"
            :effect="'cards'"
            :autoplay="{delay: 8000, disableOnInteraction: true}"
        >
            <SwiperSlide
                v-for="(slide, idx) in slides"
                :key="idx"
                :style="`background-color: ${slide.bg}; color: ${slide.color}`"
            >
                {{ idx }}
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
const slides = ref(Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Figure out contrast color for font
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white';

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
}));
</script>

<style>
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    font-size: 18px;
}

.swiper-wrapper {
    width: 100vh;
    min-width: 100vh;
}

.swiper-cards {
    width: 240px;
    height: 240px;
}

.swiper-cards .swiper-slide {
    border: 1px solid #000;
    border-radius: 6px;
}
</style>
