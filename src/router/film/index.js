export default {
    path: '/film/:filmId',
    name: 'film',
    component: () =>
        import ('views/film')
}