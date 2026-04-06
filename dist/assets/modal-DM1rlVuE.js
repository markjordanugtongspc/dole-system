const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-bBKPL--D.js","./vendor-DHtNC8Ux.js"])))=>i.map(i=>d[i]);
import g from"./vendor-swal-BSk0fVSb.js";import{a as ye}from"./vendor-DHtNC8Ux.js";const ke="true".toLowerCase()==="true";function pe(){return ke}function j(){const e=window.location.pathname,o="/dole-system/",s=e.toLowerCase().indexOf(o.toLowerCase());if(s!==-1)return e.substring(0,s+o.length);const a=e.indexOf("/frontend/");if(a!==-1)return e.substring(0,a+1);const r=e.indexOf("/backend/");return r!==-1?e.substring(0,r+1):"/"}function ne(e="Incorrect Username or Password"){g.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Ee(e=!1){return g.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Fe(){const e=localStorage.getItem("hasVisitedBefore"),o=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),o&&(o.style.display="none")),window.addEventListener("load",()=>{const s=document.querySelector("body > *:not(.page-loader)");s&&s.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),o&&o.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const Z={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const o=r=>r.split("").map(t=>t.charCodeAt(0)),s=r=>("0"+Number(r).toString(16)).substr(-2),a=r=>o(this._key).reduce((t,d)=>t^d,r);return e.split("").map(o).map(a).map(s).join("")}catch(o){return console.error("Encryption Failed",o),null}},decrypt:function(e){try{const o=a=>a.split("").map(r=>r.charCodeAt(0)),s=a=>o(this._key).reduce((r,t)=>r^t,a);return e.match(/.{1,2}/g).map(a=>parseInt(a,16)).map(s).map(a=>String.fromCharCode(a)).join("")}catch(o){return console.error("Decryption Failed",o),null}}};function Ge(){document.querySelectorAll(".login-form-shared").forEach(o=>{const s=o.querySelector('input[name="username"]'),a=o.querySelector('input[name="password"]'),r=o.querySelector('input[name="rememberMe"]');if(s&&a&&r){const t=localStorage.getItem("secure_user"),d=localStorage.getItem("secure_pass");if(t&&d){const n=Z.decrypt(t),c=Z.decrypt(d);n&&c&&(s.value=n,a.value=c,r.checked=!0)}}o.addEventListener("submit",async t=>{t.preventDefault();try{const n=await(await fetch(`${j()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.value,password:a.value})})).json();if(n.success){r.checked?(localStorage.setItem("secure_user",Z.encrypt(s.value)),localStorage.setItem("secure_pass",Z.encrypt(a.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const c=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(n.user));const l=document.getElementById("drawer-login");if(l){l.classList.add("translate-y-full");const i=l.querySelector("[data-drawer-hide]");i&&i.click()}await Ee(c),$e(c)}else{const c=document.getElementById("drawer-login");c?(c.classList.add("translate-y-full"),setTimeout(()=>{ne(),setTimeout(()=>{c.classList.remove("translate-y-full"),a.value="",a.focus()},600)},400)):(ne(),a.value="",a.focus())}}catch(d){console.error("Login Error:",d),g.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function $e(e=!1){const o=document.getElementById("left-panel"),s=document.getElementById("right-panel"),a=document.getElementById("left-panel-content"),r=document.getElementById("right-panel-content");a&&(a.style.opacity="0"),r&&(r.style.opacity="0");const t=document.createElement("div");t.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const d=e?"":"animate__delay-1s",n=e?"animation-duration: 0.8s;":"animation-duration: 2s;";t.innerHTML=`
        <img src="${j()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${d}" style="${n}" alt="DOLE Logo">
    `,document.body.appendChild(t);const c=e?0:1e3,l=e?600:1500;setTimeout(()=>{o&&o.classList.add("animate-slide-left"),s&&s.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${j()}frontend/dashboard/`},l)},c)}function Ue(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${j()}`})}function He(){const e=document.getElementById("mobile-splash"),o=document.getElementById("show-login-btn"),s=document.getElementById("back-to-splash"),a=document.getElementById("mobile-bg-content"),r=document.getElementById("mobile-welcome-text"),t=document.getElementById("reopen-login-drawer"),d=document.getElementById("request-notifications-btn"),n=async()=>{if("Notification"in window){const m=await Notification.requestPermission();console.log("Notification permission:",m),m==="granted"&&d&&d.classList.add("hidden")}};Notification.permission==="default"&&d&&(d.classList.remove("hidden"),d.addEventListener("click",n));const c=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&n();const m=document.getElementById("drawer-login");m&&m.classList.remove("translate-y-full")},800))},l=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};o&&o.addEventListener("click",c),document.querySelectorAll(".forgot-password-link").forEach(m=>{m.addEventListener("click",x=>{x.target.closest("#mobile-splash")&&c()})}),s&&s.addEventListener("click",()=>{const m=document.getElementById("drawer-login");if(m){m.classList.add("translate-y-full");const x=m.querySelector("[data-drawer-hide]");x&&x.click()}l()});const u=document.getElementById("drawer-login"),b=document.getElementById("curved-welcome"),p=document.getElementById("peoples-bg");u&&new MutationObserver(x=>{x.forEach(L=>{L.attributeName==="class"&&(u.classList.contains("translate-y-full")?(a&&(a.style.transform="translateY(0)"),r&&(r.style.opacity="1",r.style.transform="translateY(0) scale(1)"),b&&(b.style.opacity="0",b.style.transform="scale(0.5)"),t&&e&&e.style.visibility==="hidden"&&(t.style.opacity="1",t.style.transform="scale(1)"),p&&(p.classList.add("opacity-0","scale-0"),p.classList.remove("opacity-40","scale-[1.6]"))):(a&&(a.style.transform="translateY(-35%)"),r&&(r.style.opacity="0",r.style.transform="translateY(20px) scale(0.9)"),b&&(b.style.opacity="1",b.style.transform="scale(1)"),t&&(t.style.opacity="0",t.style.transform="scale(0)"),p&&(p.classList.remove("opacity-0","scale-0"),p.classList.add("opacity-40","scale-[1.6]"))))})}).observe(u,{attributes:!0})}const X=()=>"false".toLowerCase()==="true";function Se(e){try{return JSON.stringify(e)}catch{return"[unserializable]"}}const W={debug(...e){X()&&console.debug(...e)},info(...e){X()&&console.info(...e)},warn(...e){X()&&console.warn(...e)},error(...e){console.error(...e)},table(e){X()&&console.table(e)},json(e,o){X()&&console.debug(e,Se(o))}};async function Y(e,o={}){const a=`${j()}${e}`;let r=null;try{const d=JSON.parse(localStorage.getItem("user"));d&&(r=d.user_id||d.id||null)}catch{}const t={headers:{"Content-Type":"application/json",...r?{"X-User-Id":r}:{},...o.headers},...o};try{if(W.debug("[API] Request",{url:a,method:t.method||"GET",hasUserId:!!r}),t.body)try{W.json("[API] Payload",JSON.parse(t.body))}catch{W.debug("[API] Payload (raw)",t.body)}const d=await fetch(a,t);if(!d.ok)throw new Error(`HTTP ${d.status}: ${d.statusText}`);const n=await d.json();return W.debug("[API] Response",{url:a,ok:!0}),{success:!0,data:n}}catch(d){return W.error("API Request Error:",d),{success:!1,error:d.message}}}async function z(e){return Y(e,{method:"GET"})}async function oe(e,o){return Y(e,{method:"POST",body:JSON.stringify(o)})}async function Ce(e,o){return Y(e,{method:"PUT",body:JSON.stringify(o)})}async function ze(e,o){const s=new URLSearchParams(o).toString();return Y(`${e}?${s}`,{method:"PATCH"})}class Be{constructor(){this.intervals=new Map,this.isPageVisible=!0,document.addEventListener("visibilitychange",()=>{this.isPageVisible=!document.hidden,this.isPageVisible?console.log("[Polling] Page visible - resuming normal activity"):console.log("[Polling] Page hidden - reducing activity")})}start(o,s,a=1e4){this.stop(o),s();const r=setInterval(async()=>{this.isPageVisible&&await s()},a);this.intervals.set(o,r),console.log(`[Polling] Started: ${o} (every ${a}ms)`)}stop(o){this.intervals.has(o)&&(clearInterval(this.intervals.get(o)),this.intervals.delete(o),console.log(`[Polling] Stopped: ${o}`))}stopAll(){this.intervals.forEach((o,s)=>this.stop(s)),console.log("[Polling] All intervals stopped")}getActivePolls(){return Array.from(this.intervals.keys())}}const Le=new Be;function Ve(){typeof window.initFlowbite=="function"?(window.initFlowbite(),console.log("[Flowbite] Components re-initialized")):console.warn("[Flowbite] initFlowbite() not available globally")}function Je(e,o="",s="info"){g.fire({toast:!0,position:"top-end",icon:s,title:e,text:o,showConfirmButton:!1,timer:3e3,timerProgressBar:!0})}function Xe(e){return JSON.stringify(e)}window.addEventListener("beforeunload",()=>{Le.stopAll()});const De="modulepreload",Ie=function(e,o){return new URL(e,o).href},ie={},ge=function(o,s,a){let r=Promise.resolve();if(s&&s.length>0){let l=function(i){return Promise.all(i.map(u=>Promise.resolve(u).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};const d=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),c=n?.nonce||n?.getAttribute("nonce");r=l(s.map(i=>{if(i=Ie(i,a),i in ie)return;ie[i]=!0;const u=i.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(a)for(let m=d.length-1;m>=0;m--){const x=d[m];if(x.href===i&&(!u||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${b}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":De,u||(p.as="script"),p.crossOrigin="",p.href=i,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,x)=>{p.addEventListener("load",m),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(d){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=d,window.dispatchEvent(n),!n.defaultPrevented)throw d}return r.then(d=>{for(const n of d||[])n.status==="rejected"&&t(n.reason);return o().catch(t)})};let ae=null;if(pe()){const e="https://llnddycvbcetztzwbdpx.supabase.co",o="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{ae=ye(e,o),console.log("[SUPABASE SDK] Client Initialized Successfully")}catch(s){console.error("[SUPABASE SDK] Failed to initialize client:",s)}}else console.log("[SUPABASE SDK] Supabase mode is disabled (Localhost PHP mode active).");const V="color-theme",Ae=3600*24*365;function Me(e,o,s){document.cookie=`${e}=${o}; max-age=${s}; path=/; SameSite=Lax`}function be(e){const o=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return o?decodeURIComponent(o[1]):null}function fe(){const e=localStorage.getItem(V)||be(V);return e==="dark"||e==="light"?e:"light"}function ee(e){const o=document.documentElement;e==="dark"?o.classList.add("dark"):o.classList.remove("dark"),localStorage.setItem(V,e),Me(V,e,Ae),je(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function se(){const e=fe();ee(e==="dark"?"light":"dark")}function je(e){const o=e==="dark",s=document.getElementById("pref-dark-mode");s&&(s.checked=o);const a=document.getElementById("theme-toggle-dark-icon"),r=document.getElementById("theme-toggle-light-icon");a&&r&&(a.classList.toggle("hidden",o),r.classList.toggle("hidden",!o));const t=document.getElementById("sidebar-theme-label");t&&(t.textContent=o?"Light Mode":"Dark Mode")}function We(){const e=fe();ee(e);const o=document.getElementById("pref-dark-mode");o&&o.addEventListener("change",()=>{ee(o.checked?"dark":"light")});const s=document.getElementById("theme-toggle-btn");s&&s.addEventListener("click",se),document.querySelectorAll("[data-theme-toggle]").forEach(a=>{a.addEventListener("click",se)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{localStorage.getItem(V)||be(V)||ee(a.matches?"dark":"light")})}function _(){return document.documentElement.classList.contains("dark")}window.toggleTheme=se;window.isDarkMode=_;const te={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=_(),o={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},s=`
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
        `;g.fire({html:s,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:a=>{const r=a.querySelector("#csv-upload"),t=a.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(n=>{t.addEventListener(n,d,!1)});function d(n){n.preventDefault(),n.stopPropagation()}["dragenter","dragover"].forEach(n=>{t.addEventListener(n,()=>{t.classList.add("border-blue-500","bg-blue-50/50"),e&&t.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(n=>{t.addEventListener(n,()=>{t.classList.remove("border-blue-500","bg-blue-50/50"),e&&t.classList.remove("dark:bg-slate-800/80")},!1)}),r.addEventListener("change",n=>{const c=n.target.files[0];if(c){const l=a.querySelector("#auto-save-toggle");this.isAutoSave=l?l.checked:!1,this.handleFile(c)}}),t.addEventListener("drop",n=>{const l=n.dataTransfer.files[0];if(l){const i=a.querySelector("#auto-save-toggle");this.isAutoSave=i?i.checked:!1,this.handleFile(l)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){g.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const o=new FileReader;o.onload=s=>{const a=s.target.result;this.parseCSV(a)},o.readAsText(e)},async parseCSV(e){let o=[],s="",a=!1;for(let r=0;r<e.length;r++){let t=e[r];t==='"'&&(a=!a),!a&&(t===`
`||t==="\r")?(t==="\r"&&e[r+1]===`
`&&r++,s.trim()!==""&&o.push(s),s=""):s+=t}s.trim()!==""&&o.push(s),this.queue=[];for(let r=0;r<o.length;r++){let t=o[r].trim();if(!t)continue;let d=[],n="",c=!1;for(let l=0;l<t.length;l++){let i=t[l];i==='"'?c=!c:i===","&&!c?(d.push(n.replace(/(^"|"$)/g,"").trim()),n=""):n+=i}if(d.push(n.replace(/(^"|"$)/g,"").trim()),d.length>=2){const l=d[3];if(!l||isNaN(parseInt(l)))continue;const i=d[1];if(!i||i.toLowerCase()==="name"||i.toLowerCase()==="full name")continue;const u=d[2];let b=d[4]?d[4].toUpperCase().trim():"",p="";(b==="F"||b.includes("FEMALE"))&&(p="Female"),(b==="M"||b.includes("MALE"))&&(p="Male");const m=d[5],x=d[6],L=d[7],$=this.formatDate(d[8]),D=this.formatDate(d[9]);this.queue.push({name:i,address:u,age:l,gender:p,education:m,startDate:$,endDate:D,office:x,designation:L})}}if(this.queue.length>0){try{g.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{g.showLoading()}});const r=this.queue.map(n=>n.name),d=await(await fetch(`${j()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({names:r})})).json();if(d.success&&d.duplicates&&d.duplicates.length>0){const n=new Set(d.duplicates.map(l=>l.toLowerCase().trim())),c=this.queue.length;this.queue=this.queue.filter(l=>{const i=n.has(l.name.toLowerCase().trim());return i&&console.warn(`%c[Bulk Add] SKIPPED: ${l.name} already exists in database.`,"color: #ff9800; font-weight: bold;"),!i}),console.log(`[Bulk Add] Removed ${c-this.queue.length} duplicates ahead of time.`)}}catch(r){console.error("Bulk duplicate check failed:",r)}if(this.queue.length===0){g.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,g.close(),this.processNext()}else g.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){_();const e=Math.round(this.currentIndex/this.queue.length*100),o=`
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
        `;if(g.isVisible()&&g.getPopup().querySelector("#bulk-progress-bar")){const s=document.getElementById("bulk-progress-bar"),a=g.getPopup().querySelector("span.text-\\[10px\\]"),r=document.getElementById("bulk-current-name");s&&(s.style.width=`${e}%`),a&&(a.textContent=`${this.currentIndex} / ${this.queue.length}`),r&&(r.textContent=this.queue[this.currentIndex]?.name||"...")}else g.fire({html:o,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:s=>{s.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const o=new Date(e);if(isNaN(o.getTime())){const t=e.split("/");return t.length===3?`${t[2]}-${t[1].padStart(2,"0")}-${t[0].padStart(2,"0")}`:""}const s=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getDate()).padStart(2,"0");return`${s}-${a}-${r}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{const s=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),[a,r]=await Promise.all([z(`api/beneficiaries.php?next_id&year=${s}`),z(`api/beneficiaries.php?next_series_no&year=${s}`)]);a.success&&a.data?.success&&a.data?.nextId&&(e.gip_id=a.data.nextId,e.id=null),r.success&&r.data?.success&&r.data?.nextSeries&&(e.seriesNo=r.data.nextSeries)}catch(s){console.warn("[Bulk Add] Identifier fetch failed, continuing:",s?.message||s)}const o=await window.addBeneficiaryData(e);this.isActive&&(o?this.onSaveSuccess():re(e))})():re(e)):re(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),g.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,g.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=te;function le(e){if(!e)return"";const o=new Date(e),s=new Date;let a=s.getFullYear()-o.getFullYear();const r=s.getMonth()-o.getMonth();return(r<0||r===0&&s.getDate()<o.getDate())&&a--,a>=0?a:0}function de(e){return e?e.includes("DOLE")?"bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800":e.includes("DepEd")?"bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/40 dark:text-orange-300 dark:border-orange-800":e.includes("LGU")?"bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800":e.includes("DICT")?"bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 dark:border-cyan-800":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300":"bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300"}function Ne(e){if(!e)return"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300";const o=e.toUpperCase();return o==="ONGOING"?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800":o==="EXPIRED"?"bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800":o==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900":o==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900":"bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300"}function Q(e,o=0){let s=o;const a=e.arLogs||[],r=e.dtrLogs||[],t=e.docs||[],d=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],n=d.map(i=>{const u=t.find(b=>b.name.toUpperCase()===i.toUpperCase());return u||{name:i,status:"PENDING",id:null}});t.forEach(i=>{d.some(b=>b.toUpperCase()===i.name.toUpperCase())||n.push(i)});const c=`
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
                <span class="${Ne(e.remarks)} text-[10px] font-black px-2 py-1 rounded border uppercase tracking-widest shadow-sm border-l-4 ${e.remarks==="ONGOING"?"border-l-green-600":"border-l-red-600"}">${e.remarks}</span>
                <!-- Desktop Only Office Badge (Pill Style) -->
                <span class="${de(e.office)} hidden sm:inline-block text-[9px] font-black px-2.5 py-1 rounded-full border shadow-sm truncate max-w-[120px] lg:max-w-none" title="${e.office}">${e.office}</span>
            </div>
        </div>
    </div>

    <!-- Mobile Only Assigned Office Row (Rectangle Style) -->
    <div class="flex flex-col gap-1 text-left mt-4 sm:hidden">
        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
        <span class="${de(e.office)} text-[10px] font-black px-2.5 py-2 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-indigo-500 w-full truncate" title="${e.office}">${e.office}</span>
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
        <span class="${e.age||le(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right">${e.age||le(e.birthday)||"N/A"}</span>
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
<div class="mt-8 pt-6 border-t border-default relative">
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
            ${n.map(i=>{const u=i.status.toUpperCase(),p={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[u]||u,m=p==="COMPLETED",x=p==="REJECTED",L=m?"text-green-500":x?"text-red-500":"text-gray-400 dark:text-gray-500",$=m?"bg-green-50/50 dark:bg-green-900/10":x?"bg-red-50/50 dark:bg-red-900/10":"bg-gray-50/50 dark:bg-slate-800/50",D=m?"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer":x?"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer":"bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer";let I='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return m?I='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>':x&&(I='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${$}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${L}">
                            ${I}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${m?"text-heading":"text-gray-500 dark:text-gray-400"} uppercase tracking-tight flex-1">${i.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${D} text-[10px] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${i.id}" data-name="${i.name}" data-status="${p} cursosr-pointer">
                        ${p}
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
                    ${r.length?r.map(i=>{const u=i.status||"PENDING";let b=u==="VERIFIED"||u==="COMPLETED"?"text-green-500":u==="REJECTED"||u==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors edit-log-btn" data-type="dtr" data-id="${i.id}" data-val="${i.date||i.createdAt}" data-status="${u}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${i.date||i.createdAt}</span>
                            <span class="text-[11px] font-bold ${b} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${u}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${i.id}">
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
                    ${a.length?a.map(i=>{const u=i.status||"PENDING";let b=u==="VERIFIED"||u==="COMPLETED"?"text-green-500":u==="REJECTED"||u==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";return`
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors edit-log-btn" data-type="ar" data-id="${i.id}" data-val="${i.period||i.createdAt}" data-status="${u}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${i.period||i.createdAt}</span>
                            <span class="text-[11px] font-bold ${b} uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${u}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${i.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `}).join(""):'<p class="text-[11px] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No AR logs submitted.</p>'}
                </div>
            </div>
         </div>
    </div>

    <!-- Navigation Below (Same as modal logic but styled for drawer) -->
    <!-- Grid columns structure for responsive desktop and mobile -->
    <div class="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-slate-800 relative z-10 w-full mb-4">
        <button id="drawer-prev-btn" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-secondary-medium text-heading text-[10px] sm:text-xs font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm border border-default-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-tertiary cursor-pointer">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREVIOUS
        </button>
        <button id="drawer-next-btn" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand text-white text-[10px] sm:text-xs font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm shadow-brand-medium/50 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-strong cursor-pointer">
            NEXT
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
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
    `;let l=document.getElementById("beneficiary-drawer-container");l&&l.remove(),l=document.createElement("div"),l.id="beneficiary-drawer-container",l.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl",l.setAttribute("tabindex","-1"),l.setAttribute("data-drawer-backdrop","true"),l.innerHTML=c,document.body.appendChild(l),ge(async()=>{const{Drawer:i}=await import("./vendor-flowbite-bBKPL--D.js");return{Drawer:i}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:i})=>{const u={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{setTimeout(()=>{l&&l.parentNode&&l.remove()},300)}},b=new i(l,u);b.show(),l.querySelector("#close-drawer-btn").addEventListener("click",()=>b.hide());const m=l.querySelector("#drawer-prev-btn"),x=l.querySelector("#drawer-next-btn"),L=2,$=()=>{l.querySelectorAll("[id^=drawer-page-]").forEach((v,B)=>{v.classList.toggle("hidden",B!==s)}),m.disabled=s===0,x.disabled=s===L,m.classList.toggle("opacity-50",s===0),x.classList.toggle("opacity-50",s===L)};m.addEventListener("click",()=>{s>0&&s--,$()}),x.addEventListener("click",()=>{s<L&&s++,$()}),$(),l.querySelectorAll(".drawer-doc-btn").forEach(v=>{v.addEventListener("click",async()=>{const B=v.dataset.name,S=v.dataset.status,C=await g.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',html:`
                        <div class="font-montserrat text-left px-2">
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Set status for <span class="text-brand">${B}</span></label>
                            <select id="swal-doc-status" class="bg-gray-50 border border-gray-200 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all mb-4">
                                <option value="PENDING" ${S==="PENDING"?"selected":""}>PENDING</option>
                                <option value="COMPLETED" ${S==="COMPLETED"?"selected":""}>COMPLETED</option>
                                <option value="REJECTED" ${S==="REJECTED"?"selected":""}>REJECTED</option>
                            </select>
                        </div>
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest">Update</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>document.getElementById("swal-doc-status").value});if(C.isConfirmed){const w=C.value;if(w===S)return;try{const f={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"}[w]||w,h=await oe("api/logs.php?type=docs",{gip_id:e.id,doc_name:B,status:f}),k=h.success?h.data:{success:!1,error:h.error};k.success?(g.fire({toast:!0,position:"top-end",icon:"success",title:"Status updated!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,s)):g.fire("Error",k.error||"Failed to update","error")}catch(M){g.fire("Error",M.message,"error")}}})});const D=()=>{if(!r.length)return new Date().toISOString().split("T")[0];const v=new Date(r[0].date);return v.setDate(v.getDate()+1),v.toISOString().split("T")[0]},I=()=>{if(!a.length){const C=new Date,w=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][C.getMonth()];return C.getDate()<=15?`${w} 1-15`:`${w} 16-${new Date(C.getFullYear(),C.getMonth()+1,0).getDate()}`}const v=a[0].period||"",B=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],S=v.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+)/);if(S){let C=S[1],w=parseInt(S[2]),M=B.indexOf(C);if(M!==-1)return w===1?`${C} 16-${new Date(new Date().getFullYear(),M+1,0).getDate()}`:`${B[(M+1)%12]} 1-15`}return"NEW PERIOD"},T=async(v,B)=>{g.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),g.showLoading();try{const S={gip_id:e.id};v==="dtr"&&(S.record_date=B),v==="ar"&&(S.period=B);const C=await oe(`api/logs.php?type=${v}`,S);(C.success?C.data:{success:!1,error:C.error}).success?(g.fire({toast:!0,position:"top-end",icon:"success",title:"Auto-Added!",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,s)):g.fire("Error","Failed to add log.","error")}catch(S){g.fire("Error",S.message,"error")}},F=async(v,B,S,C,w)=>{const M=B==="dtr"?"Record Date":"Period";_();const f="flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[10px] sm:text-xs gap-2 ",h='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>',k='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>',{value:E}=await g.fire({title:`<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${v} Log</span>`,html:`
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">${M}</label>
                            <input id="swal-log-val" value="${C}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${w==="VERIFIED"?"checked":""}>
                                    <div class="${f} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${h}
                                        <span>Verify</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${w==="REJECTED"||w==="DECLINED"?"checked":""}>
                                    <div class="${f} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${k}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2"},buttonsStyling:!1,preConfirm:()=>{const y=document.querySelector('input[name="swal-log-status"]:checked');return{val:document.getElementById("swal-log-val").value.trim().toUpperCase(),status:y?y.value:"PENDING"}}});if(E&&(E.val!==C||E.status!==w))try{const y={type:B,id:S,status:E.status};B==="dtr"&&(y.record_date=E.val),B==="ar"&&(y.period=E.val);const P=await Ce("api/logs.php",y),A=P.success?P.data:{success:!1,error:P.error};A.success?(g.fire({toast:!0,position:"top-end",icon:"success",title:"Log Updated!",showConfirmButton:!1,timer:1500}),b.hide(),setTimeout(()=>window.viewBeneficiary(e,s),400)):g.fire("Error",A.error||"Failed to update log.","error")}catch(y){g.fire("Error",y.message,"error")}},N=l.querySelector("#add-dtr-log-btn");N&&N.addEventListener("click",()=>T("dtr",D()));const O=l.querySelector("#add-ar-log-btn");O&&O.addEventListener("click",()=>T("ar",I())),l.querySelectorAll(".edit-log-btn").forEach(v=>{v.addEventListener("click",B=>{if(B.target.closest(".delete-log-btn"))return;const S=v.dataset.type,C=v.dataset.id,w=v.dataset.val,M=v.dataset.status;F(S.toUpperCase(),S,C,w,M)})}),l.querySelectorAll(".delete-log-btn").forEach(v=>{v.addEventListener("click",async()=>{const B=v.dataset.id,S=v.dataset.type;if((await g.fire({title:'<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',text:"This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonText:'<span class="font-black tracking-widest uppercase">Delete</span>',cancelButtonText:'<span class="font-black tracking-widest uppercase">Wait</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)try{const w=await oe(`api/logs.php?type=${S}`,{log_id:B,action:"delete"});(w.success?w.data:{success:!1,error:w.error}).success?(g.fire({toast:!0,position:"top-end",icon:"success",title:"Deleted",showConfirmButton:!1,timer:1500}),window.viewBeneficiary&&window.viewBeneficiary(e,s)):g.fire("Error","Failed to delete data.","error")}catch(w){g.fire("Error",w.message,"error")}})})}).catch(console.error)}function Oe(e){const o=_(),s=`w-full bg-transparent border-b-2 ${o?"border-slate-700 text-white focus:border-brand placeholder-slate-600":"border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300"} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`,a=`w-full bg-transparent border-none ${o?"text-white":"text-royal-blue"} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`,r=["DOLE Field Office","LGU","DEPED","DICT","PCA"];function t(c){if(!c)return"";const l=new Date(c),i=new Date;let u=i.getFullYear()-l.getFullYear();const b=i.getMonth()-l.getMonth();return(b<0||b===0&&i.getDate()<l.getDate())&&u--,u>=0?u:0}const d=`
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
            ${r.map(c=>`<button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${c}</span></button>`).join("")}
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
            <input type="date" name="birthday" id="edit-bday-input" value="${e.birthday||""}" class="${s} text-right uppercase max-w-[150px]">
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
                ${he.map(c=>`<button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${c.name}</span></button>`).join("")}
            </div>
        </div>
    </div>

    <!-- Contract & Work Info Tab -->
    <h4 class="text-sm font-bold text-heading mt-8 pb-2 border-b border-default whitespace-nowrap">Contract & Work Details</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-4 px-1">
        <div class="grid grid-cols-2 gap-3 mb-2">
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Start Date</span>
                <input type="date" name="startDate" value="${e.startDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm">
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">End Date</span>
                <input type="date" name="endDate" value="${e.endDate||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm">
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Designation / Role</span>
            <input type="text" name="designation" id="edit-designation-input" value="${e.designation||""}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Nature of Work...">
            <div id="edit-designation-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                ${xe.map(c=>`<button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${c}</span></button>`).join("")}
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
/* Editable field hint icon (shown only for editable controls) */
.editable-indicator {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m16.862 3.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L9.582 16.07a4.5 4.5 0 0 1-1.897 1.13L4 18l.8-3.685a4.5 4.5 0 0 1 1.13-1.897L16.862 3.487Z' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 14px 14px;
    background-position: right 0.6rem center;
    padding-right: 2rem;
}
</style>
    `;let n=document.getElementById("edit-drawer-container");n&&n.remove(),n=document.createElement("div"),n.id="edit-drawer-container",n.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",n.setAttribute("tabindex","-1"),n.innerHTML=d,document.body.appendChild(n),setTimeout(()=>{const c=n.querySelector('textarea[name="name"]');c&&(c.style.height="auto",c.style.height=c.scrollHeight+"px")},10),(async()=>{try{const c=await Y("api/beneficiaries.php?get_offices=1");if(c.success&&c.data.offices){const l=n.querySelector("#edit-office-suggestions-box");if(l){const i=["DOLE Field Office","LGU","DEPED","DICT","PCA"],u=[...new Set([...i,...c.data.offices])];l.innerHTML=u.map(b=>`
                        <button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                            <span class="option-text">${b}</span>
                        </button>
                    `).join("")}}}catch(c){console.error("Error fetching office suggestions:",c)}})(),ge(async()=>{const{Drawer:c}=await import("./vendor-flowbite-bBKPL--D.js");return{Drawer:c}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:c})=>{const l=new c(n,{placement:"right",backdrop:!0,bodyScrolling:!1,backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{setTimeout(()=>{n.parentNode&&n.remove()},300)}});l.show(),n.querySelector("#close-edit-drawer-btn").addEventListener("click",()=>l.hide()),n.querySelector("#edit-drawer-cancel-btn").addEventListener("click",()=>l.hide());const i=n.querySelector("#edit-beneficiary-drawer-form"),u=n.querySelector("#edit-bday-input"),b=n.querySelector("#edit-age-display");let p=!1;u&&b&&(b.addEventListener("input",()=>{p=!0}),u.addEventListener("change",x=>{x.target.value&&(!p||!b.value)&&(b.value=t(x.target.value))}));const m=(x,L,$)=>{const D=n.querySelector(x),I=n.querySelector(L);if(!D||!I)return;const T=()=>I.classList.add("hidden"),F=()=>I.classList.remove("hidden");D.addEventListener("focus",F),D.addEventListener("input",()=>{const N=D.value.toLowerCase().trim();let O=0;I.querySelectorAll($).forEach(v=>{const S=(v.querySelector(".option-text")?.textContent||v.textContent||"").toLowerCase().includes(N);v.style.display=S?"block":"none",S&&O++}),O>0?F():T()}),I.addEventListener("click",N=>{const O=N.target.closest($);O&&(D.value=(O.querySelector(".option-text")?.textContent||O.textContent||"").trim(),T(),D.dispatchEvent(new Event("change")))}),document.addEventListener("click",N=>{!D.contains(N.target)&&!I.contains(N.target)&&T()})};m("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),m("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),m("#edit-office-input","#edit-office-suggestions-box",".edit-office-option"),i.querySelectorAll("input, select, textarea").forEach(x=>{const L=(x.getAttribute("type")||"").toLowerCase(),$=!x.disabled&&!x.readOnly&&L!=="hidden";x.classList.remove("editable-indicator"),$&&x.classList.add("editable-indicator")}),i.addEventListener("submit",x=>{x.preventDefault();const L=new FormData(i),$={};L.forEach((D,I)=>$[I]=D),$.id=e.id,$.gip_id=e.id,window.addBeneficiaryData&&(async()=>await window.addBeneficiaryData($,!0,!1)&&(l.hide(),window.viewBeneficiary&&setTimeout(()=>window.viewBeneficiary({id:e.id},0),100),g.fire({toast:!0,position:"top-end",icon:"success",title:"Record Updated",showConfirmButton:!1,timer:3e3})))()})})}function Ye(){window.viewBeneficiary=async function(e,o=0){const s=`logs_cache_${e.id}`;let a=!1;try{if(window.__doleDB&&window.__doleDB.getSecureCache){const p=await window.__doleDB.getSecureCache(s);p&&(e.arLogs=p.arLogs||[],e.dtrLogs=p.dtrLogs||[],e.docs=p.docs||[],Q(e,o),a=!0)}let r=[],t=[],d=[];const[n,c,l,i]=await Promise.all([z(`api/logs.php?type=ar&gip_id=${encodeURIComponent(e.id)}`),z(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(e.id)}`),z(`api/logs.php?type=docs&gip_id=${encodeURIComponent(e.id)}`),z(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(e.id)}`)]);r=n.success&&n.data?.success?n.data.logs:[],t=c.success&&c.data?.success?c.data.logs:[],d=l.success&&l.data?.success?l.data.logs:[];const u=i.success&&i.data?.success?i.data.logs:[];if(u.length>0){const p=u[0];e.absorbDate=p.absorption_datetime,e.absorb_where=p.where||p.absorb_where,e.absorb_position=p.position||p.absorb_position,e.absorb_agency=p.agency||p.absorb_agency}const b={arLogs:r,dtrLogs:t,docs:d};window.__doleDB&&window.__doleDB.setSecureCache&&await window.__doleDB.setSecureCache(s,b),e.arLogs=r,e.dtrLogs=t,e.docs=d,a?document.getElementById("beneficiary-drawer-container")&&Q(e,o):Q(e,o)}catch(r){console.error("Error fetching logs/docs:",r),a||(e.arLogs=[],e.dtrLogs=[],e.docs=[],Q(e,o))}},window.showAddDataModal=function(e){re(e)},window.editBeneficiary=function(e){Oe(e)},window.showExportConfigModal=function(e){Re(e)},window.showProfileModal=function(){Pe()}}async function Pe(){try{if(pe()&&ae){let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=a.id)}catch{}if(!e)throw new Error("User not logged in");const{data:o,error:s}=await ae.from("users").select("*").eq("id",e).single();if(s)throw s;ce(o)}else{let e="";try{const a=JSON.parse(localStorage.getItem("user"));a&&a.id&&(e=`?user_id=${a.id}`)}catch{}const s=await(await fetch(`${j()}api/profile.php${e}`)).json();if(s.success){const a=s.profile;ce(a)}else g.fire({icon:"error",title:"Error",text:s.error||"Failed to load profile"})}}catch(e){console.error("Error fetching profile:",e)}}function ce(e){const o=e.profile_picture_path?`${j()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(r=>r[0]).join("").substring(0,2).toUpperCase():"US",a=`
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
    `;g.fire({html:a,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:r=>{const t=r.querySelector("#profile-edit-form"),d=r.querySelector("#profile-pic-input"),n=r.querySelector("#profile-avatar-preview");d.addEventListener("change",c=>{const l=c.target.files[0];if(l){const i=new FileReader;i.onload=u=>{n.innerHTML=`<img src="${u.target.result}" class="w-full h-full object-cover" />`},i.readAsDataURL(l)}}),t.addEventListener("submit",async c=>{c.preventDefault();const l=new FormData(t);try{const i=JSON.parse(localStorage.getItem("user"));i&&i.id&&l.append("user_id",i.id)}catch{}try{const u=await(await fetch(`${j()}api/profile.php`,{method:"POST",body:l})).json();u.success?(u.profile&&(localStorage.setItem("user",JSON.stringify(u.profile)),Te(u.profile)),g.close(),g.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):g.fire({icon:"error",title:"Update Failed",text:u.error||"Something went wrong"})}catch(i){console.error("Error saving profile:",i)}})}})}function Te(e){const o=e.profile_picture_path?`${j()}${e.profile_picture_path}`:null,s=e.full_name?e.full_name.split(" ").map(t=>t[0]).join("").substring(0,2).toUpperCase():"US",a=document.querySelectorAll(".sidebar-user-name"),r=document.querySelectorAll(".sidebar-user-avatar");a.forEach(t=>t.textContent=e.full_name),r.forEach(t=>{o?t.innerHTML=`<img src="${o}" class="w-full h-full object-cover" />`:t.textContent=s}),localStorage.setItem("user_full_name",e.full_name),o&&localStorage.setItem("user_avatar",o)}function Re(e){const o=window.getExportFilters?window.getExportFilters():{office:"ALL",status:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","office","position","startdate","enddate","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},s=`
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
                        ${["ID","Name","Office","Position","Start Date","End Date","Status"].map(a=>{const r=a.toLowerCase().replace(" ",""),t=o.columns.includes(r),d=`col-switch-${r}`;return`
                                <label for="${d}" class="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${d}" name="export-column" value="${r}" ${t?"checked":""} class="sr-only peer">
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
    `;g.fire({html:s,width:"680px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:a=>{const r=a.querySelector("#export-config-form");r.addEventListener("submit",t=>{t.preventDefault();const d=r.querySelectorAll('input[name="export-column"]:checked'),n=Array.from(d).map(p=>p.value),c=r.querySelector('input[name="export-status"]:checked'),l=r.querySelector('input[name="export-section"]:checked'),i=r.querySelector("#export-prepared").value.trim(),u=r.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",i),localStorage.setItem("ldn_export_approved",u);const b={office:r.querySelector("#export-office").value,status:c?c.value:o.status||"ALL",search:r.querySelector("#export-search").value.trim().toLowerCase(),sort:r.querySelector("#export-sort").value,section:l?l.value:"ALL",preparedBy:i,approvedBy:u,columns:n};e(b),g.close(),setTimeout(()=>{g.fire({toast:!0,position:"top-end",icon:"success",title:"Generator pattern updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const he=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],xe=["Administrative Support (Records)","Office Clerk (Finance Section)","Data Encoder (TSSD/LIMS)","Messenger / Liaison Officer","Utility Worker (Maintenance)","Scanning & Digitization Officer","Filing Clerk (Administrative)","Receptionist / Front Desk","IT Technical Support Assist.","Project Monitoring Assist."];function ue(e){if(!e)return"";const o=new Date(e),s=new Date;let a=s.getFullYear()-o.getFullYear();const r=s.getMonth()-o.getMonth();return(r<0||r===0&&s.getDate()<o.getDate())&&a--,a>=0?a:0}function re(e=null){const o=!!e&&!e._isBulk,s=o?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",a=o?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",r=_(),t={borderBase:r?"border-slate-800":"border-gray-100/80",borderCard:r?"border-slate-800":"border-gray-100",borderInput:r?"border-slate-700":"border-gray-200",borderSugg:r?"border-slate-700":"border-gray-200",borderDivide:r?"divide-slate-700":"divide-gray-50",borderSuggHead:r?"border-slate-700":"border-gray-100",borderStatus:r?"border-slate-700":"border-gray-100",bgCard:r?"bg-slate-900/40":"bg-gray-50/40",bgInput:r?"bg-slate-900":"bg-white",bgSugg:r?"bg-slate-800":"bg-white",bgStatusWrap:r?"bg-slate-800/50":"bg-gray-50",bgActionBar:r?"bg-slate-800/80":"bg-gray-50",bgSaveBtn:r?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:r?"bg-red-900/20":"bg-[#fef2f2]",textHeading:r?"text-green-500":"text-[#2e7d32]",textSubtitle:r?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:r?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:r?"text-slate-400":"text-gray-500",textInput:r?"text-white":"text-slate-900",textAge:r?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:r?"text-slate-500":"text-slate-400",textWorkOpt:r?"text-slate-300":"text-slate-600",textCourseOpt:r?"text-slate-300":"text-gray-600",textCancel:r?"text-red-400":"text-red-700",focusGreen:r?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:r?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:r?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:r?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:r?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:r?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:r?"bg-green-900/20":"bg-white",iconText:r?"text-green-400":"text-[#2e7d32]",iconBorder:r?"border-green-800/30":"border-[#c8e6c9]",dotGreen:r?"bg-green-500":"bg-[#2e7d32]",dotBlue:r?"bg-blue-500":"bg-royal-blue",idText:r?"text-white":"text-royal-blue",placeholder:r?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:r?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:r?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:r?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:r?"text-blue-400":"text-royal-blue",iconColor:r?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:r?"border-red-900/30":"border-[#fee2e2]",saveShadow:r?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:r?"border-slate-700":"border-gray-100/80"},d=`
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
                                <input type="date" name="birthday" value="${e?.birthday||""}" id="birthday-input" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm uppercase">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Age</label>
                                <input type="text" name="age" value="${e?.age||""}" id="age-display" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-black ${t.textAge} outline-none font-mono focus:ring-4 ${t.focusGreen}" placeholder="Auto">
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
                                        ${he.map(n=>`
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
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1">Start Date</label>
                                <input type="date" name="startDate" value="${e?.startDate||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusYellow} outline-none transition-all shadow-sm uppercase">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1">End Date</label>
                                <input type="date" name="endDate" value="${e?.endDate||""}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusRed} outline-none transition-all shadow-sm uppercase">
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
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-1 tracking-widest ${r?"":"transition-colors"} ${r?"":"group-focus-within:text-royal-blue"}">Nature of Work <span class="text-red-500">*</span></label>
                            <div class="relative" id="work-container">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-3.5 h-3.5 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <input type="text" name="designation" id="designation-input" autocomplete="off"
                                    value="${e?.designation||""}" required 
                                    class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[12px] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}" 
                                    placeholder="e.g. Administrative Support">
                                <div id="work-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${t.borderDivide} p-2 transform origin-top transition-all duration-200">
                                    <div class="px-2 py-1.5 mb-1.5 border-b ${t.borderSuggHead}">
                                        <p class="text-[9px] font-black ${t.textWorkSuggHead} uppercase tracking-widest">Quick Select Roles</p>
                                    </div>
                                    ${xe.map(n=>`
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
                            <textarea name="replacement" rows="2" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[11px] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder} resize-none min-h-[60px]">${e?.replacement||""}</textarea>
                        </div>

                        <div class="group">
                            <label class="text-[9px] ${t.textLabel} font-black uppercase block mb-2">Employment Status Record</label>
                            <div class="flex flex-wrap gap-2 items-center">
                                <div class="flex flex-wrap gap-2 p-1.5 ${t.bgStatusWrap} border ${t.borderStatus} rounded-xl shadow-inner flex-1">
                                    ${(()=>{const n={ONGOING:"peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400",EXPIRED:"peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400",RESIGNED:"peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]",ABSORBED:"peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]"};return["ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(c=>`
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${c}" ${e?.remarks===c?"checked":""} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[10px] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${n[c]||""} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${c}
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
    `;g.fire({html:d,width:window.innerWidth<1024?"96vw":"1000px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<1024?"0.75rem":"2rem",customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:n=>{const c=n.querySelector("#cancel-modal-btn");c&&c.addEventListener("click",()=>{!o&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),g.close(),e?._isBulk&&te.onCancel()});const l=n.querySelector("#bulk-add-btn");l&&l.addEventListener("click",()=>{g.close(),te.init()});const i=n.querySelector("#birthday-input"),u=n.querySelector("#age-display");i&&u&&(i.addEventListener("change",f=>{f.target.value&&(u.value=ue(f.target.value))}),i.value&&!e?.age&&(u.value=ue(i.value)));const b=n.querySelector("#name-input-field"),p=n.querySelector("#duplicate-warning");if(b&&p){let f;b.addEventListener("input",h=>{const k=h.target.value.trim();if(clearTimeout(f),k.length<3){p.classList.add("hidden");return}f=setTimeout(async()=>{try{const y=await(await fetch(`${j()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:k})})).json();y.success&&y.exists?(p.classList.remove("hidden"),_()?p.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-400":p.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-600"):p.classList.add("hidden")}catch(E){console.error("Duplicate check error:",E)}},500)}),e?.name&&(p.classList.add("hidden"),(async()=>{const k=await(await fetch(`${j()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name})})).json();k.success&&k.exists&&(p.classList.remove("hidden"),_()?p.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-400":p.className="mt-1 text-[10px] font-bold flex items-center gap-1.5 animate-pulse text-red-600")})())}const m=n.querySelector("#full-id-input"),x=n.querySelector("#series-no-input"),L=n.querySelector('input[name="startDate"]'),$=n.querySelector('input[name="endDate"]'),D=n.querySelectorAll('input[name="remarks"]'),I=n.querySelector("#extension-log-container"),T=f=>{o||(m&&(m.classList.add("animate-pulse"),m.placeholder="Loading...",fetch(`${j()}api/beneficiaries.php?next_id&year=${f}`).then(h=>h.json()).then(h=>{m.classList.remove("animate-pulse"),h.success&&h.nextId&&(m.value=h.nextId)})),x&&(x.classList.add("animate-pulse"),x.placeholder="Loading...",fetch(`${j()}api/beneficiaries.php?next_series_no&year=${f}`).then(h=>h.json()).then(h=>{x.classList.remove("animate-pulse"),h.success&&h.nextSeries&&(x.value=h.nextSeries)})))},F=()=>{const f=n.querySelector('input[name="remarks"]:checked');return f?f.value:"ONGOING"},N=f=>{const h=n.querySelector(`input[name="remarks"][value="${f}"]`);h&&(h.checked=!0,v())},O=()=>{if($&&$.value){const f=$.value.split("-"),h=new Date(f[0],f[1]-1,f[2]),k=new Date;k.setHours(0,0,0,0);let E="ONGOING";h<k&&(E="EXPIRED"),N(E)}},v=()=>{if(!I)return;if(F()==="ABSORBED"){const h=e?.absorbDate||new Date().toLocaleString("en-US",{timeZone:"Asia/Manila",month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});I.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${r?"border-slate-800":"border-gray-100"}">
                            <p class="text-[9px] uppercase font-black ${r?"text-green-500":"text-[#2e7d32]"} border-b ${r?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="${r?"bg-green-900/10 border-green-900/30":"bg-[#e8f5e9]/50 border-[#c8e6c9]"} rounded-lg p-2.5 flex items-center justify-between border">
                                    <div>
                                        <label class="text-[8px] ${r?"text-green-500":"text-[#2e7d32]"} font-bold uppercase block mb-0.5">Absorption Date</label>
                                        <p class="text-[10px] font-black ${r?"text-green-400":"text-[#1b5e20]"} uppercase">${h}</p>
                                        <input type="hidden" name="absorbDate" value="${h}">
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
                    `}else I.innerHTML=""};if(L&&(L.addEventListener("change",f=>{const h=f.target.value;if(h){const k=new Date(h).getFullYear();if(T(k),$&&!$.value){const E=new Date(h);E.setMonth(E.getMonth()+1),$.value=E.toISOString().split("T")[0]}O()}}),!o)){const f=L.value?new Date(L.value).getFullYear():new Date().getFullYear();T(f)}$&&$.addEventListener("change",O),D.forEach(f=>f.addEventListener("change",v));const B=n.querySelector("#resign-btn"),S=n.querySelector("#absorb-btn");B&&B.addEventListener("click",()=>N("RESIGNED")),S&&S.addEventListener("click",()=>N("ABSORBED")),n.querySelectorAll('input[type="text"], textarea').forEach(f=>{["id-number-input","full-id-input"].includes(f.id)||f.addEventListener("input",()=>{const h=f.selectionStart,k=f.selectionEnd;f.value=f.value.toUpperCase(),f.setSelectionRange(h,k)})}),O(),v(),C("education-input","course-suggestions","course-option"),C("designation-input","work-suggestions","work-option"),C("office-input","office-suggestions","office-option");function C(f,h,k){const E=n.querySelector(`#${f}`),y=n.querySelector(`#${h}`);if(!E||!y)return;let P=!1;E.addEventListener("focus",()=>y.classList.remove("hidden")),document.addEventListener("click",A=>{!E.contains(A.target)&&!y.contains(A.target)&&y.classList.add("hidden")}),E.addEventListener("input",()=>{if(P){P=!1;return}const A=E.value.toLowerCase(),G=y.querySelectorAll(`.${k}`);let K=!1;G.forEach(q=>{const R=q.querySelector(".option-text");(R?R.innerText:q.innerText).toLowerCase().includes(A)?(q.style.display="block",K=!0):q.style.display="none"}),K?y.classList.remove("hidden"):y.classList.add("hidden")}),y.querySelectorAll(`.${k}`).forEach(A=>{A.addEventListener("click",()=>{const G=A.querySelector(".option-text");E.value=G?G.innerText.trim():A.innerText.trim(),P=!0,y.classList.add("hidden"),E.dispatchEvent(new Event("change"))})})}const w=n.querySelector("#add-beneficiary-form"),M="add_beneficiary_draft";if(!o){const f=localStorage.getItem(M);if(f)try{const h=JSON.parse(f);Object.entries(h).forEach(([k,E])=>{const y=w.elements[k];y&&y.type!=="file"&&y.type!=="hidden"&&(y.value=E)})}catch(h){console.error("Error loading draft",h)}}w.addEventListener("input",f=>{if(!o){const h=new FormData(w),k={};h.forEach((E,y)=>k[y]=E),localStorage.setItem(M,JSON.stringify(k))}}),w&&w.addEventListener("submit",f=>{f.preventDefault(),w.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(U=>{U.classList.remove("ring-2","ring-red-500","!border-red-500")});const k=new FormData(w);let E=!1;const y=U=>{const H=w.querySelector(`[name="${U}"]`);H&&H.classList.add("ring-2","ring-red-500","!border-red-500"),E=!0},P=k.get("name"),A=k.get("contact"),G=k.get("startDate"),K=k.get("endDate"),q=k.get("designation");if((!P||P.trim()===""||/[0-9]/.test(P))&&y("name"),A&&A.trim()!==""&&/[^0-9]/.test(A.replace(/[\s\-\+\(\)]/g,""))&&y("contact"),G||y("startDate"),K||y("endDate"),(!q||q.trim()==="")&&y("designation"),E)return;const R={};k.forEach((U,H)=>{R[H]=U});const J=n.querySelector("#full-id-input")?.value;o?(R.id=e?.id,J&&(R.gip_id=J)):(R.id=null,J&&(R.gip_id=J)),window.addBeneficiaryData&&(async()=>{if(await window.addBeneficiaryData(R)){if(!o){const H="add_beneficiary_draft",me=w.querySelector('[name="office"]')?.value||"",ve=w.querySelector('[name="designation"]')?.value||"",we=w.querySelector('[name="education"]')?.value||"";localStorage.setItem(H,JSON.stringify({office:me,designation:ve,education:we}))}g.close(),setTimeout(()=>{g.fire({toast:!0,position:"top-end",icon:"success",title:`Record ${o?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!o&&e?._isBulk&&te.onSaveSuccess()},100)}else g.fire({icon:"error",title:"Save Failed",text:"There was an error saving the record to the database."})})()})}})}window.handleContactSubmit=async function(e){e.preventDefault();const o=e.target,s=o.querySelector('button[type="submit"]'),a=s.innerHTML;s.disabled=!0,s.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const r=new FormData(o);if((await fetch(o.action,{method:"POST",body:r,headers:{Accept:"application/json"}})).ok)g.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:d=>{d.addEventListener("mouseenter",g.stopTimer),d.addEventListener("mouseleave",g.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),o.reset();else throw new Error("Failed to send")}catch{g.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{s.disabled=!1,s.innerHTML=a}return!1};export{ge as _,z as a,Y as b,ze as c,Xe as d,Ce as e,Je as f,j as g,Fe as h,pe as i,We as j,Ge as k,W as l,Ue as m,He as n,Ye as o,Le as p,Ve as r,ae as s,Te as u};
