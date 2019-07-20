import http from "utils/http.js"


//特惠
export const activeImg = ()=>http("get","/active?actId=wnIRqR340378",{headers: {'X-Host': 'mall.act.static-page.info','X-Client-Info':''}})