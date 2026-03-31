import"./vendor-DC5wud4b.js";import{initFlowbite as $e}from"./vendor-flowbite-B2TFTxm5.js";import{g as S,a as L,_ as Ne,l as q,r as me,b as U,c as he,d as Te,p as Oe,s as Me,i as Pe,e as Re,f as _e,h as Fe,j as je,k as qe,u as Ue}from"./auth-B2dqDIaS.js";import{A as He}from"./vendor-charts-BjInCqFR.js";import J from"./vendor-swal-BSk0fVSb.js";const D=()=>document.documentElement.classList.contains("dark"),Ge=()=>D()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},x={royalBlue:()=>D()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(D(),"#94a3b8")};let F=null,k="ALL",ye="Overall Stats";function ce(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const n=new Date(`${t}T00:00:00`);return isNaN(n.getTime())?null:n}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const n=t.replace(" ","T"),r=new Date(n);return isNaN(r.getTime())?null:r}const o=new Date(t);return isNaN(o.getTime())?null:o}const le={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function W(e=!1){let t=[];if(e&&(F=null),F)t=F;else try{const b=await(await fetch(`${S()}api/beneficiaries.php?all=true`)).json();if(b.success)t=b.beneficiaries||[],F=t;else{console.error("Failed to load chart data:",b.error);return}}catch(l){console.error("Error fetching chart data:",l);return}if(t.length===0)return;document.querySelectorAll('[id$="-chart"]').forEach(l=>l.innerHTML="");const o=Ge(),n=ze(t);Ve(n);const r=[...new Set(t.map(l=>{const b=l.createdAt||l.startDate,v=ce(b);return v?v.getFullYear().toString():null}).filter(l=>l))].sort((l,b)=>b-l);Je(r);const s=new Date;let a=[];if(k==="ALL"){const b=new Date().getFullYear();for(let v=2020;v<=b;v++)a.push(v.toString())}else if(r.includes(k))a=["Q1","Q2","Q3","Q4"];else{const l=parseInt(k)||7;a=Array.from({length:l},(b,v)=>{const $=new Date;return $.setDate(s.getDate()-(l-1-v)),$.toISOString().split("T")[0]})}const i={};a.forEach(l=>i[l]=0),t.forEach(l=>{const b=l.createdAt||l.startDate;if(b){const v=ce(b);if(!v)return;const $=v.getFullYear().toString(),se=v.toISOString().split("T")[0];if(k==="ALL")i.hasOwnProperty($)&&i[$]++;else if(k.includes("D"))i.hasOwnProperty(se)&&i[se]++;else if($===k){const ie="Q"+(Math.floor(v.getMonth()/3)+1);i.hasOwnProperty(ie)&&i[ie]++}}});const c=Object.values(i),d=k==="ALL"?t.length:c.reduce((l,b)=>l+b,0),m=c[c.length-1]||0,h=c[c.length-2]||0;let g;if(k==="ALL"){const l=d/a.length;g=m>=l}else g=m>=h;document.querySelectorAll(".metric-added-count").forEach(l=>{l.textContent=d,l.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${g?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`});const u=h>0?Math.round((m-h)/h*100):m>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(l=>l.textContent=(u>=0?"+":"")+(k==="ALL"?"Growth":u+"%"));const E=document.getElementById("added-metric-badge");E&&(E.className=`flex items-center px-3 py-1 text-[10px] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${g?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30"}`);const R=document.getElementById("added-metric-icon");R&&(R.style.transform=g?"rotate(0deg)":"rotate(180deg)");const re=document.getElementById("dropdownDefaultButton");re&&(re.innerHTML=`${ye} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`);const Ce={chart:{height:160,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!0},background:"transparent"},theme:{mode:D()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:g?x.successGreen:x.philippineRed,opacity:.6},{offset:100,color:g?x.successGreen:x.philippineRed,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[g?x.successGreen:x.philippineRed]},series:[{name:"New Beneficiaries",data:c}],xaxis:{categories:a},yaxis:{show:!1},grid:{show:!1,padding:{left:10,right:35,top:0,bottom:0}},colors:[g?x.successGreen:x.philippineRed],markers:{size:a.length>20?0:4,colors:[g?x.successGreen:x.philippineRed],strokeColors:o.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:D()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};N("workforce-chart",Ce);const Ae={series:[n.genders.Female||0,n.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:o.cardBg},colors:[x.philippineRed,x.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"12px",fontWeight:600,color:o.muted},value:{show:!0,fontSize:"24px",fontWeight:900,color:o.text,formatter:l=>l},total:{show:!0,label:"TOTAL",fontSize:"10px",fontWeight:800,color:o.muted,formatter:l=>l.globals.seriesTotals.reduce((b,v)=>b+v,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[o.cardBg],width:4},theme:{mode:D()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"18px"}}}}}}}]};N("gender-chart",Ae);const De={series:[n.education["College Grad"],n.education["College Lvl"],n.education["HS Grad"],n.education["Senior High"]].map(l=>Math.round(l/t.length*100)),chart:{height:300,type:"radialBar",background:o.cardBg},plotOptions:{radialBar:{hollow:{size:"30%"},dataLabels:{name:{fontSize:"11px",fontWeight:700,color:o.muted,offsetY:-5},value:{fontSize:"16px",fontWeight:900,color:o.text,offsetY:5},total:{show:!0,label:"GRADUATES",color:o.muted}},track:{background:o.grid,strokeWidth:"95%"}}},colors:[x.royalBlue(),x.goldenYellow,x.philippineRed,x.mutedSlate()],labels:["Col. Grad","Col. Lvl","HS Grad","Snr High"],theme:{mode:D()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{radialBar:{hollow:{size:"20%"},dataLabels:{value:{fontSize:"14px"}}}}}}]};N("education-chart",De);const ae=Object.entries(n.designations).sort((l,b)=>b[1]-l[1]).slice(0,5),Ie={series:[{name:"Beneficiaries",data:ae.map(l=>l[1]),color:x.royalBlue()}],chart:{type:"bar",height:180,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},plotOptions:{bar:{horizontal:!0,columnWidth:"100%",borderRadius:4,barHeight:"60%"}},dataLabels:{enabled:!1},xaxis:{categories:ae.map(l=>l[0]),labels:{show:!0,style:{fontWeight:600,colors:o.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!0,style:{fontWeight:700,colors:o.text,fontSize:"10px"}}},grid:{borderColor:o.grid,strokeDashArray:4,padding:{left:-15,right:0}},theme:{mode:D()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160},xaxis:{labels:{style:{fontSize:"8px"}}},yaxis:{labels:{style:{fontSize:"9px"}}}}}]};N("job-roles-chart",Ie);const Be={series:[{name:"Beneficiaries",data:Object.values(n.ages),color:x.royalBlue()}],chart:{type:"area",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},stroke:{curve:"smooth",width:3},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1}},dataLabels:{enabled:!0,offsetY:-10,offsetX:0,style:{fontSize:"9px",fontWeight:"800"},background:{enabled:!0,padding:3,borderRadius:4,borderWidth:0,opacity:.9}},xaxis:{categories:Object.keys(n.ages),labels:{style:{fontWeight:600,colors:o.muted,fontSize:"10px"}},axisBorder:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:o.muted,fontSize:"10px"}}},grid:{borderColor:o.grid,strokeDashArray:6,padding:{left:20,right:60}},theme:{mode:D()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160}}}]};N("age-chart",Be);const _=We(t);Ye(_);const Le={series:[{name:"Actual Beneficiaries",data:Object.values(_.municipalityData).map(l=>l.actual)},{name:"Target Slots",data:Object.values(_.municipalityData).map(l=>l.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:o.cardBg},theme:{mode:D()?"dark":"light"},colors:[x.royalBlue(),D()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(_.municipalityData),labels:{style:{fontWeight:600,colors:o.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:o.muted}}},legend:{show:!1},fill:{opacity:1},grid:{borderColor:o.grid,strokeDashArray:4,yaxis:{lines:{show:!0}}}};N("performance-gap-chart",Le)}function N(e,t){const o=document.getElementById(e);if(!o)return;o.innerHTML="",new He(o,t).render()}function ze(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},totalAge:0,ageCount:0};return e.forEach(o=>{const n=o.office||"Unassigned";t.offices[n]=(t.offices[n]||0)+1;const r=(o.gender||"Unknown").trim(),s=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[s]++;const a=(o.education||"").toUpperCase();a.includes("GRADUATE")||a.includes("DEGREE")||a.includes("BS")||a.includes("AB")?t.education["College Grad"]++:a.includes("COLLEGE")||a.includes("LEVEL")||a.includes("UNIT")?t.education["College Lvl"]++:a.includes("SENIOR")?t.education["Senior High"]++:(a.includes("HS")||a.includes("HIGH"))&&t.education["HS Grad"]++;const i=o.designation||"General Support";t.designations[i]=(t.designations[i]||0)+1;const c=parseInt(o.age);isNaN(c)||(t.totalAge+=c,t.ageCount++,c>=18&&c<=24?t.ages["18-24"]++:c>=25&&c<=30?t.ages["25-30"]++:c>=31&&c<=40?t.ages["31-40"]++:c>=41&&t.ages["41+"]++)}),t}function We(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(le).forEach(([o,n])=>{t.municipalityData[o]={actual:0,target:n},t.totalTarget+=n}),e.forEach(o=>{const n=(o.office||"").toUpperCase();let r="OTHER";for(const a in le)if(n.includes(a)){r=a;break}if(t.municipalityData[r]&&(t.municipalityData[r].actual++,t.totalActual++),(o.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,o.createdAt&&o.startDate){const a=new Date(o.createdAt),i=new Date(o.startDate),c=Math.ceil((i-a)/(1e3*60*60*24));c>=0&&c<180&&(t.velocity.totalDays+=c,t.velocity.count++)}}),t}function Ye(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(s=>{s.textContent=t+"%";const a=s.parentElement?.nextElementSibling?.firstElementChild;a&&(a.style.width=t+"%")});const o=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(s=>s.textContent=o);const n=e.retention.count+e.retention.resign,r=n>0?(e.retention.count/n*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(s=>s.textContent=r+"%")}function Ve(e){const t=Object.values(e.offices).reduce((u,E)=>u+E,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(u=>u.textContent=t);const o=e.genders.Female||0,n=e.genders.Male||0,r=o+n,s=r>0?Math.round(o/r*100)+"%":"0%",a=r>0?Math.round(n/r*100)+"%":"0%";document.querySelectorAll(".metric-female-ratio").forEach(u=>u.textContent=s),document.querySelectorAll(".metric-male-ratio").forEach(u=>u.textContent=a);const i=Object.keys(e.offices).length;document.querySelectorAll(".metric-deployment-sites").forEach(u=>u.textContent=i);const c=e.ageCount>0?Math.round(e.totalAge/e.ageCount):0;document.querySelectorAll(".metric-avg-age").forEach(u=>u.textContent=c),document.querySelectorAll(".metric-avg-age-range").forEach(u=>u.textContent=c+" YRS"),Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([u,E])=>{document.querySelectorAll(E).forEach(R=>R.textContent=e.education[u]||0)});const m=Object.values(e.designations).reduce((u,E)=>u+E,0);let h=0;Object.entries(e.designations).forEach(([u,E])=>{u.toLowerCase().match(/field|driver|maintenance/)&&(h+=E)}),document.querySelectorAll(".count-office-based").forEach(u=>u.textContent=m-h),document.querySelectorAll(".count-field-based").forEach(u=>u.textContent=h);const g=Object.entries(e.designations).sort((u,E)=>E[1]-u[1])[0]?.[0]||"N/A";document.querySelectorAll(".metric-top-role").forEach(u=>u.textContent=g)}function Je(e){const t=document.querySelector("#lastDaysdropdown ul");if(!t)return;let o=`
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="ALL"?"bg-royal-blue/10 text-royal-blue":""}">Overall Stats</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="7D"?"bg-royal-blue/10 text-royal-blue":""}">Last 7 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="30D"?"bg-royal-blue/10 text-royal-blue":""}">Last 30 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k==="90D"?"bg-royal-blue/10 text-royal-blue":""}">Last 90 Days</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(n=>{o+=`<li><a href="javascript:void(0)" onclick="updateWorkforceFilter('${n}', 'Year ${n}')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${k===n?"bg-royal-blue/10 text-royal-blue":""}">Year ${n}</a></li>`}),t.innerHTML=o}function Qe(e,t){k=e,ye=t;const o=document.getElementById("lastDaysdropdown");if(o&&window.FlowbiteInstances){const n=window.FlowbiteInstances.getInstance("Dropdown","lastDaysdropdown");n&&n.hide()}else o&&o.classList.add("hidden");W()}window.updateWorkforceFilter=Qe;document.addEventListener("themeChanged",()=>{setTimeout(()=>W(),50)});window.addEventListener("dataSynced",()=>{console.log("[Charts] Data synced detected, refreshing analytics..."),W(!0)});let X=null,K="default",ee=0,Q=localStorage.getItem("last_notified_id")?parseInt(localStorage.getItem("last_notified_id")):0;function Ze(){const e=S();X=new Audio(`${e}backend/src/assets/sounds/ping-ding.mp3`),Xe(),Ke(),rt(),G()}async function Xe(){if(!("Notification"in window)){console.log("This browser does not support notifications");return}if(Notification.permission==="default"){const{default:e}=await Ne(async()=>{const{default:o}=await import("./vendor-swal-BSk0fVSb.js");return{default:o}},[],import.meta.url);if((await e.fire({title:"Enable Notifications?",html:`
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
            `,icon:"question",showCancelButton:!0,confirmButtonText:"Allow Notifications",cancelButtonText:"Maybe Later",confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",customClass:{popup:"rounded-2xl",confirmButton:"font-bold",cancelButton:"font-bold"}})).isConfirmed){const o=await Notification.requestPermission();K=o,o==="granted"&&e.fire({icon:"success",title:"Notifications Enabled!",text:"You will now receive real-time updates.",timer:3e3,showConfirmButton:!1})}}else K=Notification.permission}function Ke(){const e=document.getElementById("notificationBellButton"),t=document.getElementById("notificationDropdown");!e||!t||e.addEventListener("click",()=>{G()})}async function G(){S(),document.getElementById("notificationDropdown");const e=document.getElementById("notificationList");if(e){et(e);try{const t=await L("api/notifications.php"),o=t.data;t.success&&o.success?(be(o.notifications),B(o.unread_count)):de(e)}catch(t){console.error("Error loading notifications:",t),de(e)}}}function et(e){e.innerHTML=`
        <div role="status" class="max-w-md p-4 space-y-4 border-b border-default divide-y divide-default rounded-base animate-pulse md:p-6 dark:divide-slate-700/50">
            <div class="flex items-center justify-between pt-4 first:pt-0">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 skeleton-component rounded-full shrink-0"></div>
                    <div>
                        <div class="h-2.5 skeleton-component rounded-full w-32 mb-2"></div>
                        <div class="w-48 h-2 skeleton-component opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div class="h-5 skeleton-component opacity-40 rounded-md w-16"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 skeleton-component rounded-full shrink-0"></div>
                    <div>
                        <div class="h-2.5 skeleton-component rounded-full w-24 mb-2"></div>
                        <div class="w-56 h-2 skeleton-component opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div class="h-5 skeleton-component opacity-40 rounded-md w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 skeleton-component rounded-full shrink-0"></div>
                    <div>
                        <div class="h-2.5 skeleton-component rounded-full w-28 mb-2"></div>
                        <div class="w-40 h-2 skeleton-component opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div class="h-5 skeleton-component opacity-40 rounded-md w-20"></div>
            </div>
            <span class="sr-only">Loading notifications...</span>
        </div>
    `}function de(e){e.innerHTML=`
        <div class="flex items-center justify-center py-8 text-gray-500 text-sm">
            <p>Unable to load notifications</p>
        </div>
    `}function be(e){const t=document.getElementById("notificationList");if(!t)return;const o=t.scrollTop;if(e.length===0){t.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 text-center">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Empty</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">No recent activity detected</p>
            </div>
        `;return}const n=e.map(r=>tt(r)).join("");t.innerHTML=n,requestAnimationFrame(()=>{t.scrollTop=o})}function tt(e){const t=nt(e.created_at),o=ot(t),n=e.is_read===0;return`
        <a href="javascript:void(0)" 
           class="flex px-4 py-3 hover:bg-neutral-secondary-medium transition-all duration-300 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 ${n?"bg-emerald-50/30 dark:bg-emerald-500/10 border-l-4 border-emerald-500 shadow-md ring-1 ring-emerald-500/10 z-10":"opacity-60 grayscale-[0.2] border-l-4 border-transparent"}" 
           data-notification-id="${e.id}"
           onclick="markAsRead(${e.id}); return false;">
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
                    ${e.message}
                </div>
                <div class="flex items-center gap-2">
                    ${o}
                </div>
            </div>
        </a>
    `}function ot(e){const t=e.minutes;return t<1?`
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Just now
            </span>
        `:t<2?`
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-success-medium" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#009966"/>
                </svg>
                <span>1 min ago</span>
            </span>
        `:t<3?`
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
                <span>${e.text}</span>
            </span>
        `}function nt(e){const t=new Date,o=new Date(e),n=t-o,r=Math.floor(n/6e4),s=Math.floor(n/36e5),a=Math.floor(n/864e5);let i="";return r<1?i="Just now":r<60?i=`${r} min${r>1?"s":""} ago`:s<24?i=`${s} hour${s>1?"s":""} ago`:i=`${a} day${a>1?"s":""} ago`,{text:i,minutes:r,hours:s,days:a}}function B(e){ee=e;const t=document.getElementById("notificationBadge"),o=document.getElementById("notificationBellIcon");t&&(e>0?(t.textContent=e>99?"99+":e,t.classList.remove("hidden")):t.classList.add("hidden")),o&&(e>0?o.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                </svg>
            `:o.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                </svg>
            `)}window.markAllAsRead=async function(){if(S(),!!document.getElementById("notificationList")){B(0);try{const t=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_all_read"})}),o=t.data;t.success&&o.success&&(B(0),G())}catch(t){console.error("Error marking all as read:",t),B(0),G()}}};window.clearNotificationView=async function(){S();const e=document.getElementById("notificationList");if(e){B(0),e.style.opacity="0",setTimeout(()=>{e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 transition-all duration-500">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Cleared</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">Notifications have been archived</p>
            </div>
        `,e.style.opacity="1"},300);try{const t=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"clear_all"})}),o=t.data;t.success&&o.success}catch(t){console.error("Error clearing notifications:",t)}}};window.markAsRead=async function(e){S();const t=document.querySelector(`[data-notification-id="${e}"]`);if(t){const o=t.querySelector(".notification-marker");o&&(o.style.display="none"),t.classList.remove("bg-emerald-50/20","dark:bg-emerald-500/5","border-l-4","border-emerald-500","shadow-xs"),t.classList.add("opacity-60","grayscale-[0.2]","border-l-4","border-transparent");const n=t.querySelector(".rounded-full");if(n){n.classList.remove("bg-gradient-to-br","from-royal-blue","to-blue-700"),n.classList.add("bg-slate-200","dark:bg-slate-700");const r=n.querySelector("svg");r&&r.classList.add("text-slate-400","dark:text-slate-500")}}ee>0&&B(ee-1);try{await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_read",notification_id:e})})}catch(o){console.error("Error marking notification as read:",o)}};function rt(){setInterval(async()=>{await xe()},1e4)}async function xe(){S();const e=document.getElementById("notificationDropdown");try{const t=await L("api/notifications.php?check_new=1"),o=t.data;if(t.success&&o.success){if(B(o.unread_count),e&&!e.classList.contains("hidden")){const n=await L("api/notifications.php"),r=n.data;n.success&&r.success&&be(r.notifications)}if(o.has_new){const n=o.latest_notification;n&&n.id>Q&&(Q=n.id,localStorage.setItem("last_notified_id",Q),at(),st(n))}}}catch(t){console.error("Error checking notifications:",t)}}function at(){const e=JSON.parse(localStorage.getItem("user")||"{}"),t=e.notifications_enabled!==void 0?parseInt(e.notifications_enabled)===1:!0;t&&X?X.play().catch(o=>{console.log("Could not play notification sound (Interaction-required or muted):",o)}):t||console.log("Notification sound muted by user preference")}function st(e){if(K==="granted"&&e){const t=JSON.parse(localStorage.getItem("user")||"{}"),o=t.notifications_enabled!==void 0?parseInt(t.notifications_enabled)===1:!0;new Notification("DOLE-GIP System",{body:e.message,icon:`${S()}frontend/images/logo/doleiligan.png`,badge:`${S()}frontend/images/logo/doleiligan.png`,tag:`notification-${e.id}`,requireInteraction:!1,silent:!o})}}async function it(e,t="info"){S();try{const o=await L("api/notifications.php",{method:"POST",body:JSON.stringify({action:"create",message:e,type:t})}),n=o.data;return o.success&&n.success&&await xe(),n}catch(o){return console.error("Error creating notification:",o),{success:!1,error:o.message}}}const ue="dole-gip-db",ct=2,f={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let j=null;function A(){return j?Promise.resolve(j):new Promise((e,t)=>{const o=indexedDB.open(ue,ct);o.onupgradeneeded=n=>{const r=n.target.result;if(!r.objectStoreNames.contains(f.BENEFICIARIES)){const s=r.createObjectStore(f.BENEFICIARIES,{keyPath:"id"});s.createIndex("name","name",{unique:!1}),s.createIndex("office","office",{unique:!1}),s.createIndex("remarks","remarks",{unique:!1})}r.objectStoreNames.contains(f.SYNC_QUEUE)||r.createObjectStore(f.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),r.objectStoreNames.contains(f.METADATA)||r.createObjectStore(f.METADATA,{keyPath:"key"}),r.objectStoreNames.contains(f.APP_CACHE)||r.createObjectStore(f.APP_CACHE,{keyPath:"key"})},o.onsuccess=n=>{j=n.target.result,console.log("[DB] IndexedDB opened:",ue),e(j)},o.onerror=n=>{console.error("[DB] Failed to open IndexedDB:",n.target.error),t(n.target.error)}})}async function lt(e){const t=await A();return new Promise((o,n)=>{const r=t.transaction(f.BENEFICIARIES,"readwrite"),s=r.objectStore(f.BENEFICIARIES);s.clear(),e.forEach(a=>{const i={...a,id:a.id||a.gip_id};s.put(i)}),r.oncomplete=()=>{mt("beneficiaries_last_sync",Date.now()),console.log(`[DB] Cached ${e.length} beneficiaries locally`),o(e.length)},r.onerror=()=>n(r.error)})}async function Y(){const e=await A();return new Promise((t,o)=>{const s=e.transaction(f.BENEFICIARIES,"readonly").objectStore(f.BENEFICIARIES).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>o(s.error)})}async function we(e){const t=await A();return new Promise((o,n)=>{const s=t.transaction(f.BENEFICIARIES,"readwrite").objectStore(f.BENEFICIARIES),a={...e,id:e.id||e.gip_id},i=s.put(a);i.onsuccess=()=>o(i.result),i.onerror=()=>n(i.error)})}async function dt(e){const t=await A();return new Promise((o,n)=>{const a=t.transaction(f.BENEFICIARIES,"readwrite").objectStore(f.BENEFICIARIES).delete(e);a.onsuccess=()=>o(),a.onerror=()=>n(a.error)})}async function ut(){const e=await ve("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function ft(e,t,o){const n=await A();return new Promise((r,s)=>{const i=n.transaction(f.SYNC_QUEUE,"readwrite").objectStore(f.SYNC_QUEUE),c={method:e,endpoint:t,payload:o,status:"pending",attempts:0,createdAt:Date.now(),lastAttempt:null},d=i.add(c);d.onsuccess=()=>{console.log(`[SyncQueue] Enqueued ${e} ${t} (id: ${d.result})`),r(d.result)},d.onerror=()=>s(d.error)})}async function V(){const e=await A();return new Promise((t,o)=>{const a=e.transaction(f.SYNC_QUEUE,"readonly").objectStore(f.SYNC_QUEUE).index("status").getAll("pending");a.onsuccess=()=>t(a.result||[]),a.onerror=()=>o(a.error)})}async function fe(e,t,o={}){const n=await A();return new Promise((r,s)=>{const i=n.transaction(f.SYNC_QUEUE,"readwrite").objectStore(f.SYNC_QUEUE),c=i.get(e);c.onsuccess=()=>{const d=c.result;if(!d)return r();const m={...d,status:t,lastAttempt:Date.now(),attempts:(d.attempts||0)+1,...o},h=i.put(m);h.onsuccess=()=>r(),h.onerror=()=>s(h.error)},c.onerror=()=>s(c.error)})}async function pt(e){const t=await A();return new Promise((o,n)=>{const a=t.transaction(f.SYNC_QUEUE,"readwrite").objectStore(f.SYNC_QUEUE).delete(e);a.onsuccess=()=>o(),a.onerror=()=>n(a.error)})}async function gt(){return(await V()).length}async function mt(e,t){const o=await A();return new Promise((n,r)=>{const i=o.transaction(f.METADATA,"readwrite").objectStore(f.METADATA).put({key:e,value:t});i.onsuccess=()=>n(),i.onerror=()=>r(i.error)})}async function ve(e){const t=await A();return new Promise((o,n)=>{const a=t.transaction(f.METADATA,"readonly").objectStore(f.METADATA).get(e);a.onsuccess=()=>o(a.result?.value??null),a.onerror=()=>n(a.error)})}function ht(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function yt(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch(t){return console.error("[DB] Failed to decrypt local cache",t),null}}async function bt(e,t){const o=await A();return new Promise((n,r)=>{const a=o.transaction(f.APP_CACHE,"readwrite").objectStore(f.APP_CACHE),i={key:e,data:ht(t),updated_at:Date.now()},c=a.put(i);c.onsuccess=()=>{console.log(`[DB] Securely cached offline data for: ${e}`),n()},c.onerror=()=>r(c.error)})}async function xt(e){const t=await A();return new Promise((o,n)=>{const a=t.transaction(f.APP_CACHE,"readonly").objectStore(f.APP_CACHE).get(e);a.onsuccess=()=>{a.result&&a.result.data?o(yt(a.result.data)):o(null)},a.onerror=()=>n(a.error)})}async function wt(){const[e,t]=await Promise.all([Y(),V()]),o=await ve("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:o?new Date(o).toLocaleString():"Never"}}window.__doleDB={getStats:wt,getLocalBeneficiaries:Y,getPendingSyncItems:V,setSecureCache:bt,getSecureCache:xt};const vt=3,pe=8e3;let ge=null,Z=!1,T=null;function kt(){if(document.getElementById("sync-status-pill"))return;const e=document.createElement("div");e.id="sync-status-pill",e.style.cssText=`
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
    `,document.body.appendChild(e),T=e}function O(e,t=0){if(!T)return;const o={synced:{bg:"#dcfce7",color:"#15803d",border:"1px solid #bbf7d0",icon:"●",label:"All Synced",opacity:"1"},pending:{bg:"#fef9c3",color:"#854d0e",border:"1px solid #fde68a",icon:"⏳",label:`${t} Pending`,opacity:"1"},syncing:{bg:"#dbeafe",color:"#1d4ed8",border:"1px solid #bfdbfe",icon:"↑",label:"Syncing...",opacity:"1"},offline:{bg:"#fee2e2",color:"#b91c1c",border:"1px solid #fecaca",icon:"✕",label:"Offline – data saved locally",opacity:"1"}},n=o[e]||o.synced;Object.assign(T.style,{background:n.bg,color:n.color,border:n.border,opacity:n.opacity}),T.innerHTML=`<span>${n.icon}</span><span>${n.label}</span>`,e==="synced"&&setTimeout(()=>{T&&(T.style.opacity="0")},4e3)}function St(){try{return JSON.parse(localStorage.getItem("user"))?.id||null}catch{return null}}async function Et(e){const t=St(),o=`${S()}${e.endpoint}`,n={"Content-Type":"application/json",...t?{"X-User-Id":String(t)}:{}},r={method:e.method,headers:n},s=e.method==="PATCH"?`${o}?${new URLSearchParams(e.payload).toString()}`:o;e.method!=="PATCH"&&e.method!=="GET"&&(r.body=JSON.stringify(e.payload));const a=await fetch(s,r);let i;try{i=await a.json()}catch{throw a.ok?new Error("Invalid JSON response"):new Error(`HTTP ${a.status}`)}if(!a.ok||!i.success)throw new Error(i.error||`HTTP ${a.status}`);return q.debug("[Sync] Remote ack",{method:e.method,endpoint:e.endpoint,hasUserId:!!t,finalUrl:s}),i}async function H(){if(Z)return;if(!navigator.onLine){O("offline");return}const e=await V();if(e.length===0)return;Z=!0,O("syncing",e.length);let t=0,o=0;for(const r of e){if((r.attempts||0)>=vt){await fe(r.queueId,"failed"),o++;continue}try{q.debug("[Sync] Pushing",{queueId:r.queueId,method:r.method,endpoint:r.endpoint,payloadKeys:r.payload?Object.keys(r.payload):[]});const s=await Et(r);if(r.method==="POST"&&r.endpoint==="api/beneficiaries.php"&&r.payload&&r.payload._tempId&&s&&s.success&&s.id){const a=s.id,i=r.payload._tempId;try{await dt(i);const c={...r.payload,id:a};delete c._tempId,await we(c),q.debug("[Sync] Upgraded temp id",{tempId:i,realId:a})}catch(c){q.warn("[Sync] Failed upgrading temp id",c?.message||c)}}await pt(r.queueId),t++,console.log(`[Sync] ✓ Pushed ${r.method} ${r.endpoint} (queueId: ${r.queueId})`)}catch(s){console.warn(`[Sync] ✗ Failed ${r.method} ${r.endpoint}:`,s.message),await fe(r.queueId,"pending",{lastError:s.message}),o++}}Z=!1;const n=await gt();n===0?O("synced"):O("pending",n),console.log(`[Sync] Batch complete. ✓ ${t} synced, ✗ ${o} failed. ${n} remaining.`),t>0&&window.dispatchEvent(new CustomEvent("dataSynced",{detail:{count:t}}))}function Ct(){ge||(H(),ge=setInterval(()=>{H()},pe),window.addEventListener("online",()=>{console.log("[Sync] Back online — flushing queue immediately"),O("syncing"),H()}),window.addEventListener("offline",()=>{console.log("[Sync] Gone offline"),O("offline")}),console.log(`[Sync] Worker started (interval: ${pe}ms)`))}let y=[],M=null,w=1;const P=10;let ke=null;async function Se(){const e=await Y();if(e.length>0){y=e,z(y);const n=y.some(s=>!s.startDateFormatted&&!s.startDate||!s.endDateFormatted&&!s.endDate);window.__ldn_hasMissingDates=n,M=U(y);const r=localStorage.getItem("ldn_sort_preference");r?te(r,!1):I(),console.log(`[Offline-First] Rendered ${e.length} records from local cache`)}const t=await ut(),o=30*1e3;if(t<o&&e.length>0){if(!(window.__ldn_hasMissingDates===!0)){console.log(`[Offline-First] Cache is fresh (${Math.round(t/1e3)}s old), skipping remote fetch`);return}console.log("[Offline-First] Cache fresh but missing dates detected — refreshing remote")}try{const n=await he("api/beneficiaries.php");if(n.success&&n.data?.success&&n.data?.beneficiaries){const r=n.data.beneficiaries,s=U(e),a=U(r);if(s!==a){await lt(r),y=r,z(y);const i=localStorage.getItem("ldn_sort_preference");i?te(i,!1):I(),M=a,console.log(`[Offline-First] Remote data synced and rendered (${r.length} records)`)}else console.log("[Offline-First] Remote data matches cache — no re-render needed"),M=a}}catch(n){console.warn("[Offline-First] Remote fetch failed (using local cache):",n.message)}}function z(e){const t=new Date;t.setHours(0,0,0,0),e.forEach(o=>{if(o.remarks==="ONGOING"&&o.endDate){const n=new Date(o.endDate);if(n.setHours(0,0,0,0),n<t){o.remarks="EXPIRED";const r={...o};Te("api/beneficiaries.php",r).catch(s=>console.error("Auto sync failed",s))}}})}function At(){Se(),Ot(),Mt(),Dt()}function Dt(){document.getElementById("beneficiary-table-body")&&Oe.start("beneficiaries",async()=>{if(window.BulkApp&&(window.BulkApp.isActive||Date.now()-(window.BulkApp.lastInteractionTime||0)<3e4))return;const o=await he("api/beneficiaries.php");if(o.success&&o.data.beneficiaries){const n=o.data.beneficiaries;z(n);const r=U(n);(!M||r!==M)&&(y=n,I(),me(),Me("Data Synced","Beneficiary list has been updated","info")),M=r}},1e4)}function I(e=y){const t=document.getElementById("beneficiary-table-body");if(!t)return;if(ke=e,e.length===0){t.innerHTML=`
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
        `;const i=document.getElementById("pagination-controls");i&&(i.innerHTML="");return}const o=e.length,n=Math.ceil(o/P);w>n&&(w=n||1),w<1&&(w=1);const r=(w-1)*P,s=r+P,a=e.slice(r,s);t.innerHTML=a.map(i=>`
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
                    <span class="${Lt(i.office)} text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded whitespace-nowrap">
                        ${i.office||"N/A"}
                    </span>
                </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${i.startDateFormatted||i.startDate?"font-black text-royal-blue uppercase tracking-tight":"font-bold text-gray-300 italic"}">${i.startDateFormatted||i.startDate||"N/A"}</span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${i.endDateFormatted||i.endDate?"font-black text-philippine-red uppercase tracking-tight":"font-bold text-gray-300 italic"}">${i.endDateFormatted||i.endDate||"N/A"}</span>
            </td>
            <td class="px-4 py-3 text-center">
                <span class="${$t(i.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
                    ${i.remarks||"N/A"}
                </span>
            </td>
            <td class="px-4 py-3 flex gap-2">
                <button type="button"
                    class="font-medium text-royal-blue hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Edit Details" onclick='event.stopPropagation(); editBeneficiary(${JSON.stringify(i)})'>
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="font-medium text-philippine-red hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Archive" onclick="event.stopPropagation(); archiveRecord('${i.id}')">
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                </button>
            </td>
        </tr>
    `).join(""),It(o,n),me()}function It(e,t){const o=document.getElementById("pagination-controls");if(!o)return;if(e<=P){o.innerHTML=`
            <span class="text-xs font-bold text-gray-500">Showing all ${e} results</span>
            <div class="flex items-center gap-1"></div>
        `;return}const n=(w-1)*P+1,r=Math.min(w*P,e);o.innerHTML=`
        <span class="text-xs font-bold text-gray-500 px-2 py-1">
            Showing <span class="text-royal-blue">${n}-${r}</span> of <span class="text-royal-blue">${e}</span>
        </span>
        <div class="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
            <!-- Previous Button -->
            <button onclick="changePage(${w-1})" ${w===1?"disabled":""} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            ${Bt(w,t)}

            <!-- Next Button -->
            <button onclick="changePage(${w+1})" ${w===t?"disabled":""} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
    `}function Bt(e,t){let o="",r=Math.max(1,e-1),s=Math.min(t,r+3-1);s-r+1<3&&(r=Math.max(1,s-3+1)),r>1&&(o+='<span class="px-2 text-gray-400">...</span>');for(let a=r;a<=s;a++)o+=`
            <button onclick="changePage(${a})" 
                class="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-black transition-all cursor-pointer
                ${a===e?"bg-royal-blue text-white shadow-md shadow-royal-blue/20":"bg-white text-gray-600 hover:bg-royal-blue/10 hover:text-royal-blue border border-gray-100"}">
                ${a}
            </button>
        `;return s<t&&(o+='<span class="px-2 text-gray-400">...</span>'),o}window.changePage=e=>{w=e,I(ke||y)};function Lt(e){return e?e.includes("DOLE")?"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white":e.includes("DepEd")?"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white":e.includes("LGU")?"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white":e.includes("DICT")?"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white"}function $t(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200";const t=e.toUpperCase();return t==="ONGOING"?"bg-green-100 text-green-700 border-green-200":t==="EXPIRED"?"bg-red-400 text-white border-red-400":t==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":t==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 text-gray-600 border-gray-200"}function te(e,t=!0){switch(t&&localStorage.setItem("ldn_sort_preference",e),e){case"name_asc":y.sort((n,r)=>{const s=n.name.localeCompare(r.name);return s!==0?s:new Date(n.createdAt)-new Date(r.createdAt)});break;case"name_desc":y.sort((n,r)=>{const s=r.name.localeCompare(n.name);return s!==0?s:new Date(n.createdAt)-new Date(r.createdAt)});break;case"office":y.sort((n,r)=>(n.office||"").localeCompare(r.office||""));break;case"remarks":y.sort((n,r)=>(n.remarks||"").localeCompare(r.remarks||""));break;case"education":y.sort((n,r)=>(n.education||"").localeCompare(r.education||""));break;case"work":y.sort((n,r)=>(n.designation||"").localeCompare(r.designation||""));break;case"address":y.sort((n,r)=>(n.address||"").localeCompare(r.address||""));break}w=1,I();const o=document.getElementById("sort-dropdown");o&&!o.classList.contains("hidden")&&o.classList.add("hidden")}async function Nt(e){const t={...e};["name","address","education","designation"].forEach(a=>{t[a]&&typeof t[a]=="string"&&(t[a]=t[a].toUpperCase().trim())});const n=a=>typeof a=="string"&&a.startsWith("temp_"),s=!!t.id&&!n(t.id)?"PUT":"POST";!t.id&&!t.gip_id&&(t._tempId=`temp_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,t.id=t._tempId);try{await we(t),y=await Y(),z(y),I(),console.log(`[Offline-First] ✓ Saved "${t.name}" to local cache`)}catch(a){console.error("[Offline-First] Local save failed:",a)}s==="POST"&&it(`New user <strong>${t.name}</strong> added. pending "Required Documents" for review.`,"success");try{await ft(s,"api/beneficiaries.php",t),H()}catch(a){console.error("[Offline-First] Failed to enqueue sync:",a)}return!0}async function Tt(e){if(!(await J.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',html:`
            <div class="py-4">
                <p class="text-sm font-medium text-gray-500">Are you sure you want to archive this record?</p>
                <p class="text-[10px] font-black text-philippine-red mt-1 uppercase tracking-widest">ID: ${e}</p>
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
        `,reverseButtons:!0,customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-green-50 text-green-700 hover:bg-green-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-green-200 shadow-sm mx-2 cursor-pointer",cancelButton:"bg-red-50 text-red-700 hover:bg-red-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-red-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)return!1;try{const n=await(await fetch(`${S()}api/beneficiaries.php?id=${encodeURIComponent(e)}&action=archive`,{method:"PATCH"})).json();if(n.success)return J.fire({toast:!0,position:"top-end",icon:"success",title:"Record Archived",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),await Se(),!0;throw new Error(n.error||"Failed to archive")}catch(o){return console.error("Error archiving beneficiary:",o),J.fire({icon:"error",title:"Archive Failed",text:o.message}),!1}}function Ot(){const e=document.getElementById("ldn-header-container"),t=document.getElementById("ldn-header-text"),o=document.getElementById("ldn-header-icon");e&&t&&o&&(e.addEventListener("click",()=>{if(window.innerWidth<640)return;const n=t.innerText.trim(),r="Lanao Del Norte - GIP",s="LDN - GIP";t.querySelector(".sm\\:hidden")?.offsetParent,n.includes(r)?(t.innerHTML=s,o.classList.add("rotate-180")):(t.innerHTML=r,o.classList.remove("rotate-180"))}),e.classList.add("cursor-pointer","select-none","transition-all","duration-200"),o.classList.add("transition-transform","duration-200"))}function Mt(){const e=document.getElementById("table-search");e&&(e.addEventListener("input",t=>{const o=t.target.value.toLowerCase().trim();if(o===""){w=1,I(y);return}const n=y.filter(r=>r.name?.toLowerCase().includes(o)||!1||r.id?.toLowerCase().includes(o)||!1||r.office?.toLowerCase().includes(o)||!1||r.remarks?.toLowerCase().includes(o)||!1||r.designation?.toLowerCase().includes(o)||!1||r.address?.toLowerCase().includes(o)||!1||r.education?.toLowerCase().includes(o)||!1);w=1,I(n)}),window.addEventListener("keydown",t=>{t.key==="/"&&document.activeElement!==e&&(t.preventDefault(),e.focus())}))}window.sortData=te;window.archiveRecord=Tt;window.addBeneficiaryData=Nt;let oe=[],C=["id","name","office","position","status"],p={office:"ALL",status:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","office","position","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""};async function Pt(){Rt(),await Ft()}function Rt(){const e=localStorage.getItem("ldn_export_config");if(e)try{const t=JSON.parse(e);p={...p,...t},C=p.columns}catch(t){console.error("Error loading saved export config",t)}}function _t(){localStorage.setItem("ldn_export_config",JSON.stringify(p))}async function Ft(){try{const t=await(await fetch(`${S()}api/beneficiaries.php?all=true`)).json();t.success&&t.beneficiaries&&(oe=t.beneficiaries,window.handleFilterUpdate(p))}catch(e){console.error("Error loading data for export",e)}}window.handleFilterUpdate=function(e){p={...p,...e},e.columns&&(C=e.columns),e.preparedBy!==void 0&&(p.preparedBy=e.preparedBy),e.approvedBy!==void 0&&(p.approvedBy=e.approvedBy),_t();let t=[...oe];p.search&&(t=t.filter(o=>o.name.toLowerCase().includes(p.search)||o.id.toLowerCase().includes(p.search))),p.office!=="ALL"&&(t=t.filter(o=>o.office.includes(p.office))),p.status!=="ALL"&&(t=t.filter(o=>o.remarks.toUpperCase()===p.status.toUpperCase())),p.section==="ACTIVE"?t=t.filter(o=>!o.isArchived):p.section==="ARCHIVED"&&(t=t.filter(o=>o.isArchived)),p.sort&&t.sort((o,n)=>{switch(p.sort){case"name":return(o.name||"").localeCompare(n.name||"");case"id":return(o.id||"").localeCompare(n.id||"");case"office":return(o.office||"").localeCompare(n.office||"");case"startdate":const r=new Date(o.startDate||0);return new Date(n.startDate||0)-r;default:return 0}}),jt(t)};window.getExportFilters=()=>p;function jt(e){Ut(e),Ht(e);const t=document.getElementById("record-count");t&&(t.textContent=e.length),window.currentFilteredData=e}window.exportToExcel=function(){const e=window.currentFilteredData||oe,t=C,o=`
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
                <tr><td colspan="${t.length}" class="title">DOLE LDNPFO - BENEFICIARY REPORT</td></tr>
                <tr><td colspan="${t.length}" style="color: #64748b; font-size: 10px;">Generated on: ${new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date)}</td></tr>
                <tr><td colspan="${t.length}"></td></tr>
                <tr height="40">
                    ${t.map(a=>`<th class="header cell">${ne[a]||a.toUpperCase()}</th>`).join("")}
                </tr>
                ${(()=>{let a=null,i="";[...e].sort((d,m)=>d.isArchived-m.isArchived).forEach(d=>{d.isArchived!==a&&(a=d.isArchived,i+=`<tr><td colspan="${t.length}" class="cell divider">${a?"ARCHIVED RECORDS":"ACTIVE BENEFICIARIES"}</td></tr>`),i+=`<tr>${t.map(m=>{let h=d[m]||"-";return m==="position"&&(h=d.designation||"-"),m==="startdate"&&(h=d.startDateFormatted||d.startDate||"-"),m==="enddate"&&(h=d.endDateFormatted||d.endDate||"-"),m==="status"?(h=d.remarks||"N/A",`<td class="cell ${"status-"+h.toLowerCase()}">${h}</td>`):`<td class="cell">${h}</td>`}).join("")}</tr>`})})()}
                <tr><td colspan="${t.length}"></td></tr>
                <tr><td colspan="${t.length}"></td></tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Prepared by:</td>
                    <td colspan="${Math.max(1,t.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Approved by:</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${p.preparedBy||""}</td>
                    <td colspan="${Math.max(1,t.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${p.approvedBy||""}</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                    <td colspan="${Math.max(1,t.length-4)}"></td>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                </tr>
            </table>
        </body>
        </html>
    `,n=new Blob([o],{type:"application/vnd.ms-excel"}),r=window.URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=`LDN_RECORDS_${new Date().toISOString().slice(0,10)}.xls`,document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(r),document.body.removeChild(s)};const ne={id:"ID NO.",name:"NAME",office:"OFFICE",position:"DESIGNATION",status:"STATUS",startdate:"START DATE",enddate:"END DATE"};function qt(e,t="px-4 py-2.5"){return`
        <tr class="text-[11px] text-white uppercase bg-royal-blue font-bold tracking-widest text-center">
            ${e.map(o=>{let n="";return o==="name"&&(n=' title="Last Name, First Name, Middle Initial"'),`<th scope="col" class="${t}"${n}>${ne[o]||o.toUpperCase()}</th>`}).join("")}
        </tr>
    `}function Ee(e,t,o=!1){return t.map(n=>{let r=e[n]||"-";if(n==="position"&&(r=e.designation||"-"),n==="startdate"&&(r=e.startDateFormatted||e.startDate||"-"),n==="enddate"&&(r=e.endDateFormatted||e.endDate||"-"),n==="status"&&(r=e.remarks||"N/A"),o){let s="px-3 py-2 border border-gray-200 text-center";return n==="id"&&(s+=" font-mono font-bold"),n==="name"&&(s+=" font-bold text-black uppercase leading-tight text-left px-4"),n==="status"&&(s+=` text-center font-bold uppercase ${{ABSORBED:"text-golden-yellow",RESIGNED:"text-slate-500",EXPIRED:"text-philippine-red",ONGOING:"text-green-600"}[r]||"text-gray-500"}`),(n==="startdate"||n==="enddate")&&(s+=" text-center font-mono text-[9px]"),`<td class="${s}">${r}</td>`}else return n==="id"?`<th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap font-mono text-xs text-center">${r}</th>`:n==="name"?`<td class="px-4 py-3 font-bold text-royal-blue group-hover/row:translate-x-1 transition-transform uppercase">${r}</td>`:n==="office"?`<td class="px-4 py-3 text-center"><span class="bg-white text-blue-700 px-2 py-0.5 rounded text-[10px] border border-blue-100 font-bold shadow-sm">${r}</span></td>`:n==="status"?`<td class="px-4 py-3 text-center"><span class="${{ABSORBED:"bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20",RESIGNED:"bg-slate-100 text-slate-500 border-slate-200",EXPIRED:"bg-red-50 text-philippine-red border-red-100",ONGOING:"bg-green-50 text-green-600 border-green-100"}[r]||"bg-gray-100 text-gray-700 border-gray-200"} px-2 py-0.5 rounded text-xs border uppercase font-bold text-[10px] shadow-sm">${r}</span></td>`:n==="startdate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-royal-blue uppercase tracking-tight">${r}</td>`:n==="enddate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-philippine-red uppercase tracking-tight">${r}</td>`:`<td class="px-4 py-3 text-xs font-semibold text-gray-500 text-center">${r}</td>`}).join("")}function Ut(e){const t=document.querySelector(".overflow-x-auto table");if(!t)return;const o=t.querySelector("thead"),n=document.getElementById("web-table-body");if(o.innerHTML=qt(C),e.length===0){n.innerHTML=`<tr><td colspan="${C.length}" class="px-6 py-12 text-center text-gray-400 font-medium italic">No matching records found.</td></tr>`;return}const r=[...e].sort((d,m)=>d.isArchived!==m.isArchived?d.isArchived-m.isArchived:0);let s=null,a=null,i="";const c=p.section==="ALL";r.forEach(d=>{c&&d.isArchived!==s&&(s=d.isArchived,a=null,i+=`
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
                ${Ee(d,C)}
            </tr>
        `}),n.innerHTML=i}function Ht(e){const t=document.getElementById("print-area");if(!t)return;const n=t.querySelector("table").querySelector("thead"),r=document.getElementById("print-table-body");n.innerHTML=`
        <tr class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[10px] text-center">
            ${C.map(g=>{let u="";return g==="name"&&(u=' title="Last Name, First Name, Middle Initial"'),`<th class="px-3 py-2 border border-royal-blue"${u}>${ne[g]||g.toUpperCase()}</th>`}).join("")}
        </tr>
    `;const s=document.getElementById("print-prepared-by"),a=document.getElementById("print-approved-by");s&&(s.textContent=p.preparedBy),a&&(a.textContent=p.approvedBy);const i=[...e].sort((g,u)=>g.isArchived!==u.isArchived?g.isArchived-u.isArchived:0);let c=null,d=null,m="";const h=p.section==="ALL";i.forEach((g,u)=>{h&&g.isArchived!==c&&(c=g.isArchived,d=null,m+=`
                <tr class="print:bg-gray-200 bg-gray-200">
                    <td colspan="${C.length}" class="px-3 py-1 border border-gray-400 text-center">
                        <span class="text-[10px] font-black uppercase tracking-[0.2em]">${c?"SECTION: ARCHIVED RECORDS":"SECTION: ACTIVE BENEFICIARIES"}</span>
                    </td>
                </tr>
            `),g.office!==d&&(d=g.office,m+=`
                <tr class="bg-gray-50 print:bg-gray-50">
                    <td colspan="${C.length}" class="px-3 py-1.5 border border-gray-200 text-center">
                        <span class="text-[9px] font-black text-gray-800 uppercase tracking-widest text-center">Office: ${d||"N/A"}</span>
                    </td>
                </tr>
            `),m+=`
            <tr class="${u%2===0?"bg-white":"bg-gray-50/30"} border-b border-gray-200">
                ${Ee(g,C,!0)}
            </tr>
        `}),r.innerHTML=m}Pe();Re();window.initFlowbite=$e;document.addEventListener("DOMContentLoaded",()=>{console.log("DOLE System initialized. Mode: [SUPABASE]");const e=window.location.pathname;_e(),Fe(),je(),W(),At(),qe(),Wt(),Yt(),Ze(),kt(),Ct(),e.includes("/export/")&&Pt(),Gt(),zt()});function Gt(){document.querySelectorAll(".togglePassword").forEach(t=>{const o=t.closest(".relative").querySelector("input");t&&o&&t.addEventListener("click",()=>{const n=o.getAttribute("type")==="password"?"text":"password";o.setAttribute("type",n);const r=t.querySelector(".eye-open"),s=t.querySelector(".eye-closed");r&&s&&(r.classList.toggle("hidden"),s.classList.toggle("hidden"))})})}function zt(){const e=new Image;e.crossOrigin="Anonymous",e.onload=function(){const n=document.createElement("canvas"),r=64;n.width=r,n.height=r;const s=n.getContext("2d");s.beginPath(),s.arc(r/2,r/2,r/2,0,2*Math.PI),s.closePath(),s.clip(),s.drawImage(e,0,0,r,r);let a=document.querySelector("link[rel~='icon']");a||(a=document.createElement("link"),a.rel="icon",document.getElementsByTagName("head")[0].appendChild(a)),a.type="image/png",a.href=n.toDataURL()};const t=window.location.pathname;let o="";t.includes("/dole-system/")&&(o=t.substring(0,t.indexOf("/dole-system/")+13)),e.src=`${o}frontend/images/logo/doleiligan.png`}function Wt(){const e=document.querySelectorAll(".auto-year"),t=new Date().getFullYear();e.forEach(o=>{o.textContent=t})}async function Yt(){try{let e="";try{const n=JSON.parse(localStorage.getItem("user"));n&&n.id&&(e=`?user_id=${n.id}`)}catch{}const o=await(await fetch(`${S()}api/profile.php${e}`)).json();o.success&&Ue(o.profile)}catch(e){console.error("Error loading user profile:",e)}}
