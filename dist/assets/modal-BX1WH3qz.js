const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-BS-fTmyB.js","./vendor-DpcThRKv.js"])))=>i.map(i=>d[i]);
import j from"./vendor-swal-DtO_vauN.js";import{a as Lt}from"./vendor-DpcThRKv.js";import{A as Je}from"./vendor-charts-C6WbJKf0.js";const $t="true".toLowerCase()==="true";function Ce(){return $t}function we(){const e=window.location.pathname,t="/dole-system/",a=e.toLowerCase().indexOf(t.toLowerCase());if(a!==-1)return e.substring(0,a+t.length);const s=e.indexOf("/frontend/");if(s!==-1)return e.substring(0,s+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function tt(e="Incorrect Username or Password"){j.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Dt(e=!1){return j.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function kr(){const e=localStorage.getItem("hasVisitedBefore"),t=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),t&&(t.style.display="none")),window.addEventListener("load",()=>{const a=document.querySelector("body > *:not(.page-loader)");a&&a.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),t&&t.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const je={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const t=o=>o.split("").map(r=>r.charCodeAt(0)),a=o=>("0"+Number(o).toString(16)).substr(-2),s=o=>t(this._key).reduce((r,l)=>r^l,o);return e.split("").map(t).map(s).map(a).join("")}catch{return null}},decrypt:function(e){try{const t=s=>s.split("").map(o=>o.charCodeAt(0)),a=s=>t(this._key).reduce((o,r)=>o^r,s);return e.match(/.{1,2}/g).map(s=>parseInt(s,16)).map(a).map(s=>String.fromCharCode(s)).join("")}catch{return null}}};function Sr(){document.querySelectorAll(".login-form-shared").forEach(t=>{const a=t.querySelector('input[name="username"]'),s=t.querySelector('input[name="password"]'),o=t.querySelector('input[name="rememberMe"]');if(a&&s&&o){const r=localStorage.getItem("secure_user"),l=localStorage.getItem("secure_pass");if(r&&l){const i=je.decrypt(r),p=je.decrypt(l);i&&p&&(a.value=i,s.value=p,o.checked=!0)}}t.addEventListener("submit",async r=>{r.preventDefault();try{const i=await(await fetch(`${we()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.value,password:s.value})})).json();if(i.success){o.checked?(localStorage.setItem("secure_user",je.encrypt(a.value)),localStorage.setItem("secure_pass",je.encrypt(s.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const p=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(i.user));const f=document.getElementById("drawer-login");if(f){f.classList.add("translate-y-full");const b=f.querySelector("[data-drawer-hide]");b&&b.click()}await Dt(p),Ct(p)}else{const p=document.getElementById("drawer-login");p?(p.classList.add("translate-y-full"),setTimeout(()=>{tt(),setTimeout(()=>{p.classList.remove("translate-y-full"),s.value="",s.focus()},600)},400)):(tt(),s.value="",s.focus())}}catch{j.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Ct(e=!1){const t=document.getElementById("left-panel"),a=document.getElementById("right-panel"),s=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");s&&(s.style.opacity="0"),o&&(o.style.opacity="0");const r=document.createElement("div");r.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const l=e?"":"animate__delay-1s",i=e?"animation-duration: 0.8s;":"animation-duration: 2s;";r.innerHTML=`
        <img src="${we()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${l}" style="${i}" alt="DOLE Logo">
    `,document.body.appendChild(r);const p=e?0:1e3,f=e?600:1500;setTimeout(()=>{t&&t.classList.add("animate-slide-left"),a&&a.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${we()}frontend/dashboard/`},f)},p)}function Er(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${we()}`})}function Lr(){const e=document.getElementById("mobile-splash"),t=document.getElementById("show-login-btn"),a=document.getElementById("back-to-splash"),s=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),r=document.getElementById("reopen-login-drawer"),l=document.getElementById("request-notifications-btn"),i=async()=>{"Notification"in window&&await Notification.requestPermission()==="granted"&&l&&l.classList.add("hidden")};Notification.permission==="default"&&l&&(l.classList.remove("hidden"),l.addEventListener("click",i));const p=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&i();const h=document.getElementById("drawer-login");h&&h.classList.remove("translate-y-full")},800))},f=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};t&&t.addEventListener("click",p),document.querySelectorAll(".forgot-password-link").forEach(h=>{h.addEventListener("click",E=>{E.target.closest("#mobile-splash")&&p()})}),a&&a.addEventListener("click",()=>{const h=document.getElementById("drawer-login");if(h){h.classList.add("translate-y-full");const E=h.querySelector("[data-drawer-hide]");E&&E.click()}f()});const m=document.getElementById("drawer-login"),$=document.getElementById("curved-welcome"),d=document.getElementById("peoples-bg");m&&new MutationObserver(E=>{E.forEach(w=>{w.attributeName==="class"&&(m.classList.contains("translate-y-full")?(s&&(s.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),$&&($.style.opacity="0",$.style.transform="scale(0.5)"),r&&e&&e.style.visibility==="hidden"&&(r.style.opacity="1",r.style.transform="scale(1)"),d&&(d.classList.add("opacity-0","scale-0"),d.classList.remove("opacity-40","scale-[1.6]"))):(s&&(s.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),$&&($.style.opacity="1",$.style.transform="scale(1)"),r&&(r.style.opacity="0",r.style.transform="scale(0)"),d&&(d.classList.remove("opacity-0","scale-0"),d.classList.add("opacity-40","scale-[1.6]"))))})}).observe(m,{attributes:!0})}const Be=()=>"false".toLowerCase()==="true";const Le={debug(...e){Be()},info(...e){Be()},warn(...e){Be()},error(...e){},table(e){Be()},json(e,t){Be()}},Pe=new Map;async function Re(e,t={}){const s=`${we()}${e}`;let o=null;try{const b=JSON.parse(localStorage.getItem("user"));b&&(o=b.user_id||b.id||null)}catch{}const r={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...t.headers},...t},i=(r.method||"GET").toUpperCase()==="GET"?2:1;let p=null;for(let b=1;b<=i;b++)try{if(Le.debug("[API] Request",{url:s,method:r.method||"GET",hasUserId:!!o}),r.body)try{Le.json("[API] Payload",JSON.parse(r.body))}catch{Le.debug("[API] Payload (raw)",r.body)}const m=await fetch(s,r);if(!m.ok)throw new Error(`HTTP ${m.status}: ${m.statusText}`);const $=await m.json();return Pe.has(s)&&(Pe.delete(s),Le.info?.("[API] Recovered",{url:s})),Le.debug("[API] Response",{url:s,ok:!0}),{success:!0,data:$}}catch(m){if(p=m,m instanceof TypeError&&/fetch/i.test(m.message||"")&&b<i){await new Promise(h=>setTimeout(h,1200));continue}}return p instanceof TypeError&&/fetch/i.test(p.message||"")?Pe.get(s)||(Pe.set(s,!0),Le.error("API Request Network Error (suppressed for repeats):",{url:s,message:p.message})):Le.error("API Request Error:",p),{success:!1,error:p?.message||"Unknown request error"}}async function fe(e){return Re(e,{method:"GET"})}async function ft(e,t){return Re(e,{method:"POST",body:JSON.stringify(t)})}async function At(e,t){return Re(e,{method:"PUT",body:JSON.stringify(t)})}async function $r(e,t){const a=new URLSearchParams(t).toString();return Re(`${e}?${a}`,{method:"PATCH"})}class It{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible})}start(t,a,s=1e4){this.stop(t),a();const o=setInterval(async()=>{this.isPageVisible&&await a()},s);this.intervals.set(t,o)}stop(t){this.intervals.has(t)&&(clearInterval(this.intervals.get(t)),this.intervals.delete(t))}stopAll(){this.intervals.forEach((t,a)=>this.stop(a))}getActivePolls(){return Array.from(this.intervals.keys())}}const Bt=new It;function Dr(){typeof window.initFlowbite=="function"&&window.initFlowbite()}function Cr(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{Bt.stopAll()});const Mt="dole-gip-db",Nt=2,ie={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let qe=null;function Ie(){return qe?Promise.resolve(qe):new Promise((e,t)=>{const a=indexedDB.open(Mt,Nt);a.onupgradeneeded=s=>{const o=s.target.result;if(!o.objectStoreNames.contains(ie.BENEFICIARIES)){const r=o.createObjectStore(ie.BENEFICIARIES,{keyPath:"id"});r.createIndex("name","name",{unique:!1}),r.createIndex("office","office",{unique:!1}),r.createIndex("remarks","remarks",{unique:!1})}o.objectStoreNames.contains(ie.SYNC_QUEUE)||o.createObjectStore(ie.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),o.objectStoreNames.contains(ie.METADATA)||o.createObjectStore(ie.METADATA,{keyPath:"key"}),o.objectStoreNames.contains(ie.APP_CACHE)||o.createObjectStore(ie.APP_CACHE,{keyPath:"key"})},a.onsuccess=s=>{qe=s.target.result,e(qe)},a.onerror=s=>{t(s.target.error)}})}async function Te(e){const t=await Ie();return new Promise((a,s)=>{const o=t.transaction(ie.BENEFICIARIES,"readwrite"),r=o.objectStore(ie.BENEFICIARIES);r.clear(),e.forEach(l=>{const i={...l,id:l.id||l.gip_id};r.put(i)}),o.oncomplete=()=>{Ot("beneficiaries_last_sync",Date.now()),a(e.length)},o.onerror=()=>s(o.error)})}async function Ve(){const e=await Ie();return new Promise((t,a)=>{const r=e.transaction(ie.BENEFICIARIES,"readonly").objectStore(ie.BENEFICIARIES).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>a(r.error)})}async function Tt(){const e=await mt("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function bt(){const e=await Ie();return new Promise((t,a)=>{const l=e.transaction(ie.SYNC_QUEUE,"readonly").objectStore(ie.SYNC_QUEUE).index("status").getAll("pending");l.onsuccess=()=>t(l.result||[]),l.onerror=()=>a(l.error)})}async function Ot(e,t){const a=await Ie();return new Promise((s,o)=>{const i=a.transaction(ie.METADATA,"readwrite").objectStore(ie.METADATA).put({key:e,value:t});i.onsuccess=()=>s(),i.onerror=()=>o(i.error)})}async function mt(e){const t=await Ie();return new Promise((a,s)=>{const l=t.transaction(ie.METADATA,"readonly").objectStore(ie.METADATA).get(e);l.onsuccess=()=>a(l.result?.value??null),l.onerror=()=>s(l.error)})}function _t(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function Rt(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch{return null}}async function jt(e,t){const a=await Ie();return new Promise((s,o)=>{const l=a.transaction(ie.APP_CACHE,"readwrite").objectStore(ie.APP_CACHE),i={key:e,data:_t(t),updated_at:Date.now()},p=l.put(i);p.onsuccess=()=>{s()},p.onerror=()=>o(p.error)})}async function Pt(e){const t=await Ie();return new Promise((a,s)=>{const l=t.transaction(ie.APP_CACHE,"readonly").objectStore(ie.APP_CACHE).get(e);l.onsuccess=()=>{l.result&&l.result.data?a(Rt(l.result.data)):a(null)},l.onerror=()=>s(l.error)})}async function qt(){const[e,t]=await Promise.all([Ve(),bt()]),a=await mt("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:a?new Date(a).toLocaleString():"Never"}}window.__doleDB={getStats:qt,getLocalBeneficiaries:Ve,getPendingSyncItems:bt,setSecureCache:jt,getSecureCache:Pt};const Ae=["Local Employment Unit (LEU)","Labor Standards Unit (LSU)","Internal Management Services Unit (IMSU)","Wellfare Workers Unit (WWU)","Labor Relation Unit (LRU)","Information Technology Unit (IT)"],ue=()=>document.documentElement.classList.contains("dark"),Xe=()=>ue()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},ye={royalBlue:()=>ue()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(ue(),"#94a3b8")},Me=()=>ue()?"#475569":"#cbd5e1";let Ne=null;function Ye(e){const a=`; ${document.cookie}`.match(new RegExp(`;\\s*${e}=([^;]+)`));return a?decodeURIComponent(a[1]):null}function Ge(e,t,a){let s=new Date;s.setTime(s.getTime()+a*24*60*60*1e3),document.cookie=`${e}=${encodeURIComponent(t)};expires=${s.toUTCString()};path=/`}let ae=Ye("user_workforce_filter")||"ALL",ht=Ye("user_workforce_label")||"Overall Stats",_e=Ye("user_gender_filter")||"ALL",xt=Ye("user_gender_label")||"All Years";function ke(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const s=new Date(`${t}T00:00:00`);return isNaN(s.getTime())?null:s}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const s=t.replace(" ","T"),o=new Date(s);return isNaN(o.getTime())?null:o}const a=new Date(t);return isNaN(a.getTime())?null:a}function vt(e){const t=Number.parseInt(e?.age,10);if(Number.isInteger(t)&&t>=0)return t;const a=ke(e?.birthday);if(!a)return null;const s=new Date;let o=s.getFullYear()-a.getFullYear();const r=s.getMonth()-a.getMonth();return(r<0||r===0&&s.getDate()<a.getDate())&&o--,o>=0?o:null}function Ft(e){const t=String(e||"").trim(),a=t.match(/\(([A-Z]{2,8})\)\s*$/i)?.[1];return a?a.toUpperCase():/information technology/i.test(t)?"IT":t.length>18?`${t.slice(0,16)}...`:t}function Ht(e){const t=String(e||"").trim().toUpperCase().split(" ").filter(Boolean).join(" ");if(!t||["N/A","NA","NONE","UNASSIGNED"].includes(t))return null;const a=Ae.find(r=>r.toUpperCase()===t);if(a)return a;const s=Ae.find(r=>{const l=r.lastIndexOf("("),i=r.lastIndexOf(")"),p=l>=0&&i>l?r.slice(l+1,i).toUpperCase():"";return p&&(t===p||t.endsWith("("+p+")"))});return s||{"INFORMATION TECHNOLOGY":"Information Technology Unit (IT)","WELFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)","WELLFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)"}[t]||null}function Ut(e,t){const a=/^\d{4}$/.test(String(t||""))?Number(t):null,s=Array.from({length:12},()=>({total:0,ages:new Map,ageGroups:{"18-24":0,"25-30":0,"31-40":0,"41+":0}}));return e.forEach(o=>{const r=ke(o.createdAt),l=vt(o);if(!r||!Number.isInteger(l)||l<18||a&&r.getFullYear()!==a)return;const i=s[r.getMonth()];i.total++,i.ages.set(l,(i.ages.get(l)||0)+1),l<=24?i.ageGroups["18-24"]++:l<=30?i.ageGroups["25-30"]++:l<=40?i.ageGroups["31-40"]++:i.ageGroups["41+"]++}),s.map((o,r)=>({month:new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2024,r,1)).toUpperCase(),totalAdded:o.total,ageGroups:o.ageGroups,exactAges:[...o.ages.entries()].sort((l,i)=>l[0]-i[0])}))}function rt(e){return e.reduce((t,a)=>{const s=ke(a.createdAt);return s?Math.max(t,s.getFullYear()):t},0)}const ot={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function We(e=!1){if(localStorage.getItem("isLoggedIn")!=="true"||!document.getElementById("workforce-chart"))return;let t=[];if(e&&(Ne=null),Ne)t=Ne;else{const[c,y]=await Promise.all([Ve(),Tt()]);if(c.length>0&&y<6e4)t=c,Ne=t;else try{const k=await fe("api/beneficiaries.php?all=true");if(k.success&&k.data?.success&&k.data?.beneficiaries)t=k.data.beneficiaries,Ne=t,Te(t).catch(()=>{});else return}catch{return}}if(t.length===0)return;Kt();const a=Xe();document.querySelectorAll('[id$="-chart"]').forEach(n=>n.innerHTML="");const s=[...new Set(t.map(n=>{const c=n.startDate||n.createdAt,y=ke(c);return y?y.getFullYear().toString():null}).filter(n=>n))].sort((n,c)=>c-n);Wt(s,t),Zt(s,t);const o=new Date;let r=t;ae!=="ALL"&&(r=t.filter(n=>{if(ae.includes("D")){const c=ke(n.createdAt);if(!c)return!1;const y=parseInt(ae),k=new Date;return k.setDate(o.getDate()-y),k.setHours(0,0,0,0),c>=k}else if(s.includes(ae)){const c=ke(n.startDate||n.createdAt);return c?c.getFullYear().toString()===ae:!1}return!0}));const l=Ze(t),i=Ze(r);Yt(l,i);let p=[];if(ae==="ALL"){const c=new Date().getFullYear();for(let y=2020;y<=c;y++)p.push(y.toString())}else if(s.includes(ae))p=["Q1","Q2","Q3","Q4"];else{const n=parseInt(ae)||7;p=Array.from({length:n},(c,y)=>{const k=new Date;return k.setDate(o.getDate()-(n-1-y)),new Date(k.getTime()-k.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const f={};p.forEach(n=>f[n]=0),r.forEach(n=>{const c=n.startDate||n.createdAt;if(c){const y=ke(c);if(!y)return;const k=y.getFullYear().toString(),D=new Date(y.getTime()-y.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(ae==="ALL")f.hasOwnProperty(k)&&f[k]++;else if(ae.includes("D"))f.hasOwnProperty(D)&&f[D]++;else if(k===ae){const N="Q"+(Math.floor(y.getMonth()/3)+1);f.hasOwnProperty(N)&&f[N]++}}});const b=Object.values(f),m=r.length,$=b[b.length-1]||0,d=b[b.length-2]||0;let h;if(ae==="ALL"){const n=m/p.length;h=$>=n}else h=$>=d;let E=h?ye.successGreen:ye.philippineRed,w=h?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",L=h?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";ae==="ALL"?(E=ye.successGreen,w="bg-green-500 shadow-green-500/30",L="text-green-600 dark:text-green-400"):ae==="7D"?(E="#fb923c",w="bg-orange-500 shadow-orange-500/30",L="text-orange-500 dark:text-orange-400"):ae==="30D"?(E="#eab308",w="bg-yellow-500 shadow-yellow-500/30",L="text-yellow-600 dark:text-yellow-400"):ae==="90D"?(E="#2563eb",w="bg-blue-600 shadow-blue-600/30",L="text-blue-600 dark:text-blue-400"):s.includes(ae)&&(E="#f87171",w="bg-red-400 shadow-red-400/30",L="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(n=>{n.textContent=m,n.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${L}`});const B=d>0?Math.round(($-d)/d*100):$>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(n=>n.textContent=(B>=0?"+":"")+(ae==="ALL"?"Growth":B+"%"));const P=document.getElementById("added-metric-badge");P&&(P.className=`flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${w}`);const Y=document.getElementById("added-metric-icon");Y&&(Y.style.transform=h?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(n=>{const c=document.getElementById(n);c&&(c.innerHTML=`${ht} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const O={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:ue()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:E,opacity:.6},{offset:100,color:E,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[E]},series:[{name:"New Beneficiaries",data:b}],xaxis:{categories:p,labels:{show:!0,style:{colors:a.muted,fontSize:"0.625rem",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:a.muted,fontSize:"0.625rem",fontWeight:600}}},grid:{show:!0,borderColor:a.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[E],markers:{size:p.length>20?0:4,colors:[E],strokeColors:a.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:ue()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};$e("workforce-chart",O);const ne=_e==="ALL"?t:t.filter(n=>{const c=ke(n.startDate||n.createdAt);return c&&c.getFullYear().toString()===_e}),X=Ze(ne),le={series:[X.genders.Female||0,X.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:[ye.philippineRed,ye.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"0.75rem",fontWeight:600,color:a.muted},value:{show:!0,fontSize:"1.5rem",fontWeight:900,color:a.text,formatter:n=>n},total:{show:!0,label:"TOTAL",fontSize:"0.625rem",fontWeight:800,color:a.muted,formatter:n=>n.globals.seriesTotals.reduce((c,y)=>c+y,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[a.cardBg],width:4},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"1.125rem"}}}}}}}]};$e("gender-chart",le);const ce=[{key:"College Grad",label:"College Graduate",count:i.education["College Grad"]||0,color:ye.royalBlue()},{key:"College Lvl",label:"College Level",count:i.education["College Lvl"]||0,color:ye.goldenYellow},{key:"HS Grad",label:"High School",count:i.education["HS Grad"]||0,color:ye.philippineRed},{key:"Senior High",label:"Senior High",count:i.education["Senior High"]||0,color:ye.successGreen}],W=ce.reduce((n,c)=>n+c.count,0),pe=[...ce].sort((n,c)=>c.count-n.count||n.label.localeCompare(c.label)),be=pe[0];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([n,c])=>{document.querySelectorAll(c).forEach(y=>{y.textContent=i.education[n]||0})});const xe=document.getElementById("education-profile-total"),me=document.getElementById("education-profile-leading");if(xe&&(xe.textContent=W),me){const n=W>0?Math.round(be.count/W*100):0;me.textContent=W>0?`${be.label} · ${n}%`:"No data",me.title=me.textContent}const Se={series:[{name:"Beneficiaries",data:pe.map(n=>({x:n.label,y:n.count,fillColor:n.color}))}],chart:{height:285,type:"bar",toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},plotOptions:{bar:{horizontal:!0,distributed:!0,barHeight:"48%",dataLabels:{position:"top"},borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,formatter:n=>Math.round(n),offsetX:12,offsetY:4,textAnchor:"start",style:{fontSize:"0.625rem",fontWeight:900,colors:[a.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.9,borderWidth:0}},xaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{colors:a.muted,fontSize:"0.5625rem",fontWeight:700}},axisBorder:{show:!1},axisTicks:{show:!1},title:{text:"TOTAL BENEFICIARIES",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},yaxis:{labels:{minWidth:118,maxWidth:180,trim:!1,style:{colors:a.text,fontSize:"0.6875rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:10,right:58,bottom:-4,left:8}},legend:{show:!1},tooltip:{theme:ue()?"dark":"light",y:{formatter:n=>{const c=W>0?Math.round(n/W*100):0;return`${n} beneficiaries (${c}% of recorded)`}}},noData:{text:"NO EDUCATION DATA",style:{color:a.muted,fontSize:"11px"}},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:285},yaxis:{labels:{minWidth:96,maxWidth:132,trim:!1,style:{fontSize:"0.625rem"}}},dataLabels:{style:{fontSize:"0.5625rem"}}}}]};$e("education-chart",Se),document.querySelectorAll(".count-absorbed").forEach(n=>n.textContent=i.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(n=>n.textContent=i.status.ONGOING||0);const x={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:i.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:i.status.ONGOING||0},{x:"Expired",y:i.status.EXPIRED||0},{x:"Resigned",y:i.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"0.75rem",fontWeight:"900",colors:[a.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a.muted,fontWeight:700}}},yaxis:{show:!0,labels:{show:!1}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:20,right:8,bottom:0,left:8}},tooltip:{theme:ue()?"dark":"light",y:{formatter:n=>n+" Beneficiaries"}},theme:{mode:ue()?"dark":"light"}};$e("status-chart",x);const M=new Map(Object.entries(l.designations).map(([n,c])=>[n.trim().toUpperCase(),c])),I=new Map(Ae.map((n,c)=>[n,c])),H=Ae.map(n=>[n,M.get(n.toUpperCase())||0]).sort((n,c)=>c[1]-n[1]||I.get(n[0])-I.get(c[0])),Z=H.map(([n])=>n),q={series:[{name:"Total GIP",data:H.map(([,n])=>n)}],chart:{type:"bar",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:[ye.royalBlue()],plotOptions:{bar:{horizontal:!1,columnWidth:"34%",borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,offsetY:-14,formatter:n=>Math.round(n),style:{fontSize:"0.625rem",fontWeight:900,colors:[a.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.86,borderWidth:0}},xaxis:{categories:Z,axisBorder:{show:!1},axisTicks:{show:!1},labels:{rotate:0,trim:!1,hideOverlappingLabels:!1,formatter:n=>Ft(n),style:{fontWeight:800,colors:a.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:a.muted,fontSize:"0.5625rem"}},title:{text:"TOTAL COUNT",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:2,right:4,bottom:-4}},legend:{show:!1},tooltip:{theme:ue()?"dark":"light",x:{formatter:(n,c)=>Z[c.dataPointIndex]||"Assigned Unit"},y:{formatter:n=>`${n} Beneficiaries`}},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:210},plotOptions:{bar:{columnWidth:"46%"}},dataLabels:{style:{fontSize:"0.5rem"}},xaxis:{labels:{style:{fontSize:"0.5rem"}}}}}]};$e("assigned-units-chart",q),Gt(H);const K=(/^\d{4}$/.test(ae)?Number(ae):0)||rt(r)||rt(t)||new Date().getFullYear(),F=Ut(r,K),g=document.getElementById("age-chart-year");g&&(g.textContent=K);const v=[{key:"18-24",label:"AGE 18–24"},{key:"25-30",label:"AGE 25–30"},{key:"31-40",label:"AGE 31–40"},{key:"41+",label:"AGE 41+"}],S={series:v.map(n=>({name:n.label,data:F.map(c=>c.ageGroups[n.key])})),chart:{type:"bar",stacked:!0,height:330,toolbar:{show:!1},zoom:{enabled:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:["#0038A8","#2563EB","#60A5FA","#93C5FD"],plotOptions:{bar:{horizontal:!1,columnWidth:"54%",borderRadius:2,borderRadiusApplication:"end",dataLabels:{total:{enabled:!0,offsetY:-8,style:{fontSize:"0.625rem",fontWeight:900,color:a.text}}}}},dataLabels:{enabled:!0,formatter:n=>n>0?Math.round(n):"",style:{fontSize:"0.5625rem",fontWeight:900,colors:["#ffffff","#ffffff","#0f172a","#0f172a"]},dropShadow:{enabled:!1}},xaxis:{categories:F.map(n=>n.month),axisBorder:{show:!0,color:a.grid},axisTicks:{show:!1},title:{text:"MONTH ADDED",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}},labels:{rotate:-40,trim:!1,hideOverlappingLabels:!1,style:{fontWeight:800,colors:a.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:a.muted,fontSize:"0.625rem"}},title:{text:"TOTAL BENEFICIARIES",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:8,right:12,bottom:4}},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"10px",fontWeight:800,labels:{colors:a.muted},markers:{size:5,shape:"square"},itemMargin:{horizontal:8,vertical:3}},tooltip:{shared:!0,intersect:!1,theme:ue()?"dark":"light",custom:({dataPointIndex:n})=>{const c=F[n],y=v.map(D=>`${D.label}: <strong>${c?.ageGroups[D.key]||0}</strong>`).join("<br>"),k=c?.exactAges?.length?c.exactAges.map(([D,N])=>`Age ${D}: ${N}`).join(" · "):"No recorded ages";return`<div class="px-3 py-2 text-xs leading-5"><strong>${c?.month||""} ${K}</strong><br>Total: <strong>${c?.totalAdded||0}</strong><br>${y}<div class="mt-1 border-t border-slate-200 pt-1 text-[10px] dark:border-slate-600">${k}</div></div>`}},noData:{text:"NO AGE DATA",align:"center",verticalAlign:"middle",style:{color:a.muted,fontSize:"11px"}},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:360},plotOptions:{bar:{columnWidth:"66%"}},dataLabels:{enabled:!1},xaxis:{labels:{rotate:-55,style:{fontSize:"0.5rem"}}},legend:{fontSize:"9px",itemMargin:{horizontal:5,vertical:2}}}}]};$e("age-chart",S);const C=zt(t);Vt(C);const u={series:[{name:"Actual Beneficiaries",data:Object.values(C.municipalityData).map(n=>n.actual)},{name:"Target Slots",data:Object.values(C.municipalityData).map(n=>n.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:a.cardBg},theme:{mode:ue()?"dark":"light"},colors:[ye.royalBlue(),ue()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(C.municipalityData),labels:{style:{fontWeight:600,colors:a.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:a.muted}}},legend:{show:!1},fill:{opacity:1},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}}};$e("performance-gap-chart",u)}function Gt(e){const t=document.getElementById("assigned-units-summary");t&&(t.innerHTML=e.map(([a,s],o)=>`
        <div class="flex min-w-0 items-center justify-between gap-3 border border-slate-100 bg-slate-50/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50">
            <div class="flex min-w-0 items-center gap-2">
                <span class="inline-flex h-5 min-w-5 shrink-0 items-center justify-center bg-royal-blue text-[0.5625rem] font-black text-white">${o+1}</span>
                <span class="break-words text-[0.625rem] font-black uppercase leading-relaxed tracking-tight text-slate-600 dark:text-slate-300" title="${a}">${a}</span>
            </div>
            <span class="inline-flex min-w-7 shrink-0 items-center justify-center bg-white px-2 py-1 text-xs font-black tabular-nums text-royal-blue shadow-sm dark:bg-slate-800 dark:text-blue-400">${s}</span>
        </div>
    `).join(""))}function $e(e,t){const a=document.getElementById(e);if(!a)return;a.innerHTML="",new Je(a,t).render()}function Ze(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},exactAges:{},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},a=new Date;return a.setHours(0,0,0,0),e.forEach(s=>{const o=s.office||"Unassigned";t.offices[o]=(t.offices[o]||0)+1;const r=(s.gender||"Unknown").trim(),l=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[l]++;const i=String(s.education||"").trim().toUpperCase().replace(/\s+/g," "),p=i.includes("COLLEGE")&&i.includes("GRADUATE")||i.includes("BACHELOR")||i.includes("DEGREE")||/(^|\s)(BS|AB)(\s|$)/.test(i);i.includes("SENIOR HIGH")?t.education["Senior High"]++:p?t.education["College Grad"]++:i.includes("COLLEGE")?t.education["College Lvl"]++:(i.includes("HIGH SCHOOL")||/(^|\s)HS(\s|$)/.test(i))&&t.education["HS Grad"]++;const f=Ht(s.designation);f&&(t.designations[f]=(t.designations[f]||0)+1);const b=(s.remarks||s.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),m=!!s.absorbDate;if(b.includes("ABSORBED")||m)t.status.ABSORBED++;else if(b.includes("RESIGNED"))t.status.RESIGNED++;else if(b==="ONGOING"||b.includes("ONGOING")||b.includes("ACTIVE")||s.status_id==1)t.status.ONGOING++;else if(b.includes("EXPIRED"))t.status.EXPIRED++;else{let d=!1;if(s.endDate){const h=ke(s.endDate);h&&h<a&&(d=!0)}d?t.status.EXPIRED++:t.status.ONGOING++}const $=vt(s);Number.isInteger($)&&(t.totalAge+=$,t.ageCount++,t.exactAges[$]=(t.exactAges[$]||0)+1,$>=18&&$<=24?t.ages["18-24"]++:$>=25&&$<=30?t.ages["25-30"]++:$>=31&&$<=40?t.ages["31-40"]++:$>=41&&t.ages["41+"]++)}),t}function zt(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(ot).forEach(([a,s])=>{t.municipalityData[a]={actual:0,target:s},t.totalTarget+=s}),e.forEach(a=>{const s=(a.office||"").toUpperCase();let o="OTHER";for(const l in ot)if(s.includes(l)){o=l;break}if(t.municipalityData[o]&&(t.municipalityData[o].actual++,t.totalActual++),(a.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,a.createdAt&&a.startDate){const l=new Date(a.createdAt),i=new Date(a.startDate),p=Math.ceil((i-l)/(1e3*60*60*24));p>=0&&p<180&&(t.velocity.totalDays+=p,t.velocity.count++)}}),t}function Vt(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(r=>{r.textContent=t+"%";const l=r.parentElement?.nextElementSibling?.firstElementChild;l&&(l.style.width=t+"%")});const a=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(r=>r.textContent=a);const s=e.retention.count+e.retention.resign,o=s>0?(e.retention.count/s*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(r=>r.textContent=o+"%")}function Yt(e,t){const a=Object.values(e.offices).reduce((f,b)=>f+b,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(f=>f.textContent=a);const s=e.genders.Female||0,o=e.genders.Male||0;document.querySelectorAll(".metric-female-ratio").forEach(f=>f.textContent=s.toLocaleString()),document.querySelectorAll(".metric-male-ratio").forEach(f=>f.textContent=o.toLocaleString());const r=f=>{const[b,m]=Object.entries(f.exactAges||{}).sort((d,h)=>h[1]-d[1]||Number(d[0])-Number(h[0]))[0]||[null,0],$=f.ageCount>0?m/f.ageCount*100:0;return{age:b,count:m,percentage:$}},l=f=>`${Number.isInteger(f)?f.toFixed(0):f.toFixed(1)}%`,i=r(e);document.querySelectorAll(".metric-top-age-label").forEach(f=>{f.textContent=i.age===null?"N/A":`${i.age} YRS`}),document.querySelectorAll(".metric-top-age-share").forEach(f=>{f.textContent=`${l(i.percentage)} of recorded ages`});const p=r(t);document.querySelectorAll(".metric-top-age").forEach(f=>{f.textContent=p.age===null?"N/A":p.age}),document.querySelectorAll(".metric-filtered-top-age-share").forEach(f=>{f.textContent=`${l(p.percentage)} of filtered ages`})}function Wt(e,t){const a=document.querySelector("#lastDaysdropdown ul");if(!a)return;const s=t.length,o=new Date,r=p=>{const f=new Date;return f.setDate(o.getDate()-p),f.setHours(0,0,0,0),t.filter(b=>{const m=ke(b.createdAt);return m&&m>=f}).length},l=p=>t.filter(f=>{const b=ke(f.startDate||f.createdAt);return b&&b.getFullYear().toString()===p}).length;let i=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ae==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${s}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ae==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ae==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ae==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(p=>{const f=l(p);i+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${p}', 'Year ${p}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ae===p?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${p}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${f}</span>
            </a>
        </li>`}),a.innerHTML=i}function Zt(e,t){const a=document.getElementById("gender-filter-options"),s=document.getElementById("gender-filter-button");if(!a||!s)return;const o=t.length,r=i=>t.filter(p=>{const f=ke(p.startDate||p.createdAt);return f&&f.getFullYear().toString()===i}).length;let l=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${_e==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${o}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(i=>{const p=r(i);l+=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${i}', 'Year ${i}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${_e===i?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${i}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${p}</span>
            </a>
        </li>
        `}),a.innerHTML=l,s.innerHTML=`${xt} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function Jt(e,t){ae=e,ht=t,Ge("user_workforce_filter",e,30),Ge("user_workforce_label",t,30),["lastDaysdropdown"].forEach(s=>{const o=document.getElementById(s);if(o&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown",s);r&&r.hide()}else o&&o.classList.add("hidden")}),We()}function Xt(e,t){_e=e,xt=t,Ge("user_gender_filter",e,30),Ge("user_gender_label",t,30);const a=document.getElementById("gender-filter-dropdown");if(a&&window.FlowbiteInstances){const s=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");s&&s.hide()}else a&&a.classList.add("hidden");We()}function Kt(){const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e),a=t.full_name||t.username||"System User",s=t.email||(t.username?`${t.username}@dole.gov.ph`:"user@dole.gov.ph"),o=t.profile_picture_path,r=a.trim().split(" ").map(l=>l[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(l=>l.textContent=a),document.querySelectorAll(".sidebar-user-email").forEach(l=>l.textContent=s),document.querySelectorAll(".sidebar-user-avatar").forEach(l=>{const i=l.querySelector(".sidebar-avatar-initials"),p=l.querySelector(".sidebar-avatar-img");if(o&&p){const f=we(),b=o.startsWith("http")?o:f+o.replace(/^\//,"");p.src=b,p.classList.remove("hidden"),i&&i.classList.add("hidden")}else i&&(i.textContent=r,i.classList.remove("hidden"),p&&p.classList.add("hidden"))})}catch{}}window.updateWorkforceFilter=Jt;window.updateGenderFilter=Xt;document.addEventListener("themeChanged",()=>{setTimeout(()=>We(),50)});window.addEventListener("dataSynced",()=>{We(!0)});let De=null;function Qt(e,t){const a=document.getElementById(t);if(!a)return;if(De&&(De.destroy(),De=null),e.length===0){const f=Xe(),b={series:[1],chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!1}},labels:["No Data"],colors:[f.grid],plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"24px",fontWeight:900,color:f.muted,formatter:()=>"0"},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:f.muted,formatter:()=>"0"}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ue()?["#1e293b"]:["#ffffff"],width:2},tooltip:{enabled:!1},legend:{show:!1}};De=new Je(a,b),De.render();return}const s={ongoing:0,expired:0,absorbed:0,resigned:0,other:0};e.forEach(f=>{const b=(f.remarks||"").toUpperCase();b==="ONGOING"?s.ongoing++:b==="EXPIRED"?s.expired++:b==="ABSORBED"?s.absorbed++:b==="RESIGNED"?s.resigned++:s.other++});const o=[],r=[],l=[];s.ongoing>0&&(o.push(s.ongoing),r.push("Ongoing"),l.push(ye.successGreen)),s.expired>0&&(o.push(s.expired),r.push("Expired"),l.push(ye.philippineRed)),s.absorbed>0&&(o.push(s.absorbed),r.push("Absorbed"),l.push("#059669")),s.resigned>0&&(o.push(s.resigned),r.push("Resigned"),l.push("#b91c1c")),s.other>0&&(o.push(s.other),r.push("Other"),l.push(ye.mutedSlate()));const i=Xe(),p={series:o,chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!0,easing:"easeinout",speed:800,dynamicAnimation:{enabled:!0,speed:350}}},labels:r,colors:l,plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"10px",fontWeight:800,color:i.muted,offsetY:-5},value:{show:!0,fontSize:"24px",fontWeight:900,color:i.text,offsetY:5},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:i.muted}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ue()?["#1e293b"]:["#ffffff"],width:2},tooltip:{theme:ue()?"dark":"light",style:{fontSize:"12px"}},legend:{show:!1}};De=new Je(a,p),De.render()}const er="modulepreload",tr=function(e,t){return new URL(e,t).href},at={},yt=function(t,a,s){let o=Promise.resolve();if(a&&a.length>0){let f=function(b){return Promise.all(b.map(m=>Promise.resolve(m).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};const l=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=i?.nonce||i?.getAttribute("nonce");o=f(a.map(b=>{if(b=tr(b,s),b in at)return;at[b]=!0;const m=b.endsWith(".css"),$=m?'[rel="stylesheet"]':"";if(s)for(let h=l.length-1;h>=0;h--){const E=l[h];if(E.href===b&&(!m||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${$}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":er,m||(d.as="script"),d.crossOrigin="",d.href=b,p&&d.setAttribute("nonce",p),document.head.appendChild(d),m)return new Promise((h,E)=>{d.addEventListener("load",h),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${b}`)))})}))}function r(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return o.then(l=>{for(const i of l||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};let ge=null;if(Ce()){const e="https://llnddycvbcetztzwbdpx.supabase.co",t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{ge=Lt(e,t)}catch{}}function rr(e=new Date().getFullYear()){const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=[];for(let s=0;s<12;s++){const o=new Date(e,s+1,0).getDate();a.push(`${t[s]} 1-15, ${e}`),a.push(`${t[s]} 16-${o}, ${e}`)}return a}function or(e,t,a){if(a==="ar")return(e.period||"").toUpperCase().trim()===t.toUpperCase().trim();{const s=t.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!s)return!1;const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(s[1].toUpperCase());if(r===-1)return!1;const l=parseInt(s[4]),i=parseInt(s[2]),p=parseInt(s[3]),f=(e.date||"").substring(0,10),b=new Date(f+"T00:00:00");return isNaN(b)?!1:b.getFullYear()===l&&b.getMonth()===r&&b.getDate()>=i&&b.getDate()<=p}}function ar(e){if(!e)return"-";const t=e.toUpperCase();return t==="VERIFIED"||t==="COMPLETED"?"✓":t==="REJECTED"||t==="DECLINED"?"X":t==="PENDING"?"?":t}function st(e,t,a,s){const o=e.map(r=>{const l=t[r.id]||[],i=s.map(p=>{const f=l.find(b=>or(b,p,a));return f?ar(f.status):"-"});return{name:r.name||r.id,cells:i}});return{periods:s,rows:o}}function nt(e,t,a){const{periods:s,rows:o}=t,r=s.length+1;let l='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return l+=`<tr><td colspan="${r}" style="background:${a};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,l+=`<tr><th style="background:${a};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,s.forEach(i=>{l+=`<th style="background:${a};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${i}</th>`}),l+="</tr>",o.forEach((i,p)=>{const f=p%2===0?"#ffffff":"#f5f5f5";l+="<tr>",l+=`<td style="background:${f};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${i.name}</td>`,i.cells.forEach(b=>{l+=`<td style="background:${f};padding:5px 8px;text-align:center;font-weight:bold;color:${b==="✓"?"#15803d":b==="X"?"#dc2626":"#9ca3af"};">${b}</td>`}),l+="</tr>"}),l+="</table>",l}async function Ar(e){const t="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",a=e.length,s=await j.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
            <div class="font-montserrat text-left">
                <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest mb-4 ps-1">
                    Configure and export logs for <span class="text-royal-blue font-black">${a} beneficiaries</span>
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
                    <input type="number" id="exp-custom-count" min="1" max="${a}" value="${a}"
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(p=>{p.addEventListener("change",()=>{const f=document.getElementById("custom-count-wrap");f.classList.toggle("hidden",p.value!=="custom"||!p.checked);const b=document.querySelector('input[name="exp-count"]:checked');f.classList.toggle("hidden",b?.value!=="custom")})})},preConfirm:()=>{const p=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",f=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let b=parseInt(f==="custom"?document.getElementById("exp-custom-count")?.value||a:f,10);(isNaN(b)||b<1)&&(b=10),b=Math.min(b,a);const m=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:p,count:b,year:m}}});if(!s.isConfirmed||!s.value)return;const{type:o,count:r,year:l}=s.value,i=e.slice(0,r);await wt(i,o,l)}async function wt(e,t,a){j.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const s=rr(a),o=we();async function r(E){const L=await(await fetch(`${o}api/logs.php?type=${E}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return L.success?L.logs||[]:[]}let l={},i={};(t==="dtr"||t==="both")&&(await r("dtr")).forEach(w=>{const L=String(w.gip_id||w.beneficiary_id||w.id||"");l[L]||(l[L]=[]),l[L].push(w)}),(t==="ar"||t==="both")&&(await r("ar")).forEach(w=>{const L=String(w.gip_id||w.beneficiary_id||w.id||"");i[L]||(i[L]=[]),i[L].push(w)});const p=e.map(E=>({...E,mapKey:String(E.id||E.gip_id||E.beneficiary_id)}));let f="";const b=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(t==="dtr"||t==="both"){const E=p.map(L=>({...L,id:L.mapKey})),w=st(E,l,"dtr",s);f+="<br>"+nt(`DTR – Daily Time Records (${a})`,w,"#1d4ed8")}if(t==="ar"||t==="both"){const E=p.map(L=>({...L,id:L.mapKey})),w=st(E,i,"ar",s);f+="<br><br>"+nt(`AR – Accomplishment Reports (${a})`,w,"#d97706")}const m=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${b} | DOLE LDNPFO – GIP Monitoring System</p>
                ${f}
            </body>
            </html>
        `,$=new Blob([m],{type:"application/vnd.ms-excel"}),d=URL.createObjectURL($),h=document.createElement("a");h.href=d,h.download=`GIP_LOGS_${t.toUpperCase()}_${a}.xls`,document.body.appendChild(h),h.click(),URL.revokeObjectURL(d),document.body.removeChild(h),j.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(s){j.fire("Error",s.message||"Failed to generate export.","error")}}const ze="color-theme",sr=3600*24*365;function nr(e,t,a){document.cookie=`${e}=${t}; max-age=${a}; path=/; SameSite=Lax`}function ir(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}function kt(){const e=localStorage.getItem(ze)||ir(ze);return e==="dark"||e==="light"?e:"light"}function Ke(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem(ze,e),nr(ze,e,sr),lr(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function Qe(){const e=kt();Ke(e==="dark"?"light":"dark")}function lr(e){const t=e==="dark",a=document.getElementById("pref-dark-mode");a&&(a.checked=t);const s=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");s&&o&&(s.classList.toggle("hidden",t),o.classList.toggle("hidden",!t));const r=document.getElementById("sidebar-theme-label");r&&(r.textContent=t?"LIGHT MODE":"DARK MODE")}function Ir(){const e=kt();Ke(e);const t=document.getElementById("pref-dark-mode");t&&t.addEventListener("change",()=>{Ke(t.checked?"dark":"light")});const a=document.getElementById("theme-toggle-btn");a&&a.addEventListener("click",Qe),document.querySelectorAll("[data-theme-toggle]").forEach(s=>{s.addEventListener("click",Qe)})}function Ee(){return document.documentElement.classList.contains("dark")}window.toggleTheme=Qe;window.isDarkMode=Ee;const Ue={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=Ee(),t={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},a=`
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
        `;j.fire({html:a,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:s=>{const o=s.querySelector("#csv-upload"),r=s.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(i=>{r.addEventListener(i,l,!1)});function l(i){i.preventDefault(),i.stopPropagation()}["dragenter","dragover"].forEach(i=>{r.addEventListener(i,()=>{r.classList.add("border-blue-500","bg-blue-50/50"),e&&r.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(i=>{r.addEventListener(i,()=>{r.classList.remove("border-blue-500","bg-blue-50/50"),e&&r.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",i=>{const p=i.target.files[0];if(p){const f=s.querySelector("#auto-save-toggle");this.isAutoSave=f?f.checked:!1,this.handleFile(p)}}),r.addEventListener("drop",i=>{const f=i.dataTransfer.files[0];if(f){const b=s.querySelector("#auto-save-toggle");this.isAutoSave=b?b.checked:!1,this.handleFile(f)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){j.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const t=new FileReader;t.onload=a=>{const s=a.target.result;this.parseCSV(s)},t.readAsText(e)},async parseCSV(e){let t=[],a="",s=!1;for(let o=0;o<e.length;o++){let r=e[o];r==='"'&&(s=!s),!s&&(r===`
`||r==="\r")?(r==="\r"&&e[o+1]===`
`&&o++,a.trim()!==""&&t.push(a),a=""):a+=r}a.trim()!==""&&t.push(a),this.queue=[];for(let o=0;o<t.length;o++){let r=t[o].trim();if(!r)continue;let l=[],i="",p=!1;for(let f=0;f<r.length;f++){let b=r[f];b==='"'?p=!p:b===","&&!p?(l.push(i.replace(/(^"|"$)/g,"").trim()),i=""):i+=b}if(l.push(i.replace(/(^"|"$)/g,"").trim()),l.length>=2){const f=l[3];if(!f||isNaN(parseInt(f)))continue;const b=l[1];if(!b||b.toLowerCase()==="name"||b.toLowerCase()==="full name")continue;const m=l[2];let $=l[4]?l[4].toUpperCase().trim():"",d="";($==="F"||$.includes("FEMALE"))&&(d="Female"),($==="M"||$.includes("MALE"))&&(d="Male");const h=l[5],E=l[6],w=l[7],L=this.formatDate(l[8]),B=this.formatDate(l[9]);this.queue.push({name:b,address:m,age:f,gender:d,education:h,startDate:L,endDate:B,office:E,designation:w})}}if(this.queue.length>0){try{j.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{j.showLoading()}});const o=this.queue.map(p=>p.name);let r=null;try{r=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{r=null}const i=await(await fetch(`${we()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...r?{"X-User-Id":String(r)}:{}},body:JSON.stringify({names:o,user_id:r})})).json();if(i.success&&i.duplicates&&i.duplicates.length>0){const p=new Set(i.duplicates.map(b=>b.toLowerCase().trim())),f=this.queue.length;this.queue=this.queue.filter(b=>{const m=p.has(b.name.toLowerCase().trim());return!m})}}catch{}if(this.queue.length===0){j.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,j.close(),this.processNext()}else j.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){Ee();const e=Math.round(this.currentIndex/this.queue.length*100),t=`
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
        `;if(j.isVisible()&&j.getPopup().querySelector("#bulk-progress-bar")){const a=document.getElementById("bulk-progress-bar"),s=j.getPopup().querySelector("span.text-\\[10px\\]"),o=document.getElementById("bulk-current-name");a&&(a.style.width=`${e}%`),s&&(s.textContent=`${this.currentIndex} / ${this.queue.length}`),o&&(o.textContent=this.queue[this.currentIndex]?.name||"...")}else j.fire({html:t,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:a=>{a.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const t=new Date(e);if(isNaN(t.getTime())){const r=e.split("/");return r.length===3?`${r[2]}-${r[1].padStart(2,"0")}-${r[0].padStart(2,"0")}`:""}const a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${a}-${s}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const a=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[s,o]=await Promise.all([fe(`api/beneficiaries.php?next_id&year=${a}`),fe(`api/beneficiaries.php?next_series_no&year=${a}`)]);s.success&&s.data?.success&&s.data?.nextId&&(e.gip_id=s.data.nextId,e.id=null),o.success&&o.data?.success&&o.data?.nextSeries&&(e.seriesNo=o.data.nextSeries)}catch{}const t=await window.addBeneficiaryData(e);this.isActive&&(t?this.onSaveSuccess():Oe(e))})():Oe(e)):Oe(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),j.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,j.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=Ue;function it(e){if(!e)return"";const t=new Date(e),a=new Date;let s=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||o===0&&a.getDate()<t.getDate())&&s--,s>=0?s:0}function dr(e){if(!e)return"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800";const t=e.toUpperCase();return t==="ONGOING"||t==="ABSORBED"?"bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-700 dark:border-emerald-800":"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800"}const lt="gip-drawer-employment-details-expanded";class cr{constructor(t,a,s){this.root=t,this.maxPage=s,this.currentPage=Math.min(Math.max(Number(a)||0,0),s),this.prevButton=t.querySelector("#drawer-prev-btn"),this.nextButton=t.querySelector("#drawer-next-btn"),this.detailsButton=t.querySelector("#drawer-employment-details-toggle"),this.detailsPanel=t.querySelector("#drawer-employment-details-panel"),this.detailsIcon=t.querySelector("#drawer-employment-details-icon"),this.pageTitles=["Personal Profile","Submission Logs","Required Documents"]}getSavedDetailsState(){try{return localStorage.getItem(lt)==="true"}catch{return!1}}saveDetailsState(t){try{localStorage.setItem(lt,String(t))}catch{}}setDetailsExpanded(t,a=!1){!this.detailsButton||!this.detailsPanel||(this.detailsButton.setAttribute("aria-expanded",String(t)),this.detailsPanel.classList.toggle("hidden",!t),this.detailsIcon?.classList.toggle("rotate-180",t),a&&this.saveDetailsState(t))}renderNavigation(){this.root.querySelectorAll("[id^=drawer-page-]").forEach((s,o)=>{s.classList.toggle("hidden",o!==this.currentPage)});const t=this.root.querySelector("#drawer-section-title");t&&(t.textContent=this.pageTitles[this.currentPage]),this.root.querySelector("#personal-profile-section")?.classList.toggle("hidden",this.currentPage!==0),this.prevButton?.classList.toggle("hidden",this.currentPage===0),this.nextButton?.classList.toggle("hidden",this.currentPage===this.maxPage)}goToPage(t){this.currentPage=Math.min(Math.max(t,0),this.maxPage),this.renderNavigation()}bind(){this.prevButton?.addEventListener("click",()=>this.goToPage(this.currentPage-1)),this.nextButton?.addEventListener("click",()=>this.goToPage(this.currentPage+1)),this.detailsButton?.addEventListener("click",()=>{const t=this.detailsButton.getAttribute("aria-expanded")==="true";this.setDetailsExpanded(!t,!0)}),this.setDetailsExpanded(this.getSavedDetailsState()),this.renderNavigation()}}function dt(e=3){return Array.from({length:e},(t,a)=>`
        <div class="skeleton-wave border border-gray-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800" aria-hidden="true">
            <div class="h-2.5 ${a%2===0?"w-2/5":"w-1/3"} rounded-full bg-gray-200 dark:bg-slate-700"></div>
            <div class="mt-3 h-3.5 ${a%2===0?"w-4/5":"w-3/5"} rounded-full bg-gray-300 dark:bg-slate-600"></div>
        </div>
    `).join("")}function ur(){return["Contact No.","Address","Birthday","Age","Gender","Education","Designated Beneficiary","Relationship to Assured"].map((t,a)=>`
        <div class="grid grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-4">
            <span class="whitespace-nowrap font-medium text-gray-500">${t}</span>
            <span class="skeleton-wave block h-3.5 ${a%3===0?"w-2/3":a%3===1?"w-full":"w-1/2"} rounded-full bg-gray-200 dark:bg-slate-700" aria-hidden="true"></span>
        </div>
    `).join("")}async function ct(e,t){const a=await ft(`api/logs.php?type=${encodeURIComponent(e)}`,t),s=a.success?a.data:null;return!a.success||!s?.success?{success:!1,error:s?.error||a.error||"The log could not be saved."}:a}function Fe(e,t=0){const a=!!e?._isLoadingProfile,s=!!e?._isLoadingLogs;e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const o=e.arLogs||[],r=e.dtrLogs||[],l=e.docs||[],i=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],p=i.map(d=>{const h=l.find(E=>E.name.toUpperCase()===d.toUpperCase());return h||{name:d,status:"PENDING",id:null}});l.forEach(d=>{i.some(E=>E.toUpperCase()===d.name.toUpperCase())||p.push(d)});const f=`
<div class="pb-4 mb-4 flex flex-col relative w-full pt-3 font-montserrat user-select-none">
    <div class="flex min-h-11 items-center justify-between border-b border-default pb-4 pe-14">
        <h3 class="text-xl sm:text-2xl font-black text-heading leading-tight tracking-tight">GIP Information</h3>
        <button type="button" id="close-drawer-btn" class="group absolute top-0.5 right-0 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-red-800 dark:hover:bg-red-950/60 dark:hover:text-red-300">
           <svg class="w-6 h-6 transition-transform duration-200 group-hover:rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
           <span class="sr-only">Close drawer</span>
        </button>
    </div>

    <div class="mt-5 min-w-0">
        ${a?`
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
            ${a?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${dr(e.remarks)} block min-h-8 w-full truncate border border-l-4 ${e.remarks==="ONGOING"||e.remarks==="ABSORBED"?"border-l-emerald-600 dark:border-l-emerald-500":"border-l-red-600 dark:border-l-red-500"} px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.remarks}">${e.remarks}</span>`}
        </div>
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Office</span>
            ${a?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="block min-h-8 w-full truncate border border-red-700 border-l-4 bg-red-600 px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider text-white shadow-sm dark:border-red-800 dark:bg-red-700" title="${e.office}">${e.office}</span>`}
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
        ${a?ur():`
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
            <span class="${e.age||it(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right sm:text-left">${e.age||it(e.birthday)||"N/A"}</span>
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

        <div id="drawer-employment-details-panel" class="hidden flex flex-col gap-4 pt-1">
        <div class="bg-gray-50/50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700 shadow-sm w-full">
            <p class="text-[0.5625rem] uppercase tracking-widest text-gray-400 dark:text-white font-black mb-3">Work Registry</p>
            <div class="flex items-center gap-3">
                <div class="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 shrink-0">
                    <svg class="w-5 h-5 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div class="flex-1 min-w-0">
                    <label class="text-[0.5625rem] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest truncate">Series No.</label>
                    <span class="text-sm sm:text-base font-black text-royal-blue dark:text-blue-400 font-mono whitespace-nowrap leading-none tracking-tight">${e.seriesNo||"2025-00-000"}</span>
                </div>
            </div>
        </div>

         <div class="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
            <label class="text-[0.5625rem] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest">Assigned Unit</label>
            <p class="text-sm font-black text-heading break-words whitespace-normal leading-snug">${e.designation}</p>
        </div>
        
         <div class="bg-gray-50/30 dark:bg-slate-800/30 p-4 rounded-xl border border-dashed border-gray-200 dark:border-slate-700">
            <label class="text-[0.5625rem] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest">Replacement History</label>
             <p class="text-sm text-emerald-600 dark:text-emerald-400 font-bold italic underline decoration-emerald-500/30 underline-offset-4 cursor-default">${e.replacement||"None found."}</p>
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
                    <span class="font-black text-[#1b5e20] dark:text-green-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.absorbDate||String(e.absorbDate).includes("0000-00-00"))return"N/A";const d=new Date(e.absorbDate);return isNaN(d.getTime())||d.getFullYear()<1900?"N/A":(d.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+d.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
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
                    <span class="font-black text-[#b71c1c] dark:text-red-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.resignedDate||String(e.resignedDate).includes("0000-00-00"))return"N/A";const d=new Date(e.resignedDate);return isNaN(d.getTime())||d.getFullYear()<1900?"N/A":(d.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+d.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
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
            ${s?dt(4):`
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${r.length?r.map(d=>{const h=d.status||"PENDING";let E=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const w=h==="VERIFIED"||h==="COMPLETED"?"SUBMITTED":h;let L=d.date||d.createdAt,B=L;const P=d.submittedAt||d.submitted_at||d.createdAt||d.created_at,Y=P?new Date(P).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",_=[d.rejectedAt||d.rejected_at?"Rejected: "+new Date(d.rejectedAt||d.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",d.updatedAt||d.updated_at?"Updated: "+new Date(d.updatedAt||d.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(O=>`
`+O).join("");if(L){const O=/^\d{4}-\d{2}-\d{2}$/.test(L)?new Date(L+"T00:00:00Z"):new Date(L);isNaN(O)||(B=O.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-blue-500 bg-transparent p-4 text-blue-700 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:border-blue-300 dark:hover:bg-blue-500 dark:hover:text-white" title="Submitted: ${Y}${_}" data-type="dtr" data-id="${d.id}" data-val="${d.day||L}" data-status="${h}">
                            <span class="text-sm font-black text-blue-700 group-hover:text-white dark:text-blue-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${Y}${_}">${d.day||B}</span>
                            <span class="log-status-label text-xs font-bold ${E} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${w}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="dtr" data-id="${d.id}">
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
                    ${o.length?o.map(d=>{const h=d.status||"PENDING";let E=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const w=h==="VERIFIED"||h==="COMPLETED"?"SUBMITTED":h;let L=d.period||d.createdAt,B=L;const P=d.submittedAt||d.submitted_at||d.createdAt||d.created_at,Y=P?new Date(P).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",_=[d.rejectedAt||d.rejected_at?"Rejected: "+new Date(d.rejectedAt||d.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",d.updatedAt||d.updated_at?"Updated: "+new Date(d.updatedAt||d.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(O=>`
`+O).join("");if(L){const O=/^\d{4}-\d{2}-\d{2}$/.test(L)?new Date(L+"T00:00:00Z"):new Date(L);isNaN(O)||(B=O.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-orange-500 bg-transparent p-4 text-orange-700 shadow-sm transition-colors hover:border-orange-700 hover:bg-orange-600 hover:text-white dark:border-orange-400 dark:text-orange-300 dark:hover:border-orange-300 dark:hover:bg-orange-500 dark:hover:text-white" title="Submitted: ${Y}${_}" data-type="ar" data-id="${d.id}" data-val="${L}" data-status="${h}">
                            <span class="text-sm font-black text-orange-700 group-hover:text-white dark:text-orange-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${Y}${_}">${L||B}</span>
                            <span class="log-status-label text-xs font-bold ${E} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${w}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="ar" data-id="${d.id}">
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
            ${s?dt(5):p.map(d=>{const h=d.status.toUpperCase(),w={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[h]||h,L=w==="COMPLETED",B=w==="REJECTED",P=w==="PENDING",Y=L?"text-emerald-600 group-hover/card:text-emerald-800 dark:text-emerald-400 dark:group-hover/card:text-emerald-900":B?"text-red-600 group-hover/card:text-red-800 dark:text-red-400 dark:group-hover/card:text-red-900":"text-orange-600 group-hover/card:text-orange-800 dark:text-orange-400 dark:group-hover/card:text-orange-900",_=L?"border-emerald-600 bg-transparent hover:border-emerald-700 hover:bg-emerald-600 dark:border-emerald-400 dark:bg-transparent dark:hover:border-emerald-300 dark:hover:bg-emerald-500":B?"border-red-600 bg-transparent hover:border-red-700 hover:bg-red-600 dark:border-red-400 dark:bg-transparent dark:hover:border-red-300 dark:hover:bg-red-500":"border-orange-600 bg-transparent hover:border-orange-700 hover:bg-orange-600 dark:border-orange-400 dark:bg-transparent dark:hover:border-orange-300 dark:hover:bg-orange-500",O=L?"text-emerald-700 group-hover/card:text-white dark:text-emerald-300 dark:group-hover/card:text-white":B?"text-red-700 group-hover/card:text-white dark:text-red-300 dark:group-hover/card:text-white":"text-orange-700 group-hover/card:text-white dark:text-orange-300 dark:group-hover/card:text-white",ne=L?"SUBMITTED":w,X=L?"border-emerald-900 bg-emerald-700 text-white ring-2 ring-emerald-200 hover:bg-emerald-600":"border-emerald-500 bg-transparent text-emerald-700 group-hover/card:border-emerald-700 group-hover/card:bg-white group-hover/card:text-emerald-800 hover:border-emerald-700 hover:bg-emerald-600 hover:text-white",le=P?"border-orange-900 bg-orange-700 text-white ring-2 ring-orange-200 hover:bg-orange-600":"border-orange-500 bg-transparent text-orange-700 group-hover/card:border-orange-700 group-hover/card:bg-white group-hover/card:text-orange-800 hover:border-orange-700 hover:bg-orange-600 hover:text-white",ce=B?"border-red-900 bg-red-700 text-white ring-2 ring-red-200 hover:bg-red-600":"border-red-500 bg-transparent text-red-700 group-hover/card:border-red-700 group-hover/card:bg-white group-hover/card:text-red-800 hover:border-red-700 hover:bg-red-600 hover:text-white";let W='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return L?W='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M5 13l4 4L19 7"></path></svg>':B&&(W='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="drawer-doc-card group/card relative flex cursor-pointer items-center justify-between rounded-xl border p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand/30 ${_}" role="button" tabindex="0" data-id="${d.id}" data-name="${d.name}" data-status="${w}" aria-label="Change status for ${d.name}" aria-expanded="false">
                    <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white shadow-sm ${Y}">
                            ${W}
                        </div>
                        <span class="flex-1 text-xs font-black uppercase tracking-tight sm:text-sm ${O}">${d.name}</span>
                    </div>
                    <span class="drawer-doc-status ml-auto shrink-0 text-[0.5625rem] font-black uppercase tracking-wider ${O}">${ne}</span>
                    <svg class="drawer-doc-cue ml-3 size-5 shrink-0 transition-transform group-hover/card:scale-110 ${O}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 12h.01M12 12h.01M18 12h.01"/></svg>
                    <div class="drawer-doc-actions ml-3 hidden shrink-0 items-center gap-1.5">
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${X}" data-status="COMPLETED" aria-label="Submit document" aria-pressed="${L}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="m5 13 4 4L19 7"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Submitted</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${le}" data-status="PENDING" aria-label="Set pending" aria-pressed="${P}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            <span class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Pending</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ce}" data-status="REJECTED" aria-label="Reject document" aria-pressed="${B}">
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
    `,b=!!e._noAnimation;let m=document.getElementById("beneficiary-drawer-container");const $=b&&!!m&&m.dataset.beneficiaryId===String(e.id||"");if($){const d=m.scrollTop;m.innerHTML=f,m.scrollTop=d}else m&&(m.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),m=document.createElement("div"),m.id="beneficiary-drawer-container",m.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[500px] lg:w-[560px] shadow-2xl",m.setAttribute("tabindex","-1"),m.setAttribute("data-drawer-backdrop","true"),m.innerHTML=f,document.body.appendChild(m),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");m.dataset.beneficiaryId=String(e.id||""),yt(async()=>{const{Drawer:d}=await import("./vendor-flowbite-BS-fTmyB.js").then(h=>h.b);return{Drawer:d}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:d})=>{let h=$?m.__drawerInstance:null;if(!h){const x={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{m.__inlineActionAbort?.abort(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{m&&m.parentNode&&m.remove()},300)}};h=new d(m,x),m.__drawerInstance=h,h.show()}m.querySelector("#close-drawer-btn").addEventListener("click",()=>h.hide());const w=new cr(m,t,2);w.bind(),m.__inlineActionAbort?.abort();const L=new AbortController;m.__inlineActionAbort=L;const B=()=>{const M=(document.getElementById("beneficiary-drawer-container")||m).getBoundingClientRect(),I=Math.max(0,M.left);return{canDockBesideDrawer:window.innerWidth>=640&&I>=280,drawerOffset:Math.max(0,window.innerWidth-M.left),availableLeftSpace:I}},P=(x,M,I=1800)=>(B(),j.fire({toast:!0,position:"bottom-end",icon:x,title:M,showConfirmButton:!1,timer:I,didOpen:H=>{const Z=B();if(!Z.canDockBesideDrawer)return;const q=H.closest(".swal2-container");q&&(q.style.inset="auto",q.style.right=Z.drawerOffset+12+"px",q.style.bottom="12px",q.style.left="auto",q.style.width="auto",H.style.maxWidth=`${Math.min(352,Z.availableLeftSpace-24)}px`)}})),Y=x=>{!x||x.dataset.loading==="true"||(x.dataset.confirming="false",x.classList.remove("w-22","opacity-100","pointer-events-auto"),x.classList.add("w-11","opacity-0","pointer-events-none"),x.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.remove("!pr-24"),x.querySelector(".delete-log-trigger")?.classList.replace("hidden","flex"),x.querySelector(".delete-confirm-actions")?.classList.replace("flex","hidden"))},_=(x=null)=>{m.querySelectorAll(".drawer-doc-card").forEach(M=>{M===x||M.dataset.loading==="true"||(M.setAttribute("aria-expanded","false"),M.querySelector(".drawer-doc-actions")?.classList.replace("flex","hidden"),M.querySelector(".drawer-doc-cue")?.classList.remove("hidden"))}),m.querySelectorAll(".delete-log-control").forEach(M=>{M!==x&&Y(M)})},O=async(x,M)=>{const I=x.dataset.status;if(M===I){_();return}const H=x.querySelector(".drawer-doc-actions"),Z=x.querySelector(".drawer-doc-loading");x.dataset.loading="true",x.setAttribute("aria-busy","true"),H?.classList.replace("flex","hidden"),Z?.classList.replace("hidden","block");try{const q={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"},Q=await ct("docs",{gip_id:e.id,doc_name:x.dataset.name,status:q[M]||M}),K=Q.success?Q.data:{success:!1,error:Q.error};if(!K.success)throw new Error(K.error||"Failed to update document status.");window.viewBeneficiary&&await window.viewBeneficiary(e,w.currentPage),P("success","Status updated!")}catch(q){x.dataset.loading="false",x.removeAttribute("aria-busy"),Z?.classList.replace("block","hidden"),H?.classList.replace("hidden","flex"),P("error",q.message)}};m.querySelectorAll(".drawer-doc-card").forEach(x=>{const M=()=>{const I=x.getAttribute("aria-expanded")!=="true";_(I?x:null),x.setAttribute("aria-expanded",String(I)),x.querySelector(".drawer-doc-actions")?.classList.toggle("hidden",!I),x.querySelector(".drawer-doc-actions")?.classList.toggle("flex",I),x.querySelector(".drawer-doc-cue")?.classList.toggle("hidden",I)};x.addEventListener("click",I=>{I.target.closest(".doc-status-action")||M()}),x.addEventListener("keydown",I=>{I.target.closest(".doc-status-action")||(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),M())}),x.querySelectorAll(".doc-status-action").forEach(I=>{I.addEventListener("click",H=>{H.stopPropagation(),O(x,I.dataset.status)})})}),document.addEventListener("click",x=>{x.target.closest(".drawer-doc-card, .delete-log-control")||_()},{signal:L.signal});const ne=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),X=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function le(x){const I=new Date(x+"T00:00:00").getDay();return I!==0&&I!==6&&!ne.has(x)}function ce(x){const M=x.getDate(),I=X[x.getMonth()],H=x.getFullYear(),Z=new Date(H,x.getMonth()+1,0).getDate();return M<=15?`${I} 1-15, ${H}`:`${I} 16-${Z}, ${H}`}const W=()=>{const x=new Date;if(!r.length)return ce(x);let M=-1,I="";const H=F=>{const g=(F||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!g)return-1;const v=X.indexOf(g[1]),S=parseInt(g[2])===1?0:1;return parseInt(g[4])*100+v*2+S};if(r.forEach(F=>{const g=F.day||F.date||"",v=H(g);v>M&&(M=v,I=g)}),M===-1)return ce(x);const Z=I.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),q=X.indexOf(Z[1]),Q=parseInt(Z[2]),K=parseInt(Z[4]);if(Q===1){const F=new Date(K,q+1,0).getDate();return`${X[q]} 16-${F}, ${K}`}else{const F=(q+1)%12,g=q===11?K+1:K;return`${X[F]} 1-15, ${g}`}},pe=()=>{const x=new Date;if(!o.length)return ce(x);let M=-1,I="";const H=F=>{const g=(F||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!g)return-1;const v=X.indexOf(g[1]),S=parseInt(g[2])===1?0:1;return parseInt(g[4])*100+v*2+S};if(o.forEach(F=>{const g=H(F.period);g>M&&(M=g,I=F.period)}),M===-1)return ce(x);const Z=I.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),q=X.indexOf(Z[1]),Q=parseInt(Z[2]),K=parseInt(Z[4]);if(Q===1){const F=new Date(K,q+1,0).getDate();return`${X[q]} 16-${F}, ${K}`}else{const F=(q+1)%12,g=q===11?K+1:K;return`${X[F]} 1-15, ${g}`}},be=async(x,M)=>{j.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),j.showLoading();try{const I={gip_id:e.id};if(x==="dtr"){const q=M.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(q){const Q=X.indexOf(q[1]),K=parseInt(q[2]),F=parseInt(q[3]);let g=new Date(F,Q,K);for(;!le(g.toISOString().split("T")[0]);)g.setDate(g.getDate()+1);I.record_date=g.toISOString().split("T")[0]}else I.record_date=new Date().toISOString().split("T")[0];I.weekday=M}x==="ar"&&(I.period=M);const H=await ct(x,I),Z=H.success?H.data:{success:!1,error:H.error};if(Z.success)window.viewBeneficiary&&await window.viewBeneficiary(e,w.currentPage),P("success","Successfully Added",1500);else{const q=Z.error||"Failed to add log.";j.fire("Error",q,"error")}}catch(I){j.fire("Error",I.message||"Failed to add log.","error")}},G=m.querySelector("#add-dtr-log-btn");G&&G.addEventListener("click",()=>be("dtr",W()));const xe=m.querySelector("#add-ar-log-btn");xe&&xe.addEventListener("click",()=>be("ar",pe()));const me=m.querySelector("#export-log-btn");me&&me.addEventListener("click",async()=>{const x="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",M=await j.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${x} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${x} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${x} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const I=document.querySelector('input[name="swal-export-type"]:checked');return I?I.value:null}});if(M.isConfirmed&&M.value){const I=M.value,H=new Date().getFullYear();await wt([e],I,H)}});const Se=x=>{if(!x||x.querySelector(".inline-log-editor"))return;const M=x.dataset.type,I=x.dataset.id,H=x.dataset.val||"",Z=x.dataset.status||"PENDING";let q=Z==="VERIFIED"||Z==="COMPLETED"?"VERIFIED":"PENDING";const Q=H.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/),K=Q?Q[3]+"-"+String(X.indexOf(Q[1])+1).padStart(2,"0")+"-"+String(Q[2]).padStart(2,"0"):new Date().toISOString().split("T")[0],F=document.createElement("div");F.className="inline-log-editor absolute inset-0 z-10 flex items-center gap-1 rounded-xl bg-white px-2 shadow-lg dark:bg-slate-900",F.innerHTML='<input type="text" class="inline-log-date w-[38%] min-w-0 shrink-0 rounded-lg border border-brand/40 bg-transparent px-2 py-1.5 text-xs font-black uppercase text-heading outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" value="'+K+'" aria-label="Select log date"><div class="ml-auto flex shrink-0 items-center gap-1"><button type="button" data-status="VERIFIED" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set submitted status">SUBMITTED</button><button type="button" data-status="PENDING" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set pending status">PENDING</button></div>',x.appendChild(F);const g=F.querySelector(".inline-log-date");g.title=x.querySelector("[title]")?.getAttribute("title")||"Select the submitted date";const v=window.Datepicker;v&&g&&(g._datepicker=new v(g,{format:"yyyy-mm-dd",autohide:!0,orientation:"bottom right"}));const S=()=>{F.querySelectorAll(".inline-log-status").forEach(u=>{const n=u.dataset.status===q,c=u.dataset.status==="PENDING";u.className=n?"inline-log-status cursor-pointer rounded-md "+(c?"bg-orange-600 hover:bg-orange-700":"bg-emerald-600 hover:bg-emerald-700")+" px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider text-white shadow-sm transition-colors":"inline-log-status cursor-pointer rounded-md border "+(c?"border-orange-400 text-orange-700 hover:border-orange-600 hover:bg-orange-50":"border-emerald-400 text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50")+" bg-transparent px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors dark:border-slate-600 dark:text-slate-300"})};S(),F.querySelectorAll(".inline-log-status").forEach(u=>u.addEventListener("click",async n=>{n.stopPropagation(),q=u.dataset.status,S();const c=g?.value||K,y=ce(new Date(c+"T00:00:00"));F.querySelectorAll(".inline-log-status").forEach(k=>{k.disabled=!0}),u.textContent="SAVING";try{const k={type:M,id:I,status:q};M==="dtr"?(k.record_date=c,k.weekday=y):k.period=y;const D=await At("api/logs.php",k),N=D.success?D.data:{success:!1,error:D.error};if(!N.success)throw new Error(N.error||"Failed to update log.");P("success","Log submitted!",1500),window.viewBeneficiary&&window.viewBeneficiary(e,w.currentPage)}catch(k){F.querySelectorAll(".inline-log-status").forEach(D=>{D.disabled=!1}),u.textContent=q==="VERIFIED"?"SUBMITTED":"PENDING",P("error",k.message)}}));const C=u=>{F.contains(u.target)||(g?._datepicker?.hide(),F.remove(),document.removeEventListener("click",C,!0))};setTimeout(()=>document.addEventListener("click",C,!0),0)};m.querySelectorAll(".edit-log-btn").forEach(x=>{x.addEventListener("click",M=>{M.target.closest(".delete-log-control")||(x.dataset.type,x.dataset.id,x.dataset.val,x.dataset.status,Se(x))})}),m.querySelectorAll(".delete-log-control").forEach(x=>{const M=x.querySelector(".delete-log-trigger"),I=x.querySelector(".delete-log-confirm"),H=x.querySelector(".delete-log-cancel");M?.addEventListener("click",Z=>{Z.stopPropagation(),_(x),x.dataset.confirming="true",x.classList.remove("w-11","opacity-0","pointer-events-none"),x.classList.add("w-22","opacity-100","pointer-events-auto"),x.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.add("!pr-24"),M.classList.replace("flex","hidden"),x.querySelector(".delete-confirm-actions")?.classList.replace("hidden","flex")}),H?.addEventListener("click",Z=>{Z.stopPropagation(),Y(x)}),I?.addEventListener("click",async Z=>{if(Z.stopPropagation(),x.dataset.loading==="true")return;const q=x.dataset.id,Q=x.dataset.type;x.dataset.loading="true",I.disabled=!0,H.disabled=!0,I.querySelector(".delete-confirm-icon")?.classList.add("hidden"),I.querySelector(".delete-loading-icon")?.classList.replace("hidden","block");try{const K=await ft(`api/logs.php?type=${Q}`,{log_id:q,action:"delete"}),F=K.success?K.data:{success:!1,error:K.error};if(!F.success)throw new Error(F.error||"Failed to delete data.");P("success","Deleted"),window.viewBeneficiary&&window.viewBeneficiary(e,w.currentPage)}catch(K){x.dataset.loading="false",I.disabled=!1,H.disabled=!1,I.querySelector(".delete-loading-icon")?.classList.replace("block","hidden"),I.querySelector(".delete-confirm-icon")?.classList.remove("hidden"),Y(x),P("error",K.message)}})})}).catch(d=>{})}function pr(e){const t=Ee(),a="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600",s="w-full resize-none overflow-hidden rounded-none border-0 border-b-2 border-blue-200 bg-transparent px-0 py-2 text-xl font-black leading-tight tracking-tight text-royal-blue placeholder-gray-300 outline-none focus:border-brand focus:ring-0 sm:text-2xl dark:border-slate-700 dark:text-white",o="mb-1.5 block text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";function r(w){const L=String(w||"").trim();if(!L)return{month:"",day:"",year:"",iso:""};let B=L.match(/^(\d{4})-(\d{2})-(\d{2})/);if(B)return{year:B[1],month:B[2],day:B[3],iso:`${B[1]}-${B[2]}-${B[3]}`};if(B=L.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/),B){const P=B[1].padStart(2,"0"),Y=B[2].padStart(2,"0");return{year:B[3],month:P,day:Y,iso:`${B[3]}-${P}-${Y}`}}return{month:"",day:"",year:"",iso:""}}function l(w,L,B){const P=Number.parseInt(w,10),Y=Number.parseInt(L,10),_=Number.parseInt(B,10);if(!Number.isInteger(P)||!Number.isInteger(Y)||!Number.isInteger(_)||_<1900||_>new Date().getFullYear())return"";const O=new Date(_,P,0).getDate();return P<1||P>12||Y<1||Y>O?"":`${String(_).padStart(4,"0")}-${String(P).padStart(2,"0")}-${String(Y).padStart(2,"0")}`}function i(w){const L=r(w);if(!L.iso)return"";const B=Number.parseInt(L.year,10),P=Number.parseInt(L.month,10),Y=Number.parseInt(L.day,10),_=new Date;let O=_.getFullYear()-B;return(_.getMonth()+1<P||_.getMonth()+1===P&&_.getDate()<Y)&&O--,O>=0?O:""}const p=r(e.birthday),f=Array.from({length:12},(w,L)=>{const B=String(L+1).padStart(2,"0");return`<option value="${B}" ${p.month===B?"selected":""}>${B}</option>`}).join(""),b=Array.from({length:31},(w,L)=>{const B=String(L+1).padStart(2,"0");return`<option value="${B}" ${p.day===B?"selected":""}>${B}</option>`}).join("");function m(w){if(!w)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const L=String(w).toUpperCase();return L==="ONGOING"?"bg-green-100 text-green-700 border-green-200":L==="EXPIRED"?"bg-red-400 text-white border-red-400":L==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":L==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const $=`
<form id="edit-beneficiary-drawer-form" class="h-full flex flex-col pt-4 font-montserrat relative pb-20 overflow-y-auto">
    <input type="hidden" name="id" value="${e.id}">
    
    <div class="flex flex-col relative w-full border-b border-default pb-4 mb-5 pe-12">
        <textarea name="name" class="${s}" rows="1" placeholder="Beneficiary Name" required oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">${e.name||""}</textarea>
        
        <button type="button" id="close-edit-drawer-btn" class="text-gray-400 bg-transparent hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white rounded-none w-9 h-9 absolute top-0 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full">
        <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ROX-ID</span>
            <input type="text" name="gip_id" value="${e.gip_id||e.id||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded-none border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="ROX-RD-ESIG-0000-0000">
        </div>
        <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">SERIES NO.</span>
            <input type="text" name="seriesNo" value="${e.seriesNo||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded-none border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="2025-00-000">
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4 mb-4">
        <div class="flex flex-col gap-1 text-left overflow-hidden relative">
             <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS (STATUS)</span>
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${m(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
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
                <span class="${o}">Contact Number</span>
                <input type="text" name="contact" value="${e.contact||""}" class="${a} font-mono" placeholder="09XX-XXX-XXXX" inputmode="tel">
            </label>

            <label class="block">
                <span class="${o}">Gender</span>
                <select name="gender" class="${a} cursor-pointer appearance-none">
                    <option value="Male" ${String(e.gender||"").toUpperCase()==="MALE"?"selected":""}>MALE</option>
                    <option value="Female" ${String(e.gender||"").toUpperCase()==="FEMALE"?"selected":""}>FEMALE</option>
                </select>
            </label>

            <label class="block sm:col-span-2">
                <span class="${o}">Complete Address</span>
                <textarea name="address" rows="3" class="${a} resize-y" placeholder="Barangay, municipality/city, province">${e.address||""}</textarea>
            </label>

            <div class="sm:col-span-2 border border-blue-200 bg-blue-50/60 p-3 dark:border-blue-900 dark:bg-blue-950/30">
                <div class="mb-3 flex items-center justify-between gap-3 border-b border-blue-200 pb-2 dark:border-blue-900">
                    <div>
                        <span class="${o} mb-0">Birthday</span>
                        <p class="mt-1 text-[0.5625rem] font-semibold text-slate-400">Select month, day, and year or use the calendar.</p>
                    </div>
                    <svg class="h-5 w-5 shrink-0 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v3m8-3v3M3 9h18M5 4h14a2 2 0 012 2v14H3V6a2 2 0 012-2z" /></svg>
                </div>
                <input type="hidden" name="birthday" id="edit-bday-input" value="${p.iso}">
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-[0.8fr_0.8fr_1.2fr_1.4fr]">
                    <label class="block">
                        <span class="${o}">Month (MM)</span>
                        <select id="edit-birth-month" class="${a} cursor-pointer appearance-none font-mono" aria-label="Birth month">
                            <option value="">MM</option>
                            ${f}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${o}">Day (DD)</span>
                        <select id="edit-birth-day" class="${a} cursor-pointer appearance-none font-mono" aria-label="Birth day">
                            <option value="">DD</option>
                            ${b}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${o}">Year (YYYY)</span>
                        <input type="text" id="edit-birth-year" value="${p.year}" class="${a} font-mono" placeholder="YYYY" inputmode="numeric" maxlength="4" aria-label="Birth year">
                    </label>
                    <label class="block">
                        <span class="${o}">Calendar</span>
                        <input type="date" id="edit-birthday-calendar" value="${p.iso}" class="${a} cursor-pointer font-mono" aria-label="Birthday calendar">
                    </label>
                </div>
                <p id="edit-birthday-error" class="mt-2 hidden border-l-4 border-red-500 bg-red-50 px-2 py-1.5 text-[0.625rem] font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300" role="alert">Enter a valid birthday using MM, DD, and YYYY.</p>
            </div>

            <label class="block">
                <span class="${o}">Age</span>
                <input type="text" name="age" id="edit-age-display" value="${i(p.iso)}" class="${a} cursor-not-allowed bg-slate-100 font-mono text-slate-500 dark:bg-slate-800" placeholder="Auto-calculated" readonly aria-readonly="true">
            </label>

            <div class="relative">
                <label for="edit-education-input" class="${o}">Educational Level / Course</label>
                <input type="text" name="education" id="edit-education-input" value="${e.education||""}" class="${a}" placeholder="Select or enter education">
                <div id="edit-education-suggestions-box" class="absolute left-0 right-0 z-[70] mt-1 hidden max-h-48 overflow-y-auto border border-slate-300 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                    ${et.map(w=>`<button type="button" class="edit-education-option w-full border-b border-slate-100 px-3 py-2 text-left text-[0.6875rem] font-bold text-slate-700 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"><span class="option-text">${w.name}</span></button>`).join("")}
                </div>
            </div>

            <label class="block">
                <span class="${o}">Designated Beneficiary</span>
                <input type="text" name="designatedBeneficiary" value="${e.designatedBeneficiary||""}" class="${a}" placeholder="Assured family member">
            </label>

            <label class="block">
                <span class="${o}">Relationship to Assured</span>
                <select name="relationshipToAssured" class="${a} cursor-pointer appearance-none uppercase">
                    <option value="">SELECT RELATIONSHIP</option>
                    ${St.map(w=>`<option value="${w}" ${String(e.relationshipToAssured||"").toUpperCase()===w.toUpperCase()?"selected":""}>${w}</option>`).join("")}
                </select>
            </label>
        </div>
    </section>

    <!-- Contract & Work Info Tab -->
    <h4 class="text-sm font-bold text-heading mt-8 pb-2 border-b border-default whitespace-nowrap">Contract & Work Details</h4>
    
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
    <button type="submit" form="edit-beneficiary-drawer-form" class="order-1 flex h-12 items-center justify-center gap-2 rounded-none bg-brand px-4 py-3 text-[0.625rem] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-brand-strong hover:shadow-brand/40 cursor-pointer sm:text-xs">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        Save Changes
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
    `;let d=document.getElementById("edit-drawer-container");d&&(d.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),d=document.createElement("div"),d.id="edit-drawer-container",d.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full border-l border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",d.setAttribute("tabindex","-1"),d.innerHTML=$,document.body.appendChild(d),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const w=d.querySelector('textarea[name="name"]');w&&(w.style.height="auto",w.style.height=w.scrollHeight+"px")},10);const h=d.querySelector("#edit-education-suggestions-box");h&&(h.innerHTML=et.map(w=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${w.name}</span>
            </button>
        `).join(""));const E=d.querySelector("#edit-designation-suggestions-box");E&&(E.innerHTML=Ae.map(w=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${w}</span>
            </button>
        `).join("")),yt(async()=>{const{Drawer:w}=await import("./vendor-flowbite-BS-fTmyB.js").then(L=>L.b);return{Drawer:w}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:w})=>{const L=new w(d,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{d&&d.parentNode&&d.remove()},400)}});L.show(),window.initFlowbite&&window.initFlowbite();const B=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),L.hide()};d.querySelector("#close-edit-drawer-btn").addEventListener("click",B),d.querySelector("#edit-drawer-cancel-btn").addEventListener("click",B);const P=d.querySelector("#edit-beneficiary-drawer-form"),Y=d.querySelector("#edit-bday-input"),_=d.querySelector("#edit-birth-month"),O=d.querySelector("#edit-birth-day"),ne=d.querySelector("#edit-birth-year"),X=d.querySelector("#edit-birthday-calendar"),le=d.querySelector("#edit-birthday-error"),ce=d.querySelector("#edit-age-display"),W=d.querySelector("#edit-startDate-input"),pe=d.querySelector("#edit-endDate-input"),be=d.querySelector('input[name="seriesNo"]'),G=d.querySelector('input[name="gip_id"]'),xe=(u=O?.value||"")=>{if(!O)return;const n=Number.parseInt(_?.value||"",10),c=Number.parseInt(ne?.value||"",10),y=Number.isInteger(n)&&n>=1&&n<=12?new Date(Number.isInteger(c)&&c>=1900?c:2e3,n,0).getDate():31,k=document.createDocumentFragment(),D=document.createElement("option");D.value="",D.textContent="DD",k.append(D);for(let N=1;N<=y;N++){const A=document.createElement("option");A.value=String(N).padStart(2,"0"),A.textContent=A.value,A.selected=A.value===String(u).padStart(2,"0"),k.append(A)}O.replaceChildren(k)},me=(u=!1)=>{const n=!!(_?.value||O?.value||ne?.value),c=n?l(_?.value,O?.value,ne?.value):"";return Y&&(Y.value=c),X&&X.value!==c&&(X.value=c),ce&&(ce.value=c?i(c):""),le&&le.classList.toggle("hidden",!!c||!n||!u),{isoBirthday:c,hasBirthdayInput:n}},Se=u=>{const n=r(u);return n.iso?(_&&(_.value=n.month),ne&&(ne.value=n.year),xe(n.day),O&&(O.value=n.day),me(!1),!0):!1};_&&_.addEventListener("change",()=>{xe(),me(!1)}),O&&O.addEventListener("change",()=>me(!1)),ne&&ne.addEventListener("input",()=>{ne.value=ne.value.replace(/\D/g,"").slice(0,4),xe(),me(!1)}),X&&X.addEventListener("change",()=>{X.value&&Se(X.value)}),xe(p.day),me(!1);const x=d.querySelector("#edit-drawer-remarks"),M=d.querySelector("#edit-extension-log-container"),I=()=>{if(!M)return;const u=x.value,n=Ee();if(u==="ABSORBED"){const c=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,y=c.getTimezoneOffset()*6e4,k=new Date(c.getTime()-y).toISOString().slice(0,16);M.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${n?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${n?"text-green-500":"text-[#2e7d32]"} border-b ${n?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${k}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${e.absorb_where||""}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${e.absorb_position||""}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${e.absorb_agency||""}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `}else if(u==="RESIGNED"){const c=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,y=c.getTimezoneOffset()*6e4,k=new Date(c.getTime()-y).toISOString().slice(0,16);M.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${n?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${n?"text-red-500":"text-[#ce1126]"} border-b ${n?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${k}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};x&&x.addEventListener("change",u=>{const n="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";x.className=`${m(u.target.value)} ${n} editable-indicator`,I(),(x.value==="ABSORBED"||x.value==="RESIGNED")&&setTimeout(()=>{M.scrollIntoView({behavior:"smooth",block:"center"}),M.classList.add("pulse-highlight"),setTimeout(()=>M.classList.remove("pulse-highlight"),1500)},50)}),I();let H=!1;const Z=(u,n)=>{u.addEventListener("paste",c=>{c.preventDefault();let y=(c.clipboardData||window.clipboardData).getData("text");if(y){y=y.replace(/[-.\s]/g,"/");const k=y.split("/");if(k.length===3){const D=k[0].padStart(2,"0"),N=k[1].padStart(2,"0");let A=k[2];if(A.length===2){const R=new Date().getFullYear(),re=Math.floor(R/100)*100;A=String(re+parseInt(A))}else A=A.padStart(4,"0");const U=`${D}/${N}/${A}`;u.value=U;const z=new Event("input",{bubbles:!0});u.dispatchEvent(z);const te=window.__parseFormattedDate(U);if(te&&n&&(H||n(te),document.activeElement===u&&u.blur()),u._datepicker)u._datepicker.hide();else{const R=u.parentNode&&u.parentNode._datepicker;R&&typeof R.hide=="function"&&R.hide()}}}}),u.addEventListener("input",c=>{const y=c.target.value,k=window.__maskDate(y);if(y!==k&&(c.target.value=k),k.length===10){const D=window.__parseFormattedDate(k);if(D&&n)if(H||n(D),document.activeElement===u&&u.blur(),u._datepicker)u._datepicker.hide();else{const N=u.parentNode&&u.parentNode._datepicker;N&&typeof N.hide=="function"&&N.hide()}}}),u.addEventListener("changeDate",c=>{c.detail&&c.detail.date&&n&&(H||n(c.detail.date),u._datepicker&&u._datepicker.hide())})};W&&Z(W,u=>{if(pe){const c=new Date(u);c.setDate(c.getDate()+243);const y=String(c.getMonth()+1).padStart(2,"0"),k=String(c.getDate()).padStart(2,"0"),D=c.getFullYear();pe.value=`${y}/${k}/${D}`}const n=u.getFullYear();n>1900&&G&&be&&Promise.all([fe(`api/beneficiaries.php?next_id&year=${encodeURIComponent(n)}`),fe(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(n)}`)]).then(([c,y])=>{const k=c.success&&c.data?.success?c.data.nextId:null,D=y.success&&y.data?.success?y.data.nextSeries:null,N=String(G.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),A=String(be.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),U=N?Number(N[1]):null,z=A?Number(A[1]):null;k&&(U===null||U!==n)&&(G.value=k),D&&(z===null||z!==n)&&(be.value=D)}).catch(c=>{})}),pe&&Z(pe),window.Datepicker||typeof Datepicker<"u"&&Datepicker;const q=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),Q=d.querySelector("#edit-date-range-picker");if(q&&Q){const u=new q(Q,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});W&&(W._datepicker=u.datepickers[0]),pe&&(pe._datepicker=u.datepickers[1])}e.id&&(H=!0,fe(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(u=>{if(u.success&&u.data&&u.data.beneficiary){const n=u.data.beneficiary;if(n.birthday&&Se(n.birthday),W&&n.startDate){const c=new Date(n.startDate);isNaN(c)||(W.value=n.startDateFormatted||"",W._datepicker&&W._datepicker.setDate(c))}if(pe&&n.endDate){const c=new Date(n.endDate);isNaN(c)||(pe.value=n.endDateFormatted||"",pe._datepicker&&pe._datepicker.setDate(c))}}setTimeout(()=>{H=!1},100)}).catch(u=>{H=!1}));const K=(u,n,c)=>{const y=d.querySelector(u),k=d.querySelector(n);if(!y||!k)return;const D=()=>k.classList.add("hidden"),N=()=>k.classList.remove("hidden");y.addEventListener("focus",N),y.addEventListener("input",()=>{const A=y.value.toLowerCase().trim();let U=0;k.querySelectorAll(c).forEach(z=>{const R=(z.querySelector(".option-text")?.textContent||z.textContent||"").toLowerCase().includes(A);z.style.display=R?"block":"none",R&&U++}),U>0?N():D()}),k.addEventListener("click",A=>{const U=A.target.closest(c);U&&(y.value=(U.querySelector(".option-text")?.textContent||U.textContent||"").trim(),D(),y.dispatchEvent(new Event("change")))}),document.addEventListener("click",A=>{!y.contains(A.target)&&!k.contains(A.target)&&D()})};K("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),K("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const u=d.querySelector("#edit-office-input"),n=d.querySelector("#edit-office-suggestions-box");if(!u||!n)return;n.classList.add("mt-[52px]");let c="OFFICES",y=null,k=[];const D={textLabel:t?"text-slate-400":"text-slate-500",borderDivide:t?"border-slate-800":"border-slate-100",courseHover:t?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:t?"text-slate-300":"text-slate-700"},N=async()=>{const U="dole_offices_cache",z=async()=>{let R=[];try{const re=await fe("api/beneficiaries.php?get_offices_advanced=1");re.success&&re.data?.success&&Array.isArray(re.data.offices)&&(R=re.data.offices)}catch{}return R.length>0&&(k=R,localStorage.setItem(U,JSON.stringify({data:R,timestamp:Date.now()}))),R},te=localStorage.getItem(U);if(te)try{const{data:R,timestamp:re}=JSON.parse(te);return k=R,Date.now()-re>1800*1e3&&z().then(()=>{c==="OFFICES"&&A("OFFICES",y,u.value)}),R}catch{localStorage.removeItem(U)}return k.length===0?await z():k},A=async(U="OFFICES",z=null,te="")=>{if(c=U,y=z,U==="OFFICES"){const re=(await N()).filter(V=>V.office.toLowerCase().includes(te.toLowerCase()));n.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${D.textLabel} opacity-70 border-b ${D.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${re.length>0?re.map(V=>{const se=parseInt(V.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${D.textCourseOpt} ${D.courseHover} rounded-none ${se?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${V.id}" data-name="${V.office}" data-has-locations="${se}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-none bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-none bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${V.office}</span>
                                        </div>
                                        ${se?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                    </div>
                                `}).join(""):`
                                <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${D.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                ${te.trim()?`
                                <div class="px-2 pb-2 flex flex-col gap-1.5">
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${D.textLabel} opacity-50 px-1">New office: "${te.trim()}"</div>
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
                    `;const oe=te.trim(),T=n.querySelector("#add-office-location-row-edit"),J=n.querySelector("#new-office-loc-input-edit"),de=n.querySelector("#confirm-office-with-loc-edit"),he=n.querySelector("#add-office-with-loc-btn-edit"),ee=n.querySelector("#skip-office-loc-btn-edit");if(he&&T&&he.addEventListener("click",V=>{V.stopPropagation(),T.classList.remove("hidden"),T.classList.add("flex"),setTimeout(()=>J?.focus(),50)}),de&&J){const V=se=>{se.stopPropagation();const ve=J.value.trim();u.value=ve?`${oe} - ${ve}`:oe,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))};de.addEventListener("click",V),J.addEventListener("keydown",se=>{se.key==="Enter"&&V(se)}),J.addEventListener("click",se=>se.stopPropagation())}ee&&ee.addEventListener("click",V=>{V.stopPropagation(),u.value=oe,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))}),n.querySelectorAll(".office-code-option").forEach(V=>{V.addEventListener("click",se=>{se.stopPropagation(),V.dataset.hasLocations==="true"?A("LOCATIONS",{id:V.dataset.id,name:V.dataset.name}):(u.value=V.dataset.name,n.classList.add("hidden"),u.dispatchEvent(new Event("change")))})})}else{n.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${D.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-none">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-none bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${D.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-none bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${D.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${z.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-none transition-all"
                                    value="${te.includes(" - ")?te.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${D.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const R=n.querySelector("#loc-list-edit"),re=n.querySelector("#location-search-edit"),oe=`dole_locs_cache_${z.id}`;let T=[];const J=localStorage.getItem(oe);if(J)try{const{data:ee,timestamp:V}=JSON.parse(J);T=ee,Date.now()-V<3600*1e3}catch{localStorage.removeItem(oe)}const de=async()=>{let ee=[];if(ge&&Ce()){const{data:V,error:se}=await ge.from("office_locations").select("location").eq("office_id",z.id).order("location");!se&&V&&(ee=V)}if(ee.length===0)try{const V=await fe(`api/beneficiaries.php?get_office_locations=1&office_id=${z.id}`);V.success&&V.data?.success&&Array.isArray(V.data.locations)&&(ee=V.data.locations)}catch{}ee.length>0&&(T=ee,localStorage.setItem(oe,JSON.stringify({data:ee,timestamp:Date.now()})),he(re.value))},he=(ee="")=>{const V=T.filter(ve=>ve.location.toLowerCase().includes(ee.toLowerCase())),se=ee.trim();V.length>0?R.innerHTML=V.map(ve=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${D.textCourseOpt} ${D.courseHover} rounded-none cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${ve.location}">
                                    <div class="w-1 h-1 rounded-none bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${ve.location}</span>
                                </div>
                            `).join(""):T.length===0?R.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${D.textLabel} animate-pulse">Fetching...</div>`:(R.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${D.textLabel} opacity-60">No matching locations.</div>
                                ${se?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${se}" as location
                                    </button>
                                </div>`:""}
                            `,se&&R.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{u.value=`${z.name} - ${se}`,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))})),R.querySelectorAll(".location-option-edit").forEach(ve=>{ve.addEventListener("click",()=>{u.value=`${z.name} - ${ve.dataset.location}`,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))})})};he(re.value),de(),setTimeout(()=>re.focus(),50),re.addEventListener("input",()=>he(re.value)),re.addEventListener("click",ee=>ee.stopPropagation()),n.querySelector("#back-to-offices-edit").addEventListener("click",ee=>{ee.stopPropagation(),A("OFFICES")})}};u.addEventListener("focus",()=>{n.classList.remove("hidden"),A(c,y,u.value)}),u.addEventListener("input",()=>{c==="OFFICES"&&A("OFFICES",null,u.value)}),document.addEventListener("click",U=>{!u.contains(U.target)&&!n.contains(U.target)&&n.classList.add("hidden")})})();const g=d.querySelector("#edit-replacement-input"),v=d.querySelector("#edit-replacement-suggestions-box"),S=d.querySelector("#edit-replacement-loading");let C=null;g&&v&&(g.addEventListener("input",u=>{const n=u.target.value.trim();clearTimeout(C),v.classList.add("hidden"),!(n.length<2)&&(S&&S.classList.remove("hidden"),C=setTimeout(async()=>{try{const c=await Re(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(n)}&limit=10`);c.success&&c.data&&c.data.candidates&&c.data.candidates.length>0?(v.innerHTML=c.data.candidates.map(y=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${y.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${y.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${y.id}</span>
                                </button>
                            `).join(""),v.classList.remove("hidden")):(v.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',v.classList.remove("hidden"))}catch{}finally{S&&S.classList.add("hidden")}},400))}),v.addEventListener("click",u=>{const n=u.target.closest("button");n&&(g.value=n.dataset.name,v.classList.add("hidden"))}),document.addEventListener("click",u=>{!g.contains(u.target)&&!v.contains(u.target)&&v.classList.add("hidden")})),P.querySelectorAll("input, select, textarea").forEach(u=>{const n=(u.getAttribute("type")||"").toLowerCase(),c=!u.disabled&&!u.readOnly&&n!=="hidden";u.classList.remove("editable-indicator"),c&&u.classList.add("editable-indicator")}),P.addEventListener("submit",u=>{u.preventDefault();const{isoBirthday:n,hasBirthdayInput:c}=me(!0);if(c&&!n){_?.focus(),j.fire({toast:!0,position:"top-end",icon:"error",title:"Enter a valid birthday",text:"Complete the MM, DD, and YYYY fields.",showConfirmButton:!1,timer:3500});return}const y=N=>{const A=String(N||"").trim();if(!A)return"";const U=A.match(/^(\d{4})-(\d{2})-(\d{2})/);if(U)return`${U[1]}-${U[2]}-${U[3]}`;const z=window.__parseFormattedDate?.(A);if(!z)return A;const te=z.getFullYear(),R=String(z.getMonth()+1).padStart(2,"0"),re=String(z.getDate()).padStart(2,"0");return`${te}-${R}-${re}`},k=new FormData(P),D={};k.forEach((N,A)=>{D[A]=["birthday","startDate","endDate"].includes(A)?y(N):N}),D.birthday=n,D.id=e.id,D.gip_id=D.gip_id||e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(D,!0,!1)&&(B(),await new Promise(A=>setTimeout(A,450)),await j.fire({toast:!0,position:"bottom-end",icon:"success",title:"RECORD UPDATED",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),window.viewBeneficiary&&await window.viewBeneficiary({...D,id:e.id,gip_id:e.id},0)))()})})}let He=null,ut=null,pt=null;function gr(e,t,a,s){if(!Ce()||!ge||!t)return;const o=String(t);if(ut===o)return;He&&(ge.removeChannel(He),He=null),ut=o;const r=()=>{clearTimeout(pt),pt=setTimeout(()=>{document.getElementById("beneficiary-drawer-container")?.dataset.beneficiaryId===String(e)&&window.viewBeneficiary&&window.viewBeneficiary({...a,id:e},s)},100)},l=`beneficiary_id=eq.${t}`;He=ge.channel(`gip-drawer-logs-${o}`).on("postgres_changes",{event:"*",schema:"public",table:"daily_time_records",filter:l},r).on("postgres_changes",{event:"*",schema:"public",table:"accomplishment_reports",filter:l},r).on("postgres_changes",{event:"*",schema:"public",table:"beneficiary_documents",filter:l},r).on("postgres_changes",{event:"*",schema:"public",table:"absorption_logs",filter:l},r).subscribe(i=>{})}function Br(){window.showAddDataModal=Oe,window.__maskDate=function(e){let t=e.replace(/\D/g,"").slice(0,8);return t.length>2&&t.length<=4?t=t.slice(0,2)+"/"+t.slice(2):t.length>4&&(t=t.slice(0,2)+"/"+t.slice(2,4)+"/"+t.slice(4)),t},window.__parseFormattedDate=function(e){if(!e)return null;const t=e.split("/");if(t.length===3){const a=parseInt(t[0])-1,s=parseInt(t[1]),o=parseInt(t[2]);if(o>1e3&&a>=0&&a<12&&s>0&&s<=31)return new Date(o,a,s)}return null},window.calculateAge=function(e){if(!e)return"";const t=e instanceof Date?e:new Date(e),a=new Date;let s=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||o===0&&a.getDate()<t.getDate())&&s--,s>=0?s:0},window.viewBeneficiary=async function(e,t=0){const a=e?.id||e?.gip_id||null;if(!a)return;const s=!!(e?.name&&e?.office&&e?.remarks),o=!s;let r={...e,id:a};if(o&&Fe({id:a,_isLoadingProfile:!0,_isLoadingLogs:!0},t),!s){const p=await fe(`api/beneficiaries.php?id=${encodeURIComponent(a)}`);p.success&&p.data?.success&&p.data?.beneficiary&&(r={...p.data.beneficiary,...r,id:a})}const l=null,i=!1;r.arLogs=[],r.dtrLogs=[],r.docs=[],r._isLoadingProfile=!1,r._isLoadingLogs=!i,r._noAnimation=o,Fe(r,t);try{const p={success:!1,error:"Supabase browser read unavailable",data:{success:!1,logs:[]}},f=async()=>{const{data:O,error:ne}=await ge.from("beneficiaries").select("beneficiary_id").eq("gip_id",a).maybeSingle();if(ne||!O?.beneficiary_id)return[p,p,p,p];const X=O.beneficiary_id;gr(a,X,r,t);const[le,ce,W,pe]=await Promise.all([ge.from("accomplishment_reports").select("ar_id, period, date_submitted, status, created_at, updated_at").eq("beneficiary_id",X).order("date_submitted",{ascending:!1}),ge.from("daily_time_records").select("dtr_id, record_date, weekday, status, created_at, updated_at").eq("beneficiary_id",X).order("record_date",{ascending:!1}),ge.from("beneficiary_documents").select("doc_id, document_name, status, updated_at").eq("beneficiary_id",X).order("document_name"),ge.from("absorption_logs").select("log_id, absorption_datetime, where, position, agency").eq("beneficiary_id",X).order("absorption_datetime",{ascending:!1})]),be=(G,xe)=>({success:!G.error,data:{success:!G.error,logs:(G.data||[]).map(xe)}});return[be(le,G=>({id:G.ar_id,period:G.period,date:G.date_submitted,status:G.status,created_at:G.created_at,updated_at:G.updated_at})),be(ce,G=>({id:G.dtr_id,date:G.record_date,day:G.weekday,period:G.record_date,status:G.status,created_at:G.created_at,updated_at:G.updated_at})),be(W,G=>({id:G.doc_id,name:G.document_name,status:G.status,updated_at:G.updated_at})),be(pe,G=>({id:G.log_id,absorption_datetime:G.absorption_datetime,where:G.where,position:G.position,agency:G.agency}))]},b=()=>Promise.all([fe(`api/logs.php?type=ar&gip_id=${encodeURIComponent(a)}`),fe(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(a)}`),fe(`api/logs.php?type=docs&gip_id=${encodeURIComponent(a)}`),fe(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(a)}`)]);let m=Ce()&&ge?await f():await b();m.every(O=>O.success&&O.data?.success)||(m=await b());const[$,d,h,E]=m,w=$.success&&$.data?.success?$.data.logs:[],L=d.success&&d.data?.success?d.data.logs:[],B=h.success&&h.data?.success?h.data.logs:[],P=E.success&&E.data?.success?E.data.logs:[];if(P.length>0){const O=P[0];r.absorbDate=O.absorption_datetime,r.absorb_where=O.where||O.absorb_where,r.absorb_position=O.position||O.absorb_position,r.absorb_agency=O.agency||O.absorb_agency}const Y=JSON.stringify({ar:l?.arLogs||[],dtr:l?.dtrLogs||[],docs:l?.docs||[],absorption:[]}),_=JSON.stringify({ar:w,dtr:L,docs:B,absorption:P});if(!i||Y!==_){const O=document.getElementById("beneficiary-drawer-container");O&&O.dataset.beneficiaryId===String(a)&&(r.arLogs=w,r.dtrLogs=L,r.docs=B,r._isLoadingProfile=!1,r._isLoadingLogs=!1,Fe({...r,_noAnimation:!0},t))}}catch{{const f=document.getElementById("beneficiary-drawer-container");f&&f.dataset.beneficiaryId===String(a)&&(r._isLoadingProfile=!1,r._isLoadingLogs=!1,Fe({...r,_noAnimation:!0},t))}}},window.showAddDataModal=function(e){Oe(e)},window.editBeneficiary=function(e){pr(e)},window.showExportConfigModal=function(e){mr(e)},window.showProfileModal=function(){fr()},window.showSearchExtraStatsModal=function(){hr()}}async function fr(){try{if(Ce()&&ge){let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=s.id)}catch{}if(!e)throw new Error("User not logged in");const{data:t,error:a}=await ge.from("users").select("*").eq("user_id",e).single();if(a)throw a;gt(t)}else{let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=`?user_id=${s.id}`)}catch{}const a=await(await fetch(`${we()}api/profile.php${e}`)).json();if(a.success){const s=a.profile;gt(s)}else j.fire({icon:"error",title:"Error",text:a.error||"Failed to load profile"})}}catch{}}function gt(e){const t=e.profile_picture_path?`${we()}${e.profile_picture_path}`:null,a=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",s=`
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
                            ${t?`<img src="${t}" class="w-full h-full object-cover" />`:a}
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
    `;j.fire({html:s,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const r=o.querySelector("#profile-edit-form"),l=o.querySelector("#profile-pic-input"),i=o.querySelector("#profile-avatar-preview");l.addEventListener("change",p=>{const f=p.target.files[0];if(f){const b=new FileReader;b.onload=m=>{i.innerHTML=`<img src="${m.target.result}" class="w-full h-full object-cover" />`},b.readAsDataURL(f)}}),r.addEventListener("submit",async p=>{p.preventDefault();const f=new FormData(r);try{const b=JSON.parse(localStorage.getItem("user"));b&&b.id&&f.append("user_id",b.id)}catch{}try{const m=await(await fetch(`${we()}api/profile.php`,{method:"POST",body:f})).json();m.success?(m.profile&&(localStorage.setItem("user",JSON.stringify(m.profile)),br(m.profile)),j.close(),j.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):j.fire({icon:"error",title:"Update Failed",text:m.error||"Something went wrong"})}catch{}})}})}function br(e){const t=e.profile_picture_path?`${we()}${e.profile_picture_path}`:null,a=e.full_name?e.full_name.split(" ").map(l=>l[0]).join("").substring(0,2).toUpperCase():"US",s=document.querySelectorAll(".sidebar-user-name"),o=document.querySelectorAll(".sidebar-user-email"),r=document.querySelectorAll(".sidebar-user-avatar");s.forEach(l=>l.textContent=e.full_name),o.forEach(l=>l.textContent=e.email||"No email set"),r.forEach(l=>{t?l.innerHTML=`<img src="${t}" class="w-full h-full object-cover" />`:l.textContent=a}),localStorage.setItem("user_full_name",e.full_name),t&&localStorage.setItem("user_avatar",t)}function mr(e){const t=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",assignedUnit:"ALL",ageGroup:"ALL",dtrStatus:"ALL",arStatus:"ALL",documentStatus:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","assignedunit","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},a=`
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
                                ${[["dtr","DTR STATUS",t.dtrStatus||"ALL"],["ar","AR STATUS",t.arStatus||"ALL"],["document","REQUIRED DOCUMENTS",t.documentStatus||"ALL"]].map(([s,o,r])=>'<label class="flex items-center gap-2"><span class="w-24 shrink-0 text-[0.5625rem] font-black uppercase tracking-wider text-gray-500">'+o+'</span><select id="export-'+s+'-status" class="min-h-9 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-[0.625rem] font-black uppercase text-heading dark:border-slate-600 dark:bg-slate-800"><option value="ALL" '+(r==="ALL"?"selected":"")+'>ALL</option><option value="SUBMITTED" '+(r==="SUBMITTED"?"selected":"")+'>SUBMITTED</option><option value="PENDING" '+(r==="PENDING"?"selected":"")+'>PENDING</option><option value="REJECTED" '+(r==="REJECTED"?"selected":"")+'>REJECTED</option><option value="NOT SUBMITTED" '+(r==="NOT SUBMITTED"?"selected":"")+">NOT SUBMITTED</option></select></label>").join("")}
                            </div>
                        </div>
                        <!-- Gender Filter -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Gender Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","FEMALE","MALE"].map(s=>{const o={ALL:"peer-checked:bg-blue-600",FEMALE:"peer-checked:bg-pink-600",MALE:"peer-checked:bg-indigo-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-gender" value="${s}" ${t.gender===s?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
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
                                ${["ALL","ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(s=>{const o={ALL:"peer-checked:bg-blue-600",ONGOING:"peer-checked:bg-green-500",EXPIRED:"peer-checked:bg-red-600",RESIGNED:"peer-checked:bg-slate-600",ABSORBED:"peer-checked:bg-teal-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-remarks" value="${s}" ${t.remarks===s?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Age Filter -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Age Group Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","18-24","25-30","31-40","41+"].map(s=>{const o={ALL:"peer-checked:bg-blue-600","18-24":"peer-checked:bg-emerald-600","25-30":"peer-checked:bg-yellow-600","31-40":"peer-checked:bg-orange-600","41+":"peer-checked:bg-slate-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-age-group" value="${s}" ${t.ageGroup===s?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
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
                        ${["ID","Name","Age","Office","Assigned Unit","Start Date","End Date","Status","DTR Status","AR Status","Document Status"].map(s=>{const o=s.toLowerCase().replace(" ",""),r=t.columns.includes(o),l=`col-switch-${o}`;return`
                                <label for="${l}" class="flex min-h-10 sm:min-h-11 items-center gap-3 bg-white px-2.5 py-2 border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${l}" name="export-column" value="${o}" ${r?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="whitespace-nowrap text-[0.625rem] font-black uppercase tracking-tight text-gray-600 group-hover:text-emerald-600 sm:text-xs">${s}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>
            </form>
        </div>
    `;j.fire({html:a,width:"min(1120px, calc(100vw - clamp(0.5rem, 2vw, 1.5rem)))",showConfirmButton:!1,showCloseButton:!0,padding:"clamp(0.75rem, 2vw, 1.5rem)",customClass:{container:"font-montserrat",popup:"max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl shadow-2xl ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:s=>{const o=s.querySelector("#export-config-form"),r=o.querySelector("#export-office"),l=o.querySelector("#export-location"),i=o.querySelector("#export-year"),p=o.querySelector("#export-assigned-unit");if(p){const b=window.getExportAssignedUnits?window.getExportAssignedUnits():Ae,m=t.assignedUnit||"ALL";p.innerHTML=`<option value="ALL" ${m==="ALL"?"selected":""}>ALL ASSIGNED UNITS</option>`+b.map($=>`<option value="${$}" ${m===$?"selected":""}>${$}</option>`).join("")}if(i&&window.getExportYears){const b=window.getExportYears(),m=t.year||"ALL";let $=`<option value="ALL" ${m==="ALL"?"selected":""}>ALL YEARS</option>`;b.forEach(d=>{$+=`<option value="${d}" ${m===d?"selected":""}>${d}</option>`}),i.innerHTML=$}const f=async(b,m)=>{if(l){if(!b){l.disabled=!0,l.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}l.disabled=!1,l.innerHTML='<option value="ALL">Loading...</option>';try{const $=await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${b}`),d=$.success&&$.data?.success&&Array.isArray($.data.locations)?$.data.locations:[];let h='<option value="ALL">ALL LOCATIONS</option>';d.forEach(E=>{h+=`<option value="${E.location}" ${m===E.location?"selected":""}>${E.location}</option>`}),l.innerHTML=h}catch{l.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};r&&(async()=>{let b=[];try{const E=await window.apiGet("api/beneficiaries.php?get_offices_advanced=1");E.success&&E.data?.success&&Array.isArray(E.data.offices)&&(b=E.data.offices)}catch{}const m=t.office||"ALL";let $=`<option value="ALL" ${m==="ALL"?"selected":""}>ALL OFFICES</option>`;b.forEach(E=>{$+=`<option value="${E.office}" data-id="${E.id}" ${m===E.office?"selected":""}>${E.office}</option>`}),r.innerHTML=$;const h=r.options[r.selectedIndex]?.dataset?.id;h&&m!=="ALL"&&await f(h,t.location||"ALL"),r.addEventListener("change",async()=>{const E=r.options[r.selectedIndex];await f(E?.dataset?.id,"ALL")})})(),o.addEventListener("submit",b=>{b.preventDefault();const m=o.querySelectorAll('input[name="export-column"]:checked'),$=Array.from(m).map(Y=>Y.value),d=o.querySelector('input[name="export-gender"]:checked'),h=o.querySelector('input[name="export-section"]:checked'),E=o.querySelector('input[name="export-remarks"]:checked'),w=o.querySelector('input[name="export-age-group"]:checked'),L=o.querySelector("#export-prepared").value.trim(),B=o.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",L),localStorage.setItem("ldn_export_approved",B);const P={office:o.querySelector("#export-office").value,location:o.querySelector("#export-location")?.value||"ALL",year:o.querySelector("#export-year")?.value||"ALL",gender:d?d.value:t.gender||"ALL",assignedUnit:o.querySelector("#export-assigned-unit")?.value||"ALL",remarks:E?E.value:t.remarks||"ALL",ageGroup:w?w.value:t.ageGroup||"ALL",dtrStatus:o.querySelector("#export-dtr-status")?.value||"ALL",arStatus:o.querySelector("#export-ar-status")?.value||"ALL",documentStatus:o.querySelector("#export-document-status")?.value||"ALL",search:o.querySelector("#export-search").value.trim().toLowerCase(),sort:o.querySelector("#export-sort").value,section:h?h.value:"ALL",preparedBy:L,approvedBy:B,columns:$};e(P),j.close(),setTimeout(()=>{j.fire({toast:!0,position:"top-end",icon:"success",title:"Report configuration applied",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const et=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],St=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function Oe(e=null){const t=!!e&&!e._isBulk,a=t?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",s=t?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=Ee(),r={borderBase:o?"border-slate-800":"border-gray-100/80",borderCard:o?"border-slate-800":"border-gray-100",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgCard:o?"bg-slate-900/40":"bg-gray-50/40",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgActionBar:o?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},l=`
        <style>
            .datepicker { z-index: 99999 !important; }
            .datepicker-picker { 
                background-color: ${o?"#1e293b":"#ffffff"} !important; 
                border: 1px solid ${o?"#334155":"#e2e8f0"} !important;
                color: ${o?"#f8fafc":"#1e293b"} !important;
                border-radius: 0.75rem !important;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
            }
            .datepicker-header .datepicker-title, .datepicker-header .datepicker-controls .button { 
                color: ${o?"#f8fafc":"#1e293b"} !important;
            }
            .datepicker-cell.selected { background-color: #008148 !important; color: #fff !important; }
            .datepicker-cell:hover { background-color: ${o?"#334155":"#f1f5f9"} !important; }
            .datepicker-controls .button:hover { background-color: ${o?"#334155":"#f1f5f9"} !important; }
        </style>
        <div class="text-left font-montserrat user-select-none relative p-0 max-w-full overflow-x-hidden">
            <!-- Modal Header -->
            <div class="mb-4 pb-3 border-b ${r.borderBase} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h3 class="text-xl font-black ${r.textHeading} flex items-center gap-2.5">
                        <div class="p-2 ${r.iconBg} rounded-lg ${r.iconText} border ${r.iconBorder} shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${a}" /></svg>
                        </div>
                        ${s}
                    </h3>
                    <p class="text-[0.625rem] ${r.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Enter the details of the GIP beneficiary below.</p>
                </div>
                ${!t&&!e?._isBulk?`
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3 py-2 ${r.bgCard} border ${r.borderCard} rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 w-full sm:w-auto sm:mr-4 focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[0.625rem] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                `:""}
            </div>

            <form id="add-beneficiary-form" class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-is-edit="${t}">
                <!-- LEFT COLUMN: Personal Info Card -->
                <div class="${r.bgCard} rounded-xl p-4 sm:p-5 border ${r.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${r.dotGreen} rounded-full"></div>
                        <p class="text-[0.5625rem] uppercase font-black ${r.textSectionTitle} tracking-widest dark:text-white!">Personal & Educational Information</p>
                    </div>
                    
                    <div class="space-y-3.5">
                        <div class="group">
                            <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Full Name (Last, First, MI) <span class="text-red-500">*</span></label>
                            <input type="text" name="name" id="name-input-field" value="${e?.name||""}" required class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder} dark:text-white!" placeholder="e.g. Dela Cruz, Juan M.">
                            <div id="duplicate-warning" class="hidden mt-1 text-[0.625rem] font-bold items-center gap-1.5 animate-pulse">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Beneficiary already exist</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Contact No.</label>
                                <input type="text" name="contact" value="${e?.contact||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder} font-mono" placeholder="09XX-XXX-XXXX">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Address</label>
                                <input type="text" name="address" value="${e?.address||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" placeholder="Barangay, City">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Birthday</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="birthday" value="${e?.birthday||""}" id="birthday-input" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Age</label>
                                <input type="text" name="age" value="${e?.age||""}" id="age-display" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-black ${r.textAge} outline-none font-mono focus:ring-4 ${r.focusGreen}" placeholder="Auto/Manual">
                                <div id="age-warning" class="hidden mt-1 text-[0.625rem] font-bold items-center gap-1.5 animate-pulse">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Age must be between 18 and 29 years old</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Gender</label>
                                <select name="gender" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="Male" ${e?.gender==="Male"?"selected":""}>Male</option>
                                    <option value="Female" ${e?.gender==="Female"?"selected":""}>Female</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Education</label>
                                <div class="relative" id="education-container">
                                    <input type="text" name="education" id="education-input" autocomplete="off"
                                        value="${e?.education||""}" 
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 pl-9 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="Course/Level...">
                                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                    </div>
                                    <div id="course-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${r.borderDivide} p-1.5">
                                        ${et.map(i=>`
                                            <div class="course-option px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${i.icon}
                                                <span class="option-text">${i.name}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t ${o?"border-slate-800/70":"border-gray-100"}">
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" value="${e?.designatedBeneficiary||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${St.map(i=>`
                                        <option value="${i}" ${e?.relationshipToAssured===i?"selected":""}>${i}</option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="pt-1">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-1 h-5 bg-golden-yellow rounded-full"></div>
                            <p class="text-[0.5625rem] uppercase font-black ${r.textSectionTitle} tracking-widest">Contract Duration</p>
                        </div>
                        <div id="date-range-picker" class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1">Start Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="startDate" id="datepicker-range-start" value="${e?.startDate||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusYellow} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1">End Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="endDate" id="datepicker-range-end" value="${e?.endDate||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusRed} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: Work Details Card -->
                <div class="${r.bgCard} rounded-xl p-4 sm:p-5 border ${r.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${r.dotBlue} rounded-full"></div>
                        <p class="text-[0.5625rem] uppercase font-black ${r.textSectionTitle} tracking-widest">Work & Administrative Data</p>
                    </div>
                    
                    <div class="space-y-3.5">
                         <div class="group">
                            <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfBlue}">ID Number</label>
                            <input type="text" name="gip_id" id="full-id-input" 
                                value="${e?.id||""}" 
                                class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.6875rem] font-black ${r.idText} font-mono outline-none focus:ring-4 ${r.focusBlue} transition-all uppercase" 
                                placeholder="ROX-RD-ESIG-2025-0001" ${t?"":'readonly aria-readonly="true"'}>
                            <input type="hidden" name="id" value="${e?.id||""}">
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfBlue}">Assigned Office</label>
                                <div class="relative" id="office-container">
                                    <input type="text" name="office" id="office-input" autocomplete="off"
                                        value="${e?.office||""}" 
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="e.g. DOLE Field Office">
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                    <div id="office-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${r.borderDivide} p-1.5">
                                        <!-- Will be populated by JS -->
                                        <div class="px-3 py-4 text-center text-[0.625rem] font-bold ${r.textLabel} animate-pulse">Loading offices...</div>
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfBlue}">Series Number</label>
                                <input type="text" name="seriesNo" id="series-no-input" value="${e?.seriesNo||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-black ${o?"text-white":"text-royal-blue"} font-mono focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm" placeholder="2025-00-000">
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 tracking-widest ${o?"":"transition-colors"} ${o?"":"group-focus-within:text-royal-blue"}">Assigned Unit</label>
                            <div class="relative" id="work-container">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-3.5 h-3.5 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <input type="text" name="designation" id="designation-input" autocomplete="off"
                                    value="${e?.designation||"N/A"}"
                                    class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}" 
                                    placeholder="N/A">
                                <div id="work-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${r.borderDivide} p-2 transform origin-top transition-all duration-200">
                                    <div class="px-2 py-1.5 mb-1.5 border-b ${r.borderSuggHead}">
                                        <p class="text-[0.5625rem] font-black ${r.textWorkSuggHead} uppercase tracking-widest">Quick Select Units</p>
                                    </div>
                                    ${Ae.map(i=>`
                                        <div class="work-option px-3 py-2.5 text-[0.625rem] font-black ${r.textWorkOpt} ${r.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
                                            <div class="flex items-center gap-3">
                                                <div class="w-1.5 h-1.5 rounded-full ${r.workDot} transition-colors"></div>
                                                <span class="option-text">${i}</span>
                                            </div>
                                            <svg class="w-3 h-3 opacity-0 group-hover/opt:opacity-100 transition-opacity ${r.workArrow}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1">Replacement History (Optional)</label>
                            <input type="hidden" name="replacement" id="replacement-hidden" value="${e?.replacement||""}">
                            <div class="relative" id="replacement-container">
                                <input type="text" id="replacement-search-input" autocomplete="off"
                                    value="${e?.replacement||""}"
                                    class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.6875rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}"
                                    placeholder="Search beneficiary name...">
                                <div id="replacement-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${r.borderDivide} p-2"></div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-2">Employment Status Record</label>
                            <div class="flex flex-wrap gap-2 items-center">
                                <div class="flex flex-wrap gap-2 p-1.5 ${r.bgStatusWrap} border ${r.borderStatus} rounded-xl shadow-inner flex-1">
                                    ${(()=>{const i={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(p=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${p}" ${e?.remarks===p?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${i[p]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${p}
                                                </span>
                                            </label>
                                        `).join("")})()}
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" id="absorb-btn" 
                                        class="px-3 py-3 rounded-xl bg-[#2e7d32] text-white text-[0.625rem] font-black hover:bg-[#1b5e20] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        ABSORB
                                    </button>
                                    <button type="button" id="resign-btn" 
                                        class="px-3 py-3 rounded-xl bg-[#ce1126] text-white text-[0.625rem] font-black hover:bg-[#b71c1c] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        RESIGN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="extension-log-container" class="mt-auto transition-all duration-300">
                        <!-- Absorption Log will be injected here via JS -->
                    </div>
                </div>
            </form>

            <!-- Action Bar -->
            <div class="mt-6 flex flex-wrap lg:justify-end items-center gap-3 pt-6 rounded-b-3xl ${r.bgActionBar} border-t ${r.actionBarBorder}">
                <button type="button" id="cancel-modal-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${r.bgCancelBtn} ${r.textCancel} font-black rounded-xl hover:bg-[#ce1126] hover:text-white transition-all duration-300 shadow-sm border ${r.cancelBorder} hover:border-[#ce1126] cursor-pointer text-[0.625rem] lg:text-[0.75rem] active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-1 lg:order-2">
                    <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span>CANCEL</span>
                </button>

                <button type="submit" form="add-beneficiary-form" id="submit-beneficiary-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${r.bgSaveBtn} text-white font-black rounded-xl transition-all duration-300 shadow-lg ${r.saveShadow} cursor-pointer text-[0.625rem] lg:text-[0.75rem] transform active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-2 lg:order-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                    <span>${t?"UPDATE RECORD":"SAVE RECORD"}</span>
                </button>
            </div>
        </div>
    `;j.fire({html:l,width:window.innerWidth<640?"96vw":window.innerWidth<1024?"90vw":"1120px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"0.75rem":window.innerWidth<1024?"1.25rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:i=>{window.initFlowbite&&window.initFlowbite();const p=i.querySelector("#cancel-modal-btn");p&&p.addEventListener("click",()=>{!t&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),j.close(),e?._isBulk&&Ue.onCancel()});const f=i.querySelector("#bulk-add-btn");f&&f.addEventListener("click",()=>{j.close(),Ue.init()});const b=(g,v)=>{g.addEventListener("paste",S=>{S.preventDefault();let C=(S.clipboardData||window.clipboardData).getData("text");if(C){C=C.replace(/[-.\s]/g,"/");const u=C.split("/");if(u.length===3){const n=u[0].padStart(2,"0"),c=u[1].padStart(2,"0");let y=u[2];if(y.length===2){const U=new Date().getFullYear(),z=Math.floor(U/100)*100;y=String(z+parseInt(y))}else y=y.padStart(4,"0");const k=`${n}/${c}/${y}`;g.value=k;const D=new Event("input",{bubbles:!0});g.dispatchEvent(D);const N=window.__parseFormattedDate(k);N&&v&&(v(N),document.activeElement===g&&g.blur());const A=g._datepicker||g.parentNode&&g.parentNode._datepicker;A&&typeof A.hide=="function"&&A.hide()}}}),g.addEventListener("input",S=>{const C=window.__maskDate(S.target.value);if(S.target.value!==C&&(S.target.value=C),C.length===10){const u=window.__parseFormattedDate(C);if(u&&v){v(u),document.activeElement===g&&g.blur();const n=g._datepicker||g.parentNode&&g.parentNode._datepicker;n&&typeof n.hide=="function"&&n.hide()}}}),g.addEventListener("changeDate",S=>{if(S.detail&&S.detail.date&&v){v(S.detail.date);const C=g._datepicker||g.parentNode&&g.parentNode._datepicker;C&&typeof C.hide=="function"&&C.hide()}})},m=i.querySelector("#birthday-input"),$=i.querySelector("#age-display"),d=i.querySelector("#age-warning"),h=i.querySelector("#submit-beneficiary-btn"),E=g=>{if(!g)return d&&d.classList.add("hidden"),h&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer")),!0;const v=parseInt(g),S=!isNaN(v)&&v>=18&&v<=29;return d&&(d.className=`mt-1 text-[0.625rem] font-bold ${S?"hidden":"flex"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`),h&&(S?(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer","active:scale-[0.98]")):(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),S};if($&&($.addEventListener("input",g=>{E(g.target.value)}),$.value&&E($.value)),m){b(m,v=>{$&&($.value=window.calculateAge(v),E($.value),$.classList.add("animate-pulse"),setTimeout(()=>$.classList.remove("animate-pulse"),400))});const g=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);g&&(m._datepicker=new g(m,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const w=i.querySelector("#name-input-field"),L=i.querySelector("#duplicate-warning");if(w&&L){let g;const v=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},S=(u,n="")=>{L.className=`mt-1 text-[0.625rem] font-bold ${u?"flex":"hidden"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`;const c=L.querySelector("span");c&&(c.textContent=n?`Beneficiary already exists: ${n}`:"Beneficiary already exists")},C=async u=>{const n=v(),c=await fetch(`${we()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...n?{"X-User-Id":String(n)}:{}},body:JSON.stringify({name:u,user_id:n,exclude_id:t?e?.id:null})});if(!c.ok)throw new Error(`Duplicate check failed (${c.status})`);return c.json()};w.addEventListener("input",u=>{const n=u.target.value.trim();if(clearTimeout(g),n.length<3){S(!1);return}g=setTimeout(async()=>{try{const c=await C(n);c.success&&c.exists?S(!0,c.match||c.name):S(!1)}catch{}},500)}),e?.name&&(S(!1),(async()=>{const u=await C(e.name);u.success&&u.exists&&S(!0,u.match||u.name)})())}const B=i.querySelector("#full-id-input"),P=i.querySelector("#series-no-input"),Y=i.querySelector('input[name="startDate"]'),_=i.querySelector('input[name="endDate"]'),O=i.querySelectorAll('input[name="remarks"]'),ne=i.querySelector("#extension-log-container"),X=async g=>{if(!g)return;const v=[B,P].filter(Boolean);v.forEach(S=>{S.classList.add("animate-pulse"),S.placeholder="Syncing..."});try{const[S,C]=await Promise.all([fe(`api/beneficiaries.php?next_id&year=${encodeURIComponent(g)}`),fe(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(g)}`)]),u=S.success&&S.data?.success?S.data.nextId:null,n=C.success&&C.data?.success?C.data.nextSeries:null;u&&B&&(B.value=u),n&&P&&(P.value=n)}catch{}finally{v.forEach(S=>S.classList.remove("animate-pulse"))}},le=i.querySelector("#replacement-search-input"),ce=i.querySelector("#replacement-hidden"),W=i.querySelector("#replacement-suggestions"),pe=g=>{const v=(g.name||"").toUpperCase().trim(),S=g.startDateFormatted||g.startDate||"N/A",C=g.endDateFormatted||g.endDate||"N/A";return`${v} (${S.toUpperCase()} - ${C.toUpperCase()})`},be=g=>{if(W){if(!g.length){W.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt}">No matching beneficiary found.</div>`,W.classList.remove("hidden");return}W.innerHTML=g.map(v=>{const S=pe(v);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${S.replace(/"/g,"&quot;")}">
                            ${S}
                        </button>
                    `}).join(""),W.classList.remove("hidden"),W.querySelectorAll(".replacement-option").forEach(v=>{v.addEventListener("click",()=>{const S=v.getAttribute("data-replacement")||"";le&&(le.value=S),ce&&(ce.value=S),W.classList.add("hidden")})})}};let G=null;const xe=async(g="")=>{const v=(g||"").trim(),S=`api/beneficiaries.php?replacement_candidates=1&limit=20${v?`&q=${encodeURIComponent(v)}`:""}`,C=await fe(S);C.success&&C.data?.success&&Array.isArray(C.data.candidates)&&be(C.data.candidates)};le&&ce&&W&&(le.addEventListener("focus",()=>{xe(le.value||"")}),le.addEventListener("input",()=>{ce.value=le.value.trim(),clearTimeout(G),G=setTimeout(()=>{xe(le.value||"")},250)}),document.addEventListener("click",g=>{le&&W&&!le.contains(g.target)&&!W.contains(g.target)&&W.classList.add("hidden")}));const me=()=>{const g=i.querySelector('input[name="remarks"]:checked');return g?g.value:"ONGOING"},Se=g=>{const v=i.querySelector(`input[name="remarks"][value="${g}"]`);v&&(v.checked=!0,M())},x=()=>{if(_&&_.value){const g=window.__parseFormattedDate(_.value);if(!g)return;const v=new Date;v.setHours(0,0,0,0);let S="ONGOING";g<v&&(S="EXPIRED"),Se(S)}},M=()=>{if(!ne)return;const g=me();if(g==="ABSORBED"){const v=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,S=v.getTimezoneOffset()*6e4,C=new Date(v.getTime()-S).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${C}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Where?</label>
                                    <input type="text" name="absorb_where" value="${e?.absorb_where||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Where to absorb?">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Position</label>
                                    <input type="text" name="absorb_position" value="${e?.absorb_position||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="What kind of position?">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Agency</label>
                                    <input type="text" name="absorb_agency" value="${e?.absorb_agency||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="On what agency?">
                                </div>
                            </div>
                        </div>
                    `}else if(g==="RESIGNED"){const v=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,S=v.getTimezoneOffset()*6e4,C=new Date(v.getTime()-S).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${C}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ne.innerHTML=""};if(Y){let g=null;b(Y,u=>{const n=u.getFullYear();if(_){const c=new Date(u);c.setDate(c.getDate()+243);const y=String(c.getMonth()+1).padStart(2,"0"),k=String(c.getDate()).padStart(2,"0"),D=c.getFullYear();_.value=`${y}/${k}/${D}`}x(),n>1900&&n!==g&&(g=n,X(n))}),_&&b(_,()=>x());const v=i.querySelector("#date-range-picker"),S=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),C=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(S&&v&&Y&&_){const u=new S(v,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});Y._datepicker=u.datepickers?.[0]||null,_._datepicker=u.datepickers?.[1]||null}else C&&(Y&&(Y._datepicker=new C(Y,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),_&&(_._datepicker=new C(_,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!t){const u=new Date().getFullYear();X(u)}}O.forEach(g=>g.addEventListener("change",M));const I=i.querySelector("#resign-btn"),H=i.querySelector("#absorb-btn");I&&I.addEventListener("click",()=>Se("RESIGNED")),H&&H.addEventListener("click",()=>Se("ABSORBED")),i.querySelectorAll('input[type="text"], textarea').forEach(g=>{["id-number-input","full-id-input"].includes(g.id)||g.addEventListener("input",()=>{const v=g.selectionStart,S=g.selectionEnd;g.value=g.value.toUpperCase(),g.setSelectionRange(v,S)})}),x(),M(),q("education-input","course-suggestions","course-option"),q("designation-input","work-suggestions","work-option"),(()=>{const g=i.querySelector("#office-input"),v=i.querySelector("#office-suggestions");if(!g||!v)return;let S="OFFICES",C=null,u=[];const n=async()=>{const y="dole_offices_cache",k=async()=>{let N=[];try{if(ge&&Ce()){const[{data:A,error:U},{data:z}]=await Promise.all([ge.from("offices").select("*").order("office"),ge.from("office_locations").select("office_id")]);if(!U&&A?.length){const te={};z&&z.forEach(R=>{te[R.office_id]=(te[R.office_id]||0)+1}),N=A.map(R=>({id:R.id??R.office_id,office:R.office||R.office_name||"",location_count:te[R.id??R.office_id]||0})).filter(R=>R.office)}}}catch{}if(!N.length)try{const A=await fe("api/beneficiaries.php?get_offices_advanced=1");A.success&&A.data?.success&&Array.isArray(A.data.offices)&&(N=A.data.offices)}catch{}return N.length>0&&(u=N,localStorage.setItem(y,JSON.stringify({data:N,timestamp:Date.now()}))),N},D=localStorage.getItem(y);if(D)try{const{data:N,timestamp:A}=JSON.parse(D);return u=N,Date.now()-A>300*1e3&&k().then(()=>{S==="OFFICES"&&c("OFFICES",C,g.value)}),N}catch{localStorage.removeItem(y)}return u.length===0?await k():u},c=async(y="OFFICES",k=null,D="")=>{if(S=y,C=k,y==="OFFICES"){const A=(await n()).filter(T=>T.office.toLowerCase().includes(D.toLowerCase()));v.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70 border-b ${r.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${A.length>0?A.map(T=>{const J=parseInt(T.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg ${J?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${T.id}" data-name="${T.office}" data-has-locations="${J}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${T.office}</span>
                                            </div>
                                            ${J?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                        </div>
                                    `}).join(""):`
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${D.trim()?`
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-50 px-1">New office: "${D.trim()}"</div>
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
                        `;const U=D.trim(),z=v.querySelector("#add-office-location-row-modal"),te=v.querySelector("#new-office-loc-input-modal"),R=v.querySelector("#confirm-office-with-loc-modal"),re=v.querySelector("#add-office-with-loc-btn-modal"),oe=v.querySelector("#skip-office-loc-btn-modal");if(re&&z&&re.addEventListener("click",T=>{T.stopPropagation(),z.classList.remove("hidden"),z.classList.add("flex"),setTimeout(()=>te?.focus(),50)}),R&&te){const T=J=>{J.stopPropagation();const de=te.value.trim();g.value=de?`${U} - ${de}`:U,g.dataset.locationName=de||"",v.classList.add("hidden"),g.dispatchEvent(new Event("change"))};R.addEventListener("click",T),te.addEventListener("keydown",J=>{J.key==="Enter"&&T(J)}),te.addEventListener("click",J=>J.stopPropagation())}oe&&oe.addEventListener("click",T=>{T.stopPropagation(),g.value=U,g.dataset.locationName="",v.classList.add("hidden"),g.dispatchEvent(new Event("change"))}),v.querySelectorAll(".office-code-option").forEach(T=>{T.addEventListener("click",J=>{J.stopPropagation(),T.dataset.hasLocations==="true"?c("LOCATIONS",{id:T.dataset.id,name:T.dataset.name}):(g.value=T.dataset.name,g.dataset.officeId=T.dataset.id,delete g.dataset.locationName,v.classList.add("hidden"),g.dispatchEvent(new Event("change")))})})}else{v.innerHTML=`
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
                                    <input type="text" id="location-search-internal" placeholder="Search in ${k.name}..." 
                                        class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-900/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                        value="${D.includes(" - ")?D.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const N=v.querySelector("#locations-list-container"),A=v.querySelector("#location-search-internal"),U=`dole_locs_cache_${k.id}`;let z=[];const te=localStorage.getItem(U);if(te)try{const{data:oe,timestamp:T}=JSON.parse(te);z=oe}catch{localStorage.removeItem(U)}const R=async()=>{let oe=[];if(ge&&Ce()){const{data:T,error:J}=await ge.from("office_locations").select("location").eq("office_id",k.id).order("location");!J&&T&&(oe=T)}if(oe.length===0)try{const T=await fe(`api/beneficiaries.php?get_office_locations=1&office_id=${k.id}`);T.success&&T.data?.success&&Array.isArray(T.data.locations)&&(oe=T.data.locations)}catch{}oe.length>0&&(z=oe,localStorage.setItem(U,JSON.stringify({data:oe,timestamp:Date.now()})),re(A.value))},re=(oe="")=>{const T=z.filter(de=>de.location.toLowerCase().includes(oe.toLowerCase())),J=oe.trim();T.length>0?N.innerHTML=T.map(de=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${de.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${de.location}</span>
                                    </div>
                                `).join(""):z.length===0?N.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(N.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60">No matching locations.</div>
                                    ${J?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${J}" as location
                                        </button>
                                    </div>`:""}
                                `,J&&N.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{g.value=`${k.name} - ${J}`,g.dataset.officeId=k.id,g.dataset.locationName=J,v.classList.add("hidden"),g.dispatchEvent(new Event("change"))})),N.querySelectorAll(".location-option").forEach(de=>{de.addEventListener("click",he=>{const ee=de.dataset.location;g.value=`${k.name} - ${ee}`,g.dataset.officeId=k.id,g.dataset.locationName=ee,v.classList.add("hidden"),g.dispatchEvent(new Event("change"))})})};re(A.value),R(),setTimeout(()=>A.focus(),50),A.addEventListener("input",()=>re(A.value)),A.addEventListener("click",oe=>oe.stopPropagation()),v.querySelector("#back-to-offices").addEventListener("click",oe=>{oe.stopPropagation(),c("OFFICES")})}};g.addEventListener("focus",()=>{v.classList.remove("hidden"),c(S,C,g.value)}),g.addEventListener("input",()=>{delete g.dataset.officeId,delete g.dataset.locationName,S="OFFICES",C=null,v.classList.remove("hidden"),c("OFFICES",null,g.value)}),document.addEventListener("click",y=>{!g.contains(y.target)&&!v.contains(y.target)&&(v.classList.add("hidden"),g.value||(S="OFFICES",C=null))})})();function q(g,v,S){const C=i.querySelector(`#${g}`),u=i.querySelector(`#${v}`);if(!C||!u)return;let n=!1;C.addEventListener("focus",()=>u.classList.remove("hidden")),document.addEventListener("click",c=>{!C.contains(c.target)&&!u.contains(c.target)&&u.classList.add("hidden")}),C.addEventListener("input",()=>{if(n){n=!1;return}const c=C.value.toLowerCase(),y=u.querySelectorAll(`.${S}`);let k=!1;y.forEach(D=>{const N=D.querySelector(".option-text");(N?N.innerText:D.innerText).toLowerCase().includes(c)?(D.style.display="block",k=!0):D.style.display="none"}),k?u.classList.remove("hidden"):u.classList.add("hidden")}),u.addEventListener("click",c=>{const y=c.target.closest(`.${S}`);if(!y)return;const k=y.querySelector(".option-text");C.value=k?k.innerText.trim():y.innerText.trim(),n=!0,u.classList.add("hidden"),C.dispatchEvent(new Event("change"))})}const Q=i.querySelector("#add-beneficiary-form"),K="add_beneficiary_draft";if(!t){const g=localStorage.getItem(K);if(g)try{const v=JSON.parse(g);Object.entries(v).forEach(([S,C])=>{const u=Q.elements[S];u&&u.type!=="file"&&u.type!=="hidden"&&(u.value=C)})}catch{}}Q.addEventListener("input",g=>{if(!t){const v=new FormData(Q),S={};v.forEach((C,u)=>S[u]=C),localStorage.setItem(K,JSON.stringify(S))}});let F=!1;Q&&Q.addEventListener("submit",async g=>{if(g.preventDefault(),F)return;Q.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(he=>{he.classList.remove("ring-2","ring-red-500","!border-red-500")});const S=new FormData(Q);let C=!1;const u=he=>{const ee=Q.querySelector(`[name="${he}"]`);ee&&ee.classList.add("ring-2","ring-red-500","!border-red-500"),C=!0},n=S.get("name"),c=S.get("contact"),y=S.get("startDate"),k=S.get("endDate"),D=(S.get("designation")||"").trim(),N=S.get("birthday"),A=(S.get("office")||"").trim(),U=S.get("remarks"),z=(S.get("gip_id")||"").trim();(!n||n.trim()===""||/[0-9]/.test(n))&&u("name"),c&&c.trim()!==""&&/[^0-9]/.test(c.replace(/[\s\-\+\(\)]/g,""))&&u("contact"),(!N||!window.__parseFormattedDate(N))&&u("birthday"),(!y||!window.__parseFormattedDate(y))&&u("startDate"),(!k||!window.__parseFormattedDate(k))&&u("endDate");const te=window.__parseFormattedDate(y),R=window.__parseFormattedDate(k);te&&R&&R<te&&(u("startDate"),u("endDate")),A||u("office"),U||u("remarks"),!t&&!/^ROX-RD-ESIG-\d{4}-\d{4}$/.test(z)&&u("gip_id"),!t&&L&&!L.classList.contains("hidden")&&u("name");const re=S.get("age"),oe=parseInt(re);if((!re||isNaN(oe)||oe<18||oe>29)&&(C=!0,d&&(d.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof Ee=="function"&&Ee()?"text-red-400":"text-red-600"}`),h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),C)return;const T={};S.forEach((he,ee)=>{if(["birthday","startDate","endDate"].includes(ee)){const V=window.__parseFormattedDate(he);if(V){const se=V.getFullYear(),ve=String(V.getMonth()+1).padStart(2,"0"),Et=String(V.getDate()).padStart(2,"0");T[ee]=`${se}-${ve}-${Et}`}else T[ee]=he}else T[ee]=he}),D||(T.designation="N/A"),T.replacement||(T.replacement="");const J=i.querySelector("#office-input");J?.dataset.officeId&&(T.officeId=J.dataset.officeId),J?.dataset.locationName&&(T.locationName=J.dataset.locationName);const de=i.querySelector("#full-id-input")?.value;if(t?(T.id=e?.id,de&&(T.gip_id=de)):(T.id=null,de&&(T.gip_id=de)),window.addBeneficiaryData){F=!0,h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed"));try{if(await window.addBeneficiaryData(T)){if(!t){const ee="add_beneficiary_draft",V=Q.querySelector('[name="office"]')?.value||"",se=Q.querySelector('[name="designation"]')?.value||"",ve=Q.querySelector('[name="education"]')?.value||"";localStorage.setItem(ee,JSON.stringify({office:V,designation:se,education:ve}))}j.close(),setTimeout(()=>{j.fire({toast:!0,position:"bottom-end",icon:"success",title:`Record ${t?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!t&&e?._isBulk&&Ue.onSaveSuccess()},100)}}finally{F=!1,h&&document.body.contains(h)&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed"))}}})}})}window.handleContactSubmit=async function(e){e.preventDefault();const t=e.target,a=t.querySelector('button[type="submit"]'),s=a.innerHTML;a.disabled=!0,a.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(t);if((await fetch(t.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)j.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:l=>{l.addEventListener("mouseenter",j.stopTimer),l.addEventListener("mouseleave",j.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),t.reset();else throw new Error("Failed to send")}catch{j.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{a.disabled=!1,a.innerHTML=s}return!1};function hr(){j.fire({html:`
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
        `,width:"800px",showConfirmButton:!1,showCloseButton:!1,backdrop:!0,position:"top",scrollbarPadding:!1,customClass:{container:"font-montserrat !backdrop-blur-md !bg-slate-900/70",popup:"!bg-transparent border-0 !shadow-none p-0 !overflow-visible mt-24",htmlContainer:"!overflow-visible",closeButton:"hidden"},didOpen:()=>{const e=document.getElementById("extraStatsSearchForm"),t=document.getElementById("statsSearchInput"),a=document.getElementById("statsDatePickerContainer"),s=document.getElementById("datepicker-range-start"),o=document.getElementById("datepicker-range-end"),r=document.getElementById("statsSortDropdownBtn"),l=document.getElementById("statsSortDropdown"),i=document.getElementById("statsSortDropdownLabel");let p="keyword";r&&l&&(r.addEventListener("click",f=>{f.stopPropagation(),l.classList.toggle("hidden")}),document.querySelectorAll(".stats-sort-option").forEach(f=>{f.addEventListener("click",b=>{const m=b.target.getAttribute("data-sort");p=m,i.textContent=b.target.textContent,l.classList.add("hidden"),m==="date"?(t.classList.add("hidden"),t.required=!1,a.classList.remove("hidden"),a.classList.add("flex"),t.value=""):(a.classList.add("hidden"),a.classList.remove("flex"),t.classList.remove("hidden"),t.required=!1,s.value="",o.value="",m==="offices"?t.placeholder="Search by Office name (e.g. Iligan)...":m==="education"?t.placeholder="Search by Education level (e.g. College)...":m==="ages"?t.placeholder="Search by Age (e.g. 24)...":t.placeholder="Search by name, office, status...")})}),document.addEventListener("click",f=>{!r.contains(f.target)&&!l.contains(f.target)&&l.classList.add("hidden")})),setTimeout(()=>t?.focus(),100),e.addEventListener("submit",async f=>{f.preventDefault();const b={mode:p,query:t.value.trim().toLowerCase(),startDate:s.value,endDate:o.value};await xr(b)})}})}async function xr(e){const t=document.getElementById("statsSearchLoader"),a=document.getElementById("statsSearchResult");t.classList.remove("hidden"),a.classList.add("hidden"),a.classList.remove("grid");let s=await Ve();if(!s||s.length===0){const o=await fe("api/beneficiaries.php?all=true");o&&o.status==="success"&&o.data?(s=o.data,typeof Te=="function"&&Te(s)):o&&o.data&&(s=Array.isArray(o.data)?o.data:Array.isArray(o)?o:[],typeof Te=="function"&&Te(s))}setTimeout(()=>{const{mode:o,query:r,startDate:l,endDate:i}=e,p=s.filter(d=>{if(o==="date"){const h=d.startDate||d.createdAt;if(!h)return!1;const E=new Date(h);if(isNaN(E.getTime()))return!1;if(E.setHours(0,0,0,0),l){const w=new Date(l);if(w.setHours(0,0,0,0),E<w)return!1}if(i){const w=new Date(i);if(w.setHours(0,0,0,0),E>w)return!1}return!0}else return o==="offices"?d.office?.toLowerCase().includes(r)||!1:o==="education"?d.education?.toLowerCase().includes(r)||!1:o==="ages"?d.age==r:r?d.name?.toLowerCase().includes(r)||!1||d.id?.toLowerCase().includes(r)||!1||d.office?.toLowerCase().includes(r)||!1||d.remarks?.toLowerCase().includes(r)||!1||d.designation?.toLowerCase().includes(r)||!1:!0});let f="";o==="date"?l&&i?f=`Date: ${l} to ${i}`:l?f=`Date: From ${l}`:i?f=`Date: Until ${i}`:f="Date: All Time":f=`${o.charAt(0).toUpperCase()+o.slice(1)}: "${r||"ALL"}"`,document.getElementById("statsSearchTermDisplay").textContent=f;const b=document.getElementById("statsTopResults");b&&(b.innerHTML="",p.length>0?p.slice(0,3).forEach(h=>{const E=(h.remarks||"No Status").toUpperCase();let w="text-gray-500";E==="ONGOING"?w="text-green-500":E==="EXPIRED"?w="text-red-500":E==="ABSORBED"?w="text-emerald-600":E==="RESIGNED"?w="text-[#ce1126]":w="text-royal-blue",b.innerHTML+=`
                        <div class="flex flex-col border-b border-gray-200 dark:border-slate-700 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-100 truncate">${h.name||"Unknown Beneficiary"}</span>
                            <div class="flex justify-between items-center text-xs mt-1">
                                <span class="text-gray-500 truncate max-w-[60%]">${h.office||"N/A"}</span>
                                <span class="${w} font-bold text-[10px] uppercase tracking-wider">${E}</span>
                            </div>
                        </div>
                    `}):b.innerHTML='<div class="text-center text-gray-400 font-bold text-xs mt-6 uppercase tracking-widest">No matching records found.</div>'),p.length,p.filter(d=>(d.remarks||"").toUpperCase()==="ONGOING").length,p.filter(d=>(d.remarks||"").toUpperCase()==="EXPIRED").length,p.filter(d=>(d.remarks||"").toUpperCase()==="ABSORBED").length,p.filter(d=>(d.remarks||"").toUpperCase()==="RESIGNED").length;const m=new Date,$={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};document.getElementById("statsCurrentDateTime").textContent=m.toLocaleString("en-US",$),Qt(p,"statsModalChartContainer"),t.classList.add("hidden"),a.classList.remove("hidden"),a.classList.add("grid")},400)}export{Ae as C,yt as _,Re as a,fe as b,Cr as c,$r as d,Ar as e,kr as f,we as g,Ir as h,Ce as i,Sr as j,Er as k,Lr as l,We as m,Br as n,Dr as r,ge as s,br as u};
