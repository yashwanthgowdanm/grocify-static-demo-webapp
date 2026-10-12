(function(){
"use strict";
/* ---------- catalog ---------- */
// key, name, emoji, category, pack label, [amount, base unit g|ml|pc], price ₹, health score (null = not food), tags, opts
const CATS=["Produce","Dairy & Eggs","Bakery","Grains & Pulses","Meat & Fish","Pantry","Snacks","Beverages","Frozen","Household","Personal care","Other"];
const CAT_EMO={"Produce":"🥬","Dairy & Eggs":"🥛","Bakery":"🍞","Grains & Pulses":"🌾","Meat & Fish":"🐟","Pantry":"🫙","Snacks":"🍪","Beverages":"🧃","Frozen":"🧊","Household":"🧺","Personal care":"🧴","Other":"🛒"};
const CAT_KG={"Produce":.6,"Dairy & Eggs":.6,"Bakery":.4,"Grains & Pulses":1,"Meat & Fish":.5,"Pantry":.5,"Snacks":.2,"Beverages":1,"Frozen":.6,"Household":.8,"Personal care":.3,"Other":.5};
const CAT=[];
function C(k,n,e,c,u,sz,p,s,t,o){o=o||{};CAT.push({k,n,e,c,u,sz,p,s,t,al:o.al||[],diet:o.diet||"vegan",imp:!!o.imp,alt:o.alt||null,sw:o.sw||null,w:o.w!=null?o.w:null,kw:[n.toLowerCase(),k].concat(o.kw||[])});}
C("banana","Bananas","🍌","Produce","1 kg",[1000,"g"],60,9,["fiber"],{w:1,kw:["banana"]});
C("apple","Apples","🍎","Produce","1 kg",[1000,"g"],180,9,["fiber"],{w:1,kw:["apple"]});
C("tomato","Tomatoes","🍅","Produce","1 kg",[1000,"g"],40,9,["vitc"],{w:1,kw:["tomato"]});
C("onion","Onions","🧅","Produce","1 kg",[1000,"g"],35,8,[],{w:1,kw:["onion","pyaz"]});
C("potato","Potatoes","🥔","Produce","1 kg",[1000,"g"],30,6,[],{w:1,kw:["potato","aloo"]});
C("spinach","Spinach","🥬","Produce","250 g",[250,"g"],30,10,["fiber","iron"],{w:.25,kw:["palak","organic spinach"]});
C("kale","Organic kale","🥬","Produce","250 g",[250,"g"],120,10,["fiber","vitk"],{w:.25,kw:["kale"]});
C("carrot","Carrots","🥕","Produce","500 g",[500,"g"],30,9,["fiber"],{w:.5,kw:["carrot","gajar"]});
C("lemon","Lemons","🍋","Produce","4 pcs",[4,"pc"],20,9,["vitc"],{w:.2,kw:["lemon","nimbu"]});
C("garlic","Garlic","🧄","Produce","100 g",[100,"g"],25,9,[],{w:.1});
C("ginger","Ginger","🫚","Produce","100 g",[100,"g"],20,9,[],{w:.1,kw:["adrak"]});
C("peas","Green peas","🫛","Produce","500 g",[500,"g"],60,9,["fiber","protein"],{w:.5,kw:["peas","matar"]});
C("cucumber","Cucumber","🥒","Produce","500 g",[500,"g"],25,9,[],{w:.5});
C("avocado","Avocado","🥑","Produce","1 pc",[1,"pc"],120,9,["fiber","healthyfat"],{w:.2});
C("milk","Milk","🥛","Dairy & Eggs","1 L",[1000,"ml"],56,7,["protein","calcium"],{al:["dairy"],diet:"veg",alt:["Store-brand toned milk",50],w:1.03,kw:["doodh"]});
C("curd","Curd","🥣","Dairy & Eggs","400 g",[400,"g"],45,8,["protein","probiotic"],{al:["dairy"],diet:"veg",w:.4,kw:["yogurt","dahi","yoghurt"]});
C("paneer","Paneer","🧀","Dairy & Eggs","200 g",[200,"g"],90,7,["protein"],{al:["dairy"],diet:"veg",w:.2});
C("butter","Butter","🧈","Dairy & Eggs","100 g",[100,"g"],58,3,["satfat"],{al:["dairy"],diet:"veg",alt:["Store-brand butter",50],w:.1});
C("cheese","Cheese slices","🧀","Dairy & Eggs","200 g",[200,"g"],140,4,["sodium","satfat"],{al:["dairy"],diet:"veg",w:.2,kw:["cheese"]});
C("eggs","Eggs","🥚","Dairy & Eggs","12 pack",[12,"pc"],72,8,["protein"],{al:["egg"],diet:"egg",w:.7,kw:["egg","anda"]});
C("ghee","Ghee","🫙","Dairy & Eggs","500 ml",[500,"ml"],320,4,["satfat"],{al:["dairy"],diet:"veg",w:.5});
C("wwbread","Whole wheat bread","🍞","Bakery","400 g",[400,"g"],45,7,["fiber"],{al:["gluten"],alt:["Store-brand whole wheat bread",35],w:.4,kw:["bread","brown bread","wheat bread"]});
C("whitebread","White bread","🍞","Bakery","400 g",[400,"g"],40,4,["refined"],{al:["gluten"],sw:"wwbread",w:.4,kw:["white bread","sandwich bread"]});
C("pizzabase","Pizza base","🍕","Bakery","2 pcs",[2,"pc"],95,4,["refined"],{al:["gluten"],w:.3,kw:["pizza base"]});
C("rice","Basmati rice","🍚","Grains & Pulses","1 kg",[1000,"g"],120,6,[],{alt:["Store-brand sona masoori rice",75],w:1,kw:["rice","chawal"]});
C("dal","Toor dal","🫘","Grains & Pulses","1 kg",[1000,"g"],160,9,["protein","fiber"],{w:1,kw:["dal","lentils","toor","arhar"]});
C("moong","Moong dal","🫘","Grains & Pulses","500 g",[500,"g"],75,9,["protein","fiber"],{w:.5,kw:["moong"]});
C("chana","Kabuli chana","🫘","Grains & Pulses","1 kg",[1000,"g"],140,9,["protein","fiber"],{w:1,kw:["chickpeas","chole","chana"]});
C("oats","Rolled oats","🥣","Grains & Pulses","1 kg",[1000,"g"],190,9,["fiber"],{w:1,kw:["oats","oatmeal"]});
C("quinoa","Quinoa","🌾","Grains & Pulses","500 g",[500,"g"],260,9,["protein","fiber"],{w:.5});
C("atta","Whole wheat atta","🌾","Grains & Pulses","5 kg",[5000,"g"],260,7,["fiber"],{al:["gluten"],w:5,kw:["atta","flour","wheat flour"]});
C("pasta","Pasta","🍝","Grains & Pulses","500 g",[500,"g"],110,5,[],{al:["gluten"],alt:["Store-brand pasta",95],w:.5,kw:["spaghetti","penne","macaroni"]});
C("poha","Poha","🍚","Grains & Pulses","500 g",[500,"g"],45,7,[],{w:.5,kw:["flattened rice"]});
C("cereal","Breakfast cereal","🥣","Grains & Pulses","475 g",[475,"g"],180,4,["sugar"],{al:["gluten"],sw:"oats",w:.5,kw:["cereal","cornflakes","chocos"]});
C("chicken","Chicken breast","🍗","Meat & Fish","500 g",[500,"g"],220,8,["protein"],{diet:"nonveg",w:.5,kw:["chicken"]});
C("salmon","Salmon fillet","🐟","Meat & Fish","250 g",[250,"g"],450,9,["protein","omega3"],{diet:"nonveg",al:["fish"],w:.25,kw:["salmon"]});
C("fish","Rohu fish","🐟","Meat & Fish","500 g",[500,"g"],180,8,["protein","omega3"],{diet:"nonveg",al:["fish"],w:.5,kw:["fish","rohu"]});
C("almonds","Almonds","🌰","Pantry","250 g",[250,"g"],280,9,["protein","healthyfat"],{al:["nuts"],w:.25,kw:["almond","badam"]});
C("peanuts","Peanuts","🥜","Pantry","500 g",[500,"g"],90,8,["protein"],{al:["nuts"],w:.5,kw:["peanut","moongphali"]});
C("pbutter","Peanut butter","🥜","Pantry","350 g",[350,"g"],220,6,["protein"],{al:["nuts"],w:.35,kw:["peanut butter"]});
C("oliveoil","Olive oil","🫒","Pantry","1 L",[1000,"ml"],750,7,["healthyfat"],{w:.95,kw:["olive oil"]});
C("oil","Sunflower oil","🛢️","Pantry","1 L",[1000,"ml"],160,5,[],{alt:["Store-brand sunflower oil",140],w:.95,kw:["cooking oil","oil"]});
C("sugar","Sugar","🍬","Pantry","1 kg",[1000,"g"],48,2,["sugar"],{w:1,kw:["cheeni"]});
C("salt","Salt","🧂","Pantry","1 kg",[1000,"g"],28,5,["sodium"],{w:1});
C("tea","Tea leaves","🍵","Pantry","250 g",[250,"g"],140,7,[],{w:.25,kw:["tea","chai patti"]});
C("coffee","Coffee","☕","Pantry","100 g",[100,"g"],300,6,[],{w:.1});
C("honey","Honey","🍯","Pantry","250 g",[250,"g"],150,5,["sugar"],{diet:"veg",w:.3});
C("masala","Garam masala","🌶️","Pantry","100 g",[100,"g"],70,8,[],{w:.1,kw:["masala","spices"]});
C("ketchup","Tomato ketchup","🥫","Pantry","500 g",[500,"g"],110,3,["sugar","sodium"],{w:.55,kw:["ketchup","sauce"]});
C("makhana","Roasted makhana","🍿","Snacks","100 g",[100,"g"],120,8,["protein"],{w:.1,kw:["fox nuts","makhana"]});
C("chips","Potato chips","🥔","Snacks","90 g",[90,"g"],30,2,["sodium","satfat"],{imp:true,sw:"makhana",w:.1,kw:["chips","crisps","lays"]});
C("cookies","Chocolate cookies","🍪","Snacks","150 g",[150,"g"],60,2,["sugar"],{imp:true,al:["gluten"],diet:"veg",sw:"almonds",w:.15,kw:["cookies","biscuits","cookie"]});
C("chocolate","Chocolate bar","🍫","Snacks","100 g",[100,"g"],100,3,["sugar"],{imp:true,al:["dairy"],diet:"veg",w:.1,kw:["chocolate","dairy milk"]});
C("namkeen","Namkeen","🥨","Snacks","400 g",[400,"g"],95,3,["sodium"],{imp:true,sw:"makhana",w:.4,kw:["bhujia","mixture"]});
C("icecream","Ice cream","🍨","Frozen","700 ml",[700,"ml"],220,2,["sugar"],{imp:true,al:["dairy"],diet:"veg",w:.7,kw:["ice cream","icecream","kulfi"]});
C("paratha","Frozen parathas","🫓","Frozen","5 pcs",[5,"pc"],150,4,["satfat"],{al:["gluten"],w:.5,kw:["paratha"]});
C("soda","Soft drink","🥤","Beverages","2 L",[2000,"ml"],95,1,["sugar"],{imp:true,sw:"water",w:2,kw:["coke","pepsi","soda","cola","soft drink"]});
C("juice","Fruit juice","🧃","Beverages","1 L",[1000,"ml"],120,4,["sugar"],{sw:"apple",w:1,kw:["juice"]});
C("water","Mineral water","💧","Beverages","1 L",[1000,"ml"],20,10,[],{w:1,kw:["water"]});
C("detergent","Detergent","🧺","Household","1 kg",[1000,"g"],210,null,[],{alt:["Store-brand detergent",165],w:1,kw:["washing powder","surf"]});
C("dishsoap","Dishwash liquid","🧽","Household","500 ml",[500,"ml"],110,null,[],{w:.5,kw:["vim","dish soap","dishwash"]});
C("tissue","Tissue rolls","🧻","Household","4 pack",[4,"pc"],120,null,[],{w:.4,kw:["tissue","toilet paper"]});
C("toothpaste","Toothpaste","🪥","Personal care","150 g",[150,"g"],95,null,[],{w:.15});
C("shampoo","Shampoo","🧴","Personal care","340 ml",[340,"ml"],280,null,[],{w:.35});
C("soap","Bath soap","🧼","Personal care","4 pack",[4,"pc"],160,null,[],{w:.5,kw:["soap"]});
const BYK=Object.fromEntries(CAT.map(c=>[c.k,c]));
const KWFALLBACK=[["Produce",/(fruit|veg|leaf|bhindi|okra|gourd|mango|grape|orange|papaya|coriander|mint|chilli|capsicum|cabbage|cauliflower|beans|brinjal)/],["Dairy & Eggs",/(milk|cream|yog|cheese|lassi)/],["Bakery",/(bun|bread|cake|pav|croissant|rusk)/],["Grains & Pulses",/(rice|dal|flour|rava|suji|millet|ragi|besan|rajma|lentil)/],["Meat & Fish",/(mutton|meat|prawn|fish|chicken|lamb)/],["Snacks",/(chip|biscuit|snack|candy|toffee)/],["Beverages",/(drink|juice|soda|tea|coffee|water)/],["Household",/(clean|bag|foil|phenyl|mop|bulb|battery)/],["Personal care",/(soap|shampoo|cream|razor|pad|lotion|deo)/]];

const RECIPES=[
 {n:"Dal tadka",e:"🍲",i:["dal","onion","tomato","garlic","ghee","masala"],diet:"veg"},
 {n:"Veg pulao",e:"🍚",i:["rice","carrot","peas","onion","masala"],diet:"vegan"},
 {n:"Masala omelette",e:"🍳",i:["eggs","onion","tomato"],diet:"egg"},
 {n:"Paneer bhurji",e:"🧀",i:["paneer","onion","tomato","masala"],diet:"veg"},
 {n:"Banana oat smoothie",e:"🥤",i:["banana","oats","milk","honey"],diet:"veg"},
 {n:"Pasta arrabbiata",e:"🍝",i:["pasta","tomato","garlic","oliveoil"],diet:"vegan"},
 {n:"Curd rice",e:"🥣",i:["rice","curd","ginger"],diet:"veg"},
 {n:"Lemon salmon & greens",e:"🐟",i:["salmon","kale","lemon","oliveoil"],diet:"nonveg"},
 {n:"Kanda poha",e:"🍛",i:["poha","onion","potato","peanuts","lemon"],diet:"vegan"},
 {n:"Chole",e:"🫘",i:["chana","onion","tomato","ginger","masala"],diet:"vegan"},
 {n:"Palak paneer",e:"🥬",i:["spinach","paneer","onion","garlic","ginger"],diet:"veg"},
 {n:"Chicken stir-fry",e:"🍗",i:["chicken","carrot","garlic","ginger","oil"],diet:"nonveg"},
 {n:"Masala chai",e:"🍵",i:["milk","tea","sugar","ginger"],diet:"veg"},
 {n:"Quinoa salad",e:"🥗",i:["quinoa","cucumber","tomato","lemon","avocado"],diet:"vegan"}
];

/* ---------- utils ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const rupee=n=>"₹"+Math.round(n||0).toLocaleString("en-IN");
const DAY=864e5;
const now=()=>Date.now();
const lsGet=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const uid=()=>Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);
function ago(t){const s=(now()-t)/1e3;if(s<60)return"just now";if(s<3600)return Math.floor(s/60)+"m ago";if(s<86400)return Math.floor(s/3600)+"h ago";return Math.floor(s/86400)+"d ago";}
function weekStart(){const d=new Date();d.setHours(0,0,0,0);const wd=(d.getDay()+6)%7;return d.getTime()-wd*DAY;}
function toast(msg){const h=$("#toastHost");h.innerHTML='<div class="toast" role="status">'+esc(msg)+'</div>';clearTimeout(toast.t);toast.t=setTimeout(()=>h.innerHTML="",2600);}
const ICON={
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg>',
 trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
 edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
 bulb:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>',
 alert:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17.5v.5"/></svg>',
 ok:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16.5 9.5"/></svg>'
};
const TABS=[["list","List",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/></svg>'],["budget","Budget",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 15h2"/></svg>'],["health","Health",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>'],["plan","Plan",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3v8a3 3 0 0 0 6 0V3M9 3v18M17 3c-1.7 0-3 2.2-3 5s1.3 4 3 4v9"/></svg>']];

/* ---------- parsing ---------- */
function findCatalog(name){
  const n=name.toLowerCase().trim(); if(!n) return null;
  let best=null,bs=0;
  for(const c of CAT){for(const k of c.kw){let sc=0;
    if(n===k)sc=1000;else if(new RegExp("(^|\\s)"+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(s|es)?(\\s|$)").test(n))sc=100+k.length;else if(n.includes(k))sc=40+k.length;else if(n.length>=4&&k.includes(n))sc=10-k.length/10;
    if(sc>bs){best=c;bs=sc;} }}
  return best;
}
function guessCat(name){const n=name.toLowerCase();for(const [c,re] of KWFALLBACK) if(re.test(n)) return c;return "Other";}
function toBase(a,u){u=u.toLowerCase();if(/^k/.test(u))return[a*1000,"g"];if(/^g/.test(u))return[a,"g"];if(/^ml/.test(u))return[a,"ml"];if(/^l/.test(u))return[a*1000,"ml"];if(/dozen/.test(u))return[a*12,"pc"];return[a,"pc"];}
function fmtMeasure(a,u){u=u.toLowerCase();if(/^k/.test(u))return a+" kg";if(/^g/.test(u))return a+" g";if(/^ml/.test(u))return a+" ml";if(/^l/.test(u))return a+" L";if(/dozen/.test(u))return a+" dozen";return a+" pcs";}
function titleCase(s){return s.replace(/\b\w/g,m=>m.toUpperCase());}
function parseLine(raw){
  let t=raw.trim(); if(!t) return null;
  let price=null,qty=null,size=null,amt=null;
  t=t.replace(/(?:₹|rs\.?|inr)\s*(\d+(?:\.\d+)?)/i,(m,p)=>{price=+p;return " "});
  t=t.replace(/(^|\s)[x×]\s*(\d+)\b/i,(m,s0,n)=>{qty=+n;return " "});
  t=t.replace(/\(([^)]*)\)/,(m,inner)=>" "+inner+" ");
  const mu=t.match(/(\d+(?:\.\d+)?)\s*(kgs?|kilos?|grams?|gms?|g|ml|litres?|liters?|ltrs?|l|pcs?|pieces?|packs?|dozen)\b/i);
  if(mu){amt=[+mu[1],mu[2]];t=t.replace(mu[0]," ");}
  else{const d=t.match(/\b(a|one)\s+dozen\b/i);if(d){amt=[1,"dozen"];t=t.replace(d[0]," ");}
    const ln=t.match(/^\s*(\d+(?:\.\d+)?)\s+/);if(ln){qty=(qty||1)*+ln[1];t=t.replace(ln[0]," ");}}
  let name=t.replace(/\b(of|some|a|an|pack|packet)\b/gi," ").replace(/[-–:]+/g," ").replace(/\s+/g," ").trim();
  if(!name) return null;
  const c=findCatalog(name);
  const item={name:c?c.n:titleCase(name),emoji:c?c.e:CAT_EMO[guessCat(name)],cat:c?c.c:guessCat(name),unit:c?c.u:"",qty:qty||1,price:c?c.p:0,ck:c?c.k:null,size:null};
  if(amt&&c&&/^\w/.test(amt[1])){
    const [b,bu]=toBase(amt[0],amt[1]);
    if(bu===c.sz[1]){const packs=Math.round(b/c.sz[0]*100)/100;item.qty=packs*(qty||1);item.size=fmtMeasure(amt[0],amt[1]);}
    else item.size=fmtMeasure(amt[0],amt[1]);
  } else if(amt){item.size=fmtMeasure(amt[0],amt[1]);item.unit=item.size;}
  if(price!=null){item.price=item.qty?price/item.qty:price;}
  return item;
}
function parseInput(s){return s.split(/\s*(?:,|;|\n|\band\b|\+)\s*/i).map(parseLine).filter(Boolean);}

/* ---------- state + storage ---------- */
const S={items:[],trips:[],skips:[],settings:{weeklyBudget:2000,lists:["Weekly"],guard:true},profile:{diet:"any",allergens:[],goals:[]},list:"All",mode:"loading",uid:null,meName:"",names:{},tab:"list",pantry:lsGet("grocify:pantry","")};
let db=null,user=null,sample=null,canWrite=true;
const LOCAL_KEY="grocify:v2";

const SAMPLE_ITEMS=[["Milk","milk",2,null,"Weekly"],["Whole wheat bread","wwbread",1,null,"Weekly"],["Eggs","eggs",1,null,"Weekly"],["Bananas","banana",1,null,"Weekly"],["Toor dal","dal",1,null,"Weekly"],["Spinach","spinach",1,null,"Weekly"],["Pizza base","pizzabase",1,null,"Party"],["Cheese slices","cheese",1,null,"Party"]];
function sampleItems(){return SAMPLE_ITEMS.map(([n,k,q,_,l],i)=>{const c=BYK[k];return{name:c.n,emoji:c.e,cat:c.c,unit:c.u,qty:q,price:c.p,ck:k,size:null,done:false,list:l,addedBy:S.uid||"me",addedAt:now()-(i+1)*37*60e3};});}
function sampleTrips(){
  const base=[["milk","wwbread","eggs","banana","apple","dal","onion","tomato"],["milk","curd","banana","apple","spinach","rice"],["milk","eggs","wwbread","banana","apple","tea","sugar","chips"],["milk","curd","onion","tomato","dal","atta","detergent"],["milk","banana","apple","eggs","paneer","spinach","cookies"],["milk","wwbread","curd","rice","oil","toothpaste"]];
  const days=[3,7,11,15,20,26];
  return base.map((ks,i)=>{const it=ks.map(k=>({name:BYK[k].n,ck:k,cat:BYK[k].c,price:BYK[k].p,qty:1}));return{date:now()-days[i]*DAY,items:it,total:it.reduce((a,b)=>a+b.price,0),saved:i%2?35:0,sample:true};});
}

const local={
  load(){const d=lsGet(LOCAL_KEY,null);if(d){Object.assign(S,{items:d.items||[],trips:d.trips||[],skips:d.skips||[],settings:Object.assign(S.settings,d.settings||{}),profile:Object.assign(S.profile,d.profile||{})});}
    else{S.items=sampleItems().map(x=>Object.assign(x,{id:uid()}));S.trips=sampleTrips().map(x=>Object.assign(x,{id:uid()}));S.settings.lists=["Weekly","Party"];this.save();}},
  save(){lsSet(LOCAL_KEY,{items:S.items,trips:S.trips,skips:S.skips,settings:S.settings,profile:S.profile});}
};
async function retryOnce(fn){try{return await fn()}catch(e){if(e&&e.code==="unavailable"){await new Promise(r=>setTimeout(r,400+Math.random()*600));return fn();}throw e;}}
function dbFail(e){if(e&&e.code==="invalid_argument"){canWrite=false;toast("You can view this list but not change it.");}else if(e&&e.code==="quota_exceeded"){toast("Storage is full. Clear old trips to keep adding.");}else{toast("Couldn't save that change. Try again.");}render();}
const store={
  async addItem(it){it=Object.assign({done:false,list:S.list==="All"?(S.settings.lists[0]||"Weekly"):S.list,addedBy:S.uid||"me",addedAt:now()},it);
    const ex=S.items.find(x=>!x.done&&(x.list||"Weekly")===it.list&&((it.ck&&x.ck===it.ck&&x.name===it.name)||(!it.ck&&x.name.toLowerCase()===it.name.toLowerCase())));
    if(ex){return this.updateItem(ex.id,{qty:Math.round(((+ex.qty||1)+(+it.qty||1))*100)/100,size:null});}
    if(db){try{await retryOnce(()=>db.collection("items").add(it))}catch(e){dbFail(e)}}else{it.id=uid();S.items.push(it);local.save();render();}},
  async updateItem(id,patch){if(db){try{await retryOnce(()=>db.doc("items/"+id).update(patch))}catch(e){dbFail(e)}}else{const it=S.items.find(x=>x.id===id);if(it)Object.assign(it,patch);local.save();render();}},
  async deleteItem(id){if(db){try{await retryOnce(()=>db.doc("items/"+id).delete())}catch(e){dbFail(e)}}else{S.items=S.items.filter(x=>x.id!==id);local.save();render();}},
  async addTrip(t){if(db){try{await retryOnce(()=>db.collection("trips").add(t))}catch(e){dbFail(e)}}else{t.id=uid();S.trips.push(t);local.save();render();}},
  async deleteTrip(id){if(db){try{await db.doc("trips/"+id).delete()}catch(e){dbFail(e)}}else{S.trips=S.trips.filter(t=>t.id!==id);local.save();render();}},
  async addSkip(s){if(db){try{await db.collection("skips").add(s)}catch(e){dbFail(e)}}else{s.id=uid();S.skips.push(s);local.save();render();}},
  async saveSettings(patch){Object.assign(S.settings,patch);render();if(db){try{await retryOnce(()=>db.doc("settings/household").set(Object.assign({},S.settings)))}catch(e){dbFail(e)}}else local.save();},
  async saveProfile(){render();if(db&&S.uid){try{await db.doc("data/users/"+S.uid+"/profile").set(Object.assign({},S.profile))}catch(e){lsSet("grocify:profile",S.profile)}}else if(db){lsSet("grocify:profile",S.profile)}else local.save();}
};

function snapList(snap){return snap.docs.map(d=>Object.assign({id:d.id},d.data()));}
async function boot(){
  renderShell();render();
  const C=window.claude;
  if(C&&C.use){
    const [d,u,sm]=await Promise.all([C.use("db").catch(()=>null),C.use("user").catch(()=>null),C.use("sample").catch(()=>null)]);
    db=d;user=u;sample=sm;
  }
  if(sample){$("#photoBtn").hidden=false;}
  $("#demoBar").hidden=!!db;
  if(user){try{S.uid=await user.id();const me=await user.me();S.meName=(me&&me.name)||"";}catch(e){}
    try{const cw=user.can?await user.can("data.write"):null;if(cw===false)canWrite=false;}catch(e){}}
  if(db){
    S.mode="db";
    db.collection("items").onSnapshot(s=>{S.items=snapList(s);resolveNames();render();},onSubErr);
    db.collection("trips").orderBy("date","desc").limit(120).onSnapshot(s=>{S.trips=snapList(s);render();},onSubErr);
    db.collection("skips").orderBy("at","desc").limit(300).onSnapshot(s=>{S.skips=snapList(s);render();},onSubErr);
    db.doc("settings/household").onSnapshot(s=>{if(s.exists)Object.assign(S.settings,s.data());render();},onSubErr);
    if(S.uid){db.doc("data/users/"+S.uid+"/profile").onSnapshot(s=>{if(s.exists)Object.assign(S.profile,s.data());render();},()=>{});}
    else Object.assign(S.profile,lsGet("grocify:profile",{}));
  } else {S.mode="local";local.load();}
  render();
}
function onSubErr(e){if(e&&e.code==="revoked"){S.mode="local";local.load();render();}}
async function resolveNames(){if(!user||!user.profiles)return;const ids=[...new Set(S.items.map(i=>i.addedBy).filter(x=>x&&x!=="me"&&!(x in S.names)))];if(!ids.length)return;try{const ps=await user.profiles(ids);for(const id of ids)S.names[id]=(ps[id]&&ps[id].name)||"";render();}catch(e){}}
function whoName(id){if(!id||id==="me"||id===S.uid)return"You";return S.names[id]||"Someone";}

/* ---------- derived ---------- */
const lineTotal=i=>(+i.price||0)*(+i.qty||1);
function visibleItems(){return S.list==="All"?S.items:S.items.filter(i=>(i.list||"Weekly")===S.list);}
function weekSpent(){const ws=weekStart();return S.trips.filter(t=>t.date>=ws).reduce((a,t)=>a+(t.total||0),0);}
function cartTotal(){return S.items.filter(i=>i.done).reduce((a,i)=>a+lineTotal(i),0);}
function planTotal(){return S.items.filter(i=>!i.done).reduce((a,i)=>a+lineTotal(i),0);}
function monthSaved(){const m=new Date();m.setDate(1);m.setHours(0,0,0,0);const t=m.getTime();return S.skips.filter(s=>s.at>=t).reduce((a,s)=>a+(s.price||0),0)+S.trips.filter(x=>x.date>=t).reduce((a,x)=>a+(x.saved||0),0);}
function itemWeight(i){const c=i.ck&&BYK[i.ck];return(c&&c.w!=null?c.w:(CAT_KG[i.cat]||.5))*(+i.qty||1);}
function onList(k,name){return S.items.some(i=>(k&&i.ck===k)||i.name.toLowerCase()===String(name).toLowerCase());}
function suggestions(){
  const out=[];const trips=S.trips;if(!trips.length)return out;
  // frequency
  const hist={};for(const t of trips)for(const it of t.items||[]){const k=it.ck||it.name.toLowerCase();(hist[k]=hist[k]||{name:it.name,ck:it.ck,dates:[]}).dates.push(t.date);}
  const due=[];
  for(const k in hist){const h=hist[k];if(h.dates.length<2||onList(h.ck,h.name))continue;const ds=h.dates.slice().sort((a,b)=>a-b);let gaps=0;for(let i=1;i<ds.length;i++)gaps+=ds[i]-ds[i-1];const avg=gaps/(ds.length-1);const since=now()-ds[ds.length-1];if(since>=avg*.8)due.push({name:h.name,ck:h.ck,reason:"You buy this every ~"+Math.max(1,Math.round(avg/DAY))+" days · last "+Math.round(since/DAY)+" days ago",score:since/avg});}
  due.sort((a,b)=>b.score-a.score);
  // pairs
  const pairs=[];const listKeys=S.items.map(i=>i.ck||i.name.toLowerCase());
  for(const lk of listKeys){const withIt=trips.filter(t=>(t.items||[]).some(x=>(x.ck||x.name.toLowerCase())===lk));if(withIt.length<2)continue;const cnt={};for(const t of withIt)for(const x of t.items){const k=x.ck||x.name.toLowerCase();if(k!==lk)cnt[k]=(cnt[k]||{n:0,name:x.name,ck:x.ck}),cnt[k].n++;}
    for(const k in cnt){const c=cnt[k];if(c.n/withIt.length>=.75&&!onList(c.ck,c.name)){const src=S.items.find(i=>(i.ck||i.name.toLowerCase())===lk);pairs.push({name:c.name,ck:c.ck,reason:"Usually bought with "+(src?src.name.toLowerCase():lk),score:c.n/withIt.length});}}}
  const seen=new Set();for(const s of pairs.concat(due)){const k=s.ck||s.name;if(seen.has(k))continue;seen.add(k);out.push(s);}
  return out.slice(0,5);
}
function dueList(){const all=[];const trips=S.trips;const hist={};for(const t of trips)for(const it of t.items||[]){const k=it.ck||it.name.toLowerCase();(hist[k]=hist[k]||{name:it.name,ck:it.ck,dates:[]}).dates.push(t.date);}
  for(const k in hist){const h=hist[k];if(h.dates.length<2)continue;const ds=h.dates.sort((a,b)=>a-b);const avg=(ds[ds.length-1]-ds[0])/(ds.length-1);const next=ds[ds.length-1]+avg;all.push({name:h.name,ck:h.ck,inDays:Math.round((next-now())/DAY),every:Math.max(1,Math.round(avg/DAY))});}
  return all.sort((a,b)=>a.inDays-b.inDays).slice(0,8);}
function dietConflict(c,diet){if(!c||diet==="any")return null;if(diet==="vegan"&&c.diet!=="vegan")return"Not vegan";if(diet==="vegetarian"&&(c.diet==="egg"||c.diet==="nonveg"))return"Not vegetarian";if(diet==="eggetarian"&&c.diet==="nonveg")return"Contains meat or fish";return null;}
function healthInfo(){
  const food=S.items.map(i=>({i,c:i.ck&&BYK[i.ck]})).filter(x=>!x.c||x.c.s!=null).filter(x=>!["Household","Personal care"].includes(x.i.cat));
  const scored=food.filter(x=>x.c);const score=scored.length?scored.reduce((a,x)=>a+x.c.s*(+x.i.qty||1),0)/scored.reduce((a,x)=>a+(+x.i.qty||1),0):0;
  const tagCount=t=>scored.filter(x=>x.c.t.includes(t)).length;
  const produce=food.length?food.filter(x=>x.i.cat==="Produce").length/food.length:0;
  const flags=[];const P=S.profile;
  for(const x of food){if(!x.c)continue;const r=[];const dc=dietConflict(x.c,P.diet);if(dc)r.push(["bad",dc]);for(const a of P.allergens)if(x.c.al.includes(a))r.push(["bad","Contains "+a]);
    if(P.goals.includes("lowsugar")&&x.c.t.includes("sugar"))r.push(["warn","High sugar"]);if(P.goals.includes("lowsodium")&&x.c.t.includes("sodium"))r.push(["warn","High sodium"]);if(P.goals.includes("heart")&&x.c.t.includes("satfat"))r.push(["warn","Saturated fat"]);
    if(r.length)flags.push({i:x.i,r});}
  return{score,n:scored.length,protein:tagCount("protein"),fiber:tagCount("fiber"),sugar:tagCount("sugar"),sodium:tagCount("sodium"),omega:tagCount("omega3"),produce,flags,food};
}

/* ---------- render ---------- */
function renderShell(){
  const mk=(id)=>TABS.map(([k,l,ic])=>'<button role="tab" data-tab="'+k+'" aria-selected="'+(S.tab===k)+'">'+(id==="bnav"?ic:"")+'<span>'+l+'</span></button>').join("");
  $("#tabs").innerHTML=mk("tabs");$("#bnav").innerHTML=mk("bnav");
  const presets=[["Meal plan","Plan 4 dinners for my household this week within the remaining budget, and list the groceries I still need."],["Use leftovers","What can I cook tonight using what's already on my list and in my kitchen? Suggest anything small I'd need to add."],["Cut my bill","Look at my list and suggest how to bring the total down by about 15% without losing nutrition."],["Party for 10","I'm hosting 10 people for snacks and drinks on Saturday. What should I buy and how much?"]];
  $("#aiPresets").innerHTML=presets.map(p=>'<button class="chip" data-act="preset" data-q="'+esc(p[1])+'">'+p[0]+'</button>').join("");
  $("#pantryInput").value=S.pantry;
}
function setTab(t){S.tab=t;document.querySelectorAll("[data-tab]").forEach(b=>b.setAttribute("aria-selected",b.dataset.tab===t));for(const [k] of TABS)$("#v-"+k).hidden=k!==t;try{history.replaceState(null,"","#"+t)}catch(e){}window.scrollTo(0,0);}

function render(){
  const sy=$("#sync");sy.className="sync"+(S.mode==="db"?" live":"");sy.querySelector("span").textContent=S.mode==="db"?"Synced with household":S.mode==="local"?"Saved on this device":"Connecting…";
  $("#me").textContent=(S.meName||"You").trim().split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase();
  $("#me").title=S.meName||"You";
  renderList();renderSide();renderBudget();renderHealth();renderPlan();
}
function renderList(){
  const lists=[...new Set(["All"].concat(S.settings.lists||[]).concat(S.items.map(i=>i.list||"Weekly")))];
  $("#listChips").innerHTML=lists.map(l=>{const n=l==="All"?S.items.length:S.items.filter(i=>(i.list||"Weekly")===l).length;return'<button class="chip" data-act="list" data-l="'+esc(l)+'" aria-pressed="'+(S.list===l)+'">'+esc(l)+' <span class="muted num">'+n+'</span></button>';}).join("");
  const items=visibleItems();
  const body=$("#listBody");
  if(S.mode==="loading"){body.innerHTML='<div class="empty"><b>Loading your list…</b></div>';$("#totals").innerHTML="";$("#finishRow").innerHTML="";return;}
  if(!items.length){body.innerHTML='<div class="empty"><b>'+(S.items.length?"Nothing on this list yet":"Your list is empty")+'</b>Add items above, like “2L milk, eggs, 1 kg tomatoes”.'+(S.items.length?"":'<div style="margin-top:12px"><button class="btn" data-act="loadSample">Load a sample list</button></div>')+'</div>';}
  else{
    const groups={};for(const i of items)(groups[i.cat]=groups[i.cat]||[]).push(i);
    body.innerHTML=CATS.filter(c=>groups[c]).map((c,idx)=>{const g=groups[c].sort((a,b)=>(a.done-b.done)||(a.addedAt-b.addedAt));const sub=g.reduce((a,i)=>a+lineTotal(i),0);
      return'<div class="aisle"><div class="aisle-h"><span class="eyebrow">Aisle '+(CATS.indexOf(c)+1)+'</span><b>'+c+'</b><span class="num">'+rupee(sub)+'</span></div>'+g.map(itemRow).join("")+'</div>';}).join("");
  }
  const cart=cartTotal(),plan=planTotal(),done=S.items.filter(i=>i.done).length;
  $("#totals").innerHTML=items.length?'<div><span class="eyebrow">In cart</span><b>'+rupee(cart)+'</b></div><div><span class="eyebrow">Still to get</span><b>'+rupee(plan)+'</b></div><div><span class="eyebrow">Items</span><b>'+done+' / '+S.items.length+'</b></div>':"";
  $("#finishRow").innerHTML=done?'<button class="btn primary" data-act="finish">Finish trip · '+rupee(cart)+'</button><span class="small muted">Saves checked items to your history and clears them.</span>':"";
}
function itemRow(i){
  const c=i.ck&&BYK[i.ck];const size=i.size&&i.qty===roundQty(i)?i.size:((+i.qty!==1?fmtQty(i.qty)+" × ":"")+(i.unit||""));
  const pills=[];if(c&&c.imp)pills.push('<span class="pill warn">Treat</span>');
  const dc=c&&dietConflict(c,S.profile.diet);const al=c&&S.profile.allergens.find(a=>c.al.includes(a));if(dc||al)pills.push('<span class="pill bad">'+esc(al?"Contains "+al:dc)+'</span>');
  if(i.saved)pills.push('<span class="pill good">Saved '+rupee(i.saved*(+i.qty||1))+'</span>');
  return'<div class="item'+(i.done?" done":"")+'"><button class="check" data-act="toggle" data-id="'+i.id+'" aria-label="'+(i.done?"Uncheck ":"Check ")+esc(i.name)+'">'+ICON.check+'</button><span class="emo" aria-hidden="true">'+esc(i.emoji||"🛒")+'</span>'+
  '<div style="min-width:0"><div class="nm">'+esc(i.name)+'</div><div class="meta"><span>'+esc(size||"")+'</span>'+(S.mode==="db"?'<span>· '+esc(whoName(i.addedBy))+'</span>':"")+(S.list==="All"&&(S.settings.lists||[]).length>1?'<span>· '+esc(i.list||"Weekly")+'</span>':"")+pills.join("")+'</div></div>'+
  '<div class="price"><span class="num">'+(i.price?rupee(lineTotal(i)):'<button class="btn ghost small" data-act="edit" data-id="'+i.id+'">Add price</button>')+'</span><div class="row" style="gap:4px"><span class="qty"><button data-act="dec" data-id="'+i.id+'" aria-label="Less">−</button><span class="num">'+fmtQty(i.qty)+'</span><button data-act="inc" data-id="'+i.id+'" aria-label="More">+</button></span><span class="item-tools"><button class="icon-btn" data-act="edit" data-id="'+i.id+'" aria-label="Edit">'+ICON.edit+'</button><button class="icon-btn" data-act="del" data-id="'+i.id+'" aria-label="Remove">'+ICON.trash+'</button></span></div></div></div>';
}
const fmtQty=q=>{q=+q||1;return Number.isInteger(q)?String(q):q.toFixed(2).replace(/0+$/,"").replace(/\.$/,"");};
const roundQty=i=>i._q0!=null?i._q0:i.qty;

function budgetCore(){const b=+S.settings.weeklyBudget||0,spent=weekSpent(),cart=cartTotal(),plan=planTotal();return{b,spent,cart,plan,used:spent+cart,proj:spent+cart+plan};}
function meterHtml(x){const max=Math.max(x.b,x.proj,1);const over=x.used>x.b;return'<div class="meter'+(over?" over":"")+'" role="img" aria-label="'+rupee(x.used)+' of '+rupee(x.b)+' used"><span class="spent" style="width:'+(x.spent/max*100)+'%"></span><span class="cart" style="width:'+(x.cart/max*100)+'%"></span><span class="plan" style="width:'+(x.plan/max*100)+'%"></span></div>';}
function budgetNote(x){if(!x.b)return"";if(x.used>x.b)return'<div class="note bad">'+ICON.alert+'<div>You are '+rupee(x.used-x.b)+' over this week’s budget.</div></div>';
  if(x.proj>x.b)return'<div class="note warn">'+ICON.alert+'<div>Buying everything on the list would put you '+rupee(x.proj-x.b)+' over budget. See cheaper alternatives in Budget.</div></div>';
  if(x.used/x.b>.8)return'<div class="note warn">'+ICON.alert+'<div>'+Math.round(x.used/x.b*100)+'% of this week’s budget used.</div></div>';return'';}
function renderSide(){
  const x=budgetCore();
  $("#budgetMini").innerHTML='<div class="card"><div class="spread"><h3>This week</h3><button class="btn ghost small" data-tab="budget">Details</button></div><div class="row" style="align-items:baseline;gap:6px"><span class="big num">'+rupee(Math.max(0,x.b-x.used))+'</span><span class="muted small">left of '+rupee(x.b)+'</span></div>'+meterHtml(x)+'<div class="legend"><span><i style="background:var(--accent)"></i>Spent '+rupee(x.spent)+'</span><span><i style="background:color-mix(in srgb,var(--accent) 55%,transparent)"></i>In cart '+rupee(x.cart)+'</span><span><i class="plan" style="background:color-mix(in srgb,var(--accent) 25%,transparent)"></i>Planned '+rupee(x.plan)+'</span></div>'+(budgetNote(x)?'<div style="margin-top:10px">'+budgetNote(x)+'</div>':"")+'</div>';
  const sg=suggestions();
  $("#sugg").innerHTML=sg.length?sg.map(s=>{const c=s.ck&&BYK[s.ck];return'<div class="sugg"><span class="emo">'+(c?c.e:"🛒")+'</span><div class="t"><b>'+esc(s.name)+'</b><small>'+esc(s.reason)+'</small></div><button class="btn small" data-act="addName" data-n="'+esc(s.name)+'">Add</button></div>';}).join(""):'<p class="small muted" style="margin:0">Finish a few trips and Grocify will learn what you buy and when.</p>';
  const w=S.items.reduce((a,i)=>a+itemWeight(i),0);const cold=S.items.some(i=>["Dairy & Eggs","Frozen","Meat & Fish"].includes(i.cat));const fragile=S.items.some(i=>i.ck==="eggs"||i.cat==="Bakery");const bags=Math.max(S.items.length?1:0,Math.ceil(w/7));
  $("#pack").innerHTML=S.items.length?'<div class="row" style="gap:18px"><div><span class="eyebrow">Est. weight</span><div class="big num" style="font-size:1.6rem">'+w.toFixed(1)+' kg</div></div><div><span class="eyebrow">Bags</span><div class="big num" style="font-size:1.6rem">'+bags+'</div></div></div><p class="small muted" style="margin:8px 0 0">'+[cold?"Bring a cold bag for dairy, meat or frozen items.":"",fragile?"Pack eggs and bread on top.":"",w>14?"Heavy load. Consider home delivery.":""].filter(Boolean).join(" ")+'</p>':'<p class="small muted" style="margin:0">Add items to see weight and bag estimates.</p>';
  const feed=S.items.slice().sort((a,b)=>b.addedAt-a.addedAt).slice(0,6);
  $("#feed").innerHTML=feed.length?feed.map(i=>'<li><span>'+esc(i.emoji||"🛒")+'</span><span><b>'+esc(whoName(i.addedBy))+'</b> added '+esc(i.name)+(i.list&&i.list!=="Weekly"?' to '+esc(i.list):"")+'</span><time>'+ago(i.addedAt)+'</time></li>').join(""):'<li class="muted">No activity yet.</li>';
}
function renderBudget(){
  const x=budgetCore();
  const bi=$("#budgetInput");if(document.activeElement!==bi)bi.value=x.b;
  $("#guardToggle").checked=S.settings.guard!==false;
  const pct=x.b?Math.round(x.used/x.b*100):0;
  $("#budgetCard").innerHTML='<div class="spread"><div><div class="eyebrow">Weekly budget · resets Monday</div><div class="row" style="align-items:baseline;gap:8px;margin-top:6px"><span class="big num">'+rupee(x.used)+'</span><span class="muted">of '+rupee(x.b)+'</span></div></div><span class="pill '+(pct>100?"bad":pct>80?"warn":"good")+'">'+pct+'% used</span></div>'+meterHtml(x)+'<div class="legend"><span><i style="background:var(--accent)"></i>Trips this week '+rupee(x.spent)+'</span><span><i style="background:color-mix(in srgb,var(--accent) 55%,transparent)"></i>In cart '+rupee(x.cart)+'</span><span><i style="background:color-mix(in srgb,var(--accent) 25%,transparent)"></i>Still on list '+rupee(x.plan)+'</span></div>'+
   (budgetNote(x)?'<div style="margin-top:12px">'+budgetNote(x)+'</div>':"")+
   '<div class="kpis"><div class="kpi"><b class="num">'+rupee(Math.max(0,x.b-x.used))+'</b><span>Remaining</span></div><div class="kpi"><b class="num">'+rupee(monthSaved())+'</b><span>Saved this month</span></div><div class="kpi"><b class="num">'+S.skips.filter(s=>s.at>=weekStart()).length+'</b><span>Treats skipped this week</span></div></div>';
  const alts=S.items.filter(i=>!i.saved&&i.ck&&BYK[i.ck].alt&&BYK[i.ck].alt[1]<i.price);
  $("#alts").innerHTML=alts.length?alts.map(i=>{const a=BYK[i.ck].alt;const sv=(i.price-a[1])*(+i.qty||1);return'<div class="sugg"><span class="emo">'+esc(i.emoji)+'</span><div class="t"><b>'+esc(a[0])+'</b><small>Instead of '+esc(i.name.toLowerCase())+' · '+rupee(a[1])+' vs '+rupee(i.price)+'</small></div><button class="btn small" data-act="swapAlt" data-id="'+i.id+'">Save '+rupee(sv)+'</button></div>';}).join(""):'<p class="small muted" style="margin:0">No cheaper store-brand options for what’s on your list right now.</p>';
  const since=now()-30*DAY,cat={};for(const t of S.trips)if(t.date>=since)for(const it of t.items||[])cat[it.cat||"Other"]=(cat[it.cat||"Other"]||0)+(it.price||0)*(it.qty||1);
  const rows=Object.entries(cat).sort((a,b)=>b[1]-a[1]);const mx=rows.length?rows[0][1]:1;
  $("#catBars").innerHTML=rows.length?rows.map(([c,v])=>'<div class="bar"><span>'+esc(c)+'</span><div class="tr"><span style="width:'+(v/mx*100)+'%"></span></div><span class="num">'+rupee(v)+'</span></div>').join(""):'<p class="small muted" style="margin:0">Finish a trip to see where your money goes.</p>';
  const trips=S.trips.slice().sort((a,b)=>b.date-a.date).slice(0,12);
  $("#clearSample").hidden=!S.trips.some(t=>t.sample);
  $("#trips").innerHTML=trips.length?trips.map(t=>{const d=new Date(t.date);return'<div class="trip"><div class="d"><b>'+d.getDate()+'</b><small>'+d.toLocaleString("en",{month:"short"})+'</small></div><div class="t"><b class="num">'+rupee(t.total)+'</b>'+(t.sample?' <span class="pill acc">Sample</span>':"")+(t.saved?' <span class="pill good">Saved '+rupee(t.saved)+'</span>':"")+'<small>'+(t.items||[]).length+' items · '+esc((t.items||[]).map(x=>x.name).join(", "))+'</small></div></div>';}).join(""):'<p class="small muted" style="margin:0">No trips yet. Tap “Finish trip” on your list after shopping.</p>';
}
function renderHealth(){
  const h=healthInfo();const sc=h.n?Math.round(h.score*10)/10:0;const C=2*Math.PI*40;
  const tone=sc>=7.5?"var(--good)":sc>=5.5?"var(--warn)":"var(--bad)";
  const ins=[];
  if(h.n){if(h.fiber<2)ins.push(["warn","Low on fiber. Add oats, dal or green peas."]);if(h.protein<2)ins.push(["warn","Few protein sources. Dal, eggs, paneer or chana would help."]);if(h.produce<.25)ins.push(["warn","Fruit and vegetables are under a quarter of your list."]);if(h.sugar>=2)ins.push(["bad",h.sugar+" sugary items on the list."]);if(h.omega)ins.push(["good","Good: omega-3 from fish."]);if(h.produce>=.35)ins.push(["good","Good: plenty of fresh produce."]);}
  $("#healthCard").innerHTML='<div class="score"><svg class="ring" viewBox="0 0 100 100" role="img" aria-label="Health score '+sc+' out of 10"><circle class="bg" cx="50" cy="50" r="40"/><circle class="fg" cx="50" cy="50" r="40" style="stroke:'+tone+'" stroke-dasharray="'+C+'" stroke-dashoffset="'+(C*(1-sc/10))+'"/><text x="50" y="52" text-anchor="middle">'+(h.n?sc:"–")+'</text><text class="sub" x="50" y="68" text-anchor="middle">out of 10</text></svg><div><div class="eyebrow">List health score</div><h2 style="margin:4px 0">'+(h.n?(sc>=7.5?"Well balanced":sc>=5.5?"Room to improve":"Heavy on treats"):"Add food to score it")+'</h2><p class="small muted" style="margin:0">Averaged over '+h.n+' recognised food items, weighted by quantity.</p></div></div>'+
   '<div class="kpis"><div class="kpi"><b class="num">'+h.protein+'</b><span>Protein sources</span></div><div class="kpi"><b class="num">'+h.fiber+'</b><span>Fiber sources</span></div><div class="kpi"><b class="num">'+Math.round(h.produce*100)+'%</b><span>Fresh produce</span></div></div>'+
   (ins.length?'<div class="stack" style="gap:8px;margin-top:14px">'+ins.map(([t,m])=>'<div class="note '+t+'">'+(t==="good"?ICON.ok:t==="bad"?ICON.alert:ICON.bulb)+'<div>'+esc(m)+'</div></div>').join("")+'</div>':"");
  $("#flags").innerHTML=h.flags.length?h.flags.map(f=>'<div class="sugg"><span class="emo">'+esc(f.i.emoji)+'</span><div class="t"><b>'+esc(f.i.name)+'</b><div class="chips" style="margin-top:3px">'+f.r.map(([t,m])=>'<span class="pill '+t+'">'+esc(m)+'</span>').join("")+'</div></div><button class="btn small" data-act="del" data-id="'+f.i.id+'">Remove</button></div>').join(""):'<p class="small muted" style="margin:0">Nothing on your list conflicts with your profile.</p>';
  const sw=S.items.filter(i=>i.ck&&BYK[i.ck].sw&&!onList(BYK[i.ck].sw));
  $("#swaps").innerHTML=sw.length?sw.map(i=>{const t=BYK[BYK[i.ck].sw];return'<div class="sugg"><span class="emo">'+t.e+'</span><div class="t"><b>'+esc(t.n)+'</b><small>Instead of '+esc(i.name.toLowerCase())+' · health '+t.s+'/10 vs '+BYK[i.ck].s+'/10</small></div><button class="btn small" data-act="swapHealth" data-id="'+i.id+'">Swap</button></div>';}).join(""):'<p class="small muted" style="margin:0">No obvious swaps for your current list.</p>';
  const P=S.profile;
  $("#dietChips").innerHTML=[["any","No restriction"],["vegetarian","Vegetarian"],["eggetarian","Eggetarian"],["vegan","Vegan"]].map(([k,l])=>'<button class="chip" data-act="diet" data-k="'+k+'" aria-pressed="'+(P.diet===k)+'">'+l+'</button>').join("");
  $("#allergyChips").innerHTML=[["nuts","Nuts"],["gluten","Gluten"],["dairy","Dairy"],["egg","Egg"],["fish","Fish"]].map(([k,l])=>'<button class="chip" data-act="allergy" data-k="'+k+'" aria-pressed="'+P.allergens.includes(k)+'">'+l+'</button>').join("");
  $("#goalChips").innerHTML=[["lowsugar","Low sugar"],["lowsodium","Low sodium"],["heart","Heart healthy"]].map(([k,l])=>'<button class="chip" data-act="goal" data-k="'+k+'" aria-pressed="'+P.goals.includes(k)+'">'+l+'</button>').join("");
}
function pantryKeys(){return S.pantry.split(/[,\n]/).map(s=>s.trim()).filter(Boolean).map(s=>{const c=findCatalog(s);return c&&c.k;}).filter(Boolean);}
function renderPlan(){
  const have=new Set(S.items.map(i=>i.ck).filter(Boolean).concat(pantryKeys()));const P=S.profile;
  const rs=RECIPES.filter(r=>!dietConflict({diet:r.diet},P.diet)&&!r.i.some(k=>P.allergens.some(a=>BYK[k].al.includes(a)))).map(r=>{const got=r.i.filter(k=>have.has(k));return Object.assign({got,miss:r.i.filter(k=>!have.has(k))},r);}).sort((a,b)=>b.got.length/b.i.length-a.got.length/a.i.length);
  $("#recipes").innerHTML=rs.map(r=>{const m=r.got.length/r.i.length;const cost=r.miss.reduce((a,k)=>a+BYK[k].p,0);return'<div class="recipe"><div class="top-r"><span>'+r.e+'</span><div><b>'+esc(r.n)+'</b><div class="small muted">'+(r.miss.length?r.miss.length+" missing · ~"+rupee(cost):"Ready to cook")+'</div></div></div><div class="match"><span style="width:'+m*100+'%"></span></div><div class="ing">'+r.i.map(k=>have.has(k)?'<s>'+esc(BYK[k].n)+'</s>':esc(BYK[k].n)).join(", ")+'</div>'+(r.miss.length?'<button class="btn small" data-act="addRecipe" data-r="'+esc(r.n)+'">Add '+r.miss.length+' to list</button>':"")+'</div>';}).join("");
  const dl=dueList();
  $("#due").innerHTML=dl.length?dl.map(d=>{const c=d.ck&&BYK[d.ck];const on=onList(d.ck,d.name);return'<div class="sugg"><span class="emo">'+(c?c.e:"🛒")+'</span><div class="t"><b>'+esc(d.name)+'</b><small>Every ~'+d.every+' days · '+(d.inDays<=0?"due now":"in "+d.inDays+" days")+'</small></div>'+(on?'<span class="pill good">On list</span>':'<button class="btn small" data-act="addName" data-n="'+esc(d.name)+'">Add</button>')+'</div>';}).join(""):'<p class="small muted" style="margin:0">Needs at least two trips with the same item.</p>';
  $("#aiCard").hidden=!sample;
}

/* ---------- actions ---------- */
let pauseQueue=[],pausing=false;
async function addParsed(list){
  if(!canWrite){toast("You can view this list but not change it.");return;}
  for(const it of list){const c=it.ck&&BYK[it.ck];if(c&&c.imp&&S.settings.guard!==false)pauseQueue.push(it);else await store.addItem(it);}
  const added=list.filter(i=>!(i.ck&&BYK[i.ck].imp&&S.settings.guard!==false)).map(i=>i.name);
  if(added.length)toast("Added "+added.join(", "));
  runPause();
}
function runPause(){
  if(pausing||!pauseQueue.length)return;pausing=true;const it=pauseQueue.shift();const c=BYK[it.ck];const sw=c.sw&&BYK[c.sw];
  let left=10;const Cc=2*Math.PI*50;
  const html=()=>'<div class="scrim" role="dialog" aria-modal="true" aria-labelledby="pt"><div class="sheet"><div class="eyebrow">Impulse Guard</div><h2 id="pt">Take 10 seconds on '+esc(it.name.toLowerCase())+'?</h2><div class="pause"><svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"/><circle class="fg" id="pfg" cx="60" cy="60" r="50" stroke-dasharray="'+Cc+'" stroke-dashoffset="'+(Cc*(1-left/10))+'"/><text x="60" y="72" text-anchor="middle" id="pnum">'+left+'</text></svg></div><p class="small muted" style="margin:0">'+rupee(lineTotal(it))+' · health score '+c.s+'/10. '+(S.skips.filter(s=>s.ck===it.ck).length?"You’ve skipped this "+S.skips.filter(s=>s.ck===it.ck).length+" time(s) before.":"")+'</p><div class="stack" style="gap:8px"><button class="btn primary" data-act="pskip">Skip it and save '+rupee(lineTotal(it))+'</button>'+(sw?'<button class="btn" data-act="pswap">Get '+esc(sw.n.toLowerCase())+' instead · '+rupee(sw.p)+'</button>':"")+'<button class="btn" data-act="padd" id="padd" disabled>Add anyway (wait '+left+'s)</button></div></div></div>';
  $("#modal").innerHTML=html();
  const tick=setInterval(()=>{left--;const f=$("#pfg"),n=$("#pnum"),b=$("#padd");if(!f){clearInterval(tick);return;}f.style.strokeDashoffset=Cc*(1-left/10);n.textContent=Math.max(0,left);if(left<=0){clearInterval(tick);b.disabled=false;b.textContent="Add anyway";}else b.textContent="Add anyway (wait "+left+"s)";},1000);
  const done=()=>{clearInterval(tick);$("#modal").innerHTML="";pausing=false;runPause();};
  pausePending={it,sw,done};
}
let pausePending=null;
function openEdit(id){
  const i=S.items.find(x=>x.id===id);if(!i)return;
  const lists=[...new Set((S.settings.lists||["Weekly"]).concat(S.items.map(x=>x.list||"Weekly")))];
  $("#modal").innerHTML='<div class="scrim" role="dialog" aria-modal="true" aria-labelledby="et"><form class="sheet" id="editForm"><h2 id="et">Edit item</h2><label class="field">Name<input id="eName" value="'+esc(i.name)+'"></label><div class="row"><label class="field" style="flex:1">Quantity<input id="eQty" type="number" min="0.25" step="0.25" value="'+esc(i.qty)+'"></label><label class="field" style="flex:1">Price each (₹)<input id="ePrice" type="number" min="0" step="1" value="'+esc(Math.round(i.price||0))+'"></label></div><label class="field">Pack size<input id="eUnit" value="'+esc(i.unit||"")+'" placeholder="1 kg"></label><label class="field">List<select id="eList">'+lists.map(l=>'<option'+((i.list||"Weekly")===l?" selected":"")+'>'+esc(l)+'</option>').join("")+'</select></label><div class="row" style="justify-content:flex-end"><button type="button" class="btn" data-act="close">Cancel</button><button class="btn primary" type="submit">Save</button></div></form></div>';
  $("#editForm").addEventListener("submit",e=>{e.preventDefault();store.updateItem(id,{name:$("#eName").value.trim()||i.name,qty:Math.max(.25,+$("#eQty").value||1),price:Math.max(0,+$("#ePrice").value||0),unit:$("#eUnit").value.trim(),size:null,list:$("#eList").value});$("#modal").innerHTML="";});
  $("#eName").focus();
}
function openNewList(){
  $("#modal").innerHTML='<div class="scrim" role="dialog" aria-modal="true" aria-labelledby="nt"><form class="sheet" id="nlForm"><h2 id="nt">New list</h2><p class="small muted" style="margin:0">For an occasion or a person: Party, Kids’ snacks, Mom’s pharmacy run.</p><label class="field">Name<input id="nlName" maxlength="30" required></label><div class="row" style="justify-content:flex-end"><button type="button" class="btn" data-act="close">Cancel</button><button class="btn primary" type="submit">Create</button></div></form></div>';
  $("#nlForm").addEventListener("submit",e=>{e.preventDefault();const n=$("#nlName").value.trim();if(!n)return;const ls=[...new Set((S.settings.lists||[]).concat([n]))];store.saveSettings({lists:ls});S.list=n;$("#modal").innerHTML="";render();});
  $("#nlName").focus();
}
async function finishTrip(){
  const done=S.items.filter(i=>i.done);if(!done.length)return;
  const total=done.reduce((a,i)=>a+lineTotal(i),0);const saved=done.reduce((a,i)=>a+(i.saved||0)*(+i.qty||1),0);
  const ws=weekStart();const skipped=S.skips.filter(s=>s.at>=Date.now()-6*3600e3);
  const trip={date:now(),total,saved:saved+skipped.reduce((a,s)=>a+(s.price||0),0),items:done.map(i=>({name:i.name,ck:i.ck||null,cat:i.cat,price:+i.price||0,qty:+i.qty||1}))};
  const b=+S.settings.weeklyBudget||0;const after=weekSpent()+total;
  await store.addTrip(trip);for(const i of done)await store.deleteItem(i.id);
  const unhealthy=done.filter(i=>i.ck&&BYK[i.ck].s!=null&&BYK[i.ck].s<=3).length;
  $("#modal").innerHTML='<div class="scrim" role="dialog" aria-modal="true" aria-labelledby="ft"><div class="sheet"><div class="eyebrow">Trip saved</div><h2 id="ft">'+rupee(total)+' for '+done.length+' items</h2><div class="stack" style="gap:8px">'+
   (b?'<div class="note '+(after>b?"bad":"good")+'">'+(after>b?ICON.alert:ICON.ok)+'<div>'+(after>b?"This week is "+rupee(after-b)+" over budget.":rupee(b-after)+" left in this week’s budget.")+'</div></div>':"")+
   (trip.saved?'<div class="note good">'+ICON.ok+'<div>You saved '+rupee(trip.saved)+' with store brands and skipped treats.</div></div>':"")+
   (unhealthy?'<div class="note warn">'+ICON.bulb+'<div>'+unhealthy+' treat item(s) in this trip. Next time, try a swap from the Health tab.</div></div>':"")+
   '</div><button class="btn primary" data-act="close">Done</button></div></div>';
}
async function askAI(q,images){
  if(!sample||!q.trim()&&!images)return;
  const out=$("#aiOut");out.innerHTML='<div class="ai-out muted">Thinking…</div>';
  const ctl=new AbortController();askAI.ctl=ctl;$("#stopBtn").hidden=false;$("#askBtn").disabled=true;
  const ctx="Household grocery list (₹, India):\n"+(S.items.map(i=>"- "+i.name+" x"+fmtQty(i.qty)+" "+(i.unit||"")+" ₹"+Math.round(lineTotal(i))+(i.done?" (in cart)":"")).join("\n")||"(empty)")+
   "\nWeekly budget ₹"+(S.settings.weeklyBudget||0)+", spent this week ₹"+Math.round(weekSpent())+", list total ₹"+Math.round(planTotal()+cartTotal())+
   "\nDiet: "+S.profile.diet+"; avoid: "+(S.profile.allergens.join(", ")||"none")+"; goals: "+(S.profile.goals.join(", ")||"none")+
   "\nAlready in kitchen: "+(S.pantry||"not specified");
  const task=images?"The attached photo shows a handwritten or printed shopping list, a receipt, a product, or a product barcode. Identify the grocery items in it (for a barcode or package, name the product). "+(q?"Extra note from the user: "+q:""):"Request: "+q;
  const prompt="You are Grocify, a friendly grocery assistant for an Indian household. Prices in rupees at typical Indian retail.\n\n"+ctx+"\n\n"+task+"\n\nReply with ONLY a JSON object: {\"reply\": string (2-5 short sentences, plain text, practical), \"items\": [{\"name\": string, \"qty\": number, \"unit\": string like \"1 kg\" or \"500 g\", \"price\": number (rupees per unit)}]}. items are groceries to ADD to the list (not already on it); use [] if none. Example: {\"reply\":\"...\",\"items\":[{\"name\":\"Toor dal\",\"qty\":1,\"unit\":\"1 kg\",\"price\":160}]}";
  try{
    const r=await sample.json(prompt,{signal:ctl.signal,images:images||undefined,cache:false});
    const items=Array.isArray(r&&r.items)?r.items.filter(x=>x&&x.name).slice(0,25):[];
    askAI.items=items.map(x=>{const p=parseLine(String(x.name));const it=p||{name:String(x.name),emoji:"🛒",cat:"Other"};if(!it.ck||!it.price){it.price=+x.price||it.price||0;}it.qty=+x.qty||1;if(x.unit&&!it.ck)it.unit=String(x.unit);it.size=null;return it;});
    out.innerHTML='<div class="ai-out">'+esc(r&&r.reply||"")+'</div>'+(askAI.items.length?'<div style="margin-top:10px">'+askAI.items.map((it,ix)=>'<div class="sugg"><span class="emo">'+esc(it.emoji||"🛒")+'</span><div class="t"><b>'+esc(it.name)+'</b><small>'+fmtQty(it.qty)+' × '+esc(it.unit||"")+' · '+rupee(lineTotal(it))+'</small></div><button class="btn small" data-act="aiAdd" data-ix="'+ix+'">Add</button></div>').join("")+'<div class="row" style="margin-top:10px"><button class="btn primary" data-act="aiAddAll">Add all '+askAI.items.length+' · '+rupee(askAI.items.reduce((a,i)=>a+lineTotal(i),0))+'</button></div></div>':"");
  }catch(e){
    const msg={cancelled:"Stopped.",not_granted:"Grocify needs your permission to use Claude for this. Reload the page to be asked again.",sampling_disabled:"Claude isn't available on this account.",rate_limited:"Too many requests just now. Try again in a minute.",invalid_json:"Couldn't read the answer. Try asking again.",image_rejected:"That photo couldn't be read. Try a clearer JPEG or PNG under 20 MB.",images_unavailable:"Photo reading isn't available here. Type the items instead.",refused:"Couldn't help with that request. Try rewording it."}[e&&e.code]||"Something went wrong. Try again.";
    out.innerHTML='<div class="note warn">'+ICON.alert+'<div>'+esc(msg)+'</div></div>';
    if(e&&["not_granted","sampling_disabled","not_declared","capability_disabled","capability_removed"].includes(e.code)){sample=null;$("#photoBtn").hidden=true;}
  }finally{$("#stopBtn").hidden=true;$("#askBtn").disabled=false;}
}

document.addEventListener("click",async e=>{
  const t=e.target.closest("[data-act],[data-tab]");if(!t)return;
  if(t.dataset.tab&&!t.dataset.act){setTab(t.dataset.tab);return;}
  const a=t.dataset.act,id=t.dataset.id,it=id&&S.items.find(x=>x.id===id);
  switch(a){
    case"toggle":if(it)store.updateItem(id,{done:!it.done});break;
    case"inc":if(it)store.updateItem(id,{qty:(+it.qty||1)+1,size:null});break;
    case"dec":if(it){const q=(+it.qty||1)-1;if(q<=0)store.deleteItem(id);else store.updateItem(id,{qty:q,size:null});}break;
    case"del":if(it){store.deleteItem(id);toast("Removed "+it.name);}break;
    case"edit":openEdit(id);break;
    case"close":$("#modal").innerHTML="";break;
    case"list":S.list=t.dataset.l;render();break;
    case"newlist":openNewList();break;
    case"loadSample":for(const x of sampleItems())await store.addItem(x);break;
    case"addName":{const p=parseLine(t.dataset.n);if(p)addParsed([p]);break;}
    case"finish":finishTrip();break;
    case"swapAlt":if(it){const al=BYK[it.ck].alt;store.updateItem(id,{name:al[0],price:al[1],saved:it.price-al[1]});toast("Switched to "+al[0]);}break;
    case"swapHealth":if(it){const c=BYK[BYK[it.ck].sw];store.updateItem(id,{name:c.n,emoji:c.e,cat:c.c,unit:c.u,price:c.p,ck:c.k,size:null});toast("Swapped for "+c.n);}break;
    case"clearSample":for(const tr of S.trips.filter(x=>x.sample))await store.deleteTrip(tr.id);break;
    case"diet":S.profile.diet=t.dataset.k;store.saveProfile();break;
    case"allergy":case"goal":{const key=a==="allergy"?"allergens":"goals";const arr=S.profile[key];const k=t.dataset.k;S.profile[key]=arr.includes(k)?arr.filter(x=>x!==k):arr.concat([k]);store.saveProfile();break;}
    case"addRecipe":{const r=RECIPES.find(x=>x.n===t.dataset.r);const have=new Set(S.items.map(i=>i.ck).concat(pantryKeys()));const miss=r.i.filter(k=>!have.has(k)).map(k=>{const c=BYK[k];return{name:c.n,emoji:c.e,cat:c.c,unit:c.u,qty:1,price:c.p,ck:k,size:null};});addParsed(miss);break;}
    case"preset":$("#aiInput").value=t.dataset.q;askAI(t.dataset.q);break;
    case"ask":askAI($("#aiInput").value);break;
    case"stopAsk":askAI.ctl&&askAI.ctl.abort();break;
    case"aiAdd":{const x=askAI.items[+t.dataset.ix];if(x){addParsed([Object.assign({},x)]);t.disabled=true;t.textContent="Added";}break;}
    case"aiAddAll":addParsed(askAI.items.map(x=>Object.assign({},x)));t.disabled=true;t.textContent="Added";break;
    case"resetDemo":try{localStorage.removeItem(LOCAL_KEY);localStorage.removeItem("grocify:pantry");}catch(_){}location.reload();break;
    case"photo":$("#photoInput").click();break;
    case"pskip":if(pausePending){const{it:pi,done}=pausePending;store.addSkip({name:pi.name,ck:pi.ck,price:lineTotal(pi),at:now(),by:S.uid||"me"});toast("Skipped. "+rupee(lineTotal(pi))+" saved.");pausePending=null;done();}break;
    case"pswap":if(pausePending){const{it:pi,sw,done}=pausePending;store.addSkip({name:pi.name,ck:pi.ck,price:Math.max(0,lineTotal(pi)-sw.p),at:now(),by:S.uid||"me"});store.addItem({name:sw.n,emoji:sw.e,cat:sw.c,unit:sw.u,qty:1,price:sw.p,ck:sw.k,size:null});pausePending=null;done();}break;
    case"padd":if(pausePending){const{it:pi,done}=pausePending;store.addItem(pi);pausePending=null;done();}break;
  }
});
$("#addForm").addEventListener("submit",e=>{e.preventDefault();const v=$("#addInput").value;const p=parseInput(v);if(!p.length)return;$("#addInput").value="";addParsed(p);});
$("#photoInput").addEventListener("change",e=>{const f=e.target.files&&e.target.files[0];if(!f)return;setTab("plan");askAI("",f);e.target.value="";});
let bt;$("#budgetInput").addEventListener("input",e=>{clearTimeout(bt);bt=setTimeout(()=>{const v=Math.max(0,+e.target.value||0);if(v!==+S.settings.weeklyBudget)store.saveSettings({weeklyBudget:v});},600);});
$("#guardToggle").addEventListener("change",e=>store.saveSettings({guard:e.target.checked}));
let pt;$("#pantryInput").addEventListener("input",e=>{S.pantry=e.target.value;lsSet("grocify:pantry",S.pantry);clearTimeout(pt);pt=setTimeout(renderPlan,300);});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#modal").innerHTML&&!pausePending)$("#modal").innerHTML="";});

const h=(location.hash||"").slice(1);if(TABS.some(t=>t[0]===h))S.tab=h;
setTab(S.tab);
boot();
setInterval(()=>{if(!pausing&&!$("#modal").innerHTML)renderSide();},60000);
})();
