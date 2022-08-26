function display_video(id) {
    if ($("iframe").length == 0) {
        $("ul.nav").after(`<iframe width="1120" height="630" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    } else {
        $("iframe").attr("src", `https://www.youtube.com/embed/${id}`)
    }
}