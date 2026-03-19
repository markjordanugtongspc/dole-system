import"./vendor-DC5wud4b.js";import{initFlowbite as Ae}from"./vendor-flowbite-B2TFTxm5.js";import{g as v,a as L,_ as De,r as fe,b as Q,p as Ie,c as Be,s as Le,i as $e,d as Ne,e as Te,f as Oe,h as Me,j as Re,u as Pe}from"./auth-Dt4MOxyY.js";import{A as _e}from"./vendor-charts-BjInCqFR.js";import G from"./vendor-swal-BSk0fVSb.js";const A=()=>document.documentElement.classList.contains("dark"),Fe=()=>A()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},y={royalBlue:()=>A()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(A(),"#94a3b8")};let z=null,k="ALL",pe="Overall Stats";const se={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function ee(){let t=[];if(z)t=z;else try{const m=await(await fetch(`${v()}api/beneficiaries.php`)).json();if(m.success)t=m.beneficiaries||[],z=t;else{console.error("Failed to load chart data:",m.error);return}}catch(c){console.error("Error fetching chart data:",c);return}if(t.length===0)return;document.querySelectorAll('[id$="-chart"]').forEach(c=>c.innerHTML="");const e=Fe(),o=je(t);He(o);const n=[...new Set(t.map(c=>{const m=c.startDate||c.createdAt;return m?new Date(m).getFullYear().toString():null}).filter(c=>c))].sort((c,m)=>m-c);Ge(n);const r=new Date;let a=[];if(k==="ALL"){const m=new Date().getFullYear();for(let S=2020;S<=m;S++)a.push(S.toString())}else if(n.includes(k))a=["Q1","Q2","Q3","Q4"];else{const c=parseInt(k)||7;a=Array.from({length:c},(m,S)=>{const $=new Date;return $.setDate(r.getDate()-(c-1-S)),$.toISOString().split("T")[0]})}const s={};a.forEach(c=>s[c]=0),t.forEach(c=>{const m=c.startDate||c.createdAt;if(m){const S=new Date(m),$=S.getFullYear().toString(),re=typeof m=="string"&&m.includes("T")?m.split("T")[0]:S.toISOString().split("T")[0];if(k==="ALL")s.hasOwnProperty($)&&s[$]++;else if(k.includes("D"))s.hasOwnProperty(re)&&s[re]++;else if($===k){const ae="Q"+(Math.floor(S.getMonth()/3)+1);s.hasOwnProperty(ae)&&s[ae]++}}});const i=Object.values(s),u=i.reduce((c,m)=>c+m,0),l=i[i.length-1]||0,g=i[i.length-2]||0;let f;if(k==="ALL"){const c=u/a.length;f=l>=c}else f=l>=g;document.querySelectorAll(".metric-added-count").forEach(c=>{c.textContent=u,c.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${f?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`});const b=g>0?Math.round((l-g)/g*100):l>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(c=>c.textContent=(b>=0?"+":"")+(k==="ALL"?"Growth":b+"%"));const d=document.getElementById("added-metric-badge");d&&(d.className=`flex items-center px-3 py-1 text-[10px] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${f?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30"}`);const C=document.getElementById("added-metric-icon");C&&(C.style.transform=f?"rotate(0deg)":"rotate(180deg)");const R=document.getElementById("dropdownDefaultButton");R&&(R.innerHTML=`${pe} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`);const we={chart:{height:160,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!0},background:"transparent"},theme:{mode:A()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:f?y.successGreen:y.philippineRed,opacity:.6},{offset:100,color:f?y.successGreen:y.philippineRed,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[f?y.successGreen:y.philippineRed]},series:[{name:"New Beneficiaries",data:i}],xaxis:{categories:a},yaxis:{show:!1},grid:{show:!1,padding:{left:10,right:35,top:0,bottom:0}},colors:[f?y.successGreen:y.philippineRed],markers:{size:a.length>20?0:4,colors:[f?y.successGreen:y.philippineRed],strokeColors:e.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:A()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};N("workforce-chart",we);const ve={series:[o.genders.Female||0,o.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:e.cardBg},colors:[y.philippineRed,y.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"12px",fontWeight:600,color:e.muted},value:{show:!0,fontSize:"24px",fontWeight:900,color:e.text,formatter:c=>c},total:{show:!0,label:"TOTAL",fontSize:"10px",fontWeight:800,color:e.muted,formatter:c=>c.globals.seriesTotals.reduce((m,S)=>m+S,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[e.cardBg],width:4},theme:{mode:A()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"18px"}}}}}}}]};N("gender-chart",ve);const ke={series:[o.education["College Grad"],o.education["College Lvl"],o.education["HS Grad"],o.education["Senior High"]].map(c=>Math.round(c/t.length*100)),chart:{height:300,type:"radialBar",background:e.cardBg},plotOptions:{radialBar:{hollow:{size:"30%"},dataLabels:{name:{fontSize:"11px",fontWeight:700,color:e.muted,offsetY:-5},value:{fontSize:"16px",fontWeight:900,color:e.text,offsetY:5},total:{show:!0,label:"GRADUATES",color:e.muted}},track:{background:e.grid,strokeWidth:"95%"}}},colors:[y.royalBlue(),y.goldenYellow,y.philippineRed,y.mutedSlate()],labels:["Col. Grad","Col. Lvl","HS Grad","Snr High"],theme:{mode:A()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{radialBar:{hollow:{size:"20%"},dataLabels:{value:{fontSize:"14px"}}}}}}]};N("education-chart",ke);const ne=Object.entries(o.designations).sort((c,m)=>m[1]-c[1]).slice(0,5),Ce={series:[{name:"Beneficiaries",data:ne.map(c=>c[1]),color:y.royalBlue()}],chart:{type:"bar",height:180,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:e.cardBg},plotOptions:{bar:{horizontal:!0,columnWidth:"100%",borderRadius:4,barHeight:"60%"}},dataLabels:{enabled:!1},xaxis:{categories:ne.map(c=>c[0]),labels:{show:!0,style:{fontWeight:600,colors:e.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!0,style:{fontWeight:700,colors:e.text,fontSize:"10px"}}},grid:{borderColor:e.grid,strokeDashArray:4,padding:{left:-15,right:0}},theme:{mode:A()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160},xaxis:{labels:{style:{fontSize:"8px"}}},yaxis:{labels:{style:{fontSize:"9px"}}}}}]};N("job-roles-chart",Ce);const Ee={series:[{name:"Beneficiaries",data:Object.values(o.ages),color:y.royalBlue()}],chart:{type:"area",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:e.cardBg},stroke:{curve:"smooth",width:3},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1}},dataLabels:{enabled:!0,offsetY:-10,offsetX:0,style:{fontSize:"9px",fontWeight:"800"},background:{enabled:!0,padding:3,borderRadius:4,borderWidth:0,opacity:.9}},xaxis:{categories:Object.keys(o.ages),labels:{style:{fontWeight:600,colors:e.muted,fontSize:"10px"}},axisBorder:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:e.muted,fontSize:"10px"}}},grid:{borderColor:e.grid,strokeDashArray:6,padding:{left:20,right:60}},theme:{mode:A()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160}}}]};N("age-chart",Ee);const P=qe(t);Ue(P);const Se={series:[{name:"Actual Beneficiaries",data:Object.values(P.municipalityData).map(c=>c.actual)},{name:"Target Slots",data:Object.values(P.municipalityData).map(c=>c.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:e.cardBg},theme:{mode:A()?"dark":"light"},colors:[y.royalBlue(),A()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(P.municipalityData),labels:{style:{fontWeight:600,colors:e.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:e.muted}}},legend:{show:!1},fill:{opacity:1},grid:{borderColor:e.grid,strokeDashArray:4,yaxis:{lines:{show:!0}}}};N("performance-gap-chart",Se)}function N(t,e){const o=document.getElementById(t);if(!o)return;o.innerHTML="",new _e(o,e).render()}function je(t){const e={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},totalAge:0,ageCount:0};return t.forEach(o=>{const n=o.office||"Unassigned";e.offices[n]=(e.offices[n]||0)+1;const r=(o.gender||"Unknown").trim(),a=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";e.genders[a]++;const s=(o.education||"").toUpperCase();s.includes("GRADUATE")||s.includes("DEGREE")||s.includes("BS")||s.includes("AB")?e.education["College Grad"]++:s.includes("COLLEGE")||s.includes("LEVEL")||s.includes("UNIT")?e.education["College Lvl"]++:s.includes("SENIOR")?e.education["Senior High"]++:(s.includes("HS")||s.includes("HIGH"))&&e.education["HS Grad"]++;const i=o.designation||"General Support";e.designations[i]=(e.designations[i]||0)+1;const u=parseInt(o.age);isNaN(u)||(e.totalAge+=u,e.ageCount++,u>=18&&u<=24?e.ages["18-24"]++:u>=25&&u<=30?e.ages["25-30"]++:u>=31&&u<=40?e.ages["31-40"]++:u>=41&&e.ages["41+"]++)}),e}function qe(t){const e={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(se).forEach(([o,n])=>{e.municipalityData[o]={actual:0,target:n},e.totalTarget+=n}),t.forEach(o=>{const n=(o.office||"").toUpperCase();let r="OTHER";for(const s in se)if(n.includes(s)){r=s;break}if(e.municipalityData[r]&&(e.municipalityData[r].actual++,e.totalActual++),(o.remarks||"ONGOING").toUpperCase()==="RESIGNED"?e.retention.resign++:e.retention.count++,o.createdAt&&o.startDate){const s=new Date(o.createdAt),i=new Date(o.startDate),u=Math.ceil((i-s)/(1e3*60*60*24));u>=0&&u<180&&(e.velocity.totalDays+=u,e.velocity.count++)}}),e}function Ue(t){const e=t.totalTarget>0?(t.totalActual/t.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(a=>{a.textContent=e+"%";const s=a.parentElement?.nextElementSibling?.firstElementChild;s&&(s.style.width=e+"%")});const o=t.velocity.count>0?(t.velocity.totalDays/t.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(a=>a.textContent=o);const n=t.retention.count+t.retention.resign,r=n>0?(t.retention.count/n*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(a=>a.textContent=r+"%")}function He(t){const e=Object.values(t.offices).reduce((d,C)=>d+C,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(d=>d.textContent=e);const o=t.genders.Female||0,n=t.genders.Male||0,r=o+n,a=r>0?Math.round(o/r*100)+"%":"0%",s=r>0?Math.round(n/r*100)+"%":"0%";document.querySelectorAll(".metric-female-ratio").forEach(d=>d.textContent=a),document.querySelectorAll(".metric-male-ratio").forEach(d=>d.textContent=s);const i=Object.keys(t.offices).length;document.querySelectorAll(".metric-deployment-sites").forEach(d=>d.textContent=i);const u=t.ageCount>0?Math.round(t.totalAge/t.ageCount):0;document.querySelectorAll(".metric-avg-age").forEach(d=>d.textContent=u),document.querySelectorAll(".metric-avg-age-range").forEach(d=>d.textContent=u+" YRS"),Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([d,C])=>{document.querySelectorAll(C).forEach(R=>R.textContent=t.education[d]||0)});const g=Object.values(t.designations).reduce((d,C)=>d+C,0);let f=0;Object.entries(t.designations).forEach(([d,C])=>{d.toLowerCase().match(/field|driver|maintenance/)&&(f+=C)}),document.querySelectorAll(".count-office-based").forEach(d=>d.textContent=g-f),document.querySelectorAll(".count-field-based").forEach(d=>d.textContent=f);const b=Object.entries(t.designations).sort((d,C)=>C[1]-d[1])[0]?.[0]||"N/A";document.querySelectorAll(".metric-top-role").forEach(d=>d.textContent=b)}function Ge(t){const e=document.querySelector("#lastDaysdropdown ul");if(!e)return;let o=`
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="ALL"?"bg-royal-blue/10 text-royal-blue":""}">Overall Stats</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="7D"?"bg-royal-blue/10 text-royal-blue":""}">Last 7 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="30D"?"bg-royal-blue/10 text-royal-blue":""}">Last 30 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="90D"?"bg-royal-blue/10 text-royal-blue":""}">Last 90 Days</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;t.forEach(n=>{o+=`<li><a href="javascript:void(0)" onclick="updateWorkforceFilter('${n}', 'Year ${n}')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k===n?"bg-royal-blue/10 text-royal-blue":""}">Year ${n}</a></li>`}),e.innerHTML=o}function ze(t,e){k=t,pe=e;const o=document.getElementById("lastDaysdropdown");if(o&&window.FlowbiteInstances){const n=window.FlowbiteInstances.getInstance("Dropdown","lastDaysdropdown");n&&n.hide()}else o&&o.classList.add("hidden");ee()}window.updateWorkforceFilter=ze;document.addEventListener("themeChanged",()=>{setTimeout(()=>ee(),50)});let J=null,Z="default",X=0,W=localStorage.getItem("last_notified_id")?parseInt(localStorage.getItem("last_notified_id")):0;function We(){const t=v();J=new Audio(`${t}backend/src/assets/sounds/ping-ding.mp3`),Ye(),Ve(),Ke(),j()}async function Ye(){if(!("Notification"in window)){console.log("This browser does not support notifications");return}if(Notification.permission==="default"){const{default:t}=await De(async()=>{const{default:o}=await import("./vendor-swal-BSk0fVSb.js");return{default:o}},[]);if((await t.fire({title:"Enable Notifications?",html:`
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
            `,icon:"question",showCancelButton:!0,confirmButtonText:"Allow Notifications",cancelButtonText:"Maybe Later",confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",customClass:{popup:"rounded-2xl",confirmButton:"font-bold",cancelButton:"font-bold"}})).isConfirmed){const o=await Notification.requestPermission();Z=o,o==="granted"&&t.fire({icon:"success",title:"Notifications Enabled!",text:"You will now receive real-time updates.",timer:3e3,showConfirmButton:!1})}}else Z=Notification.permission}function Ve(){const t=document.getElementById("notificationBellButton"),e=document.getElementById("notificationDropdown");!t||!e||t.addEventListener("click",()=>{j()})}async function j(){v(),document.getElementById("notificationDropdown");const t=document.getElementById("notificationList");if(t){Qe(t);try{const e=await L("api/notifications.php"),o=e.data;e.success&&o.success?(ge(o.notifications),B(o.unread_count)):ie(t)}catch(e){console.error("Error loading notifications:",e),ie(t)}}}function Qe(t){t.innerHTML=`
        <div class="flex items-center justify-center py-8">
            <span class="flex items-center bg-neutral-primary-soft border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-neutral-tertiary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/>
                </svg>
                <span>Loading notifications...</span>
            </span>
        </div>
    `}function ie(t){t.innerHTML=`
        <div class="flex items-center justify-center py-8 text-gray-500 text-sm">
            <p>Unable to load notifications</p>
        </div>
    `}function ge(t){const e=document.getElementById("notificationList");if(!e)return;const o=e.scrollTop;if(t.length===0){e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 text-center">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Empty</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">No recent activity detected</p>
            </div>
        `;return}const n=t.map(r=>Je(r)).join("");e.innerHTML=n,requestAnimationFrame(()=>{e.scrollTop=o})}function Je(t){const e=Xe(t.created_at),o=Ze(e),n=t.is_read===0;return`
        <a href="javascript:void(0)" 
           class="flex px-4 py-3 hover:bg-neutral-secondary-medium transition-all duration-300 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 ${n?"bg-emerald-50/30 dark:bg-emerald-500/10 border-l-4 border-emerald-500 shadow-md ring-1 ring-emerald-500/10 z-10":"opacity-60 grayscale-[0.2] border-l-4 border-transparent"}" 
           data-notification-id="${t.id}"
           onclick="markAsRead(${t.id}); return false;">
            <div class="shrink-0 relative">
                <div class="w-11 h-11 rounded-full ${n?"bg-gradient-to-br from-royal-blue to-blue-700":"bg-slate-200 dark:bg-slate-700"} flex items-center justify-center text-white font-black text-sm shadow-sm transition-all duration-500">
                    <svg class="w-6 h-6 ${n?"":"text-slate-400 dark:text-slate-500"}" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>
                </div>
                ${n?`
                <div class="notification-marker absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full shadow-sm z-10 transition-opacity duration-300">
                    <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </div>
                `:""}
            </div>
            <div class="w-full ps-3">
                <div class="text-body text-sm mb-1.5 ${n?"font-semibold":""}">
                    ${t.message}
                </div>
                <div class="flex items-center gap-2">
                    ${o}
                </div>
            </div>
        </a>
    `}function Ze(t){const e=t.minutes;return e<1?`
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
        `}function Xe(t){const e=new Date,o=new Date(t),n=e-o,r=Math.floor(n/6e4),a=Math.floor(n/36e5),s=Math.floor(n/864e5);let i="";return r<1?i="Just now":r<60?i=`${r} min${r>1?"s":""} ago`:a<24?i=`${a} hour${a>1?"s":""} ago`:i=`${s} day${s>1?"s":""} ago`,{text:i,minutes:r,hours:a,days:s}}function B(t){X=t;const e=document.getElementById("notificationBadge"),o=document.getElementById("notificationBellIcon");e&&(t>0?(e.textContent=t>99?"99+":t,e.classList.remove("hidden")):e.classList.add("hidden")),o&&(t>0?o.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                </svg>
            `:o.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                </svg>
            `)}window.markAllAsRead=async function(){if(v(),!!document.getElementById("notificationList")){B(0);try{const e=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_all_read"})}),o=e.data;e.success&&o.success&&(B(0),j())}catch(e){console.error("Error marking all as read:",e),B(0),j()}}};window.clearNotificationView=async function(){v();const t=document.getElementById("notificationList");if(t){B(0),t.style.opacity="0",setTimeout(()=>{t.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 transition-all duration-500">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Cleared</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">Notifications have been archived</p>
            </div>
        `,t.style.opacity="1"},300);try{const e=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"clear_all"})}),o=e.data;e.success&&o.success}catch(e){console.error("Error clearing notifications:",e)}}};window.markAsRead=async function(t){v();const e=document.querySelector(`[data-notification-id="${t}"]`);if(e){const o=e.querySelector(".notification-marker");o&&(o.style.display="none"),e.classList.remove("bg-emerald-50/20","dark:bg-emerald-500/5","border-l-4","border-emerald-500","shadow-xs"),e.classList.add("opacity-60","grayscale-[0.2]","border-l-4","border-transparent");const n=e.querySelector(".rounded-full");if(n){n.classList.remove("bg-gradient-to-br","from-royal-blue","to-blue-700"),n.classList.add("bg-slate-200","dark:bg-slate-700");const r=n.querySelector("svg");r&&r.classList.add("text-slate-400","dark:text-slate-500")}}X>0&&B(X-1);try{await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_read",notification_id:t})})}catch(o){console.error("Error marking notification as read:",o)}};function Ke(){setInterval(async()=>{await he()},1e4)}async function he(){v();const t=document.getElementById("notificationDropdown");try{const e=await L("api/notifications.php?check_new=1"),o=e.data;if(e.success&&o.success){if(B(o.unread_count),t&&!t.classList.contains("hidden")){const n=await L("api/notifications.php"),r=n.data;n.success&&r.success&&ge(r.notifications)}if(o.has_new){const n=o.latest_notification;n&&n.id>W&&(W=n.id,localStorage.setItem("last_notified_id",W),et(),tt(n))}}}catch(e){console.error("Error checking notifications:",e)}}function et(){const t=JSON.parse(localStorage.getItem("user")||"{}"),e=t.notifications_enabled!==void 0?parseInt(t.notifications_enabled)===1:!0;e&&J?J.play().catch(o=>{console.log("Could not play notification sound (Interaction-required or muted):",o)}):e||console.log("Notification sound muted by user preference")}function tt(t){if(Z==="granted"&&t){const e=JSON.parse(localStorage.getItem("user")||"{}"),o=e.notifications_enabled!==void 0?parseInt(e.notifications_enabled)===1:!0;new Notification("DOLE-GIP System",{body:t.message,icon:`${v()}frontend/images/logo/doleiligan.png`,badge:`${v()}frontend/images/logo/doleiligan.png`,tag:`notification-${t.id}`,requireInteraction:!1,silent:!o})}}async function ot(t,e="info"){v();try{const o=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"create",message:t,type:e})}),n=o.data;return o.success&&n.success&&await he(),n}catch(o){return console.error("Error creating notification:",o),{success:!1,error:o.message}}}const ce="dole-gip-db",nt=1,h={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata"};let _=null;function D(){return _?Promise.resolve(_):new Promise((t,e)=>{const o=indexedDB.open(ce,nt);o.onupgradeneeded=n=>{const r=n.target.result;if(!r.objectStoreNames.contains(h.BENEFICIARIES)){const a=r.createObjectStore(h.BENEFICIARIES,{keyPath:"id"});a.createIndex("name","name",{unique:!1}),a.createIndex("office","office",{unique:!1}),a.createIndex("remarks","remarks",{unique:!1})}r.objectStoreNames.contains(h.SYNC_QUEUE)||r.createObjectStore(h.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),r.objectStoreNames.contains(h.METADATA)||r.createObjectStore(h.METADATA,{keyPath:"key"})},o.onsuccess=n=>{_=n.target.result,console.log("[DB] IndexedDB opened:",ce),t(_)},o.onerror=n=>{console.error("[DB] Failed to open IndexedDB:",n.target.error),e(n.target.error)}})}async function rt(t){const e=await D();return new Promise((o,n)=>{const r=e.transaction(h.BENEFICIARIES,"readwrite"),a=r.objectStore(h.BENEFICIARIES);a.clear(),t.forEach(s=>{const i={...s,id:s.id||s.gip_id};a.put(i)}),r.oncomplete=()=>{dt("beneficiaries_last_sync",Date.now()),console.log(`[DB] Cached ${t.length} beneficiaries locally`),o(t.length)},r.onerror=()=>n(r.error)})}async function U(){const t=await D();return new Promise((e,o)=>{const a=t.transaction(h.BENEFICIARIES,"readonly").objectStore(h.BENEFICIARIES).getAll();a.onsuccess=()=>e(a.result||[]),a.onerror=()=>o(a.error)})}async function at(t){const e=await D();return new Promise((o,n)=>{const a=e.transaction(h.BENEFICIARIES,"readwrite").objectStore(h.BENEFICIARIES),s={...t,id:t.id||t.gip_id},i=a.put(s);i.onsuccess=()=>o(i.result),i.onerror=()=>n(i.error)})}async function st(){const t=await me("beneficiaries_last_sync");return t?Date.now()-t:1/0}async function it(t,e,o){const n=await D();return new Promise((r,a)=>{const i=n.transaction(h.SYNC_QUEUE,"readwrite").objectStore(h.SYNC_QUEUE),u={method:t,endpoint:e,payload:o,status:"pending",attempts:0,createdAt:Date.now(),lastAttempt:null},l=i.add(u);l.onsuccess=()=>{console.log(`[SyncQueue] Enqueued ${t} ${e} (id: ${l.result})`),r(l.result)},l.onerror=()=>a(l.error)})}async function H(){const t=await D();return new Promise((e,o)=>{const s=t.transaction(h.SYNC_QUEUE,"readonly").objectStore(h.SYNC_QUEUE).index("status").getAll("pending");s.onsuccess=()=>e(s.result||[]),s.onerror=()=>o(s.error)})}async function le(t,e,o={}){const n=await D();return new Promise((r,a)=>{const i=n.transaction(h.SYNC_QUEUE,"readwrite").objectStore(h.SYNC_QUEUE),u=i.get(t);u.onsuccess=()=>{const l=u.result;if(!l)return r();const g={...l,status:e,lastAttempt:Date.now(),attempts:(l.attempts||0)+1,...o},f=i.put(g);f.onsuccess=()=>r(),f.onerror=()=>a(f.error)},u.onerror=()=>a(u.error)})}async function ct(t){const e=await D();return new Promise((o,n)=>{const s=e.transaction(h.SYNC_QUEUE,"readwrite").objectStore(h.SYNC_QUEUE).delete(t);s.onsuccess=()=>o(),s.onerror=()=>n(s.error)})}async function lt(){return(await H()).length}async function dt(t,e){const o=await D();return new Promise((n,r)=>{const i=o.transaction(h.METADATA,"readwrite").objectStore(h.METADATA).put({key:t,value:e});i.onsuccess=()=>n(),i.onerror=()=>r(i.error)})}async function me(t){const e=await D();return new Promise((o,n)=>{const s=e.transaction(h.METADATA,"readonly").objectStore(h.METADATA).get(t);s.onsuccess=()=>o(s.result?.value??null),s.onerror=()=>n(s.error)})}async function ut(){const[t,e]=await Promise.all([U(),H()]),o=await me("beneficiaries_last_sync");return{localBeneficiaries:t.length,pendingSync:e.length,lastSync:o?new Date(o).toLocaleString():"Never"}}window.__doleDB={getStats:ut,getLocalBeneficiaries:U,getPendingSyncItems:H};const ft=3,de=8e3;let ue=null,Y=!1,T=null;function pt(){if(document.getElementById("sync-status-pill"))return;const t=document.createElement("div");t.id="sync-status-pill",t.style.cssText=`
        position: fixed;
        bottom: 16px;
        left: 16px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        transition: all 0.4s ease;
        opacity: 0;
        pointer-events: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    `,document.body.appendChild(t),T=t}function O(t,e=0){if(!T)return;const o={synced:{bg:"#dcfce7",color:"#15803d",border:"1px solid #bbf7d0",icon:"●",label:"All Synced",opacity:"1"},pending:{bg:"#fef9c3",color:"#854d0e",border:"1px solid #fde68a",icon:"⏳",label:`${e} Pending`,opacity:"1"},syncing:{bg:"#dbeafe",color:"#1d4ed8",border:"1px solid #bfdbfe",icon:"↑",label:"Syncing...",opacity:"1"},offline:{bg:"#fee2e2",color:"#b91c1c",border:"1px solid #fecaca",icon:"✕",label:"Offline – data saved locally",opacity:"1"}},n=o[t]||o.synced;Object.assign(T.style,{background:n.bg,color:n.color,border:n.border,opacity:n.opacity}),T.innerHTML=`<span>${n.icon}</span><span>${n.label}</span>`,t==="synced"&&setTimeout(()=>{T&&(T.style.opacity="0")},4e3)}function gt(){try{return JSON.parse(localStorage.getItem("user"))?.id||null}catch{return null}}async function ht(t){const e=gt(),o=`${v()}${t.endpoint}`,n={"Content-Type":"application/json",...e?{"X-User-Id":String(e)}:{}},r={method:t.method,headers:n},a=t.method==="PATCH"?`${o}?${new URLSearchParams(t.payload).toString()}`:o;t.method!=="PATCH"&&t.method!=="GET"&&(r.body=JSON.stringify(t.payload));const s=await fetch(a,r);if(!s.ok)throw new Error(`HTTP ${s.status}`);const i=await s.json();if(!i.success)throw new Error(i.error||"API returned failure");return!0}async function F(){if(Y)return;if(!navigator.onLine){O("offline");return}const t=await H();if(t.length===0)return;Y=!0,O("syncing",t.length);let e=0,o=0;for(const r of t){if((r.attempts||0)>=ft){await le(r.queueId,"failed"),o++;continue}try{await ht(r),await ct(r.queueId),e++,console.log(`[Sync] ✓ Pushed ${r.method} ${r.endpoint} (queueId: ${r.queueId})`)}catch(a){console.warn(`[Sync] ✗ Failed ${r.method} ${r.endpoint}:`,a.message),await le(r.queueId,"pending",{lastError:a.message}),o++}}Y=!1;const n=await lt();n===0?O("synced"):O("pending",n),console.log(`[Sync] Batch complete. ✓ ${e} synced, ✗ ${o} failed. ${n} remaining.`)}function mt(){ue||(F(),ue=setInterval(()=>{F()},de),window.addEventListener("online",()=>{console.log("[Sync] Back online — flushing queue immediately"),O("syncing"),F()}),window.addEventListener("offline",()=>{console.log("[Sync] Gone offline"),O("offline")}),console.log(`[Sync] Worker started (interval: ${de}ms)`))}let x=[],V=null,w=1;const M=10;let ye=null;async function be(){const t=await U();if(t.length>0){x=t,q(x);const n=localStorage.getItem("ldn_sort_preference");n?K(n,!1):I(),console.log(`[Offline-First] Rendered ${t.length} records from local cache`)}const e=await st(),o=30*1e3;if(e<o&&t.length>0){console.log(`[Offline-First] Cache is fresh (${Math.round(e/1e3)}s old), skipping remote fetch`);return}try{const r=await(await fetch(`${v()}api/beneficiaries.php`)).json();if(r.success&&r.beneficiaries){const a=r.beneficiaries,s=Q(t),i=Q(a);if(s!==i){await rt(a),x=a,q(x);const u=localStorage.getItem("ldn_sort_preference");u?K(u,!1):I(),console.log(`[Offline-First] Remote data synced and rendered (${a.length} records)`)}else console.log("[Offline-First] Remote data matches cache — no re-render needed")}}catch(n){console.warn("[Offline-First] Remote fetch failed (using local cache):",n.message)}}function q(t){const e=new Date;e.setHours(0,0,0,0),t.forEach(o=>{if(o.remarks==="ONGOING"&&o.endDate){const n=new Date(o.endDate);if(n.setHours(0,0,0,0),n<e){o.remarks="EXPIRED";const r={...o};fetch(`${v()}api/beneficiaries.php`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).catch(a=>console.error("Auto sync failed",a))}}})}function yt(){be(),St(),At(),bt()}function bt(){document.getElementById("beneficiary-table-body")&&Ie.start("beneficiaries",async()=>{if(window.BulkApp&&(window.BulkApp.isActive||Date.now()-(window.BulkApp.lastInteractionTime||0)<3e4))return;const o=await Be("api/beneficiaries.php");if(o.success&&o.data.beneficiaries){const n=o.data.beneficiaries;q(n);const r=Q(n);V&&r!==V&&(x=n,I(),fe(),Le("Data Synced","Beneficiary list has been updated","info")),V=r}},1e4)}function I(t=x){const e=document.getElementById("beneficiary-table-body");if(!e)return;if(ye=t,t.length===0){e.innerHTML=`
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
        `;const i=document.getElementById("pagination-controls");i&&(i.innerHTML="");return}const o=t.length,n=Math.ceil(o/M);w>n&&(w=n||1),w<1&&(w=1);const r=(w-1)*M,a=r+M,s=t.slice(r,a);e.innerHTML=s.map(i=>`
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
                    <span class="${vt(i.office)} text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded whitespace-nowrap">
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
                <span class="${kt(i.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
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
    `).join(""),xt(o,n),fe()}function xt(t,e){const o=document.getElementById("pagination-controls");if(!o)return;if(t<=M){o.innerHTML=`
            <span class="text-xs font-bold text-gray-500">Showing all ${t} results</span>
            <div class="flex items-center gap-1"></div>
        `;return}const n=(w-1)*M+1,r=Math.min(w*M,t);o.innerHTML=`
        <span class="text-xs font-bold text-gray-500 px-2 py-1">
            Showing <span class="text-royal-blue">${n}-${r}</span> of <span class="text-royal-blue">${t}</span>
        </span>
        <div class="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
            <!-- Previous Button -->
            <button onclick="changePage(${w-1})" ${w===1?"disabled":""} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            ${wt(w,e)}

            <!-- Next Button -->
            <button onclick="changePage(${w+1})" ${w===e?"disabled":""} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
    `}function wt(t,e){let o="",r=Math.max(1,t-1),a=Math.min(e,r+3-1);a-r+1<3&&(r=Math.max(1,a-3+1)),r>1&&(o+='<span class="px-2 text-gray-400">...</span>');for(let s=r;s<=a;s++)o+=`
            <button onclick="changePage(${s})" 
                class="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-black transition-all cursor-pointer
                ${s===t?"bg-royal-blue text-white shadow-md shadow-royal-blue/20":"bg-white text-gray-600 hover:bg-royal-blue/10 hover:text-royal-blue border border-gray-100"}">
                ${s}
            </button>
        `;return a<e&&(o+='<span class="px-2 text-gray-400">...</span>'),o}window.changePage=t=>{w=t,I(ye||x)};function vt(t){return t?t.includes("DOLE")?"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white":t.includes("DepEd")?"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white":t.includes("LGU")?"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white":t.includes("DICT")?"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white"}function kt(t){if(!t)return"bg-gray-100 text-gray-600 border-gray-200";const e=t.toUpperCase();return e==="ONGOING"?"bg-green-100 text-green-700 border-green-200":e==="EXPIRED"?"bg-red-400 text-white border-red-400":e==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":e==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 text-gray-600 border-gray-200"}function K(t,e=!0){switch(e&&localStorage.setItem("ldn_sort_preference",t),t){case"name_asc":x.sort((n,r)=>{const a=n.name.localeCompare(r.name);return a!==0?a:new Date(n.createdAt)-new Date(r.createdAt)});break;case"name_desc":x.sort((n,r)=>{const a=r.name.localeCompare(n.name);return a!==0?a:new Date(n.createdAt)-new Date(r.createdAt)});break;case"office":x.sort((n,r)=>(n.office||"").localeCompare(r.office||""));break;case"remarks":x.sort((n,r)=>(n.remarks||"").localeCompare(r.remarks||""));break;case"education":x.sort((n,r)=>(n.education||"").localeCompare(r.education||""));break;case"work":x.sort((n,r)=>(n.designation||"").localeCompare(r.designation||""));break;case"address":x.sort((n,r)=>(n.address||"").localeCompare(r.address||""));break}w=1,I();const o=document.getElementById("sort-dropdown");o&&!o.classList.contains("hidden")&&o.classList.add("hidden")}async function Ct(t){const e={...t};["name","address","education","designation"].forEach(r=>{e[r]&&typeof e[r]=="string"&&(e[r]=e[r].toUpperCase().trim())});const n=e.id?"PUT":"POST";!e.id&&!e.gip_id&&(e._tempId=`temp_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,e.id=e._tempId);try{await at(e),x=await U(),q(x),I(),console.log(`[Offline-First] ✓ Saved "${e.name}" to local cache`)}catch(r){console.error("[Offline-First] Local save failed:",r)}n==="POST"&&ot(`New user <strong>${e.name}</strong> added. pending "Required Documents" for review.`,"success");try{await it(n,"api/beneficiaries.php",e),F()}catch(r){console.error("[Offline-First] Failed to enqueue sync:",r)}return!0}async function Et(t){if(!(await G.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',html:`
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
        `,reverseButtons:!0,customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-green-50 text-green-700 hover:bg-green-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-green-200 shadow-sm mx-2 cursor-pointer",cancelButton:"bg-red-50 text-red-700 hover:bg-red-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-red-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)return!1;try{const n=await(await fetch(`${v()}api/beneficiaries.php?id=${encodeURIComponent(t)}&action=archive`,{method:"PATCH"})).json();if(n.success)return G.fire({toast:!0,position:"top-end",icon:"success",title:"Record Archived",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),await be(),!0;throw new Error(n.error||"Failed to archive")}catch(o){return console.error("Error archiving beneficiary:",o),G.fire({icon:"error",title:"Archive Failed",text:o.message}),!1}}function St(){const t=document.getElementById("ldn-header-container"),e=document.getElementById("ldn-header-text"),o=document.getElementById("ldn-header-icon");t&&e&&o&&(t.addEventListener("click",()=>{if(window.innerWidth<640)return;const n=e.innerText.trim(),r="Lanao Del Norte - GIP",a="LDN - GIP";e.querySelector(".sm\\:hidden")?.offsetParent,n.includes(r)?(e.innerHTML=a,o.classList.add("rotate-180")):(e.innerHTML=r,o.classList.remove("rotate-180"))}),t.classList.add("cursor-pointer","select-none","transition-all","duration-200"),o.classList.add("transition-transform","duration-200"))}function At(){const t=document.getElementById("table-search");t&&(t.addEventListener("input",e=>{const o=e.target.value.toLowerCase().trim();if(o===""){w=1,I(x);return}const n=x.filter(r=>r.name?.toLowerCase().includes(o)||!1||r.id?.toLowerCase().includes(o)||!1||r.office?.toLowerCase().includes(o)||!1||r.remarks?.toLowerCase().includes(o)||!1||r.designation?.toLowerCase().includes(o)||!1||r.address?.toLowerCase().includes(o)||!1||r.education?.toLowerCase().includes(o)||!1);w=1,I(n)}),window.addEventListener("keydown",e=>{e.key==="/"&&document.activeElement!==t&&(e.preventDefault(),t.focus())}))}window.sortData=K;window.archiveRecord=Et;window.addBeneficiaryData=Ct;let te=[],E=["id","name","office","position","status"],p={office:"ALL",status:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","office","position","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""};async function Dt(){It(),await Lt()}function It(){const t=localStorage.getItem("ldn_export_config");if(t)try{const e=JSON.parse(t);p={...p,...e},E=p.columns}catch(e){console.error("Error loading saved export config",e)}}function Bt(){localStorage.setItem("ldn_export_config",JSON.stringify(p))}async function Lt(){try{const e=await(await fetch(`${v()}api/beneficiaries.php?all=true`)).json();e.success&&e.beneficiaries&&(te=e.beneficiaries,window.handleFilterUpdate(p))}catch(t){console.error("Error loading data for export",t)}}window.handleFilterUpdate=function(t){p={...p,...t},t.columns&&(E=t.columns),t.preparedBy!==void 0&&(p.preparedBy=t.preparedBy),t.approvedBy!==void 0&&(p.approvedBy=t.approvedBy),Bt();let e=[...te];p.search&&(e=e.filter(o=>o.name.toLowerCase().includes(p.search)||o.id.toLowerCase().includes(p.search))),p.office!=="ALL"&&(e=e.filter(o=>o.office.includes(p.office))),p.status!=="ALL"&&(e=e.filter(o=>o.remarks.toUpperCase()===p.status.toUpperCase())),p.section==="ACTIVE"?e=e.filter(o=>!o.isArchived):p.section==="ARCHIVED"&&(e=e.filter(o=>o.isArchived)),p.sort&&e.sort((o,n)=>{switch(p.sort){case"name":return(o.name||"").localeCompare(n.name||"");case"id":return(o.id||"").localeCompare(n.id||"");case"office":return(o.office||"").localeCompare(n.office||"");case"startdate":const r=new Date(o.startDate||0);return new Date(n.startDate||0)-r;default:return 0}}),$t(e)};window.getExportFilters=()=>p;function $t(t){Tt(t),Ot(t);const e=document.getElementById("record-count");e&&(e.textContent=t.length),window.currentFilteredData=t}window.exportToExcel=function(){const t=window.currentFilteredData||te,e=E,o=`
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
                    ${e.map(s=>`<th class="header cell">${oe[s]||s.toUpperCase()}</th>`).join("")}
                </tr>
                ${(()=>{let s=null,i="";[...t].sort((l,g)=>l.isArchived-g.isArchived).forEach(l=>{l.isArchived!==s&&(s=l.isArchived,i+=`<tr><td colspan="${e.length}" class="cell divider">${s?"ARCHIVED RECORDS":"ACTIVE BENEFICIARIES"}</td></tr>`),i+=`<tr>${e.map(g=>{let f=l[g]||"-";return g==="position"&&(f=l.designation||"-"),g==="startdate"&&(f=l.startDateFormatted||l.startDate||"-"),g==="enddate"&&(f=l.endDateFormatted||l.endDate||"-"),g==="status"?(f=l.remarks||"N/A",`<td class="cell ${"status-"+f.toLowerCase()}">${f}</td>`):`<td class="cell">${f}</td>`}).join("")}</tr>`})})()}
                <tr><td colspan="${e.length}"></td></tr>
                <tr><td colspan="${e.length}"></td></tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Prepared by:</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Approved by:</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${p.preparedBy||""}</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${p.approvedBy||""}</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                </tr>
            </table>
        </body>
        </html>
    `,n=new Blob([o],{type:"application/vnd.ms-excel"}),r=window.URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=`LDN_RECORDS_${new Date().toISOString().slice(0,10)}.xls`,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(r),document.body.removeChild(a)};const oe={id:"ID NO.",name:"NAME",office:"OFFICE",position:"DESIGNATION",status:"STATUS",startdate:"START DATE",enddate:"END DATE"};function Nt(t,e="px-4 py-2.5"){return`
        <tr class="text-[11px] text-white uppercase bg-royal-blue font-bold tracking-widest text-center">
            ${t.map(o=>{let n="";return o==="name"&&(n=' title="Last Name, First Name, Middle Initial"'),`<th scope="col" class="${e}"${n}>${oe[o]||o.toUpperCase()}</th>`}).join("")}
        </tr>
    `}function xe(t,e,o=!1){return e.map(n=>{let r=t[n]||"-";if(n==="position"&&(r=t.designation||"-"),n==="startdate"&&(r=t.startDateFormatted||t.startDate||"-"),n==="enddate"&&(r=t.endDateFormatted||t.endDate||"-"),n==="status"&&(r=t.remarks||"N/A"),o){let a="px-3 py-2 border border-gray-200 text-center";return n==="id"&&(a+=" font-mono font-bold"),n==="name"&&(a+=" font-bold text-black uppercase leading-tight text-left px-4"),n==="status"&&(a+=` text-center font-bold uppercase ${{ABSORBED:"text-golden-yellow",RESIGNED:"text-slate-500",EXPIRED:"text-philippine-red",ONGOING:"text-green-600"}[r]||"text-gray-500"}`),(n==="startdate"||n==="enddate")&&(a+=" text-center font-mono text-[9px]"),`<td class="${a}">${r}</td>`}else return n==="id"?`<th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap font-mono text-xs text-center">${r}</th>`:n==="name"?`<td class="px-4 py-3 font-bold text-royal-blue group-hover/row:translate-x-1 transition-transform uppercase">${r}</td>`:n==="office"?`<td class="px-4 py-3 text-center"><span class="bg-white text-blue-700 px-2 py-0.5 rounded text-[10px] border border-blue-100 font-bold shadow-sm">${r}</span></td>`:n==="status"?`<td class="px-4 py-3 text-center"><span class="${{ABSORBED:"bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20",RESIGNED:"bg-slate-100 text-slate-500 border-slate-200",EXPIRED:"bg-red-50 text-philippine-red border-red-100",ONGOING:"bg-green-50 text-green-600 border-green-100"}[r]||"bg-gray-100 text-gray-700 border-gray-200"} px-2 py-0.5 rounded text-xs border uppercase font-bold text-[10px] shadow-sm">${r}</span></td>`:n==="startdate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-royal-blue uppercase tracking-tight">${r}</td>`:n==="enddate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-philippine-red uppercase tracking-tight">${r}</td>`:`<td class="px-4 py-3 text-xs font-semibold text-gray-500 text-center">${r}</td>`}).join("")}function Tt(t){const e=document.querySelector(".overflow-x-auto table");if(!e)return;const o=e.querySelector("thead"),n=document.getElementById("web-table-body");if(o.innerHTML=Nt(E),t.length===0){n.innerHTML=`<tr><td colspan="${E.length}" class="px-6 py-12 text-center text-gray-400 font-medium italic">No matching records found.</td></tr>`;return}const r=[...t].sort((l,g)=>l.isArchived!==g.isArchived?l.isArchived-g.isArchived:0);let a=null,s=null,i="";const u=p.section==="ALL";r.forEach(l=>{u&&l.isArchived!==a&&(a=l.isArchived,s=null,i+=`
                <tr class="${a?"bg-red-50/30":"bg-green-50/30"}">
                    <td colspan="${E.length}" class="px-6 py-3 border-y border-gray-100 text-center">
                        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${a?"bg-red-100 text-red-600 border border-red-200":"bg-green-100 text-green-600 border border-green-200"}">
                            ${a?"Archived Records":"Active Beneficiaries"}
                        </span>
                    </td>
                </tr>
            `),l.office!==s&&(s=l.office,i+=`
                <tr class="bg-gray-50/50">
                    <td colspan="${E.length}" class="px-8 py-2 border-b border-gray-100">
                        <div class="flex items-center gap-2 opacity-60">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest">${s||"UNASSIGNED OFFICE"}</span>
                        </div>
                    </td>
                </tr>
            `),i+=`
            <tr class="bg-white hover:bg-gray-50 transition-colors group/row border-b border-gray-50">
                ${xe(l,E)}
            </tr>
        `}),n.innerHTML=i}function Ot(t){const e=document.getElementById("print-area");if(!e)return;const n=e.querySelector("table").querySelector("thead"),r=document.getElementById("print-table-body");n.innerHTML=`
        <tr class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[10px] text-center">
            ${E.map(b=>{let d="";return b==="name"&&(d=' title="Last Name, First Name, Middle Initial"'),`<th class="px-3 py-2 border border-royal-blue"${d}>${oe[b]||b.toUpperCase()}</th>`}).join("")}
        </tr>
    `;const a=document.getElementById("print-prepared-by"),s=document.getElementById("print-approved-by");a&&(a.textContent=p.preparedBy),s&&(s.textContent=p.approvedBy);const i=[...t].sort((b,d)=>b.isArchived!==d.isArchived?b.isArchived-d.isArchived:0);let u=null,l=null,g="";const f=p.section==="ALL";i.forEach((b,d)=>{f&&b.isArchived!==u&&(u=b.isArchived,l=null,g+=`
                <tr class="print:bg-gray-200 bg-gray-200">
                    <td colspan="${E.length}" class="px-3 py-1 border border-gray-400 text-center">
                        <span class="text-[10px] font-black uppercase tracking-[0.2em]">${u?"SECTION: ARCHIVED RECORDS":"SECTION: ACTIVE BENEFICIARIES"}</span>
                    </td>
                </tr>
            `),b.office!==l&&(l=b.office,g+=`
                <tr class="bg-gray-50 print:bg-gray-50">
                    <td colspan="${E.length}" class="px-3 py-1.5 border border-gray-200 text-center">
                        <span class="text-[9px] font-black text-gray-800 uppercase tracking-widest text-center">Office: ${l||"N/A"}</span>
                    </td>
                </tr>
            `),g+=`
            <tr class="${d%2===0?"bg-white":"bg-gray-50/30"} border-b border-gray-200">
                ${xe(b,E,!0)}
            </tr>
        `}),r.innerHTML=g}$e();Ne();window.initFlowbite=Ae;document.addEventListener("DOMContentLoaded",()=>{console.log("DOLE System initialized");const t=window.location.pathname;Te(),Oe(),Me(),ee(),yt(),Re(),Pt(),_t(),We(),pt(),mt(),t.includes("/export/")&&Dt(),Mt(),Rt()});function Mt(){document.querySelectorAll(".togglePassword").forEach(e=>{const o=e.closest(".relative").querySelector("input");e&&o&&e.addEventListener("click",()=>{const n=o.getAttribute("type")==="password"?"text":"password";o.setAttribute("type",n);const r=e.querySelector(".eye-open"),a=e.querySelector(".eye-closed");r&&a&&(r.classList.toggle("hidden"),a.classList.toggle("hidden"))})})}function Rt(){const t=new Image;t.crossOrigin="Anonymous",t.onload=function(){const n=document.createElement("canvas"),r=64;n.width=r,n.height=r;const a=n.getContext("2d");a.beginPath(),a.arc(r/2,r/2,r/2,0,2*Math.PI),a.closePath(),a.clip(),a.drawImage(t,0,0,r,r);let s=document.querySelector("link[rel~='icon']");s||(s=document.createElement("link"),s.rel="icon",document.getElementsByTagName("head")[0].appendChild(s)),s.type="image/png",s.href=n.toDataURL()};const e=window.location.pathname;let o="";e.includes("/dole-system/")&&(o=e.substring(0,e.indexOf("/dole-system/")+13)),t.src=`${o}frontend/images/logo/doleiligan.png`}function Pt(){const t=document.querySelectorAll(".auto-year"),e=new Date().getFullYear();t.forEach(o=>{o.textContent=e})}async function _t(){try{let t="";try{const n=JSON.parse(localStorage.getItem("user"));n&&n.id&&(t=`?user_id=${n.id}`)}catch{}const o=await(await fetch(`${v()}api/profile.php${t}`)).json();o.success&&Pe(o.profile)}catch(t){console.error("Error loading user profile:",t)}}
