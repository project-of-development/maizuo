export default {
    path: "/movie/nowPlaying",
    component: () =>
        import ("views/movie"),
    name: "nowPlaying"
}