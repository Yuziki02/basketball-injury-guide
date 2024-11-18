import{_ as g,o as t,c as s,a as e,n as I,r as j,w,b as f,F as v,d as m,e as y,t as r,f as C,g as M,h as x,i as V}from"./index-2dee6107.js";const D="/basketball-injury-guide/assets/hero-bg-afd9910f.jpg";const L={name:"Hero",data(){return{backgroundImage:D}},methods:{scrollTo(c){document.querySelector(c).scrollIntoView({behavior:"smooth"})}}},U={class:"hero",id:"home"},F={class:"hero-content"},O={class:"main-cta fade-in-delay-2"};function H(c,i,h,k,o,l){return t(),s("header",U,[e("div",F,[i[2]||(i[2]=e("h1",{class:"fade-in"},"篮球运动员健康全攻略",-1)),i[3]||(i[3]=e("p",{class:"fade-in-delay"},"保护自己，强势回归赛场",-1)),e("div",O,[e("button",{class:"cta-btn primary",onClick:i[0]||(i[0]=p=>l.scrollTo("#prevention"))}," 了解如何预防 "),e("button",{class:"cta-btn secondary",onClick:i[1]||(i[1]=p=>l.scrollTo("#recovery"))}," 康复步骤详情 ")])]),e("div",{class:"hero-background",style:I({backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${o.backgroundImage})`})},null,4)])}const P=g(L,[["render",H],["__scopeId","data-v-59a2471e"]]);const T=new URL("/basketball-injury-guide/assets/warm-up-5d8bc911.jpg",self.location).href,B=new URL("/basketball-injury-guide/assets/stretching-14b71bd5.jpg",self.location).href,N=new URL("/basketball-injury-guide/assets/equipment-fbf013b0.jpg",self.location).href,z={name:"PreventionSection",data(){return{isVisible:!1,preventionItems:[{title:"科学热身",image:T,points:["赛前15-20分钟充分热身","从慢跑开始，逐渐提升强度","慢跑热身（5-10分钟）","动态拉伸（重点是下肢）","专项热身动作（投篮、传球）","注意循序渐进，不要急于进入高强度运动"],hasVideo:!0},{title:"正确的动作规范",image:B,points:["膝盖微曲缓冲","双脚平稳着地","避免单脚硬着地","保持重心稳定","核心收紧","避免急转急停"],hasVideo:!1},{title:"防护装备使用",image:N,points:["专业篮球鞋（提供足够支撑）","护踝（预防扭伤）","护膝（保护膝关节）","护指（预防手指伤害）","定期更换磨损的装备","选择合适的尺寸"],hasVideo:!1}]}},methods:{onVisibilityChange(c){c&&(this.isVisible=!0)},showVideo(c){alert("视频播放功能开发中...")}}},A={id:"prevention",class:"prevention-section"},G={class:"container"},J={class:"section-title"},K={class:"prevention-grid"},W={class:"item-image"},X=["src","alt"],Y={class:"content"},Z=["onClick"];function ee(c,i,h,k,o,l){const p=j("observe-visibility");return t(),s("section",A,[e("div",G,[w((t(),s("h2",J,i[0]||(i[0]=[f(" 预防伤病的方法 ")]))),[[p,l.onVisibilityChange]]),e("div",K,[(t(!0),s(v,null,m(o.preventionItems,(n,d)=>(t(),s("div",{key:d,class:y(["prevention-item",{visible:o.isVisible}]),style:I({animationDelay:`${d*.2}s`})},[e("div",W,[e("img",{src:n.image,alt:n.title},null,8,X)]),e("h3",null,r(n.title),1),e("div",Y,[e("ul",null,[(t(!0),s(v,null,m(n.points,(a,u)=>(t(),s("li",{key:u},r(a),1))),128))]),n.hasVideo?(t(),s("button",{key:0,class:"video-btn",onClick:a=>l.showVideo(n)}," 观看示范视频 ",8,Z)):C("",!0)])],6))),128))])])])}const te=g(z,[["render",ee],["__scopeId","data-v-32dfbcc4"]]);const se=new URL("/basketball-injury-guide/assets/ankle-0c935a69.jpg",self.location).href,ie=new URL("/basketball-injury-guide/assets/knee-8e62fc18.jpg",self.location).href,ne=new URL("/basketball-injury-guide/assets/finger-c694468a.jpg",self.location).href,oe={name:"InjuriesSection",data(){return{isVisible:!1,injuries:[{title:"踝关节扭伤",icon:se,description:"最常见的篮球伤病之一，通常由落地不当或急停转向造成",symptoms:["关节肿胀","局部疼痛","活动受限"]},{title:"膝关节损伤",icon:ie,description:"包括韧带拉伤、半月板损伤等，多发生在跳跃落地时",symptoms:["膝关节疼痛","不稳定感","弯曲受限"]},{title:"手指损伤",icon:ne,description:"接球、抢球时容易发生的指关节扭伤或脱位",symptoms:["指关节肿胀","活动受限","握力下降"]}]}},methods:{onVisibilityChange(c){c&&(this.isVisible=!0)},showDetails(c){}}},ce={id:"injuries",class:"injuries-section"},le={class:"container"},re={class:"section-title"},ae={class:"injury-cards"},de={class:"card-icon"},_e=["src","alt"],ue={class:"symptoms"},pe=["onClick"];function ve(c,i,h,k,o,l){const p=j("observe-visibility");return t(),s("section",ce,[e("div",le,[w((t(),s("h2",re,i[0]||(i[0]=[f(" 常见篮球运动伤病 ")]))),[[p,l.onVisibilityChange]]),e("div",ae,[(t(!0),s(v,null,m(o.injuries,(n,d)=>(t(),s("div",{key:d,class:y(["injury-card",{visible:o.isVisible}]),style:I({animationDelay:`${d*.2}s`})},[e("div",de,[e("img",{src:n.icon,alt:n.title},null,8,_e)]),e("h3",null,r(n.title),1),e("p",null,r(n.description),1),e("ul",ue,[(t(!0),s(v,null,m(n.symptoms,(a,u)=>(t(),s("li",{key:u},r(a),1))),128))]),e("button",{class:"learn-more",onClick:a=>l.showDetails(n)}," 了解更多 ",8,pe)],6))),128))])])])}const me=g(oe,[["render",ve],["__scopeId","data-v-8e404a71"]]);const he={name:"RecoverySection",data(){return{isVisible:!1,recoveryPhases:[{title:"急性期处理 (0-48小时)",type:"rice",items:[{title:"R - Rest（休息）",description:"立即停止运动，避免继续受伤"},{title:"I - Ice（冰敷）",description:"每次20分钟，每2-3小时一次"},{title:"C - Compression（压迫）",description:"使用弹性绷带适度包扎"},{title:"E - Elevation（抬高）",description:"将受伤部位抬高过心脏"}]},{title:"恢复期 (3-7天)",type:"list",items:[{text:"继续RICE原则"},{text:"开始轻微活动度训练"},{text:"可以进行：",subItems:["轻度拉伸","等长收缩训练","关节活动度练习"]}]},{title:"功能恢复期 (1-4周)",type:"list",items:[{text:"渐进性力量训练"},{text:"平衡训练"},{text:"专项动作训练"},{text:"注意事项：",subItems:["循序渐进，不可操之过急","有疼痛立即停止","建议在专业指导下进行"]}]},{title:"运动恢复期 (4周以后)",type:"list",items:[{text:"返回训练计划：",subItems:["先进行基础体能训练","逐步加入篮球专项训练","最后恢复对抗性训练"]},{text:"心理调适"},{text:"预防再次受伤"}]}]}},methods:{onVisibilityChange(c){c&&(this.isVisible=!0)}}},be={id:"recovery",class:"recovery-section"},ye={class:"container"},fe={class:"section-title"},ge={class:"timeline"},ke={class:"timeline-content"},$e={key:0,class:"rice-principle"},xe={key:1},Ve={key:0};function Ie(c,i,h,k,o,l){const p=j("observe-visibility");return t(),s("section",be,[e("div",ye,[w((t(),s("h2",fe,i[0]||(i[0]=[f(" 受伤后的康复步骤 ")]))),[[p,l.onVisibilityChange]]),e("div",ge,[(t(!0),s(v,null,m(o.recoveryPhases,(n,d)=>(t(),s("div",{key:d,class:y(["timeline-item",{visible:o.isVisible}]),style:I({animationDelay:`${d*.2}s`})},[e("div",ke,[e("h3",null,r(n.title),1),n.type==="rice"?(t(),s("div",$e,[(t(!0),s(v,null,m(n.items,(a,u)=>(t(),s("div",{key:u,class:"rice-item"},[e("h4",null,r(a.title),1),e("p",null,r(a.description),1)]))),128))])):(t(),s("ul",xe,[(t(!0),s(v,null,m(n.items,(a,u)=>(t(),s("li",{key:u},[f(r(a.text)+" ",1),a.subItems?(t(),s("ul",Ve,[(t(!0),s(v,null,m(a.subItems,($,q)=>(t(),s("li",{key:q},r($),1))),128))])):C("",!0)]))),128))]))])],6))),128))])])])}const Ce=g(he,[["render",Ie],["__scopeId","data-v-35ffd4be"]]);const je=new URL("/basketball-injury-guide/assets/doctor1-43cd26f5.jpg",self.location).href,we=new URL("/basketball-injury-guide/assets/doctor2-686074d2.jpg",self.location).href,qe=new URL("/basketball-injury-guide/assets/doctor3-1bcd9875.jpg",self.location).href,Ee={name:"ExpertsSection",data(){return{isVisible:!1,experts:[{name:"刘浩洋医生",title:"运动医学专家",image:je,description:"从事运动医学20年，专注于篮球运动损伤的预防与治疗",specialties:["关节损伤","运动康复","损伤预防"],contact:"QQ：3198298776"},{name:"李世俊医生",title:"康复理疗专家",image:we,description:"拥有丰富的运动员康复经验，曾服务��支职业篮球队",specialties:["物理治疗","功能训练","康复计划"],contact:"QQ：2925766038"},{name:"王医生",title:"运动训练师",image:qe,description:"专注于运动损伤预防和体能训练，帮助运动员提高竞技水平",specialties:["体能训练","损伤预防","运动表现"]}],showModal:!1,selectedExpert:null}},methods:{onVisibilityChange(c){c&&(this.isVisible=!0)},contactExpert(c){this.selectedExpert=c,this.showModal=!0},closeModal(){this.showModal=!1,this.selectedExpert=null},copyQQ(c){navigator.clipboard.writeText(c).then(()=>{alert("QQ号已复制到剪贴板！")}).catch(i=>{console.error("复制失败:",i)})}}},Se={id:"experts",class:"experts-section"},Re={class:"container"},Qe={class:"section-title"},Me={class:"experts-grid"},De={class:"expert-image"},Le=["src","alt"],Ue={class:"expert-info"},Fe={class:"title"},Oe={class:"description"},He={class:"expert-specialties"},Pe=["onClick"],Te={class:"modal-header"},Be={class:"modal-body"},Ne={class:"expert-avatar"},ze=["src","alt"],Ae={class:"contact-info"},Ge={class:"description"},Je={class:"specialties"},Ke={key:0,class:"contact-method"},We={class:"qq-info"},Xe={class:"contact-value"},Ye={key:1,class:"contact-note"},Ze={class:"modal-footer"};function et(c,i,h,k,o,l){var n,d,a,u,$,q,E,S;const p=j("observe-visibility");return t(),s("section",Se,[e("div",Re,[w((t(),s("h2",Qe,i[5]||(i[5]=[f(" 专业指导 ")]))),[[p,l.onVisibilityChange]]),e("div",Me,[(t(!0),s(v,null,m(o.experts,(_,b)=>(t(),s("div",{key:b,class:y(["expert-card",{visible:o.isVisible}]),style:I({animationDelay:`${b*.2}s`})},[e("div",De,[e("img",{src:_.image,alt:_.name},null,8,Le)]),e("div",Ue,[e("h3",null,r(_.name),1),e("p",Fe,r(_.title),1),e("p",Oe,r(_.description),1),e("div",He,[(t(!0),s(v,null,m(_.specialties,(R,Q)=>(t(),s("span",{key:Q},r(R),1))),128))]),e("button",{class:"contact-btn",onClick:R=>l.contactExpert(_)}," 预约咨询 ",8,Pe)])],6))),128))])]),o.showModal?(t(),s("div",{key:0,class:"modal",onClick:i[4]||(i[4]=(..._)=>l.closeModal&&l.closeModal(..._))},[e("div",{class:"modal-content",onClick:i[3]||(i[3]=M(()=>{},["stop"]))},[e("div",Te,[e("h3",null,r((n=o.selectedExpert)==null?void 0:n.name),1),e("button",{class:"close-btn",onClick:i[0]||(i[0]=(..._)=>l.closeModal&&l.closeModal(..._))},"×")]),e("div",Be,[e("div",Ne,[e("img",{src:(d=o.selectedExpert)==null?void 0:d.image,alt:(a=o.selectedExpert)==null?void 0:a.name},null,8,ze)]),e("div",Ae,[e("h4",null,r((u=o.selectedExpert)==null?void 0:u.title),1),e("p",Ge,r(($=o.selectedExpert)==null?void 0:$.description),1),e("p",Je,[(t(!0),s(v,null,m((q=o.selectedExpert)==null?void 0:q.specialties,(_,b)=>(t(),s("span",{key:b,class:"specialty-tag"},r(_),1))),128))]),(E=o.selectedExpert)!=null&&E.contact?(t(),s("div",Ke,[e("div",We,[i[6]||(i[6]=e("i",{class:"qq-icon"},"QQ",-1)),e("span",Xe,r((S=o.selectedExpert)==null?void 0:S.contact.split("：")[1]),1)]),e("button",{class:"copy-btn",onClick:i[1]||(i[1]=_=>{var b;return l.copyQQ((b=o.selectedExpert)==null?void 0:b.contact.split("：")[1])})}," 复制QQ号 ")])):(t(),s("p",Ye," 即将为您预约咨询服务，请保持电话畅通。 "))])]),e("div",Ze,[e("button",{class:"confirm-btn",onClick:i[2]||(i[2]=(..._)=>l.closeModal&&l.closeModal(..._))},"确认")])])])):C("",!0)])}const tt=g(Ee,[["render",et],["__scopeId","data-v-514a8786"]]);const st={name:"FaqSection",data(){return{isVisible:!1,faqs:[{question:"多久能康复？",description:"康复时间因伤势严重程度而异，一般遵循以下标准：",list:[{title:"轻度扭伤",content:"1-2周"},{title:"中度扭伤",content:"3-6周"},{title:"重度扭伤",content:"8-12周或更长"}],isOpen:!1},{question:"什么时候可以重返球场？",description:"需要满足以下条件：完全无疼痛、关节活动度恢复正常、肌力恢复到健侧的90%以上、平衡能力测试通过。建议在专业医生评估后再决定。",isOpen:!1},{question:"如何预防再次受伤？",list:[{title:"热身",content:"确保充分的赛前热身"},{title:"装备",content:"使用合适的防护装备"},{title:"技术",content:"保持正确的运动姿势"},{title:"强化",content:"定期进行核心和下肢力量训练"}],isOpen:!1}]}},methods:{onVisibilityChange(c){c&&(this.isVisible=!0)},toggleFaq(c){this.faqs=this.faqs.map((i,h)=>({...i,isOpen:h===c?!i.isOpen:!1}))}}},it={id:"faq",class:"faq-section"},nt={class:"container"},ot={class:"section-title"},ct={class:"faq-grid"},lt=["onClick"],rt={class:"answer-content"},at={key:0},dt={key:1};function _t(c,i,h,k,o,l){const p=j("observe-visibility");return t(),s("section",it,[e("div",nt,[w((t(),s("h2",ot,i[0]||(i[0]=[f(" 常见问题 ")]))),[[p,l.onVisibilityChange]]),e("div",ct,[(t(!0),s(v,null,m(o.faqs,(n,d)=>(t(),s("div",{key:d,class:y(["faq-item",{visible:o.isVisible}]),style:I({animationDelay:`${d*.1}s`}),onClick:a=>l.toggleFaq(d)},[e("div",{class:y(["faq-question",{active:n.isOpen}])},[e("span",null,r(n.question),1),i[1]||(i[1]=e("i",{class:"arrow"},null,-1))],2),e("div",{class:y(["faq-answer",{open:n.isOpen}])},[e("div",rt,[n.description?(t(),s("p",at,r(n.description),1)):C("",!0),n.list?(t(),s("ul",dt,[(t(!0),s(v,null,m(n.list,(a,u)=>(t(),s("li",{key:u},[e("strong",null,r(a.title)+"：",1),f(" "+r(a.content),1)]))),128))])):C("",!0)])],2)],14,lt))),128))])])])}const ut=g(st,[["render",_t],["__scopeId","data-v-d09d6bf8"]]);const pt={name:"Home",components:{Hero:P,PreventionSection:te,InjuriesSection:me,RecoverySection:Ce,ExpertsSection:tt,FaqSection:ut}},vt={class:"home"},mt={class:"content-sections"};function ht(c,i,h,k,o,l){const p=x("hero"),n=x("prevention-section"),d=x("injuries-section"),a=x("recovery-section"),u=x("experts-section"),$=x("faq-section");return t(),s("div",vt,[V(p),e("div",mt,[V(n),V(d),V(a),V(u),V($)])])}const yt=g(pt,[["render",ht],["__scopeId","data-v-15caf9d1"]]);export{yt as default};