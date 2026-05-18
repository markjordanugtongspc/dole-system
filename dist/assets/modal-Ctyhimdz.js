const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-B7rSfpuT.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import E from"./vendor-swal-BSk0fVSb.js";import{a as Fe}from"./vendor-DHtNC8Ux.js";const He="true".toLowerCase()==="true";function ke(){return He}function ee(){const e=window.location.pathname,r="/dole-system/",n=e.toLowerCase().indexOf(r.toLowerCase());if(n!==-1)return e.substring(0,n+r.length);const a=e.indexOf("/frontend/");if(a!==-1)return e.substring(0,a+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function Ce(e="Incorrect Username or Password"){E.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function qe(e=!1){return E.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function pt(){const e=localStorage.getItem("hasVisitedBefore"),r=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),r&&(r.style.display="none")),window.addEventListener("load",()=>{const n=document.querySelector("body > *:not(.page-loader)");n&&n.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),r&&r.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const me={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const r=o=>o.split("").map(t=>t.charCodeAt(0)),n=o=>("0"+Number(o).toString(16)).substr(-2),a=o=>r(this._key).reduce((t,u)=>t^u,o);return e.split("").map(r).map(a).map(n).join("")}catch(r){return console.error("Encryption Failed",r),null}},decrypt:function(e){try{const r=a=>a.split("").map(o=>o.charCodeAt(0)),n=a=>r(this._key).reduce((o,t)=>o^t,a);return e.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(n).map(a=>String.fromCharCode(a)).join("")}catch(r){return console.error("Decryption Failed",r),null}}};function ut(){document.querySelectorAll(".login-form-shared").forEach(r=>{const n=r.querySelector('input[name="username"]'),a=r.querySelector('input[name="password"]'),o=r.querySelector('input[name="rememberMe"]');if(n&&a&&o){const t=localStorage.getItem("secure_user"),u=localStorage.getItem("secure_pass");if(t&&u){const s=me.decrypt(t),f=me.decrypt(u);s&&f&&(n.value=s,a.value=f,o.checked=!0)}}r.addEventListener("submit",async t=>{t.preventDefault();try{const s=await(await fetch(`${ee()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.value,password:a.value})})).json();if(s.success){o.checked?(localStorage.setItem("secure_user",me.encrypt(n.value)),localStorage.setItem("secure_pass",me.encrypt(a.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const f=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(s.user));const m=document.getElementById("drawer-login");if(m){m.classList.add("translate-y-full");const i=m.querySelector("[data-drawer-hide]");i&&i.click()}await qe(f),Ve(f)}else{const f=document.getElementById("drawer-login");f?(f.classList.add("translate-y-full"),setTimeout(()=>{Ce(),setTimeout(()=>{f.classList.remove("translate-y-full"),a.value="",a.focus()},600)},400)):(Ce(),a.value="",a.focus())}}catch(u){console.error("Login Error:",u),E.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Ve(e=!1){const r=document.getElementById("left-panel"),n=document.getElementById("right-panel"),a=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");a&&(a.style.opacity="0"),o&&(o.style.opacity="0");const t=document.createElement("div");t.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const u=e?"":"animate__delay-1s",s=e?"animation-duration: 0.8s;":"animation-duration: 2s;";t.innerHTML=`
        <img src="${ee()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${u}" style="${s}" alt="DOLE Logo">
    `,document.body.appendChild(t);const f=e?0:1e3,m=e?600:1500;setTimeout(()=>{r&&r.classList.add("animate-slide-left"),n&&n.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${ee()}frontend/dashboard/`},m)},f)}function gt(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${ee()}`})}function bt(){const e=document.getElementById("mobile-splash"),r=document.getElementById("show-login-btn"),n=document.getElementById("back-to-splash"),a=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),t=document.getElementById("reopen-login-drawer"),u=document.getElementById("request-notifications-btn"),s=async()=>{if("Notification"in window){const b=await Notification.requestPermission();console.log("Notification permission:",b),b==="granted"&&u&&u.classList.add("hidden")}};Notification.permission==="default"&&u&&(u.classList.remove("hidden"),u.addEventListener("click",s));const f=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&s();const b=document.getElementById("drawer-login");b&&b.classList.remove("translate-y-full")},800))},m=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};r&&r.addEventListener("click",f),document.querySelectorAll(".forgot-password-link").forEach(b=>{b.addEventListener("click",L=>{L.target.closest("#mobile-splash")&&f()})}),n&&n.addEventListener("click",()=>{const b=document.getElementById("drawer-login");if(b){b.classList.add("translate-y-full");const L=b.querySelector("[data-drawer-hide]");L&&L.click()}m()});const d=document.getElementById("drawer-login"),B=document.getElementById("curved-welcome"),x=document.getElementById("peoples-bg");d&&new MutationObserver(L=>{L.forEach(k=>{k.attributeName==="class"&&(d.classList.contains("translate-y-full")?(a&&(a.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),B&&(B.style.opacity="0",B.style.transform="scale(0.5)"),t&&e&&e.style.visibility==="hidden"&&(t.style.opacity="1",t.style.transform="scale(1)"),x&&(x.classList.add("opacity-0","scale-0"),x.classList.remove("opacity-40","scale-[1.6]"))):(a&&(a.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),B&&(B.style.opacity="1",B.style.transform="scale(1)"),t&&(t.style.opacity="0",t.style.transform="scale(0)"),x&&(x.classList.remove("opacity-0","scale-0"),x.classList.add("opacity-40","scale-[1.6]"))))})}).observe(d,{attributes:!0})}const fe=()=>"false".toLowerCase()==="true";function Ue(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const pe={debug(...e){fe()&&console.debug(...e)},info(...e){fe()&&console.info(...e)},warn(...e){fe()&&console.warn(...e)},error(...e){console.error(...e)},table(e){fe()&&console.table(e)},json(e,r){fe()&&console.debug(e,Ue(r))}},ve=new Map;async function xe(e,r={}){const a=`${ee()}${e}`;let o=null;try{const i=JSON.parse(localStorage.getItem("user"));i&&(o=i.user_id||i.id||null)}catch{}const t={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...r.headers},...r},s=(t.method||"GET").toUpperCase()==="GET"?2:1;let f=null;for(let i=1;i<=s;i++)try{if(pe.debug("[API] Request",{url:a,method:t.method||"GET",hasUserId:!!o}),t.body)try{pe.json("[API] Payload",JSON.parse(t.body))}catch{pe.debug("[API] Payload (raw)",t.body)}const d=await fetch(a,t);if(!d.ok)throw new Error(`HTTP ${d.status}: ${d.statusText}`);const B=await d.json();return ve.has(a)&&(ve.delete(a),pe.info?.("[API] Recovered",{url:a})),pe.debug("[API] Response",{url:a,ok:!0}),{success:!0,data:B}}catch(d){if(f=d,d instanceof TypeError&&/fetch/i.test(d.message||"")&&i<s){await new Promise(b=>setTimeout(b,1200));continue}}return f instanceof TypeError&&/fetch/i.test(f.message||"")?ve.get(a)||(ve.set(a,!0),pe.error("API Request Network Error (suppressed for repeats):",{url:a,message:f.message})):pe.error("API Request Error:",f),{success:!1,error:f?.message||"Unknown request error"}}async function J(e){return xe(e,{method:"GET"})}async function $e(e,r){return xe(e,{method:"POST",body:JSON.stringify(r)})}async function Ge(e,r){return xe(e,{method:"PUT",body:JSON.stringify(r)})}async function ft(e,r){const n=new URLSearchParams(r).toString();return xe(`${e}?${n}`,{method:"PATCH"})}class ze{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(r,n,a=1e4){this.stop(r),n();const o=setInterval(async()=>{this.isPageVisible&&await n()},a);this.intervals.set(r,o),console.log(`[Polling] Started: ${r} (every ${a}ms)`)}stop(r){this.intervals.has(r)&&(clearInterval(this.intervals.get(r)),this.intervals.delete(r),console.log(`[Polling] Stopped: ${r}`))}stopAll(){this.intervals.forEach((r,n)=>this.stop(n)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const Ye=new ze;function ht(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function xt(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{Ye.stopAll()});const Ze="modulepreload",Je=function(e,r){return new URL(e,r).href},Le={},Oe=function(r,n,a){let o=Promise.resolve();if(n&&n.length>0){let m=function(i){return Promise.all(i.map(d=>Promise.resolve(d).then(B=>({status:"fulfilled",value:B}),B=>({status:"rejected",reason:B}))))};const u=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),f=s?.nonce||s?.getAttribute("nonce");o=m(n.map(i=>{if(i=Je(i,a),i in Le)return;Le[i]=!0;const d=i.endsWith(".css"),B=d?'[rel="stylesheet"]':"";if(a)for(let b=u.length-1;b>=0;b--){const L=u[b];if(L.href===i&&(!d||L.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${B}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":Ze,d||(x.as="script"),x.crossOrigin="",x.href=i,f&&x.setAttribute("nonce",f),document.head.appendChild(x),d)return new Promise((b,L)=>{x.addEventListener("load",b),x.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(u){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=u,window.dispatchEvent(s),!s.defaultPrevented)throw u}return o.then(u=>{for(const s of u||[])s.status==="rejected"&&t(s.reason);return r().catch(t)})};let ue=null;if(ke()){const e="https://llnddycvbcetztzwbdpx.supabase.co",r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{ue=Fe(e,r),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(n){console.error("[SUPABASE SDK] Failed to initialize client:",n)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");function We(e=new Date().getFullYear()){const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],n=[];for(let a=0;a<12;a++){const o=new Date(e,a+1,0).getDate();n.push(`${r[a]} 1-15, ${e}`),n.push(`${r[a]} 16-${o}, ${e}`)}return n}function Xe(e,r,n){if(n==="ar")return(e.period||"").toUpperCase().trim()===r.toUpperCase().trim();{const a=r.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!a)return!1;const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(a[1].toUpperCase());if(t===-1)return!1;const u=parseInt(a[4]),s=parseInt(a[2]),f=parseInt(a[3]),m=(e.date||"").substring(0,10),i=new Date(m+"T00:00:00");return isNaN(i)?!1:i.getFullYear()===u&&i.getMonth()===t&&i.getDate()>=s&&i.getDate()<=f}}function Ke(e){if(!e)return"-";const r=e.toUpperCase();return r==="VERIFIED"||r==="COMPLETED"?"✓":r==="REJECTED"||r==="DECLINED"?"X":r==="PENDING"?"?":r}function De(e,r,n,a){const o=e.map(t=>{const u=r[t.id]||[],s=a.map(f=>{const m=u.find(i=>Xe(i,f,n));return m?Ke(m.status):"-"});return{name:t.name||t.id,cells:s}});return{periods:a,rows:o}}function Ie(e,r,n){const{periods:a,rows:o}=r,t=a.length+1;let u='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return u+=`<tr><td colspan="${t}" style="background:${n};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,u+=`<tr><th style="background:${n};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,a.forEach(s=>{u+=`<th style="background:${n};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${s}</th>`}),u+="</tr>",o.forEach((s,f)=>{const m=f%2===0?"#ffffff":"#f5f5f5";u+="<tr>",u+=`<td style="background:${m};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${s.name}</td>`,s.cells.forEach(i=>{u+=`<td style="background:${m};padding:5px 8px;text-align:center;font-weight:bold;color:${i==="✓"?"#15803d":i==="X"?"#dc2626":"#9ca3af"};">${i}</td>`}),u+="</tr>"}),u+="</table>",u}async function mt(e){const r="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[10px] gap-1.5",n=e.length,a=await E.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
            <div class="font-montserrat text-left">
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ps-1">
                    Configure and export logs for <span class="text-royal-blue font-black">${n} beneficiaries</span>
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
                    <input type="number" id="exp-custom-count" min="1" max="${n}" value="${n}"
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(f=>{f.addEventListener("change",()=>{const m=document.getElementById("custom-count-wrap");m.classList.toggle("hidden",f.value!=="custom"||!f.checked);const i=document.querySelector('input[name="exp-count"]:checked');m.classList.toggle("hidden",i?.value!=="custom")})})},preConfirm:()=>{const f=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",m=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let i=parseInt(m==="custom"?document.getElementById("exp-custom-count")?.value||n:m,10);(isNaN(i)||i<1)&&(i=10),i=Math.min(i,n);const d=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:f,count:i,year:d}}});if(!a.isConfirmed||!a.value)return;const{type:o,count:t,year:u}=a.value,s=e.slice(0,t);await Ne(s,o,u)}async function Ne(e,r,n){E.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const a=We(n),o=ee();async function t(L){const D=await(await fetch(`${o}api/logs.php?type=${L}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return D.success?D.logs||[]:[]}let u={},s={};(r==="dtr"||r==="both")&&(await t("dtr")).forEach(k=>{const D=String(k.gip_id||k.beneficiary_id||k.id||"");u[D]||(u[D]=[]),u[D].push(k)}),(r==="ar"||r==="both")&&(await t("ar")).forEach(k=>{const D=String(k.gip_id||k.beneficiary_id||k.id||"");s[D]||(s[D]=[]),s[D].push(k)});const f=e.map(L=>({...L,mapKey:String(L.id||L.gip_id||L.beneficiary_id)}));let m="";const i=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(r==="dtr"||r==="both"){const L=f.map(D=>({...D,id:D.mapKey})),k=De(L,u,"dtr",a);m+="<br>"+Ie(`DTR – Daily Time Records (${n})`,k,"#1d4ed8")}if(r==="ar"||r==="both"){const L=f.map(D=>({...D,id:D.mapKey})),k=De(L,s,"ar",a);m+="<br><br>"+Ie(`AR – Accomplishment Reports (${n})`,k,"#d97706")}const d=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${i} | DOLE LDNPFO – GIP Monitoring System</p>
                ${m}
            </body>
            </html>
        `,B=new Blob([d],{type:"application/vnd.ms-excel"}),x=URL.createObjectURL(B),b=document.createElement("a");b.href=x,b.download=`LDN_LOGS_${r.toUpperCase()}_${n}.xls`,document.body.appendChild(b),b.click(),URL.revokeObjectURL(x),document.body.removeChild(b),E.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(a){console.error("[LogsExport] Error:",a),E.fire("Error",a.message||"Failed to generate export.","error")}}const be="color-theme",Qe=3600*24*365;function et(e,r,n){document.cookie=`${e}=${r}; max-age=${n}; path=/; SameSite=Lax`}function Te(e){const r=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return r?decodeURIComponent(r[1]):null}function Re(){const e=localStorage.getItem(be)||Te(be);return e==="dark"||e==="light"?e:"light"}function we(e){const r=document.documentElement;e==="dark"?r.classList.add("dark"):r.classList.remove("dark"),localStorage.setItem(be,e),et(be,e,Qe),tt(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function Se(){const e=Re();we(e==="dark"?"light":"dark")}function tt(e){const r=e==="dark",n=document.getElementById("pref-dark-mode");n&&(n.checked=r);const a=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");a&&o&&(a.classList.toggle("hidden",r),o.classList.toggle("hidden",!r));const t=document.getElementById("sidebar-theme-label");t&&(t.textContent=r?"Light Mode":"Dark Mode")}function vt(){const e=Re();we(e);const r=document.getElementById("pref-dark-mode");r&&r.addEventListener("change",()=>{we(r.checked?"dark":"light")});const n=document.getElementById("theme-toggle-btn");n&&n.addEventListener("click",Se),document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.addEventListener("click",Se)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{localStorage.getItem(be)||Te(be)||we(a.matches?"dark":"light")})}function se(){return document.documentElement.classList.contains("dark")}window.toggleTheme=Se;window.isDarkMode=se;const ye={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=se(),r={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},n=`
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
        `;E.fire({html:n,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:a=>{const o=a.querySelector("#csv-upload"),t=a.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(s=>{t.addEventListener(s,u,!1)});function u(s){s.preventDefault(),s.stopPropagation()}["dragenter","dragover"].forEach(s=>{t.addEventListener(s,()=>{t.classList.add("border-blue-500","bg-blue-50/50"),e&&t.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(s=>{t.addEventListener(s,()=>{t.classList.remove("border-blue-500","bg-blue-50/50"),e&&t.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",s=>{const f=s.target.files[0];if(f){const m=a.querySelector("#auto-save-toggle");this.isAutoSave=m?m.checked:!1,this.handleFile(f)}}),t.addEventListener("drop",s=>{const m=s.dataTransfer.files[0];if(m){const i=a.querySelector("#auto-save-toggle");this.isAutoSave=i?i.checked:!1,this.handleFile(m)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){E.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const r=new FileReader;r.onload=n=>{const a=n.target.result;this.parseCSV(a)},r.readAsText(e)},async parseCSV(e){let r=[],n="",a=!1;for(let o=0;o<e.length;o++){let t=e[o];t==='"'&&(a=!a),!a&&(t===`
`||t==="\r")?(t==="\r"&&e[o+1]===`
`&&o++,n.trim()!==""&&r.push(n),n=""):n+=t}n.trim()!==""&&r.push(n),this.queue=[];for(let o=0;o<r.length;o++){let t=r[o].trim();if(!t)continue;let u=[],s="",f=!1;for(let m=0;m<t.length;m++){let i=t[m];i==='"'?f=!f:i===","&&!f?(u.push(s.replace(/(^"|"$)/g,"").trim()),s=""):s+=i}if(u.push(s.replace(/(^"|"$)/g,"").trim()),u.length>=2){const m=u[3];if(!m||isNaN(parseInt(m)))continue;const i=u[1];if(!i||i.toLowerCase()==="name"||i.toLowerCase()==="full name")continue;const d=u[2];let B=u[4]?u[4].toUpperCase().trim():"",x="";(B==="F"||B.includes("FEMALE"))&&(x="Female"),(B==="M"||B.includes("MALE"))&&(x="Male");const b=u[5],L=u[6],k=u[7],D=this.formatDate(u[8]),H=this.formatDate(u[9]);this.queue.push({name:i,address:d,age:m,gender:x,education:b,startDate:D,endDate:H,office:L,designation:k})}}if(this.queue.length>0){try{E.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{E.showLoading()}});const o=this.queue.map(f=>f.name);let t=null;try{t=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{t=null}const s=await(await fetch(`${ee()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...t?{"X-User-Id":String(t)}:{}},body:JSON.stringify({names:o,user_id:t})})).json();if(s.success&&s.duplicates&&s.duplicates.length>0){const f=new Set(s.duplicates.map(i=>i.toLowerCase().trim())),m=this.queue.length;this.queue=this.queue.filter(i=>{const d=f.has(i.name.toLowerCase().trim());return d&&console.warn(`%c[Bulk Add] SKIPPED: ${i.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!d}),console.log(`[Bulk Add] Removed ${m-this.queue.length} duplicates ahead of time.`)}}catch(o){console.error("Bulk duplicate check failed:",o)}if(this.queue.length===0){E.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,E.close(),this.processNext()}else E.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){se();const e=Math.round(this.currentIndex/this.queue.length*100),r=`
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
        `;if(E.isVisible()&&E.getPopup().querySelector("#bulk-progress-bar")){const n=document.getElementById("bulk-progress-bar"),a=E.getPopup().querySelector("span.text-\\[10px\\]"),o=document.getElementById("bulk-current-name");n&&(n.style.width=`${e}%`),a&&(a.textContent=`${this.currentIndex} / ${this.queue.length}`),o&&(o.textContent=this.queue[this.currentIndex]?.name||"...")}else E.fire({html:r,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:n=>{n.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const r=new Date(e);if(isNaN(r.getTime())){const t=e.split("/");return t.length===3?`${t[2]}-${t[1].padStart(2,"0")}-${t[0].padStart(2,"0")}`:""}const n=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getDate()).padStart(2,"0");return`${n}-${a}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const n=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[a,o]=await Promise.all([J(`api/beneficiaries.php?next_id&year=${n}`),J(`api/beneficiaries.php?next_series_no&year=${n}`)]);a.success&&a.data?.success&&a.data?.nextId&&(e.gip_id=a.data.nextId,e.id=null),o.success&&o.data?.success&&o.data?.nextSeries&&(e.seriesNo=o.data.nextSeries)}catch(n){console.warn("[Bulk Add] Identifier fetch failed, continuing:",n?.message||n)}const r=await window.addBeneficiaryData(e);this.isActive&&(r?this.onSaveSuccess():he(e))})():he(e)):he(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),E.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,E.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=ye;function Be(e){if(!e)return"";const r=new Date(e),n=new Date;let a=n.getFullYear()-r.getFullYear();const o=n.getMonth()-r.getMonth();return(o<0||o===0&&n.getDate()<r.getDate())&&a--,a>=0?a:0}function rt(e){return e?e.includes("DOLE")?"bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800":e.includes("DepEd")?"bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/40 dark:text-orange-300 dark:border-orange-800":e.includes("LGU")?"bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800":e.includes("DICT")?"bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 dark:border-cyan-800":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300"}function ot(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300";const r=e.toUpperCase();return r==="ONGOING"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800":r==="EXPIRED"?"bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800":r==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900":r==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900":"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300"}function Ae(e,r=0){e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const n=window.innerWidth<640?"top":"top-start";let a=r;const o=e.arLogs||[],t=e.dtrLogs||[],u=e.docs||[],s=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],f=s.map(x=>{const b=u.find(L=>L.name.toUpperCase()===x.toUpperCase());return b||{name:x,status:"PENDING",id:null}});u.forEach(x=>{s.some(L=>L.toUpperCase()===x.name.toUpperCase())||f.push(x)});const m=`
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
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ID NO.</span>
            <span class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-gray-400 truncate">${e.id}</span>
        </div>
        <div class="flex flex-col gap-1 text-left overflow-hidden">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1 flex items-center">
                REMARKS / OFFICE
            </span>
            <div class="flex items-center flex-wrap gap-1.5 min-h-[30px]">
                <span class="${ot(e.remarks)} text-[10px] font-black px-2 py-1 rounded border uppercase tracking-widest shadow-sm border-l-4 ${e.remarks==="ONGOING"?"border-l-green-600":"border-l-red-600"}">${e.remarks}</span>
                <span class="${rt(e.office)} hidden sm:inline-block text-[9px] font-black px-2.5 py-1 rounded-full border shadow-sm truncate max-w-[120px] lg:max-w-none" title="${e.office}">${e.office}</span>
            </div>
        </div>
    </div>
</div>

<!-- Persistent Section Header with Small Nav Buttons -->
<div class="flex justify-between items-center mb-4 pb-2 border-b border-default">
    <h4 id="drawer-section-title" class="text-sm font-bold text-heading uppercase tracking-widest">Personal Profile</h4>
    <div class="flex gap-2">
        <button id="drawer-prev-btn" class="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-neutral-secondary-medium text-heading text-[9px] font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm border border-default-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-tertiary cursor-pointer">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREV
        </button>
        <button id="drawer-next-btn" class="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-brand text-white text-[9px] font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm shadow-brand-medium/50 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-strong cursor-pointer text-center">
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
            <span class="${e.age||Be(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right">${e.age||Be(e.birthday)||"N/A"}</span>
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
</div>

<!-- Container for right grid from modal -->
<div class="relative">
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
                    <span class="font-black text-[#1b5e20] dark:text-green-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.absorbDate||String(e.absorbDate).includes("0000-00-00"))return"N/A";const x=new Date(e.absorbDate);return isNaN(x.getTime())||x.getFullYear()<1900?"N/A":(x.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
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
                    <span class="font-black text-[#b71c1c] dark:text-red-400 text-xs text-right whitespace-nowrap">${(()=>{if(!e.resignedDate||String(e.resignedDate).includes("0000-00-00"))return"N/A";const x=new Date(e.resignedDate);return isNaN(x.getTime())||x.getFullYear()<1900?"N/A":(x.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})+" "+x.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})).toUpperCase()})()}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest mr-4 mt-0.5">Reason</span>
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
                    ${t.length?t.map(x=>{const b=x.status||"PENDING";let L=b==="VERIFIED"||b==="COMPLETED"?"text-green-500":b==="REJECTED"||b==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",k=x.date||x.createdAt,D=k;if(k){const H=/^\d{4}-\d{2}-\d{2}$/.test(k)?new Date(k+"T00:00:00Z"):new Date(k);isNaN(H)||(D=H.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors edit-log-btn" data-type="dtr" data-id="${x.id}" data-val="${x.day||k}" data-status="${b}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${x.day||D}</span>
                            <span class="text-[11px] font-bold ${L} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${b}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${x.id}">
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
                    ${o.length?o.map(x=>{const b=x.status||"PENDING";let L=b==="VERIFIED"||b==="COMPLETED"?"text-green-500":b==="REJECTED"||b==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500",k=x.period||x.createdAt,D=k;if(k){const H=/^\d{4}-\d{2}-\d{2}$/.test(k)?new Date(k+"T00:00:00Z"):new Date(k);isNaN(H)||(D=H.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors edit-log-btn" data-type="ar" data-id="${x.id}" data-val="${k}" data-status="${b}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${k||D}</span>
                            <span class="text-[11px] font-bold ${L} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${b}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${x.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `}).join(""):'<p class="text-[11px] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No AR logs submitted.</p>'}
                </div>
            </div>
         </div>
    </div>
    
    <div id="drawer-page-2" class="hidden flex-1 flex flex-col gap-4">
        <h4 class="text-sm font-bold text-heading mb-2 border-b-2 border-brand pb-2 inline-block max-w-max">Required Documents</h4>
        <div class="flex flex-col gap-3">
            ${f.map(x=>{const b=x.status.toUpperCase(),k={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[b]||b,D=k==="COMPLETED",H=k==="REJECTED",K=D?"text-green-500":H?"text-red-500":"text-gray-400 dark:text-gray-500",z=D?"bg-green-50/50 dark:bg-green-900/10":H?"bg-red-50/50 dark:bg-red-900/10":"bg-gray-50/50 dark:bg-slate-800/50",j=D?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer":H?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer":"bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer";let te='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return D?te='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':H&&(te='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${z}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${K}">
                            ${te}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${D?"text-heading":"text-gray-500 dark:text-gray-400"} uppercase tracking-tight flex-1">${x.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${j} text-[10px] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${x.id}" data-name="${x.name}" data-status="${k} cursosr-pointer">
                        ${k}
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
    `,i=!!e._noAnimation;let d=document.getElementById("beneficiary-drawer-container");const B=i&&!!d&&d.dataset.beneficiaryId===String(e.id||"");if(B){const x=d.scrollTop;d.innerHTML=m,d.scrollTop=x}else d&&(d.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),d=document.createElement("div"),d.id="beneficiary-drawer-container",d.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl",d.setAttribute("tabindex","-1"),d.setAttribute("data-drawer-backdrop","true"),d.innerHTML=m,document.body.appendChild(d),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");d.dataset.beneficiaryId=String(e.id||""),Oe(async()=>{const{Drawer:x}=await import("./vendor-flowbite-B7rSfpuT.js").then(b=>b.b);return{Drawer:x}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:x})=>{let b=B?d.__drawerInstance:null;if(!b){const I={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{d&&d.parentNode&&d.remove()},300)}};b=new x(d,I),d.__drawerInstance=b,b.show()}d.querySelector("#close-drawer-btn").addEventListener("click",()=>b.hide());const k=d.querySelector("#drawer-prev-btn"),D=d.querySelector("#drawer-next-btn"),H=2,K=()=>{d.querySelectorAll("[id^=drawer-page-]").forEach((O,_)=>{O.classList.toggle("hidden",_!==a)});const I=d.querySelector("#drawer-section-title");I&&I.classList.toggle("invisible",a!==0);const N=d.querySelector("#personal-profile-section");N&&N.classList.toggle("hidden",a!==0),k.disabled=a===0,D.disabled=a===H,k.classList.toggle("opacity-50",a===0),D.classList.toggle("opacity-50",a===H)};k.addEventListener("click",()=>{a>0&&a--,K()}),D.addEventListener("click",()=>{a<H&&a++,K()}),K(),d.querySelectorAll(".drawer-doc-btn").forEach(I=>{I.addEventListener("click",async()=>{const N=I.dataset.name,O=I.dataset.status,_="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[9px] gap-2 transition-all duration-300 ",h=await E.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Set status for <span class="text-brand font-black">${N}</span></label>
                            
                            <div class="grid grid-cols-3 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="PENDING" class="peer sr-only" ${O==="PENDING"?"checked":""}>
                                    <div class="${_} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-amber-400 peer-checked:bg-amber-50 peer-checked:text-amber-600 dark:peer-checked:bg-amber-900/20 dark:peer-checked:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>Pending</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="COMPLETED" class="peer sr-only" ${O==="COMPLETED"?"checked":""}>
                                    <div class="${_} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-green-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        <span>Verify</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="REJECTED" class="peer sr-only" ${O==="REJECTED"?"checked":""}>
                                    <div class="${_} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-red-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Update Status</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const c=document.querySelector('input[name="swal-doc-status"]:checked');return c?c.value:null}});if(h.isConfirmed){const c=h.value;if(c===O)return;try{const A={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"}[c]||c,C=await $e("api/logs.php?type=docs",{gip_id:e.id,doc_name:N,status:A}),v=C.success?C.data:{success:!1,error:C.error};v.success?(E.fire({toast:!0,position:n,icon:"success",title:"Status updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):E.fire("Error",v.error||"Failed to update","error")}catch(y){E.fire("Error",y.message,"error")}}})});const z=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),j=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function te(I){const O=new Date(I+"T00:00:00").getDay();return O!==0&&O!==6&&!z.has(I)}function Q(I){const N=I.getDate(),O=j[I.getMonth()],_=I.getFullYear(),h=new Date(_,I.getMonth()+1,0).getDate();return N<=15?`${O} 1-15, ${_}`:`${O} 16-${h}, ${_}`}const ne=()=>{const I=new Date;if(!t.length)return Q(I);let N=-1,O="";const _=C=>{const v=(C||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!v)return-1;const F=j.indexOf(v[1]),l=parseInt(v[2])===1?0:1;return parseInt(v[4])*100+F*2+l};if(t.forEach(C=>{const v=C.day||C.date||"",F=_(v);F>N&&(N=F,O=v)}),N===-1)return Q(I);const h=O.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),c=j.indexOf(h[1]),y=parseInt(h[2]),A=parseInt(h[4]);if(y===1){const C=new Date(A,c+1,0).getDate();return`${j[c]} 16-${C}, ${A}`}else{const C=(c+1)%12,v=c===11?A+1:A;return`${j[C]} 1-15, ${v}`}},W=()=>{const I=new Date;if(!o.length)return Q(I);let N=-1,O="";const _=C=>{const v=(C||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!v)return-1;const F=j.indexOf(v[1]),l=parseInt(v[2])===1?0:1;return parseInt(v[4])*100+F*2+l};if(o.forEach(C=>{const v=_(C.period);v>N&&(N=v,O=C.period)}),N===-1)return Q(I);const h=O.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),c=j.indexOf(h[1]),y=parseInt(h[2]),A=parseInt(h[4]);if(y===1){const C=new Date(A,c+1,0).getDate();return`${j[c]} 16-${C}, ${A}`}else{const C=(c+1)%12,v=c===11?A+1:A;return`${j[C]} 1-15, ${v}`}},ie=async(I,N)=>{E.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),E.showLoading();try{const O={gip_id:e.id};if(I==="dtr"){const c=N.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(c){const y=j.indexOf(c[1]),A=parseInt(c[2]),C=parseInt(c[3]);let v=new Date(C,y,A);for(;!te(v.toISOString().split("T")[0]);)v.setDate(v.getDate()+1);O.record_date=v.toISOString().split("T")[0]}else O.record_date=new Date().toISOString().split("T")[0];O.weekday=N}I==="ar"&&(O.period=N);const _=await $e(`api/logs.php?type=${I}`,O);(_.success?_.data:{success:!1,error:_.error}).success?(E.fire({toast:!0,position:n,icon:"success",title:"Auto-Added!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):E.fire("Error","Failed to add log.","error")}catch(O){E.fire("Error",O.message,"error")}},X=async(I,N,O,_,h)=>{const c=N==="dtr"?"Record Date":"Period";se();const y="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[10px] sm:text-xs gap-2 ",A='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',C='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:v}=await E.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${I} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">${c}</label>
                            <input id="swal-log-val" value="${_}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${h==="VERIFIED"?"checked":""}>
                                    <div class="${y} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${A}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${h==="REJECTED"||h==="DECLINED"?"checked":""}>
                                    <div class="${y} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${C}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const F=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:F?F.value:"PENDING"}}});if(v&&(v.val!==_||v.status!==h))try{const F={type:N,id:O,status:v.status};if(N==="dtr"){const p=v.val.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(p){const $=j.indexOf(p[1]),w=parseInt(p[2]),M=parseInt(p[3]);let S=new Date(M,$,w);for(;!te(S.toISOString().split("T")[0]);)S.setDate(S.getDate()+1);F.record_date=S.toISOString().split("T")[0]}else F.record_date=new Date().toISOString().split("T")[0];F.weekday=v.val}N==="ar"&&(F.period=v.val);const l=await Ge("api/logs.php",F),g=l.success?l.data:{success:!1,error:l.error};g.success?(E.fire({toast:!0,position:n,icon:"success",title:"Log Updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):E.fire("Error",g.error||"Failed to update log.","error")}catch(F){E.fire("Error",F.message,"error")}},de=d.querySelector("#add-dtr-log-btn");de&&de.addEventListener("click",()=>ie("dtr",ne()));const ce=d.querySelector("#add-ar-log-btn");ce&&ce.addEventListener("click",()=>ie("ar",W()));const ge=d.querySelector("#export-log-btn");ge&&ge.addEventListener("click",async()=>{const I="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[11px] gap-2 ",N=await E.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${I} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${I} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${I} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const O=document.querySelector('input[name="swal-export-type"]:checked');return O?O.value:null}});if(N.isConfirmed&&N.value){const O=N.value,_=new Date().getFullYear();await Ne([e],O,_)}}),d.querySelectorAll(".edit-log-btn").forEach(I=>{I.addEventListener("click",N=>{if(N.target.closest(".delete-log-btn"))return;const O=I.dataset.type,_=I.dataset.id,h=I.dataset.val,c=I.dataset.status;X(O.toUpperCase(),O,_,h,c)})}),d.querySelectorAll(".delete-log-btn").forEach(I=>{I.addEventListener("click",async()=>{const N=I.dataset.id,O=I.dataset.type;if((await E.fire({title:'<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:'<span class="font-black tracking-widest uppercase">Delete</span>',cancelButtonText:'<span class="font-black tracking-widest uppercase">Wait</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)try{const h=await $e(`api/logs.php?type=${O}`,{log_id:N,action:"delete"});(h.success?h.data:{success:!1,error:h.error}).success?(E.fire({toast:!0,position:n,icon:"success",title:"Deleted",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):E.fire("Error","Failed to delete data.","error")}catch(h){E.fire("Error",h.message,"error")}})})}).catch(console.error)}function at(e){const r=se(),n=`w-full bg-transparent border-b-2 ${r?"border-slate-700 text-white focus:border-brand placeholder-slate-600":"border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300"} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`,a=`w-full bg-transparent border-none ${r?"text-white":"text-royal-blue"} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`;function o(i){if(!i)return"";const d=new Date(i),B=new Date;let x=B.getFullYear()-d.getFullYear();const b=B.getMonth()-d.getMonth();return(b<0||b===0&&B.getDate()<d.getDate())&&x--,x>=0?x:0}function t(i){if(!i)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const d=String(i).toUpperCase();return d==="ONGOING"?"bg-green-100 text-green-700 border-green-200":d==="EXPIRED"?"bg-red-400 text-white border-red-400":d==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":d==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const u=`
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
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${t(e.remarks)} text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
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
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
            <input type="text" name="office" id="edit-office-input" value="${e.office||""}" 
                class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full placeholder-indigo-300 dark:placeholder-indigo-700 h-[42px]"
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
                ${Ee.map(i=>`<button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${i.name}</span></button>`).join("")}
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
                ${_e.map(i=>`<option value="${i}" ${e.relationshipToAssured===i?"selected":""}>${i}</option>`).join("")}
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
                <!-- Suggestions will be injected here -->
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
    `;let s=document.getElementById("edit-drawer-container");s&&(s.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),s=document.createElement("div"),s.id="edit-drawer-container",s.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",s.setAttribute("tabindex","-1"),s.innerHTML=u,document.body.appendChild(s),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const i=s.querySelector('textarea[name="name"]');i&&(i.style.height="auto",i.style.height=i.scrollHeight+"px")},10);const f=s.querySelector("#edit-education-suggestions-box");f&&(f.innerHTML=Ee.map(i=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${i.name}</span>
            </button>
        `).join(""));const m=s.querySelector("#edit-designation-suggestions-box");m&&(m.innerHTML=je.map(i=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${i}</span>
            </button>
        `).join("")),Oe(async()=>{const{Drawer:i}=await import("./vendor-flowbite-B7rSfpuT.js").then(d=>d.b);return{Drawer:i}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:i})=>{const d=new i(s,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{s&&s.parentNode&&s.remove()},400)}});d.show(),window.initFlowbite&&window.initFlowbite();const B=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),d.hide()};s.querySelector("#close-edit-drawer-btn").addEventListener("click",B),s.querySelector("#edit-drawer-cancel-btn").addEventListener("click",B);const x=s.querySelector("#edit-beneficiary-drawer-form"),b=s.querySelector("#edit-bday-input"),L=s.querySelector("#edit-age-display"),k=s.querySelector("#edit-startDate-input"),D=s.querySelector("#edit-endDate-input"),H=s.querySelector('input[name="seriesNo"]'),K=s.querySelector('input[name="gip_id"]'),z=s.querySelector("#edit-drawer-remarks"),j=s.querySelector("#edit-extension-log-container"),te=()=>{if(!j)return;const h=z.value,c=se();if(h==="ABSORBED"){const y=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,A=y.getTimezoneOffset()*6e4,C=new Date(y.getTime()-A).toISOString().slice(0,16);j.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${c?"border-slate-800":"border-gray-100"}">
                        <p class="text-[9px] uppercase font-black ${c?"text-green-500":"text-[#2e7d32]"} border-b ${c?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[9px] ${c?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${C}" class="w-full ${c?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${c?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${e.absorb_where||""}" class="w-full ${c?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[9px] ${c?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${e.absorb_position||""}" class="w-full ${c?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${c?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${e.absorb_agency||""}" class="w-full ${c?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `}else if(h==="RESIGNED"){const y=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,A=y.getTimezoneOffset()*6e4,C=new Date(y.getTime()-A).toISOString().slice(0,16);j.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${c?"border-slate-800":"border-gray-100"}">
                        <p class="text-[9px] uppercase font-black ${c?"text-red-500":"text-[#ce1126]"} border-b ${c?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[9px] ${c?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${C}" class="w-full ${c?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${c?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${c?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};z&&z.addEventListener("change",h=>{const c="text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";z.className=`${t(h.target.value)} ${c} editable-indicator`,te(),(z.value==="ABSORBED"||z.value==="RESIGNED")&&setTimeout(()=>{j.scrollIntoView({behavior:"smooth",block:"center"}),j.classList.add("pulse-highlight"),setTimeout(()=>j.classList.remove("pulse-highlight"),1500)},50)}),te();let Q=!1,ne=!1;const W=(h,c)=>{h.addEventListener("input",y=>{const A=y.target.value,C=window.__maskDate(A);if(A!==C&&(y.target.value=C),C.length===10){const v=window.__parseFormattedDate(C);v&&c&&(ne||c(v),document.activeElement===h&&h.blur())}}),h.addEventListener("changeDate",y=>{y.detail&&y.detail.date&&c&&(ne||c(y.detail.date),h._datepicker&&h._datepicker.hide())})};b&&W(b,h=>{L&&(!Q||!L.value)&&(L.value=window.calculateAge(h))}),k&&W(k,h=>{if(D){const y=new Date(h);y.setDate(y.getDate()+182);const A=String(y.getMonth()+1).padStart(2,"0"),C=String(y.getDate()).padStart(2,"0"),v=y.getFullYear();D.value=`${A}/${C}/${v}`}const c=h.getFullYear();c>1900&&K&&H&&Promise.all([J(`api/beneficiaries.php?next_id&year=${encodeURIComponent(c)}`),J(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(c)}`)]).then(([y,A])=>{const C=y.success&&y.data?.success?y.data.nextId:null,v=A.success&&A.data?.success?A.data.nextSeries:null,F=String(K.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),l=String(H.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),g=F?Number(F[1]):null,p=l?Number(l[1]):null;C&&(g===null||g!==c)&&(K.value=C),v&&(p===null||p!==c)&&(H.value=v)}).catch(y=>{console.error("Edit drawer identifier sync error:",y)})}),D&&W(D);const ie=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null),X=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null);ie&&b&&(b._datepicker=new ie(b,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}));const de=s.querySelector("#edit-date-range-picker");if(X&&de){const h=new X(de,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});k&&(k._datepicker=h.datepickers[0]),D&&(D._datepicker=h.datepickers[1])}e.id&&(ne=!0,J(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(h=>{if(h.success&&h.data&&h.data.beneficiary){const c=h.data.beneficiary;if(k&&c.startDate){const y=new Date(c.startDate);isNaN(y)||(k.value=c.startDateFormatted||"",k._datepicker&&k._datepicker.setDate(y))}if(D&&c.endDate){const y=new Date(c.endDate);isNaN(y)||(D.value=c.endDateFormatted||"",D._datepicker&&D._datepicker.setDate(y))}}setTimeout(()=>{ne=!1},100)}).catch(h=>{console.error("Error fetching accurate beneficiary dates:",h),ne=!1})),L&&L.addEventListener("input",()=>Q=!0);const ce=(h,c,y)=>{const A=s.querySelector(h),C=s.querySelector(c);if(!A||!C)return;const v=()=>C.classList.add("hidden"),F=()=>C.classList.remove("hidden");A.addEventListener("focus",F),A.addEventListener("input",()=>{const l=A.value.toLowerCase().trim();let g=0;C.querySelectorAll(y).forEach(p=>{const w=(p.querySelector(".option-text")?.textContent||p.textContent||"").toLowerCase().includes(l);p.style.display=w?"block":"none",w&&g++}),g>0?F():v()}),C.addEventListener("click",l=>{const g=l.target.closest(y);g&&(A.value=(g.querySelector(".option-text")?.textContent||g.textContent||"").trim(),v(),A.dispatchEvent(new Event("change")))}),document.addEventListener("click",l=>{!A.contains(l.target)&&!C.contains(l.target)&&v()})};ce("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),ce("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const h=s.querySelector("#edit-office-input"),c=s.querySelector("#edit-office-suggestions-box");if(!h||!c)return;c.classList.add("mt-[52px]");let y="OFFICES",A=null,C=[];const v={textLabel:r?"text-slate-400":"text-slate-500",borderDivide:r?"border-slate-800":"border-slate-100",courseHover:r?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:r?"text-slate-300":"text-slate-700"},F=async()=>{const g="dole_offices_cache",p=async()=>{let w=[];try{const M=await J("api/beneficiaries.php?get_offices_advanced=1");M.success&&M.data?.success&&Array.isArray(M.data.offices)&&(w=M.data.offices)}catch(M){console.error("Office fetch failed:",M)}return w.length>0&&(C=w,localStorage.setItem(g,JSON.stringify({data:w,timestamp:Date.now()}))),w},$=localStorage.getItem(g);if($)try{const{data:w,timestamp:M}=JSON.parse($);return C=w,Date.now()-M>1800*1e3&&p().then(()=>{y==="OFFICES"&&l("OFFICES",A,h.value)}),w}catch{localStorage.removeItem(g)}return C.length===0?await p():C},l=async(g="OFFICES",p=null,$="")=>{if(y=g,A=p,g==="OFFICES"){const M=(await F()).filter(S=>S.office.toLowerCase().includes($.toLowerCase()));c.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[7px] font-black uppercase tracking-widest ${v.textLabel} opacity-70 border-b ${v.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${M.length>0?M.map(S=>{const P=parseInt(S.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[9px] font-bold ${v.textCourseOpt} ${v.courseHover} rounded-lg ${P?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                        data-id="${S.id}" data-name="${S.office}" data-has-locations="${P}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${S.office}</span>
                                        </div>
                                        ${P?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                    </div>
                                `}).join(""):`<div class="px-3 py-6 text-center text-[9px] font-bold ${v.textLabel} opacity-60">No matching offices.</div>`}
                        </div>
                    `,c.querySelectorAll(".office-code-option").forEach(S=>{S.addEventListener("click",P=>{P.stopPropagation(),S.dataset.hasLocations==="true"?l("LOCATIONS",{id:S.dataset.id,name:S.dataset.name}):(h.value=S.dataset.name,c.classList.add("hidden"),h.dispatchEvent(new Event("change")))})})}else{c.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${v.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-t-xl">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-md bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[7px] font-black uppercase tracking-widest ${v.textLabel} opacity-70">OFFICE LOCATION</div>
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
                                <input type="text" id="location-search-edit" placeholder="Search in ${p.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[9px] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                    value="${$.includes(" - ")?$.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[9px] font-bold ${v.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const w=c.querySelector("#loc-list-edit"),M=c.querySelector("#location-search-edit"),S=`dole_locs_cache_${p.id}`;let P=[];const U=localStorage.getItem(S);if(U)try{const{data:R,timestamp:T}=JSON.parse(U);P=R,Date.now()-T<3600*1e3}catch{localStorage.removeItem(S)}const Y=async()=>{let R=[];if(ue&&ke()){const{data:T,error:q}=await ue.from("office_locations").select("location").eq("office_id",p.id).order("location");!q&&T&&(R=T)}if(R.length===0)try{const T=await J(`api/beneficiaries.php?get_office_locations=1&office_id=${p.id}`);T.success&&T.data?.success&&Array.isArray(T.data.locations)&&(R=T.data.locations)}catch(T){console.error("Office locations fetch failed:",T)}R.length>0&&(P=R,localStorage.setItem(S,JSON.stringify({data:R,timestamp:Date.now()})),V(M.value))},V=(R="")=>{const T=P.filter(q=>q.location.toLowerCase().includes(R.toLowerCase()));w.innerHTML=T.length>0?T.map(q=>`
                            <div class="location-option-edit group/loc px-3 py-1.5 text-[9px] font-bold ${v.textCourseOpt} ${v.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${q.location}">
                                <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                <span class="option-text truncate">${q.location}</span>
                            </div>
                        `).join(""):P.length===0?`<div class="px-3 py-4 text-center text-[9px] font-bold ${v.textLabel} animate-pulse">Fetching...</div>`:`<div class="px-3 py-8 text-center text-[9px] font-bold ${v.textLabel} opacity-60">No matching locations.</div>`,w.querySelectorAll(".location-option-edit").forEach(q=>{q.addEventListener("click",()=>{h.value=`${p.name} - ${q.dataset.location}`,c.classList.add("hidden"),h.dispatchEvent(new Event("change"))})})};V(M.value),Y(),setTimeout(()=>M.focus(),50),M.addEventListener("input",()=>V(M.value)),M.addEventListener("click",R=>R.stopPropagation()),c.querySelector("#back-to-offices-edit").addEventListener("click",R=>{R.stopPropagation(),l("OFFICES")})}};h.addEventListener("focus",()=>{c.classList.remove("hidden"),l(y,A,h.value)}),h.addEventListener("input",()=>{y==="OFFICES"&&l("OFFICES",null,h.value)}),document.addEventListener("click",g=>{!h.contains(g.target)&&!c.contains(g.target)&&c.classList.add("hidden")})})();const I=s.querySelector("#edit-replacement-input"),N=s.querySelector("#edit-replacement-suggestions-box"),O=s.querySelector("#edit-replacement-loading");let _=null;I&&N&&(I.addEventListener("input",h=>{const c=h.target.value.trim();clearTimeout(_),N.classList.add("hidden"),!(c.length<2)&&(O&&O.classList.remove("hidden"),_=setTimeout(async()=>{try{const y=await xe(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(c)}&limit=10`);y.success&&y.data&&y.data.candidates&&y.data.candidates.length>0?(N.innerHTML=y.data.candidates.map(A=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${A.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${A.name}</span>
                                    <span class="text-[10px] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${A.id}</span>
                                </button>
                            `).join(""),N.classList.remove("hidden")):(N.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',N.classList.remove("hidden"))}catch(y){console.error("Replacement fetch error:",y)}finally{O&&O.classList.add("hidden")}},400))}),N.addEventListener("click",h=>{const c=h.target.closest("button");c&&(I.value=c.dataset.name,N.classList.add("hidden"))}),document.addEventListener("click",h=>{!I.contains(h.target)&&!N.contains(h.target)&&N.classList.add("hidden")})),x.querySelectorAll("input, select, textarea").forEach(h=>{const c=(h.getAttribute("type")||"").toLowerCase(),y=!h.disabled&&!h.readOnly&&c!=="hidden";h.classList.remove("editable-indicator"),y&&h.classList.add("editable-indicator")}),x.addEventListener("submit",h=>{h.preventDefault();const c=new FormData(x),y={};c.forEach((A,C)=>y[C]=A),y.id=e.id,y.gip_id=y.gip_id||e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(y,!0,!1)&&(B(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),E.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function wt(){window.showAddDataModal=he,window.__maskDate=function(e){let r=e.replace(/\D/g,"").slice(0,8);return r.length>2&&r.length<=4?r=r.slice(0,2)+"/"+r.slice(2):r.length>4&&(r=r.slice(0,2)+"/"+r.slice(2,4)+"/"+r.slice(4)),r},window.__parseFormattedDate=function(e){if(!e)return null;const r=e.split("/");if(r.length===3){const n=parseInt(r[0])-1,a=parseInt(r[1]),o=parseInt(r[2]);if(o>1e3&&n>=0&&n<12&&a>0&&a<=31)return new Date(o,n,a)}return null},window.calculateAge=function(e){if(!e)return"";const r=e instanceof Date?e:new Date(e),n=new Date;let a=n.getFullYear()-r.getFullYear();const o=n.getMonth()-r.getMonth();return(o<0||o===0&&n.getDate()<r.getDate())&&a--,a>=0?a:0},window.viewBeneficiary=async function(e,r=0){const n=e?.id||e?.gip_id||null;if(!n)return;const a=!!(e?.name&&e?.office&&e?.remarks);let o={...e,id:n};if(!a){const f=await J(`api/beneficiaries.php?id=${encodeURIComponent(n)}`);f.success&&f.data?.success&&f.data?.beneficiary&&(o={...f.data.beneficiary,...o,id:n})}const t=`logs_cache_${n}`,u=window.__doleDB?.getSecureCache?await window.__doleDB.getSecureCache(t):null,s=!!u;o.arLogs=u?.arLogs||[],o.dtrLogs=u?.dtrLogs||[],o.docs=u?.docs||[],Ae(o,r);try{const[f,m,i,d]=await Promise.all([J(`api/logs.php?type=ar&gip_id=${encodeURIComponent(n)}`),J(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(n)}`),J(`api/logs.php?type=docs&gip_id=${encodeURIComponent(n)}`),J(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(n)}`)]),B=f.success&&f.data?.success?f.data.logs:[],x=m.success&&m.data?.success?m.data.logs:[],b=i.success&&i.data?.success?i.data.logs:[],L=d.success&&d.data?.success?d.data.logs:[];if(L.length>0){const k=L[0];o.absorbDate=k.absorption_datetime,o.absorb_where=k.where||k.absorb_where,o.absorb_position=k.position||k.absorb_position,o.absorb_agency=k.agency||k.absorb_agency}if(window.__doleDB?.setSecureCache&&await window.__doleDB.setSecureCache(t,{arLogs:B,dtrLogs:x,docs:b}),!s){const k=document.getElementById("beneficiary-drawer-container");k&&k.dataset.beneficiaryId===String(n)&&(o.arLogs=B,o.dtrLogs=x,o.docs=b,Ae({...o,_noAnimation:!0},r))}}catch(f){console.error("Error fetching logs/docs:",f)}},window.showAddDataModal=function(e){he(e)},window.editBeneficiary=function(e){at(e)},window.showExportConfigModal=function(e){it(e)},window.showProfileModal=function(){st()}}async function st(){try{if(ke()&&ue){let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=a.id)}catch{}if(!e)throw new Error("User not logged in");const{data:r,error:n}=await ue.from("users").select("*").eq("id",e).single();if(n)throw n;Me(r)}else{let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=`?user_id=${a.id}`)}catch{}const n=await(await fetch(`${ee()}api/profile.php${e}`)).json();if(n.success){const a=n.profile;Me(a)}else E.fire({icon:"error",title:"Error",text:n.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function Me(e){const r=e.profile_picture_path?`${ee()}${e.profile_picture_path}`:null,n=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",a=`
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
                            ${r?`<img src="${r}" class="w-full h-full object-cover" />`:n}
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
    `;E.fire({html:a,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const t=o.querySelector("#profile-edit-form"),u=o.querySelector("#profile-pic-input"),s=o.querySelector("#profile-avatar-preview");u.addEventListener("change",f=>{const m=f.target.files[0];if(m){const i=new FileReader;i.onload=d=>{s.innerHTML=`<img src="${d.target.result}" class="w-full h-full object-cover" />`},i.readAsDataURL(m)}}),t.addEventListener("submit",async f=>{f.preventDefault();const m=new FormData(t);try{const i=JSON.parse(localStorage.getItem("user"));i&&i.id&&m.append("user_id",i.id)}catch{}try{const d=await(await fetch(`${ee()}api/profile.php`,{method:"POST",body:m})).json();d.success?(d.profile&&(localStorage.setItem("user",JSON.stringify(d.profile)),nt(d.profile)),E.close(),E.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):E.fire({icon:"error",title:"Update Failed",text:d.error||"Something went wrong"})}catch(i){console.error("Error saving profile:",i)}})}})}function nt(e){const r=e.profile_picture_path?`${ee()}${e.profile_picture_path}`:null,n=e.full_name?e.full_name.split(" ").map(t=>t[0]).join("").substring(0,2).toUpperCase():"US",a=document.querySelectorAll(".sidebar-user-name"),o=document.querySelectorAll(".sidebar-user-avatar");a.forEach(t=>t.textContent=e.full_name),o.forEach(t=>{r?t.innerHTML=`<img src="${r}" class="w-full h-full object-cover" />`:t.textContent=n}),localStorage.setItem("user_full_name",e.full_name),r&&localStorage.setItem("user_avatar",r)}function it(e){const r=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",ageGroup:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","position","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},n=`
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
                                    <!-- Options will be populated dynamically -->
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
    `;E.fire({html:n,width:"680px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const o=a.querySelector("#export-config-form"),t=o.querySelector("#export-office");t&&(async()=>{let u=[];if(window.supabase&&typeof window.isSupabaseMode=="function"&&window.isSupabaseMode()){const{data:m,error:i}=await window.supabase.from("offices").select("office").order("office");!i&&m&&(u=m.map(d=>d.office))}if(u.length===0)try{const m=await window.apiGet("api/beneficiaries.php?get_offices=1");m.success&&m.data?.success&&(u=m.data.offices.map(i=>typeof i=="string"?i:i.office))}catch{}const s=r.office||"ALL";let f=`<option value="ALL" ${s==="ALL"?"selected":""}>ALL OFFICES</option>`;u.forEach(m=>{f+=`<option value="${m}" ${s===m?"selected":""}>${m}</option>`}),t.innerHTML=f})(),o.addEventListener("submit",u=>{u.preventDefault();const s=o.querySelectorAll('input[name="export-column"]:checked'),f=Array.from(s).map(k=>k.value),m=o.querySelector('input[name="export-gender"]:checked'),i=o.querySelector('input[name="export-section"]:checked'),d=o.querySelector('input[name="export-remarks"]:checked'),B=o.querySelector('input[name="export-age-group"]:checked'),x=o.querySelector("#export-prepared").value.trim(),b=o.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",x),localStorage.setItem("ldn_export_approved",b);const L={office:o.querySelector("#export-office").value,gender:m?m.value:r.gender||"ALL",remarks:d?d.value:r.remarks||"ALL",ageGroup:B?B.value:r.ageGroup||"ALL",search:o.querySelector("#export-search").value.trim().toLowerCase(),sort:o.querySelector("#export-sort").value,section:i?i.value:"ALL",preparedBy:x,approvedBy:b,columns:f};e(L),E.close(),setTimeout(()=>{E.fire({toast:!0,position:"top-end",icon:"success",title:"Generator pattern updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const Ee=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],je=["Administrative Support (Records)","Office Clerk (Finance Section)","Data Encoder (TSSD/LIMS)","Messenger / Liaison Officer","Utility Worker (Maintenance)","Scanning & Digitization Officer","Filing Clerk (Administrative)","Receptionist / Front Desk","IT Technical Support Assist.","Project Monitoring Assist."],_e=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function he(e=null){const r=!!e&&!e._isBulk,n=r?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",a=r?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=se(),t={borderBase:o?"border-slate-800":"border-gray-100/80",borderCard:o?"border-slate-800":"border-gray-100",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgCard:o?"bg-slate-900/40":"bg-gray-50/40",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgActionBar:o?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},u=`
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
                    <p class="text-[10px] ${t.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Enter the details of the GIP beneficiary below.</p>
                </div>
                ${!r&&!e?._isBulk?`
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3 py-2 ${t.bgCard} border ${t.borderCard} rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 w-full sm:w-auto sm:mr-4 focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                `:""}
            </div>

            <form id="add-beneficiary-form" class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-is-edit="${r}">
                <!-- LEFT COLUMN: Personal Info Card -->
                <div class="${t.bgCard} rounded-xl p-4 sm:p-5 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
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
                                <div id="age-warning" class="hidden mt-1 text-[10px] font-bold items-center gap-1.5 animate-pulse">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Age must be between 18 and 29 years old</span>
                                </div>
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
                                        ${Ee.map(s=>`
                                            <div class="course-option px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
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
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" value="${e?.designatedBeneficiary||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${_e.map(s=>`
                                        <option value="${s}" ${e?.relationshipToAssured===s?"selected":""}>${s}</option>
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
                <div class="${t.bgCard} rounded-xl p-4 sm:p-5 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
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
                                        <!-- Will be populated by JS -->
                                        <div class="px-3 py-4 text-center text-[10px] font-bold ${t.textLabel} animate-pulse">Loading offices...</div>
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
                                    ${je.map(s=>`
                                        <div class="work-option px-3 py-2.5 text-[10px] font-black ${t.textWorkOpt} ${t.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
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
                                    ${(()=>{const s={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(f=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${f}" ${e?.remarks===f?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[10px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${s[f]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${f}
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

                <button type="submit" form="add-beneficiary-form" id="submit-beneficiary-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${t.bgSaveBtn} text-white font-black rounded-xl transition-all duration-300 shadow-lg ${t.saveShadow} cursor-pointer text-[10px] lg:text-[12px] transform active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-2 lg:order-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                    <span>${r?"UPDATE RECORD":"SAVE RECORD"}</span>
                </button>
            </div>
        </div>
    `;E.fire({html:u,width:window.innerWidth<640?"96vw":window.innerWidth<1024?"90vw":"1120px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"0.75rem":window.innerWidth<1024?"1.25rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:s=>{window.initFlowbite&&window.initFlowbite();const f=s.querySelector("#cancel-modal-btn");f&&f.addEventListener("click",()=>{!r&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),E.close(),e?._isBulk&&ye.onCancel()});const m=s.querySelector("#bulk-add-btn");m&&m.addEventListener("click",()=>{E.close(),ye.init()});const i=(l,g)=>{l.addEventListener("input",p=>{const $=window.__maskDate(p.target.value);if(p.target.value!==$&&(p.target.value=$),$.length===10){const w=window.__parseFormattedDate($);w&&g&&(g(w),document.activeElement===l&&l.blur())}}),l.addEventListener("changeDate",p=>{if(p.detail&&p.detail.date&&g){g(p.detail.date);const $=l._datepicker||l.parentNode&&l.parentNode._datepicker;$&&typeof $.hide=="function"&&$.hide()}})},d=s.querySelector("#birthday-input"),B=s.querySelector("#age-display"),x=s.querySelector("#age-warning"),b=s.querySelector("#submit-beneficiary-btn"),L=l=>{if(!l)return x&&x.classList.add("hidden"),b&&(b.disabled=!1,b.classList.remove("opacity-50","cursor-not-allowed","grayscale"),b.classList.add("cursor-pointer")),!0;const g=parseInt(l),p=!isNaN(g)&&g>=18&&g<=29;return x&&(x.className=`mt-1 text-[10px] font-bold ${p?"hidden":"flex"} items-center gap-1.5 animate-pulse ${se()?"text-red-400":"text-red-600"}`),b&&(p?(b.disabled=!1,b.classList.remove("opacity-50","cursor-not-allowed","grayscale"),b.classList.add("cursor-pointer","active:scale-[0.98]")):(b.disabled=!0,b.classList.add("opacity-50","cursor-not-allowed","grayscale"),b.classList.remove("cursor-pointer","active:scale-[0.98]"))),p};if(B&&(B.addEventListener("input",l=>{L(l.target.value)}),B.value&&L(B.value)),d){i(d,g=>{B&&(B.value=window.calculateAge(g),L(B.value),B.classList.add("animate-pulse"),setTimeout(()=>B.classList.remove("animate-pulse"),400))});const l=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);l&&(d._datepicker=new l(d,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const k=s.querySelector("#name-input-field"),D=s.querySelector("#duplicate-warning");if(k&&D){let l;const g=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},p=(w,M="")=>{D.className=`mt-1 text-[10px] font-bold ${w?"flex":"hidden"} items-center gap-1.5 animate-pulse ${se()?"text-red-400":"text-red-600"}`;const S=D.querySelector("span");S&&(S.textContent=M?`Beneficiary already exists: ${M}`:"Beneficiary already exists")},$=async w=>{const M=g(),S=await fetch(`${ee()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...M?{"X-User-Id":String(M)}:{}},body:JSON.stringify({name:w,user_id:M,exclude_id:r?e?.id:null})});if(!S.ok)throw new Error(`Duplicate check failed (${S.status})`);return S.json()};k.addEventListener("input",w=>{const M=w.target.value.trim();if(clearTimeout(l),M.length<3){p(!1);return}l=setTimeout(async()=>{try{const S=await $(M);S.success&&S.exists?p(!0,S.match||S.name):p(!1)}catch(S){console.error("Duplicate check error:",S)}},500)}),e?.name&&(p(!1),(async()=>{const w=await $(e.name);w.success&&w.exists&&p(!0,w.match||w.name)})())}const H=s.querySelector("#full-id-input"),K=s.querySelector("#series-no-input"),z=s.querySelector('input[name="startDate"]'),j=s.querySelector('input[name="endDate"]'),te=s.querySelectorAll('input[name="remarks"]'),Q=s.querySelector("#extension-log-container"),ne=async l=>{if(!l)return;const g=[H,K].filter(Boolean);g.forEach(p=>{p.classList.add("animate-pulse"),p.placeholder="Syncing..."});try{const[p,$]=await Promise.all([J(`api/beneficiaries.php?next_id&year=${encodeURIComponent(l)}`),J(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(l)}`)]),w=p.success&&p.data?.success?p.data.nextId:null,M=$.success&&$.data?.success?$.data.nextSeries:null;w&&H&&(H.value=w),M&&K&&(K.value=M)}catch(p){console.error("ID Sync error:",p)}finally{g.forEach(p=>p.classList.remove("animate-pulse"))}},W=s.querySelector("#replacement-search-input"),ie=s.querySelector("#replacement-hidden"),X=s.querySelector("#replacement-suggestions"),de=l=>{const g=(l.name||"").toUpperCase().trim(),p=l.startDateFormatted||l.startDate||"N/A",$=l.endDateFormatted||l.endDate||"N/A";return`${g} (${p.toUpperCase()} - ${$.toUpperCase()})`},ce=l=>{if(X){if(!l.length){X.innerHTML=`<div class="px-3 py-2 text-[10px] font-bold ${t.textCourseOpt}">No matching beneficiary found.</div>`,X.classList.remove("hidden");return}X.innerHTML=l.map(g=>{const p=de(g);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${p.replace(/"/g,"&quot;")}">
                            ${p}
                        </button>
                    `}).join(""),X.classList.remove("hidden"),X.querySelectorAll(".replacement-option").forEach(g=>{g.addEventListener("click",()=>{const p=g.getAttribute("data-replacement")||"";W&&(W.value=p),ie&&(ie.value=p),X.classList.add("hidden")})})}};let ge=null;const I=async(l="")=>{const g=(l||"").trim(),p=`api/beneficiaries.php?replacement_candidates=1&limit=20${g?`&q=${encodeURIComponent(g)}`:""}`,$=await J(p);$.success&&$.data?.success&&Array.isArray($.data.candidates)&&ce($.data.candidates)};W&&ie&&X&&(W.addEventListener("focus",()=>{I(W.value||"")}),W.addEventListener("input",()=>{ie.value=W.value.trim(),clearTimeout(ge),ge=setTimeout(()=>{I(W.value||"")},250)}),document.addEventListener("click",l=>{W&&X&&!W.contains(l.target)&&!X.contains(l.target)&&X.classList.add("hidden")}));const N=()=>{const l=s.querySelector('input[name="remarks"]:checked');return l?l.value:"ONGOING"},O=l=>{const g=s.querySelector(`input[name="remarks"][value="${l}"]`);g&&(g.checked=!0,h())},_=()=>{if(j&&j.value){const l=window.__parseFormattedDate(j.value);if(!l)return;const g=new Date;g.setHours(0,0,0,0);let p="ONGOING";l<g&&(p="EXPIRED"),O(p)}},h=()=>{if(!Q)return;const l=N();if(l==="ABSORBED"){const g=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,p=g.getTimezoneOffset()*6e4,$=new Date(g.getTime()-p).toISOString().slice(0,16);Q.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[9px] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${$}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                    `}else if(l==="RESIGNED"){const g=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,p=g.getTimezoneOffset()*6e4,$=new Date(g.getTime()-p).toISOString().slice(0,16);Q.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[9px] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${$}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[9px] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else Q.innerHTML=""};if(z){let l=null;i(z,w=>{const M=w.getFullYear();if(j){const S=new Date(w);S.setDate(S.getDate()+182);const P=String(S.getMonth()+1).padStart(2,"0"),U=String(S.getDate()).padStart(2,"0"),Y=S.getFullYear();j.value=`${P}/${U}/${Y}`}_(),M>1900&&M!==l&&(l=M,ne(M))}),j&&i(j,()=>_());const g=s.querySelector("#date-range-picker"),p=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),$=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(p&&g&&z&&j){const w=new p(g,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});z._datepicker=w.datepickers?.[0]||null,j._datepicker=w.datepickers?.[1]||null}else $&&(z&&(z._datepicker=new $(z,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),j&&(j._datepicker=new $(j,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!r){const w=new Date().getFullYear();ne(w)}}te.forEach(l=>l.addEventListener("change",h));const c=s.querySelector("#resign-btn"),y=s.querySelector("#absorb-btn");c&&c.addEventListener("click",()=>O("RESIGNED")),y&&y.addEventListener("click",()=>O("ABSORBED")),s.querySelectorAll('input[type="text"], textarea').forEach(l=>{["id-number-input","full-id-input"].includes(l.id)||l.addEventListener("input",()=>{const g=l.selectionStart,p=l.selectionEnd;l.value=l.value.toUpperCase(),l.setSelectionRange(g,p)})}),_(),h(),C("education-input","course-suggestions","course-option"),C("designation-input","work-suggestions","work-option"),(()=>{const l=s.querySelector("#office-input"),g=s.querySelector("#office-suggestions");if(!l||!g)return;let p="OFFICES",$=null,w=[];const M=async()=>{const P="dole_offices_cache",U=async()=>{let V=[];try{const R=await J("api/beneficiaries.php?get_offices_advanced=1");R.success&&R.data?.success&&Array.isArray(R.data.offices)&&(V=R.data.offices)}catch(R){console.error("Office fetch failed:",R)}return V.length>0&&(w=V,localStorage.setItem(P,JSON.stringify({data:V,timestamp:Date.now()}))),V},Y=localStorage.getItem(P);if(Y)try{const{data:V,timestamp:R}=JSON.parse(Y);return w=V,Date.now()-R>1800*1e3&&U().then(()=>{p==="OFFICES"&&S("OFFICES",$,l.value)}),V}catch{localStorage.removeItem(P)}return w.length===0?await U():w},S=async(P="OFFICES",U=null,Y="")=>{if(p=P,$=U,P==="OFFICES"){const R=(await M()).filter(T=>T.office.toLowerCase().includes(Y.toLowerCase()));g.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[7px] font-black uppercase tracking-widest ${t.textLabel} opacity-70 border-b ${t.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${R.length>0?R.map(T=>{const q=parseInt(T.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[9px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-lg ${q?"cursor-pointer":"cursor-default opacity-60"} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${T.id}" data-name="${T.office}" data-has-locations="${q}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${T.office}</span>
                                            </div>
                                            ${q?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                        </div>
                                    `}).join(""):`<div class="px-3 py-6 text-center text-[9px] font-bold ${t.textLabel} opacity-60">No matching offices.</div>`}
                            </div>
                        `,g.querySelectorAll(".office-code-option").forEach(T=>{T.addEventListener("click",q=>{q.stopPropagation(),T.dataset.hasLocations==="true"?S("LOCATIONS",{id:T.dataset.id,name:T.dataset.name}):(l.value=T.dataset.name,g.classList.add("hidden"),l.dispatchEvent(new Event("change")))})})}else{g.innerHTML=`
                            <div class="flex items-center justify-between px-3 py-2 border-b ${t.borderDivide} bg-slate-50/95 dark:bg-slate-800/95 sticky top-0 backdrop-blur-sm z-10 rounded-t-xl">
                                <div class="flex items-center gap-2">
                                    <div class="p-1 rounded-md bg-green-500/10 text-green-600 dark:text-green-400">
                                        <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <div class="text-[7px] font-black uppercase tracking-widest ${t.textLabel} opacity-70">OFFICE LOCATION</div>
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
                                    <input type="text" id="location-search-internal" placeholder="Search in ${U.name}..." 
                                        class="w-full pl-8 pr-3 py-1.5 text-[9px] font-bold bg-slate-100/50 dark:bg-slate-900/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                        value="${Y.includes(" - ")?Y.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[9px] font-bold ${t.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const V=g.querySelector("#locations-list-container"),R=g.querySelector("#location-search-internal"),T=`dole_locs_cache_${U.id}`;let q=[];const re=localStorage.getItem(T);if(re)try{const{data:G,timestamp:Z}=JSON.parse(re);q=G}catch{localStorage.removeItem(T)}const oe=async()=>{let G=[];if(ue&&ke()){const{data:Z,error:ae}=await ue.from("office_locations").select("location").eq("office_id",U.id).order("location");!ae&&Z&&(G=Z)}if(G.length===0)try{const Z=await J(`api/beneficiaries.php?get_office_locations=1&office_id=${U.id}`);Z.success&&Z.data?.success&&Array.isArray(Z.data.locations)&&(G=Z.data.locations)}catch(Z){console.error("Office locations fetch failed:",Z)}G.length>0&&(q=G,localStorage.setItem(T,JSON.stringify({data:G,timestamp:Date.now()})),le(R.value))},le=(G="")=>{const Z=q.filter(ae=>ae.location.toLowerCase().includes(G.toLowerCase()));V.innerHTML=Z.length>0?Z.map(ae=>`
                                <div class="location-option group/loc px-3 py-1.5 text-[9px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${ae.location}">
                                    <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${ae.location}</span>
                                </div>
                            `).join(""):q.length===0?`<div class="px-3 py-4 text-center text-[9px] font-bold ${t.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:`<div class="px-3 py-8 text-center text-[9px] font-bold ${t.textLabel} opacity-60">No matching locations.</div>`,V.querySelectorAll(".location-option").forEach(ae=>{ae.addEventListener("click",lt=>{const Pe=ae.dataset.location;l.value=`${U.name} - ${Pe}`,g.classList.add("hidden"),l.dispatchEvent(new Event("change"))})})};le(R.value),oe(),setTimeout(()=>R.focus(),50),R.addEventListener("input",()=>le(R.value)),R.addEventListener("click",G=>G.stopPropagation()),g.querySelector("#back-to-offices").addEventListener("click",G=>{G.stopPropagation(),S("OFFICES")})}};l.addEventListener("focus",()=>{g.classList.remove("hidden"),S(p,$,l.value)}),l.addEventListener("input",()=>{g.classList.remove("hidden"),S(p,$,l.value)}),document.addEventListener("click",P=>{!l.contains(P.target)&&!g.contains(P.target)&&(g.classList.add("hidden"),l.value||(p="OFFICES",$=null))})})();function C(l,g,p){const $=s.querySelector(`#${l}`),w=s.querySelector(`#${g}`);if(!$||!w)return;let M=!1;$.addEventListener("focus",()=>w.classList.remove("hidden")),document.addEventListener("click",S=>{!$.contains(S.target)&&!w.contains(S.target)&&w.classList.add("hidden")}),$.addEventListener("input",()=>{if(M){M=!1;return}const S=$.value.toLowerCase(),P=w.querySelectorAll(`.${p}`);let U=!1;P.forEach(Y=>{const V=Y.querySelector(".option-text");(V?V.innerText:Y.innerText).toLowerCase().includes(S)?(Y.style.display="block",U=!0):Y.style.display="none"}),U?w.classList.remove("hidden"):w.classList.add("hidden")}),w.addEventListener("click",S=>{const P=S.target.closest(`.${p}`);if(!P)return;const U=P.querySelector(".option-text");$.value=U?U.innerText.trim():P.innerText.trim(),M=!0,w.classList.add("hidden"),$.dispatchEvent(new Event("change"))})}const v=s.querySelector("#add-beneficiary-form"),F="add_beneficiary_draft";if(!r){const l=localStorage.getItem(F);if(l)try{const g=JSON.parse(l);Object.entries(g).forEach(([p,$])=>{const w=v.elements[p];w&&w.type!=="file"&&w.type!=="hidden"&&(w.value=$)})}catch(g){console.error("Error loading draft",g)}}v.addEventListener("input",l=>{if(!r){const g=new FormData(v),p={};g.forEach(($,w)=>p[w]=$),localStorage.setItem(F,JSON.stringify(p))}}),v&&v.addEventListener("submit",l=>{l.preventDefault(),v.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(re=>{re.classList.remove("ring-2","ring-red-500","!border-red-500")});const p=new FormData(v);let $=!1;const w=re=>{const oe=v.querySelector(`[name="${re}"]`);oe&&oe.classList.add("ring-2","ring-red-500","!border-red-500"),$=!0},M=p.get("name"),S=p.get("contact"),P=p.get("startDate"),U=p.get("endDate"),Y=(p.get("designation")||"").trim();(!M||M.trim()===""||/[0-9]/.test(M))&&w("name"),S&&S.trim()!==""&&/[^0-9]/.test(S.replace(/[\s\-\+\(\)]/g,""))&&w("contact"),P||w("startDate"),U||w("endDate");const V=p.get("age"),R=parseInt(V);if((!V||isNaN(R)||R<18||R>29)&&($=!0,x&&(x.className=`mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse ${typeof se=="function"&&se()?"text-red-400":"text-red-600"}`),b&&(b.disabled=!0,b.classList.add("opacity-50","cursor-not-allowed","grayscale"),b.classList.remove("cursor-pointer","active:scale-[0.98]"))),$)return;const T={};p.forEach((re,oe)=>{if(["birthday","startDate","endDate"].includes(oe)){const le=window.__parseFormattedDate(re);if(le){const G=le.getFullYear(),Z=String(le.getMonth()+1).padStart(2,"0"),ae=String(le.getDate()).padStart(2,"0");T[oe]=`${G}-${Z}-${ae}`}else T[oe]=re}else T[oe]=re}),Y||(T.designation="N/A"),T.replacement||(T.replacement="");const q=s.querySelector("#full-id-input")?.value;r?(T.id=e?.id,q&&(T.gip_id=q)):(T.id=null,q&&(T.gip_id=q)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(T)){if(!r){const oe="add_beneficiary_draft",le=v.querySelector('[name="office"]')?.value||"",G=v.querySelector('[name="designation"]')?.value||"",Z=v.querySelector('[name="education"]')?.value||"";localStorage.setItem(oe,JSON.stringify({office:le,designation:G,education:Z}))}E.close(),setTimeout(()=>{E.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${r?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!r&&e?._isBulk&&ye.onSaveSuccess()},100)}else E.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const r=e.target,n=r.querySelector('button[type="submit"]'),a=n.innerHTML;n.disabled=!0,n.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(r);if((await fetch(r.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)E.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:u=>{u.addEventListener("mouseenter",E.stopTimer),u.addEventListener("mouseleave",E.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),r.reset();else throw new Error("Failed to send")}catch{E.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{n.disabled=!1,n.innerHTML=a}return!1};export{Oe as _,J as a,xe as b,ft as c,xt as d,mt as e,pt as f,ee as g,vt as h,ke as i,ut as j,gt as k,pe as l,bt as m,wt as n,ht as r,ue as s,nt as u};
