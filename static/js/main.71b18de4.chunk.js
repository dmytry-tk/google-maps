(this["webpackJsonpgoogle-maps"]=this["webpackJsonpgoogle-maps"]||[]).push([[0],{367:function(e,t,n){},389:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(32),i=n.n(o),s=n(157),r=n(25),c=n(158),l=n(1),u=n(61),d=u.compose,j=u.withProps,m=u.withState,h=u.withHandlers,b=u.lifecycle,g=n(165).MarkerClusterer,p=n(323),f=p.withScriptjs,v=p.withGoogleMap,x=p.GoogleMap,O=n(364).MarkerWithLabel,w=n(366).StandaloneSearchBox,k=d(j({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-gUZ12AVTL5DncTX_ilJAMhwCiocVvjg&v=3.exp&language=en&libraries=geometry,drawing,places",loadingElement:Object(l.jsx)("div",{style:{height:"100%"}}),containerElement:Object(l.jsx)("div",{style:{height:"100vh"}}),mapElement:Object(l.jsx)("div",{style:{height:"100%"}})}),m("zoom","onZoomChange",4),h((function(){var e={map:void 0};return{onMapMounted:function(){return function(t){e.map=t}},onZoomChanged:function(e){e.onZoomChange;return function(){}}}})),b({componentWillMount:function(){var e=this,t={};this.setState({places:[],onSearchBoxMounted:function(e){t.searchBox=e},onPlacesChanged:function(){var n=t.searchBox.getPlaces();e.setState({places:n})}})}}),f,v)((function(e){return Object(l.jsx)(S,Object(c.a)({},e))})),S=function(e){var t=Object(a.useState)({lat:49.98754883,lng:36.36507797}),n=Object(r.a)(t,2),o=n[0],i=n[1],s=Object(a.useRef)({getPlaces:function(){}}),c=Object(a.useState)({}),u=Object(r.a)(c,2),d=u[0],j=u[1],m=e.fetchVideos,h=Object(a.useState)(null),b=Object(r.a)(h,2),p=b[0],f=b[1],v=function(){var e=d.getCenter().lat(),t=d.getCenter().lng();return{zoom:d.getZoom(),center:{lat:e,lng:t},visible_area:d.getBounds()}};return Object(l.jsxs)(x,{defaultCenter:{lat:-33.91075134,lng:151.19416809},center:o,zoom:e.zoom,onDragEnd:function(){return m(v())},options:{minZoom:2,maxZoom:40},ref:j,onZoomChanged:function(){var e=d.getZoom();p&&p===e||(m(v()),f(e))},children:[Object(l.jsx)("div",{"data-standalone-searchbox":"",children:Object(l.jsx)(w,{ref:function(t){e.onSearchBoxMounted(t),s.current=t},bounds:e.bounds,onPlacesChanged:function(){var e=s.current.getPlaces()[0].geometry.location.lat(),t=s.current.getPlaces()[0].geometry.location.lng();m(v()),i({lat:e,lng:t})},children:Object(l.jsx)("input",{type:"text",placeholder:"Enter your search term",style:{boxSizing:"border-box",position:"fixed",zIndex:"100",top:"0",left:"50%",margin:"10px",transform:"translateX(-50%)",border:"1px solid transparent",width:"240px",height:"32px",padding:"0 12px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses"}})})}),Object(l.jsx)(g,{averageCenter:!0,clusterClass:"cluster-videos",gridSize:100,children:e.videos.map((function(e,t){return Object(l.jsx)(C,{marker:e},t)}))})]})},C=function(e){var t=e.marker,n=Object(a.useState)(!1),o=Object(r.a)(n,2),i=o[0],s=o[1],c={url:t.UserPhoto,scaledSize:new google.maps.Size(40,40),origin:new google.maps.Point(0,0)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{icon:c,zIndex:100,onMouseOut:function(){return s(!1)},onMouseOver:function(){return s(!0)},onClick:function(e){var t,n,a,o,i;(null===e||void 0===e||null===(t=e.target)||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.href)&&window.open(null===e||void 0===e||null===(a=e.target)||void 0===a||null===(o=a.attributes)||void 0===o||null===(i=o.href)||void 0===i?void 0:i.value,"_blank")},defaultClickable:!0,defaultDraggable:!0,clickable:!0,labelClass:"marker-label ".concat(i?"active":""),position:{lat:+t.lat,lng:+t.lng},labelAnchor:new google.maps.Point(110,-10),children:Object(l.jsxs)("div",{className:"marker-label-content zF",children:[Object(l.jsx)("div",{className:"info-item",children:Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:t.UserPhoto,alt:"user image"})})}),Object(l.jsxs)("div",{className:"info-item",children:["Category: ",Object(l.jsx)("span",{className:"info-item-value",children:t.category})]}),Object(l.jsxs)("div",{className:"info-item",children:["Likes: ",Object(l.jsx)("span",{className:"info-item-value",children:t.likes})]}),Object(l.jsxs)("div",{className:"info-item",children:["Dislikes: ",Object(l.jsx)("span",{className:"info-item-value",children:t.dislikes})]}),Object(l.jsxs)("div",{className:"info-item",children:["Link:",Object(l.jsx)("span",{href:t.pageUrl,className:"info-item-value link",children:"Open Video"})]}),Object(l.jsxs)("div",{className:"info-item",children:["Views: ",Object(l.jsx)("span",{className:"info-item-value",children:t.views_count})]}),Object(l.jsxs)("div",{className:"info-item",children:["Created: ",Object(l.jsx)("span",{className:"info-item-value",children:t.createdHumanTiming})]})]})})})},y=(n(367),n(87)),N=n.n(y),z=n(154),M=n(155),P=n.n(M),B=function(){var e=Object(z.a)(N.a.mark((function e(){var t,n,a,o=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:Z,n={method:"post",url:"https://api.social-media.in.ua/api/v1/getVideoByLocation.php ",headers:{"Content-Type":"application/json",Authorization:"Bearer a22ade17030f9db1fe315d33f51bbb0d"},data:t},e.next=4,P()(n);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z={zoom:4,center:{lat:-77.03639984,lng:38.89509964},visible_area:{east:151.38488387979493,north:-33.80019965154349,south:-34.046054863759636,west:151.01066207803711}};var A=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){i()}),[]);var i=function(e){B(e).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data;return o(t.videos)}))};return n?Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(k,{videos:n,fetchVideos:i})}):""};i.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[389,1,2]]]);
//# sourceMappingURL=main.71b18de4.chunk.js.map