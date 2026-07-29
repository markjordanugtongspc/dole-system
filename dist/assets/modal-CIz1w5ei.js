const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-B7rSfpuT.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import M from"./vendor-swal-BSk0fVSb.js";import{a as yt}from"./vendor-DHtNC8Ux.js";import{A as Je}from"./vendor-charts-BjInCqFR.js";const wt="true".toLowerCase()==="true";function Re(){return wt}function me(){const e=window.location.pathname,t="/dole-system/",s=e.toLowerCase().indexOf(t.toLowerCase());if(s!==-1)return e.substring(0,s+t.length);const a=e.indexOf("/frontend/");if(a!==-1)return e.substring(0,a+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function tt(e="Incorrect Username or Password"){M.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function kt(e=!1){return M.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function fr(){const e=localStorage.getItem("hasVisitedBefore"),t=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),t&&(t.style.display="none")),window.addEventListener("load",()=>{const s=document.querySelector("body > *:not(.page-loader)");s&&s.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),t&&t.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const Pe={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const t=o=>o.split("").map(r=>r.charCodeAt(0)),s=o=>("0"+Number(o).toString(16)).substr(-2),a=o=>t(this._key).reduce((r,l)=>r^l,o);return e.split("").map(t).map(a).map(s).join("")}catch(t){return console.error("Encryption Failed",t),null}},decrypt:function(e){try{const t=a=>a.split("").map(o=>o.charCodeAt(0)),s=a=>t(this._key).reduce((o,r)=>o^r,a);return e.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(s).map(a=>String.fromCharCode(a)).join("")}catch(t){return console.error("Decryption Failed",t),null}}};function br(){document.querySelectorAll(".login-form-shared").forEach(t=>{const s=t.querySelector('input[name="username"]'),a=t.querySelector('input[name="password"]'),o=t.querySelector('input[name="rememberMe"]');if(s&&a&&o){const r=localStorage.getItem("secure_user"),l=localStorage.getItem("secure_pass");if(r&&l){const i=Pe.decrypt(r),d=Pe.decrypt(l);i&&d&&(s.value=i,a.value=d,o.checked=!0)}}t.addEventListener("submit",async r=>{r.preventDefault();try{const i=await(await fetch(`${me()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.value,password:a.value})})).json();if(i.success){o.checked?(localStorage.setItem("secure_user",Pe.encrypt(s.value)),localStorage.setItem("secure_pass",Pe.encrypt(a.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const d=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(i.user));const u=document.getElementById("drawer-login");if(u){u.classList.add("translate-y-full");const g=u.querySelector("[data-drawer-hide]");g&&g.click()}await kt(d),St(d)}else{const d=document.getElementById("drawer-login");d?(d.classList.add("translate-y-full"),setTimeout(()=>{tt(),setTimeout(()=>{d.classList.remove("translate-y-full"),a.value="",a.focus()},600)},400)):(tt(),a.value="",a.focus())}}catch(l){console.error("Login Error:",l),M.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function St(e=!1){const t=document.getElementById("left-panel"),s=document.getElementById("right-panel"),a=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");a&&(a.style.opacity="0"),o&&(o.style.opacity="0");const r=document.createElement("div");r.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const l=e?"":"animate__delay-1s",i=e?"animation-duration: 0.8s;":"animation-duration: 2s;";r.innerHTML=`
        <img src="${me()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${l}" style="${i}" alt="DOLE Logo">
    `,document.body.appendChild(r);const d=e?0:1e3,u=e?600:1500;setTimeout(()=>{t&&t.classList.add("animate-slide-left"),s&&s.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${me()}frontend/dashboard/`},u)},d)}function mr(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${me()}`})}function hr(){const e=document.getElementById("mobile-splash"),t=document.getElementById("show-login-btn"),s=document.getElementById("back-to-splash"),a=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),r=document.getElementById("reopen-login-drawer"),l=document.getElementById("request-notifications-btn"),i=async()=>{if("Notification"in window){const h=await Notification.requestPermission();console.log("Notification permission:",h),h==="granted"&&l&&l.classList.add("hidden")}};Notification.permission==="default"&&l&&(l.classList.remove("hidden"),l.addEventListener("click",i));const d=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&i();const h=document.getElementById("drawer-login");h&&h.classList.remove("translate-y-full")},800))},u=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};t&&t.addEventListener("click",d),document.querySelectorAll(".forgot-password-link").forEach(h=>{h.addEventListener("click",w=>{w.target.closest("#mobile-splash")&&d()})}),s&&s.addEventListener("click",()=>{const h=document.getElementById("drawer-login");if(h){h.classList.add("translate-y-full");const w=h.querySelector("[data-drawer-hide]");w&&w.click()}u()});const f=document.getElementById("drawer-login"),S=document.getElementById("curved-welcome"),c=document.getElementById("peoples-bg");f&&new MutationObserver(w=>{w.forEach(x=>{x.attributeName==="class"&&(f.classList.contains("translate-y-full")?(a&&(a.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),S&&(S.style.opacity="0",S.style.transform="scale(0.5)"),r&&e&&e.style.visibility==="hidden"&&(r.style.opacity="1",r.style.transform="scale(1)"),c&&(c.classList.add("opacity-0","scale-0"),c.classList.remove("opacity-40","scale-[1.6]"))):(a&&(a.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),S&&(S.style.opacity="1",S.style.transform="scale(1)"),r&&(r.style.opacity="0",r.style.transform="scale(0)"),c&&(c.classList.remove("opacity-0","scale-0"),c.classList.add("opacity-40","scale-[1.6]"))))})}).observe(f,{attributes:!0})}const Be=()=>"false".toLowerCase()==="true";function Et(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const $e={debug(...e){Be()&&console.debug(...e)},info(...e){Be()&&console.info(...e)},warn(...e){Be()&&console.warn(...e)},error(...e){console.error(...e)},table(e){Be()&&console.table(e)},json(e,t){Be()&&console.debug(e,Et(t))}},He=new Map;async function je(e,t={}){const a=`${me()}${e}`;let o=null;try{const g=JSON.parse(localStorage.getItem("user"));g&&(o=g.user_id||g.id||null)}catch{}const r={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...t.headers},...t},i=(r.method||"GET").toUpperCase()==="GET"?2:1;let d=null;for(let g=1;g<=i;g++)try{if($e.debug("[API] Request",{url:a,method:r.method||"GET",hasUserId:!!o}),r.body)try{$e.json("[API] Payload",JSON.parse(r.body))}catch{$e.debug("[API] Payload (raw)",r.body)}const f=await fetch(a,r);if(!f.ok)throw new Error(`HTTP ${f.status}: ${f.statusText}`);const S=await f.json();return He.has(a)&&(He.delete(a),$e.info?.("[API] Recovered",{url:a})),$e.debug("[API] Response",{url:a,ok:!0}),{success:!0,data:S}}catch(f){if(d=f,f instanceof TypeError&&/fetch/i.test(f.message||"")&&g<i){await new Promise(h=>setTimeout(h,1200));continue}}return d instanceof TypeError&&/fetch/i.test(d.message||"")?He.get(a)||(He.set(a,!0),$e.error("API Request Network Error (suppressed for repeats):",{url:a,message:d.message})):$e.error("API Request Error:",d),{success:!1,error:d?.message||"Unknown request error"}}async function ce(e){return je(e,{method:"GET"})}async function We(e,t){return je(e,{method:"POST",body:JSON.stringify(t)})}async function $t(e,t){return je(e,{method:"PUT",body:JSON.stringify(t)})}async function xr(e,t){const s=new URLSearchParams(t).toString();return je(`${e}?${s}`,{method:"PATCH"})}class Lt{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(t,s,a=1e4){this.stop(t),s();const o=setInterval(async()=>{this.isPageVisible&&await s()},a);this.intervals.set(t,o),console.log(`[Polling] Started: ${t} (every ${a}ms)`)}stop(t){this.intervals.has(t)&&(clearInterval(this.intervals.get(t)),this.intervals.delete(t),console.log(`[Polling] Stopped: ${t}`))}stopAll(){this.intervals.forEach((t,s)=>this.stop(s)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const Ct=new Lt;function vr(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function yr(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{Ct.stopAll()});const rt="dole-gip-db",Dt=2,J={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let Fe=null;function xe(){return Fe?Promise.resolve(Fe):new Promise((e,t)=>{const s=indexedDB.open(rt,Dt);s.onupgradeneeded=a=>{const o=a.target.result;if(!o.objectStoreNames.contains(J.BENEFICIARIES)){const r=o.createObjectStore(J.BENEFICIARIES,{keyPath:"id"});r.createIndex("name","name",{unique:!1}),r.createIndex("office","office",{unique:!1}),r.createIndex("remarks","remarks",{unique:!1})}o.objectStoreNames.contains(J.SYNC_QUEUE)||o.createObjectStore(J.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),o.objectStoreNames.contains(J.METADATA)||o.createObjectStore(J.METADATA,{keyPath:"key"}),o.objectStoreNames.contains(J.APP_CACHE)||o.createObjectStore(J.APP_CACHE,{keyPath:"key"})},s.onsuccess=a=>{Fe=a.target.result,console.log("[DB] IndexedDB opened:",rt),e(Fe)},s.onerror=a=>{console.error("[DB] Failed to open IndexedDB:",a.target.error),t(a.target.error)}})}async function Oe(e){const t=await xe();return new Promise((s,a)=>{const o=t.transaction(J.BENEFICIARIES,"readwrite"),r=o.objectStore(J.BENEFICIARIES);r.clear(),e.forEach(l=>{const i={...l,id:l.id||l.gip_id};r.put(i)}),o.oncomplete=()=>{At("beneficiaries_last_sync",Date.now()),console.log(`[DB] Cached ${e.length} beneficiaries locally`),s(e.length)},o.onerror=()=>a(o.error)})}async function ze(){const e=await xe();return new Promise((t,s)=>{const r=e.transaction(J.BENEFICIARIES,"readonly").objectStore(J.BENEFICIARIES).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>s(r.error)})}async function wr(e){const t=await xe();return new Promise((s,a)=>{const r=t.transaction(J.BENEFICIARIES,"readwrite").objectStore(J.BENEFICIARIES),l={...e,id:e.id||e.gip_id},i=r.put(l);i.onsuccess=()=>s(i.result),i.onerror=()=>a(i.error)})}async function kr(e){const t=await xe();return new Promise((s,a)=>{const l=t.transaction(J.BENEFICIARIES,"readwrite").objectStore(J.BENEFICIARIES).delete(e);l.onsuccess=()=>s(),l.onerror=()=>a(l.error)})}async function It(){const e=await ut("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function Sr(e,t,s){const a=await xe();return new Promise((o,r)=>{const i=a.transaction(J.SYNC_QUEUE,"readwrite").objectStore(J.SYNC_QUEUE),d={method:e,endpoint:t,payload:s,status:"pending",attempts:0,createdAt:Date.now(),lastAttempt:null},u=i.add(d);u.onsuccess=()=>{console.log(`[SyncQueue] Enqueued ${e} ${t} (id: ${u.result})`),o(u.result)},u.onerror=()=>r(u.error)})}async function et(){const e=await xe();return new Promise((t,s)=>{const l=e.transaction(J.SYNC_QUEUE,"readonly").objectStore(J.SYNC_QUEUE).index("status").getAll("pending");l.onsuccess=()=>t(l.result||[]),l.onerror=()=>s(l.error)})}async function Er(e,t,s={}){const a=await xe();return new Promise((o,r)=>{const i=a.transaction(J.SYNC_QUEUE,"readwrite").objectStore(J.SYNC_QUEUE),d=i.get(e);d.onsuccess=()=>{const u=d.result;if(!u)return o();const g={...u,status:t,lastAttempt:Date.now(),attempts:(u.attempts||0)+1,...s},f=i.put(g);f.onsuccess=()=>o(),f.onerror=()=>r(f.error)},d.onerror=()=>r(d.error)})}async function $r(e){const t=await xe();return new Promise((s,a)=>{const l=t.transaction(J.SYNC_QUEUE,"readwrite").objectStore(J.SYNC_QUEUE).delete(e);l.onsuccess=()=>s(),l.onerror=()=>a(l.error)})}async function Lr(){return(await et()).length}async function At(e,t){const s=await xe();return new Promise((a,o)=>{const i=s.transaction(J.METADATA,"readwrite").objectStore(J.METADATA).put({key:e,value:t});i.onsuccess=()=>a(),i.onerror=()=>o(i.error)})}async function ut(e){const t=await xe();return new Promise((s,a)=>{const l=t.transaction(J.METADATA,"readonly").objectStore(J.METADATA).get(e);l.onsuccess=()=>s(l.result?.value??null),l.onerror=()=>a(l.error)})}function Bt(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function Mt(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch(t){return console.error("[DB] Failed to decrypt local cache",t),null}}async function Nt(e,t){const s=await xe();return new Promise((a,o)=>{const l=s.transaction(J.APP_CACHE,"readwrite").objectStore(J.APP_CACHE),i={key:e,data:Bt(t),updated_at:Date.now()},d=l.put(i);d.onsuccess=()=>{console.log(`[DB] Securely cached offline data for: ${e}`),a()},d.onerror=()=>o(d.error)})}async function Ot(e){const t=await xe();return new Promise((s,a)=>{const l=t.transaction(J.APP_CACHE,"readonly").objectStore(J.APP_CACHE).get(e);l.onsuccess=()=>{l.result&&l.result.data?s(Mt(l.result.data)):s(null)},l.onerror=()=>a(l.error)})}async function Tt(){const[e,t]=await Promise.all([ze(),et()]),s=await ut("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:s?new Date(s).toLocaleString():"Never"}}window.__doleDB={getStats:Tt,getLocalBeneficiaries:ze,getPendingSyncItems:et,setSecureCache:Nt,getSecureCache:Ot};const De=["Local Employment Unit (LEU)","Labor Standards Unit (LSU)","Internal Management Services Unit (IMSU)","Wellfare Workers Unit (WWU)","Labor Relation Unit (LRU)","Information Technology Unit (IT)"],ie=()=>document.documentElement.classList.contains("dark"),Xe=()=>ie()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},fe={royalBlue:()=>ie()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(ie(),"#94a3b8")},Me=()=>ie()?"#475569":"#cbd5e1";let Ne=null;function Ve(e){const s=`; ${document.cookie}`.match(new RegExp(`;\\s*${e}=([^;]+)`));return s?decodeURIComponent(s[1]):null}function Ge(e,t,s){let a=new Date;a.setTime(a.getTime()+s*24*60*60*1e3),document.cookie=`${e}=${encodeURIComponent(t)};expires=${a.toUTCString()};path=/`}let re=Ve("user_workforce_filter")||"ALL",pt=Ve("user_workforce_label")||"Overall Stats",_e=Ve("user_gender_filter")||"ALL",gt=Ve("user_gender_label")||"All Years";function he(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const a=new Date(`${t}T00:00:00`);return isNaN(a.getTime())?null:a}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const a=t.replace(" ","T"),o=new Date(a);return isNaN(o.getTime())?null:o}const s=new Date(t);return isNaN(s.getTime())?null:s}function ft(e){const t=Number.parseInt(e?.age,10);if(Number.isInteger(t)&&t>=0)return t;const s=he(e?.birthday);if(!s)return null;const a=new Date;let o=a.getFullYear()-s.getFullYear();const r=a.getMonth()-s.getMonth();return(r<0||r===0&&a.getDate()<s.getDate())&&o--,o>=0?o:null}function Rt(e){const t=String(e||"").trim(),s=t.match(/\(([A-Z]{2,8})\)\s*$/i)?.[1];return s?s.toUpperCase():/information technology/i.test(t)?"IT":t.length>18?`${t.slice(0,16)}...`:t}function _t(e){const t=String(e||"").trim().toUpperCase().split(" ").filter(Boolean).join(" ");if(!t||["N/A","NA","NONE","UNASSIGNED"].includes(t))return null;const s=De.find(r=>r.toUpperCase()===t);if(s)return s;const a=De.find(r=>{const l=r.lastIndexOf("("),i=r.lastIndexOf(")"),d=l>=0&&i>l?r.slice(l+1,i).toUpperCase():"";return d&&(t===d||t.endsWith("("+d+")"))});return a||{"INFORMATION TECHNOLOGY":"Information Technology Unit (IT)","WELFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)","WELLFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)"}[t]||null}function jt(e,t){const s=/^\d{4}$/.test(String(t||""))?Number(t):null,a=Array.from({length:12},()=>({total:0,ages:new Map,ageGroups:{"18-24":0,"25-30":0,"31-40":0,"41+":0}}));return e.forEach(o=>{const r=he(o.createdAt),l=ft(o);if(!r||!Number.isInteger(l)||l<18||s&&r.getFullYear()!==s)return;const i=a[r.getMonth()];i.total++,i.ages.set(l,(i.ages.get(l)||0)+1),l<=24?i.ageGroups["18-24"]++:l<=30?i.ageGroups["25-30"]++:l<=40?i.ageGroups["31-40"]++:i.ageGroups["41+"]++}),a.map((o,r)=>({month:new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2024,r,1)).toUpperCase(),totalAdded:o.total,ageGroups:o.ageGroups,exactAges:[...o.ages.entries()].sort((l,i)=>l[0]-i[0])}))}function ot(e){return e.reduce((t,s)=>{const a=he(s.createdAt);return a?Math.max(t,a.getFullYear()):t},0)}const at={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function Ye(e=!1){if(localStorage.getItem("isLoggedIn")!=="true"||!document.getElementById("workforce-chart"))return;let t=[];if(e&&(Ne=null),Ne)t=Ne;else{const[p,y]=await Promise.all([ze(),It()]);if(p.length>0&&y<6e4)t=p,Ne=t,console.log(`[Charts] IndexedDB hit — ${t.length} records (${Math.round(y/1e3)}s old)`);else try{const E=await ce("api/beneficiaries.php?all=true");if(E.success&&E.data?.success&&E.data?.beneficiaries)t=E.data.beneficiaries,Ne=t,Oe(t).catch(()=>{}),console.log(`[Charts] API fetch — cached ${t.length} records to IndexedDB`);else{console.debug("[CHARTS] Skipping chart render:",E.data?.error||E.error);return}}catch(E){console.debug("[CHARTS] Chart init skipped:",E?.message);return}}if(t.length===0)return;Yt();const s=Xe();document.querySelectorAll('[id$="-chart"]').forEach(n=>n.innerHTML="");const a=[...new Set(t.map(n=>{const p=n.startDate||n.createdAt,y=he(p);return y?y.getFullYear().toString():null}).filter(n=>n))].sort((n,p)=>p-n);qt(a,t),Gt(a,t);const o=new Date;let r=t;re!=="ALL"&&(r=t.filter(n=>{if(re.includes("D")){const p=he(n.createdAt);if(!p)return!1;const y=parseInt(re),E=new Date;return E.setDate(o.getDate()-y),E.setHours(0,0,0,0),p>=E}else if(a.includes(re)){const p=he(n.startDate||n.createdAt);return p?p.getFullYear().toString()===re:!1}return!0}));const l=Ze(t),i=Ze(r);Ut(l,i);let d=[];if(re==="ALL"){const p=new Date().getFullYear();for(let y=2020;y<=p;y++)d.push(y.toString())}else if(a.includes(re))d=["Q1","Q2","Q3","Q4"];else{const n=parseInt(re)||7;d=Array.from({length:n},(p,y)=>{const E=new Date;return E.setDate(o.getDate()-(n-1-y)),new Date(E.getTime()-E.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const u={};d.forEach(n=>u[n]=0),r.forEach(n=>{const p=n.startDate||n.createdAt;if(p){const y=he(p);if(!y)return;const E=y.getFullYear().toString(),L=new Date(y.getTime()-y.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(re==="ALL")u.hasOwnProperty(E)&&u[E]++;else if(re.includes("D"))u.hasOwnProperty(L)&&u[L]++;else if(E===re){const B="Q"+(Math.floor(y.getMonth()/3)+1);u.hasOwnProperty(B)&&u[B]++}}});const g=Object.values(u),f=r.length,S=g[g.length-1]||0,c=g[g.length-2]||0;let h;if(re==="ALL"){const n=f/d.length;h=S>=n}else h=S>=c;let w=h?fe.successGreen:fe.philippineRed,x=h?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",$=h?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";re==="ALL"?(w=fe.successGreen,x="bg-green-500 shadow-green-500/30",$="text-green-600 dark:text-green-400"):re==="7D"?(w="#fb923c",x="bg-orange-500 shadow-orange-500/30",$="text-orange-500 dark:text-orange-400"):re==="30D"?(w="#eab308",x="bg-yellow-500 shadow-yellow-500/30",$="text-yellow-600 dark:text-yellow-400"):re==="90D"?(w="#2563eb",x="bg-blue-600 shadow-blue-600/30",$="text-blue-600 dark:text-blue-400"):a.includes(re)&&(w="#f87171",x="bg-red-400 shadow-red-400/30",$="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(n=>{n.textContent=f,n.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${$}`});const C=c>0?Math.round((S-c)/c*100):S>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(n=>n.textContent=(C>=0?"+":"")+(re==="ALL"?"Growth":C+"%"));const X=document.getElementById("added-metric-badge");X&&(X.className=`flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${x}`);const K=document.getElementById("added-metric-icon");K&&(K.style.transform=h?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(n=>{const p=document.getElementById(n);p&&(p.innerHTML=`${pt} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const te={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:ie()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:w,opacity:.6},{offset:100,color:w,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[w]},series:[{name:"New Beneficiaries",data:g}],xaxis:{categories:d,labels:{show:!0,style:{colors:s.muted,fontSize:"0.625rem",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:s.muted,fontSize:"0.625rem",fontWeight:600}}},grid:{show:!0,borderColor:s.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[w],markers:{size:d.length>20?0:4,colors:[w],strokeColors:s.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:ie()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};Le("workforce-chart",te);const ne=_e==="ALL"?t:t.filter(n=>{const p=he(n.startDate||n.createdAt);return p&&p.getFullYear().toString()===_e}),ge=Ze(ne),pe={series:[ge.genders.Female||0,ge.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:s.cardBg},colors:[fe.philippineRed,fe.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"0.75rem",fontWeight:600,color:s.muted},value:{show:!0,fontSize:"1.5rem",fontWeight:900,color:s.text,formatter:n=>n},total:{show:!0,label:"TOTAL",fontSize:"0.625rem",fontWeight:800,color:s.muted,formatter:n=>n.globals.seriesTotals.reduce((p,y)=>p+y,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[s.cardBg],width:4},theme:{mode:ie()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"1.125rem"}}}}}}}]};Le("gender-chart",pe);const be=[{key:"College Grad",label:"College Graduate",count:i.education["College Grad"]||0,color:fe.royalBlue()},{key:"College Lvl",label:"College Level",count:i.education["College Lvl"]||0,color:fe.goldenYellow},{key:"HS Grad",label:"High School",count:i.education["HS Grad"]||0,color:fe.philippineRed},{key:"Senior High",label:"Senior High",count:i.education["Senior High"]||0,color:fe.successGreen}],Q=be.reduce((n,p)=>n+p.count,0),ue=[...be].sort((n,p)=>p.count-n.count||n.label.localeCompare(p.label)),ve=ue[0];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([n,p])=>{document.querySelectorAll(p).forEach(y=>{y.textContent=i.education[n]||0})});const N=document.getElementById("education-profile-total"),_=document.getElementById("education-profile-leading");if(N&&(N.textContent=Q),_){const n=Q>0?Math.round(ve.count/Q*100):0;_.textContent=Q>0?`${ve.label} · ${n}%`:"No data",_.title=_.textContent}const j={series:[{name:"Beneficiaries",data:ue.map(n=>({x:n.label,y:n.count,fillColor:n.color}))}],chart:{height:285,type:"bar",toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:s.cardBg},plotOptions:{bar:{horizontal:!0,distributed:!0,barHeight:"48%",dataLabels:{position:"top"},borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,formatter:n=>Math.round(n),offsetX:12,offsetY:4,textAnchor:"start",style:{fontSize:"0.625rem",fontWeight:900,colors:[s.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.9,borderWidth:0}},xaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{colors:s.muted,fontSize:"0.5625rem",fontWeight:700}},axisBorder:{show:!1},axisTicks:{show:!1},title:{text:"TOTAL BENEFICIARIES",style:{color:s.muted,fontSize:"0.5625rem",fontWeight:800}}},yaxis:{labels:{minWidth:118,maxWidth:180,trim:!1,style:{colors:s.text,fontSize:"0.6875rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:10,right:58,bottom:-4,left:8}},legend:{show:!1},tooltip:{theme:ie()?"dark":"light",y:{formatter:n=>{const p=Q>0?Math.round(n/Q*100):0;return`${n} beneficiaries (${p}% of recorded)`}}},noData:{text:"NO EDUCATION DATA",style:{color:s.muted,fontSize:"11px"}},theme:{mode:ie()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:285},yaxis:{labels:{minWidth:96,maxWidth:132,trim:!1,style:{fontSize:"0.625rem"}}},dataLabels:{style:{fontSize:"0.5625rem"}}}}]};Le("education-chart",j),document.querySelectorAll(".count-absorbed").forEach(n=>n.textContent=i.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(n=>n.textContent=i.status.ONGOING||0);const z={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:i.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:i.status.ONGOING||0},{x:"Expired",y:i.status.EXPIRED||0},{x:"Resigned",y:i.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"0.75rem",fontWeight:"900",colors:[s.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:s.muted,fontWeight:700}}},yaxis:{show:!0,labels:{show:!1}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:20,right:8,bottom:0,left:8}},tooltip:{theme:ie()?"dark":"light",y:{formatter:n=>n+" Beneficiaries"}},theme:{mode:ie()?"dark":"light"}};Le("status-chart",z);const G=new Map(Object.entries(l.designations).map(([n,p])=>[n.trim().toUpperCase(),p])),V=new Map(De.map((n,p)=>[n,p])),oe=De.map(n=>[n,G.get(n.toUpperCase())||0]).sort((n,p)=>p[1]-n[1]||V.get(n[0])-V.get(p[0])),ae=oe.map(([n])=>n),W={series:[{name:"Total GIP",data:oe.map(([,n])=>n)}],chart:{type:"bar",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:s.cardBg},colors:[fe.royalBlue()],plotOptions:{bar:{horizontal:!1,columnWidth:"34%",borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,offsetY:-14,formatter:n=>Math.round(n),style:{fontSize:"0.625rem",fontWeight:900,colors:[s.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.86,borderWidth:0}},xaxis:{categories:ae,axisBorder:{show:!1},axisTicks:{show:!1},labels:{rotate:0,trim:!1,hideOverlappingLabels:!1,formatter:n=>Rt(n),style:{fontWeight:800,colors:s.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:s.muted,fontSize:"0.5625rem"}},title:{text:"TOTAL COUNT",style:{color:s.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:2,right:4,bottom:-4}},legend:{show:!1},tooltip:{theme:ie()?"dark":"light",x:{formatter:(n,p)=>ae[p.dataPointIndex]||"Assigned Unit"},y:{formatter:n=>`${n} Beneficiaries`}},theme:{mode:ie()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:210},plotOptions:{bar:{columnWidth:"46%"}},dataLabels:{style:{fontSize:"0.5rem"}},xaxis:{labels:{style:{fontSize:"0.5rem"}}}}}]};Le("assigned-units-chart",W),Pt(oe);const ee=(/^\d{4}$/.test(re)?Number(re):0)||ot(r)||ot(t)||new Date().getFullYear(),b=jt(r,ee),k=document.getElementById("age-chart-year");k&&(k.textContent=ee);const v=[{key:"18-24",label:"AGE 18–24"},{key:"25-30",label:"AGE 25–30"},{key:"31-40",label:"AGE 31–40"},{key:"41+",label:"AGE 41+"}],I={series:v.map(n=>({name:n.label,data:b.map(p=>p.ageGroups[n.key])})),chart:{type:"bar",stacked:!0,height:330,toolbar:{show:!1},zoom:{enabled:!1},fontFamily:"Montserrat, sans-serif",background:s.cardBg},colors:["#0038A8","#2563EB","#60A5FA","#93C5FD"],plotOptions:{bar:{horizontal:!1,columnWidth:"54%",borderRadius:2,borderRadiusApplication:"end",dataLabels:{total:{enabled:!0,offsetY:-8,style:{fontSize:"0.625rem",fontWeight:900,color:s.text}}}}},dataLabels:{enabled:!0,formatter:n=>n>0?Math.round(n):"",style:{fontSize:"0.5625rem",fontWeight:900,colors:["#ffffff","#ffffff","#0f172a","#0f172a"]},dropShadow:{enabled:!1}},xaxis:{categories:b.map(n=>n.month),axisBorder:{show:!0,color:s.grid},axisTicks:{show:!1},title:{text:"MONTH ADDED",style:{color:s.muted,fontSize:"0.5625rem",fontWeight:800}},labels:{rotate:-40,trim:!1,hideOverlappingLabels:!1,style:{fontWeight:800,colors:s.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:s.muted,fontSize:"0.625rem"}},title:{text:"TOTAL BENEFICIARIES",style:{color:s.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:8,right:12,bottom:4}},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"10px",fontWeight:800,labels:{colors:s.muted},markers:{size:5,shape:"square"},itemMargin:{horizontal:8,vertical:3}},tooltip:{shared:!0,intersect:!1,theme:ie()?"dark":"light",custom:({dataPointIndex:n})=>{const p=b[n],y=v.map(L=>`${L.label}: <strong>${p?.ageGroups[L.key]||0}</strong>`).join("<br>"),E=p?.exactAges?.length?p.exactAges.map(([L,B])=>`Age ${L}: ${B}`).join(" · "):"No recorded ages";return`<div class="px-3 py-2 text-xs leading-5"><strong>${p?.month||""} ${ee}</strong><br>Total: <strong>${p?.totalAdded||0}</strong><br>${y}<div class="mt-1 border-t border-slate-200 pt-1 text-[10px] dark:border-slate-600">${E}</div></div>`}},noData:{text:"NO AGE DATA",align:"center",verticalAlign:"middle",style:{color:s.muted,fontSize:"11px"}},theme:{mode:ie()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:360},plotOptions:{bar:{columnWidth:"66%"}},dataLabels:{enabled:!1},xaxis:{labels:{rotate:-55,style:{fontSize:"0.5rem"}}},legend:{fontSize:"9px",itemMargin:{horizontal:5,vertical:2}}}}]};Le("age-chart",I);const D=Ht(t);Ft(D);const m={series:[{name:"Actual Beneficiaries",data:Object.values(D.municipalityData).map(n=>n.actual)},{name:"Target Slots",data:Object.values(D.municipalityData).map(n=>n.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:s.cardBg},theme:{mode:ie()?"dark":"light"},colors:[fe.royalBlue(),ie()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(D.municipalityData),labels:{style:{fontWeight:600,colors:s.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:s.muted}}},legend:{show:!1},fill:{opacity:1},grid:{show:!0,borderColor:Me(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}}};Le("performance-gap-chart",m)}function Pt(e){const t=document.getElementById("assigned-units-summary");t&&(t.innerHTML=e.map(([s,a],o)=>`
        <div class="flex min-w-0 items-center justify-between gap-3 border border-slate-100 bg-slate-50/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50">
            <div class="flex min-w-0 items-center gap-2">
                <span class="inline-flex h-5 min-w-5 shrink-0 items-center justify-center bg-royal-blue text-[0.5625rem] font-black text-white">${o+1}</span>
                <span class="break-words text-[0.625rem] font-black uppercase leading-relaxed tracking-tight text-slate-600 dark:text-slate-300" title="${s}">${s}</span>
            </div>
            <span class="inline-flex min-w-7 shrink-0 items-center justify-center bg-white px-2 py-1 text-xs font-black tabular-nums text-royal-blue shadow-sm dark:bg-slate-800 dark:text-blue-400">${a}</span>
        </div>
    `).join(""))}function Le(e,t){const s=document.getElementById(e);if(!s)return;s.innerHTML="",new Je(s,t).render()}function Ze(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},exactAges:{},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},s=new Date;return s.setHours(0,0,0,0),e.forEach(a=>{const o=a.office||"Unassigned";t.offices[o]=(t.offices[o]||0)+1;const r=(a.gender||"Unknown").trim(),l=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[l]++;const i=String(a.education||"").trim().toUpperCase().replace(/\s+/g," "),d=i.includes("COLLEGE")&&i.includes("GRADUATE")||i.includes("BACHELOR")||i.includes("DEGREE")||/(^|\s)(BS|AB)(\s|$)/.test(i);i.includes("SENIOR HIGH")?t.education["Senior High"]++:d?t.education["College Grad"]++:i.includes("COLLEGE")?t.education["College Lvl"]++:(i.includes("HIGH SCHOOL")||/(^|\s)HS(\s|$)/.test(i))&&t.education["HS Grad"]++;const u=_t(a.designation);u&&(t.designations[u]=(t.designations[u]||0)+1);const g=(a.remarks||a.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),f=!!a.absorbDate;if(g.includes("ABSORBED")||f)t.status.ABSORBED++;else if(g.includes("RESIGNED"))t.status.RESIGNED++;else if(g==="ONGOING"||g.includes("ONGOING")||g.includes("ACTIVE")||a.status_id==1)t.status.ONGOING++;else if(g.includes("EXPIRED"))t.status.EXPIRED++;else{let c=!1;if(a.endDate){const h=he(a.endDate);h&&h<s&&(c=!0)}c?t.status.EXPIRED++:t.status.ONGOING++}const S=ft(a);Number.isInteger(S)&&(t.totalAge+=S,t.ageCount++,t.exactAges[S]=(t.exactAges[S]||0)+1,S>=18&&S<=24?t.ages["18-24"]++:S>=25&&S<=30?t.ages["25-30"]++:S>=31&&S<=40?t.ages["31-40"]++:S>=41&&t.ages["41+"]++)}),t}function Ht(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(at).forEach(([s,a])=>{t.municipalityData[s]={actual:0,target:a},t.totalTarget+=a}),e.forEach(s=>{const a=(s.office||"").toUpperCase();let o="OTHER";for(const l in at)if(a.includes(l)){o=l;break}if(t.municipalityData[o]&&(t.municipalityData[o].actual++,t.totalActual++),(s.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,s.createdAt&&s.startDate){const l=new Date(s.createdAt),i=new Date(s.startDate),d=Math.ceil((i-l)/(1e3*60*60*24));d>=0&&d<180&&(t.velocity.totalDays+=d,t.velocity.count++)}}),t}function Ft(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(r=>{r.textContent=t+"%";const l=r.parentElement?.nextElementSibling?.firstElementChild;l&&(l.style.width=t+"%")});const s=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(r=>r.textContent=s);const a=e.retention.count+e.retention.resign,o=a>0?(e.retention.count/a*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(r=>r.textContent=o+"%")}function Ut(e,t){const s=Object.values(e.offices).reduce((u,g)=>u+g,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(u=>u.textContent=s);const a=e.genders.Female||0,o=e.genders.Male||0;document.querySelectorAll(".metric-female-ratio").forEach(u=>u.textContent=a.toLocaleString()),document.querySelectorAll(".metric-male-ratio").forEach(u=>u.textContent=o.toLocaleString());const r=u=>{const[g,f]=Object.entries(u.exactAges||{}).sort((c,h)=>h[1]-c[1]||Number(c[0])-Number(h[0]))[0]||[null,0],S=u.ageCount>0?f/u.ageCount*100:0;return{age:g,count:f,percentage:S}},l=u=>`${Number.isInteger(u)?u.toFixed(0):u.toFixed(1)}%`,i=r(e);document.querySelectorAll(".metric-top-age-label").forEach(u=>{u.textContent=i.age===null?"N/A":`${i.age} YRS`}),document.querySelectorAll(".metric-top-age-share").forEach(u=>{u.textContent=`${l(i.percentage)} of recorded ages`});const d=r(t);document.querySelectorAll(".metric-top-age").forEach(u=>{u.textContent=d.age===null?"N/A":d.age}),document.querySelectorAll(".metric-filtered-top-age-share").forEach(u=>{u.textContent=`${l(d.percentage)} of filtered ages`})}function qt(e,t){const s=document.querySelector("#lastDaysdropdown ul");if(!s)return;const a=t.length,o=new Date,r=d=>{const u=new Date;return u.setDate(o.getDate()-d),u.setHours(0,0,0,0),t.filter(g=>{const f=he(g.createdAt);return f&&f>=u}).length},l=d=>t.filter(u=>{const g=he(u.startDate||u.createdAt);return g&&g.getFullYear().toString()===d}).length;let i=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${re==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${a}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${re==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${re==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${re==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(d=>{const u=l(d);i+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${d}', 'Year ${d}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${re===d?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${d}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${u}</span>
            </a>
        </li>`}),s.innerHTML=i}function Gt(e,t){const s=document.getElementById("gender-filter-options"),a=document.getElementById("gender-filter-button");if(!s||!a)return;const o=t.length,r=i=>t.filter(d=>{const u=he(d.startDate||d.createdAt);return u&&u.getFullYear().toString()===i}).length;let l=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${_e==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${o}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(i=>{const d=r(i);l+=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${i}', 'Year ${i}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${_e===i?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${i}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${d}</span>
            </a>
        </li>
        `}),s.innerHTML=l,a.innerHTML=`${gt} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function zt(e,t){re=e,pt=t,Ge("user_workforce_filter",e,30),Ge("user_workforce_label",t,30),["lastDaysdropdown"].forEach(a=>{const o=document.getElementById(a);if(o&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown",a);r&&r.hide()}else o&&o.classList.add("hidden")}),Ye()}function Vt(e,t){_e=e,gt=t,Ge("user_gender_filter",e,30),Ge("user_gender_label",t,30);const s=document.getElementById("gender-filter-dropdown");if(s&&window.FlowbiteInstances){const a=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");a&&a.hide()}else s&&s.classList.add("hidden");Ye()}function Yt(){const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e),s=t.full_name||t.username||"System User",a=t.email||(t.username?`${t.username}@dole.gov.ph`:"user@dole.gov.ph"),o=t.profile_picture_path,r=s.trim().split(" ").map(l=>l[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(l=>l.textContent=s),document.querySelectorAll(".sidebar-user-email").forEach(l=>l.textContent=a),document.querySelectorAll(".sidebar-user-avatar").forEach(l=>{const i=l.querySelector(".sidebar-avatar-initials"),d=l.querySelector(".sidebar-avatar-img");if(o&&d){const u=me(),g=o.startsWith("http")?o:u+o.replace(/^\//,"");d.src=g,d.classList.remove("hidden"),i&&i.classList.add("hidden")}else i&&(i.textContent=r,i.classList.remove("hidden"),d&&d.classList.add("hidden"))})}catch(t){console.error("Failed to parse user data for sidebar:",t)}}window.updateWorkforceFilter=zt;window.updateGenderFilter=Vt;document.addEventListener("themeChanged",()=>{setTimeout(()=>Ye(),50)});window.addEventListener("dataSynced",()=>{console.log("[Charts] Data synced detected, refreshing analytics..."),Ye(!0)});let Ce=null;function Wt(e,t){const s=document.getElementById(t);if(!s)return;if(Ce&&(Ce.destroy(),Ce=null),e.length===0){const u=Xe(),g={series:[1],chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!1}},labels:["No Data"],colors:[u.grid],plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"24px",fontWeight:900,color:u.muted,formatter:()=>"0"},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:u.muted,formatter:()=>"0"}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ie()?["#1e293b"]:["#ffffff"],width:2},tooltip:{enabled:!1},legend:{show:!1}};Ce=new Je(s,g),Ce.render();return}const a={ongoing:0,expired:0,absorbed:0,resigned:0,other:0};e.forEach(u=>{const g=(u.remarks||"").toUpperCase();g==="ONGOING"?a.ongoing++:g==="EXPIRED"?a.expired++:g==="ABSORBED"?a.absorbed++:g==="RESIGNED"?a.resigned++:a.other++});const o=[],r=[],l=[];a.ongoing>0&&(o.push(a.ongoing),r.push("Ongoing"),l.push(fe.successGreen)),a.expired>0&&(o.push(a.expired),r.push("Expired"),l.push(fe.philippineRed)),a.absorbed>0&&(o.push(a.absorbed),r.push("Absorbed"),l.push("#059669")),a.resigned>0&&(o.push(a.resigned),r.push("Resigned"),l.push("#b91c1c")),a.other>0&&(o.push(a.other),r.push("Other"),l.push(fe.mutedSlate()));const i=Xe(),d={series:o,chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!0,easing:"easeinout",speed:800,dynamicAnimation:{enabled:!0,speed:350}}},labels:r,colors:l,plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"10px",fontWeight:800,color:i.muted,offsetY:-5},value:{show:!0,fontSize:"24px",fontWeight:900,color:i.text,offsetY:5},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:i.muted}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ie()?["#1e293b"]:["#ffffff"],width:2},tooltip:{theme:ie()?"dark":"light",style:{fontSize:"12px"}},legend:{show:!1}};Ce=new Je(s,d),Ce.render()}const Zt="modulepreload",Jt=function(e,t){return new URL(e,t).href},st={},bt=function(t,s,a){let o=Promise.resolve();if(s&&s.length>0){let u=function(g){return Promise.all(g.map(f=>Promise.resolve(f).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};const l=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),d=i?.nonce||i?.getAttribute("nonce");o=u(s.map(g=>{if(g=Jt(g,a),g in st)return;st[g]=!0;const f=g.endsWith(".css"),S=f?'[rel="stylesheet"]':"";if(a)for(let h=l.length-1;h>=0;h--){const w=l[h];if(w.href===g&&(!f||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${S}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":Zt,f||(c.as="script"),c.crossOrigin="",c.href=g,d&&c.setAttribute("nonce",d),document.head.appendChild(c),f)return new Promise((h,w)=>{c.addEventListener("load",h),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${g}`)))})}))}function r(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return o.then(l=>{for(const i of l||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};let Se=null;if(Re()){const e="https://llnddycvbcetztzwbdpx.supabase.co",t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{Se=yt(e,t),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(s){console.error("[SUPABASE SDK] Failed to initialize client:",s)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");function Xt(e=new Date().getFullYear()){const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],s=[];for(let a=0;a<12;a++){const o=new Date(e,a+1,0).getDate();s.push(`${t[a]} 1-15, ${e}`),s.push(`${t[a]} 16-${o}, ${e}`)}return s}function Kt(e,t,s){if(s==="ar")return(e.period||"").toUpperCase().trim()===t.toUpperCase().trim();{const a=t.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!a)return!1;const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(a[1].toUpperCase());if(r===-1)return!1;const l=parseInt(a[4]),i=parseInt(a[2]),d=parseInt(a[3]),u=(e.date||"").substring(0,10),g=new Date(u+"T00:00:00");return isNaN(g)?!1:g.getFullYear()===l&&g.getMonth()===r&&g.getDate()>=i&&g.getDate()<=d}}function Qt(e){if(!e)return"-";const t=e.toUpperCase();return t==="VERIFIED"||t==="COMPLETED"?"✓":t==="REJECTED"||t==="DECLINED"?"X":t==="PENDING"?"?":t}function nt(e,t,s,a){const o=e.map(r=>{const l=t[r.id]||[],i=a.map(d=>{const u=l.find(g=>Kt(g,d,s));return u?Qt(u.status):"-"});return{name:r.name||r.id,cells:i}});return{periods:a,rows:o}}function it(e,t,s){const{periods:a,rows:o}=t,r=a.length+1;let l='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return l+=`<tr><td colspan="${r}" style="background:${s};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,l+=`<tr><th style="background:${s};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,a.forEach(i=>{l+=`<th style="background:${s};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${i}</th>`}),l+="</tr>",o.forEach((i,d)=>{const u=d%2===0?"#ffffff":"#f5f5f5";l+="<tr>",l+=`<td style="background:${u};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${i.name}</td>`,i.cells.forEach(g=>{l+=`<td style="background:${u};padding:5px 8px;text-align:center;font-weight:bold;color:${g==="✓"?"#15803d":g==="X"?"#dc2626":"#9ca3af"};">${g}</td>`}),l+="</tr>"}),l+="</table>",l}async function Cr(e){const t="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",s=e.length,a=await M.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
            <div class="font-montserrat text-left">
                <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest mb-4 ps-1">
                    Configure and export logs for <span class="text-royal-blue font-black">${s} beneficiaries</span>
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
                    <input type="number" id="exp-custom-count" min="1" max="${s}" value="${s}"
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(d=>{d.addEventListener("change",()=>{const u=document.getElementById("custom-count-wrap");u.classList.toggle("hidden",d.value!=="custom"||!d.checked);const g=document.querySelector('input[name="exp-count"]:checked');u.classList.toggle("hidden",g?.value!=="custom")})})},preConfirm:()=>{const d=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",u=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let g=parseInt(u==="custom"?document.getElementById("exp-custom-count")?.value||s:u,10);(isNaN(g)||g<1)&&(g=10),g=Math.min(g,s);const f=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:d,count:g,year:f}}});if(!a.isConfirmed||!a.value)return;const{type:o,count:r,year:l}=a.value,i=e.slice(0,r);await mt(i,o,l)}async function mt(e,t,s){M.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const a=Xt(s),o=me();async function r(w){const $=await(await fetch(`${o}api/logs.php?type=${w}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return $.success?$.logs||[]:[]}let l={},i={};(t==="dtr"||t==="both")&&(await r("dtr")).forEach(x=>{const $=String(x.gip_id||x.beneficiary_id||x.id||"");l[$]||(l[$]=[]),l[$].push(x)}),(t==="ar"||t==="both")&&(await r("ar")).forEach(x=>{const $=String(x.gip_id||x.beneficiary_id||x.id||"");i[$]||(i[$]=[]),i[$].push(x)});const d=e.map(w=>({...w,mapKey:String(w.id||w.gip_id||w.beneficiary_id)}));let u="";const g=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(t==="dtr"||t==="both"){const w=d.map($=>({...$,id:$.mapKey})),x=nt(w,l,"dtr",a);u+="<br>"+it(`DTR – Daily Time Records (${s})`,x,"#1d4ed8")}if(t==="ar"||t==="both"){const w=d.map($=>({...$,id:$.mapKey})),x=nt(w,i,"ar",a);u+="<br><br>"+it(`AR – Accomplishment Reports (${s})`,x,"#d97706")}const f=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${g} | DOLE LDNPFO – GIP Monitoring System</p>
                ${u}
            </body>
            </html>
        `,S=new Blob([f],{type:"application/vnd.ms-excel"}),c=URL.createObjectURL(S),h=document.createElement("a");h.href=c,h.download=`GIP_LOGS_${t.toUpperCase()}_${s}.xls`,document.body.appendChild(h),h.click(),URL.revokeObjectURL(c),document.body.removeChild(h),M.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(a){console.error("[LogsExport] Error:",a),M.fire("Error",a.message||"Failed to generate export.","error")}}const Ie="color-theme",er=3600*24*365;function tr(e,t,s){document.cookie=`${e}=${t}; max-age=${s}; path=/; SameSite=Lax`}function ht(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}function xt(){const e=localStorage.getItem(Ie)||ht(Ie);return e==="dark"||e==="light"?e:"light"}function Ue(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem(Ie,e),tr(Ie,e,er),rr(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function Ke(){const e=xt();Ue(e==="dark"?"light":"dark")}function rr(e){const t=e==="dark",s=document.getElementById("pref-dark-mode");s&&(s.checked=t);const a=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");a&&o&&(a.classList.toggle("hidden",t),o.classList.toggle("hidden",!t));const r=document.getElementById("sidebar-theme-label");r&&(r.textContent=t?"LIGHT MODE":"DARK MODE")}function Dr(){const e=xt();Ue(e);const t=document.getElementById("pref-dark-mode");t&&t.addEventListener("change",()=>{Ue(t.checked?"dark":"light")});const s=document.getElementById("theme-toggle-btn");s&&s.addEventListener("click",Ke),document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.addEventListener("click",Ke)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{localStorage.getItem(Ie)||ht(Ie)||Ue(a.matches?"dark":"light")})}function ye(){return document.documentElement.classList.contains("dark")}window.toggleTheme=Ke;window.isDarkMode=ye;const qe={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=ye(),t={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},s=`
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
        `;M.fire({html:s,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:a=>{const o=a.querySelector("#csv-upload"),r=a.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(i=>{r.addEventListener(i,l,!1)});function l(i){i.preventDefault(),i.stopPropagation()}["dragenter","dragover"].forEach(i=>{r.addEventListener(i,()=>{r.classList.add("border-blue-500","bg-blue-50/50"),e&&r.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(i=>{r.addEventListener(i,()=>{r.classList.remove("border-blue-500","bg-blue-50/50"),e&&r.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",i=>{const d=i.target.files[0];if(d){const u=a.querySelector("#auto-save-toggle");this.isAutoSave=u?u.checked:!1,this.handleFile(d)}}),r.addEventListener("drop",i=>{const u=i.dataTransfer.files[0];if(u){const g=a.querySelector("#auto-save-toggle");this.isAutoSave=g?g.checked:!1,this.handleFile(u)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){M.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const t=new FileReader;t.onload=s=>{const a=s.target.result;this.parseCSV(a)},t.readAsText(e)},async parseCSV(e){let t=[],s="",a=!1;for(let o=0;o<e.length;o++){let r=e[o];r==='"'&&(a=!a),!a&&(r===`
`||r==="\r")?(r==="\r"&&e[o+1]===`
`&&o++,s.trim()!==""&&t.push(s),s=""):s+=r}s.trim()!==""&&t.push(s),this.queue=[];for(let o=0;o<t.length;o++){let r=t[o].trim();if(!r)continue;let l=[],i="",d=!1;for(let u=0;u<r.length;u++){let g=r[u];g==='"'?d=!d:g===","&&!d?(l.push(i.replace(/(^"|"$)/g,"").trim()),i=""):i+=g}if(l.push(i.replace(/(^"|"$)/g,"").trim()),l.length>=2){const u=l[3];if(!u||isNaN(parseInt(u)))continue;const g=l[1];if(!g||g.toLowerCase()==="name"||g.toLowerCase()==="full name")continue;const f=l[2];let S=l[4]?l[4].toUpperCase().trim():"",c="";(S==="F"||S.includes("FEMALE"))&&(c="Female"),(S==="M"||S.includes("MALE"))&&(c="Male");const h=l[5],w=l[6],x=l[7],$=this.formatDate(l[8]),C=this.formatDate(l[9]);this.queue.push({name:g,address:f,age:u,gender:c,education:h,startDate:$,endDate:C,office:w,designation:x})}}if(this.queue.length>0){try{M.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{M.showLoading()}});const o=this.queue.map(d=>d.name);let r=null;try{r=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{r=null}const i=await(await fetch(`${me()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...r?{"X-User-Id":String(r)}:{}},body:JSON.stringify({names:o,user_id:r})})).json();if(i.success&&i.duplicates&&i.duplicates.length>0){const d=new Set(i.duplicates.map(g=>g.toLowerCase().trim())),u=this.queue.length;this.queue=this.queue.filter(g=>{const f=d.has(g.name.toLowerCase().trim());return f&&console.warn(`%c[Bulk Add] SKIPPED: ${g.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!f}),console.log(`[Bulk Add] Removed ${u-this.queue.length} duplicates ahead of time.`)}}catch(o){console.error("Bulk duplicate check failed:",o)}if(this.queue.length===0){M.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,M.close(),this.processNext()}else M.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){ye();const e=Math.round(this.currentIndex/this.queue.length*100),t=`
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
        `;if(M.isVisible()&&M.getPopup().querySelector("#bulk-progress-bar")){const s=document.getElementById("bulk-progress-bar"),a=M.getPopup().querySelector("span.text-\\[10px\\]"),o=document.getElementById("bulk-current-name");s&&(s.style.width=`${e}%`),a&&(a.textContent=`${this.currentIndex} / ${this.queue.length}`),o&&(o.textContent=this.queue[this.currentIndex]?.name||"...")}else M.fire({html:t,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:s=>{s.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const t=new Date(e);if(isNaN(t.getTime())){const r=e.split("/");return r.length===3?`${r[2]}-${r[1].padStart(2,"0")}-${r[0].padStart(2,"0")}`:""}const s=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${s}-${a}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const s=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[a,o]=await Promise.all([ce(`api/beneficiaries.php?next_id&year=${s}`),ce(`api/beneficiaries.php?next_series_no&year=${s}`)]);a.success&&a.data?.success&&a.data?.nextId&&(e.gip_id=a.data.nextId,e.id=null),o.success&&o.data?.success&&o.data?.nextSeries&&(e.seriesNo=o.data.nextSeries)}catch(s){console.warn("[Bulk Add] Identifier fetch failed, continuing:",s?.message||s)}const t=await window.addBeneficiaryData(e);this.isActive&&(t?this.onSaveSuccess():Te(e))})():Te(e)):Te(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),M.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,M.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=qe;function lt(e){if(!e)return"";const t=new Date(e),s=new Date;let a=s.getFullYear()-t.getFullYear();const o=s.getMonth()-t.getMonth();return(o<0||o===0&&s.getDate()<t.getDate())&&a--,a>=0?a:0}function or(e){if(!e||e==="N/A")return"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const t=e.toUpperCase();if(t.includes("LGU"))return/ILIGAN/i.test(e)?"bg-yellow-400 text-white border border-yellow-500":"bg-yellow-100 text-yellow-700 border border-yellow-200 dark:!text-white";if(t.includes("DOLE"))return"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white";if(t.includes("DEPED"))return"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white";if(t.includes("DICT"))return"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white";if(t.includes("DOH"))return"bg-red-100 text-red-700 border border-red-200 dark:!text-white";if(t.includes("DSWD"))return"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white";if(t.includes("DTI"))return"bg-green-100 text-green-700 border border-green-200 dark:!text-white";if(t.includes("DPWH"))return"bg-stone-100 text-stone-700 border border-stone-200 dark:!text-white";if(t.includes("DILG"))return"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white";if(t.includes("DOST"))return"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white";if(t.includes("DENR"))return"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white";if(t.includes("CHED"))return"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white";if(t.includes("TESDA"))return"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white";if(t.includes("DOJ"))return"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white";if(t.includes("DOT")||t.includes("TOURISM"))return"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white";if(t.includes("DA")&&!t.includes("DPWH")&&!t.includes("DILG"))return"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white";if(t.includes("PRC"))return"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white";if(t.includes("SSS"))return"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white";if(t.includes("GSIS"))return"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white";if(t.includes("PHIC")||t.includes("PHILHEALTH"))return"bg-blue-200 text-blue-800 border border-blue-300 dark:!text-white";if(t.includes("NBI"))return"bg-zinc-100 text-zinc-700 border border-zinc-200 dark:!text-white";const s=["bg-purple-100 text-purple-700 border border-purple-200","bg-rose-100 text-rose-700 border border-rose-200","bg-amber-100 text-amber-700 border border-amber-200","bg-teal-100 text-teal-700 border border-teal-200","bg-indigo-100 text-indigo-700 border border-indigo-200","bg-lime-100 text-lime-700 border border-lime-200","bg-sky-100 text-sky-700 border border-sky-200","bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200","bg-emerald-100 text-emerald-700 border border-emerald-200","bg-orange-100 text-orange-700 border border-orange-200","bg-pink-100 text-pink-700 border border-pink-200","bg-green-100 text-green-700 border border-green-200","bg-violet-100 text-violet-700 border border-violet-200","bg-cyan-100 text-cyan-700 border border-cyan-200","bg-red-100 text-red-700 border border-red-200"];let a=0;for(let o=0;o<e.length;o++)a=a*31+e.charCodeAt(o)>>>0;return s[a%s.length]+" dark:!text-white"}function ar(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300";const t=e.toUpperCase();return t==="ONGOING"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800":t==="EXPIRED"?"bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800":t==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900":t==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900":"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300"}function dt(e,t=0){e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const s=window.innerWidth<640?"top":"top-start";let a=t;const o=e.arLogs||[],r=e.dtrLogs||[],l=e.docs||[],i=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],d=i.map(c=>{const h=l.find(w=>w.name.toUpperCase()===c.toUpperCase());return h||{name:c,status:"PENDING",id:null}});l.forEach(c=>{i.some(w=>w.toUpperCase()===c.name.toUpperCase())||d.push(c)});const u=`
<div class="border-b border-default pb-4 mb-5 flex flex-col relative w-full pt-4 font-montserrat user-select-none">
    <div class="flex justify-between items-start pe-12">
        <h3 class="text-xl sm:text-2xl font-black text-royal-blue leading-tight mb-1.5 tracking-tight break-words pr-2">${e.name}</h3>
        <button type="button" id="close-drawer-btn" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
           <span class="sr-only">Close drawer</span>
        </button>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-6 w-full">
        <div class="col-span-5 flex flex-col gap-1 text-left">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ID NO.</span>
            <span class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-gray-400 truncate">${e.id}</span>
        </div>
        <div class="col-span-7 flex justify-end overflow-hidden w-full">
            <div class="flex flex-col gap-1 items-start w-auto">
                <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1 flex items-center font-montserrat">
                    REMARKS / OFFICE
                </span>
                <div class="flex items-center gap-2 min-h-[30px] font-montserrat flex-nowrap">
                    <span class="${ar(e.remarks)} text-[0.5625rem] sm:text-[0.625rem] font-black px-2.5 sm:px-4 py-2 rounded-lg border uppercase tracking-widest shadow-sm border-l-4 ${e.remarks==="ONGOING"?"border-l-green-600":"border-l-red-600"} min-w-[80px] sm:min-w-[100px] text-center inline-block whitespace-nowrap">${e.remarks}</span>
                    <span class="${or(e.office)} inline-block text-[0.5625rem] sm:text-[0.625rem] font-black px-2.5 sm:px-4 py-2 rounded-lg border shadow-sm min-w-[80px] sm:min-w-[100px] text-center whitespace-nowrap max-w-full truncate" title="${e.office}">${e.office}</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Persistent Section Header with Small Nav Buttons -->
<div class="flex justify-between items-center mb-4 pb-2 border-b border-default">
    <h4 id="drawer-section-title" class="text-sm font-bold text-heading uppercase tracking-widest">Personal Profile</h4>
    <div class="flex gap-2">
        <button id="drawer-prev-btn" class="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-neutral-secondary-medium text-heading text-[0.5625rem] font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm border border-default-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-tertiary cursor-pointer">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREV
        </button>
        <button id="drawer-next-btn" class="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-brand text-white text-[0.5625rem] font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm shadow-brand-medium/50 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-strong cursor-pointer text-center">
            NEXT
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
        </button>
    </div>
</div>

<div id="personal-profile-section" class="transition-all duration-300">
    <div class="flex flex-col gap-4 text-sm mt-3 px-1 mb-8">
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Contact No.</span>
            <span class="${e.contact?"font-black text-heading font-mono":"font-bold text-gray-300 italic"} truncate text-right">${e.contact||"NOT PROVIDED"}</span>
        </div>
        <div class="flex justify-between items-start group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1">Address</span>
            <span class="font-bold text-heading text-right break-words leading-snug" title="${e.address}">${e.address||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Birthday</span>
            <span class="${e.birthday?"font-black text-heading uppercase text-right":"font-bold text-gray-300 italic text-right"}">${e.birthday||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Age</span>
            <span class="${e.age||lt(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right">${e.age||lt(e.birthday)||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Gender</span>
            <span class="font-black text-heading uppercase text-right">${e.gender||"N/A"}</span>
        </div>
        <div class="flex justify-between items-center group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Education</span>
            <div class="flex items-center gap-2 max-w-[60%] justify-end shrink-0 min-w-0">
                <div class="w-6 h-6 rounded bg-golden-yellow/10 flex items-center justify-center text-golden-yellow border border-golden-yellow/20 shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
                <span class="text-[0.6875rem] lg:text-sm font-black text-heading whitespace-nowrap tracking-tight truncate" title="${e.education}">${e.education||"N/A"}</span>
            </div>
        </div>
        <div class="flex justify-between items-start group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1">Designated Beneficiary</span>
            <span class="${e.designatedBeneficiary!=="N/A"?"font-black text-heading":"font-bold text-gray-300 italic"} text-right wrap-break-word leading-snug max-w-[60%] uppercase">${e.designatedBeneficiary}</span>
        </div>
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Relationship to Assured</span>
            <span class="${e.relationshipToAssured!=="N/A"?"font-black text-[#2e7d32] dark:text-green-400":"font-bold text-gray-300 italic"} text-right uppercase">${e.relationshipToAssured}</span>
        </div>
    </div>
</div>

<!-- Container for right grid from modal -->
<div class="relative">
    <!-- Pages Container -->
    <div id="drawer-page-0" class="flex-1 flex flex-col gap-4">
        
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
    
    <div id="drawer-page-1" class="hidden flex-1 flex flex-col gap-6">
         <div class="flex justify-between items-center border-b-2 border-brand pb-2">
            <h4 class="text-sm font-bold text-heading uppercase tracking-widest">Submission Logs</h4>
            <div class="flex gap-2">
                <button type="button" id="add-dtr-log-btn" class="bg-blue-50 dark:bg-blue-900/40 text-royal-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white text-[0.625rem] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                    + DTR
                </button>
                <button type="button" id="add-ar-log-btn" class="bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-800 hover:bg-orange-500 hover:text-white text-[0.625rem] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                    + AR
                </button>
                <button type="button" id="export-log-btn" class="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-500 hover:text-white text-[0.625rem] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    EXPORT
                </button>
            </div>
         </div>

         <div class="flex flex-col gap-5">
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${r.length?r.map(c=>{const h=c.status||"PENDING";let w=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",x=c.date||c.createdAt,$=x;if(x){const C=/^\d{4}-\d{2}-\d{2}$/.test(x)?new Date(x+"T00:00:00Z"):new Date(x);isNaN(C)||($=C.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors edit-log-btn" data-type="dtr" data-id="${c.id}" data-val="${c.day||x}" data-status="${h}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${c.day||$}</span>
                            <span class="text-[0.6875rem] font-bold ${w} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${h}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${c.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `}).join(""):'<p class="text-[0.6875rem] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No DTR logs submitted.</p>'}
                </div>
            </div>

            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    AR Logs
                </h5>
                <div class="space-y-2">
                    ${o.length?o.map(c=>{const h=c.status||"PENDING";let w=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",x=c.period||c.createdAt,$=x;if(x){const C=/^\d{4}-\d{2}-\d{2}$/.test(x)?new Date(x+"T00:00:00Z"):new Date(x);isNaN(C)||($=C.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors edit-log-btn" data-type="ar" data-id="${c.id}" data-val="${x}" data-status="${h}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${x||$}</span>
                            <span class="text-[0.6875rem] font-bold ${w} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${h}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${c.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `}).join(""):'<p class="text-[0.6875rem] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No AR logs submitted.</p>'}
                </div>
            </div>
         </div>
    </div>
    
    <div id="drawer-page-2" class="hidden flex-1 flex flex-col gap-4">
        <h4 class="text-sm font-bold text-heading mb-2 border-b-2 border-brand pb-2 inline-block max-w-max">Required Documents</h4>
        <div class="flex flex-col gap-3">
            ${d.map(c=>{const h=c.status.toUpperCase(),x={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[h]||h,$=x==="COMPLETED",C=x==="REJECTED",X=$?"text-green-500":C?"text-red-500":"text-gray-400 dark:text-gray-500",K=$?"bg-green-50/50 dark:bg-green-900/10":C?"bg-red-50/50 dark:bg-red-900/10":"bg-gray-50/50 dark:bg-slate-800/50",R=$?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer":C?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer":"bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer";let te='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return $?te='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':C&&(te='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${K}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${X}">
                            ${te}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${$?"text-heading":"text-gray-500 dark:text-gray-400"} uppercase tracking-tight flex-1">${c.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${R} text-[0.625rem] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${c.id}" data-name="${c.name}" data-status="${x} cursosr-pointer">
                        ${x}
                    </button>
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
    `,g=!!e._noAnimation;let f=document.getElementById("beneficiary-drawer-container");const S=g&&!!f&&f.dataset.beneficiaryId===String(e.id||"");if(S){const c=f.scrollTop;f.innerHTML=u,f.scrollTop=c}else f&&(f.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),f=document.createElement("div"),f.id="beneficiary-drawer-container",f.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[500px] lg:w-[560px] shadow-2xl",f.setAttribute("tabindex","-1"),f.setAttribute("data-drawer-backdrop","true"),f.innerHTML=u,document.body.appendChild(f),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");f.dataset.beneficiaryId=String(e.id||""),bt(async()=>{const{Drawer:c}=await import("./vendor-flowbite-B7rSfpuT.js").then(h=>h.b);return{Drawer:c}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:c})=>{let h=S?f.__drawerInstance:null;if(!h){const N={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{f&&f.parentNode&&f.remove()},300)}};h=new c(f,N),f.__drawerInstance=h,h.show()}f.querySelector("#close-drawer-btn").addEventListener("click",()=>h.hide());const x=f.querySelector("#drawer-prev-btn"),$=f.querySelector("#drawer-next-btn"),C=2,X=()=>{f.querySelectorAll("[id^=drawer-page-]").forEach((j,z)=>{j.classList.toggle("hidden",z!==a)});const N=f.querySelector("#drawer-section-title");N&&N.classList.toggle("invisible",a!==0);const _=f.querySelector("#personal-profile-section");_&&_.classList.toggle("hidden",a!==0),x.disabled=a===0,$.disabled=a===C,x.classList.toggle("opacity-50",a===0),$.classList.toggle("opacity-50",a===C)};x.addEventListener("click",()=>{a>0&&a--,X()}),$.addEventListener("click",()=>{a<C&&a++,X()}),X(),f.querySelectorAll(".drawer-doc-btn").forEach(N=>{N.addEventListener("click",async()=>{const _=N.dataset.name,j=N.dataset.status,z="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.5625rem] gap-2 transition-all duration-300 ",G=await M.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Set status for <span class="text-brand font-black">${_}</span></label>
                            
                            <div class="grid grid-cols-3 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="PENDING" class="peer sr-only" ${j==="PENDING"?"checked":""}>
                                    <div class="${z} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-amber-400 peer-checked:bg-amber-50 peer-checked:text-amber-600 dark:peer-checked:bg-amber-900/20 dark:peer-checked:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>Pending</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="COMPLETED" class="peer sr-only" ${j==="COMPLETED"?"checked":""}>
                                    <div class="${z} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-green-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        <span>Verify</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="REJECTED" class="peer sr-only" ${j==="REJECTED"?"checked":""}>
                                    <div class="${z} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-red-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Update Status</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const V=document.querySelector('input[name="swal-doc-status"]:checked');return V?V.value:null}});if(G.isConfirmed){const V=G.value;if(V===j)return;try{const ae={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"}[V]||V,W=await We("api/logs.php?type=docs",{gip_id:e.id,doc_name:_,status:ae}),O=W.success?W.data:{success:!1,error:W.error};O.success?(M.fire({toast:!0,position:s,icon:"success",title:"Status updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):M.fire("Error",O.error||"Failed to update","error")}catch(oe){M.fire("Error",oe.message,"error")}}})});const K=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),R=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function te(N){const j=new Date(N+"T00:00:00").getDay();return j!==0&&j!==6&&!K.has(N)}function ne(N){const _=N.getDate(),j=R[N.getMonth()],z=N.getFullYear(),G=new Date(z,N.getMonth()+1,0).getDate();return _<=15?`${j} 1-15, ${z}`:`${j} 16-${G}, ${z}`}const ge=()=>{const N=new Date;if(!r.length)return ne(N);let _=-1,j="";const z=W=>{const O=(W||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!O)return-1;const ee=R.indexOf(O[1]),b=parseInt(O[2])===1?0:1;return parseInt(O[4])*100+ee*2+b};if(r.forEach(W=>{const O=W.day||W.date||"",ee=z(O);ee>_&&(_=ee,j=O)}),_===-1)return ne(N);const G=j.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),V=R.indexOf(G[1]),oe=parseInt(G[2]),ae=parseInt(G[4]);if(oe===1){const W=new Date(ae,V+1,0).getDate();return`${R[V]} 16-${W}, ${ae}`}else{const W=(V+1)%12,O=V===11?ae+1:ae;return`${R[W]} 1-15, ${O}`}},pe=()=>{const N=new Date;if(!o.length)return ne(N);let _=-1,j="";const z=W=>{const O=(W||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!O)return-1;const ee=R.indexOf(O[1]),b=parseInt(O[2])===1?0:1;return parseInt(O[4])*100+ee*2+b};if(o.forEach(W=>{const O=z(W.period);O>_&&(_=O,j=W.period)}),_===-1)return ne(N);const G=j.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),V=R.indexOf(G[1]),oe=parseInt(G[2]),ae=parseInt(G[4]);if(oe===1){const W=new Date(ae,V+1,0).getDate();return`${R[V]} 16-${W}, ${ae}`}else{const W=(V+1)%12,O=V===11?ae+1:ae;return`${R[W]} 1-15, ${O}`}},be=async(N,_)=>{M.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),M.showLoading();try{const j={gip_id:e.id};if(N==="dtr"){const V=_.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(V){const oe=R.indexOf(V[1]),ae=parseInt(V[2]),W=parseInt(V[3]);let O=new Date(W,oe,ae);for(;!te(O.toISOString().split("T")[0]);)O.setDate(O.getDate()+1);j.record_date=O.toISOString().split("T")[0]}else j.record_date=new Date().toISOString().split("T")[0];j.weekday=_}N==="ar"&&(j.period=_);const z=await We(`api/logs.php?type=${N}`,j);(z.success?z.data:{success:!1,error:z.error}).success?(M.fire({toast:!0,position:s,icon:"success",title:"Auto-Added!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):M.fire("Error","Failed to add log.","error")}catch(j){M.fire("Error",j.message,"error")}},Q=async(N,_,j,z,G)=>{const V=_==="dtr"?"Record Date":"Period";ye();const oe="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] sm:text-xs gap-2 ",ae='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',W='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:O}=await M.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${N} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-1">${V}</label>
                            <input id="swal-log-val" value="${z}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${G==="VERIFIED"?"checked":""}>
                                    <div class="${oe} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${ae}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${G==="REJECTED"||G==="DECLINED"?"checked":""}>
                                    <div class="${oe} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${W}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const ee=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:ee?ee.value:"PENDING"}}});if(O&&(O.val!==z||O.status!==G))try{const ee={type:_,id:j,status:O.status};if(_==="dtr"){const v=O.val.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(v){const I=R.indexOf(v[1]),D=parseInt(v[2]),m=parseInt(v[3]);let n=new Date(m,I,D);for(;!te(n.toISOString().split("T")[0]);)n.setDate(n.getDate()+1);ee.record_date=n.toISOString().split("T")[0]}else ee.record_date=new Date().toISOString().split("T")[0];ee.weekday=O.val}_==="ar"&&(ee.period=O.val);const b=await $t("api/logs.php",ee),k=b.success?b.data:{success:!1,error:b.error};k.success?(M.fire({toast:!0,position:s,icon:"success",title:"Log Updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):M.fire("Error",k.error||"Failed to update log.","error")}catch(ee){M.fire("Error",ee.message,"error")}},ue=f.querySelector("#add-dtr-log-btn");ue&&ue.addEventListener("click",()=>be("dtr",ge()));const ve=f.querySelector("#add-ar-log-btn");ve&&ve.addEventListener("click",()=>be("ar",pe()));const we=f.querySelector("#export-log-btn");we&&we.addEventListener("click",async()=>{const N="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",_=await M.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${N} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${N} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${N} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const j=document.querySelector('input[name="swal-export-type"]:checked');return j?j.value:null}});if(_.isConfirmed&&_.value){const j=_.value,z=new Date().getFullYear();await mt([e],j,z)}}),f.querySelectorAll(".edit-log-btn").forEach(N=>{N.addEventListener("click",_=>{if(_.target.closest(".delete-log-btn"))return;const j=N.dataset.type,z=N.dataset.id,G=N.dataset.val,V=N.dataset.status;Q(j.toUpperCase(),j,z,G,V)})}),f.querySelectorAll(".delete-log-btn").forEach(N=>{N.addEventListener("click",async()=>{const _=N.dataset.id,j=N.dataset.type;if((await M.fire({title:'<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:'<span class="font-black tracking-widest uppercase">Delete</span>',cancelButtonText:'<span class="font-black tracking-widest uppercase">Wait</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)try{const G=await We(`api/logs.php?type=${j}`,{log_id:_,action:"delete"});(G.success?G.data:{success:!1,error:G.error}).success?(M.fire({toast:!0,position:s,icon:"success",title:"Deleted",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):M.fire("Error","Failed to delete data.","error")}catch(G){M.fire("Error",G.message,"error")}})})}).catch(console.error)}function sr(e){const t=ye(),s="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600",a="w-full resize-none overflow-hidden rounded-none border-0 border-b-2 border-blue-200 bg-transparent px-0 py-2 text-xl font-black leading-tight tracking-tight text-royal-blue placeholder-gray-300 outline-none focus:border-brand focus:ring-0 sm:text-2xl dark:border-slate-700 dark:text-white",o="mb-1.5 block text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";function r(x){const $=String(x||"").trim();if(!$)return{month:"",day:"",year:"",iso:""};let C=$.match(/^(\d{4})-(\d{2})-(\d{2})/);if(C)return{year:C[1],month:C[2],day:C[3],iso:`${C[1]}-${C[2]}-${C[3]}`};if(C=$.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/),C){const X=C[1].padStart(2,"0"),K=C[2].padStart(2,"0");return{year:C[3],month:X,day:K,iso:`${C[3]}-${X}-${K}`}}return{month:"",day:"",year:"",iso:""}}function l(x,$,C){const X=Number.parseInt(x,10),K=Number.parseInt($,10),R=Number.parseInt(C,10);if(!Number.isInteger(X)||!Number.isInteger(K)||!Number.isInteger(R)||R<1900||R>new Date().getFullYear())return"";const te=new Date(R,X,0).getDate();return X<1||X>12||K<1||K>te?"":`${String(R).padStart(4,"0")}-${String(X).padStart(2,"0")}-${String(K).padStart(2,"0")}`}function i(x){const $=r(x);if(!$.iso)return"";const C=Number.parseInt($.year,10),X=Number.parseInt($.month,10),K=Number.parseInt($.day,10),R=new Date;let te=R.getFullYear()-C;return(R.getMonth()+1<X||R.getMonth()+1===X&&R.getDate()<K)&&te--,te>=0?te:""}const d=r(e.birthday),u=Array.from({length:12},(x,$)=>{const C=String($+1).padStart(2,"0");return`<option value="${C}" ${d.month===C?"selected":""}>${C}</option>`}).join(""),g=Array.from({length:31},(x,$)=>{const C=String($+1).padStart(2,"0");return`<option value="${C}" ${d.day===C?"selected":""}>${C}</option>`}).join("");function f(x){if(!x)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const $=String(x).toUpperCase();return $==="ONGOING"?"bg-green-100 text-green-700 border-green-200":$==="EXPIRED"?"bg-red-400 text-white border-red-400":$==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":$==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const S=`
<form id="edit-beneficiary-drawer-form" class="h-full flex flex-col pt-4 font-montserrat relative pb-20 overflow-y-auto">
    <input type="hidden" name="id" value="${e.id}">
    
    <div class="flex flex-col relative w-full border-b border-default pb-4 mb-5 pe-12">
        <textarea name="name" class="${a}" rows="1" placeholder="Beneficiary Name" required oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">${e.name||""}</textarea>
        
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
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${f(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
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
                <input type="text" name="contact" value="${e.contact||""}" class="${s} font-mono" placeholder="09XX-XXX-XXXX" inputmode="tel">
            </label>

            <label class="block">
                <span class="${o}">Gender</span>
                <select name="gender" class="${s} cursor-pointer appearance-none">
                    <option value="Male" ${String(e.gender||"").toUpperCase()==="MALE"?"selected":""}>MALE</option>
                    <option value="Female" ${String(e.gender||"").toUpperCase()==="FEMALE"?"selected":""}>FEMALE</option>
                </select>
            </label>

            <label class="block sm:col-span-2">
                <span class="${o}">Complete Address</span>
                <textarea name="address" rows="3" class="${s} resize-y" placeholder="Barangay, municipality/city, province">${e.address||""}</textarea>
            </label>

            <div class="sm:col-span-2 border border-blue-200 bg-blue-50/60 p-3 dark:border-blue-900 dark:bg-blue-950/30">
                <div class="mb-3 flex items-center justify-between gap-3 border-b border-blue-200 pb-2 dark:border-blue-900">
                    <div>
                        <span class="${o} mb-0">Birthday</span>
                        <p class="mt-1 text-[0.5625rem] font-semibold text-slate-400">Select month, day, and year or use the calendar.</p>
                    </div>
                    <svg class="h-5 w-5 shrink-0 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v3m8-3v3M3 9h18M5 4h14a2 2 0 012 2v14H3V6a2 2 0 012-2z" /></svg>
                </div>
                <input type="hidden" name="birthday" id="edit-bday-input" value="${d.iso}">
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-[0.8fr_0.8fr_1.2fr_1.4fr]">
                    <label class="block">
                        <span class="${o}">Month (MM)</span>
                        <select id="edit-birth-month" class="${s} cursor-pointer appearance-none font-mono" aria-label="Birth month">
                            <option value="">MM</option>
                            ${u}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${o}">Day (DD)</span>
                        <select id="edit-birth-day" class="${s} cursor-pointer appearance-none font-mono" aria-label="Birth day">
                            <option value="">DD</option>
                            ${g}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${o}">Year (YYYY)</span>
                        <input type="text" id="edit-birth-year" value="${d.year}" class="${s} font-mono" placeholder="YYYY" inputmode="numeric" maxlength="4" aria-label="Birth year">
                    </label>
                    <label class="block">
                        <span class="${o}">Calendar</span>
                        <input type="date" id="edit-birthday-calendar" value="${d.iso}" class="${s} cursor-pointer font-mono" aria-label="Birthday calendar">
                    </label>
                </div>
                <p id="edit-birthday-error" class="mt-2 hidden border-l-4 border-red-500 bg-red-50 px-2 py-1.5 text-[0.625rem] font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300" role="alert">Enter a valid birthday using MM, DD, and YYYY.</p>
            </div>

            <label class="block">
                <span class="${o}">Age</span>
                <input type="text" name="age" id="edit-age-display" value="${i(d.iso)}" class="${s} cursor-not-allowed bg-slate-100 font-mono text-slate-500 dark:bg-slate-800" placeholder="Auto-calculated" readonly aria-readonly="true">
            </label>

            <div class="relative">
                <label for="edit-education-input" class="${o}">Educational Level / Course</label>
                <input type="text" name="education" id="edit-education-input" value="${e.education||""}" class="${s}" placeholder="Select or enter education">
                <div id="edit-education-suggestions-box" class="absolute left-0 right-0 z-[70] mt-1 hidden max-h-48 overflow-y-auto border border-slate-300 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                    ${Qe.map(x=>`<button type="button" class="edit-education-option w-full border-b border-slate-100 px-3 py-2 text-left text-[0.6875rem] font-bold text-slate-700 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"><span class="option-text">${x.name}</span></button>`).join("")}
                </div>
            </div>

            <label class="block">
                <span class="${o}">Designated Beneficiary</span>
                <input type="text" name="designatedBeneficiary" value="${e.designatedBeneficiary||""}" class="${s}" placeholder="Assured family member">
            </label>

            <label class="block">
                <span class="${o}">Relationship to Assured</span>
                <select name="relationshipToAssured" class="${s} cursor-pointer appearance-none uppercase">
                    <option value="">SELECT RELATIONSHIP</option>
                    ${vt.map(x=>`<option value="${x}" ${String(e.relationshipToAssured||"").toUpperCase()===x.toUpperCase()?"selected":""}>${x}</option>`).join("")}
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
    `;let c=document.getElementById("edit-drawer-container");c&&(c.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),c=document.createElement("div"),c.id="edit-drawer-container",c.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full border-l border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",c.setAttribute("tabindex","-1"),c.innerHTML=S,document.body.appendChild(c),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const x=c.querySelector('textarea[name="name"]');x&&(x.style.height="auto",x.style.height=x.scrollHeight+"px")},10);const h=c.querySelector("#edit-education-suggestions-box");h&&(h.innerHTML=Qe.map(x=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${x.name}</span>
            </button>
        `).join(""));const w=c.querySelector("#edit-designation-suggestions-box");w&&(w.innerHTML=De.map(x=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${x}</span>
            </button>
        `).join("")),bt(async()=>{const{Drawer:x}=await import("./vendor-flowbite-B7rSfpuT.js").then($=>$.b);return{Drawer:x}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:x})=>{const $=new x(c,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{c&&c.parentNode&&c.remove()},400)}});$.show(),window.initFlowbite&&window.initFlowbite();const C=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),$.hide()};c.querySelector("#close-edit-drawer-btn").addEventListener("click",C),c.querySelector("#edit-drawer-cancel-btn").addEventListener("click",C);const X=c.querySelector("#edit-beneficiary-drawer-form"),K=c.querySelector("#edit-bday-input"),R=c.querySelector("#edit-birth-month"),te=c.querySelector("#edit-birth-day"),ne=c.querySelector("#edit-birth-year"),ge=c.querySelector("#edit-birthday-calendar"),pe=c.querySelector("#edit-birthday-error"),be=c.querySelector("#edit-age-display"),Q=c.querySelector("#edit-startDate-input"),ue=c.querySelector("#edit-endDate-input"),ve=c.querySelector('input[name="seriesNo"]'),we=c.querySelector('input[name="gip_id"]'),N=(m=te?.value||"")=>{if(!te)return;const n=Number.parseInt(R?.value||"",10),p=Number.parseInt(ne?.value||"",10),y=Number.isInteger(n)&&n>=1&&n<=12?new Date(Number.isInteger(p)&&p>=1900?p:2e3,n,0).getDate():31,E=document.createDocumentFragment(),L=document.createElement("option");L.value="",L.textContent="DD",E.append(L);for(let B=1;B<=y;B++){const A=document.createElement("option");A.value=String(B).padStart(2,"0"),A.textContent=A.value,A.selected=A.value===String(m).padStart(2,"0"),E.append(A)}te.replaceChildren(E)},_=(m=!1)=>{const n=!!(R?.value||te?.value||ne?.value),p=n?l(R?.value,te?.value,ne?.value):"";return K&&(K.value=p),ge&&ge.value!==p&&(ge.value=p),be&&(be.value=p?i(p):""),pe&&pe.classList.toggle("hidden",!!p||!n||!m),{isoBirthday:p,hasBirthdayInput:n}},j=m=>{const n=r(m);return n.iso?(R&&(R.value=n.month),ne&&(ne.value=n.year),N(n.day),te&&(te.value=n.day),_(!1),!0):!1};R&&R.addEventListener("change",()=>{N(),_(!1)}),te&&te.addEventListener("change",()=>_(!1)),ne&&ne.addEventListener("input",()=>{ne.value=ne.value.replace(/\D/g,"").slice(0,4),N(),_(!1)}),ge&&ge.addEventListener("change",()=>{ge.value&&j(ge.value)}),N(d.day),_(!1);const z=c.querySelector("#edit-drawer-remarks"),G=c.querySelector("#edit-extension-log-container"),V=()=>{if(!G)return;const m=z.value,n=ye();if(m==="ABSORBED"){const p=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,y=p.getTimezoneOffset()*6e4,E=new Date(p.getTime()-y).toISOString().slice(0,16);G.innerHTML=`
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
                `}else if(m==="RESIGNED"){const p=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,y=p.getTimezoneOffset()*6e4,E=new Date(p.getTime()-y).toISOString().slice(0,16);G.innerHTML=`
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
                `}};z&&z.addEventListener("change",m=>{const n="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";z.className=`${f(m.target.value)} ${n} editable-indicator`,V(),(z.value==="ABSORBED"||z.value==="RESIGNED")&&setTimeout(()=>{G.scrollIntoView({behavior:"smooth",block:"center"}),G.classList.add("pulse-highlight"),setTimeout(()=>G.classList.remove("pulse-highlight"),1500)},50)}),V();let oe=!1;const ae=(m,n)=>{m.addEventListener("paste",p=>{p.preventDefault();let y=(p.clipboardData||window.clipboardData).getData("text");if(y){y=y.replace(/[-.\s]/g,"/");const E=y.split("/");if(E.length===3){const L=E[0].padStart(2,"0"),B=E[1].padStart(2,"0");let A=E[2];if(A.length===2){const F=new Date().getFullYear(),T=Math.floor(F/100)*100;A=String(T+parseInt(A))}else A=A.padStart(4,"0");const P=`${L}/${B}/${A}`;m.value=P;const U=new Event("input",{bubbles:!0});m.dispatchEvent(U);const q=window.__parseFormattedDate(P);if(q&&n&&(oe||n(q),document.activeElement===m&&m.blur()),m._datepicker)m._datepicker.hide();else{const F=m.parentNode&&m.parentNode._datepicker;F&&typeof F.hide=="function"&&F.hide()}}}}),m.addEventListener("input",p=>{const y=p.target.value,E=window.__maskDate(y);if(y!==E&&(p.target.value=E),E.length===10){const L=window.__parseFormattedDate(E);if(L&&n)if(oe||n(L),document.activeElement===m&&m.blur(),m._datepicker)m._datepicker.hide();else{const B=m.parentNode&&m.parentNode._datepicker;B&&typeof B.hide=="function"&&B.hide()}}}),m.addEventListener("changeDate",p=>{p.detail&&p.detail.date&&n&&(oe||n(p.detail.date),m._datepicker&&m._datepicker.hide())})};Q&&ae(Q,m=>{if(ue){const p=new Date(m);p.setDate(p.getDate()+243);const y=String(p.getMonth()+1).padStart(2,"0"),E=String(p.getDate()).padStart(2,"0"),L=p.getFullYear();ue.value=`${y}/${E}/${L}`}const n=m.getFullYear();n>1900&&we&&ve&&Promise.all([ce(`api/beneficiaries.php?next_id&year=${encodeURIComponent(n)}`),ce(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(n)}`)]).then(([p,y])=>{const E=p.success&&p.data?.success?p.data.nextId:null,L=y.success&&y.data?.success?y.data.nextSeries:null,B=String(we.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),A=String(ve.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),P=B?Number(B[1]):null,U=A?Number(A[1]):null;E&&(P===null||P!==n)&&(we.value=E),L&&(U===null||U!==n)&&(ve.value=L)}).catch(p=>{console.error("Edit drawer identifier sync error:",p)})}),ue&&ae(ue),window.Datepicker||typeof Datepicker<"u"&&Datepicker;const W=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),O=c.querySelector("#edit-date-range-picker");if(W&&O){const m=new W(O,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});Q&&(Q._datepicker=m.datepickers[0]),ue&&(ue._datepicker=m.datepickers[1])}e.id&&(oe=!0,ce(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(m=>{if(m.success&&m.data&&m.data.beneficiary){const n=m.data.beneficiary;if(n.birthday&&j(n.birthday),Q&&n.startDate){const p=new Date(n.startDate);isNaN(p)||(Q.value=n.startDateFormatted||"",Q._datepicker&&Q._datepicker.setDate(p))}if(ue&&n.endDate){const p=new Date(n.endDate);isNaN(p)||(ue.value=n.endDateFormatted||"",ue._datepicker&&ue._datepicker.setDate(p))}}setTimeout(()=>{oe=!1},100)}).catch(m=>{console.error("Error fetching accurate beneficiary dates:",m),oe=!1}));const ee=(m,n,p)=>{const y=c.querySelector(m),E=c.querySelector(n);if(!y||!E)return;const L=()=>E.classList.add("hidden"),B=()=>E.classList.remove("hidden");y.addEventListener("focus",B),y.addEventListener("input",()=>{const A=y.value.toLowerCase().trim();let P=0;E.querySelectorAll(p).forEach(U=>{const F=(U.querySelector(".option-text")?.textContent||U.textContent||"").toLowerCase().includes(A);U.style.display=F?"block":"none",F&&P++}),P>0?B():L()}),E.addEventListener("click",A=>{const P=A.target.closest(p);P&&(y.value=(P.querySelector(".option-text")?.textContent||P.textContent||"").trim(),L(),y.dispatchEvent(new Event("change")))}),document.addEventListener("click",A=>{!y.contains(A.target)&&!E.contains(A.target)&&L()})};ee("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),ee("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const m=c.querySelector("#edit-office-input"),n=c.querySelector("#edit-office-suggestions-box");if(!m||!n)return;n.classList.add("mt-[52px]");let p="OFFICES",y=null,E=[];const L={textLabel:t?"text-slate-400":"text-slate-500",borderDivide:t?"border-slate-800":"border-slate-100",courseHover:t?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:t?"text-slate-300":"text-slate-700"},B=async()=>{const P="dole_offices_cache",U=async()=>{let F=[];try{const T=await ce("api/beneficiaries.php?get_offices_advanced=1");T.success&&T.data?.success&&Array.isArray(T.data.offices)&&(F=T.data.offices)}catch(T){console.error("Office fetch failed:",T)}return F.length>0&&(E=F,localStorage.setItem(P,JSON.stringify({data:F,timestamp:Date.now()}))),F},q=localStorage.getItem(P);if(q)try{const{data:F,timestamp:T}=JSON.parse(q);return E=F,Date.now()-T>1800*1e3&&U().then(()=>{p==="OFFICES"&&A("OFFICES",y,m.value)}),F}catch{localStorage.removeItem(P)}return E.length===0?await U():E},A=async(P="OFFICES",U=null,q="")=>{if(p=P,y=U,P==="OFFICES"){const T=(await B()).filter(Y=>Y.office.toLowerCase().includes(q.toLowerCase()));n.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${L.textLabel} opacity-70 border-b ${L.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${T.length>0?T.map(Y=>{const de=parseInt(Y.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${L.textCourseOpt} ${L.courseHover} rounded-none ${de?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
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
                                <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${L.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                ${q.trim()?`
                                <div class="px-2 pb-2 flex flex-col gap-1.5">
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${L.textLabel} opacity-50 px-1">New office: "${q.trim()}"</div>
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
                    `;const H=q.trim(),Z=n.querySelector("#add-office-location-row-edit"),se=n.querySelector("#new-office-loc-input-edit"),Ae=n.querySelector("#confirm-office-with-loc-edit"),Ee=n.querySelector("#add-office-with-loc-btn-edit"),le=n.querySelector("#skip-office-loc-btn-edit");if(Ee&&Z&&Ee.addEventListener("click",Y=>{Y.stopPropagation(),Z.classList.remove("hidden"),Z.classList.add("flex"),setTimeout(()=>se?.focus(),50)}),Ae&&se){const Y=de=>{de.stopPropagation();const ke=se.value.trim();m.value=ke?`${H} - ${ke}`:H,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))};Ae.addEventListener("click",Y),se.addEventListener("keydown",de=>{de.key==="Enter"&&Y(de)}),se.addEventListener("click",de=>de.stopPropagation())}le&&le.addEventListener("click",Y=>{Y.stopPropagation(),m.value=H,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))}),n.querySelectorAll(".office-code-option").forEach(Y=>{Y.addEventListener("click",de=>{de.stopPropagation(),Y.dataset.hasLocations==="true"?A("LOCATIONS",{id:Y.dataset.id,name:Y.dataset.name}):(m.value=Y.dataset.name,n.classList.add("hidden"),m.dispatchEvent(new Event("change")))})})}else{n.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${L.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-none">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-none bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${L.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-none bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${L.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${U.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-none transition-all"
                                    value="${q.includes(" - ")?q.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${L.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const F=n.querySelector("#loc-list-edit"),T=n.querySelector("#location-search-edit"),H=`dole_locs_cache_${U.id}`;let Z=[];const se=localStorage.getItem(H);if(se)try{const{data:le,timestamp:Y}=JSON.parse(se);Z=le,Date.now()-Y<3600*1e3}catch{localStorage.removeItem(H)}const Ae=async()=>{let le=[];if(Se&&Re()){const{data:Y,error:de}=await Se.from("office_locations").select("location").eq("office_id",U.id).order("location");!de&&Y&&(le=Y)}if(le.length===0)try{const Y=await ce(`api/beneficiaries.php?get_office_locations=1&office_id=${U.id}`);Y.success&&Y.data?.success&&Array.isArray(Y.data.locations)&&(le=Y.data.locations)}catch(Y){console.error("Office locations fetch failed:",Y)}le.length>0&&(Z=le,localStorage.setItem(H,JSON.stringify({data:le,timestamp:Date.now()})),Ee(T.value))},Ee=(le="")=>{const Y=Z.filter(ke=>ke.location.toLowerCase().includes(le.toLowerCase())),de=le.trim();Y.length>0?F.innerHTML=Y.map(ke=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${L.textCourseOpt} ${L.courseHover} rounded-none cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${ke.location}">
                                    <div class="w-1 h-1 rounded-none bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${ke.location}</span>
                                </div>
                            `).join(""):Z.length===0?F.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${L.textLabel} animate-pulse">Fetching...</div>`:(F.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${L.textLabel} opacity-60">No matching locations.</div>
                                ${de?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${de}" as location
                                    </button>
                                </div>`:""}
                            `,de&&F.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{m.value=`${U.name} - ${de}`,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})),F.querySelectorAll(".location-option-edit").forEach(ke=>{ke.addEventListener("click",()=>{m.value=`${U.name} - ${ke.dataset.location}`,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})})};Ee(T.value),Ae(),setTimeout(()=>T.focus(),50),T.addEventListener("input",()=>Ee(T.value)),T.addEventListener("click",le=>le.stopPropagation()),n.querySelector("#back-to-offices-edit").addEventListener("click",le=>{le.stopPropagation(),A("OFFICES")})}};m.addEventListener("focus",()=>{n.classList.remove("hidden"),A(p,y,m.value)}),m.addEventListener("input",()=>{p==="OFFICES"&&A("OFFICES",null,m.value)}),document.addEventListener("click",P=>{!m.contains(P.target)&&!n.contains(P.target)&&n.classList.add("hidden")})})();const k=c.querySelector("#edit-replacement-input"),v=c.querySelector("#edit-replacement-suggestions-box"),I=c.querySelector("#edit-replacement-loading");let D=null;k&&v&&(k.addEventListener("input",m=>{const n=m.target.value.trim();clearTimeout(D),v.classList.add("hidden"),!(n.length<2)&&(I&&I.classList.remove("hidden"),D=setTimeout(async()=>{try{const p=await je(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(n)}&limit=10`);p.success&&p.data&&p.data.candidates&&p.data.candidates.length>0?(v.innerHTML=p.data.candidates.map(y=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${y.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${y.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${y.id}</span>
                                </button>
                            `).join(""),v.classList.remove("hidden")):(v.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',v.classList.remove("hidden"))}catch(p){console.error("Replacement fetch error:",p)}finally{I&&I.classList.add("hidden")}},400))}),v.addEventListener("click",m=>{const n=m.target.closest("button");n&&(k.value=n.dataset.name,v.classList.add("hidden"))}),document.addEventListener("click",m=>{!k.contains(m.target)&&!v.contains(m.target)&&v.classList.add("hidden")})),X.querySelectorAll("input, select, textarea").forEach(m=>{const n=(m.getAttribute("type")||"").toLowerCase(),p=!m.disabled&&!m.readOnly&&n!=="hidden";m.classList.remove("editable-indicator"),p&&m.classList.add("editable-indicator")}),X.addEventListener("submit",m=>{m.preventDefault();const{isoBirthday:n,hasBirthdayInput:p}=_(!0);if(p&&!n){R?.focus(),M.fire({toast:!0,position:"top-end",icon:"error",title:"Enter a valid birthday",text:"Complete the MM, DD, and YYYY fields.",showConfirmButton:!1,timer:3500});return}const y=B=>{const A=String(B||"").trim();if(!A)return"";const P=A.match(/^(\d{4})-(\d{2})-(\d{2})/);if(P)return`${P[1]}-${P[2]}-${P[3]}`;const U=window.__parseFormattedDate?.(A);if(!U)return A;const q=U.getFullYear(),F=String(U.getMonth()+1).padStart(2,"0"),T=String(U.getDate()).padStart(2,"0");return`${q}-${F}-${T}`},E=new FormData(X),L={};E.forEach((B,A)=>{L[A]=["birthday","startDate","endDate"].includes(A)?y(B):B}),L.birthday=n,L.id=e.id,L.gip_id=L.gip_id||e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(L,!0,!1)&&(C(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),M.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function Ir(){window.showAddDataModal=Te,window.__maskDate=function(e){let t=e.replace(/\D/g,"").slice(0,8);return t.length>2&&t.length<=4?t=t.slice(0,2)+"/"+t.slice(2):t.length>4&&(t=t.slice(0,2)+"/"+t.slice(2,4)+"/"+t.slice(4)),t},window.__parseFormattedDate=function(e){if(!e)return null;const t=e.split("/");if(t.length===3){const s=parseInt(t[0])-1,a=parseInt(t[1]),o=parseInt(t[2]);if(o>1e3&&s>=0&&s<12&&a>0&&a<=31)return new Date(o,s,a)}return null},window.calculateAge=function(e){if(!e)return"";const t=e instanceof Date?e:new Date(e),s=new Date;let a=s.getFullYear()-t.getFullYear();const o=s.getMonth()-t.getMonth();return(o<0||o===0&&s.getDate()<t.getDate())&&a--,a>=0?a:0},window.viewBeneficiary=async function(e,t=0){const s=e?.id||e?.gip_id||null;if(!s)return;const a=!!(e?.name&&e?.office&&e?.remarks);let o={...e,id:s};if(!a){const d=await ce(`api/beneficiaries.php?id=${encodeURIComponent(s)}`);d.success&&d.data?.success&&d.data?.beneficiary&&(o={...d.data.beneficiary,...o,id:s})}const r=`logs_cache_${s}`,l=window.__doleDB?.getSecureCache?await window.__doleDB.getSecureCache(r):null,i=!!l;o.arLogs=l?.arLogs||[],o.dtrLogs=l?.dtrLogs||[],o.docs=l?.docs||[],dt(o,t);try{const[d,u,g,f]=await Promise.all([ce(`api/logs.php?type=ar&gip_id=${encodeURIComponent(s)}`),ce(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(s)}`),ce(`api/logs.php?type=docs&gip_id=${encodeURIComponent(s)}`),ce(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(s)}`)]),S=d.success&&d.data?.success?d.data.logs:[],c=u.success&&u.data?.success?u.data.logs:[],h=g.success&&g.data?.success?g.data.logs:[],w=f.success&&f.data?.success?f.data.logs:[];if(w.length>0){const C=w[0];o.absorbDate=C.absorption_datetime,o.absorb_where=C.where||C.absorb_where,o.absorb_position=C.position||C.absorb_position,o.absorb_agency=C.agency||C.absorb_agency}window.__doleDB?.setSecureCache&&await window.__doleDB.setSecureCache(r,{arLogs:S,dtrLogs:c,docs:h});const x=JSON.stringify({ar:l?.arLogs||[],dtr:l?.dtrLogs||[],docs:l?.docs||[]}),$=JSON.stringify({ar:S,dtr:c,docs:h});if(!i||x!==$){const C=document.getElementById("beneficiary-drawer-container");C&&C.dataset.beneficiaryId===String(s)&&(o.arLogs=S,o.dtrLogs=c,o.docs=h,dt({...o,_noAnimation:!0},t))}}catch(d){console.error("Error fetching logs/docs:",d)}},window.showAddDataModal=function(e){Te(e)},window.editBeneficiary=function(e){sr(e)},window.showExportConfigModal=function(e){lr(e)},window.showProfileModal=function(){nr()},window.showSearchExtraStatsModal=function(){dr()}}async function nr(){try{if(Re()&&Se){let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=a.id)}catch{}if(!e)throw new Error("User not logged in");const{data:t,error:s}=await Se.from("users").select("*").eq("user_id",e).single();if(s)throw s;ct(t)}else{let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=`?user_id=${a.id}`)}catch{}const s=await(await fetch(`${me()}api/profile.php${e}`)).json();if(s.success){const a=s.profile;ct(a)}else M.fire({icon:"error",title:"Error",text:s.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function ct(e){const t=e.profile_picture_path?`${me()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",a=`
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
                            ${t?`<img src="${t}" class="w-full h-full object-cover" />`:s}
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
    `;M.fire({html:a,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const r=o.querySelector("#profile-edit-form"),l=o.querySelector("#profile-pic-input"),i=o.querySelector("#profile-avatar-preview");l.addEventListener("change",d=>{const u=d.target.files[0];if(u){const g=new FileReader;g.onload=f=>{i.innerHTML=`<img src="${f.target.result}" class="w-full h-full object-cover" />`},g.readAsDataURL(u)}}),r.addEventListener("submit",async d=>{d.preventDefault();const u=new FormData(r);try{const g=JSON.parse(localStorage.getItem("user"));g&&g.id&&u.append("user_id",g.id)}catch{}try{const f=await(await fetch(`${me()}api/profile.php`,{method:"POST",body:u})).json();f.success?(f.profile&&(localStorage.setItem("user",JSON.stringify(f.profile)),ir(f.profile)),M.close(),M.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):M.fire({icon:"error",title:"Update Failed",text:f.error||"Something went wrong"})}catch(g){console.error("Error saving profile:",g)}})}})}function ir(e){const t=e.profile_picture_path?`${me()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(l=>l[0]).join("").substring(0,2).toUpperCase():"US",a=document.querySelectorAll(".sidebar-user-name"),o=document.querySelectorAll(".sidebar-user-email"),r=document.querySelectorAll(".sidebar-user-avatar");a.forEach(l=>l.textContent=e.full_name),o.forEach(l=>l.textContent=e.email||"No email set"),r.forEach(l=>{t?l.innerHTML=`<img src="${t}" class="w-full h-full object-cover" />`:l.textContent=s}),localStorage.setItem("user_full_name",e.full_name),t&&localStorage.setItem("user_avatar",t)}function lr(e){const t=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",assignedUnit:"ALL",ageGroup:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","assignedunit","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},s=`
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
                                ${["ALL","FEMALE","MALE"].map(a=>{const o={ALL:"peer-checked:bg-blue-600",FEMALE:"peer-checked:bg-pink-600",MALE:"peer-checked:bg-indigo-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-gender" value="${a}" ${t.gender===a?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Display Section -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Report Volume Section</label>
                            <div class="flex gap-1.5">
                                ${[{id:"ALL",label:"All",color:"peer-checked:bg-emerald-600"},{id:"ACTIVE",label:"Active",color:"peer-checked:bg-green-500"},{id:"ARCHIVED",label:"Archived",color:"peer-checked:bg-red-600"}].map(a=>`
                                    <label class="min-w-0 flex-1 cursor-pointer">
                                        <input type="radio" name="export-section" value="${a.id}" ${t.section===a.id?"checked":""} class="hidden peer">
                                        <div class="min-h-9 py-2 sm:min-h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-1.5 transition-all ${a.color} peer-checked:text-white peer-checked:border-transparent shadow-sm">
                                            <span class="whitespace-nowrap text-[0.625rem] font-black uppercase tracking-tight sm:text-xs">${a.label}</span>
                                        </div>
                                    </label>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Remarks Filter -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Remarks Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(a=>{const o={ALL:"peer-checked:bg-blue-600",ONGOING:"peer-checked:bg-green-500",EXPIRED:"peer-checked:bg-red-600",RESIGNED:"peer-checked:bg-slate-600",ABSORBED:"peer-checked:bg-teal-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-remarks" value="${a}" ${t.remarks===a?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Age Filter -->
                        <div>
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Age Group Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","18-24","25-30","31-40","41+"].map(a=>{const o={ALL:"peer-checked:bg-blue-600","18-24":"peer-checked:bg-emerald-600","25-30":"peer-checked:bg-yellow-600","31-40":"peer-checked:bg-orange-600","41+":"peer-checked:bg-slate-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-age-group" value="${a}" ${t.ageGroup===a?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 py-2 border border-gray-100 bg-white text-[0.625rem] sm:text-xs font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
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
                        ${["ID","Name","Age","Office","Assigned Unit","Start Date","End Date","Status"].map(a=>{const o=a.toLowerCase().replace(" ",""),r=t.columns.includes(o),l=`col-switch-${o}`;return`
                                <label for="${l}" class="flex min-h-10 sm:min-h-11 items-center gap-3 bg-white px-2.5 py-2 border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${l}" name="export-column" value="${o}" ${r?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="whitespace-nowrap text-[0.625rem] font-black uppercase tracking-tight text-gray-600 group-hover:text-emerald-600 sm:text-xs">${a}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>
            </form>
        </div>
    `;M.fire({html:s,width:"min(1120px, calc(100vw - clamp(0.5rem, 2vw, 1.5rem)))",showConfirmButton:!1,showCloseButton:!0,padding:"clamp(0.75rem, 2vw, 1.5rem)",customClass:{container:"font-montserrat",popup:"max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl shadow-2xl ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const o=a.querySelector("#export-config-form"),r=o.querySelector("#export-office"),l=o.querySelector("#export-location"),i=o.querySelector("#export-year"),d=o.querySelector("#export-assigned-unit");if(d){const g=window.getExportAssignedUnits?window.getExportAssignedUnits():De,f=t.assignedUnit||"ALL";d.innerHTML=`<option value="ALL" ${f==="ALL"?"selected":""}>ALL ASSIGNED UNITS</option>`+g.map(S=>`<option value="${S}" ${f===S?"selected":""}>${S}</option>`).join("")}if(i&&window.getExportYears){const g=window.getExportYears(),f=t.year||"ALL";let S=`<option value="ALL" ${f==="ALL"?"selected":""}>ALL YEARS</option>`;g.forEach(c=>{S+=`<option value="${c}" ${f===c?"selected":""}>${c}</option>`}),i.innerHTML=S}const u=async(g,f)=>{if(l){if(!g){l.disabled=!0,l.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}l.disabled=!1,l.innerHTML='<option value="ALL">Loading...</option>';try{const S=await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${g}`),c=S.success&&S.data?.success&&Array.isArray(S.data.locations)?S.data.locations:[];let h='<option value="ALL">ALL LOCATIONS</option>';c.forEach(w=>{h+=`<option value="${w.location}" ${f===w.location?"selected":""}>${w.location}</option>`}),l.innerHTML=h}catch{l.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};r&&(async()=>{let g=[];try{const w=await window.apiGet("api/beneficiaries.php?get_offices_advanced=1");w.success&&w.data?.success&&Array.isArray(w.data.offices)&&(g=w.data.offices)}catch{}const f=t.office||"ALL";let S=`<option value="ALL" ${f==="ALL"?"selected":""}>ALL OFFICES</option>`;g.forEach(w=>{S+=`<option value="${w.office}" data-id="${w.id}" ${f===w.office?"selected":""}>${w.office}</option>`}),r.innerHTML=S;const h=r.options[r.selectedIndex]?.dataset?.id;h&&f!=="ALL"&&await u(h,t.location||"ALL"),r.addEventListener("change",async()=>{const w=r.options[r.selectedIndex];await u(w?.dataset?.id,"ALL")})})(),o.addEventListener("submit",g=>{g.preventDefault();const f=o.querySelectorAll('input[name="export-column"]:checked'),S=Array.from(f).map(K=>K.value),c=o.querySelector('input[name="export-gender"]:checked'),h=o.querySelector('input[name="export-section"]:checked'),w=o.querySelector('input[name="export-remarks"]:checked'),x=o.querySelector('input[name="export-age-group"]:checked'),$=o.querySelector("#export-prepared").value.trim(),C=o.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",$),localStorage.setItem("ldn_export_approved",C);const X={office:o.querySelector("#export-office").value,location:o.querySelector("#export-location")?.value||"ALL",year:o.querySelector("#export-year")?.value||"ALL",gender:c?c.value:t.gender||"ALL",assignedUnit:o.querySelector("#export-assigned-unit")?.value||"ALL",remarks:w?w.value:t.remarks||"ALL",ageGroup:x?x.value:t.ageGroup||"ALL",search:o.querySelector("#export-search").value.trim().toLowerCase(),sort:o.querySelector("#export-sort").value,section:h?h.value:"ALL",preparedBy:$,approvedBy:C,columns:S};e(X),M.close(),setTimeout(()=>{M.fire({toast:!0,position:"top-end",icon:"success",title:"Report configuration applied",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const Qe=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],vt=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function Te(e=null){const t=!!e&&!e._isBulk,s=t?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",a=t?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=ye(),r={borderBase:o?"border-slate-800":"border-gray-100/80",borderCard:o?"border-slate-800":"border-gray-100",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgCard:o?"bg-slate-900/40":"bg-gray-50/40",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgActionBar:o?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},l=`
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
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${s}" /></svg>
                        </div>
                        ${a}
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
                                        ${Qe.map(i=>`
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
                                    ${vt.map(i=>`
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
                                    ${(()=>{const i={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(d=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${d}" ${e?.remarks===d?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${i[d]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${d}
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
    `;M.fire({html:l,width:window.innerWidth<640?"96vw":window.innerWidth<1024?"90vw":"1120px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"0.75rem":window.innerWidth<1024?"1.25rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:i=>{window.initFlowbite&&window.initFlowbite();const d=i.querySelector("#cancel-modal-btn");d&&d.addEventListener("click",()=>{!t&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),M.close(),e?._isBulk&&qe.onCancel()});const u=i.querySelector("#bulk-add-btn");u&&u.addEventListener("click",()=>{M.close(),qe.init()});const g=(b,k)=>{b.addEventListener("paste",v=>{v.preventDefault();let I=(v.clipboardData||window.clipboardData).getData("text");if(I){I=I.replace(/[-.\s]/g,"/");const D=I.split("/");if(D.length===3){const m=D[0].padStart(2,"0"),n=D[1].padStart(2,"0");let p=D[2];if(p.length===2){const A=new Date().getFullYear(),P=Math.floor(A/100)*100;p=String(P+parseInt(p))}else p=p.padStart(4,"0");const y=`${m}/${n}/${p}`;b.value=y;const E=new Event("input",{bubbles:!0});b.dispatchEvent(E);const L=window.__parseFormattedDate(y);L&&k&&(k(L),document.activeElement===b&&b.blur());const B=b._datepicker||b.parentNode&&b.parentNode._datepicker;B&&typeof B.hide=="function"&&B.hide()}}}),b.addEventListener("input",v=>{const I=window.__maskDate(v.target.value);if(v.target.value!==I&&(v.target.value=I),I.length===10){const D=window.__parseFormattedDate(I);if(D&&k){k(D),document.activeElement===b&&b.blur();const m=b._datepicker||b.parentNode&&b.parentNode._datepicker;m&&typeof m.hide=="function"&&m.hide()}}}),b.addEventListener("changeDate",v=>{if(v.detail&&v.detail.date&&k){k(v.detail.date);const I=b._datepicker||b.parentNode&&b.parentNode._datepicker;I&&typeof I.hide=="function"&&I.hide()}})},f=i.querySelector("#birthday-input"),S=i.querySelector("#age-display"),c=i.querySelector("#age-warning"),h=i.querySelector("#submit-beneficiary-btn"),w=b=>{if(!b)return c&&c.classList.add("hidden"),h&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer")),!0;const k=parseInt(b),v=!isNaN(k)&&k>=18&&k<=29;return c&&(c.className=`mt-1 text-[0.625rem] font-bold ${v?"hidden":"flex"} items-center gap-1.5 animate-pulse ${ye()?"text-red-400":"text-red-600"}`),h&&(v?(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer","active:scale-[0.98]")):(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),v};if(S&&(S.addEventListener("input",b=>{w(b.target.value)}),S.value&&w(S.value)),f){g(f,k=>{S&&(S.value=window.calculateAge(k),w(S.value),S.classList.add("animate-pulse"),setTimeout(()=>S.classList.remove("animate-pulse"),400))});const b=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);b&&(f._datepicker=new b(f,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const x=i.querySelector("#name-input-field"),$=i.querySelector("#duplicate-warning");if(x&&$){let b;const k=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},v=(D,m="")=>{$.className=`mt-1 text-[0.625rem] font-bold ${D?"flex":"hidden"} items-center gap-1.5 animate-pulse ${ye()?"text-red-400":"text-red-600"}`;const n=$.querySelector("span");n&&(n.textContent=m?`Beneficiary already exists: ${m}`:"Beneficiary already exists")},I=async D=>{const m=k(),n=await fetch(`${me()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...m?{"X-User-Id":String(m)}:{}},body:JSON.stringify({name:D,user_id:m,exclude_id:t?e?.id:null})});if(!n.ok)throw new Error(`Duplicate check failed (${n.status})`);return n.json()};x.addEventListener("input",D=>{const m=D.target.value.trim();if(clearTimeout(b),m.length<3){v(!1);return}b=setTimeout(async()=>{try{const n=await I(m);n.success&&n.exists?v(!0,n.match||n.name):v(!1)}catch(n){console.error("Duplicate check error:",n)}},500)}),e?.name&&(v(!1),(async()=>{const D=await I(e.name);D.success&&D.exists&&v(!0,D.match||D.name)})())}const C=i.querySelector("#full-id-input"),X=i.querySelector("#series-no-input"),K=i.querySelector('input[name="startDate"]'),R=i.querySelector('input[name="endDate"]'),te=i.querySelectorAll('input[name="remarks"]'),ne=i.querySelector("#extension-log-container"),ge=async b=>{if(!b)return;const k=[C,X].filter(Boolean);k.forEach(v=>{v.classList.add("animate-pulse"),v.placeholder="Syncing..."});try{const[v,I]=await Promise.all([ce(`api/beneficiaries.php?next_id&year=${encodeURIComponent(b)}`),ce(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(b)}`)]),D=v.success&&v.data?.success?v.data.nextId:null,m=I.success&&I.data?.success?I.data.nextSeries:null;D&&C&&(C.value=D),m&&X&&(X.value=m)}catch(v){console.error("ID Sync error:",v)}finally{k.forEach(v=>v.classList.remove("animate-pulse"))}},pe=i.querySelector("#replacement-search-input"),be=i.querySelector("#replacement-hidden"),Q=i.querySelector("#replacement-suggestions"),ue=b=>{const k=(b.name||"").toUpperCase().trim(),v=b.startDateFormatted||b.startDate||"N/A",I=b.endDateFormatted||b.endDate||"N/A";return`${k} (${v.toUpperCase()} - ${I.toUpperCase()})`},ve=b=>{if(Q){if(!b.length){Q.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt}">No matching beneficiary found.</div>`,Q.classList.remove("hidden");return}Q.innerHTML=b.map(k=>{const v=ue(k);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${v.replace(/"/g,"&quot;")}">
                            ${v}
                        </button>
                    `}).join(""),Q.classList.remove("hidden"),Q.querySelectorAll(".replacement-option").forEach(k=>{k.addEventListener("click",()=>{const v=k.getAttribute("data-replacement")||"";pe&&(pe.value=v),be&&(be.value=v),Q.classList.add("hidden")})})}};let we=null;const N=async(b="")=>{const k=(b||"").trim(),v=`api/beneficiaries.php?replacement_candidates=1&limit=20${k?`&q=${encodeURIComponent(k)}`:""}`,I=await ce(v);I.success&&I.data?.success&&Array.isArray(I.data.candidates)&&ve(I.data.candidates)};pe&&be&&Q&&(pe.addEventListener("focus",()=>{N(pe.value||"")}),pe.addEventListener("input",()=>{be.value=pe.value.trim(),clearTimeout(we),we=setTimeout(()=>{N(pe.value||"")},250)}),document.addEventListener("click",b=>{pe&&Q&&!pe.contains(b.target)&&!Q.contains(b.target)&&Q.classList.add("hidden")}));const _=()=>{const b=i.querySelector('input[name="remarks"]:checked');return b?b.value:"ONGOING"},j=b=>{const k=i.querySelector(`input[name="remarks"][value="${b}"]`);k&&(k.checked=!0,G())},z=()=>{if(R&&R.value){const b=window.__parseFormattedDate(R.value);if(!b)return;const k=new Date;k.setHours(0,0,0,0);let v="ONGOING";b<k&&(v="EXPIRED"),j(v)}},G=()=>{if(!ne)return;const b=_();if(b==="ABSORBED"){const k=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,v=k.getTimezoneOffset()*6e4,I=new Date(k.getTime()-v).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${I}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                    `}else if(b==="RESIGNED"){const k=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,v=k.getTimezoneOffset()*6e4,I=new Date(k.getTime()-v).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${I}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ne.innerHTML=""};if(K){let b=null;g(K,D=>{const m=D.getFullYear();if(R){const n=new Date(D);n.setDate(n.getDate()+243);const p=String(n.getMonth()+1).padStart(2,"0"),y=String(n.getDate()).padStart(2,"0"),E=n.getFullYear();R.value=`${p}/${y}/${E}`}z(),m>1900&&m!==b&&(b=m,ge(m))}),R&&g(R,()=>z());const k=i.querySelector("#date-range-picker"),v=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),I=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(v&&k&&K&&R){const D=new v(k,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});K._datepicker=D.datepickers?.[0]||null,R._datepicker=D.datepickers?.[1]||null}else I&&(K&&(K._datepicker=new I(K,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),R&&(R._datepicker=new I(R,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!t){const D=new Date().getFullYear();ge(D)}}te.forEach(b=>b.addEventListener("change",G));const V=i.querySelector("#resign-btn"),oe=i.querySelector("#absorb-btn");V&&V.addEventListener("click",()=>j("RESIGNED")),oe&&oe.addEventListener("click",()=>j("ABSORBED")),i.querySelectorAll('input[type="text"], textarea').forEach(b=>{["id-number-input","full-id-input"].includes(b.id)||b.addEventListener("input",()=>{const k=b.selectionStart,v=b.selectionEnd;b.value=b.value.toUpperCase(),b.setSelectionRange(k,v)})}),z(),G(),W("education-input","course-suggestions","course-option"),W("designation-input","work-suggestions","work-option"),(()=>{const b=i.querySelector("#office-input"),k=i.querySelector("#office-suggestions");if(!b||!k)return;let v="OFFICES",I=null,D=[];const m=async()=>{const p="dole_offices_cache",y=async()=>{let L=[];try{if(Se&&Re()){const[{data:B,error:A},{data:P}]=await Promise.all([Se.from("offices").select("*").order("office"),Se.from("office_locations").select("office_id")]);if(!A&&B?.length){const U={};P&&P.forEach(q=>{U[q.office_id]=(U[q.office_id]||0)+1}),L=B.map(q=>({id:q.id??q.office_id,office:q.office||q.office_name||"",location_count:U[q.id??q.office_id]||0})).filter(q=>q.office)}}}catch{}if(!L.length)try{const B=await ce("api/beneficiaries.php?get_offices_advanced=1");B.success&&B.data?.success&&Array.isArray(B.data.offices)&&(L=B.data.offices)}catch(B){console.error("Office fetch failed:",B)}return L.length>0&&(D=L,localStorage.setItem(p,JSON.stringify({data:L,timestamp:Date.now()}))),L},E=localStorage.getItem(p);if(E)try{const{data:L,timestamp:B}=JSON.parse(E);return D=L,Date.now()-B>300*1e3&&y().then(()=>{v==="OFFICES"&&n("OFFICES",I,b.value)}),L}catch{localStorage.removeItem(p)}return D.length===0?await y():D},n=async(p="OFFICES",y=null,E="")=>{if(v=p,I=y,p==="OFFICES"){const B=(await m()).filter(H=>H.office.toLowerCase().includes(E.toLowerCase()));k.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70 border-b ${r.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${B.length>0?B.map(H=>{const Z=parseInt(H.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg ${Z?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${H.id}" data-name="${H.office}" data-has-locations="${Z}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${H.office}</span>
                                            </div>
                                            ${Z?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
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
                        `;const A=E.trim(),P=k.querySelector("#add-office-location-row-modal"),U=k.querySelector("#new-office-loc-input-modal"),q=k.querySelector("#confirm-office-with-loc-modal"),F=k.querySelector("#add-office-with-loc-btn-modal"),T=k.querySelector("#skip-office-loc-btn-modal");if(F&&P&&F.addEventListener("click",H=>{H.stopPropagation(),P.classList.remove("hidden"),P.classList.add("flex"),setTimeout(()=>U?.focus(),50)}),q&&U){const H=Z=>{Z.stopPropagation();const se=U.value.trim();b.value=se?`${A} - ${se}`:A,b.dataset.locationName=se||"",k.classList.add("hidden"),b.dispatchEvent(new Event("change"))};q.addEventListener("click",H),U.addEventListener("keydown",Z=>{Z.key==="Enter"&&H(Z)}),U.addEventListener("click",Z=>Z.stopPropagation())}T&&T.addEventListener("click",H=>{H.stopPropagation(),b.value=A,b.dataset.locationName="",k.classList.add("hidden"),b.dispatchEvent(new Event("change"))}),k.querySelectorAll(".office-code-option").forEach(H=>{H.addEventListener("click",Z=>{Z.stopPropagation(),H.dataset.hasLocations==="true"?n("LOCATIONS",{id:H.dataset.id,name:H.dataset.name}):(b.value=H.dataset.name,b.dataset.officeId=H.dataset.id,delete b.dataset.locationName,k.classList.add("hidden"),b.dispatchEvent(new Event("change")))})})}else{k.innerHTML=`
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
                                    <input type="text" id="location-search-internal" placeholder="Search in ${y.name}..." 
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
                        `;const L=k.querySelector("#locations-list-container"),B=k.querySelector("#location-search-internal"),A=`dole_locs_cache_${y.id}`;let P=[];const U=localStorage.getItem(A);if(U)try{const{data:T,timestamp:H}=JSON.parse(U);P=T}catch{localStorage.removeItem(A)}const q=async()=>{let T=[];if(Se&&Re()){const{data:H,error:Z}=await Se.from("office_locations").select("location").eq("office_id",y.id).order("location");!Z&&H&&(T=H)}if(T.length===0)try{const H=await ce(`api/beneficiaries.php?get_office_locations=1&office_id=${y.id}`);H.success&&H.data?.success&&Array.isArray(H.data.locations)&&(T=H.data.locations)}catch(H){console.error("Office locations fetch failed:",H)}T.length>0&&(P=T,localStorage.setItem(A,JSON.stringify({data:T,timestamp:Date.now()})),F(B.value))},F=(T="")=>{const H=P.filter(se=>se.location.toLowerCase().includes(T.toLowerCase())),Z=T.trim();H.length>0?L.innerHTML=H.map(se=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${se.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${se.location}</span>
                                    </div>
                                `).join(""):P.length===0?L.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(L.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60">No matching locations.</div>
                                    ${Z?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${Z}" as location
                                        </button>
                                    </div>`:""}
                                `,Z&&L.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{b.value=`${y.name} - ${Z}`,b.dataset.officeId=y.id,b.dataset.locationName=Z,k.classList.add("hidden"),b.dispatchEvent(new Event("change"))})),L.querySelectorAll(".location-option").forEach(se=>{se.addEventListener("click",Ae=>{const Ee=se.dataset.location;b.value=`${y.name} - ${Ee}`,b.dataset.officeId=y.id,b.dataset.locationName=Ee,k.classList.add("hidden"),b.dispatchEvent(new Event("change"))})})};F(B.value),q(),setTimeout(()=>B.focus(),50),B.addEventListener("input",()=>F(B.value)),B.addEventListener("click",T=>T.stopPropagation()),k.querySelector("#back-to-offices").addEventListener("click",T=>{T.stopPropagation(),n("OFFICES")})}};b.addEventListener("focus",()=>{k.classList.remove("hidden"),n(v,I,b.value)}),b.addEventListener("input",()=>{delete b.dataset.officeId,delete b.dataset.locationName,v="OFFICES",I=null,k.classList.remove("hidden"),n("OFFICES",null,b.value)}),document.addEventListener("click",p=>{!b.contains(p.target)&&!k.contains(p.target)&&(k.classList.add("hidden"),b.value||(v="OFFICES",I=null))})})();function W(b,k,v){const I=i.querySelector(`#${b}`),D=i.querySelector(`#${k}`);if(!I||!D)return;let m=!1;I.addEventListener("focus",()=>D.classList.remove("hidden")),document.addEventListener("click",n=>{!I.contains(n.target)&&!D.contains(n.target)&&D.classList.add("hidden")}),I.addEventListener("input",()=>{if(m){m=!1;return}const n=I.value.toLowerCase(),p=D.querySelectorAll(`.${v}`);let y=!1;p.forEach(E=>{const L=E.querySelector(".option-text");(L?L.innerText:E.innerText).toLowerCase().includes(n)?(E.style.display="block",y=!0):E.style.display="none"}),y?D.classList.remove("hidden"):D.classList.add("hidden")}),D.addEventListener("click",n=>{const p=n.target.closest(`.${v}`);if(!p)return;const y=p.querySelector(".option-text");I.value=y?y.innerText.trim():p.innerText.trim(),m=!0,D.classList.add("hidden"),I.dispatchEvent(new Event("change"))})}const O=i.querySelector("#add-beneficiary-form"),ee="add_beneficiary_draft";if(!t){const b=localStorage.getItem(ee);if(b)try{const k=JSON.parse(b);Object.entries(k).forEach(([v,I])=>{const D=O.elements[v];D&&D.type!=="file"&&D.type!=="hidden"&&(D.value=I)})}catch(k){console.error("Error loading draft",k)}}O.addEventListener("input",b=>{if(!t){const k=new FormData(O),v={};k.forEach((I,D)=>v[D]=I),localStorage.setItem(ee,JSON.stringify(v))}}),O&&O.addEventListener("submit",b=>{b.preventDefault(),O.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(q=>{q.classList.remove("ring-2","ring-red-500","!border-red-500")});const v=new FormData(O);let I=!1;const D=q=>{const F=O.querySelector(`[name="${q}"]`);F&&F.classList.add("ring-2","ring-red-500","!border-red-500"),I=!0},m=v.get("name"),n=v.get("contact"),p=v.get("startDate"),y=v.get("endDate"),E=(v.get("designation")||"").trim();(!m||m.trim()===""||/[0-9]/.test(m))&&D("name"),n&&n.trim()!==""&&/[^0-9]/.test(n.replace(/[\s\-\+\(\)]/g,""))&&D("contact"),p||D("startDate"),y||D("endDate");const L=v.get("age"),B=parseInt(L);if((!L||isNaN(B)||B<18||B>29)&&(I=!0,c&&(c.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof ye=="function"&&ye()?"text-red-400":"text-red-600"}`),h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),I)return;const A={};v.forEach((q,F)=>{if(["birthday","startDate","endDate"].includes(F)){const T=window.__parseFormattedDate(q);if(T){const H=T.getFullYear(),Z=String(T.getMonth()+1).padStart(2,"0"),se=String(T.getDate()).padStart(2,"0");A[F]=`${H}-${Z}-${se}`}else A[F]=q}else A[F]=q}),E||(A.designation="N/A"),A.replacement||(A.replacement="");const P=i.querySelector("#office-input");P?.dataset.officeId&&(A.officeId=P.dataset.officeId),P?.dataset.locationName&&(A.locationName=P.dataset.locationName);const U=i.querySelector("#full-id-input")?.value;t?(A.id=e?.id,U&&(A.gip_id=U)):(A.id=null,U&&(A.gip_id=U)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(A)){if(!t){const F="add_beneficiary_draft",T=O.querySelector('[name="office"]')?.value||"",H=O.querySelector('[name="designation"]')?.value||"",Z=O.querySelector('[name="education"]')?.value||"";localStorage.setItem(F,JSON.stringify({office:T,designation:H,education:Z}))}M.close(),setTimeout(()=>{M.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${t?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!t&&e?._isBulk&&qe.onSaveSuccess()},100)}else M.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const t=e.target,s=t.querySelector('button[type="submit"]'),a=s.innerHTML;s.disabled=!0,s.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(t);if((await fetch(t.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)M.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:l=>{l.addEventListener("mouseenter",M.stopTimer),l.addEventListener("mouseleave",M.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),t.reset();else throw new Error("Failed to send")}catch{M.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{s.disabled=!1,s.innerHTML=a}return!1};function dr(){M.fire({html:`
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
        `,width:"800px",showConfirmButton:!1,showCloseButton:!1,backdrop:!0,position:"top",scrollbarPadding:!1,customClass:{container:"font-montserrat !backdrop-blur-md !bg-slate-900/70",popup:"!bg-transparent border-0 !shadow-none p-0 !overflow-visible mt-24",htmlContainer:"!overflow-visible",closeButton:"hidden"},didOpen:()=>{const e=document.getElementById("extraStatsSearchForm"),t=document.getElementById("statsSearchInput"),s=document.getElementById("statsDatePickerContainer"),a=document.getElementById("datepicker-range-start"),o=document.getElementById("datepicker-range-end"),r=document.getElementById("statsSortDropdownBtn"),l=document.getElementById("statsSortDropdown"),i=document.getElementById("statsSortDropdownLabel");let d="keyword";r&&l&&(r.addEventListener("click",u=>{u.stopPropagation(),l.classList.toggle("hidden")}),document.querySelectorAll(".stats-sort-option").forEach(u=>{u.addEventListener("click",g=>{const f=g.target.getAttribute("data-sort");d=f,i.textContent=g.target.textContent,l.classList.add("hidden"),f==="date"?(t.classList.add("hidden"),t.required=!1,s.classList.remove("hidden"),s.classList.add("flex"),t.value=""):(s.classList.add("hidden"),s.classList.remove("flex"),t.classList.remove("hidden"),t.required=!1,a.value="",o.value="",f==="offices"?t.placeholder="Search by Office name (e.g. Iligan)...":f==="education"?t.placeholder="Search by Education level (e.g. College)...":f==="ages"?t.placeholder="Search by Age (e.g. 24)...":t.placeholder="Search by name, office, status...")})}),document.addEventListener("click",u=>{!r.contains(u.target)&&!l.contains(u.target)&&l.classList.add("hidden")})),setTimeout(()=>t?.focus(),100),e.addEventListener("submit",async u=>{u.preventDefault();const g={mode:d,query:t.value.trim().toLowerCase(),startDate:a.value,endDate:o.value};await cr(g)})}})}async function cr(e){const t=document.getElementById("statsSearchLoader"),s=document.getElementById("statsSearchResult");t.classList.remove("hidden"),s.classList.add("hidden"),s.classList.remove("grid");let a=await ze();if(!a||a.length===0){const o=await ce("api/beneficiaries.php?all=true");o&&o.status==="success"&&o.data?(a=o.data,typeof Oe=="function"&&Oe(a)):o&&o.data&&(a=Array.isArray(o.data)?o.data:Array.isArray(o)?o:[],typeof Oe=="function"&&Oe(a))}setTimeout(()=>{const{mode:o,query:r,startDate:l,endDate:i}=e,d=a.filter(c=>{if(o==="date"){const h=c.startDate||c.createdAt;if(!h)return!1;const w=new Date(h);if(isNaN(w.getTime()))return!1;if(w.setHours(0,0,0,0),l){const x=new Date(l);if(x.setHours(0,0,0,0),w<x)return!1}if(i){const x=new Date(i);if(x.setHours(0,0,0,0),w>x)return!1}return!0}else return o==="offices"?c.office?.toLowerCase().includes(r)||!1:o==="education"?c.education?.toLowerCase().includes(r)||!1:o==="ages"?c.age==r:r?c.name?.toLowerCase().includes(r)||!1||c.id?.toLowerCase().includes(r)||!1||c.office?.toLowerCase().includes(r)||!1||c.remarks?.toLowerCase().includes(r)||!1||c.designation?.toLowerCase().includes(r)||!1:!0});let u="";o==="date"?l&&i?u=`Date: ${l} to ${i}`:l?u=`Date: From ${l}`:i?u=`Date: Until ${i}`:u="Date: All Time":u=`${o.charAt(0).toUpperCase()+o.slice(1)}: "${r||"ALL"}"`,document.getElementById("statsSearchTermDisplay").textContent=u;const g=document.getElementById("statsTopResults");g&&(g.innerHTML="",d.length>0?d.slice(0,3).forEach(h=>{const w=(h.remarks||"No Status").toUpperCase();let x="text-gray-500";w==="ONGOING"?x="text-green-500":w==="EXPIRED"?x="text-red-500":w==="ABSORBED"?x="text-emerald-600":w==="RESIGNED"?x="text-[#ce1126]":x="text-royal-blue",g.innerHTML+=`
                        <div class="flex flex-col border-b border-gray-200 dark:border-slate-700 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-100 truncate">${h.name||"Unknown Beneficiary"}</span>
                            <div class="flex justify-between items-center text-xs mt-1">
                                <span class="text-gray-500 truncate max-w-[60%]">${h.office||"N/A"}</span>
                                <span class="${x} font-bold text-[10px] uppercase tracking-wider">${w}</span>
                            </div>
                        </div>
                    `}):g.innerHTML='<div class="text-center text-gray-400 font-bold text-xs mt-6 uppercase tracking-widest">No matching records found.</div>'),d.length,d.filter(c=>(c.remarks||"").toUpperCase()==="ONGOING").length,d.filter(c=>(c.remarks||"").toUpperCase()==="EXPIRED").length,d.filter(c=>(c.remarks||"").toUpperCase()==="ABSORBED").length,d.filter(c=>(c.remarks||"").toUpperCase()==="RESIGNED").length;const f=new Date,S={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};document.getElementById("statsCurrentDateTime").textContent=f.toLocaleString("en-US",S),Wt(d,"statsModalChartContainer"),t.classList.add("hidden"),s.classList.remove("hidden"),s.classList.add("grid")},400)}export{Ir as A,ir as B,De as C,bt as _,je as a,et as b,wr as c,kr as d,$r as e,Lr as f,me as g,ze as h,Oe as i,yr as j,It as k,$e as l,Re as m,ce as n,xr as o,Sr as p,Cr as q,vr as r,Se as s,fr as t,Er as u,Dr as v,br as w,mr as x,hr as y,Ye as z};
