<template>
    <header class="header">
        <div id="brand-container">
            <Logo />
            <nuxt-link to="/" class="brand black">Manga<span>Pin</span></nuxt-link>
        </div>
        <ul id="menu">
            <li>
                <nuxt-link to="/pins">Pins</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">About</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
import Logo from "./Logo.vue";
export default {
    name: "AppHeader",
    components: {
        Logo
    }
}
</script>

<style>
html {
    width: 100%;
    margin: auto;
    background: var(--bg-color);
}
#brand-container {
    display: flex;
}
.brand {
    margin-left: 1rem;
}
.header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem 5rem;
}
#menu {
    display: flex;
    font: var(--headline);
}
#brand-container span {
    color: var(--color2);
}
.header a {
    display: inline-block;
    color: var(--main-color);
    padding: 0.3rem 1rem;
    margin-right: 3rem;
}
</style>