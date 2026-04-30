const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-B7rSfpuT.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import k from"./vendor-swal-BSk0fVSb.js";import{a as Oe}from"./vendor-DHtNC8Ux.js";const je="true".toLowerCase()==="true";function Ce(){return je}function Y(){const e=window.location.pathname,r="/dole-system/",s=e.toLowerCase().indexOf(r.toLowerCase());if(s!==-1)return e.substring(0,s+r.length);const a=e.indexOf("/frontend/");if(a!==-1)return e.substring(0,a+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function we(e="Incorrect Username or Password"){k.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function _e(e=!1){return k.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function st(){const e=localStorage.getItem("hasVisitedBefore"),r=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),r&&(r.style.display="none")),window.addEventListener("load",()=>{const s=document.querySelector("body > *:not(.page-loader)");s&&s.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),r&&r.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const de={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const r=o=>o.split("").map(t=>t.charCodeAt(0)),s=o=>("0"+Number(o).toString(16)).substr(-2),a=o=>r(this._key).reduce((t,u)=>t^u,o);return e.split("").map(r).map(a).map(s).join("")}catch(r){return console.error("Encryption Failed",r),null}},decrypt:function(e){try{const r=a=>a.split("").map(o=>o.charCodeAt(0)),s=a=>r(this._key).reduce((o,t)=>o^t,a);return e.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(s).map(a=>String.fromCharCode(a)).join("")}catch(r){return console.error("Decryption Failed",r),null}}};function nt(){document.querySelectorAll(".login-form-shared").forEach(r=>{const s=r.querySelector('input[name="username"]'),a=r.querySelector('input[name="password"]'),o=r.querySelector('input[name="rememberMe"]');if(s&&a&&o){const t=localStorage.getItem("secure_user"),u=localStorage.getItem("secure_pass");if(t&&u){const i=de.decrypt(t),l=de.decrypt(u);i&&l&&(s.value=i,a.value=l,o.checked=!0)}}r.addEventListener("submit",async t=>{t.preventDefault();try{const i=await(await fetch(`${Y()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.value,password:a.value})})).json();if(i.success){o.checked?(localStorage.setItem("secure_user",de.encrypt(s.value)),localStorage.setItem("secure_pass",de.encrypt(a.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const l=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(i.user));const p=document.getElementById("drawer-login");if(p){p.classList.add("translate-y-full");const n=p.querySelector("[data-drawer-hide]");n&&n.click()}await _e(l),Pe(l)}else{const l=document.getElementById("drawer-login");l?(l.classList.add("translate-y-full"),setTimeout(()=>{we(),setTimeout(()=>{l.classList.remove("translate-y-full"),a.value="",a.focus()},600)},400)):(we(),a.value="",a.focus())}}catch(u){console.error("Login Error:",u),k.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Pe(e=!1){const r=document.getElementById("left-panel"),s=document.getElementById("right-panel"),a=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");a&&(a.style.opacity="0"),o&&(o.style.opacity="0");const t=document.createElement("div");t.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const u=e?"":"animate__delay-1s",i=e?"animation-duration: 0.8s;":"animation-duration: 2s;";t.innerHTML=`
        <img src="${Y()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${u}" style="${i}" alt="DOLE Logo">
    `,document.body.appendChild(t);const l=e?0:1e3,p=e?600:1500;setTimeout(()=>{r&&r.classList.add("animate-slide-left"),s&&s.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${Y()}frontend/dashboard/`},p)},l)}function it(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${Y()}`})}function lt(){const e=document.getElementById("mobile-splash"),r=document.getElementById("show-login-btn"),s=document.getElementById("back-to-splash"),a=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),t=document.getElementById("reopen-login-drawer"),u=document.getElementById("request-notifications-btn"),i=async()=>{if("Notification"in window){const v=await Notification.requestPermission();console.log("Notification permission:",v),v==="granted"&&u&&u.classList.add("hidden")}};Notification.permission==="default"&&u&&(u.classList.remove("hidden"),u.addEventListener("click",i));const l=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&i();const v=document.getElementById("drawer-login");v&&v.classList.remove("translate-y-full")},800))},p=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};r&&r.addEventListener("click",l),document.querySelectorAll(".forgot-password-link").forEach(v=>{v.addEventListener("click",y=>{y.target.closest("#mobile-splash")&&l()})}),s&&s.addEventListener("click",()=>{const v=document.getElementById("drawer-login");if(v){v.classList.add("translate-y-full");const y=v.querySelector("[data-drawer-hide]");y&&y.click()}p()});const c=document.getElementById("drawer-login"),x=document.getElementById("curved-welcome"),$=document.getElementById("peoples-bg");c&&new MutationObserver(y=>{y.forEach(w=>{w.attributeName==="class"&&(c.classList.contains("translate-y-full")?(a&&(a.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),x&&(x.style.opacity="0",x.style.transform="scale(0.5)"),t&&e&&e.style.visibility==="hidden"&&(t.style.opacity="1",t.style.transform="scale(1)"),$&&($.classList.add("opacity-0","scale-0"),$.classList.remove("opacity-40","scale-[1.6]"))):(a&&(a.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),x&&(x.style.opacity="1",x.style.transform="scale(1)"),t&&(t.style.opacity="0",t.style.transform="scale(0)"),$&&($.classList.remove("opacity-0","scale-0"),$.classList.add("opacity-40","scale-[1.6]"))))})}).observe(c,{attributes:!0})}const le=()=>"false".toLowerCase()==="true";function He(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const oe={debug(...e){le()&&console.debug(...e)},info(...e){le()&&console.info(...e)},warn(...e){le()&&console.warn(...e)},error(...e){console.error(...e)},table(e){le()&&console.table(e)},json(e,r){le()&&console.debug(e,He(r))}},ce=new Map;async function ne(e,r={}){const a=`${Y()}${e}`;let o=null;try{const n=JSON.parse(localStorage.getItem("user"));n&&(o=n.user_id||n.id||null)}catch{}const t={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...r.headers},...r},i=(t.method||"GET").toUpperCase()==="GET"?2:1;let l=null;for(let n=1;n<=i;n++)try{if(oe.debug("[API] Request",{url:a,method:t.method||"GET",hasUserId:!!o}),t.body)try{oe.json("[API] Payload",JSON.parse(t.body))}catch{oe.debug("[API] Payload (raw)",t.body)}const c=await fetch(a,t);if(!c.ok)throw new Error(`HTTP ${c.status}: ${c.statusText}`);const x=await c.json();return ce.has(a)&&(ce.delete(a),oe.info?.("[API] Recovered",{url:a})),oe.debug("[API] Response",{url:a,ok:!0}),{success:!0,data:x}}catch(c){if(l=c,c instanceof TypeError&&/fetch/i.test(c.message||"")&&n<i){await new Promise(v=>setTimeout(v,1200));continue}}return l instanceof TypeError&&/fetch/i.test(l.message||"")?ce.get(a)||(ce.set(a,!0),oe.error("API Request Network Error (suppressed for repeats):",{url:a,message:l.message})):oe.error("API Request Error:",l),{success:!1,error:l?.message||"Unknown request error"}}async function V(e){return ne(e,{method:"GET"})}async function xe(e,r){return ne(e,{method:"POST",body:JSON.stringify(r)})}async function qe(e,r){return ne(e,{method:"PUT",body:JSON.stringify(r)})}async function dt(e,r){const s=new URLSearchParams(r).toString();return ne(`${e}?${s}`,{method:"PATCH"})}class Fe{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(r,s,a=1e4){this.stop(r),s();const o=setInterval(async()=>{this.isPageVisible&&await s()},a);this.intervals.set(r,o),console.log(`[Polling] Started: ${r} (every ${a}ms)`)}stop(r){this.intervals.has(r)&&(clearInterval(this.intervals.get(r)),this.intervals.delete(r),console.log(`[Polling] Stopped: ${r}`))}stopAll(){this.intervals.forEach((r,s)=>this.stop(s)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const Ve=new Fe;function ct(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function pt(e,r="",s="info"){k.fire({toast:!0,position:"top-end",icon:s,title:e,text:r,showConfirmButton:!1,timer:3e3,timerProgressBar:!0})}function ut(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{Ve.stopAll()});const Ue="modulepreload",Ge=function(e,r){return new URL(e,r).href},ye={},Le=function(r,s,a){let o=Promise.resolve();if(s&&s.length>0){let p=function(n){return Promise.all(n.map(c=>Promise.resolve(c).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};const u=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");o=p(s.map(n=>{if(n=Ge(n,a),n in ye)return;ye[n]=!0;const c=n.endsWith(".css"),x=c?'[rel="stylesheet"]':"";if(a)for(let v=u.length-1;v>=0;v--){const y=u[v];if(y.href===n&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${x}`))return;const $=document.createElement("link");if($.rel=c?"stylesheet":Ue,c||($.as="script"),$.crossOrigin="",$.href=n,l&&$.setAttribute("nonce",l),document.head.appendChild($),c)return new Promise((v,y)=>{$.addEventListener("load",v),$.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${n}`)))})}))}function t(u){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=u,window.dispatchEvent(i),!i.defaultPrevented)throw u}return o.then(u=>{for(const i of u||[])i.status==="rejected"&&t(i.reason);return r().catch(t)})};let me=null;if(Ce()){const e="https://llnddycvbcetztzwbdpx.supabase.co",r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{me=Oe(e,r),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(s){console.error("[SUPABASE SDK] Failed to initialize client:",s)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");function ze(e=new Date().getFullYear()){const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],s=[];for(let a=0;a<12;a++){const o=new Date(e,a+1,0).getDate();s.push(`${r[a]} 1-15, ${e}`),s.push(`${r[a]} 16-${o}, ${e}`)}return s}function Ye(e,r,s){if(s==="ar")return(e.period||"").toUpperCase().trim()===r.toUpperCase().trim();{const a=r.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!a)return!1;const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(a[1].toUpperCase());if(t===-1)return!1;const u=parseInt(a[4]),i=parseInt(a[2]),l=parseInt(a[3]),p=(e.date||"").substring(0,10),n=new Date(p+"T00:00:00");return isNaN(n)?!1:n.getFullYear()===u&&n.getMonth()===t&&n.getDate()>=i&&n.getDate()<=l}}function Ze(e){if(!e)return"-";const r=e.toUpperCase();return r==="VERIFIED"||r==="COMPLETED"?"✓":r==="REJECTED"||r==="DECLINED"?"X":r==="PENDING"?"?":r}function ke(e,r,s,a){const o=e.map(t=>{const u=r[t.id]||[],i=a.map(l=>{const p=u.find(n=>Ye(n,l,s));return p?Ze(p.status):"-"});return{name:t.name||t.id,cells:i}});return{periods:a,rows:o}}function $e(e,r,s){const{periods:a,rows:o}=r,t=a.length+1;let u='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return u+=`<tr><td colspan="${t}" style="background:${s};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,u+=`<tr><th style="background:${s};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,a.forEach(i=>{u+=`<th style="background:${s};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${i}</th>`}),u+="</tr>",o.forEach((i,l)=>{const p=l%2===0?"#ffffff":"#f5f5f5";u+="<tr>",u+=`<td style="background:${p};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${i.name}</td>`,i.cells.forEach(n=>{u+=`<td style="background:${p};padding:5px 8px;text-align:center;font-weight:bold;color:${n==="✓"?"#15803d":n==="X"?"#dc2626":"#9ca3af"};">${n}</td>`}),u+="</tr>"}),u+="</table>",u}async function gt(e){const r="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[10px] gap-1.5",s=e.length,a=await k.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export Logs</span>',html:`
            <div class="font-montserrat text-left">
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ps-1">
                    Configure and export logs for <span class="text-royal-blue font-black">${s} beneficiaries</span>
                </p>

                <!-- Log Type -->
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Log Type</label>
                <div class="grid grid-cols-3 gap-2 mb-5">
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="dtr" class="peer sr-only" checked>
                        <div class="${r} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 hover:bg-blue-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <span>DTR</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="ar" class="peer sr-only">
                        <div class="${r} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 hover:bg-orange-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                            <span>AR</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="both" class="peer sr-only">
                        <div class="${r} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 hover:bg-emerald-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                            <span>BOTH</span>
                        </div>
                    </label>
                </div>

                <!-- Beneficiary Count -->
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Beneficiaries to Include</label>
                <div class="grid grid-cols-3 gap-2 mb-3" id="count-options">
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="10" class="peer sr-only" checked>
                        <div class="${r} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">10</span><span>persons</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="25" class="peer sr-only">
                        <div class="${r} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">25</span><span>persons</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="custom" class="peer sr-only">
                        <div class="${r} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
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
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Year</label>
                <select id="exp-year" class="block w-full text-xs font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 mb-4 focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue outline-none">
                    <option value="${new Date().getFullYear()}">${new Date().getFullYear()}</option>
                    <option value="${new Date().getFullYear()-1}">${new Date().getFullYear()-1}</option>
                </select>
            </div>
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(l=>{l.addEventListener("change",()=>{const p=document.getElementById("custom-count-wrap");p.classList.toggle("hidden",l.value!=="custom"||!l.checked);const n=document.querySelector('input[name="exp-count"]:checked');p.classList.toggle("hidden",n?.value!=="custom")})})},preConfirm:()=>{const l=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",p=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let n=parseInt(p==="custom"?document.getElementById("exp-custom-count")?.value||s:p,10);(isNaN(n)||n<1)&&(n=10),n=Math.min(n,s);const c=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:l,count:n,year:c}}});if(!a.isConfirmed||!a.value)return;const{type:o,count:t,year:u}=a.value,i=e.slice(0,t);await Ie(i,o,u)}async function Ie(e,r,s){k.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const a=ze(s),o=Y();async function t(y){const N=await(await fetch(`${o}api/logs.php?type=${y}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return N.success?N.logs||[]:[]}let u={},i={};(r==="dtr"||r==="both")&&(await t("dtr")).forEach(w=>{const N=String(w.gip_id||w.beneficiary_id||w.id||"");u[N]||(u[N]=[]),u[N].push(w)}),(r==="ar"||r==="both")&&(await t("ar")).forEach(w=>{const N=String(w.gip_id||w.beneficiary_id||w.id||"");i[N]||(i[N]=[]),i[N].push(w)});const l=e.map(y=>({...y,mapKey:String(y.id||y.gip_id||y.beneficiary_id)}));let p="";const n=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(r==="dtr"||r==="both"){const y=l.map(N=>({...N,id:N.mapKey})),w=ke(y,u,"dtr",a);p+="<br>"+$e(`DTR – Daily Time Records (${s})`,w,"#1d4ed8")}if(r==="ar"||r==="both"){const y=l.map(N=>({...N,id:N.mapKey})),w=ke(y,i,"ar",a);p+="<br><br>"+$e(`AR – Accomplishment Reports (${s})`,w,"#d97706")}const c=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${n} | DOLE LDNPFO – GIP Monitoring System</p>
                ${p}
            </body>
            </html>
        `,x=new Blob([c],{type:"application/vnd.ms-excel"}),$=URL.createObjectURL(x),v=document.createElement("a");v.href=$,v.download=`LDN_LOGS_${r.toUpperCase()}_${s}.xls`,document.body.appendChild(v),v.click(),URL.revokeObjectURL($),document.body.removeChild(v),k.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(a){console.error("[LogsExport] Error:",a),k.fire("Error",a.message||"Failed to generate export.","error")}}const ie="color-theme",Je=3600*24*365;function Xe(e,r,s){document.cookie=`${e}=${r}; max-age=${s}; path=/; SameSite=Lax`}function Be(e){const r=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return r?decodeURIComponent(r[1]):null}function Ae(){const e=localStorage.getItem(ie)||Be(ie);return e==="dark"||e==="light"?e:"light"}function ue(e){const r=document.documentElement;e==="dark"?r.classList.add("dark"):r.classList.remove("dark"),localStorage.setItem(ie,e),Xe(ie,e,Je),We(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function ve(){const e=Ae();ue(e==="dark"?"light":"dark")}function We(e){const r=e==="dark",s=document.getElementById("pref-dark-mode");s&&(s.checked=r);const a=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");a&&o&&(a.classList.toggle("hidden",r),o.classList.toggle("hidden",!r));const t=document.getElementById("sidebar-theme-label");t&&(t.textContent=r?"Light Mode":"Dark Mode")}function bt(){const e=Ae();ue(e);const r=document.getElementById("pref-dark-mode");r&&r.addEventListener("change",()=>{ue(r.checked?"dark":"light")});const s=document.getElementById("theme-toggle-btn");s&&s.addEventListener("click",ve),document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.addEventListener("click",ve)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{localStorage.getItem(ie)||Be(ie)||ue(a.matches?"dark":"light")})}function ee(){return document.documentElement.classList.contains("dark")}window.toggleTheme=ve;window.isDarkMode=ee;const ge={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=ee(),r={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},s=`
            <div class="font-montserrat text-left px-2 sm:px-4 py-2">
                <div class="mb-6 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-black ${r.textHeading} flex items-center gap-2.5">
                            <div class="p-2 ${r.iconBg} rounded-lg ${r.iconText} border ${r.iconBorder} shadow-sm">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                            </div>
                            Bulk Add Beneficiaries
                        </h3>
                        <p class="text-[10px] ${r.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Upload a CSV file to automate data entry.</p>
                    </div>
                </div>

                <div class="${r.bgCard} rounded-xl p-6 border ${r.borderCard} shadow-sm mb-4">
                    <label for="csv-upload" class="flex flex-col items-center justify-center w-full h-48 ${r.bgUpload} border-2 border-dashed ${r.borderUpload} rounded-lg cursor-pointer ${r.hoverUpload} transition-all duration-300 group">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-10 h-10 mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm font-bold ${r.textUpload}"><span class="font-black text-blue-500">Click to upload</span> or drag and drop</p>
                            <p class="text-xs ${r.textSubtitle} uppercase tracking-widest font-bold">.CSV format only</p>
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
                        <span class="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block leading-tight">Auto-Save (Fast Mode)</span>
                        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Skip manual confirmations for every record</span>
                    </div>
                </div>
            </div>
        `;k.fire({html:s,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:a=>{const o=a.querySelector("#csv-upload"),t=a.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(i=>{t.addEventListener(i,u,!1)});function u(i){i.preventDefault(),i.stopPropagation()}["dragenter","dragover"].forEach(i=>{t.addEventListener(i,()=>{t.classList.add("border-blue-500","bg-blue-50/50"),e&&t.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(i=>{t.addEventListener(i,()=>{t.classList.remove("border-blue-500","bg-blue-50/50"),e&&t.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",i=>{const l=i.target.files[0];if(l){const p=a.querySelector("#auto-save-toggle");this.isAutoSave=p?p.checked:!1,this.handleFile(l)}}),t.addEventListener("drop",i=>{const p=i.dataTransfer.files[0];if(p){const n=a.querySelector("#auto-save-toggle");this.isAutoSave=n?n.checked:!1,this.handleFile(p)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){k.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const r=new FileReader;r.onload=s=>{const a=s.target.result;this.parseCSV(a)},r.readAsText(e)},async parseCSV(e){let r=[],s="",a=!1;for(let o=0;o<e.length;o++){let t=e[o];t==='"'&&(a=!a),!a&&(t===`
`||t==="\r")?(t==="\r"&&e[o+1]===`
`&&o++,s.trim()!==""&&r.push(s),s=""):s+=t}s.trim()!==""&&r.push(s),this.queue=[];for(let o=0;o<r.length;o++){let t=r[o].trim();if(!t)continue;let u=[],i="",l=!1;for(let p=0;p<t.length;p++){let n=t[p];n==='"'?l=!l:n===","&&!l?(u.push(i.replace(/(^"|"$)/g,"").trim()),i=""):i+=n}if(u.push(i.replace(/(^"|"$)/g,"").trim()),u.length>=2){const p=u[3];if(!p||isNaN(parseInt(p)))continue;const n=u[1];if(!n||n.toLowerCase()==="name"||n.toLowerCase()==="full name")continue;const c=u[2];let x=u[4]?u[4].toUpperCase().trim():"",$="";(x==="F"||x.includes("FEMALE"))&&($="Female"),(x==="M"||x.includes("MALE"))&&($="Male");const v=u[5],y=u[6],w=u[7],N=this.formatDate(u[8]),j=this.formatDate(u[9]);this.queue.push({name:n,address:c,age:p,gender:$,education:v,startDate:N,endDate:j,office:y,designation:w})}}if(this.queue.length>0){try{k.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{k.showLoading()}});const o=this.queue.map(l=>l.name);let t=null;try{t=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{t=null}const i=await(await fetch(`${Y()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...t?{"X-User-Id":String(t)}:{}},body:JSON.stringify({names:o,user_id:t})})).json();if(i.success&&i.duplicates&&i.duplicates.length>0){const l=new Set(i.duplicates.map(n=>n.toLowerCase().trim())),p=this.queue.length;this.queue=this.queue.filter(n=>{const c=l.has(n.name.toLowerCase().trim());return c&&console.warn(`%c[Bulk Add] SKIPPED: ${n.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!c}),console.log(`[Bulk Add] Removed ${p-this.queue.length} duplicates ahead of time.`)}}catch(o){console.error("Bulk duplicate check failed:",o)}if(this.queue.length===0){k.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,k.close(),this.processNext()}else k.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){ee();const e=Math.round(this.currentIndex/this.queue.length*100),r=`
            <div class="p-2 text-left font-montserrat">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-black text-blue-600 dark:text-blue-400 uppercase italic">Processing Data...</h3>
                    <span class="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">${this.currentIndex} / ${this.queue.length}</span>
                </div>
                
                <div class="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-4 mb-6 p-1 border border-gray-200 dark:border-slate-700">
                    <div id="bulk-progress-bar" class="bg-blue-600 h-full rounded-full transition-all duration-300 shadow-sm shadow-blue-500/20" style="width: ${e}%"></div>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="text-xs font-bold text-gray-600 dark:text-slate-300">Currently saving: <span class="text-blue-500" id="bulk-current-name">${this.queue[this.currentIndex]?.name||"..."}</span></p>
                    <p class="text-[10px] text-gray-400 font-medium">Please do not close the window until complete.</p>
                </div>

                <div class="mt-6 pt-4 border-t border-gray-50 dark:border-slate-800 flex justify-end">
                    <button id="stop-bulk-btn" class="px-5 py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-red-100 dark:border-red-800/40 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                        Stop Processing
                    </button>
                </div>
            </div>
        `;if(k.isVisible()&&k.getPopup().querySelector("#bulk-progress-bar")){const s=document.getElementById("bulk-progress-bar"),a=k.getPopup().querySelector("span.text-\\[10px\\]"),o=document.getElementById("bulk-current-name");s&&(s.style.width=`${e}%`),a&&(a.textContent=`${this.currentIndex} / ${this.queue.length}`),o&&(o.textContent=this.queue[this.currentIndex]?.name||"...")}else k.fire({html:r,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:s=>{s.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const r=new Date(e);if(isNaN(r.getTime())){const t=e.split("/");return t.length===3?`${t[2]}-${t[1].padStart(2,"0")}-${t[0].padStart(2,"0")}`:""}const s=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${s}-${a}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const s=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[a,o]=await Promise.all([V(`api/beneficiaries.php?next_id&year=${s}`),V(`api/beneficiaries.php?next_series_no&year=${s}`)]);a.success&&a.data?.success&&a.data?.nextId&&(e.gip_id=a.data.nextId,e.id=null),o.success&&o.data?.success&&o.data?.nextSeries&&(e.seriesNo=o.data.nextSeries)}catch(s){console.warn("[Bulk Add] Identifier fetch failed, continuing:",s?.message||s)}const r=await window.addBeneficiaryData(e);this.isActive&&(r?this.onSaveSuccess():be(e))})():be(e)):be(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),k.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,k.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=ge;function Ee(e){if(!e)return"";const r=new Date(e),s=new Date;let a=s.getFullYear()-r.getFullYear();const o=s.getMonth()-r.getMonth();return(o<0||o===0&&s.getDate()<r.getDate())&&a--,a>=0?a:0}function Se(e){return e?e.includes("DOLE")?"bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800":e.includes("DepEd")?"bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/40 dark:text-orange-300 dark:border-orange-800":e.includes("LGU")?"bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800":e.includes("DICT")?"bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 dark:border-cyan-800":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300"}function Ke(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300";const r=e.toUpperCase();return r==="ONGOING"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800":r==="EXPIRED"?"bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800":r==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900":r==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900":"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300"}function pe(e,r=0){e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const s=window.innerWidth<640?"top":"top-start";let a=r;const o=e.arLogs||[],t=e.dtrLogs||[],u=e.docs||[],i=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],l=i.map(c=>{const x=u.find($=>$.name.toUpperCase()===c.toUpperCase());return x||{name:c,status:"PENDING",id:null}});u.forEach(c=>{i.some($=>$.toUpperCase()===c.name.toUpperCase())||l.push(c)});const p=`
<div class="border-b border-default pb-4 mb-5 flex flex-col relative w-full pt-4 font-montserrat user-select-none">
    <div class="flex justify-between items-start pe-12">
        <h3 class="text-xl sm:text-2xl font-black text-royal-blue leading-tight mb-1.5 tracking-tight break-words pr-2">${e.name}</h3>
        <button type="button" id="close-drawer-btn" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
           <span class="sr-only">Close drawer</span>
        </button>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-6 w-full">
        <div class="flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ID No.</span>
            <span class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-gray-400 truncate">${e.id}</span>
        </div>
        <div class="flex flex-col gap-1 text-left overflow-hidden">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1 flex items-center">
                <span class="sm:hidden">REMARKS</span>
                <span class="hidden sm:inline">REMARKS / OFFICE</span>
            </span>
            <div class="flex items-center flex-wrap gap-1.5 min-h-[30px]">
                <span class="${Ke(e.remarks)} text-[10px] font-black px-2 py-1 rounded border uppercase tracking-widest shadow-sm border-l-4 ${e.remarks==="ONGOING"?"border-l-green-600":"border-l-red-600"}">${e.remarks}</span>
                <!-- Desktop Only Office Badge (Pill Style) -->
                <span class="${Se(e.office)} hidden sm:inline-block text-[9px] font-black px-2.5 py-1 rounded-full border shadow-sm truncate max-w-[120px] lg:max-w-none" title="${e.office}">${e.office}</span>
            </div>
        </div>
    </div>

    <!-- Mobile Only Assigned Office Row (Rectangle Style) -->
    <div class="flex flex-col gap-1 text-left mt-4 sm:hidden">
        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
        <span class="${Se(e.office)} text-[10px] font-black px-2.5 py-2 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-indigo-500 w-full truncate" title="${e.office}">${e.office}</span>
    </div>
</div>

<h4 class="text-sm font-bold text-heading mt-6 mb-4 pb-2 border-b border-default whitespace-nowrap hidden lg:block">Personal Profile</h4>
<div class="flex flex-col gap-4 text-sm mt-3 px-1">
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
        <span class="${e.age||Ee(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right">${e.age||Ee(e.birthday)||"N/A"}</span>
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
            <span class="text-[11px] lg:text-sm font-black text-heading whitespace-nowrap tracking-tight truncate" title="${e.education}">${e.education||"N/A"}</span>
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

<!-- Container for right grid from modal -->
<div class="mt-8 pt-2 border-t border-default relative">
    <!-- Relocated Navigation Grid -->
    <div class="grid grid-cols-2 gap-3 pb-6 mb-2 border-b border-gray-100 dark:border-slate-800 relative z-10 w-full">
        <button id="drawer-prev-btn" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-secondary-medium text-heading text-[10px] sm:text-xs font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm border border-default-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-tertiary cursor-pointer">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREVIOUS
        </button>
        <button id="drawer-next-btn" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand text-white text-[10px] sm:text-xs font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm shadow-brand-medium/50 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-strong cursor-pointer text-center">
            NEXT
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
        </button>
    </div>

    <!-- Pages Container -->
    <div id="drawer-page-0" class="flex-1 flex flex-col gap-4">
        
        <div class="bg-gray-50/50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700 shadow-sm w-full">
            <p class="text-[9px] uppercase tracking-widest text-gray-400 dark:text-white font-black mb-3">Work Registry</p>
            <div class="flex items-center gap-3">
                <div class="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 shrink-0">
                    <svg class="w-5 h-5 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div class="flex-1 min-w-0">
                    <label class="text-[9px] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest truncate">Series No.</label>
                    <span class="text-sm sm:text-base font-black text-royal-blue dark:text-blue-400 font-mono whitespace-nowrap leading-none tracking-tight">${e.seriesNo||"2025-00-000"}</span>
                </div>
            </div>
        </div>

         <div class="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
            <label class="text-[9px] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest">Designation / Role</label>
            <p class="text-sm font-black text-heading break-words whitespace-normal leading-snug">${e.designation}</p>
        </div>
        
         <div class="bg-gray-50/30 dark:bg-slate-800/30 p-4 rounded-xl border border-dashed border-gray-200 dark:border-slate-700">
            <label class="text-[9px] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest">Replacement History</label>
             <p class="text-sm text-emerald-600 dark:text-emerald-400 font-bold italic underline decoration-emerald-500/30 underline-offset-4 cursor-default">${e.replacement||"None found."}</p>
        </div>

        ${e.remarks==="ABSORBED"?`
        <div class="bg-[#e8f5e9]/50 dark:bg-green-900/10 p-4 rounded-xl border border-[#c8e6c9] dark:border-green-900/30 mt-2">
            <p class="text-[9px] uppercase font-black text-[#2e7d32] dark:text-green-500 border-b border-green-200 dark:border-slate-800 pb-1 flex items-center gap-2 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> 
                Absorption Details
            </p>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest mr-4">Date</span>
                    <span class="font-black text-[#1b5e20] dark:text-green-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.absorbDate||String(e.absorbDate).includes("0000-00-00"))return"N/A";const c=new Date(e.absorbDate);return isNaN(c.getTime())||c.getFullYear()<1900?"N/A":(c.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+c.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest mr-4 mt-0.5">Where</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.absorb_where||"N/A"}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest mr-4 mt-0.5">Position</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.absorb_position||"N/A"}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest mr-4 mt-0.5">Agency</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.absorb_agency||"N/A"}</span>
                </div>
            </div>
        </div>
        `:""}

        ${e.remarks==="RESIGNED"?`
        <div class="bg-[#ffebee]/50 dark:bg-red-900/10 p-4 rounded-xl border border-[#ffcdd2] dark:border-red-900/30 mt-2">
            <p class="text-[9px] uppercase font-black text-[#ce1126] dark:text-red-500 border-b border-red-200 dark:border-slate-800 pb-1 flex items-center gap-2 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> 
                Resignation Details
            </p>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest mr-4">Date</span>
                    <span class="font-black text-[#b71c1c] dark:text-red-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.resignedDate||String(e.resignedDate).includes("0000-00-00"))return"N/A";const c=new Date(e.resignedDate);return isNaN(c.getTime())||c.getFullYear()<1900?"N/A":(c.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+c.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest mr-4 mt-0.5">Reason</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${e.resigned_reason||"N/A"}</span>
                </div>
            </div>
        </div>
        `:""}
    </div>
    
    <div id="drawer-page-1" class="hidden flex-1 flex flex-col gap-4">
        <h4 class="text-sm font-bold text-heading mb-2 border-b-2 border-brand pb-2 inline-block max-w-max">Required Documents</h4>
        <div class="flex flex-col gap-3">
            ${l.map(c=>{const x=c.status.toUpperCase(),v={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[x]||x,y=v==="COMPLETED",w=v==="REJECTED",N=y?"text-green-500":w?"text-red-500":"text-gray-400 dark:text-gray-500",j=y?"bg-green-50/50 dark:bg-green-900/10":w?"bg-red-50/50 dark:bg-red-900/10":"bg-gray-50/50 dark:bg-slate-800/50",G=y?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer":w?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer":"bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer";let O='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return y?O='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':w&&(O='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${j}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${N}">
                            ${O}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${y?"text-heading":"text-gray-500 dark:text-gray-400"} uppercase tracking-tight flex-1">${c.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${G} text-[10px] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${c.id}" data-name="${c.name}" data-status="${v} cursosr-pointer">
                        ${v}
                    </button>
                </div>
                `}).join("")}
        </div>
    </div>
    
    <div id="drawer-page-2" class="hidden flex-1 flex flex-col gap-6">
         <div class="flex justify-between items-center border-b-2 border-brand pb-2">
            <h4 class="text-sm font-bold text-heading uppercase tracking-widest">Submission Logs</h4>
            <div class="flex gap-2">
                <button type="button" id="add-dtr-log-btn" class="bg-blue-50 dark:bg-blue-900/40 text-royal-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                    + DTR
                </button>
                <button type="button" id="add-ar-log-btn" class="bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-800 hover:bg-orange-500 hover:text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                    + AR
                </button>
                <button type="button" id="export-log-btn" class="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-500 hover:text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-1">
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
                    ${t.length?t.map(c=>{const x=c.status||"PENDING";let $=x==="VERIFIED"||x==="COMPLETED"?"text-green-500":x==="REJECTED"||x==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",v=c.date||c.createdAt,y=v;if(v){const w=/^\d{4}-\d{2}-\d{2}$/.test(v)?new Date(v+"T00:00:00Z"):new Date(v);isNaN(w)||(y=w.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors edit-log-btn" data-type="dtr" data-id="${c.id}" data-val="${c.day||v}" data-status="${x}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${c.day||y}</span>
                            <span class="text-[11px] font-bold ${$} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${x}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${c.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `}).join(""):'<p class="text-[11px] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No DTR logs submitted.</p>'}
                </div>
            </div>

            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    AR Logs
                </h5>
                <div class="space-y-2">
                    ${o.length?o.map(c=>{const x=c.status||"PENDING";let $=x==="VERIFIED"||x==="COMPLETED"?"text-green-500":x==="REJECTED"||x==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",v=c.period||c.createdAt,y=v;if(v){const w=/^\d{4}-\d{2}-\d{2}$/.test(v)?new Date(v+"T00:00:00Z"):new Date(v);isNaN(w)||(y=w.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors edit-log-btn" data-type="ar" data-id="${c.id}" data-val="${v}" data-status="${x}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${v||y}</span>
                            <span class="text-[11px] font-bold ${$} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${x}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${c.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `}).join(""):'<p class="text-[11px] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No AR logs submitted.</p>'}
                </div>
            </div>
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
    `;let n=document.getElementById("beneficiary-drawer-container");n&&(n.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),n=document.createElement("div"),n.id="beneficiary-drawer-container",n.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl",n.setAttribute("tabindex","-1"),n.setAttribute("data-drawer-backdrop","true"),n.innerHTML=p,document.body.appendChild(n),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),Le(async()=>{const{Drawer:c}=await import("./vendor-flowbite-B7rSfpuT.js").then(x=>x.b);return{Drawer:c}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:c})=>{const x={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{n&&n.parentNode&&n.remove()},300)}},$=new c(n,x);$.show(),n.querySelector("#close-drawer-btn").addEventListener("click",()=>$.hide());const y=n.querySelector("#drawer-prev-btn"),w=n.querySelector("#drawer-next-btn"),N=2,j=()=>{n.querySelectorAll("[id^=drawer-page-]").forEach((S,M)=>{S.classList.toggle("hidden",M!==a)}),y.disabled=a===0,w.disabled=a===N,y.classList.toggle("opacity-50",a===0),w.classList.toggle("opacity-50",a===N)};y.addEventListener("click",()=>{a>0&&a--,j()}),w.addEventListener("click",()=>{a<N&&a++,j()}),j(),n.querySelectorAll(".drawer-doc-btn").forEach(S=>{S.addEventListener("click",async()=>{const M=S.dataset.name,I=S.dataset.status,h="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[9px] gap-2 transition-all duration-300 ",g=await k.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Set status for <span class="text-brand font-black">${M}</span></label>
                            
                            <div class="grid grid-cols-3 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="PENDING" class="peer sr-only" ${I==="PENDING"?"checked":""}>
                                    <div class="${h} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-amber-400 peer-checked:bg-amber-50 peer-checked:text-amber-600 dark:peer-checked:bg-amber-900/20 dark:peer-checked:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>Pending</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="COMPLETED" class="peer sr-only" ${I==="COMPLETED"?"checked":""}>
                                    <div class="${h} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-green-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        <span>Verify</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="REJECTED" class="peer sr-only" ${I==="REJECTED"?"checked":""}>
                                    <div class="${h} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-red-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Update Status</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const b=document.querySelector('input[name="swal-doc-status"]:checked');return b?b.value:null}});if(g.isConfirmed){const b=g.value;if(b===I)return;try{const A={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"}[b]||b,C=await xe("api/logs.php?type=docs",{gip_id:e.id,doc_name:M,status:A}),L=C.success?C.data:{success:!1,error:C.error};L.success?(k.fire({toast:!0,position:s,icon:"success",title:"Status updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):k.fire("Error",L.error||"Failed to update","error")}catch(B){k.fire("Error",B.message,"error")}}})});const G=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),O=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function W(S){const I=new Date(S+"T00:00:00").getDay();return I!==0&&I!==6&&!G.has(S)}function _(S){const M=S.getDate(),I=O[S.getMonth()],h=S.getFullYear(),g=new Date(h,S.getMonth()+1,0).getDate();return M<=15?`${I} 1-15, ${h}`:`${I} 16-${g}, ${h}`}const z=()=>{const S=new Date;if(!t.length)return _(S);let M=-1,I="";const h=C=>{const L=(C||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!L)return-1;const d=O.indexOf(L[1]),m=parseInt(L[2])===1?0:1;return parseInt(L[4])*100+d*2+m};if(t.forEach(C=>{const L=C.day||C.date||"",d=h(L);d>M&&(M=d,I=L)}),M===-1)return _(S);const g=I.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),b=O.indexOf(g[1]),B=parseInt(g[2]),A=parseInt(g[4]);if(B===1){const C=new Date(A,b+1,0).getDate();return`${O[b]} 16-${C}, ${A}`}else{const C=(b+1)%12,L=b===11?A+1:A;return`${O[C]} 1-15, ${L}`}},H=()=>{const S=new Date;if(!o.length)return _(S);let M=-1,I="";const h=C=>{const L=(C||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!L)return-1;const d=O.indexOf(L[1]),m=parseInt(L[2])===1?0:1;return parseInt(L[4])*100+d*2+m};if(o.forEach(C=>{const L=h(C.period);L>M&&(M=L,I=C.period)}),M===-1)return _(S);const g=I.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),b=O.indexOf(g[1]),B=parseInt(g[2]),A=parseInt(g[4]);if(B===1){const C=new Date(A,b+1,0).getDate();return`${O[b]} 16-${C}, ${A}`}else{const C=(b+1)%12,L=b===11?A+1:A;return`${O[C]} 1-15, ${L}`}},te=async(S,M)=>{k.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),k.showLoading();try{const I={gip_id:e.id};if(S==="dtr"){const b=M.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(b){const B=O.indexOf(b[1]),A=parseInt(b[2]),C=parseInt(b[3]);let L=new Date(C,B,A);for(;!W(L.toISOString().split("T")[0]);)L.setDate(L.getDate()+1);I.record_date=L.toISOString().split("T")[0]}else I.record_date=new Date().toISOString().split("T")[0];I.weekday=M}S==="ar"&&(I.period=M);const h=await xe(`api/logs.php?type=${S}`,I);(h.success?h.data:{success:!1,error:h.error}).success?(k.fire({toast:!0,position:s,icon:"success",title:"Auto-Added!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):k.fire("Error","Failed to add log.","error")}catch(I){k.fire("Error",I.message,"error")}},ae=async(S,M,I,h,g)=>{const b=M==="dtr"?"Record Date":"Period";ee();const B="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[10px] sm:text-xs gap-2 ",A='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',C='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:L}=await k.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${S} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">${b}</label>
                            <input id="swal-log-val" value="${h}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${g==="VERIFIED"?"checked":""}>
                                    <div class="${B} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${A}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${g==="REJECTED"||g==="DECLINED"?"checked":""}>
                                    <div class="${B} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${C}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const d=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:d?d.value:"PENDING"}}});if(L&&(L.val!==h||L.status!==g))try{const d={type:M,id:I,status:L.status};if(M==="dtr"){const D=L.val.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(D){const E=O.indexOf(D[1]),T=parseInt(D[2]),R=parseInt(D[3]);let q=new Date(R,E,T);for(;!W(q.toISOString().split("T")[0]);)q.setDate(q.getDate()+1);d.record_date=q.toISOString().split("T")[0]}else d.record_date=new Date().toISOString().split("T")[0];d.weekday=L.val}M==="ar"&&(d.period=L.val);const m=await qe("api/logs.php",d),f=m.success?m.data:{success:!1,error:m.error};f.success?(k.fire({toast:!0,position:s,icon:"success",title:"Log Updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):k.fire("Error",f.error||"Failed to update log.","error")}catch(d){k.fire("Error",d.message,"error")}},K=n.querySelector("#add-dtr-log-btn");K&&K.addEventListener("click",()=>te("dtr",z()));const Z=n.querySelector("#add-ar-log-btn");Z&&Z.addEventListener("click",()=>te("ar",H()));const J=n.querySelector("#export-log-btn");J&&J.addEventListener("click",async()=>{const S="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[11px] gap-2 ",M=await k.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export Logs</span>',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${S} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${S} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${S} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const I=document.querySelector('input[name="swal-export-type"]:checked');return I?I.value:null}});if(M.isConfirmed&&M.value){const I=M.value,h=new Date().getFullYear();await Ie([e],I,h)}}),n.querySelectorAll(".edit-log-btn").forEach(S=>{S.addEventListener("click",M=>{if(M.target.closest(".delete-log-btn"))return;const I=S.dataset.type,h=S.dataset.id,g=S.dataset.val,b=S.dataset.status;ae(I.toUpperCase(),I,h,g,b)})}),n.querySelectorAll(".delete-log-btn").forEach(S=>{S.addEventListener("click",async()=>{const M=S.dataset.id,I=S.dataset.type;if((await k.fire({title:'<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:'<span class="font-black tracking-widest uppercase">Delete</span>',cancelButtonText:'<span class="font-black tracking-widest uppercase">Wait</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)try{const g=await xe(`api/logs.php?type=${I}`,{log_id:M,action:"delete"});(g.success?g.data:{success:!1,error:g.error}).success?(k.fire({toast:!0,position:s,icon:"success",title:"Deleted",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):k.fire("Error","Failed to delete data.","error")}catch(g){k.fire("Error",g.message,"error")}})})}).catch(console.error)}function Qe(e){const r=ee(),s=`w-full bg-transparent border-b-2 ${r?"border-slate-700 text-white focus:border-brand placeholder-slate-600":"border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300"} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`,a=`w-full bg-transparent border-none ${r?"text-white":"text-royal-blue"} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`,o=["DOLE Field Office","LGU","DEPED","DICT","PCA"];function t(p){if(!p)return"";const n=new Date(p),c=new Date;let x=c.getFullYear()-n.getFullYear();const $=c.getMonth()-n.getMonth();return($<0||$===0&&c.getDate()<n.getDate())&&x--,x>=0?x:0}function u(p){if(!p)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const n=String(p).toUpperCase();return n==="ONGOING"?"bg-green-100 text-green-700 border-green-200":n==="EXPIRED"?"bg-red-400 text-white border-red-400":n==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":n==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const i=`
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
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ROX-ID</span>
            <input type="text" name="gip_id" value="${e.gip_id||e.id||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="ROX-RD-ESIG-0000-0000">
        </div>
        <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">SERIES NO.</span>
            <input type="text" name="seriesNo" value="${e.seriesNo||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="2025-00-000">
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4 mb-4">
        <div class="flex flex-col gap-1 text-left overflow-hidden relative">
             <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS (STATUS)</span>
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${u(e.remarks)} text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
                 <option value="ONGOING" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="ONGOING"?"selected":""}>ONGOING</option>
                 <option value="EXPIRED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="EXPIRED"?"selected":""}>EXPIRED</option>
                 <option value="RESIGNED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="RESIGNED"?"selected":""}>RESIGNED</option>
                 <option value="ABSORBED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${e.remarks==="ABSORBED"?"selected":""}>ABSORBED</option>
             </select>
             <div class="pointer-events-none absolute right-3 top-[28px] text-inherit">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
             </div>
        </div>

        <div class="flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
            <input type="text" name="office" id="edit-office-input" value="${e.office||""}" 
                class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full placeholder-indigo-300 dark:placeholder-indigo-700 h-[42px]"
                placeholder="e.g. DOLE Field Office">
            <div id="edit-office-suggestions-box" class="hidden absolute mt-[60px] z-[60] bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto w-full sm:w-[50%] right-0">
                ${o.map(p=>`<button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${p}</span></button>`).join("")}
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
            <input type="text" name="age" id="edit-age-display" value="${e.age||t(e.birthday)||""}" class="${s} text-right max-w-[80px]" placeholder="Auto">
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
                ${Me.map(p=>`<button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${p.name}</span></button>`).join("")}
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
                ${Re.map(p=>`<option value="${p}" ${e.relationshipToAssured===p?"selected":""}>${p}</option>`).join("")}
            </select>
        </div>
    </div>

    <!-- Contract & Work Info Tab -->
    <h4 class="text-sm font-bold text-heading mt-8 pb-2 border-b border-default whitespace-nowrap">Contract & Work Details</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-4 px-1">
        <div id="edit-date-range-picker" class="grid grid-cols-2 gap-3 mb-2">
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Start Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="startDate" id="edit-startDate-input" value="${e.startDateFormatted||e.startDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">End Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="endDate" id="edit-endDate-input" value="${e.endDateFormatted||e.endDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Designation / Role</span>
            <input type="text" name="designation" id="edit-designation-input" value="${e.designation||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Nature of Work...">
            <div id="edit-designation-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                ${Ne.map(p=>`<button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${p}</span></button>`).join("")}
            </div>
        </div>
        
        <div class="flex flex-col gap-2 mt-2 pb-6 relative">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Replacement History</span>
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
    <button type="button" id="edit-drawer-cancel-btn" class="px-6 py-3 rounded-xl bg-gray-100 text-gray-600 font-black text-[10px] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-gray-200 transition-all border border-transparent hover:border-gray-300">Cancel</button>
    <button type="submit" form="edit-beneficiary-drawer-form" class="px-6 py-3 rounded-xl bg-brand text-white font-black text-[10px] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-brand-strong transition-all shadow-lg hover:shadow-brand/40 flex items-center justify-center gap-2">
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
    background-color: ${r?"#1e293b":"#ffffff"} !important; 
    border-radius: 0.75rem !important;
    border: 1px solid ${r?"#334155":"#e2e8f0"} !important;
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
    `;let l=document.getElementById("edit-drawer-container");l&&(l.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),l=document.createElement("div"),l.id="edit-drawer-container",l.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",l.setAttribute("tabindex","-1"),l.innerHTML=i,document.body.appendChild(l),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const p=l.querySelector('textarea[name="name"]');p&&(p.style.height="auto",p.style.height=p.scrollHeight+"px")},10),(async()=>{try{const p=await ne("api/beneficiaries.php?get_offices=1");if(p.success&&p.data.offices){const n=l.querySelector("#edit-office-suggestions-box");if(n){const c=["DOLE Field Office","LGU","DEPED","DICT","PCA"],x=[...new Set([...c,...p.data.offices])];n.innerHTML=x.map($=>`
                        <button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                            <span class="option-text">${$}</span>
                        </button>
                    `).join("")}}}catch(p){console.error("Error fetching office suggestions:",p)}})(),Le(async()=>{const{Drawer:p}=await import("./vendor-flowbite-B7rSfpuT.js").then(n=>n.b);return{Drawer:p}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:p})=>{const n=new p(l,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{l&&l.parentNode&&l.remove()},400)}});n.show(),window.initFlowbite&&window.initFlowbite();const c=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),n.hide()};l.querySelector("#close-edit-drawer-btn").addEventListener("click",c),l.querySelector("#edit-drawer-cancel-btn").addEventListener("click",c);const x=l.querySelector("#edit-beneficiary-drawer-form"),$=l.querySelector("#edit-bday-input"),v=l.querySelector("#edit-age-display"),y=l.querySelector("#edit-startDate-input"),w=l.querySelector("#edit-endDate-input"),N=l.querySelector('input[name="seriesNo"]'),j=l.querySelector('input[name="gip_id"]'),G=l.querySelector("#edit-drawer-remarks"),O=l.querySelector("#edit-extension-log-container"),W=()=>{if(!O)return;const h=G.value,g=ee();if(h==="ABSORBED"){const b=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,B=b.getTimezoneOffset()*6e4,A=new Date(b.getTime()-B).toISOString().slice(0,16);O.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${g?"border-slate-800":"border-gray-100"}">
                        <p class="text-[9px] uppercase font-black ${g?"text-green-500":"text-[#2e7d32]"} border-b ${g?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[9px] ${g?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${A}" class="w-full ${g?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${g?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${e.absorb_where||""}" class="w-full ${g?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[9px] ${g?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${e.absorb_position||""}" class="w-full ${g?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${g?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${e.absorb_agency||""}" class="w-full ${g?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `}else if(h==="RESIGNED"){const b=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,B=b.getTimezoneOffset()*6e4,A=new Date(b.getTime()-B).toISOString().slice(0,16);O.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${g?"border-slate-800":"border-gray-100"}">
                        <p class="text-[9px] uppercase font-black ${g?"text-red-500":"text-[#ce1126]"} border-b ${g?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[9px] ${g?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${A}" class="w-full ${g?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${g?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${g?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};G&&G.addEventListener("change",h=>{const g="text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";G.className=`${u(h.target.value)} ${g} editable-indicator`,W(),(G.value==="ABSORBED"||G.value==="RESIGNED")&&setTimeout(()=>{O.scrollIntoView({behavior:"smooth",block:"center"}),O.classList.add("pulse-highlight"),setTimeout(()=>O.classList.remove("pulse-highlight"),1500)},50)}),W();let _=!1,z=!1;const H=(h,g)=>{h.addEventListener("input",b=>{const B=b.target.value,A=window.__maskDate(B);if(B!==A&&(b.target.value=A),A.length===10){const C=window.__parseFormattedDate(A);C&&g&&(z||g(C),document.activeElement===h&&h.blur())}}),h.addEventListener("changeDate",b=>{b.detail&&b.detail.date&&g&&(z||g(b.detail.date),h._datepicker&&h._datepicker.hide())})};$&&H($,h=>{v&&(!_||!v.value)&&(v.value=window.calculateAge(h))}),y&&H(y,h=>{if(w){const b=new Date(h);b.setDate(b.getDate()+182);const B=String(b.getMonth()+1).padStart(2,"0"),A=String(b.getDate()).padStart(2,"0"),C=b.getFullYear();w.value=`${B}/${A}/${C}`}const g=h.getFullYear();g>1900&&j&&N&&Promise.all([V(`api/beneficiaries.php?next_id&year=${encodeURIComponent(g)}`),V(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(g)}`)]).then(([b,B])=>{const A=b.success&&b.data?.success?b.data.nextId:null,C=B.success&&B.data?.success?B.data.nextSeries:null,L=String(j.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),d=String(N.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),m=L?Number(L[1]):null,f=d?Number(d[1]):null;A&&(m===null||m!==g)&&(j.value=A),C&&(f===null||f!==g)&&(N.value=C)}).catch(b=>{console.error("Edit drawer identifier sync error:",b)})}),w&&H(w);const te=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null),ae=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null);te&&$&&($._datepicker=new te($,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}));const K=l.querySelector("#edit-date-range-picker");if(ae&&K){const h=new ae(K,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});y&&(y._datepicker=h.datepickers[0]),w&&(w._datepicker=h.datepickers[1])}e.id&&(z=!0,V(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(h=>{if(h.success&&h.data&&h.data.beneficiary){const g=h.data.beneficiary;if(y&&g.startDate){const b=new Date(g.startDate);isNaN(b)||(y.value=g.startDateFormatted||"",y._datepicker&&y._datepicker.setDate(b))}if(w&&g.endDate){const b=new Date(g.endDate);isNaN(b)||(w.value=g.endDateFormatted||"",w._datepicker&&w._datepicker.setDate(b))}}setTimeout(()=>{z=!1},100)}).catch(h=>{console.error("Error fetching accurate beneficiary dates:",h),z=!1})),v&&v.addEventListener("input",()=>_=!0);const Z=(h,g,b)=>{const B=l.querySelector(h),A=l.querySelector(g);if(!B||!A)return;const C=()=>A.classList.add("hidden"),L=()=>A.classList.remove("hidden");B.addEventListener("focus",L),B.addEventListener("input",()=>{const d=B.value.toLowerCase().trim();let m=0;A.querySelectorAll(b).forEach(f=>{const E=(f.querySelector(".option-text")?.textContent||f.textContent||"").toLowerCase().includes(d);f.style.display=E?"block":"none",E&&m++}),m>0?L():C()}),A.addEventListener("click",d=>{const m=d.target.closest(b);m&&(B.value=(m.querySelector(".option-text")?.textContent||m.textContent||"").trim(),C(),B.dispatchEvent(new Event("change")))}),document.addEventListener("click",d=>{!B.contains(d.target)&&!A.contains(d.target)&&C()})};Z("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),Z("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),Z("#edit-office-input","#edit-office-suggestions-box",".edit-office-option");const J=l.querySelector("#edit-replacement-input"),S=l.querySelector("#edit-replacement-suggestions-box"),M=l.querySelector("#edit-replacement-loading");let I=null;J&&S&&(J.addEventListener("input",h=>{const g=h.target.value.trim();clearTimeout(I),S.classList.add("hidden"),!(g.length<2)&&(M&&M.classList.remove("hidden"),I=setTimeout(async()=>{try{const b=await ne(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(g)}&limit=10`);b.success&&b.data&&b.data.candidates&&b.data.candidates.length>0?(S.innerHTML=b.data.candidates.map(B=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${B.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${B.name}</span>
                                    <span class="text-[10px] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${B.id}</span>
                                </button>
                            `).join(""),S.classList.remove("hidden")):(S.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',S.classList.remove("hidden"))}catch(b){console.error("Replacement fetch error:",b)}finally{M&&M.classList.add("hidden")}},400))}),S.addEventListener("click",h=>{const g=h.target.closest("button");g&&(J.value=g.dataset.name,S.classList.add("hidden"))}),document.addEventListener("click",h=>{!J.contains(h.target)&&!S.contains(h.target)&&S.classList.add("hidden")})),x.querySelectorAll("input, select, textarea").forEach(h=>{const g=(h.getAttribute("type")||"").toLowerCase(),b=!h.disabled&&!h.readOnly&&g!=="hidden";h.classList.remove("editable-indicator"),b&&h.classList.add("editable-indicator")}),x.addEventListener("submit",h=>{h.preventDefault();const g=new FormData(x),b={};g.forEach((B,A)=>b[A]=B),b.id=e.id,b.gip_id=b.gip_id||e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(b,!0,!1)&&(c(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),k.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function ft(){window.__maskDate=function(e){let r=e.replace(/\D/g,"").slice(0,8);return r.length>2&&r.length<=4?r=r.slice(0,2)+"/"+r.slice(2):r.length>4&&(r=r.slice(0,2)+"/"+r.slice(2,4)+"/"+r.slice(4)),r},window.__parseFormattedDate=function(e){if(!e)return null;const r=e.split("/");if(r.length===3){const s=parseInt(r[0])-1,a=parseInt(r[1]),o=parseInt(r[2]);if(o>1e3&&s>=0&&s<12&&a>0&&a<=31)return new Date(o,s,a)}return null},window.calculateAge=function(e){if(!e)return"";const r=e instanceof Date?e:new Date(e),s=new Date;let a=s.getFullYear()-r.getFullYear();const o=s.getMonth()-r.getMonth();return(o<0||o===0&&s.getDate()<r.getDate())&&a--,a>=0?a:0},window.viewBeneficiary=async function(e,r=0){const s=e?.id||e?.gip_id||null;if(!s)return;const a=!!(e?.name&&e?.office&&e?.remarks);let o={...e,id:s};if(!a){const i=await V(`api/beneficiaries.php?id=${encodeURIComponent(s)}`);i.success&&i.data?.success&&i.data?.beneficiary&&(o={...i.data.beneficiary,...o,id:s})}const t=`logs_cache_${s}`;let u=!1;try{if(window.__doleDB&&window.__doleDB.getSecureCache){const w=await window.__doleDB.getSecureCache(t);w&&(o.arLogs=w.arLogs||[],o.dtrLogs=w.dtrLogs||[],o.docs=w.docs||[],pe(o,r),u=!0)}let i=[],l=[],p=[];const[n,c,x,$]=await Promise.all([V(`api/logs.php?type=ar&gip_id=${encodeURIComponent(s)}`),V(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(s)}`),V(`api/logs.php?type=docs&gip_id=${encodeURIComponent(s)}`),V(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(s)}`)]);i=n.success&&n.data?.success?n.data.logs:[],l=c.success&&c.data?.success?c.data.logs:[],p=x.success&&x.data?.success?x.data.logs:[];const v=$.success&&$.data?.success?$.data.logs:[];if(v.length>0){const w=v[0];o.absorbDate=w.absorption_datetime,o.absorb_where=w.where||w.absorb_where,o.absorb_position=w.position||w.absorb_position,o.absorb_agency=w.agency||w.absorb_agency}const y={arLogs:i,dtrLogs:l,docs:p};window.__doleDB&&window.__doleDB.setSecureCache&&await window.__doleDB.setSecureCache(t,y),o.arLogs=i,o.dtrLogs=l,o.docs=p,u?document.getElementById("beneficiary-drawer-container")&&pe(o,r):pe(o,r)}catch(i){console.error("Error fetching logs/docs:",i),u||(o.arLogs=[],o.dtrLogs=[],o.docs=[],pe(o,r))}},window.showAddDataModal=function(e){be(e)},window.editBeneficiary=function(e){Qe(e)},window.showExportConfigModal=function(e){rt(e)},window.showProfileModal=function(){et()}}async function et(){try{if(Ce()&&me){let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=a.id)}catch{}if(!e)throw new Error("User not logged in");const{data:r,error:s}=await me.from("users").select("*").eq("id",e).single();if(s)throw s;De(r)}else{let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=`?user_id=${a.id}`)}catch{}const s=await(await fetch(`${Y()}api/profile.php${e}`)).json();if(s.success){const a=s.profile;De(a)}else k.fire({icon:"error",title:"Error",text:s.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function De(e){const r=e.profile_picture_path?`${Y()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",a=`
        <div class="text-left font-montserrat p-1 overflow-visible">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <div>
                    <h2 class="text-xl font-black text-heading leading-tight italic">User Profile</h2>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Manage your personal information</p>
                </div>
            </div>

            <form id="profile-edit-form" class="space-y-6">
                <div class="flex flex-col items-center mb-6">
                    <div class="relative group">
                        <div id="profile-avatar-preview" class="w-24 h-24 rounded-full border-4 border-royal-blue/10 overflow-hidden bg-gray-100 flex items-center justify-center text-royal-blue text-2xl font-black shadow-lg">
                            ${r?`<img src="${r}" class="w-full h-full object-cover" />`:s}
                        </div>
                        <label for="profile-pic-input" class="absolute bottom-0 right-0 w-8 h-8 bg-royal-blue text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition-transform border-2 border-white">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </label>
                        <input type="file" id="profile-pic-input" name="profile_pic" class="hidden" accept="image/*">
                    </div>
                    <p class="text-[9px] font-bold text-gray-400 uppercase mt-2 tracking-widest">Click icon to change avatar</p>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 space-y-4">
                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Username</label>
                        <div class="relative">
                            <input type="text" value="${e.username}" disabled
                                class="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-400 cursor-not-allowed">
                            <svg class="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        </div>
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input type="text" id="profile-full-name" name="full_name" value="${e.full_name}" placeholder="Your full name"
                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input type="email" id="profile-email" name="email" value="${e.email||""}" placeholder="yourname@gmail.com"
                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                    </div>
                </div>

                <div class="pt-2">
                    <button type="submit" class="w-full bg-royal-blue text-white font-black text-[10px] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                        Save Profile Changes
                    </button>
                </div>
            </form>
        </div>
    `;k.fire({html:a,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const t=o.querySelector("#profile-edit-form"),u=o.querySelector("#profile-pic-input"),i=o.querySelector("#profile-avatar-preview");u.addEventListener("change",l=>{const p=l.target.files[0];if(p){const n=new FileReader;n.onload=c=>{i.innerHTML=`<img src="${c.target.result}" class="w-full h-full object-cover" />`},n.readAsDataURL(p)}}),t.addEventListener("submit",async l=>{l.preventDefault();const p=new FormData(t);try{const n=JSON.parse(localStorage.getItem("user"));n&&n.id&&p.append("user_id",n.id)}catch{}try{const c=await(await fetch(`${Y()}api/profile.php`,{method:"POST",body:p})).json();c.success?(c.profile&&(localStorage.setItem("user",JSON.stringify(c.profile)),tt(c.profile)),k.close(),k.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):k.fire({icon:"error",title:"Update Failed",text:c.error||"Something went wrong"})}catch(n){console.error("Error saving profile:",n)}})}})}function tt(e){const r=e.profile_picture_path?`${Y()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(t=>t[0]).join("").substring(0,2).toUpperCase():"US",a=document.querySelectorAll(".sidebar-user-name"),o=document.querySelectorAll(".sidebar-user-avatar");a.forEach(t=>t.textContent=e.full_name),o.forEach(t=>{r?t.innerHTML=`<img src="${r}" class="w-full h-full object-cover" />`:t.textContent=s}),localStorage.setItem("user_full_name",e.full_name),r&&localStorage.setItem("user_avatar",r)}function rt(e){const r=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",ageGroup:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","position","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},s=`
        <div class="text-left font-montserrat p-1 overflow-visible">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                    <h2 class="text-xl font-black text-heading leading-tight italic">Report Generator</h2>
                    <p class="text-[10px] font-bold text-gray-400 dark:text-white! uppercase tracking-widest">Configure your data output</p>
                </div>
            </div>

            <form id="export-config-form" class="space-y-6">
                <div class="pt-1">
                    <button type="submit" class="w-full bg-royal-blue text-white font-black text-[10px] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Apply Profile Configuration
                    </button>
                </div>
                <!-- Main Filter Grid (3 columns on MD) -->
                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-royal-blue rounded-full"></span>
                        <label class="text-[10px] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Global Filters</label>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Search Beneficiary</label>
                            <div class="relative group">
                                <input type="text" id="export-search" value="${r.search}" placeholder="Name or ID..." 
                                    class="w-full bg-white border border-gray-200 rounded-xl px-9 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Category</label>
                            <div class="relative group">
                                <select id="export-office" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${r.office==="ALL"?"selected":""}>ALL OFFICES</option>
                                    <option value="DOLE" ${r.office==="DOLE"?"selected":""}>DOLE LDNPFO</option>
                                    <option value="LGU" ${r.office==="LGU"?"selected":""}>LGU / LOCAL GOVT</option>
                                    <option value="DICT" ${r.office==="DICT"?"selected":""}>DICT</option>
                                    <option value="DEPED" ${r.office==="DEPED"?"selected":""}>DEPED</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Sort Data By</label>
                            <div class="relative group">
                                <select id="export-sort" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="name" ${r.sort==="name"?"selected":""}>NAME (A-Z)</option>
                                    <option value="startdate" ${r.sort==="startdate"?"selected":""}>START DATE (NEWEST)</option>
                                    <option value="id" ${r.sort==="id"?"selected":""}>ID NUMBER</option>
                                    <option value="office" ${r.sort==="office"?"selected":""}>OFFICE NAME</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <!-- Gender Filter -->
                        <div>
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Gender Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","FEMALE","MALE"].map(a=>{const o={ALL:"peer-checked:bg-blue-600",FEMALE:"peer-checked:bg-pink-600",MALE:"peer-checked:bg-indigo-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-gender" value="${a}" ${r.gender===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[9px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Display Section -->
                        <div>
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Report Volume Section</label>
                            <div class="flex gap-1.5">
                                ${[{id:"ALL",label:"All",color:"peer-checked:bg-emerald-600"},{id:"ACTIVE",label:"Active",color:"peer-checked:bg-green-500"},{id:"ARCHIVED",label:"Archived",color:"peer-checked:bg-red-600"}].map(a=>`
                                    <label class="cursor-pointer flex-1">
                                        <input type="radio" name="export-section" value="${a.id}" ${r.section===a.id?"checked":""} class="hidden peer">
                                        <div class="py-1.5 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-1.5 transition-all ${a.color} peer-checked:text-white peer-checked:border-transparent shadow-sm">
                                            <span class="text-[9px] font-black uppercase tracking-tight">${a.label}</span>
                                        </div>
                                    </label>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Remarks Filter -->
                        <div>
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Remarks Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(a=>{const o={ALL:"peer-checked:bg-blue-600",ONGOING:"peer-checked:bg-green-500",EXPIRED:"peer-checked:bg-red-600",RESIGNED:"peer-checked:bg-slate-600",ABSORBED:"peer-checked:bg-teal-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-remarks" value="${a}" ${r.remarks===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[9px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Age Filter -->
                        <div>
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Age Group Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","18-24","25-30","31-40","41+"].map(a=>{const o={ALL:"peer-checked:bg-blue-600","18-24":"peer-checked:bg-emerald-600","25-30":"peer-checked:bg-yellow-600","31-40":"peer-checked:bg-orange-600","41+":"peer-checked:bg-slate-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-age-group" value="${a}" ${r.ageGroup===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[9px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Prepared By (Signature)</label>
                            <input type="text" id="export-prepared" value="${r.preparedBy}" placeholder="Mary Joy Q. Nuñez" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Approved By (Signature)</label>
                            <input type="text" id="export-approved" value="${r.approvedBy}" placeholder="Noel B. Orias" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mt-4">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-golden-yellow rounded-full"></span>
                        <label class="text-[10px] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Output Column Selection</label>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        ${["ID","Name","Age","Office","Position","Start Date","End Date","Status"].map(a=>{const o=a.toLowerCase().replace(" ",""),t=r.columns.includes(o),u=`col-switch-${o}`;return`
                                <label for="${u}" class="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${u}" name="export-column" value="${o}" ${t?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="text-[9px] font-black text-gray-600 uppercase tracking-tight group-hover:text-emerald-600">${a}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>

            </form>
        </div>
    `;k.fire({html:s,width:"680px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const o=a.querySelector("#export-config-form");o.addEventListener("submit",t=>{t.preventDefault();const u=o.querySelectorAll('input[name="export-column"]:checked'),i=Array.from(u).map(y=>y.value),l=o.querySelector('input[name="export-gender"]:checked'),p=o.querySelector('input[name="export-section"]:checked'),n=o.querySelector('input[name="export-remarks"]:checked'),c=o.querySelector('input[name="export-age-group"]:checked'),x=o.querySelector("#export-prepared").value.trim(),$=o.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",x),localStorage.setItem("ldn_export_approved",$);const v={office:o.querySelector("#export-office").value,gender:l?l.value:r.gender||"ALL",remarks:n?n.value:r.remarks||"ALL",ageGroup:c?c.value:r.ageGroup||"ALL",search:o.querySelector("#export-search").value.trim().toLowerCase(),sort:o.querySelector("#export-sort").value,section:p?p.value:"ALL",preparedBy:x,approvedBy:$,columns:i};e(v),k.close(),setTimeout(()=>{k.fire({toast:!0,position:"top-end",icon:"success",title:"Generator pattern updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const Me=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],Ne=["Administrative Support (Records)","Office Clerk (Finance Section)","Data Encoder (TSSD/LIMS)","Messenger / Liaison Officer","Utility Worker (Maintenance)","Scanning & Digitization Officer","Filing Clerk (Administrative)","Receptionist / Front Desk","IT Technical Support Assist.","Project Monitoring Assist."],Re=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function be(e=null){const r=!!e&&!e._isBulk,s=r?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",a=r?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=ee(),t={borderBase:o?"border-slate-800":"border-gray-100/80",borderCard:o?"border-slate-800":"border-gray-100",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgCard:o?"bg-slate-900/40":"bg-gray-50/40",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgActionBar:o?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},u=`
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
            <div class="mb-4 pb-3 border-b ${t.borderBase} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h3 class="text-xl font-black ${t.textHeading} flex items-center gap-2.5">
                        <div class="p-2 ${t.iconBg} rounded-lg ${t.iconText} border ${t.iconBorder} shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${s}" /></svg>
                        </div>
                        ${a}
                    </h3>
                    <p class="text-[10px] ${t.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Enter the details of the GIP beneficiary below.</p>
                </div>
                ${!r&&!e?._isBulk?`
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3 py-2 ${t.bgCard} border ${t.borderCard} rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 w-full sm:w-auto sm:mr-4 focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                `:""}
            </div>

            <form id="add-beneficiary-form" class="grid grid-cols-1 lg:grid-cols-2 gap-5" data-is-edit="${r}">
                <!-- LEFT COLUMN: Personal Info Card -->
                <div class="${t.bgCard} rounded-xl p-3 sm:p-4 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${t.dotGreen} rounded-full"></div>
                        <p class="text-[9px] uppercase font-black ${t.textSectionTitle} tracking-widest dark:text-white!">Personal & Educational Information</p>
                    </div>
                    
                    <div class="space-y-3.5">
                        <div class="group">
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Full Name (Last, First, MI) <span class="text-red-500">*</span></label>
                            <input type="text" name="name" id="name-input-field" value="${e?.name||""}" required class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder} dark:text-white!" placeholder="e.g. Dela Cruz, Juan M.">
                            <div id="duplicate-warning" class="hidden mt-1 text-[10px] font-bold items-center gap-1.5 animate-pulse">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Beneficiary already exist</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Contact No.</label>
                                <input type="text" name="contact" value="${e?.contact||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder} font-mono" placeholder="09XX-XXX-XXXX">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Address</label>
                                <input type="text" name="address" value="${e?.address||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" placeholder="Barangay, City">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Birthday</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="birthday" value="${e?.birthday||""}" id="birthday-input" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Age</label>
                                <input type="text" name="age" value="${e?.age||""}" id="age-display" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-black ${t.textAge} outline-none font-mono focus:ring-4 ${t.focusGreen}" placeholder="Auto/Manual">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Gender</label>
                                <select name="gender" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="Male" ${e?.gender==="Male"?"selected":""}>Male</option>
                                    <option value="Female" ${e?.gender==="Female"?"selected":""}>Female</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Education</label>
                                <div class="relative" id="education-container">
                                    <input type="text" name="education" id="education-input" autocomplete="off"
                                        value="${e?.education||""}" 
                                        class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 pl-9 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" 
                                        placeholder="Course/Level...">
                                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                    </div>
                                    <div id="course-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${t.borderDivide} p-1.5">
                                        ${Me.map(i=>`
                                            <div class="course-option px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
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
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" value="${e?.designatedBeneficiary||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${Re.map(i=>`
                                        <option value="${i}" ${e?.relationshipToAssured===i?"selected":""}>${i}</option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="pt-1">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-1 h-5 bg-golden-yellow rounded-full"></div>
                            <p class="text-[9px] uppercase font-black ${t.textSectionTitle} tracking-widest">Contract Duration</p>
                        </div>
                        <div id="date-range-picker" class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1">Start Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="startDate" id="datepicker-range-start" value="${e?.startDate||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusYellow} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1">End Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="endDate" id="datepicker-range-end" value="${e?.endDate||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusRed} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: Work Details Card -->
                <div class="${t.bgCard} rounded-xl p-3 sm:p-4 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${t.dotBlue} rounded-full"></div>
                        <p class="text-[9px] uppercase font-black ${t.textSectionTitle} tracking-widest">Work & Administrative Data</p>
                    </div>
                    
                    <div class="space-y-3.5">
                         <div class="group">
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">ID Number</label>
                            <input type="text" name="gip_id" id="full-id-input" 
                                value="${e?.id||""}" 
                                class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[11px] font-black ${t.idText} font-mono outline-none focus:ring-4 ${t.focusBlue} transition-all uppercase" 
                                placeholder="ROX-RD-ESIG-2025-0001">
                            <input type="hidden" name="id" value="${e?.id||""}">
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">Assigned Office</label>
                                <div class="relative" id="office-container">
                                    <input type="text" name="office" id="office-input" autocomplete="off"
                                        value="${e?.office||""}" 
                                        class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}" 
                                        placeholder="e.g. DOLE Field Office">
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                    <div id="office-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${t.borderDivide} p-1.5">
                                        <!-- OFFICE CATEGORY MAP: edit this block for quick manual category adjustments -->
                                        <div class="px-2.5 py-1 text-[8px] font-black uppercase tracking-widest ${t.textLabel} opacity-70">Public Sector</div>
                                        ${["DOLE","LGU","DEPED"].map(i=>`
                                            <div class="office-option px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                <span class="option-text">${i}</span>
                                            </div>
                                        `).join("")}
                                        <div class="px-2.5 py-1 mt-1 text-[8px] font-black uppercase tracking-widest ${t.textLabel} opacity-70">Private Sector</div>
                                        ${["DICT","PCA"].map(i=>`
                                            <div class="office-option px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                <span class="option-text">${i}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">Series Number</label>
                                <input type="text" name="seriesNo" id="series-no-input" value="${e?.seriesNo||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-black ${o?"text-white":"text-royal-blue"} font-mono focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm" placeholder="2025-00-000">
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 tracking-widest ${o?"":"transition-colors"} ${o?"":"group-focus-within:text-royal-blue"}">Nature of Work</label>
                            <div class="relative" id="work-container">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-3.5 h-3.5 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <input type="text" name="designation" id="designation-input" autocomplete="off"
                                    value="${e?.designation||"N/A"}"
                                    class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}" 
                                    placeholder="N/A">
                                <div id="work-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${t.borderDivide} p-2 transform origin-top transition-all duration-200">
                                    <div class="px-2 py-1.5 mb-1.5 border-b ${t.borderSuggHead}">
                                        <p class="text-[9px] font-black ${t.textWorkSuggHead} uppercase tracking-widest">Quick Select Roles</p>
                                    </div>
                                    ${Ne.map(i=>`
                                        <div class="work-option px-3 py-2.5 text-[10px] font-black ${t.textWorkOpt} ${t.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
                                            <div class="flex items-center gap-3">
                                                <div class="w-1.5 h-1.5 rounded-full ${t.workDot} transition-colors"></div>
                                                <span class="option-text">${i}</span>
                                            </div>
                                            <svg class="w-3 h-3 opacity-0 group-hover/opt:opacity-100 transition-opacity ${t.workArrow}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1">Replacement History (Optional)</label>
                            <input type="hidden" name="replacement" id="replacement-hidden" value="${e?.replacement||""}">
                            <div class="relative" id="replacement-container">
                                <input type="text" id="replacement-search-input" autocomplete="off"
                                    value="${e?.replacement||""}"
                                    class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[11px] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}"
                                    placeholder="Search beneficiary name...">
                                <div id="replacement-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${t.borderDivide} p-2"></div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-2">Employment Status Record</label>
                            <div class="flex flex-wrap gap-2 items-center">
                                <div class="flex flex-wrap gap-2 p-1.5 ${t.bgStatusWrap} border ${t.borderStatus} rounded-xl shadow-inner flex-1">
                                    ${(()=>{const i={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(l=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${l}" ${e?.remarks===l?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[10px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${i[l]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${l}
                                                </span>
                                            </label>
                                        `).join("")})()}
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" id="absorb-btn" 
                                        class="px-3 py-3 rounded-xl bg-[#2e7d32] text-white text-[10px] font-black hover:bg-[#1b5e20] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        ABSORB
                                    </button>
                                    <button type="button" id="resign-btn" 
                                        class="px-3 py-3 rounded-xl bg-[#ce1126] text-white text-[10px] font-black hover:bg-[#b71c1c] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
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
            <div class="mt-6 flex flex-wrap lg:justify-end items-center gap-3 pt-6 rounded-b-3xl ${t.bgActionBar} border-t ${t.actionBarBorder}">
                <button type="button" id="cancel-modal-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${t.bgCancelBtn} ${t.textCancel} font-black rounded-xl hover:bg-[#ce1126] hover:text-white transition-all duration-300 shadow-sm border ${t.cancelBorder} hover:border-[#ce1126] cursor-pointer text-[10px] lg:text-[12px] active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-1 lg:order-2">
                    <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span>CANCEL</span>
                </button>

                <button type="submit" form="add-beneficiary-form"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${t.bgSaveBtn} text-white font-black rounded-xl transition-all duration-300 shadow-lg ${t.saveShadow} cursor-pointer text-[10px] lg:text-[12px] transform active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-2 lg:order-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                    <span>${r?"UPDATE RECORD":"SAVE RECORD"}</span>
                </button>
            </div>
        </div>
    `;k.fire({html:u,width:window.innerWidth<1024?"96vw":"1000px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<1024?"0.75rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:i=>{window.initFlowbite&&window.initFlowbite();const l=i.querySelector("#cancel-modal-btn");l&&l.addEventListener("click",()=>{!r&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),k.close(),e?._isBulk&&ge.onCancel()});const p=i.querySelector("#bulk-add-btn");p&&p.addEventListener("click",()=>{k.close(),ge.init()});const n=(d,m)=>{d.addEventListener("input",f=>{const D=window.__maskDate(f.target.value);if(f.target.value!==D&&(f.target.value=D),D.length===10){const E=window.__parseFormattedDate(D);E&&m&&(m(E),document.activeElement===d&&d.blur())}}),d.addEventListener("changeDate",f=>{if(f.detail&&f.detail.date&&m){m(f.detail.date);const D=d._datepicker||d.parentNode&&d.parentNode._datepicker;D&&typeof D.hide=="function"&&D.hide()}})},c=i.querySelector("#birthday-input"),x=i.querySelector("#age-display");if(c){n(c,m=>{x&&(x.value=window.calculateAge(m),x.classList.add("animate-pulse"),setTimeout(()=>x.classList.remove("animate-pulse"),400))});const d=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);d&&(c._datepicker=new d(c,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const $=i.querySelector("#name-input-field"),v=i.querySelector("#duplicate-warning");if($&&v){let d;const m=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},f=(E,T="")=>{v.className=`mt-1 text-[10px] font-bold ${E?"flex":"hidden"} items-center gap-1.5 animate-pulse ${ee()?"text-red-400":"text-red-600"}`;const R=v.querySelector("span");R&&(R.textContent=T?`Beneficiary already exists: ${T}`:"Beneficiary already exists")},D=async E=>{const T=m(),R=await fetch(`${Y()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...T?{"X-User-Id":String(T)}:{}},body:JSON.stringify({name:E,user_id:T,exclude_id:r?e?.id:null})});if(!R.ok)throw new Error(`Duplicate check failed (${R.status})`);return R.json()};$.addEventListener("input",E=>{const T=E.target.value.trim();if(clearTimeout(d),T.length<3){f(!1);return}d=setTimeout(async()=>{try{const R=await D(T);R.success&&R.exists?f(!0,R.match||R.name):f(!1)}catch(R){console.error("Duplicate check error:",R)}},500)}),e?.name&&(f(!1),(async()=>{const E=await D(e.name);E.success&&E.exists&&f(!0,E.match||E.name)})())}const y=i.querySelector("#full-id-input"),w=i.querySelector("#series-no-input"),N=i.querySelector('input[name="startDate"]'),j=i.querySelector('input[name="endDate"]'),G=i.querySelectorAll('input[name="remarks"]'),O=i.querySelector("#extension-log-container"),W=async d=>{if(!d)return;const m=[y,w].filter(Boolean);m.forEach(f=>{f.classList.add("animate-pulse"),f.placeholder="Syncing..."});try{const[f,D]=await Promise.all([V(`api/beneficiaries.php?next_id&year=${encodeURIComponent(d)}`),V(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(d)}`)]),E=f.success&&f.data?.success?f.data.nextId:null,T=D.success&&D.data?.success?D.data.nextSeries:null;E&&y&&(y.value=E),T&&w&&(w.value=T)}catch(f){console.error("ID Sync error:",f)}finally{m.forEach(f=>f.classList.remove("animate-pulse"))}},_=i.querySelector("#replacement-search-input"),z=i.querySelector("#replacement-hidden"),H=i.querySelector("#replacement-suggestions"),te=d=>{const m=(d.name||"").toUpperCase().trim(),f=d.startDateFormatted||d.startDate||"N/A",D=d.endDateFormatted||d.endDate||"N/A";return`${m} (${f.toUpperCase()} - ${D.toUpperCase()})`},ae=d=>{if(H){if(!d.length){H.innerHTML=`<div class="px-3 py-2 text-[10px] font-bold ${t.textCourseOpt}">No matching beneficiary found.</div>`,H.classList.remove("hidden");return}H.innerHTML=d.map(m=>{const f=te(m);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${f.replace(/"/g,"&quot;")}">
                            ${f}
                        </button>
                    `}).join(""),H.classList.remove("hidden"),H.querySelectorAll(".replacement-option").forEach(m=>{m.addEventListener("click",()=>{const f=m.getAttribute("data-replacement")||"";_&&(_.value=f),z&&(z.value=f),H.classList.add("hidden")})})}};let K=null;const Z=async(d="")=>{const m=(d||"").trim(),f=`api/beneficiaries.php?replacement_candidates=1&limit=20${m?`&q=${encodeURIComponent(m)}`:""}`,D=await V(f);D.success&&D.data?.success&&Array.isArray(D.data.candidates)&&ae(D.data.candidates)};_&&z&&H&&(_.addEventListener("focus",()=>{Z(_.value||"")}),_.addEventListener("input",()=>{z.value=_.value.trim(),clearTimeout(K),K=setTimeout(()=>{Z(_.value||"")},250)}),document.addEventListener("click",d=>{!_.contains(d.target)&&!H.contains(d.target)&&H.classList.add("hidden")}));const J=()=>{const d=i.querySelector('input[name="remarks"]:checked');return d?d.value:"ONGOING"},S=d=>{const m=i.querySelector(`input[name="remarks"][value="${d}"]`);m&&(m.checked=!0,I())},M=()=>{if(j&&j.value){const d=window.__parseFormattedDate(j.value);if(!d)return;const m=new Date;m.setHours(0,0,0,0);let f="ONGOING";d<m&&(f="EXPIRED"),S(f)}},I=()=>{if(!O)return;const d=J();if(d==="ABSORBED"){const m=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,f=m.getTimezoneOffset()*6e4,D=new Date(m.getTime()-f).toISOString().slice(0,16);O.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[9px] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${D}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Where?</label>
                                    <input type="text" name="absorb_where" value="${e?.absorb_where||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Where to absorb?">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Position</label>
                                    <input type="text" name="absorb_position" value="${e?.absorb_position||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="What kind of position?">
                                </div>
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Agency</label>
                                    <input type="text" name="absorb_agency" value="${e?.absorb_agency||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="On what agency?">
                                </div>
                            </div>
                        </div>
                    `}else if(d==="RESIGNED"){const m=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,f=m.getTimezoneOffset()*6e4,D=new Date(m.getTime()-f).toISOString().slice(0,16);O.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[9px] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${D}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else O.innerHTML=""};if(N){let d=null;n(N,E=>{const T=E.getFullYear();if(j){const R=new Date(E);R.setDate(R.getDate()+182);const q=String(R.getMonth()+1).padStart(2,"0"),U=String(R.getDate()).padStart(2,"0"),F=R.getFullYear();j.value=`${q}/${U}/${F}`}M(),T>1900&&T!==d&&(d=T,W(T))}),j&&n(j,()=>M());const m=i.querySelector("#date-range-picker"),f=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),D=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(f&&m&&N&&j){const E=new f(m,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});N._datepicker=E.datepickers?.[0]||null,j._datepicker=E.datepickers?.[1]||null}else D&&(N&&(N._datepicker=new D(N,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),j&&(j._datepicker=new D(j,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!r){const E=new Date().getFullYear();W(E)}}G.forEach(d=>d.addEventListener("change",I));const h=i.querySelector("#resign-btn"),g=i.querySelector("#absorb-btn");h&&h.addEventListener("click",()=>S("RESIGNED")),g&&g.addEventListener("click",()=>S("ABSORBED")),i.querySelectorAll('input[type="text"], textarea').forEach(d=>{["id-number-input","full-id-input"].includes(d.id)||d.addEventListener("input",()=>{const m=d.selectionStart,f=d.selectionEnd;d.value=d.value.toUpperCase(),d.setSelectionRange(m,f)})}),M(),I(),A("education-input","course-suggestions","course-option"),A("designation-input","work-suggestions","work-option"),A("office-input","office-suggestions","office-option");const b={publicSector:["DOLE","LGU","DEPED"],privateSector:["DICT","PCA"]},B=(d=[])=>{const m=i.querySelector("#office-suggestions");if(!m)return;const f=F=>String(F||"").trim().toUpperCase(),D=new Set(b.publicSector.map(f)),E=new Set(b.privateSector.map(f)),T=new Set([...D,...E]),q=[...new Set((d||[]).map(f).filter(Boolean))].filter(F=>!T.has(F)),U=(F,P)=>P.length?`
                        <div class="px-2.5 py-1 text-[8px] font-black uppercase tracking-widest ${t.textLabel} opacity-70">${F}</div>
                        ${P.map(re=>`
                            <div class="office-option px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                <span class="option-text">${re}</span>
                            </div>
                        `).join("")}
                    `:"";m.innerHTML=[U("Public Sector",[...D]),U("Private Sector",[...E]),U("Other Offices",q)].join("")};B(),(async()=>{try{const d=await V("api/beneficiaries.php?get_offices=1");d.success&&d.data?.success&&Array.isArray(d.data.offices)&&B(d.data.offices)}catch(d){console.error("Office suggestion sync failed:",d)}})();function A(d,m,f){const D=i.querySelector(`#${d}`),E=i.querySelector(`#${m}`);if(!D||!E)return;let T=!1;D.addEventListener("focus",()=>E.classList.remove("hidden")),document.addEventListener("click",R=>{!D.contains(R.target)&&!E.contains(R.target)&&E.classList.add("hidden")}),D.addEventListener("input",()=>{if(T){T=!1;return}const R=D.value.toLowerCase(),q=E.querySelectorAll(`.${f}`);let U=!1;q.forEach(F=>{const P=F.querySelector(".option-text");(P?P.innerText:F.innerText).toLowerCase().includes(R)?(F.style.display="block",U=!0):F.style.display="none"}),U?E.classList.remove("hidden"):E.classList.add("hidden")}),E.addEventListener("click",R=>{const q=R.target.closest(`.${f}`);if(!q)return;const U=q.querySelector(".option-text");D.value=U?U.innerText.trim():q.innerText.trim(),T=!0,E.classList.add("hidden"),D.dispatchEvent(new Event("change"))})}const C=i.querySelector("#add-beneficiary-form"),L="add_beneficiary_draft";if(!r){const d=localStorage.getItem(L);if(d)try{const m=JSON.parse(d);Object.entries(m).forEach(([f,D])=>{const E=C.elements[f];E&&E.type!=="file"&&E.type!=="hidden"&&(E.value=D)})}catch(m){console.error("Error loading draft",m)}}C.addEventListener("input",d=>{if(!r){const m=new FormData(C),f={};m.forEach((D,E)=>f[E]=D),localStorage.setItem(L,JSON.stringify(f))}}),C&&C.addEventListener("submit",d=>{d.preventDefault(),C.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(Q=>{Q.classList.remove("ring-2","ring-red-500","!border-red-500")});const f=new FormData(C);let D=!1;const E=Q=>{const X=C.querySelector(`[name="${Q}"]`);X&&X.classList.add("ring-2","ring-red-500","!border-red-500"),D=!0},T=f.get("name"),R=f.get("contact"),q=f.get("startDate"),U=f.get("endDate"),F=(f.get("designation")||"").trim();if((!T||T.trim()===""||/[0-9]/.test(T))&&E("name"),R&&R.trim()!==""&&/[^0-9]/.test(R.replace(/[\s\-\+\(\)]/g,""))&&E("contact"),q||E("startDate"),U||E("endDate"),D)return;const P={};f.forEach((Q,X)=>{if(["birthday","startDate","endDate"].includes(X)){const se=window.__parseFormattedDate(Q);if(se){const fe=se.getFullYear(),he=String(se.getMonth()+1).padStart(2,"0"),Te=String(se.getDate()).padStart(2,"0");P[X]=`${fe}-${he}-${Te}`}else P[X]=Q}else P[X]=Q}),F||(P.designation="N/A"),P.replacement||(P.replacement="");const re=i.querySelector("#full-id-input")?.value;r?(P.id=e?.id,re&&(P.gip_id=re)):(P.id=null,re&&(P.gip_id=re)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(P)){if(!r){const X="add_beneficiary_draft",se=C.querySelector('[name="office"]')?.value||"",fe=C.querySelector('[name="designation"]')?.value||"",he=C.querySelector('[name="education"]')?.value||"";localStorage.setItem(X,JSON.stringify({office:se,designation:fe,education:he}))}k.close(),setTimeout(()=>{k.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${r?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!r&&e?._isBulk&&ge.onSaveSuccess()},100)}else k.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const r=e.target,s=r.querySelector('button[type="submit"]'),a=s.innerHTML;s.disabled=!0,s.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(r);if((await fetch(r.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)k.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:u=>{u.addEventListener("mouseenter",k.stopTimer),u.addEventListener("mouseleave",k.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),r.reset();else throw new Error("Failed to send")}catch{k.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{s.disabled=!1,s.innerHTML=a}return!1};export{Le as _,V as a,ne as b,dt as c,ut as d,me as e,pt as f,Y as g,st as h,Ce as i,bt as j,nt as k,oe as l,it as m,lt as n,ft as o,Ve as p,ct as r,gt as s,tt as u};
