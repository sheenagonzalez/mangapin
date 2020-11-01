<template>
    <div>
        <h1 class="headline">what is mangapin?</h1>
        <h2 class="subheadline">
            mangapin is a personal board for mangas I recommend (〃￣ω￣〃ゞ
        </h2>
        <br>
        <p class="body">
            this is a place where I drop my favorite reads to share with friends. 
            slice of life, shoujo and adventure are the genres I love and read most so you can find a lot of those here. 
            <!-- but i would love to know your thoughts and your own recs--so drop your comments on the board!! -->
            <br>
            i might add new features like a comment board and genre filters! look forward to it :)
            <br>
            <br>
            have fun and read on~ (σ･ω･)σ
        </p>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: 'MangaPin - About',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "best recommendations for manga"

                }
            ]
        }
    }
}
</script>
<style scoped>
.subheadline, .body {
    margin-left: 5rem;
    width: 40rem;
}
</style>