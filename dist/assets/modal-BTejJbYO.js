const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-bBKPL--D.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import f from"./vendor-swal-BSk0fVSb.js";import{a as De}from"./vendor-DHtNC8Ux.js";const Be="true".toLowerCase()==="true";function we(){return Be}function V(){const e=window.location.pathname,o="/dole-system/",s=e.toLowerCase().indexOf(o.toLowerCase());if(s!==-1)return e.substring(0,s+o.length);const a=e.indexOf("/frontend/");if(a!==-1)return e.substring(0,a+1);const r=e.indexOf("/backend/");return r!==-1?e.substring(0,r+1):"/"}function be(e="Incorrect Username or Password"){f.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Le(e=!1){return f.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Ye(){const e=localStorage.getItem("hasVisitedBefore"),o=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),o&&(o.style.display="none")),window.addEventListener("load",()=>{const s=document.querySelector("body > *:not(.page-loader)");s&&s.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),o&&o.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const ae={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const o=r=>r.split("").map(t=>t.charCodeAt(0)),s=r=>("0"+Number(r).toString(16)).substr(-2),a=r=>o(this._key).reduce((t,c)=>t^c,r);return e.split("").map(o).map(a).map(s).join("")}catch(o){return console.error("Encryption Failed",o),null}},decrypt:function(e){try{const o=a=>a.split("").map(r=>r.charCodeAt(0)),s=a=>o(this._key).reduce((r,t)=>r^t,a);return e.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(s).map(a=>String.fromCharCode(a)).join("")}catch(o){return console.error("Decryption Failed",o),null}}};function Ze(){document.querySelectorAll(".login-form-shared").forEach(o=>{const s=o.querySelector('input[name="username"]'),a=o.querySelector('input[name="password"]'),r=o.querySelector('input[name="rememberMe"]');if(s&&a&&r){const t=localStorage.getItem("secure_user"),c=localStorage.getItem("secure_pass");if(t&&c){const n=ae.decrypt(t),d=ae.decrypt(c);n&&d&&(s.value=n,a.value=d,r.checked=!0)}}o.addEventListener("submit",async t=>{t.preventDefault();try{const n=await(await fetch(`${V()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.value,password:a.value})})).json();if(n.success){r.checked?(localStorage.setItem("secure_user",ae.encrypt(s.value)),localStorage.setItem("secure_pass",ae.encrypt(a.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const d=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(n.user));const g=document.getElementById("drawer-login");if(g){g.classList.add("translate-y-full");const i=g.querySelector("[data-drawer-hide]");i&&i.click()}await Le(d),Ie(d)}else{const d=document.getElementById("drawer-login");d?(d.classList.add("translate-y-full"),setTimeout(()=>{be(),setTimeout(()=>{d.classList.remove("translate-y-full"),a.value="",a.focus()},600)},400)):(be(),a.value="",a.focus())}}catch(c){console.error("Login Error:",c),f.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Ie(e=!1){const o=document.getElementById("left-panel"),s=document.getElementById("right-panel"),a=document.getElementById("left-panel-content"),r=document.getElementById("right-panel-content");a&&(a.style.opacity="0"),r&&(r.style.opacity="0");const t=document.createElement("div");t.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const c=e?"":"animate__delay-1s",n=e?"animation-duration: 0.8s;":"animation-duration: 2s;";t.innerHTML=`
        <img src="${V()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${c}" style="${n}" alt="DOLE Logo">
    `,document.body.appendChild(t);const d=e?0:1e3,g=e?600:1500;setTimeout(()=>{o&&o.classList.add("animate-slide-left"),s&&s.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${V()}frontend/dashboard/`},g)},d)}function Je(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${V()}`})}function Xe(){const e=document.getElementById("mobile-splash"),o=document.getElementById("show-login-btn"),s=document.getElementById("back-to-splash"),a=document.getElementById("mobile-bg-content"),r=document.getElementById("mobile-welcome-text"),t=document.getElementById("reopen-login-drawer"),c=document.getElementById("request-notifications-btn"),n=async()=>{if("Notification"in window){const v=await Notification.requestPermission();console.log("Notification permission:",v),v==="granted"&&c&&c.classList.add("hidden")}};Notification.permission==="default"&&c&&(c.classList.remove("hidden"),c.addEventListener("click",n));const d=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&n();const v=document.getElementById("drawer-login");v&&v.classList.remove("translate-y-full")},800))},g=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};o&&o.addEventListener("click",d),document.querySelectorAll(".forgot-password-link").forEach(v=>{v.addEventListener("click",$=>{$.target.closest("#mobile-splash")&&d()})}),s&&s.addEventListener("click",()=>{const v=document.getElementById("drawer-login");if(v){v.classList.add("translate-y-full");const $=v.querySelector("[data-drawer-hide]");$&&$.click()}g()});const l=document.getElementById("drawer-login"),u=document.getElementById("curved-welcome"),x=document.getElementById("peoples-bg");l&&new MutationObserver($=>{$.forEach(w=>{w.attributeName==="class"&&(l.classList.contains("translate-y-full")?(a&&(a.style.transform="translateY(0)"),r&&(r.style.opacity="1",r.style.transform="translateY(0) scale(1)"),u&&(u.style.opacity="0",u.style.transform="scale(0.5)"),t&&e&&e.style.visibility==="hidden"&&(t.style.opacity="1",t.style.transform="scale(1)"),x&&(x.classList.add("opacity-0","scale-0"),x.classList.remove("opacity-40","scale-[1.6]"))):(a&&(a.style.transform="translateY(-35%)"),r&&(r.style.opacity="0",r.style.transform="translateY(20px) scale(0.9)"),u&&(u.style.opacity="1",u.style.transform="scale(1)"),t&&(t.style.opacity="0",t.style.transform="scale(0)"),x&&(x.classList.remove("opacity-0","scale-0"),x.classList.add("opacity-40","scale-[1.6]"))))})}).observe(l,{attributes:!0})}const te=()=>"false".toLowerCase()==="true";function Me(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const J={debug(...e){te()&&console.debug(...e)},info(...e){te()&&console.info(...e)},warn(...e){te()&&console.warn(...e)},error(...e){console.error(...e)},table(e){te()&&console.table(e)},json(e,o){te()&&console.debug(e,Me(o))}},se=new Map;async function re(e,o={}){const a=`${V()}${e}`;let r=null;try{const i=JSON.parse(localStorage.getItem("user"));i&&(r=i.user_id||i.id||null)}catch{}const t={headers:{"Content-Type":"application/json",...r?{"X-User-Id":r}:{},...o.headers},...o},n=(t.method||"GET").toUpperCase()==="GET"?2:1;let d=null;for(let i=1;i<=n;i++)try{if(J.debug("[API] Request",{url:a,method:t.method||"GET",hasUserId:!!r}),t.body)try{J.json("[API] Payload",JSON.parse(t.body))}catch{J.debug("[API] Payload (raw)",t.body)}const l=await fetch(a,t);if(!l.ok)throw new Error(`HTTP ${l.status}: ${l.statusText}`);const u=await l.json();return se.has(a)&&(se.delete(a),J.info?.("[API] Recovered",{url:a})),J.debug("[API] Response",{url:a,ok:!0}),{success:!0,data:u}}catch(l){if(d=l,l instanceof TypeError&&/fetch/i.test(l.message||"")&&i<n){await new Promise(v=>setTimeout(v,1200));continue}}return d instanceof TypeError&&/fetch/i.test(d.message||"")?se.get(a)||(se.set(a,!0),J.error("API Request Network Error (suppressed for repeats):",{url:a,message:d.message})):J.error("API Request Error:",d),{success:!1,error:d?.message||"Unknown request error"}}async function Y(e){return re(e,{method:"GET"})}async function pe(e,o){return re(e,{method:"POST",body:JSON.stringify(o)})}async function Ae(e,o){return re(e,{method:"PUT",body:JSON.stringify(o)})}async function We(e,o){const s=new URLSearchParams(o).toString();return re(`${e}?${s}`,{method:"PATCH"})}class Ne{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(o,s,a=1e4){this.stop(o),s();const r=setInterval(async()=>{this.isPageVisible&&await s()},a);this.intervals.set(o,r),console.log(`[Polling] Started: ${o} (every ${a}ms)`)}stop(o){this.intervals.has(o)&&(clearInterval(this.intervals.get(o)),this.intervals.delete(o),console.log(`[Polling] Stopped: ${o}`))}stopAll(){this.intervals.forEach((o,s)=>this.stop(s)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const je=new Ne;function Ke(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function Qe(e,o="",s="info"){f.fire({toast:!0,position:"top-end",icon:s,title:e,text:o,showConfirmButton:!1,timer:3e3,timerProgressBar:!0})}function et(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{je.stopAll()});const Pe="modulepreload",Oe=function(e,o){return new URL(e,o).href},he={},ye=function(o,s,a){let r=Promise.resolve();if(s&&s.length>0){let g=function(i){return Promise.all(i.map(l=>Promise.resolve(l).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const c=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),d=n?.nonce||n?.getAttribute("nonce");r=g(s.map(i=>{if(i=Oe(i,a),i in he)return;he[i]=!0;const l=i.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(a)for(let v=c.length-1;v>=0;v--){const $=c[v];if($.href===i&&(!l||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const x=document.createElement("link");if(x.rel=l?"stylesheet":Pe,l||(x.as="script"),x.crossOrigin="",x.href=i,d&&x.setAttribute("nonce",d),document.head.appendChild(x),l)return new Promise((v,$)=>{x.addEventListener("load",v),x.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(c){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=c,window.dispatchEvent(n),!n.defaultPrevented)throw c}return r.then(c=>{for(const n of c||[])n.status==="rejected"&&t(n.reason);return o().catch(t)})};let ge=null;if(we()){const e="https://llnddycvbcetztzwbdpx.supabase.co",o="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{ge=De(e,o),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(s){console.error("[SUPABASE SDK] Failed to initialize client:",s)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");const Q="color-theme",Re=3600*24*365;function Te(e,o,s){document.cookie=`${e}=${o}; max-age=${s}; path=/; SameSite=Lax`}function ke(e){const o=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return o?decodeURIComponent(o[1]):null}function $e(){const e=localStorage.getItem(Q)||ke(Q);return e==="dark"||e==="light"?e:"light"}function ie(e){const o=document.documentElement;e==="dark"?o.classList.add("dark"):o.classList.remove("dark"),localStorage.setItem(Q,e),Te(Q,e,Re),_e(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function fe(){const e=$e();ie(e==="dark"?"light":"dark")}function _e(e){const o=e==="dark",s=document.getElementById("pref-dark-mode");s&&(s.checked=o);const a=document.getElementById("theme-toggle-dark-icon"),r=document.getElementById("theme-toggle-light-icon");a&&r&&(a.classList.toggle("hidden",o),r.classList.toggle("hidden",!o));const t=document.getElementById("sidebar-theme-label");t&&(t.textContent=o?"Light Mode":"Dark Mode")}function tt(){const e=$e();ie(e);const o=document.getElementById("pref-dark-mode");o&&o.addEventListener("change",()=>{ie(o.checked?"dark":"light")});const s=document.getElementById("theme-toggle-btn");s&&s.addEventListener("click",fe),document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.addEventListener("click",fe)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{localStorage.getItem(Q)||ke(Q)||ie(a.matches?"dark":"light")})}function Z(){return document.documentElement.classList.contains("dark")}window.toggleTheme=fe;window.isDarkMode=Z;const le={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=Z(),o={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},s=`
            <div class="font-montserrat text-left px-2 sm:px-4 py-2">
                <div class="mb-6 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-black ${o.textHeading} flex items-center gap-2.5">
                            <div class="p-2 ${o.iconBg} rounded-lg ${o.iconText} border ${o.iconBorder} shadow-sm">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                            </div>
                            Bulk Add Beneficiaries
                        </h3>
                        <p class="text-[10px] ${o.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Upload a CSV file to automate data entry.</p>
                    </div>
                </div>

                <div class="${o.bgCard} rounded-xl p-6 border ${o.borderCard} shadow-sm mb-4">
                    <label for="csv-upload" class="flex flex-col items-center justify-center w-full h-48 ${o.bgUpload} border-2 border-dashed ${o.borderUpload} rounded-lg cursor-pointer ${o.hoverUpload} transition-all duration-300 group">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-10 h-10 mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm font-bold ${o.textUpload}"><span class="font-black text-blue-500">Click to upload</span> or drag and drop</p>
                            <p class="text-xs ${o.textSubtitle} uppercase tracking-widest font-bold">.CSV format only</p>
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
        `;f.fire({html:s,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:a=>{const r=a.querySelector("#csv-upload"),t=a.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(n=>{t.addEventListener(n,c,!1)});function c(n){n.preventDefault(),n.stopPropagation()}["dragenter","dragover"].forEach(n=>{t.addEventListener(n,()=>{t.classList.add("border-blue-500","bg-blue-50/50"),e&&t.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(n=>{t.addEventListener(n,()=>{t.classList.remove("border-blue-500","bg-blue-50/50"),e&&t.classList.remove("dark:bg-slate-800/80")},!1)}),r.addEventListener("change",n=>{const d=n.target.files[0];if(d){const g=a.querySelector("#auto-save-toggle");this.isAutoSave=g?g.checked:!1,this.handleFile(d)}}),t.addEventListener("drop",n=>{const g=n.dataTransfer.files[0];if(g){const i=a.querySelector("#auto-save-toggle");this.isAutoSave=i?i.checked:!1,this.handleFile(g)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){f.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const o=new FileReader;o.onload=s=>{const a=s.target.result;this.parseCSV(a)},o.readAsText(e)},async parseCSV(e){let o=[],s="",a=!1;for(let r=0;r<e.length;r++){let t=e[r];t==='"'&&(a=!a),!a&&(t===`
`||t==="\r")?(t==="\r"&&e[r+1]===`
`&&r++,s.trim()!==""&&o.push(s),s=""):s+=t}s.trim()!==""&&o.push(s),this.queue=[];for(let r=0;r<o.length;r++){let t=o[r].trim();if(!t)continue;let c=[],n="",d=!1;for(let g=0;g<t.length;g++){let i=t[g];i==='"'?d=!d:i===","&&!d?(c.push(n.replace(/(^"|"$)/g,"").trim()),n=""):n+=i}if(c.push(n.replace(/(^"|"$)/g,"").trim()),c.length>=2){const g=c[3];if(!g||isNaN(parseInt(g)))continue;const i=c[1];if(!i||i.toLowerCase()==="name"||i.toLowerCase()==="full name")continue;const l=c[2];let u=c[4]?c[4].toUpperCase().trim():"",x="";(u==="F"||u.includes("FEMALE"))&&(x="Female"),(u==="M"||u.includes("MALE"))&&(x="Male");const v=c[5],$=c[6],w=c[7],P=this.formatDate(c[8]),O=this.formatDate(c[9]);this.queue.push({name:i,address:l,age:g,gender:x,education:v,startDate:P,endDate:O,office:$,designation:w})}}if(this.queue.length>0){try{f.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{f.showLoading()}});const r=this.queue.map(n=>n.name),c=await(await fetch(`${V()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({names:r})})).json();if(c.success&&c.duplicates&&c.duplicates.length>0){const n=new Set(c.duplicates.map(g=>g.toLowerCase().trim())),d=this.queue.length;this.queue=this.queue.filter(g=>{const i=n.has(g.name.toLowerCase().trim());return i&&console.warn(`%c[Bulk Add] SKIPPED: ${g.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!i}),console.log(`[Bulk Add] Removed ${d-this.queue.length} duplicates ahead of time.`)}}catch(r){console.error("Bulk duplicate check failed:",r)}if(this.queue.length===0){f.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,f.close(),this.processNext()}else f.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){Z();const e=Math.round(this.currentIndex/this.queue.length*100),o=`
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
        `;if(f.isVisible()&&f.getPopup().querySelector("#bulk-progress-bar")){const s=document.getElementById("bulk-progress-bar"),a=f.getPopup().querySelector("span.text-\\[10px\\]"),r=document.getElementById("bulk-current-name");s&&(s.style.width=`${e}%`),a&&(a.textContent=`${this.currentIndex} / ${this.queue.length}`),r&&(r.textContent=this.queue[this.currentIndex]?.name||"...")}else f.fire({html:o,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:s=>{s.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const o=new Date(e);if(isNaN(o.getTime())){const t=e.split("/");return t.length===3?`${t[2]}-${t[1].padStart(2,"0")}-${t[0].padStart(2,"0")}`:""}const s=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getDate()).padStart(2,"0");return`${s}-${a}-${r}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const s=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[a,r]=await Promise.all([Y(`api/beneficiaries.php?next_id&year=${s}`),Y(`api/beneficiaries.php?next_series_no&year=${s}`)]);a.success&&a.data?.success&&a.data?.nextId&&(e.gip_id=a.data.nextId,e.id=null),r.success&&r.data?.success&&r.data?.nextSeries&&(e.seriesNo=r.data.nextSeries)}catch(s){console.warn("[Bulk Add] Identifier fetch failed, continuing:",s?.message||s)}const o=await window.addBeneficiaryData(e);this.isActive&&(o?this.onSaveSuccess():de(e))})():de(e)):de(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),f.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,f.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=le;function xe(e){if(!e)return"";const o=new Date(e),s=new Date;let a=s.getFullYear()-o.getFullYear();const r=s.getMonth()-o.getMonth();return(r<0||r===0&&s.getDate()<o.getDate())&&a--,a>=0?a:0}function me(e){return e?e.includes("DOLE")?"bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800":e.includes("DepEd")?"bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/40 dark:text-orange-300 dark:border-orange-800":e.includes("LGU")?"bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800":e.includes("DICT")?"bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 dark:border-cyan-800":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300"}function qe(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300";const o=e.toUpperCase();return o==="ONGOING"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800":o==="EXPIRED"?"bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800":o==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900":o==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900":"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300"}function ne(e,o=0){e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A"};const s=window.innerWidth<640?"top":"top-start";let a=o;const r=e.arLogs||[],t=e.dtrLogs||[],c=e.docs||[],n=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],d=n.map(l=>{const u=c.find(x=>x.name.toUpperCase()===l.toUpperCase());return u||{name:l,status:"PENDING",id:null}});c.forEach(l=>{n.some(x=>x.toUpperCase()===l.name.toUpperCase())||d.push(l)});const g=`
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
                <span class="${qe(e.remarks)} text-[10px] font-black px-2 py-1 rounded border uppercase tracking-widest shadow-sm border-l-4 ${e.remarks==="ONGOING"?"border-l-green-600":"border-l-red-600"}">${e.remarks}</span>
                <!-- Desktop Only Office Badge (Pill Style) -->
                <span class="${me(e.office)} hidden sm:inline-block text-[9px] font-black px-2.5 py-1 rounded-full border shadow-sm truncate max-w-[120px] lg:max-w-none" title="${e.office}">${e.office}</span>
            </div>
        </div>
    </div>

    <!-- Mobile Only Assigned Office Row (Rectangle Style) -->
    <div class="flex flex-col gap-1 text-left mt-4 sm:hidden">
        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
        <span class="${me(e.office)} text-[10px] font-black px-2.5 py-2 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-indigo-500 w-full truncate" title="${e.office}">${e.office}</span>
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
        <span class="${e.age||xe(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right">${e.age||xe(e.birthday)||"N/A"}</span>
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
             <p class="text-xs text-gray-500 dark:text-gray-400 font-medium italic">${e.replacement||"None found."}</p>
        </div>
    </div>
    
    <div id="drawer-page-1" class="hidden flex-1 flex flex-col gap-4">
        <h4 class="text-sm font-bold text-heading mb-2 border-b-2 border-brand pb-2 inline-block max-w-max">Required Documents</h4>
        <div class="flex flex-col gap-3">
            ${d.map(l=>{const u=l.status.toUpperCase(),v={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[u]||u,$=v==="COMPLETED",w=v==="REJECTED",P=$?"text-green-500":w?"text-red-500":"text-gray-400 dark:text-gray-500",O=$?"bg-green-50/50 dark:bg-green-900/10":w?"bg-red-50/50 dark:bg-red-900/10":"bg-gray-50/50 dark:bg-slate-800/50",j=$?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer":w?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer":"bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer";let _='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return $?_='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':w&&(_='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${O}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${P}">
                            ${_}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${$?"text-heading":"text-gray-500 dark:text-gray-400"} uppercase tracking-tight flex-1">${l.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${j} text-[10px] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${l.id}" data-name="${l.name}" data-status="${v} cursosr-pointer">
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
            </div>
         </div>

         <div class="flex flex-col gap-5">
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${t.length?t.map(l=>{const u=l.status||"PENDING";let x=u==="VERIFIED"||u==="COMPLETED"?"text-green-500":u==="REJECTED"||u==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors edit-log-btn" data-type="dtr" data-id="${l.id}" data-val="${l.date||l.createdAt}" data-status="${u}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${l.date||l.createdAt}</span>
                            <span class="text-[11px] font-bold ${x} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${u}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${l.id}">
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
                    ${r.length?r.map(l=>{const u=l.status||"PENDING";let x=u==="VERIFIED"||u==="COMPLETED"?"text-green-500":u==="REJECTED"||u==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors edit-log-btn" data-type="ar" data-id="${l.id}" data-val="${l.period||l.createdAt}" data-status="${u}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${l.period||l.createdAt}</span>
                            <span class="text-[11px] font-bold ${x} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${u}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${l.id}">
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
    `;let i=document.getElementById("beneficiary-drawer-container");i&&i.remove(),i=document.createElement("div"),i.id="beneficiary-drawer-container",i.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl",i.setAttribute("tabindex","-1"),i.setAttribute("data-drawer-backdrop","true"),i.innerHTML=g,document.body.appendChild(i),ye(async()=>{const{Drawer:l}=await import("./vendor-flowbite-bBKPL--D.js");return{Drawer:l}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:l})=>{const u={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{setTimeout(()=>{i&&i.parentNode&&i.remove()},300)}},x=new l(i,u);x.show(),i.querySelector("#close-drawer-btn").addEventListener("click",()=>x.hide());const $=i.querySelector("#drawer-prev-btn"),w=i.querySelector("#drawer-next-btn"),P=2,O=()=>{i.querySelectorAll("[id^=drawer-page-]").forEach((m,y)=>{m.classList.toggle("hidden",y!==a)}),$.disabled=a===0,w.disabled=a===P,$.classList.toggle("opacity-50",a===0),w.classList.toggle("opacity-50",a===P)};$.addEventListener("click",()=>{a>0&&a--,O()}),w.addEventListener("click",()=>{a<P&&a++,O()}),O(),i.querySelectorAll(".drawer-doc-btn").forEach(m=>{m.addEventListener("click",async()=>{const y=m.dataset.name,E=m.dataset.status,D="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[9px] gap-2 transition-all duration-300 ",S=await f.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',html:`
                        <div class="font-montserrat text-left">
                            <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Set status for <span class="text-brand font-black">${y}</span></label>
                            
                            <div class="grid grid-cols-3 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="PENDING" class="peer sr-only" ${E==="PENDING"?"checked":""}>
                                    <div class="${D} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-amber-400 peer-checked:bg-amber-50 peer-checked:text-amber-600 dark:peer-checked:bg-amber-900/20 dark:peer-checked:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>Pending</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="COMPLETED" class="peer sr-only" ${E==="COMPLETED"?"checked":""}>
                                    <div class="${D} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-green-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                        <span>Verify</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-doc-status" value="REJECTED" class="peer sr-only" ${E==="REJECTED"?"checked":""}>
                                    <div class="${D} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-red-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Update Status</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const B=document.querySelector('input[name="swal-doc-status"]:checked');return B?B.value:null}});if(S.isConfirmed){const B=S.value;if(B===E)return;try{const U={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"}[B]||B,A=await pe("api/logs.php?type=docs",{gip_id:e.id,doc_name:y,status:U}),H=A.success?A.data:{success:!1,error:A.error};H.success?(f.fire({toast:!0,position:s,icon:"success",title:"Status updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):f.fire("Error",H.error||"Failed to update","error")}catch(q){f.fire("Error",q.message,"error")}}})});const j=()=>{if(!t.length)return new Date().toISOString().split("T")[0];const m=new Date(t[0].date);return m.setDate(m.getDate()+1),m.toISOString().split("T")[0]},_=()=>{if(!r.length){const D=new Date,S=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][D.getMonth()];return D.getDate()<=15?`${S} 1-15`:`${S} 16-${new Date(D.getFullYear(),D.getMonth()+1,0).getDate()}`}const m=r[0].period||"",y=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],E=m.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+)/);if(E){let D=E[1],S=parseInt(E[2]),B=y.indexOf(D);if(B!==-1)return S===1?`${D} 16-${new Date(new Date().getFullYear(),B+1,0).getDate()}`:`${y[(B+1)%12]} 1-15`}return"NEW PERIOD"},N=async(m,y)=>{f.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),f.showLoading();try{const E={gip_id:e.id};m==="dtr"&&(E.record_date=y),m==="ar"&&(E.period=y);const D=await pe(`api/logs.php?type=${m}`,E);(D.success?D.data:{success:!1,error:D.error}).success?(f.fire({toast:!0,position:s,icon:"success",title:"Auto-Added!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):f.fire("Error","Failed to add log.","error")}catch(E){f.fire("Error",E.message,"error")}},M=async(m,y,E,D,S)=>{const B=y==="dtr"?"Record Date":"Period";Z();const q="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[10px] sm:text-xs gap-2 ",U='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',A='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:H}=await f.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${m} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">${B}</label>
                            <input id="swal-log-val" value="${D}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${S==="VERIFIED"?"checked":""}>
                                    <div class="${q} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${U}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${S==="REJECTED"||S==="DECLINED"?"checked":""}>
                                    <div class="${q} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${A}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const p=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:p?p.value:"PENDING"}}});if(H&&(H.val!==D||H.status!==S))try{const p={type:y,id:E,status:H.status};y==="dtr"&&(p.record_date=H.val),y==="ar"&&(p.period=H.val);const b=await Ae("api/logs.php",p),h=b.success?b.data:{success:!1,error:b.error};h.success?(f.fire({toast:!0,position:s,icon:"success",title:"Log Updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):f.fire("Error",h.error||"Failed to update log.","error")}catch(p){f.fire("Error",p.message,"error")}},I=i.querySelector("#add-dtr-log-btn");I&&I.addEventListener("click",()=>N("dtr",j()));const L=i.querySelector("#add-ar-log-btn");L&&L.addEventListener("click",()=>N("ar",_())),i.querySelectorAll(".edit-log-btn").forEach(m=>{m.addEventListener("click",y=>{if(y.target.closest(".delete-log-btn"))return;const E=m.dataset.type,D=m.dataset.id,S=m.dataset.val,B=m.dataset.status;M(E.toUpperCase(),E,D,S,B)})}),i.querySelectorAll(".delete-log-btn").forEach(m=>{m.addEventListener("click",async()=>{const y=m.dataset.id,E=m.dataset.type;if((await f.fire({title:'<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:'<span class="font-black tracking-widest uppercase">Delete</span>',cancelButtonText:'<span class="font-black tracking-widest uppercase">Wait</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)try{const S=await pe(`api/logs.php?type=${E}`,{log_id:y,action:"delete"});(S.success?S.data:{success:!1,error:S.error}).success?(f.fire({toast:!0,position:s,icon:"success",title:"Deleted",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,a)):f.fire("Error","Failed to delete data.","error")}catch(S){f.fire("Error",S.message,"error")}})})}).catch(console.error)}function He(e){const o=Z(),s=`w-full bg-transparent border-b-2 ${o?"border-slate-700 text-white focus:border-brand placeholder-slate-600":"border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300"} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`,a=`w-full bg-transparent border-none ${o?"text-white":"text-royal-blue"} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`,r=["DOLE Field Office","LGU","DEPED","DICT","PCA"];function t(d){if(!d)return"";const g=new Date(d),i=new Date;let l=i.getFullYear()-g.getFullYear();const u=i.getMonth()-g.getMonth();return(u<0||u===0&&i.getDate()<g.getDate())&&l--,l>=0?l:0}const c=`
<form id="edit-beneficiary-drawer-form" class="h-full flex flex-col pt-4 font-montserrat relative pb-20 overflow-y-auto">
    <input type="hidden" name="id" value="${e.id}">
    <input type="hidden" name="gip_id" value="${e.id}">
    
    <div class="flex flex-col relative w-full border-b border-default pb-4 mb-5 pe-12">
        <textarea name="name" class="${a}" rows="1" placeholder="Beneficiary Name" required oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">${e.name||""}</textarea>
        
        <button type="button" id="close-edit-drawer-btn" class="text-gray-400 bg-transparent hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white rounded-lg w-9 h-9 absolute top-0 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>

    <div class="grid grid-cols-2 gap-4 w-full">
        <div class="flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ID No.</span>
            <input type="text" name="seriesNo" value="${e.seriesNo||""}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="2025-00-000">
        </div>
        <div class="flex flex-col gap-1 text-left overflow-hidden">
             <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS</span>
             <select name="remarks" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer">
                 <option value="ONGOING" ${e.remarks==="ONGOING"?"selected":""}>ONGOING</option>
                 <option value="EXPIRED" ${e.remarks==="EXPIRED"?"selected":""}>EXPIRED</option>
                 <option value="RESIGNED" ${e.remarks==="RESIGNED"?"selected":""}>RESIGNED</option>
                 <option value="ABSORBED" ${e.remarks==="ABSORBED"?"selected":""}>ABSORBED</option>
             </select>
        </div>
    </div>

    <div class="flex flex-col gap-1 text-left mt-4 mb-4">
        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
        <input type="text" name="office" id="edit-office-input" value="${e.office||""}" 
            class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full placeholder-indigo-300 dark:placeholder-indigo-700"
            placeholder="e.g. DOLE Field Office">
        <div id="edit-office-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
            ${r.map(d=>`<button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${d}</span></button>`).join("")}
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
                <input type="text" name="birthday" id="edit-bday-input" value="${e.birthday||""}" class="${s} !pl-9 text-right uppercase" placeholder="MM/DD/YYYY" datepicker>
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
                ${Ee.map(d=>`<button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${d.name}</span></button>`).join("")}
            </div>
        </div>
    </div>

    <!-- Contract & Work Info Tab -->
    <h4 class="text-sm font-bold text-heading mt-8 pb-2 border-b border-default whitespace-nowrap">Contract & Work Details</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-4 px-1">
        <div id="edit-date-range-picker" date-rangepicker class="grid grid-cols-2 gap-3 mb-2">
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Start Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="startDate" id="edit-startDate-input" value="${e.startDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono" placeholder="MM/DD/YYYY">
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">End Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="endDate" id="edit-endDate-input" value="${e.endDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono" placeholder="MM/DD/YYYY">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Designation / Role</span>
            <input type="text" name="designation" id="edit-designation-input" value="${e.designation||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Nature of Work...">
            <div id="edit-designation-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                ${Se.map(d=>`<button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${d}</span></button>`).join("")}
            </div>
        </div>
        
        <div class="flex flex-col gap-2 mt-2 pb-6">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Replacement History</span>
            <textarea name="replacement" rows="2" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm placeholder-gray-400" placeholder="History...">${e.replacement||""}</textarea>
        </div>
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
    background-color: ${o?"#1e293b":"#ffffff"} !important; 
    border-radius: 0.75rem !important;
    border: 1px solid ${o?"#334155":"#e2e8f0"} !important;
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
</style>
    `;let n=document.getElementById("edit-drawer-container");n&&n.remove(),n=document.createElement("div"),n.id="edit-drawer-container",n.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",n.setAttribute("tabindex","-1"),n.innerHTML=c,document.body.appendChild(n),setTimeout(()=>{const d=n.querySelector('textarea[name="name"]');d&&(d.style.height="auto",d.style.height=d.scrollHeight+"px")},10),(async()=>{try{const d=await re("api/beneficiaries.php?get_offices=1");if(d.success&&d.data.offices){const g=n.querySelector("#edit-office-suggestions-box");if(g){const i=["DOLE Field Office","LGU","DEPED","DICT","PCA"],l=[...new Set([...i,...d.data.offices])];g.innerHTML=l.map(u=>`
                        <button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                            <span class="option-text">${u}</span>
                        </button>
                    `).join("")}}}catch(d){console.error("Error fetching office suggestions:",d)}})(),ye(async()=>{const{Drawer:d}=await import("./vendor-flowbite-bBKPL--D.js");return{Drawer:d}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:d})=>{const g=new d(n,{placement:"right",backdrop:!0,bodyScrolling:!1,backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{setTimeout(()=>{n.parentNode&&n.remove()},300)}});g.show();const i=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),g.hide()};n.querySelector("#close-edit-drawer-btn").addEventListener("click",i),n.querySelector("#edit-drawer-cancel-btn").addEventListener("click",i);const l=n.querySelector("#edit-beneficiary-drawer-form"),u=n.querySelector("#edit-bday-input"),x=n.querySelector("#edit-age-display"),v=n.querySelector("#edit-startDate-input"),$=n.querySelector("#edit-endDate-input");let w=!1;const P=(M,I)=>{M.addEventListener("input",L=>{const m=L.target.value,y=window.__maskDate(m);if(m!==y&&(L.target.value=y),y.length===10){const E=window.__parseFormattedDate(y);E&&I&&(I(E),document.activeElement===M&&M.blur())}}),M.addEventListener("changeDate",L=>{L.detail&&L.detail.date&&I&&I(L.detail.date)})};u&&P(u,M=>{x&&(!w||!x.value)&&(x.value=window.calculateAge(M))}),v&&P(v,M=>{if($){const I=new Date(M);I.setMonth(I.getMonth()+3),I.setDate(I.getDate()+1);const L=String(I.getMonth()+1).padStart(2,"0"),m=String(I.getDate()).padStart(2,"0"),y=I.getFullYear();$.value=`${L}/${m}/${y}`}}),$&&P($);const O=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null),j=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null);O&&u&&new O(u,{format:"mm/dd/yyyy",autohide:!0});const _=n.querySelector("#edit-date-range-picker");j&&_&&new j(_,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0}),x&&x.addEventListener("input",()=>w=!0);const N=(M,I,L)=>{const m=n.querySelector(M),y=n.querySelector(I);if(!m||!y)return;const E=()=>y.classList.add("hidden"),D=()=>y.classList.remove("hidden");m.addEventListener("focus",D),m.addEventListener("input",()=>{const S=m.value.toLowerCase().trim();let B=0;y.querySelectorAll(L).forEach(q=>{const A=(q.querySelector(".option-text")?.textContent||q.textContent||"").toLowerCase().includes(S);q.style.display=A?"block":"none",A&&B++}),B>0?D():E()}),y.addEventListener("click",S=>{const B=S.target.closest(L);B&&(m.value=(B.querySelector(".option-text")?.textContent||B.textContent||"").trim(),E(),m.dispatchEvent(new Event("change")))}),document.addEventListener("click",S=>{!m.contains(S.target)&&!y.contains(S.target)&&E()})};N("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),N("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),N("#edit-office-input","#edit-office-suggestions-box",".edit-office-option"),l.querySelectorAll("input, select, textarea").forEach(M=>{const I=(M.getAttribute("type")||"").toLowerCase(),L=!M.disabled&&!M.readOnly&&I!=="hidden";M.classList.remove("editable-indicator"),L&&M.classList.add("editable-indicator")}),l.addEventListener("submit",M=>{M.preventDefault();const I=new FormData(l),L={};I.forEach((m,y)=>L[y]=m),L.id=e.id,L.gip_id=e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData(L,!0,!1)&&(i(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),f.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function rt(){window.__maskDate=function(e){let o=e.replace(/\D/g,"").slice(0,8);return o.length>2&&o.length<=4?o=o.slice(0,2)+"/"+o.slice(2):o.length>4&&(o=o.slice(0,2)+"/"+o.slice(2,4)+"/"+o.slice(4)),o},window.__parseFormattedDate=function(e){if(!e)return null;const o=e.split("/");if(o.length===3){const s=parseInt(o[0])-1,a=parseInt(o[1]),r=parseInt(o[2]);if(r>1e3&&s>=0&&s<12&&a>0&&a<=31)return new Date(r,s,a)}return null},window.calculateAge=function(e){if(!e)return"";const o=e instanceof Date?e:new Date(e),s=new Date;let a=s.getFullYear()-o.getFullYear();const r=s.getMonth()-o.getMonth();return(r<0||r===0&&s.getDate()<o.getDate())&&a--,a>=0?a:0},window.viewBeneficiary=async function(e,o=0){const s=e?.id||e?.gip_id||null;if(!s)return;const a=!!(e?.name&&e?.office&&e?.remarks);let r={...e,id:s};if(!a){const n=await Y(`api/beneficiaries.php?id=${encodeURIComponent(s)}`);n.success&&n.data?.success&&n.data?.beneficiary&&(r={...n.data.beneficiary,...r,id:s})}const t=`logs_cache_${s}`;let c=!1;try{if(window.__doleDB&&window.__doleDB.getSecureCache){const w=await window.__doleDB.getSecureCache(t);w&&(r.arLogs=w.arLogs||[],r.dtrLogs=w.dtrLogs||[],r.docs=w.docs||[],ne(r,o),c=!0)}let n=[],d=[],g=[];const[i,l,u,x]=await Promise.all([Y(`api/logs.php?type=ar&gip_id=${encodeURIComponent(s)}`),Y(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(s)}`),Y(`api/logs.php?type=docs&gip_id=${encodeURIComponent(s)}`),Y(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(s)}`)]);n=i.success&&i.data?.success?i.data.logs:[],d=l.success&&l.data?.success?l.data.logs:[],g=u.success&&u.data?.success?u.data.logs:[];const v=x.success&&x.data?.success?x.data.logs:[];if(v.length>0){const w=v[0];r.absorbDate=w.absorption_datetime,r.absorb_where=w.where||w.absorb_where,r.absorb_position=w.position||w.absorb_position,r.absorb_agency=w.agency||w.absorb_agency}const $={arLogs:n,dtrLogs:d,docs:g};window.__doleDB&&window.__doleDB.setSecureCache&&await window.__doleDB.setSecureCache(t,$),r.arLogs=n,r.dtrLogs=d,r.docs=g,c?document.getElementById("beneficiary-drawer-container")&&ne(r,o):ne(r,o)}catch(n){console.error("Error fetching logs/docs:",n),c||(r.arLogs=[],r.dtrLogs=[],r.docs=[],ne(r,o))}},window.showAddDataModal=function(e){de(e)},window.editBeneficiary=function(e){He(e)},window.showExportConfigModal=function(e){Ge(e)},window.showProfileModal=function(){Ve()}}async function Ve(){try{if(we()&&ge){let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=a.id)}catch{}if(!e)throw new Error("User not logged in");const{data:o,error:s}=await ge.from("users").select("*").eq("id",e).single();if(s)throw s;ve(o)}else{let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=`?user_id=${a.id}`)}catch{}const s=await(await fetch(`${V()}api/profile.php${e}`)).json();if(s.success){const a=s.profile;ve(a)}else f.fire({icon:"error",title:"Error",text:s.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function ve(e){const o=e.profile_picture_path?`${V()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(r=>r[0]).join("").substring(0,2).toUpperCase():"US",a=`
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
                            ${o?`<img src="${o}" class="w-full h-full object-cover" />`:s}
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
    `;f.fire({html:a,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:r=>{const t=r.querySelector("#profile-edit-form"),c=r.querySelector("#profile-pic-input"),n=r.querySelector("#profile-avatar-preview");c.addEventListener("change",d=>{const g=d.target.files[0];if(g){const i=new FileReader;i.onload=l=>{n.innerHTML=`<img src="${l.target.result}" class="w-full h-full object-cover" />`},i.readAsDataURL(g)}}),t.addEventListener("submit",async d=>{d.preventDefault();const g=new FormData(t);try{const i=JSON.parse(localStorage.getItem("user"));i&&i.id&&g.append("user_id",i.id)}catch{}try{const l=await(await fetch(`${V()}api/profile.php`,{method:"POST",body:g})).json();l.success?(l.profile&&(localStorage.setItem("user",JSON.stringify(l.profile)),Fe(l.profile)),f.close(),f.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):f.fire({icon:"error",title:"Update Failed",text:l.error||"Something went wrong"})}catch(i){console.error("Error saving profile:",i)}})}})}function Fe(e){const o=e.profile_picture_path?`${V()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(t=>t[0]).join("").substring(0,2).toUpperCase():"US",a=document.querySelectorAll(".sidebar-user-name"),r=document.querySelectorAll(".sidebar-user-avatar");a.forEach(t=>t.textContent=e.full_name),r.forEach(t=>{o?t.innerHTML=`<img src="${o}" class="w-full h-full object-cover" />`:t.textContent=s}),localStorage.setItem("user_full_name",e.full_name),o&&localStorage.setItem("user_avatar",o)}function Ge(e){const o=window.getExportFilters?window.getExportFilters():{office:"ALL",status:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","office","position","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},s=`
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
                                <input type="text" id="export-search" value="${o.search}" placeholder="Name or ID..." 
                                    class="w-full bg-white border border-gray-200 rounded-xl px-9 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Category</label>
                            <div class="relative group">
                                <select id="export-office" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${o.office==="ALL"?"selected":""}>ALL OFFICES</option>
                                    <option value="DOLE" ${o.office==="DOLE"?"selected":""}>DOLE LDNPFO</option>
                                    <option value="LGU" ${o.office==="LGU"?"selected":""}>LGU / LOCAL GOVT</option>
                                    <option value="DICT" ${o.office==="DICT"?"selected":""}>DICT</option>
                                    <option value="DEPED" ${o.office==="DEPED"?"selected":""}>DEPED</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Sort Data By</label>
                            <div class="relative group">
                                <select id="export-sort" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="name" ${o.sort==="name"?"selected":""}>NAME (A-Z)</option>
                                    <option value="startdate" ${o.sort==="startdate"?"selected":""}>START DATE (NEWEST)</option>
                                    <option value="id" ${o.sort==="id"?"selected":""}>ID NUMBER</option>
                                    <option value="office" ${o.sort==="office"?"selected":""}>OFFICE NAME</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <!-- Employment Status -->
                        <div>
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Employment Status Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${["ALL","ONGOING","ABSORBED","RESIGNED","EXPIRED"].map(a=>{const r={ALL:"peer-checked:bg-blue-600",ONGOING:"peer-checked:bg-green-500",ABSORBED:"peer-checked:bg-teal-600",RESIGNED:"peer-checked:bg-gray-700",EXPIRED:"peer-checked:bg-red-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-status" value="${a}" ${o.status===a?"checked":""} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[9px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${r[a]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${a}</span>
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
                                        <input type="radio" name="export-section" value="${a.id}" ${o.section===a.id?"checked":""} class="hidden peer">
                                        <div class="py-1.5 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-1.5 transition-all ${a.color} peer-checked:text-white peer-checked:border-transparent shadow-sm">
                                            <span class="text-[9px] font-black uppercase tracking-tight">${a.label}</span>
                                        </div>
                                    </label>
                                `).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Prepared By (Signature)</label>
                            <input type="text" id="export-prepared" value="${o.preparedBy}" placeholder="Mary Joy Q. Nuñez" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-500 uppercase tracking-tighter ml-1">Approved By (Signature)</label>
                            <input type="text" id="export-approved" value="${o.approvedBy}" placeholder="Noel B. Orias" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mt-4">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-golden-yellow rounded-full"></span>
                        <label class="text-[10px] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Output Column Selection</label>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        ${["ID","Name","Office","Position","Start Date","End Date","Status"].map(a=>{const r=a.toLowerCase().replace(" ",""),t=o.columns.includes(r),c=`col-switch-${r}`;return`
                                <label for="${c}" class="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${c}" name="export-column" value="${r}" ${t?"checked":""} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="text-[9px] font-black text-gray-600 uppercase tracking-tight group-hover:text-emerald-600">${a}</span>
                                </label>
                            `}).join("")}
                    </div>
                </div>

                <div class="pt-2">
                    <button type="submit" class="w-full bg-royal-blue text-white font-black text-[10px] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Apply Profile Configuration
                    </button>
                </div>
            </form>
        </div>
    `;f.fire({html:s,width:"680px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const r=a.querySelector("#export-config-form");r.addEventListener("submit",t=>{t.preventDefault();const c=r.querySelectorAll('input[name="export-column"]:checked'),n=Array.from(c).map(x=>x.value),d=r.querySelector('input[name="export-status"]:checked'),g=r.querySelector('input[name="export-section"]:checked'),i=r.querySelector("#export-prepared").value.trim(),l=r.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",i),localStorage.setItem("ldn_export_approved",l);const u={office:r.querySelector("#export-office").value,status:d?d.value:o.status||"ALL",search:r.querySelector("#export-search").value.trim().toLowerCase(),sort:r.querySelector("#export-sort").value,section:g?g.value:"ALL",preparedBy:i,approvedBy:l,columns:n};e(u),f.close(),setTimeout(()=>{f.fire({toast:!0,position:"top-end",icon:"success",title:"Generator pattern updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const Ee=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],Se=["Administrative Support (Records)","Office Clerk (Finance Section)","Data Encoder (TSSD/LIMS)","Messenger / Liaison Officer","Utility Worker (Maintenance)","Scanning & Digitization Officer","Filing Clerk (Administrative)","Receptionist / Front Desk","IT Technical Support Assist.","Project Monitoring Assist."];function de(e=null){const o=!!e&&!e._isBulk,s=o?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",a=o?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",r=Z(),t={borderBase:r?"border-slate-800":"border-gray-100/80",borderCard:r?"border-slate-800":"border-gray-100",borderInput:r?"border-slate-700":"border-gray-200",borderSugg:r?"border-slate-700":"border-gray-200",borderDivide:r?"divide-slate-700":"divide-gray-50",borderSuggHead:r?"border-slate-700":"border-gray-100",borderStatus:r?"border-slate-700":"border-gray-100",bgCard:r?"bg-slate-900/40":"bg-gray-50/40",bgInput:r?"bg-slate-900":"bg-white",bgSugg:r?"bg-slate-800":"bg-white",bgStatusWrap:r?"bg-slate-800/50":"bg-gray-50",bgActionBar:r?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:r?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:r?"bg-red-900/20":"bg-[#fef2f2]",textHeading:r?"text-green-500":"text-[#2e7d32]",textSubtitle:r?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:r?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:r?"text-slate-400":"text-gray-500",textInput:r?"text-white":"text-slate-900",textAge:r?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:r?"text-slate-500":"text-slate-400",textWorkOpt:r?"text-slate-300":"text-slate-600",textCourseOpt:r?"text-slate-300":"text-gray-600",textCancel:r?"text-red-400":"text-red-700",focusGreen:r?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:r?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:r?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:r?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:r?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:r?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:r?"bg-green-900/20":"bg-white",iconText:r?"text-green-400":"text-[#2e7d32]",iconBorder:r?"border-green-800/30":"border-[#c8e6c9]",dotGreen:r?"bg-green-500":"bg-[#2e7d32]",dotBlue:r?"bg-blue-500":"bg-royal-blue",idText:r?"text-white":"text-royal-blue",placeholder:r?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:r?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:r?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:r?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:r?"text-blue-400":"text-royal-blue",iconColor:r?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:r?"border-red-900/30":"border-[#fee2e2]",saveShadow:r?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:r?"border-slate-700":"border-gray-100/80"},c=`
        <style>
            .datepicker { z-index: 99999 !important; }
            .datepicker-picker { 
                background-color: ${r?"#1e293b":"#ffffff"} !important; 
                border: 1px solid ${r?"#334155":"#e2e8f0"} !important;
                color: ${r?"#f8fafc":"#1e293b"} !important;
                border-radius: 0.75rem !important;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
            }
            .datepicker-header .datepicker-title, .datepicker-header .datepicker-controls .button { 
                color: ${r?"#f8fafc":"#1e293b"} !important;
            }
            .datepicker-cell.selected { background-color: #008148 !important; color: #fff !important; }
            .datepicker-cell:hover { background-color: ${r?"#334155":"#f1f5f9"} !important; }
            .datepicker-controls .button:hover { background-color: ${r?"#334155":"#f1f5f9"} !important; }
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
                ${!o&&!e?._isBulk?`
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3 py-2 ${t.bgCard} border ${t.borderCard} rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 w-full sm:w-auto sm:mr-4 focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                `:""}
            </div>

            <form id="add-beneficiary-form" class="grid grid-cols-1 lg:grid-cols-2 gap-5" data-is-edit="${o}">
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
                                    <input type="text" name="birthday" value="${e?.birthday||""}" id="birthday-input" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY" datepicker>
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
                                        ${Ee.map(n=>`
                                            <div class="course-option px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${n.icon}
                                                <span class="option-text">${n.name}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-1">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-1 h-5 bg-golden-yellow rounded-full"></div>
                            <p class="text-[9px] uppercase font-black ${t.textSectionTitle} tracking-widest">Contract Duration</p>
                        </div>
                        <div id="date-range-picker" date-rangepicker class="grid grid-cols-2 gap-3">
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
                                        ${["DOLE Field Office","LGU","DEPED","DICT","PCA"].map(n=>`
                                            <div class="office-option px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${n}
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">Series Number</label>
                                <input type="text" name="seriesNo" id="series-no-input" value="${e?.seriesNo||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-black ${r?"text-white":"text-royal-blue"} font-mono focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm" placeholder="2025-00-000">
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 tracking-widest ${r?"":"transition-colors"} ${r?"":"group-focus-within:text-royal-blue"}">Nature of Work</label>
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
                                    ${Se.map(n=>`
                                        <div class="work-option px-3 py-2.5 text-[10px] font-black ${t.textWorkOpt} ${t.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
                                            <div class="flex items-center gap-3">
                                                <div class="w-1.5 h-1.5 rounded-full ${t.workDot} transition-colors"></div>
                                                <span class="option-text">${n}</span>
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
                                    ${(()=>{const n={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(d=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${d}" ${e?.remarks===d?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[10px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${n[d]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${d}
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
                    <span>${o?"UPDATE RECORD":"SAVE RECORD"}</span>
                </button>
            </div>
        </div>
    `;f.fire({html:c,width:window.innerWidth<1024?"96vw":"1000px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<1024?"0.75rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:n=>{const d=n.querySelector("#cancel-modal-btn");d&&d.addEventListener("click",()=>{!o&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),f.close(),e?._isBulk&&le.onCancel()});const g=n.querySelector("#bulk-add-btn");g&&g.addEventListener("click",()=>{f.close(),le.init()});const i=(p,b)=>{p.addEventListener("input",h=>{const k=window.__maskDate(h.target.value);if(h.target.value!==k&&(h.target.value=k),k.length===10){const C=window.__parseFormattedDate(k);C&&b&&(b(C),document.activeElement===p&&p.blur())}}),p.addEventListener("changeDate",h=>{h.detail&&h.detail.date&&b&&b(h.detail.date)})},l=n.querySelector("#birthday-input"),u=n.querySelector("#age-display");if(l){i(l,b=>{u&&(u.value=window.calculateAge(b),u.classList.add("animate-pulse"),setTimeout(()=>u.classList.remove("animate-pulse"),400))});const p=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);p&&new p(l,{format:"mm/dd/yyyy",autohide:!0})}const x=n.querySelector("#name-input-field"),v=n.querySelector("#duplicate-warning");if(x&&v){let p;x.addEventListener("input",b=>{const h=b.target.value.trim();if(clearTimeout(p),h.length<3){v.classList.add("hidden");return}p=setTimeout(async()=>{try{const C=await(await fetch(`${V()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h})})).json();C.success&&C.exists?(v.classList.remove("hidden"),Z()?v.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-400":v.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-600"):v.classList.add("hidden")}catch(k){console.error("Duplicate check error:",k)}},500)}),e?.name&&(v.classList.add("hidden"),(async()=>{const h=await(await fetch(`${V()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name})})).json();h.success&&h.exists&&(v.classList.remove("hidden"),Z()?v.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-400":v.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-600")})())}n.querySelector("#full-id-input"),n.querySelector("#series-no-input");const $=n.querySelector('input[name="startDate"]'),w=n.querySelector('input[name="endDate"]'),P=n.querySelectorAll('input[name="remarks"]'),O=n.querySelector("#extension-log-container"),j=n.querySelector("#replacement-search-input"),_=n.querySelector("#replacement-hidden"),N=n.querySelector("#replacement-suggestions"),M=p=>{const b=(p.name||"").toUpperCase().trim(),h=p.startDateFormatted||p.startDate||"N/A",k=p.endDateFormatted||p.endDate||"N/A";return`${b} (${h.toUpperCase()} - ${k.toUpperCase()})`},I=p=>{if(N){if(!p.length){N.innerHTML=`<div class="px-3 py-2 text-[10px] font-bold ${t.textCourseOpt}">No matching beneficiary found.</div>`,N.classList.remove("hidden");return}N.innerHTML=p.map(b=>{const h=M(b);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[10px] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${h.replace(/"/g,"&quot;")}">
                            ${h}
                        </button>
                    `}).join(""),N.classList.remove("hidden"),N.querySelectorAll(".replacement-option").forEach(b=>{b.addEventListener("click",()=>{const h=b.getAttribute("data-replacement")||"";j&&(j.value=h),_&&(_.value=h),N.classList.add("hidden")})})}};let L=null;const m=async(p="")=>{const b=(p||"").trim(),h=`api/beneficiaries.php?replacement_candidates=1&limit=20${b?`&q=${encodeURIComponent(b)}`:""}`,k=await Y(h);k.success&&k.data?.success&&Array.isArray(k.data.candidates)&&I(k.data.candidates)};j&&_&&N&&(j.addEventListener("focus",()=>{m(j.value||"")}),j.addEventListener("input",()=>{_.value=j.value.trim(),clearTimeout(L),L=setTimeout(()=>{m(j.value||"")},250)}),document.addEventListener("click",p=>{!j.contains(p.target)&&!N.contains(p.target)&&N.classList.add("hidden")}));const y=()=>{const p=n.querySelector('input[name="remarks"]:checked');return p?p.value:"ONGOING"},E=p=>{const b=n.querySelector(`input[name="remarks"][value="${p}"]`);b&&(b.checked=!0,S())},D=()=>{if(w&&w.value){const p=window.__parseFormattedDate(w.value);if(!p)return;const b=new Date;b.setHours(0,0,0,0);let h="ONGOING";p<b&&(h="EXPIRED"),E(h)}},S=()=>{if(!O)return;if(y()==="ABSORBED"){const b=e?.absorbDate||new Date().toLocaleString("en-US",{timeZone:"Asia/Manila",month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});O.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${r?"border-slate-800":"border-gray-100"}">
                            <p class="text-[9px] uppercase font-black ${r?"text-green-500":"text-[#2e7d32]"} border-b ${r?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="${r?"bg-green-900/10 border-green-900/30":"bg-[#e8f5e9]/50 border-[#c8e6c9]"} rounded-lg p-2.5 flex items-center justify-between border">
                                    <div>
                                        <label class="text-[8px] ${r?"text-green-500":"text-[#2e7d32]"} font-bold uppercase block mb-0.5">Absorption Date</label>
                                        <p class="text-[10px] font-black ${r?"text-green-400":"text-[#1b5e20]"} uppercase">${b}</p>
                                        <input type="hidden" name="absorbDate" value="${b}">
                                    </div>
                                    <svg class="w-4 h-4 ${r?"text-green-400":"text-[#2e7d32]"}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div class="group">
                                    <label class="text-[9px] ${r?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Where?</label>
                                    <input type="text" name="absorb_where" value="${e?.absorb_where||""}" class="w-full ${r?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${r?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${r?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Where to absorb?">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="group">
                                    <label class="text-[9px] ${r?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Position</label>
                                    <input type="text" name="absorb_position" value="${e?.absorb_position||""}" class="w-full ${r?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${r?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${r?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="What kind of position?">
                                </div>
                                <div class="group">
                                    <label class="text-[9px] ${r?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Agency</label>
                                    <input type="text" name="absorb_agency" value="${e?.absorb_agency||""}" class="w-full ${r?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 ${r?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm ${r?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="On what agency?">
                                </div>
                            </div>
                        </div>
                    `}else O.innerHTML=""};if($){i($,b=>{const h=b.getFullYear();if(w){const k=new Date(b);k.setMonth(k.getMonth()+3),k.setDate(k.getDate()+1);const C=String(k.getMonth()+1).padStart(2,"0"),F=String(k.getDate()).padStart(2,"0"),R=k.getFullYear();w.value=`${C}/${F}/${R}`}D(),h>1900&&h!==lastYear&&(lastYear=h,window.fetchNextIdentifiers&&window.fetchNextIdentifiers(h))}),w&&i(w,()=>D());const p=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null);if(p){const b=n.querySelector("#date-range-picker");b&&new p(b,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0})}if(!o){const b=new Date().getFullYear();window.fetchNextIdentifiers&&window.fetchNextIdentifiers(b)}}P.forEach(p=>p.addEventListener("change",S));const B=n.querySelector("#resign-btn"),q=n.querySelector("#absorb-btn");B&&B.addEventListener("click",()=>E("RESIGNED")),q&&q.addEventListener("click",()=>E("ABSORBED")),n.querySelectorAll('input[type="text"], textarea').forEach(p=>{["id-number-input","full-id-input"].includes(p.id)||p.addEventListener("input",()=>{const b=p.selectionStart,h=p.selectionEnd;p.value=p.value.toUpperCase(),p.setSelectionRange(b,h)})}),D(),S(),U("education-input","course-suggestions","course-option"),U("designation-input","work-suggestions","work-option"),U("office-input","office-suggestions","office-option");function U(p,b,h){const k=n.querySelector(`#${p}`),C=n.querySelector(`#${b}`);if(!k||!C)return;let F=!1;k.addEventListener("focus",()=>C.classList.remove("hidden")),document.addEventListener("click",R=>{!k.contains(R.target)&&!C.contains(R.target)&&C.classList.add("hidden")}),k.addEventListener("input",()=>{if(F){F=!1;return}const R=k.value.toLowerCase(),X=C.querySelectorAll(`.${h}`);let oe=!1;X.forEach(W=>{const T=W.querySelector(".option-text");(T?T.innerText:W.innerText).toLowerCase().includes(R)?(W.style.display="block",oe=!0):W.style.display="none"}),oe?C.classList.remove("hidden"):C.classList.add("hidden")}),C.querySelectorAll(`.${h}`).forEach(R=>{R.addEventListener("click",()=>{const X=R.querySelector(".option-text");k.value=X?X.innerText.trim():R.innerText.trim(),F=!0,C.classList.add("hidden"),k.dispatchEvent(new Event("change"))})})}const A=n.querySelector("#add-beneficiary-form"),H="add_beneficiary_draft";if(!o){const p=localStorage.getItem(H);if(p)try{const b=JSON.parse(p);Object.entries(b).forEach(([h,k])=>{const C=A.elements[h];C&&C.type!=="file"&&C.type!=="hidden"&&(C.value=k)})}catch(b){console.error("Error loading draft",b)}}A.addEventListener("input",p=>{if(!o){const b=new FormData(A),h={};b.forEach((k,C)=>h[C]=k),localStorage.setItem(H,JSON.stringify(h))}}),A&&A.addEventListener("submit",p=>{p.preventDefault(),A.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(z=>{z.classList.remove("ring-2","ring-red-500","!border-red-500")});const h=new FormData(A);let k=!1;const C=z=>{const G=A.querySelector(`[name="${z}"]`);G&&G.classList.add("ring-2","ring-red-500","!border-red-500"),k=!0},F=h.get("name"),R=h.get("contact"),X=h.get("startDate"),oe=h.get("endDate"),W=(h.get("designation")||"").trim();if((!F||F.trim()===""||/[0-9]/.test(F))&&C("name"),R&&R.trim()!==""&&/[^0-9]/.test(R.replace(/[\s\-\+\(\)]/g,""))&&C("contact"),X||C("startDate"),oe||C("endDate"),k)return;const T={};h.forEach((z,G)=>{if(["birthday","startDate","endDate"].includes(G)){const K=window.__parseFormattedDate(z);if(K){const ce=K.getFullYear(),ue=String(K.getMonth()+1).padStart(2,"0"),Ce=String(K.getDate()).padStart(2,"0");T[G]=`${ce}-${ue}-${Ce}`}else T[G]=z}else T[G]=z}),W||(T.designation="N/A"),T.replacement||(T.replacement="");const ee=n.querySelector("#full-id-input")?.value;o?(T.id=e?.id,ee&&(T.gip_id=ee)):(T.id=null,ee&&(T.gip_id=ee)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(T)){if(!o){const G="add_beneficiary_draft",K=A.querySelector('[name="office"]')?.value||"",ce=A.querySelector('[name="designation"]')?.value||"",ue=A.querySelector('[name="education"]')?.value||"";localStorage.setItem(G,JSON.stringify({office:K,designation:ce,education:ue}))}f.close(),setTimeout(()=>{f.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${o?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!o&&e?._isBulk&&le.onSaveSuccess()},100)}else f.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const o=e.target,s=o.querySelector('button[type="submit"]'),a=s.innerHTML;s.disabled=!0,s.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const r=new FormData(o);if((await fetch(o.action,{method:"POST",body:r,headers:{Accept:"application/json"}})).ok)f.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:c=>{c.addEventListener("mouseenter",f.stopTimer),c.addEventListener("mouseleave",f.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),o.reset();else throw new Error("Failed to send")}catch{f.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{s.disabled=!1,s.innerHTML=a}return!1};export{ye as _,Y as a,re as b,We as c,et as d,Qe as e,Ye as f,V as g,tt as h,we as i,Ze as j,Je as k,J as l,Xe as m,rt as n,je as p,Ke as r,ge as s,Fe as u};
