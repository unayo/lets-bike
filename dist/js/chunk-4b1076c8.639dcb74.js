(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b1076c8"],{"14c5":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),i={class:"mt-40 container"},c=Object(n["e"])("h2",{class:"text-white"},"單車站總覽",-1),o=Object(n["e"])("div",{id:"mapStation",class:"mapStation rounded-2 border my-4"},null,-1);function s(t,e,a,s,r,l){var d=Object(n["w"])("StationSearch");return Object(n["r"])(),Object(n["d"])("div",i,[c,o,Object(n["h"])(d,{onEmitCity:l.getStation,"card-bike":r.apiBike},null,8,["onEmitCity","card-bike"])])}a("d81d"),a("d3b7"),a("159b"),a("99af");var r=a("e11e"),l=a.n(r),d=a("6c2d"),u=(a("b0c0"),a("c7a9")),m=a.n(u),p={class:"row my-5"},b={class:"col-12 col-md-4 text-white"},h=Object(n["f"])('<div><h5 class="fw-normal">依單車站名稱</h5><div class="d-flex my-3"><input type="text" class="formInput form-control me-2 shadow-sm" placeholder="搜尋車站關鍵字" aria-label="station keyword" aria-describedby="keyword"><button class="formBtn btn btn-primary shadow" type="button" id="keyword"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg><span class="ms-2">查詢</span></button></div></div>',1),f=Object(n["e"])("h5",{class:"fw-normal"},"依單車站地址",-1),y=Object(n["e"])("option",{value:"",selected:""},"縣市",-1),g=["value"],v=Object(n["f"])('<div class="d-flex my-3"><input type="text" class="formInput form-control me-2 shadow-sm" placeholder="搜尋地址關鍵字" aria-label="station address" aria-describedby="address"><button class="formBtn btn btn-primary shadow" type="button" id="address"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg><span class="ms-2">查詢</span></button></div>',1),O={class:"col-12 col-md-8 d-flex justify-content-between flex-wrap"},j={class:"d-flex align-items-center"},w=Object(n["e"])("img",{class:"me-3",src:m.a,alt:"station image"},null,-1),S={class:"fs-5 text-white"},k=Object(n["e"])("div",{class:"d-flex"},[Object(n["e"])("small",{class:"d-flex align-items-center text-success me-3"},[Object(n["e"])("span",{class:"circle-success me-2"}),Object(n["g"])(" 正常營運 ")]),Object(n["e"])("small",null,"YouBike1.0｜總數：30")],-1),x=Object(n["e"])("small",{class:"text-address"},"地址：忠孝東路/松仁路(東南側)",-1),B=Object(n["e"])("div",null,[Object(n["e"])("div",{class:"rent-color bg-count rounded-2 bg-dark"},[Object(n["g"])(" 20 "),Object(n["e"])("small",null,"可租")]),Object(n["e"])("div",{class:"return-color bg-count rounded-2 bg-dark"},[Object(n["g"])(" 10 "),Object(n["e"])("small",null,"可還")])],-1);function C(t,e,a,i,c,o){return Object(n["r"])(),Object(n["d"])("div",p,[Object(n["e"])("div",b,[h,Object(n["e"])("div",null,[f,Object(n["D"])(Object(n["e"])("select",{onChange:e[0]||(e[0]=function(){return o.emit&&o.emit.apply(o,arguments)}),"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.cityAddress=t}),class:"form-select my-3","aria-label":"country"},[y,(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.city,(function(t){return Object(n["r"])(),Object(n["d"])("option",{key:t.en,value:t.en},Object(n["y"])(t.name),9,g)})),128))],544),[[n["A"],c.cityAddress]]),v])]),Object(n["e"])("div",O,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.cardBike,(function(t){return Object(n["r"])(),Object(n["d"])("div",{key:t.StationUID,class:"cardItem py-3"},[Object(n["e"])("div",null,[Object(n["e"])("div",j,[w,Object(n["e"])("div",null,[Object(n["e"])("p",S,Object(n["y"])(t.StationName.Zh_tw),1),k])]),x]),B])})),128))])])}var T={props:{cardBike:{type:Object,default:function(){return{}}}},data:function(){return{cityAddress:"Taichung",city:[{name:"臺中市",en:"Taichung"},{name:"新竹市",en:"Hsinchu"},{name:"苗栗縣",en:"MiaoliCounty"},{name:"新北市",en:"NewTaipei"},{name:"屏東縣",en:"PingtungCounty"},{name:"金門縣",en:"KinmenCounty"},{name:"桃園市",en:"Taoyuan"},{name:"臺北市",en:"Taipei"},{name:"高雄市",en:"Kaohsiung"},{name:"臺南市",en:"Tainan"},{name:"嘉義市",en:"Chiayi"}]}},methods:{emit:function(){this.$emit("emit-city",this.cityAddress),console.log("emit接收station",this.cardBike)}}},A=(a("f6ce"),a("d959")),M=a.n(A);const D=M()(T,[["render",C]]);var I=D,z={components:{StationSearch:I},data:function(){return{getCitySelect:"Taichung",mymap:null,nowLocation:{latitude:25.047675,longitude:121.517055},apiStation:[],apiBike:[]}},methods:{getStation:function(t){this.getCitySelect=t,console.log("text接收station",this.getCitySelect),this.getApiBike()},getMap:function(){this.mymap=l.a.map("mapStation").setView([this.nowLocation.latitude,this.nowLocation.longitude],15),l.a.tileLayer("https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{maxZoom:18,username:"unayo",style_id:"ckw6oruov0sl614pinxf6eb44",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoidW5heW8iLCJhIjoiY2t1d2EwNzZpMGh2aDJ3cmYwdWJnb2hudyJ9.XcnKuVJN2Q50urzdA594WQ"}).addTo(this.mymap),l.a.control.zoom({position:"bottomright"}).addTo(this.mymap)},getApiStation:function(){var t=this,e="https://ptx.transportdata.tw/MOTC/v2/Bike/Station/".concat(this.getCitySelect,"?$top=30&$format=JSON");this.$http.get(e,{headers:this.apiID()}).then((function(e){t.apiStation=e.data})).catch((function(t){console.log("error",t.response)}))},getApiBike:function(){var t=this;this.getApiStation();var e="https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/".concat(this.getCitySelect,"?$top=30&$format=JSON");this.$http.get(e,{headers:this.apiID()}).then((function(e){var a=e.data;t.apiBike=[],a.forEach((function(e){t.apiStation.forEach((function(a){e.StationUID===a.StationUID&&(e.StationName=a.StationName,e.StationPosition=a.StationPosition,e.StationAddress=a.StationAddress,e.StopDescription=a.StopDescription,e.BikesCapacity=a.BikesCapacity,t.apiBike.push(e))}))})),console.log("總和 api 資料",t.apiBike),t.setMarker()}))},apiID:function(){var t="d270b525f2114a95895b7670090cb92c",e="Pwts_rFo3XHtvuvjDziNlG6fqvM",a=(new Date).toGMTString(),n=new d["a"]("SHA-1","TEXT");n.setHMACKey(e,"TEXT"),n.update("x-date: "+a);var i=n.getHMAC("B64"),c='hmac username="'.concat(t,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(i,'"');return{Authorization:c,"X-Date":a}},setMarker:function(){var t=this;this.apiBike.forEach((function(e){var a=new l.a.DivIcon({html:'<span class="number">'.concat(e.AvailableRentBikes,"</span>"),className:"leafletIcon",iconSize:[36,44]});l.a.marker([e.StationPosition.PositionLat,e.StationPosition.PositionLon],{icon:a}).addTo(t.mymap)}))}},mounted:function(){this.getApiBike(),this.getMap()}};a("9c99");const J=M()(z,[["render",s]]);e["default"]=J},"5ca8":function(t,e,a){},"9c99":function(t,e,a){"use strict";a("e936")},b0c0:function(t,e,a){var n=a("83ab"),i=a("5e77").EXISTS,c=a("e330"),o=a("9bf2").f,s=Function.prototype,r=c(s.toString),l=/^\s*function ([^ (]*)/,d=c(l.exec),u="name";n&&!i&&o(s,u,{configurable:!0,get:function(){try{return d(l,r(this))[1]}catch(t){return""}}})},c7a9:function(t,e,a){t.exports=a.p+"img/icon-station.202abe97.svg"},e936:function(t,e,a){},f6ce:function(t,e,a){"use strict";a("5ca8")}}]);
//# sourceMappingURL=chunk-4b1076c8.639dcb74.js.map