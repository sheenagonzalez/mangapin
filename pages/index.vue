<script>
export default {
    fetch({ redirect, route }){
        if (!route.params.id) {
            redirect("/pins")
        }

    },
    head() {
        return {
        title: 'MangaPin',
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