<template>
    <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({name:'entry', params:{id: 10}})"
    >

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Oct</span>
            <span class="mx-2 fs-light fs-5">2021</span>
        </div>

        <div class="entry-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod porro quis repudiandae, molestias, optio hic excepturi incidunt consequatur unde asperiores placeat necessitatibus minima, repellendus voluptates soluta delectus velit culpa minus.
        </div>

    </div>
</template>

<style lang="scss" scoped>

    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
        }

        .entry-description{
            font-size: 12px;
        }
    }



    
</style>