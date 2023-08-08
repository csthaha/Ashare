import{k as M,d as O,l as T,r as I,m as R,n as H,q as K,u as p,s as F,x as D,y as L,z as m,A as g,B as J,C as q,D as $,E as G,G as Q,o as _,h as A,w as d,c as E,H as W,t as k,i as S,f as y,I as X,J as Z,K as x,L as ee,a as b,P as te,b as w,e as oe,v as ne,F as Y,g as ae,p as se,j as le,_ as re}from"./index-30bb2794.js";import{E as pe,a as ie,j as ce,f as j}from"./index-a5335000.js";import{h as z,_ as de,b as ue,E as fe}from"./index-00eeb352.js";const me=O({inheritAttrs:!1});function be(t,s,o,n,r,i){return T(t.$slots,"default")}var _e=M(me,[["render",be],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const ve=O({name:"ElCollectionItem",inheritAttrs:!1});function he(t,s,o,n,r,i){return T(t.$slots,"default")}var ye=M(ve,[["render",he],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const ge="data-el-collection-item",ke=t=>{const s=`El${t}Collection`,o=`${s}Item`,n=Symbol(s),r=Symbol(o),i={..._e,name:s,setup(){const v=I(null),h=new Map;R(n,{itemMap:h,getItems:()=>{const f=p(v);if(!f)return[];const l=Array.from(f.querySelectorAll(`[${ge}]`));return[...h.values()].sort((C,N)=>l.indexOf(C.ref)-l.indexOf(N.ref))},collectionRef:v})}},u={...ye,name:o,setup(v,{attrs:h}){const c=I(null),f=H(n,void 0);R(r,{collectionItemRef:c}),K(()=>{const l=p(c);l&&f.itemMap.set(l,{ref:l,...h})}),F(()=>{const l=p(c);f.itemMap.delete(l)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:r,ElCollection:i,ElCollectionItem:u}},B=D({trigger:L.trigger,effect:{...m.effect,default:"light"},type:{type:g(String)},placement:{type:g(String),default:"bottom"},popperOptions:{type:g(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:g([Number,String]),default:0},maxHeight:{type:g([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:g(Object)},teleported:m.teleported});D({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:J}});D({onKeydown:{type:g(Function)}});ke("Dropdown");const Ce=D({trigger:L.trigger,placement:B.placement,disabled:L.disabled,visible:m.visible,transition:m.transition,popperOptions:B.popperOptions,tabindex:B.tabindex,content:m.content,popperStyle:m.popperStyle,popperClass:m.popperClass,enterable:{...m.enterable,default:!0},effect:{...m.effect,default:"light"},teleported:m.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),Ee={"update:visible":t=>q(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},we="onUpdate:visible",Se=O({name:"ElPopover"}),Ie=O({...Se,props:Ce,emits:Ee,setup(t,{expose:s,emit:o}){const n=t,r=$(()=>n[we]),i=G("popover"),u=I(),v=$(()=>{var e;return(e=p(u))==null?void 0:e.popperRef}),h=$(()=>[{width:Q(n.width)},n.popperStyle]),c=$(()=>[i.b(),n.popperClass,{[i.m("plain")]:!!n.content}]),f=$(()=>n.transition===`${i.namespace.value}-fade-in-linear`),l=()=>{var e;(e=u.value)==null||e.hide()},P=()=>{o("before-enter")},C=()=>{o("before-leave")},N=()=>{o("after-enter")},a=()=>{o("update:visible",!1),o("after-leave")};return s({popperRef:v,hide:l}),(e,V)=>(_(),A(p(Z),X({ref_key:"tooltipRef",ref:u},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":p(c),"popper-style":p(h),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":p(f),"onUpdate:visible":p(r),onBeforeShow:P,onBeforeHide:C,onShow:N,onHide:a}),{content:d(()=>[e.title?(_(),E("div",{key:0,class:W(p(i).e("title")),role:"title"},k(e.title),3)):S("v-if",!0),T(e.$slots,"default",{},()=>[y(k(e.content),1)])]),default:d(()=>[e.$slots.reference?T(e.$slots,"reference",{key:0}):S("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Ne=M(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const U=(t,s)=>{const o=s.arg||s.value,n=o==null?void 0:o.popperRef;n&&(n.triggerRef=t)};var $e={mounted(t,s){U(t,s)},updated(t,s){U(t,s)}};const Oe="popover",Pe=x($e,Oe),Te=ee(Ne,{directive:Pe});const De=t=>(se("data-v-79dad017"),t=t(),le(),t),Be={class:"strong-content"},Le={class:"strong-head"},Ae={class:"head-txt"},Me={style:{color:"red"}},Re=De(()=>w("span",null,"谋定而后动, 动则果断、三分之一仓起。",-1)),Ye={class:"strong-data"},je={key:1},ze={key:2},Ue={key:3},Ve=O({__name:"StrongList",setup(t){const s=I("强势股列表");let o=I([z(new Date).format("YYYY-MM-DD"),z(new Date).format("YYYY-MM-DD")]);var n=function(c){o.value=c};const r={name:{key:"n",label:"名称"},reason:{key:"cc",label:"入选理由"},newHigh:{key:"nh",label:"是否新高"},zdp:{key:"zdp",label:"涨跌幅"},hs:{key:"hs",label:"换手率 "},amount:{key:"amount",label:"成交额"},tshare:{key:"tshare",label:"总市值"},hybk:{key:"hybk",label:"所属行业"}},i=["tshare","amount"],u=I([]),v=async function(){const c=await ue({startDate:o.value[0],endDate:o.value[1]}),{data:f}=c;u.value=f};v();const h=()=>{console.log("click")};return(c,f)=>{const l=fe,P=Te,C=ie,N=pe;return _(),E(Y,null,[b(te,{title:s.value},null,8,["title"]),w("main",Be,[w("div",Le,[b(de,{"is-range":!0,onPostDate:p(n)},null,8,["onPostDate"]),b(l,{type:"primary",class:"strong-btn",onClick:v},{default:d(()=>[y("查询")]),_:1}),oe(w("span",Ae,[y(" 共 "),w("span",Me,k(u.value.length),1),y(" 只强势股。 "),Re],512),[[ne,u.value.length]])]),w("div",Ye,[b(N,{data:u.value,style:{width:"100%"},stripe:"",height:"100%"},{default:d(()=>[(_(!0),E(Y,null,ae(Object.keys(r),a=>(_(),A(C,{sortable:a==="lbCount",fixed:a==="name",key:r[a].key,prop:r[a].key,label:r[a].label,width:i.includes(a)?200:120},{default:d(({row:e})=>[a==="name"?(_(),A(l,{key:0,link:"",onClick:V=>p(ce)(e.m,e.code),type:"primary",size:"small"},{default:d(()=>[y(k(e[r[a].key]),1)]),_:2},1032,["onClick"])):S("",!0),i.includes(a)?(_(),E("span",je,k(p(j)(e[r[a].key])),1)):S("",!0),a==="hs"||a==="zdp"?(_(),E("span",ze,k(p(j)(e[r[a].key]))+"% ",1)):S("",!0),a==="reason"?(_(),E("span",Ue,[b(P,{placement:"top-start",title:"入选理由",width:200,trigger:"hover",content:"1: 60日新高；2：近期多次涨停；3：60日新高且近期多次涨停"},{reference:d(()=>[b(l,{text:"",class:"m-2"},{default:d(()=>[y(k(e[r[a].key]),1)]),_:2},1024)]),_:2},1024)])):S("",!0)]),_:2},1032,["sortable","fixed","prop","label","width"]))),128)),b(C,{fixed:"right",label:"操作",width:"120"},{default:d(()=>[b(l,{link:"",type:"primary",size:"small",onClick:h},{default:d(()=>[y("Detail")]),_:1}),b(l,{link:"",type:"primary",size:"small"},{default:d(()=>[y("Edit")]),_:1})]),_:1})]),_:1},8,["data"])])])],64)}}});const Je=re(Ve,[["__scopeId","data-v-79dad017"]]);export{Je as default};