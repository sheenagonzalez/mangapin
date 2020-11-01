<template>
    <div>
        <nuxt-link class="back-button" to="/pins">Back to Pins</nuxt-link>
        <div class="content">
            <div class="left container">
                <div class="posterImage-container">
                    <img :src="posterImage"/>
                </div>
            </div>
            <div class="right container">
                <div class="text">
                    <h1 class="manga-title">{{ title }}</h1>
                    <div>
                        <span class="bold">author: </span><span>{{ author }}</span>
                    </div>
                    <div>
                        <span class="bold">artist: </span><span>{{ artist }}</span>
                    </div>
                    <div>
                        <span class="bold">chapters: </span><span>{{ chapters }}</span>
                    </div>
                    <div>
                        <span class="bold">status: </span><span>{{ status }}</span>
                    </div>
                    <div>
                        <span class="bold">genres: </span><span>{{ genres }}</span>
                    </div>
                    <p class="bold">description</p>
                    <p>{{ synopsis }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: "",
            posterImage: "",
            author: "Unknown",
            artist: "Unknown",
            chapters: "",
            status: "",
            genres: "Unknown",
            synopsis: "",
            approves: 0
        }
    },
    async created() {
        const config = {
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json'
            }
        }

        try {
            const response = await axios.get(`https://kitsu.io/api/edge/manga/${this.$route.params.id}`, config);
            // console.log(response.data.data);
            const manga_data = response.data.data;
            // console.log(manga_data.attributes.synopsis);
            this.title = manga_data.attributes.canonicalTitle;
            this.posterImage = manga_data.attributes.posterImage.original;
            this.status = manga_data.attributes.status;
            this.chapters = manga_data.attributes.chapterCount;
            this.synopsis = manga_data.attributes.synopsis;
            // this.author = response.data.data
            
        } catch (err) {
            console.log(err);
        }
    },
    head() {
        return {
            title: this.title,
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
.content {
    margin-left: 5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
.back-button {
    margin-left: 5rem;
    border: solid 1px;
    padding: .5rem 1rem;
}
.left {
    width: 30rem;
    margin: 0;
    padding: 0;
}
.posterImage-container img {
    width: 23rem;
    height: 28rem;
    border-radius: .5rem;
}
.container {
    display: flex;
    flex-direction: column;
}
.right .text {
    width: 30rem;
    line-height: 1.5rem;
}
</style>