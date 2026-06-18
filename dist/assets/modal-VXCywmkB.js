const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-B7rSfpuT.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import A from"./vendor-swal-BSk0fVSb.js";import{a as pt}from"./vendor-DHtNC8Ux.js";import{A as qe}from"./vendor-charts-BjInCqFR.js";const gt="true".toLowerCase()==="true";function De(){return gt}function ue(){const e=window.location.pathname,t="/dole-system/",s=e.toLowerCase().indexOf(t.toLowerCase());if(s!==-1)return e.substring(0,s+t.length);const a=e.indexOf("/frontend/");if(a!==-1)return e.substring(0,a+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function We(e="Incorrect Username or Password"){A.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function ft(e=!1){return A.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function or(){const e=localStorage.getItem("hasVisitedBefore"),t=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),t&&(t.style.display="none")),window.addEventListener("load",()=>{const s=document.querySelector("body > *:not(.page-loader)");s&&s.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),t&&t.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const Be={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const t=o=>o.split("").map(r=>r.charCodeAt(0)),s=o=>("0"+Number(o).toString(16)).substr(-2),a=o=>t(this._key).reduce((r,i)=>r^i,o);return e.split("").map(t).map(a).map(s).join("")}catch(t){return console.error("Encryption Failed",t),null}},decrypt:function(e){try{const t=a=>a.split("").map(o=>o.charCodeAt(0)),s=a=>t(this._key).reduce((o,r)=>o^r,a);return e.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(s).map(a=>String.fromCharCode(a)).join("")}catch(t){return console.error("Decryption Failed",t),null}}};function ar(){document.querySelectorAll(".login-form-shared").forEach(t=>{const s=t.querySelector('input[name="username"]'),a=t.querySelector('input[name="password"]'),o=t.querySelector('input[name="rememberMe"]');if(s&&a&&o){const r=localStorage.getItem("secure_user"),i=localStorage.getItem("secure_pass");if(r&&i){const n=Be.decrypt(r),c=Be.decrypt(i);n&&c&&(s.value=n,a.value=c,o.checked=!0)}}t.addEventListener("submit",async r=>{r.preventDefault();try{const n=await(await fetch(`${ue()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.value,password:a.value})})).json();if(n.success){o.checked?(localStorage.setItem("secure_user",Be.encrypt(s.value)),localStorage.setItem("secure_pass",Be.encrypt(a.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const c=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(n.user));const f=document.getElementById("drawer-login");if(f){f.classList.add("translate-y-full");const d=f.querySelector("[data-drawer-hide]");d&&d.click()}await ft(c),bt(c)}else{const c=document.getElementById("drawer-login");c?(c.classList.add("translate-y-full"),setTimeout(()=>{We(),setTimeout(()=>{c.classList.remove("translate-y-full"),a.value="",a.focus()},600)},400)):(We(),a.value="",a.focus())}}catch(i){console.error("Login Error:",i),A.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function bt(e=!1){const t=document.getElementById("left-panel"),s=document.getElementById("right-panel"),a=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");a&&(a.style.opacity="0"),o&&(o.style.opacity="0");const r=document.createElement("div");r.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const i=e?"":"animate__delay-1s",n=e?"animation-duration: 0.8s;":"animation-duration: 2s;";r.innerHTML=`
        <img src="${ue()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${i}" style="${n}" alt="DOLE Logo">
    `,document.body.appendChild(r);const c=e?0:1e3,f=e?600:1500;setTimeout(()=>{t&&t.classList.add("animate-slide-left"),s&&s.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${ue()}frontend/dashboard/`},f)},c)}function sr(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${ue()}`})}function nr(){const e=document.getElementById("mobile-splash"),t=document.getElementById("show-login-btn"),s=document.getElementById("back-to-splash"),a=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),r=document.getElementById("reopen-login-drawer"),i=document.getElementById("request-notifications-btn"),n=async()=>{if("Notification"in window){const h=await Notification.requestPermission();console.log("Notification permission:",h),h==="granted"&&i&&i.classList.add("hidden")}};Notification.permission==="default"&&i&&(i.classList.remove("hidden"),i.addEventListener("click",n));const c=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&n();const h=document.getElementById("drawer-login");h&&h.classList.remove("translate-y-full")},800))},f=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};t&&t.addEventListener("click",c),document.querySelectorAll(".forgot-password-link").forEach(h=>{h.addEventListener("click",S=>{S.target.closest("#mobile-splash")&&c()})}),s&&s.addEventListener("click",()=>{const h=document.getElementById("drawer-login");if(h){h.classList.add("translate-y-full");const S=h.querySelector("[data-drawer-hide]");S&&S.click()}f()});const p=document.getElementById("drawer-login"),$=document.getElementById("curved-welcome"),u=document.getElementById("peoples-bg");p&&new MutationObserver(S=>{S.forEach(y=>{y.attributeName==="class"&&(p.classList.contains("translate-y-full")?(a&&(a.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),$&&($.style.opacity="0",$.style.transform="scale(0.5)"),r&&e&&e.style.visibility==="hidden"&&(r.style.opacity="1",r.style.transform="scale(1)"),u&&(u.classList.add("opacity-0","scale-0"),u.classList.remove("opacity-40","scale-[1.6]"))):(a&&(a.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),$&&($.style.opacity="1",$.style.transform="scale(1)"),r&&(r.style.opacity="0",r.style.transform="scale(0)"),u&&(u.classList.remove("opacity-0","scale-0"),u.classList.add("opacity-40","scale-[1.6]"))))})}).observe(p,{attributes:!0})}const Ee=()=>"false".toLowerCase()==="true";function ht(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const we={debug(...e){Ee()&&console.debug(...e)},info(...e){Ee()&&console.info(...e)},warn(...e){Ee()&&console.warn(...e)},error(...e){console.error(...e)},table(e){Ee()&&console.table(e)},json(e,t){Ee()&&console.debug(e,ht(t))}},Me=new Map;async function Ae(e,t={}){const a=`${ue()}${e}`;let o=null;try{const d=JSON.parse(localStorage.getItem("user"));d&&(o=d.user_id||d.id||null)}catch{}const r={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...t.headers},...t},n=(r.method||"GET").toUpperCase()==="GET"?2:1;let c=null;for(let d=1;d<=n;d++)try{if(we.debug("[API] Request",{url:a,method:r.method||"GET",hasUserId:!!o}),r.body)try{we.json("[API] Payload",JSON.parse(r.body))}catch{we.debug("[API] Payload (raw)",r.body)}const p=await fetch(a,r);if(!p.ok)throw new Error(`HTTP ${p.status}: ${p.statusText}`);const $=await p.json();return Me.has(a)&&(Me.delete(a),we.info?.("[API] Recovered",{url:a})),we.debug("[API] Response",{url:a,ok:!0}),{success:!0,data:$}}catch(p){if(c=p,p instanceof TypeError&&/fetch/i.test(p.message||"")&&d<n){await new Promise(h=>setTimeout(h,1200));continue}}return c instanceof TypeError&&/fetch/i.test(c.message||"")?Me.get(a)||(Me.set(a,!0),we.error("API Request Network Error (suppressed for repeats):",{url:a,message:c.message})):we.error("API Request Error:",c),{success:!1,error:c?.message||"Unknown request error"}}async function ee(e){return Ae(e,{method:"GET"})}async function He(e,t){return Ae(e,{method:"POST",body:JSON.stringify(t)})}async function mt(e,t){return Ae(e,{method:"PUT",body:JSON.stringify(t)})}async function ir(e,t){const s=new URLSearchParams(t).toString();return Ae(`${e}?${s}`,{method:"PATCH"})}class xt{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(t,s,a=1e4){this.stop(t),s();const o=setInterval(async()=>{this.isPageVisible&&await s()},a);this.intervals.set(t,o),console.log(`[Polling] Started: ${t} (every ${a}ms)`)}stop(t){this.intervals.has(t)&&(clearInterval(this.intervals.get(t)),this.intervals.delete(t),console.log(`[Polling] Stopped: ${t}`))}stopAll(){this.intervals.forEach((t,s)=>this.stop(s)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const vt=new xt;function lr(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function dr(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{vt.stopAll()});const Ze="dole-gip-db",wt=2,z={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let Oe=null;function ge(){return Oe?Promise.resolve(Oe):new Promise((e,t)=>{const s=indexedDB.open(Ze,wt);s.onupgradeneeded=a=>{const o=a.target.result;if(!o.objectStoreNames.contains(z.BENEFICIARIES)){const r=o.createObjectStore(z.BENEFICIARIES,{keyPath:"id"});r.createIndex("name","name",{unique:!1}),r.createIndex("office","office",{unique:!1}),r.createIndex("remarks","remarks",{unique:!1})}o.objectStoreNames.contains(z.SYNC_QUEUE)||o.createObjectStore(z.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),o.objectStoreNames.contains(z.METADATA)||o.createObjectStore(z.METADATA,{keyPath:"key"}),o.objectStoreNames.contains(z.APP_CACHE)||o.createObjectStore(z.APP_CACHE,{keyPath:"key"})},s.onsuccess=a=>{Oe=a.target.result,console.log("[DB] IndexedDB opened:",Ze),e(Oe)},s.onerror=a=>{console.error("[DB] Failed to open IndexedDB:",a.target.error),t(a.target.error)}})}async function $e(e){const t=await ge();return new Promise((s,a)=>{const o=t.transaction(z.BENEFICIARIES,"readwrite"),r=o.objectStore(z.BENEFICIARIES);r.clear(),e.forEach(i=>{const n={...i,id:i.id||i.gip_id};r.put(n)}),o.oncomplete=()=>{kt("beneficiaries_last_sync",Date.now()),console.log(`[DB] Cached ${e.length} beneficiaries locally`),s(e.length)},o.onerror=()=>a(o.error)})}async function _e(){const e=await ge();return new Promise((t,s)=>{const r=e.transaction(z.BENEFICIARIES,"readonly").objectStore(z.BENEFICIARIES).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>s(r.error)})}async function cr(e){const t=await ge();return new Promise((s,a)=>{const r=t.transaction(z.BENEFICIARIES,"readwrite").objectStore(z.BENEFICIARIES),i={...e,id:e.id||e.gip_id},n=r.put(i);n.onsuccess=()=>s(n.result),n.onerror=()=>a(n.error)})}async function ur(e){const t=await ge();return new Promise((s,a)=>{const i=t.transaction(z.BENEFICIARIES,"readwrite").objectStore(z.BENEFICIARIES).delete(e);i.onsuccess=()=>s(),i.onerror=()=>a(i.error)})}async function yt(){const e=await ot("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function pr(e,t,s){const a=await ge();return new Promise((o,r)=>{const n=a.transaction(z.SYNC_QUEUE,"readwrite").objectStore(z.SYNC_QUEUE),c={method:e,endpoint:t,payload:s,status:"pending",attempts:0,createdAt:Date.now(),lastAttempt:null},f=n.add(c);f.onsuccess=()=>{console.log(`[SyncQueue] Enqueued ${e} ${t} (id: ${f.result})`),o(f.result)},f.onerror=()=>r(f.error)})}async function ze(){const e=await ge();return new Promise((t,s)=>{const i=e.transaction(z.SYNC_QUEUE,"readonly").objectStore(z.SYNC_QUEUE).index("status").getAll("pending");i.onsuccess=()=>t(i.result||[]),i.onerror=()=>s(i.error)})}async function gr(e,t,s={}){const a=await ge();return new Promise((o,r)=>{const n=a.transaction(z.SYNC_QUEUE,"readwrite").objectStore(z.SYNC_QUEUE),c=n.get(e);c.onsuccess=()=>{const f=c.result;if(!f)return o();const d={...f,status:t,lastAttempt:Date.now(),attempts:(f.attempts||0)+1,...s},p=n.put(d);p.onsuccess=()=>o(),p.onerror=()=>r(p.error)},c.onerror=()=>r(c.error)})}async function fr(e){const t=await ge();return new Promise((s,a)=>{const i=t.transaction(z.SYNC_QUEUE,"readwrite").objectStore(z.SYNC_QUEUE).delete(e);i.onsuccess=()=>s(),i.onerror=()=>a(i.error)})}async function br(){return(await ze()).length}async function kt(e,t){const s=await ge();return new Promise((a,o)=>{const n=s.transaction(z.METADATA,"readwrite").objectStore(z.METADATA).put({key:e,value:t});n.onsuccess=()=>a(),n.onerror=()=>o(n.error)})}async function ot(e){const t=await ge();return new Promise((s,a)=>{const i=t.transaction(z.METADATA,"readonly").objectStore(z.METADATA).get(e);i.onsuccess=()=>s(i.result?.value??null),i.onerror=()=>a(i.error)})}function St(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function Et(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch(t){return console.error("[DB] Failed to decrypt local cache",t),null}}async function Lt(e,t){const s=await ge();return new Promise((a,o)=>{const i=s.transaction(z.APP_CACHE,"readwrite").objectStore(z.APP_CACHE),n={key:e,data:St(t),updated_at:Date.now()},c=i.put(n);c.onsuccess=()=>{console.log(`[DB] Securely cached offline data for: ${e}`),a()},c.onerror=()=>o(c.error)})}async function $t(e){const t=await ge();return new Promise((s,a)=>{const i=t.transaction(z.APP_CACHE,"readonly").objectStore(z.APP_CACHE).get(e);i.onsuccess=()=>{i.result&&i.result.data?s(Et(i.result.data)):s(null)},i.onerror=()=>a(i.error)})}async function Ct(){const[e,t]=await Promise.all([_e(),ze()]),s=await ot("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:s?new Date(s).toLocaleString():"Never"}}window.__doleDB={getStats:Ct,getLocalBeneficiaries:_e,getPendingSyncItems:ze,setSecureCache:Lt,getSecureCache:$t};const se=()=>document.documentElement.classList.contains("dark"),Ge=()=>se()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},ce={royalBlue:()=>se()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(se(),"#94a3b8")};let Le=null;function je(e){const s=`; ${document.cookie}`.match(new RegExp(`;\\s*${e}=([^;]+)`));return s?decodeURIComponent(s[1]):null}function Re(e,t,s){let a=new Date;a.setTime(a.getTime()+s*24*60*60*1e3),document.cookie=`${e}=${encodeURIComponent(t)};expires=${a.toUTCString()};path=/`}let K=je("user_workforce_filter")||"ALL",at=je("user_workforce_label")||"Overall Stats",Ie=je("user_gender_filter")||"ALL",st=je("user_gender_label")||"All Years";function ve(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const a=new Date(`${t}T00:00:00`);return isNaN(a.getTime())?null:a}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const a=t.replace(" ","T"),o=new Date(a);return isNaN(o.getTime())?null:o}const s=new Date(t);return isNaN(s.getTime())?null:s}const Je={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function Pe(e=!1){if(localStorage.getItem("isLoggedIn")!=="true"||!document.getElementById("workforce-chart"))return;let t=[];if(e&&(Le=null),Le)t=Le;else{const[b,v]=await Promise.all([_e(),yt()]);if(b.length>0&&v<6e4)t=b,Le=t,console.log(`[Charts] IndexedDB hit — ${t.length} records (${Math.round(v/1e3)}s old)`);else try{const E=await ee("api/beneficiaries.php?all=true");if(E.success&&E.data?.success&&E.data?.beneficiaries)t=E.data.beneficiaries,Le=t,$e(t).catch(()=>{}),console.log(`[Charts] API fetch — cached ${t.length} records to IndexedDB`);else{console.debug("[CHARTS] Skipping chart render:",E.data?.error||E.error);return}}catch(E){console.debug("[CHARTS] Chart init skipped:",E?.message);return}}if(t.length===0)return;Tt();const s=Ge();document.querySelectorAll('[id$="-chart"]').forEach(l=>l.innerHTML="");const a=[...new Set(t.map(l=>{const b=l.startDate||l.createdAt,v=ve(b);return v?v.getFullYear().toString():null}).filter(l=>l))].sort((l,b)=>b-l);Bt(a,t),Mt(a,t);const o=new Date;let r=t;K!=="ALL"&&(r=t.filter(l=>{if(K.includes("D")){const b=ve(l.createdAt);if(!b)return!1;const v=parseInt(K),E=new Date;return E.setDate(o.getDate()-v),E.setHours(0,0,0,0),b>=E}else if(a.includes(K)){const b=ve(l.startDate||l.createdAt);return b?b.getFullYear().toString()===K:!1}return!0}));const i=Fe(t),n=Fe(r);At(i,n);let c=[];if(K==="ALL"){const b=new Date().getFullYear();for(let v=2020;v<=b;v++)c.push(v.toString())}else if(a.includes(K))c=["Q1","Q2","Q3","Q4"];else{const l=parseInt(K)||7;c=Array.from({length:l},(b,v)=>{const E=new Date;return E.setDate(o.getDate()-(l-1-v)),new Date(E.getTime()-E.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const f={};c.forEach(l=>f[l]=0),r.forEach(l=>{const b=l.startDate||l.createdAt;if(b){const v=ve(b);if(!v)return;const E=v.getFullYear().toString(),C=new Date(v.getTime()-v.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(K==="ALL")f.hasOwnProperty(E)&&f[E]++;else if(K.includes("D"))f.hasOwnProperty(C)&&f[C]++;else if(E===K){const k="Q"+(Math.floor(v.getMonth()/3)+1);f.hasOwnProperty(k)&&f[k]++}}});const d=Object.values(f),p=r.length,$=d[d.length-1]||0,u=d[d.length-2]||0;let h;if(K==="ALL"){const l=p/c.length;h=$>=l}else h=$>=u;let S=h?ce.successGreen:ce.philippineRed,y=h?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",D=h?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";K==="ALL"?(S=ce.successGreen,y="bg-green-500 shadow-green-500/30",D="text-green-600 dark:text-green-400"):K==="7D"?(S="#fb923c",y="bg-orange-500 shadow-orange-500/30",D="text-orange-500 dark:text-orange-400"):K==="30D"?(S="#eab308",y="bg-yellow-500 shadow-yellow-500/30",D="text-yellow-600 dark:text-yellow-400"):K==="90D"?(S="#2563eb",y="bg-blue-600 shadow-blue-600/30",D="text-blue-600 dark:text-blue-400"):a.includes(K)&&(S="#f87171",y="bg-red-400 shadow-red-400/30",D="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(l=>{l.textContent=p,l.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${D}`});const _=u>0?Math.round(($-u)/u*100):$>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(l=>l.textContent=(_>=0?"+":"")+(K==="ALL"?"Growth":_+"%"));const te=document.getElementById("added-metric-badge");te&&(te.className=`flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${y}`);const Q=document.getElementById("added-metric-icon");Q&&(Q.style.transform=h?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(l=>{const b=document.getElementById(l);b&&(b.innerHTML=`${at} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const le={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:se()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:S,opacity:.6},{offset:100,color:S,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[S]},series:[{name:"New Beneficiaries",data:d}],xaxis:{categories:c,labels:{show:!0,style:{colors:s.muted,fontSize:"0.625rem",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:s.muted,fontSize:"0.625rem",fontWeight:600}}},grid:{show:!0,borderColor:s.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[S],markers:{size:c.length>20?0:4,colors:[S],strokeColors:s.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:se()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};ye("workforce-chart",le);const ne=Ie==="ALL"?t:t.filter(l=>{const b=ve(l.startDate||l.createdAt);return b&&b.getFullYear().toString()===Ie}),ie=Fe(ne),re={series:[ie.genders.Female||0,ie.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:s.cardBg},colors:[ce.philippineRed,ce.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"0.75rem",fontWeight:600,color:s.muted},value:{show:!0,fontSize:"1.5rem",fontWeight:900,color:s.text,formatter:l=>l},total:{show:!0,label:"TOTAL",fontSize:"0.625rem",fontWeight:800,color:s.muted,formatter:l=>l.globals.seriesTotals.reduce((b,v)=>b+v,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[s.cardBg],width:4},theme:{mode:se()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"1.125rem"}}}}}}}]};ye("gender-chart",re);const pe=[n.education["College Grad"],n.education["College Lvl"],n.education["HS Grad"],n.education["Senior High"]];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([l,b])=>{document.querySelectorAll(b).forEach(v=>v.textContent=n.education[l]||0)});const he={series:pe.map(l=>r.length>0?Math.round(l/r.length*100):0),chart:{height:380,type:"radialBar",background:s.cardBg,fontFamily:"Montserrat, sans-serif"},plotOptions:{radialBar:{hollow:{size:"45%"},dataLabels:{name:{fontSize:"0.6875rem",fontWeight:700,color:s.muted,offsetY:-5},value:{fontSize:"1rem",fontWeight:900,color:s.text,offsetY:5},total:{show:!0,label:"GRADUATES",color:s.muted}},track:{background:s.grid,strokeWidth:"95%"}}},colors:[ce.royalBlue(),ce.goldenYellow,ce.philippineRed,ce.mutedSlate()],labels:["Col. Grad","Col. Lvl","HS Grad","Snr High"],theme:{mode:se()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:320},plotOptions:{radialBar:{hollow:{size:"30%"},dataLabels:{value:{fontSize:"0.875rem"}}}}}}]};ye("education-chart",he),document.querySelectorAll(".count-absorbed").forEach(l=>l.textContent=n.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(l=>l.textContent=n.status.ONGOING||0);const me={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:n.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:n.status.ONGOING||0},{x:"Expired",y:n.status.EXPIRED||0},{x:"Resigned",y:n.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"0.75rem",fontWeight:"900",colors:[s.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:s.muted,fontWeight:700}}},yaxis:{show:!1},grid:{show:!1},tooltip:{theme:se()?"dark":"light",y:{formatter:l=>l+" Beneficiaries"}},theme:{mode:se()?"dark":"light"}};ye("status-chart",me);const xe=Object.entries(n.designations).sort((l,b)=>b[1]-l[1]).slice(0,5),M={series:[{name:"Beneficiaries",data:xe.map(l=>l[1]),color:S}],chart:{type:"bar",height:320,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:s.cardBg},plotOptions:{bar:{horizontal:!0,columnWidth:"100%",borderRadius:8,barHeight:"52%"}},dataLabels:{enabled:!1},xaxis:{categories:xe.map(l=>l[0]),labels:{show:!0,style:{fontWeight:600,colors:s.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!0,style:{fontWeight:700,colors:s.text,fontSize:"0.625rem"}}},grid:{borderColor:s.grid,strokeDashArray:4,padding:{left:-15,right:0}},theme:{mode:se()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:350},xaxis:{labels:{style:{fontSize:"0.5rem"}}},yaxis:{labels:{style:{fontSize:"0.5625rem"}}}}}]};ye("job-roles-chart",M);const R={series:[{name:"Beneficiaries",data:Object.values(n.ages),color:S}],chart:{type:"area",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:s.cardBg},stroke:{curve:"smooth",width:3},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1}},dataLabels:{enabled:!0,offsetY:-10,offsetX:0,style:{fontSize:"0.5625rem",fontWeight:"800"},background:{enabled:!0,padding:3,borderRadius:4,borderWidth:0,opacity:.9}},xaxis:{categories:Object.keys(n.ages),labels:{style:{fontWeight:600,colors:s.muted,fontSize:"0.625rem"}},axisBorder:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:s.muted,fontSize:"0.625rem"}}},grid:{borderColor:s.grid,strokeDashArray:6,padding:{left:20,right:60}},theme:{mode:se()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:160}}}]};ye("age-chart",R);const O=Dt(t);It(O);const q={series:[{name:"Actual Beneficiaries",data:Object.values(O.municipalityData).map(l=>l.actual)},{name:"Target Slots",data:Object.values(O.municipalityData).map(l=>l.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:s.cardBg},theme:{mode:se()?"dark":"light"},colors:[ce.royalBlue(),se()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(O.municipalityData),labels:{style:{fontWeight:600,colors:s.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:s.muted}}},legend:{show:!1},fill:{opacity:1},grid:{borderColor:s.grid,strokeDashArray:4,yaxis:{lines:{show:!0}}}};ye("performance-gap-chart",q)}function ye(e,t){const s=document.getElementById(e);if(!s)return;s.innerHTML="",new qe(s,t).render()}function Fe(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},s=new Date;return s.setHours(0,0,0,0),e.forEach(a=>{const o=a.office||"Unassigned";t.offices[o]=(t.offices[o]||0)+1;const r=(a.gender||"Unknown").trim(),i=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[i]++;const n=(a.education||"").toUpperCase();n.includes("GRADUATE")||n.includes("DEGREE")||n.includes("BS")||n.includes("AB")?t.education["College Grad"]++:n.includes("COLLEGE")||n.includes("LEVEL")||n.includes("UNIT")?t.education["College Lvl"]++:n.includes("SENIOR")?t.education["Senior High"]++:(n.includes("HS")||n.includes("HIGH"))&&t.education["HS Grad"]++;const c=a.designation||"General Support";t.designations[c]=(t.designations[c]||0)+1;const f=(a.remarks||a.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),d=!!a.absorbDate;if(f.includes("ABSORBED")||d)t.status.ABSORBED++;else if(f.includes("RESIGNED"))t.status.RESIGNED++;else if(f==="ONGOING"||f.includes("ONGOING")||f.includes("ACTIVE")||a.status_id==1)t.status.ONGOING++;else if(f.includes("EXPIRED"))t.status.EXPIRED++;else{let $=!1;if(a.endDate){const u=ve(a.endDate);u&&u<s&&($=!0)}$?t.status.EXPIRED++:t.status.ONGOING++}const p=parseInt(a.age);isNaN(p)||(t.totalAge+=p,t.ageCount++,p>=18&&p<=24?t.ages["18-24"]++:p>=25&&p<=30?t.ages["25-30"]++:p>=31&&p<=40?t.ages["31-40"]++:p>=41&&t.ages["41+"]++)}),t}function Dt(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(Je).forEach(([s,a])=>{t.municipalityData[s]={actual:0,target:a},t.totalTarget+=a}),e.forEach(s=>{const a=(s.office||"").toUpperCase();let o="OTHER";for(const i in Je)if(a.includes(i)){o=i;break}if(t.municipalityData[o]&&(t.municipalityData[o].actual++,t.totalActual++),(s.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,s.createdAt&&s.startDate){const i=new Date(s.createdAt),n=new Date(s.startDate),c=Math.ceil((n-i)/(1e3*60*60*24));c>=0&&c<180&&(t.velocity.totalDays+=c,t.velocity.count++)}}),t}function It(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(r=>{r.textContent=t+"%";const i=r.parentElement?.nextElementSibling?.firstElementChild;i&&(i.style.width=t+"%")});const s=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(r=>r.textContent=s);const a=e.retention.count+e.retention.resign,o=a>0?(e.retention.count/a*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(r=>r.textContent=o+"%")}function At(e,t){const s=Object.values(e.offices).reduce((u,h)=>u+h,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(u=>u.textContent=s);const a=e.genders.Female||0,o=e.genders.Male||0,r=a+o,i=r>0?Math.round(a/r*100)+"%":"0%",n=r>0?Math.round(o/r*100)+"%":"0%";document.querySelectorAll(".metric-female-ratio").forEach(u=>u.textContent=i),document.querySelectorAll(".metric-male-ratio").forEach(u=>u.textContent=n);const c=Object.keys(e.offices).length;document.querySelectorAll(".metric-deployment-sites").forEach(u=>u.textContent=c);const f=e.ageCount>0?Math.round(e.totalAge/e.ageCount):0;document.querySelectorAll(".metric-avg-age").forEach(u=>u.textContent=f),document.querySelectorAll(".metric-avg-age-range").forEach(u=>u.textContent=f+" YRS");const d=Object.values(t.designations).reduce((u,h)=>u+h,0);let p=0;Object.entries(t.designations).forEach(([u,h])=>{u.toLowerCase().match(/field|driver|maintenance/)&&(p+=h)}),document.querySelectorAll(".count-office-based").forEach(u=>u.textContent=d-p),document.querySelectorAll(".count-field-based").forEach(u=>u.textContent=p);const $=Object.entries(t.designations).sort((u,h)=>h[1]-u[1])[0]?.[0]||"N/A";document.querySelectorAll(".metric-top-role").forEach(u=>{u.dataset.originalTopRole=$;const h=document.getElementById("status-content-view")&&!document.getElementById("status-content-view").classList.contains("hidden");u.textContent=h?"EMPLOYMENT STATUS":$})}function Bt(e,t){const s=document.querySelector("#lastDaysdropdown ul");if(!s)return;const a=t.length,o=new Date,r=c=>{const f=new Date;return f.setDate(o.getDate()-c),f.setHours(0,0,0,0),t.filter(d=>{const p=ve(d.createdAt);return p&&p>=f}).length},i=c=>t.filter(f=>{const d=ve(f.startDate||f.createdAt);return d&&d.getFullYear().toString()===c}).length;let n=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${K==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${a}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${K==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${K==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${K==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(c=>{const f=i(c);n+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${c}', 'Year ${c}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${K===c?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${c}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${f}</span>
            </a>
        </li>`}),s.innerHTML=n}function Mt(e,t){const s=document.getElementById("gender-filter-options"),a=document.getElementById("gender-filter-button");if(!s||!a)return;const o=t.length,r=n=>t.filter(c=>{const f=ve(c.startDate||c.createdAt);return f&&f.getFullYear().toString()===n}).length;let i=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${Ie==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${o}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(n=>{const c=r(n);i+=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${n}', 'Year ${n}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${Ie===n?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${n}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${c}</span>
            </a>
        </li>
        `}),s.innerHTML=i,a.innerHTML=`${st} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function Ot(e,t){K=e,at=t,Re("user_workforce_filter",e,30),Re("user_workforce_label",t,30),["lastDaysdropdown"].forEach(a=>{const o=document.getElementById(a);if(o&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown",a);r&&r.hide()}else o&&o.classList.add("hidden")}),Pe()}function Nt(e,t){Ie=e,st=t,Re("user_gender_filter",e,30),Re("user_gender_label",t,30);const s=document.getElementById("gender-filter-dropdown");if(s&&window.FlowbiteInstances){const a=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");a&&a.hide()}else s&&s.classList.add("hidden");Pe()}function Tt(){const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e),s=t.full_name||t.username||"System User",a=t.email||(t.username?`${t.username}@dole.gov.ph`:"user@dole.gov.ph"),o=t.profile_picture_path,r=s.trim().split(" ").map(i=>i[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(i=>i.textContent=s),document.querySelectorAll(".sidebar-user-email").forEach(i=>i.textContent=a),document.querySelectorAll(".sidebar-user-avatar").forEach(i=>{const n=i.querySelector(".sidebar-avatar-initials"),c=i.querySelector(".sidebar-avatar-img");if(o&&c){const f=ue(),d=o.startsWith("http")?o:f+o.replace(/^\//,"");c.src=d,c.classList.remove("hidden"),n&&n.classList.add("hidden")}else n&&(n.textContent=r,n.classList.remove("hidden"),c&&c.classList.add("hidden"))})}catch(t){console.error("Failed to parse user data for sidebar:",t)}}window.updateWorkforceFilter=Ot;window.updateGenderFilter=Nt;document.addEventListener("themeChanged",()=>{setTimeout(()=>Pe(),50)});window.addEventListener("dataSynced",()=>{console.log("[Charts] Data synced detected, refreshing analytics..."),Pe(!0)});let ke=null;function Rt(e,t){const s=document.getElementById(t);if(!s)return;if(ke&&(ke.destroy(),ke=null),e.length===0){const f=Ge(),d={series:[1],chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!1}},labels:["No Data"],colors:[f.grid],plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"24px",fontWeight:900,color:f.muted,formatter:()=>"0"},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:f.muted,formatter:()=>"0"}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:se()?["#1e293b"]:["#ffffff"],width:2},tooltip:{enabled:!1},legend:{show:!1}};ke=new qe(s,d),ke.render();return}const a={ongoing:0,expired:0,absorbed:0,resigned:0,other:0};e.forEach(f=>{const d=(f.remarks||"").toUpperCase();d==="ONGOING"?a.ongoing++:d==="EXPIRED"?a.expired++:d==="ABSORBED"?a.absorbed++:d==="RESIGNED"?a.resigned++:a.other++});const o=[],r=[],i=[];a.ongoing>0&&(o.push(a.ongoing),r.push("Ongoing"),i.push(ce.successGreen)),a.expired>0&&(o.push(a.expired),r.push("Expired"),i.push(ce.philippineRed)),a.absorbed>0&&(o.push(a.absorbed),r.push("Absorbed"),i.push("#059669")),a.resigned>0&&(o.push(a.resigned),r.push("Resigned"),i.push("#b91c1c")),a.other>0&&(o.push(a.other),r.push("Other"),i.push(ce.mutedSlate()));const n=Ge(),c={series:o,chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!0,easing:"easeinout",speed:800,dynamicAnimation:{enabled:!0,speed:350}}},labels:r,colors:i,plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"10px",fontWeight:800,color:n.muted,offsetY:-5},value:{show:!0,fontSize:"24px",fontWeight:900,color:n.text,offsetY:5},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:n.muted}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:se()?["#1e293b"]:["#ffffff"],width:2},tooltip:{theme:se()?"dark":"light",style:{fontSize:"12px"}},legend:{show:!1}};ke=new qe(s,c),ke.render()}const _t="modulepreload",jt=function(e,t){return new URL(e,t).href},Xe={},nt=function(t,s,a){let o=Promise.resolve();if(s&&s.length>0){let f=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};const i=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),c=n?.nonce||n?.getAttribute("nonce");o=f(s.map(d=>{if(d=jt(d,a),d in Xe)return;Xe[d]=!0;const p=d.endsWith(".css"),$=p?'[rel="stylesheet"]':"";if(a)for(let h=i.length-1;h>=0;h--){const S=i[h];if(S.href===d&&(!p||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${$}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":_t,p||(u.as="script"),u.crossOrigin="",u.href=d,c&&u.setAttribute("nonce",c),document.head.appendChild(u),p)return new Promise((h,S)=>{u.addEventListener("load",h),u.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(i){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i}return o.then(i=>{for(const n of i||[])n.status==="rejected"&&r(n.reason);return t().catch(r)})};let be=null;if(De()){const e="https://llnddycvbcetztzwbdpx.supabase.co",t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{be=pt(e,t),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(s){console.error("[SUPABASE SDK] Failed to initialize client:",s)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");function Pt(e=new Date().getFullYear()){const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],s=[];for(let a=0;a<12;a++){const o=new Date(e,a+1,0).getDate();s.push(`${t[a]} 1-15, ${e}`),s.push(`${t[a]} 16-${o}, ${e}`)}return s}function Ht(e,t,s){if(s==="ar")return(e.period||"").toUpperCase().trim()===t.toUpperCase().trim();{const a=t.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!a)return!1;const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(a[1].toUpperCase());if(r===-1)return!1;const i=parseInt(a[4]),n=parseInt(a[2]),c=parseInt(a[3]),f=(e.date||"").substring(0,10),d=new Date(f+"T00:00:00");return isNaN(d)?!1:d.getFullYear()===i&&d.getMonth()===r&&d.getDate()>=n&&d.getDate()<=c}}function Ft(e){if(!e)return"-";const t=e.toUpperCase();return t==="VERIFIED"||t==="COMPLETED"?"✓":t==="REJECTED"||t==="DECLINED"?"X":t==="PENDING"?"?":t}function Ke(e,t,s,a){const o=e.map(r=>{const i=t[r.id]||[],n=a.map(c=>{const f=i.find(d=>Ht(d,c,s));return f?Ft(f.status):"-"});return{name:r.name||r.id,cells:n}});return{periods:a,rows:o}}function Qe(e,t,s){const{periods:a,rows:o}=t,r=a.length+1;let i='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return i+=`<tr><td colspan="${r}" style="background:${s};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,i+=`<tr><th style="background:${s};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,a.forEach(n=>{i+=`<th style="background:${s};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${n}</th>`}),i+="</tr>",o.forEach((n,c)=>{const f=c%2===0?"#ffffff":"#f5f5f5";i+="<tr>",i+=`<td style="background:${f};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${n.name}</td>`,n.cells.forEach(d=>{i+=`<td style="background:${f};padding:5px 8px;text-align:center;font-weight:bold;color:${d==="✓"?"#15803d":d==="X"?"#dc2626":"#9ca3af"};">${d}</td>`}),i+="</tr>"}),i+="</table>",i}async function hr(e){const t="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",s=e.length,a=await A.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(c=>{c.addEventListener("change",()=>{const f=document.getElementById("custom-count-wrap");f.classList.toggle("hidden",c.value!=="custom"||!c.checked);const d=document.querySelector('input[name="exp-count"]:checked');f.classList.toggle("hidden",d?.value!=="custom")})})},preConfirm:()=>{const c=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",f=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let d=parseInt(f==="custom"?document.getElementById("exp-custom-count")?.value||s:f,10);(isNaN(d)||d<1)&&(d=10),d=Math.min(d,s);const p=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:c,count:d,year:p}}});if(!a.isConfirmed||!a.value)return;const{type:o,count:r,year:i}=a.value,n=e.slice(0,r);await it(n,o,i)}async function it(e,t,s){A.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const a=Pt(s),o=ue();async function r(S){const D=await(await fetch(`${o}api/logs.php?type=${S}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return D.success?D.logs||[]:[]}let i={},n={};(t==="dtr"||t==="both")&&(await r("dtr")).forEach(y=>{const D=String(y.gip_id||y.beneficiary_id||y.id||"");i[D]||(i[D]=[]),i[D].push(y)}),(t==="ar"||t==="both")&&(await r("ar")).forEach(y=>{const D=String(y.gip_id||y.beneficiary_id||y.id||"");n[D]||(n[D]=[]),n[D].push(y)});const c=e.map(S=>({...S,mapKey:String(S.id||S.gip_id||S.beneficiary_id)}));let f="";const d=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(t==="dtr"||t==="both"){const S=c.map(D=>({...D,id:D.mapKey})),y=Ke(S,i,"dtr",a);f+="<br>"+Qe(`DTR – Daily Time Records (${s})`,y,"#1d4ed8")}if(t==="ar"||t==="both"){const S=c.map(D=>({...D,id:D.mapKey})),y=Ke(S,n,"ar",a);f+="<br><br>"+Qe(`AR – Accomplishment Reports (${s})`,y,"#d97706")}const p=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${d} | DOLE LDNPFO – GIP Monitoring System</p>
                ${f}
            </body>
            </html>
        `,$=new Blob([p],{type:"application/vnd.ms-excel"}),u=URL.createObjectURL($),h=document.createElement("a");h.href=u,h.download=`LDN_LOGS_${t.toUpperCase()}_${s}.xls`,document.body.appendChild(h),h.click(),URL.revokeObjectURL(u),document.body.removeChild(h),A.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(a){console.error("[LogsExport] Error:",a),A.fire("Error",a.message||"Failed to generate export.","error")}}const Se="color-theme",qt=3600*24*365;function Gt(e,t,s){document.cookie=`${e}=${t}; max-age=${s}; path=/; SameSite=Lax`}function lt(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}function dt(){const e=localStorage.getItem(Se)||lt(Se);return e==="dark"||e==="light"?e:"light"}function Ne(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem(Se,e),Gt(Se,e,qt),Ut(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function Ue(){const e=dt();Ne(e==="dark"?"light":"dark")}function Ut(e){const t=e==="dark",s=document.getElementById("pref-dark-mode");s&&(s.checked=t);const a=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");a&&o&&(a.classList.toggle("hidden",t),o.classList.toggle("hidden",!t));const r=document.getElementById("sidebar-theme-label");r&&(r.textContent=t?"Light Mode":"Dark Mode")}function mr(){const e=dt();Ne(e);const t=document.getElementById("pref-dark-mode");t&&t.addEventListener("change",()=>{Ne(t.checked?"dark":"light")});const s=document.getElementById("theme-toggle-btn");s&&s.addEventListener("click",Ue),document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.addEventListener("click",Ue)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{localStorage.getItem(Se)||lt(Se)||Ne(a.matches?"dark":"light")})}function fe(){return document.documentElement.classList.contains("dark")}window.toggleTheme=Ue;window.isDarkMode=fe;const Te={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=fe(),t={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},s=`
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
        `;A.fire({html:s,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:a=>{const o=a.querySelector("#csv-upload"),r=a.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(n=>{r.addEventListener(n,i,!1)});function i(n){n.preventDefault(),n.stopPropagation()}["dragenter","dragover"].forEach(n=>{r.addEventListener(n,()=>{r.classList.add("border-blue-500","bg-blue-50/50"),e&&r.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(n=>{r.addEventListener(n,()=>{r.classList.remove("border-blue-500","bg-blue-50/50"),e&&r.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",n=>{const c=n.target.files[0];if(c){const f=a.querySelector("#auto-save-toggle");this.isAutoSave=f?f.checked:!1,this.handleFile(c)}}),r.addEventListener("drop",n=>{const f=n.dataTransfer.files[0];if(f){const d=a.querySelector("#auto-save-toggle");this.isAutoSave=d?d.checked:!1,this.handleFile(f)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){A.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const t=new FileReader;t.onload=s=>{const a=s.target.result;this.parseCSV(a)},t.readAsText(e)},async parseCSV(e){let t=[],s="",a=!1;for(let o=0;o<e.length;o++){let r=e[o];r==='"'&&(a=!a),!a&&(r===`
`||r==="\r")?(r==="\r"&&e[o+1]===`
`&&o++,s.trim()!==""&&t.push(s),s=""):s+=r}s.trim()!==""&&t.push(s),this.queue=[];for(let o=0;o<t.length;o++){let r=t[o].trim();if(!r)continue;let i=[],n="",c=!1;for(let f=0;f<r.length;f++){let d=r[f];d==='"'?c=!c:d===","&&!c?(i.push(n.replace(/(^"|"$)/g,"").trim()),n=""):n+=d}if(i.push(n.replace(/(^"|"$)/g,"").trim()),i.length>=2){const f=i[3];if(!f||isNaN(parseInt(f)))continue;const d=i[1];if(!d||d.toLowerCase()==="name"||d.toLowerCase()==="full name")continue;const p=i[2];let $=i[4]?i[4].toUpperCase().trim():"",u="";($==="F"||$.includes("FEMALE"))&&(u="Female"),($==="M"||$.includes("MALE"))&&(u="Male");const h=i[5],S=i[6],y=i[7],D=this.formatDate(i[8]),_=this.formatDate(i[9]);this.queue.push({name:d,address:p,age:f,gender:u,education:h,startDate:D,endDate:_,office:S,designation:y})}}if(this.queue.length>0){try{A.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{A.showLoading()}});const o=this.queue.map(c=>c.name);let r=null;try{r=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{r=null}const n=await(await fetch(`${ue()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...r?{"X-User-Id":String(r)}:{}},body:JSON.stringify({names:o,user_id:r})})).json();if(n.success&&n.duplicates&&n.duplicates.length>0){const c=new Set(n.duplicates.map(d=>d.toLowerCase().trim())),f=this.queue.length;this.queue=this.queue.filter(d=>{const p=c.has(d.name.toLowerCase().trim());return p&&console.warn(`%c[Bulk Add] SKIPPED: ${d.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!p}),console.log(`[Bulk Add] Removed ${f-this.queue.length} duplicates ahead of time.`)}}catch(o){console.error("Bulk duplicate check failed:",o)}if(this.queue.length===0){A.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,A.close(),this.processNext()}else A.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){fe();const e=Math.round(this.currentIndex/this.queue.length*100),t=`
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
        `;if(A.isVisible()&&A.getPopup().querySelector("#bulk-progress-bar")){const s=document.getElementById("bulk-progress-bar"),a=A.getPopup().querySelector("span.text-\\[10px\\]"),o=document.getElementById("bulk-current-name");s&&(s.style.width=`${e}%`),a&&(a.textContent=`${this.currentIndex} / ${this.queue.length}`),o&&(o.textContent=this.queue[this.currentIndex]?.name||"...")}else A.fire({html:t,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:s=>{s.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const t=new Date(e);if(isNaN(t.getTime())){const r=e.split("/");return r.length===3?`${r[2]}-${r[1].padStart(2,"0")}-${r[0].padStart(2,"0")}`:""}const s=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${s}-${a}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const s=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[a,o]=await Promise.all([ee(`api/beneficiaries.php?next_id&year=${s}`),ee(`api/beneficiaries.php?next_series_no&year=${s}`)]);a.success&&a.data?.success&&a.data?.nextId&&(e.gip_id=a.data.nextId,e.id=null),o.success&&o.data?.success&&o.data?.nextSeries&&(e.seriesNo=o.data.nextSeries)}catch(s){console.warn("[Bulk Add] Identifier fetch failed, continuing:",s?.message||s)}const t=await window.addBeneficiaryData(e);this.isActive&&(t?this.onSaveSuccess():Ce(e))})():Ce(e)):Ce(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),A.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,A.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=Te;function et(e){if(!e)return"";const t=new Date(e),s=new Date;let a=s.getFullYear()-t.getFullYear();const o=s.getMonth()-t.getMonth();return(o<0||o===0&&s.getDate()<t.getDate())&&a--,a>=0?a:0}function Vt(e){if(!e||e==="N/A")return"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const t=e.toUpperCase();if(t.includes("LGU"))return/ILIGAN/i.test(e)?"bg-yellow-400 text-white border border-yellow-500":"bg-yellow-100 text-yellow-700 border border-yellow-200 dark:!text-white";if(t.includes("DOLE"))return"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white";if(t.includes("DEPED"))return"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white";if(t.includes("DICT"))return"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white";if(t.includes("DOH"))return"bg-red-100 text-red-700 border border-red-200 dark:!text-white";if(t.includes("DSWD"))return"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white";if(t.includes("DTI"))return"bg-green-100 text-green-700 border border-green-200 dark:!text-white";if(t.includes("DPWH"))return"bg-stone-100 text-stone-700 border border-stone-200 dark:!text-white";if(t.includes("DILG"))return"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white";if(t.includes("DOST"))return"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white";if(t.includes("DENR"))return"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white";if(t.includes("CHED"))return"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white";if(t.includes("TESDA"))return"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white";if(t.includes("DOJ"))return"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white";if(t.includes("DOT")||t.includes("TOURISM"))return"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white";if(t.includes("DA")&&!t.includes("DPWH")&&!t.includes("DILG"))return"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white";if(t.includes("PRC"))return"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white";if(t.includes("SSS"))return"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white";if(t.includes("GSIS"))return"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white";if(t.includes("PHIC")||t.includes("PHILHEALTH"))return"bg-blue-200 text-blue-800 border border-blue-300 dark:!text-white";if(t.includes("NBI"))return"bg-zinc-100 text-zinc-700 border border-zinc-200 dark:!text-white";const s=["bg-purple-100 text-purple-700 border border-purple-200","bg-rose-100 text-rose-700 border border-rose-200","bg-amber-100 text-amber-700 border border-amber-200","bg-teal-100 text-teal-700 border border-teal-200","bg-indigo-100 text-indigo-700 border border-indigo-200","bg-lime-100 text-lime-700 border border-lime-200","bg-sky-100 text-sky-700 border border-sky-200","bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200","bg-emerald-100 text-emerald-700 border border-emerald-200","bg-orange-100 text-orange-700 border border-orange-200","bg-pink-100 text-pink-700 border border-pink-200","bg-green-100 text-green-700 border border-green-200","bg-violet-100 text-violet-700 border border-violet-200","bg-cyan-100 text-cyan-700 border border-cyan-200","bg-red-100 text-red-700 border border-red-200"];let a=0;for(let o=0;o<e.length;o++)a=a*31+e.charCodeAt(o)>>>0;return s[a%s.length]+" dark:!text-white"}function zt(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300";const t=e.toUpperCase();return t==="ONGOING"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800":t==="EXPIRED"?"bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800":t==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900":t==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900":"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300"}function tt(e,t=0){e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const s=window.innerWidth<640?"top":"top-start";let a=t;const o=e.arLogs||[],r=e.dtrLogs||[],i=e.docs||[],n=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],c=n.map(u=>{const h=i.find(S=>S.name.toUpperCase()===u.toUpperCase());return h||{name:u,status:"PENDING",id:null}});i.forEach(u=>{n.some(S=>S.toUpperCase()===u.name.toUpperCase())||c.push(u)});const f=`
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
        <div class="col-span-7 flex flex-col items-end gap-1 text-right overflow-hidden w-full">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pr-1 flex justify-end items-center font-montserrat w-full">
                REMARKS / OFFICE
            </span>
            <div class="flex justify-end items-center w-full gap-2 min-h-[30px] font-montserrat flex-nowrap">
                <span class="${zt(e.remarks)} text-[0.5625rem] sm:text-[0.625rem] font-black px-2.5 sm:px-4 py-2 rounded-lg border uppercase tracking-widest shadow-sm border-l-4 ${e.remarks==="ONGOING"?"border-l-green-600":"border-l-red-600"} min-w-[80px] sm:min-w-[100px] text-center inline-block whitespace-nowrap">${e.remarks}</span>
                <span class="${Vt(e.office)} inline-block text-[0.5625rem] sm:text-[0.625rem] font-black px-2.5 sm:px-4 py-2 rounded-lg border shadow-sm min-w-[80px] sm:min-w-[100px] text-center whitespace-nowrap max-w-full truncate" title="${e.office}">${e.office}</span>
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
            <span class="${e.age||et(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right">${e.age||et(e.birthday)||"N/A"}</span>
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
            <label class="text-[0.5625rem] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest">Designation / Role</label>
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
                    <span class="font-black text-[#1b5e20] dark:text-green-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.absorbDate||String(e.absorbDate).includes("0000-00-00"))return"N/A";const u=new Date(e.absorbDate);return isNaN(u.getTime())||u.getFullYear()<1900?"N/A":(u.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+u.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
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
                    <span class="font-black text-[#b71c1c] dark:text-red-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.resignedDate||String(e.resignedDate).includes("0000-00-00"))return"N/A";const u=new Date(e.resignedDate);return isNaN(u.getTime())||u.getFullYear()<1900?"N/A":(u.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+u.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
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
                    ${r.length?r.map(u=>{const h=u.status||"PENDING";let S=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",y=u.date||u.createdAt,D=y;if(y){const _=/^\d{4}-\d{2}-\d{2}$/.test(y)?new Date(y+"T00:00:00Z"):new Date(y);isNaN(_)||(D=_.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors edit-log-btn" data-type="dtr" data-id="${u.id}" data-val="${u.day||y}" data-status="${h}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${u.day||D}</span>
                            <span class="text-[0.6875rem] font-bold ${S} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${h}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${u.id}">
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
                    ${o.length?o.map(u=>{const h=u.status||"PENDING";let S=h==="VERIFIED"||h==="COMPLETED"?"text-green-500":h==="REJECTED"||h==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",y=u.period||u.createdAt,D=y;if(y){const _=/^\d{4}-\d{2}-\d{2}$/.test(y)?new Date(y+"T00:00:00Z"):new Date(y);isNaN(_)||(D=_.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors edit-log-btn" data-type="ar" data-id="${u.id}" data-val="${y}" data-status="${h}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${y||D}</span>
                            <span class="text-[0.6875rem] font-bold ${S} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${h}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${u.id}">
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
            ${c.map(u=>{const h=u.status.toUpperCase(),y={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[h]||h,D=y==="COMPLETED",_=y==="REJECTED",te=D?"text-green-500":_?"text-red-500":"text-gray-400 dark:text-gray-500",Q=D?"bg-green-50/50 dark:bg-green-900/10":_?"bg-red-50/50 dark:bg-red-900/10":"bg-gray-50/50 dark:bg-slate-800/50",F=D?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer":_?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer":"bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer";let le='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return D?le='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':_&&(le='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${Q}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${te}">
                            ${le}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${D?"text-heading":"text-gray-500 dark:text-gray-400"} uppercase tracking-tight flex-1">${u.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${F} text-[0.625rem] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${u.id}" data-name="${u.name}" data-status="${y} cursosr-pointer">
                        ${y}
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
    `,d=!!e._noAnimation;let p=document.getElementById("beneficiary-drawer-container");const $=d&&!!p&&p.dataset.beneficiaryId===String(e.id||"");if($){const u=p.scrollTop;p.innerHTML=f,p.scrollTop=u}else p&&(p.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),p=document.createElement("div"),p.id="beneficiary-drawer-container",p.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl",p.setAttribute("tabindex","-1"),p.setAttribute("data-drawer-backdrop","true"),p.innerHTML=f,document.body.appendChild(p),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");p.dataset.beneficiaryId=String(e.id||""),nt(async()=>{const{Drawer:u}=await import("./vendor-flowbite-B7rSfpuT.js").then(h=>h.b);return{Drawer:u}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:u})=>{let h=$?p.__drawerInstance:null;if(!h){const M={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{p&&p.parentNode&&p.remove()},300)}};h=new u(p,M),p.__drawerInstance=h,h.show()}p.querySelector("#close-drawer-btn").addEventListener("click",()=>h.hide());const y=p.querySelector("#drawer-prev-btn"),D=p.querySelector("#drawer-next-btn"),_=2,te=()=>{p.querySelectorAll("[id^=drawer-page-]").forEach((O,q)=>{O.classList.toggle("hidden",q!==a)});const M=p.querySelector("#drawer-section-title");M&&M.classList.toggle("invisible",a!==0);const R=p.querySelector("#personal-profile-section");R&&R.classList.toggle("hidden",a!==0),y.disabled=a===0,D.disabled=a===_,y.classList.toggle("opacity-50",a===0),D.classList.toggle("opacity-50",a===_)};y.addEventListener("click",()=>{a>0&&a--,te()}),D.addEventListener("click",()=>{a<_&&a++,te()}),te(),p.querySelectorAll(".drawer-doc-btn").forEach(M=>{M.addEventListener("click",async()=>{const R=M.dataset.name,O=M.dataset.status,q="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.5625rem] gap-2 transition-all duration-300 ",l=await A.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Set status for <span class="text-brand font-black">${R}</span></label>
                            
                            <div class="grid grid-cols-3 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="PENDING" class="peer sr-only" ${O==="PENDING"?"checked":""}>
                                    <div class="${q} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-amber-400 peer-checked:bg-amber-50 peer-checked:text-amber-600 dark:peer-checked:bg-amber-900/20 dark:peer-checked:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>Pending</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="COMPLETED" class="peer sr-only" ${O==="COMPLETED"?"checked":""}>
                                    <div class="${q} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-green-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        <span>Verify</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="REJECTED" class="peer sr-only" ${O==="REJECTED"?"checked":""}>
                                    <div class="${q} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-red-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Update Status</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const b=document.querySelector('input[name="swal-doc-status"]:checked');return b?b.value:null}});if(l.isConfirmed){const b=l.value;if(b===O)return;try{const E={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"}[b]||b,C=await He("api/logs.php?type=docs",{gip_id:e.id,doc_name:R,status:E}),k=C.success?C.data:{success:!1,error:C.error};k.success?(A.fire({toast:!0,position:s,icon:"success",title:"Status updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):A.fire("Error",k.error||"Failed to update","error")}catch(v){A.fire("Error",v.message,"error")}}})});const Q=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),F=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function le(M){const O=new Date(M+"T00:00:00").getDay();return O!==0&&O!==6&&!Q.has(M)}function ne(M){const R=M.getDate(),O=F[M.getMonth()],q=M.getFullYear(),l=new Date(q,M.getMonth()+1,0).getDate();return R<=15?`${O} 1-15, ${q}`:`${O} 16-${l}, ${q}`}const ie=()=>{const M=new Date;if(!r.length)return ne(M);let R=-1,O="";const q=C=>{const k=(C||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!k)return-1;const G=F.indexOf(k[1]),g=parseInt(k[2])===1?0:1;return parseInt(k[4])*100+G*2+g};if(r.forEach(C=>{const k=C.day||C.date||"",G=q(k);G>R&&(R=G,O=k)}),R===-1)return ne(M);const l=O.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),b=F.indexOf(l[1]),v=parseInt(l[2]),E=parseInt(l[4]);if(v===1){const C=new Date(E,b+1,0).getDate();return`${F[b]} 16-${C}, ${E}`}else{const C=(b+1)%12,k=b===11?E+1:E;return`${F[C]} 1-15, ${k}`}},re=()=>{const M=new Date;if(!o.length)return ne(M);let R=-1,O="";const q=C=>{const k=(C||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!k)return-1;const G=F.indexOf(k[1]),g=parseInt(k[2])===1?0:1;return parseInt(k[4])*100+G*2+g};if(o.forEach(C=>{const k=q(C.period);k>R&&(R=k,O=C.period)}),R===-1)return ne(M);const l=O.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),b=F.indexOf(l[1]),v=parseInt(l[2]),E=parseInt(l[4]);if(v===1){const C=new Date(E,b+1,0).getDate();return`${F[b]} 16-${C}, ${E}`}else{const C=(b+1)%12,k=b===11?E+1:E;return`${F[C]} 1-15, ${k}`}},pe=async(M,R)=>{A.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),A.showLoading();try{const O={gip_id:e.id};if(M==="dtr"){const b=R.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(b){const v=F.indexOf(b[1]),E=parseInt(b[2]),C=parseInt(b[3]);let k=new Date(C,v,E);for(;!le(k.toISOString().split("T")[0]);)k.setDate(k.getDate()+1);O.record_date=k.toISOString().split("T")[0]}else O.record_date=new Date().toISOString().split("T")[0];O.weekday=R}M==="ar"&&(O.period=R);const q=await He(`api/logs.php?type=${M}`,O);(q.success?q.data:{success:!1,error:q.error}).success?(A.fire({toast:!0,position:s,icon:"success",title:"Auto-Added!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):A.fire("Error","Failed to add log.","error")}catch(O){A.fire("Error",O.message,"error")}},oe=async(M,R,O,q,l)=>{const b=R==="dtr"?"Record Date":"Period";fe();const v="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] sm:text-xs gap-2 ",E='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',C='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:k}=await A.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${M} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-1">${b}</label>
                            <input id="swal-log-val" value="${q}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${l==="VERIFIED"?"checked":""}>
                                    <div class="${v} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${E}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${l==="REJECTED"||l==="DECLINED"?"checked":""}>
                                    <div class="${v} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${C}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const G=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:G?G.value:"PENDING"}}});if(k&&(k.val!==q||k.status!==l))try{const G={type:R,id:O,status:k.status};if(R==="dtr"){const x=k.val.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(x){const L=F.indexOf(x[1]),w=parseInt(x[2]),B=parseInt(x[3]);let N=new Date(B,L,w);for(;!le(N.toISOString().split("T")[0]);)N.setDate(N.getDate()+1);G.record_date=N.toISOString().split("T")[0]}else G.record_date=new Date().toISOString().split("T")[0];G.weekday=k.val}R==="ar"&&(G.period=k.val);const g=await mt("api/logs.php",G),m=g.success?g.data:{success:!1,error:g.error};m.success?(A.fire({toast:!0,position:s,icon:"success",title:"Log Updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):A.fire("Error",m.error||"Failed to update log.","error")}catch(G){A.fire("Error",G.message,"error")}},he=p.querySelector("#add-dtr-log-btn");he&&he.addEventListener("click",()=>pe("dtr",ie()));const me=p.querySelector("#add-ar-log-btn");me&&me.addEventListener("click",()=>pe("ar",re()));const xe=p.querySelector("#export-log-btn");xe&&xe.addEventListener("click",async()=>{const M="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",R=await A.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${M} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${M} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${M} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const O=document.querySelector('input[name="swal-export-type"]:checked');return O?O.value:null}});if(R.isConfirmed&&R.value){const O=R.value,q=new Date().getFullYear();await it([e],O,q)}}),p.querySelectorAll(".edit-log-btn").forEach(M=>{M.addEventListener("click",R=>{if(R.target.closest(".delete-log-btn"))return;const O=M.dataset.type,q=M.dataset.id,l=M.dataset.val,b=M.dataset.status;oe(O.toUpperCase(),O,q,l,b)})}),p.querySelectorAll(".delete-log-btn").forEach(M=>{M.addEventListener("click",async()=>{const R=M.dataset.id,O=M.dataset.type;if((await A.fire({title:'<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:'<span class="font-black tracking-widest uppercase">Delete</span>',cancelButtonText:'<span class="font-black tracking-widest uppercase">Wait</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)try{const l=await He(`api/logs.php?type=${O}`,{log_id:R,action:"delete"});(l.success?l.data:{success:!1,error:l.error}).success?(A.fire({toast:!0,position:s,icon:"success",title:"Deleted",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):A.fire("Error","Failed to delete data.","error")}catch(l){A.fire("Error",l.message,"error")}})})}).catch(console.error)}function Yt(e){const t=fe(),s=`w-full bg-transparent border-b-2 ${t?"border-slate-700 text-white focus:border-brand placeholder-slate-600":"border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300"} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`,a=`w-full bg-transparent border-none ${t?"text-white":"text-royal-blue"} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`;function o(d){if(!d)return"";const p=new Date(d),$=new Date;let u=$.getFullYear()-p.getFullYear();const h=$.getMonth()-p.getMonth();return(h<0||h===0&&$.getDate()<p.getDate())&&u--,u>=0?u:0}function r(d){if(!d)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const p=String(d).toUpperCase();return p==="ONGOING"?"bg-green-100 text-green-700 border-green-200":p==="EXPIRED"?"bg-red-400 text-white border-red-400":p==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":p==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const i=`
<form id="edit-beneficiary-drawer-form" class="h-full flex flex-col pt-4 font-montserrat relative pb-20 overflow-y-auto">
    <input type="hidden" name="id" value="${e.id}">
    
    <div class="flex flex-col relative w-full border-b border-default pb-4 mb-5 pe-12">
        <textarea name="name" class="${a}" rows="1" placeholder="Beneficiary Name" required oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">${e.name||""}</textarea>
        
        <button type="button" id="close-edit-drawer-btn" class="text-gray-400 bg-transparent hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white rounded-lg w-9 h-9 absolute top-0 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full">
        <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ROX-ID</span>
            <input type="text" name="gip_id" value="${e.gip_id||e.id||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="ROX-RD-ESIG-0000-0000">
        </div>
        <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">SERIES NO.</span>
            <input type="text" name="seriesNo" value="${e.seriesNo||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="2025-00-000">
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4 mb-4">
        <div class="flex flex-col gap-1 text-left overflow-hidden relative">
             <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS (STATUS)</span>
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${r(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
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
                class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full placeholder-indigo-300 dark:placeholder-indigo-700 h-[42px]"
                placeholder="e.g. DOLE Field Office">
            <div id="edit-office-suggestions-box" class="hidden absolute mt-[45px] left-0 right-0 z-[100] bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-2xl min-w-[280px] overflow-hidden backdrop-blur-xl">
                <!-- Content injected via JS -->
            </div>
        </div>
    </div>

    <h4 class="text-sm font-bold text-heading mt-6 mb-4 pb-2 border-b border-default whitespace-nowrap">Personal Profile</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-3 px-1 pb-24">
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Contact No.</span>
            <input type="text" name="contact" value="${e.contact||""}" class="${s} text-right font-mono max-w-[200px]" placeholder="09XX-XXX-XXXX">
        </div>
        
        <div class="flex justify-between items-start group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1 shrink-0">Address</span>
            <textarea name="address" rows="2" class="${s} text-right resize-none max-w-[250px]" placeholder="Barangay, City">${e.address||""}</textarea>
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Birthday</span>
            <div class="relative max-w-[180px]">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                </div>
                <input type="text" name="birthday" id="edit-bday-input" value="${e.birthday||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono uppercase cursor-pointer" placeholder="MM/DD/YYYY">
            </div>
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Age</span>
            <input type="text" name="age" id="edit-age-display" value="${e.age||o(e.birthday)||""}" class="${s} text-right max-w-[80px]" placeholder="Auto">
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Gender</span>
            <select name="gender" class="${s} cursor-pointer max-w-[110px] text-right-select !pr-1" style="direction: rtl;">
                <option value="Male" ${e.gender==="Male"?"selected":""}>MALE</option>
                <option value="Female" ${e.gender==="Female"?"selected":""}>FEMALE</option>
            </select>
        </div>
        
        <div class="flex flex-col gap-2 pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap">Education</span>
            <input type="text" name="education" id="edit-education-input" value="${e.education||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Course/Level...">
            <div id="edit-education-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                ${Ve.map(d=>`<button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${d.name}</span></button>`).join("")}
            </div>
        </div>

        <div class="flex justify-between items-start group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1 shrink-0">Designated Beneficiary</span>
            <input type="text" name="designatedBeneficiary" value="${e.designatedBeneficiary||""}" class="${s} text-right max-w-[250px]" placeholder="Assured family member">
        </div>
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Relationship to Assured</span>
            <select name="relationshipToAssured" class="${s} cursor-pointer max-w-[190px] text-right-select !pr-1 uppercase" style="direction: rtl;">
                <option value=""></option>
                ${ut.map(d=>`<option value="${d}" ${e.relationshipToAssured===d?"selected":""}>${d}</option>`).join("")}
            </select>
        </div>
    </div>

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
                    <input type="text" name="startDate" id="edit-startDate-input" value="${e.startDateFormatted||e.startDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">End Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="endDate" id="edit-endDate-input" value="${e.endDateFormatted||e.endDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Designation / Role</span>
            <input type="text" name="designation" id="edit-designation-input" value="${e.designation||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Nature of Work...">
            <div id="edit-designation-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                <!-- Suggestions will be injected here -->
            </div>
        </div>
        
        <div class="flex flex-col gap-2 mt-2 pb-6 relative">
            <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Replacement History</span>
            <input type="text" name="replacement" id="edit-replacement-input" value="${e.replacement||""}" autocomplete="off"
                class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm placeholder-gray-400"
                placeholder="Search GIP beneficiary to replace...">
            <div id="edit-replacement-suggestions-box" class="hidden absolute top-[60px] left-0 w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-2xl max-h-48 overflow-y-auto z-[60]">
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
    <button type="button" id="edit-drawer-cancel-btn" class="px-6 py-3 rounded-xl bg-gray-100 text-gray-600 font-black text-[0.625rem] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-gray-200 transition-all border border-transparent hover:border-gray-300">Cancel</button>
    <button type="submit" form="edit-beneficiary-drawer-form" class="px-6 py-3 rounded-xl bg-brand text-white font-black text-[0.625rem] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-brand-strong transition-all shadow-lg hover:shadow-brand/40 flex items-center justify-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        Save Changes
    </button>
</div>

<style>
#edit-drawer-container::-webkit-scrollbar { width: 5px; }
#edit-drawer-container::-webkit-scrollbar-track { background: transparent; }
#edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.05); border-radius: 20px; }
.dark #edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); }
.text-right-select { text-align-last: right; }
.datepicker { z-index: 99999 !important; }
.datepicker-picker { 
    background-color: ${t?"#1e293b":"#ffffff"} !important; 
    border-radius: 0.75rem !important;
    border: 1px solid ${t?"#334155":"#e2e8f0"} !important;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) !important;
}
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
    `;let n=document.getElementById("edit-drawer-container");n&&(n.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),n=document.createElement("div"),n.id="edit-drawer-container",n.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",n.setAttribute("tabindex","-1"),n.innerHTML=i,document.body.appendChild(n),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const d=n.querySelector('textarea[name="name"]');d&&(d.style.height="auto",d.style.height=d.scrollHeight+"px")},10);const c=n.querySelector("#edit-education-suggestions-box");c&&(c.innerHTML=Ve.map(d=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${d.name}</span>
            </button>
        `).join(""));const f=n.querySelector("#edit-designation-suggestions-box");f&&(f.innerHTML=ct.map(d=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${d}</span>
            </button>
        `).join("")),nt(async()=>{const{Drawer:d}=await import("./vendor-flowbite-B7rSfpuT.js").then(p=>p.b);return{Drawer:d}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:d})=>{const p=new d(n,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{n&&n.parentNode&&n.remove()},400)}});p.show(),window.initFlowbite&&window.initFlowbite();const $=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),p.hide()};n.querySelector("#close-edit-drawer-btn").addEventListener("click",$),n.querySelector("#edit-drawer-cancel-btn").addEventListener("click",$);const u=n.querySelector("#edit-beneficiary-drawer-form"),h=n.querySelector("#edit-bday-input"),S=n.querySelector("#edit-age-display"),y=n.querySelector("#edit-startDate-input"),D=n.querySelector("#edit-endDate-input"),_=n.querySelector('input[name="seriesNo"]'),te=n.querySelector('input[name="gip_id"]'),Q=n.querySelector("#edit-drawer-remarks"),F=n.querySelector("#edit-extension-log-container"),le=()=>{if(!F)return;const l=Q.value,b=fe();if(l==="ABSORBED"){const v=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,E=v.getTimezoneOffset()*6e4,C=new Date(v.getTime()-E).toISOString().slice(0,16);F.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${b?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${b?"text-green-500":"text-[#2e7d32]"} border-b ${b?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${b?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${C}" class="w-full ${b?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${b?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${e.absorb_where||""}" class="w-full ${b?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${b?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${e.absorb_position||""}" class="w-full ${b?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${b?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${e.absorb_agency||""}" class="w-full ${b?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `}else if(l==="RESIGNED"){const v=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,E=v.getTimezoneOffset()*6e4,C=new Date(v.getTime()-E).toISOString().slice(0,16);F.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${b?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${b?"text-red-500":"text-[#ce1126]"} border-b ${b?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${b?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${C}" class="w-full ${b?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${b?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${b?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};Q&&Q.addEventListener("change",l=>{const b="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";Q.className=`${r(l.target.value)} ${b} editable-indicator`,le(),(Q.value==="ABSORBED"||Q.value==="RESIGNED")&&setTimeout(()=>{F.scrollIntoView({behavior:"smooth",block:"center"}),F.classList.add("pulse-highlight"),setTimeout(()=>F.classList.remove("pulse-highlight"),1500)},50)}),le();let ne=!1,ie=!1;const re=(l,b)=>{l.addEventListener("paste",v=>{v.preventDefault();let E=(v.clipboardData||window.clipboardData).getData("text");if(E){E=E.replace(/[-.\s]/g,"/");const C=E.split("/");if(C.length===3){const k=C[0].padStart(2,"0"),G=C[1].padStart(2,"0");let g=C[2];if(g.length===2){const w=new Date().getFullYear(),B=Math.floor(w/100)*100;g=String(B+parseInt(g))}else g=g.padStart(4,"0");const m=`${k}/${G}/${g}`;l.value=m;const x=new Event("input",{bubbles:!0});l.dispatchEvent(x);const L=window.__parseFormattedDate(m);if(L&&b&&(ie||b(L),document.activeElement===l&&l.blur()),l._datepicker)l._datepicker.hide();else{const w=l.parentNode&&l.parentNode._datepicker;w&&typeof w.hide=="function"&&w.hide()}}}}),l.addEventListener("input",v=>{const E=v.target.value,C=window.__maskDate(E);if(E!==C&&(v.target.value=C),C.length===10){const k=window.__parseFormattedDate(C);if(k&&b)if(ie||b(k),document.activeElement===l&&l.blur(),l._datepicker)l._datepicker.hide();else{const G=l.parentNode&&l.parentNode._datepicker;G&&typeof G.hide=="function"&&G.hide()}}}),l.addEventListener("changeDate",v=>{v.detail&&v.detail.date&&b&&(ie||b(v.detail.date),l._datepicker&&l._datepicker.hide())})};h&&re(h,l=>{S&&(!ne||!S.value)&&(S.value=window.calculateAge(l))}),y&&re(y,l=>{if(D){const v=new Date(l);v.setDate(v.getDate()+243);const E=String(v.getMonth()+1).padStart(2,"0"),C=String(v.getDate()).padStart(2,"0"),k=v.getFullYear();D.value=`${E}/${C}/${k}`}const b=l.getFullYear();b>1900&&te&&_&&Promise.all([ee(`api/beneficiaries.php?next_id&year=${encodeURIComponent(b)}`),ee(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(b)}`)]).then(([v,E])=>{const C=v.success&&v.data?.success?v.data.nextId:null,k=E.success&&E.data?.success?E.data.nextSeries:null,G=String(te.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),g=String(_.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),m=G?Number(G[1]):null,x=g?Number(g[1]):null;C&&(m===null||m!==b)&&(te.value=C),k&&(x===null||x!==b)&&(_.value=k)}).catch(v=>{console.error("Edit drawer identifier sync error:",v)})}),D&&re(D);const pe=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null),oe=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null);pe&&h&&(h._datepicker=new pe(h,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}));const he=n.querySelector("#edit-date-range-picker");if(oe&&he){const l=new oe(he,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});y&&(y._datepicker=l.datepickers[0]),D&&(D._datepicker=l.datepickers[1])}e.id&&(ie=!0,ee(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(l=>{if(l.success&&l.data&&l.data.beneficiary){const b=l.data.beneficiary;if(y&&b.startDate){const v=new Date(b.startDate);isNaN(v)||(y.value=b.startDateFormatted||"",y._datepicker&&y._datepicker.setDate(v))}if(D&&b.endDate){const v=new Date(b.endDate);isNaN(v)||(D.value=b.endDateFormatted||"",D._datepicker&&D._datepicker.setDate(v))}}setTimeout(()=>{ie=!1},100)}).catch(l=>{console.error("Error fetching accurate beneficiary dates:",l),ie=!1})),S&&S.addEventListener("input",()=>ne=!0);const me=(l,b,v)=>{const E=n.querySelector(l),C=n.querySelector(b);if(!E||!C)return;const k=()=>C.classList.add("hidden"),G=()=>C.classList.remove("hidden");E.addEventListener("focus",G),E.addEventListener("input",()=>{const g=E.value.toLowerCase().trim();let m=0;C.querySelectorAll(v).forEach(x=>{const w=(x.querySelector(".option-text")?.textContent||x.textContent||"").toLowerCase().includes(g);x.style.display=w?"block":"none",w&&m++}),m>0?G():k()}),C.addEventListener("click",g=>{const m=g.target.closest(v);m&&(E.value=(m.querySelector(".option-text")?.textContent||m.textContent||"").trim(),k(),E.dispatchEvent(new Event("change")))}),document.addEventListener("click",g=>{!E.contains(g.target)&&!C.contains(g.target)&&k()})};me("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),me("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const l=n.querySelector("#edit-office-input"),b=n.querySelector("#edit-office-suggestions-box");if(!l||!b)return;b.classList.add("mt-[52px]");let v="OFFICES",E=null,C=[];const k={textLabel:t?"text-slate-400":"text-slate-500",borderDivide:t?"border-slate-800":"border-slate-100",courseHover:t?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:t?"text-slate-300":"text-slate-700"},G=async()=>{const m="dole_offices_cache",x=async()=>{let w=[];try{const B=await ee("api/beneficiaries.php?get_offices_advanced=1");B.success&&B.data?.success&&Array.isArray(B.data.offices)&&(w=B.data.offices)}catch(B){console.error("Office fetch failed:",B)}return w.length>0&&(C=w,localStorage.setItem(m,JSON.stringify({data:w,timestamp:Date.now()}))),w},L=localStorage.getItem(m);if(L)try{const{data:w,timestamp:B}=JSON.parse(L);return C=w,Date.now()-B>1800*1e3&&x().then(()=>{v==="OFFICES"&&g("OFFICES",E,l.value)}),w}catch{localStorage.removeItem(m)}return C.length===0?await x():C},g=async(m="OFFICES",x=null,L="")=>{if(v=m,E=x,m==="OFFICES"){const B=(await G()).filter(I=>I.office.toLowerCase().includes(L.toLowerCase()));b.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${k.textLabel} opacity-70 border-b ${k.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${B.length>0?B.map(I=>{const j=parseInt(I.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${k.textCourseOpt} ${k.courseHover} rounded-lg ${j?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${I.id}" data-name="${I.office}" data-has-locations="${j}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${I.office}</span>
                                        </div>
                                        ${j?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                    </div>
                                `}).join(""):`
                                <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${k.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                ${L.trim()?`
                                <div class="px-2 pb-2 flex flex-col gap-1.5">
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${k.textLabel} opacity-50 px-1">New office: "${L.trim()}"</div>
                                    <div id="add-office-location-row-edit" class="hidden gap-1.5 items-center">
                                        <input type="text" id="new-office-loc-input-edit" placeholder="Location name..." class="flex-1 min-w-0 px-2.5 py-1.5 text-[0.5625rem] font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all">
                                        <button type="button" id="confirm-office-with-loc-edit" class="shrink-0 px-2.5 py-1.5 rounded-lg bg-blue-500 text-white text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
                                            Confirm
                                        </button>
                                    </div>
                                    <div class="flex gap-1.5">
                                        <button type="button" id="add-office-with-loc-btn-edit" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                            <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                            Add location
                                        </button>
                                        <button type="button" id="skip-office-loc-btn-edit" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-slate-700 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                            <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                            Skip
                                        </button>
                                    </div>
                                </div>`:""}
                            `}
                        </div>
                    `;const N=L.trim(),H=b.querySelector("#add-office-location-row-edit"),U=b.querySelector("#new-office-loc-input-edit"),Z=b.querySelector("#confirm-office-with-loc-edit"),V=b.querySelector("#add-office-with-loc-btn-edit"),T=b.querySelector("#skip-office-loc-btn-edit");if(V&&H&&V.addEventListener("click",I=>{I.stopPropagation(),H.classList.remove("hidden"),H.classList.add("flex"),setTimeout(()=>U?.focus(),50)}),Z&&U){const I=j=>{j.stopPropagation();const Y=U.value.trim();l.value=Y?`${N} - ${Y}`:N,b.classList.add("hidden"),l.dispatchEvent(new Event("change"))};Z.addEventListener("click",I),U.addEventListener("keydown",j=>{j.key==="Enter"&&I(j)}),U.addEventListener("click",j=>j.stopPropagation())}T&&T.addEventListener("click",I=>{I.stopPropagation(),l.value=N,b.classList.add("hidden"),l.dispatchEvent(new Event("change"))}),b.querySelectorAll(".office-code-option").forEach(I=>{I.addEventListener("click",j=>{j.stopPropagation(),I.dataset.hasLocations==="true"?g("LOCATIONS",{id:I.dataset.id,name:I.dataset.name}):(l.value=I.dataset.name,b.classList.add("hidden"),l.dispatchEvent(new Event("change")))})})}else{b.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${k.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-t-xl">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-md bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${k.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${k.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${x.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                    value="${L.includes(" - ")?L.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${k.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const w=b.querySelector("#loc-list-edit"),B=b.querySelector("#location-search-edit"),N=`dole_locs_cache_${x.id}`;let H=[];const U=localStorage.getItem(N);if(U)try{const{data:T,timestamp:I}=JSON.parse(U);H=T,Date.now()-I<3600*1e3}catch{localStorage.removeItem(N)}const Z=async()=>{let T=[];if(be&&De()){const{data:I,error:j}=await be.from("office_locations").select("location").eq("office_id",x.id).order("location");!j&&I&&(T=I)}if(T.length===0)try{const I=await ee(`api/beneficiaries.php?get_office_locations=1&office_id=${x.id}`);I.success&&I.data?.success&&Array.isArray(I.data.locations)&&(T=I.data.locations)}catch(I){console.error("Office locations fetch failed:",I)}T.length>0&&(H=T,localStorage.setItem(N,JSON.stringify({data:T,timestamp:Date.now()})),V(B.value))},V=(T="")=>{const I=H.filter(Y=>Y.location.toLowerCase().includes(T.toLowerCase())),j=T.trim();I.length>0?w.innerHTML=I.map(Y=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${k.textCourseOpt} ${k.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${Y.location}">
                                    <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${Y.location}</span>
                                </div>
                            `).join(""):H.length===0?w.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${k.textLabel} animate-pulse">Fetching...</div>`:(w.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${k.textLabel} opacity-60">No matching locations.</div>
                                ${j?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${j}" as location
                                    </button>
                                </div>`:""}
                            `,j&&w.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{l.value=`${x.name} - ${j}`,b.classList.add("hidden"),l.dispatchEvent(new Event("change"))})),w.querySelectorAll(".location-option-edit").forEach(Y=>{Y.addEventListener("click",()=>{l.value=`${x.name} - ${Y.dataset.location}`,b.classList.add("hidden"),l.dispatchEvent(new Event("change"))})})};V(B.value),Z(),setTimeout(()=>B.focus(),50),B.addEventListener("input",()=>V(B.value)),B.addEventListener("click",T=>T.stopPropagation()),b.querySelector("#back-to-offices-edit").addEventListener("click",T=>{T.stopPropagation(),g("OFFICES")})}};l.addEventListener("focus",()=>{b.classList.remove("hidden"),g(v,E,l.value)}),l.addEventListener("input",()=>{v==="OFFICES"&&g("OFFICES",null,l.value)}),document.addEventListener("click",m=>{!l.contains(m.target)&&!b.contains(m.target)&&b.classList.add("hidden")})})();const M=n.querySelector("#edit-replacement-input"),R=n.querySelector("#edit-replacement-suggestions-box"),O=n.querySelector("#edit-replacement-loading");let q=null;M&&R&&(M.addEventListener("input",l=>{const b=l.target.value.trim();clearTimeout(q),R.classList.add("hidden"),!(b.length<2)&&(O&&O.classList.remove("hidden"),q=setTimeout(async()=>{try{const v=await Ae(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(b)}&limit=10`);v.success&&v.data&&v.data.candidates&&v.data.candidates.length>0?(R.innerHTML=v.data.candidates.map(E=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${E.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${E.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${E.id}</span>
                                </button>
                            `).join(""),R.classList.remove("hidden")):(R.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',R.classList.remove("hidden"))}catch(v){console.error("Replacement fetch error:",v)}finally{O&&O.classList.add("hidden")}},400))}),R.addEventListener("click",l=>{const b=l.target.closest("button");b&&(M.value=b.dataset.name,R.classList.add("hidden"))}),document.addEventListener("click",l=>{!M.contains(l.target)&&!R.contains(l.target)&&R.classList.add("hidden")})),u.querySelectorAll("input, select, textarea").forEach(l=>{const b=(l.getAttribute("type")||"").toLowerCase(),v=!l.disabled&&!l.readOnly&&b!=="hidden";l.classList.remove("editable-indicator"),v&&l.classList.add("editable-indicator")}),u.addEventListener("submit",l=>{l.preventDefault();const b=new FormData(u),v={};b.forEach((E,C)=>v[C]=E),v.id=e.id,v.gip_id=v.gip_id||e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(v,!0,!1)&&($(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),A.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function xr(){window.showAddDataModal=Ce,window.__maskDate=function(e){let t=e.replace(/\D/g,"").slice(0,8);return t.length>2&&t.length<=4?t=t.slice(0,2)+"/"+t.slice(2):t.length>4&&(t=t.slice(0,2)+"/"+t.slice(2,4)+"/"+t.slice(4)),t},window.__parseFormattedDate=function(e){if(!e)return null;const t=e.split("/");if(t.length===3){const s=parseInt(t[0])-1,a=parseInt(t[1]),o=parseInt(t[2]);if(o>1e3&&s>=0&&s<12&&a>0&&a<=31)return new Date(o,s,a)}return null},window.calculateAge=function(e){if(!e)return"";const t=e instanceof Date?e:new Date(e),s=new Date;let a=s.getFullYear()-t.getFullYear();const o=s.getMonth()-t.getMonth();return(o<0||o===0&&s.getDate()<t.getDate())&&a--,a>=0?a:0},window.viewBeneficiary=async function(e,t=0){const s=e?.id||e?.gip_id||null;if(!s)return;const a=!!(e?.name&&e?.office&&e?.remarks);let o={...e,id:s};if(!a){const c=await ee(`api/beneficiaries.php?id=${encodeURIComponent(s)}`);c.success&&c.data?.success&&c.data?.beneficiary&&(o={...c.data.beneficiary,...o,id:s})}const r=`logs_cache_${s}`,i=window.__doleDB?.getSecureCache?await window.__doleDB.getSecureCache(r):null,n=!!i;o.arLogs=i?.arLogs||[],o.dtrLogs=i?.dtrLogs||[],o.docs=i?.docs||[],tt(o,t);try{const[c,f,d,p]=await Promise.all([ee(`api/logs.php?type=ar&gip_id=${encodeURIComponent(s)}`),ee(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(s)}`),ee(`api/logs.php?type=docs&gip_id=${encodeURIComponent(s)}`),ee(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(s)}`)]),$=c.success&&c.data?.success?c.data.logs:[],u=f.success&&f.data?.success?f.data.logs:[],h=d.success&&d.data?.success?d.data.logs:[],S=p.success&&p.data?.success?p.data.logs:[];if(S.length>0){const _=S[0];o.absorbDate=_.absorption_datetime,o.absorb_where=_.where||_.absorb_where,o.absorb_position=_.position||_.absorb_position,o.absorb_agency=_.agency||_.absorb_agency}window.__doleDB?.setSecureCache&&await window.__doleDB.setSecureCache(r,{arLogs:$,dtrLogs:u,docs:h});const y=JSON.stringify({ar:i?.arLogs||[],dtr:i?.dtrLogs||[],docs:i?.docs||[]}),D=JSON.stringify({ar:$,dtr:u,docs:h});if(!n||y!==D){const _=document.getElementById("beneficiary-drawer-container");_&&_.dataset.beneficiaryId===String(s)&&(o.arLogs=$,o.dtrLogs=u,o.docs=h,tt({...o,_noAnimation:!0},t))}}catch(c){console.error("Error fetching logs/docs:",c)}},window.showAddDataModal=function(e){Ce(e)},window.editBeneficiary=function(e){Yt(e)},window.showExportConfigModal=function(e){Jt(e)},window.showProfileModal=function(){Wt()},window.showSearchExtraStatsModal=function(){Xt()}}async function Wt(){try{if(De()&&be){let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=a.id)}catch{}if(!e)throw new Error("User not logged in");const{data:t,error:s}=await be.from("users").select("*").eq("user_id",e).single();if(s)throw s;rt(t)}else{let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=`?user_id=${a.id}`)}catch{}const s=await(await fetch(`${ue()}api/profile.php${e}`)).json();if(s.success){const a=s.profile;rt(a)}else A.fire({icon:"error",title:"Error",text:s.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function rt(e){const t=e.profile_picture_path?`${ue()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",a=`
        <div class="text-left font-montserrat p-1 overflow-visible">
            <div class="flex items-center gap-3 mb-6">
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
    `;A.fire({html:a,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const r=o.querySelector("#profile-edit-form"),i=o.querySelector("#profile-pic-input"),n=o.querySelector("#profile-avatar-preview");i.addEventListener("change",c=>{const f=c.target.files[0];if(f){const d=new FileReader;d.onload=p=>{n.innerHTML=`<img src="${p.target.result}" class="w-full h-full object-cover" />`},d.readAsDataURL(f)}}),r.addEventListener("submit",async c=>{c.preventDefault();const f=new FormData(r);try{const d=JSON.parse(localStorage.getItem("user"));d&&d.id&&f.append("user_id",d.id)}catch{}try{const p=await(await fetch(`${ue()}api/profile.php`,{method:"POST",body:f})).json();p.success?(p.profile&&(localStorage.setItem("user",JSON.stringify(p.profile)),Zt(p.profile)),A.close(),A.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):A.fire({icon:"error",title:"Update Failed",text:p.error||"Something went wrong"})}catch(d){console.error("Error saving profile:",d)}})}})}function Zt(e){const t=e.profile_picture_path?`${ue()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(i=>i[0]).join("").substring(0,2).toUpperCase():"US",a=document.querySelectorAll(".sidebar-user-name"),o=document.querySelectorAll(".sidebar-user-email"),r=document.querySelectorAll(".sidebar-user-avatar");a.forEach(i=>i.textContent=e.full_name),o.forEach(i=>i.textContent=e.email||"No email set"),r.forEach(i=>{t?i.innerHTML=`<img src="${t}" class="w-full h-full object-cover" />`:i.textContent=s}),localStorage.setItem("user_full_name",e.full_name),t&&localStorage.setItem("user_avatar",t)}function Jt(e){const t=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",ageGroup:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","position","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},s=`
        <div class="text-left font-montserrat p-1 overflow-visible">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                    <h2 class="text-xl font-black text-heading leading-tight italic">Report Generator</h2>
                    <p class="text-[0.625rem] font-bold text-gray-400 dark:text-white! uppercase tracking-widest">Configure your data output</p>
                </div>
            </div>

            <form id="export-config-form" class="space-y-6">
                <div class="pt-1">
                    <button type="submit" class="w-full bg-royal-blue text-white font-black text-[0.625rem] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Apply Profile Configuration
                    </button>
                </div>
                <!-- Main Filter Grid (3 columns on MD) -->
                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-royal-blue rounded-full"></span>
                        <label class="text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Global Filters</label>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Search Beneficiary</label>
                            <div class="relative group">
                                <input type="text" id="export-search" value="${t.search}" placeholder="Name or ID..." 
                                    class="w-full bg-white border border-gray-200 rounded-xl px-9 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Category</label>
                            <div class="relative group">
                                <select id="export-office" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${t.office==="ALL"?"selected":""}>ALL OFFICES</option>
                                    <!-- Options will be populated dynamically -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Sort Data By</label>
                            <div class="relative group">
                                <select id="export-sort" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="name" ${t.sort==="name"?"selected":""}>NAME (A-Z)</option>
                                    <option value="startdate" ${t.sort==="startdate"?"selected":""}>START DATE (NEWEST)</option>
                                    <option value="id" ${t.sort==="id"?"selected":""}>ID NUMBER</option>
                                    <option value="office" ${t.sort==="office"?"selected":""}>OFFICE NAME</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <!-- Location + Year row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Location</label>
                            <div class="relative group">
                                <select id="export-location" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed" ${t.office==="ALL"?"disabled":""}>
                                    <option value="ALL">ALL LOCATIONS</option>
                                    <!-- Populated when office changes -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Year (Start Date)</label>
                            <div class="relative group">
                                <select id="export-year" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${(t.year||"ALL")==="ALL"?"selected":""}>ALL YEARS</option>
                                    <!-- Populated dynamically from data -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <!-- Gender Filter -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Gender Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","FEMALE","MALE"].map(a=>{const o={ALL:"peer-checked:bg-blue-600",FEMALE:"peer-checked:bg-pink-600",MALE:"peer-checked:bg-indigo-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-gender" value="${a}" ${t.gender===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[0.5625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Display Section -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Report Volume Section</label>
                            <div class="flex gap-1.5">
                                ${[{id:"ALL",label:"All",color:"peer-checked:bg-emerald-600"},{id:"ACTIVE",label:"Active",color:"peer-checked:bg-green-500"},{id:"ARCHIVED",label:"Archived",color:"peer-checked:bg-red-600"}].map(a=>`
                                    <label class="cursor-pointer flex-1">
                                        <input type="radio" name="export-section" value="${a.id}" ${t.section===a.id?"checked":""} class="hidden peer">
                                        <div class="py-1.5 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-1.5 transition-all ${a.color} peer-checked:text-white peer-checked:border-transparent shadow-sm">
                                            <span class="text-[0.5625rem] font-black uppercase tracking-tight">${a.label}</span>
                                        </div>
                                    </label>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Remarks Filter -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Remarks Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(a=>{const o={ALL:"peer-checked:bg-blue-600",ONGOING:"peer-checked:bg-green-500",EXPIRED:"peer-checked:bg-red-600",RESIGNED:"peer-checked:bg-slate-600",ABSORBED:"peer-checked:bg-teal-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-remarks" value="${a}" ${t.remarks===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[0.5625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Age Filter -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Age Group Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","18-24","25-30","31-40","41+"].map(a=>{const o={ALL:"peer-checked:bg-blue-600","18-24":"peer-checked:bg-emerald-600","25-30":"peer-checked:bg-yellow-600","31-40":"peer-checked:bg-orange-600","41+":"peer-checked:bg-slate-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-age-group" value="${a}" ${t.ageGroup===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[0.5625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Prepared By (Signature)</label>
                            <input type="text" id="export-prepared" value="${t.preparedBy}" placeholder="Mary Joy Q. Nuñez" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Approved By (Signature)</label>
                            <input type="text" id="export-approved" value="${t.approvedBy}" placeholder="Noel B. Orias" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mt-4">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-golden-yellow rounded-full"></span>
                        <label class="text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Output Column Selection</label>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        ${["ID","Name","Age","Office","Position","Start Date","End Date","Status"].map(a=>{const o=a.toLowerCase().replace(" ",""),r=t.columns.includes(o),i=`col-switch-${o}`;return`
                                <label for="${i}" class="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${i}" name="export-column" value="${o}" ${r?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="text-[0.5625rem] font-black text-gray-600 uppercase tracking-tight group-hover:text-emerald-600">${a}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>

            </form>
        </div>
    `;A.fire({html:s,width:"680px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const o=a.querySelector("#export-config-form"),r=o.querySelector("#export-office"),i=o.querySelector("#export-location"),n=o.querySelector("#export-year");if(n&&window.getExportYears){const f=window.getExportYears(),d=t.year||"ALL";let p=`<option value="ALL" ${d==="ALL"?"selected":""}>ALL YEARS</option>`;f.forEach($=>{p+=`<option value="${$}" ${d===$?"selected":""}>${$}</option>`}),n.innerHTML=p}const c=async(f,d)=>{if(i){if(!f){i.disabled=!0,i.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}i.disabled=!1,i.innerHTML='<option value="ALL">Loading...</option>';try{const p=await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${f}`),$=p.success&&p.data?.success&&Array.isArray(p.data.locations)?p.data.locations:[];let u='<option value="ALL">ALL LOCATIONS</option>';$.forEach(h=>{u+=`<option value="${h.location}" ${d===h.location?"selected":""}>${h.location}</option>`}),i.innerHTML=u}catch{i.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};r&&(async()=>{let f=[];try{const h=await window.apiGet("api/beneficiaries.php?get_offices_advanced=1");h.success&&h.data?.success&&Array.isArray(h.data.offices)&&(f=h.data.offices)}catch{}const d=t.office||"ALL";let p=`<option value="ALL" ${d==="ALL"?"selected":""}>ALL OFFICES</option>`;f.forEach(h=>{p+=`<option value="${h.office}" data-id="${h.id}" ${d===h.office?"selected":""}>${h.office}</option>`}),r.innerHTML=p;const u=r.options[r.selectedIndex]?.dataset?.id;u&&d!=="ALL"&&await c(u,t.location||"ALL"),r.addEventListener("change",async()=>{const h=r.options[r.selectedIndex];await c(h?.dataset?.id,"ALL")})})(),o.addEventListener("submit",f=>{f.preventDefault();const d=o.querySelectorAll('input[name="export-column"]:checked'),p=Array.from(d).map(te=>te.value),$=o.querySelector('input[name="export-gender"]:checked'),u=o.querySelector('input[name="export-section"]:checked'),h=o.querySelector('input[name="export-remarks"]:checked'),S=o.querySelector('input[name="export-age-group"]:checked'),y=o.querySelector("#export-prepared").value.trim(),D=o.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",y),localStorage.setItem("ldn_export_approved",D);const _={office:o.querySelector("#export-office").value,location:o.querySelector("#export-location")?.value||"ALL",year:o.querySelector("#export-year")?.value||"ALL",gender:$?$.value:t.gender||"ALL",remarks:h?h.value:t.remarks||"ALL",ageGroup:S?S.value:t.ageGroup||"ALL",search:o.querySelector("#export-search").value.trim().toLowerCase(),sort:o.querySelector("#export-sort").value,section:u?u.value:"ALL",preparedBy:y,approvedBy:D,columns:p};e(_),A.close(),setTimeout(()=>{A.fire({toast:!0,position:"top-end",icon:"success",title:"Generator pattern updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const Ve=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],ct=["Administrative Support (Records)","Office Clerk (Finance Section)","Data Encoder (TSSD/LIMS)","Messenger / Liaison Officer","Utility Worker (Maintenance)","Scanning & Digitization Officer","Filing Clerk (Administrative)","Receptionist / Front Desk","IT Technical Support Assist.","Project Monitoring Assist."],ut=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function Ce(e=null){const t=!!e&&!e._isBulk,s=t?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",a=t?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=fe(),r={borderBase:o?"border-slate-800":"border-gray-100/80",borderCard:o?"border-slate-800":"border-gray-100",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgCard:o?"bg-slate-900/40":"bg-gray-50/40",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgActionBar:o?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},i=`
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
                                        ${Ve.map(n=>`
                                            <div class="course-option px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${n.icon}
                                                <span class="option-text">${n.name}</span>
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
                                    ${ut.map(n=>`
                                        <option value="${n}" ${e?.relationshipToAssured===n?"selected":""}>${n}</option>
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
                            <label class="text-[0.5625rem] ${r.textLabel} font-black uppercase block mb-1 tracking-widest ${o?"":"transition-colors"} ${o?"":"group-focus-within:text-royal-blue"}">Nature of Work</label>
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
                                        <p class="text-[0.5625rem] font-black ${r.textWorkSuggHead} uppercase tracking-widest">Quick Select Roles</p>
                                    </div>
                                    ${ct.map(n=>`
                                        <div class="work-option px-3 py-2.5 text-[0.625rem] font-black ${r.textWorkOpt} ${r.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
                                            <div class="flex items-center gap-3">
                                                <div class="w-1.5 h-1.5 rounded-full ${r.workDot} transition-colors"></div>
                                                <span class="option-text">${n}</span>
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
                                    ${(()=>{const n={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(c=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${c}" ${e?.remarks===c?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${n[c]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${c}
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
    `;A.fire({html:i,width:window.innerWidth<640?"96vw":window.innerWidth<1024?"90vw":"1120px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"0.75rem":window.innerWidth<1024?"1.25rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:n=>{window.initFlowbite&&window.initFlowbite();const c=n.querySelector("#cancel-modal-btn");c&&c.addEventListener("click",()=>{!t&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),A.close(),e?._isBulk&&Te.onCancel()});const f=n.querySelector("#bulk-add-btn");f&&f.addEventListener("click",()=>{A.close(),Te.init()});const d=(g,m)=>{g.addEventListener("paste",x=>{x.preventDefault();let L=(x.clipboardData||window.clipboardData).getData("text");if(L){L=L.replace(/[-.\s]/g,"/");const w=L.split("/");if(w.length===3){const B=w[0].padStart(2,"0"),N=w[1].padStart(2,"0");let H=w[2];if(H.length===2){const I=new Date().getFullYear(),j=Math.floor(I/100)*100;H=String(j+parseInt(H))}else H=H.padStart(4,"0");const U=`${B}/${N}/${H}`;g.value=U;const Z=new Event("input",{bubbles:!0});g.dispatchEvent(Z);const V=window.__parseFormattedDate(U);V&&m&&(m(V),document.activeElement===g&&g.blur());const T=g._datepicker||g.parentNode&&g.parentNode._datepicker;T&&typeof T.hide=="function"&&T.hide()}}}),g.addEventListener("input",x=>{const L=window.__maskDate(x.target.value);if(x.target.value!==L&&(x.target.value=L),L.length===10){const w=window.__parseFormattedDate(L);if(w&&m){m(w),document.activeElement===g&&g.blur();const B=g._datepicker||g.parentNode&&g.parentNode._datepicker;B&&typeof B.hide=="function"&&B.hide()}}}),g.addEventListener("changeDate",x=>{if(x.detail&&x.detail.date&&m){m(x.detail.date);const L=g._datepicker||g.parentNode&&g.parentNode._datepicker;L&&typeof L.hide=="function"&&L.hide()}})},p=n.querySelector("#birthday-input"),$=n.querySelector("#age-display"),u=n.querySelector("#age-warning"),h=n.querySelector("#submit-beneficiary-btn"),S=g=>{if(!g)return u&&u.classList.add("hidden"),h&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer")),!0;const m=parseInt(g),x=!isNaN(m)&&m>=18&&m<=29;return u&&(u.className=`mt-1 text-[0.625rem] font-bold ${x?"hidden":"flex"} items-center gap-1.5 animate-pulse ${fe()?"text-red-400":"text-red-600"}`),h&&(x?(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer","active:scale-[0.98]")):(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),x};if($&&($.addEventListener("input",g=>{S(g.target.value)}),$.value&&S($.value)),p){d(p,m=>{$&&($.value=window.calculateAge(m),S($.value),$.classList.add("animate-pulse"),setTimeout(()=>$.classList.remove("animate-pulse"),400))});const g=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);g&&(p._datepicker=new g(p,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const y=n.querySelector("#name-input-field"),D=n.querySelector("#duplicate-warning");if(y&&D){let g;const m=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},x=(w,B="")=>{D.className=`mt-1 text-[0.625rem] font-bold ${w?"flex":"hidden"} items-center gap-1.5 animate-pulse ${fe()?"text-red-400":"text-red-600"}`;const N=D.querySelector("span");N&&(N.textContent=B?`Beneficiary already exists: ${B}`:"Beneficiary already exists")},L=async w=>{const B=m(),N=await fetch(`${ue()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...B?{"X-User-Id":String(B)}:{}},body:JSON.stringify({name:w,user_id:B,exclude_id:t?e?.id:null})});if(!N.ok)throw new Error(`Duplicate check failed (${N.status})`);return N.json()};y.addEventListener("input",w=>{const B=w.target.value.trim();if(clearTimeout(g),B.length<3){x(!1);return}g=setTimeout(async()=>{try{const N=await L(B);N.success&&N.exists?x(!0,N.match||N.name):x(!1)}catch(N){console.error("Duplicate check error:",N)}},500)}),e?.name&&(x(!1),(async()=>{const w=await L(e.name);w.success&&w.exists&&x(!0,w.match||w.name)})())}const _=n.querySelector("#full-id-input"),te=n.querySelector("#series-no-input"),Q=n.querySelector('input[name="startDate"]'),F=n.querySelector('input[name="endDate"]'),le=n.querySelectorAll('input[name="remarks"]'),ne=n.querySelector("#extension-log-container"),ie=async g=>{if(!g)return;const m=[_,te].filter(Boolean);m.forEach(x=>{x.classList.add("animate-pulse"),x.placeholder="Syncing..."});try{const[x,L]=await Promise.all([ee(`api/beneficiaries.php?next_id&year=${encodeURIComponent(g)}`),ee(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(g)}`)]),w=x.success&&x.data?.success?x.data.nextId:null,B=L.success&&L.data?.success?L.data.nextSeries:null;w&&_&&(_.value=w),B&&te&&(te.value=B)}catch(x){console.error("ID Sync error:",x)}finally{m.forEach(x=>x.classList.remove("animate-pulse"))}},re=n.querySelector("#replacement-search-input"),pe=n.querySelector("#replacement-hidden"),oe=n.querySelector("#replacement-suggestions"),he=g=>{const m=(g.name||"").toUpperCase().trim(),x=g.startDateFormatted||g.startDate||"N/A",L=g.endDateFormatted||g.endDate||"N/A";return`${m} (${x.toUpperCase()} - ${L.toUpperCase()})`},me=g=>{if(oe){if(!g.length){oe.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt}">No matching beneficiary found.</div>`,oe.classList.remove("hidden");return}oe.innerHTML=g.map(m=>{const x=he(m);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${x.replace(/"/g,"&quot;")}">
                            ${x}
                        </button>
                    `}).join(""),oe.classList.remove("hidden"),oe.querySelectorAll(".replacement-option").forEach(m=>{m.addEventListener("click",()=>{const x=m.getAttribute("data-replacement")||"";re&&(re.value=x),pe&&(pe.value=x),oe.classList.add("hidden")})})}};let xe=null;const M=async(g="")=>{const m=(g||"").trim(),x=`api/beneficiaries.php?replacement_candidates=1&limit=20${m?`&q=${encodeURIComponent(m)}`:""}`,L=await ee(x);L.success&&L.data?.success&&Array.isArray(L.data.candidates)&&me(L.data.candidates)};re&&pe&&oe&&(re.addEventListener("focus",()=>{M(re.value||"")}),re.addEventListener("input",()=>{pe.value=re.value.trim(),clearTimeout(xe),xe=setTimeout(()=>{M(re.value||"")},250)}),document.addEventListener("click",g=>{re&&oe&&!re.contains(g.target)&&!oe.contains(g.target)&&oe.classList.add("hidden")}));const R=()=>{const g=n.querySelector('input[name="remarks"]:checked');return g?g.value:"ONGOING"},O=g=>{const m=n.querySelector(`input[name="remarks"][value="${g}"]`);m&&(m.checked=!0,l())},q=()=>{if(F&&F.value){const g=window.__parseFormattedDate(F.value);if(!g)return;const m=new Date;m.setHours(0,0,0,0);let x="ONGOING";g<m&&(x="EXPIRED"),O(x)}},l=()=>{if(!ne)return;const g=R();if(g==="ABSORBED"){const m=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,x=m.getTimezoneOffset()*6e4,L=new Date(m.getTime()-x).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${L}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                    `}else if(g==="RESIGNED"){const m=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,x=m.getTimezoneOffset()*6e4,L=new Date(m.getTime()-x).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${L}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ne.innerHTML=""};if(Q){let g=null;d(Q,w=>{const B=w.getFullYear();if(F){const N=new Date(w);N.setDate(N.getDate()+243);const H=String(N.getMonth()+1).padStart(2,"0"),U=String(N.getDate()).padStart(2,"0"),Z=N.getFullYear();F.value=`${H}/${U}/${Z}`}q(),B>1900&&B!==g&&(g=B,ie(B))}),F&&d(F,()=>q());const m=n.querySelector("#date-range-picker"),x=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),L=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(x&&m&&Q&&F){const w=new x(m,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});Q._datepicker=w.datepickers?.[0]||null,F._datepicker=w.datepickers?.[1]||null}else L&&(Q&&(Q._datepicker=new L(Q,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),F&&(F._datepicker=new L(F,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!t){const w=new Date().getFullYear();ie(w)}}le.forEach(g=>g.addEventListener("change",l));const b=n.querySelector("#resign-btn"),v=n.querySelector("#absorb-btn");b&&b.addEventListener("click",()=>O("RESIGNED")),v&&v.addEventListener("click",()=>O("ABSORBED")),n.querySelectorAll('input[type="text"], textarea').forEach(g=>{["id-number-input","full-id-input"].includes(g.id)||g.addEventListener("input",()=>{const m=g.selectionStart,x=g.selectionEnd;g.value=g.value.toUpperCase(),g.setSelectionRange(m,x)})}),q(),l(),C("education-input","course-suggestions","course-option"),C("designation-input","work-suggestions","work-option"),(()=>{const g=n.querySelector("#office-input"),m=n.querySelector("#office-suggestions");if(!g||!m)return;let x="OFFICES",L=null,w=[];const B=async()=>{const H="dole_offices_cache",U=async()=>{let V=[];try{if(be&&De()){const[{data:T,error:I},{data:j}]=await Promise.all([be.from("offices").select("*").order("office"),be.from("office_locations").select("office_id")]);if(!I&&T?.length){const Y={};j&&j.forEach(J=>{Y[J.office_id]=(Y[J.office_id]||0)+1}),V=T.map(J=>({id:J.id??J.office_id,office:J.office||J.office_name||"",location_count:Y[J.id??J.office_id]||0})).filter(J=>J.office)}}}catch{}if(!V.length)try{const T=await ee("api/beneficiaries.php?get_offices_advanced=1");T.success&&T.data?.success&&Array.isArray(T.data.offices)&&(V=T.data.offices)}catch(T){console.error("Office fetch failed:",T)}return V.length>0&&(w=V,localStorage.setItem(H,JSON.stringify({data:V,timestamp:Date.now()}))),V},Z=localStorage.getItem(H);if(Z)try{const{data:V,timestamp:T}=JSON.parse(Z);return w=V,Date.now()-T>300*1e3&&U().then(()=>{x==="OFFICES"&&N("OFFICES",L,g.value)}),V}catch{localStorage.removeItem(H)}return w.length===0?await U():w},N=async(H="OFFICES",U=null,Z="")=>{if(x=H,L=U,H==="OFFICES"){const T=(await B()).filter(P=>P.office.toLowerCase().includes(Z.toLowerCase()));m.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70 border-b ${r.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${T.length>0?T.map(P=>{const X=parseInt(P.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg ${X?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${P.id}" data-name="${P.office}" data-has-locations="${X}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${P.office}</span>
                                            </div>
                                            ${X?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                        </div>
                                    `}).join(""):`
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${Z.trim()?`
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-50 px-1">New office: "${Z.trim()}"</div>
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
                        `;const I=Z.trim(),j=m.querySelector("#add-office-location-row-modal"),Y=m.querySelector("#new-office-loc-input-modal"),J=m.querySelector("#confirm-office-with-loc-modal"),ae=m.querySelector("#add-office-with-loc-btn-modal"),W=m.querySelector("#skip-office-loc-btn-modal");if(ae&&j&&ae.addEventListener("click",P=>{P.stopPropagation(),j.classList.remove("hidden"),j.classList.add("flex"),setTimeout(()=>Y?.focus(),50)}),J&&Y){const P=X=>{X.stopPropagation();const de=Y.value.trim();g.value=de?`${I} - ${de}`:I,g.dataset.locationName=de||"",m.classList.add("hidden"),g.dispatchEvent(new Event("change"))};J.addEventListener("click",P),Y.addEventListener("keydown",X=>{X.key==="Enter"&&P(X)}),Y.addEventListener("click",X=>X.stopPropagation())}W&&W.addEventListener("click",P=>{P.stopPropagation(),g.value=I,g.dataset.locationName="",m.classList.add("hidden"),g.dispatchEvent(new Event("change"))}),m.querySelectorAll(".office-code-option").forEach(P=>{P.addEventListener("click",X=>{X.stopPropagation(),P.dataset.hasLocations==="true"?N("LOCATIONS",{id:P.dataset.id,name:P.dataset.name}):(g.value=P.dataset.name,g.dataset.officeId=P.dataset.id,delete g.dataset.locationName,m.classList.add("hidden"),g.dispatchEvent(new Event("change")))})})}else{m.innerHTML=`
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
                                    <input type="text" id="location-search-internal" placeholder="Search in ${U.name}..." 
                                        class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-900/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                        value="${Z.includes(" - ")?Z.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const V=m.querySelector("#locations-list-container"),T=m.querySelector("#location-search-internal"),I=`dole_locs_cache_${U.id}`;let j=[];const Y=localStorage.getItem(I);if(Y)try{const{data:W,timestamp:P}=JSON.parse(Y);j=W}catch{localStorage.removeItem(I)}const J=async()=>{let W=[];if(be&&De()){const{data:P,error:X}=await be.from("office_locations").select("location").eq("office_id",U.id).order("location");!X&&P&&(W=P)}if(W.length===0)try{const P=await ee(`api/beneficiaries.php?get_office_locations=1&office_id=${U.id}`);P.success&&P.data?.success&&Array.isArray(P.data.locations)&&(W=P.data.locations)}catch(P){console.error("Office locations fetch failed:",P)}W.length>0&&(j=W,localStorage.setItem(I,JSON.stringify({data:W,timestamp:Date.now()})),ae(T.value))},ae=(W="")=>{const P=j.filter(de=>de.location.toLowerCase().includes(W.toLowerCase())),X=W.trim();P.length>0?V.innerHTML=P.map(de=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${de.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${de.location}</span>
                                    </div>
                                `).join(""):j.length===0?V.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(V.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60">No matching locations.</div>
                                    ${X?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${X}" as location
                                        </button>
                                    </div>`:""}
                                `,X&&V.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{g.value=`${U.name} - ${X}`,g.dataset.officeId=U.id,g.dataset.locationName=X,m.classList.add("hidden"),g.dispatchEvent(new Event("change"))})),V.querySelectorAll(".location-option").forEach(de=>{de.addEventListener("click",Qt=>{const Ye=de.dataset.location;g.value=`${U.name} - ${Ye}`,g.dataset.officeId=U.id,g.dataset.locationName=Ye,m.classList.add("hidden"),g.dispatchEvent(new Event("change"))})})};ae(T.value),J(),setTimeout(()=>T.focus(),50),T.addEventListener("input",()=>ae(T.value)),T.addEventListener("click",W=>W.stopPropagation()),m.querySelector("#back-to-offices").addEventListener("click",W=>{W.stopPropagation(),N("OFFICES")})}};g.addEventListener("focus",()=>{m.classList.remove("hidden"),N(x,L,g.value)}),g.addEventListener("input",()=>{delete g.dataset.officeId,delete g.dataset.locationName,x="OFFICES",L=null,m.classList.remove("hidden"),N("OFFICES",null,g.value)}),document.addEventListener("click",H=>{!g.contains(H.target)&&!m.contains(H.target)&&(m.classList.add("hidden"),g.value||(x="OFFICES",L=null))})})();function C(g,m,x){const L=n.querySelector(`#${g}`),w=n.querySelector(`#${m}`);if(!L||!w)return;let B=!1;L.addEventListener("focus",()=>w.classList.remove("hidden")),document.addEventListener("click",N=>{!L.contains(N.target)&&!w.contains(N.target)&&w.classList.add("hidden")}),L.addEventListener("input",()=>{if(B){B=!1;return}const N=L.value.toLowerCase(),H=w.querySelectorAll(`.${x}`);let U=!1;H.forEach(Z=>{const V=Z.querySelector(".option-text");(V?V.innerText:Z.innerText).toLowerCase().includes(N)?(Z.style.display="block",U=!0):Z.style.display="none"}),U?w.classList.remove("hidden"):w.classList.add("hidden")}),w.addEventListener("click",N=>{const H=N.target.closest(`.${x}`);if(!H)return;const U=H.querySelector(".option-text");L.value=U?U.innerText.trim():H.innerText.trim(),B=!0,w.classList.add("hidden"),L.dispatchEvent(new Event("change"))})}const k=n.querySelector("#add-beneficiary-form"),G="add_beneficiary_draft";if(!t){const g=localStorage.getItem(G);if(g)try{const m=JSON.parse(g);Object.entries(m).forEach(([x,L])=>{const w=k.elements[x];w&&w.type!=="file"&&w.type!=="hidden"&&(w.value=L)})}catch(m){console.error("Error loading draft",m)}}k.addEventListener("input",g=>{if(!t){const m=new FormData(k),x={};m.forEach((L,w)=>x[w]=L),localStorage.setItem(G,JSON.stringify(x))}}),k&&k.addEventListener("submit",g=>{g.preventDefault(),k.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(J=>{J.classList.remove("ring-2","ring-red-500","!border-red-500")});const x=new FormData(k);let L=!1;const w=J=>{const ae=k.querySelector(`[name="${J}"]`);ae&&ae.classList.add("ring-2","ring-red-500","!border-red-500"),L=!0},B=x.get("name"),N=x.get("contact"),H=x.get("startDate"),U=x.get("endDate"),Z=(x.get("designation")||"").trim();(!B||B.trim()===""||/[0-9]/.test(B))&&w("name"),N&&N.trim()!==""&&/[^0-9]/.test(N.replace(/[\s\-\+\(\)]/g,""))&&w("contact"),H||w("startDate"),U||w("endDate");const V=x.get("age"),T=parseInt(V);if((!V||isNaN(T)||T<18||T>29)&&(L=!0,u&&(u.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof fe=="function"&&fe()?"text-red-400":"text-red-600"}`),h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),L)return;const I={};x.forEach((J,ae)=>{if(["birthday","startDate","endDate"].includes(ae)){const W=window.__parseFormattedDate(J);if(W){const P=W.getFullYear(),X=String(W.getMonth()+1).padStart(2,"0"),de=String(W.getDate()).padStart(2,"0");I[ae]=`${P}-${X}-${de}`}else I[ae]=J}else I[ae]=J}),Z||(I.designation="N/A"),I.replacement||(I.replacement="");const j=n.querySelector("#office-input");j?.dataset.officeId&&(I.officeId=j.dataset.officeId),j?.dataset.locationName&&(I.locationName=j.dataset.locationName);const Y=n.querySelector("#full-id-input")?.value;t?(I.id=e?.id,Y&&(I.gip_id=Y)):(I.id=null,Y&&(I.gip_id=Y)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(I)){if(!t){const ae="add_beneficiary_draft",W=k.querySelector('[name="office"]')?.value||"",P=k.querySelector('[name="designation"]')?.value||"",X=k.querySelector('[name="education"]')?.value||"";localStorage.setItem(ae,JSON.stringify({office:W,designation:P,education:X}))}A.close(),setTimeout(()=>{A.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${t?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!t&&e?._isBulk&&Te.onSaveSuccess()},100)}else A.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const t=e.target,s=t.querySelector('button[type="submit"]'),a=s.innerHTML;s.disabled=!0,s.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(t);if((await fetch(t.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)A.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:i=>{i.addEventListener("mouseenter",A.stopTimer),i.addEventListener("mouseleave",A.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),t.reset();else throw new Error("Failed to send")}catch{A.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{s.disabled=!1,s.innerHTML=a}return!1};function Xt(){A.fire({html:`
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
        `,width:"800px",showConfirmButton:!1,showCloseButton:!1,backdrop:!0,position:"top",scrollbarPadding:!1,customClass:{container:"font-montserrat !backdrop-blur-md !bg-slate-900/70",popup:"!bg-transparent border-0 !shadow-none p-0 !overflow-visible mt-24",htmlContainer:"!overflow-visible",closeButton:"hidden"},didOpen:()=>{const e=document.getElementById("extraStatsSearchForm"),t=document.getElementById("statsSearchInput"),s=document.getElementById("statsDatePickerContainer"),a=document.getElementById("datepicker-range-start"),o=document.getElementById("datepicker-range-end"),r=document.getElementById("statsSortDropdownBtn"),i=document.getElementById("statsSortDropdown"),n=document.getElementById("statsSortDropdownLabel");let c="keyword";r&&i&&(r.addEventListener("click",f=>{f.stopPropagation(),i.classList.toggle("hidden")}),document.querySelectorAll(".stats-sort-option").forEach(f=>{f.addEventListener("click",d=>{const p=d.target.getAttribute("data-sort");c=p,n.textContent=d.target.textContent,i.classList.add("hidden"),p==="date"?(t.classList.add("hidden"),t.required=!1,s.classList.remove("hidden"),s.classList.add("flex"),t.value=""):(s.classList.add("hidden"),s.classList.remove("flex"),t.classList.remove("hidden"),t.required=!1,a.value="",o.value="",p==="offices"?t.placeholder="Search by Office name (e.g. Iligan)...":p==="education"?t.placeholder="Search by Education level (e.g. College)...":p==="ages"?t.placeholder="Search by Age (e.g. 24)...":t.placeholder="Search by name, office, status...")})}),document.addEventListener("click",f=>{!r.contains(f.target)&&!i.contains(f.target)&&i.classList.add("hidden")})),setTimeout(()=>t?.focus(),100),e.addEventListener("submit",async f=>{f.preventDefault();const d={mode:c,query:t.value.trim().toLowerCase(),startDate:a.value,endDate:o.value};await Kt(d)})}})}async function Kt(e){const t=document.getElementById("statsSearchLoader"),s=document.getElementById("statsSearchResult");t.classList.remove("hidden"),s.classList.add("hidden"),s.classList.remove("grid");let a=await _e();if(!a||a.length===0){const o=await ee("api/beneficiaries.php?all=true");o&&o.status==="success"&&o.data?(a=o.data,typeof $e=="function"&&$e(a)):o&&o.data&&(a=Array.isArray(o.data)?o.data:Array.isArray(o)?o:[],typeof $e=="function"&&$e(a))}setTimeout(()=>{const{mode:o,query:r,startDate:i,endDate:n}=e,c=a.filter(u=>{if(o==="date"){const h=u.startDate||u.createdAt;if(!h)return!1;const S=new Date(h);if(isNaN(S.getTime()))return!1;if(S.setHours(0,0,0,0),i){const y=new Date(i);if(y.setHours(0,0,0,0),S<y)return!1}if(n){const y=new Date(n);if(y.setHours(0,0,0,0),S>y)return!1}return!0}else return o==="offices"?u.office?.toLowerCase().includes(r)||!1:o==="education"?u.education?.toLowerCase().includes(r)||!1:o==="ages"?u.age==r:r?u.name?.toLowerCase().includes(r)||!1||u.id?.toLowerCase().includes(r)||!1||u.office?.toLowerCase().includes(r)||!1||u.remarks?.toLowerCase().includes(r)||!1||u.designation?.toLowerCase().includes(r)||!1:!0});let f="";o==="date"?i&&n?f=`Date: ${i} to ${n}`:i?f=`Date: From ${i}`:n?f=`Date: Until ${n}`:f="Date: All Time":f=`${o.charAt(0).toUpperCase()+o.slice(1)}: "${r||"ALL"}"`,document.getElementById("statsSearchTermDisplay").textContent=f;const d=document.getElementById("statsTopResults");d&&(d.innerHTML="",c.length>0?c.slice(0,3).forEach(h=>{const S=(h.remarks||"No Status").toUpperCase();let y="text-gray-500";S==="ONGOING"?y="text-green-500":S==="EXPIRED"?y="text-red-500":S==="ABSORBED"?y="text-emerald-600":S==="RESIGNED"?y="text-[#ce1126]":y="text-royal-blue",d.innerHTML+=`
                        <div class="flex flex-col border-b border-gray-200 dark:border-slate-700 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-100 truncate">${h.name||"Unknown Beneficiary"}</span>
                            <div class="flex justify-between items-center text-xs mt-1">
                                <span class="text-gray-500 truncate max-w-[60%]">${h.office||"N/A"}</span>
                                <span class="${y} font-bold text-[10px] uppercase tracking-wider">${S}</span>
                            </div>
                        </div>
                    `}):d.innerHTML='<div class="text-center text-gray-400 font-bold text-xs mt-6 uppercase tracking-widest">No matching records found.</div>'),c.length,c.filter(u=>(u.remarks||"").toUpperCase()==="ONGOING").length,c.filter(u=>(u.remarks||"").toUpperCase()==="EXPIRED").length,c.filter(u=>(u.remarks||"").toUpperCase()==="ABSORBED").length,c.filter(u=>(u.remarks||"").toUpperCase()==="RESIGNED").length;const p=new Date,$={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};document.getElementById("statsCurrentDateTime").textContent=p.toLocaleString("en-US",$),Rt(c,"statsModalChartContainer"),t.classList.add("hidden"),s.classList.remove("hidden"),s.classList.add("grid")},400)}export{xr as A,Zt as B,nt as _,Ae as a,ze as b,cr as c,ur as d,fr as e,br as f,ue as g,_e as h,$e as i,dr as j,yt as k,we as l,De as m,ee as n,ir as o,pr as p,hr as q,lr as r,be as s,or as t,gr as u,mr as v,ar as w,sr as x,nr as y,Pe as z};
