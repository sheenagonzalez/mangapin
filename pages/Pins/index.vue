<template>
    <div>
        <h1 class="headline">browse</h1>
        <span class="search-button"><fa icon="search" /></span>
        <span>
            <input type="text" v-model="search"
            placeholder="search">
        </span>
        <button v-on:click="randomized = true" class="random-button"><fa icon="random" style="color: var(--color1); margin-right: .5rem;" />suprise me!</button>
        <button v-on:click= "displayAdvancedSearch = !displayAdvancedSearch" class="advanced-button"><fa icon="cog" style="color: var(--color1); margin-right: .5rem;" />advanced search</button>
        <div v-if="displayAdvancedSearch" class="advanced-search-container">
            <div class="status">
                <h2 class="category bold">status</h2>
                <label class="container">ongoing
                    <input type="checkbox" id="ongoing" value="current" v-model="checkedStatuses">
                    <span class="checkmark"></span>
                </label>
                <label class="container">completed
                    <input type="checkbox" id="completed" value="finished" v-model="checkedStatuses">
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="grid-container">
            <Pin v-for="pin in filteredPins" :key="pin.id" 
                :id="pin.id" 
                :canonicalTitle="pin.attributes.canonicalTitle" 
                :posterImage="pin.attributes.posterImage.original"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Pin from '../../components/Pin';

export default {
    components: {
        Pin,
    },
    data() {
        return {
            pins: [],
            search: '',
            displayAdvancedSearch: false,
            checkedStatuses: ["finished", "current"],
            randomized: false
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
            const recs = [
                'To Your Eternity', 
                'Gakuen Alice',
                'The Promised Neverland',
                'A Silent Voice',
                'Made in Abyss',
                'Bokura Ga Ita',
                'Liar Game',
                'Pink Lady',
                'Lovely Complex',
                'Chihayafuru',
                'Kimi ni Todoke',
                'Fruits Basket',
                'Beelzebub',
                'Tokyo Ghoul',
                'Dengeki Daisy',
                'Orange',
                'Tasogare Otome x Amnesia',
                'Bakuman',
                'Skip Beat!',
                'xxxHolic',
                'Kaichou wa Maid-sama!',
                'I Sold My Life for Ten Thousand Per Year',
                'The World God Only Knows',
                'Shinobi Life',
                'Natsume Yuujinchou',
                'Dawn of the Arcana',
                'Chobits',
                'Death Note',
                'Shugo Chara',
                'Katekyo Hitman Reborn',
                'Strobe Edge',
                'Hoshi Mamoru Inu',
                'Kusuriya no Hitorigoto',
                'Blue Period.',
                'Blue Lock',
                'Kowloon Generic Romance',
                'Ao Haru Ride',
                'Boku dake ga Inai Machi',
                'Kuroko no Basket',
                'Kuokou Debut',
                'Last Game',
                'Ore Monogatari',
                'Shingeki no Kyojin',
                'Vampire Knight'
            ].sort();
            // Go through each manga in recs list and add API result to pins data
            var res, title, i;
            for (i=0; i<recs.length; i++) {
                title = recs[i].replace(/ /g, '%20');
                res = await axios.get('https://kitsu.io/api/edge/manga?filter[text]='+title, config);
                this.pins.push(res.data.data[0]);
            }
            
        } catch (err) {
            console.log(err);
        }

    },
    computed: {
        // filter pins by search
        filteredPins:function() {
            if (this.randomized) {
                this.randomized = false;
                var temp = this.pins.filter((pin) => {
                    // return(pin.attributes.canonicalTitle.match(this.search) || pin.attributes.canonicalTitle.toLowerCase().match(this.search.toLowerCase()));
                    var enTitleMatched, en_jpTitleMatched, statusMatched, canonicalTitleMatched = false;
                    // Check if status match
                    statusMatched = this.checkedStatuses.includes(pin.attributes.status);
                    if (!statusMatched) {
                        return statusMatched;
                    }
                    // Check if titles match
                    canonicalTitleMatched = (pin.attributes.canonicalTitle.match(this.search) || pin.attributes.canonicalTitle.toLowerCase().match(this.search.toLowerCase()));
                    if (pin.attributes.titles.en) {
                        enTitleMatched = (pin.attributes.titles.en.match(this.search) || pin.attributes.titles.en.toLowerCase().match(this.search.toLowerCase()));
                    }
                    if (pin.attributes.titles.en_jp) {
                        en_jpTitleMatched = (pin.attributes.titles.en_jp.match(this.search) || pin.attributes.titles.en_jp.toLowerCase().match(this.search.toLowerCase()));
                    }
                    return (canonicalTitleMatched || enTitleMatched || en_jpTitleMatched);
                });
                var randomNum = Math.floor(Math.random() * temp.length);
                return [temp[randomNum]];
            } else {
                return this.pins.filter((pin) => {
                    // return(pin.attributes.canonicalTitle.match(this.search) || pin.attributes.canonicalTitle.toLowerCase().match(this.search.toLowerCase()));
                    var enTitleMatched, en_jpTitleMatched, statusMatched, canonicalTitleMatched = false;
                    // Check if status match
                    statusMatched = this.checkedStatuses.includes(pin.attributes.status);
                    if (!statusMatched) {
                        return statusMatched;
                    }
                    // Check if titles match
                    canonicalTitleMatched = (pin.attributes.canonicalTitle.match(this.search) || pin.attributes.canonicalTitle.toLowerCase().match(this.search.toLowerCase()));
                    if (pin.attributes.titles.en) {
                        enTitleMatched = (pin.attributes.titles.en.match(this.search) || pin.attributes.titles.en.toLowerCase().match(this.search.toLowerCase()));
                    }
                    if (pin.attributes.titles.en_jp) {
                        en_jpTitleMatched = (pin.attributes.titles.en_jp.match(this.search) || pin.attributes.titles.en_jp.toLowerCase().match(this.search.toLowerCase()));
                    }
                    return (canonicalTitleMatched || enTitleMatched || en_jpTitleMatched);
                });
            }
        }
    },
    head() {
        return {
            title: 'MangaPin - Pins',
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

<style>
.category {
    margin-bottom: .5rem;
}
.advanced-search-container {
    margin: 1rem 5rem;
    position: relative;
    padding: 1rem;
    border: solid 1px;
}
/* The container */
.container {
  /* display: inline-block; */
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 3rem;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a colored background */
.container input:checked ~ .checkmark {
  background-color: var(--color2);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: .45rem;
  top: .2rem;
  width: .35rem;
  height: .7rem;
  border: solid var(--color1);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.random-button, .advanced-button {
    padding: 1rem 2rem;
    color: var(--bg-color);
    background: var(--color2);
    border-radius: .25rem;

}
.random-button {
    margin-right: .5rem;
}
.search-button {
    padding: 1rem;
    border-radius: .25rem 0 0 .25rem;
    margin-left: 5rem;
    color: var(--color1);
    background: var(--color2);
}
.headline {
    margin: 3rem 0 1rem 5rem;
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    margin: 3rem 5rem;
}
input {
    width: 50%;
    padding: 1rem 1rem;
    border-radius: 0 .25rem .25rem 0;
    background: rgba(76, 91, 92, 14%);
    margin-right: .5rem;
}
@media screen and (max-width: 1200px){
    .grid-container {
        grid-template-columns: repeat(5, 1fr);
    }
}
@media screen and (max-width: 1018px){
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media screen and (max-width: 845px){
    .grid-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media screen and (max-width: 585px){
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 480px){
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>