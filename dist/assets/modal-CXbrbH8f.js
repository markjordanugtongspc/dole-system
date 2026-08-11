const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-BS-fTmyB.js","./vendor-DpcThRKv.js"])))=>i.map(i=>d[i]);
import j from"./vendor-swal-DtO_vauN.js";import{a as Dt}from"./vendor-DpcThRKv.js";import{A as Je}from"./vendor-charts-C6WbJKf0.js";const $t="true".toLowerCase()==="true";function Ce(){return $t}function ye(){const e=window.location.pathname,t="/dole-system/",o=e.toLowerCase().indexOf(t.toLowerCase());if(o!==-1)return e.substring(0,o+t.length);const s=e.indexOf("/frontend/");if(s!==-1)return e.substring(0,s+1);const a=e.indexOf("/backend/");return a!==-1?e.substring(0,a+1):"/"}function tt(e="Incorrect Username or Password"){j.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Ct(e=!1){return j.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function kr(){const e=localStorage.getItem("hasVisitedBefore"),t=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),t&&(t.style.display="none")),window.addEventListener("load",()=>{const o=document.querySelector("body > *:not(.page-loader)");o&&o.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),t&&t.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const je={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const t=a=>a.split("").map(r=>r.charCodeAt(0)),o=a=>("0"+Number(a).toString(16)).substr(-2),s=a=>t(this._key).reduce((r,l)=>r^l,a);return e.split("").map(t).map(s).map(o).join("")}catch{return null}},decrypt:function(e){try{const t=s=>s.split("").map(a=>a.charCodeAt(0)),o=s=>t(this._key).reduce((a,r)=>a^r,s);return e.match(/.{1,2}/g).map(s=>parseInt(s,16)).map(o).map(s=>String.fromCharCode(s)).join("")}catch{return null}}};function Sr(){document.querySelectorAll(".login-form-shared").forEach(t=>{const o=t.querySelector('input[name="username"]'),s=t.querySelector('input[name="password"]'),a=t.querySelector('input[name="rememberMe"]');if(o&&s&&a){const r=localStorage.getItem("secure_user"),l=localStorage.getItem("secure_pass");if(r&&l){const i=je.decrypt(r),p=je.decrypt(l);i&&p&&(o.value=i,s.value=p,a.checked=!0)}}t.addEventListener("submit",async r=>{r.preventDefault();try{const i=await(await fetch(`${ye()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o.value,password:s.value})})).json();if(i.success){a.checked?(localStorage.setItem("secure_user",je.encrypt(o.value)),localStorage.setItem("secure_pass",je.encrypt(s.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const p=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(i.user));const b=document.getElementById("drawer-login");if(b){b.classList.add("translate-y-full");const f=b.querySelector("[data-drawer-hide]");f&&f.click()}await Ct(p),At(p)}else{const p=document.getElementById("drawer-login");p?(p.classList.add("translate-y-full"),setTimeout(()=>{tt(),setTimeout(()=>{p.classList.remove("translate-y-full"),s.value="",s.focus()},600)},400)):(tt(),s.value="",s.focus())}}catch{j.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function At(e=!1){const t=document.getElementById("left-panel"),o=document.getElementById("right-panel"),s=document.getElementById("left-panel-content"),a=document.getElementById("right-panel-content");s&&(s.style.opacity="0"),a&&(a.style.opacity="0");const r=document.createElement("div");r.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const l=e?"":"animate__delay-1s",i=e?"animation-duration: 0.8s;":"animation-duration: 2s;";r.innerHTML=`
        <img src="${ye()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${l}" style="${i}" alt="DOLE Logo">
    `,document.body.appendChild(r);const p=e?0:1e3,b=e?600:1500;setTimeout(()=>{t&&t.classList.add("animate-slide-left"),o&&o.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${ye()}frontend/dashboard/`},b)},p)}function Er(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${ye()}`})}function Lr(){const e=document.getElementById("mobile-splash"),t=document.getElementById("show-login-btn"),o=document.getElementById("back-to-splash"),s=document.getElementById("mobile-bg-content"),a=document.getElementById("mobile-welcome-text"),r=document.getElementById("reopen-login-drawer"),l=document.getElementById("request-notifications-btn"),i=async()=>{"Notification"in window&&await Notification.requestPermission()==="granted"&&l&&l.classList.add("hidden")};Notification.permission==="default"&&l&&(l.classList.remove("hidden"),l.addEventListener("click",i));const p=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&i();const h=document.getElementById("drawer-login");h&&h.classList.remove("translate-y-full")},800))},b=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};t&&t.addEventListener("click",p),document.querySelectorAll(".forgot-password-link").forEach(h=>{h.addEventListener("click",E=>{E.target.closest("#mobile-splash")&&p()})}),o&&o.addEventListener("click",()=>{const h=document.getElementById("drawer-login");if(h){h.classList.add("translate-y-full");const E=h.querySelector("[data-drawer-hide]");E&&E.click()}b()});const m=document.getElementById("drawer-login"),D=document.getElementById("curved-welcome"),d=document.getElementById("peoples-bg");m&&new MutationObserver(E=>{E.forEach(y=>{y.attributeName==="class"&&(m.classList.contains("translate-y-full")?(s&&(s.style.transform="translateY(0)"),a&&(a.style.opacity="1",a.style.transform="translateY(0) scale(1)"),D&&(D.style.opacity="0",D.style.transform="scale(0.5)"),r&&e&&e.style.visibility==="hidden"&&(r.style.opacity="1",r.style.transform="scale(1)"),d&&(d.classList.add("opacity-0","scale-0"),d.classList.remove("opacity-40","scale-[1.6]"))):(s&&(s.style.transform="translateY(-35%)"),a&&(a.style.opacity="0",a.style.transform="translateY(20px) scale(0.9)"),D&&(D.style.opacity="1",D.style.transform="scale(1)"),r&&(r.style.opacity="0",r.style.transform="scale(0)"),d&&(d.classList.remove("opacity-0","scale-0"),d.classList.add("opacity-40","scale-[1.6]"))))})}).observe(m,{attributes:!0})}const Be=()=>"false".toLowerCase()==="true";const Le={debug(...e){Be()},info(...e){Be()},warn(...e){Be()},error(...e){},table(e){Be()},json(e,t){Be()}},Pe=new Map;async function Re(e,t={}){const s=`${ye()}${e}`;let a=null;try{const f=JSON.parse(localStorage.getItem("user"));f&&(a=f.user_id||f.id||null)}catch{}const r={headers:{"Content-Type":"application/json",...a?{"X-User-Id":a}:{},...t.headers},...t},i=(r.method||"GET").toUpperCase()==="GET"?2:1;let p=null;for(let f=1;f<=i;f++)try{if(Le.debug("[API] Request",{url:s,method:r.method||"GET",hasUserId:!!a}),r.body)try{Le.json("[API] Payload",JSON.parse(r.body))}catch{Le.debug("[API] Payload (raw)",r.body)}const m=await fetch(s,r);if(!m.ok)throw new Error(`HTTP ${m.status}: ${m.statusText}`);const D=await m.json();return Pe.has(s)&&(Pe.delete(s),Le.info?.("[API] Recovered",{url:s})),Le.debug("[API] Response",{url:s,ok:!0}),{success:!0,data:D}}catch(m){if(p=m,m instanceof TypeError&&/fetch/i.test(m.message||"")&&f<i){await new Promise(h=>setTimeout(h,1200));continue}}return p instanceof TypeError&&/fetch/i.test(p.message||"")?Pe.get(s)||(Pe.set(s,!0),Le.error("API Request Network Error (suppressed for repeats):",{url:s,message:p.message})):Le.error("API Request Error:",p),{success:!1,error:p?.message||"Unknown request error"}}async function be(e){return Re(e,{method:"GET"})}async function ft(e,t){return Re(e,{method:"POST",body:JSON.stringify(t)})}async function It(e,t){return Re(e,{method:"PUT",body:JSON.stringify(t)})}async function Dr(e,t){const o=new URLSearchParams(t).toString();return Re(`${e}?${o}`,{method:"PATCH"})}function $r(){typeof window.initFlowbite=="function"&&window.initFlowbite()}function Cr(e){return JSON.stringify(e)}const Bt="dole-gip-db",Mt=2,le={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let qe=null;function Ie(){return qe?Promise.resolve(qe):new Promise((e,t)=>{const o=indexedDB.open(Bt,Mt);o.onupgradeneeded=s=>{const a=s.target.result;if(!a.objectStoreNames.contains(le.BENEFICIARIES)){const r=a.createObjectStore(le.BENEFICIARIES,{keyPath:"id"});r.createIndex("name","name",{unique:!1}),r.createIndex("office","office",{unique:!1}),r.createIndex("remarks","remarks",{unique:!1})}a.objectStoreNames.contains(le.SYNC_QUEUE)||a.createObjectStore(le.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),a.objectStoreNames.contains(le.METADATA)||a.createObjectStore(le.METADATA,{keyPath:"key"}),a.objectStoreNames.contains(le.APP_CACHE)||a.createObjectStore(le.APP_CACHE,{keyPath:"key"})},o.onsuccess=s=>{qe=s.target.result,e(qe)},o.onerror=s=>{t(s.target.error)}})}async function Te(e){const t=await Ie();return new Promise((o,s)=>{const a=t.transaction(le.BENEFICIARIES,"readwrite"),r=a.objectStore(le.BENEFICIARIES);r.clear(),e.forEach(l=>{const i={...l,id:l.id||l.gip_id};r.put(i)}),a.oncomplete=()=>{Tt("beneficiaries_last_sync",Date.now()),o(e.length)},a.onerror=()=>s(a.error)})}async function Ve(){const e=await Ie();return new Promise((t,o)=>{const r=e.transaction(le.BENEFICIARIES,"readonly").objectStore(le.BENEFICIARIES).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>o(r.error)})}async function Nt(){const e=await ht("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function mt(){const e=await Ie();return new Promise((t,o)=>{const l=e.transaction(le.SYNC_QUEUE,"readonly").objectStore(le.SYNC_QUEUE).index("status").getAll("pending");l.onsuccess=()=>t(l.result||[]),l.onerror=()=>o(l.error)})}async function Tt(e,t){const o=await Ie();return new Promise((s,a)=>{const i=o.transaction(le.METADATA,"readwrite").objectStore(le.METADATA).put({key:e,value:t});i.onsuccess=()=>s(),i.onerror=()=>a(i.error)})}async function ht(e){const t=await Ie();return new Promise((o,s)=>{const l=t.transaction(le.METADATA,"readonly").objectStore(le.METADATA).get(e);l.onsuccess=()=>o(l.result?.value??null),l.onerror=()=>s(l.error)})}function Ot(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function _t(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch{return null}}async function Rt(e,t){const o=await Ie();return new Promise((s,a)=>{const l=o.transaction(le.APP_CACHE,"readwrite").objectStore(le.APP_CACHE),i={key:e,data:Ot(t),updated_at:Date.now()},p=l.put(i);p.onsuccess=()=>{s()},p.onerror=()=>a(p.error)})}async function jt(e){const t=await Ie();return new Promise((o,s)=>{const l=t.transaction(le.APP_CACHE,"readonly").objectStore(le.APP_CACHE).get(e);l.onsuccess=()=>{l.result&&l.result.data?o(_t(l.result.data)):o(null)},l.onerror=()=>s(l.error)})}async function Pt(){const[e,t]=await Promise.all([Ve(),mt()]),o=await ht("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:o?new Date(o).toLocaleString():"Never"}}window.__doleDB={getStats:Pt,getLocalBeneficiaries:Ve,getPendingSyncItems:mt,setSecureCache:Rt,getSecureCache:jt};const Ae=["Local Employment Unit (LEU)","Labor Standards Unit (LSU)","Internal Management Services Unit (IMSU)","Wellfare Workers Unit (WWU)","Labor Relation Unit (LRU)"],ue=()=>document.documentElement.classList.contains("dark"),Xe=()=>ue()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},we={royalBlue:()=>ue()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(ue(),"#94a3b8")},Me=()=>ue()?"#475569":"#cbd5e1";let Ne=null;function Ye(e){const o=`; ${document.cookie}`.match(new RegExp(`;\\s*${e}=([^;]+)`));return o?decodeURIComponent(o[1]):null}function Ge(e,t,o){let s=new Date;s.setTime(s.getTime()+o*24*60*60*1e3),document.cookie=`${e}=${encodeURIComponent(t)};expires=${s.toUTCString()};path=/`}let oe=Ye("user_workforce_filter")||"ALL",xt=Ye("user_workforce_label")||"Overall Stats",_e=Ye("user_gender_filter")||"ALL",vt=Ye("user_gender_label")||"All Years";function ke(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const s=new Date(`${t}T00:00:00`);return isNaN(s.getTime())?null:s}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const s=t.replace(" ","T"),a=new Date(s);return isNaN(a.getTime())?null:a}const o=new Date(t);return isNaN(o.getTime())?null:o}function wt(e){const t=Number.parseInt(e?.age,10);if(Number.isInteger(t)&&t>=0)return t;const o=ke(e?.birthday);if(!o)return null;const s=new Date;let a=s.getFullYear()-o.getFullYear();const r=s.getMonth()-o.getMonth();return(r<0||r===0&&s.getDate()<o.getDate())&&a--,a>=0?a:null}function qt(e){const t=String(e||"").trim(),o=t.match(/\(([A-Z]{2,8})\)\s*$/i)?.[1];return o?o.toUpperCase():t.length>18?`${t.slice(0,16)}...`:t}function Ft(e){const t=String(e||"").trim().toUpperCase().split(" ").filter(Boolean).join(" ");if(!t||["N/A","NA","NONE","UNASSIGNED"].includes(t))return null;const o=Ae.find(r=>r.toUpperCase()===t);if(o)return o;const s=Ae.find(r=>{const l=r.lastIndexOf("("),i=r.lastIndexOf(")"),p=l>=0&&i>l?r.slice(l+1,i).toUpperCase():"";return p&&(t===p||t.endsWith("("+p+")"))});return s||{"WELFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)","WELLFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)"}[t]||null}function Ht(e,t){const o=/^\d{4}$/.test(String(t||""))?Number(t):null,s=Array.from({length:12},()=>({total:0,ages:new Map,ageGroups:{"18-24":0,"25-30":0,"31-40":0,"41+":0}}));return e.forEach(a=>{const r=ke(a.createdAt),l=wt(a);if(!r||!Number.isInteger(l)||l<18||o&&r.getFullYear()!==o)return;const i=s[r.getMonth()];i.total++,i.ages.set(l,(i.ages.get(l)||0)+1),l<=24?i.ageGroups["18-24"]++:l<=30?i.ageGroups["25-30"]++:l<=40?i.ageGroups["31-40"]++:i.ageGroups["41+"]++}),s.map((a,r)=>({month:new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2024,r,1)).toUpperCase(),totalAdded:a.total,ageGroups:a.ageGroups,exactAges:[...a.ages.entries()].sort((l,i)=>l[0]-i[0])}))}function rt(e){return e.reduce((t,o)=>{const s=ke(o.createdAt);return s?Math.max(t,s.getFullYear()):t},0)}const at={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function We(e=!1){if(localStorage.getItem("isLoggedIn")!=="true"||!document.getElementById("workforce-chart"))return;let t=[];if(e&&(Ne=null),Ne)t=Ne;else{const[c,w]=await Promise.all([Ve(),Nt()]);if(c.length>0&&w<6e4)t=c,Ne=t;else try{const k=await be("api/beneficiaries.php?all=true");if(k.success&&k.data?.success&&k.data?.beneficiaries)t=k.data.beneficiaries,Ne=t,Te(t).catch(()=>{});else return}catch{return}}if(t.length===0)return;Xt();const o=Xe();document.querySelectorAll('[id$="-chart"]').forEach(n=>n.innerHTML="");const s=[...new Set(t.map(n=>{const c=n.startDate||n.createdAt,w=ke(c);return w?w.getFullYear().toString():null}).filter(n=>n))].sort((n,c)=>c-n);Yt(s,t),Wt(s,t);const a=new Date;let r=t;oe!=="ALL"&&(r=t.filter(n=>{if(oe.includes("D")){const c=ke(n.createdAt);if(!c)return!1;const w=parseInt(oe),k=new Date;return k.setDate(a.getDate()-w),k.setHours(0,0,0,0),c>=k}else if(s.includes(oe)){const c=ke(n.startDate||n.createdAt);return c?c.getFullYear().toString()===oe:!1}return!0}));const l=Ze(t),i=Ze(r);Vt(l,i);let p=[];if(oe==="ALL"){const c=new Date().getFullYear();for(let w=2020;w<=c;w++)p.push(w.toString())}else if(s.includes(oe))p=["Q1","Q2","Q3","Q4"];else{const n=parseInt(oe)||7;p=Array.from({length:n},(c,w)=>{const k=new Date;return k.setDate(a.getDate()-(n-1-w)),new Date(k.getTime()-k.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const b={};p.forEach(n=>b[n]=0),r.forEach(n=>{const c=n.startDate||n.createdAt;if(c){const w=ke(c);if(!w)return;const k=w.getFullYear().toString(),C=new Date(w.getTime()-w.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(oe==="ALL")b.hasOwnProperty(k)&&b[k]++;else if(oe.includes("D"))b.hasOwnProperty(C)&&b[C]++;else if(k===oe){const T="Q"+(Math.floor(w.getMonth()/3)+1);b.hasOwnProperty(T)&&b[T]++}}});const f=Object.values(b),m=r.length,D=f[f.length-1]||0,d=f[f.length-2]||0;let h;if(oe==="ALL"){const n=m/p.length;h=D>=n}else h=D>=d;let E=h?we.successGreen:we.philippineRed,y=h?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",L=h?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";oe==="ALL"?(E=we.successGreen,y="bg-green-500 shadow-green-500/30",L="text-green-600 dark:text-green-400"):oe==="7D"?(E="#fb923c",y="bg-orange-500 shadow-orange-500/30",L="text-orange-500 dark:text-orange-400"):oe==="30D"?(E="#eab308",y="bg-yellow-500 shadow-yellow-500/30",L="text-yellow-600 dark:text-yellow-400"):oe==="90D"?(E="#2563eb",y="bg-blue-600 shadow-blue-600/30",L="text-blue-600 dark:text-blue-400"):s.includes(oe)&&(E="#f87171",y="bg-red-400 shadow-red-400/30",L="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(n=>{n.textContent=m,n.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${L}`});const I=d>0?Math.round((D-d)/d*100):D>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(n=>n.textContent=(I>=0?"+":"")+(oe==="ALL"?"Growth":I+"%"));const P=document.getElementById("added-metric-badge");P&&(P.className=`flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${y}`);const Y=document.getElementById("added-metric-icon");Y&&(Y.style.transform=h?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(n=>{const c=document.getElementById(n);c&&(c.innerHTML=`${xt} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const _={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:ue()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:E,opacity:.6},{offset:100,color:E,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[E]},series:[{name:"New Beneficiaries",data:f}],xaxis:{categories:p,labels:{show:!0,style:{colors:o.muted,fontSize:"0.625rem",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:o.muted,fontSize:"0.625rem",fontWeight:600}}},grid:{show:!0,borderColor:o.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[E],markers:{size:p.length>20?0:4,colors:[E],strokeColors:o.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:ue()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};De("workforce-chart",_);const ne=_e==="ALL"?t:t.filter(n=>{const c=ke(n.startDate||n.createdAt);return c&&c.getFullYear().toString()===_e}),ee=Ze(ne),de={series:[ee.genders.Female||0,ee.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:o.cardBg},colors:[we.philippineRed,we.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"0.75rem",fontWeight:600,color:o.muted},value:{show:!0,fontSize:"1.5rem",fontWeight:900,color:o.text,formatter:n=>n},total:{show:!0,label:"TOTAL",fontSize:"0.625rem",fontWeight:800,color:o.muted,formatter:n=>n.globals.seriesTotals.reduce((c,w)=>c+w,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[o.cardBg],width:4},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"1.125rem"}}}}}}}]};De("gender-chart",de);const ce=[{key:"College Grad",label:"College Graduate",count:i.education["College Grad"]||0,color:we.royalBlue()},{key:"College Lvl",label:"College Level",count:i.education["College Lvl"]||0,color:we.goldenYellow},{key:"HS Grad",label:"High School",count:i.education["HS Grad"]||0,color:we.philippineRed},{key:"Senior High",label:"Senior High",count:i.education["Senior High"]||0,color:we.successGreen}],J=ce.reduce((n,c)=>n+c.count,0),pe=[...ce].sort((n,c)=>c.count-n.count||n.label.localeCompare(c.label)),fe=pe[0];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([n,c])=>{document.querySelectorAll(c).forEach(w=>{w.textContent=i.education[n]||0})});const xe=document.getElementById("education-profile-total"),me=document.getElementById("education-profile-leading");if(xe&&(xe.textContent=J),me){const n=J>0?Math.round(fe.count/J*100):0;me.textContent=J>0?`${fe.label} · ${n}%`:"No data",me.title=me.textContent}const Se={series:[{name:"Beneficiaries",data:pe.map(n=>({x:n.label,y:n.count,fillColor:n.color}))}],chart:{height:285,type:"bar",toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},plotOptions:{bar:{horizontal:!0,distributed:!0,barHeight:"48%",dataLabels:{position:"top"},borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,formatter:n=>Math.round(n),offsetX:12,offsetY:4,textAnchor:"start",style:{fontSize:"0.625rem",fontWeight:900,colors:[o.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.9,borderWidth:0}},xaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{colors:o.muted,fontSize:"0.5625rem",fontWeight:700}},axisBorder:{show:!1},axisTicks:{show:!1},title:{text:"TOTAL BENEFICIARIES",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}}},yaxis:{labels:{minWidth:118,maxWidth:180,trim:!1,style:{colors:o.text,fontSize:"0.6875rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:10,right:58,bottom:-4,left:8}},legend:{show:!1},tooltip:{theme:ue()?"dark":"light",y:{formatter:n=>{const c=J>0?Math.round(n/J*100):0;return`${n} beneficiaries (${c}% of recorded)`}}},noData:{text:"NO EDUCATION DATA",style:{color:o.muted,fontSize:"11px"}},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:285},yaxis:{labels:{minWidth:96,maxWidth:132,trim:!1,style:{fontSize:"0.625rem"}}},dataLabels:{style:{fontSize:"0.5625rem"}}}}]};De("education-chart",Se),document.querySelectorAll(".count-absorbed").forEach(n=>n.textContent=i.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(n=>n.textContent=i.status.ONGOING||0);const x={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:i.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:i.status.ONGOING||0},{x:"Expired",y:i.status.EXPIRED||0},{x:"Resigned",y:i.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"0.75rem",fontWeight:"900",colors:[o.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:o.muted,fontWeight:700}}},yaxis:{show:!0,labels:{show:!1}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:20,right:8,bottom:0,left:8}},tooltip:{theme:ue()?"dark":"light",y:{formatter:n=>n+" Beneficiaries"}},theme:{mode:ue()?"dark":"light"}};De("status-chart",x);const B=new Map(Object.entries(l.designations).map(([n,c])=>[n.trim().toUpperCase(),c])),A=new Map(Ae.map((n,c)=>[n,c])),G=Ae.map(n=>[n,B.get(n.toUpperCase())||0]).sort((n,c)=>c[1]-n[1]||A.get(n[0])-A.get(c[0])),X=G.map(([n])=>n),F={series:[{name:"Total GIP",data:G.map(([,n])=>n)}],chart:{type:"bar",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},colors:[we.royalBlue()],plotOptions:{bar:{horizontal:!1,columnWidth:"34%",borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,offsetY:-14,formatter:n=>Math.round(n),style:{fontSize:"0.625rem",fontWeight:900,colors:[o.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.86,borderWidth:0}},xaxis:{categories:X,axisBorder:{show:!1},axisTicks:{show:!1},labels:{rotate:0,trim:!1,hideOverlappingLabels:!1,formatter:n=>qt(n),style:{fontWeight:800,colors:o.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:o.muted,fontSize:"0.5625rem"}},title:{text:"TOTAL COUNT",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:2,right:4,bottom:-4}},legend:{show:!1},tooltip:{theme:ue()?"dark":"light",x:{formatter:(n,c)=>X[c.dataPointIndex]||"Assigned Unit"},y:{formatter:n=>`${n} Beneficiaries`}},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:210},plotOptions:{bar:{columnWidth:"46%"}},dataLabels:{style:{fontSize:"0.5rem"}},xaxis:{labels:{style:{fontSize:"0.5rem"}}}}}]};De("assigned-units-chart",F),Ut(G);const te=(/^\d{4}$/.test(oe)?Number(oe):0)||rt(r)||rt(t)||new Date().getFullYear(),H=Ht(r,te),g=document.getElementById("age-chart-year");g&&(g.textContent=te);const v=[{key:"18-24",label:"AGE 18–24"},{key:"25-30",label:"AGE 25–30"},{key:"31-40",label:"AGE 31–40"},{key:"41+",label:"AGE 41+"}],S={series:v.map(n=>({name:n.label,data:H.map(c=>c.ageGroups[n.key])})),chart:{type:"bar",stacked:!0,height:330,toolbar:{show:!1},zoom:{enabled:!1},fontFamily:"Montserrat, sans-serif",background:o.cardBg},colors:["#0038A8","#2563EB","#60A5FA","#93C5FD"],plotOptions:{bar:{horizontal:!1,columnWidth:"54%",borderRadius:2,borderRadiusApplication:"end",dataLabels:{total:{enabled:!0,offsetY:-8,style:{fontSize:"0.625rem",fontWeight:900,color:o.text}}}}},dataLabels:{enabled:!0,formatter:n=>n>0?Math.round(n):"",style:{fontSize:"0.5625rem",fontWeight:900,colors:["#ffffff","#ffffff","#0f172a","#0f172a"]},dropShadow:{enabled:!1}},xaxis:{categories:H.map(n=>n.month),axisBorder:{show:!0,color:o.grid},axisTicks:{show:!1},title:{text:"MONTH ADDED",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}},labels:{rotate:-40,trim:!1,hideOverlappingLabels:!1,style:{fontWeight:800,colors:o.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:o.muted,fontSize:"0.625rem"}},title:{text:"TOTAL BENEFICIARIES",style:{color:o.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:8,right:12,bottom:4}},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"10px",fontWeight:800,labels:{colors:o.muted},markers:{size:5,shape:"square"},itemMargin:{horizontal:8,vertical:3}},tooltip:{shared:!0,intersect:!1,theme:ue()?"dark":"light",custom:({dataPointIndex:n})=>{const c=H[n],w=v.map(C=>`${C.label}: <strong>${c?.ageGroups[C.key]||0}</strong>`).join("<br>"),k=c?.exactAges?.length?c.exactAges.map(([C,T])=>`Age ${C}: ${T}`).join(" · "):"No recorded ages";return`<div class="px-3 py-2 text-xs leading-5"><strong>${c?.month||""} ${te}</strong><br>Total: <strong>${c?.totalAdded||0}</strong><br>${w}<div class="mt-1 border-t border-slate-200 pt-1 text-[10px] dark:border-slate-600">${k}</div></div>`}},noData:{text:"NO AGE DATA",align:"center",verticalAlign:"middle",style:{color:o.muted,fontSize:"11px"}},theme:{mode:ue()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:360},plotOptions:{bar:{columnWidth:"66%"}},dataLabels:{enabled:!1},xaxis:{labels:{rotate:-55,style:{fontSize:"0.5rem"}}},legend:{fontSize:"9px",itemMargin:{horizontal:5,vertical:2}}}}]};De("age-chart",S);const $=Gt(t);zt($);const u={series:[{name:"Actual Beneficiaries",data:Object.values($.municipalityData).map(n=>n.actual)},{name:"Target Slots",data:Object.values($.municipalityData).map(n=>n.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:o.cardBg},theme:{mode:ue()?"dark":"light"},colors:[we.royalBlue(),ue()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys($.municipalityData),labels:{style:{fontWeight:600,colors:o.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:o.muted}}},legend:{show:!1},fill:{opacity:1},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}}};De("performance-gap-chart",u)}function Ut(e){const t=document.getElementById("assigned-units-summary");t&&(t.innerHTML=e.map(([o,s],a)=>`
        <div class="flex min-w-0 items-center justify-between gap-3 border border-slate-100 bg-slate-50/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50">
            <div class="flex min-w-0 items-center gap-2">
                <span class="inline-flex h-5 min-w-5 shrink-0 items-center justify-center bg-royal-blue text-[0.5625rem] font-black text-white">${a+1}</span>
                <span class="break-words text-[0.625rem] font-black uppercase leading-relaxed tracking-tight text-slate-600 dark:text-slate-300" title="${o}">${o}</span>
            </div>
            <span class="inline-flex min-w-7 shrink-0 items-center justify-center bg-white px-2 py-1 text-xs font-black tabular-nums text-royal-blue shadow-sm dark:bg-slate-800 dark:text-blue-400">${s}</span>
        </div>
    `).join(""))}function De(e,t){const o=document.getElementById(e);if(!o)return;o.innerHTML="",new Je(o,t).render()}function Ze(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},exactAges:{},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},o=new Date;return o.setHours(0,0,0,0),e.forEach(s=>{const a=s.office||"Unassigned";t.offices[a]=(t.offices[a]||0)+1;const r=(s.gender||"Unknown").trim(),l=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[l]++;const i=String(s.education||"").trim().toUpperCase().replace(/\s+/g," "),p=i.includes("COLLEGE")&&i.includes("GRADUATE")||i.includes("BACHELOR")||i.includes("DEGREE")||/(^|\s)(BS|AB)(\s|$)/.test(i);i.includes("SENIOR HIGH")?t.education["Senior High"]++:p?t.education["College Grad"]++:i.includes("COLLEGE")?t.education["College Lvl"]++:(i.includes("HIGH SCHOOL")||/(^|\s)HS(\s|$)/.test(i))&&t.education["HS Grad"]++;const b=Ft(s.designation);b&&(t.designations[b]=(t.designations[b]||0)+1);const f=(s.remarks||s.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),m=!!s.absorbDate;if(f.includes("ABSORBED")||m)t.status.ABSORBED++;else if(f.includes("RESIGNED"))t.status.RESIGNED++;else if(f==="ONGOING"||f.includes("ONGOING")||f.includes("ACTIVE")||s.status_id==1)t.status.ONGOING++;else if(f.includes("EXPIRED"))t.status.EXPIRED++;else{let d=!1;if(s.endDate){const h=ke(s.endDate);h&&h<o&&(d=!0)}d?t.status.EXPIRED++:t.status.ONGOING++}const D=wt(s);Number.isInteger(D)&&(t.totalAge+=D,t.ageCount++,t.exactAges[D]=(t.exactAges[D]||0)+1,D>=18&&D<=24?t.ages["18-24"]++:D>=25&&D<=30?t.ages["25-30"]++:D>=31&&D<=40?t.ages["31-40"]++:D>=41&&t.ages["41+"]++)}),t}function Gt(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(at).forEach(([o,s])=>{t.municipalityData[o]={actual:0,target:s},t.totalTarget+=s}),e.forEach(o=>{const s=(o.office||"").toUpperCase();let a="OTHER";for(const l in at)if(s.includes(l)){a=l;break}if(t.municipalityData[a]&&(t.municipalityData[a].actual++,t.totalActual++),(o.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,o.createdAt&&o.startDate){const l=new Date(o.createdAt),i=new Date(o.startDate),p=Math.ceil((i-l)/(1e3*60*60*24));p>=0&&p<180&&(t.velocity.totalDays+=p,t.velocity.count++)}}),t}function zt(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(r=>{r.textContent=t+"%";const l=r.parentElement?.nextElementSibling?.firstElementChild;l&&(l.style.width=t+"%")});const o=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(r=>r.textContent=o);const s=e.retention.count+e.retention.resign,a=s>0?(e.retention.count/s*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(r=>r.textContent=a+"%")}function Vt(e,t){const o=Object.values(e.offices).reduce((b,f)=>b+f,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(b=>b.textContent=o);const s=e.genders.Female||0,a=e.genders.Male||0;document.querySelectorAll(".metric-female-ratio").forEach(b=>b.textContent=s.toLocaleString()),document.querySelectorAll(".metric-male-ratio").forEach(b=>b.textContent=a.toLocaleString());const r=b=>{const[f,m]=Object.entries(b.exactAges||{}).sort((d,h)=>h[1]-d[1]||Number(d[0])-Number(h[0]))[0]||[null,0],D=b.ageCount>0?m/b.ageCount*100:0;return{age:f,count:m,percentage:D}},l=b=>`${Number.isInteger(b)?b.toFixed(0):b.toFixed(1)}%`,i=r(e);document.querySelectorAll(".metric-top-age-label").forEach(b=>{b.textContent=i.age===null?"N/A":`${i.age} YRS`}),document.querySelectorAll(".metric-top-age-share").forEach(b=>{b.textContent=`${l(i.percentage)} of recorded ages`});const p=r(t);document.querySelectorAll(".metric-top-age").forEach(b=>{b.textContent=p.age===null?"N/A":p.age}),document.querySelectorAll(".metric-filtered-top-age-share").forEach(b=>{b.textContent=`${l(p.percentage)} of filtered ages`})}function Yt(e,t){const o=document.querySelector("#lastDaysdropdown ul");if(!o)return;const s=t.length,a=new Date,r=p=>{const b=new Date;return b.setDate(a.getDate()-p),b.setHours(0,0,0,0),t.filter(f=>{const m=ke(f.createdAt);return m&&m>=b}).length},l=p=>t.filter(b=>{const f=ke(b.startDate||b.createdAt);return f&&f.getFullYear().toString()===p}).length;let i=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${oe==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${s}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${oe==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${oe==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${oe==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(p=>{const b=l(p);i+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${p}', 'Year ${p}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${oe===p?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${p}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${b}</span>
            </a>
        </li>`}),o.innerHTML=i}function Wt(e,t){const o=document.getElementById("gender-filter-options"),s=document.getElementById("gender-filter-button");if(!o||!s)return;const a=t.length,r=i=>t.filter(p=>{const b=ke(p.startDate||p.createdAt);return b&&b.getFullYear().toString()===i}).length;let l=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${_e==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${a}</span>
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
        `}),o.innerHTML=l,s.innerHTML=`${vt} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function Zt(e,t){oe=e,xt=t,Ge("user_workforce_filter",e,30),Ge("user_workforce_label",t,30),["lastDaysdropdown"].forEach(s=>{const a=document.getElementById(s);if(a&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown",s);r&&r.hide()}else a&&a.classList.add("hidden")}),We()}function Jt(e,t){_e=e,vt=t,Ge("user_gender_filter",e,30),Ge("user_gender_label",t,30);const o=document.getElementById("gender-filter-dropdown");if(o&&window.FlowbiteInstances){const s=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");s&&s.hide()}else o&&o.classList.add("hidden");We()}function Xt(){const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e),o=t.full_name||t.username||"System User",s=t.email||(t.username?`${t.username}@dole.gov.ph`:"user@dole.gov.ph"),a=t.profile_picture_path,r=o.trim().split(" ").map(l=>l[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(l=>l.textContent=o),document.querySelectorAll(".sidebar-user-email").forEach(l=>l.textContent=s),document.querySelectorAll(".sidebar-user-avatar").forEach(l=>{const i=l.querySelector(".sidebar-avatar-initials"),p=l.querySelector(".sidebar-avatar-img");if(a&&p){const b=ye(),f=a.startsWith("http")?a:b+a.replace(/^\//,"");p.src=f,p.classList.remove("hidden"),i&&i.classList.add("hidden")}else i&&(i.textContent=r,i.classList.remove("hidden"),p&&p.classList.add("hidden"))})}catch{}}window.updateWorkforceFilter=Zt;window.updateGenderFilter=Jt;document.addEventListener("themeChanged",()=>{setTimeout(()=>We(),50)});window.addEventListener("dataSynced",()=>{We(!0)});let $e=null;function Kt(e,t){const o=document.getElementById(t);if(!o)return;if($e&&($e.destroy(),$e=null),e.length===0){const b=Xe(),f={series:[1],chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!1}},labels:["No Data"],colors:[b.grid],plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"24px",fontWeight:900,color:b.muted,formatter:()=>"0"},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:b.muted,formatter:()=>"0"}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ue()?["#1e293b"]:["#ffffff"],width:2},tooltip:{enabled:!1},legend:{show:!1}};$e=new Je(o,f),$e.render();return}const s={ongoing:0,expired:0,absorbed:0,resigned:0,other:0};e.forEach(b=>{const f=(b.remarks||"").toUpperCase();f==="ONGOING"?s.ongoing++:f==="EXPIRED"?s.expired++:f==="ABSORBED"?s.absorbed++:f==="RESIGNED"?s.resigned++:s.other++});const a=[],r=[],l=[];s.ongoing>0&&(a.push(s.ongoing),r.push("Ongoing"),l.push(we.successGreen)),s.expired>0&&(a.push(s.expired),r.push("Expired"),l.push(we.philippineRed)),s.absorbed>0&&(a.push(s.absorbed),r.push("Absorbed"),l.push("#059669")),s.resigned>0&&(a.push(s.resigned),r.push("Resigned"),l.push("#b91c1c")),s.other>0&&(a.push(s.other),r.push("Other"),l.push(we.mutedSlate()));const i=Xe(),p={series:a,chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!0,easing:"easeinout",speed:800,dynamicAnimation:{enabled:!0,speed:350}}},labels:r,colors:l,plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"10px",fontWeight:800,color:i.muted,offsetY:-5},value:{show:!0,fontSize:"24px",fontWeight:900,color:i.text,offsetY:5},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:i.muted}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ue()?["#1e293b"]:["#ffffff"],width:2},tooltip:{theme:ue()?"dark":"light",style:{fontSize:"12px"}},legend:{show:!1}};$e=new Je(o,p),$e.render()}const Qt="modulepreload",er=function(e,t){return new URL(e,t).href},ot={},yt=function(t,o,s){let a=Promise.resolve();if(o&&o.length>0){let b=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(D=>({status:"fulfilled",value:D}),D=>({status:"rejected",reason:D}))))};const l=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),p=i?.nonce||i?.getAttribute("nonce");a=b(o.map(f=>{if(f=er(f,s),f in ot)return;ot[f]=!0;const m=f.endsWith(".css"),D=m?'[rel="stylesheet"]':"";if(s)for(let h=l.length-1;h>=0;h--){const E=l[h];if(E.href===f&&(!m||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${D}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":Qt,m||(d.as="script"),d.crossOrigin="",d.href=f,p&&d.setAttribute("nonce",p),document.head.appendChild(d),m)return new Promise((h,E)=>{d.addEventListener("load",h),d.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return a.then(l=>{for(const i of l||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};let ge=null;if(Ce()){const e="https://llnddycvbcetztzwbdpx.supabase.co",t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{ge=Dt(e,t)}catch{}}function tr(e=new Date().getFullYear()){const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],o=[];for(let s=0;s<12;s++){const a=new Date(e,s+1,0).getDate();o.push(`${t[s]} 1-15, ${e}`),o.push(`${t[s]} 16-${a}, ${e}`)}return o}function rr(e,t,o){if(o==="ar")return(e.period||"").toUpperCase().trim()===t.toUpperCase().trim();{const s=t.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!s)return!1;const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(s[1].toUpperCase());if(r===-1)return!1;const l=parseInt(s[4]),i=parseInt(s[2]),p=parseInt(s[3]),b=(e.date||"").substring(0,10),f=new Date(b+"T00:00:00");return isNaN(f)?!1:f.getFullYear()===l&&f.getMonth()===r&&f.getDate()>=i&&f.getDate()<=p}}function ar(e){if(!e)return"-";const t=e.toUpperCase();return t==="VERIFIED"||t==="COMPLETED"?"✓":t==="REJECTED"||t==="DECLINED"?"X":t==="PENDING"?"?":t}function st(e,t,o,s){const a=e.map(r=>{const l=t[r.id]||[],i=s.map(p=>{const b=l.find(f=>rr(f,p,o));return b?ar(b.status):"-"});return{name:r.name||r.id,cells:i}});return{periods:s,rows:a}}function nt(e,t,o){const{periods:s,rows:a}=t,r=s.length+1;let l='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return l+=`<tr><td colspan="${r}" style="background:${o};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,l+=`<tr><th style="background:${o};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,s.forEach(i=>{l+=`<th style="background:${o};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${i}</th>`}),l+="</tr>",a.forEach((i,p)=>{const b=p%2===0?"#ffffff":"#f5f5f5";l+="<tr>",l+=`<td style="background:${b};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${i.name}</td>`,i.cells.forEach(f=>{l+=`<td style="background:${b};padding:5px 8px;text-align:center;font-weight:bold;color:${f==="✓"?"#15803d":f==="X"?"#dc2626":"#9ca3af"};">${f}</td>`}),l+="</tr>"}),l+="</table>",l}async function Ar(e){const t="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",o=e.length,s=await j.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(p=>{p.addEventListener("change",()=>{const b=document.getElementById("custom-count-wrap");b.classList.toggle("hidden",p.value!=="custom"||!p.checked);const f=document.querySelector('input[name="exp-count"]:checked');b.classList.toggle("hidden",f?.value!=="custom")})})},preConfirm:()=>{const p=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",b=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let f=parseInt(b==="custom"?document.getElementById("exp-custom-count")?.value||o:b,10);(isNaN(f)||f<1)&&(f=10),f=Math.min(f,o);const m=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:p,count:f,year:m}}});if(!s.isConfirmed||!s.value)return;const{type:a,count:r,year:l}=s.value,i=e.slice(0,r);await kt(i,a,l)}async function kt(e,t,o){j.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const s=tr(o),a=ye();async function r(E){const L=await(await fetch(`${a}api/logs.php?type=${E}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return L.success?L.logs||[]:[]}let l={},i={};(t==="dtr"||t==="both")&&(await r("dtr")).forEach(y=>{const L=String(y.gip_id||y.beneficiary_id||y.id||"");l[L]||(l[L]=[]),l[L].push(y)}),(t==="ar"||t==="both")&&(await r("ar")).forEach(y=>{const L=String(y.gip_id||y.beneficiary_id||y.id||"");i[L]||(i[L]=[]),i[L].push(y)});const p=e.map(E=>({...E,mapKey:String(E.id||E.gip_id||E.beneficiary_id)}));let b="";const f=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(t==="dtr"||t==="both"){const E=p.map(L=>({...L,id:L.mapKey})),y=st(E,l,"dtr",s);b+="<br>"+nt(`DTR – Daily Time Records (${o})`,y,"#1d4ed8")}if(t==="ar"||t==="both"){const E=p.map(L=>({...L,id:L.mapKey})),y=st(E,i,"ar",s);b+="<br><br>"+nt(`AR – Accomplishment Reports (${o})`,y,"#d97706")}const m=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${f} | DOLE LDNPFO – GIP Monitoring System</p>
                ${b}
            </body>
            </html>
        `,D=new Blob([m],{type:"application/vnd.ms-excel"}),d=URL.createObjectURL(D),h=document.createElement("a");h.href=d,h.download=`GIP_LOGS_${t.toUpperCase()}_${o}.xls`,document.body.appendChild(h),h.click(),URL.revokeObjectURL(d),document.body.removeChild(h),j.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(s){j.fire("Error",s.message||"Failed to generate export.","error")}}const ze="color-theme",or=3600*24*365;function sr(e,t,o){document.cookie=`${e}=${t}; max-age=${o}; path=/; SameSite=Lax`}function nr(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}function St(){const e=localStorage.getItem(ze)||nr(ze);return e==="dark"||e==="light"?e:"light"}function Ke(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem(ze,e),sr(ze,e,or),ir(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function Qe(){const e=St();Ke(e==="dark"?"light":"dark")}function ir(e){const t=e==="dark",o=document.getElementById("pref-dark-mode");o&&(o.checked=t);const s=document.getElementById("theme-toggle-dark-icon"),a=document.getElementById("theme-toggle-light-icon");s&&a&&(s.classList.toggle("hidden",t),a.classList.toggle("hidden",!t));const r=document.getElementById("sidebar-theme-label");r&&(r.textContent=t?"LIGHT MODE":"DARK MODE")}function Ir(){const e=St();Ke(e);const t=document.getElementById("pref-dark-mode");t&&t.addEventListener("change",()=>{Ke(t.checked?"dark":"light")});const o=document.getElementById("theme-toggle-btn");o&&o.addEventListener("click",Qe),document.querySelectorAll("[data-theme-toggle]").forEach(s=>{s.addEventListener("click",Qe)})}function Ee(){return document.documentElement.classList.contains("dark")}window.toggleTheme=Qe;window.isDarkMode=Ee;const Ue={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=Ee(),t={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},o=`
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
        `;j.fire({html:o,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:s=>{const a=s.querySelector("#csv-upload"),r=s.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(i=>{r.addEventListener(i,l,!1)});function l(i){i.preventDefault(),i.stopPropagation()}["dragenter","dragover"].forEach(i=>{r.addEventListener(i,()=>{r.classList.add("border-blue-500","bg-blue-50/50"),e&&r.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(i=>{r.addEventListener(i,()=>{r.classList.remove("border-blue-500","bg-blue-50/50"),e&&r.classList.remove("dark:bg-slate-800/80")},!1)}),a.addEventListener("change",i=>{const p=i.target.files[0];if(p){const b=s.querySelector("#auto-save-toggle");this.isAutoSave=b?b.checked:!1,this.handleFile(p)}}),r.addEventListener("drop",i=>{const b=i.dataTransfer.files[0];if(b){const f=s.querySelector("#auto-save-toggle");this.isAutoSave=f?f.checked:!1,this.handleFile(b)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){j.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const t=new FileReader;t.onload=o=>{const s=o.target.result;this.parseCSV(s)},t.readAsText(e)},async parseCSV(e){let t=[],o="",s=!1;for(let a=0;a<e.length;a++){let r=e[a];r==='"'&&(s=!s),!s&&(r===`
`||r==="\r")?(r==="\r"&&e[a+1]===`
`&&a++,o.trim()!==""&&t.push(o),o=""):o+=r}o.trim()!==""&&t.push(o),this.queue=[];for(let a=0;a<t.length;a++){let r=t[a].trim();if(!r)continue;let l=[],i="",p=!1;for(let b=0;b<r.length;b++){let f=r[b];f==='"'?p=!p:f===","&&!p?(l.push(i.replace(/(^"|"$)/g,"").trim()),i=""):i+=f}if(l.push(i.replace(/(^"|"$)/g,"").trim()),l.length>=2){const b=l[3];if(!b||isNaN(parseInt(b)))continue;const f=l[1];if(!f||f.toLowerCase()==="name"||f.toLowerCase()==="full name")continue;const m=l[2];let D=l[4]?l[4].toUpperCase().trim():"",d="";(D==="F"||D.includes("FEMALE"))&&(d="Female"),(D==="M"||D.includes("MALE"))&&(d="Male");const h=l[5],E=l[6],y=l[7],L=this.formatDate(l[8]),I=this.formatDate(l[9]);this.queue.push({name:f,address:m,age:b,gender:d,education:h,startDate:L,endDate:I,office:E,designation:y})}}if(this.queue.length>0){try{j.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{j.showLoading()}});const a=this.queue.map(p=>p.name);let r=null;try{r=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{r=null}const i=await(await fetch(`${ye()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...r?{"X-User-Id":String(r)}:{}},body:JSON.stringify({names:a,user_id:r})})).json();if(i.success&&i.duplicates&&i.duplicates.length>0){const p=new Set(i.duplicates.map(f=>f.toLowerCase().trim())),b=this.queue.length;this.queue=this.queue.filter(f=>{const m=p.has(f.name.toLowerCase().trim());return!m})}}catch{}if(this.queue.length===0){j.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,j.close(),this.processNext()}else j.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){Ee();const e=Math.round(this.currentIndex/this.queue.length*100),t=`
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
        `;if(j.isVisible()&&j.getPopup().querySelector("#bulk-progress-bar")){const o=document.getElementById("bulk-progress-bar"),s=j.getPopup().querySelector("span.text-\\[10px\\]"),a=document.getElementById("bulk-current-name");o&&(o.style.width=`${e}%`),s&&(s.textContent=`${this.currentIndex} / ${this.queue.length}`),a&&(a.textContent=this.queue[this.currentIndex]?.name||"...")}else j.fire({html:t,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:o=>{o.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const t=new Date(e);if(isNaN(t.getTime())){const r=e.split("/");return r.length===3?`${r[2]}-${r[1].padStart(2,"0")}-${r[0].padStart(2,"0")}`:""}const o=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${o}-${s}-${a}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const o=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),s=await be(`api/beneficiaries.php?next_id&year=${o}`);s.success&&s.data?.success&&s.data?.nextId&&(e.gip_id=s.data.nextId,e.id=null)}catch{}const t=await window.addBeneficiaryData(e);this.isActive&&(t?this.onSaveSuccess():Oe(e))})():Oe(e)):Oe(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),j.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,j.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=Ue;function it(e){if(!e)return"";const t=new Date(e),o=new Date;let s=o.getFullYear()-t.getFullYear();const a=o.getMonth()-t.getMonth();return(a<0||a===0&&o.getDate()<t.getDate())&&s--,s>=0?s:0}function lt(e){if(!e||e==="N/A")return"N/A";const t=String(e).split("/");if(t.length===3){const s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=parseInt(t[0],10);if(a>=1&&a<=12)return`${s[a-1]} ${t[1].padStart(2,"0")}, ${t[2]}`}const o=String(e).split("-");if(o.length===3&&o[0].length===4){const s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=parseInt(o[1],10);if(a>=1&&a<=12)return`${s[a-1]} ${o[2].padStart(2,"0")}, ${o[0]}`}return String(e).toUpperCase()}function lr(e,t=!0){if(!e||e==="N/A")return t?"bg-gray-800 text-white font-black border-gray-900 shadow-md dark:bg-gray-100 dark:text-gray-900":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const o=e.toUpperCase().trim();let s={inactive:"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};if(o==="LDNPFO"||o.startsWith("LDNPFO"))s={inactive:"bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};else if(o.includes("BOT"))s={inactive:"bg-amber-100 text-amber-800 border border-amber-200 dark:!text-white",active:"bg-amber-400 text-slate-900 font-black border-amber-500 shadow-md"};else if(o.includes("DICT"))s={inactive:"bg-red-100 text-red-700 border border-red-200 dark:!text-white",active:"bg-red-600 text-white font-black border-red-700 shadow-md"};else if(o.includes("NLRC"))s={inactive:"bg-blue-50 text-blue-700 border border-blue-100 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};else if(o.includes("PCUP"))s={inactive:"bg-indigo-100 text-indigo-900 border border-indigo-200 dark:!text-white",active:"bg-indigo-900 text-white font-black border-indigo-950 shadow-md"};else if(o.includes("BACOLOD"))s={inactive:"bg-rose-100 text-rose-900 border border-rose-200 dark:!text-white",active:"bg-red-900 text-white font-black border-red-950 shadow-md"};else if(o.includes("BALO-I")||o.includes("BALOI"))s={inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-500 text-white font-black border-sky-600 shadow-md"};else if(o.includes("BAROY"))s={inactive:"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white",active:"bg-slate-600 text-white font-black border-slate-700 shadow-md"};else if(o.includes("ILIGAN"))s={inactive:"bg-amber-100 text-amber-900 border border-amber-200 dark:!text-white",active:"bg-amber-800 text-white font-black border-amber-900 shadow-md"};else if(o.includes("KAUSWAGAN"))s={inactive:"bg-pink-50 text-pink-700 border border-pink-200 dark:!text-white",active:"bg-gradient-to-r from-sky-400 to-pink-500 text-white font-black border-pink-500 shadow-md"};else if(o.includes("KOLAMBUGAN"))s={inactive:"bg-emerald-100 text-emerald-900 border border-emerald-200 dark:!text-white",active:"bg-emerald-900 text-white font-black border-emerald-950 shadow-md"};else if(o.includes("LINAMON"))s={inactive:"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white",active:"bg-purple-600 text-white font-black border-purple-700 shadow-md"};else if(o.includes("MAGSAYSAY"))s={inactive:"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white",active:"bg-cyan-600 text-white font-black border-cyan-700 shadow-md"};else if(o.includes("MAIGO"))s={inactive:"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white",active:"bg-blue-600 text-white font-black border-blue-700 shadow-md"};else if(o.includes("MATUNGAO"))s={inactive:"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white",active:"bg-violet-600 text-white font-black border-violet-700 shadow-md"};else if(o.includes("NUNUNGAN"))s={inactive:"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white",active:"bg-indigo-600 text-white font-black border-indigo-700 shadow-md"};else if(o.includes("PANTAO"))s={inactive:"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white",active:"bg-orange-600 text-white font-black border-orange-700 shadow-md"};else if(o.includes("PANTAR"))s={inactive:"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white",active:"bg-amber-500 text-white font-black border-amber-600 shadow-md"};else if(o.includes("POONA"))s={inactive:"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white",active:"bg-fuchsia-600 text-white font-black border-fuchsia-700 shadow-md"};else if(o.includes("SALVADOR"))s={inactive:"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white",active:"bg-rose-600 text-white font-black border-rose-700 shadow-md"};else if(o.includes("SAPAD"))s={inactive:"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white",active:"bg-lime-600 text-white font-black border-lime-700 shadow-md"};else if(o.includes("SND"))s={inactive:"bg-red-100 text-red-700 border border-red-200 dark:!text-white",active:"bg-red-700 text-white font-black border-red-800 shadow-md"};else if(o.includes("TAGOLOAN"))s={inactive:"bg-green-100 text-green-700 border border-green-200 dark:!text-white",active:"bg-green-600 text-white font-black border-green-700 shadow-md"};else if(o.includes("TANGCAL"))s={inactive:"bg-purple-100 text-purple-800 border border-purple-200 dark:!text-white",active:"bg-purple-800 text-white font-black border-purple-900 shadow-md"};else if(o.includes("TUBOD"))s={inactive:"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white",active:"bg-emerald-600 text-white font-black border-emerald-700 shadow-md"};else if(o.includes("PGLDN"))s={inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-600 text-white font-black border-sky-700 shadow-md"};else if(o.includes("PRC"))s={inactive:"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white",active:"bg-pink-600 text-white font-black border-pink-700 shadow-md"};else if(o.includes("SSS"))s={inactive:"bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white",active:"bg-blue-800 text-white font-black border-blue-900 shadow-md"};else{const a=[{inactive:"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white",active:"bg-purple-600 text-white font-black border-purple-700 shadow-md"},{inactive:"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white",active:"bg-rose-600 text-white font-black border-rose-700 shadow-md"},{inactive:"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white",active:"bg-amber-500 text-white font-black border-amber-600 shadow-md"},{inactive:"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white",active:"bg-teal-600 text-white font-black border-teal-700 shadow-md"},{inactive:"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white",active:"bg-indigo-600 text-white font-black border-indigo-700 shadow-md"},{inactive:"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white",active:"bg-emerald-600 text-white font-black border-emerald-700 shadow-md"},{inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-500 text-white font-black border-sky-600 shadow-md"}];let r=0;for(let l=0;l<o.length;l++)r=r*31+o.charCodeAt(l)>>>0;s=a[r%a.length]}return t?s.active:s.inactive}function dr(e){if(!e)return"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800";const t=e.toUpperCase();return t==="ONGOING"||t==="ABSORBED"?"bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-700 dark:border-emerald-800":"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800"}const dt="gip-drawer-employment-details-expanded";class cr{constructor(t,o,s){this.root=t,this.maxPage=s,this.currentPage=Math.min(Math.max(Number(o)||0,0),s),this.prevButton=t.querySelector("#drawer-prev-btn"),this.nextButton=t.querySelector("#drawer-next-btn"),this.detailsButton=t.querySelector("#drawer-employment-details-toggle"),this.detailsPanel=t.querySelector("#drawer-employment-details-panel"),this.detailsIcon=t.querySelector("#drawer-employment-details-icon"),this.pageTitles=["Personal Profile","Submission Logs","Required Documents"]}getSavedDetailsState(){try{return localStorage.getItem(dt)==="true"}catch{return!1}}saveDetailsState(t){try{localStorage.setItem(dt,String(t))}catch{}}setDetailsExpanded(t,o=!1){!this.detailsButton||!this.detailsPanel||(this.detailsButton.setAttribute("aria-expanded",String(t)),this.detailsPanel.classList.toggle("hidden",!t),this.detailsIcon?.classList.toggle("rotate-180",t),o&&this.saveDetailsState(t))}renderNavigation(){this.root.querySelectorAll("[id^=drawer-page-]").forEach((s,a)=>{s.classList.toggle("hidden",a!==this.currentPage)});const t=this.root.querySelector("#drawer-section-title");t&&(t.textContent=this.pageTitles[this.currentPage]),this.root.querySelector("#personal-profile-section")?.classList.toggle("hidden",this.currentPage!==0),this.prevButton?.classList.toggle("hidden",this.currentPage===0),this.nextButton?.classList.toggle("hidden",this.currentPage===this.maxPage)}goToPage(t){this.currentPage=Math.min(Math.max(t,0),this.maxPage),this.renderNavigation()}bind(){this.prevButton?.addEventListener("click",()=>this.goToPage(this.currentPage-1)),this.nextButton?.addEventListener("click",()=>this.goToPage(this.currentPage+1)),this.detailsButton?.addEventListener("click",()=>{const t=this.detailsButton.getAttribute("aria-expanded")==="true";this.setDetailsExpanded(!t,!0)}),this.setDetailsExpanded(this.getSavedDetailsState()),this.renderNavigation()}}function ct(e=3){return Array.from({length:e},(t,o)=>`
        <div class="skeleton-wave border border-gray-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800" aria-hidden="true">
            <div class="h-2.5 ${o%2===0?"w-2/5":"w-1/3"} rounded-full bg-gray-200 dark:bg-slate-700"></div>
            <div class="mt-3 h-3.5 ${o%2===0?"w-4/5":"w-3/5"} rounded-full bg-gray-300 dark:bg-slate-600"></div>
        </div>
    `).join("")}function ur(){return["Contact No.","Address","Birthday","Age","Gender","Education","Designated Beneficiary","Relationship to Assured"].map((t,o)=>`
        <div class="grid grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-4">
            <span class="whitespace-nowrap font-medium text-gray-500">${t}</span>
            <span class="skeleton-wave block h-3.5 ${o%3===0?"w-2/3":o%3===1?"w-full":"w-1/2"} rounded-full bg-gray-200 dark:bg-slate-700" aria-hidden="true"></span>
        </div>
    `).join("")}async function ut(e,t){const o=await ft(`api/logs.php?type=${encodeURIComponent(e)}`,t),s=o.success?o.data:null;return!o.success||!s?.success?{success:!1,error:s?.error||o.error||"The log could not be saved."}:o}function Fe(e,t=0){const o=!!e?._isLoadingProfile,s=!!e?._isLoadingLogs;e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const a=e.arLogs||[],r=e.dtrLogs||[],l=e.docs||[],i=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],p=i.map(d=>{const h=l.find(E=>E.name.toUpperCase()===d.toUpperCase());return h||{name:d,status:"PENDING",id:null}});l.forEach(d=>{i.some(E=>E.toUpperCase()===d.name.toUpperCase())||p.push(d)});const b=`
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
            ${o?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${dr(e.remarks)} block min-h-8 w-full truncate border border-l-4 ${e.remarks==="ONGOING"||e.remarks==="ABSORBED"?"border-l-emerald-600 dark:border-l-emerald-500":"border-l-red-600 dark:border-l-red-500"} px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.remarks}">${e.remarks}</span>`}
        </div>
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Office</span>
            ${o?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${lr(e.office,!0)} block min-h-8 w-full truncate border border-l-4 px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.office}">${e.office}</span>`}
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
        ${o?ur():`
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
                        GIP Duration
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <!-- Start Date (Color Coded: Emerald Green) -->
                    <div class="flex flex-col bg-emerald-50/60 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">Start Date</span>
                        ${o?'<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-emerald-200/70 dark:bg-emerald-900/50 my-0.5"></span>':`<span class="text-xs sm:text-sm font-black text-emerald-700 dark:text-emerald-300 leading-tight font-mono">${lt(e.startDate)}</span>`}
                    </div>
                    <!-- End Date (Color Coded: Rose Red) -->
                    <div class="flex flex-col bg-rose-50/60 dark:bg-rose-950/30 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block mb-1">End Date</span>
                        ${o?'<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-rose-200/70 dark:bg-rose-900/50 my-0.5"></span>':`<span class="text-xs sm:text-sm font-black text-rose-700 dark:text-rose-300 leading-tight font-mono">${lt(e.endDate)}</span>`}
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
            ${s?ct(4):`
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${r.length?r.map(d=>{const h=d.status||"PENDING";let E=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const y=h==="VERIFIED"||h==="COMPLETED"?"SUBMITTED":h;let L=d.date||d.createdAt,I=L;const P=d.submittedAt||d.submitted_at||d.createdAt||d.created_at,Y=P?new Date(P).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",R=[d.rejectedAt||d.rejected_at?"Rejected: "+new Date(d.rejectedAt||d.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",d.updatedAt||d.updated_at?"Updated: "+new Date(d.updatedAt||d.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(_=>`
`+_).join("");if(L){const _=/^\d{4}-\d{2}-\d{2}$/.test(L)?new Date(L+"T00:00:00Z"):new Date(L);isNaN(_)||(I=_.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-blue-500 bg-transparent p-4 text-blue-700 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:border-blue-300 dark:hover:bg-blue-500 dark:hover:text-white" title="Submitted: ${Y}${R}" data-type="dtr" data-id="${d.id}" data-val="${d.day||L}" data-status="${h}">
                            <span class="text-sm font-black text-blue-700 group-hover:text-white dark:text-blue-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${Y}${R}">${d.day||I}</span>
                            <span class="log-status-label text-xs font-bold ${E} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${y}</span>
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
                    ${a.length?a.map(d=>{const h=d.status||"PENDING";let E=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const y=h==="VERIFIED"||h==="COMPLETED"?"SUBMITTED":h;let L=d.period||d.createdAt,I=L;const P=d.submittedAt||d.submitted_at||d.createdAt||d.created_at,Y=P?new Date(P).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",R=[d.rejectedAt||d.rejected_at?"Rejected: "+new Date(d.rejectedAt||d.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",d.updatedAt||d.updated_at?"Updated: "+new Date(d.updatedAt||d.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(_=>`
`+_).join("");if(L){const _=/^\d{4}-\d{2}-\d{2}$/.test(L)?new Date(L+"T00:00:00Z"):new Date(L);isNaN(_)||(I=_.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-orange-500 bg-transparent p-4 text-orange-700 shadow-sm transition-colors hover:border-orange-700 hover:bg-orange-600 hover:text-white dark:border-orange-400 dark:text-orange-300 dark:hover:border-orange-300 dark:hover:bg-orange-500 dark:hover:text-white" title="Submitted: ${Y}${R}" data-type="ar" data-id="${d.id}" data-val="${L}" data-status="${h}">
                            <span class="text-sm font-black text-orange-700 group-hover:text-white dark:text-orange-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${Y}${R}">${L||I}</span>
                            <span class="log-status-label text-xs font-bold ${E} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${y}</span>
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
            ${s?ct(5):p.map(d=>{const h=d.status.toUpperCase(),y={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[h]||h,L=y==="COMPLETED",I=y==="REJECTED",P=y==="PENDING",Y=L?"text-emerald-600 group-hover/card:text-emerald-800 dark:text-emerald-400 dark:group-hover/card:text-emerald-900":I?"text-red-600 group-hover/card:text-red-800 dark:text-red-400 dark:group-hover/card:text-red-900":"text-orange-600 group-hover/card:text-orange-800 dark:text-orange-400 dark:group-hover/card:text-orange-900",R=L?"border-emerald-600 bg-transparent hover:border-emerald-700 hover:bg-emerald-600 dark:border-emerald-400 dark:bg-transparent dark:hover:border-emerald-300 dark:hover:bg-emerald-500":I?"border-red-600 bg-transparent hover:border-red-700 hover:bg-red-600 dark:border-red-400 dark:bg-transparent dark:hover:border-red-300 dark:hover:bg-red-500":"border-orange-600 bg-transparent hover:border-orange-700 hover:bg-orange-600 dark:border-orange-400 dark:bg-transparent dark:hover:border-orange-300 dark:hover:bg-orange-500",_=L?"text-emerald-700 group-hover/card:text-white dark:text-emerald-300 dark:group-hover/card:text-white":I?"text-red-700 group-hover/card:text-white dark:text-red-300 dark:group-hover/card:text-white":"text-orange-700 group-hover/card:text-white dark:text-orange-300 dark:group-hover/card:text-white",ne=L?"SUBMITTED":y,ee=L?"border-emerald-900 bg-emerald-700 text-white ring-2 ring-emerald-200 hover:bg-emerald-600":"border-emerald-500 bg-transparent text-emerald-700 group-hover/card:border-emerald-700 group-hover/card:bg-white group-hover/card:text-emerald-800 hover:border-emerald-700 hover:bg-emerald-600 hover:text-white",de=P?"border-orange-900 bg-orange-700 text-white ring-2 ring-orange-200 hover:bg-orange-600":"border-orange-500 bg-transparent text-orange-700 group-hover/card:border-orange-700 group-hover/card:bg-white group-hover/card:text-orange-800 hover:border-orange-700 hover:bg-orange-600 hover:text-white",ce=I?"border-red-900 bg-red-700 text-white ring-2 ring-red-200 hover:bg-red-600":"border-red-500 bg-transparent text-red-700 group-hover/card:border-red-700 group-hover/card:bg-white group-hover/card:text-red-800 hover:border-red-700 hover:bg-red-600 hover:text-white";let J='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return L?J='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M5 13l4 4L19 7"></path></svg>':I&&(J='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="drawer-doc-card group/card relative flex cursor-pointer items-center justify-between rounded-xl border p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand/30 ${R}" role="button" tabindex="0" data-id="${d.id}" data-name="${d.name}" data-status="${y}" aria-label="Change status for ${d.name}" aria-expanded="false">
                    <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white shadow-sm ${Y}">
                            ${J}
                        </div>
                        <span class="flex-1 text-xs font-black uppercase tracking-tight sm:text-sm ${_}">${d.name}</span>
                    </div>
                    <span class="drawer-doc-status ml-auto shrink-0 text-[0.5625rem] font-black uppercase tracking-wider ${_}">${ne}</span>
                    <svg class="drawer-doc-cue ml-3 size-5 shrink-0 transition-transform group-hover/card:scale-110 ${_}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 12h.01M12 12h.01M18 12h.01"/></svg>
                    <div class="drawer-doc-actions ml-3 hidden shrink-0 items-center gap-1.5">
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ee}" data-status="COMPLETED" aria-label="Submit document" aria-pressed="${L}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="m5 13 4 4L19 7"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Submitted</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${de}" data-status="PENDING" aria-label="Set pending" aria-pressed="${P}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            <span class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Pending</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ce}" data-status="REJECTED" aria-label="Reject document" aria-pressed="${I}">
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
    `,f=!!e._noAnimation;let m=document.getElementById("beneficiary-drawer-container");const D=f&&!!m&&m.dataset.beneficiaryId===String(e.id||"");if(D){const d=m.scrollTop;m.innerHTML=b,m.scrollTop=d}else m&&(m.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),m=document.createElement("div"),m.id="beneficiary-drawer-container",m.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[500px] lg:w-[560px] shadow-2xl",m.setAttribute("tabindex","-1"),m.setAttribute("data-drawer-backdrop","true"),m.innerHTML=b,document.body.appendChild(m),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");m.dataset.beneficiaryId=String(e.id||""),yt(async()=>{const{Drawer:d}=await import("./vendor-flowbite-BS-fTmyB.js").then(h=>h.b);return{Drawer:d}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:d})=>{let h=D?m.__drawerInstance:null;if(!h){const x={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{m.__inlineActionAbort?.abort(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{m&&m.parentNode&&m.remove()},300)}};h=new d(m,x),m.__drawerInstance=h,h.show()}m.querySelector("#close-drawer-btn").addEventListener("click",()=>h.hide());const y=new cr(m,t,2);y.bind(),m.__inlineActionAbort?.abort();const L=new AbortController;m.__inlineActionAbort=L;const I=()=>{const B=(document.getElementById("beneficiary-drawer-container")||m).getBoundingClientRect(),A=Math.max(0,B.left);return{canDockBesideDrawer:window.innerWidth>=640&&A>=280,drawerOffset:Math.max(0,window.innerWidth-B.left),availableLeftSpace:A}},P=(x,B,A=1800)=>(I(),j.fire({toast:!0,position:"bottom-end",icon:x,title:B,showConfirmButton:!1,timer:A,didOpen:G=>{const X=I();if(!X.canDockBesideDrawer)return;const F=G.closest(".swal2-container");F&&(F.style.inset="auto",F.style.right=X.drawerOffset+12+"px",F.style.bottom="12px",F.style.left="auto",F.style.width="auto",G.style.maxWidth=`${Math.min(352,X.availableLeftSpace-24)}px`)}})),Y=x=>{!x||x.dataset.loading==="true"||(x.dataset.confirming="false",x.classList.remove("w-22","opacity-100","pointer-events-auto"),x.classList.add("w-11","opacity-0","pointer-events-none"),x.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.remove("!pr-24"),x.querySelector(".delete-log-trigger")?.classList.replace("hidden","flex"),x.querySelector(".delete-confirm-actions")?.classList.replace("flex","hidden"))},R=(x=null)=>{m.querySelectorAll(".drawer-doc-card").forEach(B=>{B===x||B.dataset.loading==="true"||(B.setAttribute("aria-expanded","false"),B.querySelector(".drawer-doc-actions")?.classList.replace("flex","hidden"),B.querySelector(".drawer-doc-cue")?.classList.remove("hidden"))}),m.querySelectorAll(".delete-log-control").forEach(B=>{B!==x&&Y(B)})},_=async(x,B)=>{const A=x.dataset.status;if(B===A){R();return}const G=x.querySelector(".drawer-doc-actions"),X=x.querySelector(".drawer-doc-loading");x.dataset.loading="true",x.setAttribute("aria-busy","true"),G?.classList.replace("flex","hidden"),X?.classList.replace("hidden","block");try{const F={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"},re=await ut("docs",{gip_id:e.id,doc_name:x.dataset.name,status:F[B]||B}),te=re.success?re.data:{success:!1,error:re.error};if(!te.success)throw new Error(te.error||"Failed to update document status.");window.viewBeneficiary&&await window.viewBeneficiary(e,y.currentPage),P("success","Status updated!")}catch(F){x.dataset.loading="false",x.removeAttribute("aria-busy"),X?.classList.replace("block","hidden"),G?.classList.replace("hidden","flex"),P("error",F.message)}};m.querySelectorAll(".drawer-doc-card").forEach(x=>{const B=()=>{const A=x.getAttribute("aria-expanded")!=="true";R(A?x:null),x.setAttribute("aria-expanded",String(A)),x.querySelector(".drawer-doc-actions")?.classList.toggle("hidden",!A),x.querySelector(".drawer-doc-actions")?.classList.toggle("flex",A),x.querySelector(".drawer-doc-cue")?.classList.toggle("hidden",A)};x.addEventListener("click",A=>{A.target.closest(".doc-status-action")||B()}),x.addEventListener("keydown",A=>{A.target.closest(".doc-status-action")||(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),B())}),x.querySelectorAll(".doc-status-action").forEach(A=>{A.addEventListener("click",G=>{G.stopPropagation(),_(x,A.dataset.status)})})}),document.addEventListener("click",x=>{x.target.closest(".drawer-doc-card, .delete-log-control")||R()},{signal:L.signal});const ne=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),ee=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function de(x){const A=new Date(x+"T00:00:00").getDay();return A!==0&&A!==6&&!ne.has(x)}function ce(x){const B=x.getDate(),A=ee[x.getMonth()],G=x.getFullYear(),X=new Date(G,x.getMonth()+1,0).getDate();return B<=15?`${A} 1-15, ${G}`:`${A} 16-${X}, ${G}`}const J=()=>{const x=new Date;if(!r.length)return ce(x);let B=-1,A="";const G=H=>{const g=(H||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!g)return-1;const v=ee.indexOf(g[1]),S=parseInt(g[2])===1?0:1;return parseInt(g[4])*100+v*2+S};if(r.forEach(H=>{const g=H.day||H.date||"",v=G(g);v>B&&(B=v,A=g)}),B===-1)return ce(x);const X=A.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),F=ee.indexOf(X[1]),re=parseInt(X[2]),te=parseInt(X[4]);if(re===1){const H=new Date(te,F+1,0).getDate();return`${ee[F]} 16-${H}, ${te}`}else{const H=(F+1)%12,g=F===11?te+1:te;return`${ee[H]} 1-15, ${g}`}},pe=()=>{const x=new Date;if(!a.length)return ce(x);let B=-1,A="";const G=H=>{const g=(H||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!g)return-1;const v=ee.indexOf(g[1]),S=parseInt(g[2])===1?0:1;return parseInt(g[4])*100+v*2+S};if(a.forEach(H=>{const g=G(H.period);g>B&&(B=g,A=H.period)}),B===-1)return ce(x);const X=A.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),F=ee.indexOf(X[1]),re=parseInt(X[2]),te=parseInt(X[4]);if(re===1){const H=new Date(te,F+1,0).getDate();return`${ee[F]} 16-${H}, ${te}`}else{const H=(F+1)%12,g=F===11?te+1:te;return`${ee[H]} 1-15, ${g}`}},fe=async(x,B)=>{j.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),j.showLoading();try{const A={gip_id:e.id};if(x==="dtr"){const F=B.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(F){const re=ee.indexOf(F[1]),te=parseInt(F[2]),H=parseInt(F[3]);let g=new Date(H,re,te);for(;!de(g.toISOString().split("T")[0]);)g.setDate(g.getDate()+1);A.record_date=g.toISOString().split("T")[0]}else A.record_date=new Date().toISOString().split("T")[0];A.weekday=B}x==="ar"&&(A.period=B);const G=await ut(x,A),X=G.success?G.data:{success:!1,error:G.error};if(X.success)window.viewBeneficiary&&await window.viewBeneficiary(e,y.currentPage),P("success","Successfully Added",1500);else{const F=X.error||"Failed to add log.";j.fire("Error",F,"error")}}catch(A){j.fire("Error",A.message||"Failed to add log.","error")}},z=m.querySelector("#add-dtr-log-btn");z&&z.addEventListener("click",()=>fe("dtr",J()));const xe=m.querySelector("#add-ar-log-btn");xe&&xe.addEventListener("click",()=>fe("ar",pe()));const me=m.querySelector("#export-log-btn");me&&me.addEventListener("click",async()=>{const x="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",B=await j.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
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
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const A=document.querySelector('input[name="swal-export-type"]:checked');return A?A.value:null}});if(B.isConfirmed&&B.value){const A=B.value,G=new Date().getFullYear();await kt([e],A,G)}});const Se=x=>{if(!x||x.querySelector(".inline-log-editor"))return;const B=x.dataset.type,A=x.dataset.id,G=x.dataset.val||"",X=x.dataset.status||"PENDING";let F=X==="VERIFIED"||X==="COMPLETED"?"VERIFIED":"PENDING";const re=G.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/),te=re?re[3]+"-"+String(ee.indexOf(re[1])+1).padStart(2,"0")+"-"+String(re[2]).padStart(2,"0"):new Date().toISOString().split("T")[0],H=document.createElement("div");H.className="inline-log-editor absolute inset-0 z-10 flex items-center gap-1 rounded-xl bg-white px-2 shadow-lg dark:bg-slate-900",H.innerHTML='<input type="text" class="inline-log-date w-[38%] min-w-0 shrink-0 rounded-lg border border-brand/40 bg-transparent px-2 py-1.5 text-xs font-black uppercase text-heading outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" value="'+te+'" aria-label="Select log date"><div class="ml-auto flex shrink-0 items-center gap-1"><button type="button" data-status="VERIFIED" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set submitted status">SUBMITTED</button><button type="button" data-status="PENDING" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set pending status">PENDING</button></div>',x.appendChild(H);const g=H.querySelector(".inline-log-date");g.title=x.querySelector("[title]")?.getAttribute("title")||"Select the submitted date";const v=window.Datepicker;v&&g&&(g._datepicker=new v(g,{format:"yyyy-mm-dd",autohide:!0,orientation:"bottom right"}));const S=()=>{H.querySelectorAll(".inline-log-status").forEach(u=>{const n=u.dataset.status===F,c=u.dataset.status==="PENDING";u.className=n?"inline-log-status cursor-pointer rounded-md "+(c?"bg-orange-600 hover:bg-orange-700":"bg-emerald-600 hover:bg-emerald-700")+" px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider text-white shadow-sm transition-colors":"inline-log-status cursor-pointer rounded-md border "+(c?"border-orange-400 text-orange-700 hover:border-orange-600 hover:bg-orange-50":"border-emerald-400 text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50")+" bg-transparent px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors dark:border-slate-600 dark:text-slate-300"})};S(),H.querySelectorAll(".inline-log-status").forEach(u=>u.addEventListener("click",async n=>{n.stopPropagation(),F=u.dataset.status,S();const c=g?.value||te,w=ce(new Date(c+"T00:00:00"));H.querySelectorAll(".inline-log-status").forEach(k=>{k.disabled=!0}),u.textContent="SAVING";try{const k={type:B,id:A,status:F};B==="dtr"?(k.record_date=c,k.weekday=w):k.period=w;const C=await It("api/logs.php",k),T=C.success?C.data:{success:!1,error:C.error};if(!T.success)throw new Error(T.error||"Failed to update log.");P("success","Log submitted!",1500),window.viewBeneficiary&&window.viewBeneficiary(e,y.currentPage)}catch(k){H.querySelectorAll(".inline-log-status").forEach(C=>{C.disabled=!1}),u.textContent=F==="VERIFIED"?"SUBMITTED":"PENDING",P("error",k.message)}}));const $=u=>{H.contains(u.target)||(g?._datepicker?.hide(),H.remove(),document.removeEventListener("click",$,!0))};setTimeout(()=>document.addEventListener("click",$,!0),0)};m.querySelectorAll(".edit-log-btn").forEach(x=>{x.addEventListener("click",B=>{B.target.closest(".delete-log-control")||(x.dataset.type,x.dataset.id,x.dataset.val,x.dataset.status,Se(x))})}),m.querySelectorAll(".delete-log-control").forEach(x=>{const B=x.querySelector(".delete-log-trigger"),A=x.querySelector(".delete-log-confirm"),G=x.querySelector(".delete-log-cancel");B?.addEventListener("click",X=>{X.stopPropagation(),R(x),x.dataset.confirming="true",x.classList.remove("w-11","opacity-0","pointer-events-none"),x.classList.add("w-22","opacity-100","pointer-events-auto"),x.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.add("!pr-24"),B.classList.replace("flex","hidden"),x.querySelector(".delete-confirm-actions")?.classList.replace("hidden","flex")}),G?.addEventListener("click",X=>{X.stopPropagation(),Y(x)}),A?.addEventListener("click",async X=>{if(X.stopPropagation(),x.dataset.loading==="true")return;const F=x.dataset.id,re=x.dataset.type;x.dataset.loading="true",A.disabled=!0,G.disabled=!0,A.querySelector(".delete-confirm-icon")?.classList.add("hidden"),A.querySelector(".delete-loading-icon")?.classList.replace("hidden","block");try{const te=await ft(`api/logs.php?type=${re}`,{log_id:F,action:"delete"}),H=te.success?te.data:{success:!1,error:te.error};if(!H.success)throw new Error(H.error||"Failed to delete data.");P("success","Deleted"),window.viewBeneficiary&&window.viewBeneficiary(e,y.currentPage)}catch(te){x.dataset.loading="false",A.disabled=!1,G.disabled=!1,A.querySelector(".delete-loading-icon")?.classList.replace("block","hidden"),A.querySelector(".delete-confirm-icon")?.classList.remove("hidden"),Y(x),P("error",te.message)}})})}).catch(d=>{})}function pr(e){const t=Ee(),o="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600",s="w-full resize-none overflow-hidden rounded-none border-0 border-b-2 border-blue-200 bg-transparent px-0 py-2 text-xl font-black leading-tight tracking-tight text-royal-blue placeholder-gray-300 outline-none focus:border-brand focus:ring-0 sm:text-2xl dark:border-slate-700 dark:text-white",a="mb-1.5 block text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";function r(y){const L=String(y||"").trim();if(!L)return{month:"",day:"",year:"",iso:""};let I=L.match(/^(\d{4})-(\d{2})-(\d{2})/);if(I)return{year:I[1],month:I[2],day:I[3],iso:`${I[1]}-${I[2]}-${I[3]}`};if(I=L.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/),I){const P=I[1].padStart(2,"0"),Y=I[2].padStart(2,"0");return{year:I[3],month:P,day:Y,iso:`${I[3]}-${P}-${Y}`}}return{month:"",day:"",year:"",iso:""}}function l(y,L,I){const P=Number.parseInt(y,10),Y=Number.parseInt(L,10),R=Number.parseInt(I,10);if(!Number.isInteger(P)||!Number.isInteger(Y)||!Number.isInteger(R)||R<1900||R>new Date().getFullYear())return"";const _=new Date(R,P,0).getDate();return P<1||P>12||Y<1||Y>_?"":`${String(R).padStart(4,"0")}-${String(P).padStart(2,"0")}-${String(Y).padStart(2,"0")}`}function i(y){const L=r(y);if(!L.iso)return"";const I=Number.parseInt(L.year,10),P=Number.parseInt(L.month,10),Y=Number.parseInt(L.day,10),R=new Date;let _=R.getFullYear()-I;return(R.getMonth()+1<P||R.getMonth()+1===P&&R.getDate()<Y)&&_--,_>=0?_:""}const p=r(e.birthday),b=Array.from({length:12},(y,L)=>{const I=String(L+1).padStart(2,"0");return`<option value="${I}" ${p.month===I?"selected":""}>${I}</option>`}).join(""),f=Array.from({length:31},(y,L)=>{const I=String(L+1).padStart(2,"0");return`<option value="${I}" ${p.day===I?"selected":""}>${I}</option>`}).join("");function m(y){if(!y)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const L=String(y).toUpperCase();return L==="ONGOING"?"bg-green-100 text-green-700 border-green-200":L==="EXPIRED"?"bg-red-400 text-white border-red-400":L==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":L==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const D=`
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
                            ${b}
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
                <input type="text" name="age" id="edit-age-display" value="${i(p.iso)}" class="${o} cursor-not-allowed bg-slate-100 font-mono text-slate-500 dark:bg-slate-800" placeholder="Auto-calculated" readonly aria-readonly="true">
            </label>

            <div class="relative">
                <label for="edit-education-input" class="${a}">Educational Level / Course</label>
                <input type="text" name="education" id="edit-education-input" value="${e.education||""}" class="${o}" placeholder="Select or enter education">
                <div id="edit-education-suggestions-box" class="absolute left-0 right-0 z-[70] mt-1 hidden max-h-48 overflow-y-auto border border-slate-300 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                    ${et.map(y=>`<button type="button" class="edit-education-option w-full border-b border-slate-100 px-3 py-2 text-left text-[0.6875rem] font-bold text-slate-700 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"><span class="option-text">${y.name}</span></button>`).join("")}
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
                    ${Et.map(y=>`<option value="${y}" ${String(e.relationshipToAssured||"").toUpperCase()===y.toUpperCase()?"selected":""}>${y}</option>`).join("")}
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
    `;let d=document.getElementById("edit-drawer-container");d&&(d.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),d=document.createElement("div"),d.id="edit-drawer-container",d.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full border-l border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",d.setAttribute("tabindex","-1"),d.innerHTML=D,document.body.appendChild(d),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const y=d.querySelector('textarea[name="name"]');y&&(y.style.height="auto",y.style.height=y.scrollHeight+"px")},10);const h=d.querySelector("#edit-education-suggestions-box");h&&(h.innerHTML=et.map(y=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${y.name}</span>
            </button>
        `).join(""));const E=d.querySelector("#edit-designation-suggestions-box");E&&(E.innerHTML=Ae.map(y=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${y}</span>
            </button>
        `).join("")),yt(async()=>{const{Drawer:y}=await import("./vendor-flowbite-BS-fTmyB.js").then(L=>L.b);return{Drawer:y}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:y})=>{const L=new y(d,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{d&&d.parentNode&&d.remove()},400)}});L.show(),window.initFlowbite&&window.initFlowbite();const I=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),L.hide()};d.querySelector("#close-edit-drawer-btn").addEventListener("click",I),d.querySelector("#edit-drawer-cancel-btn").addEventListener("click",I);const P=d.querySelector("#edit-beneficiary-drawer-form"),Y=d.querySelector("#edit-bday-input"),R=d.querySelector("#edit-birth-month"),_=d.querySelector("#edit-birth-day"),ne=d.querySelector("#edit-birth-year"),ee=d.querySelector("#edit-birthday-calendar"),de=d.querySelector("#edit-birthday-error"),ce=d.querySelector("#edit-age-display"),J=d.querySelector("#edit-startDate-input"),pe=d.querySelector("#edit-endDate-input"),fe=d.querySelector('input[name="seriesNo"]'),z=d.querySelector('input[name="gip_id"]'),xe=(u=_?.value||"")=>{if(!_)return;const n=Number.parseInt(R?.value||"",10),c=Number.parseInt(ne?.value||"",10),w=Number.isInteger(n)&&n>=1&&n<=12?new Date(Number.isInteger(c)&&c>=1900?c:2e3,n,0).getDate():31,k=document.createDocumentFragment(),C=document.createElement("option");C.value="",C.textContent="DD",k.append(C);for(let T=1;T<=w;T++){const M=document.createElement("option");M.value=String(T).padStart(2,"0"),M.textContent=M.value,M.selected=M.value===String(u).padStart(2,"0"),k.append(M)}_.replaceChildren(k)},me=(u=!1)=>{const n=!!(R?.value||_?.value||ne?.value),c=n?l(R?.value,_?.value,ne?.value):"";return Y&&(Y.value=c),ee&&ee.value!==c&&(ee.value=c),ce&&(ce.value=c?i(c):""),de&&de.classList.toggle("hidden",!!c||!n||!u),{isoBirthday:c,hasBirthdayInput:n}},Se=u=>{const n=r(u);return n.iso?(R&&(R.value=n.month),ne&&(ne.value=n.year),xe(n.day),_&&(_.value=n.day),me(!1),!0):!1};R&&R.addEventListener("change",()=>{xe(),me(!1)}),_&&_.addEventListener("change",()=>me(!1)),ne&&ne.addEventListener("input",()=>{ne.value=ne.value.replace(/\D/g,"").slice(0,4),xe(),me(!1)}),ee&&ee.addEventListener("change",()=>{ee.value&&Se(ee.value)}),xe(p.day),me(!1);const x=d.querySelector("#edit-drawer-remarks"),B=d.querySelector("#edit-extension-log-container"),A=()=>{if(!B)return;const u=x.value,n=Ee();if(u==="ABSORBED"){const c=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,w=c.getTimezoneOffset()*6e4,k=new Date(c.getTime()-w).toISOString().slice(0,16);B.innerHTML=`
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
                `}else if(u==="RESIGNED"){const c=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,w=c.getTimezoneOffset()*6e4,k=new Date(c.getTime()-w).toISOString().slice(0,16);B.innerHTML=`
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
                `}};x&&x.addEventListener("change",u=>{const n="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";x.className=`${m(u.target.value)} ${n} editable-indicator`,A(),(x.value==="ABSORBED"||x.value==="RESIGNED")&&setTimeout(()=>{B.scrollIntoView({behavior:"smooth",block:"center"}),B.classList.add("pulse-highlight"),setTimeout(()=>B.classList.remove("pulse-highlight"),1500)},50)}),A();let G=!1;const X=(u,n)=>{u.addEventListener("paste",c=>{c.preventDefault();let w=(c.clipboardData||window.clipboardData).getData("text");if(w){w=w.replace(/[-.\s]/g,"/");const k=w.split("/");if(k.length===3){const C=k[0].padStart(2,"0"),T=k[1].padStart(2,"0");let M=k[2];if(M.length===2){const O=new Date().getFullYear(),Q=Math.floor(O/100)*100;M=String(Q+parseInt(M))}else M=M.padStart(4,"0");const W=`${C}/${T}/${M}`;u.value=W;const q=new Event("input",{bubbles:!0});u.dispatchEvent(q);const U=window.__parseFormattedDate(W);if(U&&n&&(G||n(U),document.activeElement===u&&u.blur()),u._datepicker)u._datepicker.hide();else{const O=u.parentNode&&u.parentNode._datepicker;O&&typeof O.hide=="function"&&O.hide()}}}}),u.addEventListener("input",c=>{const w=c.target.value,k=window.__maskDate(w);if(w!==k&&(c.target.value=k),k.length===10){const C=window.__parseFormattedDate(k);if(C&&n)if(G||n(C),document.activeElement===u&&u.blur(),u._datepicker)u._datepicker.hide();else{const T=u.parentNode&&u.parentNode._datepicker;T&&typeof T.hide=="function"&&T.hide()}}}),u.addEventListener("changeDate",c=>{c.detail&&c.detail.date&&n&&(G||n(c.detail.date),u._datepicker&&u._datepicker.hide())})};J&&X(J,u=>{if(pe){const c=new Date(u);c.setDate(c.getDate()+243);const w=String(c.getMonth()+1).padStart(2,"0"),k=String(c.getDate()).padStart(2,"0"),C=c.getFullYear();pe.value=`${w}/${k}/${C}`}const n=u.getFullYear();n>1900&&z&&fe&&Promise.all([be(`api/beneficiaries.php?next_id&year=${encodeURIComponent(n)}`),be(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(n)}`)]).then(([c,w])=>{const k=c.success&&c.data?.success?c.data.nextId:null,C=w.success&&w.data?.success?w.data.nextSeries:null,T=String(z.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),M=String(fe.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),W=T?Number(T[1]):null,q=M?Number(M[1]):null;k&&(W===null||W!==n)&&(z.value=k),C&&(q===null||q!==n)&&(fe.value=C)}).catch(c=>{})}),pe&&X(pe),window.Datepicker||typeof Datepicker<"u"&&Datepicker;const F=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),re=d.querySelector("#edit-date-range-picker");if(F&&re){const u=new F(re,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});J&&(J._datepicker=u.datepickers[0]),pe&&(pe._datepicker=u.datepickers[1])}e.id&&(G=!0,be(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(u=>{if(u.success&&u.data&&u.data.beneficiary){const n=u.data.beneficiary;if(n.birthday&&Se(n.birthday),J&&n.startDate){const c=new Date(n.startDate);isNaN(c)||(J.value=n.startDateFormatted||"",J._datepicker&&J._datepicker.setDate(c))}if(pe&&n.endDate){const c=new Date(n.endDate);isNaN(c)||(pe.value=n.endDateFormatted||"",pe._datepicker&&pe._datepicker.setDate(c))}}setTimeout(()=>{G=!1},100)}).catch(u=>{G=!1}));const te=(u,n,c)=>{const w=d.querySelector(u),k=d.querySelector(n);if(!w||!k)return;const C=()=>k.classList.add("hidden"),T=()=>k.classList.remove("hidden");w.addEventListener("focus",T),w.addEventListener("input",()=>{const M=w.value.toLowerCase().trim();let W=0;k.querySelectorAll(c).forEach(q=>{const O=(q.querySelector(".option-text")?.textContent||q.textContent||"").toLowerCase().includes(M);q.style.display=O?"block":"none",O&&W++}),W>0?T():C()}),k.addEventListener("click",M=>{const W=M.target.closest(c);W&&(w.value=(W.querySelector(".option-text")?.textContent||W.textContent||"").trim(),C(),w.dispatchEvent(new Event("change")))}),document.addEventListener("click",M=>{!w.contains(M.target)&&!k.contains(M.target)&&C()})};te("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),te("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const u=d.querySelector("#edit-office-input"),n=d.querySelector("#edit-office-suggestions-box");if(!u||!n)return;n.classList.add("mt-[52px]");let c="OFFICES",w=null,k=[];const C={textLabel:t?"text-slate-400":"text-slate-500",borderDivide:t?"border-slate-800":"border-slate-100",courseHover:t?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:t?"text-slate-300":"text-slate-700"},T=async()=>{const W="dole_offices_cache",q=async()=>{let O=[];try{const Q=await be("api/beneficiaries.php?get_offices_advanced=1");Q.success&&Q.data?.success&&Array.isArray(Q.data.offices)&&(O=Q.data.offices)}catch{}return O.length>0&&(k=O,localStorage.setItem(W,JSON.stringify({data:O,timestamp:Date.now()}))),O},U=localStorage.getItem(W);if(U)try{const{data:O,timestamp:Q}=JSON.parse(U);return k=O,Date.now()-Q>1800*1e3&&q().then(()=>{c==="OFFICES"&&M("OFFICES",w,u.value)}),O}catch{localStorage.removeItem(W)}return k.length===0?await q():k},M=async(W="OFFICES",q=null,U="")=>{if(c=W,w=q,W==="OFFICES"){const Q=(await T()).filter(V=>V.office.toLowerCase().includes(U.toLowerCase()));n.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${C.textLabel} opacity-70 border-b ${C.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${Q.length>0?Q.map(V=>{const ie=parseInt(V.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${C.textCourseOpt} ${C.courseHover} rounded-none cursor-pointer transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${V.id}" data-name="${V.office}" data-has-locations="${ie}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-none bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-none bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${V.office}</span>
                                        </div>
                                        ${ie?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                    </div>
                                `}).join(""):`
                                <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${C.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                ${U.trim()?`
                                <div class="px-2 pb-2 flex flex-col gap-1.5">
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${C.textLabel} opacity-50 px-1">New office: "${U.trim()}"</div>
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
                    `;const Z=U.trim(),N=n.querySelector("#add-office-location-row-edit"),K=n.querySelector("#new-office-loc-input-edit"),se=n.querySelector("#confirm-office-with-loc-edit"),he=n.querySelector("#add-office-with-loc-btn-edit"),ae=n.querySelector("#skip-office-loc-btn-edit");if(he&&N&&he.addEventListener("click",V=>{V.stopPropagation(),N.classList.remove("hidden"),N.classList.add("flex"),setTimeout(()=>K?.focus(),50)}),se&&K){const V=ie=>{ie.stopPropagation();const ve=K.value.trim();u.value=ve?`${Z} - ${ve}`:Z,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))};se.addEventListener("click",V),K.addEventListener("keydown",ie=>{ie.key==="Enter"&&V(ie)}),K.addEventListener("click",ie=>ie.stopPropagation())}ae&&ae.addEventListener("click",V=>{V.stopPropagation(),u.value=Z,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))}),n.querySelectorAll(".office-code-option").forEach(V=>{V.addEventListener("click",ie=>{ie.stopPropagation(),V.dataset.hasLocations==="true"?M("LOCATIONS",{id:V.dataset.id,name:V.dataset.name}):(u.value=V.dataset.name,n.classList.add("hidden"),u.dispatchEvent(new Event("change")))})})}else{n.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${C.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-none">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-none bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${C.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-none bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${C.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${q.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-none transition-all"
                                    value="${U.includes(" - ")?U.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${C.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const O=n.querySelector("#loc-list-edit"),Q=n.querySelector("#location-search-edit"),Z=`dole_locs_cache_${q.id}`;let N=[];const K=localStorage.getItem(Z);if(K)try{const{data:ae,timestamp:V}=JSON.parse(K);N=ae,Date.now()-V<3600*1e3}catch{localStorage.removeItem(Z)}const se=async()=>{let ae=[];if(ge&&Ce()){const{data:V,error:ie}=await ge.from("office_locations").select("location").eq("office_id",q.id).order("location");!ie&&V&&(ae=V)}if(ae.length===0)try{const V=await be(`api/beneficiaries.php?get_office_locations=1&office_id=${q.id}`);V.success&&V.data?.success&&Array.isArray(V.data.locations)&&(ae=V.data.locations)}catch{}ae.length>0&&(N=ae,localStorage.setItem(Z,JSON.stringify({data:ae,timestamp:Date.now()})),he(Q.value))},he=(ae="")=>{const V=N.filter(ve=>ve.location.toLowerCase().includes(ae.toLowerCase())),ie=ae.trim();V.length>0?O.innerHTML=V.map(ve=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${C.textCourseOpt} ${C.courseHover} rounded-none cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${ve.location}">
                                    <div class="w-1 h-1 rounded-none bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${ve.location}</span>
                                </div>
                            `).join(""):N.length===0?O.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${C.textLabel} animate-pulse">Fetching...</div>`:(O.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${C.textLabel} opacity-60">No matching locations.</div>
                                ${ie?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${ie}" as location
                                    </button>
                                </div>`:""}
                            `,ie&&O.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{u.value=`${q.name} - ${ie}`,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))})),O.querySelectorAll(".location-option-edit").forEach(ve=>{ve.addEventListener("click",()=>{u.value=`${q.name} - ${ve.dataset.location}`,n.classList.add("hidden"),u.dispatchEvent(new Event("change"))})})};he(Q.value),se(),setTimeout(()=>Q.focus(),50),Q.addEventListener("input",()=>he(Q.value)),Q.addEventListener("click",ae=>ae.stopPropagation()),n.querySelector("#back-to-offices-edit").addEventListener("click",ae=>{ae.stopPropagation(),M("OFFICES")})}};u.addEventListener("focus",()=>{n.classList.remove("hidden"),M(c,w,u.value)}),u.addEventListener("input",()=>{c==="OFFICES"&&M("OFFICES",null,u.value)}),document.addEventListener("click",W=>{!u.contains(W.target)&&!n.contains(W.target)&&n.classList.add("hidden")})})();const g=d.querySelector("#edit-replacement-input"),v=d.querySelector("#edit-replacement-suggestions-box"),S=d.querySelector("#edit-replacement-loading");let $=null;g&&v&&(g.addEventListener("input",u=>{const n=u.target.value.trim();clearTimeout($),v.classList.add("hidden"),!(n.length<2)&&(S&&S.classList.remove("hidden"),$=setTimeout(async()=>{try{const c=await Re(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(n)}&limit=10`);c.success&&c.data&&c.data.candidates&&c.data.candidates.length>0?(v.innerHTML=c.data.candidates.map(w=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${w.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${w.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${w.id}</span>
                                </button>
                            `).join(""),v.classList.remove("hidden")):(v.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',v.classList.remove("hidden"))}catch{}finally{S&&S.classList.add("hidden")}},400))}),v.addEventListener("click",u=>{const n=u.target.closest("button");n&&(g.value=n.dataset.name,v.classList.add("hidden"))}),document.addEventListener("click",u=>{!g.contains(u.target)&&!v.contains(u.target)&&v.classList.add("hidden")})),P.querySelectorAll("input, select, textarea").forEach(u=>{const n=(u.getAttribute("type")||"").toLowerCase(),c=!u.disabled&&!u.readOnly&&n!=="hidden";u.classList.remove("editable-indicator"),c&&u.classList.add("editable-indicator")}),P.addEventListener("submit",u=>{u.preventDefault();const n=d.querySelector("#edit-drawer-submit-btn");d.querySelector("#edit-drawer-submit-icon");const c=d.querySelector("#edit-drawer-submit-text"),w=()=>{n&&(n.disabled=!1,n.classList.remove("opacity-75","cursor-not-allowed"));const U=d.querySelector("#edit-drawer-submit-icon");U&&(U.outerHTML='<svg id="edit-drawer-submit-icon" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>'),c&&(c.textContent="Save Changes")},k=()=>{n&&(n.disabled=!0,n.classList.add("opacity-75","cursor-not-allowed"));const U=d.querySelector("#edit-drawer-submit-icon");U&&(U.outerHTML='<svg id="edit-drawer-submit-icon" class="animate-spin w-4 h-4 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'),c&&(c.textContent="Saving Changes...")},{isoBirthday:C,hasBirthdayInput:T}=me(!0);if(T&&!C){R?.focus(),j.fire({toast:!0,position:"top-end",icon:"error",title:"Enter a valid birthday",text:"Complete the MM, DD, and YYYY fields.",showConfirmButton:!1,timer:3500});return}k();const M=U=>{const O=String(U||"").trim();if(!O)return"";const Q=O.match(/^(\d{4})-(\d{2})-(\d{2})/);if(Q)return`${Q[1]}-${Q[2]}-${Q[3]}`;const Z=window.__parseFormattedDate?.(O);if(!Z)return O;const N=Z.getFullYear(),K=String(Z.getMonth()+1).padStart(2,"0"),se=String(Z.getDate()).padStart(2,"0");return`${N}-${K}-${se}`},W=new FormData(P),q={};W.forEach((U,O)=>{q[O]=["birthday","startDate","endDate"].includes(O)?M(U):U}),q.birthday=C,q.id=e.id,q.gip_id=q.gip_id||e.id,window.addBeneficiaryData?(async()=>{try{await window.addBeneficiaryData(q,!0,!1)?(I(),await new Promise(O=>setTimeout(O,450)),await j.fire({toast:!0,position:"bottom-end",icon:"success",title:"RECORD UPDATED",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),window.viewBeneficiary&&await window.viewBeneficiary({...q,id:e.id,gip_id:e.id},0)):w()}catch{w()}})():w()})})}let He=null,pt=null,gt=null;function gr(e,t,o,s){if(!Ce()||!ge||!t)return;const a=String(t);if(pt===a)return;He&&(ge.removeChannel(He),He=null),pt=a;const r=()=>{clearTimeout(gt),gt=setTimeout(()=>{document.getElementById("beneficiary-drawer-container")?.dataset.beneficiaryId===String(e)&&window.viewBeneficiary&&window.viewBeneficiary({...o,id:e},s)},100)},l=`beneficiary_id=eq.${t}`;He=ge.channel(`gip-drawer-logs-${a}`).on("postgres_changes",{event:"*",schema:"public",table:"daily_time_records",filter:l},r).on("postgres_changes",{event:"*",schema:"public",table:"accomplishment_reports",filter:l},r).on("postgres_changes",{event:"*",schema:"public",table:"beneficiary_documents",filter:l},r).on("postgres_changes",{event:"*",schema:"public",table:"absorption_logs",filter:l},r).subscribe(i=>{})}function Br(){window.showAddDataModal=Oe,window.__maskDate=function(e){let t=e.replace(/\D/g,"").slice(0,8);return t.length>2&&t.length<=4?t=t.slice(0,2)+"/"+t.slice(2):t.length>4&&(t=t.slice(0,2)+"/"+t.slice(2,4)+"/"+t.slice(4)),t},window.__parseFormattedDate=function(e){if(!e)return null;const t=e.split("/");if(t.length===3){const o=parseInt(t[0])-1,s=parseInt(t[1]),a=parseInt(t[2]);if(a>1e3&&o>=0&&o<12&&s>0&&s<=31)return new Date(a,o,s)}return null},window.calculateAge=function(e){if(!e)return"";const t=e instanceof Date?e:new Date(e),o=new Date;let s=o.getFullYear()-t.getFullYear();const a=o.getMonth()-t.getMonth();return(a<0||a===0&&o.getDate()<t.getDate())&&s--,s>=0?s:0},window.viewBeneficiary=async function(e,t=0){const o=e?.id||e?.gip_id||null;if(!o)return;const s=!!(e?.name&&e?.office&&e?.remarks),a=!s;let r={...e,id:o};if(a&&Fe({id:o,_isLoadingProfile:!0,_isLoadingLogs:!0},t),!s){const p=await be(`api/beneficiaries.php?id=${encodeURIComponent(o)}`);p.success&&p.data?.success&&p.data?.beneficiary&&(r={...p.data.beneficiary,...r,id:o})}const l=null,i=!1;r.arLogs=[],r.dtrLogs=[],r.docs=[],r._isLoadingProfile=!1,r._isLoadingLogs=!i,r._noAnimation=a,Fe(r,t);try{const p={success:!1,error:"Supabase browser read unavailable",data:{success:!1,logs:[]}},b=async()=>{const{data:_,error:ne}=await ge.from("beneficiaries").select("beneficiary_id").eq("gip_id",o).maybeSingle();if(ne||!_?.beneficiary_id)return[p,p,p,p];const ee=_.beneficiary_id;gr(o,ee,r,t);const[de,ce,J,pe]=await Promise.all([ge.from("accomplishment_reports").select("ar_id, period, date_submitted, status, created_at, updated_at").eq("beneficiary_id",ee).order("date_submitted",{ascending:!1}),ge.from("daily_time_records").select("dtr_id, record_date, weekday, status, created_at, updated_at").eq("beneficiary_id",ee).order("record_date",{ascending:!1}),ge.from("beneficiary_documents").select("doc_id, document_name, status, updated_at").eq("beneficiary_id",ee).order("document_name"),ge.from("absorption_logs").select("log_id, absorption_datetime, where, position, agency").eq("beneficiary_id",ee).order("absorption_datetime",{ascending:!1})]),fe=(z,xe)=>({success:!z.error,data:{success:!z.error,logs:(z.data||[]).map(xe)}});return[fe(de,z=>({id:z.ar_id,period:z.period,date:z.date_submitted,status:z.status,created_at:z.created_at,updated_at:z.updated_at})),fe(ce,z=>({id:z.dtr_id,date:z.record_date,day:z.weekday,period:z.record_date,status:z.status,created_at:z.created_at,updated_at:z.updated_at})),fe(J,z=>({id:z.doc_id,name:z.document_name,status:z.status,updated_at:z.updated_at})),fe(pe,z=>({id:z.log_id,absorption_datetime:z.absorption_datetime,where:z.where,position:z.position,agency:z.agency}))]},f=()=>Promise.all([be(`api/logs.php?type=ar&gip_id=${encodeURIComponent(o)}`),be(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(o)}`),be(`api/logs.php?type=docs&gip_id=${encodeURIComponent(o)}`),be(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(o)}`)]);let m=Ce()&&ge?await b():await f();m.every(_=>_.success&&_.data?.success)||(m=await f());const[D,d,h,E]=m,y=D.success&&D.data?.success?D.data.logs:[],L=d.success&&d.data?.success?d.data.logs:[],I=h.success&&h.data?.success?h.data.logs:[],P=E.success&&E.data?.success?E.data.logs:[];if(P.length>0){const _=P[0];r.absorbDate=_.absorption_datetime,r.absorb_where=_.where||_.absorb_where,r.absorb_position=_.position||_.absorb_position,r.absorb_agency=_.agency||_.absorb_agency}const Y=JSON.stringify({ar:l?.arLogs||[],dtr:l?.dtrLogs||[],docs:l?.docs||[],absorption:[]}),R=JSON.stringify({ar:y,dtr:L,docs:I,absorption:P});if(!i||Y!==R){const _=document.getElementById("beneficiary-drawer-container");_&&_.dataset.beneficiaryId===String(o)&&(r.arLogs=y,r.dtrLogs=L,r.docs=I,r._isLoadingProfile=!1,r._isLoadingLogs=!1,Fe({...r,_noAnimation:!0},t))}}catch{{const b=document.getElementById("beneficiary-drawer-container");b&&b.dataset.beneficiaryId===String(o)&&(r._isLoadingProfile=!1,r._isLoadingLogs=!1,Fe({...r,_noAnimation:!0},t))}}},window.showAddDataModal=function(e){Oe(e)},window.editBeneficiary=function(e){pr(e)},window.showExportConfigModal=function(e){mr(e)},window.showProfileModal=function(){br()},window.showSearchExtraStatsModal=function(){hr()}}async function br(){try{if(Ce()&&ge){let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=s.id)}catch{}if(!e)throw new Error("User not logged in");const{data:t,error:o}=await ge.from("users").select("*").eq("user_id",e).single();if(o)throw o;bt(t)}else{let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=`?user_id=${s.id}`)}catch{}const o=await(await fetch(`${ye()}api/profile.php${e}`)).json();if(o.success){const s=o.profile;bt(s)}else j.fire({icon:"error",title:"Error",text:o.error||"Failed to load profile"})}}catch{}}function bt(e){const t=e.profile_picture_path?`${ye()}${e.profile_picture_path}`:null,o=e.full_name?e.full_name.split(" ").map(a=>a[0]).join("").substring(0,2).toUpperCase():"US",s=`
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
    `;j.fire({html:s,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const r=a.querySelector("#profile-edit-form"),l=a.querySelector("#profile-pic-input"),i=a.querySelector("#profile-avatar-preview");l.addEventListener("change",p=>{const b=p.target.files[0];if(b){const f=new FileReader;f.onload=m=>{i.innerHTML=`<img src="${m.target.result}" class="w-full h-full object-cover" />`},f.readAsDataURL(b)}}),r.addEventListener("submit",async p=>{p.preventDefault();const b=new FormData(r);try{const f=JSON.parse(localStorage.getItem("user"));f&&f.id&&b.append("user_id",f.id)}catch{}try{const m=await(await fetch(`${ye()}api/profile.php`,{method:"POST",body:b})).json();m.success?(m.profile&&(localStorage.setItem("user",JSON.stringify(m.profile)),fr(m.profile)),j.close(),j.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):j.fire({icon:"error",title:"Update Failed",text:m.error||"Something went wrong"})}catch{}})}})}function fr(e){if(!e)return;const t=e.full_name||e.name||e.username||"System User",o=e.email||(e.username?`${e.username}@dole.gov.ph`:"user@dole.gov.ph"),s=e.profile_picture_path?e.profile_picture_path.startsWith("http")?e.profile_picture_path:`${ye()}${e.profile_picture_path.replace(/^\//,"")}`:localStorage.getItem("user_avatar")||null,a=t.trim().split(" ").map(r=>r[0]).join("").substring(0,2).toUpperCase()||"US";document.querySelectorAll(".sidebar-user-name").forEach(r=>r.textContent=t),document.querySelectorAll(".sidebar-user-email").forEach(r=>r.textContent=o),document.querySelectorAll(".sidebar-user-avatar").forEach(r=>{const l=r.querySelector(".sidebar-avatar-initials"),i=r.querySelector(".sidebar-avatar-img");s?(i?(i.src=s,i.classList.remove("hidden")):r.innerHTML=`<img src="${s}" class="w-full h-full object-cover" />`,l&&l.classList.add("hidden")):l?(l.textContent=a,l.classList.remove("hidden"),i&&i.classList.add("hidden")):r.textContent=a}),localStorage.setItem("user_full_name",t),s&&localStorage.setItem("user_avatar",s)}function mr(e){const t=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",assignedUnit:"ALL",ageGroup:"ALL",dtrStatus:"ALL",arStatus:"ALL",documentStatus:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","assignedunit","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},o=`
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
                        ${["ID","Name","Age","Office","Assigned Unit","Start Date","End Date","Status","DTR Status","AR Status","Document Status"].map(s=>{const a=s.toLowerCase().replace(" ",""),r=t.columns.includes(a),l=`col-switch-${a}`;return`
                                <label for="${l}" class="flex min-h-10 sm:min-h-11 items-center gap-3 bg-white px-2.5 py-2 border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${l}" name="export-column" value="${a}" ${r?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="whitespace-nowrap text-[0.625rem] font-black uppercase tracking-tight text-gray-600 group-hover:text-emerald-600 sm:text-xs">${s}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>
            </form>
        </div>
    `;j.fire({html:o,width:"min(1120px, calc(100vw - clamp(0.5rem, 2vw, 1.5rem)))",showConfirmButton:!1,showCloseButton:!0,padding:"clamp(0.75rem, 2vw, 1.5rem)",customClass:{container:"font-montserrat",popup:"max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl shadow-2xl ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:s=>{const a=s.querySelector("#export-config-form"),r=a.querySelector("#export-office"),l=a.querySelector("#export-location"),i=a.querySelector("#export-year"),p=a.querySelector("#export-assigned-unit");if(p){const f=window.getExportAssignedUnits?window.getExportAssignedUnits():Ae,m=t.assignedUnit||"ALL";p.innerHTML=`<option value="ALL" ${m==="ALL"?"selected":""}>ALL ASSIGNED UNITS</option>`+f.map(D=>`<option value="${D}" ${m===D?"selected":""}>${D}</option>`).join("")}if(i&&window.getExportYears){const f=window.getExportYears(),m=t.year||"ALL";let D=`<option value="ALL" ${m==="ALL"?"selected":""}>ALL YEARS</option>`;f.forEach(d=>{D+=`<option value="${d}" ${m===d?"selected":""}>${d}</option>`}),i.innerHTML=D}const b=async(f,m)=>{if(l){if(!f){l.disabled=!0,l.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}l.disabled=!1,l.innerHTML='<option value="ALL">Loading...</option>';try{const D=await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${f}`),d=D.success&&D.data?.success&&Array.isArray(D.data.locations)?D.data.locations:[];let h='<option value="ALL">ALL LOCATIONS</option>';d.forEach(E=>{h+=`<option value="${E.location}" ${m===E.location?"selected":""}>${E.location}</option>`}),l.innerHTML=h}catch{l.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};r&&(async()=>{let f=[];try{const E=await window.apiGet("api/beneficiaries.php?get_offices_advanced=1");E.success&&E.data?.success&&Array.isArray(E.data.offices)&&(f=E.data.offices)}catch{}const m=t.office||"ALL";let D=`<option value="ALL" ${m==="ALL"?"selected":""}>ALL OFFICES</option>`;f.forEach(E=>{D+=`<option value="${E.office}" data-id="${E.id}" ${m===E.office?"selected":""}>${E.office}</option>`}),r.innerHTML=D;const h=r.options[r.selectedIndex]?.dataset?.id;h&&m!=="ALL"&&await b(h,t.location||"ALL"),r.addEventListener("change",async()=>{const E=r.options[r.selectedIndex];await b(E?.dataset?.id,"ALL")})})(),a.addEventListener("submit",f=>{f.preventDefault();const m=a.querySelectorAll('input[name="export-column"]:checked'),D=Array.from(m).map(Y=>Y.value),d=a.querySelector('input[name="export-gender"]:checked'),h=a.querySelector('input[name="export-section"]:checked'),E=a.querySelector('input[name="export-remarks"]:checked'),y=a.querySelector('input[name="export-age-group"]:checked'),L=a.querySelector("#export-prepared").value.trim(),I=a.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",L),localStorage.setItem("ldn_export_approved",I);const P={office:a.querySelector("#export-office").value,location:a.querySelector("#export-location")?.value||"ALL",year:a.querySelector("#export-year")?.value||"ALL",gender:d?d.value:t.gender||"ALL",assignedUnit:a.querySelector("#export-assigned-unit")?.value||"ALL",remarks:E?E.value:t.remarks||"ALL",ageGroup:y?y.value:t.ageGroup||"ALL",dtrStatus:a.querySelector("#export-dtr-status")?.value||"ALL",arStatus:a.querySelector("#export-ar-status")?.value||"ALL",documentStatus:a.querySelector("#export-document-status")?.value||"ALL",search:a.querySelector("#export-search").value.trim().toLowerCase(),sort:a.querySelector("#export-sort").value,section:h?h.value:"ALL",preparedBy:L,approvedBy:I,columns:D};e(P),j.close(),setTimeout(()=>{j.fire({toast:!0,position:"top-end",icon:"success",title:"Report configuration applied",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const et=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],Et=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function Oe(e=null){const t=!!e&&!e._isBulk,o=t?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",s=t?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",a=Ee(),r={borderBase:a?"border-slate-800":"border-gray-100/80",borderCard:a?"border-slate-800":"border-gray-100",borderInput:a?"border-slate-700":"border-gray-200",borderSugg:a?"border-slate-700":"border-gray-200",borderDivide:a?"divide-slate-700":"divide-gray-50",borderSuggHead:a?"border-slate-700":"border-gray-100",borderStatus:a?"border-slate-700":"border-gray-100",bgCard:a?"bg-slate-900/40":"bg-gray-50/40",bgInput:a?"bg-slate-900":"bg-white",bgSugg:a?"bg-slate-800":"bg-white",bgStatusWrap:a?"bg-slate-800/50":"bg-gray-50",bgActionBar:a?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:a?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:a?"bg-red-900/20":"bg-[#fef2f2]",textHeading:a?"text-green-500":"text-[#2e7d32]",textSubtitle:a?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:a?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:a?"text-slate-400":"text-gray-500",textInput:a?"text-white":"text-slate-900",textAge:a?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:a?"text-slate-500":"text-slate-400",textWorkOpt:a?"text-slate-300":"text-slate-600",textCourseOpt:a?"text-slate-300":"text-gray-600",textCancel:a?"text-red-400":"text-red-700",focusGreen:a?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:a?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:a?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:a?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:a?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:a?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:a?"bg-green-900/20":"bg-white",iconText:a?"text-green-400":"text-[#2e7d32]",iconBorder:a?"border-green-800/30":"border-[#c8e6c9]",dotGreen:a?"bg-green-500":"bg-[#2e7d32]",dotBlue:a?"bg-blue-500":"bg-royal-blue",idText:a?"text-white":"text-royal-blue",placeholder:a?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:a?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:a?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:a?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:a?"text-blue-400":"text-royal-blue",iconColor:a?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:a?"border-red-900/30":"border-[#fee2e2]",saveShadow:a?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:a?"border-slate-700":"border-gray-100/80"},l=`
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
            <div class="mb-4 pb-3 border-b ${r.borderBase} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t ${a?"border-slate-800/70":"border-gray-100"}">
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" value="${e?.designatedBeneficiary||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 transition-colors ${r.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${Et.map(i=>`
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
                            <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 tracking-widest ${a?"":"transition-colors"} ${a?"":"group-focus-within:text-royal-blue"}">Assigned Unit</label>
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
    `;j.fire({html:l,width:window.innerWidth<640?"96vw":window.innerWidth<1024?"90vw":"1120px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"0.75rem":window.innerWidth<1024?"1.25rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:i=>{window.initFlowbite&&window.initFlowbite();const p=i.querySelector("#cancel-modal-btn");p&&p.addEventListener("click",()=>{!t&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),j.close(),e?._isBulk&&Ue.onCancel()});const b=i.querySelector("#bulk-add-btn");b&&b.addEventListener("click",()=>{j.close(),Ue.init()});const f=(g,v)=>{g.addEventListener("paste",S=>{S.preventDefault();let $=(S.clipboardData||window.clipboardData).getData("text");if($){$=$.replace(/[-.\s]/g,"/");const u=$.split("/");if(u.length===3){const n=u[0].padStart(2,"0"),c=u[1].padStart(2,"0");let w=u[2];if(w.length===2){const W=new Date().getFullYear(),q=Math.floor(W/100)*100;w=String(q+parseInt(w))}else w=w.padStart(4,"0");const k=`${n}/${c}/${w}`;g.value=k;const C=new Event("input",{bubbles:!0});g.dispatchEvent(C);const T=window.__parseFormattedDate(k);T&&v&&(v(T),document.activeElement===g&&g.blur());const M=g._datepicker||g.parentNode&&g.parentNode._datepicker;M&&typeof M.hide=="function"&&M.hide()}}}),g.addEventListener("input",S=>{const $=window.__maskDate(S.target.value);if(S.target.value!==$&&(S.target.value=$),$.length===10){const u=window.__parseFormattedDate($);if(u&&v){v(u),document.activeElement===g&&g.blur();const n=g._datepicker||g.parentNode&&g.parentNode._datepicker;n&&typeof n.hide=="function"&&n.hide()}}}),g.addEventListener("changeDate",S=>{if(S.detail&&S.detail.date&&v){v(S.detail.date);const $=g._datepicker||g.parentNode&&g.parentNode._datepicker;$&&typeof $.hide=="function"&&$.hide()}})},m=i.querySelector("#birthday-input"),D=i.querySelector("#age-display"),d=i.querySelector("#age-warning"),h=i.querySelector("#submit-beneficiary-btn"),E=g=>{if(!g)return d&&d.classList.add("hidden"),h&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer")),!0;const v=parseInt(g),S=!isNaN(v)&&v>=18&&v<=29;return d&&(d.className=`mt-1 text-[0.625rem] font-bold ${S?"hidden":"flex"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`),h&&(S?(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer","active:scale-[0.98]")):(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),S};if(D&&(D.addEventListener("input",g=>{E(g.target.value)}),D.value&&E(D.value)),m){f(m,v=>{D&&(D.value=window.calculateAge(v),E(D.value),D.classList.add("animate-pulse"),setTimeout(()=>D.classList.remove("animate-pulse"),400))});const g=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);g&&(m._datepicker=new g(m,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const y=i.querySelector("#name-input-field"),L=i.querySelector("#duplicate-warning");if(y&&L){let g;const v=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},S=(u,n="")=>{L.className=`mt-1 text-[0.625rem] font-bold ${u?"flex":"hidden"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`;const c=L.querySelector("span");c&&(c.textContent=n?`Beneficiary already exists: ${n}`:"Beneficiary already exists")},$=async u=>{const n=v(),c=await fetch(`${ye()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...n?{"X-User-Id":String(n)}:{}},body:JSON.stringify({name:u,user_id:n,exclude_id:t?e?.id:null})});if(!c.ok)throw new Error(`Duplicate check failed (${c.status})`);return c.json()};y.addEventListener("input",u=>{const n=u.target.value.trim();if(clearTimeout(g),n.length<3){S(!1);return}g=setTimeout(async()=>{try{const c=await $(n);c.success&&c.exists?S(!0,c.match||c.name):S(!1)}catch{}},500)}),e?.name&&(S(!1),(async()=>{const u=await $(e.name);u.success&&u.exists&&S(!0,u.match||u.name)})())}const I=i.querySelector("#full-id-input"),P=i.querySelector("#series-no-input"),Y=i.querySelector('input[name="startDate"]'),R=i.querySelector('input[name="endDate"]'),_=i.querySelectorAll('input[name="remarks"]'),ne=i.querySelector("#extension-log-container"),ee=async g=>{if(!g)return;const v=[I,P].filter(Boolean);v.forEach(S=>{S.classList.add("animate-pulse"),S.placeholder="Syncing..."});try{const[S,$]=await Promise.all([be(`api/beneficiaries.php?next_id&year=${encodeURIComponent(g)}`),be(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(g)}`)]),u=S.success&&S.data?.success?S.data.nextId:null,n=$.success&&$.data?.success?$.data.nextSeries:null;u&&I&&(I.value=u),n&&P&&(P.value=n)}catch{}finally{v.forEach(S=>S.classList.remove("animate-pulse"))}},de=i.querySelector("#replacement-search-input"),ce=i.querySelector("#replacement-hidden"),J=i.querySelector("#replacement-suggestions"),pe=g=>{const v=(g.name||"").toUpperCase().trim(),S=g.startDateFormatted||g.startDate||"N/A",$=g.endDateFormatted||g.endDate||"N/A";return`${v} (${S.toUpperCase()} - ${$.toUpperCase()})`},fe=g=>{if(J){if(!g.length){J.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt}">No matching beneficiary found.</div>`,J.classList.remove("hidden");return}J.innerHTML=g.map(v=>{const S=pe(v);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${S.replace(/"/g,"&quot;")}">
                            ${S}
                        </button>
                    `}).join(""),J.classList.remove("hidden"),J.querySelectorAll(".replacement-option").forEach(v=>{v.addEventListener("click",()=>{const S=v.getAttribute("data-replacement")||"";de&&(de.value=S),ce&&(ce.value=S),J.classList.add("hidden")})})}};let z=null;const xe=async(g="")=>{const v=(g||"").trim(),S=`api/beneficiaries.php?replacement_candidates=1&limit=20${v?`&q=${encodeURIComponent(v)}`:""}`,$=await be(S);$.success&&$.data?.success&&Array.isArray($.data.candidates)&&fe($.data.candidates)};de&&ce&&J&&(de.addEventListener("focus",()=>{xe(de.value||"")}),de.addEventListener("input",()=>{ce.value=de.value.trim(),clearTimeout(z),z=setTimeout(()=>{xe(de.value||"")},250)}),document.addEventListener("click",g=>{de&&J&&!de.contains(g.target)&&!J.contains(g.target)&&J.classList.add("hidden")}));const me=()=>{const g=i.querySelector('input[name="remarks"]:checked');return g?g.value:"ONGOING"},Se=g=>{const v=i.querySelector(`input[name="remarks"][value="${g}"]`);v&&(v.checked=!0,B())},x=()=>{if(R&&R.value){const g=window.__parseFormattedDate(R.value);if(!g)return;const v=new Date;v.setHours(0,0,0,0);let S="ONGOING";g<v&&(S="EXPIRED"),Se(S)}},B=()=>{if(!ne)return;const g=me();if(g==="ABSORBED"){const v=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,S=v.getTimezoneOffset()*6e4,$=new Date(v.getTime()-S).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${a?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${a?"text-green-500":"text-[#2e7d32]"} border-b ${a?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${$}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                    `}else if(g==="RESIGNED"){const v=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,S=v.getTimezoneOffset()*6e4,$=new Date(v.getTime()-S).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${a?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${a?"text-red-500":"text-[#ce1126]"} border-b ${a?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${$}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${a?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${a?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${a?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${a?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ne.innerHTML=""};if(Y){let g=null;f(Y,u=>{const n=u.getFullYear();if(R){const c=new Date(u);c.setDate(c.getDate()+243);const w=String(c.getMonth()+1).padStart(2,"0"),k=String(c.getDate()).padStart(2,"0"),C=c.getFullYear();R.value=`${w}/${k}/${C}`}x(),n>1900&&n!==g&&(g=n,ee(n))}),R&&f(R,()=>x());const v=i.querySelector("#date-range-picker"),S=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),$=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(S&&v&&Y&&R){const u=new S(v,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});Y._datepicker=u.datepickers?.[0]||null,R._datepicker=u.datepickers?.[1]||null}else $&&(Y&&(Y._datepicker=new $(Y,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),R&&(R._datepicker=new $(R,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!t){const u=new Date().getFullYear();ee(u)}}_.forEach(g=>g.addEventListener("change",B));const A=i.querySelector("#resign-btn"),G=i.querySelector("#absorb-btn");A&&A.addEventListener("click",()=>Se("RESIGNED")),G&&G.addEventListener("click",()=>Se("ABSORBED")),i.querySelectorAll('input[type="text"], textarea').forEach(g=>{["id-number-input","full-id-input"].includes(g.id)||g.addEventListener("input",()=>{const v=g.selectionStart,S=g.selectionEnd;g.value=g.value.toUpperCase(),g.setSelectionRange(v,S)})}),x(),B(),F("education-input","course-suggestions","course-option"),F("designation-input","work-suggestions","work-option"),(()=>{const g=i.querySelector("#office-input"),v=i.querySelector("#office-suggestions");if(!g||!v)return;let S="OFFICES",$=null,u=[];const n=async()=>{const w="dole_offices_cache",k=async()=>{let T=[];try{if(ge&&Ce()){const[{data:M,error:W},{data:q}]=await Promise.all([ge.from("offices").select("*").order("office"),ge.from("office_locations").select("office_id")]);if(!W&&M?.length){const U={};q&&q.forEach(O=>{U[O.office_id]=(U[O.office_id]||0)+1}),T=M.map(O=>({id:O.id??O.office_id,office:O.office||O.office_name||"",location_count:U[O.id??O.office_id]||0})).filter(O=>O.office)}}}catch{}if(!T.length)try{const M=await be("api/beneficiaries.php?get_offices_advanced=1");M.success&&M.data?.success&&Array.isArray(M.data.offices)&&(T=M.data.offices)}catch{}return T.length>0&&(u=T,localStorage.setItem(w,JSON.stringify({data:T,timestamp:Date.now()}))),T},C=localStorage.getItem(w);if(C)try{const{data:T,timestamp:M}=JSON.parse(C);return u=T,Date.now()-M>300*1e3&&k().then(()=>{S==="OFFICES"&&c("OFFICES",$,g.value)}),T}catch{localStorage.removeItem(w)}return u.length===0?await k():u},c=async(w="OFFICES",k=null,C="")=>{if(S=w,$=k,w==="OFFICES"){const M=(await n()).filter(N=>N.office.toLowerCase().includes(C.toLowerCase()));v.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70 border-b ${r.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${M.length>0?M.map(N=>{const K=parseInt(N.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${N.id}" data-name="${N.office}" data-has-locations="${K}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${N.office}</span>
                                            </div>
                                            ${K?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                        </div>
                                    `}).join(""):`
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${C.trim()?`
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-50 px-1">New office: "${C.trim()}"</div>
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
                        `;const W=C.trim(),q=v.querySelector("#add-office-location-row-modal"),U=v.querySelector("#new-office-loc-input-modal"),O=v.querySelector("#confirm-office-with-loc-modal"),Q=v.querySelector("#add-office-with-loc-btn-modal"),Z=v.querySelector("#skip-office-loc-btn-modal");if(Q&&q&&Q.addEventListener("click",N=>{N.stopPropagation(),q.classList.remove("hidden"),q.classList.add("flex"),setTimeout(()=>U?.focus(),50)}),O&&U){const N=K=>{K.stopPropagation();const se=U.value.trim();g.value=se?`${W} - ${se}`:W,g.dataset.locationName=se||"",v.classList.add("hidden"),g.dispatchEvent(new Event("change"))};O.addEventListener("click",N),U.addEventListener("keydown",K=>{K.key==="Enter"&&N(K)}),U.addEventListener("click",K=>K.stopPropagation())}Z&&Z.addEventListener("click",N=>{N.stopPropagation(),g.value=W,g.dataset.locationName="",v.classList.add("hidden"),g.dispatchEvent(new Event("change"))}),v.querySelectorAll(".office-code-option").forEach(N=>{N.addEventListener("click",K=>{K.stopPropagation(),N.dataset.hasLocations==="true"?c("LOCATIONS",{id:N.dataset.id,name:N.dataset.name}):(g.value=N.dataset.name,g.dataset.officeId=N.dataset.id,delete g.dataset.locationName,v.classList.add("hidden"),g.dispatchEvent(new Event("change")))})})}else{v.innerHTML=`
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
                                        value="${C.includes(" - ")?C.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const T=v.querySelector("#locations-list-container"),M=v.querySelector("#location-search-internal"),W=`dole_locs_cache_${k.id}`;let q=[];const U=localStorage.getItem(W);if(U)try{const{data:Z,timestamp:N}=JSON.parse(U);q=Z}catch{localStorage.removeItem(W)}const O=async()=>{let Z=[];if(ge&&Ce()){const{data:N,error:K}=await ge.from("office_locations").select("location").eq("office_id",k.id).order("location");!K&&N&&(Z=N)}if(Z.length===0)try{const N=await be(`api/beneficiaries.php?get_office_locations=1&office_id=${k.id}`);N.success&&N.data?.success&&Array.isArray(N.data.locations)&&(Z=N.data.locations)}catch{}Z.length>0&&(q=Z,localStorage.setItem(W,JSON.stringify({data:Z,timestamp:Date.now()})),Q(M.value))},Q=(Z="")=>{const N=q.filter(se=>se.location.toLowerCase().includes(Z.toLowerCase())),K=Z.trim();N.length>0?T.innerHTML=N.map(se=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${se.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${se.location}</span>
                                    </div>
                                `).join(""):q.length===0?T.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(T.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60">No matching locations.</div>
                                    ${K?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${K}" as location
                                        </button>
                                    </div>`:""}
                                `,K&&T.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{g.value=`${k.name} - ${K}`,g.dataset.officeId=k.id,g.dataset.locationName=K,v.classList.add("hidden"),g.dispatchEvent(new Event("change"))})),T.querySelectorAll(".location-option").forEach(se=>{se.addEventListener("click",he=>{const ae=se.dataset.location;g.value=`${k.name} - ${ae}`,g.dataset.officeId=k.id,g.dataset.locationName=ae,v.classList.add("hidden"),g.dispatchEvent(new Event("change"))})})};Q(M.value),O(),setTimeout(()=>M.focus(),50),M.addEventListener("input",()=>Q(M.value)),M.addEventListener("click",Z=>Z.stopPropagation()),v.querySelector("#back-to-offices").addEventListener("click",Z=>{Z.stopPropagation(),c("OFFICES")})}};g.addEventListener("focus",()=>{v.classList.remove("hidden"),c(S,$,g.value)}),g.addEventListener("input",()=>{delete g.dataset.officeId,delete g.dataset.locationName,S="OFFICES",$=null,v.classList.remove("hidden"),c("OFFICES",null,g.value)}),document.addEventListener("click",w=>{!g.contains(w.target)&&!v.contains(w.target)&&(v.classList.add("hidden"),g.value||(S="OFFICES",$=null))})})();function F(g,v,S){const $=i.querySelector(`#${g}`),u=i.querySelector(`#${v}`);if(!$||!u)return;let n=!1;$.addEventListener("focus",()=>u.classList.remove("hidden")),document.addEventListener("click",c=>{!$.contains(c.target)&&!u.contains(c.target)&&u.classList.add("hidden")}),$.addEventListener("input",()=>{if(n){n=!1;return}const c=$.value.toLowerCase(),w=u.querySelectorAll(`.${S}`);let k=!1;w.forEach(C=>{const T=C.querySelector(".option-text");(T?T.innerText:C.innerText).toLowerCase().includes(c)?(C.style.display="block",k=!0):C.style.display="none"}),k?u.classList.remove("hidden"):u.classList.add("hidden")}),u.addEventListener("click",c=>{const w=c.target.closest(`.${S}`);if(!w)return;const k=w.querySelector(".option-text");$.value=k?k.innerText.trim():w.innerText.trim(),n=!0,u.classList.add("hidden"),$.dispatchEvent(new Event("change"))})}const re=i.querySelector("#add-beneficiary-form"),te="add_beneficiary_draft";if(!t){const g=localStorage.getItem(te);if(g)try{const v=JSON.parse(g);Object.entries(v).forEach(([S,$])=>{const u=re.elements[S];u&&u.type!=="file"&&u.type!=="hidden"&&(u.value=$)})}catch{}}re.addEventListener("input",g=>{if(!t){const v=new FormData(re),S={};v.forEach(($,u)=>S[u]=$),localStorage.setItem(te,JSON.stringify(S))}});let H=!1;re&&re.addEventListener("submit",async g=>{if(g.preventDefault(),H)return;re.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(he=>{he.classList.remove("ring-2","ring-red-500","!border-red-500")});const S=new FormData(re);let $=!1;const u=he=>{const ae=re.querySelector(`[name="${he}"]`);ae&&ae.classList.add("ring-2","ring-red-500","!border-red-500"),$=!0},n=S.get("name"),c=S.get("contact"),w=S.get("startDate"),k=S.get("endDate"),C=(S.get("designation")||"").trim(),T=S.get("birthday"),M=(S.get("office")||"").trim(),W=S.get("remarks"),q=(S.get("gip_id")||"").trim();(!n||n.trim()===""||/[0-9]/.test(n))&&u("name"),c&&c.trim()!==""&&/[^0-9]/.test(c.replace(/[\s\-\+\(\)]/g,""))&&u("contact"),(!T||!window.__parseFormattedDate(T))&&u("birthday"),(!w||!window.__parseFormattedDate(w))&&u("startDate"),(!k||!window.__parseFormattedDate(k))&&u("endDate");const U=window.__parseFormattedDate(w),O=window.__parseFormattedDate(k);U&&O&&O<U&&(u("startDate"),u("endDate")),M||u("office"),W||u("remarks"),!t&&!/^ROX-RD-ESIG-\d{4}-\d{4}$/.test(q)&&u("gip_id"),!t&&L&&!L.classList.contains("hidden")&&u("name");const Q=S.get("age"),Z=parseInt(Q);if((!Q||isNaN(Z)||Z<18||Z>29)&&($=!0,d&&(d.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof Ee=="function"&&Ee()?"text-red-400":"text-red-600"}`),h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),$)return;const N={};S.forEach((he,ae)=>{if(["birthday","startDate","endDate"].includes(ae)){const V=window.__parseFormattedDate(he);if(V){const ie=V.getFullYear(),ve=String(V.getMonth()+1).padStart(2,"0"),Lt=String(V.getDate()).padStart(2,"0");N[ae]=`${ie}-${ve}-${Lt}`}else N[ae]=he}else N[ae]=he}),C||(N.designation="N/A"),N.replacement||(N.replacement="");const K=i.querySelector("#office-input");K?.dataset.officeId&&(N.officeId=K.dataset.officeId),K?.dataset.locationName&&(N.locationName=K.dataset.locationName);const se=i.querySelector("#full-id-input")?.value;if(t?(N.id=e?.id,se&&(N.gip_id=se)):(N.id=null,se&&(N.gip_id=se)),window.addBeneficiaryData){H=!0,h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed"));try{if(await window.addBeneficiaryData(N)){if(!t){const ae="add_beneficiary_draft",V=re.querySelector('[name="office"]')?.value||"",ie=re.querySelector('[name="designation"]')?.value||"",ve=re.querySelector('[name="education"]')?.value||"";localStorage.setItem(ae,JSON.stringify({office:V,designation:ie,education:ve}))}j.close(),setTimeout(()=>{j.fire({toast:!0,position:"bottom-end",icon:"success",title:`Record ${t?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!t&&e?._isBulk&&Ue.onSaveSuccess()},100)}}finally{H=!1,h&&document.body.contains(h)&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed"))}}})}})}window.handleContactSubmit=async function(e){e.preventDefault();const t=e.target,o=t.querySelector('button[type="submit"]'),s=o.innerHTML;o.disabled=!0,o.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const a=new FormData(t);if((await fetch(t.action,{method:"POST",body:a,headers:{Accept:"application/json"}})).ok)j.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:l=>{l.addEventListener("mouseenter",j.stopTimer),l.addEventListener("mouseleave",j.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),t.reset();else throw new Error("Failed to send")}catch{j.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{o.disabled=!1,o.innerHTML=s}return!1};function hr(){j.fire({html:`
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
        `,width:"800px",showConfirmButton:!1,showCloseButton:!1,backdrop:!0,position:"top",scrollbarPadding:!1,customClass:{container:"font-montserrat !backdrop-blur-md !bg-slate-900/70",popup:"!bg-transparent border-0 !shadow-none p-0 !overflow-visible mt-24",htmlContainer:"!overflow-visible",closeButton:"hidden"},didOpen:()=>{const e=document.getElementById("extraStatsSearchForm"),t=document.getElementById("statsSearchInput"),o=document.getElementById("statsDatePickerContainer"),s=document.getElementById("datepicker-range-start"),a=document.getElementById("datepicker-range-end"),r=document.getElementById("statsSortDropdownBtn"),l=document.getElementById("statsSortDropdown"),i=document.getElementById("statsSortDropdownLabel");let p="keyword";r&&l&&(r.addEventListener("click",b=>{b.stopPropagation(),l.classList.toggle("hidden")}),document.querySelectorAll(".stats-sort-option").forEach(b=>{b.addEventListener("click",f=>{const m=f.target.getAttribute("data-sort");p=m,i.textContent=f.target.textContent,l.classList.add("hidden"),m==="date"?(t.classList.add("hidden"),t.required=!1,o.classList.remove("hidden"),o.classList.add("flex"),t.value=""):(o.classList.add("hidden"),o.classList.remove("flex"),t.classList.remove("hidden"),t.required=!1,s.value="",a.value="",m==="offices"?t.placeholder="Search by Office name (e.g. Iligan)...":m==="education"?t.placeholder="Search by Education level (e.g. College)...":m==="ages"?t.placeholder="Search by Age (e.g. 24)...":t.placeholder="Search by name, office, status...")})}),document.addEventListener("click",b=>{!r.contains(b.target)&&!l.contains(b.target)&&l.classList.add("hidden")})),setTimeout(()=>t?.focus(),100),e.addEventListener("submit",async b=>{b.preventDefault();const f={mode:p,query:t.value.trim().toLowerCase(),startDate:s.value,endDate:a.value};await xr(f)})}})}async function xr(e){const t=document.getElementById("statsSearchLoader"),o=document.getElementById("statsSearchResult");t.classList.remove("hidden"),o.classList.add("hidden"),o.classList.remove("grid");let s=await Ve();if(!s||s.length===0){const a=await be("api/beneficiaries.php?all=true");a&&a.status==="success"&&a.data?(s=a.data,typeof Te=="function"&&Te(s)):a&&a.data&&(s=Array.isArray(a.data)?a.data:Array.isArray(a)?a:[],typeof Te=="function"&&Te(s))}setTimeout(()=>{const{mode:a,query:r,startDate:l,endDate:i}=e,p=s.filter(d=>{if(a==="date"){const h=d.startDate||d.createdAt;if(!h)return!1;const E=new Date(h);if(isNaN(E.getTime()))return!1;if(E.setHours(0,0,0,0),l){const y=new Date(l);if(y.setHours(0,0,0,0),E<y)return!1}if(i){const y=new Date(i);if(y.setHours(0,0,0,0),E>y)return!1}return!0}else return a==="offices"?d.office?.toLowerCase().includes(r)||!1:a==="education"?d.education?.toLowerCase().includes(r)||!1:a==="ages"?d.age==r:r?d.name?.toLowerCase().includes(r)||!1||d.id?.toLowerCase().includes(r)||!1||d.office?.toLowerCase().includes(r)||!1||d.remarks?.toLowerCase().includes(r)||!1||d.designation?.toLowerCase().includes(r)||!1:!0});let b="";a==="date"?l&&i?b=`Date: ${l} to ${i}`:l?b=`Date: From ${l}`:i?b=`Date: Until ${i}`:b="Date: All Time":b=`${a.charAt(0).toUpperCase()+a.slice(1)}: "${r||"ALL"}"`,document.getElementById("statsSearchTermDisplay").textContent=b;const f=document.getElementById("statsTopResults");f&&(f.innerHTML="",p.length>0?p.slice(0,3).forEach(h=>{const E=(h.remarks||"No Status").toUpperCase();let y="text-gray-500";E==="ONGOING"?y="text-green-500":E==="EXPIRED"?y="text-red-500":E==="ABSORBED"?y="text-emerald-600":E==="RESIGNED"?y="text-[#ce1126]":y="text-royal-blue",f.innerHTML+=`
                        <div class="flex flex-col border-b border-gray-200 dark:border-slate-700 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-100 truncate">${h.name||"Unknown Beneficiary"}</span>
                            <div class="flex justify-between items-center text-xs mt-1">
                                <span class="text-gray-500 truncate max-w-[60%]">${h.office||"N/A"}</span>
                                <span class="${y} font-bold text-[10px] uppercase tracking-wider">${E}</span>
                            </div>
                        </div>
                    `}):f.innerHTML='<div class="text-center text-gray-400 font-bold text-xs mt-6 uppercase tracking-widest">No matching records found.</div>'),p.length,p.filter(d=>(d.remarks||"").toUpperCase()==="ONGOING").length,p.filter(d=>(d.remarks||"").toUpperCase()==="EXPIRED").length,p.filter(d=>(d.remarks||"").toUpperCase()==="ABSORBED").length,p.filter(d=>(d.remarks||"").toUpperCase()==="RESIGNED").length;const m=new Date,D={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};document.getElementById("statsCurrentDateTime").textContent=m.toLocaleString("en-US",D),Kt(p,"statsModalChartContainer"),t.classList.add("hidden"),o.classList.remove("hidden"),o.classList.add("grid")},400)}export{Ae as C,yt as _,Re as a,be as b,Cr as c,Dr as d,Ar as e,kr as f,ye as g,Ir as h,Ce as i,Sr as j,Er as k,Lr as l,We as m,Br as n,$r as r,ge as s,fr as u};
