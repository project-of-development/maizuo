export default {
    path: "/details",
    component: () =>
        import ("views/details"),
    name: "details",
    props: true,
    meta: {
        flag: false,
    }
}