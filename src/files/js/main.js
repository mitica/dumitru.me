var Cookie={set:function(n,t,i,r,u,f){var e=new Date;i&&(e=new Date,e.setTime(e.getTime()+i));document.cookie=n+"="+encodeURIComponent(t)+(i?";expires="+e.toGMTString():"")+";path="+(r?r:"/")+(u?";domain="+u:"")+(f?";secure":"")},get:function(n){var i=new RegExp("(^|;)[ ]*"+n+"=([^;]*)"),t=i.exec(document.cookie);return t?decodeURIComponent(t[2]):0}};

var Popup={popup:function(n){if(typeof n!="undefined"&&typeof n.url!="undefined"){n.w=n.w||500;n.h=n.h||400;var t=(window.screen.width-n.w)/2,i=(window.screen.height-n.h)/2,r=window.open(n.url,"name","height="+n.h+",width="+n.w+",left="+t+",top="+i);window.focus&&r.focus()}}};


+function(n){function u(n){Popup.popup({url:n.url});var r="SD-"+n.cid,i="_"+n.servicename,t=Cookie.get(r);t&&t.toString().indexOf(i)>-1||(e({appname:n.appname,identifier:n.identifier,servicename:n.servicename,itemname:n.itemname}),t=t?t+i:i,Cookie.set(r,t,2592e6))}function f(t,i){n.get("http://sharedata.oursvc.net/api/getitemdata",t,function(n){i&&i(n)})}function e(t,i){n.post("http://sharedata.oursvc.net/api/shareitem",t,function(n){i&&i(n)})}var i=n(".our-sharedata"),t,r;i.length!=0&&(t=[],r=null,n.each(i,function(f){var e=n(i[f]),o,s,h,c;r=r||e.attr("data-appname");o=e.attr("data-identifier");s=!1;for(h in t)if(t[h]==o){s=!0;break}s||t.push(o);c=n(".our-share-item",e);c.on("click",function(){var t=n(this);u({appname:r,identifier:o,servicename:t.attr("data-service"),itemname:e.attr("data-title"),cid:e.attr("data-cid"),url:t.attr("href")})})}),n.each(t,function(u){var e=t[u];f({appname:r,identifier:e},function(t){var r,u;if(t){r=0;for(u in t)r+=t[u];r!=0&&n.each(i,function(u){var o=n(i[u]),h,s,f;if(o.attr("data-identifier")==e)if(h=o.attr("data-view"),h=="sum")f=n(".share-count",o),f.text(r),f.addClass("fade"),f.removeClass("hidden"),f.addClass("in");else for(s in t)f=n(".our-share-item[data-service='"+s+"'] .share-count",o),f.text(t[s]),f.addClass("fade"),f.removeClass("hidden"),f.addClass("in")})}})}))}(jQuery,Popup,Cookie);
