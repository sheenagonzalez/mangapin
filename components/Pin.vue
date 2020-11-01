<template>
    <nuxt-link :to="'pins/' + id" class="pin body">
        <div class='overlay'></div>
        <img :src="posterImage">
        <p>{{ canonicalTitle }}</p>
    </nuxt-link>
</template>

<script>
export default {
    name: 'Pin',
    props: ['pin', 'id', 'canonicalTitle', 'posterImage']
}
</script>

<style>
.pin {
    position: relative;
}
.pin img {
    width: 10rem;
    height: 17rem;
    object-fit: cover;
    position: relative;
    left:0;
    top:0;
    border-radius: .5rem;
}
.overlay {
    z-index: 50;
    width: 10rem;
    height: 17rem;
    position: absolute;
    box-shadow: #000 0 -5rem 4rem -4rem inset;
    border-radius: .5rem;
    overflow: hidden;
}
.pin p {
    z-index: 100;
    width: 9.3rem;
    margin: 0 0.2rem 0 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    
    bottom: 1rem;
    color: white;
}
</style>