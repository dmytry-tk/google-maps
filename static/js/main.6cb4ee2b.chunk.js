(this["webpackJsonpgoogle-maps"]=this["webpackJsonpgoogle-maps"]||[]).push([[0],{369:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(26),i=n.n(o),s=n(157),c=n(38),r=n(158),l=n(1),d=n(61),u=d.compose,j=d.withProps,m=d.withState,h=d.withHandlers,p=d.lifecycle,b=n(165).MarkerClusterer,g=n(323),x=g.withScriptjs,f=g.withGoogleMap,v=g.GoogleMap,O=(g.Marker,n(364).MarkerWithLabel),k=(n(366).SearchBox,n(368).StandaloneSearchBox),w=u(j({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-gUZ12AVTL5DncTX_ilJAMhwCiocVvjg&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(l.jsx)("div",{style:{height:"100%"}}),containerElement:Object(l.jsx)("div",{style:{height:"80vh"}}),mapElement:Object(l.jsx)("div",{style:{height:"100%"}})}),m("zoom","onZoomChange",13),h((function(){var e={map:void 0};return{onMapMounted:function(){return function(t){e.map=t}},onZoomChanged:function(e){e.onZoomChange;return function(){}}}})),p({componentWillMount:function(){var e=this,t={};this.setState({places:[],onSearchBoxMounted:function(e){t.searchBox=e},onPlacesChanged:function(){var n=t.searchBox.getPlaces();console.log(t.searchBox.getPlaces()),e.setState({places:n})}})}}),x,f)((function(e){return Object(l.jsx)(C,Object(r.a)({},e))})),C=function(e){var t=Object(a.useState)({lat:-33.91075134,lng:151.19416809}),n=Object(c.a)(t,2),o=n[0],i=n[1],s=Object(a.useRef)({getPlaces:function(){}});return Object(l.jsxs)(v,{defaultCenter:{lat:-33.91075134,lng:151.19416809},center:o,zoom:e.zoom,options:{minZoom:2,maxZoom:18},ref:e.onMapMounted,onZoomChanged:e.onZoomChanged,children:[Object(l.jsx)("div",{"data-standalone-searchbox":"",children:Object(l.jsx)(k,{ref:function(t){e.onSearchBoxMounted(t),s.current=t},bounds:e.bounds,onPlacesChanged:function(){var e=s.current.getPlaces()[0].geometry.location.lat(),t=s.current.getPlaces()[0].geometry.location.lng();i({lat:e,lng:t})},children:Object(l.jsx)("input",{type:"text",placeholder:"Customized your placeholder",style:{boxSizing:"border-box",border:"1px solid transparent",width:"240px",height:"32px",padding:"0 12px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses"}})})}),Object(l.jsx)(b,{averageCenter:!0,clusterClass:"cluster-videos",gridSize:60,children:e.videos.map((function(e,t){return Object(l.jsx)(S,{marker:e},t)}))})]})},S=function(e){var t=e.marker,n=Object(a.useState)(!1),o=Object(c.a)(n,2),i=o[0],s=o[1],r={url:t.UserPhoto,scaledSize:new google.maps.Size(40,40),origin:new google.maps.Point(0,0)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{icon:r,zIndex:100,onMouseOut:function(){return s(!1)},onMouseOver:function(){return s(!0)},defaultClickable:!0,onClick:function(e){return console.log(e)},defaultDraggable:!0,clickable:!0,labelClass:"marker-label ".concat(i?"active":""),position:{lat:+t.lat,lng:+t.lng},labelAnchor:new google.maps.Point(110,-10),children:Object(l.jsxs)("div",{className:"marker-label-content zF",children:[Object(l.jsx)("div",{className:"info-item",children:Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:t.UserPhoto,alt:"user image"})})}),Object(l.jsxs)("div",{className:"info-item",children:["Category: ",Object(l.jsx)("span",{className:"info-item-value",children:t.category})]}),Object(l.jsxs)("div",{className:"info-item",children:["Likes: ",Object(l.jsx)("span",{className:"info-item-value",children:t.likes})]}),Object(l.jsxs)("div",{className:"info-item",children:["Dislikes: ",Object(l.jsx)("span",{className:"info-item-value",children:t.dislikes})]}),Object(l.jsxs)("div",{className:"info-item",children:["Link:",Object(l.jsx)("a",{href:t.pageUrl,className:"info-item-value link",children:t.pageUrl})]}),Object(l.jsxs)("div",{className:"info-item",children:["Views: ",Object(l.jsx)("span",{className:"info-item-value",children:t.views_count})]}),Object(l.jsxs)("div",{className:"info-item",children:["Created: ",Object(l.jsx)("span",{className:"info-item-value",children:t.createdHumanTiming})]})]})})})},y=(n(369),n(88)),M=n.n(y),N=n(154),z=n(155),P=n.n(z),B=function(){var e=Object(N.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"post",url:"https://api.social-media.in.ua/api/v1/getVideoByLocation.php ",headers:{"Content-Type":"application/json",Authorization:"Bearer a22ade17030f9db1fe315d33f51bbb0d"},data:{zoom:4,center:{lat:-77.03639984,lng:38.89509964},visible_area:{Qa:{i:-180,j:-180},Va:{i:-77.03639984,j:38.89509964}}}},e.next=3,P()(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var Z=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){B().then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data;return o(t.videos)}))}),[]),n?Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(w,{videos:n})}):""};i.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(Z,{})}),document.getElementById("root"))}},[[391,1,2]]]);
//# sourceMappingURL=main.6cb4ee2b.chunk.js.map