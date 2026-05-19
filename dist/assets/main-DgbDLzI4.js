import"./vendor-DHtNC8Ux.js";import{i as xt,D as wt,a as vt}from"./vendor-flowbite-B7rSfpuT.js";import{a as J,g as A,b as G,_ as kt,l as te,r as Et,c as ue,i as Ke,s as M,d as St,e as Ct,f as It,h as At,j as Lt,k as Dt,m as Bt,n as _t,u as Nt}from"./modal-CWNt0OfH.js";import{A as Ot}from"./vendor-charts-BjInCqFR.js";import z from"./vendor-swal-BSk0fVSb.js";const C=()=>document.documentElement.classList.contains("dark"),$t=()=>C()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},N={royalBlue:()=>C()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(C(),"#94a3b8")};let X=null;function ae(t){const r=`; ${document.cookie}`.match(new RegExp(`;\\s*${t}=([^;]+)`));return r?decodeURIComponent(r[1]):null}function oe(t,e,r){let o=new Date;o.setTime(o.getTime()+r*24*60*60*1e3),document.cookie=`${t}=${encodeURIComponent(e)};expires=${o.toUTCString()};path=/`}let x=ae("user_workforce_filter")||"ALL",Ze=ae("user_workforce_label")||"Overall Stats",Q=ae("user_gender_filter")||"ALL",Xe=ae("user_gender_label")||"All Years";function F(t){if(!t)return null;if(t instanceof Date)return isNaN(t.getTime())?null:t;if(typeof t!="string")return null;const e=t.trim();if(!e)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(e)){const o=new Date(`${e}T00:00:00`);return isNaN(o.getTime())?null:o}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(e)){const o=e.replace(" ","T"),n=new Date(o);return isNaN(n.getTime())?null:n}const r=new Date(e);return isNaN(r.getTime())?null:r}const Fe={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function K(t=!1){if(localStorage.getItem("isLoggedIn")!=="true")return;let e=[];if(t&&(X=null),X)e=X;else try{const u=await J("api/beneficiaries.php?all=true");if(u.success&&u.data?.success&&u.data?.beneficiaries)e=u.data.beneficiaries;else{console.debug("[CHARTS] Skipping chart render:",u.data?.error||u.error);return}X=e}catch(u){console.debug("[CHARTS] Chart init skipped:",u?.message);return}if(e.length===0)return;Gt();const r=$t();document.querySelectorAll('[id$="-chart"]').forEach(u=>u.innerHTML="");const o=[...new Set(e.map(u=>{const y=u.startDate||u.createdAt,k=F(y);return k?k.getFullYear().toString():null}).filter(u=>u))].sort((u,y)=>y-u);Rt(o,e),Pt(o,e);const n=new Date;let a=e;x!=="ALL"&&(a=e.filter(u=>{if(x.includes("D")){const y=F(u.createdAt);if(!y)return!1;const k=parseInt(x),B=new Date;return B.setDate(n.getDate()-k),B.setHours(0,0,0,0),y>=B}else if(o.includes(x)){const y=F(u.startDate||u.createdAt);return y?y.getFullYear().toString()===x:!1}return!0}));const s=fe(e),i=fe(a);Mt(s,i);let c=[];if(x==="ALL"){const y=new Date().getFullYear();for(let k=2020;k<=y;k++)c.push(k.toString())}else if(o.includes(x))c=["Q1","Q2","Q3","Q4"];else{const u=parseInt(x)||7;c=Array.from({length:u},(y,k)=>{const B=new Date;return B.setDate(n.getDate()-(u-1-k)),new Date(B.getTime()-B.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const l={};c.forEach(u=>l[u]=0),a.forEach(u=>{const y=u.startDate||u.createdAt;if(y){const k=F(y);if(!k)return;const B=k.getFullYear().toString(),$e=new Date(k.getTime()-k.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(x==="ALL")l.hasOwnProperty(B)&&l[B]++;else if(x.includes("D"))l.hasOwnProperty($e)&&l[$e]++;else if(B===x){const Te="Q"+(Math.floor(k.getMonth()/3)+1);l.hasOwnProperty(Te)&&l[Te]++}}});const d=Object.values(l),f=a.length,h=d[d.length-1]||0,p=d[d.length-2]||0;let b;if(x==="ALL"){const u=f/c.length;b=h>=u}else b=h>=p;let w=b?N.successGreen:N.philippineRed,$=b?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",T=b?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";x==="ALL"?(w=N.successGreen,$="bg-green-500 shadow-green-500/30",T="text-green-600 dark:text-green-400"):x==="7D"?(w="#fb923c",$="bg-orange-500 shadow-orange-500/30",T="text-orange-500 dark:text-orange-400"):x==="30D"?(w="#eab308",$="bg-yellow-500 shadow-yellow-500/30",T="text-yellow-600 dark:text-yellow-400"):x==="90D"?(w="#2563eb",$="bg-blue-600 shadow-blue-600/30",T="text-blue-600 dark:text-blue-400"):o.includes(x)&&(w="#f87171",$="bg-red-400 shadow-red-400/30",T="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(u=>{u.textContent=f,u.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${T}`});const De=p>0?Math.round((h-p)/p*100):h>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(u=>u.textContent=(De>=0?"+":"")+(x==="ALL"?"Growth":De+"%"));const Be=document.getElementById("added-metric-badge");Be&&(Be.className=`flex items-center px-3 py-1 text-[10px] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${$}`);const _e=document.getElementById("added-metric-icon");_e&&(_e.style.transform=b?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(u=>{const y=document.getElementById(u);y&&(y.innerHTML=`${Ze} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const dt={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:C()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:w,opacity:.6},{offset:100,color:w,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[w]},series:[{name:"New Beneficiaries",data:d}],xaxis:{categories:c,labels:{show:!0,style:{colors:r.muted,fontSize:"10px",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:r.muted,fontSize:"10px",fontWeight:600}}},grid:{show:!0,borderColor:r.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[w],markers:{size:c.length>20?0:4,colors:[w],strokeColors:r.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:C()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};P("workforce-chart",dt);const ut=Q==="ALL"?e:e.filter(u=>{const y=F(u.startDate||u.createdAt);return y&&y.getFullYear().toString()===Q}),Ne=fe(ut),ft={series:[Ne.genders.Female||0,Ne.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:r.cardBg},colors:[N.philippineRed,N.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"12px",fontWeight:600,color:r.muted},value:{show:!0,fontSize:"24px",fontWeight:900,color:r.text,formatter:u=>u},total:{show:!0,label:"TOTAL",fontSize:"10px",fontWeight:800,color:r.muted,formatter:u=>u.globals.seriesTotals.reduce((y,k)=>y+k,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[r.cardBg],width:4},theme:{mode:C()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"18px"}}}}}}}]};P("gender-chart",ft);const pt=[i.education["College Grad"],i.education["College Lvl"],i.education["HS Grad"],i.education["Senior High"]];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([u,y])=>{document.querySelectorAll(y).forEach(k=>k.textContent=i.education[u]||0)});const gt={series:pt.map(u=>a.length>0?Math.round(u/a.length*100):0),chart:{height:380,type:"radialBar",background:r.cardBg,fontFamily:"Montserrat, sans-serif"},plotOptions:{radialBar:{hollow:{size:"45%"},dataLabels:{name:{fontSize:"11px",fontWeight:700,color:r.muted,offsetY:-5},value:{fontSize:"16px",fontWeight:900,color:r.text,offsetY:5},total:{show:!0,label:"GRADUATES",color:r.muted}},track:{background:r.grid,strokeWidth:"95%"}}},colors:[N.royalBlue(),N.goldenYellow,N.philippineRed,N.mutedSlate()],labels:["Col. Grad","Col. Lvl","HS Grad","Snr High"],theme:{mode:C()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:320},plotOptions:{radialBar:{hollow:{size:"30%"},dataLabels:{value:{fontSize:"14px"}}}}}}]};P("education-chart",gt),document.querySelectorAll(".count-absorbed").forEach(u=>u.textContent=i.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(u=>u.textContent=i.status.ONGOING||0);const mt={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:i.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:i.status.ONGOING||0},{x:"Expired",y:i.status.EXPIRED||0},{x:"Resigned",y:i.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"12px",fontWeight:"900",colors:[r.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:r.muted,fontWeight:700}}},yaxis:{show:!1},grid:{show:!1},tooltip:{theme:C()?"dark":"light",y:{formatter:u=>u+" Beneficiaries"}},theme:{mode:C()?"dark":"light"}};P("status-chart",mt);const Oe=Object.entries(i.designations).sort((u,y)=>y[1]-u[1]).slice(0,5),ht={series:[{name:"Beneficiaries",data:Oe.map(u=>u[1]),color:w}],chart:{type:"bar",height:320,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:r.cardBg},plotOptions:{bar:{horizontal:!0,columnWidth:"100%",borderRadius:8,barHeight:"52%"}},dataLabels:{enabled:!1},xaxis:{categories:Oe.map(u=>u[0]),labels:{show:!0,style:{fontWeight:600,colors:r.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!0,style:{fontWeight:700,colors:r.text,fontSize:"10px"}}},grid:{borderColor:r.grid,strokeDashArray:4,padding:{left:-15,right:0}},theme:{mode:C()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:350},xaxis:{labels:{style:{fontSize:"8px"}}},yaxis:{labels:{style:{fontSize:"9px"}}}}}]};P("job-roles-chart",ht);const bt={series:[{name:"Beneficiaries",data:Object.values(i.ages),color:w}],chart:{type:"area",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:r.cardBg},stroke:{curve:"smooth",width:3},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1}},dataLabels:{enabled:!0,offsetY:-10,offsetX:0,style:{fontSize:"9px",fontWeight:"800"},background:{enabled:!0,padding:3,borderRadius:4,borderWidth:0,opacity:.9}},xaxis:{categories:Object.keys(i.ages),labels:{style:{fontWeight:600,colors:r.muted,fontSize:"10px"}},axisBorder:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:r.muted,fontSize:"10px"}}},grid:{borderColor:r.grid,strokeDashArray:6,padding:{left:20,right:60}},theme:{mode:C()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160}}}]};P("age-chart",bt);const Z=Tt(e);Ft(Z);const yt={series:[{name:"Actual Beneficiaries",data:Object.values(Z.municipalityData).map(u=>u.actual)},{name:"Target Slots",data:Object.values(Z.municipalityData).map(u=>u.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:r.cardBg},theme:{mode:C()?"dark":"light"},colors:[N.royalBlue(),C()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(Z.municipalityData),labels:{style:{fontWeight:600,colors:r.muted,fontSize:"9px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:r.muted}}},legend:{show:!1},fill:{opacity:1},grid:{borderColor:r.grid,strokeDashArray:4,yaxis:{lines:{show:!0}}}};P("performance-gap-chart",yt)}function P(t,e){const r=document.getElementById(t);if(!r)return;r.innerHTML="",new Ot(r,e).render()}function fe(t){const e={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},r=new Date;return r.setHours(0,0,0,0),t.forEach(o=>{const n=o.office||"Unassigned";e.offices[n]=(e.offices[n]||0)+1;const a=(o.gender||"Unknown").trim(),s=a==="F"||a==="Female"?"Female":a==="M"||a==="Male"?"Male":"Unknown";e.genders[s]++;const i=(o.education||"").toUpperCase();i.includes("GRADUATE")||i.includes("DEGREE")||i.includes("BS")||i.includes("AB")?e.education["College Grad"]++:i.includes("COLLEGE")||i.includes("LEVEL")||i.includes("UNIT")?e.education["College Lvl"]++:i.includes("SENIOR")?e.education["Senior High"]++:(i.includes("HS")||i.includes("HIGH"))&&e.education["HS Grad"]++;const c=o.designation||"General Support";e.designations[c]=(e.designations[c]||0)+1;const l=(o.remarks||o.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),d=!!o.absorbDate;if(l.includes("ABSORBED")||d)e.status.ABSORBED++;else if(l.includes("RESIGNED"))e.status.RESIGNED++;else if(l==="ONGOING"||l.includes("ONGOING")||l.includes("ACTIVE")||o.status_id==1)e.status.ONGOING++;else if(l.includes("EXPIRED"))e.status.EXPIRED++;else{let h=!1;if(o.endDate){const p=F(o.endDate);p&&p<r&&(h=!0)}h?e.status.EXPIRED++:e.status.ONGOING++}const f=parseInt(o.age);isNaN(f)||(e.totalAge+=f,e.ageCount++,f>=18&&f<=24?e.ages["18-24"]++:f>=25&&f<=30?e.ages["25-30"]++:f>=31&&f<=40?e.ages["31-40"]++:f>=41&&e.ages["41+"]++)}),e}function Tt(t){const e={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(Fe).forEach(([r,o])=>{e.municipalityData[r]={actual:0,target:o},e.totalTarget+=o}),t.forEach(r=>{const o=(r.office||"").toUpperCase();let n="OTHER";for(const s in Fe)if(o.includes(s)){n=s;break}if(e.municipalityData[n]&&(e.municipalityData[n].actual++,e.totalActual++),(r.remarks||"ONGOING").toUpperCase()==="RESIGNED"?e.retention.resign++:e.retention.count++,r.createdAt&&r.startDate){const s=new Date(r.createdAt),i=new Date(r.startDate),c=Math.ceil((i-s)/(1e3*60*60*24));c>=0&&c<180&&(e.velocity.totalDays+=c,e.velocity.count++)}}),e}function Ft(t){const e=t.totalTarget>0?(t.totalActual/t.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(a=>{a.textContent=e+"%";const s=a.parentElement?.nextElementSibling?.firstElementChild;s&&(s.style.width=e+"%")});const r=t.velocity.count>0?(t.velocity.totalDays/t.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(a=>a.textContent=r);const o=t.retention.count+t.retention.resign,n=o>0?(t.retention.count/o*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(a=>a.textContent=n+"%")}function Mt(t,e){const r=Object.values(t.offices).reduce((p,b)=>p+b,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(p=>p.textContent=r);const o=t.genders.Female||0,n=t.genders.Male||0,a=o+n,s=a>0?Math.round(o/a*100)+"%":"0%",i=a>0?Math.round(n/a*100)+"%":"0%";document.querySelectorAll(".metric-female-ratio").forEach(p=>p.textContent=s),document.querySelectorAll(".metric-male-ratio").forEach(p=>p.textContent=i);const c=Object.keys(t.offices).length;document.querySelectorAll(".metric-deployment-sites").forEach(p=>p.textContent=c);const l=t.ageCount>0?Math.round(t.totalAge/t.ageCount):0;document.querySelectorAll(".metric-avg-age").forEach(p=>p.textContent=l),document.querySelectorAll(".metric-avg-age-range").forEach(p=>p.textContent=l+" YRS");const d=Object.values(e.designations).reduce((p,b)=>p+b,0);let f=0;Object.entries(e.designations).forEach(([p,b])=>{p.toLowerCase().match(/field|driver|maintenance/)&&(f+=b)}),document.querySelectorAll(".count-office-based").forEach(p=>p.textContent=d-f),document.querySelectorAll(".count-field-based").forEach(p=>p.textContent=f);const h=Object.entries(e.designations).sort((p,b)=>b[1]-p[1])[0]?.[0]||"N/A";document.querySelectorAll(".metric-top-role").forEach(p=>{p.dataset.originalTopRole=h;const b=document.getElementById("status-content-view")&&!document.getElementById("status-content-view").classList.contains("hidden");p.textContent=b?"EMPLOYMENT STATUS":h})}function Rt(t,e){const r=document.querySelector("#lastDaysdropdown ul");if(!r)return;const o=e.length,n=new Date,a=c=>{const l=new Date;return l.setDate(n.getDate()-c),l.setHours(0,0,0,0),e.filter(d=>{const f=F(d.createdAt);return f&&f>=l}).length},s=c=>e.filter(l=>{const d=F(l.startDate||l.createdAt);return d&&d.getFullYear().toString()===c}).length;let i=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${x==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[10px] font-black">${o}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${x==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[10px] font-black">${a(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${x==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[10px] font-black">${a(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${x==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[10px] font-black">${a(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;t.forEach(c=>{const l=s(c);i+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${c}', 'Year ${c}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${x===c?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${c}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[10px] font-black">${l}</span>
            </a>
        </li>`}),r.innerHTML=i}function Pt(t,e){const r=document.getElementById("gender-filter-options"),o=document.getElementById("gender-filter-button");if(!r||!o)return;const n=e.length,a=i=>e.filter(c=>{const l=F(c.startDate||c.createdAt);return l&&l.getFullYear().toString()===i}).length;let s=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${Q==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[10px] font-black">${n}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;t.forEach(i=>{const c=a(i);s+=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${i}', 'Year ${i}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${Q===i?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${i}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[10px] font-black">${c}</span>
            </a>
        </li>
        `}),r.innerHTML=s,o.innerHTML=`${Xe} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function jt(t,e){x=t,Ze=e,oe("user_workforce_filter",t,30),oe("user_workforce_label",e,30),["lastDaysdropdown"].forEach(o=>{const n=document.getElementById(o);if(n&&window.FlowbiteInstances){const a=window.FlowbiteInstances.getInstance("Dropdown",o);a&&a.hide()}else n&&n.classList.add("hidden")}),K()}function Ut(t,e){Q=t,Xe=e,oe("user_gender_filter",t,30),oe("user_gender_label",e,30);const r=document.getElementById("gender-filter-dropdown");if(r&&window.FlowbiteInstances){const o=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");o&&o.hide()}else r&&r.classList.add("hidden");K()}function Gt(){const t=localStorage.getItem("user");if(t)try{const e=JSON.parse(t),r=e.full_name||e.username||"System User",o=e.email||(e.username?`${e.username}@dole.gov.ph`:"user@dole.gov.ph"),n=e.profile_picture_path,a=r.trim().split(" ").map(s=>s[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(s=>s.textContent=r),document.querySelectorAll(".sidebar-user-email").forEach(s=>s.textContent=o),document.querySelectorAll(".sidebar-user-avatar").forEach(s=>{const i=s.querySelector(".sidebar-avatar-initials"),c=s.querySelector(".sidebar-avatar-img");if(n&&c){const l=A(),d=n.startsWith("http")?n:l+n.replace(/^\//,"");c.src=d,c.classList.remove("hidden"),i&&i.classList.add("hidden")}else i&&(i.textContent=a,i.classList.remove("hidden"),c&&c.classList.add("hidden"))})}catch(e){console.error("Failed to parse user data for sidebar:",e)}}window.updateWorkforceFilter=jt;window.updateGenderFilter=Ut;document.addEventListener("themeChanged",()=>{setTimeout(()=>K(),50)});window.addEventListener("dataSynced",()=>{console.log("[Charts] Data synced detected, refreshing analytics..."),K(!0)});let be=null,ye="default",xe=0,pe=localStorage.getItem("last_notified_id")?parseInt(localStorage.getItem("last_notified_id")):0;function Ht(){const t=A();be=new Audio(`${t}backend/src/assets/sounds/ping-ding.mp3`),qt(),zt(),Qt(),ne()}async function qt(){if(!("Notification"in window)){console.log("This browser does not support notifications");return}if(Notification.permission==="default"){const{default:t}=await kt(async()=>{const{default:r}=await import("./vendor-swal-BSk0fVSb.js");return{default:r}},[],import.meta.url);if((await t.fire({title:"Enable Notifications?",html:`
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
            `,icon:"question",showCancelButton:!0,confirmButtonText:"Allow Notifications",cancelButtonText:"Maybe Later",confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",customClass:{popup:"rounded-2xl",confirmButton:"font-bold",cancelButton:"font-bold"}})).isConfirmed){const r=await Notification.requestPermission();ye=r,r==="granted"&&t.fire({icon:"success",title:"Notifications Enabled!",text:"You will now receive real-time updates.",timer:3e3,showConfirmButton:!1})}}else ye=Notification.permission}function zt(){const t=document.getElementById("notificationBellButton"),e=document.getElementById("notificationDropdown");!t||!e||t.addEventListener("click",()=>{ne()})}async function ne(){A(),document.getElementById("notificationDropdown");const t=document.getElementById("notificationList");if(t){Wt(t);try{const e=await G("api/notifications.php"),r=e.data;e.success&&r.success?(et(r.notifications),j(r.unread_count)):Me(t)}catch(e){console.error("Error loading notifications:",e),Me(t)}}}function Wt(t){t.innerHTML=`
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
    `}function Me(t){t.innerHTML=`
        <div class="flex items-center justify-center py-8 text-gray-500 text-sm">
            <p>Unable to load notifications</p>
        </div>
    `}function et(t){const e=document.getElementById("notificationList");if(!e)return;const r=e.scrollTop;if(t.length===0){e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 text-center">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Empty</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">No recent activity detected</p>
            </div>
        `;return}const o=t.map(n=>Yt(n)).join("");e.innerHTML=o,requestAnimationFrame(()=>{e.scrollTop=r})}function Yt(t){const e=Jt(t.created_at),r=Vt(e),o=t.is_read===0;return`
        <a href="javascript:void(0)" 
           class="flex px-4 py-3 hover:bg-neutral-secondary-medium transition-all duration-300 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 ${o?"bg-emerald-50/30 dark:bg-emerald-500/10 border-l-4 border-emerald-500 shadow-md ring-1 ring-emerald-500/10 z-10":"opacity-60 grayscale-[0.2] border-l-4 border-transparent"}" 
           data-notification-id="${t.id}"
           onclick="markAsRead(${t.id}); return false;">
            <div class="shrink-0 relative">
                <div class="w-11 h-11 rounded-full ${o?"bg-gradient-to-br from-royal-blue to-blue-700":"bg-slate-200 dark:bg-slate-700"} flex items-center justify-center text-white font-black text-sm shadow-sm transition-all duration-500">
                    <svg class="w-6 h-6 ${o?"":"text-slate-400 dark:text-slate-500"}" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>
                </div>
                ${o?`
                <div class="notification-marker absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full shadow-sm z-10 transition-opacity duration-300">
                    <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </div>
                `:""}
            </div>
            <div class="w-full ps-3">
                <div class="text-body text-sm mb-1.5 ${o?"font-semibold":""}">
                    ${t.message}
                </div>
                <div class="flex items-center gap-2">
                    ${r}
                </div>
            </div>
        </a>
    `}function Vt(t){const e=t.minutes;return e<1?`
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
        `}function Jt(t){const e=new Date,r=new Date(t),o=e-r,n=Math.floor(o/6e4),a=Math.floor(o/36e5),s=Math.floor(o/864e5);let i="";return n<1?i="Just now":n<60?i=`${n} min${n>1?"s":""} ago`:a<24?i=`${a} hour${a>1?"s":""} ago`:i=`${s} day${s>1?"s":""} ago`,{text:i,minutes:n,hours:a,days:s}}function j(t){xe=t;const e=document.getElementById("notificationBadge"),r=document.getElementById("notificationBellIcon");e&&(t>0?(e.textContent=t>99?"99+":t,e.classList.remove("hidden")):e.classList.add("hidden")),r&&(t>0?r.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                </svg>
            `:r.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                </svg>
            `)}window.markAllAsRead=async function(){if(A(),!!document.getElementById("notificationList")){j(0);try{const e=await G("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_all_read"})}),r=e.data;e.success&&r.success&&(j(0),ne())}catch(e){console.error("Error marking all as read:",e),j(0),ne()}}};window.clearNotificationView=async function(){A();const t=document.getElementById("notificationList");if(t){j(0),t.style.opacity="0",setTimeout(()=>{t.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 transition-all duration-500">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Cleared</p>
                <p class="text-slate-300 text-[10px] mt-1 italic">Notifications have been archived</p>
            </div>
        `,t.style.opacity="1"},300);try{const e=await G("api/notifications.php",{method:"POST",body:JSON.stringify({action:"clear_all"})}),r=e.data;e.success&&r.success}catch(e){console.error("Error clearing notifications:",e)}}};window.markAsRead=async function(t){A();const e=document.querySelector(`[data-notification-id="${t}"]`);if(e){const r=e.querySelector(".notification-marker");r&&(r.style.display="none"),e.classList.remove("bg-emerald-50/20","dark:bg-emerald-500/5","border-l-4","border-emerald-500","shadow-xs"),e.classList.add("opacity-60","grayscale-[0.2]","border-l-4","border-transparent");const o=e.querySelector(".rounded-full");if(o){o.classList.remove("bg-gradient-to-br","from-royal-blue","to-blue-700"),o.classList.add("bg-slate-200","dark:bg-slate-700");const n=o.querySelector("svg");n&&n.classList.add("text-slate-400","dark:text-slate-500")}}xe>0&&j(xe-1);try{await G("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_read",notification_id:t})})}catch(r){console.error("Error marking notification as read:",r)}};function Qt(){setInterval(async()=>{await tt()},1e4)}async function tt(){A();const t=document.getElementById("notificationDropdown");try{const e=await G("api/notifications.php?check_new=1"),r=e.data;if(e.success&&r.success){if(j(r.unread_count),t&&!t.classList.contains("hidden")){const o=await G("api/notifications.php"),n=o.data;o.success&&n.success&&et(n.notifications)}if(r.has_new){const o=r.latest_notification;o&&o.id>pe&&(pe=o.id,localStorage.setItem("last_notified_id",pe),Kt(),Zt(o))}}}catch(e){console.error("Error checking notifications:",e)}}function Kt(){const t=JSON.parse(localStorage.getItem("user")||"{}"),e=t.notifications_enabled!==void 0?parseInt(t.notifications_enabled)===1:!0;e&&be?be.play().catch(r=>{console.log("Could not play notification sound (Interaction-required or muted):",r)}):e||console.log("Notification sound muted by user preference")}function Zt(t){if(ye==="granted"&&t){const e=JSON.parse(localStorage.getItem("user")||"{}"),r=e.notifications_enabled!==void 0?parseInt(e.notifications_enabled)===1:!0;new Notification("DOLE-GIP System",{body:t.message,icon:`${A()}frontend/images/logo/doleiligan.png`,badge:`${A()}frontend/images/logo/doleiligan.png`,tag:`notification-${t.id}`,requireInteraction:!1,silent:!r})}}async function Xt(t,e="info"){A();try{const r=await G("api/notifications.php",{method:"POST",body:JSON.stringify({action:"create",message:t,type:e})}),o=r.data;return r.success&&o.success&&await tt(),o}catch(r){return console.error("Error creating notification:",r),{success:!1,error:r.message}}}const Re="dole-gip-db",er=2,m={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let ee=null;function D(){return ee?Promise.resolve(ee):new Promise((t,e)=>{const r=indexedDB.open(Re,er);r.onupgradeneeded=o=>{const n=o.target.result;if(!n.objectStoreNames.contains(m.BENEFICIARIES)){const a=n.createObjectStore(m.BENEFICIARIES,{keyPath:"id"});a.createIndex("name","name",{unique:!1}),a.createIndex("office","office",{unique:!1}),a.createIndex("remarks","remarks",{unique:!1})}n.objectStoreNames.contains(m.SYNC_QUEUE)||n.createObjectStore(m.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),n.objectStoreNames.contains(m.METADATA)||n.createObjectStore(m.METADATA,{keyPath:"key"}),n.objectStoreNames.contains(m.APP_CACHE)||n.createObjectStore(m.APP_CACHE,{keyPath:"key"})},r.onsuccess=o=>{ee=o.target.result,console.log("[DB] IndexedDB opened:",Re),t(ee)},r.onerror=o=>{console.error("[DB] Failed to open IndexedDB:",o.target.error),e(o.target.error)}})}async function Pe(t){const e=await D();return new Promise((r,o)=>{const n=e.transaction(m.BENEFICIARIES,"readwrite"),a=n.objectStore(m.BENEFICIARIES);a.clear(),t.forEach(s=>{const i={...s,id:s.id||s.gip_id};a.put(i)}),n.oncomplete=()=>{sr("beneficiaries_last_sync",Date.now()),console.log(`[DB] Cached ${t.length} beneficiaries locally`),r(t.length)},n.onerror=()=>o(n.error)})}async function se(){const t=await D();return new Promise((e,r)=>{const a=t.transaction(m.BENEFICIARIES,"readonly").objectStore(m.BENEFICIARIES).getAll();a.onsuccess=()=>e(a.result||[]),a.onerror=()=>r(a.error)})}async function rt(t){const e=await D();return new Promise((r,o)=>{const a=e.transaction(m.BENEFICIARIES,"readwrite").objectStore(m.BENEFICIARIES),s={...t,id:t.id||t.gip_id},i=a.put(s);i.onsuccess=()=>r(i.result),i.onerror=()=>o(i.error)})}async function tr(t){const e=await D();return new Promise((r,o)=>{const s=e.transaction(m.BENEFICIARIES,"readwrite").objectStore(m.BENEFICIARIES).delete(t);s.onsuccess=()=>r(),s.onerror=()=>o(s.error)})}async function rr(){const t=await ot("beneficiaries_last_sync");return t?Date.now()-t:1/0}async function or(t,e,r){const o=await D();return new Promise((n,a)=>{const i=o.transaction(m.SYNC_QUEUE,"readwrite").objectStore(m.SYNC_QUEUE),c={method:t,endpoint:e,payload:r,status:"pending",attempts:0,createdAt:Date.now(),lastAttempt:null},l=i.add(c);l.onsuccess=()=>{console.log(`[SyncQueue] Enqueued ${t} ${e} (id: ${l.result})`),n(l.result)},l.onerror=()=>a(l.error)})}async function ie(){const t=await D();return new Promise((e,r)=>{const s=t.transaction(m.SYNC_QUEUE,"readonly").objectStore(m.SYNC_QUEUE).index("status").getAll("pending");s.onsuccess=()=>e(s.result||[]),s.onerror=()=>r(s.error)})}async function je(t,e,r={}){const o=await D();return new Promise((n,a)=>{const i=o.transaction(m.SYNC_QUEUE,"readwrite").objectStore(m.SYNC_QUEUE),c=i.get(t);c.onsuccess=()=>{const l=c.result;if(!l)return n();const d={...l,status:e,lastAttempt:Date.now(),attempts:(l.attempts||0)+1,...r},f=i.put(d);f.onsuccess=()=>n(),f.onerror=()=>a(f.error)},c.onerror=()=>a(c.error)})}async function nr(t){const e=await D();return new Promise((r,o)=>{const s=e.transaction(m.SYNC_QUEUE,"readwrite").objectStore(m.SYNC_QUEUE).delete(t);s.onsuccess=()=>r(),s.onerror=()=>o(s.error)})}async function ar(){return(await ie()).length}async function sr(t,e){const r=await D();return new Promise((o,n)=>{const i=r.transaction(m.METADATA,"readwrite").objectStore(m.METADATA).put({key:t,value:e});i.onsuccess=()=>o(),i.onerror=()=>n(i.error)})}async function ot(t){const e=await D();return new Promise((r,o)=>{const s=e.transaction(m.METADATA,"readonly").objectStore(m.METADATA).get(t);s.onsuccess=()=>r(s.result?.value??null),s.onerror=()=>o(s.error)})}function ir(t){return t?btoa(encodeURIComponent(JSON.stringify(t))):null}function lr(t){if(!t)return null;try{return JSON.parse(decodeURIComponent(atob(t)))}catch(e){return console.error("[DB] Failed to decrypt local cache",e),null}}async function cr(t,e){const r=await D();return new Promise((o,n)=>{const s=r.transaction(m.APP_CACHE,"readwrite").objectStore(m.APP_CACHE),i={key:t,data:ir(e),updated_at:Date.now()},c=s.put(i);c.onsuccess=()=>{console.log(`[DB] Securely cached offline data for: ${t}`),o()},c.onerror=()=>n(c.error)})}async function dr(t){const e=await D();return new Promise((r,o)=>{const s=e.transaction(m.APP_CACHE,"readonly").objectStore(m.APP_CACHE).get(t);s.onsuccess=()=>{s.result&&s.result.data?r(lr(s.result.data)):r(null)},s.onerror=()=>o(s.error)})}async function ur(){const[t,e]=await Promise.all([se(),ie()]),r=await ot("beneficiaries_last_sync");return{localBeneficiaries:t.length,pendingSync:e.length,lastSync:r?new Date(r).toLocaleString():"Never"}}window.__doleDB={getStats:ur,getLocalBeneficiaries:se,getPendingSyncItems:ie,setSecureCache:cr,getSecureCache:dr};const fr=3,Ue=8e3;let Ge=null,ge=!1,H=null;function pr(){if(document.getElementById("sync-status-pill"))return;const t=document.createElement("div");t.id="sync-status-pill",t.style.cssText=`
        position: fixed;
        bottom: 16px;
        right: 16px;
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
    `,document.body.appendChild(t),H=t}function q(t,e=0){if(!H)return;const r={synced:{bg:"#dcfce7",color:"#15803d",border:"1px solid #bbf7d0",icon:"●",label:"All Synced",opacity:"1"},pending:{bg:"#fef9c3",color:"#854d0e",border:"1px solid #fde68a",icon:"⏳",label:`${e} Pending`,opacity:"1"},syncing:{bg:"#dbeafe",color:"#1d4ed8",border:"1px solid #bfdbfe",icon:"↑",label:"Syncing...",opacity:"1"},offline:{bg:"#fee2e2",color:"#b91c1c",border:"1px solid #fecaca",icon:"✕",label:"Offline – data saved locally",opacity:"1"}},o=r[t]||r.synced;Object.assign(H.style,{background:o.bg,color:o.color,border:o.border,opacity:o.opacity}),H.innerHTML=`<span>${o.icon}</span><span>${o.label}</span>`,t==="synced"&&setTimeout(()=>{H&&(H.style.opacity="0")},4e3)}function gr(){try{const t=JSON.parse(localStorage.getItem("user"));return t?.user_id||t?.id||null}catch{return null}}async function mr(t){return await hr(t)}async function hr(t){const e=gr(),r=`${A()}${t.endpoint}`,o={"Content-Type":"application/json",...e?{"X-User-Id":String(e)}:{}},n={method:t.method,headers:o},a=t.method==="PATCH"?`${r}?${new URLSearchParams(t.payload).toString()}`:r;t.method!=="PATCH"&&t.method!=="GET"&&(n.body=JSON.stringify(t.payload));const s=await fetch(a,n);let i;try{i=await s.json()}catch{throw s.ok?new Error("Invalid JSON response"):new Error(`HTTP ${s.status}`)}if(!s.ok||!i.success)throw new Error(i.error||`HTTP ${s.status}`);return te.debug("[Sync] Remote ack",{method:t.method,endpoint:t.endpoint,hasUserId:!!e,finalUrl:a}),i}async function re(){if(ge)return;if(!navigator.onLine){q("offline");return}const t=await ie();if(t.length===0)return;ge=!0,q("syncing",t.length);let e=0,r=0;for(const n of t){if((n.attempts||0)>=fr){await je(n.queueId,"failed"),r++;continue}try{te.debug("[Sync] Pushing",{queueId:n.queueId,method:n.method,endpoint:n.endpoint,payloadKeys:n.payload?Object.keys(n.payload):[]});const a=await mr(n);if(n.method==="POST"&&n.endpoint==="api/beneficiaries.php"&&n.payload&&n.payload._tempId&&a&&a.success&&a.id){const s=a.id,i=n.payload._tempId;try{await tr(i);const c={...n.payload,id:s};delete c._tempId,await rt(c),te.debug("[Sync] Upgraded temp id",{tempId:i,realId:s})}catch(c){te.warn("[Sync] Failed upgrading temp id",c?.message||c)}}await nr(n.queueId),e++,console.log(`[Sync] ✓ Pushed ${n.method} ${n.endpoint} (queueId: ${n.queueId})`)}catch(a){console.warn(`[Sync] ✗ Failed ${n.method} ${n.endpoint}:`,a.message),await je(n.queueId,"pending",{lastError:a.message}),r++}}ge=!1;const o=await ar();o===0?q("synced"):q("pending",o),console.log(`[Sync] Batch complete. ✓ ${e} synced, ✗ ${r} failed. ${o} remaining.`),e>0&&window.dispatchEvent(new CustomEvent("dataSynced",{detail:{count:e}}))}function br(){Ge||(re(),Ge=setInterval(()=>{re()},Ue),window.addEventListener("online",()=>{console.log("[Sync] Back online — flushing queue immediately"),q("syncing"),re()}),window.addEventListener("offline",()=>{console.log("[Sync] Gone offline"),q("offline")}),console.log(`[Sync] Worker started (interval: ${Ue}ms)`))}function He(t){if(!t||t==="N/A")return"N/A";const e=t.split("/");if(e.length===3){const r=parseInt(e[0]),o=e[1],n=e[2],a=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];if(r>=1&&r<=12)return`${a[r-1]} ${o.padStart(2,"0")}, ${n}`}return t.toUpperCase()}let E=[],me=null;const yr="ldn_current_page";let v=wr();const W=10;let nt=null,we=!0,qe=0;const xr=120*1e3;let he={},ze={},We={},_=localStorage.getItem("ldn_status_filter")||"ONGOING",L=localStorage.getItem("ldn_year_filter")||"ALL",U=localStorage.getItem("ldn_office_filter")||"ALL";const at="ldn_filter_mode",st="ldn_filter_mode",Se="ONGOING",Ce="ALL";let S=(localStorage.getItem(st)||"OFF")==="ON";function wr(){const t=Number.parseInt(new URLSearchParams(window.location.search).get("page")||"1",10);return Number.isFinite(t)&&t>0?t:1}function R(t){sessionStorage.setItem(yr,String(t));const e=new URL(window.location.href);t>1?e.searchParams.set("page",String(t)):e.searchParams.delete("page"),window.history.replaceState({},"",e)}function vr(t){const r=`; ${document.cookie}`.match(new RegExp(`;\\s*${t}=([^;]+)`));return r?decodeURIComponent(r[1]):null}function kr(t,e,r=30){const o=new Date;o.setTime(o.getTime()+r*24*60*60*1e3),document.cookie=`${t}=${encodeURIComponent(e)};expires=${o.toUTCString()};path=/`}const Ye=vr(at);Ye&&(S=Ye==="ON");function it(){let t=E;S&&(_!=="ALL"&&(t=t.filter(o=>(o.remarks||"UNKNOWN").toUpperCase()===_)),L!=="ALL"&&(t=t.filter(o=>{const n=o.startDate||o.createdAt;if(!n)return!1;const a=new Date(n);return isNaN(a.getTime())?!1:a.getFullYear().toString()===L})),U!=="ALL"&&(t=t.filter(o=>(o.office||"").toUpperCase().includes(U.toUpperCase()))));const e=document.getElementById("table-search"),r=e?e.value.toLowerCase().trim():"";return r!==""&&(t=t.filter(o=>o.name?.toLowerCase().includes(r)||!1||o.id?.toLowerCase().includes(r)||!1||o.office?.toLowerCase().includes(r)||!1||o.remarks?.toLowerCase().includes(r)||!1||o.designation?.toLowerCase().includes(r)||!1||o.address?.toLowerCase().includes(r)||!1||o.education?.toLowerCase().includes(r)||!1)),S?t:lt(t)}const Ve=1,Er={ONGOING:0,EXPIRED:1};function Je(t){const e=Er[(t||"").toUpperCase()];return e===void 0?2:e}function lt(t){return[...t].sort((e,r)=>{const o=Number(e.officeId)===Ve?0:1,n=Number(r.officeId)===Ve?0:1;if(o!==n)return o-n;const a=Je(e.remarks)-Je(r.remarks);return a!==0?a:(e.name||"").localeCompare(r.name||"")})}function Sr(t,e){const r=[...t];switch(e){case"name_asc":r.sort((o,n)=>o.name.localeCompare(n.name));break;case"name_desc":r.sort((o,n)=>n.name.localeCompare(o.name));break;case"office":r.sort((o,n)=>(o.office||"").localeCompare(n.office||""));break;case"remarks":r.sort((o,n)=>(o.remarks||"").localeCompare(n.remarks||""));break;case"education":r.sort((o,n)=>(o.education||"").localeCompare(n.education||""));break;case"work":r.sort((o,n)=>(o.designation||"").localeCompare(n.designation||""));break;case"address":r.sort((o,n)=>(o.address||"").localeCompare(n.address||""));break;default:return lt(r)}return r}function ve(){if(!S)return;const t=document.getElementById("filter-status"),e=document.getElementById("filter-year");t&&(_=t.value,localStorage.setItem("ldn_status_filter",_)),e&&(L=e.value,localStorage.setItem("ldn_year_filter",L)),v=1,R(v),O();const r=document.getElementById("filter-dropdown");r&&!r.classList.contains("hidden")&&r.classList.add("hidden")}function Y(){const t=document.getElementById("filter-status"),e=document.getElementById("filter-year");t&&(t.value=S?_:Se),e&&(e.value=S?L:Ce)}function Ie(t){S=t;const e=t?"ON":"OFF";localStorage.setItem(st,e),kr(at,e,30)}function le(){const t=document.getElementById("apply-filters-button");t&&(t.textContent=`Filter Mode: ${S?"ON":"OFF"}`,t.setAttribute("aria-pressed",S?"true":"false"),t.classList.remove("bg-blue-700","hover:bg-royal-blue","bg-royal-blue","hover:bg-blue-700"),S?t.classList.add("bg-royal-blue","hover:bg-blue-700"):t.classList.add("bg-blue-700","hover:bg-royal-blue"))}function ce(){const t=document.getElementById("filter-status"),e=document.getElementById("filter-year");t&&(t.disabled=!S),e&&(e.disabled=!S)}function Cr(){const t=!S;if(Ie(t),!t)_=Se,L=Ce,localStorage.setItem("ldn_status_filter",_),localStorage.setItem("ldn_year_filter",L);else{const e=document.getElementById("filter-status"),r=document.getElementById("filter-year");e&&(_=e.value),r&&(L=r.value),localStorage.setItem("ldn_status_filter",_),localStorage.setItem("ldn_year_filter",L)}Y(),ce(),le(),de(),v=1,O()}function Qe(){const t=document.getElementById("filter-year");if(!t)return;const e=[...new Set(E.map(o=>{const n=o.startDate||o.createdAt;if(!n)return null;const a=new Date(n);return isNaN(a.getTime())?null:a.getFullYear().toString()}).filter(o=>o))].sort((o,n)=>n-o);let r='<option value="ALL">All Years</option>';e.forEach(o=>{r+=`<option value="${o}">Year ${o}</option>`}),t.innerHTML=r,t.value=L}async function V(t=!1){let e=await se();if(e.length>0&&e[0].officeId===void 0&&(await Pe([]),e=[],t=!0),e.length>0){E=e,ke(E);const n=E.some(s=>!s.startDateFormatted&&!s.startDate||!s.endDateFormatted&&!s.endDate);window.__ldn_hasMissingDates=n,me=ue(E),Qe(),Y();const a=localStorage.getItem("ldn_sort_preference");Ee(a||"name_asc",!1),console.log(`[Offline-First] Rendered ${e.length} records from local cache`)}else{const n=document.getElementById("beneficiary-table-body");if(n){const a=i=>`
                <div class="flex items-center justify-between py-3">
                    ${i.map(c=>`<div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full ${c}"></div>`).join("")}
                </div>`,s=[["w-16","w-40","w-20","w-16","w-24","w-14","w-10"],["w-20","w-32","w-16","w-20","w-20","w-12","w-10"],["w-14","w-44","w-18","w-14","w-28","w-16","w-10"],["w-18","w-36","w-20","w-18","w-20","w-14","w-10"],["w-16","w-40","w-14","w-16","w-24","w-12","w-10"],["w-20","w-28","w-18","w-20","w-20","w-16","w-10"],["w-14","w-44","w-16","w-14","w-28","w-14","w-10"],["w-18","w-32","w-20","w-18","w-20","w-12","w-10"]];n.innerHTML=`
                <tr>
                    <td colspan="7" class="px-6 pt-2 pb-1">
                        <div role="status" class="animate-pulse">
                            ${s.map(a).join("")}
                            <span class="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>`,n.setAttribute("aria-busy","true")}}const r=await rr(),o=30*1e3;if(!t&&r<o&&e.length>0){if(!(window.__ldn_hasMissingDates===!0)){console.log(`[Offline-First] Cache is fresh (${Math.round(r/1e3)}s old), skipping remote fetch`),we=!1;return}console.log("[Offline-First] Cache fresh but missing dates detected — refreshing remote")}try{let n=[];if(Ke()&&M){const i=Date.now();if(!t&&i-qe<xr)console.log("[Offline-First] Throttling Supabase fetch (using local cache)");else{if(console.log("[Offline-First] Fetching directly from Supabase (Optimized)..."),Object.keys(he).length===0)try{const[{data:d},{data:f},{data:h},{data:p}]=await Promise.all([M.from("genders").select("gender_id, gender_name"),M.from("status_types").select("status_id, status_name"),M.from("offices").select("*").limit(500),M.from("office_locations").select("id, office_id, location").limit(500)]);if(d&&d.forEach(b=>he[b.gender_id]=b.gender_name),f&&f.forEach(b=>ze[b.status_id]=b.status_name),h){const b={};p&&p.forEach(w=>{b[w.office_id]||(b[w.office_id]=[]),b[w.office_id].push(w.location||"")}),h.forEach(w=>{const $=w.office_name||w.office||w.name||"",T=b[w.id]||[];We[w.id]=T.length===1?`${$} - ${T[0]}`:$})}}catch(d){console.warn("Mapping fetch failed:",d)}const{data:c,error:l}=await M.from("beneficiaries").select(`
                        gip_id,
                        full_name,
                        contact_number,
                        address,
                        birthday,
                        age,
                        education,
                        start_date,
                        end_date,
                        series_number,
                        designation,
                        replacement_notes,
                        is_archived,
                        created_at,
                        gender_id,
                        office_id,
                        status_id
                    `).eq("is_archived",!1).order("created_at",{ascending:!1});!l&&c?(qe=i,n=c.map(d=>({id:d.gip_id,name:d.full_name,contact:d.contact_number,address:d.address,birthday:d.birthday,age:d.age,gender:he[d.gender_id]||(d.gender_id==1?"Male":d.gender_id==2?"Female":"N/A"),education:d.education,startDate:d.start_date,endDate:d.end_date,seriesNo:d.series_number,officeId:d.office_id??null,office:d.office_id&&We[d.office_id]||"N/A",designation:d.designation,replacement:d.replacement_notes,remarks:ze[d.status_id]||"UNKNOWN",createdAt:d.created_at}))):l&&console.warn("[Offline-First] Supabase direct fetch failed, falling back to PHP Bridge:",l.message)}}if(n.length===0){const i=await J("api/beneficiaries.php");if(i.success&&i.data?.success&&i.data?.beneficiaries)n=i.data.beneficiaries;else throw new Error(i.error||"Fetch failed from API")}const a=ue(e),s=ue(n);if(a!==s){await Pe(n),E=n,ke(E),Qe(),Y();const i=localStorage.getItem("ldn_sort_preference");Ee(i||"name_asc",!1),me=s,console.log(`[Offline-First] Remote data synced and rendered (${n.length} records)`)}else console.log("[Offline-First] Remote data matches cache — no re-render needed"),me=s}catch(n){console.warn("[Offline-First] Remote fetch failed (using local cache):",n.message)}finally{we=!1}}function ke(t){t.forEach(e=>{typeof e.remarks=="string"&&(e.remarks=e.remarks.trim().toUpperCase())})}function Ir(){const t=document.getElementById("office-filter-dropdown");if(!t)return;let e=[];const r=async()=>{if(e.length>0)return e;try{const n=await J("api/beneficiaries.php?get_offices_advanced=1");n.success&&n.data?.success&&Array.isArray(n.data.offices)&&(e=n.data.offices)}catch(n){console.error("Filter office fetch failed:",n)}return e},o=async(n="OFFICES",a=null,s="")=>{if(n==="OFFICES"){const c=(await r()).filter(d=>d.office.toLowerCase().includes(s.toLowerCase()));t.innerHTML=`
                <div class="px-4 py-3 bg-blue-50/50 rounded-t-xl border-b border-gray-100 flex items-center justify-between">
                    <span class="block text-[10px] font-black text-royal-blue uppercase tracking-wider">OFFICE CODE</span>
                </div>
                <div class="p-2">
                    <div class="relative mb-2">
                        <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </div>
                        <input type="text" id="office-filter-search" placeholder="Search offices..." dir="ltr"
                            class="w-full pl-8 pr-3 py-1.5 text-[10px] font-bold bg-gray-50 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 rounded-lg outline-none"
                            value="${s}">
                    </div>
                    <ul class="max-h-60 overflow-y-auto py-1 text-xs font-bold text-gray-700 scrollbar-hide">
                        ${c.length>0?c.map(d=>{const f=parseInt(d.location_count||0)>0;return`
                                <li class="mb-0.5">
                                    <button class="office-filter-opt flex items-center justify-between w-full px-4 py-2 rounded-lg transition-colors group cursor-pointer ${f?"hover:bg-blue-50 hover:text-royal-blue":"text-gray-400 hover:bg-gray-100 hover:text-gray-600"}"
                                        data-id="${d.id}" data-name="${d.office}" data-has-locations="${f}">
                                        <span class="truncate">${d.office}</span>
                                        ${f?'<svg class="w-3 h-3 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':'<svg class="w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>'}
                                    </button>
                                </li>
                            `}).join(""):'<li class="px-4 py-3 text-center text-gray-400 italic">No offices found.</li>'}
                    </ul>
                </div>
            `;const l=t.querySelector("#office-filter-search");l.addEventListener("input",()=>o("OFFICES",null,l.value)),l.addEventListener("click",d=>d.stopPropagation()),setTimeout(()=>l.focus(),50),t.querySelectorAll(".office-filter-opt").forEach(d=>{d.addEventListener("click",f=>{f.stopPropagation(),d.dataset.hasLocations==="true"?o("LOCATIONS",{id:d.dataset.id,name:d.dataset.name}):(window.setOfficeFilter(d.dataset.name),t.classList.add("hidden"))})})}else{t.innerHTML=`
                <div class="px-4 py-3 bg-blue-50/50 rounded-t-xl border-b border-gray-100 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                         <div class="p-1 rounded-md bg-green-500/10 text-green-600">
                            <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <span class="block text-[10px] font-black text-royal-blue uppercase tracking-wider">OFFICE LOCATION</span>
                    </div>
                    <button id="back-to-offices-filter" class="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                    </button>
                </div>
                <div class="p-2">
                    <div class="relative mb-2">
                        <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </div>
                        <input type="text" id="loc-filter-search" placeholder="Search in ${a.name}..." 
                            class="w-full pl-8 pr-3 py-1.5 text-[10px] font-bold bg-gray-50 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 rounded-lg outline-none">
                    </div>
                    <ul id="loc-filter-list" class="max-h-60 overflow-y-auto py-1 text-xs font-bold text-gray-700 scrollbar-hide">
                        <li class="px-4 py-4 text-center text-gray-400 animate-pulse">Fetching...</li>
                    </ul>
                </div>
            `;const i=t.querySelector("#loc-filter-list"),c=t.querySelector("#loc-filter-search");let l=[];try{const f=await J(`api/beneficiaries.php?get_office_locations=1&office_id=${a.id}`);f.success&&f.data?.success&&Array.isArray(f.data.locations)&&(l=f.data.locations)}catch(f){console.error("Filter locations fetch failed:",f)}const d=(f="")=>{const h=l.filter(p=>p.location.toLowerCase().includes(f.toLowerCase()));i.innerHTML=h.length>0?h.map(p=>`
                    <li class="mb-0.5">
                        <button class="loc-filter-opt group/loc flex items-center w-full px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-royal-blue transition-colors cursor-pointer" data-location="${p.location}">
                            <div class="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/loc:bg-blue-500 mr-3 shrink-0"></div>
                            <span class="truncate">${p.location}</span>
                        </button>
                    </li>
                `).join(""):'<li class="px-4 py-3 text-center text-gray-400 italic">No locations found.</li>',i.querySelectorAll(".loc-filter-opt").forEach(p=>{p.addEventListener("click",()=>{window.setOfficeFilter(`${a.name} - ${p.dataset.location}`)})})};d(),setTimeout(()=>c.focus(),50),c.addEventListener("input",()=>d(c.value)),c.addEventListener("click",f=>f.stopPropagation()),t.querySelector("#back-to-offices-filter").addEventListener("click",f=>{f.stopPropagation(),o("OFFICES")})}};o(),de()}function de(){const t=document.getElementById("ldn-header-prefix"),e=document.getElementById("clear-office-filter-btn");if(!t)return;t.textContent=U==="ALL"?"LGU - ILIGAN":U;const r=S||U!=="ALL";e&&(e.classList.toggle("hidden",!r),e.classList.toggle("flex",r))}window.setOfficeFilter=t=>{U=t,localStorage.setItem("ldn_office_filter",t),S||(Ie(!0),Y(),ce(),le()),de(),v=1,O();const e=document.getElementById("office-filter-dropdown"),r=document.getElementById("sort-dropdown");e&&e.classList.add("hidden"),r&&r.classList.add("hidden")};window.clearOfficeFilter=async()=>{_=Se,L=Ce,U="ALL",localStorage.setItem("ldn_status_filter",_),localStorage.setItem("ldn_year_filter",L),localStorage.setItem("ldn_office_filter","ALL"),localStorage.setItem("ldn_sort_preference","name_asc"),Ie(!1),Y(),ce(),le(),de();const t=document.getElementById("table-search");t&&(t.value="");const e=document.getElementById("office-filter-dropdown"),r=document.getElementById("sort-dropdown"),o=document.getElementById("filter-dropdown");e&&e.classList.add("hidden"),r&&r.classList.add("hidden"),o&&o.classList.add("hidden"),v=1,R(v),await V(!0),O()};function Ar(){V(),Fr(),Dr(),Ir(),Lr();const t=document.getElementById("ldn-export-logs-btn");t&&t.addEventListener("click",()=>{Ct(E)}),window.addEventListener("dataSynced",()=>{V(!0)})}function Lr(){!Ke()||!M||(console.log("[Supabase Realtime] Subscribing to beneficiaries..."),M.channel("beneficiaries_changes").on("postgres_changes",{event:"*",schema:"public",table:"beneficiaries"},async t=>{if(console.log("[Supabase Realtime] Change detected:",t.eventType),await V(!0),t.eventType==="INSERT")z.fire({toast:!0,position:"top-end",icon:"success",title:"New Beneficiary Added",showConfirmButton:!1,timer:3e3,timerProgressBar:!0});else if(t.eventType==="UPDATE"){if(t.new.is_archived===!0&&t.old.is_archived===!1)return;z.fire({toast:!0,position:"top-end",icon:"info",title:"Record Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})}}).subscribe(t=>{t==="SUBSCRIBED"&&console.log("[Supabase Realtime] Listening for live changes! ⚡")}))}function Dr(){const t=document.getElementById("apply-filters-button");if(!t)return;Y(),ce(),le(),t.addEventListener("click",Cr);const e=document.getElementById("filter-status"),r=document.getElementById("filter-year");e&&e.addEventListener("change",ve),r&&r.addEventListener("change",ve)}function O(t=null){t||(t=it());const e=document.getElementById("beneficiary-table-body");if(!e)return;if(nt=t,t.length===0){e.innerHTML=`
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
        `;const l=document.getElementById("pagination-controls");l&&(l.innerHTML="");return}const r=t.length,o=Math.ceil(r/W),n=Math.min(Math.max(v,1),o||1);we&&n!==v&&v>1||(v=n,R(v));const s=(n-1)*W,i=s+W,c=t.slice(s,i);e.innerHTML=c.map(l=>`
        <tr class="bg-blue-50 border-b border-blue-100 hover:bg-blue-100 transition-colors group cursor-pointer"
            onclick='viewBeneficiary(${JSON.stringify(l)})'>
            <th scope="row" class="px-4 py-3 font-medium text-heading whitespace-nowrap font-mono text-xs text-center">
                ${l.id}
            </th>
            <td class="px-4 py-3 font-bold text-royal-blue text-center">
                ${l.name}
            </td>
            <td class="px-4 py-3 text-center">
                <div class="flex justify-center">
                    <span class="${Nr(l.office)} text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded whitespace-nowrap">
                        ${l.office||"N/A"}
                    </span>
                </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${l.startDateFormatted||l.startDate?"font-black text-royal-blue uppercase tracking-tight":"font-bold text-gray-300 italic"}">${He(l.startDateFormatted||l.startDate)}</span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${l.endDateFormatted||l.endDate?"font-black text-philippine-red uppercase tracking-tight":"font-bold text-gray-300 italic"}">${He(l.endDateFormatted||l.endDate)}</span>
            </td>
            <td class="px-4 py-3 text-center">
                <span class="${Or(l.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
                    ${l.remarks||"N/A"}
                </span>
            </td>
            <td class="px-4 py-3 flex gap-2">
                <button type="button"
                    class="font-medium text-royal-blue hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Edit Details" onclick='event.stopPropagation(); editBeneficiary(${JSON.stringify(l)})'>
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="font-medium text-philippine-red hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Archive" onclick="event.stopPropagation(); archiveRecord('${l.id}')">
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                </button>
            </td>
        </tr>
    `).join(""),Br(r,o,n),Et()}function Br(t,e,r=v){const o=document.getElementById("pagination-controls");if(!o)return;if(t<=W){o.innerHTML=`
            <span class="text-xs font-bold text-gray-500">Showing all ${t} results</span>
            <div></div>
        `;return}const n=(r-1)*W+1,a=Math.min(r*W,t);o.innerHTML=`
        <span class="text-xs font-bold text-gray-500 shrink-0">
            Showing <span class="text-royal-blue">${n}–${a}</span> of <span class="text-royal-blue">${t}</span>
        </span>
        <div class="flex items-center gap-1 flex-wrap justify-end">
            <!-- Previous -->
            <button onclick="changePage(${r-1})" ${r===1?"disabled":""}
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>

            ${_r(r,e)}

            <!-- Next -->
            <button onclick="changePage(${r+1})" ${r===e?"disabled":""}
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>

            <!-- Go To -->
            <div class="flex items-center gap-1 ml-1 shrink-0">
                <span class="text-[10px] sm:text-xs font-bold text-gray-400 hidden sm:inline">Go to</span>
                <input type="number" id="goto-page-input" min="1" max="${e}" placeholder="—"
                    class="w-14 h-8 text-center text-xs font-black rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-800 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all shadow-sm"
                    aria-label="Go to page"
                    onkeydown="if(event.key==='Enter'){const v=parseInt(this.value);if(v){window.changePage(Math.min(${e},Math.max(1,v)));this.value='';this.blur();}}"
                    >
                <button
                    onclick="const inp=document.getElementById('goto-page-input');const v=parseInt(inp.value);if(v){window.changePage(Math.min(${e},Math.max(1,v)));inp.value='';inp.blur();}"
                    class="h-8 px-3 text-xs font-black bg-royal-blue text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all cursor-pointer shrink-0">
                    Go
                </button>
            </div>
        </div>
    `}function _r(t,e){const o=Math.min(4,e);let n=Math.max(1,t-1),a=n+o-1;a>e&&(a=e,n=Math.max(1,a-o+1));let s="";for(let i=n;i<=a;i++)s+=`
            <button onclick="changePage(${i})"
                class="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-black transition-all cursor-pointer
                ${i===t?"bg-royal-blue text-white shadow-md shadow-royal-blue/20":"bg-white text-gray-600 hover:bg-royal-blue/10 hover:text-royal-blue border border-gray-100"}">
                ${i}
            </button>`;return s}window.changePage=t=>{v=t,R(v),O(nt)};function Nr(t){if(!t||t==="N/A")return"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const e=t.toUpperCase();if(e.includes("LGU"))return/ILIGAN/i.test(t)?"bg-yellow-400 text-white border border-yellow-500":"bg-yellow-100 text-yellow-700 border border-yellow-200 dark:!text-white";if(e.includes("DOLE"))return"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white";if(e.includes("DEPED")||e.includes("DEPED"))return"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white";if(e.includes("DICT"))return"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white";if(e.includes("DOH"))return"bg-red-100 text-red-700 border border-red-200 dark:!text-white";if(e.includes("DSWD"))return"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white";if(e.includes("DTI"))return"bg-green-100 text-green-700 border border-green-200 dark:!text-white";if(e.includes("DPWH"))return"bg-stone-100 text-stone-700 border border-stone-200 dark:!text-white";if(e.includes("DILG"))return"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white";if(e.includes("DOST"))return"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white";if(e.includes("DENR"))return"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white";if(e.includes("CHED"))return"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white";if(e.includes("TESDA"))return"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white";if(e.includes("DOJ"))return"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white";if(e.includes("DOT")||e.includes("TOURISM"))return"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white";if(e.includes("DA")&&!e.includes("DPWH")&&!e.includes("DILG"))return"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white";if(e.includes("PRC"))return"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white";if(e.includes("SSS"))return"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white";if(e.includes("GSIS"))return"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white";if(e.includes("PHIC")||e.includes("PHILHEALTH"))return"bg-blue-200 text-blue-800 border border-blue-300 dark:!text-white";if(e.includes("NBI"))return"bg-zinc-100 text-zinc-700 border border-zinc-200 dark:!text-white";const r=["bg-purple-100 text-purple-700 border border-purple-200","bg-rose-100 text-rose-700 border border-rose-200","bg-amber-100 text-amber-700 border border-amber-200","bg-teal-100 text-teal-700 border border-teal-200","bg-indigo-100 text-indigo-700 border border-indigo-200","bg-lime-100 text-lime-700 border border-lime-200","bg-sky-100 text-sky-700 border border-sky-200","bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200","bg-emerald-100 text-emerald-700 border border-emerald-200","bg-orange-100 text-orange-700 border border-orange-200","bg-pink-100 text-pink-700 border border-pink-200","bg-green-100 text-green-700 border border-green-200","bg-violet-100 text-violet-700 border border-violet-200","bg-cyan-100 text-cyan-700 border border-cyan-200","bg-red-100 text-red-700 border border-red-200"];let o=0;for(let n=0;n<t.length;n++)o=o*31+t.charCodeAt(n)>>>0;return r[o%r.length]+" dark:!text-white"}function Or(t){if(!t)return"bg-gray-100 text-gray-600 border-gray-200";const e=t.toUpperCase();return e==="ONGOING"?"bg-green-100 text-green-700 border-green-200":e==="EXPIRED"?"bg-red-400 text-white border-red-400":e==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":e==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 text-gray-600 border-gray-200"}function Ee(t,e=!0){if(!S){e&&(localStorage.setItem("ldn_sort_preference",t),v=1,R(v)),O(Sr(it(),t));const o=document.getElementById("sort-dropdown");o&&!o.classList.contains("hidden")&&o.classList.add("hidden");return}switch(e&&(localStorage.setItem("ldn_sort_preference",t),v=1,R(v)),t){case"name_asc":E.sort((o,n)=>{const a=o.name.localeCompare(n.name);return a!==0?a:new Date(o.createdAt)-new Date(n.createdAt)});break;case"name_desc":E.sort((o,n)=>{const a=n.name.localeCompare(o.name);return a!==0?a:new Date(o.createdAt)-new Date(n.createdAt)});break;case"office":E.sort((o,n)=>(o.office||"").localeCompare(n.office||""));break;case"remarks":E.sort((o,n)=>(o.remarks||"").localeCompare(n.remarks||""));break;case"education":E.sort((o,n)=>(o.education||"").localeCompare(n.education||""));break;case"work":E.sort((o,n)=>(o.designation||"").localeCompare(n.designation||""));break;case"address":E.sort((o,n)=>(o.address||"").localeCompare(n.address||""));break}O();const r=document.getElementById("sort-dropdown");r&&!r.classList.contains("hidden")&&r.classList.add("hidden")}async function $r(t){const e={...t};["name","address","education","designation","designatedBeneficiary","relationshipToAssured"].forEach(s=>{e[s]&&typeof e[s]=="string"&&(e[s]=e[s].toUpperCase().trim())});const o=s=>typeof s=="string"&&s.startsWith("temp_"),a=!!e.id&&!o(e.id)?"PUT":"POST";!e.id&&!e.gip_id&&(e._tempId=`temp_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,e.id=e._tempId);try{await rt(e),E=await se(),ke(E),O(),console.log(`[Offline-First] ✓ Saved "${e.name}" to local cache`)}catch(s){console.error("[Offline-First] Local save failed:",s)}a==="POST"&&Xt(`New user <strong>${e.name}</strong> added. pending "Required Documents" for review.`,"success");try{await or(a,"api/beneficiaries.php",e),re()}catch(s){console.error("[Offline-First] Failed to enqueue sync:",s)}return!0}async function Tr(t){if(!(await z.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',html:`
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
        `,reverseButtons:!0,customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-green-50 text-green-700 hover:bg-green-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-green-200 shadow-sm mx-2 cursor-pointer",cancelButton:"bg-red-50 text-red-700 hover:bg-red-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-red-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)return!1;try{const r=await St("api/beneficiaries.php",{id:t,action:"archive"});if(r.success&&r.data?.success)return z.fire({toast:!0,position:"top-end",icon:"success",title:"Record Archived",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),await V(),!0;throw new Error(data.error||"Failed to archive")}catch(r){return console.error("Error archiving beneficiary:",r),z.fire({icon:"error",title:"Archive Failed",text:r.message}),!1}}function Fr(){const t=document.getElementById("table-search"),e=document.getElementById("clear-search-btn");t&&(t.addEventListener("input",r=>{v=1,R(v),O(),e&&e.classList.toggle("hidden",t.value.length===0)}),e&&e.addEventListener("click",()=>{t.value="",v=1,R(v),O(),e.classList.add("hidden"),t.focus()}),window.addEventListener("keydown",r=>{r.key==="/"&&document.activeElement!==t&&(r.preventDefault(),t.focus())}))}window.sortData=Ee;window.archiveRecord=Tr;window.addBeneficiaryData=$r;window.applyFilters=ve;let Ae=[],I=["id","name","age","office","position","status"],g={office:"ALL",remarks:"ALL",gender:"ALL",ageGroup:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","position","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""};async function Mr(){Rr(),await jr()}function Rr(){const t=localStorage.getItem("ldn_export_config");if(t)try{const e=JSON.parse(t);g={...g,...e},I=g.columns}catch(e){console.error("Error loading saved export config",e)}}function Pr(){localStorage.setItem("ldn_export_config",JSON.stringify(g))}async function jr(){try{const t=await J("api/beneficiaries.php?all=true");if(!t.success)throw new Error(t.error||"Failed to fetch beneficiaries");const e=t.data||{};Ae=Array.isArray(e.beneficiaries)?e.beneficiaries:e.data?.success&&Array.isArray(e.data.beneficiaries)?e.data.beneficiaries:[],window.handleFilterUpdate(g)}catch(t){console.error("Error loading data for export",t);const e=document.getElementById("web-table-body");e&&(e.innerHTML=`<tr><td colspan="${I.length}" class="px-6 py-12 text-center text-red-500 font-bold uppercase text-[10px] tracking-widest">Failed to load data</td></tr>`),z.fire({toast:!0,position:"top-end",icon:"error",title:"Failed loading export data",showConfirmButton:!1,timer:2800})}}window.handleFilterUpdate=function(t){g={...g,...t},t.columns&&(I=t.columns,g.columns=t.columns),t.preparedBy!==void 0&&(g.preparedBy=t.preparedBy),t.approvedBy!==void 0&&(g.approvedBy=t.approvedBy),Pr();let e=[...Ae];g.search&&(e=e.filter(r=>r.name.toLowerCase().includes(g.search)||r.id.toLowerCase().includes(g.search))),g.office!=="ALL"&&(e=e.filter(r=>r.office.includes(g.office))),g.gender&&g.gender!=="ALL"&&(e=e.filter(r=>Ur(r.gender)===g.gender)),g.remarks&&g.remarks!=="ALL"&&(e=e.filter(r=>(r.remarks||"").toUpperCase()===g.remarks.toUpperCase())),g.ageGroup&&g.ageGroup!=="ALL"&&(e=e.filter(r=>Gr(r.age)===g.ageGroup)),g.section==="ACTIVE"?e=e.filter(r=>!r.isArchived):g.section==="ARCHIVED"&&(e=e.filter(r=>r.isArchived)),g.sort&&e.sort((r,o)=>{switch(g.sort){case"name":return(r.name||"").localeCompare(o.name||"");case"id":return(r.id||"").localeCompare(o.id||"");case"office":return(r.office||"").localeCompare(o.office||"");case"startdate":const n=new Date(r.startDate||0);return new Date(o.startDate||0)-n;default:return 0}}),Hr(e)};window.getExportFilters=()=>g;function Ur(t){const e=String(t||"").trim().toUpperCase();return e==="F"||e==="FEMALE"?"FEMALE":e==="M"||e==="MALE"?"MALE":"UNKNOWN"}function Gr(t){const e=parseInt(t,10);return Number.isNaN(e)?"UNKNOWN":e>=18&&e<=24?"18-24":e>=25&&e<=30?"25-30":e>=31&&e<=40?"31-40":e>=41?"41+":"UNKNOWN"}function Hr(t){zr(t),Wr(t);const e=document.getElementById("record-count");e&&(e.textContent=t.length);const r=document.getElementById("print-filter-summary");if(r){const o=[];g.office!=="ALL"&&o.push(`OFFICE: ${g.office}`),g.remarks!=="ALL"&&o.push(`REMARKS: ${g.remarks}`),g.gender!=="ALL"&&o.push(`GENDER: ${g.gender}`),g.ageGroup!=="ALL"&&o.push(`AGE: ${g.ageGroup}`),r.textContent=o.length?o.join(" | "):"FILTER: ALL RECORDS"}window.currentFilteredData=t}window.exportToExcel=function(){const t=window.currentFilteredData||Ae,e=I,r=`
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
                    ${e.map(s=>`<th class="header cell">${Le[s]||s.toUpperCase()}</th>`).join("")}
                </tr>
                ${(()=>{let s=null,i="";[...t].sort((l,d)=>l.isArchived-d.isArchived).forEach(l=>{l.isArchived!==s&&(s=l.isArchived,i+=`<tr><td colspan="${e.length}" class="cell divider">${s?"ARCHIVED RECORDS":"ACTIVE BENEFICIARIES"}</td></tr>`),i+=`<tr>${e.map(d=>{let f=l[d]||"-";return d==="position"&&(f=l.designation||"-"),d==="startdate"&&(f=l.startDateFormatted||l.startDate||"-"),d==="enddate"&&(f=l.endDateFormatted||l.endDate||"-"),d==="status"?(f=l.remarks||"N/A",`<td class="cell ${"status-"+f.toLowerCase()}">${f}</td>`):`<td class="cell">${f}</td>`}).join("")}</tr>`})})()}
                <tr><td colspan="${e.length}"></td></tr>
                <tr><td colspan="${e.length}"></td></tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Prepared by:</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Approved by:</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${g.preparedBy||""}</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${g.approvedBy||""}</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                </tr>
            </table>
        </body>
        </html>
    `,o=new Blob([r],{type:"application/vnd.ms-excel"}),n=window.URL.createObjectURL(o),a=document.createElement("a");a.href=n,a.download=`LDN_RECORDS_${new Date().toISOString().slice(0,10)}.xls`,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(n),document.body.removeChild(a)};const Le={id:"ID NO.",name:"NAME",age:"AGE",office:"OFFICE",position:"DESIGNATION",status:"STATUS",startdate:"START DATE",enddate:"END DATE"};function qr(t,e="px-4 py-2.5"){return`
        <tr class="text-[11px] text-white uppercase bg-royal-blue font-bold tracking-widest text-center">
            ${t.map(r=>{let o="";return r==="name"&&(o=' title="Last Name, First Name, Middle Initial"'),`<th scope="col" class="${e}"${o}>${Le[r]||r.toUpperCase()}</th>`}).join("")}
        </tr>
    `}function ct(t,e,r=!1){return e.map(o=>{let n=t[o]||"-";if(o==="position"&&(n=t.designation||"-"),o==="startdate"&&(n=t.startDateFormatted||t.startDate||"-"),o==="enddate"&&(n=t.endDateFormatted||t.endDate||"-"),o==="status"&&(n=t.remarks||"N/A"),o==="age"&&(n=t.age||"-"),r){let a="px-3 py-2 border border-gray-200 text-center";return o==="id"&&(a+=" font-mono font-bold"),o==="name"&&(a+=" font-bold text-black uppercase leading-tight text-left px-4"),o==="status"&&(a+=` text-center font-bold uppercase ${{ABSORBED:"text-golden-yellow",RESIGNED:"text-slate-500",EXPIRED:"text-philippine-red",ONGOING:"text-green-600"}[n]||"text-gray-500"}`),(o==="startdate"||o==="enddate")&&(a+=" text-center font-mono text-[9px]"),`<td class="${a}">${n}</td>`}else return o==="id"?`<th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap font-mono text-xs text-center">${n}</th>`:o==="name"?`<td class="px-4 py-3 font-bold text-royal-blue group-hover/row:translate-x-1 transition-transform uppercase">${n}</td>`:o==="age"?`<td class="px-4 py-3 text-center text-[11px] font-black text-emerald-700 uppercase tracking-tight">${n}</td>`:o==="office"?`<td class="px-4 py-3 text-center"><span class="bg-white text-blue-700 px-2 py-0.5 rounded text-[10px] border border-blue-100 font-bold shadow-sm">${n}</span></td>`:o==="status"?`<td class="px-4 py-3 text-center"><span class="${{ABSORBED:"bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20",RESIGNED:"bg-slate-100 text-slate-500 border-slate-200",EXPIRED:"bg-red-50 text-philippine-red border-red-100",ONGOING:"bg-green-50 text-green-600 border-green-100"}[n]||"bg-gray-100 text-gray-700 border-gray-200"} px-2 py-0.5 rounded text-xs border uppercase font-bold text-[10px] shadow-sm">${n}</span></td>`:o==="startdate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-royal-blue uppercase tracking-tight">${n}</td>`:o==="enddate"?`<td class="px-4 py-3 text-center text-[11px] font-black text-philippine-red uppercase tracking-tight">${n}</td>`:`<td class="px-4 py-3 text-xs font-semibold text-gray-500 text-center">${n}</td>`}).join("")}function zr(t){const e=document.querySelector(".overflow-x-auto table");if(!e)return;const r=e.querySelector("thead"),o=document.getElementById("web-table-body");if(r.innerHTML=qr(I),t.length===0){o.innerHTML=`<tr><td colspan="${I.length}" class="px-6 py-12 text-center text-gray-400 font-medium italic">No matching records found.</td></tr>`;return}const n=[...t].sort((l,d)=>l.isArchived!==d.isArchived?l.isArchived-d.isArchived:0);let a=null,s=null,i="";const c=g.section==="ALL";n.forEach(l=>{c&&l.isArchived!==a&&(a=l.isArchived,s=null,i+=`
                <tr class="${a?"bg-red-50/30":"bg-green-50/30"}">
                    <td colspan="${I.length}" class="px-6 py-3 border-y border-gray-100 text-center">
                        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${a?"bg-red-100 text-red-600 border border-red-200":"bg-green-100 text-green-600 border border-green-200"}">
                            ${a?"Archived Records":"Active Beneficiaries"}
                        </span>
                    </td>
                </tr>
            `),l.office!==s&&(s=l.office,i+=`
                <tr class="bg-gray-50/50">
                    <td colspan="${I.length}" class="px-8 py-2 border-b border-gray-100">
                        <div class="flex items-center gap-2 opacity-60">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest">${s||"UNASSIGNED OFFICE"}</span>
                        </div>
                    </td>
                </tr>
            `),i+=`
            <tr class="bg-white hover:bg-gray-50 transition-colors group/row border-b border-gray-50">
                ${ct(l,I)}
            </tr>
        `}),o.innerHTML=i}function Wr(t){const e=document.getElementById("print-area");if(!e)return;const o=e.querySelector("table").querySelector("thead"),n=document.getElementById("print-table-body");o.innerHTML=`
        <tr class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[10px] text-center">
            ${I.map(h=>{let p="";return h==="name"&&(p=' title="Last Name, First Name, Middle Initial"'),`<th class="px-3 py-2 border border-royal-blue"${p}>${Le[h]||h.toUpperCase()}</th>`}).join("")}
        </tr>
    `;const a=document.getElementById("print-prepared-by"),s=document.getElementById("print-approved-by");a&&(a.textContent=g.preparedBy),s&&(s.textContent=g.approvedBy);const i=[...t].sort((h,p)=>h.isArchived!==p.isArchived?h.isArchived-p.isArchived:0);let c=null,l=null,d="";const f=g.section==="ALL";i.forEach((h,p)=>{f&&h.isArchived!==c&&(c=h.isArchived,l=null,d+=`
                <tr class="print:bg-gray-200 bg-gray-200">
                    <td colspan="${I.length}" class="px-3 py-1 border border-gray-400 text-center">
                        <span class="text-[10px] font-black uppercase tracking-[0.2em]">${c?"SECTION: ARCHIVED RECORDS":"SECTION: ACTIVE BENEFICIARIES"}</span>
                    </td>
                </tr>
            `),h.office!==l&&(l=h.office,d+=`
                <tr class="bg-gray-50 print:bg-gray-50">
                    <td colspan="${I.length}" class="px-3 py-1.5 border border-gray-200 text-center">
                        <span class="text-[9px] font-black text-gray-800 uppercase tracking-widest text-center">Office: ${l||"N/A"}</span>
                    </td>
                </tr>
            `),d+=`
            <tr class="${p%2===0?"bg-white":"bg-gray-50/30"} border-b border-gray-200">
                ${ct(h,I,!0)}
            </tr>
        `}),n.innerHTML=d}It();At();window.initFlowbite=xt;window.Datepicker=wt;window.DateRangePicker=vt;document.addEventListener("DOMContentLoaded",()=>{console.log("DOLE System initialized. Mode: [SUPABASE]");const t=window.location.pathname;Lt(),Dt(),Bt(),K(),document.getElementById("beneficiary-table-body")&&Ar(),_t(),Jr(),Qr(),Ht(),pr(),br(),t.includes("/export/")&&!t.includes("log.php")&&Mr();const e=document.getElementById("beneficiary-table-body")!==null,r=localStorage.getItem("isLoggedIn")==="true";!e&&r&&setTimeout(()=>V(),2e3),Yr(),Vr()});function Yr(){document.querySelectorAll(".togglePassword").forEach(e=>{const r=e.closest(".relative").querySelector("input");e&&r&&e.addEventListener("click",()=>{const o=r.getAttribute("type")==="password"?"text":"password";r.setAttribute("type",o);const n=e.querySelector(".eye-open"),a=e.querySelector(".eye-closed");n&&a&&(n.classList.toggle("hidden"),a.classList.toggle("hidden"))})})}function Vr(){const t=new Image;t.crossOrigin="Anonymous",t.onload=function(){const e=document.createElement("canvas"),r=64;e.width=r,e.height=r;const o=e.getContext("2d");o.beginPath(),o.arc(r/2,r/2,r/2,0,2*Math.PI),o.closePath(),o.clip(),o.drawImage(t,0,0,r,r);let n=document.querySelector("link[rel~='icon']");n||(n=document.createElement("link"),n.rel="icon",document.getElementsByTagName("head")[0].appendChild(n)),n.type="image/png",n.href=e.toDataURL()},t.src=`${A()}frontend/images/logo/doleiligan.png`}function Jr(){const t=document.querySelectorAll(".auto-year"),e=new Date().getFullYear();t.forEach(r=>{r.textContent=e})}async function Qr(){try{let t="";try{const n=JSON.parse(localStorage.getItem("user"));n&&n.id&&(t=`?user_id=${n.id}`)}catch{}const e=async(n,a={},s=1,i=1200)=>{try{return await fetch(n,a)}catch(c){if(s<=0)throw c;return await new Promise(l=>setTimeout(l,i)),e(n,a,s-1,i)}},o=await(await e(`${A()}api/profile.php${t}`)).json();o.success&&Nt(o.profile)}catch(t){console.error("Error loading user profile:",t)}}
