(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{255:function(e,t,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("ec631d48",content,!0,{sourceMap:!1})},257:function(e,t,r){"use strict";r(255)},258:function(e,t,r){var n=r(45)(!1);n.push([e.i,".pin{position:relative}.pin img{-o-object-fit:cover;object-fit:cover;position:relative;left:0;top:0}.overlay,.pin img{width:10rem;height:17rem;border-radius:.5rem}.overlay{z-index:50;box-shadow:inset 0 -5rem 4rem -4rem #000}.overlay,.pin p{position:absolute;overflow:hidden}.pin p{z-index:100;width:9.3rem;margin:0 .2rem 0 .5rem;white-space:nowrap;text-overflow:ellipsis;bottom:1rem;color:#fff}",""]),e.exports=n},259:function(e,t,r){"use strict";r.r(t);var n={name:"Pin",props:["pin","id","canonicalTitle","posterImage"]},o=(r(257),r(25)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"pin body",attrs:{to:"pins/"+e.id}},[r("div",{staticClass:"overlay"}),e._v(" "),r("img",{attrs:{src:e.posterImage}}),e._v(" "),r("p",[e._v(e._s(e.canonicalTitle))])])}),[],!1,null,null,null);t.default=component.exports},270:function(e,t,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("578fa78a",content,!0,{sourceMap:!1})},274:function(e,t,r){"use strict";var n=r(3),o=r(4),c=r(37),d=r(24),l=r(29),h=r(11),m=r(5),f=r(184),v=r(133),k=r(275),w=r(276),x=r(78),y=r(277),_=[],S=o(_.sort),C=o(_.push),A=m((function(){_.sort(void 0)})),L=m((function(){_.sort(null)})),T=v("sort"),j=!m((function(){if(x)return x<70;if(!(k&&k>3)){if(w)return!0;if(y)return y<603;var code,e,t,r,n="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(r=0;r<47;r++)_.push({k:e+r,v:t})}for(_.sort((function(a,b){return b.v-a.v})),r=0;r<_.length;r++)e=_[r].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:A||!L||!T||!j},{sort:function(e){void 0!==e&&c(e);var t=d(this);if(j)return void 0===e?S(t):S(t,e);var r,n,o=[],m=l(t);for(n=0;n<m;n++)n in t&&C(o,t[n]);for(f(o,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:h(t)>h(r)?1:-1}}(e)),r=o.length,n=0;n<r;)t[n]=o[n++];for(;n<m;)delete t[n++];return t}})},275:function(e,t,r){var n=r(60).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},276:function(e,t,r){var n=r(60);e.exports=/MSIE|Trident/.test(n)},277:function(e,t,r){var n=r(60).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},296:function(e,t,r){"use strict";r(270)},297:function(e,t,r){var n=r(45)(!1);n.push([e.i,'.category{margin-bottom:.5rem}.advanced-search-container{margin:1rem 5rem;position:relative;padding:1rem;border:1px solid}.container{position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:3rem}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:1.25rem;width:1.25rem;background-color:#eee}.container:hover input~.checkmark{background-color:#ccc}.container input:checked~.checkmark{background-color:var(--color2)}.checkmark:after{content:"";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{left:.45rem;top:.2rem;width:.35rem;height:.7rem;border:solid var(--color1);border-width:0 3px 3px 0;transform:rotate(45deg)}.advanced-button,.random-button{padding:1rem 2rem;color:var(--bg-color);background:var(--color2);border-radius:.25rem}.random-button{margin-right:.5rem}.search-button{padding:1rem;border-radius:.25rem 0 0 .25rem;margin-left:5rem;color:var(--color1);background:var(--color2)}.headline{margin:3rem 0 1rem 5rem}.grid-container{display:grid;grid-template-columns:repeat(6,1fr);grid-gap:1rem;margin:3rem 5rem}input{width:50%;padding:1rem;border-radius:0 .25rem .25rem 0;background:rgba(76,91,92,.14);margin-right:.5rem}@media screen and (max-width:1200px){.grid-container{grid-template-columns:repeat(5,1fr)}}@media screen and (max-width:1018px){.grid-container{grid-template-columns:repeat(4,1fr)}}@media screen and (max-width:845px){.grid-container{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width:585px){.grid-container{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:480px){.grid-container{grid-template-columns:repeat(1,1fr)}}',""]),e.exports=n},301:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(61),r(274),r(30),r(79),r(47),r(17),r(62),r(63),r(183),r(134),r(261)),c=r.n(o),d={components:{Pin:r(259).default},data:function(){return{pins:[],search:"",displayAdvancedSearch:!1,checkedStatuses:["finished","current"],randomized:!1}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,title,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={headers:{Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json"}},t.prev=1,n=["To Your Eternity","Gakuen Alice","The Promised Neverland","A Silent Voice","Made in Abyss","Bokura Ga Ita","Liar Game","Pink Lady","Lovely Complex","Chihayafuru","Kimi ni Todoke","Fruits Basket","Beelzebub","Tokyo Ghoul","Dengeki Daisy","Orange","Tasogare Otome x Amnesia","Bakuman","Skip Beat!","xxxHolic","Kaichou wa Maid-sama!","I Sold My Life for Ten Thousand Per Year","The World God Only Knows","Shinobi Life","Natsume Yuujinchou","Dawn of the Arcana","Chobits","Death Note","Shugo Chara","Katekyo Hitman Reborn","Strobe Edge","Hoshi Mamoru Inu","Kusuriya no Hitorigoto","Blue Period.","Blue Lock","Kowloon Generic Romance","Ao Haru Ride","Boku dake ga Inai Machi","Kuroko no Basket","Kuokou Debut","Last Game","Ore Monogatari","Shingeki no Kyojin","Vampire Knight"].sort(),i=0;case 4:if(!(i<n.length)){t.next=13;break}return title=n[i].replace(/ /g,"%20"),t.next=8,c.a.get("https://kitsu.io/api/edge/manga?filter[text]="+title,r);case 8:o=t.sent,e.pins.push(o.data.data[0]);case 10:i++,t.next=4;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))()},computed:{filteredPins:function(){var e=this;if(this.randomized){this.randomized=!1;var t=this.pins.filter((function(t){var r,n,o,c;return(o=e.checkedStatuses.includes(t.attributes.status))?(c=t.attributes.canonicalTitle.match(e.search)||t.attributes.canonicalTitle.toLowerCase().match(e.search.toLowerCase()),t.attributes.titles.en&&(r=t.attributes.titles.en.match(e.search)||t.attributes.titles.en.toLowerCase().match(e.search.toLowerCase())),t.attributes.titles.en_jp&&(n=t.attributes.titles.en_jp.match(e.search)||t.attributes.titles.en_jp.toLowerCase().match(e.search.toLowerCase())),c||r||n):o}));return[t[Math.floor(Math.random()*t.length)]]}return this.pins.filter((function(t){var r,n,o,c;return(o=e.checkedStatuses.includes(t.attributes.status))?(c=t.attributes.canonicalTitle.match(e.search)||t.attributes.canonicalTitle.toLowerCase().match(e.search.toLowerCase()),t.attributes.titles.en&&(r=t.attributes.titles.en.match(e.search)||t.attributes.titles.en.toLowerCase().match(e.search.toLowerCase())),t.attributes.titles.en_jp&&(n=t.attributes.titles.en_jp.match(e.search)||t.attributes.titles.en_jp.toLowerCase().match(e.search.toLowerCase())),c||r||n):o}))}},head:function(){return{title:"MangaPin - Pins",meta:[{hid:"description",name:"description",content:"best recommendations for manga"}]}}},l=(r(296),r(25)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"headline"},[e._v("browse")]),e._v(" "),r("span",{staticClass:"search-button"},[r("fa",{attrs:{icon:"search"}})],1),e._v(" "),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"random-button",on:{click:function(t){e.randomized=!0}}},[r("fa",{staticStyle:{color:"var(--color1)","margin-right":".5rem"},attrs:{icon:"random"}}),e._v("suprise me!")],1),e._v(" "),r("button",{staticClass:"advanced-button",on:{click:function(t){e.displayAdvancedSearch=!e.displayAdvancedSearch}}},[r("fa",{staticStyle:{color:"var(--color1)","margin-right":".5rem"},attrs:{icon:"cog"}}),e._v("advanced search")],1),e._v(" "),e.displayAdvancedSearch?r("div",{staticClass:"advanced-search-container"},[r("div",{staticClass:"status"},[r("h2",{staticClass:"category bold"},[e._v("status")]),e._v(" "),r("label",{staticClass:"container"},[e._v("ongoing\n                "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedStatuses,expression:"checkedStatuses"}],attrs:{type:"checkbox",id:"ongoing",value:"current"},domProps:{checked:Array.isArray(e.checkedStatuses)?e._i(e.checkedStatuses,"current")>-1:e.checkedStatuses},on:{change:function(t){var r=e.checkedStatuses,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c="current",d=e._i(r,c);n.checked?d<0&&(e.checkedStatuses=r.concat([c])):d>-1&&(e.checkedStatuses=r.slice(0,d).concat(r.slice(d+1)))}else e.checkedStatuses=o}}}),e._v(" "),r("span",{staticClass:"checkmark"})]),e._v(" "),r("label",{staticClass:"container"},[e._v("completed\n                "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedStatuses,expression:"checkedStatuses"}],attrs:{type:"checkbox",id:"completed",value:"finished"},domProps:{checked:Array.isArray(e.checkedStatuses)?e._i(e.checkedStatuses,"finished")>-1:e.checkedStatuses},on:{change:function(t){var r=e.checkedStatuses,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c="finished",d=e._i(r,c);n.checked?d<0&&(e.checkedStatuses=r.concat([c])):d>-1&&(e.checkedStatuses=r.slice(0,d).concat(r.slice(d+1)))}else e.checkedStatuses=o}}}),e._v(" "),r("span",{staticClass:"checkmark"})])])]):e._e(),e._v(" "),r("div",{staticClass:"grid-container"},e._l(e.filteredPins,(function(e){return r("Pin",{key:e.id,attrs:{id:e.id,canonicalTitle:e.attributes.canonicalTitle,posterImage:e.attributes.posterImage.original}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pin:r(259).default})}}]);