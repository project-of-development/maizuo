


import http from "utils/http.js"


//商品列表
export const getgoodslist = (goodsid)=>http("get","/active?topicId="+goodsid+"&pageSize=10&pageNum=1&sortKey=default&sortType=asc&k=4914177",{headers: {'X-Host': 'mall.cfg.topic.product.list',
'X-Client-Info':'{"a":"3007","ch":"1002","v":"1.4.5","e":"15617806224032974291476","cc":"","bc":"0"}'}})



//商品头部
export const getgoodslistHeader = (goodsid)=>http("get","/active?topicId="+goodsid+"&k=2710300",{headers: {'X-Host': 'mall.cfg.topic.details',
'X-Client-Info':'{"a":"3007","ch":"1002","v":"1.4.5","e":"15617806224032974291476","cc":"","bc":"0"}'}})



