const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-B7rSfpuT.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import C from"./vendor-swal-BSk0fVSb.js";import{a as qe}from"./vendor-DHtNC8Ux.js";const Fe="true".toLowerCase()==="true";function xe(){return Fe}function se(){const e=window.location.pathname,r="/dole-system/",n=e.toLowerCase().indexOf(r.toLowerCase());if(n!==-1)return e.substring(0,n+r.length);const a=e.indexOf("/frontend/");if(a!==-1)return e.substring(0,a+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function De(e="Incorrect Username or Password"){C.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Ve(e=!1){return C.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function pt(){const e=localStorage.getItem("hasVisitedBefore"),r=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),r&&(r.style.display="none")),window.addEventListener("load",()=>{const n=document.querySelector("body > *:not(.page-loader)");n&&n.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),r&&r.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const we={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const r=o=>o.split("").map(t=>t.charCodeAt(0)),n=o=>("0"+Number(o).toString(16)).substr(-2),a=o=>r(this._key).reduce((t,g)=>t^g,o);return e.split("").map(r).map(a).map(n).join("")}catch(r){return console.error("Encryption Failed",r),null}},decrypt:function(e){try{const r=a=>a.split("").map(o=>o.charCodeAt(0)),n=a=>r(this._key).reduce((o,t)=>o^t,a);return e.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(n).map(a=>String.fromCharCode(a)).join("")}catch(r){return console.error("Decryption Failed",r),null}}};function gt(){document.querySelectorAll(".login-form-shared").forEach(r=>{const n=r.querySelector('input[name="username"]'),a=r.querySelector('input[name="password"]'),o=r.querySelector('input[name="rememberMe"]');if(n&&a&&o){const t=localStorage.getItem("secure_user"),g=localStorage.getItem("secure_pass");if(t&&g){const s=we.decrypt(t),x=we.decrypt(g);s&&x&&(n.value=s,a.value=x,o.checked=!0)}}r.addEventListener("submit",async t=>{t.preventDefault();try{const s=await(await fetch(`${se()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.value,password:a.value})})).json();if(s.success){o.checked?(localStorage.setItem("secure_user",we.encrypt(n.value)),localStorage.setItem("secure_pass",we.encrypt(a.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const x=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(s.user));const w=document.getElementById("drawer-login");if(w){w.classList.add("translate-y-full");const l=w.querySelector("[data-drawer-hide]");l&&l.click()}await Ve(x),Ue(x)}else{const x=document.getElementById("drawer-login");x?(x.classList.add("translate-y-full"),setTimeout(()=>{De(),setTimeout(()=>{x.classList.remove("translate-y-full"),a.value="",a.focus()},600)},400)):(De(),a.value="",a.focus())}}catch(g){console.error("Login Error:",g),C.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Ue(e=!1){const r=document.getElementById("left-panel"),n=document.getElementById("right-panel"),a=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");a&&(a.style.opacity="0"),o&&(o.style.opacity="0");const t=document.createElement("div");t.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const g=e?"":"animate__delay-1s",s=e?"animation-duration: 0.8s;":"animation-duration: 2s;";t.innerHTML=`
        <img src="${se()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${g}" style="${s}" alt="DOLE Logo">
    `,document.body.appendChild(t);const x=e?0:1e3,w=e?600:1500;setTimeout(()=>{r&&r.classList.add("animate-slide-left"),n&&n.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${se()}frontend/dashboard/`},w)},x)}function bt(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${se()}`})}function ft(){const e=document.getElementById("mobile-splash"),r=document.getElementById("show-login-btn"),n=document.getElementById("back-to-splash"),a=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),t=document.getElementById("reopen-login-drawer"),g=document.getElementById("request-notifications-btn"),s=async()=>{if("Notification"in window){const c=await Notification.requestPermission();console.log("Notification permission:",c),c==="granted"&&g&&g.classList.add("hidden")}};Notification.permission==="default"&&g&&(g.classList.remove("hidden"),g.addEventListener("click",s));const x=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&s();const c=document.getElementById("drawer-login");c&&c.classList.remove("translate-y-full")},800))},w=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};r&&r.addEventListener("click",x),document.querySelectorAll(".forgot-password-link").forEach(c=>{c.addEventListener("click",A=>{A.target.closest("#mobile-splash")&&x()})}),n&&n.addEventListener("click",()=>{const c=document.getElementById("drawer-login");if(c){c.classList.add("translate-y-full");const A=c.querySelector("[data-drawer-hide]");A&&A.click()}w()});const d=document.getElementById("drawer-login"),L=document.getElementById("curved-welcome"),m=document.getElementById("peoples-bg");d&&new MutationObserver(A=>{A.forEach(E=>{E.attributeName==="class"&&(d.classList.contains("translate-y-full")?(a&&(a.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),L&&(L.style.opacity="0",L.style.transform="scale(0.5)"),t&&e&&e.style.visibility==="hidden"&&(t.style.opacity="1",t.style.transform="scale(1)"),m&&(m.classList.add("opacity-0","scale-0"),m.classList.remove("opacity-40","scale-[1.6]"))):(a&&(a.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),L&&(L.style.opacity="1",L.style.transform="scale(1)"),t&&(t.style.opacity="0",t.style.transform="scale(0)"),m&&(m.classList.remove("opacity-0","scale-0"),m.classList.add("opacity-40","scale-[1.6]"))))})}).observe(d,{attributes:!0})}const me=()=>"false".toLowerCase()==="true";function Ge(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const ge={debug(...e){me()&&console.debug(...e)},info(...e){me()&&console.info(...e)},warn(...e){me()&&console.warn(...e)},error(...e){console.error(...e)},table(e){me()&&console.table(e)},json(e,r){me()&&console.debug(e,Ge(r))}},ye=new Map;async function ve(e,r={}){const a=`${se()}${e}`;let o=null;try{const l=JSON.parse(localStorage.getItem("user"));l&&(o=l.user_id||l.id||null)}catch{}const t={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...r.headers},...r},s=(t.method||"GET").toUpperCase()==="GET"?2:1;let x=null;for(let l=1;l<=s;l++)try{if(ge.debug("[API] Request",{url:a,method:t.method||"GET",hasUserId:!!o}),t.body)try{ge.json("[API] Payload",JSON.parse(t.body))}catch{ge.debug("[API] Payload (raw)",t.body)}const d=await fetch(a,t);if(!d.ok)throw new Error(`HTTP ${d.status}: ${d.statusText}`);const L=await d.json();return ye.has(a)&&(ye.delete(a),ge.info?.("[API] Recovered",{url:a})),ge.debug("[API] Response",{url:a,ok:!0}),{success:!0,data:L}}catch(d){if(x=d,d instanceof TypeError&&/fetch/i.test(d.message||"")&&l<s){await new Promise(c=>setTimeout(c,1200));continue}}return x instanceof TypeError&&/fetch/i.test(x.message||"")?ye.get(a)||(ye.set(a,!0),ge.error("API Request Network Error (suppressed for repeats):",{url:a,message:x.message})):ge.error("API Request Error:",x),{success:!1,error:x?.message||"Unknown request error"}}async function K(e){return ve(e,{method:"GET"})}async function Se(e,r){return ve(e,{method:"POST",body:JSON.stringify(r)})}async function ze(e,r){return ve(e,{method:"PUT",body:JSON.stringify(r)})}async function mt(e,r){const n=new URLSearchParams(r).toString();return ve(`${e}?${n}`,{method:"PATCH"})}class Ye{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(r,n,a=1e4){this.stop(r),n();const o=setInterval(async()=>{this.isPageVisible&&await n()},a);this.intervals.set(r,o),console.log(`[Polling] Started: ${r} (every ${a}ms)`)}stop(r){this.intervals.has(r)&&(clearInterval(this.intervals.get(r)),this.intervals.delete(r),console.log(`[Polling] Stopped: ${r}`))}stopAll(){this.intervals.forEach((r,n)=>this.stop(n)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const Je=new Ye;function ht(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function xt(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{Je.stopAll()});const Ze="modulepreload",We=function(e,r){return new URL(e,r).href},Ie={},Te=function(r,n,a){let o=Promise.resolve();if(n&&n.length>0){let w=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};const g=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),x=s?.nonce||s?.getAttribute("nonce");o=w(n.map(l=>{if(l=We(l,a),l in Ie)return;Ie[l]=!0;const d=l.endsWith(".css"),L=d?'[rel="stylesheet"]':"";if(a)for(let c=g.length-1;c>=0;c--){const A=g[c];if(A.href===l&&(!d||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${L}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Ze,d||(m.as="script"),m.crossOrigin="",m.href=l,x&&m.setAttribute("nonce",x),document.head.appendChild(m),d)return new Promise((c,A)=>{m.addEventListener("load",c),m.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${l}`)))})}))}function t(g){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=g,window.dispatchEvent(s),!s.defaultPrevented)throw g}return o.then(g=>{for(const s of g||[])s.status==="rejected"&&t(s.reason);return r().catch(t)})};let ce=null;if(xe()){const e="https://llnddycvbcetztzwbdpx.supabase.co",r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{ce=qe(e,r),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(n){console.error("[SUPABASE SDK] Failed to initialize client:",n)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");function Xe(e=new Date().getFullYear()){const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],n=[];for(let a=0;a<12;a++){const o=new Date(e,a+1,0).getDate();n.push(`${r[a]} 1-15, ${e}`),n.push(`${r[a]} 16-${o}, ${e}`)}return n}function Ke(e,r,n){if(n==="ar")return(e.period||"").toUpperCase().trim()===r.toUpperCase().trim();{const a=r.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!a)return!1;const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(a[1].toUpperCase());if(t===-1)return!1;const g=parseInt(a[4]),s=parseInt(a[2]),x=parseInt(a[3]),w=(e.date||"").substring(0,10),l=new Date(w+"T00:00:00");return isNaN(l)?!1:l.getFullYear()===g&&l.getMonth()===t&&l.getDate()>=s&&l.getDate()<=x}}function Qe(e){if(!e)return"-";const r=e.toUpperCase();return r==="VERIFIED"||r==="COMPLETED"?"✓":r==="REJECTED"||r==="DECLINED"?"X":r==="PENDING"?"?":r}function Be(e,r,n,a){const o=e.map(t=>{const g=r[t.id]||[],s=a.map(x=>{const w=g.find(l=>Ke(l,x,n));return w?Qe(w.status):"-"});return{name:t.name||t.id,cells:s}});return{periods:a,rows:o}}function Ae(e,r,n){const{periods:a,rows:o}=r,t=a.length+1;let g='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return g+=`<tr><td colspan="${t}" style="background:${n};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,g+=`<tr><th style="background:${n};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,a.forEach(s=>{g+=`<th style="background:${n};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${s}</th>`}),g+="</tr>",o.forEach((s,x)=>{const w=x%2===0?"#ffffff":"#f5f5f5";g+="<tr>",g+=`<td style="background:${w};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${s.name}</td>`,s.cells.forEach(l=>{g+=`<td style="background:${w};padding:5px 8px;text-align:center;font-weight:bold;color:${l==="✓"?"#15803d":l==="X"?"#dc2626":"#9ca3af"};">${l}</td>`}),g+="</tr>"}),g+="</table>",g}async function vt(e){const r="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",n=e.length,a=await C.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
            <div class="font-montserrat text-left">
                <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest mb-4 ps-1">
                    Configure and export logs for <span class="text-royal-blue font-black">${n} beneficiaries</span>
                </p>

                <!-- Log Type -->
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Log Type</label>
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
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Beneficiaries to Include</label>
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
                    <input type="number" id="exp-custom-count" min="1" max="${n}" value="${n}"
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(x=>{x.addEventListener("change",()=>{const w=document.getElementById("custom-count-wrap");w.classList.toggle("hidden",x.value!=="custom"||!x.checked);const l=document.querySelector('input[name="exp-count"]:checked');w.classList.toggle("hidden",l?.value!=="custom")})})},preConfirm:()=>{const x=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",w=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let l=parseInt(w==="custom"?document.getElementById("exp-custom-count")?.value||n:w,10);(isNaN(l)||l<1)&&(l=10),l=Math.min(l,n);const d=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:x,count:l,year:d}}});if(!a.isConfirmed||!a.value)return;const{type:o,count:t,year:g}=a.value,s=e.slice(0,t);await _e(s,o,g)}async function _e(e,r,n){C.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const a=Xe(n),o=se();async function t(A){const I=await(await fetch(`${o}api/logs.php?type=${A}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return I.success?I.logs||[]:[]}let g={},s={};(r==="dtr"||r==="both")&&(await t("dtr")).forEach(E=>{const I=String(E.gip_id||E.beneficiary_id||E.id||"");g[I]||(g[I]=[]),g[I].push(E)}),(r==="ar"||r==="both")&&(await t("ar")).forEach(E=>{const I=String(E.gip_id||E.beneficiary_id||E.id||"");s[I]||(s[I]=[]),s[I].push(E)});const x=e.map(A=>({...A,mapKey:String(A.id||A.gip_id||A.beneficiary_id)}));let w="";const l=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(r==="dtr"||r==="both"){const A=x.map(I=>({...I,id:I.mapKey})),E=Be(A,g,"dtr",a);w+="<br>"+Ae(`DTR – Daily Time Records (${n})`,E,"#1d4ed8")}if(r==="ar"||r==="both"){const A=x.map(I=>({...I,id:I.mapKey})),E=Be(A,s,"ar",a);w+="<br><br>"+Ae(`AR – Accomplishment Reports (${n})`,E,"#d97706")}const d=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${l} | DOLE LDNPFO – GIP Monitoring System</p>
                ${w}
            </body>
            </html>
        `,L=new Blob([d],{type:"application/vnd.ms-excel"}),m=URL.createObjectURL(L),c=document.createElement("a");c.href=m,c.download=`LDN_LOGS_${r.toUpperCase()}_${n}.xls`,document.body.appendChild(c),c.click(),URL.revokeObjectURL(m),document.body.removeChild(c),C.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(a){console.error("[LogsExport] Error:",a),C.fire("Error",a.message||"Failed to generate export.","error")}}const fe="color-theme",et=3600*24*365;function tt(e,r,n){document.cookie=`${e}=${r}; max-age=${n}; path=/; SameSite=Lax`}function je(e){const r=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return r?decodeURIComponent(r[1]):null}function Re(){const e=localStorage.getItem(fe)||je(fe);return e==="dark"||e==="light"?e:"light"}function ke(e){const r=document.documentElement;e==="dark"?r.classList.add("dark"):r.classList.remove("dark"),localStorage.setItem(fe,e),tt(fe,e,et),rt(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function Ee(){const e=Re();ke(e==="dark"?"light":"dark")}function rt(e){const r=e==="dark",n=document.getElementById("pref-dark-mode");n&&(n.checked=r);const a=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");a&&o&&(a.classList.toggle("hidden",r),o.classList.toggle("hidden",!r));const t=document.getElementById("sidebar-theme-label");t&&(t.textContent=r?"Light Mode":"Dark Mode")}function wt(){const e=Re();ke(e);const r=document.getElementById("pref-dark-mode");r&&r.addEventListener("change",()=>{ke(r.checked?"dark":"light")});const n=document.getElementById("theme-toggle-btn");n&&n.addEventListener("click",Ee),document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.addEventListener("click",Ee)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{localStorage.getItem(fe)||je(fe)||ke(a.matches?"dark":"light")})}function le(){return document.documentElement.classList.contains("dark")}window.toggleTheme=Ee;window.isDarkMode=le;const $e={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=le(),r={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},n=`
            <div class="font-montserrat text-left px-2 sm:px-4 py-2">
                <div class="mb-6 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-black ${r.textHeading} flex items-center gap-2.5">
                            <div class="p-2 ${r.iconBg} rounded-lg ${r.iconText} border ${r.iconBorder} shadow-sm">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                            </div>
                            Bulk Add Beneficiaries
                        </h3>
                        <p class="text-[0.625rem] ${r.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Upload a CSV file to automate data entry.</p>
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
                        <span class="text-[0.6875rem] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block leading-tight">Auto-Save (Fast Mode)</span>
                        <span class="text-[0.5625rem] font-bold text-gray-400 uppercase tracking-tighter">Skip manual confirmations for every record</span>
                    </div>
                </div>
            </div>
        `;C.fire({html:n,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:a=>{const o=a.querySelector("#csv-upload"),t=a.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(s=>{t.addEventListener(s,g,!1)});function g(s){s.preventDefault(),s.stopPropagation()}["dragenter","dragover"].forEach(s=>{t.addEventListener(s,()=>{t.classList.add("border-blue-500","bg-blue-50/50"),e&&t.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(s=>{t.addEventListener(s,()=>{t.classList.remove("border-blue-500","bg-blue-50/50"),e&&t.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",s=>{const x=s.target.files[0];if(x){const w=a.querySelector("#auto-save-toggle");this.isAutoSave=w?w.checked:!1,this.handleFile(x)}}),t.addEventListener("drop",s=>{const w=s.dataTransfer.files[0];if(w){const l=a.querySelector("#auto-save-toggle");this.isAutoSave=l?l.checked:!1,this.handleFile(w)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){C.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const r=new FileReader;r.onload=n=>{const a=n.target.result;this.parseCSV(a)},r.readAsText(e)},async parseCSV(e){let r=[],n="",a=!1;for(let o=0;o<e.length;o++){let t=e[o];t==='"'&&(a=!a),!a&&(t===`
`||t==="\r")?(t==="\r"&&e[o+1]===`
`&&o++,n.trim()!==""&&r.push(n),n=""):n+=t}n.trim()!==""&&r.push(n),this.queue=[];for(let o=0;o<r.length;o++){let t=r[o].trim();if(!t)continue;let g=[],s="",x=!1;for(let w=0;w<t.length;w++){let l=t[w];l==='"'?x=!x:l===","&&!x?(g.push(s.replace(/(^"|"$)/g,"").trim()),s=""):s+=l}if(g.push(s.replace(/(^"|"$)/g,"").trim()),g.length>=2){const w=g[3];if(!w||isNaN(parseInt(w)))continue;const l=g[1];if(!l||l.toLowerCase()==="name"||l.toLowerCase()==="full name")continue;const d=g[2];let L=g[4]?g[4].toUpperCase().trim():"",m="";(L==="F"||L.includes("FEMALE"))&&(m="Female"),(L==="M"||L.includes("MALE"))&&(m="Male");const c=g[5],A=g[6],E=g[7],I=this.formatDate(g[8]),j=this.formatDate(g[9]);this.queue.push({name:l,address:d,age:w,gender:m,education:c,startDate:I,endDate:j,office:A,designation:E})}}if(this.queue.length>0){try{C.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{C.showLoading()}});const o=this.queue.map(x=>x.name);let t=null;try{t=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{t=null}const s=await(await fetch(`${se()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...t?{"X-User-Id":String(t)}:{}},body:JSON.stringify({names:o,user_id:t})})).json();if(s.success&&s.duplicates&&s.duplicates.length>0){const x=new Set(s.duplicates.map(l=>l.toLowerCase().trim())),w=this.queue.length;this.queue=this.queue.filter(l=>{const d=x.has(l.name.toLowerCase().trim());return d&&console.warn(`%c[Bulk Add] SKIPPED: ${l.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!d}),console.log(`[Bulk Add] Removed ${w-this.queue.length} duplicates ahead of time.`)}}catch(o){console.error("Bulk duplicate check failed:",o)}if(this.queue.length===0){C.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,C.close(),this.processNext()}else C.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){le();const e=Math.round(this.currentIndex/this.queue.length*100),r=`
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
        `;if(C.isVisible()&&C.getPopup().querySelector("#bulk-progress-bar")){const n=document.getElementById("bulk-progress-bar"),a=C.getPopup().querySelector("span.text-\\[10px\\]"),o=document.getElementById("bulk-current-name");n&&(n.style.width=`${e}%`),a&&(a.textContent=`${this.currentIndex} / ${this.queue.length}`),o&&(o.textContent=this.queue[this.currentIndex]?.name||"...")}else C.fire({html:r,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:n=>{n.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const r=new Date(e);if(isNaN(r.getTime())){const t=e.split("/");return t.length===3?`${t[2]}-${t[1].padStart(2,"0")}-${t[0].padStart(2,"0")}`:""}const n=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${n}-${a}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const n=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[a,o]=await Promise.all([K(`api/beneficiaries.php?next_id&year=${n}`),K(`api/beneficiaries.php?next_series_no&year=${n}`)]);a.success&&a.data?.success&&a.data?.nextId&&(e.gip_id=a.data.nextId,e.id=null),o.success&&o.data?.success&&o.data?.nextSeries&&(e.seriesNo=o.data.nextSeries)}catch(n){console.warn("[Bulk Add] Identifier fetch failed, continuing:",n?.message||n)}const r=await window.addBeneficiaryData(e);this.isActive&&(r?this.onSaveSuccess():he(e))})():he(e)):he(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),C.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,C.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=$e;function Me(e){if(!e)return"";const r=new Date(e),n=new Date;let a=n.getFullYear()-r.getFullYear();const o=n.getMonth()-r.getMonth();return(o<0||o===0&&n.getDate()<r.getDate())&&a--,a>=0?a:0}function ot(e){if(!e||e==="N/A")return"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const r=e.toUpperCase();if(r.includes("LGU"))return/ILIGAN/i.test(e)?"bg-yellow-400 text-white border border-yellow-500":"bg-yellow-100 text-yellow-700 border border-yellow-200 dark:!text-white";if(r.includes("DOLE"))return"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white";if(r.includes("DEPED"))return"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white";if(r.includes("DICT"))return"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white";if(r.includes("DOH"))return"bg-red-100 text-red-700 border border-red-200 dark:!text-white";if(r.includes("DSWD"))return"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white";if(r.includes("DTI"))return"bg-green-100 text-green-700 border border-green-200 dark:!text-white";if(r.includes("DPWH"))return"bg-stone-100 text-stone-700 border border-stone-200 dark:!text-white";if(r.includes("DILG"))return"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white";if(r.includes("DOST"))return"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white";if(r.includes("DENR"))return"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white";if(r.includes("CHED"))return"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white";if(r.includes("TESDA"))return"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white";if(r.includes("DOJ"))return"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white";if(r.includes("DOT")||r.includes("TOURISM"))return"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white";if(r.includes("DA")&&!r.includes("DPWH")&&!r.includes("DILG"))return"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white";if(r.includes("PRC"))return"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white";if(r.includes("SSS"))return"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white";if(r.includes("GSIS"))return"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white";if(r.includes("PHIC")||r.includes("PHILHEALTH"))return"bg-blue-200 text-blue-800 border border-blue-300 dark:!text-white";if(r.includes("NBI"))return"bg-zinc-100 text-zinc-700 border border-zinc-200 dark:!text-white";const n=["bg-purple-100 text-purple-700 border border-purple-200","bg-rose-100 text-rose-700 border border-rose-200","bg-amber-100 text-amber-700 border border-amber-200","bg-teal-100 text-teal-700 border border-teal-200","bg-indigo-100 text-indigo-700 border border-indigo-200","bg-lime-100 text-lime-700 border border-lime-200","bg-sky-100 text-sky-700 border border-sky-200","bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200","bg-emerald-100 text-emerald-700 border border-emerald-200","bg-orange-100 text-orange-700 border border-orange-200","bg-pink-100 text-pink-700 border border-pink-200","bg-green-100 text-green-700 border border-green-200","bg-violet-100 text-violet-700 border border-violet-200","bg-cyan-100 text-cyan-700 border border-cyan-200","bg-red-100 text-red-700 border border-red-200"];let a=0;for(let o=0;o<e.length;o++)a=a*31+e.charCodeAt(o)>>>0;return n[a%n.length]+" dark:!text-white"}function at(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300";const r=e.toUpperCase();return r==="ONGOING"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800":r==="EXPIRED"?"bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800":r==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900":r==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900":"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300"}function Ne(e,r=0){e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const n=window.innerWidth<640?"top":"top-start";let a=r;const o=e.arLogs||[],t=e.dtrLogs||[],g=e.docs||[],s=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],x=s.map(m=>{const c=g.find(A=>A.name.toUpperCase()===m.toUpperCase());return c||{name:m,status:"PENDING",id:null}});g.forEach(m=>{s.some(A=>A.toUpperCase()===m.name.toUpperCase())||x.push(m)});const w=`
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
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ID NO.</span>
            <span class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-gray-400 truncate">${e.id}</span>
        </div>
        <div class="flex flex-col gap-1 text-left overflow-hidden">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1 flex items-center font-montserrat">
                REMARKS / OFFICE
            </span>
            <div class="flex items-center flex-wrap gap-2.5 min-h-[30px] font-montserrat">
                <span class="${at(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-4 sm:px-6 py-2 rounded-lg border uppercase tracking-widest shadow-sm border-l-4 ${e.remarks==="ONGOING"?"border-l-green-600":"border-l-red-600"} min-w-[110px] sm:min-w-[140px] text-center inline-block">${e.remarks}</span>
                <span class="${ot(e.office)} inline-block text-[0.5625rem] sm:text-[0.625rem] font-black px-4 sm:px-6 py-2 rounded-full border shadow-sm truncate max-w-[180px] sm:max-w-[280px] lg:max-w-none min-w-[110px] sm:min-w-[140px] text-center" title="${e.office}">${e.office}</span>
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
            <span class="${e.age||Me(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right">${e.age||Me(e.birthday)||"N/A"}</span>
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
                    <span class="font-black text-[#1b5e20] dark:text-green-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.absorbDate||String(e.absorbDate).includes("0000-00-00"))return"N/A";const m=new Date(e.absorbDate);return isNaN(m.getTime())||m.getFullYear()<1900?"N/A":(m.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+m.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
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
                    <span class="font-black text-[#b71c1c] dark:text-red-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.resignedDate||String(e.resignedDate).includes("0000-00-00"))return"N/A";const m=new Date(e.resignedDate);return isNaN(m.getTime())||m.getFullYear()<1900?"N/A":(m.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+m.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
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
                    ${t.length?t.map(m=>{const c=m.status||"PENDING";let A=c==="VERIFIED"||c==="COMPLETED"?"text-green-500":c==="REJECTED"||c==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",E=m.date||m.createdAt,I=E;if(E){const j=/^\d{4}-\d{2}-\d{2}$/.test(E)?new Date(E+"T00:00:00Z"):new Date(E);isNaN(j)||(I=j.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors edit-log-btn" data-type="dtr" data-id="${m.id}" data-val="${m.day||E}" data-status="${c}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${m.day||I}</span>
                            <span class="text-[0.6875rem] font-bold ${A} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${c}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${m.id}">
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
                    ${o.length?o.map(m=>{const c=m.status||"PENDING";let A=c==="VERIFIED"||c==="COMPLETED"?"text-green-500":c==="REJECTED"||c==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",E=m.period||m.createdAt,I=E;if(E){const j=/^\d{4}-\d{2}-\d{2}$/.test(E)?new Date(E+"T00:00:00Z"):new Date(E);isNaN(j)||(I=j.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors edit-log-btn" data-type="ar" data-id="${m.id}" data-val="${E}" data-status="${c}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${E||I}</span>
                            <span class="text-[0.6875rem] font-bold ${A} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${c}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${m.id}">
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
            ${x.map(m=>{const c=m.status.toUpperCase(),E={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[c]||c,I=E==="COMPLETED",j=E==="REJECTED",re=I?"text-green-500":j?"text-red-500":"text-gray-400 dark:text-gray-500",X=I?"bg-green-50/50 dark:bg-green-900/10":j?"bg-red-50/50 dark:bg-red-900/10":"bg-gray-50/50 dark:bg-slate-800/50",U=I?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer":j?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer":"bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer";let ne='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return I?ne='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':j&&(ne='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${X}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${re}">
                            ${ne}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${I?"text-heading":"text-gray-500 dark:text-gray-400"} uppercase tracking-tight flex-1">${m.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${U} text-[0.625rem] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${m.id}" data-name="${m.name}" data-status="${E} cursosr-pointer">
                        ${E}
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
    `,l=!!e._noAnimation;let d=document.getElementById("beneficiary-drawer-container");const L=l&&!!d&&d.dataset.beneficiaryId===String(e.id||"");if(L){const m=d.scrollTop;d.innerHTML=w,d.scrollTop=m}else d&&(d.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),d=document.createElement("div"),d.id="beneficiary-drawer-container",d.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl",d.setAttribute("tabindex","-1"),d.setAttribute("data-drawer-backdrop","true"),d.innerHTML=w,document.body.appendChild(d),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");d.dataset.beneficiaryId=String(e.id||""),Te(async()=>{const{Drawer:m}=await import("./vendor-flowbite-B7rSfpuT.js").then(c=>c.b);return{Drawer:m}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:m})=>{let c=L?d.__drawerInstance:null;if(!c){const O={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{d&&d.parentNode&&d.remove()},300)}};c=new m(d,O),d.__drawerInstance=c,c.show()}d.querySelector("#close-drawer-btn").addEventListener("click",()=>c.hide());const E=d.querySelector("#drawer-prev-btn"),I=d.querySelector("#drawer-next-btn"),j=2,re=()=>{d.querySelectorAll("[id^=drawer-page-]").forEach((T,G)=>{T.classList.toggle("hidden",G!==a)});const O=d.querySelector("#drawer-section-title");O&&O.classList.toggle("invisible",a!==0);const _=d.querySelector("#personal-profile-section");_&&_.classList.toggle("hidden",a!==0),E.disabled=a===0,I.disabled=a===j,E.classList.toggle("opacity-50",a===0),I.classList.toggle("opacity-50",a===j)};E.addEventListener("click",()=>{a>0&&a--,re()}),I.addEventListener("click",()=>{a<j&&a++,re()}),re(),d.querySelectorAll(".drawer-doc-btn").forEach(O=>{O.addEventListener("click",async()=>{const _=O.dataset.name,T=O.dataset.status,G="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.5625rem] gap-2 transition-all duration-300 ",u=await C.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Set status for <span class="text-brand font-black">${_}</span></label>
                            
                            <div class="grid grid-cols-3 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="PENDING" class="peer sr-only" ${T==="PENDING"?"checked":""}>
                                    <div class="${G} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-amber-400 peer-checked:bg-amber-50 peer-checked:text-amber-600 dark:peer-checked:bg-amber-900/20 dark:peer-checked:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>Pending</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="COMPLETED" class="peer sr-only" ${T==="COMPLETED"?"checked":""}>
                                    <div class="${G} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-green-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        <span>Verify</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="REJECTED" class="peer sr-only" ${T==="REJECTED"?"checked":""}>
                                    <div class="${G} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-red-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Update Status</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const p=document.querySelector('input[name="swal-doc-status"]:checked');return p?p.value:null}});if(u.isConfirmed){const p=u.value;if(p===T)return;try{const B={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"}[p]||p,$=await Se("api/logs.php?type=docs",{gip_id:e.id,doc_name:_,status:B}),v=$.success?$.data:{success:!1,error:$.error};v.success?(C.fire({toast:!0,position:n,icon:"success",title:"Status updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):C.fire("Error",v.error||"Failed to update","error")}catch(k){C.fire("Error",k.message,"error")}}})});const X=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),U=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function ne(O){const T=new Date(O+"T00:00:00").getDay();return T!==0&&T!==6&&!X.has(O)}function ae(O){const _=O.getDate(),T=U[O.getMonth()],G=O.getFullYear(),u=new Date(G,O.getMonth()+1,0).getDate();return _<=15?`${T} 1-15, ${G}`:`${T} 16-${u}, ${G}`}const ie=()=>{const O=new Date;if(!t.length)return ae(O);let _=-1,T="";const G=$=>{const v=($||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!v)return-1;const q=U.indexOf(v[1]),i=parseInt(v[2])===1?0:1;return parseInt(v[4])*100+q*2+i};if(t.forEach($=>{const v=$.day||$.date||"",q=G(v);q>_&&(_=q,T=v)}),_===-1)return ae(O);const u=T.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),p=U.indexOf(u[1]),k=parseInt(u[2]),B=parseInt(u[4]);if(k===1){const $=new Date(B,p+1,0).getDate();return`${U[p]} 16-${$}, ${B}`}else{const $=(p+1)%12,v=p===11?B+1:B;return`${U[$]} 1-15, ${v}`}},Q=()=>{const O=new Date;if(!o.length)return ae(O);let _=-1,T="";const G=$=>{const v=($||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!v)return-1;const q=U.indexOf(v[1]),i=parseInt(v[2])===1?0:1;return parseInt(v[4])*100+q*2+i};if(o.forEach($=>{const v=G($.period);v>_&&(_=v,T=$.period)}),_===-1)return ae(O);const u=T.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),p=U.indexOf(u[1]),k=parseInt(u[2]),B=parseInt(u[4]);if(k===1){const $=new Date(B,p+1,0).getDate();return`${U[p]} 16-${$}, ${B}`}else{const $=(p+1)%12,v=p===11?B+1:B;return`${U[$]} 1-15, ${v}`}},de=async(O,_)=>{C.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),C.showLoading();try{const T={gip_id:e.id};if(O==="dtr"){const p=_.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(p){const k=U.indexOf(p[1]),B=parseInt(p[2]),$=parseInt(p[3]);let v=new Date($,k,B);for(;!ne(v.toISOString().split("T")[0]);)v.setDate(v.getDate()+1);T.record_date=v.toISOString().split("T")[0]}else T.record_date=new Date().toISOString().split("T")[0];T.weekday=_}O==="ar"&&(T.period=_);const G=await Se(`api/logs.php?type=${O}`,T);(G.success?G.data:{success:!1,error:G.error}).success?(C.fire({toast:!0,position:n,icon:"success",title:"Auto-Added!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):C.fire("Error","Failed to add log.","error")}catch(T){C.fire("Error",T.message,"error")}},ee=async(O,_,T,G,u)=>{const p=_==="dtr"?"Record Date":"Period";le();const k="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] sm:text-xs gap-2 ",B='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',$='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:v}=await C.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${O} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-1">${p}</label>
                            <input id="swal-log-val" value="${G}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${u==="VERIFIED"?"checked":""}>
                                    <div class="${k} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${B}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${u==="REJECTED"||u==="DECLINED"?"checked":""}>
                                    <div class="${k} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${$}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const q=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:q?q.value:"PENDING"}}});if(v&&(v.val!==G||v.status!==u))try{const q={type:_,id:T,status:v.status};if(_==="dtr"){const f=v.val.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(f){const y=U.indexOf(f[1]),h=parseInt(f[2]),D=parseInt(f[3]);let M=new Date(D,y,h);for(;!ne(M.toISOString().split("T")[0]);)M.setDate(M.getDate()+1);q.record_date=M.toISOString().split("T")[0]}else q.record_date=new Date().toISOString().split("T")[0];q.weekday=v.val}_==="ar"&&(q.period=v.val);const i=await ze("api/logs.php",q),b=i.success?i.data:{success:!1,error:i.error};b.success?(C.fire({toast:!0,position:n,icon:"success",title:"Log Updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):C.fire("Error",b.error||"Failed to update log.","error")}catch(q){C.fire("Error",q.message,"error")}},ue=d.querySelector("#add-dtr-log-btn");ue&&ue.addEventListener("click",()=>de("dtr",ie()));const pe=d.querySelector("#add-ar-log-btn");pe&&pe.addEventListener("click",()=>de("ar",Q()));const be=d.querySelector("#export-log-btn");be&&be.addEventListener("click",async()=>{const O="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",_=await C.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${O} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${O} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${O} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const T=document.querySelector('input[name="swal-export-type"]:checked');return T?T.value:null}});if(_.isConfirmed&&_.value){const T=_.value,G=new Date().getFullYear();await _e([e],T,G)}}),d.querySelectorAll(".edit-log-btn").forEach(O=>{O.addEventListener("click",_=>{if(_.target.closest(".delete-log-btn"))return;const T=O.dataset.type,G=O.dataset.id,u=O.dataset.val,p=O.dataset.status;ee(T.toUpperCase(),T,G,u,p)})}),d.querySelectorAll(".delete-log-btn").forEach(O=>{O.addEventListener("click",async()=>{const _=O.dataset.id,T=O.dataset.type;if((await C.fire({title:'<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:'<span class="font-black tracking-widest uppercase">Delete</span>',cancelButtonText:'<span class="font-black tracking-widest uppercase">Wait</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)try{const u=await Se(`api/logs.php?type=${T}`,{log_id:_,action:"delete"});(u.success?u.data:{success:!1,error:u.error}).success?(C.fire({toast:!0,position:n,icon:"success",title:"Deleted",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):C.fire("Error","Failed to delete data.","error")}catch(u){C.fire("Error",u.message,"error")}})})}).catch(console.error)}function st(e){const r=le(),n=`w-full bg-transparent border-b-2 ${r?"border-slate-700 text-white focus:border-brand placeholder-slate-600":"border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300"} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`,a=`w-full bg-transparent border-none ${r?"text-white":"text-royal-blue"} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`;function o(l){if(!l)return"";const d=new Date(l),L=new Date;let m=L.getFullYear()-d.getFullYear();const c=L.getMonth()-d.getMonth();return(c<0||c===0&&L.getDate()<d.getDate())&&m--,m>=0?m:0}function t(l){if(!l)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const d=String(l).toUpperCase();return d==="ONGOING"?"bg-green-100 text-green-700 border-green-200":d==="EXPIRED"?"bg-red-400 text-white border-red-400":d==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":d==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const g=`
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
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${t(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
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
            <input type="text" name="contact" value="${e.contact||""}" class="${n} text-right font-mono max-w-[200px]" placeholder="09XX-XXX-XXXX">
        </div>
        
        <div class="flex justify-between items-start group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1 shrink-0">Address</span>
            <textarea name="address" rows="2" class="${n} text-right resize-none max-w-[250px]" placeholder="Barangay, City">${e.address||""}</textarea>
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
            <input type="text" name="age" id="edit-age-display" value="${e.age||o(e.birthday)||""}" class="${n} text-right max-w-[80px]" placeholder="Auto">
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Gender</span>
            <select name="gender" class="${n} cursor-pointer max-w-[110px] text-right-select !pr-1" style="direction: rtl;">
                <option value="Male" ${e.gender==="Male"?"selected":""}>MALE</option>
                <option value="Female" ${e.gender==="Female"?"selected":""}>FEMALE</option>
            </select>
        </div>
        
        <div class="flex flex-col gap-2 pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap">Education</span>
            <input type="text" name="education" id="edit-education-input" value="${e.education||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Course/Level...">
            <div id="edit-education-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                ${Le.map(l=>`<button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${l.name}</span></button>`).join("")}
            </div>
        </div>

        <div class="flex justify-between items-start group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1 shrink-0">Designated Beneficiary</span>
            <input type="text" name="designatedBeneficiary" value="${e.designatedBeneficiary||""}" class="${n} text-right max-w-[250px]" placeholder="Assured family member">
        </div>
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Relationship to Assured</span>
            <select name="relationshipToAssured" class="${n} cursor-pointer max-w-[190px] text-right-select !pr-1 uppercase" style="direction: rtl;">
                <option value=""></option>
                ${He.map(l=>`<option value="${l}" ${e.relationshipToAssured===l?"selected":""}>${l}</option>`).join("")}
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
    `;let s=document.getElementById("edit-drawer-container");s&&(s.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),s=document.createElement("div"),s.id="edit-drawer-container",s.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",s.setAttribute("tabindex","-1"),s.innerHTML=g,document.body.appendChild(s),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const l=s.querySelector('textarea[name="name"]');l&&(l.style.height="auto",l.style.height=l.scrollHeight+"px")},10);const x=s.querySelector("#edit-education-suggestions-box");x&&(x.innerHTML=Le.map(l=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${l.name}</span>
            </button>
        `).join(""));const w=s.querySelector("#edit-designation-suggestions-box");w&&(w.innerHTML=Pe.map(l=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${l}</span>
            </button>
        `).join("")),Te(async()=>{const{Drawer:l}=await import("./vendor-flowbite-B7rSfpuT.js").then(d=>d.b);return{Drawer:l}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:l})=>{const d=new l(s,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{s&&s.parentNode&&s.remove()},400)}});d.show(),window.initFlowbite&&window.initFlowbite();const L=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),d.hide()};s.querySelector("#close-edit-drawer-btn").addEventListener("click",L),s.querySelector("#edit-drawer-cancel-btn").addEventListener("click",L);const m=s.querySelector("#edit-beneficiary-drawer-form"),c=s.querySelector("#edit-bday-input"),A=s.querySelector("#edit-age-display"),E=s.querySelector("#edit-startDate-input"),I=s.querySelector("#edit-endDate-input"),j=s.querySelector('input[name="seriesNo"]'),re=s.querySelector('input[name="gip_id"]'),X=s.querySelector("#edit-drawer-remarks"),U=s.querySelector("#edit-extension-log-container"),ne=()=>{if(!U)return;const u=X.value,p=le();if(u==="ABSORBED"){const k=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,B=k.getTimezoneOffset()*6e4,$=new Date(k.getTime()-B).toISOString().slice(0,16);U.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${p?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${p?"text-green-500":"text-[#2e7d32]"} border-b ${p?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${p?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${$}" class="w-full ${p?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${p?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${e.absorb_where||""}" class="w-full ${p?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${p?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${e.absorb_position||""}" class="w-full ${p?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${p?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${e.absorb_agency||""}" class="w-full ${p?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `}else if(u==="RESIGNED"){const k=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,B=k.getTimezoneOffset()*6e4,$=new Date(k.getTime()-B).toISOString().slice(0,16);U.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${p?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${p?"text-red-500":"text-[#ce1126]"} border-b ${p?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${p?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${$}" class="w-full ${p?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${p?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${p?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};X&&X.addEventListener("change",u=>{const p="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";X.className=`${t(u.target.value)} ${p} editable-indicator`,ne(),(X.value==="ABSORBED"||X.value==="RESIGNED")&&setTimeout(()=>{U.scrollIntoView({behavior:"smooth",block:"center"}),U.classList.add("pulse-highlight"),setTimeout(()=>U.classList.remove("pulse-highlight"),1500)},50)}),ne();let ae=!1,ie=!1;const Q=(u,p)=>{u.addEventListener("paste",k=>{k.preventDefault();let B=(k.clipboardData||window.clipboardData).getData("text");if(B){B=B.replace(/[-.\s]/g,"/");const $=B.split("/");if($.length===3){const v=$[0].padStart(2,"0"),q=$[1].padStart(2,"0");let i=$[2];if(i.length===2){const h=new Date().getFullYear(),D=Math.floor(h/100)*100;i=String(D+parseInt(i))}else i=i.padStart(4,"0");const b=`${v}/${q}/${i}`;u.value=b;const f=new Event("input",{bubbles:!0});u.dispatchEvent(f);const y=window.__parseFormattedDate(b);if(y&&p&&(ie||p(y),document.activeElement===u&&u.blur()),u._datepicker)u._datepicker.hide();else{const h=u.parentNode&&u.parentNode._datepicker;h&&typeof h.hide=="function"&&h.hide()}}}}),u.addEventListener("input",k=>{const B=k.target.value,$=window.__maskDate(B);if(B!==$&&(k.target.value=$),$.length===10){const v=window.__parseFormattedDate($);if(v&&p)if(ie||p(v),document.activeElement===u&&u.blur(),u._datepicker)u._datepicker.hide();else{const q=u.parentNode&&u.parentNode._datepicker;q&&typeof q.hide=="function"&&q.hide()}}}),u.addEventListener("changeDate",k=>{k.detail&&k.detail.date&&p&&(ie||p(k.detail.date),u._datepicker&&u._datepicker.hide())})};c&&Q(c,u=>{A&&(!ae||!A.value)&&(A.value=window.calculateAge(u))}),E&&Q(E,u=>{if(I){const k=new Date(u);k.setDate(k.getDate()+243);const B=String(k.getMonth()+1).padStart(2,"0"),$=String(k.getDate()).padStart(2,"0"),v=k.getFullYear();I.value=`${B}/${$}/${v}`}const p=u.getFullYear();p>1900&&re&&j&&Promise.all([K(`api/beneficiaries.php?next_id&year=${encodeURIComponent(p)}`),K(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(p)}`)]).then(([k,B])=>{const $=k.success&&k.data?.success?k.data.nextId:null,v=B.success&&B.data?.success?B.data.nextSeries:null,q=String(re.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),i=String(j.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),b=q?Number(q[1]):null,f=i?Number(i[1]):null;$&&(b===null||b!==p)&&(re.value=$),v&&(f===null||f!==p)&&(j.value=v)}).catch(k=>{console.error("Edit drawer identifier sync error:",k)})}),I&&Q(I);const de=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null),ee=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null);de&&c&&(c._datepicker=new de(c,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}));const ue=s.querySelector("#edit-date-range-picker");if(ee&&ue){const u=new ee(ue,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});E&&(E._datepicker=u.datepickers[0]),I&&(I._datepicker=u.datepickers[1])}e.id&&(ie=!0,K(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(u=>{if(u.success&&u.data&&u.data.beneficiary){const p=u.data.beneficiary;if(E&&p.startDate){const k=new Date(p.startDate);isNaN(k)||(E.value=p.startDateFormatted||"",E._datepicker&&E._datepicker.setDate(k))}if(I&&p.endDate){const k=new Date(p.endDate);isNaN(k)||(I.value=p.endDateFormatted||"",I._datepicker&&I._datepicker.setDate(k))}}setTimeout(()=>{ie=!1},100)}).catch(u=>{console.error("Error fetching accurate beneficiary dates:",u),ie=!1})),A&&A.addEventListener("input",()=>ae=!0);const pe=(u,p,k)=>{const B=s.querySelector(u),$=s.querySelector(p);if(!B||!$)return;const v=()=>$.classList.add("hidden"),q=()=>$.classList.remove("hidden");B.addEventListener("focus",q),B.addEventListener("input",()=>{const i=B.value.toLowerCase().trim();let b=0;$.querySelectorAll(k).forEach(f=>{const h=(f.querySelector(".option-text")?.textContent||f.textContent||"").toLowerCase().includes(i);f.style.display=h?"block":"none",h&&b++}),b>0?q():v()}),$.addEventListener("click",i=>{const b=i.target.closest(k);b&&(B.value=(b.querySelector(".option-text")?.textContent||b.textContent||"").trim(),v(),B.dispatchEvent(new Event("change")))}),document.addEventListener("click",i=>{!B.contains(i.target)&&!$.contains(i.target)&&v()})};pe("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),pe("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const u=s.querySelector("#edit-office-input"),p=s.querySelector("#edit-office-suggestions-box");if(!u||!p)return;p.classList.add("mt-[52px]");let k="OFFICES",B=null,$=[];const v={textLabel:r?"text-slate-400":"text-slate-500",borderDivide:r?"border-slate-800":"border-slate-100",courseHover:r?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:r?"text-slate-300":"text-slate-700"},q=async()=>{const b="dole_offices_cache",f=async()=>{let h=[];try{const D=await K("api/beneficiaries.php?get_offices_advanced=1");D.success&&D.data?.success&&Array.isArray(D.data.offices)&&(h=D.data.offices)}catch(D){console.error("Office fetch failed:",D)}return h.length>0&&($=h,localStorage.setItem(b,JSON.stringify({data:h,timestamp:Date.now()}))),h},y=localStorage.getItem(b);if(y)try{const{data:h,timestamp:D}=JSON.parse(y);return $=h,Date.now()-D>1800*1e3&&f().then(()=>{k==="OFFICES"&&i("OFFICES",B,u.value)}),h}catch{localStorage.removeItem(b)}return $.length===0?await f():$},i=async(b="OFFICES",f=null,y="")=>{if(k=b,B=f,b==="OFFICES"){const D=(await q()).filter(S=>S.office.toLowerCase().includes(y.toLowerCase()));p.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${v.textLabel} opacity-70 border-b ${v.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${D.length>0?D.map(S=>{const R=parseInt(S.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${v.textCourseOpt} ${v.courseHover} rounded-lg ${R?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${S.id}" data-name="${S.office}" data-has-locations="${R}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${S.office}</span>
                                        </div>
                                        ${R?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                    </div>
                                `}).join(""):`
                                <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${v.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                ${y.trim()?`
                                <div class="px-2 pb-2 flex flex-col gap-1.5">
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${v.textLabel} opacity-50 px-1">New office: "${y.trim()}"</div>
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
                    `;const M=y.trim(),H=p.querySelector("#add-office-location-row-edit"),F=p.querySelector("#new-office-loc-input-edit"),J=p.querySelector("#confirm-office-with-loc-edit"),V=p.querySelector("#add-office-with-loc-btn-edit"),N=p.querySelector("#skip-office-loc-btn-edit");if(V&&H&&V.addEventListener("click",S=>{S.stopPropagation(),H.classList.remove("hidden"),H.classList.add("flex"),setTimeout(()=>F?.focus(),50)}),J&&F){const S=R=>{R.stopPropagation();const z=F.value.trim();u.value=z?`${M} - ${z}`:M,p.classList.add("hidden"),u.dispatchEvent(new Event("change"))};J.addEventListener("click",S),F.addEventListener("keydown",R=>{R.key==="Enter"&&S(R)}),F.addEventListener("click",R=>R.stopPropagation())}N&&N.addEventListener("click",S=>{S.stopPropagation(),u.value=M,p.classList.add("hidden"),u.dispatchEvent(new Event("change"))}),p.querySelectorAll(".office-code-option").forEach(S=>{S.addEventListener("click",R=>{R.stopPropagation(),S.dataset.hasLocations==="true"?i("LOCATIONS",{id:S.dataset.id,name:S.dataset.name}):(u.value=S.dataset.name,p.classList.add("hidden"),u.dispatchEvent(new Event("change")))})})}else{p.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${v.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-t-xl">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-md bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${v.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${v.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${f.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                    value="${y.includes(" - ")?y.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${v.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const h=p.querySelector("#loc-list-edit"),D=p.querySelector("#location-search-edit"),M=`dole_locs_cache_${f.id}`;let H=[];const F=localStorage.getItem(M);if(F)try{const{data:N,timestamp:S}=JSON.parse(F);H=N,Date.now()-S<3600*1e3}catch{localStorage.removeItem(M)}const J=async()=>{let N=[];if(ce&&xe()){const{data:S,error:R}=await ce.from("office_locations").select("location").eq("office_id",f.id).order("location");!R&&S&&(N=S)}if(N.length===0)try{const S=await K(`api/beneficiaries.php?get_office_locations=1&office_id=${f.id}`);S.success&&S.data?.success&&Array.isArray(S.data.locations)&&(N=S.data.locations)}catch(S){console.error("Office locations fetch failed:",S)}N.length>0&&(H=N,localStorage.setItem(M,JSON.stringify({data:N,timestamp:Date.now()})),V(D.value))},V=(N="")=>{const S=H.filter(z=>z.location.toLowerCase().includes(N.toLowerCase())),R=N.trim();S.length>0?h.innerHTML=S.map(z=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${v.textCourseOpt} ${v.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${z.location}">
                                    <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${z.location}</span>
                                </div>
                            `).join(""):H.length===0?h.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${v.textLabel} animate-pulse">Fetching...</div>`:(h.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${v.textLabel} opacity-60">No matching locations.</div>
                                ${R?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${R}" as location
                                    </button>
                                </div>`:""}
                            `,R&&h.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{u.value=`${f.name} - ${R}`,p.classList.add("hidden"),u.dispatchEvent(new Event("change"))})),h.querySelectorAll(".location-option-edit").forEach(z=>{z.addEventListener("click",()=>{u.value=`${f.name} - ${z.dataset.location}`,p.classList.add("hidden"),u.dispatchEvent(new Event("change"))})})};V(D.value),J(),setTimeout(()=>D.focus(),50),D.addEventListener("input",()=>V(D.value)),D.addEventListener("click",N=>N.stopPropagation()),p.querySelector("#back-to-offices-edit").addEventListener("click",N=>{N.stopPropagation(),i("OFFICES")})}};u.addEventListener("focus",()=>{p.classList.remove("hidden"),i(k,B,u.value)}),u.addEventListener("input",()=>{k==="OFFICES"&&i("OFFICES",null,u.value)}),document.addEventListener("click",b=>{!u.contains(b.target)&&!p.contains(b.target)&&p.classList.add("hidden")})})();const O=s.querySelector("#edit-replacement-input"),_=s.querySelector("#edit-replacement-suggestions-box"),T=s.querySelector("#edit-replacement-loading");let G=null;O&&_&&(O.addEventListener("input",u=>{const p=u.target.value.trim();clearTimeout(G),_.classList.add("hidden"),!(p.length<2)&&(T&&T.classList.remove("hidden"),G=setTimeout(async()=>{try{const k=await ve(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(p)}&limit=10`);k.success&&k.data&&k.data.candidates&&k.data.candidates.length>0?(_.innerHTML=k.data.candidates.map(B=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${B.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${B.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${B.id}</span>
                                </button>
                            `).join(""),_.classList.remove("hidden")):(_.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',_.classList.remove("hidden"))}catch(k){console.error("Replacement fetch error:",k)}finally{T&&T.classList.add("hidden")}},400))}),_.addEventListener("click",u=>{const p=u.target.closest("button");p&&(O.value=p.dataset.name,_.classList.add("hidden"))}),document.addEventListener("click",u=>{!O.contains(u.target)&&!_.contains(u.target)&&_.classList.add("hidden")})),m.querySelectorAll("input, select, textarea").forEach(u=>{const p=(u.getAttribute("type")||"").toLowerCase(),k=!u.disabled&&!u.readOnly&&p!=="hidden";u.classList.remove("editable-indicator"),k&&u.classList.add("editable-indicator")}),m.addEventListener("submit",u=>{u.preventDefault();const p=new FormData(m),k={};p.forEach((B,$)=>k[$]=B),k.id=e.id,k.gip_id=k.gip_id||e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(k,!0,!1)&&(L(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),C.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function yt(){window.showAddDataModal=he,window.__maskDate=function(e){let r=e.replace(/\D/g,"").slice(0,8);return r.length>2&&r.length<=4?r=r.slice(0,2)+"/"+r.slice(2):r.length>4&&(r=r.slice(0,2)+"/"+r.slice(2,4)+"/"+r.slice(4)),r},window.__parseFormattedDate=function(e){if(!e)return null;const r=e.split("/");if(r.length===3){const n=parseInt(r[0])-1,a=parseInt(r[1]),o=parseInt(r[2]);if(o>1e3&&n>=0&&n<12&&a>0&&a<=31)return new Date(o,n,a)}return null},window.calculateAge=function(e){if(!e)return"";const r=e instanceof Date?e:new Date(e),n=new Date;let a=n.getFullYear()-r.getFullYear();const o=n.getMonth()-r.getMonth();return(o<0||o===0&&n.getDate()<r.getDate())&&a--,a>=0?a:0},window.viewBeneficiary=async function(e,r=0){const n=e?.id||e?.gip_id||null;if(!n)return;const a=!!(e?.name&&e?.office&&e?.remarks);let o={...e,id:n};if(!a){const x=await K(`api/beneficiaries.php?id=${encodeURIComponent(n)}`);x.success&&x.data?.success&&x.data?.beneficiary&&(o={...x.data.beneficiary,...o,id:n})}const t=`logs_cache_${n}`,g=window.__doleDB?.getSecureCache?await window.__doleDB.getSecureCache(t):null,s=!!g;o.arLogs=g?.arLogs||[],o.dtrLogs=g?.dtrLogs||[],o.docs=g?.docs||[],Ne(o,r);try{const[x,w,l,d]=await Promise.all([K(`api/logs.php?type=ar&gip_id=${encodeURIComponent(n)}`),K(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(n)}`),K(`api/logs.php?type=docs&gip_id=${encodeURIComponent(n)}`),K(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(n)}`)]),L=x.success&&x.data?.success?x.data.logs:[],m=w.success&&w.data?.success?w.data.logs:[],c=l.success&&l.data?.success?l.data.logs:[],A=d.success&&d.data?.success?d.data.logs:[];if(A.length>0){const j=A[0];o.absorbDate=j.absorption_datetime,o.absorb_where=j.where||j.absorb_where,o.absorb_position=j.position||j.absorb_position,o.absorb_agency=j.agency||j.absorb_agency}window.__doleDB?.setSecureCache&&await window.__doleDB.setSecureCache(t,{arLogs:L,dtrLogs:m,docs:c});const E=JSON.stringify({ar:g?.arLogs||[],dtr:g?.dtrLogs||[],docs:g?.docs||[]}),I=JSON.stringify({ar:L,dtr:m,docs:c});if(!s||E!==I){const j=document.getElementById("beneficiary-drawer-container");j&&j.dataset.beneficiaryId===String(n)&&(o.arLogs=L,o.dtrLogs=m,o.docs=c,Ne({...o,_noAnimation:!0},r))}}catch(x){console.error("Error fetching logs/docs:",x)}},window.showAddDataModal=function(e){he(e)},window.editBeneficiary=function(e){st(e)},window.showExportConfigModal=function(e){lt(e)},window.showProfileModal=function(){nt()}}async function nt(){try{if(xe()&&ce){let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=a.id)}catch{}if(!e)throw new Error("User not logged in");const{data:r,error:n}=await ce.from("users").select("*").eq("id",e).single();if(n)throw n;Oe(r)}else{let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=`?user_id=${a.id}`)}catch{}const n=await(await fetch(`${se()}api/profile.php${e}`)).json();if(n.success){const a=n.profile;Oe(a)}else C.fire({icon:"error",title:"Error",text:n.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function Oe(e){const r=e.profile_picture_path?`${se()}${e.profile_picture_path}`:null,n=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",a=`
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
                            ${r?`<img src="${r}" class="w-full h-full object-cover" />`:n}
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
    `;C.fire({html:a,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const t=o.querySelector("#profile-edit-form"),g=o.querySelector("#profile-pic-input"),s=o.querySelector("#profile-avatar-preview");g.addEventListener("change",x=>{const w=x.target.files[0];if(w){const l=new FileReader;l.onload=d=>{s.innerHTML=`<img src="${d.target.result}" class="w-full h-full object-cover" />`},l.readAsDataURL(w)}}),t.addEventListener("submit",async x=>{x.preventDefault();const w=new FormData(t);try{const l=JSON.parse(localStorage.getItem("user"));l&&l.id&&w.append("user_id",l.id)}catch{}try{const d=await(await fetch(`${se()}api/profile.php`,{method:"POST",body:w})).json();d.success?(d.profile&&(localStorage.setItem("user",JSON.stringify(d.profile)),it(d.profile)),C.close(),C.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):C.fire({icon:"error",title:"Update Failed",text:d.error||"Something went wrong"})}catch(l){console.error("Error saving profile:",l)}})}})}function it(e){const r=e.profile_picture_path?`${se()}${e.profile_picture_path}`:null,n=e.full_name?e.full_name.split(" ").map(g=>g[0]).join("").substring(0,2).toUpperCase():"US",a=document.querySelectorAll(".sidebar-user-name"),o=document.querySelectorAll(".sidebar-user-email"),t=document.querySelectorAll(".sidebar-user-avatar");a.forEach(g=>g.textContent=e.full_name),o.forEach(g=>g.textContent=e.email||"No email set"),t.forEach(g=>{r?g.innerHTML=`<img src="${r}" class="w-full h-full object-cover" />`:g.textContent=n}),localStorage.setItem("user_full_name",e.full_name),r&&localStorage.setItem("user_avatar",r)}function lt(e){const r=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",ageGroup:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","position","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},n=`
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
                                <input type="text" id="export-search" value="${r.search}" placeholder="Name or ID..." 
                                    class="w-full bg-white border border-gray-200 rounded-xl px-9 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Category</label>
                            <div class="relative group">
                                <select id="export-office" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${r.office==="ALL"?"selected":""}>ALL OFFICES</option>
                                    <!-- Options will be populated dynamically -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Sort Data By</label>
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

                    <!-- Location + Year row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Location</label>
                            <div class="relative group">
                                <select id="export-location" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed" ${r.office==="ALL"?"disabled":""}>
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
                                    <option value="ALL" ${(r.year||"ALL")==="ALL"?"selected":""}>ALL YEARS</option>
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
                                            <input type="radio" name="export-gender" value="${a}" ${r.gender===a?"checked":""} class="hidden peer">
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
                                        <input type="radio" name="export-section" value="${a.id}" ${r.section===a.id?"checked":""} class="hidden peer">
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
                                            <input type="radio" name="export-remarks" value="${a}" ${r.remarks===a?"checked":""} class="hidden peer">
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
                                            <input type="radio" name="export-age-group" value="${a}" ${r.ageGroup===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[0.5625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${o[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Prepared By (Signature)</label>
                            <input type="text" id="export-prepared" value="${r.preparedBy}" placeholder="Mary Joy Q. Nuñez" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Approved By (Signature)</label>
                            <input type="text" id="export-approved" value="${r.approvedBy}" placeholder="Noel B. Orias" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mt-4">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-golden-yellow rounded-full"></span>
                        <label class="text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Output Column Selection</label>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        ${["ID","Name","Age","Office","Position","Start Date","End Date","Status"].map(a=>{const o=a.toLowerCase().replace(" ",""),t=r.columns.includes(o),g=`col-switch-${o}`;return`
                                <label for="${g}" class="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${g}" name="export-column" value="${o}" ${t?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="text-[0.5625rem] font-black text-gray-600 uppercase tracking-tight group-hover:text-emerald-600">${a}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>

            </form>
        </div>
    `;C.fire({html:n,width:"680px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const o=a.querySelector("#export-config-form"),t=o.querySelector("#export-office"),g=o.querySelector("#export-location"),s=o.querySelector("#export-year");if(s&&window.getExportYears){const w=window.getExportYears(),l=r.year||"ALL";let d=`<option value="ALL" ${l==="ALL"?"selected":""}>ALL YEARS</option>`;w.forEach(L=>{d+=`<option value="${L}" ${l===L?"selected":""}>${L}</option>`}),s.innerHTML=d}const x=async(w,l)=>{if(g){if(!w){g.disabled=!0,g.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}g.disabled=!1,g.innerHTML='<option value="ALL">Loading...</option>';try{const d=await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${w}`),L=d.success&&d.data?.success&&Array.isArray(d.data.locations)?d.data.locations:[];let m='<option value="ALL">ALL LOCATIONS</option>';L.forEach(c=>{m+=`<option value="${c.location}" ${l===c.location?"selected":""}>${c.location}</option>`}),g.innerHTML=m}catch{g.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};t&&(async()=>{let w=[];try{const c=await window.apiGet("api/beneficiaries.php?get_offices_advanced=1");c.success&&c.data?.success&&Array.isArray(c.data.offices)&&(w=c.data.offices)}catch{}const l=r.office||"ALL";let d=`<option value="ALL" ${l==="ALL"?"selected":""}>ALL OFFICES</option>`;w.forEach(c=>{d+=`<option value="${c.office}" data-id="${c.id}" ${l===c.office?"selected":""}>${c.office}</option>`}),t.innerHTML=d;const m=t.options[t.selectedIndex]?.dataset?.id;m&&l!=="ALL"&&await x(m,r.location||"ALL"),t.addEventListener("change",async()=>{const c=t.options[t.selectedIndex];await x(c?.dataset?.id,"ALL")})})(),o.addEventListener("submit",w=>{w.preventDefault();const l=o.querySelectorAll('input[name="export-column"]:checked'),d=Array.from(l).map(re=>re.value),L=o.querySelector('input[name="export-gender"]:checked'),m=o.querySelector('input[name="export-section"]:checked'),c=o.querySelector('input[name="export-remarks"]:checked'),A=o.querySelector('input[name="export-age-group"]:checked'),E=o.querySelector("#export-prepared").value.trim(),I=o.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",E),localStorage.setItem("ldn_export_approved",I);const j={office:o.querySelector("#export-office").value,location:o.querySelector("#export-location")?.value||"ALL",year:o.querySelector("#export-year")?.value||"ALL",gender:L?L.value:r.gender||"ALL",remarks:c?c.value:r.remarks||"ALL",ageGroup:A?A.value:r.ageGroup||"ALL",search:o.querySelector("#export-search").value.trim().toLowerCase(),sort:o.querySelector("#export-sort").value,section:m?m.value:"ALL",preparedBy:E,approvedBy:I,columns:d};e(j),C.close(),setTimeout(()=>{C.fire({toast:!0,position:"top-end",icon:"success",title:"Generator pattern updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const Le=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],Pe=["Administrative Support (Records)","Office Clerk (Finance Section)","Data Encoder (TSSD/LIMS)","Messenger / Liaison Officer","Utility Worker (Maintenance)","Scanning & Digitization Officer","Filing Clerk (Administrative)","Receptionist / Front Desk","IT Technical Support Assist.","Project Monitoring Assist."],He=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function he(e=null){const r=!!e&&!e._isBulk,n=r?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",a=r?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=le(),t={borderBase:o?"border-slate-800":"border-gray-100/80",borderCard:o?"border-slate-800":"border-gray-100",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgCard:o?"bg-slate-900/40":"bg-gray-50/40",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgActionBar:o?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},g=`
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
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${n}" /></svg>
                        </div>
                        ${a}
                    </h3>
                    <p class="text-[0.625rem] ${t.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Enter the details of the GIP beneficiary below.</p>
                </div>
                ${!r&&!e?._isBulk?`
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3 py-2 ${t.bgCard} border ${t.borderCard} rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 w-full sm:w-auto sm:mr-4 focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[0.625rem] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                `:""}
            </div>

            <form id="add-beneficiary-form" class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-is-edit="${r}">
                <!-- LEFT COLUMN: Personal Info Card -->
                <div class="${t.bgCard} rounded-xl p-4 sm:p-5 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${t.dotGreen} rounded-full"></div>
                        <p class="text-[0.5625rem] uppercase font-black ${t.textSectionTitle} tracking-widest dark:text-white!">Personal & Educational Information</p>
                    </div>
                    
                    <div class="space-y-3.5">
                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Full Name (Last, First, MI) <span class="text-red-500">*</span></label>
                            <input type="text" name="name" id="name-input-field" value="${e?.name||""}" required class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder} dark:text-white!" placeholder="e.g. Dela Cruz, Juan M.">
                            <div id="duplicate-warning" class="hidden mt-1 text-[0.625rem] font-bold items-center gap-1.5 animate-pulse">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Beneficiary already exist</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Contact No.</label>
                                <input type="text" name="contact" value="${e?.contact||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder} font-mono" placeholder="09XX-XXX-XXXX">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Address</label>
                                <input type="text" name="address" value="${e?.address||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" placeholder="Barangay, City">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Birthday</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="birthday" value="${e?.birthday||""}" id="birthday-input" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Age</label>
                                <input type="text" name="age" value="${e?.age||""}" id="age-display" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-black ${t.textAge} outline-none font-mono focus:ring-4 ${t.focusGreen}" placeholder="Auto/Manual">
                                <div id="age-warning" class="hidden mt-1 text-[0.625rem] font-bold items-center gap-1.5 animate-pulse">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Age must be between 18 and 29 years old</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Gender</label>
                                <select name="gender" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="Male" ${e?.gender==="Male"?"selected":""}>Male</option>
                                    <option value="Female" ${e?.gender==="Female"?"selected":""}>Female</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Education</label>
                                <div class="relative" id="education-container">
                                    <input type="text" name="education" id="education-input" autocomplete="off"
                                        value="${e?.education||""}" 
                                        class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 pl-9 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" 
                                        placeholder="Course/Level...">
                                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                    </div>
                                    <div id="course-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${t.borderDivide} p-1.5">
                                        ${Le.map(s=>`
                                            <div class="course-option px-3 py-2 text-[0.625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${s.icon}
                                                <span class="option-text">${s.name}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t ${o?"border-slate-800/70":"border-gray-100"}">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" value="${e?.designatedBeneficiary||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${He.map(s=>`
                                        <option value="${s}" ${e?.relationshipToAssured===s?"selected":""}>${s}</option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="pt-1">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-1 h-5 bg-golden-yellow rounded-full"></div>
                            <p class="text-[0.5625rem] uppercase font-black ${t.textSectionTitle} tracking-widest">Contract Duration</p>
                        </div>
                        <div id="date-range-picker" class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1">Start Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="startDate" id="datepicker-range-start" value="${e?.startDate||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusYellow} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1">End Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="endDate" id="datepicker-range-end" value="${e?.endDate||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusRed} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: Work Details Card -->
                <div class="${t.bgCard} rounded-xl p-4 sm:p-5 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${t.dotBlue} rounded-full"></div>
                        <p class="text-[0.5625rem] uppercase font-black ${t.textSectionTitle} tracking-widest">Work & Administrative Data</p>
                    </div>
                    
                    <div class="space-y-3.5">
                         <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">ID Number</label>
                            <input type="text" name="gip_id" id="full-id-input" 
                                value="${e?.id||""}" 
                                class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.6875rem] font-black ${t.idText} font-mono outline-none focus:ring-4 ${t.focusBlue} transition-all uppercase" 
                                placeholder="ROX-RD-ESIG-2025-0001">
                            <input type="hidden" name="id" value="${e?.id||""}">
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">Assigned Office</label>
                                <div class="relative" id="office-container">
                                    <input type="text" name="office" id="office-input" autocomplete="off"
                                        value="${e?.office||""}" 
                                        class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}" 
                                        placeholder="e.g. DOLE Field Office">
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                    <div id="office-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${t.borderDivide} p-1.5">
                                        <!-- Will be populated by JS -->
                                        <div class="px-3 py-4 text-center text-[0.625rem] font-bold ${t.textLabel} animate-pulse">Loading offices...</div>
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">Series Number</label>
                                <input type="text" name="seriesNo" id="series-no-input" value="${e?.seriesNo||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-black ${o?"text-white":"text-royal-blue"} font-mono focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm" placeholder="2025-00-000">
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 tracking-widest ${o?"":"transition-colors"} ${o?"":"group-focus-within:text-royal-blue"}">Nature of Work</label>
                            <div class="relative" id="work-container">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-3.5 h-3.5 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <input type="text" name="designation" id="designation-input" autocomplete="off"
                                    value="${e?.designation||"N/A"}"
                                    class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}" 
                                    placeholder="N/A">
                                <div id="work-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${t.borderDivide} p-2 transform origin-top transition-all duration-200">
                                    <div class="px-2 py-1.5 mb-1.5 border-b ${t.borderSuggHead}">
                                        <p class="text-[0.5625rem] font-black ${t.textWorkSuggHead} uppercase tracking-widest">Quick Select Roles</p>
                                    </div>
                                    ${Pe.map(s=>`
                                        <div class="work-option px-3 py-2.5 text-[0.625rem] font-black ${t.textWorkOpt} ${t.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
                                            <div class="flex items-center gap-3">
                                                <div class="w-1.5 h-1.5 rounded-full ${t.workDot} transition-colors"></div>
                                                <span class="option-text">${s}</span>
                                            </div>
                                            <svg class="w-3 h-3 opacity-0 group-hover/opt:opacity-100 transition-opacity ${t.workArrow}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1">Replacement History (Optional)</label>
                            <input type="hidden" name="replacement" id="replacement-hidden" value="${e?.replacement||""}">
                            <div class="relative" id="replacement-container">
                                <input type="text" id="replacement-search-input" autocomplete="off"
                                    value="${e?.replacement||""}"
                                    class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.6875rem] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}"
                                    placeholder="Search beneficiary name...">
                                <div id="replacement-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${t.borderDivide} p-2"></div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-2">Employment Status Record</label>
                            <div class="flex flex-wrap gap-2 items-center">
                                <div class="flex flex-wrap gap-2 p-1.5 ${t.bgStatusWrap} border ${t.borderStatus} rounded-xl shadow-inner flex-1">
                                    ${(()=>{const s={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(x=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${x}" ${e?.remarks===x?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${s[x]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${x}
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
            <div class="mt-6 flex flex-wrap lg:justify-end items-center gap-3 pt-6 rounded-b-3xl ${t.bgActionBar} border-t ${t.actionBarBorder}">
                <button type="button" id="cancel-modal-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${t.bgCancelBtn} ${t.textCancel} font-black rounded-xl hover:bg-[#ce1126] hover:text-white transition-all duration-300 shadow-sm border ${t.cancelBorder} hover:border-[#ce1126] cursor-pointer text-[0.625rem] lg:text-[0.75rem] active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-1 lg:order-2">
                    <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span>CANCEL</span>
                </button>

                <button type="submit" form="add-beneficiary-form" id="submit-beneficiary-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${t.bgSaveBtn} text-white font-black rounded-xl transition-all duration-300 shadow-lg ${t.saveShadow} cursor-pointer text-[0.625rem] lg:text-[0.75rem] transform active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-2 lg:order-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                    <span>${r?"UPDATE RECORD":"SAVE RECORD"}</span>
                </button>
            </div>
        </div>
    `;C.fire({html:g,width:window.innerWidth<640?"96vw":window.innerWidth<1024?"90vw":"1120px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"0.75rem":window.innerWidth<1024?"1.25rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:s=>{window.initFlowbite&&window.initFlowbite();const x=s.querySelector("#cancel-modal-btn");x&&x.addEventListener("click",()=>{!r&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),C.close(),e?._isBulk&&$e.onCancel()});const w=s.querySelector("#bulk-add-btn");w&&w.addEventListener("click",()=>{C.close(),$e.init()});const l=(i,b)=>{i.addEventListener("paste",f=>{f.preventDefault();let y=(f.clipboardData||window.clipboardData).getData("text");if(y){y=y.replace(/[-.\s]/g,"/");const h=y.split("/");if(h.length===3){const D=h[0].padStart(2,"0"),M=h[1].padStart(2,"0");let H=h[2];if(H.length===2){const S=new Date().getFullYear(),R=Math.floor(S/100)*100;H=String(R+parseInt(H))}else H=H.padStart(4,"0");const F=`${D}/${M}/${H}`;i.value=F;const J=new Event("input",{bubbles:!0});i.dispatchEvent(J);const V=window.__parseFormattedDate(F);V&&b&&(b(V),document.activeElement===i&&i.blur());const N=i._datepicker||i.parentNode&&i.parentNode._datepicker;N&&typeof N.hide=="function"&&N.hide()}}}),i.addEventListener("input",f=>{const y=window.__maskDate(f.target.value);if(f.target.value!==y&&(f.target.value=y),y.length===10){const h=window.__parseFormattedDate(y);if(h&&b){b(h),document.activeElement===i&&i.blur();const D=i._datepicker||i.parentNode&&i.parentNode._datepicker;D&&typeof D.hide=="function"&&D.hide()}}}),i.addEventListener("changeDate",f=>{if(f.detail&&f.detail.date&&b){b(f.detail.date);const y=i._datepicker||i.parentNode&&i.parentNode._datepicker;y&&typeof y.hide=="function"&&y.hide()}})},d=s.querySelector("#birthday-input"),L=s.querySelector("#age-display"),m=s.querySelector("#age-warning"),c=s.querySelector("#submit-beneficiary-btn"),A=i=>{if(!i)return m&&m.classList.add("hidden"),c&&(c.disabled=!1,c.classList.remove("opacity-50","cursor-not-allowed","grayscale"),c.classList.add("cursor-pointer")),!0;const b=parseInt(i),f=!isNaN(b)&&b>=18&&b<=29;return m&&(m.className=`mt-1 text-[0.625rem] font-bold ${f?"hidden":"flex"} items-center gap-1.5 animate-pulse ${le()?"text-red-400":"text-red-600"}`),c&&(f?(c.disabled=!1,c.classList.remove("opacity-50","cursor-not-allowed","grayscale"),c.classList.add("cursor-pointer","active:scale-[0.98]")):(c.disabled=!0,c.classList.add("opacity-50","cursor-not-allowed","grayscale"),c.classList.remove("cursor-pointer","active:scale-[0.98]"))),f};if(L&&(L.addEventListener("input",i=>{A(i.target.value)}),L.value&&A(L.value)),d){l(d,b=>{L&&(L.value=window.calculateAge(b),A(L.value),L.classList.add("animate-pulse"),setTimeout(()=>L.classList.remove("animate-pulse"),400))});const i=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);i&&(d._datepicker=new i(d,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const E=s.querySelector("#name-input-field"),I=s.querySelector("#duplicate-warning");if(E&&I){let i;const b=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},f=(h,D="")=>{I.className=`mt-1 text-[0.625rem] font-bold ${h?"flex":"hidden"} items-center gap-1.5 animate-pulse ${le()?"text-red-400":"text-red-600"}`;const M=I.querySelector("span");M&&(M.textContent=D?`Beneficiary already exists: ${D}`:"Beneficiary already exists")},y=async h=>{const D=b(),M=await fetch(`${se()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...D?{"X-User-Id":String(D)}:{}},body:JSON.stringify({name:h,user_id:D,exclude_id:r?e?.id:null})});if(!M.ok)throw new Error(`Duplicate check failed (${M.status})`);return M.json()};E.addEventListener("input",h=>{const D=h.target.value.trim();if(clearTimeout(i),D.length<3){f(!1);return}i=setTimeout(async()=>{try{const M=await y(D);M.success&&M.exists?f(!0,M.match||M.name):f(!1)}catch(M){console.error("Duplicate check error:",M)}},500)}),e?.name&&(f(!1),(async()=>{const h=await y(e.name);h.success&&h.exists&&f(!0,h.match||h.name)})())}const j=s.querySelector("#full-id-input"),re=s.querySelector("#series-no-input"),X=s.querySelector('input[name="startDate"]'),U=s.querySelector('input[name="endDate"]'),ne=s.querySelectorAll('input[name="remarks"]'),ae=s.querySelector("#extension-log-container"),ie=async i=>{if(!i)return;const b=[j,re].filter(Boolean);b.forEach(f=>{f.classList.add("animate-pulse"),f.placeholder="Syncing..."});try{const[f,y]=await Promise.all([K(`api/beneficiaries.php?next_id&year=${encodeURIComponent(i)}`),K(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(i)}`)]),h=f.success&&f.data?.success?f.data.nextId:null,D=y.success&&y.data?.success?y.data.nextSeries:null;h&&j&&(j.value=h),D&&re&&(re.value=D)}catch(f){console.error("ID Sync error:",f)}finally{b.forEach(f=>f.classList.remove("animate-pulse"))}},Q=s.querySelector("#replacement-search-input"),de=s.querySelector("#replacement-hidden"),ee=s.querySelector("#replacement-suggestions"),ue=i=>{const b=(i.name||"").toUpperCase().trim(),f=i.startDateFormatted||i.startDate||"N/A",y=i.endDateFormatted||i.endDate||"N/A";return`${b} (${f.toUpperCase()} - ${y.toUpperCase()})`},pe=i=>{if(ee){if(!i.length){ee.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${t.textCourseOpt}">No matching beneficiary found.</div>`,ee.classList.remove("hidden");return}ee.innerHTML=i.map(b=>{const f=ue(b);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${f.replace(/"/g,"&quot;")}">
                            ${f}
                        </button>
                    `}).join(""),ee.classList.remove("hidden"),ee.querySelectorAll(".replacement-option").forEach(b=>{b.addEventListener("click",()=>{const f=b.getAttribute("data-replacement")||"";Q&&(Q.value=f),de&&(de.value=f),ee.classList.add("hidden")})})}};let be=null;const O=async(i="")=>{const b=(i||"").trim(),f=`api/beneficiaries.php?replacement_candidates=1&limit=20${b?`&q=${encodeURIComponent(b)}`:""}`,y=await K(f);y.success&&y.data?.success&&Array.isArray(y.data.candidates)&&pe(y.data.candidates)};Q&&de&&ee&&(Q.addEventListener("focus",()=>{O(Q.value||"")}),Q.addEventListener("input",()=>{de.value=Q.value.trim(),clearTimeout(be),be=setTimeout(()=>{O(Q.value||"")},250)}),document.addEventListener("click",i=>{Q&&ee&&!Q.contains(i.target)&&!ee.contains(i.target)&&ee.classList.add("hidden")}));const _=()=>{const i=s.querySelector('input[name="remarks"]:checked');return i?i.value:"ONGOING"},T=i=>{const b=s.querySelector(`input[name="remarks"][value="${i}"]`);b&&(b.checked=!0,u())},G=()=>{if(U&&U.value){const i=window.__parseFormattedDate(U.value);if(!i)return;const b=new Date;b.setHours(0,0,0,0);let f="ONGOING";i<b&&(f="EXPIRED"),T(f)}},u=()=>{if(!ae)return;const i=_();if(i==="ABSORBED"){const b=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,f=b.getTimezoneOffset()*6e4,y=new Date(b.getTime()-f).toISOString().slice(0,16);ae.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${y}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                    `}else if(i==="RESIGNED"){const b=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,f=b.getTimezoneOffset()*6e4,y=new Date(b.getTime()-f).toISOString().slice(0,16);ae.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${y}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ae.innerHTML=""};if(X){let i=null;l(X,h=>{const D=h.getFullYear();if(U){const M=new Date(h);M.setDate(M.getDate()+243);const H=String(M.getMonth()+1).padStart(2,"0"),F=String(M.getDate()).padStart(2,"0"),J=M.getFullYear();U.value=`${H}/${F}/${J}`}G(),D>1900&&D!==i&&(i=D,ie(D))}),U&&l(U,()=>G());const b=s.querySelector("#date-range-picker"),f=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),y=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(f&&b&&X&&U){const h=new f(b,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});X._datepicker=h.datepickers?.[0]||null,U._datepicker=h.datepickers?.[1]||null}else y&&(X&&(X._datepicker=new y(X,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),U&&(U._datepicker=new y(U,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!r){const h=new Date().getFullYear();ie(h)}}ne.forEach(i=>i.addEventListener("change",u));const p=s.querySelector("#resign-btn"),k=s.querySelector("#absorb-btn");p&&p.addEventListener("click",()=>T("RESIGNED")),k&&k.addEventListener("click",()=>T("ABSORBED")),s.querySelectorAll('input[type="text"], textarea').forEach(i=>{["id-number-input","full-id-input"].includes(i.id)||i.addEventListener("input",()=>{const b=i.selectionStart,f=i.selectionEnd;i.value=i.value.toUpperCase(),i.setSelectionRange(b,f)})}),G(),u(),$("education-input","course-suggestions","course-option"),$("designation-input","work-suggestions","work-option"),(()=>{const i=s.querySelector("#office-input"),b=s.querySelector("#office-suggestions");if(!i||!b)return;let f="OFFICES",y=null,h=[];const D=async()=>{const H="dole_offices_cache",F=async()=>{let V=[];try{if(ce&&xe()){const[{data:N,error:S},{data:R}]=await Promise.all([ce.from("offices").select("*").order("office"),ce.from("office_locations").select("office_id")]);if(!S&&N?.length){const z={};R&&R.forEach(Z=>{z[Z.office_id]=(z[Z.office_id]||0)+1}),V=N.map(Z=>({id:Z.id??Z.office_id,office:Z.office||Z.office_name||"",location_count:z[Z.id??Z.office_id]||0})).filter(Z=>Z.office)}}}catch{}if(!V.length)try{const N=await K("api/beneficiaries.php?get_offices_advanced=1");N.success&&N.data?.success&&Array.isArray(N.data.offices)&&(V=N.data.offices)}catch(N){console.error("Office fetch failed:",N)}return V.length>0&&(h=V,localStorage.setItem(H,JSON.stringify({data:V,timestamp:Date.now()}))),V},J=localStorage.getItem(H);if(J)try{const{data:V,timestamp:N}=JSON.parse(J);return h=V,Date.now()-N>300*1e3&&F().then(()=>{f==="OFFICES"&&M("OFFICES",y,i.value)}),V}catch{localStorage.removeItem(H)}return h.length===0?await F():h},M=async(H="OFFICES",F=null,J="")=>{if(f=H,y=F,H==="OFFICES"){const N=(await D()).filter(P=>P.office.toLowerCase().includes(J.toLowerCase()));b.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${t.textLabel} opacity-70 border-b ${t.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${N.length>0?N.map(P=>{const W=parseInt(P.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-lg ${W?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
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
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${t.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${J.trim()?`
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${t.textLabel} opacity-50 px-1">New office: "${J.trim()}"</div>
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
                        `;const S=J.trim(),R=b.querySelector("#add-office-location-row-modal"),z=b.querySelector("#new-office-loc-input-modal"),Z=b.querySelector("#confirm-office-with-loc-modal"),te=b.querySelector("#add-office-with-loc-btn-modal"),Y=b.querySelector("#skip-office-loc-btn-modal");if(te&&R&&te.addEventListener("click",P=>{P.stopPropagation(),R.classList.remove("hidden"),R.classList.add("flex"),setTimeout(()=>z?.focus(),50)}),Z&&z){const P=W=>{W.stopPropagation();const oe=z.value.trim();i.value=oe?`${S} - ${oe}`:S,i.dataset.locationName=oe||"",b.classList.add("hidden"),i.dispatchEvent(new Event("change"))};Z.addEventListener("click",P),z.addEventListener("keydown",W=>{W.key==="Enter"&&P(W)}),z.addEventListener("click",W=>W.stopPropagation())}Y&&Y.addEventListener("click",P=>{P.stopPropagation(),i.value=S,i.dataset.locationName="",b.classList.add("hidden"),i.dispatchEvent(new Event("change"))}),b.querySelectorAll(".office-code-option").forEach(P=>{P.addEventListener("click",W=>{W.stopPropagation(),P.dataset.hasLocations==="true"?M("LOCATIONS",{id:P.dataset.id,name:P.dataset.name}):(i.value=P.dataset.name,i.dataset.officeId=P.dataset.id,delete i.dataset.locationName,b.classList.add("hidden"),i.dispatchEvent(new Event("change")))})})}else{b.innerHTML=`
                            <div class="flex items-center justify-between px-3 py-2 border-b ${t.borderDivide} bg-slate-50/95 dark:bg-slate-800/95 sticky top-0 backdrop-blur-sm z-10 rounded-t-xl">
                                <div class="flex items-center gap-2">
                                    <div class="p-1 rounded-md bg-green-500/10 text-green-600 dark:text-green-400">
                                        <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${t.textLabel} opacity-70">OFFICE LOCATION</div>
                                </div>
                                <button type="button" id="back-to-offices" class="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                                </button>
                            </div>
                            
                            <div class="p-2 border-b ${t.borderDivide}">
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                    </div>
                                    <input type="text" id="location-search-internal" placeholder="Search in ${F.name}..." 
                                        class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-900/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                        value="${J.includes(" - ")?J.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${t.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const V=b.querySelector("#locations-list-container"),N=b.querySelector("#location-search-internal"),S=`dole_locs_cache_${F.id}`;let R=[];const z=localStorage.getItem(S);if(z)try{const{data:Y,timestamp:P}=JSON.parse(z);R=Y}catch{localStorage.removeItem(S)}const Z=async()=>{let Y=[];if(ce&&xe()){const{data:P,error:W}=await ce.from("office_locations").select("location").eq("office_id",F.id).order("location");!W&&P&&(Y=P)}if(Y.length===0)try{const P=await K(`api/beneficiaries.php?get_office_locations=1&office_id=${F.id}`);P.success&&P.data?.success&&Array.isArray(P.data.locations)&&(Y=P.data.locations)}catch(P){console.error("Office locations fetch failed:",P)}Y.length>0&&(R=Y,localStorage.setItem(S,JSON.stringify({data:Y,timestamp:Date.now()})),te(N.value))},te=(Y="")=>{const P=R.filter(oe=>oe.location.toLowerCase().includes(Y.toLowerCase())),W=Y.trim();P.length>0?V.innerHTML=P.map(oe=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${oe.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${oe.location}</span>
                                    </div>
                                `).join(""):R.length===0?V.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${t.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(V.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${t.textLabel} opacity-60">No matching locations.</div>
                                    ${W?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${W}" as location
                                        </button>
                                    </div>`:""}
                                `,W&&V.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{i.value=`${F.name} - ${W}`,i.dataset.officeId=F.id,i.dataset.locationName=W,b.classList.add("hidden"),i.dispatchEvent(new Event("change"))})),V.querySelectorAll(".location-option").forEach(oe=>{oe.addEventListener("click",dt=>{const Ce=oe.dataset.location;i.value=`${F.name} - ${Ce}`,i.dataset.officeId=F.id,i.dataset.locationName=Ce,b.classList.add("hidden"),i.dispatchEvent(new Event("change"))})})};te(N.value),Z(),setTimeout(()=>N.focus(),50),N.addEventListener("input",()=>te(N.value)),N.addEventListener("click",Y=>Y.stopPropagation()),b.querySelector("#back-to-offices").addEventListener("click",Y=>{Y.stopPropagation(),M("OFFICES")})}};i.addEventListener("focus",()=>{b.classList.remove("hidden"),M(f,y,i.value)}),i.addEventListener("input",()=>{delete i.dataset.officeId,delete i.dataset.locationName,f="OFFICES",y=null,b.classList.remove("hidden"),M("OFFICES",null,i.value)}),document.addEventListener("click",H=>{!i.contains(H.target)&&!b.contains(H.target)&&(b.classList.add("hidden"),i.value||(f="OFFICES",y=null))})})();function $(i,b,f){const y=s.querySelector(`#${i}`),h=s.querySelector(`#${b}`);if(!y||!h)return;let D=!1;y.addEventListener("focus",()=>h.classList.remove("hidden")),document.addEventListener("click",M=>{!y.contains(M.target)&&!h.contains(M.target)&&h.classList.add("hidden")}),y.addEventListener("input",()=>{if(D){D=!1;return}const M=y.value.toLowerCase(),H=h.querySelectorAll(`.${f}`);let F=!1;H.forEach(J=>{const V=J.querySelector(".option-text");(V?V.innerText:J.innerText).toLowerCase().includes(M)?(J.style.display="block",F=!0):J.style.display="none"}),F?h.classList.remove("hidden"):h.classList.add("hidden")}),h.addEventListener("click",M=>{const H=M.target.closest(`.${f}`);if(!H)return;const F=H.querySelector(".option-text");y.value=F?F.innerText.trim():H.innerText.trim(),D=!0,h.classList.add("hidden"),y.dispatchEvent(new Event("change"))})}const v=s.querySelector("#add-beneficiary-form"),q="add_beneficiary_draft";if(!r){const i=localStorage.getItem(q);if(i)try{const b=JSON.parse(i);Object.entries(b).forEach(([f,y])=>{const h=v.elements[f];h&&h.type!=="file"&&h.type!=="hidden"&&(h.value=y)})}catch(b){console.error("Error loading draft",b)}}v.addEventListener("input",i=>{if(!r){const b=new FormData(v),f={};b.forEach((y,h)=>f[h]=y),localStorage.setItem(q,JSON.stringify(f))}}),v&&v.addEventListener("submit",i=>{i.preventDefault(),v.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(Z=>{Z.classList.remove("ring-2","ring-red-500","!border-red-500")});const f=new FormData(v);let y=!1;const h=Z=>{const te=v.querySelector(`[name="${Z}"]`);te&&te.classList.add("ring-2","ring-red-500","!border-red-500"),y=!0},D=f.get("name"),M=f.get("contact"),H=f.get("startDate"),F=f.get("endDate"),J=(f.get("designation")||"").trim();(!D||D.trim()===""||/[0-9]/.test(D))&&h("name"),M&&M.trim()!==""&&/[^0-9]/.test(M.replace(/[\s\-\+\(\)]/g,""))&&h("contact"),H||h("startDate"),F||h("endDate");const V=f.get("age"),N=parseInt(V);if((!V||isNaN(N)||N<18||N>29)&&(y=!0,m&&(m.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof le=="function"&&le()?"text-red-400":"text-red-600"}`),c&&(c.disabled=!0,c.classList.add("opacity-50","cursor-not-allowed","grayscale"),c.classList.remove("cursor-pointer","active:scale-[0.98]"))),y)return;const S={};f.forEach((Z,te)=>{if(["birthday","startDate","endDate"].includes(te)){const Y=window.__parseFormattedDate(Z);if(Y){const P=Y.getFullYear(),W=String(Y.getMonth()+1).padStart(2,"0"),oe=String(Y.getDate()).padStart(2,"0");S[te]=`${P}-${W}-${oe}`}else S[te]=Z}else S[te]=Z}),J||(S.designation="N/A"),S.replacement||(S.replacement="");const R=s.querySelector("#office-input");R?.dataset.officeId&&(S.officeId=R.dataset.officeId),R?.dataset.locationName&&(S.locationName=R.dataset.locationName);const z=s.querySelector("#full-id-input")?.value;r?(S.id=e?.id,z&&(S.gip_id=z)):(S.id=null,z&&(S.gip_id=z)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(S)){if(!r){const te="add_beneficiary_draft",Y=v.querySelector('[name="office"]')?.value||"",P=v.querySelector('[name="designation"]')?.value||"",W=v.querySelector('[name="education"]')?.value||"";localStorage.setItem(te,JSON.stringify({office:Y,designation:P,education:W}))}C.close(),setTimeout(()=>{C.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${r?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!r&&e?._isBulk&&$e.onSaveSuccess()},100)}else C.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const r=e.target,n=r.querySelector('button[type="submit"]'),a=n.innerHTML;n.disabled=!0,n.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(r);if((await fetch(r.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)C.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:g=>{g.addEventListener("mouseenter",C.stopTimer),g.addEventListener("mouseleave",C.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),r.reset();else throw new Error("Failed to send")}catch{C.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{n.disabled=!1,n.innerHTML=a}return!1};export{Te as _,K as a,ve as b,xt as c,mt as d,vt as e,pt as f,se as g,wt as h,xe as i,gt as j,bt as k,ge as l,ft as m,yt as n,ht as r,ce as s,it as u};
