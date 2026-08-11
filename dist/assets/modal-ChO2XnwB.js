const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-BS-fTmyB.js","./vendor-DpcThRKv.js"])))=>i.map(i=>d[i]);
import P from"./vendor-swal-DtO_vauN.js";import{a as Bt}from"./vendor-DpcThRKv.js";import{A as tt}from"./vendor-charts-C6WbJKf0.js";const Mt="true".toLowerCase()==="true";function Ae(){return Mt}function ye(){const e=window.location.pathname,t="/dole-system/",o=e.toLowerCase().indexOf(t.toLowerCase());if(o!==-1)return e.substring(0,o+t.length);const s=e.indexOf("/frontend/");if(s!==-1)return e.substring(0,s+1);const a=e.indexOf("/backend/");return a!==-1?e.substring(0,a+1):"/"}function nt(e="Incorrect Username or Password"){P.fire({html:`
            <div class="p-6">
                <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                    <svg class="h-10 w-10 text-philippine-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 class="text-xl font-black text-gray-900 mb-2">Authentication Failed</h3>
                <p class="text-sm text-gray-600 font-medium">${e}</p>
                <p class="text-xs text-gray-500 mt-3">Please check your credentials and try again.</p>
            </div>
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Nt(e=!1){return P.fire({html:`
            <div class="p-6">
                <div class="mx-auto flex flex-col items-center justify-center">
                    <div class="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4 border-[3px] border-green-200">
                        <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-black text-gray-900 mb-1">Welcome Back!</h3>
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-widest">Authentication successful</p>
                </div>
            </div>
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function $r(){const e=localStorage.getItem("hasVisitedBefore"),t=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),t&&(t.style.display="none")),window.addEventListener("load",()=>{const o=document.querySelector("body > *:not(.page-loader)");o&&o.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),t&&t.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const qe={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const t=a=>a.split("").map(r=>r.charCodeAt(0)),o=a=>("0"+Number(a).toString(16)).substr(-2),s=a=>t(this._key).reduce((r,d)=>r^d,a);return e.split("").map(t).map(s).map(o).join("")}catch{return null}},decrypt:function(e){try{const t=s=>s.split("").map(a=>a.charCodeAt(0)),o=s=>t(this._key).reduce((a,r)=>a^r,s);return e.match(/.{1,2}/g).map(s=>parseInt(s,16)).map(o).map(s=>String.fromCharCode(s)).join("")}catch{return null}}};function Cr(){document.querySelectorAll(".login-form-shared").forEach(t=>{const o=t.querySelector('input[name="username"]'),s=t.querySelector('input[name="password"]'),a=t.querySelector('input[name="rememberMe"]');if(o&&s&&a){const r=localStorage.getItem("secure_user"),d=localStorage.getItem("secure_pass");if(r&&d){const l=qe.decrypt(r),p=qe.decrypt(d);l&&p&&(o.value=l,s.value=p,a.checked=!0)}}t.addEventListener("submit",async r=>{r.preventDefault();try{const l=await(await fetch(`${ye()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o.value,password:s.value})})).json();if(l.success){a.checked?(localStorage.setItem("secure_user",qe.encrypt(o.value)),localStorage.setItem("secure_pass",qe.encrypt(s.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const p=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(l.user));const g=document.getElementById("drawer-login");if(g){g.classList.add("translate-y-full");const f=g.querySelector("[data-drawer-hide]");f&&f.click()}await Nt(p),Tt(p)}else{const p=document.getElementById("drawer-login");p?(p.classList.add("translate-y-full"),setTimeout(()=>{nt(),setTimeout(()=>{p.classList.remove("translate-y-full"),s.value="",s.focus()},600)},400)):(nt(),s.value="",s.focus())}}catch{P.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Tt(e=!1){const t=document.getElementById("left-panel"),o=document.getElementById("right-panel"),s=document.getElementById("left-panel-content"),a=document.getElementById("right-panel-content");s&&(s.style.opacity="0"),a&&(a.style.opacity="0");const r=document.createElement("div");r.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const d=e?"":"animate__delay-1s",l=e?"animation-duration: 0.8s;":"animation-duration: 2s;";r.innerHTML=`
        <img src="${ye()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${d}" style="${l}" alt="DOLE Logo">
    `,document.body.appendChild(r);const p=e?0:1e3,g=e?600:1500;setTimeout(()=>{t&&t.classList.add("animate-slide-left"),o&&o.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${ye()}frontend/dashboard/`},g)},p)}function Ar(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${ye()}`})}function Ir(){const e=document.getElementById("mobile-splash"),t=document.getElementById("show-login-btn"),o=document.getElementById("back-to-splash"),s=document.getElementById("mobile-bg-content"),a=document.getElementById("mobile-welcome-text"),r=document.getElementById("reopen-login-drawer"),d=document.getElementById("request-notifications-btn"),l=async()=>{"Notification"in window&&await Notification.requestPermission()==="granted"&&d&&d.classList.add("hidden")};Notification.permission==="default"&&d&&(d.classList.remove("hidden"),d.addEventListener("click",l));const p=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&l();const x=document.getElementById("drawer-login");x&&x.classList.remove("translate-y-full")},800))},g=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};t&&t.addEventListener("click",p),document.querySelectorAll(".forgot-password-link").forEach(x=>{x.addEventListener("click",k=>{k.target.closest("#mobile-splash")&&p()})}),o&&o.addEventListener("click",()=>{const x=document.getElementById("drawer-login");if(x){x.classList.add("translate-y-full");const k=x.querySelector("[data-drawer-hide]");k&&k.click()}g()});const h=document.getElementById("drawer-login"),L=document.getElementById("curved-welcome"),c=document.getElementById("peoples-bg");h&&new MutationObserver(k=>{k.forEach(w=>{w.attributeName==="class"&&(h.classList.contains("translate-y-full")?(s&&(s.style.transform="translateY(0)"),a&&(a.style.opacity="1",a.style.transform="translateY(0) scale(1)"),L&&(L.style.opacity="0",L.style.transform="scale(0.5)"),r&&e&&e.style.visibility==="hidden"&&(r.style.opacity="1",r.style.transform="scale(1)"),c&&(c.classList.add("opacity-0","scale-0"),c.classList.remove("opacity-40","scale-[1.6]"))):(s&&(s.style.transform="translateY(-35%)"),a&&(a.style.opacity="0",a.style.transform="translateY(20px) scale(0.9)"),L&&(L.style.opacity="1",L.style.transform="scale(1)"),r&&(r.style.opacity="0",r.style.transform="scale(0)"),c&&(c.classList.remove("opacity-0","scale-0"),c.classList.add("opacity-40","scale-[1.6]"))))})}).observe(h,{attributes:!0})}const Ne=()=>"false".toLowerCase()==="true";const De={debug(...e){Ne()},info(...e){Ne()},warn(...e){Ne()},error(...e){},table(e){Ne()},json(e,t){Ne()}},Fe=new Map;async function Pe(e,t={}){const s=`${ye()}${e}`;let a=null;try{const f=JSON.parse(localStorage.getItem("user"));f&&(a=f.user_id||f.id||null)}catch{}const r={headers:{"Content-Type":"application/json",...a?{"X-User-Id":a}:{},...t.headers},...t},l=(r.method||"GET").toUpperCase()==="GET"?2:1;let p=null;for(let f=1;f<=l;f++)try{if(De.debug("[API] Request",{url:s,method:r.method||"GET",hasUserId:!!a}),r.body)try{De.json("[API] Payload",JSON.parse(r.body))}catch{De.debug("[API] Payload (raw)",r.body)}const h=await fetch(s,r);if(!h.ok){let c=`HTTP ${h.status}: ${h.statusText}`;try{const x=await h.json();x&&x.error?c=x.error:x&&x.message&&(c=x.message)}catch{}throw new Error(c)}const L=await h.json();return Fe.has(s)&&(Fe.delete(s),De.info?.("[API] Recovered",{url:s})),De.debug("[API] Response",{url:s,ok:!0}),{success:!0,data:L}}catch(h){if(p=h,h instanceof TypeError&&/fetch/i.test(h.message||"")&&f<l){await new Promise(x=>setTimeout(x,1200));continue}}return p instanceof TypeError&&/fetch/i.test(p.message||"")?Fe.get(s)||(Fe.set(s,!0),De.error("API Request Network Error (suppressed for repeats):",{url:s,message:p.message})):De.error("API Request Error:",p),{success:!1,error:p?.message||"Unknown request error"}}async function he(e){return Pe(e,{method:"GET"})}async function wt(e,t){return Pe(e,{method:"POST",body:JSON.stringify(t)})}async function Ot(e,t){return Pe(e,{method:"PUT",body:JSON.stringify(t)})}async function Br(e,t){const o=new URLSearchParams(t).toString();return Pe(`${e}?${o}`,{method:"PATCH"})}function Mr(){typeof window.initFlowbite=="function"&&window.initFlowbite()}function Nr(e){return JSON.stringify(e)}const _t="dole-gip-db",Rt=2,ce={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let He=null;function Be(){return He?Promise.resolve(He):new Promise((e,t)=>{const o=indexedDB.open(_t,Rt);o.onupgradeneeded=s=>{const a=s.target.result;if(!a.objectStoreNames.contains(ce.BENEFICIARIES)){const r=a.createObjectStore(ce.BENEFICIARIES,{keyPath:"id"});r.createIndex("name","name",{unique:!1}),r.createIndex("office","office",{unique:!1}),r.createIndex("remarks","remarks",{unique:!1})}a.objectStoreNames.contains(ce.SYNC_QUEUE)||a.createObjectStore(ce.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),a.objectStoreNames.contains(ce.METADATA)||a.createObjectStore(ce.METADATA,{keyPath:"key"}),a.objectStoreNames.contains(ce.APP_CACHE)||a.createObjectStore(ce.APP_CACHE,{keyPath:"key"})},o.onsuccess=s=>{He=s.target.result,e(He)},o.onerror=s=>{t(s.target.error)}})}async function _e(e){const t=await Be();return new Promise((o,s)=>{const a=t.transaction(ce.BENEFICIARIES,"readwrite"),r=a.objectStore(ce.BENEFICIARIES);r.clear(),e.forEach(d=>{const l={...d,id:d.id||d.gip_id};r.put(l)}),a.oncomplete=()=>{Pt("beneficiaries_last_sync",Date.now()),o(e.length)},a.onerror=()=>s(a.error)})}async function We(){const e=await Be();return new Promise((t,o)=>{const r=e.transaction(ce.BENEFICIARIES,"readonly").objectStore(ce.BENEFICIARIES).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>o(r.error)})}async function jt(){const e=await kt("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function yt(){const e=await Be();return new Promise((t,o)=>{const d=e.transaction(ce.SYNC_QUEUE,"readonly").objectStore(ce.SYNC_QUEUE).index("status").getAll("pending");d.onsuccess=()=>t(d.result||[]),d.onerror=()=>o(d.error)})}async function Pt(e,t){const o=await Be();return new Promise((s,a)=>{const l=o.transaction(ce.METADATA,"readwrite").objectStore(ce.METADATA).put({key:e,value:t});l.onsuccess=()=>s(),l.onerror=()=>a(l.error)})}async function kt(e){const t=await Be();return new Promise((o,s)=>{const d=t.transaction(ce.METADATA,"readonly").objectStore(ce.METADATA).get(e);d.onsuccess=()=>o(d.result?.value??null),d.onerror=()=>s(d.error)})}function qt(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function Ft(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch{return null}}async function Ht(e,t){const o=await Be();return new Promise((s,a)=>{const d=o.transaction(ce.APP_CACHE,"readwrite").objectStore(ce.APP_CACHE),l={key:e,data:qt(t),updated_at:Date.now()},p=d.put(l);p.onsuccess=()=>{s()},p.onerror=()=>a(p.error)})}async function Ut(e){const t=await Be();return new Promise((o,s)=>{const d=t.transaction(ce.APP_CACHE,"readonly").objectStore(ce.APP_CACHE).get(e);d.onsuccess=()=>{d.result&&d.result.data?o(Ft(d.result.data)):o(null)},d.onerror=()=>s(d.error)})}async function Gt(){const[e,t]=await Promise.all([We(),yt()]),o=await kt("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:o?new Date(o).toLocaleString():"Never"}}window.__doleDB={getStats:Gt,getLocalBeneficiaries:We,getPendingSyncItems:yt,setSecureCache:Ht,getSecureCache:Ut};const Ie=["Local Employment Unit (LEU)","Labor Standards Unit (LSU)","Internal Management Services Unit (IMSU)","Wellfare Workers Unit (WWU)","Labor Relation Unit (LRU)"],ge=()=>document.documentElement.classList.contains("dark"),rt=()=>ge()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},we={royalBlue:()=>ge()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(ge(),"#94a3b8")},Te=()=>ge()?"#475569":"#cbd5e1";let Oe=null;function Ze(e){const o=`; ${document.cookie}`.match(new RegExp(`;\\s*${e}=([^;]+)`));return o?decodeURIComponent(o[1]):null}function Ve(e,t,o){let s=new Date;s.setTime(s.getTime()+o*24*60*60*1e3),document.cookie=`${e}=${encodeURIComponent(t)};expires=${s.toUTCString()};path=/`}let ne=Ze("user_workforce_filter")||"ALL",St=Ze("user_workforce_label")||"Overall Stats",je=Ze("user_gender_filter")||"ALL",Et=Ze("user_gender_label")||"All Years";function Se(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const s=new Date(`${t}T00:00:00`);return isNaN(s.getTime())?null:s}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const s=t.replace(" ","T"),a=new Date(s);return isNaN(a.getTime())?null:a}const o=new Date(t);return isNaN(o.getTime())?null:o}function Lt(e){const t=Number.parseInt(e?.age,10);if(Number.isInteger(t)&&t>=0)return t;const o=Se(e?.birthday);if(!o)return null;const s=new Date;let a=s.getFullYear()-o.getFullYear();const r=s.getMonth()-o.getMonth();return(r<0||r===0&&s.getDate()<o.getDate())&&a--,a>=0?a:null}function zt(e){const t=String(e||"").trim(),o=t.match(/\(([A-Z]{2,8})\)\s*$/i)?.[1];return o?o.toUpperCase():t.length>18?`${t.slice(0,16)}...`:t}function Vt(e){const t=String(e||"").trim().toUpperCase().split(" ").filter(Boolean).join(" ");if(!t||["N/A","NA","NONE","UNASSIGNED"].includes(t))return null;const o=Ie.find(r=>r.toUpperCase()===t);if(o)return o;const s=Ie.find(r=>{const d=r.lastIndexOf("("),l=r.lastIndexOf(")"),p=d>=0&&l>d?r.slice(d+1,l).toUpperCase():"";return p&&(t===p||t.endsWith("("+p+")"))});return s||{"WELFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)","WELLFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)"}[t]||null}function Yt(e,t){const o=/^\d{4}$/.test(String(t||""))?Number(t):null,s=Array.from({length:12},()=>({total:0,ages:new Map,ageGroups:{"18-24":0,"25-30":0,"31-40":0,"41+":0}}));return e.forEach(a=>{const r=Se(a.createdAt),d=Lt(a);if(!r||!Number.isInteger(d)||d<18||o&&r.getFullYear()!==o)return;const l=s[r.getMonth()];l.total++,l.ages.set(d,(l.ages.get(d)||0)+1),d<=24?l.ageGroups["18-24"]++:d<=30?l.ageGroups["25-30"]++:d<=40?l.ageGroups["31-40"]++:l.ageGroups["41+"]++}),s.map((a,r)=>({month:new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2024,r,1)).toUpperCase(),totalAdded:a.total,ageGroups:a.ageGroups,exactAges:[...a.ages.entries()].sort((d,l)=>d[0]-l[0])}))}function it(e){return e.reduce((t,o)=>{const s=Se(o.createdAt);return s?Math.max(t,s.getFullYear()):t},0)}const lt={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function Je(e=!1){if(localStorage.getItem("isLoggedIn")!=="true"||!document.getElementById("workforce-chart"))return;let t=[];if(e&&(Oe=null),Oe)t=Oe;else{const[i,u]=await Promise.all([We(),jt()]);if(i.length>0&&u<6e4)t=i,Oe=t;else try{const b=await he("api/beneficiaries.php?all=true");if(b.success&&b.data?.success&&b.data?.beneficiaries)t=b.data.beneficiaries,Oe=t,_e(t).catch(()=>{});else return}catch{return}}if(t.length===0)return;rr();const o=rt();document.querySelectorAll('[id$="-chart"]').forEach(n=>n.innerHTML="");const s=[...new Set(t.map(n=>{const i=n.startDate||n.createdAt,u=Se(i);return u?u.getFullYear().toString():null}).filter(n=>n))].sort((n,i)=>i-n);Kt(s,t),Qt(s,t);const a=new Date;let r=t;ne!=="ALL"&&(r=t.filter(n=>{if(ne.includes("D")){const i=Se(n.createdAt);if(!i)return!1;const u=parseInt(ne),b=new Date;return b.setDate(a.getDate()-u),b.setHours(0,0,0,0),i>=b}else if(s.includes(ne)){const i=Se(n.startDate||n.createdAt);return i?i.getFullYear().toString()===ne:!1}return!0}));const d=et(t),l=et(r);Xt(d,l);let p=[];if(ne==="ALL"){const i=new Date().getFullYear();for(let u=2020;u<=i;u++)p.push(u.toString())}else if(s.includes(ne))p=["Q1","Q2","Q3","Q4"];else{const n=parseInt(ne)||7;p=Array.from({length:n},(i,u)=>{const b=new Date;return b.setDate(a.getDate()-(n-1-u)),new Date(b.getTime()-b.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const g={};p.forEach(n=>g[n]=0),r.forEach(n=>{const i=n.startDate||n.createdAt;if(i){const u=Se(i);if(!u)return;const b=u.getFullYear().toString(),S=new Date(u.getTime()-u.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(ne==="ALL")g.hasOwnProperty(b)&&g[b]++;else if(ne.includes("D"))g.hasOwnProperty(S)&&g[S]++;else if(b===ne){const E="Q"+(Math.floor(u.getMonth()/3)+1);g.hasOwnProperty(E)&&g[E]++}}});const f=Object.values(g),h=r.length,L=f[f.length-1]||0,c=f[f.length-2]||0;let x;if(ne==="ALL"){const n=h/p.length;x=L>=n}else x=L>=c;let k=x?we.successGreen:we.philippineRed,w=x?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",v=x?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";ne==="ALL"?(k=we.successGreen,w="bg-green-500 shadow-green-500/30",v="text-green-600 dark:text-green-400"):ne==="7D"?(k="#fb923c",w="bg-orange-500 shadow-orange-500/30",v="text-orange-500 dark:text-orange-400"):ne==="30D"?(k="#eab308",w="bg-yellow-500 shadow-yellow-500/30",v="text-yellow-600 dark:text-yellow-400"):ne==="90D"?(k="#2563eb",w="bg-blue-600 shadow-blue-600/30",v="text-blue-600 dark:text-blue-400"):s.includes(ne)&&(k="#f87171",w="bg-red-400 shadow-red-400/30",v="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(n=>{n.textContent=h,n.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${v}`});const $=c>0?Math.round((L-c)/c*100):L>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(n=>n.textContent=($>=0?"+":"")+(ne==="ALL"?"Growth":$+"%"));const F=document.getElementById("added-metric-badge");F&&(F.className=`flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${w}`);const J=document.getElementById("added-metric-icon");J&&(J.style.transform=x?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(n=>{const i=document.getElementById(n);i&&(i.innerHTML=`${St} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const B={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:ge()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:k,opacity:.6},{offset:100,color:k,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[k]},series:[{name:"New Beneficiaries",data:f}],xaxis:{categories:p,labels:{show:!0,style:{colors:o.muted,fontSize:"0.625rem",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:o.muted,fontSize:"0.625rem",fontWeight:600}}},grid:{show:!0,borderColor:o.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[k],markers:{size:p.length>20?0:4,colors:[k],strokeColors:o.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:ge()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};$e("workforce-chart",B);const se=je==="ALL"?t:t.filter(n=>{const i=Se(n.startDate||n.createdAt);return i&&i.getFullYear().toString()===je}),q=et(se),ke={series:[q.genders.Female||0,q.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:o.cardBg},colors:[we.philippineRed,we.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"0.75rem",fontWeight:600,color:o.muted},value:{show:!0,fontSize:"1.5rem",fontWeight:900,color:o.text,formatter:n=>n},total:{show:!0,label:"TOTAL",fontSize:"0.625rem",fontWeight:800,color:o.muted,formatter:n=>n.globals.seriesTotals.reduce((i,u)=>i+u,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[o.cardBg],width:4},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"1.125rem"}}}}}}}]};$e("gender-chart",ke);const ue=[{key:"College Grad",label:"College Graduate",count:l.education["College Grad"]||0,color:we.royalBlue()},{key:"College Lvl",label:"College Level",count:l.education["College Lvl"]||0,color:we.goldenYellow},{key:"HS Grad",label:"High School",count:l.education["HS Grad"]||0,color:we.philippineRed},{key:"Senior High",label:"Senior High",count:l.education["Senior High"]||0,color:we.successGreen}],re=ue.reduce((n,i)=>n+i.count,0),K=[...ue].sort((n,i)=>i.count-n.count||n.label.localeCompare(i.label)),be=K[0];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([n,i])=>{document.querySelectorAll(i).forEach(u=>{u.textContent=l.education[n]||0})});const ve=document.getElementById("education-profile-total"),xe=document.getElementById("education-profile-leading");if(ve&&(ve.textContent=re),xe){const n=re>0?Math.round(be.count/re*100):0;xe.textContent=re>0?`${be.label} · ${n}%`:"No data",xe.title=xe.textContent}const Le={series:[{name:"Beneficiaries",data:K.map(n=>({x:n.label,y:n.count,fillColor:n.color}))}],chart:{height:285,type:"bar",toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},plotOptions:{bar:{horizontal:!0,distributed:!0,barHeight:"48%",dataLabels:{position:"top"},borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,formatter:n=>Math.round(n),offsetX:12,offsetY:4,textAnchor:"start",style:{fontSize:"0.625rem",fontWeight:900,colors:[o.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.9,borderWidth:0}},xaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{colors:o.muted,fontSize:"0.5625rem",fontWeight:700}},axisBorder:{show:!1},axisTicks:{show:!1},title:{text:"TOTAL BENEFICIARIES",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}}},yaxis:{labels:{minWidth:118,maxWidth:180,trim:!1,style:{colors:o.text,fontSize:"0.6875rem",fontWeight:800}}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:10,right:58,bottom:-4,left:8}},legend:{show:!1},tooltip:{theme:ge()?"dark":"light",y:{formatter:n=>{const i=re>0?Math.round(n/re*100):0;return`${n} beneficiaries (${i}% of recorded)`}}},noData:{text:"NO EDUCATION DATA",style:{color:o.muted,fontSize:"11px"}},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:285},yaxis:{labels:{minWidth:96,maxWidth:132,trim:!1,style:{fontSize:"0.625rem"}}},dataLabels:{style:{fontSize:"0.5625rem"}}}}]};$e("education-chart",Le),document.querySelectorAll(".count-absorbed").forEach(n=>n.textContent=l.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(n=>n.textContent=l.status.ONGOING||0);const y={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:l.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:l.status.ONGOING||0},{x:"Expired",y:l.status.EXPIRED||0},{x:"Resigned",y:l.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"0.75rem",fontWeight:"900",colors:[o.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:o.muted,fontWeight:700}}},yaxis:{show:!0,labels:{show:!1}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:20,right:8,bottom:0,left:8}},tooltip:{theme:ge()?"dark":"light",y:{formatter:n=>n+" Beneficiaries"}},theme:{mode:ge()?"dark":"light"}};$e("status-chart",y);const A=new Map(Object.entries(d.designations).map(([n,i])=>[n.trim().toUpperCase(),i])),D=new Map(Ie.map((n,i)=>[n,i])),G=Ie.map(n=>[n,A.get(n.toUpperCase())||0]).sort((n,i)=>i[1]-n[1]||D.get(n[0])-D.get(i[0])),Y=G.map(([n])=>n),H={series:[{name:"Total GIP",data:G.map(([,n])=>n)}],chart:{type:"bar",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},colors:[we.royalBlue()],plotOptions:{bar:{horizontal:!1,columnWidth:"34%",borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,offsetY:-14,formatter:n=>Math.round(n),style:{fontSize:"0.625rem",fontWeight:900,colors:[o.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.86,borderWidth:0}},xaxis:{categories:Y,axisBorder:{show:!1},axisTicks:{show:!1},labels:{rotate:0,trim:!1,hideOverlappingLabels:!1,formatter:n=>zt(n),style:{fontWeight:800,colors:o.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:o.muted,fontSize:"0.5625rem"}},title:{text:"TOTAL COUNT",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:2,right:4,bottom:-4}},legend:{show:!1},tooltip:{theme:ge()?"dark":"light",x:{formatter:(n,i)=>Y[i.dataPointIndex]||"Assigned Unit"},y:{formatter:n=>`${n} Beneficiaries`}},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:210},plotOptions:{bar:{columnWidth:"46%"}},dataLabels:{style:{fontSize:"0.5rem"}},xaxis:{labels:{style:{fontSize:"0.5rem"}}}}}]};$e("assigned-units-chart",H),Wt(G);const X=(/^\d{4}$/.test(ne)?Number(ne):0)||it(r)||it(t)||new Date().getFullYear(),z=Yt(r,X),W=document.getElementById("age-chart-year");W&&(W.textContent=X);const te=[{key:"18-24",label:"AGE 18–24"},{key:"25-30",label:"AGE 25–30"},{key:"31-40",label:"AGE 31–40"},{key:"41+",label:"AGE 41+"}],de={series:te.map(n=>({name:n.label,data:z.map(i=>i.ageGroups[n.key])})),chart:{type:"bar",stacked:!0,height:330,toolbar:{show:!1},zoom:{enabled:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},colors:["#0038A8","#2563EB","#60A5FA","#93C5FD"],plotOptions:{bar:{horizontal:!1,columnWidth:"54%",borderRadius:2,borderRadiusApplication:"end",dataLabels:{total:{enabled:!0,offsetY:-8,style:{fontSize:"0.625rem",fontWeight:900,color:o.text}}}}},dataLabels:{enabled:!0,formatter:n=>n>0?Math.round(n):"",style:{fontSize:"0.5625rem",fontWeight:900,colors:["#ffffff","#ffffff","#0f172a","#0f172a"]},dropShadow:{enabled:!1}},xaxis:{categories:z.map(n=>n.month),axisBorder:{show:!0,color:o.grid},axisTicks:{show:!1},title:{text:"MONTH ADDED",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}},labels:{rotate:-40,trim:!1,hideOverlappingLabels:!1,style:{fontWeight:800,colors:o.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:o.muted,fontSize:"0.625rem"}},title:{text:"TOTAL BENEFICIARIES",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:8,right:12,bottom:4}},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"10px",fontWeight:800,labels:{colors:o.muted},markers:{size:5,shape:"square"},itemMargin:{horizontal:8,vertical:3}},tooltip:{shared:!0,intersect:!1,theme:ge()?"dark":"light",custom:({dataPointIndex:n})=>{const i=z[n],u=te.map(S=>`${S.label}: <strong>${i?.ageGroups[S.key]||0}</strong>`).join("<br>"),b=i?.exactAges?.length?i.exactAges.map(([S,E])=>`Age ${S}: ${E}`).join(" · "):"No recorded ages";return`<div class="px-3 py-2 text-xs leading-5"><strong>${i?.month||""} ${X}</strong><br>Total: <strong>${i?.totalAdded||0}</strong><br>${u}<div class="mt-1 border-t border-slate-200 pt-1 text-[10px] dark:border-slate-600">${b}</div></div>`}},noData:{text:"NO AGE DATA",align:"center",verticalAlign:"middle",style:{color:o.muted,fontSize:"11px"}},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:360},plotOptions:{bar:{columnWidth:"66%"}},dataLabels:{enabled:!1},xaxis:{labels:{rotate:-55,style:{fontSize:"0.5rem"}}},legend:{fontSize:"9px",itemMargin:{horizontal:5,vertical:2}}}}]};$e("age-chart",de);const me=Zt(t);Jt(me);const m={series:[{name:"Actual Beneficiaries",data:Object.values(me.municipalityData).map(n=>n.actual)},{name:"Target Slots",data:Object.values(me.municipalityData).map(n=>n.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:o.cardBg},theme:{mode:ge()?"dark":"light"},colors:[we.royalBlue(),ge()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(me.municipalityData),labels:{style:{fontWeight:600,colors:o.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:o.muted}}},legend:{show:!1},fill:{opacity:1},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}}};$e("performance-gap-chart",m)}function Wt(e){const t=document.getElementById("assigned-units-summary");t&&(t.innerHTML=e.map(([o,s],a)=>`
        <div class="flex min-w-0 items-center justify-between gap-3 border border-slate-100 bg-slate-50/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50">
            <div class="flex min-w-0 items-center gap-2">
                <span class="inline-flex h-5 min-w-5 shrink-0 items-center justify-center bg-royal-blue text-[0.5625rem] font-black text-white">${a+1}</span>
                <span class="break-words text-[0.625rem] font-black uppercase leading-relaxed tracking-tight text-slate-600 dark:text-slate-300" title="${o}">${o}</span>
            </div>
            <span class="inline-flex min-w-7 shrink-0 items-center justify-center bg-white px-2 py-1 text-xs font-black tabular-nums text-royal-blue shadow-sm dark:bg-slate-800 dark:text-blue-400">${s}</span>
        </div>
    `).join(""))}function $e(e,t){const o=document.getElementById(e);if(!o)return;o.innerHTML="",new tt(o,t).render()}function et(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},exactAges:{},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},o=new Date;return o.setHours(0,0,0,0),e.forEach(s=>{const a=s.office||"Unassigned";t.offices[a]=(t.offices[a]||0)+1;const r=(s.gender||"Unknown").trim(),d=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[d]++;const l=String(s.education||"").trim().toUpperCase().replace(/\s+/g," "),p=l.includes("COLLEGE")&&l.includes("GRADUATE")||l.includes("BACHELOR")||l.includes("DEGREE")||/(^|\s)(BS|AB)(\s|$)/.test(l);l.includes("SENIOR HIGH")?t.education["Senior High"]++:p?t.education["College Grad"]++:l.includes("COLLEGE")?t.education["College Lvl"]++:(l.includes("HIGH SCHOOL")||/(^|\s)HS(\s|$)/.test(l))&&t.education["HS Grad"]++;const g=Vt(s.designation);g&&(t.designations[g]=(t.designations[g]||0)+1);const f=(s.remarks||s.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),h=!!s.absorbDate;if(f.includes("ABSORBED")||h)t.status.ABSORBED++;else if(f.includes("RESIGNED"))t.status.RESIGNED++;else if(f==="ONGOING"||f.includes("ONGOING")||f.includes("ACTIVE")||s.status_id==1)t.status.ONGOING++;else if(f.includes("EXPIRED"))t.status.EXPIRED++;else{let c=!1;if(s.endDate){const x=Se(s.endDate);x&&x<o&&(c=!0)}c?t.status.EXPIRED++:t.status.ONGOING++}const L=Lt(s);Number.isInteger(L)&&(t.totalAge+=L,t.ageCount++,t.exactAges[L]=(t.exactAges[L]||0)+1,L>=18&&L<=24?t.ages["18-24"]++:L>=25&&L<=30?t.ages["25-30"]++:L>=31&&L<=40?t.ages["31-40"]++:L>=41&&t.ages["41+"]++)}),t}function Zt(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(lt).forEach(([o,s])=>{t.municipalityData[o]={actual:0,target:s},t.totalTarget+=s}),e.forEach(o=>{const s=(o.office||"").toUpperCase();let a="OTHER";for(const d in lt)if(s.includes(d)){a=d;break}if(t.municipalityData[a]&&(t.municipalityData[a].actual++,t.totalActual++),(o.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,o.createdAt&&o.startDate){const d=new Date(o.createdAt),l=new Date(o.startDate),p=Math.ceil((l-d)/(1e3*60*60*24));p>=0&&p<180&&(t.velocity.totalDays+=p,t.velocity.count++)}}),t}function Jt(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(r=>{r.textContent=t+"%";const d=r.parentElement?.nextElementSibling?.firstElementChild;d&&(d.style.width=t+"%")});const o=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(r=>r.textContent=o);const s=e.retention.count+e.retention.resign,a=s>0?(e.retention.count/s*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(r=>r.textContent=a+"%")}function Xt(e,t){const o=Object.values(e.offices).reduce((g,f)=>g+f,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(g=>g.textContent=o);const s=e.genders.Female||0,a=e.genders.Male||0;document.querySelectorAll(".metric-female-ratio").forEach(g=>g.textContent=s.toLocaleString()),document.querySelectorAll(".metric-male-ratio").forEach(g=>g.textContent=a.toLocaleString());const r=g=>{const[f,h]=Object.entries(g.exactAges||{}).sort((c,x)=>x[1]-c[1]||Number(c[0])-Number(x[0]))[0]||[null,0],L=g.ageCount>0?h/g.ageCount*100:0;return{age:f,count:h,percentage:L}},d=g=>`${Number.isInteger(g)?g.toFixed(0):g.toFixed(1)}%`,l=r(e);document.querySelectorAll(".metric-top-age-label").forEach(g=>{g.textContent=l.age===null?"N/A":`${l.age} YRS`}),document.querySelectorAll(".metric-top-age-share").forEach(g=>{g.textContent=`${d(l.percentage)} of recorded ages`});const p=r(t);document.querySelectorAll(".metric-top-age").forEach(g=>{g.textContent=p.age===null?"N/A":p.age}),document.querySelectorAll(".metric-filtered-top-age-share").forEach(g=>{g.textContent=`${d(p.percentage)} of filtered ages`})}function Kt(e,t){const o=document.querySelector("#lastDaysdropdown ul");if(!o)return;const s=t.length,a=new Date,r=p=>{const g=new Date;return g.setDate(a.getDate()-p),g.setHours(0,0,0,0),t.filter(f=>{const h=Se(f.createdAt);return h&&h>=g}).length},d=p=>t.filter(g=>{const f=Se(g.startDate||g.createdAt);return f&&f.getFullYear().toString()===p}).length;let l=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ne==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${s}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ne==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ne==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ne==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(p=>{const g=d(p);l+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${p}', 'Year ${p}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ne===p?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${p}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${g}</span>
            </a>
        </li>`}),o.innerHTML=l}function Qt(e,t){const o=document.getElementById("gender-filter-options"),s=document.getElementById("gender-filter-button");if(!o||!s)return;const a=t.length,r=l=>t.filter(p=>{const g=Se(p.startDate||p.createdAt);return g&&g.getFullYear().toString()===l}).length;let d=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${je==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${a}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(l=>{const p=r(l);d+=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${l}', 'Year ${l}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${je===l?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${l}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${p}</span>
            </a>
        </li>
        `}),o.innerHTML=d,s.innerHTML=`${Et} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function er(e,t){ne=e,St=t,Ve("user_workforce_filter",e,30),Ve("user_workforce_label",t,30),["lastDaysdropdown"].forEach(s=>{const a=document.getElementById(s);if(a&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown",s);r&&r.hide()}else a&&a.classList.add("hidden")}),Je()}function tr(e,t){je=e,Et=t,Ve("user_gender_filter",e,30),Ve("user_gender_label",t,30);const o=document.getElementById("gender-filter-dropdown");if(o&&window.FlowbiteInstances){const s=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");s&&s.hide()}else o&&o.classList.add("hidden");Je()}function rr(){const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e),o=t.full_name||t.username||"System User",s=t.email||(t.username?`${t.username}@dole.gov.ph`:"user@dole.gov.ph"),a=t.profile_picture_path,r=o.trim().split(" ").map(d=>d[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(d=>d.textContent=o),document.querySelectorAll(".sidebar-user-email").forEach(d=>d.textContent=s),document.querySelectorAll(".sidebar-user-avatar").forEach(d=>{const l=d.querySelector(".sidebar-avatar-initials"),p=d.querySelector(".sidebar-avatar-img");if(a&&p){const g=ye(),f=a.startsWith("http")?a:g+a.replace(/^\//,"");p.src=f,p.classList.remove("hidden"),l&&l.classList.add("hidden")}else l&&(l.textContent=r,l.classList.remove("hidden"),p&&p.classList.add("hidden"))})}catch{}}window.updateWorkforceFilter=er;window.updateGenderFilter=tr;document.addEventListener("themeChanged",()=>{setTimeout(()=>Je(),50)});window.addEventListener("dataSynced",()=>{Je(!0)});let Ce=null;function ar(e,t){const o=document.getElementById(t);if(!o)return;if(Ce&&(Ce.destroy(),Ce=null),e.length===0){const g=rt(),f={series:[1],chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!1}},labels:["No Data"],colors:[g.grid],plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"24px",fontWeight:900,color:g.muted,formatter:()=>"0"},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:g.muted,formatter:()=>"0"}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ge()?["#1e293b"]:["#ffffff"],width:2},tooltip:{enabled:!1},legend:{show:!1}};Ce=new tt(o,f),Ce.render();return}const s={ongoing:0,expired:0,absorbed:0,resigned:0,other:0};e.forEach(g=>{const f=(g.remarks||"").toUpperCase();f==="ONGOING"?s.ongoing++:f==="EXPIRED"?s.expired++:f==="ABSORBED"?s.absorbed++:f==="RESIGNED"?s.resigned++:s.other++});const a=[],r=[],d=[];s.ongoing>0&&(a.push(s.ongoing),r.push("Ongoing"),d.push(we.successGreen)),s.expired>0&&(a.push(s.expired),r.push("Expired"),d.push(we.philippineRed)),s.absorbed>0&&(a.push(s.absorbed),r.push("Absorbed"),d.push("#059669")),s.resigned>0&&(a.push(s.resigned),r.push("Resigned"),d.push("#b91c1c")),s.other>0&&(a.push(s.other),r.push("Other"),d.push(we.mutedSlate()));const l=rt(),p={series:a,chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!0,easing:"easeinout",speed:800,dynamicAnimation:{enabled:!0,speed:350}}},labels:r,colors:d,plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"10px",fontWeight:800,color:l.muted,offsetY:-5},value:{show:!0,fontSize:"24px",fontWeight:900,color:l.text,offsetY:5},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:l.muted}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ge()?["#1e293b"]:["#ffffff"],width:2},tooltip:{theme:ge()?"dark":"light",style:{fontSize:"12px"}},legend:{show:!1}};Ce=new tt(o,p),Ce.render()}const or="modulepreload",sr=function(e,t){return new URL(e,t).href},dt={},Dt=function(t,o,s){let a=Promise.resolve();if(o&&o.length>0){let g=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};const d=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),p=l?.nonce||l?.getAttribute("nonce");a=g(o.map(f=>{if(f=sr(f,s),f in dt)return;dt[f]=!0;const h=f.endsWith(".css"),L=h?'[rel="stylesheet"]':"";if(s)for(let x=d.length-1;x>=0;x--){const k=d[x];if(k.href===f&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${L}`))return;const c=document.createElement("link");if(c.rel=h?"stylesheet":or,h||(c.as="script"),c.crossOrigin="",c.href=f,p&&c.setAttribute("nonce",p),document.head.appendChild(c),h)return new Promise((x,k)=>{c.addEventListener("load",x),c.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return a.then(d=>{for(const l of d||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};let fe=null;if(Ae()){const e="https://llnddycvbcetztzwbdpx.supabase.co",t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{fe=Bt(e,t)}catch{}}function nr(e=new Date().getFullYear()){const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],o=[];for(let s=0;s<12;s++){const a=new Date(e,s+1,0).getDate();o.push(`${t[s]} 1-15, ${e}`),o.push(`${t[s]} 16-${a}, ${e}`)}return o}function ir(e,t,o){if(o==="ar")return(e.period||"").toUpperCase().trim()===t.toUpperCase().trim();{const s=t.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!s)return!1;const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(s[1].toUpperCase());if(r===-1)return!1;const d=parseInt(s[4]),l=parseInt(s[2]),p=parseInt(s[3]),g=(e.date||"").substring(0,10),f=new Date(g+"T00:00:00");return isNaN(f)?!1:f.getFullYear()===d&&f.getMonth()===r&&f.getDate()>=l&&f.getDate()<=p}}function lr(e){if(!e)return"-";const t=e.toUpperCase();return t==="VERIFIED"||t==="COMPLETED"?"✓":t==="REJECTED"||t==="DECLINED"?"X":t==="PENDING"?"?":t}function ct(e,t,o,s){const a=e.map(r=>{const d=t[r.id]||[],l=s.map(p=>{const g=d.find(f=>ir(f,p,o));return g?lr(g.status):"-"});return{name:r.name||r.id,cells:l}});return{periods:s,rows:a}}function ut(e,t,o){const{periods:s,rows:a}=t,r=s.length+1;let d='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return d+=`<tr><td colspan="${r}" style="background:${o};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,d+=`<tr><th style="background:${o};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,s.forEach(l=>{d+=`<th style="background:${o};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${l}</th>`}),d+="</tr>",a.forEach((l,p)=>{const g=p%2===0?"#ffffff":"#f5f5f5";d+="<tr>",d+=`<td style="background:${g};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${l.name}</td>`,l.cells.forEach(f=>{d+=`<td style="background:${g};padding:5px 8px;text-align:center;font-weight:bold;color:${f==="✓"?"#15803d":f==="X"?"#dc2626":"#9ca3af"};">${f}</td>`}),d+="</tr>"}),d+="</table>",d}async function Tr(e){const t="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",o=e.length,s=await P.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
            <div class="font-montserrat text-left">
                <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest mb-4 ps-1">
                    Configure and export logs for <span class="text-royal-blue font-black">${o} beneficiaries</span>
                </p>

                <!-- Log Type -->
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Log Type</label>
                <div class="grid grid-cols-3 gap-2 mb-5">
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="dtr" class="peer sr-only" checked>
                        <div class="${t} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 hover:bg-blue-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <span>DTR</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="ar" class="peer sr-only">
                        <div class="${t} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 hover:bg-orange-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                            <span>AR</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="both" class="peer sr-only">
                        <div class="${t} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 hover:bg-emerald-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                            <span>BOTH</span>
                        </div>
                    </label>
                </div>

                <!-- Beneficiary Count -->
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Beneficiaries to Include</label>
                <div class="grid grid-cols-3 gap-2 mb-3" id="count-options">
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="10" class="peer sr-only" checked>
                        <div class="${t} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">10</span><span>persons</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="25" class="peer sr-only">
                        <div class="${t} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">25</span><span>persons</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="custom" class="peer sr-only">
                        <div class="${t} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">✎</span><span>Custom</span>
                        </div>
                    </label>
                </div>
                <div id="custom-count-wrap" class="hidden mb-4">
                    <input type="number" id="exp-custom-count" min="1" max="${o}" value="${o}"
                        class="block w-full text-sm font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue outline-none transition"
                        placeholder="Enter number of persons...">
                </div>

                <!-- Year -->
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Year</label>
                <select id="exp-year" class="block w-full text-xs font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 mb-4 focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue outline-none">
                    <option value="${new Date().getFullYear()}">${new Date().getFullYear()}</option>
                    <option value="${new Date().getFullYear()-1}">${new Date().getFullYear()-1}</option>
                </select>
            </div>
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(p=>{p.addEventListener("change",()=>{const g=document.getElementById("custom-count-wrap");g.classList.toggle("hidden",p.value!=="custom"||!p.checked);const f=document.querySelector('input[name="exp-count"]:checked');g.classList.toggle("hidden",f?.value!=="custom")})})},preConfirm:()=>{const p=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",g=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let f=parseInt(g==="custom"?document.getElementById("exp-custom-count")?.value||o:g,10);(isNaN(f)||f<1)&&(f=10),f=Math.min(f,o);const h=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:p,count:f,year:h}}});if(!s.isConfirmed||!s.value)return;const{type:a,count:r,year:d}=s.value,l=e.slice(0,r);await $t(l,a,d)}async function $t(e,t,o){P.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const s=nr(o),a=ye();async function r(k){const v=await(await fetch(`${a}api/logs.php?type=${k}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return v.success?v.logs||[]:[]}let d={},l={};(t==="dtr"||t==="both")&&(await r("dtr")).forEach(w=>{const v=String(w.gip_id||w.beneficiary_id||w.id||"");d[v]||(d[v]=[]),d[v].push(w)}),(t==="ar"||t==="both")&&(await r("ar")).forEach(w=>{const v=String(w.gip_id||w.beneficiary_id||w.id||"");l[v]||(l[v]=[]),l[v].push(w)});const p=e.map(k=>({...k,mapKey:String(k.id||k.gip_id||k.beneficiary_id)}));let g="";const f=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(t==="dtr"||t==="both"){const k=p.map(v=>({...v,id:v.mapKey})),w=ct(k,d,"dtr",s);g+="<br>"+ut(`DTR – Daily Time Records (${o})`,w,"#1d4ed8")}if(t==="ar"||t==="both"){const k=p.map(v=>({...v,id:v.mapKey})),w=ct(k,l,"ar",s);g+="<br><br>"+ut(`AR – Accomplishment Reports (${o})`,w,"#d97706")}const h=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${f} | DOLE LDNPFO – GIP Monitoring System</p>
                ${g}
            </body>
            </html>
        `,L=new Blob([h],{type:"application/vnd.ms-excel"}),c=URL.createObjectURL(L),x=document.createElement("a");x.href=c,x.download=`GIP_LOGS_${t.toUpperCase()}_${o}.xls`,document.body.appendChild(x),x.click(),URL.revokeObjectURL(c),document.body.removeChild(x),P.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(s){P.fire("Error",s.message||"Failed to generate export.","error")}}const Ye="color-theme",dr=3600*24*365;function cr(e,t,o){document.cookie=`${e}=${t}; max-age=${o}; path=/; SameSite=Lax`}function ur(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}function Ct(){const e=localStorage.getItem(Ye)||ur(Ye);return e==="dark"||e==="light"?e:"light"}function at(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem(Ye,e),cr(Ye,e,dr),pr(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function ot(){const e=Ct();at(e==="dark"?"light":"dark")}function pr(e){const t=e==="dark",o=document.getElementById("pref-dark-mode");o&&(o.checked=t);const s=document.getElementById("theme-toggle-dark-icon"),a=document.getElementById("theme-toggle-light-icon");s&&a&&(s.classList.toggle("hidden",t),a.classList.toggle("hidden",!t));const r=document.getElementById("sidebar-theme-label");r&&(r.textContent=t?"LIGHT MODE":"DARK MODE")}function Or(){const e=Ct();at(e);const t=document.getElementById("pref-dark-mode");t&&t.addEventListener("change",()=>{at(t.checked?"dark":"light")});const o=document.getElementById("theme-toggle-btn");o&&o.addEventListener("click",ot),document.querySelectorAll("[data-theme-toggle]").forEach(s=>{s.addEventListener("click",ot)})}function Ee(){return document.documentElement.classList.contains("dark")}window.toggleTheme=ot;window.isDarkMode=Ee;const ze={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=Ee(),t={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},o=`
            <div class="font-montserrat text-left px-2 sm:px-4 py-2">
                <div class="mb-6 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-black ${t.textHeading} flex items-center gap-2.5">
                            <div class="p-2 ${t.iconBg} rounded-lg ${t.iconText} border ${t.iconBorder} shadow-sm">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                            </div>
                            Bulk Add Beneficiaries
                        </h3>
                        <p class="text-[0.625rem] ${t.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Upload a CSV file to automate data entry.</p>
                    </div>
                </div>

                <div class="${t.bgCard} rounded-xl p-6 border ${t.borderCard} shadow-sm mb-4">
                    <label for="csv-upload" class="flex flex-col items-center justify-center w-full h-48 ${t.bgUpload} border-2 border-dashed ${t.borderUpload} rounded-lg cursor-pointer ${t.hoverUpload} transition-all duration-300 group">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-10 h-10 mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm font-bold ${t.textUpload}"><span class="font-black text-blue-500">Click to upload</span> or drag and drop</p>
                            <p class="text-xs ${t.textSubtitle} uppercase tracking-widest font-bold">.CSV format only</p>
                        </div>
                        <input id="csv-upload" type="file" class="hidden" accept=".csv, .txt" />
                    </label>
                </div>
                
                <div class="flex items-center gap-3 px-2 py-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-2">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="auto-save-toggle" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <div>
                        <span class="text-[0.6875rem] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block leading-tight">Auto-Save (Fast Mode)</span>
                        <span class="text-[0.5625rem] font-bold text-gray-400 uppercase tracking-tighter">Skip manual confirmations for every record</span>
                    </div>
                </div>
            </div>
        `;P.fire({html:o,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:s=>{const a=s.querySelector("#csv-upload"),r=s.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(l=>{r.addEventListener(l,d,!1)});function d(l){l.preventDefault(),l.stopPropagation()}["dragenter","dragover"].forEach(l=>{r.addEventListener(l,()=>{r.classList.add("border-blue-500","bg-blue-50/50"),e&&r.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(l=>{r.addEventListener(l,()=>{r.classList.remove("border-blue-500","bg-blue-50/50"),e&&r.classList.remove("dark:bg-slate-800/80")},!1)}),a.addEventListener("change",l=>{const p=l.target.files[0];if(p){const g=s.querySelector("#auto-save-toggle");this.isAutoSave=g?g.checked:!1,this.handleFile(p)}}),r.addEventListener("drop",l=>{const g=l.dataTransfer.files[0];if(g){const f=s.querySelector("#auto-save-toggle");this.isAutoSave=f?f.checked:!1,this.handleFile(g)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){P.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const t=new FileReader;t.onload=o=>{const s=o.target.result;this.parseCSV(s)},t.readAsText(e)},async parseCSV(e){let t=[],o="",s=!1;for(let a=0;a<e.length;a++){let r=e[a];r==='"'&&(s=!s),!s&&(r===`
`||r==="\r")?(r==="\r"&&e[a+1]===`
`&&a++,o.trim()!==""&&t.push(o),o=""):o+=r}o.trim()!==""&&t.push(o),this.queue=[];for(let a=0;a<t.length;a++){let r=t[a].trim();if(!r)continue;let d=[],l="",p=!1;for(let g=0;g<r.length;g++){let f=r[g];f==='"'?p=!p:f===","&&!p?(d.push(l.replace(/(^"|"$)/g,"").trim()),l=""):l+=f}if(d.push(l.replace(/(^"|"$)/g,"").trim()),d.length>=2){const g=d[3];if(!g||isNaN(parseInt(g)))continue;const f=d[1];if(!f||f.toLowerCase()==="name"||f.toLowerCase()==="full name")continue;const h=d[2];let L=d[4]?d[4].toUpperCase().trim():"",c="";(L==="F"||L.includes("FEMALE"))&&(c="Female"),(L==="M"||L.includes("MALE"))&&(c="Male");const x=d[5],k=d[6],w=d[7],v=this.formatDate(d[8]),$=this.formatDate(d[9]);this.queue.push({name:f,address:h,age:g,gender:c,education:x,startDate:v,endDate:$,office:k,designation:w})}}if(this.queue.length>0){try{P.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{P.showLoading()}});const a=this.queue.map(p=>p.name);let r=null;try{r=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{r=null}const l=await(await fetch(`${ye()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...r?{"X-User-Id":String(r)}:{}},body:JSON.stringify({names:a,user_id:r})})).json();if(l.success&&l.duplicates&&l.duplicates.length>0){const p=new Set(l.duplicates.map(f=>f.toLowerCase().trim())),g=this.queue.length;this.queue=this.queue.filter(f=>{const h=p.has(f.name.toLowerCase().trim());return!h})}}catch{}if(this.queue.length===0){P.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,P.close(),this.processNext()}else P.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){Ee();const e=Math.round(this.currentIndex/this.queue.length*100),t=`
            <div class="p-2 text-left font-montserrat">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-black text-blue-600 dark:text-blue-400 uppercase italic">Processing Data...</h3>
                    <span class="text-[0.625rem] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">${this.currentIndex} / ${this.queue.length}</span>
                </div>
                
                <div class="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-4 mb-6 p-1 border border-gray-200 dark:border-slate-700">
                    <div id="bulk-progress-bar" class="bg-blue-600 h-full rounded-full transition-all duration-300 shadow-sm shadow-blue-500/20" style="width: ${e}%"></div>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="text-xs font-bold text-gray-600 dark:text-slate-300">Currently saving: <span class="text-blue-500" id="bulk-current-name">${this.queue[this.currentIndex]?.name||"..."}</span></p>
                    <p class="text-[0.625rem] text-gray-400 font-medium">Please do not close the window until complete.</p>
                </div>

                <div class="mt-6 pt-4 border-t border-gray-50 dark:border-slate-800 flex justify-end">
                    <button id="stop-bulk-btn" class="px-5 py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[0.625rem] font-black uppercase tracking-widest rounded-xl border border-red-100 dark:border-red-800/40 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                        Stop Processing
                    </button>
                </div>
            </div>
        `;if(P.isVisible()&&P.getPopup().querySelector("#bulk-progress-bar")){const o=document.getElementById("bulk-progress-bar"),s=P.getPopup().querySelector("span.text-\\[10px\\]"),a=document.getElementById("bulk-current-name");o&&(o.style.width=`${e}%`),s&&(s.textContent=`${this.currentIndex} / ${this.queue.length}`),a&&(a.textContent=this.queue[this.currentIndex]?.name||"...")}else P.fire({html:t,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:o=>{o.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const t=new Date(e);if(isNaN(t.getTime())){const r=e.split("/");return r.length===3?`${r[2]}-${r[1].padStart(2,"0")}-${r[0].padStart(2,"0")}`:""}const o=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${o}-${s}-${a}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const o=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),s=await he(`api/beneficiaries.php?next_id&year=${o}`);s.success&&s.data?.success&&s.data?.nextId&&(e.gip_id=s.data.nextId,e.id=null)}catch{}const t=await window.addBeneficiaryData(e);this.isActive&&(t?this.onSaveSuccess():Re(e))})():Re(e)):Re(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),P.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,P.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=ze;function pt(e){if(!e)return"";const t=new Date(e),o=new Date;let s=o.getFullYear()-t.getFullYear();const a=o.getMonth()-t.getMonth();return(a<0||a===0&&o.getDate()<t.getDate())&&s--,s>=0?s:0}function gt(e){if(!e||e==="N/A")return"N/A";const t=String(e).split("/");if(t.length===3){const s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=parseInt(t[0],10);if(a>=1&&a<=12)return`${s[a-1]} ${t[1].padStart(2,"0")}, ${t[2]}`}const o=String(e).split("-");if(o.length===3&&o[0].length===4){const s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=parseInt(o[1],10);if(a>=1&&a<=12)return`${s[a-1]} ${o[2].padStart(2,"0")}, ${o[0]}`}return String(e).toUpperCase()}function gr(e,t=!0){if(!e||e==="N/A")return t?"bg-gray-800 text-white font-black border-gray-900 shadow-md dark:bg-gray-100 dark:text-gray-900":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const o=e.toUpperCase().trim();let s={inactive:"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};if(o==="LDNPFO"||o.startsWith("LDNPFO"))s={inactive:"bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};else if(o.includes("BOT"))s={inactive:"bg-amber-100 text-amber-800 border border-amber-200 dark:!text-white",active:"bg-amber-400 text-slate-900 font-black border-amber-500 shadow-md"};else if(o.includes("DICT"))s={inactive:"bg-red-100 text-red-700 border border-red-200 dark:!text-white",active:"bg-red-600 text-white font-black border-red-700 shadow-md"};else if(o.includes("NLRC"))s={inactive:"bg-blue-50 text-blue-700 border border-blue-100 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};else if(o.includes("PCUP"))s={inactive:"bg-indigo-100 text-indigo-900 border border-indigo-200 dark:!text-white",active:"bg-indigo-900 text-white font-black border-indigo-950 shadow-md"};else if(o.includes("BACOLOD"))s={inactive:"bg-rose-100 text-rose-900 border border-rose-200 dark:!text-white",active:"bg-red-900 text-white font-black border-red-950 shadow-md"};else if(o.includes("BALO-I")||o.includes("BALOI"))s={inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-500 text-white font-black border-sky-600 shadow-md"};else if(o.includes("BAROY"))s={inactive:"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white",active:"bg-slate-600 text-white font-black border-slate-700 shadow-md"};else if(o.includes("ILIGAN"))s={inactive:"bg-amber-100 text-amber-900 border border-amber-200 dark:!text-white",active:"bg-amber-800 text-white font-black border-amber-900 shadow-md"};else if(o.includes("KAUSWAGAN"))s={inactive:"bg-pink-50 text-pink-700 border border-pink-200 dark:!text-white",active:"bg-gradient-to-r from-sky-400 to-pink-500 text-white font-black border-pink-500 shadow-md"};else if(o.includes("KOLAMBUGAN"))s={inactive:"bg-emerald-100 text-emerald-900 border border-emerald-200 dark:!text-white",active:"bg-emerald-900 text-white font-black border-emerald-950 shadow-md"};else if(o.includes("LINAMON"))s={inactive:"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white",active:"bg-purple-600 text-white font-black border-purple-700 shadow-md"};else if(o.includes("MAGSAYSAY"))s={inactive:"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white",active:"bg-cyan-600 text-white font-black border-cyan-700 shadow-md"};else if(o.includes("MAIGO"))s={inactive:"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white",active:"bg-blue-600 text-white font-black border-blue-700 shadow-md"};else if(o.includes("MATUNGAO"))s={inactive:"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white",active:"bg-violet-600 text-white font-black border-violet-700 shadow-md"};else if(o.includes("NUNUNGAN"))s={inactive:"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white",active:"bg-indigo-600 text-white font-black border-indigo-700 shadow-md"};else if(o.includes("PANTAO"))s={inactive:"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white",active:"bg-orange-600 text-white font-black border-orange-700 shadow-md"};else if(o.includes("PANTAR"))s={inactive:"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white",active:"bg-amber-500 text-white font-black border-amber-600 shadow-md"};else if(o.includes("POONA"))s={inactive:"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white",active:"bg-fuchsia-600 text-white font-black border-fuchsia-700 shadow-md"};else if(o.includes("SALVADOR"))s={inactive:"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white",active:"bg-rose-600 text-white font-black border-rose-700 shadow-md"};else if(o.includes("SAPAD"))s={inactive:"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white",active:"bg-lime-600 text-white font-black border-lime-700 shadow-md"};else if(o.includes("SND"))s={inactive:"bg-red-100 text-red-700 border border-red-200 dark:!text-white",active:"bg-red-700 text-white font-black border-red-800 shadow-md"};else if(o.includes("TAGOLOAN"))s={inactive:"bg-green-100 text-green-700 border border-green-200 dark:!text-white",active:"bg-green-600 text-white font-black border-green-700 shadow-md"};else if(o.includes("TANGCAL"))s={inactive:"bg-purple-100 text-purple-800 border border-purple-200 dark:!text-white",active:"bg-purple-800 text-white font-black border-purple-900 shadow-md"};else if(o.includes("TUBOD"))s={inactive:"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white",active:"bg-emerald-600 text-white font-black border-emerald-700 shadow-md"};else if(o.includes("PGLDN"))s={inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-600 text-white font-black border-sky-700 shadow-md"};else if(o.includes("PRC"))s={inactive:"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white",active:"bg-pink-600 text-white font-black border-pink-700 shadow-md"};else if(o.includes("SSS"))s={inactive:"bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white",active:"bg-blue-800 text-white font-black border-blue-900 shadow-md"};else{const a=[{inactive:"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white",active:"bg-purple-600 text-white font-black border-purple-700 shadow-md"},{inactive:"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white",active:"bg-rose-600 text-white font-black border-rose-700 shadow-md"},{inactive:"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white",active:"bg-amber-500 text-white font-black border-amber-600 shadow-md"},{inactive:"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white",active:"bg-teal-600 text-white font-black border-teal-700 shadow-md"},{inactive:"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white",active:"bg-indigo-600 text-white font-black border-indigo-700 shadow-md"},{inactive:"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white",active:"bg-emerald-600 text-white font-black border-emerald-700 shadow-md"},{inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-500 text-white font-black border-sky-600 shadow-md"}];let r=0;for(let d=0;d<o.length;d++)r=r*31+o.charCodeAt(d)>>>0;s=a[r%a.length]}return t?s.active:s.inactive}function br(e){if(!e)return"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800";const t=e.toUpperCase();return t==="ONGOING"||t==="ABSORBED"?"bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-700 dark:border-emerald-800":"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800"}const bt="gip-drawer-employment-details-expanded";class fr{constructor(t,o,s){this.root=t,this.maxPage=s,this.currentPage=Math.min(Math.max(Number(o)||0,0),s),this.prevButton=t.querySelector("#drawer-prev-btn"),this.nextButton=t.querySelector("#drawer-next-btn"),this.detailsButton=t.querySelector("#drawer-employment-details-toggle"),this.detailsPanel=t.querySelector("#drawer-employment-details-panel"),this.detailsIcon=t.querySelector("#drawer-employment-details-icon"),this.pageTitles=["Personal Profile","Submission Logs","Required Documents"]}getSavedDetailsState(){try{return localStorage.getItem(bt)==="true"}catch{return!1}}saveDetailsState(t){try{localStorage.setItem(bt,String(t))}catch{}}setDetailsExpanded(t,o=!1){!this.detailsButton||!this.detailsPanel||(this.detailsButton.setAttribute("aria-expanded",String(t)),this.detailsPanel.classList.toggle("hidden",!t),this.detailsIcon?.classList.toggle("rotate-180",t),o&&this.saveDetailsState(t))}renderNavigation(){this.root.querySelectorAll("[id^=drawer-page-]").forEach((s,a)=>{s.classList.toggle("hidden",a!==this.currentPage)});const t=this.root.querySelector("#drawer-section-title");t&&(t.textContent=this.pageTitles[this.currentPage]),this.root.querySelector("#personal-profile-section")?.classList.toggle("hidden",this.currentPage!==0),this.prevButton?.classList.toggle("hidden",this.currentPage===0),this.nextButton?.classList.toggle("hidden",this.currentPage===this.maxPage)}goToPage(t){this.currentPage=Math.min(Math.max(t,0),this.maxPage),this.renderNavigation()}bind(){this.prevButton?.addEventListener("click",()=>this.goToPage(this.currentPage-1)),this.nextButton?.addEventListener("click",()=>this.goToPage(this.currentPage+1)),this.detailsButton?.addEventListener("click",()=>{const t=this.detailsButton.getAttribute("aria-expanded")==="true";this.setDetailsExpanded(!t,!0)}),this.setDetailsExpanded(this.getSavedDetailsState()),this.renderNavigation()}}function ft(e=3){return Array.from({length:e},(t,o)=>`
        <div class="skeleton-wave border border-gray-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800" aria-hidden="true">
            <div class="h-2.5 ${o%2===0?"w-2/5":"w-1/3"} rounded-full bg-gray-200 dark:bg-slate-700"></div>
            <div class="mt-3 h-3.5 ${o%2===0?"w-4/5":"w-3/5"} rounded-full bg-gray-300 dark:bg-slate-600"></div>
        </div>
    `).join("")}function mr(){return["Contact No.","Address","Birthday","Age","Gender","Education","Designated Beneficiary","Relationship to Assured"].map((t,o)=>`
        <div class="grid grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-4">
            <span class="whitespace-nowrap font-medium text-gray-500">${t}</span>
            <span class="skeleton-wave block h-3.5 ${o%3===0?"w-2/3":o%3===1?"w-full":"w-1/2"} rounded-full bg-gray-200 dark:bg-slate-700" aria-hidden="true"></span>
        </div>
    `).join("")}async function mt(e,t){const o=await wt(`api/logs.php?type=${encodeURIComponent(e)}`,t),s=o.success?o.data:null;return!o.success||!s?.success?{success:!1,error:s?.error||o.error||"The log could not be saved."}:o}function Ue(e,t=0){const o=!!e?._isLoadingProfile,s=!!e?._isLoadingLogs;e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const a=e.arLogs||[],r=e.dtrLogs||[],d=e.docs||[],l=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],p=l.map(c=>{const x=d.find(k=>k.name.toUpperCase()===c.toUpperCase());return x||{name:c,status:"PENDING",id:null}});d.forEach(c=>{l.some(k=>k.toUpperCase()===c.name.toUpperCase())||p.push(c)});const g=`
<div class="pb-4 mb-4 flex flex-col relative w-full pt-3 font-montserrat user-select-none">
    <div class="flex min-h-11 items-center justify-between border-b border-default pb-4 pe-14">
        <h3 class="text-xl sm:text-2xl font-black text-heading leading-tight tracking-tight">GIP Information</h3>
        <button type="button" id="close-drawer-btn" class="group absolute top-0.5 right-0 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-red-800 dark:hover:bg-red-950/60 dark:hover:text-red-300">
           <svg class="w-6 h-6 transition-transform duration-200 group-hover:rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
           <span class="sr-only">Close drawer</span>
        </button>
    </div>

    <div class="mt-5 min-w-0">
        ${o?`
            <div class="skeleton-wave" aria-label="Loading beneficiary profile" role="status">
                <div class="h-5 w-3/5 rounded-full bg-gray-300 dark:bg-slate-700"></div>
                <div class="mt-2 h-5 w-24 rounded-full border border-dashed border-gray-300 bg-gray-100 dark:border-slate-600 dark:bg-slate-800"></div>
                <span class="sr-only">Loading beneficiary profile</span>
            </div>
        `:`
            <p class="text-lg sm:text-xl font-black text-royal-blue dark:text-blue-300 leading-tight tracking-tight break-words">${e.name}</p>
            <span class="mt-2 inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-dashed border-royal-blue/30 bg-blue-50/50 px-2.5 py-1 text-[0.5625rem] font-black uppercase tracking-wider text-royal-blue dark:border-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
                <span class="size-1.5 shrink-0 rounded-full bg-golden-yellow" aria-hidden="true"></span>
                ${e.id}
            </span>
        `}
    </div>

    <div class="mt-5 grid w-full grid-cols-2 gap-x-2.5 sm:gap-x-3">
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Remarks</span>
            ${o?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${br(e.remarks)} block min-h-8 w-full truncate border border-l-4 ${e.remarks==="ONGOING"||e.remarks==="ABSORBED"?"border-l-emerald-600 dark:border-l-emerald-500":"border-l-red-600 dark:border-l-red-500"} px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.remarks}">${e.remarks}</span>`}
        </div>
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Office</span>
            ${o?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${gr(e.office,!0)} block min-h-8 w-full truncate border border-l-4 px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.office}">${e.office}</span>`}
        </div>
    </div>
</div>

<!-- Persistent Section Header with Responsive Nav Buttons -->
<div class="flex justify-between items-end gap-3 mb-4 border-y border-default pt-2">
    <h4 id="drawer-section-title" class="mb-2 border-b-2 border-brand pb-1.5 text-sm font-bold text-heading uppercase tracking-widest">Personal Profile</h4>
    <div class="flex shrink-0 gap-2 pb-3">
        <button type="button" id="drawer-prev-btn" class="hidden flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-default-medium bg-neutral-secondary-medium px-4 py-2 text-[0.5625rem] font-black uppercase tracking-widest text-heading shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 active:bg-red-100 dark:hover:border-red-800 dark:hover:bg-red-950/60 dark:hover:text-red-300 cursor-pointer">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREV
        </button>
        <button type="button" id="drawer-next-btn" class="flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-brand px-4 py-2 text-center text-[0.5625rem] font-black uppercase tracking-widest text-white shadow-sm shadow-brand-medium/50 transition-all hover:bg-brand-strong active:scale-95 cursor-pointer">
            NEXT
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
        </button>
    </div>
</div>

<div id="personal-profile-section" class="transition-all duration-300">
    <div class="flex flex-col gap-4 sm:gap-y-4.5 text-sm mt-3 px-1 mb-8">
        ${o?mr():`
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Contact No.</span>
            <span class="${e.contact?"font-black text-heading font-mono":"font-bold text-gray-300 italic"} min-w-0 truncate text-right sm:text-left">${e.contact||"NOT PROVIDED"}</span>
        </div>
        <div class="flex justify-between items-start gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap mt-1 sm:mt-0">Address</span>
            <span class="min-w-0 font-bold text-heading text-right sm:text-left break-words whitespace-normal leading-relaxed" title="${e.address}">${e.address||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Birthday</span>
            <span class="${e.birthday?"font-black text-heading uppercase":"font-bold text-gray-300 italic"} text-right sm:text-left">${e.birthday||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Age</span>
            <span class="${e.age||pt(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right sm:text-left">${e.age||pt(e.birthday)||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Gender</span>
            <span class="font-black text-heading uppercase text-right sm:text-left">${e.gender||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group pt-1 mt-0 border-t border-gray-50 dark:border-slate-800/60 sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Education</span>
            <div class="flex items-center gap-2 max-w-[60%] justify-end shrink-0 min-w-0 sm:max-w-full sm:justify-start">
                <span class="text-[0.6875rem] lg:text-sm font-black text-heading whitespace-nowrap tracking-tight truncate" title="${e.education}">${e.education||"N/A"}</span>
                <div class="w-6 h-6 rounded bg-golden-yellow/10 flex items-center justify-center text-golden-yellow border border-golden-yellow/20 shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-start gap-5 group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60 sm:grid sm:grid-cols-[11.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap mt-1 sm:mt-0">Designated Beneficiary</span>
            <span class="${e.designatedBeneficiary!=="N/A"?"font-black text-heading":"font-bold text-gray-300 italic"} max-w-[52%] text-right wrap-break-word leading-snug uppercase sm:max-w-full sm:pl-2 sm:text-left">${e.designatedBeneficiary}</span>
        </div>
        <div class="flex justify-between items-center gap-5 group sm:grid sm:grid-cols-[11.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Relationship to Assured</span>
            <span class="${e.relationshipToAssured!=="N/A"?"font-black text-[#2e7d32] dark:text-green-400":"font-bold text-gray-300 italic"} max-w-[52%] text-right uppercase sm:max-w-full sm:pl-2 sm:text-left">${e.relationshipToAssured}</span>
        </div>
        `}
    </div>
</div>

<!-- Container for right grid from modal -->
<div class="relative">
    <!-- Pages Container -->
    <div id="drawer-page-0" class="flex-1 flex flex-col gap-4">
        <button type="button" id="drawer-employment-details-toggle" class="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 border-y border-default bg-transparent py-4 text-left transition-colors hover:bg-gray-50/70 dark:hover:bg-slate-800/50" aria-expanded="false" aria-controls="drawer-employment-details-panel">
            <span>
                <span class="block text-base sm:text-lg font-black text-heading tracking-tight">Employment Details</span>
                <span class="mt-1 block text-[0.5625rem] sm:text-[0.625rem] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Registry, assignment and history</span>
            </span>
            <span class="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors group-hover:border-royal-blue/30 group-hover:text-royal-blue dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:group-hover:border-blue-700 dark:group-hover:text-blue-300">
                <svg id="drawer-employment-details-icon" class="h-4 w-4 transition-transform duration-300" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m6 9 6 6 6-6"/></svg>
            </span>
        </button>
        <div id="drawer-employment-details-panel" class="hidden flex flex-col gap-3 pt-1 font-montserrat">
            <!-- Contract Duration / Period Card -->
            <div class="bg-gradient-to-br from-blue-50/60 via-gray-50/50 to-indigo-50/40 dark:from-slate-800/80 dark:via-slate-800/50 dark:to-slate-900/60 rounded-xl p-4 border border-blue-100/80 dark:border-slate-700/80 shadow-sm w-full transition-all">
                <div class="flex items-center justify-between border-b border-blue-100/60 dark:border-slate-700/60 pb-2.5 mb-3">
                    <p class="text-[0.5625rem] uppercase tracking-widest text-royal-blue dark:text-blue-400 font-black flex items-center gap-1.5">
                        <svg class="w-3.5 h-3.5 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Contract Period
                    </p>
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[0.5625rem] font-bold uppercase tracking-wider bg-blue-100 text-royal-blue dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        ${Xe(e.startDate,e.endDate).text||"GIP Duration"}
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <!-- Start Date (Color Coded: Emerald Green) -->
                    <div class="flex flex-col bg-emerald-50/60 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">Start Date</span>
                        ${o?'<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-emerald-200/70 dark:bg-emerald-900/50 my-0.5"></span>':`<span class="text-xs sm:text-sm font-black text-emerald-700 dark:text-emerald-300 leading-tight font-mono">${gt(e.startDate)}</span>`}
                    </div>
                    <!-- End Date (Color Coded: Rose Red) -->
                    <div class="flex flex-col bg-rose-50/60 dark:bg-rose-950/30 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block mb-1">End Date</span>
                        ${o?'<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-rose-200/70 dark:bg-rose-900/50 my-0.5"></span>':`<span class="text-xs sm:text-sm font-black text-rose-700 dark:text-rose-300 leading-tight font-mono">${gt(e.endDate)}</span>`}
                    </div>
                </div>
            </div>

            <!-- Assigned Unit Card (Color Coded: Amber) -->
            <div class="bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100/80 dark:border-amber-900/40 p-4 rounded-xl shadow-sm transition-all">
                <div class="flex items-center gap-2 mb-1.5">
                    <div class="p-1.5 rounded-lg bg-amber-100/80 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <label class="text-[0.5625rem] text-amber-700 dark:text-amber-300 font-bold block uppercase tracking-widest">Assigned Unit</label>
                </div>
                ${o?'<div class="pl-7"><span class="skeleton-wave block h-4 w-44 rounded-full bg-amber-200/70 dark:bg-amber-900/50 my-1"></span></div>':`<p class="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-200 break-words whitespace-normal leading-snug pl-7">${e.designation||"N/A"}</p>`}
            </div>
            
            <!-- Replacement History Card (Color Coded: Indigo/Blue) -->
            <div class="bg-blue-50/30 dark:bg-blue-950/20 p-4 rounded-xl border border-dashed border-blue-200 dark:border-blue-900/50">
                <label class="text-[0.5625rem] text-royal-blue dark:text-blue-400 font-bold block mb-1 uppercase tracking-widest">Replacement History</label>
                ${o?'<span class="skeleton-wave block h-4 w-36 rounded-full bg-blue-200/70 dark:bg-blue-900/50 my-1"></span>':`<p class="text-xs sm:text-sm text-royal-blue dark:text-blue-300 font-bold italic underline decoration-blue-500/30 underline-offset-4 cursor-default">${e.replacement||"None found."}</p>`}
            </div>
        </div>

        ${e.remarks==="ABSORBED"?`
        <div class="bg-[#e8f5e9]/50 dark:bg-green-900/10 p-4 rounded-xl border border-[#c8e6c9] dark:border-green-900/30 mt-2">
            <p class="text-[0.5625rem] uppercase font-black text-[#2e7d32] dark:text-green-500 border-b border-green-200 dark:border-slate-800 pb-1 flex items-center gap-2 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> 
                Absorption Details
            </p>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4">Date</span>
                    <span class="font-black text-[#1b5e20] dark:text-green-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.absorbDate||String(e.absorbDate).includes("0000-00-00"))return"N/A";const c=new Date(e.absorbDate);return isNaN(c.getTime())||c.getFullYear()<1900?"N/A":(c.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+c.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Where</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.absorb_where||"N/A"}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Position</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.absorb_position||"N/A"}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Agency</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.absorb_agency||"N/A"}</span>
                </div>
            </div>
        </div>
        `:""}

        ${e.remarks==="RESIGNED"?`
        <div class="bg-[#ffebee]/50 dark:bg-red-900/10 p-4 rounded-xl border border-[#ffcdd2] dark:border-red-900/30 mt-2">
            <p class="text-[0.5625rem] uppercase font-black text-[#ce1126] dark:text-red-500 border-b border-red-200 dark:border-slate-800 pb-1 flex items-center gap-2 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> 
                Resignation Details
            </p>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4">Date</span>
                    <span class="font-black text-[#b71c1c] dark:text-red-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.resignedDate||String(e.resignedDate).includes("0000-00-00"))return"N/A";const c=new Date(e.resignedDate);return isNaN(c.getTime())||c.getFullYear()<1900?"N/A":(c.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+c.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Reason</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.resigned_reason||"N/A"}</span>
                </div>
            </div>
        </div>
        `:""}
        </div>
    </div>
    
    <div id="drawer-page-1" class="hidden flex-1 flex flex-col gap-6">
         <div class="flex flex-wrap items-center justify-center gap-2 border-b border-default pb-3">
            <div class="flex flex-wrap gap-2">
                <button type="button" id="add-dtr-log-btn" class="bg-blue-50 dark:bg-blue-900/40 text-royal-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white text-[0.6875rem] font-black tracking-widest uppercase px-4 py-2 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                    + DTR
                </button>
                <button type="button" id="add-ar-log-btn" class="bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-800 hover:bg-orange-500 hover:text-white text-[0.6875rem] font-black tracking-widest uppercase px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                    + AR
                </button>
                <button type="button" id="export-log-btn" class="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-500 hover:text-white text-[0.6875rem] font-black tracking-widest uppercase px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    EXPORT
                </button>
            </div>
         </div>

         <div class="flex flex-col gap-5">
            ${s?ft(4):`
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${r.length?r.map(c=>{const x=c.status||"PENDING";let k=x==="VERIFIED"||x==="COMPLETED"?"text-green-500":x==="REJECTED"||x==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const w=x==="VERIFIED"||x==="COMPLETED"?"SUBMITTED":x;let v=c.date||c.createdAt,$=v;const F=c.submittedAt||c.submitted_at||c.createdAt||c.created_at,J=F?new Date(F).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",V=[c.rejectedAt||c.rejected_at?"Rejected: "+new Date(c.rejectedAt||c.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",c.updatedAt||c.updated_at?"Updated: "+new Date(c.updatedAt||c.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(B=>`
`+B).join("");if(v){const B=/^\d{4}-\d{2}-\d{2}$/.test(v)?new Date(v+"T00:00:00Z"):new Date(v);isNaN(B)||($=B.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-blue-500 bg-transparent p-4 text-blue-700 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:border-blue-300 dark:hover:bg-blue-500 dark:hover:text-white" title="Submitted: ${J}${V}" data-type="dtr" data-id="${c.id}" data-val="${c.day||v}" data-status="${x}">
                            <span class="text-sm font-black text-blue-700 group-hover:text-white dark:text-blue-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${J}${V}">${c.day||$}</span>
                            <span class="log-status-label text-xs font-bold ${k} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${w}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="dtr" data-id="${c.id}">
                                <button type="button" class="delete-log-trigger group/delete relative flex h-full w-full cursor-pointer items-center justify-center rounded-r-xl bg-red-500 text-white hover:bg-red-600" aria-label="Delete DTR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/delete:opacity-100">Delete</span></button>
                                <div class="delete-confirm-actions hidden h-full w-full items-stretch overflow-visible">
                                    <button type="button" class="delete-log-confirm group/confirm relative flex flex-1 cursor-pointer items-center justify-center rounded-l-xl bg-emerald-600 text-white hover:bg-emerald-700" aria-label="Confirm delete DTR log"><svg class="delete-confirm-icon size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 13 4 4L19 7"/></svg><svg class="delete-loading-icon hidden size-4 animate-spin" aria-label="Deleting DTR log" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"/></svg><span class="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/confirm:opacity-100">Confirm delete</span></button>
                                    <button type="button" class="delete-log-cancel group/cancel relative flex flex-1 cursor-pointer items-center justify-center rounded-r-xl bg-red-600 text-white hover:bg-red-700 active:bg-red-800" aria-label="Cancel delete DTR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/cancel:opacity-100">Cancel</span></button>
                                </div>
                            </div>
                        </div>
                    `}).join(""):'<p class="text-xs text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700">No DTR logs submitted.</p>'}
                </div>
            </div>

            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    AR Logs
                </h5>
                <div class="space-y-2">
                    ${a.length?a.map(c=>{const x=c.status||"PENDING";let k=x==="VERIFIED"||x==="COMPLETED"?"text-green-500":x==="REJECTED"||x==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const w=x==="VERIFIED"||x==="COMPLETED"?"SUBMITTED":x;let v=c.period||c.createdAt,$=v;const F=c.submittedAt||c.submitted_at||c.createdAt||c.created_at,J=F?new Date(F).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",V=[c.rejectedAt||c.rejected_at?"Rejected: "+new Date(c.rejectedAt||c.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",c.updatedAt||c.updated_at?"Updated: "+new Date(c.updatedAt||c.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(B=>`
`+B).join("");if(v){const B=/^\d{4}-\d{2}-\d{2}$/.test(v)?new Date(v+"T00:00:00Z"):new Date(v);isNaN(B)||($=B.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-orange-500 bg-transparent p-4 text-orange-700 shadow-sm transition-colors hover:border-orange-700 hover:bg-orange-600 hover:text-white dark:border-orange-400 dark:text-orange-300 dark:hover:border-orange-300 dark:hover:bg-orange-500 dark:hover:text-white" title="Submitted: ${J}${V}" data-type="ar" data-id="${c.id}" data-val="${v}" data-status="${x}">
                            <span class="text-sm font-black text-orange-700 group-hover:text-white dark:text-orange-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${J}${V}">${v||$}</span>
                            <span class="log-status-label text-xs font-bold ${k} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${w}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="ar" data-id="${c.id}">
                                <button type="button" class="delete-log-trigger group/delete relative flex h-full w-full cursor-pointer items-center justify-center rounded-r-xl bg-red-500 text-white hover:bg-red-600" aria-label="Delete AR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/delete:opacity-100">Delete</span></button>
                                <div class="delete-confirm-actions hidden h-full w-full items-stretch overflow-visible">
                                    <button type="button" class="delete-log-confirm group/confirm relative flex flex-1 cursor-pointer items-center justify-center rounded-l-xl bg-emerald-600 text-white hover:bg-emerald-700" aria-label="Confirm delete AR log"><svg class="delete-confirm-icon size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 13 4 4L19 7"/></svg><svg class="delete-loading-icon hidden size-4 animate-spin" aria-label="Deleting AR log" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"/></svg><span class="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/confirm:opacity-100">Confirm delete</span></button>
                                    <button type="button" class="delete-log-cancel group/cancel relative flex flex-1 cursor-pointer items-center justify-center rounded-r-xl bg-red-600 text-white hover:bg-red-700 active:bg-red-800" aria-label="Cancel delete AR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/cancel:opacity-100">Cancel</span></button>
                                </div>
                            </div>
                        </div>
                    `}).join(""):'<p class="text-xs text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700">No AR logs submitted.</p>'}
                </div>
            </div>
            `}
         </div>
    </div>
    
    <div id="drawer-page-2" class="hidden flex-1 flex flex-col gap-4">
        <div class="flex flex-col gap-3">
            ${s?ft(5):p.map(c=>{const x=c.status.toUpperCase(),w={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[x]||x,v=w==="COMPLETED",$=w==="REJECTED",F=w==="PENDING",J=v?"text-emerald-600 group-hover/card:text-emerald-800 dark:text-emerald-400 dark:group-hover/card:text-emerald-900":$?"text-red-600 group-hover/card:text-red-800 dark:text-red-400 dark:group-hover/card:text-red-900":"text-orange-600 group-hover/card:text-orange-800 dark:text-orange-400 dark:group-hover/card:text-orange-900",V=v?"border-emerald-600 bg-transparent hover:border-emerald-700 hover:bg-emerald-600 dark:border-emerald-400 dark:bg-transparent dark:hover:border-emerald-300 dark:hover:bg-emerald-500":$?"border-red-600 bg-transparent hover:border-red-700 hover:bg-red-600 dark:border-red-400 dark:bg-transparent dark:hover:border-red-300 dark:hover:bg-red-500":"border-orange-600 bg-transparent hover:border-orange-700 hover:bg-orange-600 dark:border-orange-400 dark:bg-transparent dark:hover:border-orange-300 dark:hover:bg-orange-500",B=v?"text-emerald-700 group-hover/card:text-white dark:text-emerald-300 dark:group-hover/card:text-white":$?"text-red-700 group-hover/card:text-white dark:text-red-300 dark:group-hover/card:text-white":"text-orange-700 group-hover/card:text-white dark:text-orange-300 dark:group-hover/card:text-white",se=v?"SUBMITTED":w,q=v?"border-emerald-900 bg-emerald-700 text-white ring-2 ring-emerald-200 hover:bg-emerald-600":"border-emerald-500 bg-transparent text-emerald-700 group-hover/card:border-emerald-700 group-hover/card:bg-white group-hover/card:text-emerald-800 hover:border-emerald-700 hover:bg-emerald-600 hover:text-white",ke=F?"border-orange-900 bg-orange-700 text-white ring-2 ring-orange-200 hover:bg-orange-600":"border-orange-500 bg-transparent text-orange-700 group-hover/card:border-orange-700 group-hover/card:bg-white group-hover/card:text-orange-800 hover:border-orange-700 hover:bg-orange-600 hover:text-white",ue=$?"border-red-900 bg-red-700 text-white ring-2 ring-red-200 hover:bg-red-600":"border-red-500 bg-transparent text-red-700 group-hover/card:border-red-700 group-hover/card:bg-white group-hover/card:text-red-800 hover:border-red-700 hover:bg-red-600 hover:text-white";let re='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return v?re='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M5 13l4 4L19 7"></path></svg>':$&&(re='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="drawer-doc-card group/card relative flex cursor-pointer items-center justify-between rounded-xl border p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand/30 ${V}" role="button" tabindex="0" data-id="${c.id}" data-name="${c.name}" data-status="${w}" aria-label="Change status for ${c.name}" aria-expanded="false">
                    <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white shadow-sm ${J}">
                            ${re}
                        </div>
                        <span class="flex-1 text-xs font-black uppercase tracking-tight sm:text-sm ${B}">${c.name}</span>
                    </div>
                    <span class="drawer-doc-status ml-auto shrink-0 text-[0.5625rem] font-black uppercase tracking-wider ${B}">${se}</span>
                    <svg class="drawer-doc-cue ml-3 size-5 shrink-0 transition-transform group-hover/card:scale-110 ${B}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 12h.01M12 12h.01M18 12h.01"/></svg>
                    <div class="drawer-doc-actions ml-3 hidden shrink-0 items-center gap-1.5">
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${q}" data-status="COMPLETED" aria-label="Submit document" aria-pressed="${v}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="m5 13 4 4L19 7"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Submitted</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ke}" data-status="PENDING" aria-label="Set pending" aria-pressed="${F}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            <span class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Pending</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ue}" data-status="REJECTED" aria-label="Reject document" aria-pressed="${$}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18 18 6M6 6l12 12"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Reject</span>
                        </button>
                    </div>
                    <svg class="drawer-doc-loading ml-3 hidden size-5 shrink-0 animate-spin text-brand" aria-label="Updating document" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"/></svg>
                </div>
                `}).join("")}
        </div>
    </div>

    <!-- End of Pages -->
</div>
</div>

<style>
    #beneficiary-drawer-container::-webkit-scrollbar {
        width: 5px;
    }
    #beneficiary-drawer-container::-webkit-scrollbar-track {
        background: transparent;
    }
    #beneficiary-drawer-container::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.025);
        border-radius: 20px;
    }
    .dark #beneficiary-drawer-container::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.025);
    }
    #beneficiary-drawer-container::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    .dark #beneficiary-drawer-container::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.1);
    }
</style>
    `,f=!!e._noAnimation;let h=document.getElementById("beneficiary-drawer-container");const L=f&&!!h&&h.dataset.beneficiaryId===String(e.id||"");if(L){const c=h.scrollTop;h.innerHTML=g,h.scrollTop=c}else h&&(h.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),h=document.createElement("div"),h.id="beneficiary-drawer-container",h.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[500px] lg:w-[560px] shadow-2xl",h.setAttribute("tabindex","-1"),h.setAttribute("data-drawer-backdrop","true"),h.innerHTML=g,document.body.appendChild(h),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");h.dataset.beneficiaryId=String(e.id||""),Dt(async()=>{const{Drawer:c}=await import("./vendor-flowbite-BS-fTmyB.js").then(x=>x.b);return{Drawer:c}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:c})=>{let x=L?h.__drawerInstance:null;if(!x){const y={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{h.__inlineActionAbort?.abort(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{h&&h.parentNode&&h.remove()},300)}};x=new c(h,y),h.__drawerInstance=x,x.show()}h.querySelector("#close-drawer-btn").addEventListener("click",()=>x.hide());const w=new fr(h,t,2);w.bind(),h.__inlineActionAbort?.abort();const v=new AbortController;h.__inlineActionAbort=v;const $=()=>{const A=(document.getElementById("beneficiary-drawer-container")||h).getBoundingClientRect(),D=Math.max(0,A.left);return{canDockBesideDrawer:window.innerWidth>=640&&D>=280,drawerOffset:Math.max(0,window.innerWidth-A.left),availableLeftSpace:D}},F=(y,A,D=1800)=>($(),P.fire({toast:!0,position:"bottom-end",icon:y,title:A,showConfirmButton:!1,timer:D,didOpen:G=>{const Y=$();if(!Y.canDockBesideDrawer)return;const H=G.closest(".swal2-container");H&&(H.style.inset="auto",H.style.right=Y.drawerOffset+12+"px",H.style.bottom="12px",H.style.left="auto",H.style.width="auto",G.style.maxWidth=`${Math.min(352,Y.availableLeftSpace-24)}px`)}})),J=y=>{!y||y.dataset.loading==="true"||(y.dataset.confirming="false",y.classList.remove("w-22","opacity-100","pointer-events-auto"),y.classList.add("w-11","opacity-0","pointer-events-none"),y.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.remove("!pr-24"),y.querySelector(".delete-log-trigger")?.classList.replace("hidden","flex"),y.querySelector(".delete-confirm-actions")?.classList.replace("flex","hidden"))},V=(y=null)=>{h.querySelectorAll(".drawer-doc-card").forEach(A=>{A===y||A.dataset.loading==="true"||(A.setAttribute("aria-expanded","false"),A.querySelector(".drawer-doc-actions")?.classList.replace("flex","hidden"),A.querySelector(".drawer-doc-cue")?.classList.remove("hidden"))}),h.querySelectorAll(".delete-log-control").forEach(A=>{A!==y&&J(A)})},B=async(y,A)=>{const D=y.dataset.status;if(A===D){V();return}const G=y.querySelector(".drawer-doc-actions"),Y=y.querySelector(".drawer-doc-loading");y.dataset.loading="true",y.setAttribute("aria-busy","true"),G?.classList.replace("flex","hidden"),Y?.classList.replace("hidden","block");try{const H={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"},ie=await mt("docs",{gip_id:e.id,doc_name:y.dataset.name,status:H[A]||A}),X=ie.success?ie.data:{success:!1,error:ie.error};if(!X.success)throw new Error(X.error||"Failed to update document status.");window.viewBeneficiary&&await window.viewBeneficiary(e,w.currentPage),F("success","Status updated!")}catch(H){y.dataset.loading="false",y.removeAttribute("aria-busy"),Y?.classList.replace("block","hidden"),G?.classList.replace("hidden","flex"),F("error",H.message)}};h.querySelectorAll(".drawer-doc-card").forEach(y=>{const A=()=>{const D=y.getAttribute("aria-expanded")!=="true";V(D?y:null),y.setAttribute("aria-expanded",String(D)),y.querySelector(".drawer-doc-actions")?.classList.toggle("hidden",!D),y.querySelector(".drawer-doc-actions")?.classList.toggle("flex",D),y.querySelector(".drawer-doc-cue")?.classList.toggle("hidden",D)};y.addEventListener("click",D=>{D.target.closest(".doc-status-action")||A()}),y.addEventListener("keydown",D=>{D.target.closest(".doc-status-action")||(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),A())}),y.querySelectorAll(".doc-status-action").forEach(D=>{D.addEventListener("click",G=>{G.stopPropagation(),B(y,D.dataset.status)})})}),document.addEventListener("click",y=>{y.target.closest(".drawer-doc-card, .delete-log-control")||V()},{signal:v.signal});const se=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),q=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function ke(y){const D=new Date(y+"T00:00:00").getDay();return D!==0&&D!==6&&!se.has(y)}function ue(y){const A=y.getDate(),D=q[y.getMonth()],G=y.getFullYear(),Y=new Date(G,y.getMonth()+1,0).getDate();return A<=15?`${D} 1-15, ${G}`:`${D} 16-${Y}, ${G}`}const re=()=>{const y=new Date;if(!r.length)return ue(y);let A=-1,D="";const G=z=>{const W=(z||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!W)return-1;const te=q.indexOf(W[1]),de=parseInt(W[2])===1?0:1;return parseInt(W[4])*100+te*2+de};if(r.forEach(z=>{const W=z.day||z.date||"",te=G(W);te>A&&(A=te,D=W)}),A===-1)return ue(y);const Y=D.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),H=q.indexOf(Y[1]),ie=parseInt(Y[2]),X=parseInt(Y[4]);if(ie===1){const z=new Date(X,H+1,0).getDate();return`${q[H]} 16-${z}, ${X}`}else{const z=(H+1)%12,W=H===11?X+1:X;return`${q[z]} 1-15, ${W}`}},K=()=>{const y=new Date;if(!a.length)return ue(y);let A=-1,D="";const G=z=>{const W=(z||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!W)return-1;const te=q.indexOf(W[1]),de=parseInt(W[2])===1?0:1;return parseInt(W[4])*100+te*2+de};if(a.forEach(z=>{const W=G(z.period);W>A&&(A=W,D=z.period)}),A===-1)return ue(y);const Y=D.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),H=q.indexOf(Y[1]),ie=parseInt(Y[2]),X=parseInt(Y[4]);if(ie===1){const z=new Date(X,H+1,0).getDate();return`${q[H]} 16-${z}, ${X}`}else{const z=(H+1)%12,W=H===11?X+1:X;return`${q[z]} 1-15, ${W}`}},be=async(y,A)=>{P.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),P.showLoading();try{const D={gip_id:e.id};if(y==="dtr"){const H=A.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(H){const ie=q.indexOf(H[1]),X=parseInt(H[2]),z=parseInt(H[3]);let W=new Date(z,ie,X);for(;!ke(W.toISOString().split("T")[0]);)W.setDate(W.getDate()+1);D.record_date=W.toISOString().split("T")[0]}else D.record_date=new Date().toISOString().split("T")[0];D.weekday=A}y==="ar"&&(D.period=A);const G=await mt(y,D),Y=G.success?G.data:{success:!1,error:G.error};if(Y.success)window.viewBeneficiary&&await window.viewBeneficiary(e,w.currentPage),F("success","Successfully Added",1500);else{const H=Y.error||"Failed to add log.";P.fire("Error",H,"error")}}catch(D){P.fire("Error",D.message||"Failed to add log.","error")}},O=h.querySelector("#add-dtr-log-btn");O&&O.addEventListener("click",()=>be("dtr",re()));const ve=h.querySelector("#add-ar-log-btn");ve&&ve.addEventListener("click",()=>be("ar",K()));const xe=h.querySelector("#export-log-btn");xe&&xe.addEventListener("click",async()=>{const y="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",A=await P.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${y} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${y} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${y} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const D=document.querySelector('input[name="swal-export-type"]:checked');return D?D.value:null}});if(A.isConfirmed&&A.value){const D=A.value,G=new Date().getFullYear();await $t([e],D,G)}});const Le=y=>{if(!y||y.querySelector(".inline-log-editor"))return;const A=y.dataset.type,D=y.dataset.id,G=y.dataset.val||"",Y=y.dataset.status||"PENDING";let H=Y==="VERIFIED"||Y==="COMPLETED"?"VERIFIED":"PENDING";const ie=G.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/),X=ie?ie[3]+"-"+String(q.indexOf(ie[1])+1).padStart(2,"0")+"-"+String(ie[2]).padStart(2,"0"):new Date().toISOString().split("T")[0],z=document.createElement("div");z.className="inline-log-editor absolute inset-0 z-10 flex items-center gap-1 rounded-xl bg-white px-2 shadow-lg dark:bg-slate-900",z.innerHTML='<input type="text" class="inline-log-date w-[38%] min-w-0 shrink-0 rounded-lg border border-brand/40 bg-transparent px-2 py-1.5 text-xs font-black uppercase text-heading outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" value="'+X+'" aria-label="Select log date"><div class="ml-auto flex shrink-0 items-center gap-1"><button type="button" data-status="VERIFIED" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set submitted status">SUBMITTED</button><button type="button" data-status="PENDING" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set pending status">PENDING</button></div>',y.appendChild(z);const W=z.querySelector(".inline-log-date");W.title=y.querySelector("[title]")?.getAttribute("title")||"Select the submitted date";const te=window.Datepicker;te&&W&&(W._datepicker=new te(W,{format:"yyyy-mm-dd",autohide:!0,orientation:"bottom right"}));const de=()=>{z.querySelectorAll(".inline-log-status").forEach(m=>{const n=m.dataset.status===H,i=m.dataset.status==="PENDING";m.className=n?"inline-log-status cursor-pointer rounded-md "+(i?"bg-orange-600 hover:bg-orange-700":"bg-emerald-600 hover:bg-emerald-700")+" px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider text-white shadow-sm transition-colors":"inline-log-status cursor-pointer rounded-md border "+(i?"border-orange-400 text-orange-700 hover:border-orange-600 hover:bg-orange-50":"border-emerald-400 text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50")+" bg-transparent px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors dark:border-slate-600 dark:text-slate-300"})};de(),z.querySelectorAll(".inline-log-status").forEach(m=>m.addEventListener("click",async n=>{n.stopPropagation(),H=m.dataset.status,de();const i=W?.value||X,u=ue(new Date(i+"T00:00:00"));z.querySelectorAll(".inline-log-status").forEach(b=>{b.disabled=!0}),m.textContent="SAVING";try{const b={type:A,id:D,status:H};A==="dtr"?(b.record_date=i,b.weekday=u):b.period=u;const S=await Ot("api/logs.php",b),E=S.success?S.data:{success:!1,error:S.error};if(!E.success)throw new Error(E.error||"Failed to update log.");F("success","Log submitted!",1500),window.viewBeneficiary&&window.viewBeneficiary(e,w.currentPage)}catch(b){z.querySelectorAll(".inline-log-status").forEach(S=>{S.disabled=!1}),m.textContent=H==="VERIFIED"?"SUBMITTED":"PENDING",F("error",b.message)}}));const me=m=>{z.contains(m.target)||(W?._datepicker?.hide(),z.remove(),document.removeEventListener("click",me,!0))};setTimeout(()=>document.addEventListener("click",me,!0),0)};h.querySelectorAll(".edit-log-btn").forEach(y=>{y.addEventListener("click",A=>{A.target.closest(".delete-log-control")||(y.dataset.type,y.dataset.id,y.dataset.val,y.dataset.status,Le(y))})}),h.querySelectorAll(".delete-log-control").forEach(y=>{const A=y.querySelector(".delete-log-trigger"),D=y.querySelector(".delete-log-confirm"),G=y.querySelector(".delete-log-cancel");A?.addEventListener("click",Y=>{Y.stopPropagation(),V(y),y.dataset.confirming="true",y.classList.remove("w-11","opacity-0","pointer-events-none"),y.classList.add("w-22","opacity-100","pointer-events-auto"),y.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.add("!pr-24"),A.classList.replace("flex","hidden"),y.querySelector(".delete-confirm-actions")?.classList.replace("hidden","flex")}),G?.addEventListener("click",Y=>{Y.stopPropagation(),J(y)}),D?.addEventListener("click",async Y=>{if(Y.stopPropagation(),y.dataset.loading==="true")return;const H=y.dataset.id,ie=y.dataset.type;y.dataset.loading="true",D.disabled=!0,G.disabled=!0,D.querySelector(".delete-confirm-icon")?.classList.add("hidden"),D.querySelector(".delete-loading-icon")?.classList.replace("hidden","block");try{const X=await wt(`api/logs.php?type=${ie}`,{log_id:H,action:"delete"}),z=X.success?X.data:{success:!1,error:X.error};if(!z.success)throw new Error(z.error||"Failed to delete data.");F("success","Deleted"),window.viewBeneficiary&&window.viewBeneficiary(e,w.currentPage)}catch(X){y.dataset.loading="false",D.disabled=!1,G.disabled=!1,D.querySelector(".delete-loading-icon")?.classList.replace("block","hidden"),D.querySelector(".delete-confirm-icon")?.classList.remove("hidden"),J(y),F("error",X.message)}})})}).catch(c=>{})}function hr(e){const t=Ee(),o="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600",s="w-full resize-none overflow-hidden rounded-none border-0 border-b-2 border-blue-200 bg-transparent px-0 py-2 text-xl font-black leading-tight tracking-tight text-royal-blue placeholder-gray-300 outline-none focus:border-brand focus:ring-0 sm:text-2xl dark:border-slate-700 dark:text-white",a="mb-1.5 block text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";function r(w){const v=String(w||"").trim();if(!v)return{month:"",day:"",year:"",iso:""};let $=v.match(/^(\d{4})-(\d{2})-(\d{2})/);if($)return{year:$[1],month:$[2],day:$[3],iso:`${$[1]}-${$[2]}-${$[3]}`};if($=v.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/),$){const F=$[1].padStart(2,"0"),J=$[2].padStart(2,"0");return{year:$[3],month:F,day:J,iso:`${$[3]}-${F}-${J}`}}return{month:"",day:"",year:"",iso:""}}function d(w,v,$){const F=Number.parseInt(w,10),J=Number.parseInt(v,10),V=Number.parseInt($,10);if(!Number.isInteger(F)||!Number.isInteger(J)||!Number.isInteger(V)||V<1900||V>new Date().getFullYear())return"";const B=new Date(V,F,0).getDate();return F<1||F>12||J<1||J>B?"":`${String(V).padStart(4,"0")}-${String(F).padStart(2,"0")}-${String(J).padStart(2,"0")}`}function l(w){const v=r(w);if(!v.iso)return"";const $=Number.parseInt(v.year,10),F=Number.parseInt(v.month,10),J=Number.parseInt(v.day,10),V=new Date;let B=V.getFullYear()-$;return(V.getMonth()+1<F||V.getMonth()+1===F&&V.getDate()<J)&&B--,B>=0?B:""}const p=r(e.birthday),g=Array.from({length:12},(w,v)=>{const $=String(v+1).padStart(2,"0");return`<option value="${$}" ${p.month===$?"selected":""}>${$}</option>`}).join(""),f=Array.from({length:31},(w,v)=>{const $=String(v+1).padStart(2,"0");return`<option value="${$}" ${p.day===$?"selected":""}>${$}</option>`}).join("");function h(w){if(!w)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const v=String(w).toUpperCase();return v==="ONGOING"?"bg-green-100 text-green-700 border-green-200":v==="EXPIRED"?"bg-red-400 text-white border-red-400":v==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":v==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const L=`
<form id="edit-beneficiary-drawer-form" class="h-full flex flex-col pt-4 font-montserrat relative pb-20 overflow-y-auto">
    <input type="hidden" name="id" value="${e.id}">
    
    <div class="flex flex-col relative w-full border-b border-default pb-4 mb-5 pe-12">
        <textarea name="name" class="${s}" rows="1" placeholder="Beneficiary Name" required oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">${e.name||""}</textarea>
        
        <button type="button" id="close-edit-drawer-btn" class="text-gray-400 bg-transparent hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white rounded-none w-9 h-9 absolute top-0 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>

    <div class="flex flex-col gap-1 text-left w-full">
        <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ROX-ID</span>
        <input type="text" name="gip_id" value="${e.gip_id||e.id||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded-none border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="ROX-RD-ESIG-0000-0000">
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4 mb-4">
        <div class="flex flex-col gap-1 text-left overflow-hidden relative">
             <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS (STATUS)</span>
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${h(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
                 <option value="ONGOING" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="ONGOING"?"selected":""}>ONGOING</option>
                 <option value="EXPIRED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="EXPIRED"?"selected":""}>EXPIRED</option>
                 <option value="RESIGNED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="RESIGNED"?"selected":""}>RESIGNED</option>
                 <option value="ABSORBED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="ABSORBED"?"selected":""}>ABSORBED</option>
             </select>
             <div class="pointer-events-none absolute right-5 top-[28px] text-inherit">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
             </div>
        </div>

        <div class="flex flex-col gap-1 text-left relative">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
            <input type="text" name="office" id="edit-office-input" value="${e.office||""}" 
                class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full placeholder-indigo-300 dark:placeholder-indigo-700 h-[42px]"
                placeholder="e.g. DOLE Field Office">
            <div id="edit-office-suggestions-box" class="hidden absolute mt-[45px] left-0 right-0 z-[100] bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-none shadow-2xl min-w-[280px] overflow-hidden backdrop-blur-xl">
                <!-- Content injected via JS -->
            </div>
        </div>
    </div>

    <section class="mt-6 border border-slate-200 bg-slate-50/70 dark:border-slate-700 dark:bg-slate-950/40">
        <div class="border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
            <h4 class="text-sm font-black uppercase tracking-[0.14em] text-heading">Personal Profile</h4>
            <p class="mt-1 text-[0.625rem] font-medium text-slate-400">Update the beneficiary information stored in the master record.</p>
        </div>

        <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
            <label class="block">
                <span class="${a}">Contact Number</span>
                <input type="text" name="contact" value="${e.contact||""}" class="${o} font-mono" placeholder="09XX-XXX-XXXX" inputmode="tel">
            </label>

            <label class="block">
                <span class="${a}">Gender</span>
                <select name="gender" class="${o} cursor-pointer appearance-none">
                    <option value="Male" ${String(e.gender||"").toUpperCase()==="MALE"?"selected":""}>MALE</option>
                    <option value="Female" ${String(e.gender||"").toUpperCase()==="FEMALE"?"selected":""}>FEMALE</option>
                </select>
            </label>

            <label class="block sm:col-span-2">
                <span class="${a}">Complete Address</span>
                <textarea name="address" rows="3" class="${o} resize-y" placeholder="Barangay, municipality/city, province">${e.address||""}</textarea>
            </label>

            <div class="sm:col-span-2 border border-blue-200 bg-blue-50/60 p-3 dark:border-blue-900 dark:bg-blue-950/30">
                <div class="mb-3 flex items-center justify-between gap-3 border-b border-blue-200 pb-2 dark:border-blue-900">
                    <div>
                        <span class="${a} mb-0">Birthday</span>
                        <p class="mt-1 text-[0.5625rem] font-semibold text-slate-400">Select month, day, and year or use the calendar.</p>
                    </div>
                    <svg class="h-5 w-5 shrink-0 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v3m8-3v3M3 9h18M5 4h14a2 2 0 012 2v14H3V6a2 2 0 012-2z" /></svg>
                </div>
                <input type="hidden" name="birthday" id="edit-bday-input" value="${p.iso}">
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-[0.8fr_0.8fr_1.2fr_1.4fr]">
                    <label class="block">
                        <span class="${a}">Month (MM)</span>
                        <select id="edit-birth-month" class="${o} cursor-pointer appearance-none font-mono" aria-label="Birth month">
                            <option value="">MM</option>
                            ${g}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${a}">Day (DD)</span>
                        <select id="edit-birth-day" class="${o} cursor-pointer appearance-none font-mono" aria-label="Birth day">
                            <option value="">DD</option>
                            ${f}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${a}">Year (YYYY)</span>
                        <input type="text" id="edit-birth-year" value="${p.year}" class="${o} font-mono" placeholder="YYYY" inputmode="numeric" maxlength="4" aria-label="Birth year">
                    </label>
                    <label class="block">
                        <span class="${a}">Calendar</span>
                        <input type="date" id="edit-birthday-calendar" value="${p.iso}" class="${o} cursor-pointer font-mono" aria-label="Birthday calendar">
                    </label>
                </div>
                <p id="edit-birthday-error" class="mt-2 hidden border-l-4 border-red-500 bg-red-50 px-2 py-1.5 text-[0.625rem] font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300" role="alert">Enter a valid birthday using MM, DD, and YYYY.</p>
            </div>

            <label class="block">
                <span class="${a}">Age</span>
                <input type="text" name="age" id="edit-age-display" value="${l(p.iso)}" class="${o} cursor-not-allowed bg-slate-100 font-mono text-slate-500 dark:bg-slate-800" placeholder="Auto-calculated" readonly aria-readonly="true">
            </label>

            <div class="relative">
                <label for="edit-education-input" class="${a}">Educational Level / Course</label>
                <input type="text" name="education" id="edit-education-input" value="${e.education||""}" class="${o}" placeholder="Select or enter education">
                <div id="edit-education-suggestions-box" class="absolute left-0 right-0 z-[70] mt-1 hidden max-h-48 overflow-y-auto border border-slate-300 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                    ${st.map(w=>`<button type="button" class="edit-education-option w-full border-b border-slate-100 px-3 py-2 text-left text-[0.6875rem] font-bold text-slate-700 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"><span class="option-text">${w.name}</span></button>`).join("")}
                </div>
            </div>

            <label class="block">
                <span class="${a}">Designated Beneficiary</span>
                <input type="text" name="designatedBeneficiary" value="${e.designatedBeneficiary||""}" class="${o}" placeholder="Assured family member">
            </label>

            <label class="block">
                <span class="${a}">Relationship to Assured</span>
                <select name="relationshipToAssured" class="${o} cursor-pointer appearance-none uppercase">
                    <option value="">SELECT RELATIONSHIP</option>
                    ${At.map(w=>`<option value="${w}" ${String(e.relationshipToAssured||"").toUpperCase()===w.toUpperCase()?"selected":""}>${w}</option>`).join("")}
                </select>
            </label>
        </div>
    </section>

    <!-- Contract & Work Info Tab -->
    <div class="flex items-center justify-between border-b border-default pb-2 mt-8">
        <h4 class="text-sm font-bold text-heading whitespace-nowrap">Contract & Work Details</h4>
        <span id="edit-contract-duration-badge" class="text-[0.5625rem] font-bold text-royal-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 transition-all hidden"></span>
    </div>
    
    <div class="flex flex-col gap-4 text-sm mt-4 px-1">
        <div id="edit-date-range-picker" class="grid grid-cols-2 gap-3 mb-2">
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Start Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="startDate" id="edit-startDate-input" value="${e.startDateFormatted||e.startDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">End Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="endDate" id="edit-endDate-input" value="${e.endDateFormatted||e.endDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Assigned Unit</span>
            <input type="text" name="designation" id="edit-designation-input" value="${e.designation||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm" placeholder="Assigned Unit...">
            <div id="edit-designation-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-none shadow-lg max-h-40 overflow-y-auto">
                <!-- Suggestions will be injected here -->
            </div>
        </div>
        
        <div class="flex flex-col gap-2 mt-2 pb-6 relative">
            <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Replacement History</span>
            <input type="text" name="replacement" id="edit-replacement-input" value="${e.replacement||""}" autocomplete="off"
                class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm placeholder-gray-400"
                placeholder="Search GIP beneficiary to replace...">
            <div id="edit-replacement-suggestions-box" class="hidden absolute top-[60px] left-0 w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-none shadow-2xl max-h-48 overflow-y-auto z-[60]">
                <!-- Suggestions will populate here -->
            </div>
            <div id="edit-replacement-loading" class="hidden absolute right-3 top-[32px]">
                <svg class="animate-spin h-4 w-4 text-brand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </div>
        </div>
        </div>
    </div>

    <div id="edit-extension-log-container" class="transition-all duration-300 px-1">
        <!-- Absorption or Resignation details will be injected here -->
    </div>
</form>

<div class="absolute bottom-0 left-0 right-0 grid w-full grid-cols-2 gap-3 border-t border-gray-100 bg-white/95 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 z-[60]">
    <button type="button" id="edit-drawer-cancel-btn" class="order-2 h-12 rounded-none border border-transparent bg-gray-100 px-4 py-3 text-[0.625rem] font-black uppercase tracking-widest text-gray-600 transition-all hover:border-[#ce1126] hover:bg-[#ce1126] hover:text-white cursor-pointer sm:text-xs">Cancel</button>
    <button type="submit" id="edit-drawer-submit-btn" form="edit-beneficiary-drawer-form" class="order-1 flex h-12 items-center justify-center gap-2 rounded-none bg-brand px-4 py-3 text-[0.625rem] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-brand-strong hover:shadow-brand/40 cursor-pointer sm:text-xs">
        <svg id="edit-drawer-submit-icon" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        <span id="edit-drawer-submit-text">Save Changes</span>
    </button>
</div>

<style>
#edit-drawer-container::-webkit-scrollbar { width: 5px; }
#edit-drawer-container::-webkit-scrollbar-track { background: transparent; }
#edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.05); border-radius: 0; }
.dark #edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); }
.text-right-select { text-align-last: right; }
.datepicker { z-index: 99999 !important; }
.datepicker-picker {
    background-color: #ffffff !important;
    border-radius: 0 !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) !important;
}
.dark .datepicker-picker {
    background-color: #1e293b !important;
    border-color: #334155 !important;
    color: #ffffff !important;
}
.datepicker-cell, .datepicker-controls button { border-radius: 0 !important; }

/* Editable field hint icon (shown only for editable controls) */
.editable-indicator {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m16.862 3.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L9.582 16.07a4.5 4.5 0 0 1-1.897 1.13L4 18l.8-3.685a4.5 4.5 0 0 1 1.13-1.897L16.862 3.487Z' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 14px 14px;
    background-position: right 0.6rem center;
    padding-right: 2rem;
}
@keyframes pulse-highlight {
    0% { background-color: transparent; }
    50% { background-color: rgba(16, 185, 129, 0.1); }
    100% { background-color: transparent; }
}
.pulse-highlight {
    animation: pulse-highlight 1.5s ease-out;
}
</style>
    `;let c=document.getElementById("edit-drawer-container");c&&(c.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),c=document.createElement("div"),c.id="edit-drawer-container",c.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full border-l border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",c.setAttribute("tabindex","-1"),c.innerHTML=L,document.body.appendChild(c),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const w=c.querySelector('textarea[name="name"]');w&&(w.style.height="auto",w.style.height=w.scrollHeight+"px")},10);const x=c.querySelector("#edit-education-suggestions-box");x&&(x.innerHTML=st.map(w=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${w.name}</span>
            </button>
        `).join(""));const k=c.querySelector("#edit-designation-suggestions-box");k&&(k.innerHTML=Ie.map(w=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${w}</span>
            </button>
        `).join("")),Dt(async()=>{const{Drawer:w}=await import("./vendor-flowbite-BS-fTmyB.js").then(v=>v.b);return{Drawer:w}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:w})=>{const v=new w(c,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{c&&c.parentNode&&c.remove()},400)}});v.show(),window.initFlowbite&&window.initFlowbite();const $=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),v.hide()};c.querySelector("#close-edit-drawer-btn").addEventListener("click",$),c.querySelector("#edit-drawer-cancel-btn").addEventListener("click",$);const F=c.querySelector("#edit-beneficiary-drawer-form"),J=c.querySelector("#edit-bday-input"),V=c.querySelector("#edit-birth-month"),B=c.querySelector("#edit-birth-day"),se=c.querySelector("#edit-birth-year"),q=c.querySelector("#edit-birthday-calendar"),ke=c.querySelector("#edit-birthday-error"),ue=c.querySelector("#edit-age-display"),re=c.querySelector("#edit-startDate-input"),K=c.querySelector("#edit-endDate-input"),be=c.querySelector('input[name="seriesNo"]'),O=c.querySelector('input[name="gip_id"]'),ve=(n=B?.value||"")=>{if(!B)return;const i=Number.parseInt(V?.value||"",10),u=Number.parseInt(se?.value||"",10),b=Number.isInteger(i)&&i>=1&&i<=12?new Date(Number.isInteger(u)&&u>=1900?u:2e3,i,0).getDate():31,S=document.createDocumentFragment(),E=document.createElement("option");E.value="",E.textContent="DD",S.append(E);for(let R=1;R<=b;R++){const C=document.createElement("option");C.value=String(R).padStart(2,"0"),C.textContent=C.value,C.selected=C.value===String(n).padStart(2,"0"),S.append(C)}B.replaceChildren(S)},xe=(n=!1)=>{const i=!!(V?.value||B?.value||se?.value),u=i?d(V?.value,B?.value,se?.value):"";return J&&(J.value=u),q&&q.value!==u&&(q.value=u),ue&&(ue.value=u?l(u):""),ke&&ke.classList.toggle("hidden",!!u||!i||!n),{isoBirthday:u,hasBirthdayInput:i}},Le=n=>{const i=r(n);return i.iso?(V&&(V.value=i.month),se&&(se.value=i.year),ve(i.day),B&&(B.value=i.day),xe(!1),!0):!1};V&&V.addEventListener("change",()=>{ve(),xe(!1)}),B&&B.addEventListener("change",()=>xe(!1)),se&&se.addEventListener("input",()=>{se.value=se.value.replace(/\D/g,"").slice(0,4),ve(),xe(!1)}),q&&q.addEventListener("change",()=>{q.value&&Le(q.value)}),ve(p.day),xe(!1);const y=c.querySelector("#edit-drawer-remarks"),A=c.querySelector("#edit-extension-log-container"),D=()=>{if(!A)return;const n=y.value,i=Ee();if(n==="ABSORBED"){const u=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,b=u.getTimezoneOffset()*6e4,S=new Date(u.getTime()-b).toISOString().slice(0,16);A.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${i?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${i?"text-green-500":"text-[#2e7d32]"} border-b ${i?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${i?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${S}" class="w-full ${i?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${i?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${e.absorb_where||""}" class="w-full ${i?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${i?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${e.absorb_position||""}" class="w-full ${i?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${i?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${e.absorb_agency||""}" class="w-full ${i?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `}else if(n==="RESIGNED"){const u=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,b=u.getTimezoneOffset()*6e4,S=new Date(u.getTime()-b).toISOString().slice(0,16);A.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${i?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${i?"text-red-500":"text-[#ce1126]"} border-b ${i?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${i?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${S}" class="w-full ${i?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${i?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${i?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};y&&y.addEventListener("change",n=>{const i="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";y.className=`${h(n.target.value)} ${i} editable-indicator`,D(),(y.value==="ABSORBED"||y.value==="RESIGNED")&&setTimeout(()=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("pulse-highlight"),setTimeout(()=>A.classList.remove("pulse-highlight"),1500)},50)}),D();let G=!1;const Y=(n,i)=>{n.addEventListener("paste",u=>{u.preventDefault();let b=(u.clipboardData||window.clipboardData).getData("text");if(b){b=b.replace(/[-.\s]/g,"/");const S=b.split("/");if(S.length===3){const E=S[0].padStart(2,"0"),R=S[1].padStart(2,"0");let C=S[2];if(C.length===2){const _=new Date().getFullYear(),Z=Math.floor(_/100)*100;C=String(Z+parseInt(C))}else C=C.padStart(4,"0");const j=`${E}/${R}/${C}`;n.value=j;const I=new Event("input",{bubbles:!0});n.dispatchEvent(I);const N=window.__parseFormattedDate(j);if(N&&i&&(G||i(N),document.activeElement===n&&n.blur()),n._datepicker)n._datepicker.hide();else{const _=n.parentNode&&n.parentNode._datepicker;_&&typeof _.hide=="function"&&_.hide()}}}}),n.addEventListener("input",u=>{const b=u.target.value,S=window.__maskDate(b);if(b!==S&&(u.target.value=S),S.length===10){const E=window.__parseFormattedDate(S);if(E&&i)if(G||i(E),document.activeElement===n&&n.blur(),n._datepicker)n._datepicker.hide();else{const R=n.parentNode&&n.parentNode._datepicker;R&&typeof R.hide=="function"&&R.hide()}}}),n.addEventListener("changeDate",u=>{u.detail&&u.detail.date&&i&&(G||i(u.detail.date),n._datepicker&&n._datepicker.hide())})},H=()=>{const n=c.querySelector("#edit-contract-duration-badge");if(!n||!re||!K)return;const i=re.value,u=K.value,b=Xe(i,u);b.text?(n.textContent=b.text,n.classList.remove("hidden")):n.classList.add("hidden")};re&&Y(re,n=>{if(K){const u=new Date(n);u.setMonth(u.getMonth()+6),u.setDate(u.getDate()-1);const b=String(u.getMonth()+1).padStart(2,"0"),S=String(u.getDate()).padStart(2,"0"),E=u.getFullYear();K.value=`${b}/${S}/${E}`}H();const i=n.getFullYear();i>1900&&O&&be&&Promise.all([he(`api/beneficiaries.php?next_id&year=${encodeURIComponent(i)}`),he(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(i)}`)]).then(([u,b])=>{const S=u.success&&u.data?.success?u.data.nextId:null,E=b.success&&b.data?.success?b.data.nextSeries:null,R=String(O.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),C=String(be.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),j=R?Number(R[1]):null,I=C?Number(C[1]):null;S&&(j===null||j!==i)&&(O.value=S),E&&(I===null||I!==i)&&(be.value=E)}).catch(u=>{})}),K&&Y(K,()=>H()),window.Datepicker||typeof Datepicker<"u"&&Datepicker;const ie=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),X=c.querySelector("#edit-date-range-picker");if(ie&&X){const n=new ie(X,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});re&&(re._datepicker=n.datepickers[0]),K&&(K._datepicker=n.datepickers[1])}e.id&&(G=!0,he(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(n=>{if(n.success&&n.data&&n.data.beneficiary){const i=n.data.beneficiary;if(i.birthday&&Le(i.birthday),re&&i.startDate){const u=new Date(i.startDate);isNaN(u)||(re.value=i.startDateFormatted||"",re._datepicker&&re._datepicker.setDate(u))}if(K&&i.endDate){const u=new Date(i.endDate);isNaN(u)||(K.value=i.endDateFormatted||"",K._datepicker&&K._datepicker.setDate(u))}H()}setTimeout(()=>{G=!1},100)}).catch(n=>{G=!1}));const z=(n,i,u)=>{const b=c.querySelector(n),S=c.querySelector(i);if(!b||!S)return;const E=()=>S.classList.add("hidden"),R=()=>S.classList.remove("hidden");b.addEventListener("focus",R),b.addEventListener("input",()=>{const C=b.value.toLowerCase().trim();let j=0;S.querySelectorAll(u).forEach(I=>{const _=(I.querySelector(".option-text")?.textContent||I.textContent||"").toLowerCase().includes(C);I.style.display=_?"block":"none",_&&j++}),j>0?R():E()}),S.addEventListener("click",C=>{const j=C.target.closest(u);j&&(b.value=(j.querySelector(".option-text")?.textContent||j.textContent||"").trim(),E(),b.dispatchEvent(new Event("change")))}),document.addEventListener("click",C=>{!b.contains(C.target)&&!S.contains(C.target)&&E()})};z("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),z("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const n=c.querySelector("#edit-office-input"),i=c.querySelector("#edit-office-suggestions-box");if(!n||!i)return;i.classList.add("mt-[52px]");let u="OFFICES",b=null,S=[];const E={textLabel:t?"text-slate-400":"text-slate-500",borderDivide:t?"border-slate-800":"border-slate-100",courseHover:t?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:t?"text-slate-300":"text-slate-700"},R=async()=>{const j="dole_offices_cache",I=async()=>{let _=[];try{const Z=await he("api/beneficiaries.php?get_offices_advanced=1");Z.success&&Z.data?.success&&Array.isArray(Z.data.offices)&&(_=Z.data.offices)}catch{}return _.length>0&&(S=_,localStorage.setItem(j,JSON.stringify({data:_,timestamp:Date.now()}))),_},N=localStorage.getItem(j);if(N)try{const{data:_,timestamp:Z}=JSON.parse(N);return S=_,Date.now()-Z>1800*1e3&&I().then(()=>{u==="OFFICES"&&C("OFFICES",b,n.value)}),_}catch{localStorage.removeItem(j)}return S.length===0?await I():S},C=async(j="OFFICES",I=null,N="")=>{if(u=j,b=I,j==="OFFICES"){const Z=(await R()).filter(T=>T.office.toLowerCase().includes(N.toLowerCase()));i.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${E.textLabel} opacity-70 border-b ${E.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${Z.length>0?Z.map(T=>{const oe=parseInt(T.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${E.textCourseOpt} ${E.courseHover} rounded-none cursor-pointer transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${T.id}" data-name="${T.office}" data-has-locations="${oe}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-none bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-none bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${T.office}</span>
                                        </div>
                                        ${oe?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                    </div>
                                `}).join(""):`
                                <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${E.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                ${N.trim()?`
                                <div class="px-2 pb-2 flex flex-col gap-1.5">
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${E.textLabel} opacity-50 px-1">New office: "${N.trim()}"</div>
                                    <div id="add-office-location-row-edit" class="hidden gap-1.5 items-center">
                                        <input type="text" id="new-office-loc-input-edit" placeholder="Location name..." class="flex-1 min-w-0 px-2.5 py-1.5 text-[0.5625rem] font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-none outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all">
                                        <button type="button" id="confirm-office-with-loc-edit" class="shrink-0 px-2.5 py-1.5 rounded-none bg-blue-500 text-white text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
                                            Confirm
                                        </button>
                                    </div>
                                    <div class="flex gap-1.5">
                                        <button type="button" id="add-office-with-loc-btn-edit" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                            <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                            Add location
                                        </button>
                                        <button type="button" id="skip-office-loc-btn-edit" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-none bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-slate-700 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                            <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                            Skip
                                        </button>
                                    </div>
                                </div>`:""}
                            `}
                        </div>
                    `;const ae=N.trim(),Q=i.querySelector("#add-office-location-row-edit"),pe=i.querySelector("#new-office-loc-input-edit"),ee=i.querySelector("#confirm-office-with-loc-edit"),M=i.querySelector("#add-office-with-loc-btn-edit"),U=i.querySelector("#skip-office-loc-btn-edit");if(M&&Q&&M.addEventListener("click",T=>{T.stopPropagation(),Q.classList.remove("hidden"),Q.classList.add("flex"),setTimeout(()=>pe?.focus(),50)}),ee&&pe){const T=oe=>{oe.stopPropagation();const le=pe.value.trim();n.value=le?`${ae} - ${le}`:ae,i.classList.add("hidden"),n.dispatchEvent(new Event("change"))};ee.addEventListener("click",T),pe.addEventListener("keydown",oe=>{oe.key==="Enter"&&T(oe)}),pe.addEventListener("click",oe=>oe.stopPropagation())}U&&U.addEventListener("click",T=>{T.stopPropagation(),n.value=ae,i.classList.add("hidden"),n.dispatchEvent(new Event("change"))}),i.querySelectorAll(".office-code-option").forEach(T=>{T.addEventListener("click",oe=>{oe.stopPropagation(),T.dataset.hasLocations==="true"?C("LOCATIONS",{id:T.dataset.id,name:T.dataset.name}):(n.value=T.dataset.name,i.classList.add("hidden"),n.dispatchEvent(new Event("change")))})})}else{i.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${E.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-none">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-none bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${E.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-none bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${E.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${I.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-none transition-all"
                                    value="${N.includes(" - ")?N.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${E.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const _=i.querySelector("#loc-list-edit"),Z=i.querySelector("#location-search-edit"),ae=`dole_locs_cache_${I.id}`;let Q=[];const pe=localStorage.getItem(ae);if(pe)try{const{data:U,timestamp:T}=JSON.parse(pe);Q=U,Date.now()-T<3600*1e3}catch{localStorage.removeItem(ae)}const ee=async()=>{let U=[];if(fe&&Ae()){const{data:T,error:oe}=await fe.from("office_locations").select("location").eq("office_id",I.id).order("location");!oe&&T&&(U=T)}if(U.length===0)try{const T=await he(`api/beneficiaries.php?get_office_locations=1&office_id=${I.id}`);T.success&&T.data?.success&&Array.isArray(T.data.locations)&&(U=T.data.locations)}catch{}U.length>0&&(Q=U,localStorage.setItem(ae,JSON.stringify({data:U,timestamp:Date.now()})),M(Z.value))},M=(U="")=>{const T=Q.filter(le=>le.location.toLowerCase().includes(U.toLowerCase())),oe=U.trim();T.length>0?_.innerHTML=T.map(le=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${E.textCourseOpt} ${E.courseHover} rounded-none cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${le.location}">
                                    <div class="w-1 h-1 rounded-none bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${le.location}</span>
                                </div>
                            `).join(""):Q.length===0?_.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${E.textLabel} animate-pulse">Fetching...</div>`:(_.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${E.textLabel} opacity-60">No matching locations.</div>
                                ${oe?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${oe}" as location
                                    </button>
                                </div>`:""}
                            `,oe&&_.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{n.value=`${I.name} - ${oe}`,i.classList.add("hidden"),n.dispatchEvent(new Event("change"))})),_.querySelectorAll(".location-option-edit").forEach(le=>{le.addEventListener("click",()=>{n.value=`${I.name} - ${le.dataset.location}`,i.classList.add("hidden"),n.dispatchEvent(new Event("change"))})})};M(Z.value),ee(),setTimeout(()=>Z.focus(),50),Z.addEventListener("input",()=>M(Z.value)),Z.addEventListener("click",U=>U.stopPropagation()),i.querySelector("#back-to-offices-edit").addEventListener("click",U=>{U.stopPropagation(),C("OFFICES")})}};n.addEventListener("focus",()=>{i.classList.remove("hidden"),C(u,b,n.value)}),n.addEventListener("input",()=>{u==="OFFICES"&&C("OFFICES",null,n.value)}),document.addEventListener("click",j=>{!n.contains(j.target)&&!i.contains(j.target)&&i.classList.add("hidden")})})();const te=c.querySelector("#edit-replacement-input"),de=c.querySelector("#edit-replacement-suggestions-box"),me=c.querySelector("#edit-replacement-loading");let m=null;te&&de&&(te.addEventListener("input",n=>{const i=n.target.value.trim();clearTimeout(m),de.classList.add("hidden"),!(i.length<2)&&(me&&me.classList.remove("hidden"),m=setTimeout(async()=>{try{const u=await Pe(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(i)}&limit=10`);u.success&&u.data&&u.data.candidates&&u.data.candidates.length>0?(de.innerHTML=u.data.candidates.map(b=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${b.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${b.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${b.id}</span>
                                </button>
                            `).join(""),de.classList.remove("hidden")):(de.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',de.classList.remove("hidden"))}catch{}finally{me&&me.classList.add("hidden")}},400))}),de.addEventListener("click",n=>{const i=n.target.closest("button");i&&(te.value=i.dataset.name,de.classList.add("hidden"))}),document.addEventListener("click",n=>{!te.contains(n.target)&&!de.contains(n.target)&&de.classList.add("hidden")})),F.querySelectorAll("input, select, textarea").forEach(n=>{const i=(n.getAttribute("type")||"").toLowerCase(),u=!n.disabled&&!n.readOnly&&i!=="hidden";n.classList.remove("editable-indicator"),u&&n.classList.add("editable-indicator")}),F.addEventListener("submit",n=>{n.preventDefault();const i=c.querySelector("#edit-drawer-submit-btn");c.querySelector("#edit-drawer-submit-icon");const u=c.querySelector("#edit-drawer-submit-text"),b=()=>{i&&(i.disabled=!1,i.classList.remove("opacity-75","cursor-not-allowed"));const N=c.querySelector("#edit-drawer-submit-icon");N&&(N.outerHTML='<svg id="edit-drawer-submit-icon" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>'),u&&(u.textContent="Save Changes")},S=()=>{i&&(i.disabled=!0,i.classList.add("opacity-75","cursor-not-allowed"));const N=c.querySelector("#edit-drawer-submit-icon");N&&(N.outerHTML='<svg id="edit-drawer-submit-icon" class="animate-spin w-4 h-4 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'),u&&(u.textContent="Saving Changes...")},{isoBirthday:E,hasBirthdayInput:R}=xe(!0);if(R&&!E){V?.focus(),P.fire({toast:!0,position:"top-end",icon:"error",title:"Enter a valid birthday",text:"Complete the MM, DD, and YYYY fields.",showConfirmButton:!1,timer:3500});return}S();const C=N=>{const _=String(N||"").trim();if(!_)return"";const Z=_.match(/^(\d{4})-(\d{2})-(\d{2})/);if(Z)return`${Z[1]}-${Z[2]}-${Z[3]}`;const ae=window.__parseFormattedDate?.(_);if(!ae)return _;const Q=ae.getFullYear(),pe=String(ae.getMonth()+1).padStart(2,"0"),ee=String(ae.getDate()).padStart(2,"0");return`${Q}-${pe}-${ee}`},j=new FormData(F),I={};j.forEach((N,_)=>{I[_]=["birthday","startDate","endDate"].includes(_)?C(N):N}),I.birthday=E,I.id=e.id,I.gip_id=I.gip_id||e.id,window.addBeneficiaryData?(async()=>{try{await window.addBeneficiaryData(I,!0,!1)?($(),await new Promise(_=>setTimeout(_,450)),await P.fire({toast:!0,position:"bottom-end",icon:"success",title:"RECORD UPDATED",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),window.viewBeneficiary&&await window.viewBeneficiary({...I,id:e.id,gip_id:e.id},0)):b()}catch{b()}})():b()})})}let Ge=null,ht=null,xt=null;function xr(e,t,o,s){if(!Ae()||!fe||!t)return;const a=String(t);if(ht===a)return;Ge&&(fe.removeChannel(Ge),Ge=null),ht=a;const r=()=>{clearTimeout(xt),xt=setTimeout(()=>{document.getElementById("beneficiary-drawer-container")?.dataset.beneficiaryId===String(e)&&window.viewBeneficiary&&window.viewBeneficiary({...o,id:e},s)},100)},d=`beneficiary_id=eq.${t}`;Ge=fe.channel(`gip-drawer-logs-${a}`).on("postgres_changes",{event:"*",schema:"public",table:"daily_time_records",filter:d},r).on("postgres_changes",{event:"*",schema:"public",table:"accomplishment_reports",filter:d},r).on("postgres_changes",{event:"*",schema:"public",table:"beneficiary_documents",filter:d},r).on("postgres_changes",{event:"*",schema:"public",table:"absorption_logs",filter:d},r).subscribe(l=>{})}function _r(){window.showAddDataModal=Re,window.__maskDate=function(e){let t=e.replace(/\D/g,"").slice(0,8);return t.length>2&&t.length<=4?t=t.slice(0,2)+"/"+t.slice(2):t.length>4&&(t=t.slice(0,2)+"/"+t.slice(2,4)+"/"+t.slice(4)),t},window.__parseFormattedDate=function(e){if(!e)return null;const t=e.split("/");if(t.length===3){const o=parseInt(t[0])-1,s=parseInt(t[1]),a=parseInt(t[2]);if(a>1e3&&o>=0&&o<12&&s>0&&s<=31)return new Date(a,o,s)}return null},window.calculateAge=function(e){if(!e)return"";const t=e instanceof Date?e:new Date(e),o=new Date;let s=o.getFullYear()-t.getFullYear();const a=o.getMonth()-t.getMonth();return(a<0||a===0&&o.getDate()<t.getDate())&&s--,s>=0?s:0},window.calculateContractDuration=Xe,window.viewBeneficiary=async function(e,t=0){const o=e?.id||e?.gip_id||null;if(!o)return;const s=!!(e?.name&&e?.office&&e?.remarks),a=!s;let r={...e,id:o};if(a&&Ue({id:o,_isLoadingProfile:!0,_isLoadingLogs:!0},t),!s){const p=await he(`api/beneficiaries.php?id=${encodeURIComponent(o)}`);p.success&&p.data?.success&&p.data?.beneficiary&&(r={...p.data.beneficiary,...r,id:o})}const d=null,l=!1;r.arLogs=[],r.dtrLogs=[],r.docs=[],r._isLoadingProfile=!1,r._isLoadingLogs=!l,r._noAnimation=a,Ue(r,t);try{const p={success:!1,error:"Supabase browser read unavailable",data:{success:!1,logs:[]}},g=async()=>{const{data:B,error:se}=await fe.from("beneficiaries").select("beneficiary_id").eq("gip_id",o).maybeSingle();if(se||!B?.beneficiary_id)return[p,p,p,p];const q=B.beneficiary_id;xr(o,q,r,t);const[ke,ue,re,K]=await Promise.all([fe.from("accomplishment_reports").select("ar_id, period, date_submitted, status, created_at, updated_at").eq("beneficiary_id",q).order("date_submitted",{ascending:!1}),fe.from("daily_time_records").select("dtr_id, record_date, weekday, status, created_at, updated_at").eq("beneficiary_id",q).order("record_date",{ascending:!1}),fe.from("beneficiary_documents").select("doc_id, document_name, status, updated_at").eq("beneficiary_id",q).order("document_name"),fe.from("absorption_logs").select("log_id, absorption_datetime, where, position, agency").eq("beneficiary_id",q).order("absorption_datetime",{ascending:!1})]),be=(O,ve)=>({success:!O.error,data:{success:!O.error,logs:(O.data||[]).map(ve)}});return[be(ke,O=>({id:O.ar_id,period:O.period,date:O.date_submitted,status:O.status,created_at:O.created_at,updated_at:O.updated_at})),be(ue,O=>({id:O.dtr_id,date:O.record_date,day:O.weekday,period:O.record_date,status:O.status,created_at:O.created_at,updated_at:O.updated_at})),be(re,O=>({id:O.doc_id,name:O.document_name,status:O.status,updated_at:O.updated_at})),be(K,O=>({id:O.log_id,absorption_datetime:O.absorption_datetime,where:O.where,position:O.position,agency:O.agency}))]},f=()=>Promise.all([he(`api/logs.php?type=ar&gip_id=${encodeURIComponent(o)}`),he(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(o)}`),he(`api/logs.php?type=docs&gip_id=${encodeURIComponent(o)}`),he(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(o)}`)]);let h=Ae()&&fe?await g():await f();h.every(B=>B.success&&B.data?.success)||(h=await f());const[L,c,x,k]=h,w=L.success&&L.data?.success?L.data.logs:[],v=c.success&&c.data?.success?c.data.logs:[],$=x.success&&x.data?.success?x.data.logs:[],F=k.success&&k.data?.success?k.data.logs:[];if(F.length>0){const B=F[0];r.absorbDate=B.absorption_datetime,r.absorb_where=B.where||B.absorb_where,r.absorb_position=B.position||B.absorb_position,r.absorb_agency=B.agency||B.absorb_agency}const J=JSON.stringify({ar:d?.arLogs||[],dtr:d?.dtrLogs||[],docs:d?.docs||[],absorption:[]}),V=JSON.stringify({ar:w,dtr:v,docs:$,absorption:F});if(!l||J!==V){const B=document.getElementById("beneficiary-drawer-container");B&&B.dataset.beneficiaryId===String(o)&&(r.arLogs=w,r.dtrLogs=v,r.docs=$,r._isLoadingProfile=!1,r._isLoadingLogs=!1,Ue({...r,_noAnimation:!0},t))}}catch{{const g=document.getElementById("beneficiary-drawer-container");g&&g.dataset.beneficiaryId===String(o)&&(r._isLoadingProfile=!1,r._isLoadingLogs=!1,Ue({...r,_noAnimation:!0},t))}}},window.showAddDataModal=function(e){Re(e)},window.editBeneficiary=function(e){hr(e)},window.showExportConfigModal=function(e){yr(e)},window.showProfileModal=function(){vr()},window.showSearchExtraStatsModal=function(){kr()}}async function vr(){try{if(Ae()&&fe){let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=s.id)}catch{}if(!e)throw new Error("User not logged in");const{data:t,error:o}=await fe.from("users").select("*").eq("user_id",e).single();if(o)throw o;vt(t)}else{let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=`?user_id=${s.id}`)}catch{}const o=await(await fetch(`${ye()}api/profile.php${e}`)).json();if(o.success){const s=o.profile;vt(s)}else P.fire({icon:"error",title:"Error",text:o.error||"Failed to load profile"})}}catch{}}function vt(e){const t=e.profile_picture_path?`${ye()}${e.profile_picture_path}`:null,o=e.full_name?e.full_name.split(" ").map(a=>a[0]).join("").substring(0,2).toUpperCase():"US",s=`
        <div class="text-left font-montserrat p-1 overflow-visible">
            <div class="flex flex-col gap-4 border-l-4 border-royal-blue bg-gradient-to-r from-blue-50 to-white p-4 sm:flex-row sm:items-center dark:from-blue-950/40 dark:to-slate-900">
                <div class="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <div>
                    <h2 class="text-xl font-black text-heading leading-tight italic">User Profile</h2>
                    <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest">Manage your personal information</p>
                </div>
            </div>

            <form id="profile-edit-form" class="space-y-6">
                <div class="flex flex-col items-center mb-6">
                    <div class="relative group">
                        <div id="profile-avatar-preview" class="w-24 h-24 rounded-full border-4 border-royal-blue/10 overflow-hidden bg-gray-100 flex items-center justify-center text-royal-blue text-2xl font-black shadow-lg">
                            ${t?`<img src="${t}" class="w-full h-full object-cover" />`:o}
                        </div>
                        <label for="profile-pic-input" class="absolute bottom-0 right-0 w-8 h-8 bg-royal-blue text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition-transform border-2 border-white">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </label>
                        <input type="file" id="profile-pic-input" name="profile_pic" class="hidden" accept="image/*">
                    </div>
                    <p class="text-[0.5625rem] font-bold text-gray-400 uppercase mt-2 tracking-widest">Click icon to change avatar</p>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 space-y-4">
                    <div class="space-y-1">
                        <label class="text-[0.5625rem] font-black text-gray-400 uppercase tracking-widest ml-1">Username</label>
                        <div class="relative">
                            <input type="text" value="${e.username}" disabled
                                class="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-400 cursor-not-allowed">
                            <svg class="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        </div>
                    </div>

                    <div class="space-y-1">
                        <label class="text-[0.5625rem] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input type="text" id="profile-full-name" name="full_name" value="${e.full_name}" placeholder="Your full name"
                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[0.5625rem] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input type="email" id="profile-email" name="email" value="${e.email||""}" placeholder="yourname@gmail.com"
                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                    </div>
                </div>

                <div class="pt-2">
                    <button type="submit" class="w-full bg-royal-blue text-white font-black text-[0.625rem] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                        Save Profile Changes
                    </button>
                </div>
            </form>
        </div>
    `;P.fire({html:s,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const r=a.querySelector("#profile-edit-form"),d=a.querySelector("#profile-pic-input"),l=a.querySelector("#profile-avatar-preview");d.addEventListener("change",p=>{const g=p.target.files[0];if(g){const f=new FileReader;f.onload=h=>{l.innerHTML=`<img src="${h.target.result}" class="w-full h-full object-cover" />`},f.readAsDataURL(g)}}),r.addEventListener("submit",async p=>{p.preventDefault();const g=new FormData(r);try{const f=JSON.parse(localStorage.getItem("user"));f&&f.id&&g.append("user_id",f.id)}catch{}try{const h=await(await fetch(`${ye()}api/profile.php`,{method:"POST",body:g})).json();h.success?(h.profile&&(localStorage.setItem("user",JSON.stringify(h.profile)),wr(h.profile)),P.close(),P.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):P.fire({icon:"error",title:"Update Failed",text:h.error||"Something went wrong"})}catch{}})}})}function wr(e){if(!e)return;const t=e.full_name||e.name||e.username||"System User",o=e.email||(e.username?`${e.username}@dole.gov.ph`:"user@dole.gov.ph"),s=e.profile_picture_path?e.profile_picture_path.startsWith("http")?e.profile_picture_path:`${ye()}${e.profile_picture_path.replace(/^\//,"")}`:localStorage.getItem("user_avatar")||null,a=t.trim().split(" ").map(r=>r[0]).join("").substring(0,2).toUpperCase()||"US";document.querySelectorAll(".sidebar-user-name").forEach(r=>r.textContent=t),document.querySelectorAll(".sidebar-user-email").forEach(r=>r.textContent=o),document.querySelectorAll(".sidebar-user-avatar").forEach(r=>{const d=r.querySelector(".sidebar-avatar-initials"),l=r.querySelector(".sidebar-avatar-img");s?(l?(l.src=s,l.classList.remove("hidden")):r.innerHTML=`<img src="${s}" class="w-full h-full object-cover" />`,d&&d.classList.add("hidden")):d?(d.textContent=a,d.classList.remove("hidden"),l&&l.classList.add("hidden")):r.textContent=a}),localStorage.setItem("user_full_name",t),s&&localStorage.setItem("user_avatar",s)}function yr(e){const t=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",assignedUnit:"ALL",ageGroup:"ALL",dtrStatus:"ALL",arStatus:"ALL",documentStatus:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","assignedunit","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},o=`
        <div class="w-full text-left font-montserrat">
            <div class="flex flex-col gap-4 border-l-4 border-royal-blue bg-gradient-to-r from-blue-50 to-white p-4 dark:from-blue-950/40 dark:to-slate-900 sm:flex-row sm:items-center sm:p-5">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-royal-blue/10 sm:h-12 sm:w-12">
                    <svg class="h-5 w-5 text-royal-blue sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                    <h2 class="text-lg font-black leading-tight text-heading sm:text-xl">Report Generator</h2>
                    <p class="mt-1 text-[0.6875rem] font-medium leading-relaxed text-gray-500 dark:text-gray-300 sm:text-xs">Choose who and what should appear in the report. Your selections apply to preview, Excel, and print.</p>
                </div>
            </div>

            <form id="export-config-form" class="mt-4 space-y-4">
                <div class="border-y border-blue-100 bg-blue-50/60 p-3 dark:border-blue-900/60 dark:bg-blue-950/30 sm:p-4">
                    <button type="submit" class="flex min-h-10 w-full cursor-pointer items-center justify-center gap-2 bg-royal-blue px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white shadow-md transition-all hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-[0.99] sm:min-h-11 sm:text-sm dark:focus:ring-blue-900">
                        <svg class="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        Apply Configuration &amp; Update Preview
                    </button>
                </div>

                <!-- Main Filter Grid (3 columns on MD) -->
                <div class="rounded-xl border border-gray-200 bg-gray-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-royal-blue rounded-full"></span>
                        <label class="text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Global Filters</label>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Search Beneficiary</label>
                            <div class="relative group">
                                <input type="text" id="export-search" value="${t.search}" placeholder="Name or ID..." 
                                    class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-9 py-2.5 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Office Category</label>
                            <div class="relative group">
                                <select id="export-office" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-2.5 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${t.office==="ALL"?"selected":""}>ALL OFFICES</option>
                                    <!-- Options will be populated dynamically -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Sort Data By</label>
                            <div class="relative group">
                                <select id="export-sort" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-2.5 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="name" ${t.sort==="name"?"selected":""}>NAME (A-Z)</option>
                                    <option value="startdate" ${t.sort==="startdate"?"selected":""}>START DATE (NEWEST)</option>
                                    <option value="id" ${t.sort==="id"?"selected":""}>ID NUMBER</option>
                                    <option value="office" ${t.sort==="office"?"selected":""}>OFFICE NAME</option>
                                    <option value="assignedunit" ${t.sort==="assignedunit"?"selected":""}>ASSIGNED UNIT</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <!-- Office location, assigned unit, and year row -->
                    <div class="grid grid-cols-1 gap-3 mt-3 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Office Location</label>
                            <div class="relative group">
                                <select id="export-location" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-2.5 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed" ${t.office==="ALL"?"disabled":""}>
                                    <option value="ALL">ALL LOCATIONS</option>
                                    <!-- Populated when office changes -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Assigned Unit</label>
                            <div class="relative group">
                                <select id="export-assigned-unit" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-2.5 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL">ALL ASSIGNED UNITS</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Year (Start Date)</label>
                            <div class="relative group">
                                <select id="export-year" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-2.5 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${(t.year||"ALL")==="ALL"?"selected":""}>ALL YEARS</option>
                                    <!-- Populated dynamically from data -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 min-[900px]:grid-cols-4 pt-4 border-t border-gray-100/50">
                        <div class="min-[900px]:col-span-4">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Submission Status</label>
                            <div class="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                ${[["dtr","DTR STATUS",t.dtrStatus||"ALL"],["ar","AR STATUS",t.arStatus||"ALL"],["document","REQUIRED DOCUMENTS",t.documentStatus||"ALL"]].map(([s,a,r])=>'<label class="flex items-center gap-2"><span class="w-24 shrink-0 text-[0.5625rem] font-black uppercase tracking-wider text-gray-500">'+a+'</span><select id="export-'+s+'-status" class="min-h-9 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-[0.625rem] font-black uppercase text-heading dark:border-slate-600 dark:bg-slate-800"><option value="ALL" '+(r==="ALL"?"selected":"")+'>ALL</option><option value="SUBMITTED" '+(r==="SUBMITTED"?"selected":"")+'>SUBMITTED</option><option value="PENDING" '+(r==="PENDING"?"selected":"")+'>PENDING</option><option value="REJECTED" '+(r==="REJECTED"?"selected":"")+'>REJECTED</option><option value="NOT SUBMITTED" '+(r==="NOT SUBMITTED"?"selected":"")+">NOT SUBMITTED</option></select></label>").join("")}
                            </div>
                        </div>
                        <!-- Gender Filter -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Gender Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","FEMALE","MALE"].map(s=>{const a={ALL:"peer-checked:bg-blue-600",FEMALE:"peer-checked:bg-pink-600",MALE:"peer-checked:bg-indigo-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-gender" value="${s}" ${t.gender===s?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${a[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Display Section -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Report Volume Section</label>
                            <div class="flex gap-1.5">
                                ${[{id:"ALL",label:"All",color:"peer-checked:bg-emerald-600"},{id:"ACTIVE",label:"Active",color:"peer-checked:bg-green-500"},{id:"ARCHIVED",label:"Archived",color:"peer-checked:bg-red-600"}].map(s=>`
                                    <label class="min-w-0 flex-1 cursor-pointer">
                                        <input type="radio" name="export-section" value="${s.id}" ${t.section===s.id?"checked":""} class="hidden peer">
                                        <div class="min-h-9 py-2 sm:min-h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-1.5 transition-all ${s.color} peer-checked:text-white peer-checked:border-transparent shadow-sm">
                                            <span class="whitespace-nowrap text-[0.625rem] font-black uppercase tracking-tight sm:text-xs">${s.label}</span>
                                        </div>
                                    </label>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Remarks Filter -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Remarks Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(s=>{const a={ALL:"peer-checked:bg-blue-600",ONGOING:"peer-checked:bg-green-500",EXPIRED:"peer-checked:bg-red-600",RESIGNED:"peer-checked:bg-slate-600",ABSORBED:"peer-checked:bg-teal-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-remarks" value="${s}" ${t.remarks===s?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${a[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Age Filter -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Age Group Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","18-24","25-30","31-40","41+"].map(s=>{const a={ALL:"peer-checked:bg-blue-600","18-24":"peer-checked:bg-emerald-600","25-30":"peer-checked:bg-yellow-600","31-40":"peer-checked:bg-orange-600","41+":"peer-checked:bg-slate-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-age-group" value="${s}" ${t.ageGroup===s?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${a[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Prepared By (Signature)</label>
                            <input type="text" id="export-prepared" value="${t.preparedBy}" placeholder="Mary Joy Q. Nuñez" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-2.5 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Approved By (Signature)</label>
                            <input type="text" id="export-approved" value="${t.approvedBy}" placeholder="Noel B. Orias" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-2.5 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                    </div>
                </div>

                <div class="rounded-xl border border-gray-200 bg-gray-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/50 mt-4">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-golden-yellow rounded-full"></span>
                        <label class="text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Output Column Selection</label>
                    </div>

                    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                        ${["ID","Name","Age","Office","Assigned Unit","Start Date","End Date","Status","DTR Status","AR Status","Document Status"].map(s=>{const a=s.toLowerCase().replace(" ",""),r=t.columns.includes(a),d=`col-switch-${a}`;return`
                                <label for="${d}" class="flex min-h-10 sm:min-h-11 items-center gap-3 bg-white px-2.5 py-2 border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${d}" name="export-column" value="${a}" ${r?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="whitespace-nowrap text-[0.625rem] font-black uppercase tracking-tight text-gray-600 group-hover:text-emerald-600 sm:text-xs">${s}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>
            </form>
        </div>
    `;P.fire({html:o,width:"min(1120px, calc(100vw - clamp(0.5rem, 2vw, 1.5rem)))",showConfirmButton:!1,showCloseButton:!0,padding:"clamp(0.75rem, 2vw, 1.5rem)",customClass:{container:"font-montserrat",popup:"max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl shadow-2xl ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:s=>{const a=s.querySelector("#export-config-form"),r=a.querySelector("#export-office"),d=a.querySelector("#export-location"),l=a.querySelector("#export-year"),p=a.querySelector("#export-assigned-unit");if(p){const f=window.getExportAssignedUnits?window.getExportAssignedUnits():Ie,h=t.assignedUnit||"ALL";p.innerHTML=`<option value="ALL" ${h==="ALL"?"selected":""}>ALL ASSIGNED UNITS</option>`+f.map(L=>`<option value="${L}" ${h===L?"selected":""}>${L}</option>`).join("")}if(l&&window.getExportYears){const f=window.getExportYears(),h=t.year||"ALL";let L=`<option value="ALL" ${h==="ALL"?"selected":""}>ALL YEARS</option>`;f.forEach(c=>{L+=`<option value="${c}" ${h===c?"selected":""}>${c}</option>`}),l.innerHTML=L}const g=async(f,h)=>{if(d){if(!f){d.disabled=!0,d.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}d.disabled=!1,d.innerHTML='<option value="ALL">Loading...</option>';try{const L=await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${f}`),c=L.success&&L.data?.success&&Array.isArray(L.data.locations)?L.data.locations:[];let x='<option value="ALL">ALL LOCATIONS</option>';c.forEach(k=>{x+=`<option value="${k.location}" ${h===k.location?"selected":""}>${k.location}</option>`}),d.innerHTML=x}catch{d.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};r&&(async()=>{let f=[];try{const k=await window.apiGet("api/beneficiaries.php?get_offices_advanced=1");k.success&&k.data?.success&&Array.isArray(k.data.offices)&&(f=k.data.offices)}catch{}const h=t.office||"ALL";let L=`<option value="ALL" ${h==="ALL"?"selected":""}>ALL OFFICES</option>`;f.forEach(k=>{L+=`<option value="${k.office}" data-id="${k.id}" ${h===k.office?"selected":""}>${k.office}</option>`}),r.innerHTML=L;const x=r.options[r.selectedIndex]?.dataset?.id;x&&h!=="ALL"&&await g(x,t.location||"ALL"),r.addEventListener("change",async()=>{const k=r.options[r.selectedIndex];await g(k?.dataset?.id,"ALL")})})(),a.addEventListener("submit",f=>{f.preventDefault();const h=a.querySelectorAll('input[name="export-column"]:checked'),L=Array.from(h).map(J=>J.value),c=a.querySelector('input[name="export-gender"]:checked'),x=a.querySelector('input[name="export-section"]:checked'),k=a.querySelector('input[name="export-remarks"]:checked'),w=a.querySelector('input[name="export-age-group"]:checked'),v=a.querySelector("#export-prepared").value.trim(),$=a.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",v),localStorage.setItem("ldn_export_approved",$);const F={office:a.querySelector("#export-office").value,location:a.querySelector("#export-location")?.value||"ALL",year:a.querySelector("#export-year")?.value||"ALL",gender:c?c.value:t.gender||"ALL",assignedUnit:a.querySelector("#export-assigned-unit")?.value||"ALL",remarks:k?k.value:t.remarks||"ALL",ageGroup:w?w.value:t.ageGroup||"ALL",dtrStatus:a.querySelector("#export-dtr-status")?.value||"ALL",arStatus:a.querySelector("#export-ar-status")?.value||"ALL",documentStatus:a.querySelector("#export-document-status")?.value||"ALL",search:a.querySelector("#export-search").value.trim().toLowerCase(),sort:a.querySelector("#export-sort").value,section:x?x.value:"ALL",preparedBy:v,approvedBy:$,columns:L};e(F),P.close(),setTimeout(()=>{P.fire({toast:!0,position:"top-end",icon:"success",title:"Report configuration applied",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const st=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],At=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","HUSBAND","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function Re(e=null){const t=!!e&&!e._isBulk,o=t?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",s=t?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",a=Ee(),r={borderBase:a?"border-slate-800":"border-gray-100/80",borderCard:a?"border-slate-800":"border-gray-100",borderInput:a?"border-slate-700":"border-gray-200",borderSugg:a?"border-slate-700":"border-gray-200",borderDivide:a?"divide-slate-700":"divide-gray-50",borderSuggHead:a?"border-slate-700":"border-gray-100",borderStatus:a?"border-slate-700":"border-gray-100",bgCard:a?"bg-slate-900/40":"bg-gray-50/40",bgInput:a?"bg-slate-900":"bg-white",bgSugg:a?"bg-slate-800":"bg-white",bgStatusWrap:a?"bg-slate-800/50":"bg-gray-50",bgSaveBtn:a?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:a?"bg-red-900/20":"bg-[#fef2f2]",textHeading:a?"text-green-500":"text-[#2e7d32]",textSubtitle:a?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:a?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:a?"text-slate-400":"text-gray-500",textInput:a?"text-white":"text-slate-900",textAge:a?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:a?"text-slate-500":"text-slate-400",textWorkOpt:a?"text-slate-300":"text-slate-600",textCourseOpt:a?"text-slate-300":"text-gray-600",textCancel:a?"text-red-400":"text-red-700",focusGreen:a?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:a?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:a?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:a?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:a?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:a?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:a?"bg-green-900/20":"bg-white",iconText:a?"text-green-400":"text-[#2e7d32]",iconBorder:a?"border-green-800/30":"border-[#c8e6c9]",dotGreen:a?"bg-green-500":"bg-[#2e7d32]",dotBlue:a?"bg-blue-500":"bg-royal-blue",idText:a?"text-white":"text-royal-blue",placeholder:a?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:a?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:a?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:a?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:a?"text-blue-400":"text-royal-blue",iconColor:a?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:a?"border-red-900/30":"border-[#fee2e2]",saveShadow:a?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:a?"border-slate-700":"border-gray-100/80"},d=`
        <style>
            .datepicker { z-index: 99999 !important; }
            .datepicker-picker { 
                background-color: ${a?"#1e293b":"#ffffff"} !important; 
                border: 1px solid ${a?"#334155":"#e2e8f0"} !important;
                color: ${a?"#f8fafc":"#1e293b"} !important;
                border-radius: 0.75rem !important;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
            }
            .datepicker-header .datepicker-title, .datepicker-header .datepicker-controls .button { 
                color: ${a?"#f8fafc":"#1e293b"} !important;
            }
            .datepicker-cell.selected { background-color: #008148 !important; color: #fff !important; }
            .datepicker-cell:hover { background-color: ${a?"#334155":"#f1f5f9"} !important; }
            .datepicker-controls .button:hover { background-color: ${a?"#334155":"#f1f5f9"} !important; }
        </style>
        <div class="text-left font-montserrat user-select-none relative p-0 max-w-full overflow-x-hidden">
            <!-- Modal Header -->
            <div class="mb-3 pb-3 border-b ${r.borderBase} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h3 class="text-xl font-black ${r.textHeading} flex items-center gap-2.5">
                        <div class="p-2 ${r.iconBg} rounded-lg ${r.iconText} border ${r.iconBorder} shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${o}" /></svg>
                        </div>
                        ${s}
                    </h3>
                    <p class="text-[0.625rem] ${r.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Enter the details of the GIP beneficiary below.</p>
                </div>
                ${!t&&!e?._isBulk?`
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3.5 py-2 ${r.bgCard} border ${r.borderCard} rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 w-full sm:w-auto focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[0.625rem] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                `:""}
            </div>
            <div class="mb-4 pb-1 border-b border-gray-200 dark:border-slate-700/80 grid grid-cols-2 gap-2 text-[0.6875rem] sm:text-xs font-black uppercase tracking-wider">
                <button type="button" id="tab-btn-general" class="py-2.5 px-2 text-royal-blue dark:text-blue-400 border-b-2 border-royal-blue dark:border-blue-400 flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black">
                    <span class="w-2 h-2 rounded-full bg-royal-blue dark:bg-blue-400 flex-shrink-0"></span>
                    <span class="truncate">GENERAL INFORMATION</span>
                </button>
                <button type="button" id="tab-btn-employee" class="py-2.5 px-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 border-b-2 border-transparent flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black">
                    <span class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0"></span>
                    <span class="truncate">EMPLOYEE INFORMATION</span>
                </button>
            </div>

            <form id="add-beneficiary-form" class="space-y-5" autocomplete="off" data-is-edit="${t}">
                <!-- TAB 1: GENERAL INFORMATION (Personal & Educational Information) -->
                <div id="tab-content-general" class="space-y-4">
                    <div class="flex items-center gap-2 mb-2 px-1">
                        <div class="w-1.5 h-5 ${r.dotGreen} rounded-full"></div>
                        <p class="text-[0.6875rem] uppercase font-black ${r.textSectionTitle} tracking-widest dark:text-white!">Personal & Educational Information</p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="group">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Full Name (Last, First, MI) <span class="text-red-500">*</span></label>
                            <input type="text" name="name" id="name-input-field" autocomplete="off" value="${e?.name||""}" required class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder} dark:text-white!" placeholder="e.g. Dela Cruz, Juan M.">
                            <div id="duplicate-warning" class="hidden mt-1.5 text-[0.6875rem] font-bold items-center gap-1.5 animate-pulse">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Beneficiary already exist</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Contact No.</label>
                                <input type="text" name="contact" autocomplete="off" value="${e?.contact||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder} font-mono" placeholder="09XX-XXX-XXXX">
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Address</label>
                                <input type="text" name="address" autocomplete="off" value="${e?.address||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" placeholder="Barangay, City">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Birthday</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="birthday" autocomplete="off" value="${e?.birthday||""}" id="birthday-input" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Age</label>
                                <input type="text" name="age" autocomplete="off" value="${e?.age||""}" id="age-display" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-black ${r.textAge} outline-none font-mono focus:ring-4 ${r.focusGreen}" placeholder="Auto/Manual">
                                <div id="age-warning" class="hidden mt-1.5 text-[0.6875rem] font-bold items-center gap-1.5 animate-pulse">
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Age must be between 18 and 29 years old</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Gender</label>
                                <select name="gender" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="Male" ${e?.gender==="Male"?"selected":""}>Male</option>
                                    <option value="Female" ${e?.gender==="Female"?"selected":""}>Female</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Education</label>
                                <div class="relative" id="education-container">
                                    <input type="text" name="education" id="education-input" autocomplete="off"
                                        value="${e?.education||""}" 
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 pl-10 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="Course/Level...">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                    </div>
                                    <div id="course-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-48 overflow-y-auto font-montserrat ${r.borderDivide} p-1.5">
                                        ${st.map(l=>`
                                            <div class="course-option px-3 py-2 text-[0.6875rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${l.icon}
                                                <span class="option-text">${l.name}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t ${a?"border-slate-800/70":"border-gray-100"}">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" autocomplete="off" value="${e?.designatedBeneficiary||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${At.map(l=>`
                                        <option value="${l}" ${e?.relationshipToAssured===l?"selected":""}>${l}</option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: EMPLOYEE INFORMATION (Work, Contract, Status & History) -->
                <div id="tab-content-employee" class="space-y-4 hidden">
                    <div class="flex items-center gap-2 mb-2 px-1">
                        <div class="w-1.5 h-5 ${r.dotBlue} rounded-full"></div>
                        <p class="text-[0.6875rem] uppercase font-black ${r.textSectionTitle} tracking-widest">Work & Administrative Data</p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="group">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfBlue}">ID Number</label>
                            <input type="text" name="gip_id" id="full-id-input" autocomplete="off"
                                value="${e?.id||""}" 
                                class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.75rem] font-black ${r.idText} font-mono outline-none focus:ring-4 ${r.focusBlue} transition-all uppercase cursor-text" 
                                placeholder="ROX-RD-ESIG-2025-0001">
                            <input type="hidden" name="id" value="${e?.id||""}">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfBlue}">Assigned Office</label>
                                <div class="relative" id="office-container">
                                    <input type="text" name="office" id="office-input" autocomplete="off"
                                        value="${e?.office||""}" 
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="e.g. DOLE Field Office">
                                    <div class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                    <div id="office-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-48 overflow-y-auto font-montserrat ${r.borderDivide} p-1.5">
                                        <!-- Will be populated by JS -->
                                        <div class="px-3 py-4 text-center text-[0.625rem] font-bold ${r.textLabel} animate-pulse">Loading offices...</div>
                                    </div>
                                </div>
                            </div>

                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 tracking-widest ${a?"":"transition-colors"} ${a?"":"group-focus-within:text-royal-blue"}">Assigned Unit</label>
                                <div class="relative" id="work-container">
                                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <svg class="w-3.5 h-3.5 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    </div>
                                    <input type="text" name="designation" id="designation-input" autocomplete="off"
                                        value="${e?.designation||"N/A"}"
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="N/A">
                                    <div id="work-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-56 overflow-y-auto font-montserrat ${r.borderDivide} p-2 transform origin-top transition-all duration-200">
                                        <div class="px-2 py-1.5 mb-1.5 border-b ${r.borderSuggHead}">
                                            <p class="text-[0.5625rem] font-black ${r.textWorkSuggHead} uppercase tracking-widest">Quick Select Units</p>
                                        </div>
                                        ${Ie.map(l=>`
                                            <div class="work-option px-3 py-2.5 text-[0.6875rem] font-black ${r.textWorkOpt} ${r.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
                                                <div class="flex items-center gap-3">
                                                    <div class="w-1.5 h-1.5 rounded-full ${r.workDot} transition-colors"></div>
                                                    <span class="option-text">${l}</span>
                                                </div>
                                                <svg class="w-3 h-3 opacity-0 group-hover/opt:opacity-100 transition-opacity ${r.workArrow}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Contract Duration Block -->
                        <div class="pt-3 border-t ${a?"border-slate-800/70":"border-gray-100"}">
                            <div class="flex items-center justify-between gap-2 mb-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-1.5 h-5 bg-golden-yellow rounded-full"></div>
                                    <p class="text-[0.625rem] uppercase font-black ${r.textSectionTitle} tracking-widest">Contract Duration</p>
                                </div>
                                <span id="contract-duration-badge" class="text-[0.625rem] font-bold text-royal-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 transition-all hidden"></span>
                            </div>
                            <div id="date-range-picker" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="group">
                                    <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5">Start Date</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                        </div>
                                        <input type="text" name="startDate" autocomplete="off" id="datepicker-range-start" value="${e?.startDate||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusYellow} outline-none transition-all shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                                    </div>
                                </div>
                                <div class="group">
                                    <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5">End Date</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                        </div>
                                        <input type="text" name="endDate" autocomplete="off" id="datepicker-range-end" value="${e?.endDate||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusRed} outline-none transition-all shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group pt-2 border-t ${a?"border-slate-800/70":"border-gray-100"}">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5">Replacement History (Optional)</label>
                            <input type="hidden" name="replacement" id="replacement-hidden" value="${e?.replacement||""}">
                            <div class="relative" id="replacement-container">
                                <input type="text" id="replacement-search-input" autocomplete="off"
                                    value="${e?.replacement||""}"
                                    class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}"
                                    placeholder="Search beneficiary name...">
                                <div id="replacement-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-56 overflow-y-auto font-montserrat ${r.borderDivide} p-2"></div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-2">Employment Status Record</label>
                            <div class="flex flex-wrap gap-2 items-center">
                                <div class="flex flex-wrap gap-2 p-1.5 ${r.bgStatusWrap} border ${r.borderStatus} rounded-xl shadow-inner flex-1">
                                    ${(()=>{const l={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(p=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${p}" ${e?.remarks===p?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${l[p]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${p}
                                                </span>
                                            </label>
                                        `).join("")})()}
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" id="absorb-btn" 
                                        class="px-3.5 py-3 rounded-xl bg-[#2e7d32] text-white text-[0.625rem] font-black hover:bg-[#1b5e20] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        ABSORB
                                    </button>
                                    <button type="button" id="resign-btn" 
                                        class="px-3.5 py-3 rounded-xl bg-[#ce1126] text-white text-[0.625rem] font-black hover:bg-[#b71c1c] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        RESIGN
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="extension-log-container" class="mt-auto transition-all duration-300">
                            <!-- Absorption Log will be injected here via JS -->
                        </div>
                    </div>
                </div>

                <!-- 2-Grid Action Footer Buttons (OUTSIDE tabs: Always visible on both General and Employee tabs) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 pt-4 border-t ${r.actionBarBorder}">
                    <div class="flex items-center w-full order-2 sm:order-1">
                        <button type="button" id="cancel-modal-btn"
                            class="w-full h-11 group flex items-center justify-center gap-2 px-6 ${r.bgCancelBtn} ${r.textCancel} font-black rounded-xl hover:bg-[#ce1126] hover:text-white transition-all duration-300 shadow-sm border ${r.cancelBorder} hover:border-[#ce1126] cursor-pointer text-xs uppercase tracking-wider active:scale-[0.99] whitespace-nowrap">
                            <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                            <span>CANCEL</span>
                        </button>
                    </div>

                    <div class="flex items-center w-full order-1 sm:order-2">
                        <button type="submit" form="add-beneficiary-form" id="submit-beneficiary-btn"
                            class="w-full h-11 group flex items-center justify-center gap-2 px-6 ${r.bgSaveBtn} text-white font-black rounded-xl transition-all duration-300 shadow-lg ${r.saveShadow} cursor-pointer text-xs transform active:scale-[0.99] uppercase tracking-wider whitespace-nowrap">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                            <span>${t?"UPDATE RECORD":"SAVE RECORD"}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    `;P.fire({html:d,width:window.innerWidth<640?"100vw":"820px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"1rem":"1.5rem",customClass:{container:"font-montserrat p-0 sm:p-4",popup:"rounded-none sm:rounded-2xl ldn-modal-popup max-w-full sm:max-w-4xl w-full m-0 sm:m-auto min-h-screen sm:min-h-0"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:l=>{window.initFlowbite&&window.initFlowbite();const p=m=>{const n=l.querySelector("#tab-btn-general"),i=l.querySelector("#tab-btn-employee"),u=l.querySelector("#tab-content-general"),b=l.querySelector("#tab-content-employee"),S="py-2.5 px-2 text-royal-blue dark:text-blue-400 border-b-2 border-royal-blue dark:border-blue-400 flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black",E="py-2.5 px-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 border-b-2 border-transparent flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black";m==="general"?(u&&u.classList.remove("hidden"),b&&b.classList.add("hidden"),n&&(n.className=S),i&&(i.className=E)):m==="employee"&&(u&&u.classList.add("hidden"),b&&b.classList.remove("hidden"),n&&(n.className=E),i&&(i.className=S))},g=l.querySelector("#tab-btn-general"),f=l.querySelector("#tab-btn-employee");g&&g.addEventListener("click",()=>p("general")),f&&f.addEventListener("click",()=>p("employee"));const h=l.querySelector("#cancel-modal-btn");h&&h.addEventListener("click",()=>{!t&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),P.close(),e?._isBulk&&ze.onCancel()});const L=l.querySelector("#bulk-add-btn");L&&L.addEventListener("click",()=>{P.close(),ze.init()});const c=(m,n)=>{m.addEventListener("paste",i=>{i.preventDefault();let u=(i.clipboardData||window.clipboardData).getData("text");if(u){u=u.trim().replace(/[-.\s]/g,"/");const b=u.split("/");if(b.length===3){const S=b[0].padStart(2,"0"),E=b[1].padStart(2,"0");let R=b[2];if(R.length===2){const N=new Date().getFullYear(),_=Math.floor(N/100)*100;R=String(_+parseInt(R))}else R=R.padStart(4,"0");const C=`${S}/${E}/${R}`;m.value=C;const j=window.__parseFormattedDate(C);j&&n&&n(j);const I=m._datepicker||m.parentNode&&m.parentNode._datepicker;I&&typeof I.hide=="function"&&I.hide()}}}),m.addEventListener("input",i=>{const u=m._datepicker||m.parentNode&&m.parentNode._datepicker;u&&typeof u.hide=="function"&&u.hide();const b=window.__maskDate(i.target.value);if(i.target.value!==b&&(i.target.value=b),b.length===10){const S=window.__parseFormattedDate(b);S&&n&&n(S)}}),m.addEventListener("changeDate",i=>{if(i.detail&&i.detail.date&&n){n(i.detail.date);const u=m._datepicker||m.parentNode&&m.parentNode._datepicker;u&&typeof u.hide=="function"&&u.hide()}})},x=l.querySelector("#birthday-input"),k=l.querySelector("#age-display"),w=l.querySelector("#age-warning"),v=l.querySelector("#submit-beneficiary-btn"),$=m=>{if(!m)return w&&w.classList.add("hidden"),v&&(v.disabled=!1,v.classList.remove("opacity-50","cursor-not-allowed","grayscale"),v.classList.add("cursor-pointer")),!0;const n=parseInt(m),i=!isNaN(n)&&n>=18&&n<=29;return w&&(w.className=`mt-1 text-[0.625rem] font-bold ${i?"hidden":"flex"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`),v&&(i?(v.disabled=!1,v.classList.remove("opacity-50","cursor-not-allowed","grayscale"),v.classList.add("cursor-pointer","active:scale-[0.98]")):(v.disabled=!0,v.classList.add("opacity-50","cursor-not-allowed","grayscale"),v.classList.remove("cursor-pointer","active:scale-[0.98]"))),i};if(k&&(k.addEventListener("input",m=>{$(m.target.value)}),k.value&&$(k.value)),x){c(x,n=>{k&&(k.value=window.calculateAge(n),$(k.value),k.classList.add("animate-pulse"),setTimeout(()=>k.classList.remove("animate-pulse"),400))});const m=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);m&&(x._datepicker=new m(x,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const F=l.querySelector("#name-input-field"),J=l.querySelector("#duplicate-warning");if(F&&J){let m;const n=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},i=(b,S="")=>{J.className=`mt-1 text-[0.625rem] font-bold ${b?"flex":"hidden"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`;const E=J.querySelector("span");E&&(E.textContent=S?`Beneficiary already exists: ${S}`:"Beneficiary already exists")},u=async b=>{const S=n(),E=await fetch(`${ye()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...S?{"X-User-Id":String(S)}:{}},body:JSON.stringify({name:b,user_id:S,exclude_id:t?e?.id:null})});if(!E.ok)throw new Error(`Duplicate check failed (${E.status})`);return E.json()};F.addEventListener("input",b=>{const S=b.target.value.trim();if(clearTimeout(m),S.length<3){i(!1);return}m=setTimeout(async()=>{try{const E=await u(S);E.success&&E.exists?i(!0,E.match||E.name):i(!1)}catch{}},500)}),e?.name&&(i(!1),(async()=>{const b=await u(e.name);b.success&&b.exists&&i(!0,b.match||b.name)})())}const V=l.querySelector("#full-id-input"),B=l.querySelector("#series-no-input"),se=l.querySelector('input[name="startDate"]'),q=l.querySelector('input[name="endDate"]'),ke=l.querySelectorAll('input[name="remarks"]'),ue=l.querySelector("#extension-log-container"),re=async m=>{if(!m)return;const n=[V,B].filter(Boolean);n.forEach(i=>{i.classList.add("animate-pulse"),i.placeholder="Syncing..."});try{const[i,u]=await Promise.all([he(`api/beneficiaries.php?next_id&year=${encodeURIComponent(m)}`),he(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(m)}`)]),b=i.success&&i.data?.success?i.data.nextId:null,S=u.success&&u.data?.success?u.data.nextSeries:null;b&&V&&(V.value=b),S&&B&&(B.value=S)}catch{}finally{n.forEach(i=>i.classList.remove("animate-pulse"))}},K=l.querySelector("#replacement-search-input"),be=l.querySelector("#replacement-hidden"),O=l.querySelector("#replacement-suggestions"),ve=m=>{const n=(m.name||"").toUpperCase().trim(),i=m.startDateFormatted||m.startDate||"N/A",u=m.endDateFormatted||m.endDate||"N/A";return`${n} (${i.toUpperCase()} - ${u.toUpperCase()})`},xe=m=>{if(O){if(!m.length){O.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt}">No matching beneficiary found.</div>`,O.classList.remove("hidden");return}O.innerHTML=m.map(n=>{const i=ve(n);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${i.replace(/"/g,"&quot;")}">
                            ${i}
                        </button>
                    `}).join(""),O.classList.remove("hidden"),O.querySelectorAll(".replacement-option").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-replacement")||"";K&&(K.value=i),be&&(be.value=i),O.classList.add("hidden")})})}};let Le=null;const y=async(m="")=>{const n=(m||"").trim(),i=`api/beneficiaries.php?replacement_candidates=1&limit=20${n?`&q=${encodeURIComponent(n)}`:""}`,u=await he(i);u.success&&u.data?.success&&Array.isArray(u.data.candidates)&&xe(u.data.candidates)};K&&be&&O&&(K.addEventListener("focus",()=>{y(K.value||"")}),K.addEventListener("input",()=>{be.value=K.value.trim(),clearTimeout(Le),Le=setTimeout(()=>{y(K.value||"")},250)}),document.addEventListener("click",m=>{K&&O&&!K.contains(m.target)&&!O.contains(m.target)&&O.classList.add("hidden")}));const A=()=>{const m=l.querySelector('input[name="remarks"]:checked');return m?m.value:"ONGOING"},D=m=>{const n=l.querySelector(`input[name="remarks"][value="${m}"]`);n&&(n.checked=!0,Y())},G=()=>{if(q&&q.value){const m=window.__parseFormattedDate(q.value);if(!m)return;const n=new Date;n.setHours(0,0,0,0);let i="ONGOING";m<n&&(i="EXPIRED"),D(i)}},Y=()=>{if(!ue)return;const m=A();if(m==="ABSORBED"){const n=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,i=n.getTimezoneOffset()*6e4,u=new Date(n.getTime()-i).toISOString().slice(0,16);ue.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${a?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${a?"text-green-500":"text-[#2e7d32]"} border-b ${a?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${u}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Where?</label>
                                    <input type="text" name="absorb_where" value="${e?.absorb_where||""}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${a?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Where to absorb?">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Position</label>
                                    <input type="text" name="absorb_position" value="${e?.absorb_position||""}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${a?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="What kind of position?">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Agency</label>
                                    <input type="text" name="absorb_agency" value="${e?.absorb_agency||""}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${a?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="On what agency?">
                                </div>
                            </div>
                        </div>
                    `}else if(m==="RESIGNED"){const n=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,i=n.getTimezoneOffset()*6e4,u=new Date(n.getTime()-i).toISOString().slice(0,16);ue.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${a?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${a?"text-red-500":"text-[#ce1126]"} border-b ${a?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${u}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${a?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ue.innerHTML=""},H=()=>{const m=l.querySelector("#contract-duration-badge");if(!m||!se||!q)return;const n=se.value,i=q.value,u=Xe(n,i);u.text?(m.textContent=u.text,m.classList.remove("hidden")):m.classList.add("hidden")};if(se){let m=null;c(se,b=>{const S=b.getFullYear();if(q){const E=new Date(b);E.setMonth(E.getMonth()+6),E.setDate(E.getDate()-1);const R=String(E.getMonth()+1).padStart(2,"0"),C=String(E.getDate()).padStart(2,"0"),j=E.getFullYear();q.value=`${R}/${C}/${j}`}G(),H(),S>1900&&S!==m&&(m=S,re(S))}),q&&c(q,()=>{G(),H()});const n=l.querySelector("#date-range-picker"),i=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),u=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(i&&n&&se&&q){const b=new i(n,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});se._datepicker=b.datepickers?.[0]||null,q._datepicker=b.datepickers?.[1]||null}else u&&(se&&(se._datepicker=new u(se,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),q&&(q._datepicker=new u(q,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!t){const b=new Date().getFullYear();re(b)}}ke.forEach(m=>m.addEventListener("change",Y));const ie=l.querySelector("#resign-btn"),X=l.querySelector("#absorb-btn");ie&&ie.addEventListener("click",()=>D("RESIGNED")),X&&X.addEventListener("click",()=>D("ABSORBED")),l.querySelectorAll('input[type="text"], textarea').forEach(m=>{["id-number-input","full-id-input"].includes(m.id)||m.addEventListener("input",()=>{const n=m.selectionStart,i=m.selectionEnd;m.value=m.value.toUpperCase(),m.setSelectionRange(n,i)})}),G(),Y(),H(),W("education-input","course-suggestions","course-option"),W("designation-input","work-suggestions","work-option"),(()=>{const m=l.querySelector("#office-input"),n=l.querySelector("#office-suggestions");if(!m||!n)return;let i="OFFICES",u=null,b=[];const S=async()=>{const R="dole_offices_cache",C=async()=>{let I=[];try{if(fe&&Ae()){const[{data:N,error:_},{data:Z}]=await Promise.all([fe.from("offices").select("*").order("office"),fe.from("office_locations").select("office_id")]);if(!_&&N?.length){const ae={};Z&&Z.forEach(Q=>{ae[Q.office_id]=(ae[Q.office_id]||0)+1}),I=N.map(Q=>({id:Q.id??Q.office_id,office:Q.office||Q.office_name||"",location_count:ae[Q.id??Q.office_id]||0})).filter(Q=>Q.office)}}}catch{}if(!I.length)try{const N=await he("api/beneficiaries.php?get_offices_advanced=1");N.success&&N.data?.success&&Array.isArray(N.data.offices)&&(I=N.data.offices)}catch{}return I.length>0&&(b=I,localStorage.setItem(R,JSON.stringify({data:I,timestamp:Date.now()}))),I},j=localStorage.getItem(R);if(j)try{const{data:I,timestamp:N}=JSON.parse(j);return b=I,Date.now()-N>300*1e3&&C().then(()=>{i==="OFFICES"&&E("OFFICES",u,m.value)}),I}catch{localStorage.removeItem(R)}return b.length===0?await C():b},E=async(R="OFFICES",C=null,j="")=>{if(i=R,u=C,R==="OFFICES"){const N=(await S()).filter(M=>M.office.toLowerCase().includes(j.toLowerCase()));n.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70 border-b ${r.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${N.length>0?N.map(M=>{const U=parseInt(M.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${M.id}" data-name="${M.office}" data-has-locations="${U}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${M.office}</span>
                                            </div>
                                            ${U?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                        </div>
                                    `}).join(""):`
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${j.trim()?`
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-50 px-1">New office: "${j.trim()}"</div>
                                        <div id="add-office-location-row-modal" class="hidden gap-1.5 items-center">
                                            <input type="text" id="new-office-loc-input-modal" placeholder="Location name..." class="flex-1 min-w-0 px-2.5 py-1.5 text-[0.5625rem] font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all">
                                            <button type="button" id="confirm-office-with-loc-modal" class="shrink-0 px-2.5 py-1.5 rounded-lg bg-blue-500 text-white text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
                                                Confirm
                                            </button>
                                        </div>
                                        <div class="flex gap-1.5">
                                            <button type="button" id="add-office-with-loc-btn-modal" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                                <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                                Add location
                                            </button>
                                            <button type="button" id="skip-office-loc-btn-modal" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-slate-700 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                                <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                                Skip
                                            </button>
                                        </div>
                                    </div>`:""}
                                `}
                            </div>
                        `;const _=j.trim(),Z=n.querySelector("#add-office-location-row-modal"),ae=n.querySelector("#new-office-loc-input-modal"),Q=n.querySelector("#confirm-office-with-loc-modal"),pe=n.querySelector("#add-office-with-loc-btn-modal"),ee=n.querySelector("#skip-office-loc-btn-modal");if(pe&&Z&&pe.addEventListener("click",M=>{M.stopPropagation(),Z.classList.remove("hidden"),Z.classList.add("flex"),setTimeout(()=>ae?.focus(),50)}),Q&&ae){const M=U=>{U.stopPropagation();const T=ae.value.trim();m.value=T?`${_} - ${T}`:_,m.dataset.locationName=T||"",n.classList.add("hidden"),m.dispatchEvent(new Event("change"))};Q.addEventListener("click",M),ae.addEventListener("keydown",U=>{U.key==="Enter"&&M(U)}),ae.addEventListener("click",U=>U.stopPropagation())}ee&&ee.addEventListener("click",M=>{M.stopPropagation(),m.value=_,m.dataset.locationName="",n.classList.add("hidden"),m.dispatchEvent(new Event("change"))}),n.querySelectorAll(".office-code-option").forEach(M=>{M.addEventListener("click",U=>{U.stopPropagation(),M.dataset.hasLocations==="true"?E("LOCATIONS",{id:M.dataset.id,name:M.dataset.name}):(m.value=M.dataset.name,m.dataset.officeId=M.dataset.id,delete m.dataset.locationName,n.classList.add("hidden"),m.dispatchEvent(new Event("change")))})})}else{n.innerHTML=`
                            <div class="flex items-center justify-between px-3 py-2 border-b ${r.borderDivide} bg-slate-50/95 dark:bg-slate-800/95 sticky top-0 backdrop-blur-sm z-10 rounded-t-xl">
                                <div class="flex items-center gap-2">
                                    <div class="p-1 rounded-md bg-green-500/10 text-green-600 dark:text-green-400">
                                        <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70">OFFICE LOCATION</div>
                                </div>
                                <button type="button" id="back-to-offices" class="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                                </button>
                            </div>
                            
                            <div class="p-2 border-b ${r.borderDivide}">
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                    </div>
                                    <input type="text" id="location-search-internal" placeholder="Search in ${C.name}..." 
                                        class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-900/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                        value="${j.includes(" - ")?j.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const I=n.querySelector("#locations-list-container"),N=n.querySelector("#location-search-internal"),_=`dole_locs_cache_${C.id}`;let Z=[];const ae=localStorage.getItem(_);if(ae)try{const{data:ee,timestamp:M}=JSON.parse(ae);Z=ee}catch{localStorage.removeItem(_)}const Q=async()=>{let ee=[];if(fe&&Ae()){const{data:M,error:U}=await fe.from("office_locations").select("location").eq("office_id",C.id).order("location");!U&&M&&(ee=M)}if(ee.length===0)try{const M=await he(`api/beneficiaries.php?get_office_locations=1&office_id=${C.id}`);M.success&&M.data?.success&&Array.isArray(M.data.locations)&&(ee=M.data.locations)}catch{}ee.length>0&&(Z=ee,localStorage.setItem(_,JSON.stringify({data:ee,timestamp:Date.now()})),pe(N.value))},pe=(ee="")=>{const M=Z.filter(T=>T.location.toLowerCase().includes(ee.toLowerCase())),U=ee.trim();M.length>0?I.innerHTML=M.map(T=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${T.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${T.location}</span>
                                    </div>
                                `).join(""):Z.length===0?I.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(I.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60">No matching locations.</div>
                                    ${U?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${U}" as location
                                        </button>
                                    </div>`:""}
                                `,U&&I.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{m.value=`${C.name} - ${U}`,m.dataset.officeId=C.id,m.dataset.locationName=U,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})),I.querySelectorAll(".location-option").forEach(T=>{T.addEventListener("click",oe=>{const le=T.dataset.location;m.value=`${C.name} - ${le}`,m.dataset.officeId=C.id,m.dataset.locationName=le,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})})};pe(N.value),Q(),setTimeout(()=>N.focus(),50),N.addEventListener("input",()=>pe(N.value)),N.addEventListener("click",ee=>ee.stopPropagation()),n.querySelector("#back-to-offices").addEventListener("click",ee=>{ee.stopPropagation(),E("OFFICES")})}};m.addEventListener("focus",()=>{n.classList.remove("hidden"),E(i,u,m.value)}),m.addEventListener("input",()=>{delete m.dataset.officeId,delete m.dataset.locationName,i="OFFICES",u=null,n.classList.remove("hidden"),E("OFFICES",null,m.value)}),document.addEventListener("click",R=>{!m.contains(R.target)&&!n.contains(R.target)&&(n.classList.add("hidden"),m.value||(i="OFFICES",u=null))})})();function W(m,n,i){const u=l.querySelector(`#${m}`),b=l.querySelector(`#${n}`);if(!u||!b)return;let S=!1;u.addEventListener("focus",()=>b.classList.remove("hidden")),document.addEventListener("click",E=>{!u.contains(E.target)&&!b.contains(E.target)&&b.classList.add("hidden")}),u.addEventListener("input",()=>{if(S){S=!1;return}const E=u.value.toLowerCase(),R=b.querySelectorAll(`.${i}`);let C=!1;R.forEach(j=>{const I=j.querySelector(".option-text");(I?I.innerText:j.innerText).toLowerCase().includes(E)?(j.style.display="block",C=!0):j.style.display="none"}),C?b.classList.remove("hidden"):b.classList.add("hidden")}),b.addEventListener("click",E=>{const R=E.target.closest(`.${i}`);if(!R)return;const C=R.querySelector(".option-text");u.value=C?C.innerText.trim():R.innerText.trim(),S=!0,b.classList.add("hidden"),u.dispatchEvent(new Event("change"))})}const te=l.querySelector("#add-beneficiary-form"),de="add_beneficiary_draft";if(!t){const m=localStorage.getItem(de);if(m)try{const n=JSON.parse(m);Object.entries(n).forEach(([i,u])=>{const b=te.elements[i];b&&b.type!=="file"&&b.type!=="hidden"&&(b.value=u)})}catch{}}te.addEventListener("input",m=>{if(!t){const n=new FormData(te),i={};n.forEach((u,b)=>i[b]=u),localStorage.setItem(de,JSON.stringify(i))}});let me=!1;te&&te.addEventListener("submit",async m=>{if(m.preventDefault(),me)return;te.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(oe=>{oe.classList.remove("ring-2","ring-red-500","!border-red-500")});const i=new FormData(te);let u=!1;const b=oe=>{const le=te.querySelector(`[name="${oe}"]`);le&&le.classList.add("ring-2","ring-red-500","!border-red-500"),u=!0},S=i.get("name"),E=i.get("contact"),R=i.get("startDate"),C=i.get("endDate"),j=(i.get("designation")||"").trim(),I=i.get("birthday"),N=(i.get("office")||"").trim(),_=i.get("remarks"),Z=(i.get("gip_id")||"").trim();(!S||S.trim()===""||/[0-9]/.test(S))&&b("name"),E&&E.trim()!==""&&/[^0-9]/.test(E.replace(/[\s\-\+\(\)]/g,""))&&b("contact"),(!I||!window.__parseFormattedDate(I))&&b("birthday"),(!R||!window.__parseFormattedDate(R))&&b("startDate"),(!C||!window.__parseFormattedDate(C))&&b("endDate");const ae=window.__parseFormattedDate(R),Q=window.__parseFormattedDate(C);ae&&Q&&Q<ae&&(b("startDate"),b("endDate")),N||b("office"),_||b("remarks"),!t&&!/^ROX-RD-ESIG-\d{4}-\d{4}$/.test(Z)&&b("gip_id"),!t&&J&&!J.classList.contains("hidden")&&b("name");const pe=i.get("age"),ee=parseInt(pe);if((!pe||isNaN(ee)||ee<18||ee>29)&&(u=!0,w&&(w.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof Ee=="function"&&Ee()?"text-red-400":"text-red-600"}`),v&&(v.disabled=!0,v.classList.add("opacity-50","cursor-not-allowed","grayscale"),v.classList.remove("cursor-pointer","active:scale-[0.98]"))),u)return;const M={};i.forEach((oe,le)=>{if(["birthday","startDate","endDate"].includes(le)){const Me=window.__parseFormattedDate(oe);if(Me){const Ke=Me.getFullYear(),Qe=String(Me.getMonth()+1).padStart(2,"0"),It=String(Me.getDate()).padStart(2,"0");M[le]=`${Ke}-${Qe}-${It}`}else M[le]=oe}else M[le]=oe}),j||(M.designation="N/A"),M.replacement||(M.replacement="");const U=l.querySelector("#office-input");U?.dataset.officeId&&(M.officeId=U.dataset.officeId),U?.dataset.locationName&&(M.locationName=U.dataset.locationName);const T=l.querySelector("#full-id-input")?.value;if(t?(M.id=e?.id,T&&(M.gip_id=T)):(M.id=null,T&&(M.gip_id=T)),window.addBeneficiaryData){me=!0,v&&(v.disabled=!0,v.classList.add("opacity-50","cursor-not-allowed"));try{if(await window.addBeneficiaryData(M)){if(!t){const le="add_beneficiary_draft",Me=te.querySelector('[name="office"]')?.value||"",Ke=te.querySelector('[name="designation"]')?.value||"",Qe=te.querySelector('[name="education"]')?.value||"";localStorage.setItem(le,JSON.stringify({office:Me,designation:Ke,education:Qe}))}P.close(),setTimeout(()=>{P.fire({toast:!0,position:"bottom-end",icon:"success",title:`Record ${t?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!t&&e?._isBulk&&ze.onSaveSuccess()},100)}}finally{me=!1,v&&document.body.contains(v)&&(v.disabled=!1,v.classList.remove("opacity-50","cursor-not-allowed"))}}})}})}window.handleContactSubmit=async function(e){e.preventDefault();const t=e.target,o=t.querySelector('button[type="submit"]'),s=o.innerHTML;o.disabled=!0,o.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const a=new FormData(t);if((await fetch(t.action,{method:"POST",body:a,headers:{Accept:"application/json"}})).ok)P.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:d=>{d.addEventListener("mouseenter",P.stopTimer),d.addEventListener("mouseleave",P.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),t.reset();else throw new Error("Failed to send")}catch{P.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{o.disabled=!1,o.innerHTML=s}return!1};function kr(){P.fire({html:`
        <form class="max-w-3xl mx-auto" id="extraStatsSearchForm">   
            <div class="flex shadow-2xl rounded-2xl relative">
                <!-- Dropdown Sort Button -->
                <button id="statsSortDropdownBtn" class="shrink-0 z-[60] inline-flex items-center py-4 px-5 text-sm font-bold text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-2xl hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-gray-700 dark:text-white dark:border-slate-600 cursor-pointer transition-all" type="button">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                    <span class="hidden sm:inline" id="statsSortDropdownLabel">Sort</span>
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id="statsSortDropdown" class="absolute top-full mt-2 left-0 !z-[9999] hidden bg-white divide-y divide-gray-100 rounded-xl shadow-xl w-44 dark:bg-slate-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 uppercase font-bold tracking-widest" aria-labelledby="statsSortDropdownBtn">
                        <li><button type="button" data-sort="keyword" class="stats-sort-option inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer transition-colors">Keyword</button></li>
                        <li><button type="button" data-sort="date" class="stats-sort-option inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer transition-colors">Date</button></li>
                        <li><button type="button" data-sort="offices" class="stats-sort-option inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer transition-colors">Offices</button></li>
                        <li><button type="button" data-sort="education" class="stats-sort-option inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer transition-colors">Education</button></li>
                        <li><button type="button" data-sort="ages" class="stats-sort-option inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer transition-colors">Ages</button></li>
                    </ul>
                </div>
                
                <div class="relative w-full group flex">
                    <!-- Standard Search Input -->
                    <input type="search" id="statsSearchInput" class="block w-full p-4 pr-[90px] text-sm text-gray-900 border border-s-0 border-gray-300 rounded-e-2xl bg-white focus:ring-royal-blue focus:border-royal-blue dark:bg-slate-800 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white transition-all outline-none" placeholder="Search by name, office, status..." autocomplete="off" />
                    
                    <!-- Date Range Picker (Hidden initially) -->
                    <div id="statsDatePickerContainer" class="hidden items-center w-full bg-white dark:bg-slate-800 border border-s-0 border-gray-300 dark:border-slate-600 rounded-e-2xl p-2.5 pr-[90px]">
                        <div class="relative flex-1">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                            </div>
                            <input id="datepicker-range-start" name="start" type="date" class="block w-full ps-9 pe-2 py-1.5 bg-transparent border-0 text-sm focus:ring-0 text-gray-900 dark:text-white dark:placeholder-gray-400 outline-none cursor-pointer">
                        </div>
                        <span class="mx-2 text-gray-500 dark:text-gray-400 text-xs font-bold">TO</span>
                        <div class="relative flex-1">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                            </div>
                            <input id="datepicker-range-end" name="end" type="date" class="block w-full ps-9 pe-2 py-1.5 bg-transparent border-0 text-sm focus:ring-0 text-gray-900 dark:text-white dark:placeholder-gray-400 outline-none cursor-pointer">
                        </div>
                    </div>

                    <button type="submit" class="absolute top-0 end-0 p-4 text-sm font-medium h-full text-white bg-royal-blue rounded-e-2xl border border-royal-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer transition-all active:scale-95 flex items-center justify-center min-w-[80px] z-10">
                        <svg class="w-5 h-5 mr-0 sm:mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="uppercase font-bold tracking-widest text-xs hidden sm:inline">Search</span>
                    </button>
                </div>
            </div>
            
            <div id="statsSearchLoader" class="hidden mt-8 mb-4 text-center">
                <svg class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-royal-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest mt-2 animate-pulse">Analyzing Statistics...</p>
            </div>
            
            <div id="statsSearchResult" class="mt-8 hidden grid-cols-1 md:grid-cols-2 gap-6 text-left transition-opacity duration-300 relative z-20">
                <!-- Left Column: Chart -->
                <div class="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-4 shadow-2xl flex flex-col items-center justify-center min-h-[280px]">
                    <h3 class="text-[0.625rem] font-black text-slate-400 uppercase tracking-widest mb-1 text-center w-full border-b border-gray-100 dark:border-slate-700 pb-2">Status Distribution</h3>
                    <div id="statsModalChartContainer" class="w-full h-[220px] flex justify-center items-center mt-2"></div>
                    <div class="w-full mt-auto pt-3 border-t border-gray-100 dark:border-slate-700 text-center">
                        <p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                            <span class="text-royal-blue dark:text-blue-400">&bull;</span> Showing aggregated analytics based on your search criteria. Data is dynamically cached for optimized performance.
                        </p>
                    </div>
                </div>
                
                <!-- Right Column: Stats Layout -->
                <div class="bg-royal-blue dark:bg-blue-900 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col border border-royal-blue dark:border-blue-800">
                    <!-- Header part (Primary Color Background) -->
                    <div class="p-5 pb-12 flex justify-between items-start text-white z-0 relative">
                        <!-- Left side -->
                        <div class="flex flex-col items-start text-left">
                            <img src="../../frontend/images/logo/gip.png" alt="GIP Logo" class="w-12 h-12 object-contain mb-3 bg-transparent rounded-full" />
                            <h2 class="text-xl font-black whitespace-nowrap tracking-wider leading-tight">EXTRA STATS</h2>
                            <p class="text-xs font-normal text-blue-100 mt-1" id="statsSearchTermDisplay">Keyword: </p>
                        </div>
                        <!-- Right side -->
                        <div class="text-[0.5625rem] font-bold text-blue-200 mt-2 uppercase tracking-widest text-right whitespace-nowrap" id="statsCurrentDateTime">
                            <!-- Date/Time will be populated via JS -->
                        </div>
                    </div>
                    
                    <!-- Body part (White wavy area) -->
                    <div class="relative bg-white dark:bg-slate-800 rounded-b-2xl p-5 pt-8 flex-1 shadow-inner z-10 mt-[-24px]">
                        <!-- Wavy Top Divider -->
                        <svg class="absolute bottom-full left-0 w-full h-6 text-white dark:text-slate-800 drop-shadow-sm" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                          <path fill="currentColor" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>

                        <div class="space-y-3 font-mono text-[13px] text-body dark:text-gray-300 px-2 relative z-20" id="statsTopResults">
                            <!-- Top 3 results will be populated here via JS -->
                        </div>
                        
                        <div class="mt-8 pt-4 border-t border-dashed border-gray-300 dark:border-gray-600 text-[0.625rem] text-center text-gray-400 font-bold uppercase tracking-widest flex flex-col gap-1 relative z-20">
                            <span>End of Report</span>
                            <span class="text-[9px] opacity-50 block mt-1">Generated by 2026 GIP Monitor</span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        `,width:"800px",showConfirmButton:!1,showCloseButton:!1,backdrop:!0,position:"top",scrollbarPadding:!1,customClass:{container:"font-montserrat !backdrop-blur-md !bg-slate-900/70",popup:"!bg-transparent border-0 !shadow-none p-0 !overflow-visible mt-24",htmlContainer:"!overflow-visible",closeButton:"hidden"},didOpen:()=>{const e=document.getElementById("extraStatsSearchForm"),t=document.getElementById("statsSearchInput"),o=document.getElementById("statsDatePickerContainer"),s=document.getElementById("datepicker-range-start"),a=document.getElementById("datepicker-range-end"),r=document.getElementById("statsSortDropdownBtn"),d=document.getElementById("statsSortDropdown"),l=document.getElementById("statsSortDropdownLabel");let p="keyword";r&&d&&(r.addEventListener("click",g=>{g.stopPropagation(),d.classList.toggle("hidden")}),document.querySelectorAll(".stats-sort-option").forEach(g=>{g.addEventListener("click",f=>{const h=f.target.getAttribute("data-sort");p=h,l.textContent=f.target.textContent,d.classList.add("hidden"),h==="date"?(t.classList.add("hidden"),t.required=!1,o.classList.remove("hidden"),o.classList.add("flex"),t.value=""):(o.classList.add("hidden"),o.classList.remove("flex"),t.classList.remove("hidden"),t.required=!1,s.value="",a.value="",h==="offices"?t.placeholder="Search by Office name (e.g. Iligan)...":h==="education"?t.placeholder="Search by Education level (e.g. College)...":h==="ages"?t.placeholder="Search by Age (e.g. 24)...":t.placeholder="Search by name, office, status...")})}),document.addEventListener("click",g=>{!r.contains(g.target)&&!d.contains(g.target)&&d.classList.add("hidden")})),setTimeout(()=>t?.focus(),100),e.addEventListener("submit",async g=>{g.preventDefault();const f={mode:p,query:t.value.trim().toLowerCase(),startDate:s.value,endDate:a.value};await Sr(f)})}})}async function Sr(e){const t=document.getElementById("statsSearchLoader"),o=document.getElementById("statsSearchResult");t.classList.remove("hidden"),o.classList.add("hidden"),o.classList.remove("grid");let s=await We();if(!s||s.length===0){const a=await he("api/beneficiaries.php?all=true");a&&a.status==="success"&&a.data?(s=a.data,typeof _e=="function"&&_e(s)):a&&a.data&&(s=Array.isArray(a.data)?a.data:Array.isArray(a)?a:[],typeof _e=="function"&&_e(s))}setTimeout(()=>{const{mode:a,query:r,startDate:d,endDate:l}=e,p=s.filter(c=>{if(a==="date"){const x=c.startDate||c.createdAt;if(!x)return!1;const k=new Date(x);if(isNaN(k.getTime()))return!1;if(k.setHours(0,0,0,0),d){const w=new Date(d);if(w.setHours(0,0,0,0),k<w)return!1}if(l){const w=new Date(l);if(w.setHours(0,0,0,0),k>w)return!1}return!0}else return a==="offices"?c.office?.toLowerCase().includes(r)||!1:a==="education"?c.education?.toLowerCase().includes(r)||!1:a==="ages"?c.age==r:r?c.name?.toLowerCase().includes(r)||!1||c.id?.toLowerCase().includes(r)||!1||c.office?.toLowerCase().includes(r)||!1||c.remarks?.toLowerCase().includes(r)||!1||c.designation?.toLowerCase().includes(r)||!1:!0});let g="";a==="date"?d&&l?g=`Date: ${d} to ${l}`:d?g=`Date: From ${d}`:l?g=`Date: Until ${l}`:g="Date: All Time":g=`${a.charAt(0).toUpperCase()+a.slice(1)}: "${r||"ALL"}"`,document.getElementById("statsSearchTermDisplay").textContent=g;const f=document.getElementById("statsTopResults");f&&(f.innerHTML="",p.length>0?p.slice(0,3).forEach(x=>{const k=(x.remarks||"No Status").toUpperCase();let w="text-gray-500";k==="ONGOING"?w="text-green-500":k==="EXPIRED"?w="text-red-500":k==="ABSORBED"?w="text-emerald-600":k==="RESIGNED"?w="text-[#ce1126]":w="text-royal-blue",f.innerHTML+=`
                        <div class="flex flex-col border-b border-gray-200 dark:border-slate-700 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-100 truncate">${x.name||"Unknown Beneficiary"}</span>
                            <div class="flex justify-between items-center text-xs mt-1">
                                <span class="text-gray-500 truncate max-w-[60%]">${x.office||"N/A"}</span>
                                <span class="${w} font-bold text-[10px] uppercase tracking-wider">${k}</span>
                            </div>
                        </div>
                    `}):f.innerHTML='<div class="text-center text-gray-400 font-bold text-xs mt-6 uppercase tracking-widest">No matching records found.</div>'),p.length,p.filter(c=>(c.remarks||"").toUpperCase()==="ONGOING").length,p.filter(c=>(c.remarks||"").toUpperCase()==="EXPIRED").length,p.filter(c=>(c.remarks||"").toUpperCase()==="ABSORBED").length,p.filter(c=>(c.remarks||"").toUpperCase()==="RESIGNED").length;const h=new Date,L={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};document.getElementById("statsCurrentDateTime").textContent=h.toLocaleString("en-US",L),ar(p,"statsModalChartContainer"),t.classList.add("hidden"),o.classList.remove("hidden"),o.classList.add("grid")},400)}function Xe(e,t){if(!e||!t)return{months:0,days:0,text:""};const o=h=>{if(!h)return null;if(h instanceof Date)return isNaN(h.getTime())?null:h;const L=String(h).trim();if(!L)return null;if(L.includes("/")){const x=L.split("/");if(x.length===3){const k=parseInt(x[0],10)-1,w=parseInt(x[1],10),v=parseInt(x[2],10);if(v>1e3&&k>=0&&k<12&&w>0&&w<=31)return new Date(v,k,w)}}if(/^\d{4}-\d{2}-\d{2}/.test(L)){const x=L.split("T")[0].split("-");if(x.length===3){const k=parseInt(x[0],10),w=parseInt(x[1],10)-1,v=parseInt(x[2],10);if(k>1e3&&w>=0&&w<12&&v>0&&v<=31)return new Date(k,w,v)}}const c=new Date(L);return isNaN(c.getTime())?null:c},s=o(e),a=o(t);if(!s||!a||a<s)return{months:0,days:0,text:""};const r=1e3*60*60*24,d=Math.abs(a.getTime()-s.getTime()),l=Math.round(d/r),p=l+1;let g=(a.getFullYear()-s.getFullYear())*12+(a.getMonth()-s.getMonth());a.getDate()<s.getDate()-1&&g--,g<0&&(g=0);let f="";return g>0?f=`${g} Month${g>1?"s":""} (${p} Days)`:f=`${p} Day${p!==1?"s":""}`,{months:g,days:p,daysExact:l,text:f}}export{Ie as C,Dt as _,Pe as a,he as b,Nr as c,Br as d,Xe as e,Tr as f,ye as g,$r as h,Ae as i,Or as j,Cr as k,Ar as l,Ir as m,Je as n,_r as o,Mr as r,fe as s,wr as u};
