import{_,o as e,c as i,a as t,F as r,d,e as p,n as u,t as a,f as g}from"./index-2dee6107.js";const f={name:"Nutrition",data(){return{isVisible:!1,nutritionGuide:[{title:"日常训练期营养",timing:"常规训练期间",color:"#3498db",foods:[{name:"全谷物",image:"/images/nutrition/grains.jpg",benefit:"提供持久能量，富含碳水化合物和膳食纤维"},{name:"瘦肉蛋白",image:"/images/nutrition/protein.jpg",benefit:"促进肌肉修复和生长"}],tips:["保持充足的水分摄入","合理分配三餐时间","注意营养均衡"],mealPlan:[{time:"早餐",content:"全麦面包 + 鸡蛋 + 牛奶 + 水果"},{time:"午餐",content:"糙米饭 + 鸡胸肉 + 西兰花 + 胡萝卜"}]},{title:"赛前营养补充",timing:"比赛前2-3小时",color:"#2ecc71",foods:[{name:"香蕉",image:"/images/nutrition/banana.jpg",benefit:"提供快速能量，补充钾元素"},{name:"能量棒",image:"/images/nutrition/energybar.jpg",benefit:"便携易消化的能量来源"}],tips:["避免高脂肪食物","选择容易消化的食物","控制食物量"]},{title:"恢复期营养",timing:"训练/比赛后",color:"#e74c3c",foods:[{name:"蛋白质奶昔",image:"/images/nutrition/protein-shake.jpg",benefit:"快速补充蛋白质，促进肌肉恢复"},{name:"水果",image:"/images/nutrition/fruits.jpg",benefit:"补充维生素和抗氧化物质"}],tips:["30分钟内补充碳水和蛋白","注意补充流失的电解质","适量补充维生素C"]}]}}},v={class:"nutrition"},h={class:"container"},b={class:"nutrition-grid"},k={class:"timing"},y={class:"card-content"},j={class:"recommendations"},N={class:"food-grid"},C=["src","alt"],V={class:"food-info"},x={class:"tips"},B={key:0,class:"meal-plan"},P={class:"meal-items"},$={class:"meal-time"},z={class:"meal-content"};function D(F,s,G,S,m,E){return e(),i("div",v,[t("div",h,[s[3]||(s[3]=t("h1",{class:"page-title"},"营养指导",-1)),t("div",b,[(e(!0),i(r,null,d(m.nutritionGuide,(o,c)=>(e(),i("div",{key:c,class:p(["nutrition-card",{visible:m.isVisible}]),style:u({animationDelay:`${c*.1}s`})},[t("div",{class:"card-header",style:u({backgroundColor:o.color})},[t("h2",null,a(o.title),1),t("span",k,a(o.timing),1)],4),t("div",y,[t("div",j,[s[0]||(s[0]=t("h3",null,"推荐食物",-1)),t("div",N,[(e(!0),i(r,null,d(o.foods,(n,l)=>(e(),i("div",{key:l,class:"food-item"},[t("img",{src:n.image,alt:n.name},null,8,C),t("div",V,[t("h4",null,a(n.name),1),t("p",null,a(n.benefit),1)])]))),128))])]),t("div",x,[s[1]||(s[1]=t("h3",null,"注意事项",-1)),t("ul",null,[(e(!0),i(r,null,d(o.tips,(n,l)=>(e(),i("li",{key:l},a(n),1))),128))])]),o.mealPlan?(e(),i("div",B,[s[2]||(s[2]=t("h3",null,"示例食谱",-1)),t("div",P,[(e(!0),i(r,null,d(o.mealPlan,(n,l)=>(e(),i("div",{key:l,class:"meal-item"},[t("span",$,a(n.time),1),t("p",z,a(n.content),1)]))),128))])])):g("",!0)])],6))),128))])])])}const L=_(f,[["render",D],["__scopeId","data-v-67ad6e7d"]]);export{L as default};
