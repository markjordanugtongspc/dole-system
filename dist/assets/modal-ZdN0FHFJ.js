const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-B7rSfpuT.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import T from"./vendor-swal-BSk0fVSb.js";import{a as kt}from"./vendor-DHtNC8Ux.js";import{A as Ke}from"./vendor-charts-BjInCqFR.js";const St="true".toLowerCase()==="true";function Re(){return St}function be(){const e=window.location.pathname,t="/dole-system/",a=e.toLowerCase().indexOf(t.toLowerCase());if(a!==-1)return e.substring(0,a+t.length);const s=e.indexOf("/frontend/");if(s!==-1)return e.substring(0,s+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function ot(e="Incorrect Username or Password"){T.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Et(e=!1){return T.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function mr(){const e=localStorage.getItem("hasVisitedBefore"),t=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),t&&(t.style.display="none")),window.addEventListener("load",()=>{const a=document.querySelector("body > *:not(.page-loader)");a&&a.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),t&&t.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const Pe={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const t=o=>o.split("").map(r=>r.charCodeAt(0)),a=o=>("0"+Number(o).toString(16)).substr(-2),s=o=>t(this._key).reduce((r,l)=>r^l,o);return e.split("").map(t).map(s).map(a).join("")}catch(t){return console.error("Encryption Failed",t),null}},decrypt:function(e){try{const t=s=>s.split("").map(o=>o.charCodeAt(0)),a=s=>t(this._key).reduce((o,r)=>o^r,s);return e.match(/.{1,2}/g).map(s=>parseInt(s,16)).map(a).map(s=>String.fromCharCode(s)).join("")}catch(t){return console.error("Decryption Failed",t),null}}};function hr(){document.querySelectorAll(".login-form-shared").forEach(t=>{const a=t.querySelector('input[name="username"]'),s=t.querySelector('input[name="password"]'),o=t.querySelector('input[name="rememberMe"]');if(a&&s&&o){const r=localStorage.getItem("secure_user"),l=localStorage.getItem("secure_pass");if(r&&l){const i=Pe.decrypt(r),u=Pe.decrypt(l);i&&u&&(a.value=i,s.value=u,o.checked=!0)}}t.addEventListener("submit",async r=>{r.preventDefault();try{const i=await(await fetch(`${be()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.value,password:s.value})})).json();if(i.success){o.checked?(localStorage.setItem("secure_user",Pe.encrypt(a.value)),localStorage.setItem("secure_pass",Pe.encrypt(s.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const u=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(i.user));const c=document.getElementById("drawer-login");if(c){c.classList.add("translate-y-full");const g=c.querySelector("[data-drawer-hide]");g&&g.click()}await Et(u),Lt(u)}else{const u=document.getElementById("drawer-login");u?(u.classList.add("translate-y-full"),setTimeout(()=>{ot(),setTimeout(()=>{u.classList.remove("translate-y-full"),s.value="",s.focus()},600)},400)):(ot(),s.value="",s.focus())}}catch(l){console.error("Login Error:",l),T.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Lt(e=!1){const t=document.getElementById("left-panel"),a=document.getElementById("right-panel"),s=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");s&&(s.style.opacity="0"),o&&(o.style.opacity="0");const r=document.createElement("div");r.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const l=e?"":"animate__delay-1s",i=e?"animation-duration: 0.8s;":"animation-duration: 2s;";r.innerHTML=`
        <img src="${be()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${l}" style="${i}" alt="DOLE Logo">
    `,document.body.appendChild(r);const u=e?0:1e3,c=e?600:1500;setTimeout(()=>{t&&t.classList.add("animate-slide-left"),a&&a.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${be()}frontend/dashboard/`},c)},u)}function xr(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${be()}`})}function vr(){const e=document.getElementById("mobile-splash"),t=document.getElementById("show-login-btn"),a=document.getElementById("back-to-splash"),s=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),r=document.getElementById("reopen-login-drawer"),l=document.getElementById("request-notifications-btn"),i=async()=>{if("Notification"in window){const x=await Notification.requestPermission();console.log("Notification permission:",x),x==="granted"&&l&&l.classList.add("hidden")}};Notification.permission==="default"&&l&&(l.classList.remove("hidden"),l.addEventListener("click",i));const u=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&i();const x=document.getElementById("drawer-login");x&&x.classList.remove("translate-y-full")},800))},c=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};t&&t.addEventListener("click",u),document.querySelectorAll(".forgot-password-link").forEach(x=>{x.addEventListener("click",S=>{S.target.closest("#mobile-splash")&&u()})}),a&&a.addEventListener("click",()=>{const x=document.getElementById("drawer-login");if(x){x.classList.add("translate-y-full");const S=x.querySelector("[data-drawer-hide]");S&&S.click()}c()});const b=document.getElementById("drawer-login"),L=document.getElementById("curved-welcome"),d=document.getElementById("peoples-bg");b&&new MutationObserver(S=>{S.forEach(y=>{y.attributeName==="class"&&(b.classList.contains("translate-y-full")?(s&&(s.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),L&&(L.style.opacity="0",L.style.transform="scale(0.5)"),r&&e&&e.style.visibility==="hidden"&&(r.style.opacity="1",r.style.transform="scale(1)"),d&&(d.classList.add("opacity-0","scale-0"),d.classList.remove("opacity-40","scale-[1.6]"))):(s&&(s.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),L&&(L.style.opacity="1",L.style.transform="scale(1)"),r&&(r.style.opacity="0",r.style.transform="scale(0)"),d&&(d.classList.remove("opacity-0","scale-0"),d.classList.add("opacity-40","scale-[1.6]"))))})}).observe(b,{attributes:!0})}const Be=()=>"false".toLowerCase()==="true";function $t(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const Le={debug(...e){Be()&&console.debug(...e)},info(...e){Be()&&console.info(...e)},warn(...e){Be()&&console.warn(...e)},error(...e){console.error(...e)},table(e){Be()&&console.table(e)},json(e,t){Be()&&console.debug(e,$t(t))}},qe=new Map;async function je(e,t={}){const s=`${be()}${e}`;let o=null;try{const g=JSON.parse(localStorage.getItem("user"));g&&(o=g.user_id||g.id||null)}catch{}const r={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...t.headers},...t},i=(r.method||"GET").toUpperCase()==="GET"?2:1;let u=null;for(let g=1;g<=i;g++)try{if(Le.debug("[API] Request",{url:s,method:r.method||"GET",hasUserId:!!o}),r.body)try{Le.json("[API] Payload",JSON.parse(r.body))}catch{Le.debug("[API] Payload (raw)",r.body)}const b=await fetch(s,r);if(!b.ok)throw new Error(`HTTP ${b.status}: ${b.statusText}`);const L=await b.json();return qe.has(s)&&(qe.delete(s),Le.info?.("[API] Recovered",{url:s})),Le.debug("[API] Response",{url:s,ok:!0}),{success:!0,data:L}}catch(b){if(u=b,b instanceof TypeError&&/fetch/i.test(b.message||"")&&g<i){await new Promise(x=>setTimeout(x,1200));continue}}return u instanceof TypeError&&/fetch/i.test(u.message||"")?qe.get(s)||(qe.set(s,!0),Le.error("API Request Network Error (suppressed for repeats):",{url:s,message:u.message})):Le.error("API Request Error:",u),{success:!1,error:u?.message||"Unknown request error"}}async function ce(e){return je(e,{method:"GET"})}async function Ze(e,t){return je(e,{method:"POST",body:JSON.stringify(t)})}async function Ct(e,t){return je(e,{method:"PUT",body:JSON.stringify(t)})}async function yr(e,t){const a=new URLSearchParams(t).toString();return je(`${e}?${a}`,{method:"PATCH"})}class Dt{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(t,a,s=1e4){this.stop(t),a();const o=setInterval(async()=>{this.isPageVisible&&await a()},s);this.intervals.set(t,o),console.log(`[Polling] Started: ${t} (every ${s}ms)`)}stop(t){this.intervals.has(t)&&(clearInterval(this.intervals.get(t)),this.intervals.delete(t),console.log(`[Polling] Stopped: ${t}`))}stopAll(){this.intervals.forEach((t,a)=>this.stop(a)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const At=new Dt;function wr(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function kr(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{At.stopAll()});const at="dole-gip-db",It=2,J={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let Fe=null;function he(){return Fe?Promise.resolve(Fe):new Promise((e,t)=>{const a=indexedDB.open(at,It);a.onupgradeneeded=s=>{const o=s.target.result;if(!o.objectStoreNames.contains(J.BENEFICIARIES)){const r=o.createObjectStore(J.BENEFICIARIES,{keyPath:"id"});r.createIndex("name","name",{unique:!1}),r.createIndex("office","office",{unique:!1}),r.createIndex("remarks","remarks",{unique:!1})}o.objectStoreNames.contains(J.SYNC_QUEUE)||o.createObjectStore(J.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),o.objectStoreNames.contains(J.METADATA)||o.createObjectStore(J.METADATA,{keyPath:"key"}),o.objectStoreNames.contains(J.APP_CACHE)||o.createObjectStore(J.APP_CACHE,{keyPath:"key"})},a.onsuccess=s=>{Fe=s.target.result,console.log("[DB] IndexedDB opened:",at),e(Fe)},a.onerror=s=>{console.error("[DB] Failed to open IndexedDB:",s.target.error),t(s.target.error)}})}async function Oe(e){const t=await he();return new Promise((a,s)=>{const o=t.transaction(J.BENEFICIARIES,"readwrite"),r=o.objectStore(J.BENEFICIARIES);r.clear(),e.forEach(l=>{const i={...l,id:l.id||l.gip_id};r.put(i)}),o.oncomplete=()=>{Mt("beneficiaries_last_sync",Date.now()),console.log(`[DB] Cached ${e.length} beneficiaries locally`),a(e.length)},o.onerror=()=>s(o.error)})}async function Ve(){const e=await he();return new Promise((t,a)=>{const r=e.transaction(J.BENEFICIARIES,"readonly").objectStore(J.BENEFICIARIES).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>a(r.error)})}async function Sr(e){const t=await he();return new Promise((a,s)=>{const r=t.transaction(J.BENEFICIARIES,"readwrite").objectStore(J.BENEFICIARIES),l={...e,id:e.id||e.gip_id},i=r.put(l);i.onsuccess=()=>a(i.result),i.onerror=()=>s(i.error)})}async function Er(e){const t=await he();return new Promise((a,s)=>{const l=t.transaction(J.BENEFICIARIES,"readwrite").objectStore(J.BENEFICIARIES).delete(e);l.onsuccess=()=>a(),l.onerror=()=>s(l.error)})}async function Bt(){const e=await gt("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function Lr(e,t,a){const s=await he();return new Promise((o,r)=>{const i=s.transaction(J.SYNC_QUEUE,"readwrite").objectStore(J.SYNC_QUEUE),u={method:e,endpoint:t,payload:a,status:"pending",attempts:0,createdAt:Date.now(),lastAttempt:null},c=i.add(u);c.onsuccess=()=>{console.log(`[SyncQueue] Enqueued ${e} ${t} (id: ${c.result})`),o(c.result)},c.onerror=()=>r(c.error)})}async function rt(){const e=await he();return new Promise((t,a)=>{const l=e.transaction(J.SYNC_QUEUE,"readonly").objectStore(J.SYNC_QUEUE).index("status").getAll("pending");l.onsuccess=()=>t(l.result||[]),l.onerror=()=>a(l.error)})}async function $r(e,t,a={}){const s=await he();return new Promise((o,r)=>{const i=s.transaction(J.SYNC_QUEUE,"readwrite").objectStore(J.SYNC_QUEUE),u=i.get(e);u.onsuccess=()=>{const c=u.result;if(!c)return o();const g={...c,status:t,lastAttempt:Date.now(),attempts:(c.attempts||0)+1,...a},b=i.put(g);b.onsuccess=()=>o(),b.onerror=()=>r(b.error)},u.onerror=()=>r(u.error)})}async function Cr(e){const t=await he();return new Promise((a,s)=>{const l=t.transaction(J.SYNC_QUEUE,"readwrite").objectStore(J.SYNC_QUEUE).delete(e);l.onsuccess=()=>a(),l.onerror=()=>s(l.error)})}async function Dr(){return(await rt()).length}async function Mt(e,t){const a=await he();return new Promise((s,o)=>{const i=a.transaction(J.METADATA,"readwrite").objectStore(J.METADATA).put({key:e,value:t});i.onsuccess=()=>s(),i.onerror=()=>o(i.error)})}async function gt(e){const t=await he();return new Promise((a,s)=>{const l=t.transaction(J.METADATA,"readonly").objectStore(J.METADATA).get(e);l.onsuccess=()=>a(l.result?.value??null),l.onerror=()=>s(l.error)})}function Nt(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function Ot(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch(t){return console.error("[DB] Failed to decrypt local cache",t),null}}async function Tt(e,t){const a=await he();return new Promise((s,o)=>{const l=a.transaction(J.APP_CACHE,"readwrite").objectStore(J.APP_CACHE),i={key:e,data:Nt(t),updated_at:Date.now()},u=l.put(i);u.onsuccess=()=>{console.log(`[DB] Securely cached offline data for: ${e}`),s()},u.onerror=()=>o(u.error)})}async function Rt(e){const t=await he();return new Promise((a,s)=>{const l=t.transaction(J.APP_CACHE,"readonly").objectStore(J.APP_CACHE).get(e);l.onsuccess=()=>{l.result&&l.result.data?a(Ot(l.result.data)):a(null)},l.onerror=()=>s(l.error)})}async function _t(){const[e,t]=await Promise.all([Ve(),rt()]),a=await gt("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:a?new Date(a).toLocaleString():"Never"}}window.__doleDB={getStats:_t,getLocalBeneficiaries:Ve,getPendingSyncItems:rt,setSecureCache:Tt,getSecureCache:Rt};const De=["Local Employment Unit (LEU)","Labor Standards Unit (LSU)","Internal Management Services Unit (IMSU)","Wellfare Workers Unit (WWU)","Labor Relation Unit (LRU)","Information Technology Unit (IT)"],ne=()=>document.documentElement.classList.contains("dark"),Qe=()=>ne()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},ge={royalBlue:()=>ne()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(ne(),"#94a3b8")},Me=()=>ne()?"#475569":"#cbd5e1";let Ne=null;function Ye(e){const a=`; ${document.cookie}`.match(new RegExp(`;\\s*${e}=([^;]+)`));return a?decodeURIComponent(a[1]):null}function Ge(e,t,a){let s=new Date;s.setTime(s.getTime()+a*24*60*60*1e3),document.cookie=`${e}=${encodeURIComponent(t)};expires=${s.toUTCString()};path=/`}let te=Ye("user_workforce_filter")||"ALL",ft=Ye("user_workforce_label")||"Overall Stats",_e=Ye("user_gender_filter")||"ALL",bt=Ye("user_gender_label")||"All Years";function me(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const s=new Date(`${t}T00:00:00`);return isNaN(s.getTime())?null:s}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const s=t.replace(" ","T"),o=new Date(s);return isNaN(o.getTime())?null:o}const a=new Date(t);return isNaN(a.getTime())?null:a}function mt(e){const t=Number.parseInt(e?.age,10);if(Number.isInteger(t)&&t>=0)return t;const a=me(e?.birthday);if(!a)return null;const s=new Date;let o=s.getFullYear()-a.getFullYear();const r=s.getMonth()-a.getMonth();return(r<0||r===0&&s.getDate()<a.getDate())&&o--,o>=0?o:null}function jt(e){const t=String(e||"").trim(),a=t.match(/\(([A-Z]{2,8})\)\s*$/i)?.[1];return a?a.toUpperCase():/information technology/i.test(t)?"IT":t.length>18?`${t.slice(0,16)}...`:t}function Pt(e){const t=String(e||"").trim().toUpperCase().split(" ").filter(Boolean).join(" ");if(!t||["N/A","NA","NONE","UNASSIGNED"].includes(t))return null;const a=De.find(r=>r.toUpperCase()===t);if(a)return a;const s=De.find(r=>{const l=r.lastIndexOf("("),i=r.lastIndexOf(")"),u=l>=0&&i>l?r.slice(l+1,i).toUpperCase():"";return u&&(t===u||t.endsWith("("+u+")"))});return s||{"INFORMATION TECHNOLOGY":"Information Technology Unit (IT)","WELFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)","WELLFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)"}[t]||null}function qt(e,t){const a=/^\d{4}$/.test(String(t||""))?Number(t):null,s=Array.from({length:12},()=>({total:0,ages:new Map,ageGroups:{"18-24":0,"25-30":0,"31-40":0,"41+":0}}));return e.forEach(o=>{const r=me(o.createdAt),l=mt(o);if(!r||!Number.isInteger(l)||l<18||a&&r.getFullYear()!==a)return;const i=s[r.getMonth()];i.total++,i.ages.set(l,(i.ages.get(l)||0)+1),l<=24?i.ageGroups["18-24"]++:l<=30?i.ageGroups["25-30"]++:l<=40?i.ageGroups["31-40"]++:i.ageGroups["41+"]++}),s.map((o,r)=>({month:new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2024,r,1)).toUpperCase(),totalAdded:o.total,ageGroups:o.ageGroups,exactAges:[...o.ages.entries()].sort((l,i)=>l[0]-i[0])}))}function st(e){return e.reduce((t,a)=>{const s=me(a.createdAt);return s?Math.max(t,s.getFullYear()):t},0)}const nt={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function We(e=!1){if(localStorage.getItem("isLoggedIn")!=="true"||!document.getElementById("workforce-chart"))return;let t=[];if(e&&(Ne=null),Ne)t=Ne;else{const[p,k]=await Promise.all([Ve(),Bt()]);if(p.length>0&&k<6e4)t=p,Ne=t,console.log(`[Charts] IndexedDB hit — ${t.length} records (${Math.round(k/1e3)}s old)`);else try{const E=await ce("api/beneficiaries.php?all=true");if(E.success&&E.data?.success&&E.data?.beneficiaries)t=E.data.beneficiaries,Ne=t,Oe(t).catch(()=>{}),console.log(`[Charts] API fetch — cached ${t.length} records to IndexedDB`);else{console.debug("[CHARTS] Skipping chart render:",E.data?.error||E.error);return}}catch(E){console.debug("[CHARTS] Chart init skipped:",E?.message);return}}if(t.length===0)return;Zt();const a=Qe();document.querySelectorAll('[id$="-chart"]').forEach(n=>n.innerHTML="");const s=[...new Set(t.map(n=>{const p=n.startDate||n.createdAt,k=me(p);return k?k.getFullYear().toString():null}).filter(n=>n))].sort((n,p)=>p-n);Gt(s,t),Vt(s,t);const o=new Date;let r=t;te!=="ALL"&&(r=t.filter(n=>{if(te.includes("D")){const p=me(n.createdAt);if(!p)return!1;const k=parseInt(te),E=new Date;return E.setDate(o.getDate()-k),E.setHours(0,0,0,0),p>=E}else if(s.includes(te)){const p=me(n.startDate||n.createdAt);return p?p.getFullYear().toString()===te:!1}return!0}));const l=Je(t),i=Je(r);zt(l,i);let u=[];if(te==="ALL"){const p=new Date().getFullYear();for(let k=2020;k<=p;k++)u.push(k.toString())}else if(s.includes(te))u=["Q1","Q2","Q3","Q4"];else{const n=parseInt(te)||7;u=Array.from({length:n},(p,k)=>{const E=new Date;return E.setDate(o.getDate()-(n-1-k)),new Date(E.getTime()-E.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const c={};u.forEach(n=>c[n]=0),r.forEach(n=>{const p=n.startDate||n.createdAt;if(p){const k=me(p);if(!k)return;const E=k.getFullYear().toString(),C=new Date(k.getTime()-k.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(te==="ALL")c.hasOwnProperty(E)&&c[E]++;else if(te.includes("D"))c.hasOwnProperty(C)&&c[C]++;else if(E===te){const N="Q"+(Math.floor(k.getMonth()/3)+1);c.hasOwnProperty(N)&&c[N]++}}});const g=Object.values(c),b=r.length,L=g[g.length-1]||0,d=g[g.length-2]||0;let x;if(te==="ALL"){const n=b/u.length;x=L>=n}else x=L>=d;let S=x?ge.successGreen:ge.philippineRed,y=x?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",$=x?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";te==="ALL"?(S=ge.successGreen,y="bg-green-500 shadow-green-500/30",$="text-green-600 dark:text-green-400"):te==="7D"?(S="#fb923c",y="bg-orange-500 shadow-orange-500/30",$="text-orange-500 dark:text-orange-400"):te==="30D"?(S="#eab308",y="bg-yellow-500 shadow-yellow-500/30",$="text-yellow-600 dark:text-yellow-400"):te==="90D"?(S="#2563eb",y="bg-blue-600 shadow-blue-600/30",$="text-blue-600 dark:text-blue-400"):s.includes(te)&&(S="#f87171",y="bg-red-400 shadow-red-400/30",$="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(n=>{n.textContent=b,n.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${$}`});const O=d>0?Math.round((L-d)/d*100):L>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(n=>n.textContent=(O>=0?"+":"")+(te==="ALL"?"Growth":O+"%"));const q=document.getElementById("added-metric-badge");q&&(q.className=`flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${y}`);const X=document.getElementById("added-metric-icon");X&&(X.style.transform=x?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(n=>{const p=document.getElementById(n);p&&(p.innerHTML=`${ft} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const re={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:ne()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:S,opacity:.6},{offset:100,color:S,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[S]},series:[{name:"New Beneficiaries",data:g}],xaxis:{categories:u,labels:{show:!0,style:{colors:a.muted,fontSize:"0.625rem",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:a.muted,fontSize:"0.625rem",fontWeight:600}}},grid:{show:!0,borderColor:a.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[S],markers:{size:u.length>20?0:4,colors:[S],strokeColors:a.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:ne()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};$e("workforce-chart",re);const ae=_e==="ALL"?t:t.filter(n=>{const p=me(n.startDate||n.createdAt);return p&&p.getFullYear().toString()===_e}),ee=Je(ae),se={series:[ee.genders.Female||0,ee.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:[ge.philippineRed,ge.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"0.75rem",fontWeight:600,color:a.muted},value:{show:!0,fontSize:"1.5rem",fontWeight:900,color:a.text,formatter:n=>n},total:{show:!0,label:"TOTAL",fontSize:"0.625rem",fontWeight:800,color:a.muted,formatter:n=>n.globals.seriesTotals.reduce((p,k)=>p+k,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[a.cardBg],width:4},theme:{mode:ne()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"1.125rem"}}}}}}}]};$e("gender-chart",se);const ie=[{key:"College Grad",label:"College Graduate",count:i.education["College Grad"]||0,color:ge.royalBlue()},{key:"College Lvl",label:"College Level",count:i.education["College Lvl"]||0,color:ge.goldenYellow},{key:"HS Grad",label:"High School",count:i.education["HS Grad"]||0,color:ge.philippineRed},{key:"Senior High",label:"Senior High",count:i.education["Senior High"]||0,color:ge.successGreen}],Q=ie.reduce((n,p)=>n+p.count,0),ue=[...ie].sort((n,p)=>p.count-n.count||n.label.localeCompare(p.label)),xe=ue[0];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([n,p])=>{document.querySelectorAll(p).forEach(k=>{k.textContent=i.education[n]||0})});const fe=document.getElementById("education-profile-total"),pe=document.getElementById("education-profile-leading");if(fe&&(fe.textContent=Q),pe){const n=Q>0?Math.round(xe.count/Q*100):0;pe.textContent=Q>0?`${xe.label} · ${n}%`:"No data",pe.title=pe.textContent}const ve={series:[{name:"Beneficiaries",data:ue.map(n=>({x:n.label,y:n.count,fillColor:n.color}))}],chart:{height:285,type:"bar",toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},plotOptions:{bar:{horizontal:!0,distributed:!0,barHeight:"48%",dataLabels:{position:"top"},borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,formatter:n=>Math.round(n),offsetX:12,offsetY:4,textAnchor:"start",style:{fontSize:"0.625rem",fontWeight:900,colors:[a.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.9,borderWidth:0}},xaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{colors:a.muted,fontSize:"0.5625rem",fontWeight:700}},axisBorder:{show:!1},axisTicks:{show:!1},title:{text:"TOTAL BENEFICIARIES",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},yaxis:{labels:{minWidth:118,maxWidth:180,trim:!1,style:{colors:a.text,fontSize:"0.6875rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:10,right:58,bottom:-4,left:8}},legend:{show:!1},tooltip:{theme:ne()?"dark":"light",y:{formatter:n=>{const p=Q>0?Math.round(n/Q*100):0;return`${n} beneficiaries (${p}% of recorded)`}}},noData:{text:"NO EDUCATION DATA",style:{color:a.muted,fontSize:"11px"}},theme:{mode:ne()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:285},yaxis:{labels:{minWidth:96,maxWidth:132,trim:!1,style:{fontSize:"0.625rem"}}},dataLabels:{style:{fontSize:"0.5625rem"}}}}]};$e("education-chart",ve),document.querySelectorAll(".count-absorbed").forEach(n=>n.textContent=i.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(n=>n.textContent=i.status.ONGOING||0);const w={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:i.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:i.status.ONGOING||0},{x:"Expired",y:i.status.EXPIRED||0},{x:"Resigned",y:i.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"0.75rem",fontWeight:"900",colors:[a.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a.muted,fontWeight:700}}},yaxis:{show:!0,labels:{show:!1}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:20,right:8,bottom:0,left:8}},tooltip:{theme:ne()?"dark":"light",y:{formatter:n=>n+" Beneficiaries"}},theme:{mode:ne()?"dark":"light"}};$e("status-chart",w);const M=new Map(Object.entries(l.designations).map(([n,p])=>[n.trim().toUpperCase(),p])),I=new Map(De.map((n,p)=>[n,p])),_=De.map(n=>[n,M.get(n.toUpperCase())||0]).sort((n,p)=>p[1]-n[1]||I.get(n[0])-I.get(p[0])),V=_.map(([n])=>n),G={series:[{name:"Total GIP",data:_.map(([,n])=>n)}],chart:{type:"bar",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:[ge.royalBlue()],plotOptions:{bar:{horizontal:!1,columnWidth:"34%",borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,offsetY:-14,formatter:n=>Math.round(n),style:{fontSize:"0.625rem",fontWeight:900,colors:[a.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.86,borderWidth:0}},xaxis:{categories:V,axisBorder:{show:!1},axisTicks:{show:!1},labels:{rotate:0,trim:!1,hideOverlappingLabels:!1,formatter:n=>jt(n),style:{fontWeight:800,colors:a.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:a.muted,fontSize:"0.5625rem"}},title:{text:"TOTAL COUNT",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:2,right:4,bottom:-4}},legend:{show:!1},tooltip:{theme:ne()?"dark":"light",x:{formatter:(n,p)=>V[p.dataPointIndex]||"Assigned Unit"},y:{formatter:n=>`${n} Beneficiaries`}},theme:{mode:ne()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:210},plotOptions:{bar:{columnWidth:"46%"}},dataLabels:{style:{fontSize:"0.5rem"}},xaxis:{labels:{style:{fontSize:"0.5rem"}}}}}]};$e("assigned-units-chart",G),Ft(_);const Z=(/^\d{4}$/.test(te)?Number(te):0)||st(r)||st(t)||new Date().getFullYear(),f=qt(r,Z),h=document.getElementById("age-chart-year");h&&(h.textContent=Z);const v=[{key:"18-24",label:"AGE 18–24"},{key:"25-30",label:"AGE 25–30"},{key:"31-40",label:"AGE 31–40"},{key:"41+",label:"AGE 41+"}],D={series:v.map(n=>({name:n.label,data:f.map(p=>p.ageGroups[n.key])})),chart:{type:"bar",stacked:!0,height:330,toolbar:{show:!1},zoom:{enabled:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:["#0038A8","#2563EB","#60A5FA","#93C5FD"],plotOptions:{bar:{horizontal:!1,columnWidth:"54%",borderRadius:2,borderRadiusApplication:"end",dataLabels:{total:{enabled:!0,offsetY:-8,style:{fontSize:"0.625rem",fontWeight:900,color:a.text}}}}},dataLabels:{enabled:!0,formatter:n=>n>0?Math.round(n):"",style:{fontSize:"0.5625rem",fontWeight:900,colors:["#ffffff","#ffffff","#0f172a","#0f172a"]},dropShadow:{enabled:!1}},xaxis:{categories:f.map(n=>n.month),axisBorder:{show:!0,color:a.grid},axisTicks:{show:!1},title:{text:"MONTH ADDED",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}},labels:{rotate:-40,trim:!1,hideOverlappingLabels:!1,style:{fontWeight:800,colors:a.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:a.muted,fontSize:"0.625rem"}},title:{text:"TOTAL BENEFICIARIES",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:8,right:12,bottom:4}},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"10px",fontWeight:800,labels:{colors:a.muted},markers:{size:5,shape:"square"},itemMargin:{horizontal:8,vertical:3}},tooltip:{shared:!0,intersect:!1,theme:ne()?"dark":"light",custom:({dataPointIndex:n})=>{const p=f[n],k=v.map(C=>`${C.label}: <strong>${p?.ageGroups[C.key]||0}</strong>`).join("<br>"),E=p?.exactAges?.length?p.exactAges.map(([C,N])=>`Age ${C}: ${N}`).join(" · "):"No recorded ages";return`<div class="px-3 py-2 text-xs leading-5"><strong>${p?.month||""} ${Z}</strong><br>Total: <strong>${p?.totalAdded||0}</strong><br>${k}<div class="mt-1 border-t border-slate-200 pt-1 text-[10px] dark:border-slate-600">${E}</div></div>`}},noData:{text:"NO AGE DATA",align:"center",verticalAlign:"middle",style:{color:a.muted,fontSize:"11px"}},theme:{mode:ne()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:360},plotOptions:{bar:{columnWidth:"66%"}},dataLabels:{enabled:!1},xaxis:{labels:{rotate:-55,style:{fontSize:"0.5rem"}}},legend:{fontSize:"9px",itemMargin:{horizontal:5,vertical:2}}}}]};$e("age-chart",D);const A=Ht(t);Ut(A);const m={series:[{name:"Actual Beneficiaries",data:Object.values(A.municipalityData).map(n=>n.actual)},{name:"Target Slots",data:Object.values(A.municipalityData).map(n=>n.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:a.cardBg},theme:{mode:ne()?"dark":"light"},colors:[ge.royalBlue(),ne()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(A.municipalityData),labels:{style:{fontWeight:600,colors:a.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:a.muted}}},legend:{show:!1},fill:{opacity:1},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}}};$e("performance-gap-chart",m)}function Ft(e){const t=document.getElementById("assigned-units-summary");t&&(t.innerHTML=e.map(([a,s],o)=>`
        <div class="flex min-w-0 items-center justify-between gap-3 border border-slate-100 bg-slate-50/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50">
            <div class="flex min-w-0 items-center gap-2">
                <span class="inline-flex h-5 min-w-5 shrink-0 items-center justify-center bg-royal-blue text-[0.5625rem] font-black text-white">${o+1}</span>
                <span class="break-words text-[0.625rem] font-black uppercase leading-relaxed tracking-tight text-slate-600 dark:text-slate-300" title="${a}">${a}</span>
            </div>
            <span class="inline-flex min-w-7 shrink-0 items-center justify-center bg-white px-2 py-1 text-xs font-black tabular-nums text-royal-blue shadow-sm dark:bg-slate-800 dark:text-blue-400">${s}</span>
        </div>
    `).join(""))}function $e(e,t){const a=document.getElementById(e);if(!a)return;a.innerHTML="",new Ke(a,t).render()}function Je(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},exactAges:{},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},a=new Date;return a.setHours(0,0,0,0),e.forEach(s=>{const o=s.office||"Unassigned";t.offices[o]=(t.offices[o]||0)+1;const r=(s.gender||"Unknown").trim(),l=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[l]++;const i=String(s.education||"").trim().toUpperCase().replace(/\s+/g," "),u=i.includes("COLLEGE")&&i.includes("GRADUATE")||i.includes("BACHELOR")||i.includes("DEGREE")||/(^|\s)(BS|AB)(\s|$)/.test(i);i.includes("SENIOR HIGH")?t.education["Senior High"]++:u?t.education["College Grad"]++:i.includes("COLLEGE")?t.education["College Lvl"]++:(i.includes("HIGH SCHOOL")||/(^|\s)HS(\s|$)/.test(i))&&t.education["HS Grad"]++;const c=Pt(s.designation);c&&(t.designations[c]=(t.designations[c]||0)+1);const g=(s.remarks||s.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),b=!!s.absorbDate;if(g.includes("ABSORBED")||b)t.status.ABSORBED++;else if(g.includes("RESIGNED"))t.status.RESIGNED++;else if(g==="ONGOING"||g.includes("ONGOING")||g.includes("ACTIVE")||s.status_id==1)t.status.ONGOING++;else if(g.includes("EXPIRED"))t.status.EXPIRED++;else{let d=!1;if(s.endDate){const x=me(s.endDate);x&&x<a&&(d=!0)}d?t.status.EXPIRED++:t.status.ONGOING++}const L=mt(s);Number.isInteger(L)&&(t.totalAge+=L,t.ageCount++,t.exactAges[L]=(t.exactAges[L]||0)+1,L>=18&&L<=24?t.ages["18-24"]++:L>=25&&L<=30?t.ages["25-30"]++:L>=31&&L<=40?t.ages["31-40"]++:L>=41&&t.ages["41+"]++)}),t}function Ht(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(nt).forEach(([a,s])=>{t.municipalityData[a]={actual:0,target:s},t.totalTarget+=s}),e.forEach(a=>{const s=(a.office||"").toUpperCase();let o="OTHER";for(const l in nt)if(s.includes(l)){o=l;break}if(t.municipalityData[o]&&(t.municipalityData[o].actual++,t.totalActual++),(a.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,a.createdAt&&a.startDate){const l=new Date(a.createdAt),i=new Date(a.startDate),u=Math.ceil((i-l)/(1e3*60*60*24));u>=0&&u<180&&(t.velocity.totalDays+=u,t.velocity.count++)}}),t}function Ut(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(r=>{r.textContent=t+"%";const l=r.parentElement?.nextElementSibling?.firstElementChild;l&&(l.style.width=t+"%")});const a=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(r=>r.textContent=a);const s=e.retention.count+e.retention.resign,o=s>0?(e.retention.count/s*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(r=>r.textContent=o+"%")}function zt(e,t){const a=Object.values(e.offices).reduce((c,g)=>c+g,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(c=>c.textContent=a);const s=e.genders.Female||0,o=e.genders.Male||0;document.querySelectorAll(".metric-female-ratio").forEach(c=>c.textContent=s.toLocaleString()),document.querySelectorAll(".metric-male-ratio").forEach(c=>c.textContent=o.toLocaleString());const r=c=>{const[g,b]=Object.entries(c.exactAges||{}).sort((d,x)=>x[1]-d[1]||Number(d[0])-Number(x[0]))[0]||[null,0],L=c.ageCount>0?b/c.ageCount*100:0;return{age:g,count:b,percentage:L}},l=c=>`${Number.isInteger(c)?c.toFixed(0):c.toFixed(1)}%`,i=r(e);document.querySelectorAll(".metric-top-age-label").forEach(c=>{c.textContent=i.age===null?"N/A":`${i.age} YRS`}),document.querySelectorAll(".metric-top-age-share").forEach(c=>{c.textContent=`${l(i.percentage)} of recorded ages`});const u=r(t);document.querySelectorAll(".metric-top-age").forEach(c=>{c.textContent=u.age===null?"N/A":u.age}),document.querySelectorAll(".metric-filtered-top-age-share").forEach(c=>{c.textContent=`${l(u.percentage)} of filtered ages`})}function Gt(e,t){const a=document.querySelector("#lastDaysdropdown ul");if(!a)return;const s=t.length,o=new Date,r=u=>{const c=new Date;return c.setDate(o.getDate()-u),c.setHours(0,0,0,0),t.filter(g=>{const b=me(g.createdAt);return b&&b>=c}).length},l=u=>t.filter(c=>{const g=me(c.startDate||c.createdAt);return g&&g.getFullYear().toString()===u}).length;let i=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${te==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${s}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${te==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${te==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${te==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(u=>{const c=l(u);i+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${u}', 'Year ${u}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${te===u?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${u}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${c}</span>
            </a>
        </li>`}),a.innerHTML=i}function Vt(e,t){const a=document.getElementById("gender-filter-options"),s=document.getElementById("gender-filter-button");if(!a||!s)return;const o=t.length,r=i=>t.filter(u=>{const c=me(u.startDate||u.createdAt);return c&&c.getFullYear().toString()===i}).length;let l=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${_e==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${o}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(i=>{const u=r(i);l+=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${i}', 'Year ${i}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${_e===i?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${i}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${u}</span>
            </a>
        </li>
        `}),a.innerHTML=l,s.innerHTML=`${bt} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function Yt(e,t){te=e,ft=t,Ge("user_workforce_filter",e,30),Ge("user_workforce_label",t,30),["lastDaysdropdown"].forEach(s=>{const o=document.getElementById(s);if(o&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown",s);r&&r.hide()}else o&&o.classList.add("hidden")}),We()}function Wt(e,t){_e=e,bt=t,Ge("user_gender_filter",e,30),Ge("user_gender_label",t,30);const a=document.getElementById("gender-filter-dropdown");if(a&&window.FlowbiteInstances){const s=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");s&&s.hide()}else a&&a.classList.add("hidden");We()}function Zt(){const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e),a=t.full_name||t.username||"System User",s=t.email||(t.username?`${t.username}@dole.gov.ph`:"user@dole.gov.ph"),o=t.profile_picture_path,r=a.trim().split(" ").map(l=>l[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(l=>l.textContent=a),document.querySelectorAll(".sidebar-user-email").forEach(l=>l.textContent=s),document.querySelectorAll(".sidebar-user-avatar").forEach(l=>{const i=l.querySelector(".sidebar-avatar-initials"),u=l.querySelector(".sidebar-avatar-img");if(o&&u){const c=be(),g=o.startsWith("http")?o:c+o.replace(/^\//,"");u.src=g,u.classList.remove("hidden"),i&&i.classList.add("hidden")}else i&&(i.textContent=r,i.classList.remove("hidden"),u&&u.classList.add("hidden"))})}catch(t){console.error("Failed to parse user data for sidebar:",t)}}window.updateWorkforceFilter=Yt;window.updateGenderFilter=Wt;document.addEventListener("themeChanged",()=>{setTimeout(()=>We(),50)});window.addEventListener("dataSynced",()=>{console.log("[Charts] Data synced detected, refreshing analytics..."),We(!0)});let Ce=null;function Jt(e,t){const a=document.getElementById(t);if(!a)return;if(Ce&&(Ce.destroy(),Ce=null),e.length===0){const c=Qe(),g={series:[1],chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!1}},labels:["No Data"],colors:[c.grid],plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"24px",fontWeight:900,color:c.muted,formatter:()=>"0"},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:c.muted,formatter:()=>"0"}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ne()?["#1e293b"]:["#ffffff"],width:2},tooltip:{enabled:!1},legend:{show:!1}};Ce=new Ke(a,g),Ce.render();return}const s={ongoing:0,expired:0,absorbed:0,resigned:0,other:0};e.forEach(c=>{const g=(c.remarks||"").toUpperCase();g==="ONGOING"?s.ongoing++:g==="EXPIRED"?s.expired++:g==="ABSORBED"?s.absorbed++:g==="RESIGNED"?s.resigned++:s.other++});const o=[],r=[],l=[];s.ongoing>0&&(o.push(s.ongoing),r.push("Ongoing"),l.push(ge.successGreen)),s.expired>0&&(o.push(s.expired),r.push("Expired"),l.push(ge.philippineRed)),s.absorbed>0&&(o.push(s.absorbed),r.push("Absorbed"),l.push("#059669")),s.resigned>0&&(o.push(s.resigned),r.push("Resigned"),l.push("#b91c1c")),s.other>0&&(o.push(s.other),r.push("Other"),l.push(ge.mutedSlate()));const i=Qe(),u={series:o,chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!0,easing:"easeinout",speed:800,dynamicAnimation:{enabled:!0,speed:350}}},labels:r,colors:l,plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"10px",fontWeight:800,color:i.muted,offsetY:-5},value:{show:!0,fontSize:"24px",fontWeight:900,color:i.text,offsetY:5},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:i.muted}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ne()?["#1e293b"]:["#ffffff"],width:2},tooltip:{theme:ne()?"dark":"light",style:{fontSize:"12px"}},legend:{show:!1}};Ce=new Ke(a,u),Ce.render()}const Xt="modulepreload",Kt=function(e,t){return new URL(e,t).href},it={},ht=function(t,a,s){let o=Promise.resolve();if(a&&a.length>0){let c=function(g){return Promise.all(g.map(b=>Promise.resolve(b).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};const l=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=i?.nonce||i?.getAttribute("nonce");o=c(a.map(g=>{if(g=Kt(g,s),g in it)return;it[g]=!0;const b=g.endsWith(".css"),L=b?'[rel="stylesheet"]':"";if(s)for(let x=l.length-1;x>=0;x--){const S=l[x];if(S.href===g&&(!b||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${L}`))return;const d=document.createElement("link");if(d.rel=b?"stylesheet":Xt,b||(d.as="script"),d.crossOrigin="",d.href=g,u&&d.setAttribute("nonce",u),document.head.appendChild(d),b)return new Promise((x,S)=>{d.addEventListener("load",x),d.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${g}`)))})}))}function r(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return o.then(l=>{for(const i of l||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};let ke=null;if(Re()){const e="https://llnddycvbcetztzwbdpx.supabase.co",t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{ke=kt(e,t),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(a){console.error("[SUPABASE SDK] Failed to initialize client:",a)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");function Qt(e=new Date().getFullYear()){const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=[];for(let s=0;s<12;s++){const o=new Date(e,s+1,0).getDate();a.push(`${t[s]} 1-15, ${e}`),a.push(`${t[s]} 16-${o}, ${e}`)}return a}function er(e,t,a){if(a==="ar")return(e.period||"").toUpperCase().trim()===t.toUpperCase().trim();{const s=t.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!s)return!1;const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(s[1].toUpperCase());if(r===-1)return!1;const l=parseInt(s[4]),i=parseInt(s[2]),u=parseInt(s[3]),c=(e.date||"").substring(0,10),g=new Date(c+"T00:00:00");return isNaN(g)?!1:g.getFullYear()===l&&g.getMonth()===r&&g.getDate()>=i&&g.getDate()<=u}}function tr(e){if(!e)return"-";const t=e.toUpperCase();return t==="VERIFIED"||t==="COMPLETED"?"✓":t==="REJECTED"||t==="DECLINED"?"X":t==="PENDING"?"?":t}function lt(e,t,a,s){const o=e.map(r=>{const l=t[r.id]||[],i=s.map(u=>{const c=l.find(g=>er(g,u,a));return c?tr(c.status):"-"});return{name:r.name||r.id,cells:i}});return{periods:s,rows:o}}function dt(e,t,a){const{periods:s,rows:o}=t,r=s.length+1;let l='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return l+=`<tr><td colspan="${r}" style="background:${a};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,l+=`<tr><th style="background:${a};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,s.forEach(i=>{l+=`<th style="background:${a};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${i}</th>`}),l+="</tr>",o.forEach((i,u)=>{const c=u%2===0?"#ffffff":"#f5f5f5";l+="<tr>",l+=`<td style="background:${c};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${i.name}</td>`,i.cells.forEach(g=>{l+=`<td style="background:${c};padding:5px 8px;text-align:center;font-weight:bold;color:${g==="✓"?"#15803d":g==="X"?"#dc2626":"#9ca3af"};">${g}</td>`}),l+="</tr>"}),l+="</table>",l}async function Ar(e){const t="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",a=e.length,s=await T.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(u=>{u.addEventListener("change",()=>{const c=document.getElementById("custom-count-wrap");c.classList.toggle("hidden",u.value!=="custom"||!u.checked);const g=document.querySelector('input[name="exp-count"]:checked');c.classList.toggle("hidden",g?.value!=="custom")})})},preConfirm:()=>{const u=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",c=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let g=parseInt(c==="custom"?document.getElementById("exp-custom-count")?.value||a:c,10);(isNaN(g)||g<1)&&(g=10),g=Math.min(g,a);const b=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:u,count:g,year:b}}});if(!s.isConfirmed||!s.value)return;const{type:o,count:r,year:l}=s.value,i=e.slice(0,r);await xt(i,o,l)}async function xt(e,t,a){T.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const s=Qt(a),o=be();async function r(S){const $=await(await fetch(`${o}api/logs.php?type=${S}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return $.success?$.logs||[]:[]}let l={},i={};(t==="dtr"||t==="both")&&(await r("dtr")).forEach(y=>{const $=String(y.gip_id||y.beneficiary_id||y.id||"");l[$]||(l[$]=[]),l[$].push(y)}),(t==="ar"||t==="both")&&(await r("ar")).forEach(y=>{const $=String(y.gip_id||y.beneficiary_id||y.id||"");i[$]||(i[$]=[]),i[$].push(y)});const u=e.map(S=>({...S,mapKey:String(S.id||S.gip_id||S.beneficiary_id)}));let c="";const g=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(t==="dtr"||t==="both"){const S=u.map($=>({...$,id:$.mapKey})),y=lt(S,l,"dtr",s);c+="<br>"+dt(`DTR – Daily Time Records (${a})`,y,"#1d4ed8")}if(t==="ar"||t==="both"){const S=u.map($=>({...$,id:$.mapKey})),y=lt(S,i,"ar",s);c+="<br><br>"+dt(`AR – Accomplishment Reports (${a})`,y,"#d97706")}const b=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${g} | DOLE LDNPFO – GIP Monitoring System</p>
                ${c}
            </body>
            </html>
        `,L=new Blob([b],{type:"application/vnd.ms-excel"}),d=URL.createObjectURL(L),x=document.createElement("a");x.href=d,x.download=`GIP_LOGS_${t.toUpperCase()}_${a}.xls`,document.body.appendChild(x),x.click(),URL.revokeObjectURL(d),document.body.removeChild(x),T.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(s){console.error("[LogsExport] Error:",s),T.fire("Error",s.message||"Failed to generate export.","error")}}const Ae="color-theme",rr=3600*24*365;function or(e,t,a){document.cookie=`${e}=${t}; max-age=${a}; path=/; SameSite=Lax`}function vt(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}function yt(){const e=localStorage.getItem(Ae)||vt(Ae);return e==="dark"||e==="light"?e:"light"}function Ue(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem(Ae,e),or(Ae,e,rr),ar(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function et(){const e=yt();Ue(e==="dark"?"light":"dark")}function ar(e){const t=e==="dark",a=document.getElementById("pref-dark-mode");a&&(a.checked=t);const s=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");s&&o&&(s.classList.toggle("hidden",t),o.classList.toggle("hidden",!t));const r=document.getElementById("sidebar-theme-label");r&&(r.textContent=t?"LIGHT MODE":"DARK MODE")}function Ir(){const e=yt();Ue(e);const t=document.getElementById("pref-dark-mode");t&&t.addEventListener("change",()=>{Ue(t.checked?"dark":"light")});const a=document.getElementById("theme-toggle-btn");a&&a.addEventListener("click",et),document.querySelectorAll("[data-theme-toggle]").forEach(s=>{s.addEventListener("click",et)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s=>{localStorage.getItem(Ae)||vt(Ae)||Ue(s.matches?"dark":"light")})}function ye(){return document.documentElement.classList.contains("dark")}window.toggleTheme=et;window.isDarkMode=ye;const ze={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=ye(),t={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},a=`
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
        `;T.fire({html:a,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:s=>{const o=s.querySelector("#csv-upload"),r=s.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(i=>{r.addEventListener(i,l,!1)});function l(i){i.preventDefault(),i.stopPropagation()}["dragenter","dragover"].forEach(i=>{r.addEventListener(i,()=>{r.classList.add("border-blue-500","bg-blue-50/50"),e&&r.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(i=>{r.addEventListener(i,()=>{r.classList.remove("border-blue-500","bg-blue-50/50"),e&&r.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",i=>{const u=i.target.files[0];if(u){const c=s.querySelector("#auto-save-toggle");this.isAutoSave=c?c.checked:!1,this.handleFile(u)}}),r.addEventListener("drop",i=>{const c=i.dataTransfer.files[0];if(c){const g=s.querySelector("#auto-save-toggle");this.isAutoSave=g?g.checked:!1,this.handleFile(c)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){T.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const t=new FileReader;t.onload=a=>{const s=a.target.result;this.parseCSV(s)},t.readAsText(e)},async parseCSV(e){let t=[],a="",s=!1;for(let o=0;o<e.length;o++){let r=e[o];r==='"'&&(s=!s),!s&&(r===`
`||r==="\r")?(r==="\r"&&e[o+1]===`
`&&o++,a.trim()!==""&&t.push(a),a=""):a+=r}a.trim()!==""&&t.push(a),this.queue=[];for(let o=0;o<t.length;o++){let r=t[o].trim();if(!r)continue;let l=[],i="",u=!1;for(let c=0;c<r.length;c++){let g=r[c];g==='"'?u=!u:g===","&&!u?(l.push(i.replace(/(^"|"$)/g,"").trim()),i=""):i+=g}if(l.push(i.replace(/(^"|"$)/g,"").trim()),l.length>=2){const c=l[3];if(!c||isNaN(parseInt(c)))continue;const g=l[1];if(!g||g.toLowerCase()==="name"||g.toLowerCase()==="full name")continue;const b=l[2];let L=l[4]?l[4].toUpperCase().trim():"",d="";(L==="F"||L.includes("FEMALE"))&&(d="Female"),(L==="M"||L.includes("MALE"))&&(d="Male");const x=l[5],S=l[6],y=l[7],$=this.formatDate(l[8]),O=this.formatDate(l[9]);this.queue.push({name:g,address:b,age:c,gender:d,education:x,startDate:$,endDate:O,office:S,designation:y})}}if(this.queue.length>0){try{T.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{T.showLoading()}});const o=this.queue.map(u=>u.name);let r=null;try{r=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{r=null}const i=await(await fetch(`${be()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...r?{"X-User-Id":String(r)}:{}},body:JSON.stringify({names:o,user_id:r})})).json();if(i.success&&i.duplicates&&i.duplicates.length>0){const u=new Set(i.duplicates.map(g=>g.toLowerCase().trim())),c=this.queue.length;this.queue=this.queue.filter(g=>{const b=u.has(g.name.toLowerCase().trim());return b&&console.warn(`%c[Bulk Add] SKIPPED: ${g.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!b}),console.log(`[Bulk Add] Removed ${c-this.queue.length} duplicates ahead of time.`)}}catch(o){console.error("Bulk duplicate check failed:",o)}if(this.queue.length===0){T.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,T.close(),this.processNext()}else T.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){ye();const e=Math.round(this.currentIndex/this.queue.length*100),t=`
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
        `;if(T.isVisible()&&T.getPopup().querySelector("#bulk-progress-bar")){const a=document.getElementById("bulk-progress-bar"),s=T.getPopup().querySelector("span.text-\\[10px\\]"),o=document.getElementById("bulk-current-name");a&&(a.style.width=`${e}%`),s&&(s.textContent=`${this.currentIndex} / ${this.queue.length}`),o&&(o.textContent=this.queue[this.currentIndex]?.name||"...")}else T.fire({html:t,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:a=>{a.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const t=new Date(e);if(isNaN(t.getTime())){const r=e.split("/");return r.length===3?`${r[2]}-${r[1].padStart(2,"0")}-${r[0].padStart(2,"0")}`:""}const a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${a}-${s}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const a=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[s,o]=await Promise.all([ce(`api/beneficiaries.php?next_id&year=${a}`),ce(`api/beneficiaries.php?next_series_no&year=${a}`)]);s.success&&s.data?.success&&s.data?.nextId&&(e.gip_id=s.data.nextId,e.id=null),o.success&&o.data?.success&&o.data?.nextSeries&&(e.seriesNo=o.data.nextSeries)}catch(a){console.warn("[Bulk Add] Identifier fetch failed, continuing:",a?.message||a)}const t=await window.addBeneficiaryData(e);this.isActive&&(t?this.onSaveSuccess():Te(e))})():Te(e)):Te(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),T.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,T.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=ze;function ct(e){if(!e)return"";const t=new Date(e),a=new Date;let s=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||o===0&&a.getDate()<t.getDate())&&s--,s>=0?s:0}function sr(e){if(!e)return"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800";const t=e.toUpperCase();return t==="ONGOING"||t==="ABSORBED"?"bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-700 dark:border-emerald-800":"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800"}const ut="gip-drawer-employment-details-expanded";class nr{constructor(t,a,s){this.root=t,this.maxPage=s,this.currentPage=Math.min(Math.max(Number(a)||0,0),s),this.prevButton=t.querySelector("#drawer-prev-btn"),this.nextButton=t.querySelector("#drawer-next-btn"),this.detailsButton=t.querySelector("#drawer-employment-details-toggle"),this.detailsPanel=t.querySelector("#drawer-employment-details-panel"),this.detailsIcon=t.querySelector("#drawer-employment-details-icon"),this.pageTitles=["Personal Profile","Submission Logs","Required Documents"]}getSavedDetailsState(){try{return localStorage.getItem(ut)==="true"}catch{return!1}}saveDetailsState(t){try{localStorage.setItem(ut,String(t))}catch{}}setDetailsExpanded(t,a=!1){!this.detailsButton||!this.detailsPanel||(this.detailsButton.setAttribute("aria-expanded",String(t)),this.detailsPanel.classList.toggle("hidden",!t),this.detailsIcon?.classList.toggle("rotate-180",t),a&&this.saveDetailsState(t))}renderNavigation(){this.root.querySelectorAll("[id^=drawer-page-]").forEach((s,o)=>{s.classList.toggle("hidden",o!==this.currentPage)});const t=this.root.querySelector("#drawer-section-title");t&&(t.textContent=this.pageTitles[this.currentPage]),this.root.querySelector("#personal-profile-section")?.classList.toggle("hidden",this.currentPage!==0),this.prevButton?.classList.toggle("hidden",this.currentPage===0),this.nextButton?.classList.toggle("hidden",this.currentPage===this.maxPage)}goToPage(t){this.currentPage=Math.min(Math.max(t,0),this.maxPage),this.renderNavigation()}bind(){this.prevButton?.addEventListener("click",()=>this.goToPage(this.currentPage-1)),this.nextButton?.addEventListener("click",()=>this.goToPage(this.currentPage+1)),this.detailsButton?.addEventListener("click",()=>{const t=this.detailsButton.getAttribute("aria-expanded")==="true";this.setDetailsExpanded(!t,!0)}),this.setDetailsExpanded(this.getSavedDetailsState()),this.renderNavigation()}}function Xe(e=3){return Array.from({length:e},(t,a)=>`
        <div class="animate-pulse border border-gray-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800" aria-hidden="true">
            <div class="h-2.5 ${a%2===0?"w-2/5":"w-1/3"} rounded-full bg-gray-200 dark:bg-slate-700"></div>
            <div class="mt-3 h-3.5 ${a%2===0?"w-4/5":"w-3/5"} rounded-full bg-gray-300 dark:bg-slate-600"></div>
        </div>
    `).join("")}function He(e,t=0){const a=!!e?._isLoadingProfile,s=!!e?._isLoadingLogs;e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const o=e.arLogs||[],r=e.dtrLogs||[],l=e.docs||[],i=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],u=i.map(d=>{const x=l.find(S=>S.name.toUpperCase()===d.toUpperCase());return x||{name:d,status:"PENDING",id:null}});l.forEach(d=>{i.some(S=>S.toUpperCase()===d.name.toUpperCase())||u.push(d)});const c=`
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
            <div class="animate-pulse" aria-label="Loading beneficiary profile" role="status">
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
            ${a?'<span class="block h-8 w-full animate-pulse border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${sr(e.remarks)} block min-h-8 w-full truncate border border-l-4 ${e.remarks==="ONGOING"||e.remarks==="ABSORBED"?"border-l-emerald-600 dark:border-l-emerald-500":"border-l-red-600 dark:border-l-red-500"} px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.remarks}">${e.remarks}</span>`}
        </div>
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Office</span>
            ${a?'<span class="block h-8 w-full animate-pulse border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="block min-h-8 w-full truncate border border-red-700 border-l-4 bg-red-600 px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider text-white shadow-sm dark:border-red-800 dark:bg-red-700" title="${e.office}">${e.office}</span>`}
        </div>
    </div>
</div>

<!-- Persistent Section Header with Responsive Nav Buttons -->
<div class="flex justify-between items-end gap-3 mb-4 border-y border-default pt-2">
    <h4 id="drawer-section-title" class="mb-px border-b-2 border-brand pb-1.5 text-sm font-bold text-heading uppercase tracking-widest">Personal Profile</h4>
    <div class="flex shrink-0 gap-2 pb-3">
        <button type="button" id="drawer-prev-btn" class="hidden flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-default-medium bg-neutral-secondary-medium px-3 py-2 text-[0.5625rem] font-black uppercase tracking-widest text-heading shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 active:bg-red-100 dark:hover:border-red-800 dark:hover:bg-red-950/60 dark:hover:text-red-300 cursor-pointer">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREV
        </button>
        <button type="button" id="drawer-next-btn" class="flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-brand px-3 py-2 text-center text-[0.5625rem] font-black uppercase tracking-widest text-white shadow-sm shadow-brand-medium/50 transition-all hover:bg-brand-strong active:scale-95 cursor-pointer">
            NEXT
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
        </button>
    </div>
</div>

<div id="personal-profile-section" class="transition-all duration-300">
    <div class="flex flex-col gap-4 sm:gap-y-4.5 text-sm mt-3 px-1 mb-8">
        ${a?Xe(7):`
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
            <span class="${e.age||ct(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right sm:text-left">${e.age||ct(e.birthday)||"N/A"}</span>
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
            ${s?Xe(4):`
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${r.length?r.map(d=>{const x=d.status||"PENDING";let S=x==="VERIFIED"||x==="COMPLETED"?"text-green-500":x==="REJECTED"||x==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",y=d.date||d.createdAt,$=y;if(y){const O=/^\d{4}-\d{2}-\d{2}$/.test(y)?new Date(y+"T00:00:00Z"):new Date(y);isNaN(O)||($=O.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-blue-200 bg-blue-100 p-4 shadow-sm transition-colors hover:bg-blue-200 dark:border-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800" data-type="dtr" data-id="${d.id}" data-val="${d.day||y}" data-status="${x}">
                            <span class="text-sm font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${d.day||$}</span>
                            <span class="log-status-label text-xs font-bold ${S} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${x}</span>
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
                    ${o.length?o.map(d=>{const x=d.status||"PENDING";let S=x==="VERIFIED"||x==="COMPLETED"?"text-green-500":x==="REJECTED"||x==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",y=d.period||d.createdAt,$=y;if(y){const O=/^\d{4}-\d{2}-\d{2}$/.test(y)?new Date(y+"T00:00:00Z"):new Date(y);isNaN(O)||($=O.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-orange-200 bg-orange-100 p-4 shadow-sm transition-colors hover:bg-orange-200 dark:border-orange-800 dark:bg-orange-900 dark:hover:bg-orange-800" data-type="ar" data-id="${d.id}" data-val="${y}" data-status="${x}">
                            <span class="text-sm font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${y||$}</span>
                            <span class="log-status-label text-xs font-bold ${S} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${x}</span>
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
            ${s?Xe(5):u.map(d=>{const x=d.status.toUpperCase(),y={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[x]||x,$=y==="COMPLETED",O=y==="REJECTED",q=y==="PENDING",X=$?"text-emerald-600":O?"text-red-600":"text-orange-600",z=$?"border-emerald-400 bg-emerald-100 dark:border-emerald-700 dark:bg-emerald-900":O?"border-red-400 bg-red-100 dark:border-red-700 dark:bg-red-900":"border-orange-400 bg-orange-100 dark:border-orange-700 dark:bg-orange-900",re=$?"text-emerald-700 dark:text-emerald-300":O?"text-red-600 dark:text-red-300":"text-orange-700 dark:text-orange-300",ae=$?"border-white bg-emerald-800 text-white ring-2 ring-white":"border-emerald-700 bg-white text-emerald-700 hover:bg-emerald-100",ee=q?"border-white bg-orange-700 text-white ring-2 ring-white":"border-orange-700 bg-white text-orange-700 hover:bg-orange-100",se=O?"border-white bg-red-800 text-white ring-2 ring-white":"border-red-700 bg-white text-red-700 hover:bg-red-100";let ie='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return $?ie='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':O&&(ie='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="drawer-doc-card group/card relative flex cursor-pointer items-center justify-between rounded-xl border p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-95 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand/30 ${z}" role="button" tabindex="0" data-id="${d.id}" data-name="${d.name}" data-status="${y}" aria-label="Change status for ${d.name}" aria-expanded="false">
                    <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white shadow-sm ${X}">
                            ${ie}
                        </div>
                        <span class="flex-1 text-xs font-black uppercase tracking-tight sm:text-sm ${re}">${d.name}</span>
                    </div>
                    <svg class="drawer-doc-cue ml-3 size-5 shrink-0 transition-transform group-hover/card:scale-110 ${re}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 12h.01M12 12h.01M18 12h.01"/></svg>
                    <div class="drawer-doc-actions ml-3 hidden shrink-0 items-center gap-1.5" aria-hidden="true">
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ae}" data-status="COMPLETED" aria-label="Verify document" aria-pressed="${$}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 13 4 4L19 7"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Verify</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ee}" data-status="PENDING" aria-label="Set pending" aria-pressed="${q}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            <span class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Pending</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${se}" data-status="REJECTED" aria-label="Reject document" aria-pressed="${O}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.75" d="M6 18 18 6M6 6l12 12"/></svg>
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
        background: rgba(0, 0, 0, 0.05);
        border-radius: 20px;
    }
    .dark #beneficiary-drawer-container::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.05);
    }
    #beneficiary-drawer-container::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    .dark #beneficiary-drawer-container::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.1);
    }
</style>
    `,g=!!e._noAnimation;let b=document.getElementById("beneficiary-drawer-container");const L=g&&!!b&&b.dataset.beneficiaryId===String(e.id||"");if(L){const d=b.scrollTop;b.innerHTML=c,b.scrollTop=d}else b&&(b.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),b=document.createElement("div"),b.id="beneficiary-drawer-container",b.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[500px] lg:w-[560px] shadow-2xl",b.setAttribute("tabindex","-1"),b.setAttribute("data-drawer-backdrop","true"),b.innerHTML=c,document.body.appendChild(b),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");b.dataset.beneficiaryId=String(e.id||""),ht(async()=>{const{Drawer:d}=await import("./vendor-flowbite-B7rSfpuT.js").then(x=>x.b);return{Drawer:d}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:d})=>{let x=L?b.__drawerInstance:null;if(!x){const w={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{b.__inlineActionAbort?.abort(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{b&&b.parentNode&&b.remove()},300)}};x=new d(b,w),b.__drawerInstance=x,x.show()}b.querySelector("#close-drawer-btn").addEventListener("click",()=>x.hide());const y=new nr(b,t,2);y.bind(),b.__inlineActionAbort?.abort();const $=new AbortController;b.__inlineActionAbort=$;const O=()=>{const w=b.getBoundingClientRect(),M=Math.max(0,w.left);return{canDockBesideDrawer:window.innerWidth>=640&&M>=280,drawerOffset:Math.max(0,window.innerWidth-w.left),availableLeftSpace:M}},q=(w,M,I=1800)=>{const _=O();return T.fire({toast:!0,position:_.canDockBesideDrawer?"bottom-end":"bottom",icon:w,title:M,showConfirmButton:!1,timer:I,didOpen:V=>{if(!_.canDockBesideDrawer)return;const G=V.closest(".swal2-container");G&&(G.style.right=`${_.drawerOffset+12}px`,G.style.left="0",G.style.width="auto",V.style.maxWidth=`${Math.min(352,_.availableLeftSpace-24)}px`)}})},X=w=>{!w||w.dataset.loading==="true"||(w.dataset.confirming="false",w.classList.remove("w-22","opacity-100","pointer-events-auto"),w.classList.add("w-11","opacity-0","pointer-events-none"),w.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.remove("!pr-24"),w.querySelector(".delete-log-trigger")?.classList.replace("hidden","flex"),w.querySelector(".delete-confirm-actions")?.classList.replace("flex","hidden"))},z=(w=null)=>{b.querySelectorAll(".drawer-doc-card").forEach(M=>{M===w||M.dataset.loading==="true"||(M.setAttribute("aria-expanded","false"),M.querySelector(".drawer-doc-actions")?.classList.replace("flex","hidden"),M.querySelector(".drawer-doc-cue")?.classList.remove("hidden"))}),b.querySelectorAll(".delete-log-control").forEach(M=>{M!==w&&X(M)})},re=async(w,M)=>{const I=w.dataset.status;if(M===I){z();return}const _=w.querySelector(".drawer-doc-actions"),V=w.querySelector(".drawer-doc-loading");w.dataset.loading="true",w.setAttribute("aria-busy","true"),_?.classList.replace("flex","hidden"),V?.classList.replace("hidden","block");try{const G={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"},K=await Ze("api/logs.php?type=docs",{gip_id:e.id,doc_name:w.dataset.name,status:G[M]||M}),Z=K.success?K.data:{success:!1,error:K.error};if(!Z.success)throw new Error(Z.error||"Failed to update document status.");q("success","Status updated!"),window.viewBeneficiary&&window.viewBeneficiary(e,y.currentPage)}catch(G){w.dataset.loading="false",w.removeAttribute("aria-busy"),V?.classList.replace("block","hidden"),_?.classList.replace("hidden","flex"),q("error",G.message)}};b.querySelectorAll(".drawer-doc-card").forEach(w=>{const M=()=>{const I=w.getAttribute("aria-expanded")!=="true";z(I?w:null),w.setAttribute("aria-expanded",String(I)),w.querySelector(".drawer-doc-actions")?.classList.toggle("hidden",!I),w.querySelector(".drawer-doc-actions")?.classList.toggle("flex",I),w.querySelector(".drawer-doc-cue")?.classList.toggle("hidden",I)};w.addEventListener("click",I=>{I.target.closest(".doc-status-action")||M()}),w.addEventListener("keydown",I=>{I.target.closest(".doc-status-action")||(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),M())}),w.querySelectorAll(".doc-status-action").forEach(I=>{I.addEventListener("click",_=>{_.stopPropagation(),re(w,I.dataset.status)})})}),document.addEventListener("click",w=>{w.target.closest(".drawer-doc-card, .delete-log-control")||z()},{signal:$.signal});const ae=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),ee=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function se(w){const I=new Date(w+"T00:00:00").getDay();return I!==0&&I!==6&&!ae.has(w)}function ie(w){const M=w.getDate(),I=ee[w.getMonth()],_=w.getFullYear(),V=new Date(_,w.getMonth()+1,0).getDate();return M<=15?`${I} 1-15, ${_}`:`${I} 16-${V}, ${_}`}const Q=()=>{const w=new Date;if(!r.length)return ie(w);let M=-1,I="";const _=f=>{const h=(f||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!h)return-1;const v=ee.indexOf(h[1]),D=parseInt(h[2])===1?0:1;return parseInt(h[4])*100+v*2+D};if(r.forEach(f=>{const h=f.day||f.date||"",v=_(h);v>M&&(M=v,I=h)}),M===-1)return ie(w);const V=I.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),G=ee.indexOf(V[1]),K=parseInt(V[2]),Z=parseInt(V[4]);if(K===1){const f=new Date(Z,G+1,0).getDate();return`${ee[G]} 16-${f}, ${Z}`}else{const f=(G+1)%12,h=G===11?Z+1:Z;return`${ee[f]} 1-15, ${h}`}},ue=()=>{const w=new Date;if(!o.length)return ie(w);let M=-1,I="";const _=f=>{const h=(f||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!h)return-1;const v=ee.indexOf(h[1]),D=parseInt(h[2])===1?0:1;return parseInt(h[4])*100+v*2+D};if(o.forEach(f=>{const h=_(f.period);h>M&&(M=h,I=f.period)}),M===-1)return ie(w);const V=I.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),G=ee.indexOf(V[1]),K=parseInt(V[2]),Z=parseInt(V[4]);if(K===1){const f=new Date(Z,G+1,0).getDate();return`${ee[G]} 16-${f}, ${Z}`}else{const f=(G+1)%12,h=G===11?Z+1:Z;return`${ee[f]} 1-15, ${h}`}},xe=async(w,M)=>{T.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),T.showLoading();try{const I={gip_id:e.id};if(w==="dtr"){const G=M.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(G){const K=ee.indexOf(G[1]),Z=parseInt(G[2]),f=parseInt(G[3]);let h=new Date(f,K,Z);for(;!se(h.toISOString().split("T")[0]);)h.setDate(h.getDate()+1);I.record_date=h.toISOString().split("T")[0]}else I.record_date=new Date().toISOString().split("T")[0];I.weekday=M}w==="ar"&&(I.period=M);const _=await Ze(`api/logs.php?type=${w}`,I);(_.success?_.data:{success:!1,error:_.error}).success?(q("success","Auto-Added!",1500),window.viewBeneficiary&&window.viewBeneficiary(e,y.currentPage)):T.fire("Error","Failed to add log.","error")}catch(I){T.fire("Error",I.message,"error")}},Se=async(w,M,I,_,V)=>{const G=M==="dtr"?"Record Date":"Period";ye();const K="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] sm:text-xs gap-2 ",Z='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',f='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:h}=await T.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${w} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-1">${G}</label>
                            <input id="swal-log-val" value="${_}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${V==="VERIFIED"?"checked":""}>
                                    <div class="${K} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${Z}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${V==="REJECTED"||V==="DECLINED"?"checked":""}>
                                    <div class="${K} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${f}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const v=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:v?v.value:"PENDING"}}});if(h&&(h.val!==_||h.status!==V))try{const v={type:M,id:I,status:h.status};if(M==="dtr"){const m=h.val.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(m){const n=ee.indexOf(m[1]),p=parseInt(m[2]),k=parseInt(m[3]);let E=new Date(k,n,p);for(;!se(E.toISOString().split("T")[0]);)E.setDate(E.getDate()+1);v.record_date=E.toISOString().split("T")[0]}else v.record_date=new Date().toISOString().split("T")[0];v.weekday=h.val}M==="ar"&&(v.period=h.val);const D=await Ct("api/logs.php",v),A=D.success?D.data:{success:!1,error:D.error};A.success?(q("success","Log Updated!",1500),window.viewBeneficiary&&window.viewBeneficiary(e,y.currentPage)):T.fire("Error",A.error||"Failed to update log.","error")}catch(v){T.fire("Error",v.message,"error")}},fe=b.querySelector("#add-dtr-log-btn");fe&&fe.addEventListener("click",()=>xe("dtr",Q()));const pe=b.querySelector("#add-ar-log-btn");pe&&pe.addEventListener("click",()=>xe("ar",ue()));const ve=b.querySelector("#export-log-btn");ve&&ve.addEventListener("click",async()=>{const w="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",M=await T.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${w} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${w} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${w} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const I=document.querySelector('input[name="swal-export-type"]:checked');return I?I.value:null}});if(M.isConfirmed&&M.value){const I=M.value,_=new Date().getFullYear();await xt([e],I,_)}}),b.querySelectorAll(".edit-log-btn").forEach(w=>{w.addEventListener("click",M=>{if(M.target.closest(".delete-log-control"))return;const I=w.dataset.type,_=w.dataset.id,V=w.dataset.val,G=w.dataset.status;Se(I.toUpperCase(),I,_,V,G)})}),b.querySelectorAll(".delete-log-control").forEach(w=>{const M=w.querySelector(".delete-log-trigger"),I=w.querySelector(".delete-log-confirm"),_=w.querySelector(".delete-log-cancel");M?.addEventListener("click",V=>{V.stopPropagation(),z(w),w.dataset.confirming="true",w.classList.remove("w-11","opacity-0","pointer-events-none"),w.classList.add("w-22","opacity-100","pointer-events-auto"),w.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.add("!pr-24"),M.classList.replace("flex","hidden"),w.querySelector(".delete-confirm-actions")?.classList.replace("hidden","flex")}),_?.addEventListener("click",V=>{V.stopPropagation(),X(w)}),I?.addEventListener("click",async V=>{if(V.stopPropagation(),w.dataset.loading==="true")return;const G=w.dataset.id,K=w.dataset.type;w.dataset.loading="true",I.disabled=!0,_.disabled=!0,I.querySelector(".delete-confirm-icon")?.classList.add("hidden"),I.querySelector(".delete-loading-icon")?.classList.replace("hidden","block");try{const Z=await Ze(`api/logs.php?type=${K}`,{log_id:G,action:"delete"}),f=Z.success?Z.data:{success:!1,error:Z.error};if(!f.success)throw new Error(f.error||"Failed to delete data.");q("success","Deleted"),window.viewBeneficiary&&window.viewBeneficiary(e,y.currentPage)}catch(Z){w.dataset.loading="false",I.disabled=!1,_.disabled=!1,I.querySelector(".delete-loading-icon")?.classList.replace("block","hidden"),I.querySelector(".delete-confirm-icon")?.classList.remove("hidden"),X(w),q("error",Z.message)}})})}).catch(console.error)}function ir(e){const t=ye(),a="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600",s="w-full resize-none overflow-hidden rounded-none border-0 border-b-2 border-blue-200 bg-transparent px-0 py-2 text-xl font-black leading-tight tracking-tight text-royal-blue placeholder-gray-300 outline-none focus:border-brand focus:ring-0 sm:text-2xl dark:border-slate-700 dark:text-white",o="mb-1.5 block text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";function r(y){const $=String(y||"").trim();if(!$)return{month:"",day:"",year:"",iso:""};let O=$.match(/^(\d{4})-(\d{2})-(\d{2})/);if(O)return{year:O[1],month:O[2],day:O[3],iso:`${O[1]}-${O[2]}-${O[3]}`};if(O=$.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/),O){const q=O[1].padStart(2,"0"),X=O[2].padStart(2,"0");return{year:O[3],month:q,day:X,iso:`${O[3]}-${q}-${X}`}}return{month:"",day:"",year:"",iso:""}}function l(y,$,O){const q=Number.parseInt(y,10),X=Number.parseInt($,10),z=Number.parseInt(O,10);if(!Number.isInteger(q)||!Number.isInteger(X)||!Number.isInteger(z)||z<1900||z>new Date().getFullYear())return"";const re=new Date(z,q,0).getDate();return q<1||q>12||X<1||X>re?"":`${String(z).padStart(4,"0")}-${String(q).padStart(2,"0")}-${String(X).padStart(2,"0")}`}function i(y){const $=r(y);if(!$.iso)return"";const O=Number.parseInt($.year,10),q=Number.parseInt($.month,10),X=Number.parseInt($.day,10),z=new Date;let re=z.getFullYear()-O;return(z.getMonth()+1<q||z.getMonth()+1===q&&z.getDate()<X)&&re--,re>=0?re:""}const u=r(e.birthday),c=Array.from({length:12},(y,$)=>{const O=String($+1).padStart(2,"0");return`<option value="${O}" ${u.month===O?"selected":""}>${O}</option>`}).join(""),g=Array.from({length:31},(y,$)=>{const O=String($+1).padStart(2,"0");return`<option value="${O}" ${u.day===O?"selected":""}>${O}</option>`}).join("");function b(y){if(!y)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const $=String(y).toUpperCase();return $==="ONGOING"?"bg-green-100 text-green-700 border-green-200":$==="EXPIRED"?"bg-red-400 text-white border-red-400":$==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":$==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const L=`
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
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${b(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
                 <option value="ONGOING" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="ONGOING"?"selected":""}>ONGOING</option>
                 <option value="EXPIRED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="EXPIRED"?"selected":""}>EXPIRED</option>
                 <option value="RESIGNED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="RESIGNED"?"selected":""}>RESIGNED</option>
                 <option value="ABSORBED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="ABSORBED"?"selected":""}>ABSORBED</option>
             </select>
             <div class="pointer-events-none absolute right-3 top-[28px] text-inherit">
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
                <input type="hidden" name="birthday" id="edit-bday-input" value="${u.iso}">
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-[0.8fr_0.8fr_1.2fr_1.4fr]">
                    <label class="block">
                        <span class="${o}">Month (MM)</span>
                        <select id="edit-birth-month" class="${a} cursor-pointer appearance-none font-mono" aria-label="Birth month">
                            <option value="">MM</option>
                            ${c}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${o}">Day (DD)</span>
                        <select id="edit-birth-day" class="${a} cursor-pointer appearance-none font-mono" aria-label="Birth day">
                            <option value="">DD</option>
                            ${g}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${o}">Year (YYYY)</span>
                        <input type="text" id="edit-birth-year" value="${u.year}" class="${a} font-mono" placeholder="YYYY" inputmode="numeric" maxlength="4" aria-label="Birth year">
                    </label>
                    <label class="block">
                        <span class="${o}">Calendar</span>
                        <input type="date" id="edit-birthday-calendar" value="${u.iso}" class="${a} cursor-pointer font-mono" aria-label="Birthday calendar">
                    </label>
                </div>
                <p id="edit-birthday-error" class="mt-2 hidden border-l-4 border-red-500 bg-red-50 px-2 py-1.5 text-[0.625rem] font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300" role="alert">Enter a valid birthday using MM, DD, and YYYY.</p>
            </div>

            <label class="block">
                <span class="${o}">Age</span>
                <input type="text" name="age" id="edit-age-display" value="${i(u.iso)}" class="${a} cursor-not-allowed bg-slate-100 font-mono text-slate-500 dark:bg-slate-800" placeholder="Auto-calculated" readonly aria-readonly="true">
            </label>

            <div class="relative">
                <label for="edit-education-input" class="${o}">Educational Level / Course</label>
                <input type="text" name="education" id="edit-education-input" value="${e.education||""}" class="${a}" placeholder="Select or enter education">
                <div id="edit-education-suggestions-box" class="absolute left-0 right-0 z-[70] mt-1 hidden max-h-48 overflow-y-auto border border-slate-300 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                    ${tt.map(y=>`<button type="button" class="edit-education-option w-full border-b border-slate-100 px-3 py-2 text-left text-[0.6875rem] font-bold text-slate-700 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"><span class="option-text">${y.name}</span></button>`).join("")}
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
                    ${wt.map(y=>`<option value="${y}" ${String(e.relationshipToAssured||"").toUpperCase()===y.toUpperCase()?"selected":""}>${y}</option>`).join("")}
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

<div class="absolute bottom-0 left-0 right-0 w-full p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-100 dark:border-slate-800 flex justify-end gap-3 z-[60] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
    <button type="button" id="edit-drawer-cancel-btn" class="px-6 py-3 rounded-none bg-gray-100 text-gray-600 font-black text-[0.625rem] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-gray-200 transition-all border border-transparent hover:border-gray-300">Cancel</button>
    <button type="submit" form="edit-beneficiary-drawer-form" class="px-6 py-3 rounded-none bg-brand text-white font-black text-[0.625rem] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-brand-strong transition-all shadow-lg hover:shadow-brand/40 flex items-center justify-center gap-2">
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
    `;let d=document.getElementById("edit-drawer-container");d&&(d.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),d=document.createElement("div"),d.id="edit-drawer-container",d.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full border-l border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",d.setAttribute("tabindex","-1"),d.innerHTML=L,document.body.appendChild(d),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const y=d.querySelector('textarea[name="name"]');y&&(y.style.height="auto",y.style.height=y.scrollHeight+"px")},10);const x=d.querySelector("#edit-education-suggestions-box");x&&(x.innerHTML=tt.map(y=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${y.name}</span>
            </button>
        `).join(""));const S=d.querySelector("#edit-designation-suggestions-box");S&&(S.innerHTML=De.map(y=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${y}</span>
            </button>
        `).join("")),ht(async()=>{const{Drawer:y}=await import("./vendor-flowbite-B7rSfpuT.js").then($=>$.b);return{Drawer:y}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:y})=>{const $=new y(d,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{d&&d.parentNode&&d.remove()},400)}});$.show(),window.initFlowbite&&window.initFlowbite();const O=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),$.hide()};d.querySelector("#close-edit-drawer-btn").addEventListener("click",O),d.querySelector("#edit-drawer-cancel-btn").addEventListener("click",O);const q=d.querySelector("#edit-beneficiary-drawer-form"),X=d.querySelector("#edit-bday-input"),z=d.querySelector("#edit-birth-month"),re=d.querySelector("#edit-birth-day"),ae=d.querySelector("#edit-birth-year"),ee=d.querySelector("#edit-birthday-calendar"),se=d.querySelector("#edit-birthday-error"),ie=d.querySelector("#edit-age-display"),Q=d.querySelector("#edit-startDate-input"),ue=d.querySelector("#edit-endDate-input"),xe=d.querySelector('input[name="seriesNo"]'),Se=d.querySelector('input[name="gip_id"]'),fe=(m=re?.value||"")=>{if(!re)return;const n=Number.parseInt(z?.value||"",10),p=Number.parseInt(ae?.value||"",10),k=Number.isInteger(n)&&n>=1&&n<=12?new Date(Number.isInteger(p)&&p>=1900?p:2e3,n,0).getDate():31,E=document.createDocumentFragment(),C=document.createElement("option");C.value="",C.textContent="DD",E.append(C);for(let N=1;N<=k;N++){const B=document.createElement("option");B.value=String(N).padStart(2,"0"),B.textContent=B.value,B.selected=B.value===String(m).padStart(2,"0"),E.append(B)}re.replaceChildren(E)},pe=(m=!1)=>{const n=!!(z?.value||re?.value||ae?.value),p=n?l(z?.value,re?.value,ae?.value):"";return X&&(X.value=p),ee&&ee.value!==p&&(ee.value=p),ie&&(ie.value=p?i(p):""),se&&se.classList.toggle("hidden",!!p||!n||!m),{isoBirthday:p,hasBirthdayInput:n}},ve=m=>{const n=r(m);return n.iso?(z&&(z.value=n.month),ae&&(ae.value=n.year),fe(n.day),re&&(re.value=n.day),pe(!1),!0):!1};z&&z.addEventListener("change",()=>{fe(),pe(!1)}),re&&re.addEventListener("change",()=>pe(!1)),ae&&ae.addEventListener("input",()=>{ae.value=ae.value.replace(/\D/g,"").slice(0,4),fe(),pe(!1)}),ee&&ee.addEventListener("change",()=>{ee.value&&ve(ee.value)}),fe(u.day),pe(!1);const w=d.querySelector("#edit-drawer-remarks"),M=d.querySelector("#edit-extension-log-container"),I=()=>{if(!M)return;const m=w.value,n=ye();if(m==="ABSORBED"){const p=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,k=p.getTimezoneOffset()*6e4,E=new Date(p.getTime()-k).toISOString().slice(0,16);M.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${n?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${n?"text-green-500":"text-[#2e7d32]"} border-b ${n?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${E}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                `}else if(m==="RESIGNED"){const p=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,k=p.getTimezoneOffset()*6e4,E=new Date(p.getTime()-k).toISOString().slice(0,16);M.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${n?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${n?"text-red-500":"text-[#ce1126]"} border-b ${n?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${E}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${n?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${n?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};w&&w.addEventListener("change",m=>{const n="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";w.className=`${b(m.target.value)} ${n} editable-indicator`,I(),(w.value==="ABSORBED"||w.value==="RESIGNED")&&setTimeout(()=>{M.scrollIntoView({behavior:"smooth",block:"center"}),M.classList.add("pulse-highlight"),setTimeout(()=>M.classList.remove("pulse-highlight"),1500)},50)}),I();let _=!1;const V=(m,n)=>{m.addEventListener("paste",p=>{p.preventDefault();let k=(p.clipboardData||window.clipboardData).getData("text");if(k){k=k.replace(/[-.\s]/g,"/");const E=k.split("/");if(E.length===3){const C=E[0].padStart(2,"0"),N=E[1].padStart(2,"0");let B=E[2];if(B.length===2){const F=new Date().getFullYear(),R=Math.floor(F/100)*100;B=String(R+parseInt(B))}else B=B.padStart(4,"0");const j=`${C}/${N}/${B}`;m.value=j;const H=new Event("input",{bubbles:!0});m.dispatchEvent(H);const U=window.__parseFormattedDate(j);if(U&&n&&(_||n(U),document.activeElement===m&&m.blur()),m._datepicker)m._datepicker.hide();else{const F=m.parentNode&&m.parentNode._datepicker;F&&typeof F.hide=="function"&&F.hide()}}}}),m.addEventListener("input",p=>{const k=p.target.value,E=window.__maskDate(k);if(k!==E&&(p.target.value=E),E.length===10){const C=window.__parseFormattedDate(E);if(C&&n)if(_||n(C),document.activeElement===m&&m.blur(),m._datepicker)m._datepicker.hide();else{const N=m.parentNode&&m.parentNode._datepicker;N&&typeof N.hide=="function"&&N.hide()}}}),m.addEventListener("changeDate",p=>{p.detail&&p.detail.date&&n&&(_||n(p.detail.date),m._datepicker&&m._datepicker.hide())})};Q&&V(Q,m=>{if(ue){const p=new Date(m);p.setDate(p.getDate()+243);const k=String(p.getMonth()+1).padStart(2,"0"),E=String(p.getDate()).padStart(2,"0"),C=p.getFullYear();ue.value=`${k}/${E}/${C}`}const n=m.getFullYear();n>1900&&Se&&xe&&Promise.all([ce(`api/beneficiaries.php?next_id&year=${encodeURIComponent(n)}`),ce(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(n)}`)]).then(([p,k])=>{const E=p.success&&p.data?.success?p.data.nextId:null,C=k.success&&k.data?.success?k.data.nextSeries:null,N=String(Se.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),B=String(xe.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),j=N?Number(N[1]):null,H=B?Number(B[1]):null;E&&(j===null||j!==n)&&(Se.value=E),C&&(H===null||H!==n)&&(xe.value=C)}).catch(p=>{console.error("Edit drawer identifier sync error:",p)})}),ue&&V(ue),window.Datepicker||typeof Datepicker<"u"&&Datepicker;const G=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),K=d.querySelector("#edit-date-range-picker");if(G&&K){const m=new G(K,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});Q&&(Q._datepicker=m.datepickers[0]),ue&&(ue._datepicker=m.datepickers[1])}e.id&&(_=!0,ce(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(m=>{if(m.success&&m.data&&m.data.beneficiary){const n=m.data.beneficiary;if(n.birthday&&ve(n.birthday),Q&&n.startDate){const p=new Date(n.startDate);isNaN(p)||(Q.value=n.startDateFormatted||"",Q._datepicker&&Q._datepicker.setDate(p))}if(ue&&n.endDate){const p=new Date(n.endDate);isNaN(p)||(ue.value=n.endDateFormatted||"",ue._datepicker&&ue._datepicker.setDate(p))}}setTimeout(()=>{_=!1},100)}).catch(m=>{console.error("Error fetching accurate beneficiary dates:",m),_=!1}));const Z=(m,n,p)=>{const k=d.querySelector(m),E=d.querySelector(n);if(!k||!E)return;const C=()=>E.classList.add("hidden"),N=()=>E.classList.remove("hidden");k.addEventListener("focus",N),k.addEventListener("input",()=>{const B=k.value.toLowerCase().trim();let j=0;E.querySelectorAll(p).forEach(H=>{const F=(H.querySelector(".option-text")?.textContent||H.textContent||"").toLowerCase().includes(B);H.style.display=F?"block":"none",F&&j++}),j>0?N():C()}),E.addEventListener("click",B=>{const j=B.target.closest(p);j&&(k.value=(j.querySelector(".option-text")?.textContent||j.textContent||"").trim(),C(),k.dispatchEvent(new Event("change")))}),document.addEventListener("click",B=>{!k.contains(B.target)&&!E.contains(B.target)&&C()})};Z("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),Z("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const m=d.querySelector("#edit-office-input"),n=d.querySelector("#edit-office-suggestions-box");if(!m||!n)return;n.classList.add("mt-[52px]");let p="OFFICES",k=null,E=[];const C={textLabel:t?"text-slate-400":"text-slate-500",borderDivide:t?"border-slate-800":"border-slate-100",courseHover:t?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:t?"text-slate-300":"text-slate-700"},N=async()=>{const j="dole_offices_cache",H=async()=>{let F=[];try{const R=await ce("api/beneficiaries.php?get_offices_advanced=1");R.success&&R.data?.success&&Array.isArray(R.data.offices)&&(F=R.data.offices)}catch(R){console.error("Office fetch failed:",R)}return F.length>0&&(E=F,localStorage.setItem(j,JSON.stringify({data:F,timestamp:Date.now()}))),F},U=localStorage.getItem(j);if(U)try{const{data:F,timestamp:R}=JSON.parse(U);return E=F,Date.now()-R>1800*1e3&&H().then(()=>{p==="OFFICES"&&B("OFFICES",k,m.value)}),F}catch{localStorage.removeItem(j)}return E.length===0?await H():E},B=async(j="OFFICES",H=null,U="")=>{if(p=j,k=H,j==="OFFICES"){const R=(await N()).filter(Y=>Y.office.toLowerCase().includes(U.toLowerCase()));n.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${C.textLabel} opacity-70 border-b ${C.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${R.length>0?R.map(Y=>{const de=parseInt(Y.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${C.textCourseOpt} ${C.courseHover} rounded-none ${de?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${Y.id}" data-name="${Y.office}" data-has-locations="${de}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-none bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-none bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${Y.office}</span>
                                        </div>
                                        ${de?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
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
                    `;const P=U.trim(),W=n.querySelector("#add-office-location-row-edit"),oe=n.querySelector("#new-office-loc-input-edit"),Ie=n.querySelector("#confirm-office-with-loc-edit"),Ee=n.querySelector("#add-office-with-loc-btn-edit"),le=n.querySelector("#skip-office-loc-btn-edit");if(Ee&&W&&Ee.addEventListener("click",Y=>{Y.stopPropagation(),W.classList.remove("hidden"),W.classList.add("flex"),setTimeout(()=>oe?.focus(),50)}),Ie&&oe){const Y=de=>{de.stopPropagation();const we=oe.value.trim();m.value=we?`${P} - ${we}`:P,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))};Ie.addEventListener("click",Y),oe.addEventListener("keydown",de=>{de.key==="Enter"&&Y(de)}),oe.addEventListener("click",de=>de.stopPropagation())}le&&le.addEventListener("click",Y=>{Y.stopPropagation(),m.value=P,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))}),n.querySelectorAll(".office-code-option").forEach(Y=>{Y.addEventListener("click",de=>{de.stopPropagation(),Y.dataset.hasLocations==="true"?B("LOCATIONS",{id:Y.dataset.id,name:Y.dataset.name}):(m.value=Y.dataset.name,n.classList.add("hidden"),m.dispatchEvent(new Event("change")))})})}else{n.innerHTML=`
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
                                <input type="text" id="location-search-edit" placeholder="Search in ${H.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-none transition-all"
                                    value="${U.includes(" - ")?U.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${C.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const F=n.querySelector("#loc-list-edit"),R=n.querySelector("#location-search-edit"),P=`dole_locs_cache_${H.id}`;let W=[];const oe=localStorage.getItem(P);if(oe)try{const{data:le,timestamp:Y}=JSON.parse(oe);W=le,Date.now()-Y<3600*1e3}catch{localStorage.removeItem(P)}const Ie=async()=>{let le=[];if(ke&&Re()){const{data:Y,error:de}=await ke.from("office_locations").select("location").eq("office_id",H.id).order("location");!de&&Y&&(le=Y)}if(le.length===0)try{const Y=await ce(`api/beneficiaries.php?get_office_locations=1&office_id=${H.id}`);Y.success&&Y.data?.success&&Array.isArray(Y.data.locations)&&(le=Y.data.locations)}catch(Y){console.error("Office locations fetch failed:",Y)}le.length>0&&(W=le,localStorage.setItem(P,JSON.stringify({data:le,timestamp:Date.now()})),Ee(R.value))},Ee=(le="")=>{const Y=W.filter(we=>we.location.toLowerCase().includes(le.toLowerCase())),de=le.trim();Y.length>0?F.innerHTML=Y.map(we=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${C.textCourseOpt} ${C.courseHover} rounded-none cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${we.location}">
                                    <div class="w-1 h-1 rounded-none bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${we.location}</span>
                                </div>
                            `).join(""):W.length===0?F.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${C.textLabel} animate-pulse">Fetching...</div>`:(F.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${C.textLabel} opacity-60">No matching locations.</div>
                                ${de?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${de}" as location
                                    </button>
                                </div>`:""}
                            `,de&&F.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{m.value=`${H.name} - ${de}`,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})),F.querySelectorAll(".location-option-edit").forEach(we=>{we.addEventListener("click",()=>{m.value=`${H.name} - ${we.dataset.location}`,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})})};Ee(R.value),Ie(),setTimeout(()=>R.focus(),50),R.addEventListener("input",()=>Ee(R.value)),R.addEventListener("click",le=>le.stopPropagation()),n.querySelector("#back-to-offices-edit").addEventListener("click",le=>{le.stopPropagation(),B("OFFICES")})}};m.addEventListener("focus",()=>{n.classList.remove("hidden"),B(p,k,m.value)}),m.addEventListener("input",()=>{p==="OFFICES"&&B("OFFICES",null,m.value)}),document.addEventListener("click",j=>{!m.contains(j.target)&&!n.contains(j.target)&&n.classList.add("hidden")})})();const h=d.querySelector("#edit-replacement-input"),v=d.querySelector("#edit-replacement-suggestions-box"),D=d.querySelector("#edit-replacement-loading");let A=null;h&&v&&(h.addEventListener("input",m=>{const n=m.target.value.trim();clearTimeout(A),v.classList.add("hidden"),!(n.length<2)&&(D&&D.classList.remove("hidden"),A=setTimeout(async()=>{try{const p=await je(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(n)}&limit=10`);p.success&&p.data&&p.data.candidates&&p.data.candidates.length>0?(v.innerHTML=p.data.candidates.map(k=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${k.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${k.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${k.id}</span>
                                </button>
                            `).join(""),v.classList.remove("hidden")):(v.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',v.classList.remove("hidden"))}catch(p){console.error("Replacement fetch error:",p)}finally{D&&D.classList.add("hidden")}},400))}),v.addEventListener("click",m=>{const n=m.target.closest("button");n&&(h.value=n.dataset.name,v.classList.add("hidden"))}),document.addEventListener("click",m=>{!h.contains(m.target)&&!v.contains(m.target)&&v.classList.add("hidden")})),q.querySelectorAll("input, select, textarea").forEach(m=>{const n=(m.getAttribute("type")||"").toLowerCase(),p=!m.disabled&&!m.readOnly&&n!=="hidden";m.classList.remove("editable-indicator"),p&&m.classList.add("editable-indicator")}),q.addEventListener("submit",m=>{m.preventDefault();const{isoBirthday:n,hasBirthdayInput:p}=pe(!0);if(p&&!n){z?.focus(),T.fire({toast:!0,position:"top-end",icon:"error",title:"Enter a valid birthday",text:"Complete the MM, DD, and YYYY fields.",showConfirmButton:!1,timer:3500});return}const k=N=>{const B=String(N||"").trim();if(!B)return"";const j=B.match(/^(\d{4})-(\d{2})-(\d{2})/);if(j)return`${j[1]}-${j[2]}-${j[3]}`;const H=window.__parseFormattedDate?.(B);if(!H)return B;const U=H.getFullYear(),F=String(H.getMonth()+1).padStart(2,"0"),R=String(H.getDate()).padStart(2,"0");return`${U}-${F}-${R}`},E=new FormData(q),C={};E.forEach((N,B)=>{C[B]=["birthday","startDate","endDate"].includes(B)?k(N):N}),C.birthday=n,C.id=e.id,C.gip_id=C.gip_id||e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(C,!0,!1)&&(O(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),T.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function Br(){window.showAddDataModal=Te,window.__maskDate=function(e){let t=e.replace(/\D/g,"").slice(0,8);return t.length>2&&t.length<=4?t=t.slice(0,2)+"/"+t.slice(2):t.length>4&&(t=t.slice(0,2)+"/"+t.slice(2,4)+"/"+t.slice(4)),t},window.__parseFormattedDate=function(e){if(!e)return null;const t=e.split("/");if(t.length===3){const a=parseInt(t[0])-1,s=parseInt(t[1]),o=parseInt(t[2]);if(o>1e3&&a>=0&&a<12&&s>0&&s<=31)return new Date(o,a,s)}return null},window.calculateAge=function(e){if(!e)return"";const t=e instanceof Date?e:new Date(e),a=new Date;let s=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||o===0&&a.getDate()<t.getDate())&&s--,s>=0?s:0},window.viewBeneficiary=async function(e,t=0){const a=e?.id||e?.gip_id||null;if(!a)return;const s=!!(e?.name&&e?.office&&e?.remarks),o=!s;let r={...e,id:a};if(o&&He({id:a,_isLoadingProfile:!0,_isLoadingLogs:!0},t),!s){const c=await ce(`api/beneficiaries.php?id=${encodeURIComponent(a)}`);c.success&&c.data?.success&&c.data?.beneficiary&&(r={...c.data.beneficiary,...r,id:a})}const l=`logs_cache_${a}`,i=window.__doleDB?.getSecureCache?await window.__doleDB.getSecureCache(l):null,u=!!i;r.arLogs=i?.arLogs||[],r.dtrLogs=i?.dtrLogs||[],r.docs=i?.docs||[],r._isLoadingProfile=!1,r._isLoadingLogs=!u,r._noAnimation=o,He(r,t);try{const[c,g,b,L]=await Promise.all([ce(`api/logs.php?type=ar&gip_id=${encodeURIComponent(a)}`),ce(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(a)}`),ce(`api/logs.php?type=docs&gip_id=${encodeURIComponent(a)}`),ce(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(a)}`)]),d=c.success&&c.data?.success?c.data.logs:[],x=g.success&&g.data?.success?g.data.logs:[],S=b.success&&b.data?.success?b.data.logs:[],y=L.success&&L.data?.success?L.data.logs:[];if(y.length>0){const q=y[0];r.absorbDate=q.absorption_datetime,r.absorb_where=q.where||q.absorb_where,r.absorb_position=q.position||q.absorb_position,r.absorb_agency=q.agency||q.absorb_agency}window.__doleDB?.setSecureCache&&await window.__doleDB.setSecureCache(l,{arLogs:d,dtrLogs:x,docs:S});const $=JSON.stringify({ar:i?.arLogs||[],dtr:i?.dtrLogs||[],docs:i?.docs||[],absorption:[]}),O=JSON.stringify({ar:d,dtr:x,docs:S,absorption:y});if(!u||$!==O){const q=document.getElementById("beneficiary-drawer-container");q&&q.dataset.beneficiaryId===String(a)&&(r.arLogs=d,r.dtrLogs=x,r.docs=S,r._isLoadingProfile=!1,r._isLoadingLogs=!1,He({...r,_noAnimation:!0},t))}}catch(c){if(console.error("Error fetching logs/docs:",c),!u){const g=document.getElementById("beneficiary-drawer-container");g&&g.dataset.beneficiaryId===String(a)&&(r._isLoadingProfile=!1,r._isLoadingLogs=!1,He({...r,_noAnimation:!0},t))}}},window.showAddDataModal=function(e){Te(e)},window.editBeneficiary=function(e){ir(e)},window.showExportConfigModal=function(e){cr(e)},window.showProfileModal=function(){lr()},window.showSearchExtraStatsModal=function(){ur()}}async function lr(){try{if(Re()&&ke){let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=s.id)}catch{}if(!e)throw new Error("User not logged in");const{data:t,error:a}=await ke.from("users").select("*").eq("user_id",e).single();if(a)throw a;pt(t)}else{let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=`?user_id=${s.id}`)}catch{}const a=await(await fetch(`${be()}api/profile.php${e}`)).json();if(a.success){const s=a.profile;pt(s)}else T.fire({icon:"error",title:"Error",text:a.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function pt(e){const t=e.profile_picture_path?`${be()}${e.profile_picture_path}`:null,a=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",s=`
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
    `;T.fire({html:s,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const r=o.querySelector("#profile-edit-form"),l=o.querySelector("#profile-pic-input"),i=o.querySelector("#profile-avatar-preview");l.addEventListener("change",u=>{const c=u.target.files[0];if(c){const g=new FileReader;g.onload=b=>{i.innerHTML=`<img src="${b.target.result}" class="w-full h-full object-cover" />`},g.readAsDataURL(c)}}),r.addEventListener("submit",async u=>{u.preventDefault();const c=new FormData(r);try{const g=JSON.parse(localStorage.getItem("user"));g&&g.id&&c.append("user_id",g.id)}catch{}try{const b=await(await fetch(`${be()}api/profile.php`,{method:"POST",body:c})).json();b.success?(b.profile&&(localStorage.setItem("user",JSON.stringify(b.profile)),dr(b.profile)),T.close(),T.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):T.fire({icon:"error",title:"Update Failed",text:b.error||"Something went wrong"})}catch(g){console.error("Error saving profile:",g)}})}})}function dr(e){const t=e.profile_picture_path?`${be()}${e.profile_picture_path}`:null,a=e.full_name?e.full_name.split(" ").map(l=>l[0]).join("").substring(0,2).toUpperCase():"US",s=document.querySelectorAll(".sidebar-user-name"),o=document.querySelectorAll(".sidebar-user-email"),r=document.querySelectorAll(".sidebar-user-avatar");s.forEach(l=>l.textContent=e.full_name),o.forEach(l=>l.textContent=e.email||"No email set"),r.forEach(l=>{t?l.innerHTML=`<img src="${t}" class="w-full h-full object-cover" />`:l.textContent=a}),localStorage.setItem("user_full_name",e.full_name),t&&localStorage.setItem("user_avatar",t)}function cr(e){const t=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",assignedUnit:"ALL",ageGroup:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","assignedunit","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},a=`
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
                        ${["ID","Name","Age","Office","Assigned Unit","Start Date","End Date","Status"].map(s=>{const o=s.toLowerCase().replace(" ",""),r=t.columns.includes(o),l=`col-switch-${o}`;return`
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
    `;T.fire({html:a,width:"min(1120px, calc(100vw - clamp(0.5rem, 2vw, 1.5rem)))",showConfirmButton:!1,showCloseButton:!0,padding:"clamp(0.75rem, 2vw, 1.5rem)",customClass:{container:"font-montserrat",popup:"max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl shadow-2xl ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:s=>{const o=s.querySelector("#export-config-form"),r=o.querySelector("#export-office"),l=o.querySelector("#export-location"),i=o.querySelector("#export-year"),u=o.querySelector("#export-assigned-unit");if(u){const g=window.getExportAssignedUnits?window.getExportAssignedUnits():De,b=t.assignedUnit||"ALL";u.innerHTML=`<option value="ALL" ${b==="ALL"?"selected":""}>ALL ASSIGNED UNITS</option>`+g.map(L=>`<option value="${L}" ${b===L?"selected":""}>${L}</option>`).join("")}if(i&&window.getExportYears){const g=window.getExportYears(),b=t.year||"ALL";let L=`<option value="ALL" ${b==="ALL"?"selected":""}>ALL YEARS</option>`;g.forEach(d=>{L+=`<option value="${d}" ${b===d?"selected":""}>${d}</option>`}),i.innerHTML=L}const c=async(g,b)=>{if(l){if(!g){l.disabled=!0,l.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}l.disabled=!1,l.innerHTML='<option value="ALL">Loading...</option>';try{const L=await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${g}`),d=L.success&&L.data?.success&&Array.isArray(L.data.locations)?L.data.locations:[];let x='<option value="ALL">ALL LOCATIONS</option>';d.forEach(S=>{x+=`<option value="${S.location}" ${b===S.location?"selected":""}>${S.location}</option>`}),l.innerHTML=x}catch{l.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};r&&(async()=>{let g=[];try{const S=await window.apiGet("api/beneficiaries.php?get_offices_advanced=1");S.success&&S.data?.success&&Array.isArray(S.data.offices)&&(g=S.data.offices)}catch{}const b=t.office||"ALL";let L=`<option value="ALL" ${b==="ALL"?"selected":""}>ALL OFFICES</option>`;g.forEach(S=>{L+=`<option value="${S.office}" data-id="${S.id}" ${b===S.office?"selected":""}>${S.office}</option>`}),r.innerHTML=L;const x=r.options[r.selectedIndex]?.dataset?.id;x&&b!=="ALL"&&await c(x,t.location||"ALL"),r.addEventListener("change",async()=>{const S=r.options[r.selectedIndex];await c(S?.dataset?.id,"ALL")})})(),o.addEventListener("submit",g=>{g.preventDefault();const b=o.querySelectorAll('input[name="export-column"]:checked'),L=Array.from(b).map(X=>X.value),d=o.querySelector('input[name="export-gender"]:checked'),x=o.querySelector('input[name="export-section"]:checked'),S=o.querySelector('input[name="export-remarks"]:checked'),y=o.querySelector('input[name="export-age-group"]:checked'),$=o.querySelector("#export-prepared").value.trim(),O=o.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",$),localStorage.setItem("ldn_export_approved",O);const q={office:o.querySelector("#export-office").value,location:o.querySelector("#export-location")?.value||"ALL",year:o.querySelector("#export-year")?.value||"ALL",gender:d?d.value:t.gender||"ALL",assignedUnit:o.querySelector("#export-assigned-unit")?.value||"ALL",remarks:S?S.value:t.remarks||"ALL",ageGroup:y?y.value:t.ageGroup||"ALL",search:o.querySelector("#export-search").value.trim().toLowerCase(),sort:o.querySelector("#export-sort").value,section:x?x.value:"ALL",preparedBy:$,approvedBy:O,columns:L};e(q),T.close(),setTimeout(()=>{T.fire({toast:!0,position:"top-end",icon:"success",title:"Report configuration applied",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const tt=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],wt=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function Te(e=null){const t=!!e&&!e._isBulk,a=t?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",s=t?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=ye(),r={borderBase:o?"border-slate-800":"border-gray-100/80",borderCard:o?"border-slate-800":"border-gray-100",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgCard:o?"bg-slate-900/40":"bg-gray-50/40",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgActionBar:o?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},l=`
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
                                        ${tt.map(i=>`
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
                                    ${wt.map(i=>`
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
                                placeholder="ROX-RD-ESIG-2025-0001">
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
                                    ${De.map(i=>`
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
                                    ${(()=>{const i={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(u=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${u}" ${e?.remarks===u?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${i[u]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${u}
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
    `;T.fire({html:l,width:window.innerWidth<640?"96vw":window.innerWidth<1024?"90vw":"1120px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"0.75rem":window.innerWidth<1024?"1.25rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:i=>{window.initFlowbite&&window.initFlowbite();const u=i.querySelector("#cancel-modal-btn");u&&u.addEventListener("click",()=>{!t&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),T.close(),e?._isBulk&&ze.onCancel()});const c=i.querySelector("#bulk-add-btn");c&&c.addEventListener("click",()=>{T.close(),ze.init()});const g=(f,h)=>{f.addEventListener("paste",v=>{v.preventDefault();let D=(v.clipboardData||window.clipboardData).getData("text");if(D){D=D.replace(/[-.\s]/g,"/");const A=D.split("/");if(A.length===3){const m=A[0].padStart(2,"0"),n=A[1].padStart(2,"0");let p=A[2];if(p.length===2){const B=new Date().getFullYear(),j=Math.floor(B/100)*100;p=String(j+parseInt(p))}else p=p.padStart(4,"0");const k=`${m}/${n}/${p}`;f.value=k;const E=new Event("input",{bubbles:!0});f.dispatchEvent(E);const C=window.__parseFormattedDate(k);C&&h&&(h(C),document.activeElement===f&&f.blur());const N=f._datepicker||f.parentNode&&f.parentNode._datepicker;N&&typeof N.hide=="function"&&N.hide()}}}),f.addEventListener("input",v=>{const D=window.__maskDate(v.target.value);if(v.target.value!==D&&(v.target.value=D),D.length===10){const A=window.__parseFormattedDate(D);if(A&&h){h(A),document.activeElement===f&&f.blur();const m=f._datepicker||f.parentNode&&f.parentNode._datepicker;m&&typeof m.hide=="function"&&m.hide()}}}),f.addEventListener("changeDate",v=>{if(v.detail&&v.detail.date&&h){h(v.detail.date);const D=f._datepicker||f.parentNode&&f.parentNode._datepicker;D&&typeof D.hide=="function"&&D.hide()}})},b=i.querySelector("#birthday-input"),L=i.querySelector("#age-display"),d=i.querySelector("#age-warning"),x=i.querySelector("#submit-beneficiary-btn"),S=f=>{if(!f)return d&&d.classList.add("hidden"),x&&(x.disabled=!1,x.classList.remove("opacity-50","cursor-not-allowed","grayscale"),x.classList.add("cursor-pointer")),!0;const h=parseInt(f),v=!isNaN(h)&&h>=18&&h<=29;return d&&(d.className=`mt-1 text-[0.625rem] font-bold ${v?"hidden":"flex"} items-center gap-1.5 animate-pulse ${ye()?"text-red-400":"text-red-600"}`),x&&(v?(x.disabled=!1,x.classList.remove("opacity-50","cursor-not-allowed","grayscale"),x.classList.add("cursor-pointer","active:scale-[0.98]")):(x.disabled=!0,x.classList.add("opacity-50","cursor-not-allowed","grayscale"),x.classList.remove("cursor-pointer","active:scale-[0.98]"))),v};if(L&&(L.addEventListener("input",f=>{S(f.target.value)}),L.value&&S(L.value)),b){g(b,h=>{L&&(L.value=window.calculateAge(h),S(L.value),L.classList.add("animate-pulse"),setTimeout(()=>L.classList.remove("animate-pulse"),400))});const f=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);f&&(b._datepicker=new f(b,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const y=i.querySelector("#name-input-field"),$=i.querySelector("#duplicate-warning");if(y&&$){let f;const h=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},v=(A,m="")=>{$.className=`mt-1 text-[0.625rem] font-bold ${A?"flex":"hidden"} items-center gap-1.5 animate-pulse ${ye()?"text-red-400":"text-red-600"}`;const n=$.querySelector("span");n&&(n.textContent=m?`Beneficiary already exists: ${m}`:"Beneficiary already exists")},D=async A=>{const m=h(),n=await fetch(`${be()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...m?{"X-User-Id":String(m)}:{}},body:JSON.stringify({name:A,user_id:m,exclude_id:t?e?.id:null})});if(!n.ok)throw new Error(`Duplicate check failed (${n.status})`);return n.json()};y.addEventListener("input",A=>{const m=A.target.value.trim();if(clearTimeout(f),m.length<3){v(!1);return}f=setTimeout(async()=>{try{const n=await D(m);n.success&&n.exists?v(!0,n.match||n.name):v(!1)}catch(n){console.error("Duplicate check error:",n)}},500)}),e?.name&&(v(!1),(async()=>{const A=await D(e.name);A.success&&A.exists&&v(!0,A.match||A.name)})())}const O=i.querySelector("#full-id-input"),q=i.querySelector("#series-no-input"),X=i.querySelector('input[name="startDate"]'),z=i.querySelector('input[name="endDate"]'),re=i.querySelectorAll('input[name="remarks"]'),ae=i.querySelector("#extension-log-container"),ee=async f=>{if(!f)return;const h=[O,q].filter(Boolean);h.forEach(v=>{v.classList.add("animate-pulse"),v.placeholder="Syncing..."});try{const[v,D]=await Promise.all([ce(`api/beneficiaries.php?next_id&year=${encodeURIComponent(f)}`),ce(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(f)}`)]),A=v.success&&v.data?.success?v.data.nextId:null,m=D.success&&D.data?.success?D.data.nextSeries:null;A&&O&&(O.value=A),m&&q&&(q.value=m)}catch(v){console.error("ID Sync error:",v)}finally{h.forEach(v=>v.classList.remove("animate-pulse"))}},se=i.querySelector("#replacement-search-input"),ie=i.querySelector("#replacement-hidden"),Q=i.querySelector("#replacement-suggestions"),ue=f=>{const h=(f.name||"").toUpperCase().trim(),v=f.startDateFormatted||f.startDate||"N/A",D=f.endDateFormatted||f.endDate||"N/A";return`${h} (${v.toUpperCase()} - ${D.toUpperCase()})`},xe=f=>{if(Q){if(!f.length){Q.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt}">No matching beneficiary found.</div>`,Q.classList.remove("hidden");return}Q.innerHTML=f.map(h=>{const v=ue(h);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${v.replace(/"/g,"&quot;")}">
                            ${v}
                        </button>
                    `}).join(""),Q.classList.remove("hidden"),Q.querySelectorAll(".replacement-option").forEach(h=>{h.addEventListener("click",()=>{const v=h.getAttribute("data-replacement")||"";se&&(se.value=v),ie&&(ie.value=v),Q.classList.add("hidden")})})}};let Se=null;const fe=async(f="")=>{const h=(f||"").trim(),v=`api/beneficiaries.php?replacement_candidates=1&limit=20${h?`&q=${encodeURIComponent(h)}`:""}`,D=await ce(v);D.success&&D.data?.success&&Array.isArray(D.data.candidates)&&xe(D.data.candidates)};se&&ie&&Q&&(se.addEventListener("focus",()=>{fe(se.value||"")}),se.addEventListener("input",()=>{ie.value=se.value.trim(),clearTimeout(Se),Se=setTimeout(()=>{fe(se.value||"")},250)}),document.addEventListener("click",f=>{se&&Q&&!se.contains(f.target)&&!Q.contains(f.target)&&Q.classList.add("hidden")}));const pe=()=>{const f=i.querySelector('input[name="remarks"]:checked');return f?f.value:"ONGOING"},ve=f=>{const h=i.querySelector(`input[name="remarks"][value="${f}"]`);h&&(h.checked=!0,M())},w=()=>{if(z&&z.value){const f=window.__parseFormattedDate(z.value);if(!f)return;const h=new Date;h.setHours(0,0,0,0);let v="ONGOING";f<h&&(v="EXPIRED"),ve(v)}},M=()=>{if(!ae)return;const f=pe();if(f==="ABSORBED"){const h=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,v=h.getTimezoneOffset()*6e4,D=new Date(h.getTime()-v).toISOString().slice(0,16);ae.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${D}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                    `}else if(f==="RESIGNED"){const h=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,v=h.getTimezoneOffset()*6e4,D=new Date(h.getTime()-v).toISOString().slice(0,16);ae.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${D}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ae.innerHTML=""};if(X){let f=null;g(X,A=>{const m=A.getFullYear();if(z){const n=new Date(A);n.setDate(n.getDate()+243);const p=String(n.getMonth()+1).padStart(2,"0"),k=String(n.getDate()).padStart(2,"0"),E=n.getFullYear();z.value=`${p}/${k}/${E}`}w(),m>1900&&m!==f&&(f=m,ee(m))}),z&&g(z,()=>w());const h=i.querySelector("#date-range-picker"),v=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),D=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(v&&h&&X&&z){const A=new v(h,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});X._datepicker=A.datepickers?.[0]||null,z._datepicker=A.datepickers?.[1]||null}else D&&(X&&(X._datepicker=new D(X,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),z&&(z._datepicker=new D(z,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!t){const A=new Date().getFullYear();ee(A)}}re.forEach(f=>f.addEventListener("change",M));const I=i.querySelector("#resign-btn"),_=i.querySelector("#absorb-btn");I&&I.addEventListener("click",()=>ve("RESIGNED")),_&&_.addEventListener("click",()=>ve("ABSORBED")),i.querySelectorAll('input[type="text"], textarea').forEach(f=>{["id-number-input","full-id-input"].includes(f.id)||f.addEventListener("input",()=>{const h=f.selectionStart,v=f.selectionEnd;f.value=f.value.toUpperCase(),f.setSelectionRange(h,v)})}),w(),M(),G("education-input","course-suggestions","course-option"),G("designation-input","work-suggestions","work-option"),(()=>{const f=i.querySelector("#office-input"),h=i.querySelector("#office-suggestions");if(!f||!h)return;let v="OFFICES",D=null,A=[];const m=async()=>{const p="dole_offices_cache",k=async()=>{let C=[];try{if(ke&&Re()){const[{data:N,error:B},{data:j}]=await Promise.all([ke.from("offices").select("*").order("office"),ke.from("office_locations").select("office_id")]);if(!B&&N?.length){const H={};j&&j.forEach(U=>{H[U.office_id]=(H[U.office_id]||0)+1}),C=N.map(U=>({id:U.id??U.office_id,office:U.office||U.office_name||"",location_count:H[U.id??U.office_id]||0})).filter(U=>U.office)}}}catch{}if(!C.length)try{const N=await ce("api/beneficiaries.php?get_offices_advanced=1");N.success&&N.data?.success&&Array.isArray(N.data.offices)&&(C=N.data.offices)}catch(N){console.error("Office fetch failed:",N)}return C.length>0&&(A=C,localStorage.setItem(p,JSON.stringify({data:C,timestamp:Date.now()}))),C},E=localStorage.getItem(p);if(E)try{const{data:C,timestamp:N}=JSON.parse(E);return A=C,Date.now()-N>300*1e3&&k().then(()=>{v==="OFFICES"&&n("OFFICES",D,f.value)}),C}catch{localStorage.removeItem(p)}return A.length===0?await k():A},n=async(p="OFFICES",k=null,E="")=>{if(v=p,D=k,p==="OFFICES"){const N=(await m()).filter(P=>P.office.toLowerCase().includes(E.toLowerCase()));h.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70 border-b ${r.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${N.length>0?N.map(P=>{const W=parseInt(P.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg ${W?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${P.id}" data-name="${P.office}" data-has-locations="${W}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${P.office}</span>
                                            </div>
                                            ${W?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                        </div>
                                    `}).join(""):`
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${E.trim()?`
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-50 px-1">New office: "${E.trim()}"</div>
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
                        `;const B=E.trim(),j=h.querySelector("#add-office-location-row-modal"),H=h.querySelector("#new-office-loc-input-modal"),U=h.querySelector("#confirm-office-with-loc-modal"),F=h.querySelector("#add-office-with-loc-btn-modal"),R=h.querySelector("#skip-office-loc-btn-modal");if(F&&j&&F.addEventListener("click",P=>{P.stopPropagation(),j.classList.remove("hidden"),j.classList.add("flex"),setTimeout(()=>H?.focus(),50)}),U&&H){const P=W=>{W.stopPropagation();const oe=H.value.trim();f.value=oe?`${B} - ${oe}`:B,f.dataset.locationName=oe||"",h.classList.add("hidden"),f.dispatchEvent(new Event("change"))};U.addEventListener("click",P),H.addEventListener("keydown",W=>{W.key==="Enter"&&P(W)}),H.addEventListener("click",W=>W.stopPropagation())}R&&R.addEventListener("click",P=>{P.stopPropagation(),f.value=B,f.dataset.locationName="",h.classList.add("hidden"),f.dispatchEvent(new Event("change"))}),h.querySelectorAll(".office-code-option").forEach(P=>{P.addEventListener("click",W=>{W.stopPropagation(),P.dataset.hasLocations==="true"?n("LOCATIONS",{id:P.dataset.id,name:P.dataset.name}):(f.value=P.dataset.name,f.dataset.officeId=P.dataset.id,delete f.dataset.locationName,h.classList.add("hidden"),f.dispatchEvent(new Event("change")))})})}else{h.innerHTML=`
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
                                        value="${E.includes(" - ")?E.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const C=h.querySelector("#locations-list-container"),N=h.querySelector("#location-search-internal"),B=`dole_locs_cache_${k.id}`;let j=[];const H=localStorage.getItem(B);if(H)try{const{data:R,timestamp:P}=JSON.parse(H);j=R}catch{localStorage.removeItem(B)}const U=async()=>{let R=[];if(ke&&Re()){const{data:P,error:W}=await ke.from("office_locations").select("location").eq("office_id",k.id).order("location");!W&&P&&(R=P)}if(R.length===0)try{const P=await ce(`api/beneficiaries.php?get_office_locations=1&office_id=${k.id}`);P.success&&P.data?.success&&Array.isArray(P.data.locations)&&(R=P.data.locations)}catch(P){console.error("Office locations fetch failed:",P)}R.length>0&&(j=R,localStorage.setItem(B,JSON.stringify({data:R,timestamp:Date.now()})),F(N.value))},F=(R="")=>{const P=j.filter(oe=>oe.location.toLowerCase().includes(R.toLowerCase())),W=R.trim();P.length>0?C.innerHTML=P.map(oe=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${oe.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${oe.location}</span>
                                    </div>
                                `).join(""):j.length===0?C.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(C.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60">No matching locations.</div>
                                    ${W?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${W}" as location
                                        </button>
                                    </div>`:""}
                                `,W&&C.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{f.value=`${k.name} - ${W}`,f.dataset.officeId=k.id,f.dataset.locationName=W,h.classList.add("hidden"),f.dispatchEvent(new Event("change"))})),C.querySelectorAll(".location-option").forEach(oe=>{oe.addEventListener("click",Ie=>{const Ee=oe.dataset.location;f.value=`${k.name} - ${Ee}`,f.dataset.officeId=k.id,f.dataset.locationName=Ee,h.classList.add("hidden"),f.dispatchEvent(new Event("change"))})})};F(N.value),U(),setTimeout(()=>N.focus(),50),N.addEventListener("input",()=>F(N.value)),N.addEventListener("click",R=>R.stopPropagation()),h.querySelector("#back-to-offices").addEventListener("click",R=>{R.stopPropagation(),n("OFFICES")})}};f.addEventListener("focus",()=>{h.classList.remove("hidden"),n(v,D,f.value)}),f.addEventListener("input",()=>{delete f.dataset.officeId,delete f.dataset.locationName,v="OFFICES",D=null,h.classList.remove("hidden"),n("OFFICES",null,f.value)}),document.addEventListener("click",p=>{!f.contains(p.target)&&!h.contains(p.target)&&(h.classList.add("hidden"),f.value||(v="OFFICES",D=null))})})();function G(f,h,v){const D=i.querySelector(`#${f}`),A=i.querySelector(`#${h}`);if(!D||!A)return;let m=!1;D.addEventListener("focus",()=>A.classList.remove("hidden")),document.addEventListener("click",n=>{!D.contains(n.target)&&!A.contains(n.target)&&A.classList.add("hidden")}),D.addEventListener("input",()=>{if(m){m=!1;return}const n=D.value.toLowerCase(),p=A.querySelectorAll(`.${v}`);let k=!1;p.forEach(E=>{const C=E.querySelector(".option-text");(C?C.innerText:E.innerText).toLowerCase().includes(n)?(E.style.display="block",k=!0):E.style.display="none"}),k?A.classList.remove("hidden"):A.classList.add("hidden")}),A.addEventListener("click",n=>{const p=n.target.closest(`.${v}`);if(!p)return;const k=p.querySelector(".option-text");D.value=k?k.innerText.trim():p.innerText.trim(),m=!0,A.classList.add("hidden"),D.dispatchEvent(new Event("change"))})}const K=i.querySelector("#add-beneficiary-form"),Z="add_beneficiary_draft";if(!t){const f=localStorage.getItem(Z);if(f)try{const h=JSON.parse(f);Object.entries(h).forEach(([v,D])=>{const A=K.elements[v];A&&A.type!=="file"&&A.type!=="hidden"&&(A.value=D)})}catch(h){console.error("Error loading draft",h)}}K.addEventListener("input",f=>{if(!t){const h=new FormData(K),v={};h.forEach((D,A)=>v[A]=D),localStorage.setItem(Z,JSON.stringify(v))}}),K&&K.addEventListener("submit",f=>{f.preventDefault(),K.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(U=>{U.classList.remove("ring-2","ring-red-500","!border-red-500")});const v=new FormData(K);let D=!1;const A=U=>{const F=K.querySelector(`[name="${U}"]`);F&&F.classList.add("ring-2","ring-red-500","!border-red-500"),D=!0},m=v.get("name"),n=v.get("contact"),p=v.get("startDate"),k=v.get("endDate"),E=(v.get("designation")||"").trim();(!m||m.trim()===""||/[0-9]/.test(m))&&A("name"),n&&n.trim()!==""&&/[^0-9]/.test(n.replace(/[\s\-\+\(\)]/g,""))&&A("contact"),p||A("startDate"),k||A("endDate");const C=v.get("age"),N=parseInt(C);if((!C||isNaN(N)||N<18||N>29)&&(D=!0,d&&(d.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof ye=="function"&&ye()?"text-red-400":"text-red-600"}`),x&&(x.disabled=!0,x.classList.add("opacity-50","cursor-not-allowed","grayscale"),x.classList.remove("cursor-pointer","active:scale-[0.98]"))),D)return;const B={};v.forEach((U,F)=>{if(["birthday","startDate","endDate"].includes(F)){const R=window.__parseFormattedDate(U);if(R){const P=R.getFullYear(),W=String(R.getMonth()+1).padStart(2,"0"),oe=String(R.getDate()).padStart(2,"0");B[F]=`${P}-${W}-${oe}`}else B[F]=U}else B[F]=U}),E||(B.designation="N/A"),B.replacement||(B.replacement="");const j=i.querySelector("#office-input");j?.dataset.officeId&&(B.officeId=j.dataset.officeId),j?.dataset.locationName&&(B.locationName=j.dataset.locationName);const H=i.querySelector("#full-id-input")?.value;t?(B.id=e?.id,H&&(B.gip_id=H)):(B.id=null,H&&(B.gip_id=H)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(B)){if(!t){const F="add_beneficiary_draft",R=K.querySelector('[name="office"]')?.value||"",P=K.querySelector('[name="designation"]')?.value||"",W=K.querySelector('[name="education"]')?.value||"";localStorage.setItem(F,JSON.stringify({office:R,designation:P,education:W}))}T.close(),setTimeout(()=>{T.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${t?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!t&&e?._isBulk&&ze.onSaveSuccess()},100)}else T.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const t=e.target,a=t.querySelector('button[type="submit"]'),s=a.innerHTML;a.disabled=!0,a.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(t);if((await fetch(t.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)T.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:l=>{l.addEventListener("mouseenter",T.stopTimer),l.addEventListener("mouseleave",T.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),t.reset();else throw new Error("Failed to send")}catch{T.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{a.disabled=!1,a.innerHTML=s}return!1};function ur(){T.fire({html:`
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
        `,width:"800px",showConfirmButton:!1,showCloseButton:!1,backdrop:!0,position:"top",scrollbarPadding:!1,customClass:{container:"font-montserrat !backdrop-blur-md !bg-slate-900/70",popup:"!bg-transparent border-0 !shadow-none p-0 !overflow-visible mt-24",htmlContainer:"!overflow-visible",closeButton:"hidden"},didOpen:()=>{const e=document.getElementById("extraStatsSearchForm"),t=document.getElementById("statsSearchInput"),a=document.getElementById("statsDatePickerContainer"),s=document.getElementById("datepicker-range-start"),o=document.getElementById("datepicker-range-end"),r=document.getElementById("statsSortDropdownBtn"),l=document.getElementById("statsSortDropdown"),i=document.getElementById("statsSortDropdownLabel");let u="keyword";r&&l&&(r.addEventListener("click",c=>{c.stopPropagation(),l.classList.toggle("hidden")}),document.querySelectorAll(".stats-sort-option").forEach(c=>{c.addEventListener("click",g=>{const b=g.target.getAttribute("data-sort");u=b,i.textContent=g.target.textContent,l.classList.add("hidden"),b==="date"?(t.classList.add("hidden"),t.required=!1,a.classList.remove("hidden"),a.classList.add("flex"),t.value=""):(a.classList.add("hidden"),a.classList.remove("flex"),t.classList.remove("hidden"),t.required=!1,s.value="",o.value="",b==="offices"?t.placeholder="Search by Office name (e.g. Iligan)...":b==="education"?t.placeholder="Search by Education level (e.g. College)...":b==="ages"?t.placeholder="Search by Age (e.g. 24)...":t.placeholder="Search by name, office, status...")})}),document.addEventListener("click",c=>{!r.contains(c.target)&&!l.contains(c.target)&&l.classList.add("hidden")})),setTimeout(()=>t?.focus(),100),e.addEventListener("submit",async c=>{c.preventDefault();const g={mode:u,query:t.value.trim().toLowerCase(),startDate:s.value,endDate:o.value};await pr(g)})}})}async function pr(e){const t=document.getElementById("statsSearchLoader"),a=document.getElementById("statsSearchResult");t.classList.remove("hidden"),a.classList.add("hidden"),a.classList.remove("grid");let s=await Ve();if(!s||s.length===0){const o=await ce("api/beneficiaries.php?all=true");o&&o.status==="success"&&o.data?(s=o.data,typeof Oe=="function"&&Oe(s)):o&&o.data&&(s=Array.isArray(o.data)?o.data:Array.isArray(o)?o:[],typeof Oe=="function"&&Oe(s))}setTimeout(()=>{const{mode:o,query:r,startDate:l,endDate:i}=e,u=s.filter(d=>{if(o==="date"){const x=d.startDate||d.createdAt;if(!x)return!1;const S=new Date(x);if(isNaN(S.getTime()))return!1;if(S.setHours(0,0,0,0),l){const y=new Date(l);if(y.setHours(0,0,0,0),S<y)return!1}if(i){const y=new Date(i);if(y.setHours(0,0,0,0),S>y)return!1}return!0}else return o==="offices"?d.office?.toLowerCase().includes(r)||!1:o==="education"?d.education?.toLowerCase().includes(r)||!1:o==="ages"?d.age==r:r?d.name?.toLowerCase().includes(r)||!1||d.id?.toLowerCase().includes(r)||!1||d.office?.toLowerCase().includes(r)||!1||d.remarks?.toLowerCase().includes(r)||!1||d.designation?.toLowerCase().includes(r)||!1:!0});let c="";o==="date"?l&&i?c=`Date: ${l} to ${i}`:l?c=`Date: From ${l}`:i?c=`Date: Until ${i}`:c="Date: All Time":c=`${o.charAt(0).toUpperCase()+o.slice(1)}: "${r||"ALL"}"`,document.getElementById("statsSearchTermDisplay").textContent=c;const g=document.getElementById("statsTopResults");g&&(g.innerHTML="",u.length>0?u.slice(0,3).forEach(x=>{const S=(x.remarks||"No Status").toUpperCase();let y="text-gray-500";S==="ONGOING"?y="text-green-500":S==="EXPIRED"?y="text-red-500":S==="ABSORBED"?y="text-emerald-600":S==="RESIGNED"?y="text-[#ce1126]":y="text-royal-blue",g.innerHTML+=`
                        <div class="flex flex-col border-b border-gray-200 dark:border-slate-700 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-100 truncate">${x.name||"Unknown Beneficiary"}</span>
                            <div class="flex justify-between items-center text-xs mt-1">
                                <span class="text-gray-500 truncate max-w-[60%]">${x.office||"N/A"}</span>
                                <span class="${y} font-bold text-[10px] uppercase tracking-wider">${S}</span>
                            </div>
                        </div>
                    `}):g.innerHTML='<div class="text-center text-gray-400 font-bold text-xs mt-6 uppercase tracking-widest">No matching records found.</div>'),u.length,u.filter(d=>(d.remarks||"").toUpperCase()==="ONGOING").length,u.filter(d=>(d.remarks||"").toUpperCase()==="EXPIRED").length,u.filter(d=>(d.remarks||"").toUpperCase()==="ABSORBED").length,u.filter(d=>(d.remarks||"").toUpperCase()==="RESIGNED").length;const b=new Date,L={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};document.getElementById("statsCurrentDateTime").textContent=b.toLocaleString("en-US",L),Jt(u,"statsModalChartContainer"),t.classList.add("hidden"),a.classList.remove("hidden"),a.classList.add("grid")},400)}export{Br as A,dr as B,De as C,ht as _,je as a,rt as b,Sr as c,Er as d,Cr as e,Dr as f,be as g,Ve as h,Oe as i,kr as j,Bt as k,Le as l,Re as m,ce as n,yr as o,Lr as p,Ar as q,wr as r,ke as s,mr as t,$r as u,Ir as v,hr as w,xr as x,vr as y,We as z};
