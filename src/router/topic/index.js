export default {
    path: '/topic/:goodsid',
    name: 'topic',
    component: () =>
        import ('views/topic')
}