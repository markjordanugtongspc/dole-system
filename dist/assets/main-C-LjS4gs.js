import"./vendor-DC5wud4b.js";import{initFlowbite as pe}from"./vendor-flowbite-B2TFTxm5.js";import{g as x,_ as fe,i as ge,a as he,b as me,c as be,d as xe,e as ye,u as we}from"./auth-PTnwH-jz.js";import{A as ve}from"./vendor-charts-BjInCqFR.js";import N from"./vendor-swal-BSk0fVSb.js";const S=()=>document.documentElement.classList.contains("dark"),ke=()=>S()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},m={royalBlue:()=>S()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(S(),"#94a3b8")};let P=null,v="ALL",X="Overall Stats";const J={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function _(){let t=[];if(P)t=P;else try{const g=await(await fetch(`${x()}api/beneficiaries.php`)).json();if(g.success)t=g.beneficiaries||[],P=t;else{console.error("Failed to load chart data:",g.error);return}}catch(l){console.error("Error fetching chart data:",l);return}if(t.length===0)return;document.querySelectorAll('[id$="-chart"]').forEach(l=>l.innerHTML="");const e=ke(),o=Ce(t);Ae(o);const r=[...new Set(t.map(l=>{const g=l.startDate||l.createdAt;return g?new Date(g).getFullYear().toString():null}).filter(l=>l))].sort((l,g)=>g-l);Le(r);const n=new Date;let s=[];if(v==="ALL"){const g=new Date().getFullYear();for(let E=2020;E<=g;E++)s.push(E.toString())}else if(r.includes(v))s=["Q1","Q2","Q3","Q4"];else{const l=parseInt(v)||7;s=Array.from({length:l},(g,E)=>{const B=new Date;return B.setDate(n.getDate()-(l-1-E)),B.toISOString().split("T")[0]})}const a={};s.forEach(l=>a[l]=0),t.forEach(l=>{const g=l.startDate||l.createdAt;if(g){const E=new Date(g),B=E.getFullYear().toString(),V=typeof g=="string"&&g.includes("T")?g.split("T")[0]:E.toISOString().split("T")[0];if(v==="ALL")a.hasOwnProperty(B)&&a[B]++;else if(v.includes("D"))a.hasOwnProperty(V)&&a[V]++;else if(B===v){const Y="Q"+(Math.floor(E.getMonth()/3)+1);a.hasOwnProperty(Y)&&a[Y]++}}});const i=Object.values(a),p=i.reduce((l,g)=>l+g,0),d=i[i.length-1]||0,h=i[i.length-2]||0;let f;if(v==="ALL"){const l=p/s.length;f=d>=l}else f=d>=h;document.querySelectorAll(".metric-added-count").forEach(l=>{l.textContent=p,l.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${f?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`});const b=h>0?Math.round((d-h)/h*100):d>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(l=>l.textContent=(b>=0?"+":"")+(v==="ALL"?"Growth":b+"%"));const c=document.getElementById("added-metric-badge");c&&(c.className=`flex items-center px-3 py-1 text-[10px] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${f?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30"}`);const k=document.getElementById("added-metric-icon");k&&(k.style.transform=f?"rotate(0deg)":"rotate(180deg)");const O=document.getElementById("dropdownDefaultButton");O&&(O.innerHTML=`${X} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`);const se={chart:{height:160,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!0},background:"transparent"},theme:{mode:S()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:f?m.successGreen:m.philippineRed,opacity:.6},{offset:100,color:f?m.successGreen:m.philippineRed,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[f?m.successGreen:m.philippineRed]},series:[{name:"New Beneficiaries",data:i}],xaxis:{categories:s},yaxis:{show:!1},grid:{show:!1,padding:{left:10,right:35,top:0,bottom:0}},colors:[f?m.successGreen:m.philippineRed],markers:{size:s.length>20?0:4,colors:[f?m.successGreen:m.philippineRed],strokeColors:e.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:S()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};I("workforce-chart",se);const ie={series:[o.genders.Female||0,o.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:e.cardBg},colors:[m.philippineRed,m.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"12px",fontWeight:600,color:e.muted},value:{show:!0,fontSize:"24px",fontWeight:900,color:e.text,formatter:l=>l},total:{show:!0,label:"TOTAL",fontSize:"10px",fontWeight:800,color:e.muted,formatter:l=>l.globals.seriesTotals.reduce((g,E)=>g+E,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[e.cardBg],width:4},theme:{mode:S()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"18px"}}}}}}}]};I("gender-chart",ie);const le={series:[o.education["College Grad"],o.education["College Lvl"],o.education["HS Grad"],o.education["Senior High"]].map(l=>Math.round(l/t.length*100)),chart:{height:300,type:"radialBar",background:e.cardBg},plotOptions:{radialBar:{hollow:{size:"30%"},dataLabels:{name:{fontSize:"11px",fontWeight:700,color:e.muted,offsetY:-5},value:{fontSize:"16px",fontWeight:900,color:e.text,offsetY:5},total:{show:!0,label:"GRADUATES",color:e.muted}},track:{background:e.grid,strokeWidth:"95%"}}},colors:[m.royalBlue(),m.goldenYellow,m.philippineRed,m.mutedSlate()],labels:["Col. Grad","Col. Lvl","HS Grad","Snr High"],theme:{mode:S()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{radialBar:{hollow:{size:"20%"},dataLabels:{value:{fontSize:"14px"}}}}}}]};I("education-chart",le);const W=Object.entries(o.designations).sort((l,g)=>g[1]-l[1]).slice(0,5),ce={series:[{name:"Beneficiaries",data:W.map(l=>l[1]),color:m.royalBlue()}],chart:{type:"bar",height:180,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:e.cardBg},plotOptions:{bar:{horizontal:!0,columnWidth:"100%",borderRadius:4,barHeight:"60%"}},dataLabels:{enabled:!1},xaxis:{categories:W.map(l=>l[0]),labels:{show:!0,style:{fontWeight:600,colors:e.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!0,style:{fontWeight:700,colors:e.text,fontSize:"10px"}}},grid:{borderColor:e.grid,strokeDashArray:4,padding:{left:-15,right:0}},theme:{mode:S()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160},xaxis:{labels:{style:{fontSize:"8px"}}},yaxis:{labels:{style:{fontSize:"9px"}}}}}]};I("job-roles-chart",ce);const de={series:[{name:"Beneficiaries",data:Object.values(o.ages),color:m.royalBlue()}],chart:{type:"area",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:e.cardBg},stroke:{curve:"smooth",width:3},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1}},dataLabels:{enabled:!0,offsetY:-10,offsetX:0,style:{fontSize:"9px",fontWeight:"800"},background:{enabled:!0,padding:3,borderRadius:4,borderWidth:0,opacity:.9}},xaxis:{categories:Object.keys(o.ages),labels:{style:{fontWeight:600,colors:e.muted,fontSize:"10px"}},axisBorder:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:e.muted,fontSize:"10px"}}},grid:{borderColor:e.grid,strokeDashArray:6,padding:{left:20,right:60}},theme:{mode:S()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160}}}]};I("age-chart",de);const T=Ee(t);Se(T);const ue={series:[{name:"Actual Beneficiaries",data:Object.values(T.municipalityData).map(l=>l.actual)},{name:"Target Slots",data:Object.values(T.municipalityData).map(l=>l.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:e.cardBg},theme:{mode:S()?"dark":"light"},colors:[m.royalBlue(),S()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(T.municipalityData),labels:{style:{fontWeight:600,colors:e.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:e.muted}}},legend:{show:!1},fill:{opacity:1},grid:{borderColor:e.grid,strokeDashArray:4,yaxis:{lines:{show:!0}}}};I("performance-gap-chart",ue)}function I(t,e){const o=document.getElementById(t);if(!o)return;o.innerHTML="",new ve(o,e).render()}function Ce(t){const e={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},totalAge:0,ageCount:0};return t.forEach(o=>{const r=o.office||"Unassigned";e.offices[r]=(e.offices[r]||0)+1;const n=(o.gender||"Unknown").trim(),s=n==="F"||n==="Female"?"Female":n==="M"||n==="Male"?"Male":"Unknown";e.genders[s]++;const a=(o.education||"").toUpperCase();a.includes("GRADUATE")||a.includes("DEGREE")||a.includes("BS")||a.includes("AB")?e.education["College Grad"]++:a.includes("COLLEGE")||a.includes("LEVEL")||a.includes("UNIT")?e.education["College Lvl"]++:a.includes("SENIOR")?e.education["Senior High"]++:(a.includes("HS")||a.includes("HIGH"))&&e.education["HS Grad"]++;const i=o.designation||"General Support";e.designations[i]=(e.designations[i]||0)+1;const p=parseInt(o.age);isNaN(p)||(e.totalAge+=p,e.ageCount++,p>=18&&p<=24?e.ages["18-24"]++:p>=25&&p<=30?e.ages["25-30"]++:p>=31&&p<=40?e.ages["31-40"]++:p>=41&&e.ages["41+"]++)}),e}function Ee(t){const e={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(J).forEach(([o,r])=>{e.municipalityData[o]={actual:0,target:r},e.totalTarget+=r}),t.forEach(o=>{const r=(o.office||"").toUpperCase();let n="OTHER";for(const a in J)if(r.includes(a)){n=a;break}if(e.municipalityData[n]&&(e.municipalityData[n].actual++,e.totalActual++),(o.remarks||"ONGOING").toUpperCase()==="RESIGNED"?e.retention.resign++:e.retention.count++,o.createdAt&&o.startDate){const a=new Date(o.createdAt),i=new Date(o.startDate),p=Math.ceil((i-a)/(1e3*60*60*24));p>=0&&p<180&&(e.velocity.totalDays+=p,e.velocity.count++)}}),e}function Se(t){const e=t.totalTarget>0?(t.totalActual/t.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(s=>{s.textContent=e+"%";const a=s.parentElement?.nextElementSibling?.firstElementChild;a&&(a.style.width=e+"%")});const o=t.velocity.count>0?(t.velocity.totalDays/t.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(s=>s.textContent=o);const r=t.retention.count+t.retention.resign,n=r>0?(t.retention.count/r*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(s=>s.textContent=n+"%")}function Ae(t){const e=Object.values(t.offices).reduce((c,k)=>c+k,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(c=>c.textContent=e);const o=t.genders.Female||0,r=t.genders.Male||0,n=o+r,s=n>0?Math.round(o/n*100)+"%":"0%",a=n>0?Math.round(r/n*100)+"%":"0%";document.querySelectorAll(".metric-female-ratio").forEach(c=>c.textContent=s),document.querySelectorAll(".metric-male-ratio").forEach(c=>c.textContent=a);const i=Object.keys(t.offices).length;document.querySelectorAll(".metric-deployment-sites").forEach(c=>c.textContent=i);const p=t.ageCount>0?Math.round(t.totalAge/t.ageCount):0;document.querySelectorAll(".metric-avg-age").forEach(c=>c.textContent=p),document.querySelectorAll(".metric-avg-age-range").forEach(c=>c.textContent=p+" YRS"),Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([c,k])=>{document.querySelectorAll(k).forEach(O=>O.textContent=t.education[c]||0)});const h=Object.values(t.designations).reduce((c,k)=>c+k,0);let f=0;Object.entries(t.designations).forEach(([c,k])=>{c.toLowerCase().match(/field|driver|maintenance/)&&(f+=k)}),document.querySelectorAll(".count-office-based").forEach(c=>c.textContent=h-f),document.querySelectorAll(".count-field-based").forEach(c=>c.textContent=f);const b=Object.entries(t.designations).sort((c,k)=>k[1]-c[1])[0]?.[0]||"N/A";document.querySelectorAll(".metric-top-role").forEach(c=>c.textContent=b)}function Le(t){const e=document.querySelector("#lastDaysdropdown ul");if(!e)return;let o=`
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${v==="ALL"?"bg-royal-blue/10 text-royal-blue":""}">Overall Stats</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${v==="7D"?"bg-royal-blue/10 text-royal-blue":""}">Last 7 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${v==="30D"?"bg-royal-blue/10 text-royal-blue":""}">Last 30 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${v==="90D"?"bg-royal-blue/10 text-royal-blue":""}">Last 90 Days</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;t.forEach(r=>{o+=`<li><a href="javascript:void(0)" onclick="updateWorkforceFilter('${r}', 'Year ${r}')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${v===r?"bg-royal-blue/10 text-royal-blue":""}">Year ${r}</a></li>`}),e.innerHTML=o}function De(t,e){v=t,X=e;const o=document.getElementById("lastDaysdropdown");if(o&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown","lastDaysdropdown");r&&r.hide()}else o&&o.classList.add("hidden");_()}window.updateWorkforceFilter=De;document.addEventListener("themeChanged",()=>{setTimeout(()=>_(),50)});async function L(t,e={}){const r=`${x()}${t}`;let n=null;try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(n=a.id)}catch{}const s={headers:{"Content-Type":"application/json",...n?{"X-User-Id":n}:{},...e.headers},...e};try{const a=await fetch(r,s);if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);return{success:!0,data:await a.json()}}catch(a){return console.error("API Request Error:",a),{success:!1,error:a.message}}}async function Be(t){return L(t,{method:"GET"})}class Ie{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(e,o,r=1e4){this.stop(e),o();const n=setInterval(async()=>{this.isPageVisible&&await o()},r);this.intervals.set(e,n),console.log(`[Polling] Started: ${e} (every ${r}ms)`)}stop(e){this.intervals.has(e)&&(clearInterval(this.intervals.get(e)),this.intervals.delete(e),console.log(`[Polling] Stopped: ${e}`))}stopAll(){this.intervals.forEach((e,o)=>this.stop(o)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const Q=new Ie;function K(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function $e(t,e="",o="info"){N.fire({toast:!0,position:"top-end",icon:o,title:t,text:e,showConfirmButton:!1,timer:3e3,timerProgressBar:!0})}function Oe(t){return JSON.stringify(t)}window.addEventListener("beforeunload",()=>{Q.stopAll()});let j=null,H="default",G=0,R=localStorage.getItem("last_notified_id")?parseInt(localStorage.getItem("last_notified_id")):0;function Te(){const t=x();j=new Audio(`${t}backend/src/assets/sounds/ping-ding.mp3`),Ne(),Me(),He(),M()}async function Ne(){if(!("Notification"in window)){console.log("This browser does not support notifications");return}if(Notification.permission==="default"){const{default:t}=await fe(async()=>{const{default:o}=await import("./vendor-swal-BSk0fVSb.js");return{default:o}},[]);if((await t.fire({title:"Enable Notifications?",html:`
                <div class="text-left">
                    <p class="text-sm text-gray-600 mb-3">Stay updated with real-time alerts when:</p>
                    <ul class="text-sm text-gray-700 space-y-2 mb-4">
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span>New beneficiaries are added to the system</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span>Documents require your review and approval</span>
                        </li>
                    </ul>
                    <p class="text-xs text-gray-500 italic">Recommended for better user experience</p>
                </div>
            `,icon:"question",showCancelButton:!0,confirmButtonText:"Allow Notifications",cancelButtonText:"Maybe Later",confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",customClass:{popup:"rounded-2xl",confirmButton:"font-bold",cancelButton:"font-bold"}})).isConfirmed){const o=await Notification.requestPermission();H=o,o==="granted"&&t.fire({icon:"success",title:"Notifications Enabled!",text:"You will now receive real-time updates.",timer:3e3,showConfirmButton:!1})}}else H=Notification.permission}function Me(){const t=document.getElementById("notificationBellButton"),e=document.getElementById("notificationDropdown");!t||!e||t.addEventListener("click",()=>{M()})}async function M(){x(),document.getElementById("notificationDropdown");const t=document.getElementById("notificationList");if(t){Pe(t);try{const e=await L("api/notifications.php"),o=e.data;e.success&&o.success?(ee(o.notifications),D(o.unread_count)):Z(t)}catch(e){console.error("Error loading notifications:",e),Z(t)}}}function Pe(t){t.innerHTML=`
        <div class="flex items-center justify-center py-8">
            <span class="flex items-center bg-neutral-primary-soft border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-neutral-tertiary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/>
                </svg>
                <span>Loading notifications...</span>
            </span>
        </div>
    `}function Z(t){t.innerHTML=`
        <div class="flex items-center justify-center py-8 text-gray-500 text-sm">
            <p>Unable to load notifications</p>
        </div>
    `}function ee(t){const e=document.getElementById("notificationList");if(!e)return;const o=e.scrollTop;if(t.length===0){e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 text-center">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Empty</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">No recent activity detected</p>
            </div>
        `;return}const r=t.map(n=>Re(n)).join("");e.innerHTML=r,requestAnimationFrame(()=>{e.scrollTop=o})}function Re(t){const e=je(t.created_at),o=Fe(e),r=t.is_read===0;return`
        <a href="javascript:void(0)" 
           class="flex px-4 py-3 hover:bg-neutral-secondary-medium transition-all duration-300 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 ${r?"bg-emerald-50/30 dark:bg-emerald-500/10 border-l-4 border-emerald-500 shadow-md ring-1 ring-emerald-500/10 z-10":"opacity-60 grayscale-[0.2] border-l-4 border-transparent"}" 
           data-notification-id="${t.id}"
           onclick="markAsRead(${t.id}); return false;">
            <div class="shrink-0 relative">
                <div class="w-11 h-11 rounded-full ${r?"bg-gradient-to-br from-royal-blue to-blue-700":"bg-slate-200 dark:bg-slate-700"} flex items-center justify-center text-white font-black text-sm shadow-sm transition-all duration-500">
                    <svg class="w-6 h-6 ${r?"":"text-slate-400 dark:text-slate-500"}" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>
                </div>
                ${r?`
                <div class="notification-marker absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full shadow-sm z-10 transition-opacity duration-300">
                    <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </div>
                `:""}
            </div>
            <div class="w-full ps-3">
                <div class="text-body text-sm mb-1.5 ${r?"font-semibold":""}">
                    ${t.message}
                </div>
                <div class="flex items-center gap-2">
                    ${o}
                </div>
            </div>
        </a>
    `}function Fe(t){const e=t.minutes;return e<1?`
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Just now
            </span>
        `:e<2?`
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-success-medium" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#009966"/>
                </svg>
                <span>1 min ago</span>
            </span>
        `:e<3?`
            <span class="flex items-center bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-neutral-quaternary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/>
                </svg>
                <span>2 mins ago</span>
            </span>
        `:`
            <span class="flex items-center bg-neutral-primary-soft border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <span>${t.text}</span>
            </span>
        `}function je(t){const e=new Date,o=new Date(t),r=e-o,n=Math.floor(r/6e4),s=Math.floor(r/36e5),a=Math.floor(r/864e5);let i="";return n<1?i="Just now":n<60?i=`${n} min${n>1?"s":""} ago`:s<24?i=`${s} hour${s>1?"s":""} ago`:i=`${a} day${a>1?"s":""} ago`,{text:i,minutes:n,hours:s,days:a}}function D(t){G=t;const e=document.getElementById("notificationBadge"),o=document.getElementById("notificationBellIcon");e&&(t>0?(e.textContent=t>99?"99+":t,e.classList.remove("hidden")):e.classList.add("hidden")),o&&(t>0?o.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                </svg>
            `:o.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                </svg>
            `)}window.markAllAsRead=async function(){if(x(),!!document.getElementById("notificationList")){D(0);try{const e=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_all_read"})}),o=e.data;e.success&&o.success&&(D(0),M())}catch(e){console.error("Error marking all as read:",e),D(0),M()}}};window.clearNotificationView=async function(){x();const t=document.getElementById("notificationList");if(t){D(0),t.style.opacity="0",setTimeout(()=>{t.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 transition-all duration-500">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Cleared</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">Notifications have been archived</p>
            </div>
        `,t.style.opacity="1"},300);try{const e=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"clear_all"})}),o=e.data;e.success&&o.success}catch(e){console.error("Error clearing notifications:",e)}}};window.markAsRead=async function(t){x();const e=document.querySelector(`[data-notification-id="${t}"]`);if(e){const o=e.querySelector(".notification-marker");o&&(o.style.display="none"),e.classList.remove("bg-emerald-50/20","dark:bg-emerald-500/5","border-l-4","border-emerald-500","shadow-xs"),e.classList.add("opacity-60","grayscale-[0.2]","border-l-4","border-transparent");const r=e.querySelector(".rounded-full");if(r){r.classList.remove("bg-gradient-to-br","from-royal-blue","to-blue-700"),r.classList.add("bg-slate-200","dark:bg-slate-700");const n=r.querySelector("svg");n&&n.classList.add("text-slate-400","dark:text-slate-500")}}G>0&&D(G-1);try{await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_read",notification_id:t})})}catch(o){console.error("Error marking notification as read:",o)}};function He(){setInterval(async()=>{await te()},1e4)}async function te(){x();const t=document.getElementById("notificationDropdown");try{const e=await L("api/notifications.php?check_new=1"),o=e.data;if(e.success&&o.success){if(D(o.unread_count),t&&!t.classList.contains("hidden")){const r=await L("api/notifications.php"),n=r.data;r.success&&n.success&&ee(n.notifications)}if(o.has_new){const r=o.latest_notification;r&&r.id>R&&(R=r.id,localStorage.setItem("last_notified_id",R),Ge(),_e(r))}}}catch(e){console.error("Error checking notifications:",e)}}function Ge(){const t=JSON.parse(localStorage.getItem("user")||"{}"),e=t.notifications_enabled!==void 0?parseInt(t.notifications_enabled)===1:!0;e&&j?j.play().catch(o=>{console.log("Could not play notification sound (Interaction-required or muted):",o)}):e||console.log("Notification sound muted by user preference")}function _e(t){if(H==="granted"&&t){const e=JSON.parse(localStorage.getItem("user")||"{}"),o=e.notifications_enabled!==void 0?parseInt(e.notifications_enabled)===1:!0;new Notification("DOLE-GIP System",{body:t.message,icon:`${x()}frontend/images/logo/doleiligan.png`,badge:`${x()}frontend/images/logo/doleiligan.png`,tag:`notification-${t.id}`,requireInteraction:!1,silent:!o})}}async function ze(t,e="info"){x();try{const o=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"create",message:t,type:e})}),r=o.data;return o.success&&r.success&&await te(),r}catch(o){return console.error("Error creating notification:",o),{success:!1,error:o.message}}}let y=[],F=null,w=1;const $=10;let oe=null;async function z(){try{const e=await(await fetch(`${x()}api/beneficiaries.php`)).json();if(e.success){y=e.beneficiaries||[],re(y);const o=localStorage.getItem("ldn_sort_preference");o?ne(o,!1):A()}else console.error("Failed to load beneficiaries:",e.error),y=[],A()}catch(t){console.error("Error fetching beneficiaries:",t),y=[],A()}}function re(t){const e=new Date;e.setHours(0,0,0,0),t.forEach(o=>{if(o.remarks==="ONGOING"&&o.endDate){const r=new Date(o.endDate);if(r.setHours(0,0,0,0),r<e){o.remarks="EXPIRED";const n={...o};fetch(`${x()}api/beneficiaries.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).catch(s=>console.error("Auto sync failed",s))}}})}function qe(){z(),Qe(),Ke(),Ue()}function Ue(){document.getElementById("beneficiary-table-body")&&Q.start("beneficiaries",async()=>{if(window.BulkApp&&(window.BulkApp.isActive||Date.now()-(window.BulkApp.lastInteractionTime||0)<3e4))return;const o=await Be("api/beneficiaries.php");if(o.success&&o.data.beneficiaries){const r=o.data.beneficiaries;re(r);const n=Oe(r);F&&n!==F&&(y=r,A(),K(),$e("Data Synced","Beneficiary list has been updated","info")),F=n}},1e4)}function A(t=y){const e=document.getElementById("beneficiary-table-body");if(!e)return;if(oe=t,t.length===0){e.innerHTML=`
            <tr>
                <td colspan="7" class="px-6 py-10 text-center text-gray-400 font-medium">
                    <div class="flex flex-col items-center gap-2">
                        <svg class="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>No beneficiaries found matching your search.</span>
                    </div>
                </td>
            </tr>
        `;const i=document.getElementById("pagination-controls");i&&(i.innerHTML="");return}const o=t.length,r=Math.ceil(o/$);w>r&&(w=r||1),w<1&&(w=1);const n=(w-1)*$,s=n+$,a=t.slice(n,s);e.innerHTML=a.map(i=>`
        <tr class="bg-blue-50 border-b border-blue-100 hover:bg-blue-100 transition-colors group cursor-pointer"
            onclick='viewBeneficiary(${JSON.stringify(i)})'>
            <th scope="row" class="px-4 py-3 font-medium text-heading whitespace-nowrap font-mono text-xs text-center">
                ${i.id}
            </th>
            <td class="px-4 py-3 font-bold text-royal-blue text-center">
                ${i.name}
            </td>
            <td class="px-4 py-3 text-center">
                <div class="flex justify-center">
                    <span class="${Ye(i.office)} text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded whitespace-nowrap">
                        ${i.office||"N/A"}
                    </span>
                </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center">
                <span class="${i.startDateFormatted||i.startDate?"text-[11px] font-black text-royal-blue uppercase tracking-tight":"text-[10px] font-bold text-gray-300 italic"}">${i.startDateFormatted||i.startDate||"N/A"}</span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center">
                <span class="${i.endDateFormatted||i.endDate?"text-[11px] font-black text-philippine-red uppercase tracking-tight":"text-[10px] font-bold text-gray-300 italic"}">${i.endDateFormatted||i.endDate||"N/A"}</span>
            </td>
            <td class="px-4 py-3 text-center">
                <span class="${Je(i.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
                    ${i.remarks||"N/A"}
                </span>
            </td>
            <td class="px-4 py-3 flex gap-2">
                <button type="button"
                    class="font-medium text-royal-blue hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Edit Details" onclick='event.stopPropagation(); editBeneficiary(${JSON.stringify(i)})'>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="font-medium text-philippine-red hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Archive" onclick="event.stopPropagation(); archiveRecord('${i.id}')">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                </button>
            </td>
        </tr>
    `).join(""),We(o,r),K()}function We(t,e){const o=document.getElementById("pagination-controls");if(!o)return;if(t<=$){o.innerHTML=`
            <span class="text-xs font-bold text-gray-500">Showing all ${t} results</span>
            <div class="flex items-center gap-1"></div>
        `;return}const r=(w-1)*$+1,n=Math.min(w*$,t);o.innerHTML=`
        <span class="text-xs font-bold text-gray-500 px-2 py-1">
            Showing <span class="text-royal-blue">${r}-${n}</span> of <span class="text-royal-blue">${t}</span>
        </span>
        <div class="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
            <!-- Previous Button -->
            <button onclick="changePage(${w-1})" ${w===1?"disabled":""} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            ${Ve(w,e)}

            <!-- Next Button -->
            <button onclick="changePage(${w+1})" ${w===e?"disabled":""} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
    `}function Ve(t,e){let o="",n=Math.max(1,t-1),s=Math.min(e,n+3-1);s-n+1<3&&(n=Math.max(1,s-3+1)),n>1&&(o+='<span class="px-2 text-gray-400">...</span>');for(let a=n;a<=s;a++)o+=`
            <button onclick="changePage(${a})" 
                class="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-black transition-all cursor-pointer
                ${a===t?"bg-royal-blue text-white shadow-md shadow-royal-blue/20":"bg-white text-gray-600 hover:bg-royal-blue/10 hover:text-royal-blue border border-gray-100"}">
                ${a}
            </button>
        `;return s<e&&(o+='<span class="px-2 text-gray-400">...</span>'),o}window.changePage=t=>{w=t,A(oe||y)};function Ye(t){return t?t.includes("DOLE")?"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white":t.includes("DepEd")?"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white":t.includes("LGU")?"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white":t.includes("DICT")?"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white"}function Je(t){if(!t)return"bg-gray-100 text-gray-600 border-gray-200";const e=t.toUpperCase();return e==="ONGOING"?"bg-green-100 text-green-700 border-green-200":e==="EXPIRED"?"bg-red-400 text-white border-red-400":e==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":e==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 text-gray-600 border-gray-200"}function ne(t,e=!0){switch(e&&localStorage.setItem("ldn_sort_preference",t),t){case"name_asc":y.sort((r,n)=>{const s=r.name.localeCompare(n.name);return s!==0?s:new Date(r.createdAt)-new Date(n.createdAt)});break;case"name_desc":y.sort((r,n)=>{const s=n.name.localeCompare(r.name);return s!==0?s:new Date(r.createdAt)-new Date(n.createdAt)});break;case"office":y.sort((r,n)=>(r.office||"").localeCompare(n.office||""));break;case"remarks":y.sort((r,n)=>(r.remarks||"").localeCompare(n.remarks||""));break;case"education":y.sort((r,n)=>(r.education||"").localeCompare(n.education||""));break;case"work":y.sort((r,n)=>(r.designation||"").localeCompare(n.designation||""));break;case"address":y.sort((r,n)=>(r.address||"").localeCompare(n.address||""));break}w=1,A();const o=document.getElementById("sort-dropdown");o&&!o.classList.contains("hidden")&&o.classList.add("hidden")}async function Ze(t){try{const e=t.id?"PUT":"POST",o={...t};["name","address","education","designation"].forEach(a=>{o[a]&&typeof o[a]=="string"&&(o[a]=o[a].toUpperCase().trim())});const s=await(await fetch(`${x()}api/beneficiaries.php`,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return s.success?(e==="POST"&&ze(`New user <strong>${o.name}</strong> added. pending "Required Documents" for review.`,"success"),await z(),!0):(console.error("Failed to save beneficiary:",s.error),!1)}catch(e){return console.error("Error saving beneficiary:",e),!1}}async function Xe(t){if(!(await N.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',html:`
            <div class="py-4">
                <p class="text-sm font-medium text-gray-500">Are you sure you want to archive this record?</p>
                <p class="text-[10px] font-black text-philippine-red mt-1 uppercase tracking-widest">ID: ${t}</p>
            </div>
        `,showCancelButton:!0,confirmButtonText:`
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                <span>YES</span>
            </div>
        `,cancelButtonText:`
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>NO</span>
            </div>
        `,reverseButtons:!0,customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-green-50 text-green-700 hover:bg-green-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-green-200 shadow-sm mx-2 cursor-pointer",cancelButton:"bg-red-50 text-red-700 hover:bg-red-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-red-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)return!1;try{const r=await(await fetch(`${x()}api/beneficiaries.php?id=${encodeURIComponent(t)}&action=archive`,{method:"PATCH"})).json();if(r.success)return N.fire({toast:!0,position:"top-end",icon:"success",title:"Record Archived",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),await z(),!0;throw new Error(r.error||"Failed to archive")}catch(o){return console.error("Error archiving beneficiary:",o),N.fire({icon:"error",title:"Archive Failed",text:o.message}),!1}}function Qe(){const t=document.getElementById("ldn-header-container"),e=document.getElementById("ldn-header-text"),o=document.getElementById("ldn-header-icon");t&&e&&o&&(t.addEventListener("click",()=>{if(window.innerWidth<640)return;const r=e.innerText.trim(),n="Lanao Del Norte - GIP",s="LDN - GIP";e.querySelector(".sm\\:hidden")?.offsetParent,r.includes(n)?(e.innerHTML=s,o.classList.add("rotate-180")):(e.innerHTML=n,o.classList.remove("rotate-180"))}),t.classList.add("cursor-pointer","select-none","transition-all","duration-200"),o.classList.add("transition-transform","duration-200"))}function Ke(){const t=document.getElementById("table-search");t&&(t.addEventListener("input",e=>{const o=e.target.value.toLowerCase().trim();if(o===""){w=1,A(y);return}const r=y.filter(n=>n.name?.toLowerCase().includes(o)||!1||n.id?.toLowerCase().includes(o)||!1||n.office?.toLowerCase().includes(o)||!1||n.remarks?.toLowerCase().includes(o)||!1||n.designation?.toLowerCase().includes(o)||!1||n.address?.toLowerCase().includes(o)||!1||n.education?.toLowerCase().includes(o)||!1);w=1,A(r)}),window.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==t&&(e.preventDefault(),t.focus())}))}window.sortData=ne;window.archiveRecord=Xe;window.addBeneficiaryData=Ze;let q=[],C=["id","name","office","position","status"],u={office:"ALL",status:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","office","position","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""};async function et(){tt(),await rt()}function tt(){const t=localStorage.getItem("ldn_export_config");if(t)try{const e=JSON.parse(t);u={...u,...e},C=u.columns}catch(e){console.error("Error loading saved export config",e)}}function ot(){localStorage.setItem("ldn_export_config",JSON.stringify(u))}async function rt(){try{const e=await(await fetch(`${x()}api/beneficiaries.php?all=true`)).json();e.success&&e.beneficiaries&&(q=e.beneficiaries,window.handleFilterUpdate(u))}catch(t){console.error("Error loading data for export",t)}}window.handleFilterUpdate=function(t){u={...u,...t},t.columns&&(C=t.columns),t.preparedBy!==void 0&&(u.preparedBy=t.preparedBy),t.approvedBy!==void 0&&(u.approvedBy=t.approvedBy),ot();let e=[...q];u.search&&(e=e.filter(o=>o.name.toLowerCase().includes(u.search)||o.id.toLowerCase().includes(u.search))),u.office!=="ALL"&&(e=e.filter(o=>o.office.includes(u.office))),u.status!=="ALL"&&(e=e.filter(o=>o.remarks.toUpperCase()===u.status.toUpperCase())),u.section==="ACTIVE"?e=e.filter(o=>!o.isArchived):u.section==="ARCHIVED"&&(e=e.filter(o=>o.isArchived)),u.sort&&e.sort((o,r)=>{switch(u.sort){case"name":return(o.name||"").localeCompare(r.name||"");case"id":return(o.id||"").localeCompare(r.id||"");case"office":return(o.office||"").localeCompare(r.office||"");case"startdate":const n=new Date(o.startDate||0);return new Date(r.startDate||0)-n;default:return 0}}),nt(e)};window.getExportFilters=()=>u;function nt(t){st(t),it(t);const e=document.getElementById("record-count");e&&(e.textContent=t.length),window.currentFilteredData=t}window.exportToExcel=function(){const t=window.currentFilteredData||q,e=C,o=`
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="UTF-8">
            <!--[if gte mso 9]>
            <xml>
                <x:ExcelWorkbook>
                    <x:ExcelWorksheets>
                        <x:ExcelWorksheet>
                            <x:Name>LDN Beneficiaries</x:Name>
                            <x:WorksheetOptions>
                                <x:DisplayGridlines/>
                            </x:WorksheetOptions>
                        </x:ExcelWorksheet>
                    </x:ExcelWorksheets>
                </x:ExcelWorkbook>
            </xml>
            <![endif]-->
            <style>
                .header { background-color: #0046ad; color: #ffffff; font-weight: bold; text-transform: uppercase; border: 1px solid #003080; }
                .cell { border: 1px solid #e5e7eb; padding: 10px; font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; }
                .title { font-size: 18px; font-weight: bold; color: #0046ad; margin-bottom: 20px; }
                .status-ongoing { color: #16a34a; font-weight: bold; }
                .status-absorbed { color: #d97706; font-weight: bold; }
                .status-resigned { color: #64748b; font-weight: bold; }
                .status-expired { color: #dc2626; font-weight: bold; }
                .divider { background-color: #f8fafc; font-weight: bold; color: #475569; text-align: center; }
            </style>
        </head>
        <body>
            <table>
                <tr><td colspan="${e.length}" class="title">DOLE LDNPFO - BENEFICIARY REPORT</td></tr>
                <tr><td colspan="${e.length}" style="color: #64748b; font-size: 10px;">Generated on: ${new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date)}</td></tr>
                <tr><td colspan="${e.length}"></td></tr>
                <tr height="40">
                    ${e.map(a=>`<th class="header cell">${U[a]||a.toUpperCase()}</th>`).join("")}
                </tr>
                ${(()=>{let a=null,i="";[...t].sort((d,h)=>d.isArchived-h.isArchived).forEach(d=>{d.isArchived!==a&&(a=d.isArchived,i+=`<tr><td colspan="${e.length}" class="cell divider">${a?"ARCHIVED RECORDS":"ACTIVE BENEFICIARIES"}</td></tr>`),i+=`<tr>${e.map(h=>{let f=d[h]||"-";return h==="position"&&(f=d.designation||"-"),h==="startdate"&&(f=d.startDateFormatted||d.startDate||"-"),h==="enddate"&&(f=d.endDateFormatted||d.endDate||"-"),h==="status"?(f=d.remarks||"N/A",`<td class="cell ${"status-"+f.toLowerCase()}">${f}</td>`):`<td class="cell">${f}</td>`}).join("")}</tr>`})})()}
                <tr><td colspan="${e.length}"></td></tr>
                <tr><td colspan="${e.length}"></td></tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Prepared by:</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Approved by:</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${u.preparedBy||""}</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${u.approvedBy||""}</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                </tr>
            </table>
        </body>
        </html>
    `,r=new Blob([o],{type:"application/vnd.ms-excel"}),n=window.URL.createObjectURL(r),s=document.createElement("a");s.href=n,s.download=`LDN_RECORDS_${new Date().toISOString().slice(0,10)}.xls`,document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(n),document.body.removeChild(s)};const U={id:"ID NO.",name:"NAME",office:"OFFICE",position:"DESIGNATION",status:"STATUS",startdate:"START DATE",enddate:"END DATE"};function at(t,e="px-4 py-2.5"){return`
        <tr class="text-[11px] text-white uppercase bg-royal-blue font-bold tracking-widest text-center">
            ${t.map(o=>{let r="";return o==="name"&&(r=' title="Last Name, First Name, Middle Initial"'),`<th scope="col" class="${e}"${r}>${U[o]||o.toUpperCase()}</th>`}).join("")}
        </tr>
    `}function ae(t,e,o=!1){return e.map(r=>{let n=t[r]||"-";if(r==="position"&&(n=t.designation||"-"),r==="startdate"&&(n=t.startDateFormatted||t.startDate||"-"),r==="enddate"&&(n=t.endDateFormatted||t.endDate||"-"),r==="status"&&(n=t.remarks||"N/A"),o){let s="px-3 py-2 border border-gray-200 text-center";return r==="id"&&(s+=" font-mono font-bold"),r==="name"&&(s+=" font-bold text-black uppercase leading-tight text-left px-4"),r==="status"&&(s+=` text-center font-bold uppercase ${{ABSORBED:"text-golden-yellow",RESIGNED:"text-slate-500",EXPIRED:"text-philippine-red",ONGOING:"text-green-600"}[n]||"text-gray-500"}`),(r==="startdate"||r==="enddate")&&(s+=" text-center font-mono text-[9px]"),`<td class="${s}">${n}</td>`}else return r==="id"?`<th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap font-mono text-xs text-center">${n}</th>`:r==="name"?`<td class="px-4 py-3 font-bold text-royal-blue group-hover/row:translate-x-1 transition-transform uppercase">${n}</td>`:r==="office"?`<td class="px-4 py-3 text-center"><span class="bg-white text-blue-700 px-2 py-0.5 rounded text-[10px] border border-blue-100 font-bold shadow-sm">${n}</span></td>`:r==="status"?`<td class="px-4 py-3 text-center"><span class="${{ABSORBED:"bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20",RESIGNED:"bg-slate-100 text-slate-500 border-slate-200",EXPIRED:"bg-red-50 text-philippine-red border-red-100",ONGOING:"bg-green-50 text-green-600 border-green-100"}[n]||"bg-gray-100 text-gray-700 border-gray-200"} px-2 py-0.5 rounded text-xs border uppercase font-bold text-[10px] shadow-sm">${n}</span></td>`:r==="startdate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-royal-blue uppercase tracking-tight">${n}</td>`:r==="enddate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-philippine-red uppercase tracking-tight">${n}</td>`:`<td class="px-4 py-3 text-xs font-semibold text-gray-500 text-center">${n}</td>`}).join("")}function st(t){const e=document.querySelector(".overflow-x-auto table");if(!e)return;const o=e.querySelector("thead"),r=document.getElementById("web-table-body");if(o.innerHTML=at(C),t.length===0){r.innerHTML=`<tr><td colspan="${C.length}" class="px-6 py-12 text-center text-gray-400 font-medium italic">No matching records found.</td></tr>`;return}const n=[...t].sort((d,h)=>d.isArchived!==h.isArchived?d.isArchived-h.isArchived:0);let s=null,a=null,i="";const p=u.section==="ALL";n.forEach(d=>{p&&d.isArchived!==s&&(s=d.isArchived,a=null,i+=`
                <tr class="${s?"bg-red-50/30":"bg-green-50/30"}">
                    <td colspan="${C.length}" class="px-6 py-3 border-y border-gray-100 text-center">
                        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${s?"bg-red-100 text-red-600 border border-red-200":"bg-green-100 text-green-600 border border-green-200"}">
                            ${s?"Archived Records":"Active Beneficiaries"}
                        </span>
                    </td>
                </tr>
            `),d.office!==a&&(a=d.office,i+=`
                <tr class="bg-gray-50/50">
                    <td colspan="${C.length}" class="px-8 py-2 border-b border-gray-100">
                        <div class="flex items-center gap-2 opacity-60">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest">${a||"UNASSIGNED OFFICE"}</span>
                        </div>
                    </td>
                </tr>
            `),i+=`
            <tr class="bg-white hover:bg-gray-50 transition-colors group/row border-b border-gray-50">
                ${ae(d,C)}
            </tr>
        `}),r.innerHTML=i}function it(t){const e=document.getElementById("print-area");if(!e)return;const r=e.querySelector("table").querySelector("thead"),n=document.getElementById("print-table-body");r.innerHTML=`
        <tr class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[10px] text-center">
            ${C.map(b=>{let c="";return b==="name"&&(c=' title="Last Name, First Name, Middle Initial"'),`<th class="px-3 py-2 border border-royal-blue"${c}>${U[b]||b.toUpperCase()}</th>`}).join("")}
        </tr>
    `;const s=document.getElementById("print-prepared-by"),a=document.getElementById("print-approved-by");s&&(s.textContent=u.preparedBy),a&&(a.textContent=u.approvedBy);const i=[...t].sort((b,c)=>b.isArchived!==c.isArchived?b.isArchived-c.isArchived:0);let p=null,d=null,h="";const f=u.section==="ALL";i.forEach((b,c)=>{f&&b.isArchived!==p&&(p=b.isArchived,d=null,h+=`
                <tr class="print:bg-gray-200 bg-gray-200">
                    <td colspan="${C.length}" class="px-3 py-1 border border-gray-400 text-center">
                        <span class="text-[10px] font-black uppercase tracking-[0.2em]">${p?"SECTION: ARCHIVED RECORDS":"SECTION: ACTIVE BENEFICIARIES"}</span>
                    </td>
                </tr>
            `),b.office!==d&&(d=b.office,h+=`
                <tr class="bg-gray-50 print:bg-gray-50">
                    <td colspan="${C.length}" class="px-3 py-1.5 border border-gray-200 text-center">
                        <span class="text-[9px] font-black text-gray-800 uppercase tracking-widest text-center">Office: ${d||"N/A"}</span>
                    </td>
                </tr>
            `),h+=`
            <tr class="${c%2===0?"bg-white":"bg-gray-50/30"} border-b border-gray-200">
                ${ae(b,C,!0)}
            </tr>
        `}),n.innerHTML=h}ge();he();window.initFlowbite=pe;document.addEventListener("DOMContentLoaded",()=>{console.log("DOLE System initialized");const t=window.location.pathname;me(),be(),xe(),_(),qe(),ye(),dt(),ut(),Te(),t.includes("/export/")&&et(),lt(),ct()});function lt(){document.querySelectorAll(".togglePassword").forEach(e=>{const o=e.closest(".relative").querySelector("input");e&&o&&e.addEventListener("click",()=>{const r=o.getAttribute("type")==="password"?"text":"password";o.setAttribute("type",r);const n=e.querySelector(".eye-open"),s=e.querySelector(".eye-closed");n&&s&&(n.classList.toggle("hidden"),s.classList.toggle("hidden"))})})}function ct(){const t=new Image;t.crossOrigin="Anonymous",t.onload=function(){const r=document.createElement("canvas"),n=64;r.width=n,r.height=n;const s=r.getContext("2d");s.beginPath(),s.arc(n/2,n/2,n/2,0,2*Math.PI),s.closePath(),s.clip(),s.drawImage(t,0,0,n,n);let a=document.querySelector("link[rel~='icon']");a||(a=document.createElement("link"),a.rel="icon",document.getElementsByTagName("head")[0].appendChild(a)),a.type="image/png",a.href=r.toDataURL()};const e=window.location.pathname;let o="";e.includes("/dole-system/")&&(o=e.substring(0,e.indexOf("/dole-system/")+13)),t.src=`${o}frontend/images/logo/doleiligan.png`}function dt(){const t=document.querySelectorAll(".auto-year"),e=new Date().getFullYear();t.forEach(o=>{o.textContent=e})}async function ut(){try{let t="";try{const r=JSON.parse(localStorage.getItem("user"));r&&r.id&&(t=`?user_id=${r.id}`)}catch{}const o=await(await fetch(`${x()}api/profile.php${t}`)).json();o.success&&we(o.profile)}catch(t){console.error("Error loading user profile:",t)}}
