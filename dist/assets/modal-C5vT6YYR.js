const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-flowbite-BS-fTmyB.js","./vendor-DpcThRKv.js"])))=>i.map(i=>d[i]);
import H from"./vendor-swal-DtO_vauN.js";import{a as Bt}from"./vendor-DpcThRKv.js";import{A as tt}from"./vendor-charts-C6WbJKf0.js";const Mt="true".toLowerCase()==="true";function Ce(){return Mt}function ke(){const e=window.location.pathname,t="/dole-system/",a=e.toLowerCase().indexOf(t.toLowerCase());if(a!==-1)return e.substring(0,a+t.length);const s=e.indexOf("/frontend/");if(s!==-1)return e.substring(0,s+1);const o=e.indexOf("/backend/");return o!==-1?e.substring(0,o+1):"/"}function nt(e="Incorrect Username or Password"){H.fire({html:`
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
        `,timer:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!0,width:"400px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl overflow-hidden",timerProgressBar:"bg-philippine-red h-1.5",closeButton:"text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"},backdrop:"rgba(0, 0, 0, 0.4)"})}function Nt(e=!1){return H.fire({html:`
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
        `,timer:e?800:3e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1,width:"350px",padding:"0",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100",timerProgressBar:"bg-green-500 h-1.5"},backdrop:"rgba(0, 0, 0, 0.4)"})}function $r(){const e=localStorage.getItem("hasVisitedBefore"),t=document.getElementById("page-loader");e&&(document.documentElement.classList.add("loaded"),t&&(t.style.display="none")),window.addEventListener("load",()=>{const a=document.querySelector("body > *:not(.page-loader)");a&&a.classList.add("content-fade-in"),setTimeout(()=>{document.documentElement.classList.add("loaded"),t&&t.classList.add("hidden"),document.body.style.overflow="auto",localStorage.setItem("hasVisitedBefore","true")},300)})}const Pe={_key:"DOLE-GIP-SECURE-KEY-2026",encrypt:function(e){try{const t=o=>o.split("").map(r=>r.charCodeAt(0)),a=o=>("0"+Number(o).toString(16)).substr(-2),s=o=>t(this._key).reduce((r,d)=>r^d,o);return e.split("").map(t).map(s).map(a).join("")}catch{return null}},decrypt:function(e){try{const t=s=>s.split("").map(o=>o.charCodeAt(0)),a=s=>t(this._key).reduce((o,r)=>o^r,s);return e.match(/.{1,2}/g).map(s=>parseInt(s,16)).map(a).map(s=>String.fromCharCode(s)).join("")}catch{return null}}};function Ar(){document.querySelectorAll(".login-form-shared").forEach(t=>{const a=t.querySelector('input[name="username"]'),s=t.querySelector('input[name="password"]'),o=t.querySelector('input[name="rememberMe"]');if(a&&s&&o){const r=localStorage.getItem("secure_user"),d=localStorage.getItem("secure_pass");if(r&&d){const i=Pe.decrypt(r),u=Pe.decrypt(d);i&&u&&(a.value=i,s.value=u,o.checked=!0)}}t.addEventListener("submit",async r=>{r.preventDefault();try{const i=await(await fetch(`${ke()}api/auth.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.value,password:s.value})})).json();if(i.success){o.checked?(localStorage.setItem("secure_user",Pe.encrypt(a.value)),localStorage.setItem("secure_pass",Pe.encrypt(s.value))):(localStorage.removeItem("secure_user"),localStorage.removeItem("secure_pass"));const u=localStorage.getItem("hasLoggedInBefore")==="true";localStorage.setItem("isLoggedIn","true"),localStorage.setItem("hasLoggedInBefore","true"),localStorage.setItem("user",JSON.stringify(i.user));const p=document.getElementById("drawer-login");if(p){p.classList.add("translate-y-full");const f=p.querySelector("[data-drawer-hide]");f&&f.click()}await Nt(u),Tt(u)}else{const u=document.getElementById("drawer-login");u?(u.classList.add("translate-y-full"),setTimeout(()=>{nt(),setTimeout(()=>{u.classList.remove("translate-y-full"),s.value="",s.focus()},600)},400)):(nt(),s.value="",s.focus())}}catch{H.fire({icon:"error",title:"Login Error",text:"Unable to reach the server. Please check your connection."})}})})}function Tt(e=!1){const t=document.getElementById("left-panel"),a=document.getElementById("right-panel"),s=document.getElementById("left-panel-content"),o=document.getElementById("right-panel-content");s&&(s.style.opacity="0"),o&&(o.style.opacity="0");const r=document.createElement("div");r.className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none";const d=e?"":"animate__delay-1s",i=e?"animation-duration: 0.8s;":"animation-duration: 2s;";r.innerHTML=`
        <img src="${ke()}frontend/images/logo/doleiligan.png" class="w-64 h-64 md:w-96 md:h-96 object-contain bg-white/20 backdrop-blur-sm shadow-2xl rounded-full p-4 animate__animated animate__rotateOut ${d}" style="${i}" alt="DOLE Logo">
    `,document.body.appendChild(r);const u=e?0:1e3,p=e?600:1500;setTimeout(()=>{t&&t.classList.add("animate-slide-left"),a&&a.classList.add("animate-slide-right"),setTimeout(()=>{window.location.href=`${ke()}frontend/dashboard/`},p)},u)}function Cr(){const e=document.getElementById("logoutBtn");e&&e.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),window.location.href=`${ke()}`})}function Ir(){const e=document.getElementById("mobile-splash"),t=document.getElementById("show-login-btn"),a=document.getElementById("back-to-splash"),s=document.getElementById("mobile-bg-content"),o=document.getElementById("mobile-welcome-text"),r=document.getElementById("reopen-login-drawer"),d=document.getElementById("request-notifications-btn"),i=async()=>{"Notification"in window&&await Notification.requestPermission()==="granted"&&d&&d.classList.add("hidden")};Notification.permission==="default"&&d&&(d.classList.remove("hidden"),d.addEventListener("click",i));const u=()=>{e&&(e.style.transform="translateY(-100%)",setTimeout(()=>{e.style.visibility="hidden",e.style.pointerEvents="none",e.style.zIndex="-1",Notification.permission==="default"&&i();const y=document.getElementById("drawer-login");y&&y.classList.remove("translate-y-full")},800))},p=()=>{e&&(e.style.zIndex="9999",e.style.pointerEvents="auto",e.style.visibility="visible",e.style.transform="translateY(0)")};t&&t.addEventListener("click",u),document.querySelectorAll(".forgot-password-link").forEach(y=>{y.addEventListener("click",E=>{E.target.closest("#mobile-splash")&&u()})}),a&&a.addEventListener("click",()=>{const y=document.getElementById("drawer-login");if(y){y.classList.add("translate-y-full");const E=y.querySelector("[data-drawer-hide]");E&&E.click()}p()});const v=document.getElementById("drawer-login"),A=document.getElementById("curved-welcome"),c=document.getElementById("peoples-bg");v&&new MutationObserver(E=>{E.forEach(x=>{x.attributeName==="class"&&(v.classList.contains("translate-y-full")?(s&&(s.style.transform="translateY(0)"),o&&(o.style.opacity="1",o.style.transform="translateY(0) scale(1)"),A&&(A.style.opacity="0",A.style.transform="scale(0.5)"),r&&e&&e.style.visibility==="hidden"&&(r.style.opacity="1",r.style.transform="scale(1)"),c&&(c.classList.add("opacity-0","scale-0"),c.classList.remove("opacity-40","scale-[1.6]"))):(s&&(s.style.transform="translateY(-35%)"),o&&(o.style.opacity="0",o.style.transform="translateY(20px) scale(0.9)"),A&&(A.style.opacity="1",A.style.transform="scale(1)"),r&&(r.style.opacity="0",r.style.transform="scale(0)"),c&&(c.classList.remove("opacity-0","scale-0"),c.classList.add("opacity-40","scale-[1.6]"))))})}).observe(v,{attributes:!0})}const Ne=()=>"false".toLowerCase()==="true";const De={debug(...e){Ne()},info(...e){Ne()},warn(...e){Ne()},error(...e){},table(e){Ne()},json(e,t){Ne()}},qe=new Map;async function je(e,t={}){const s=`${ke()}${e}`;let o=null;try{const f=JSON.parse(localStorage.getItem("user"));f&&(o=f.user_id||f.id||null)}catch{}const r={headers:{"Content-Type":"application/json",...o?{"X-User-Id":o}:{},...t.headers},...t},i=(r.method||"GET").toUpperCase()==="GET"?2:1;let u=null;for(let f=1;f<=i;f++)try{if(De.debug("[API] Request",{url:s,method:r.method||"GET",hasUserId:!!o}),r.body)try{De.json("[API] Payload",JSON.parse(r.body))}catch{De.debug("[API] Payload (raw)",r.body)}const v=await fetch(s,r);if(!v.ok){let c=`HTTP ${v.status}: ${v.statusText}`;try{const y=await v.json();y&&y.error?c=y.error:y&&y.message&&(c=y.message)}catch{}throw new Error(c)}const A=await v.json();return qe.has(s)&&(qe.delete(s),De.info?.("[API] Recovered",{url:s})),De.debug("[API] Response",{url:s,ok:!0}),{success:!0,data:A}}catch(v){if(u=v,v instanceof TypeError&&/fetch/i.test(v.message||"")&&f<i){await new Promise(y=>setTimeout(y,1200));continue}}return u instanceof TypeError&&/fetch/i.test(u.message||"")?qe.get(s)||(qe.set(s,!0),De.error("API Request Network Error (suppressed for repeats):",{url:s,message:u.message})):De.error("API Request Error:",u),{success:!1,error:u?.message||"Unknown request error"}}async function be(e){return je(e,{method:"GET"})}async function yt(e,t){return je(e,{method:"POST",body:JSON.stringify(t)})}async function Ot(e,t){return je(e,{method:"PUT",body:JSON.stringify(t)})}async function Br(e,t){const a=new URLSearchParams(t).toString();return je(`${e}?${a}`,{method:"PATCH"})}function Mr(){typeof window.initFlowbite=="function"&&window.initFlowbite()}function Nr(e){return JSON.stringify(e)}const _t="dole-gip-db",Rt=2,ue={BENEFICIARIES:"beneficiaries",SYNC_QUEUE:"sync_queue",METADATA:"metadata",APP_CACHE:"app_cache"};let Fe=null;function Be(){return Fe?Promise.resolve(Fe):new Promise((e,t)=>{const a=indexedDB.open(_t,Rt);a.onupgradeneeded=s=>{const o=s.target.result;if(!o.objectStoreNames.contains(ue.BENEFICIARIES)){const r=o.createObjectStore(ue.BENEFICIARIES,{keyPath:"id"});r.createIndex("name","name",{unique:!1}),r.createIndex("office","office",{unique:!1}),r.createIndex("remarks","remarks",{unique:!1})}o.objectStoreNames.contains(ue.SYNC_QUEUE)||o.createObjectStore(ue.SYNC_QUEUE,{keyPath:"queueId",autoIncrement:!0}).createIndex("status","status",{unique:!1}),o.objectStoreNames.contains(ue.METADATA)||o.createObjectStore(ue.METADATA,{keyPath:"key"}),o.objectStoreNames.contains(ue.APP_CACHE)||o.createObjectStore(ue.APP_CACHE,{keyPath:"key"})},a.onsuccess=s=>{Fe=s.target.result,e(Fe)},a.onerror=s=>{t(s.target.error)}})}async function _e(e){const t=await Be();return new Promise((a,s)=>{const o=t.transaction(ue.BENEFICIARIES,"readwrite"),r=o.objectStore(ue.BENEFICIARIES);r.clear(),e.forEach(d=>{const i={...d,id:d.id||d.gip_id};r.put(i)}),o.oncomplete=()=>{Pt("beneficiaries_last_sync",Date.now()),a(e.length)},o.onerror=()=>s(o.error)})}async function We(){const e=await Be();return new Promise((t,a)=>{const r=e.transaction(ue.BENEFICIARIES,"readonly").objectStore(ue.BENEFICIARIES).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>a(r.error)})}async function jt(){const e=await kt("beneficiaries_last_sync");return e?Date.now()-e:1/0}async function wt(){const e=await Be();return new Promise((t,a)=>{const d=e.transaction(ue.SYNC_QUEUE,"readonly").objectStore(ue.SYNC_QUEUE).index("status").getAll("pending");d.onsuccess=()=>t(d.result||[]),d.onerror=()=>a(d.error)})}async function Pt(e,t){const a=await Be();return new Promise((s,o)=>{const i=a.transaction(ue.METADATA,"readwrite").objectStore(ue.METADATA).put({key:e,value:t});i.onsuccess=()=>s(),i.onerror=()=>o(i.error)})}async function kt(e){const t=await Be();return new Promise((a,s)=>{const d=t.transaction(ue.METADATA,"readonly").objectStore(ue.METADATA).get(e);d.onsuccess=()=>a(d.result?.value??null),d.onerror=()=>s(d.error)})}function qt(e){return e?btoa(encodeURIComponent(JSON.stringify(e))):null}function Ft(e){if(!e)return null;try{return JSON.parse(decodeURIComponent(atob(e)))}catch{return null}}async function Ut(e,t){const a=await Be();return new Promise((s,o)=>{const d=a.transaction(ue.APP_CACHE,"readwrite").objectStore(ue.APP_CACHE),i={key:e,data:qt(t),updated_at:Date.now()},u=d.put(i);u.onsuccess=()=>{s()},u.onerror=()=>o(u.error)})}async function Ht(e){const t=await Be();return new Promise((a,s)=>{const d=t.transaction(ue.APP_CACHE,"readonly").objectStore(ue.APP_CACHE).get(e);d.onsuccess=()=>{d.result&&d.result.data?a(Ft(d.result.data)):a(null)},d.onerror=()=>s(d.error)})}async function Gt(){const[e,t]=await Promise.all([We(),wt()]),a=await kt("beneficiaries_last_sync");return{localBeneficiaries:e.length,pendingSync:t.length,lastSync:a?new Date(a).toLocaleString():"Never"}}window.__doleDB={getStats:Gt,getLocalBeneficiaries:We,getPendingSyncItems:wt,setSecureCache:Ut,getSecureCache:Ht};const Ie=["Local Employment Unit (LEU)","Labor Standards Unit (LSU)","Internal Management Services Unit (IMSU)","Wellfare Workers Unit (WWU)","Labor Relation Unit (LRU)"],ge=()=>document.documentElement.classList.contains("dark"),rt=()=>ge()?{text:"#ffffff",muted:"#94a3b8",grid:"#334155",cardBg:"#1e293b",tooltipBg:"#1e293b",tooltipBorder:"#334155"}:{text:"#0f172a",muted:"#64748b",grid:"#f1f5f9",cardBg:"#f8fafc",tooltipBg:"#ffffff",tooltipBorder:"#e2e8f0"},we={royalBlue:()=>ge()?"#60a5fa":"#0038A8",philippineRed:"#CE1126",goldenYellow:"#FCD116",successGreen:"#22c55e",mutedSlate:()=>(ge(),"#94a3b8")},Te=()=>ge()?"#475569":"#cbd5e1";let Oe=null;function Ze(e){const a=`; ${document.cookie}`.match(new RegExp(`;\\s*${e}=([^;]+)`));return a?decodeURIComponent(a[1]):null}function ze(e,t,a){let s=new Date;s.setTime(s.getTime()+a*24*60*60*1e3),document.cookie=`${e}=${encodeURIComponent(t)};expires=${s.toUTCString()};path=/`}let ie=Ze("user_workforce_filter")||"ALL",St=Ze("user_workforce_label")||"Overall Stats",Re=Ze("user_gender_filter")||"ALL",Et=Ze("user_gender_label")||"All Years";function Se(e){if(!e)return null;if(e instanceof Date)return isNaN(e.getTime())?null:e;if(typeof e!="string")return null;const t=e.trim();if(!t)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const s=new Date(`${t}T00:00:00`);return isNaN(s.getTime())?null:s}if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(t)){const s=t.replace(" ","T"),o=new Date(s);return isNaN(o.getTime())?null:o}const a=new Date(t);return isNaN(a.getTime())?null:a}function Lt(e){const t=Number.parseInt(e?.age,10);if(Number.isInteger(t)&&t>=0)return t;const a=Se(e?.birthday);if(!a)return null;const s=new Date;let o=s.getFullYear()-a.getFullYear();const r=s.getMonth()-a.getMonth();return(r<0||r===0&&s.getDate()<a.getDate())&&o--,o>=0?o:null}function zt(e){const t=String(e||"").trim(),a=t.match(/\(([A-Z]{2,8})\)\s*$/i)?.[1];return a?a.toUpperCase():t.length>18?`${t.slice(0,16)}...`:t}function Yt(e){const t=String(e||"").trim().toUpperCase().split(" ").filter(Boolean).join(" ");if(!t||["N/A","NA","NONE","UNASSIGNED"].includes(t))return null;const a=Ie.find(r=>r.toUpperCase()===t);if(a)return a;const s=Ie.find(r=>{const d=r.lastIndexOf("("),i=r.lastIndexOf(")"),u=d>=0&&i>d?r.slice(d+1,i).toUpperCase():"";return u&&(t===u||t.endsWith("("+u+")"))});return s||{"WELFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)","WELLFARE WORKERS UNIT":"Wellfare Workers Unit (WWU)"}[t]||null}function Vt(e,t){const a=/^\d{4}$/.test(String(t||""))?Number(t):null,s=Array.from({length:12},()=>({total:0,ages:new Map,ageGroups:{"18-24":0,"25-30":0,"31-40":0,"41+":0}}));return e.forEach(o=>{const r=Se(o.createdAt),d=Lt(o);if(!r||!Number.isInteger(d)||d<18||a&&r.getFullYear()!==a)return;const i=s[r.getMonth()];i.total++,i.ages.set(d,(i.ages.get(d)||0)+1),d<=24?i.ageGroups["18-24"]++:d<=30?i.ageGroups["25-30"]++:d<=40?i.ageGroups["31-40"]++:i.ageGroups["41+"]++}),s.map((o,r)=>({month:new Intl.DateTimeFormat("en-US",{month:"long"}).format(new Date(2024,r,1)).toUpperCase(),totalAdded:o.total,ageGroups:o.ageGroups,exactAges:[...o.ages.entries()].sort((d,i)=>d[0]-i[0])}))}function it(e){return e.reduce((t,a)=>{const s=Se(a.createdAt);return s?Math.max(t,s.getFullYear()):t},0)}const lt={ILIGAN:120,KAUSWAGAN:50,BACOLOD:45,MAIGO:35,KOLAMBUGAN:50,TUBOD:65,BAROY:40,SALVADOR:35,KAPATAGAN:75,LALA:60,SAPAD:35,BALOI:40};async function Je(e=!1){if(localStorage.getItem("isLoggedIn")!=="true"||!document.getElementById("workforce-chart"))return;let t=[];if(e&&(Oe=null),Oe)t=Oe;else{const[l,g]=await Promise.all([We(),jt()]);if(l.length>0&&g<6e4)t=l,Oe=t;else try{const b=await be("api/beneficiaries.php?all=true");if(b.success&&b.data?.success&&b.data?.beneficiaries)t=b.data.beneficiaries,Oe=t,_e(t).catch(()=>{});else return}catch{return}}if(t.length===0)return;rr();const a=rt();document.querySelectorAll('[id$="-chart"]').forEach(n=>n.innerHTML="");const s=[...new Set(t.map(n=>{const l=n.startDate||n.createdAt,g=Se(l);return g?g.getFullYear().toString():null}).filter(n=>n))].sort((n,l)=>l-n);Kt(s,t),Qt(s,t);const o=new Date;let r=t;ie!=="ALL"&&(r=t.filter(n=>{if(ie.includes("D")){const l=Se(n.createdAt);if(!l)return!1;const g=parseInt(ie),b=new Date;return b.setDate(o.getDate()-g),b.setHours(0,0,0,0),l>=b}else if(s.includes(ie)){const l=Se(n.startDate||n.createdAt);return l?l.getFullYear().toString()===ie:!1}return!0}));const d=et(t),i=et(r);Xt(d,i);let u=[];if(ie==="ALL"){const l=new Date().getFullYear();for(let g=2020;g<=l;g++)u.push(g.toString())}else if(s.includes(ie))u=["Q1","Q2","Q3","Q4"];else{const n=parseInt(ie)||7;u=Array.from({length:n},(l,g)=>{const b=new Date;return b.setDate(o.getDate()-(n-1-g)),new Date(b.getTime()-b.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}const p={};u.forEach(n=>p[n]=0),r.forEach(n=>{const l=n.startDate||n.createdAt;if(l){const g=Se(l);if(!g)return;const b=g.getFullYear().toString(),k=new Date(g.getTime()-g.getTimezoneOffset()*6e4).toISOString().split("T")[0];if(ie==="ALL")p.hasOwnProperty(b)&&p[b]++;else if(ie.includes("D"))p.hasOwnProperty(k)&&p[k]++;else if(b===ie){const S="Q"+(Math.floor(g.getMonth()/3)+1);p.hasOwnProperty(S)&&p[S]++}}});const f=Object.values(p),v=r.length,A=f[f.length-1]||0,c=f[f.length-2]||0;let y;if(ie==="ALL"){const n=v/u.length;y=A>=n}else y=A>=c;let E=y?we.successGreen:we.philippineRed,x=y?"bg-green-500 shadow-green-500/30":"bg-red-500 shadow-red-500/30",h=y?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400";ie==="ALL"?(E=we.successGreen,x="bg-green-500 shadow-green-500/30",h="text-green-600 dark:text-green-400"):ie==="7D"?(E="#fb923c",x="bg-orange-500 shadow-orange-500/30",h="text-orange-500 dark:text-orange-400"):ie==="30D"?(E="#eab308",x="bg-yellow-500 shadow-yellow-500/30",h="text-yellow-600 dark:text-yellow-400"):ie==="90D"?(E="#2563eb",x="bg-blue-600 shadow-blue-600/30",h="text-blue-600 dark:text-blue-400"):s.includes(ie)&&(E="#f87171",x="bg-red-400 shadow-red-400/30",h="text-red-500 dark:text-red-400"),document.querySelectorAll(".metric-added-count").forEach(n=>{n.textContent=v,n.className=`text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${h}`});const L=c>0?Math.round((A-c)/c*100):A>0?100:0;document.querySelectorAll(".metric-added-rate").forEach(n=>n.textContent=(L>=0?"+":"")+(ie==="ALL"?"Growth":L+"%"));const M=document.getElementById("added-metric-badge");M&&(M.className=`flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${x}`);const F=document.getElementById("added-metric-icon");F&&(F.style.transform=y?"rotate(0deg)":"rotate(180deg)"),["dropdownDefaultButton","dropdownLastDaysEduButton","dropdownLastDays3Button"].forEach(n=>{const l=document.getElementById(n);l&&(l.innerHTML=`${St} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`)});const D={chart:{height:250,type:"area",fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},sparkline:{enabled:!1},background:"transparent"},theme:{mode:ge()?"dark":"light"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.6,opacityTo:.1,stops:[0,90,100],colorStops:[{offset:0,color:E,opacity:.6},{offset:100,color:E,opacity:.1}]}},stroke:{curve:"smooth",width:3,colors:[E]},series:[{name:"New Beneficiaries",data:f}],xaxis:{categories:u,labels:{show:!0,style:{colors:a.muted,fontSize:"0.625rem",fontWeight:600}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!0,labels:{show:!0,style:{colors:a.muted,fontSize:"0.625rem",fontWeight:600}}},grid:{show:!0,borderColor:a.grid,strokeDashArray:4,padding:{left:10,right:15,top:0,bottom:0}},colors:[E],markers:{size:u.length>20?0:4,colors:[E],strokeColors:a.cardBg,strokeWidth:2,hover:{size:6}},tooltip:{theme:ge()?"dark":"light",y:{title:{formatter:()=>"Added:"}}}};$e("workforce-chart",D);const W=Re==="ALL"?t:t.filter(n=>{const l=Se(n.startDate||n.createdAt);return l&&l.getFullYear().toString()===Re}),_=et(W),xe={series:[_.genders.Female||0,_.genders.Male||0],chart:{height:320,type:"donut",fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:[we.philippineRed,we.royalBlue()],labels:["Female","Male"],plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,name:{show:!0,fontSize:"0.75rem",fontWeight:600,color:a.muted},value:{show:!0,fontSize:"1.5rem",fontWeight:900,color:a.text,formatter:n=>n},total:{show:!0,label:"TOTAL",fontSize:"0.625rem",fontWeight:800,color:a.muted,formatter:n=>n.globals.seriesTotals.reduce((l,g)=>l+g,0)}}}}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{colors:[a.cardBg],width:4},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:260},plotOptions:{pie:{donut:{size:"70%",labels:{value:{fontSize:"1.125rem"}}}}}}}]};$e("gender-chart",xe);const ne=[{key:"College Grad",label:"College Graduate",count:i.education["College Grad"]||0,color:we.royalBlue()},{key:"College Lvl",label:"College Level",count:i.education["College Lvl"]||0,color:we.goldenYellow},{key:"HS Grad",label:"High School",count:i.education["HS Grad"]||0,color:we.philippineRed},{key:"Senior High",label:"Senior High",count:i.education["Senior High"]||0,color:we.successGreen}],K=ne.reduce((n,l)=>n+l.count,0),ee=[...ne].sort((n,l)=>l.count-n.count||n.label.localeCompare(l.label)),fe=ee[0];Object.entries({"College Grad":".count-college-grad","College Lvl":".count-college-lvl","HS Grad":".count-hs-grad","Senior High":".count-senior-high"}).forEach(([n,l])=>{document.querySelectorAll(l).forEach(g=>{g.textContent=i.education[n]||0})});const ye=document.getElementById("education-profile-total"),ve=document.getElementById("education-profile-leading");if(ye&&(ye.textContent=K),ve){const n=K>0?Math.round(fe.count/K*100):0;ve.textContent=K>0?`${fe.label} · ${n}%`:"No data",ve.title=ve.textContent}const Le={series:[{name:"Beneficiaries",data:ee.map(n=>({x:n.label,y:n.count,fillColor:n.color}))}],chart:{height:285,type:"bar",toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},plotOptions:{bar:{horizontal:!0,distributed:!0,barHeight:"48%",dataLabels:{position:"top"},borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,formatter:n=>Math.round(n),offsetX:12,offsetY:4,textAnchor:"start",style:{fontSize:"0.625rem",fontWeight:900,colors:[a.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.9,borderWidth:0}},xaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{colors:a.muted,fontSize:"0.5625rem",fontWeight:700}},axisBorder:{show:!1},axisTicks:{show:!1},title:{text:"TOTAL BENEFICIARIES",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},yaxis:{labels:{minWidth:118,maxWidth:180,trim:!1,style:{colors:a.text,fontSize:"0.6875rem",fontWeight:800}}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:10,right:58,bottom:-4,left:8}},legend:{show:!1},tooltip:{theme:ge()?"dark":"light",y:{formatter:n=>{const l=K>0?Math.round(n/K*100):0;return`${n} beneficiaries (${l}% of recorded)`}}},noData:{text:"NO EDUCATION DATA",style:{color:a.muted,fontSize:"11px"}},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:285},yaxis:{labels:{minWidth:96,maxWidth:132,trim:!1,style:{fontSize:"0.625rem"}}},dataLabels:{style:{fontSize:"0.5625rem"}}}}]};$e("education-chart",Le),document.querySelectorAll(".count-absorbed").forEach(n=>n.textContent=i.status.ABSORBED||0),document.querySelectorAll(".count-ongoing").forEach(n=>n.textContent=i.status.ONGOING||0);const w={series:[{name:"Beneficiaries",data:[{x:"Absorbed",y:i.status.ABSORBED||0,fillWeight:1},{x:"Ongoing",y:i.status.ONGOING||0},{x:"Expired",y:i.status.EXPIRED||0},{x:"Resigned",y:i.status.RESIGNED||0}]}],chart:{type:"bar",height:260,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:"transparent"},plotOptions:{bar:{horizontal:!1,columnWidth:"65%",borderRadius:10,distributed:!0,dataLabels:{position:"top"}}},colors:["#059669","#6ee7b7","#CE1126","#64748b"],dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.22,color:"#64748b"},dataLabels:{enabled:!0,offsetY:-20,style:{fontSize:"0.75rem",fontWeight:"900",colors:[a.text]}},legend:{show:!1},xaxis:{categories:["Absorbed","Ongoing","Expired","Resigned"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a.muted,fontWeight:700}}},yaxis:{show:!0,labels:{show:!1}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:20,right:8,bottom:0,left:8}},tooltip:{theme:ge()?"dark":"light",y:{formatter:n=>n+" Beneficiaries"}},theme:{mode:ge()?"dark":"light"}};$e("status-chart",w);const B=new Map(Object.entries(d.designations).map(([n,l])=>[n.trim().toUpperCase(),l])),C=new Map(Ie.map((n,l)=>[n,l])),Y=Ie.map(n=>[n,B.get(n.toUpperCase())||0]).sort((n,l)=>l[1]-n[1]||C.get(n[0])-C.get(l[0])),Z=Y.map(([n])=>n),G={series:[{name:"Total GIP",data:Y.map(([,n])=>n)}],chart:{type:"bar",height:220,toolbar:{show:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:[we.royalBlue()],plotOptions:{bar:{horizontal:!1,columnWidth:"34%",borderRadius:3,borderRadiusApplication:"end"}},dataLabels:{enabled:!0,offsetY:-14,formatter:n=>Math.round(n),style:{fontSize:"0.625rem",fontWeight:900,colors:[a.text]},background:{enabled:!0,borderRadius:2,padding:3,opacity:.86,borderWidth:0}},xaxis:{categories:Z,axisBorder:{show:!1},axisTicks:{show:!1},labels:{rotate:0,trim:!1,hideOverlappingLabels:!1,formatter:n=>zt(n),style:{fontWeight:800,colors:a.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:a.muted,fontSize:"0.5625rem"}},title:{text:"TOTAL COUNT",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:2,right:4,bottom:-4}},legend:{show:!1},tooltip:{theme:ge()?"dark":"light",x:{formatter:(n,l)=>Z[l.dataPointIndex]||"Assigned Unit"},y:{formatter:n=>`${n} Beneficiaries`}},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:210},plotOptions:{bar:{columnWidth:"46%"}},dataLabels:{style:{fontSize:"0.5rem"}},xaxis:{labels:{style:{fontSize:"0.5rem"}}}}}]};$e("assigned-units-chart",G),Wt(Y);const Q=(/^\d{4}$/.test(ie)?Number(ie):0)||it(r)||it(t)||new Date().getFullYear(),V=Vt(r,Q),J=document.getElementById("age-chart-year");J&&(J.textContent=Q);const ae=[{key:"18-24",label:"AGE 18–24"},{key:"25-30",label:"AGE 25–30"},{key:"31-40",label:"AGE 31–40"},{key:"41+",label:"AGE 41+"}],ce={series:ae.map(n=>({name:n.label,data:V.map(l=>l.ageGroups[n.key])})),chart:{type:"bar",stacked:!0,height:330,toolbar:{show:!1},zoom:{enabled:!1},fontFamily:"Montserrat, sans-serif",background:a.cardBg},colors:["#0038A8","#2563EB","#60A5FA","#93C5FD"],plotOptions:{bar:{horizontal:!1,columnWidth:"54%",borderRadius:2,borderRadiusApplication:"end",dataLabels:{total:{enabled:!0,offsetY:-8,style:{fontSize:"0.625rem",fontWeight:900,color:a.text}}}}},dataLabels:{enabled:!0,formatter:n=>n>0?Math.round(n):"",style:{fontSize:"0.5625rem",fontWeight:900,colors:["#ffffff","#ffffff","#0f172a","#0f172a"]},dropShadow:{enabled:!1}},xaxis:{categories:V.map(n=>n.month),axisBorder:{show:!0,color:a.grid},axisTicks:{show:!1},title:{text:"MONTH ADDED",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}},labels:{rotate:-40,trim:!1,hideOverlappingLabels:!1,style:{fontWeight:800,colors:a.muted,fontSize:"0.5625rem"}}},yaxis:{min:0,forceNiceScale:!0,labels:{formatter:n=>Math.round(n),style:{fontWeight:700,colors:a.muted,fontSize:"0.625rem"}},title:{text:"TOTAL BENEFICIARIES",style:{color:a.muted,fontSize:"0.5625rem",fontWeight:800}}},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:18,left:8,right:12,bottom:4}},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"10px",fontWeight:800,labels:{colors:a.muted},markers:{size:5,shape:"square"},itemMargin:{horizontal:8,vertical:3}},tooltip:{shared:!0,intersect:!1,theme:ge()?"dark":"light",custom:({dataPointIndex:n})=>{const l=V[n],g=ae.map(k=>`${k.label}: <strong>${l?.ageGroups[k.key]||0}</strong>`).join("<br>"),b=l?.exactAges?.length?l.exactAges.map(([k,S])=>`Age ${k}: ${S}`).join(" · "):"No recorded ages";return`<div class="px-3 py-2 text-xs leading-5"><strong>${l?.month||""} ${Q}</strong><br>Total: <strong>${l?.totalAdded||0}</strong><br>${g}<div class="mt-1 border-t border-slate-200 pt-1 text-[10px] dark:border-slate-600">${b}</div></div>`}},noData:{text:"NO AGE DATA",align:"center",verticalAlign:"middle",style:{color:a.muted,fontSize:"11px"}},theme:{mode:ge()?"dark":"light"},responsive:[{breakpoint:640,options:{chart:{height:360},plotOptions:{bar:{columnWidth:"66%"}},dataLabels:{enabled:!1},xaxis:{labels:{rotate:-55,style:{fontSize:"0.5rem"}}},legend:{fontSize:"9px",itemMargin:{horizontal:5,vertical:2}}}}]};$e("age-chart",ce);const he=Zt(t);Jt(he);const m={series:[{name:"Actual Beneficiaries",data:Object.values(he.municipalityData).map(n=>n.actual)},{name:"Target Slots",data:Object.values(he.municipalityData).map(n=>n.target)}],chart:{type:"bar",height:350,fontFamily:"Montserrat, sans-serif",toolbar:{show:!1},background:a.cardBg},theme:{mode:ge()?"dark":"light"},colors:[we.royalBlue(),ge()?"#334155":"#E2E8F0"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:Object.keys(he.municipalityData),labels:{style:{fontWeight:600,colors:a.muted,fontSize:"0.5625rem"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,colors:a.muted}}},legend:{show:!1},fill:{opacity:1},grid:{show:!0,borderColor:Te(),strokeDashArray:6,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}}}};$e("performance-gap-chart",m)}function Wt(e){const t=document.getElementById("assigned-units-summary");t&&(t.innerHTML=e.map(([a,s],o)=>`
        <div class="flex min-w-0 items-center justify-between gap-3 border border-slate-100 bg-slate-50/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50">
            <div class="flex min-w-0 items-center gap-2">
                <span class="inline-flex h-5 min-w-5 shrink-0 items-center justify-center bg-royal-blue text-[0.5625rem] font-black text-white">${o+1}</span>
                <span class="break-words text-[0.625rem] font-black uppercase leading-relaxed tracking-tight text-slate-600 dark:text-slate-300" title="${a}">${a}</span>
            </div>
            <span class="inline-flex min-w-7 shrink-0 items-center justify-center bg-white px-2 py-1 text-xs font-black tabular-nums text-royal-blue shadow-sm dark:bg-slate-800 dark:text-blue-400">${s}</span>
        </div>
    `).join(""))}function $e(e,t){const a=document.getElementById(e);if(!a)return;a.innerHTML="",new tt(a,t).render()}function et(e){const t={offices:{},genders:{Female:0,Male:0,Unknown:0},education:{"College Grad":0,"College Lvl":0,"HS Grad":0,"Senior High":0},designations:{},ages:{"18-24":0,"25-30":0,"31-40":0,"41+":0},exactAges:{},totalAge:0,ageCount:0,status:{ABSORBED:0,ONGOING:0,EXPIRED:0,RESIGNED:0}},a=new Date;return a.setHours(0,0,0,0),e.forEach(s=>{const o=s.office||"Unassigned";t.offices[o]=(t.offices[o]||0)+1;const r=(s.gender||"Unknown").trim(),d=r==="F"||r==="Female"?"Female":r==="M"||r==="Male"?"Male":"Unknown";t.genders[d]++;const i=String(s.education||"").trim().toUpperCase().replace(/\s+/g," "),u=i.includes("COLLEGE")&&i.includes("GRADUATE")||i.includes("BACHELOR")||i.includes("DEGREE")||/(^|\s)(BS|AB)(\s|$)/.test(i);i.includes("SENIOR HIGH")?t.education["Senior High"]++:u?t.education["College Grad"]++:i.includes("COLLEGE")?t.education["College Lvl"]++:(i.includes("HIGH SCHOOL")||/(^|\s)HS(\s|$)/.test(i))&&t.education["HS Grad"]++;const p=Yt(s.designation);p&&(t.designations[p]=(t.designations[p]||0)+1);const f=(s.remarks||s.status_name||"").trim().replace(/\s+/g,"").toUpperCase(),v=!!s.absorbDate;if(f.includes("ABSORBED")||v)t.status.ABSORBED++;else if(f.includes("RESIGNED"))t.status.RESIGNED++;else if(f==="ONGOING"||f.includes("ONGOING")||f.includes("ACTIVE")||s.status_id==1)t.status.ONGOING++;else if(f.includes("EXPIRED"))t.status.EXPIRED++;else{let c=!1;if(s.endDate){const y=Se(s.endDate);y&&y<a&&(c=!0)}c?t.status.EXPIRED++:t.status.ONGOING++}const A=Lt(s);Number.isInteger(A)&&(t.totalAge+=A,t.ageCount++,t.exactAges[A]=(t.exactAges[A]||0)+1,A>=18&&A<=24?t.ages["18-24"]++:A>=25&&A<=30?t.ages["25-30"]++:A>=31&&A<=40?t.ages["31-40"]++:A>=41&&t.ages["41+"]++)}),t}function Zt(e){const t={municipalityData:{},totalTarget:0,totalActual:0,retention:{count:0,resign:0},velocity:{totalDays:0,count:0}};return Object.entries(lt).forEach(([a,s])=>{t.municipalityData[a]={actual:0,target:s},t.totalTarget+=s}),e.forEach(a=>{const s=(a.office||"").toUpperCase();let o="OTHER";for(const d in lt)if(s.includes(d)){o=d;break}if(t.municipalityData[o]&&(t.municipalityData[o].actual++,t.totalActual++),(a.remarks||"ONGOING").toUpperCase()==="RESIGNED"?t.retention.resign++:t.retention.count++,a.createdAt&&a.startDate){const d=new Date(a.createdAt),i=new Date(a.startDate),u=Math.ceil((i-d)/(1e3*60*60*24));u>=0&&u<180&&(t.velocity.totalDays+=u,t.velocity.count++)}}),t}function Jt(e){const t=e.totalTarget>0?(e.totalActual/e.totalTarget*100).toFixed(1):0;document.querySelectorAll(".metric-utilization-rate").forEach(r=>{r.textContent=t+"%";const d=r.parentElement?.nextElementSibling?.firstElementChild;d&&(d.style.width=t+"%")});const a=e.velocity.count>0?(e.velocity.totalDays/e.velocity.count).toFixed(1):"14.2";document.querySelectorAll(".metric-velocity-avg").forEach(r=>r.textContent=a);const s=e.retention.count+e.retention.resign,o=s>0?(e.retention.count/s*100).toFixed(1):"100";document.querySelectorAll(".metric-retention-rate").forEach(r=>r.textContent=o+"%")}function Xt(e,t){const a=Object.values(e.offices).reduce((p,f)=>p+f,0);document.querySelectorAll(".metric-total-beneficiaries").forEach(p=>p.textContent=a);const s=e.genders.Female||0,o=e.genders.Male||0;document.querySelectorAll(".metric-female-ratio").forEach(p=>p.textContent=s.toLocaleString()),document.querySelectorAll(".metric-male-ratio").forEach(p=>p.textContent=o.toLocaleString());const r=p=>{const[f,v]=Object.entries(p.exactAges||{}).sort((c,y)=>y[1]-c[1]||Number(c[0])-Number(y[0]))[0]||[null,0],A=p.ageCount>0?v/p.ageCount*100:0;return{age:f,count:v,percentage:A}},d=p=>`${Number.isInteger(p)?p.toFixed(0):p.toFixed(1)}%`,i=r(e);document.querySelectorAll(".metric-top-age-label").forEach(p=>{p.textContent=i.age===null?"N/A":`${i.age} YRS`}),document.querySelectorAll(".metric-top-age-share").forEach(p=>{p.textContent=`${d(i.percentage)} of recorded ages`});const u=r(t);document.querySelectorAll(".metric-top-age").forEach(p=>{p.textContent=u.age===null?"N/A":u.age}),document.querySelectorAll(".metric-filtered-top-age-share").forEach(p=>{p.textContent=`${d(u.percentage)} of filtered ages`})}function Kt(e,t){const a=document.querySelector("#lastDaysdropdown ul");if(!a)return;const s=t.length,o=new Date,r=u=>{const p=new Date;return p.setDate(o.getDate()-u),p.setHours(0,0,0,0),t.filter(f=>{const v=Se(f.createdAt);return v&&v>=p}).length},d=u=>t.filter(p=>{const f=Se(p.startDate||p.createdAt);return f&&f.getFullYear().toString()===u}).length;let i=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ie==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${s}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ie==="7D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ie==="30D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ie==="90D"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${r(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(u=>{const p=d(u);i+=`
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${u}', 'Year ${u}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${ie===u?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${u}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${p}</span>
            </a>
        </li>`}),a.innerHTML=i}function Qt(e,t){const a=document.getElementById("gender-filter-options"),s=document.getElementById("gender-filter-button");if(!a||!s)return;const o=t.length,r=i=>t.filter(u=>{const p=Se(u.startDate||u.createdAt);return p&&p.getFullYear().toString()===i}).length;let d=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${Re==="ALL"?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${o}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;e.forEach(i=>{const u=r(i);d+=`
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${i}', 'Year ${i}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${Re===i?"bg-royal-blue/10 text-royal-blue":"text-slate-600 dark:text-slate-300"}">
                <span>Year ${i}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[0.625rem] font-black">${u}</span>
            </a>
        </li>
        `}),a.innerHTML=d,s.innerHTML=`${Et} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`}function er(e,t){ie=e,St=t,ze("user_workforce_filter",e,30),ze("user_workforce_label",t,30),["lastDaysdropdown"].forEach(s=>{const o=document.getElementById(s);if(o&&window.FlowbiteInstances){const r=window.FlowbiteInstances.getInstance("Dropdown",s);r&&r.hide()}else o&&o.classList.add("hidden")}),Je()}function tr(e,t){Re=e,Et=t,ze("user_gender_filter",e,30),ze("user_gender_label",t,30);const a=document.getElementById("gender-filter-dropdown");if(a&&window.FlowbiteInstances){const s=window.FlowbiteInstances.getInstance("Dropdown","gender-filter-dropdown");s&&s.hide()}else a&&a.classList.add("hidden");Je()}function rr(){const e=localStorage.getItem("user");if(e)try{const t=JSON.parse(e),a=t.full_name||t.username||"System User",s=t.email||(t.username?`${t.username}@dole.gov.ph`:"user@dole.gov.ph"),o=t.profile_picture_path,r=a.trim().split(" ").map(d=>d[0]).join("").substring(0,2).toUpperCase()||"??";document.querySelectorAll(".sidebar-user-name").forEach(d=>d.textContent=a),document.querySelectorAll(".sidebar-user-email").forEach(d=>d.textContent=s),document.querySelectorAll(".sidebar-user-avatar").forEach(d=>{const i=d.querySelector(".sidebar-avatar-initials"),u=d.querySelector(".sidebar-avatar-img");if(o&&u){const p=ke(),f=o.startsWith("http")?o:p+o.replace(/^\//,"");u.src=f,u.classList.remove("hidden"),i&&i.classList.add("hidden")}else i&&(i.textContent=r,i.classList.remove("hidden"),u&&u.classList.add("hidden"))})}catch{}}window.updateWorkforceFilter=er;window.updateGenderFilter=tr;document.addEventListener("themeChanged",()=>{setTimeout(()=>Je(),50)});window.addEventListener("dataSynced",()=>{Je(!0)});let Ae=null;function ar(e,t){const a=document.getElementById(t);if(!a)return;if(Ae&&(Ae.destroy(),Ae=null),e.length===0){const p=rt(),f={series:[1],chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!1}},labels:["No Data"],colors:[p.grid],plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!1},value:{show:!0,fontSize:"24px",fontWeight:900,color:p.muted,formatter:()=>"0"},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:p.muted,formatter:()=>"0"}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ge()?["#1e293b"]:["#ffffff"],width:2},tooltip:{enabled:!1},legend:{show:!1}};Ae=new tt(a,f),Ae.render();return}const s={ongoing:0,expired:0,absorbed:0,resigned:0,other:0};e.forEach(p=>{const f=(p.remarks||"").toUpperCase();f==="ONGOING"?s.ongoing++:f==="EXPIRED"?s.expired++:f==="ABSORBED"?s.absorbed++:f==="RESIGNED"?s.resigned++:s.other++});const o=[],r=[],d=[];s.ongoing>0&&(o.push(s.ongoing),r.push("Ongoing"),d.push(we.successGreen)),s.expired>0&&(o.push(s.expired),r.push("Expired"),d.push(we.philippineRed)),s.absorbed>0&&(o.push(s.absorbed),r.push("Absorbed"),d.push("#059669")),s.resigned>0&&(o.push(s.resigned),r.push("Resigned"),d.push("#b91c1c")),s.other>0&&(o.push(s.other),r.push("Other"),d.push(we.mutedSlate()));const i=rt(),u={series:o,chart:{type:"donut",height:250,fontFamily:"Montserrat, sans-serif",background:"transparent",animations:{enabled:!0,easing:"easeinout",speed:800,dynamicAnimation:{enabled:!0,speed:350}}},labels:r,colors:d,plotOptions:{pie:{donut:{size:"65%",labels:{show:!0,name:{show:!0,fontSize:"10px",fontWeight:800,color:i.muted,offsetY:-5},value:{show:!0,fontSize:"24px",fontWeight:900,color:i.text,offsetY:5},total:{show:!0,showAlways:!0,label:"TOTAL",fontSize:"10px",fontWeight:900,color:i.muted}}}}},dataLabels:{enabled:!1},stroke:{show:!0,colors:ge()?["#1e293b"]:["#ffffff"],width:2},tooltip:{theme:ge()?"dark":"light",style:{fontSize:"12px"}},legend:{show:!1}};Ae=new tt(a,u),Ae.render()}const or="modulepreload",sr=function(e,t){return new URL(e,t).href},dt={},Dt=function(t,a,s){let o=Promise.resolve();if(a&&a.length>0){let p=function(f){return Promise.all(f.map(v=>Promise.resolve(v).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};const d=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=i?.nonce||i?.getAttribute("nonce");o=p(a.map(f=>{if(f=sr(f,s),f in dt)return;dt[f]=!0;const v=f.endsWith(".css"),A=v?'[rel="stylesheet"]':"";if(s)for(let y=d.length-1;y>=0;y--){const E=d[y];if(E.href===f&&(!v||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${A}`))return;const c=document.createElement("link");if(c.rel=v?"stylesheet":or,v||(c.as="script"),c.crossOrigin="",c.href=f,u&&c.setAttribute("nonce",u),document.head.appendChild(c),v)return new Promise((y,E)=>{c.addEventListener("load",y),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(d){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=d,window.dispatchEvent(i),!i.defaultPrevented)throw d}return o.then(d=>{for(const i of d||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})};let me=null;if(Ce()){const e="https://llnddycvbcetztzwbdpx.supabase.co",t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbmRkeWN2YmNldHp0endiZHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MDMwMTEsImV4cCI6MjA5MDA3OTAxMX0.apIpDlZYja7SNuA-joXgFSvu_wtbBcVVP3OQSPrh7fA";try{me=Bt(e,t)}catch{}}function nr(e=new Date().getFullYear()){const t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],a=[];for(let s=0;s<12;s++){const o=new Date(e,s+1,0).getDate();a.push(`${t[s]} 1-15, ${e}`),a.push(`${t[s]} 16-${o}, ${e}`)}return a}function ir(e,t,a){if(a==="ar")return(e.period||"").toUpperCase().trim()===t.toUpperCase().trim();{const s=t.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);if(!s)return!1;const r=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(s[1].toUpperCase());if(r===-1)return!1;const d=parseInt(s[4]),i=parseInt(s[2]),u=parseInt(s[3]),p=(e.date||"").substring(0,10),f=new Date(p+"T00:00:00");return isNaN(f)?!1:f.getFullYear()===d&&f.getMonth()===r&&f.getDate()>=i&&f.getDate()<=u}}function lr(e){if(!e)return"-";const t=e.toUpperCase();return t==="VERIFIED"||t==="COMPLETED"?"✓":t==="REJECTED"||t==="DECLINED"?"X":t==="PENDING"?"?":t}function ct(e,t,a,s){const o=e.map(r=>{const d=t[r.id]||[],i=s.map(u=>{const p=d.find(f=>ir(f,u,a));return p?lr(p.status):"-"});return{name:r.name||r.id,cells:i}});return{periods:s,rows:o}}function ut(e,t,a){const{periods:s,rows:o}=t,r=s.length+1;let d='<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">';return d+=`<tr><td colspan="${r}" style="background:${a};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${e}</td></tr>`,d+=`<tr><th style="background:${a};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`,s.forEach(i=>{d+=`<th style="background:${a};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${i}</th>`}),d+="</tr>",o.forEach((i,u)=>{const p=u%2===0?"#ffffff":"#f5f5f5";d+="<tr>",d+=`<td style="background:${p};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${i.name}</td>`,i.cells.forEach(f=>{d+=`<td style="background:${p};padding:5px 8px;text-align:center;font-weight:bold;color:${f==="✓"?"#15803d":f==="X"?"#dc2626":"#9ca3af"};">${f}</td>`}),d+="</tr>"}),d+="</table>",d}async function Tr(e){const t="flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5",a=e.length,s=await H.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
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
        `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,didOpen:()=>{document.querySelectorAll('input[name="exp-count"]').forEach(u=>{u.addEventListener("change",()=>{const p=document.getElementById("custom-count-wrap");p.classList.toggle("hidden",u.value!=="custom"||!u.checked);const f=document.querySelector('input[name="exp-count"]:checked');p.classList.toggle("hidden",f?.value!=="custom")})})},preConfirm:()=>{const u=document.querySelector('input[name="exp-type"]:checked')?.value||"dtr",p=document.querySelector('input[name="exp-count"]:checked')?.value||"10";let f=parseInt(p==="custom"?document.getElementById("exp-custom-count")?.value||a:p,10);(isNaN(f)||f<1)&&(f=10),f=Math.min(f,a);const v=parseInt(document.getElementById("exp-year")?.value||new Date().getFullYear(),10);return{type:u,count:f,year:v}}});if(!s.isConfirmed||!s.value)return;const{type:o,count:r,year:d}=s.value,i=e.slice(0,r);await $t(i,o,d)}async function $t(e,t,a){H.fire({title:'<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',html:`<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,showConfirmButton:!1,allowOutsideClick:!1,customClass:{popup:"rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800"}});try{const s=nr(a),o=ke();async function r(E){const h=await(await fetch(`${o}api/logs.php?type=${E}`,{headers:{"X-User-Id":(()=>{try{return JSON.parse(localStorage.getItem("user"))?.id||""}catch{return""}})()}})).json();return h.success?h.logs||[]:[]}let d={},i={};(t==="dtr"||t==="both")&&(await r("dtr")).forEach(x=>{const h=String(x.gip_id||x.beneficiary_id||x.id||"");d[h]||(d[h]=[]),d[h].push(x)}),(t==="ar"||t==="both")&&(await r("ar")).forEach(x=>{const h=String(x.gip_id||x.beneficiary_id||x.id||"");i[h]||(i[h]=[]),i[h].push(x)});const u=e.map(E=>({...E,mapKey:String(E.id||E.gip_id||E.beneficiary_id)}));let p="";const f=new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date);if(t==="dtr"||t==="both"){const E=u.map(h=>({...h,id:h.mapKey})),x=ct(E,d,"dtr",s);p+="<br>"+ut(`DTR – Daily Time Records (${a})`,x,"#1d4ed8")}if(t==="ar"||t==="both"){const E=u.map(h=>({...h,id:h.mapKey})),x=ct(E,i,"ar",s);p+="<br><br>"+ut(`AR – Accomplishment Reports (${a})`,x,"#d97706")}const v=`
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${f} | DOLE LDNPFO – GIP Monitoring System</p>
                ${p}
            </body>
            </html>
        `,A=new Blob([v],{type:"application/vnd.ms-excel"}),c=URL.createObjectURL(A),y=document.createElement("a");y.href=c,y.download=`GIP_LOGS_${t.toUpperCase()}_${a}.xls`,document.body.appendChild(y),y.click(),URL.revokeObjectURL(c),document.body.removeChild(y),H.fire({toast:!0,position:"top-end",icon:"success",title:"Excel file downloaded!",showConfirmButton:!1,timer:2500})}catch(s){H.fire("Error",s.message||"Failed to generate export.","error")}}const Ye="color-theme",dr=3600*24*365;function cr(e,t,a){document.cookie=`${e}=${t}; max-age=${a}; path=/; SameSite=Lax`}function ur(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}function At(){const e=localStorage.getItem(Ye)||ur(Ye);return e==="dark"||e==="light"?e:"light"}function at(e){const t=document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem(Ye,e),cr(Ye,e,dr),pr(e),document.dispatchEvent(new CustomEvent("themeChanged",{detail:{theme:e}}))}function ot(){const e=At();at(e==="dark"?"light":"dark")}function pr(e){const t=e==="dark",a=document.getElementById("pref-dark-mode");a&&(a.checked=t);const s=document.getElementById("theme-toggle-dark-icon"),o=document.getElementById("theme-toggle-light-icon");s&&o&&(s.classList.toggle("hidden",t),o.classList.toggle("hidden",!t));const r=document.getElementById("sidebar-theme-label");r&&(r.textContent=t?"LIGHT MODE":"DARK MODE")}function Or(){const e=At();at(e);const t=document.getElementById("pref-dark-mode");t&&t.addEventListener("change",()=>{at(t.checked?"dark":"light")});const a=document.getElementById("theme-toggle-btn");a&&a.addEventListener("click",ot),document.querySelectorAll("[data-theme-toggle]").forEach(s=>{s.addEventListener("click",ot)})}function Ee(){return document.documentElement.classList.contains("dark")}window.toggleTheme=ot;window.isDarkMode=Ee;const Ge={queue:[],currentIndex:0,isActive:!1,isAutoSave:!1,lastInteractionTime:0,init(){this.showUploadModal()},showUploadModal(){const e=Ee(),t={bgCard:e?"bg-slate-900/40":"bg-gray-50/40",borderCard:e?"border-slate-800":"border-gray-100",textHeading:e?"text-green-500":"text-[#2e7d32]",textSubtitle:e?"text-slate-500":"text-gray-400 dark:text-gray-300",bgUpload:e?"bg-slate-800":"bg-white",borderUpload:e?"border-slate-700":"border-gray-200",textUpload:e?"text-slate-400":"text-gray-500",hoverUpload:e?"hover:bg-slate-800/80 hover:border-blue-500":"hover:bg-blue-50/50 hover:border-royal-blue",iconText:e?"text-green-400":"text-[#2e7d32]",iconBg:e?"bg-green-900/20":"bg-[#e8f5e9]",iconBorder:e?"border-green-800/30":"border-[#c8e6c9]"},a=`
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
        `;H.fire({html:a,width:"600px",showConfirmButton:!1,showCloseButton:!0,customClass:{container:"font-montserrat",popup:"rounded-2xl ldn-modal-popup"},didOpen:s=>{const o=s.querySelector("#csv-upload"),r=s.querySelector('label[for="csv-upload"]');["dragenter","dragover","dragleave","drop"].forEach(i=>{r.addEventListener(i,d,!1)});function d(i){i.preventDefault(),i.stopPropagation()}["dragenter","dragover"].forEach(i=>{r.addEventListener(i,()=>{r.classList.add("border-blue-500","bg-blue-50/50"),e&&r.classList.add("dark:bg-slate-800/80")},!1)}),["dragleave","drop"].forEach(i=>{r.addEventListener(i,()=>{r.classList.remove("border-blue-500","bg-blue-50/50"),e&&r.classList.remove("dark:bg-slate-800/80")},!1)}),o.addEventListener("change",i=>{const u=i.target.files[0];if(u){const p=s.querySelector("#auto-save-toggle");this.isAutoSave=p?p.checked:!1,this.handleFile(u)}}),r.addEventListener("drop",i=>{const p=i.dataTransfer.files[0];if(p){const f=s.querySelector("#auto-save-toggle");this.isAutoSave=f?f.checked:!1,this.handleFile(p)}},!1)}})},handleFile(e){if(!e.name.toLowerCase().endsWith(".csv")&&!e.name.toLowerCase().endsWith(".txt")){H.fire("Invalid File","Please upload a valid .csv or .txt file.","error");return}const t=new FileReader;t.onload=a=>{const s=a.target.result;this.parseCSV(s)},t.readAsText(e)},formatFullName(e){if(!e||!e.trim())return"";let t=e.trim().replace(/^["'\s]+|["'\s]+$/g,"");if(t=t.replace(/\s+/g," ").toUpperCase(),t.includes(",")){const a=t.split(","),s=a[0].trim();let o=a.slice(1).join(",").trim();return o=o.replace(/\b([A-Z])\b(?!\.)/g,"$1."),`${o} ${s}`.replace(/\s+/g," ").trim()}else return t=t.replace(/\b([A-Z])\b(?!\.)(?=\s+[A-Z]+$)/g,"$1."),t},calculateAge(e){if(!e)return"";const t=new Date(e);if(isNaN(t.getTime()))return"";const a=new Date;let s=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||o===0&&a.getDate()<t.getDate())&&s--,s>=0?s:0},formatDateToMMDDYYYY(e){if(!e||!e.trim())return"";let t=e.trim(),a=new Date(t);if(!isNaN(a.getTime())){const i=String(a.getMonth()+1).padStart(2,"0"),u=String(a.getDate()).padStart(2,"0"),p=a.getFullYear();return`${i}/${u}/${p}`}const s={JANUARY:"01",JAN:"01",FEBRUARY:"02",FEB:"02",MARCH:"03",MAR:"03",APRIL:"04",APR:"04",MAY:"05",JUNE:"06",JUN:"06",JULY:"07",JUL:"07",AUGUST:"08",AUG:"08",SEPTEMBER:"09",SEP:"09",SEPT:"09",OCTOBER:"10",OCT:"10",NOVEMBER:"11",NOV:"11",DECEMBER:"12",DEC:"12"},o=/([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})/,r=t.toUpperCase().match(o);if(r){const i=r[1],u=r[2].padStart(2,"0"),p=r[3],f=s[i];if(f)return`${f}/${u}/${p}`}const d=t.split("/");if(d.length===3){const i=d[0].padStart(2,"0"),u=d[1].padStart(2,"0");let p=d[2];return p.length===2&&(p="20"+p),`${i}/${u}/${p}`}return t},parsePeriodOfEmployment(e){if(!e||!e.trim())return{startDate:"",endDate:""};const t=e.split(/\s*(?:-|–|—|\bTO\b|\bUNTIL\b|\bTHRU\b)\s*/i);return t.length>=2?{startDate:this.formatDateToMMDDYYYY(t[0]),endDate:this.formatDateToMMDDYYYY(t[1])}:t.length===1?{startDate:this.formatDateToMMDDYYYY(t[0]),endDate:""}:{startDate:"",endDate:""}},async parseCSV(e){let t=[],a="",s=!1;for(let o=0;o<e.length;o++){let r=e[o];r==='"'&&(s=!s),!s&&(r===`
`||r==="\r")?(r==="\r"&&e[o+1]===`
`&&o++,a.trim()!==""&&t.push(a),a=""):a+=r}a.trim()!==""&&t.push(a),this.queue=[];for(let o=0;o<t.length;o++){let r=t[o].trim();if(!r)continue;let d=[],i="",u=!1;for(let p=0;p<r.length;p++){let f=r[p];f==='"'?u=!u:f===","&&!u?(d.push(i.replace(/(^"|"$)/g,"").trim()),i=""):i+=f}if(d.push(i.replace(/(^"|"$)/g,"").trim()),d.length>=2){const p=this.formatFullName(d[1]);if(!p||p.toLowerCase()==="name of assured"||p.toLowerCase()==="name"||p.toLowerCase()==="full name")continue;const f=d[0]?d[0].trim().toLowerCase():"";if(f==="no."||f==="no")continue;const v=d[2]?d[2].trim():"",A=d[3]?this.formatDateToMMDDYYYY(d[3]):"",c=A?this.calculateAge(A):d[4]?d[4].trim():"",y=d[5]?d[5].trim():"",E=d[6]?this.formatFullName(d[6]):"",x=d[7]?d[7].trim().toUpperCase():"",h=d[8]?d[8].trim():"",{startDate:L,endDate:M}=this.parsePeriodOfEmployment(h),F=d[9]?d[9].trim():"";let $=d[10]?d[10].trim().toUpperCase():"";$||($="ONGOING"),this.queue.push({name:p,contact:F,address:y,birthday:A,age:c,gender:"",education:"",designatedBeneficiary:E,relationshipToAssured:x,office:v,designation:"N/A",startDate:L,endDate:M,remarks:$})}}if(this.queue.length>0){try{H.fire({title:"Checking duplicates...",html:'<p class="text-sm">Please wait while we cross-reference your data.</p>',allowOutsideClick:!1,didOpen:()=>{H.showLoading()}});const o=this.queue.map(u=>u.name);let r=null;try{r=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{r=null}const i=await(await fetch(`${ke()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...r?{"X-User-Id":String(r)}:{}},body:JSON.stringify({names:o,user_id:r})})).json();if(i.success&&i.duplicates&&i.duplicates.length>0){const u=v=>v?v.toLowerCase().replace(/\./g,"").replace(/\s+/g," ").trim():"",p=new Set(i.duplicates.map(v=>u(v))),f=this.queue.length;this.queue=this.queue.filter(v=>{const A=p.has(u(v.name));return!A})}}catch{}if(this.queue.length===0){H.fire("All Skipped","All beneficiaries in the CSV already exist in the database.","info");return}this.isActive=!0,this.currentIndex=0,H.close(),this.processNext()}else H.fire("Error","No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.","error")},showProgressModal(){Ee();const e=Math.min(this.currentIndex+1,this.queue.length),t=Math.round(e/this.queue.length*100),a=`
            <div class="p-2 text-left font-montserrat">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-black text-blue-600 dark:text-blue-400 uppercase italic">Processing Data...</h3>
                    <span id="bulk-progress-counter" class="text-[0.625rem] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">${e} / ${this.queue.length}</span>
                </div>
                
                <div class="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-4 mb-6 p-1 border border-gray-200 dark:border-slate-700">
                    <div id="bulk-progress-bar" class="bg-blue-600 h-full rounded-full transition-all duration-300 shadow-sm shadow-blue-500/20" style="width: ${t}%"></div>
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
        `;if(H.isVisible()&&H.getPopup().querySelector("#bulk-progress-bar")){const s=document.getElementById("bulk-progress-bar"),o=document.getElementById("bulk-progress-counter"),r=document.getElementById("bulk-current-name");s&&(s.style.width=`${t}%`),o&&(o.textContent=`${e} / ${this.queue.length}`),r&&(r.textContent=this.queue[this.currentIndex]?.name||"...")}else H.fire({html:a,showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,width:"450px",customClass:{container:"font-montserrat",popup:"rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800"},didOpen:s=>{s.querySelector("#stop-bulk-btn").onclick=()=>this.onCancel()}})},formatDate(e){if(!e||e.trim()==="")return"";const t=new Date(e);if(isNaN(t.getTime())){const r=e.split("/");return r.length===3?`${r[2]}-${r[1].padStart(2,"0")}-${r[0].padStart(2,"0")}`:""}const a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${a}-${s}-${o}`},async processNext(){if(this.currentIndex<this.queue.length){const e=this.queue[this.currentIndex];e._isBulk=!0,e._bulkCurrent=this.currentIndex+1,e._bulkTotal=this.queue.length,this.isAutoSave?(this.showProgressModal(),window.addBeneficiaryData?(async()=>{try{let a=null;try{a=JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{a=null}const o=await(await fetch(`${ke()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...a?{"X-User-Id":String(a)}:{}},body:JSON.stringify({name:e.name,user_id:a})})).json();if(o.success&&o.exists){this.isActive&&this.onSaveSuccess();return}}catch{}try{const a=e.startDate?new Date(e.startDate).getFullYear():new Date().getFullYear(),s=await be(`api/beneficiaries.php?next_id&year=${a}`);s.success&&s.data?.success&&s.data?.nextId&&(e.gip_id=s.data.nextId,e.id=null)}catch{}const t=await window.addBeneficiaryData(e);this.isActive&&(t?this.onSaveSuccess():this.onSaveSuccess())})():Ve(e)):Ve(e)}else this.isActive=!1,this.lastInteractionTime=Date.now(),H.fire({icon:"success",title:"Bulk Add Complete!",text:`Successfully processed ${this.queue.length} beneficiaries.`,confirmButtonColor:"#2e7d32"})},onSaveSuccess(){if(this.isActive){this.currentIndex++;const e=this.isAutoSave?100:1500;setTimeout(()=>{this.processNext()},e)}},onCancel(){this.isActive&&(this.isActive=!1,this.lastInteractionTime=Date.now(),this.queue=[],this.currentIndex=0,H.fire({icon:"info",title:"Bulk Add Cancelled",text:"Stopped processing the remaining beneficiaries and cleared the queue.",confirmButtonColor:"#3085d6"}).then(()=>{this.showUploadModal()}))}};window.BulkApp=Ge;function pt(e){if(!e)return"";const t=new Date(e),a=new Date;let s=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||o===0&&a.getDate()<t.getDate())&&s--,s>=0?s:0}function gt(e){if(!e||e==="N/A")return"N/A";const t=String(e).split("/");if(t.length===3){const s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],o=parseInt(t[0],10);if(o>=1&&o<=12)return`${s[o-1]} ${t[1].padStart(2,"0")}, ${t[2]}`}const a=String(e).split("-");if(a.length===3&&a[0].length===4){const s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],o=parseInt(a[1],10);if(o>=1&&o<=12)return`${s[o-1]} ${a[2].padStart(2,"0")}, ${a[0]}`}return String(e).toUpperCase()}function gr(e,t=!0){if(!e||e==="N/A")return t?"bg-gray-800 text-white font-black border-gray-900 shadow-md dark:bg-gray-100 dark:text-gray-900":"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const a=e.toUpperCase().trim();let s={inactive:"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};if(a==="LDNPFO"||a.startsWith("LDNPFO"))s={inactive:"bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};else if(a.includes("BOT"))s={inactive:"bg-amber-100 text-amber-800 border border-amber-200 dark:!text-white",active:"bg-amber-400 text-slate-900 font-black border-amber-500 shadow-md"};else if(a.includes("DICT"))s={inactive:"bg-red-100 text-red-700 border border-red-200 dark:!text-white",active:"bg-red-600 text-white font-black border-red-700 shadow-md"};else if(a.includes("NLRC"))s={inactive:"bg-blue-50 text-blue-700 border border-blue-100 dark:!text-white",active:"bg-royal-blue text-white font-black border-blue-800 shadow-md"};else if(a.includes("PCUP"))s={inactive:"bg-indigo-100 text-indigo-900 border border-indigo-200 dark:!text-white",active:"bg-indigo-900 text-white font-black border-indigo-950 shadow-md"};else if(a.includes("BACOLOD"))s={inactive:"bg-rose-100 text-rose-900 border border-rose-200 dark:!text-white",active:"bg-red-900 text-white font-black border-red-950 shadow-md"};else if(a.includes("BALO-I")||a.includes("BALOI"))s={inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-500 text-white font-black border-sky-600 shadow-md"};else if(a.includes("BAROY"))s={inactive:"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white",active:"bg-slate-600 text-white font-black border-slate-700 shadow-md"};else if(a.includes("ILIGAN"))s={inactive:"bg-amber-100 text-amber-900 border border-amber-200 dark:!text-white",active:"bg-amber-800 text-white font-black border-amber-900 shadow-md"};else if(a.includes("KAUSWAGAN"))s={inactive:"bg-pink-50 text-pink-700 border border-pink-200 dark:!text-white",active:"bg-gradient-to-r from-sky-400 to-pink-500 text-white font-black border-pink-500 shadow-md"};else if(a.includes("KOLAMBUGAN"))s={inactive:"bg-emerald-100 text-emerald-900 border border-emerald-200 dark:!text-white",active:"bg-emerald-900 text-white font-black border-emerald-950 shadow-md"};else if(a.includes("LINAMON"))s={inactive:"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white",active:"bg-purple-600 text-white font-black border-purple-700 shadow-md"};else if(a.includes("MAGSAYSAY"))s={inactive:"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white",active:"bg-cyan-600 text-white font-black border-cyan-700 shadow-md"};else if(a.includes("MAIGO"))s={inactive:"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white",active:"bg-blue-600 text-white font-black border-blue-700 shadow-md"};else if(a.includes("MATUNGAO"))s={inactive:"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white",active:"bg-violet-600 text-white font-black border-violet-700 shadow-md"};else if(a.includes("NUNUNGAN"))s={inactive:"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white",active:"bg-indigo-600 text-white font-black border-indigo-700 shadow-md"};else if(a.includes("PANTAO"))s={inactive:"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white",active:"bg-orange-600 text-white font-black border-orange-700 shadow-md"};else if(a.includes("PANTAR"))s={inactive:"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white",active:"bg-amber-500 text-white font-black border-amber-600 shadow-md"};else if(a.includes("POONA"))s={inactive:"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white",active:"bg-fuchsia-600 text-white font-black border-fuchsia-700 shadow-md"};else if(a.includes("SALVADOR"))s={inactive:"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white",active:"bg-rose-600 text-white font-black border-rose-700 shadow-md"};else if(a.includes("SAPAD"))s={inactive:"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white",active:"bg-lime-600 text-white font-black border-lime-700 shadow-md"};else if(a.includes("SND"))s={inactive:"bg-red-100 text-red-700 border border-red-200 dark:!text-white",active:"bg-red-700 text-white font-black border-red-800 shadow-md"};else if(a.includes("TAGOLOAN"))s={inactive:"bg-green-100 text-green-700 border border-green-200 dark:!text-white",active:"bg-green-600 text-white font-black border-green-700 shadow-md"};else if(a.includes("TANGCAL"))s={inactive:"bg-purple-100 text-purple-800 border border-purple-200 dark:!text-white",active:"bg-purple-800 text-white font-black border-purple-900 shadow-md"};else if(a.includes("TUBOD"))s={inactive:"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white",active:"bg-emerald-600 text-white font-black border-emerald-700 shadow-md"};else if(a.includes("PGLDN"))s={inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-600 text-white font-black border-sky-700 shadow-md"};else if(a.includes("PRC"))s={inactive:"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white",active:"bg-pink-600 text-white font-black border-pink-700 shadow-md"};else if(a.includes("SSS"))s={inactive:"bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white",active:"bg-blue-800 text-white font-black border-blue-900 shadow-md"};else{const o=[{inactive:"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white",active:"bg-purple-600 text-white font-black border-purple-700 shadow-md"},{inactive:"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white",active:"bg-rose-600 text-white font-black border-rose-700 shadow-md"},{inactive:"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white",active:"bg-amber-500 text-white font-black border-amber-600 shadow-md"},{inactive:"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white",active:"bg-teal-600 text-white font-black border-teal-700 shadow-md"},{inactive:"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white",active:"bg-indigo-600 text-white font-black border-indigo-700 shadow-md"},{inactive:"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white",active:"bg-emerald-600 text-white font-black border-emerald-700 shadow-md"},{inactive:"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white",active:"bg-sky-500 text-white font-black border-sky-600 shadow-md"}];let r=0;for(let d=0;d<a.length;d++)r=r*31+a.charCodeAt(d)>>>0;s=o[r%o.length]}return t?s.active:s.inactive}function br(e){if(!e)return"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800";const t=e.toUpperCase();return t==="ONGOING"||t==="ABSORBED"?"bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-700 dark:border-emerald-800":"bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800"}const bt="gip-drawer-employment-details-expanded";class fr{constructor(t,a,s){this.root=t,this.maxPage=s,this.currentPage=Math.min(Math.max(Number(a)||0,0),s),this.prevButton=t.querySelector("#drawer-prev-btn"),this.nextButton=t.querySelector("#drawer-next-btn"),this.detailsButton=t.querySelector("#drawer-employment-details-toggle"),this.detailsPanel=t.querySelector("#drawer-employment-details-panel"),this.detailsIcon=t.querySelector("#drawer-employment-details-icon"),this.pageTitles=["Personal Profile","Submission Logs","Required Documents"]}getSavedDetailsState(){try{return localStorage.getItem(bt)==="true"}catch{return!1}}saveDetailsState(t){try{localStorage.setItem(bt,String(t))}catch{}}setDetailsExpanded(t,a=!1){!this.detailsButton||!this.detailsPanel||(this.detailsButton.setAttribute("aria-expanded",String(t)),this.detailsPanel.classList.toggle("hidden",!t),this.detailsIcon?.classList.toggle("rotate-180",t),a&&this.saveDetailsState(t))}renderNavigation(){this.root.querySelectorAll("[id^=drawer-page-]").forEach((s,o)=>{s.classList.toggle("hidden",o!==this.currentPage)});const t=this.root.querySelector("#drawer-section-title");t&&(t.textContent=this.pageTitles[this.currentPage]),this.root.querySelector("#personal-profile-section")?.classList.toggle("hidden",this.currentPage!==0),this.prevButton?.classList.toggle("hidden",this.currentPage===0),this.nextButton?.classList.toggle("hidden",this.currentPage===this.maxPage)}goToPage(t){this.currentPage=Math.min(Math.max(t,0),this.maxPage),this.renderNavigation()}bind(){this.prevButton?.addEventListener("click",()=>this.goToPage(this.currentPage-1)),this.nextButton?.addEventListener("click",()=>this.goToPage(this.currentPage+1)),this.detailsButton?.addEventListener("click",()=>{const t=this.detailsButton.getAttribute("aria-expanded")==="true";this.setDetailsExpanded(!t,!0)}),this.setDetailsExpanded(this.getSavedDetailsState()),this.renderNavigation()}}function ft(e=3){return Array.from({length:e},(t,a)=>`
        <div class="skeleton-wave border border-gray-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800" aria-hidden="true">
            <div class="h-2.5 ${a%2===0?"w-2/5":"w-1/3"} rounded-full bg-gray-200 dark:bg-slate-700"></div>
            <div class="mt-3 h-3.5 ${a%2===0?"w-4/5":"w-3/5"} rounded-full bg-gray-300 dark:bg-slate-600"></div>
        </div>
    `).join("")}function mr(){return["Contact No.","Address","Birthday","Age","Gender","Education","Designated Beneficiary","Relationship to Assured"].map((t,a)=>`
        <div class="grid grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-4">
            <span class="whitespace-nowrap font-medium text-gray-500">${t}</span>
            <span class="skeleton-wave block h-3.5 ${a%3===0?"w-2/3":a%3===1?"w-full":"w-1/2"} rounded-full bg-gray-200 dark:bg-slate-700" aria-hidden="true"></span>
        </div>
    `).join("")}async function mt(e,t){const a=await yt(`api/logs.php?type=${encodeURIComponent(e)}`,t),s=a.success?a.data:null;return!a.success||!s?.success?{success:!1,error:s?.error||a.error||"The log could not be saved."}:a}function Ue(e,t=0){const a=!!e?._isLoadingProfile,s=!!e?._isLoadingLogs;e={...e,id:e?.id||e?.gip_id||"N/A",name:e?.name||"N/A",office:e?.office||"N/A",remarks:e?.remarks||"N/A",designation:e?.designation||"N/A",designatedBeneficiary:e?.designatedBeneficiary||"N/A",relationshipToAssured:e?.relationshipToAssured||"N/A"};const o=e.arLogs||[],r=e.dtrLogs||[],d=e.docs||[],i=["GIP FORM","BIRTH CERTIFICATE","DIPLOMA","TOR","VALID ID"],u=i.map(c=>{const y=d.find(E=>E.name.toUpperCase()===c.toUpperCase());return y||{name:c,status:"PENDING",id:null}});d.forEach(c=>{i.some(E=>E.toUpperCase()===c.name.toUpperCase())||u.push(c)});const p=`
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
            ${a?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${br(e.remarks)} block min-h-8 w-full truncate border border-l-4 ${e.remarks==="ONGOING"||e.remarks==="ABSORBED"?"border-l-emerald-600 dark:border-l-emerald-500":"border-l-red-600 dark:border-l-red-500"} px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.remarks}">${e.remarks}</span>`}
        </div>
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Office</span>
            ${a?'<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>':`<span class="${gr(e.office,!0)} block min-h-8 w-full truncate border border-l-4 px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${e.office}">${e.office}</span>`}
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
        ${a?mr():`
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
            <span class="${e.age||pt(e.birthday)?"font-black text-heading":"font-bold text-gray-300 italic"} text-right sm:text-left">${e.age||pt(e.birthday)||"N/A"}</span>
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
                        ${Xe(e.startDate,e.endDate).text||"GIP Duration"}
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <!-- Start Date (Color Coded: Emerald Green) -->
                    <div class="flex flex-col bg-emerald-50/60 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">Start Date</span>
                        ${a?'<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-emerald-200/70 dark:bg-emerald-900/50 my-0.5"></span>':`<span class="text-xs sm:text-sm font-black text-emerald-700 dark:text-emerald-300 leading-tight font-mono">${gt(e.startDate)}</span>`}
                    </div>
                    <!-- End Date (Color Coded: Rose Red) -->
                    <div class="flex flex-col bg-rose-50/60 dark:bg-rose-950/30 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block mb-1">End Date</span>
                        ${a?'<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-rose-200/70 dark:bg-rose-900/50 my-0.5"></span>':`<span class="text-xs sm:text-sm font-black text-rose-700 dark:text-rose-300 leading-tight font-mono">${gt(e.endDate)}</span>`}
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
                ${a?'<div class="pl-7"><span class="skeleton-wave block h-4 w-44 rounded-full bg-amber-200/70 dark:bg-amber-900/50 my-1"></span></div>':`<p class="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-200 break-words whitespace-normal leading-snug pl-7">${e.designation||"N/A"}</p>`}
            </div>
            
            <!-- Replacement History Card (Color Coded: Indigo/Blue) -->
            <div class="bg-blue-50/30 dark:bg-blue-950/20 p-4 rounded-xl border border-dashed border-blue-200 dark:border-blue-900/50">
                <label class="text-[0.5625rem] text-royal-blue dark:text-blue-400 font-bold block mb-1 uppercase tracking-widest">Replacement History</label>
                ${a?'<span class="skeleton-wave block h-4 w-36 rounded-full bg-blue-200/70 dark:bg-blue-900/50 my-1"></span>':`<p class="text-xs sm:text-sm text-royal-blue dark:text-blue-300 font-bold italic underline decoration-blue-500/30 underline-offset-4 cursor-default">${e.replacement||"None found."}</p>`}
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
            ${s?ft(4):`
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${r.length?r.map(c=>{const y=c.status||"PENDING";let E=y==="VERIFIED"||y==="COMPLETED"?"text-green-500":y==="REJECTED"||y==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const x=y==="VERIFIED"||y==="COMPLETED"?"SUBMITTED":y;let h=c.date||c.createdAt,L=h;const M=c.submittedAt||c.submitted_at||c.createdAt||c.created_at,F=M?new Date(M).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",$=[c.rejectedAt||c.rejected_at?"Rejected: "+new Date(c.rejectedAt||c.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",c.updatedAt||c.updated_at?"Updated: "+new Date(c.updatedAt||c.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(D=>`
`+D).join("");if(h){const D=/^\d{4}-\d{2}-\d{2}$/.test(h)?new Date(h+"T00:00:00Z"):new Date(h);isNaN(D)||(L=D.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-blue-500 bg-transparent p-4 text-blue-700 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:border-blue-300 dark:hover:bg-blue-500 dark:hover:text-white" title="Submitted: ${F}${$}" data-type="dtr" data-id="${c.id}" data-val="${c.day||h}" data-status="${y}">
                            <span class="text-sm font-black text-blue-700 group-hover:text-white dark:text-blue-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${F}${$}">${c.day||L}</span>
                            <span class="log-status-label text-xs font-bold ${E} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${x}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="dtr" data-id="${c.id}">
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
                    ${o.length?o.map(c=>{const y=c.status||"PENDING";let E=y==="VERIFIED"||y==="COMPLETED"?"text-green-500":y==="REJECTED"||y==="DECLINED"?"text-red-500":"text-gray-400 dark:text-gray-500";const x=y==="VERIFIED"||y==="COMPLETED"?"SUBMITTED":y;let h=c.period||c.createdAt,L=h;const M=c.submittedAt||c.submitted_at||c.createdAt||c.created_at,F=M?new Date(M).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"Submission time unavailable",$=[c.rejectedAt||c.rejected_at?"Rejected: "+new Date(c.rejectedAt||c.rejected_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):"",c.updatedAt||c.updated_at?"Updated: "+new Date(c.updatedAt||c.updated_at).toLocaleString("en-US",{dateStyle:"full",timeStyle:"long",timeZone:"Asia/Manila"}):""].filter(Boolean).map(D=>`
`+D).join("");if(h){const D=/^\d{4}-\d{2}-\d{2}$/.test(h)?new Date(h+"T00:00:00Z"):new Date(h);isNaN(D)||(L=D.toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric",timeZone:"Asia/Manila"}).toUpperCase())}return`
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-orange-500 bg-transparent p-4 text-orange-700 shadow-sm transition-colors hover:border-orange-700 hover:bg-orange-600 hover:text-white dark:border-orange-400 dark:text-orange-300 dark:hover:border-orange-300 dark:hover:bg-orange-500 dark:hover:text-white" title="Submitted: ${F}${$}" data-type="ar" data-id="${c.id}" data-val="${h}" data-status="${y}">
                            <span class="text-sm font-black text-orange-700 group-hover:text-white dark:text-orange-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${F}${$}">${h||L}</span>
                            <span class="log-status-label text-xs font-bold ${E} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${x}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="ar" data-id="${c.id}">
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
            ${s?ft(5):u.map(c=>{const y=c.status.toUpperCase(),x={VERIFIED:"COMPLETED",DECLINED:"REJECTED",PENDING:"PENDING"}[y]||y,h=x==="COMPLETED",L=x==="REJECTED",M=x==="PENDING",F=h?"text-emerald-600 group-hover/card:text-emerald-800 dark:text-emerald-400 dark:group-hover/card:text-emerald-900":L?"text-red-600 group-hover/card:text-red-800 dark:text-red-400 dark:group-hover/card:text-red-900":"text-orange-600 group-hover/card:text-orange-800 dark:text-orange-400 dark:group-hover/card:text-orange-900",$=h?"border-emerald-600 bg-transparent hover:border-emerald-700 hover:bg-emerald-600 dark:border-emerald-400 dark:bg-transparent dark:hover:border-emerald-300 dark:hover:bg-emerald-500":L?"border-red-600 bg-transparent hover:border-red-700 hover:bg-red-600 dark:border-red-400 dark:bg-transparent dark:hover:border-red-300 dark:hover:bg-red-500":"border-orange-600 bg-transparent hover:border-orange-700 hover:bg-orange-600 dark:border-orange-400 dark:bg-transparent dark:hover:border-orange-300 dark:hover:bg-orange-500",D=h?"text-emerald-700 group-hover/card:text-white dark:text-emerald-300 dark:group-hover/card:text-white":L?"text-red-700 group-hover/card:text-white dark:text-red-300 dark:group-hover/card:text-white":"text-orange-700 group-hover/card:text-white dark:text-orange-300 dark:group-hover/card:text-white",W=h?"SUBMITTED":x,_=h?"border-emerald-900 bg-emerald-700 text-white ring-2 ring-emerald-200 hover:bg-emerald-600":"border-emerald-500 bg-transparent text-emerald-700 group-hover/card:border-emerald-700 group-hover/card:bg-white group-hover/card:text-emerald-800 hover:border-emerald-700 hover:bg-emerald-600 hover:text-white",xe=M?"border-orange-900 bg-orange-700 text-white ring-2 ring-orange-200 hover:bg-orange-600":"border-orange-500 bg-transparent text-orange-700 group-hover/card:border-orange-700 group-hover/card:bg-white group-hover/card:text-orange-800 hover:border-orange-700 hover:bg-orange-600 hover:text-white",ne=L?"border-red-900 bg-red-700 text-white ring-2 ring-red-200 hover:bg-red-600":"border-red-500 bg-transparent text-red-700 group-hover/card:border-red-700 group-hover/card:bg-white group-hover/card:text-red-800 hover:border-red-700 hover:bg-red-600 hover:text-white";let K='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';return h?K='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M5 13l4 4L19 7"></path></svg>':L&&(K='<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18L18 6M6 6l12 12"></path></svg>'),`
                <div class="drawer-doc-card group/card relative flex cursor-pointer items-center justify-between rounded-xl border p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand/30 ${$}" role="button" tabindex="0" data-id="${c.id}" data-name="${c.name}" data-status="${x}" aria-label="Change status for ${c.name}" aria-expanded="false">
                    <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white shadow-sm ${F}">
                            ${K}
                        </div>
                        <span class="flex-1 text-xs font-black uppercase tracking-tight sm:text-sm ${D}">${c.name}</span>
                    </div>
                    <span class="drawer-doc-status ml-auto shrink-0 text-[0.5625rem] font-black uppercase tracking-wider ${D}">${W}</span>
                    <svg class="drawer-doc-cue ml-3 size-5 shrink-0 transition-transform group-hover/card:scale-110 ${D}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 12h.01M12 12h.01M18 12h.01"/></svg>
                    <div class="drawer-doc-actions ml-3 hidden shrink-0 items-center gap-1.5">
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${_}" data-status="COMPLETED" aria-label="Submit document" aria-pressed="${h}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="m5 13 4 4L19 7"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Submitted</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${xe}" data-status="PENDING" aria-label="Set pending" aria-pressed="${M}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            <span class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Pending</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${ne}" data-status="REJECTED" aria-label="Reject document" aria-pressed="${L}">
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
    `,f=!!e._noAnimation;let v=document.getElementById("beneficiary-drawer-container");const A=f&&!!v&&v.dataset.beneficiaryId===String(e.id||"");if(A){const c=v.scrollTop;v.innerHTML=p,v.scrollTop=c}else v&&(v.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),v=document.createElement("div"),v.id="beneficiary-drawer-container",v.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[500px] lg:w-[560px] shadow-2xl",v.setAttribute("tabindex","-1"),v.setAttribute("data-drawer-backdrop","true"),v.innerHTML=p,document.body.appendChild(v),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden");v.dataset.beneficiaryId=String(e.id||""),Dt(async()=>{const{Drawer:c}=await import("./vendor-flowbite-BS-fTmyB.js").then(y=>y.b);return{Drawer:c}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:c})=>{let y=A?v.__drawerInstance:null;if(!y){const w={placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{v.__inlineActionAbort?.abort(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{v&&v.parentNode&&v.remove()},300)}};y=new c(v,w),v.__drawerInstance=y,y.show()}v.querySelector("#close-drawer-btn").addEventListener("click",()=>y.hide());const x=new fr(v,t,2);x.bind(),v.__inlineActionAbort?.abort();const h=new AbortController;v.__inlineActionAbort=h;const L=()=>{const B=(document.getElementById("beneficiary-drawer-container")||v).getBoundingClientRect(),C=Math.max(0,B.left);return{canDockBesideDrawer:window.innerWidth>=640&&C>=280,drawerOffset:Math.max(0,window.innerWidth-B.left),availableLeftSpace:C}},M=(w,B,C=1800)=>(L(),H.fire({toast:!0,position:"bottom-end",icon:w,title:B,showConfirmButton:!1,timer:C,didOpen:Y=>{const Z=L();if(!Z.canDockBesideDrawer)return;const G=Y.closest(".swal2-container");G&&(G.style.inset="auto",G.style.right=Z.drawerOffset+12+"px",G.style.bottom="12px",G.style.left="auto",G.style.width="auto",Y.style.maxWidth=`${Math.min(352,Z.availableLeftSpace-24)}px`)}})),F=w=>{!w||w.dataset.loading==="true"||(w.dataset.confirming="false",w.classList.remove("w-22","opacity-100","pointer-events-auto"),w.classList.add("w-11","opacity-0","pointer-events-none"),w.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.remove("!pr-24"),w.querySelector(".delete-log-trigger")?.classList.replace("hidden","flex"),w.querySelector(".delete-confirm-actions")?.classList.replace("flex","hidden"))},$=(w=null)=>{v.querySelectorAll(".drawer-doc-card").forEach(B=>{B===w||B.dataset.loading==="true"||(B.setAttribute("aria-expanded","false"),B.querySelector(".drawer-doc-actions")?.classList.replace("flex","hidden"),B.querySelector(".drawer-doc-cue")?.classList.remove("hidden"))}),v.querySelectorAll(".delete-log-control").forEach(B=>{B!==w&&F(B)})},D=async(w,B)=>{const C=w.dataset.status;if(B===C){$();return}const Y=w.querySelector(".drawer-doc-actions"),Z=w.querySelector(".drawer-doc-loading");w.dataset.loading="true",w.setAttribute("aria-busy","true"),Y?.classList.replace("flex","hidden"),Z?.classList.replace("hidden","block");try{const G={COMPLETED:"VERIFIED",REJECTED:"DECLINED",PENDING:"PENDING"},le=await mt("docs",{gip_id:e.id,doc_name:w.dataset.name,status:G[B]||B}),Q=le.success?le.data:{success:!1,error:le.error};if(!Q.success)throw new Error(Q.error||"Failed to update document status.");window.viewBeneficiary&&await window.viewBeneficiary(e,x.currentPage),M("success","Status updated!")}catch(G){w.dataset.loading="false",w.removeAttribute("aria-busy"),Z?.classList.replace("block","hidden"),Y?.classList.replace("hidden","flex"),M("error",G.message)}};v.querySelectorAll(".drawer-doc-card").forEach(w=>{const B=()=>{const C=w.getAttribute("aria-expanded")!=="true";$(C?w:null),w.setAttribute("aria-expanded",String(C)),w.querySelector(".drawer-doc-actions")?.classList.toggle("hidden",!C),w.querySelector(".drawer-doc-actions")?.classList.toggle("flex",C),w.querySelector(".drawer-doc-cue")?.classList.toggle("hidden",C)};w.addEventListener("click",C=>{C.target.closest(".doc-status-action")||B()}),w.addEventListener("keydown",C=>{C.target.closest(".doc-status-action")||(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),B())}),w.querySelectorAll(".doc-status-action").forEach(C=>{C.addEventListener("click",Y=>{Y.stopPropagation(),D(w,C.dataset.status)})})}),document.addEventListener("click",w=>{w.target.closest(".drawer-doc-card, .delete-log-control")||$()},{signal:h.signal});const W=new Set(["2026-01-01","2026-04-02","2026-04-03","2026-04-09","2026-05-01","2026-06-12","2026-08-24","2026-08-31","2026-11-01","2026-11-30","2026-12-25","2026-12-30","2026-12-31"]),_=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function xe(w){const C=new Date(w+"T00:00:00").getDay();return C!==0&&C!==6&&!W.has(w)}function ne(w){const B=w.getDate(),C=_[w.getMonth()],Y=w.getFullYear(),Z=new Date(Y,w.getMonth()+1,0).getDate();return B<=15?`${C} 1-15, ${Y}`:`${C} 16-${Z}, ${Y}`}const K=()=>{const w=new Date;if(!r.length)return ne(w);let B=-1,C="";const Y=V=>{const J=(V||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!J)return-1;const ae=_.indexOf(J[1]),ce=parseInt(J[2])===1?0:1;return parseInt(J[4])*100+ae*2+ce};if(r.forEach(V=>{const J=V.day||V.date||"",ae=Y(J);ae>B&&(B=ae,C=J)}),B===-1)return ne(w);const Z=C.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),G=_.indexOf(Z[1]),le=parseInt(Z[2]),Q=parseInt(Z[4]);if(le===1){const V=new Date(Q,G+1,0).getDate();return`${_[G]} 16-${V}, ${Q}`}else{const V=(G+1)%12,J=G===11?Q+1:Q;return`${_[V]} 1-15, ${J}`}},ee=()=>{const w=new Date;if(!o.length)return ne(w);let B=-1,C="";const Y=V=>{const J=(V||"").toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);if(!J)return-1;const ae=_.indexOf(J[1]),ce=parseInt(J[2])===1?0:1;return parseInt(J[4])*100+ae*2+ce};if(o.forEach(V=>{const J=Y(V.period);J>B&&(B=J,C=V.period)}),B===-1)return ne(w);const Z=C.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/),G=_.indexOf(Z[1]),le=parseInt(Z[2]),Q=parseInt(Z[4]);if(le===1){const V=new Date(Q,G+1,0).getDate();return`${_[G]} 16-${V}, ${Q}`}else{const V=(G+1)%12,J=G===11?Q+1:Q;return`${_[V]} 1-15, ${J}`}},fe=async(w,B)=>{H.fire({title:"Adding...",allowOutsideClick:!1,showConfirmButton:!1}),H.showLoading();try{const C={gip_id:e.id};if(w==="dtr"){const G=B.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);if(G){const le=_.indexOf(G[1]),Q=parseInt(G[2]),V=parseInt(G[3]);let J=new Date(V,le,Q);for(;!xe(J.toISOString().split("T")[0]);)J.setDate(J.getDate()+1);C.record_date=J.toISOString().split("T")[0]}else C.record_date=new Date().toISOString().split("T")[0];C.weekday=B}w==="ar"&&(C.period=B);const Y=await mt(w,C),Z=Y.success?Y.data:{success:!1,error:Y.error};if(Z.success)window.viewBeneficiary&&await window.viewBeneficiary(e,x.currentPage),M("success","Successfully Added",1500);else{const G=Z.error||"Failed to add log.";H.fire("Error",G,"error")}}catch(C){H.fire("Error",C.message||"Failed to add log.","error")}},j=v.querySelector("#add-dtr-log-btn");j&&j.addEventListener("click",()=>fe("dtr",K()));const ye=v.querySelector("#add-ar-log-btn");ye&&ye.addEventListener("click",()=>fe("ar",ee()));const ve=v.querySelector("#export-log-btn");ve&&ve.addEventListener("click",async()=>{const w="flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ",B=await H.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',html:`
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
                    `,showCancelButton:!0,confirmButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',cancelButtonText:'<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900",confirmButton:"bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer",cancelButton:"bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1,preConfirm:()=>{const C=document.querySelector('input[name="swal-export-type"]:checked');return C?C.value:null}});if(B.isConfirmed&&B.value){const C=B.value,Y=new Date().getFullYear();await $t([e],C,Y)}});const Le=w=>{if(!w||w.querySelector(".inline-log-editor"))return;const B=w.dataset.type,C=w.dataset.id,Y=w.dataset.val||"",Z=w.dataset.status||"PENDING";let G=Z==="VERIFIED"||Z==="COMPLETED"?"VERIFIED":"PENDING";const le=Y.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/),Q=le?le[3]+"-"+String(_.indexOf(le[1])+1).padStart(2,"0")+"-"+String(le[2]).padStart(2,"0"):new Date().toISOString().split("T")[0],V=document.createElement("div");V.className="inline-log-editor absolute inset-0 z-10 flex items-center gap-1 rounded-xl bg-white px-2 shadow-lg dark:bg-slate-900",V.innerHTML='<input type="text" class="inline-log-date w-[38%] min-w-0 shrink-0 rounded-lg border border-brand/40 bg-transparent px-2 py-1.5 text-xs font-black uppercase text-heading outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" value="'+Q+'" aria-label="Select log date"><div class="ml-auto flex shrink-0 items-center gap-1"><button type="button" data-status="VERIFIED" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set submitted status">SUBMITTED</button><button type="button" data-status="PENDING" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set pending status">PENDING</button></div>',w.appendChild(V);const J=V.querySelector(".inline-log-date");J.title=w.querySelector("[title]")?.getAttribute("title")||"Select the submitted date";const ae=window.Datepicker;ae&&J&&(J._datepicker=new ae(J,{format:"yyyy-mm-dd",autohide:!0,orientation:"bottom right"}));const ce=()=>{V.querySelectorAll(".inline-log-status").forEach(m=>{const n=m.dataset.status===G,l=m.dataset.status==="PENDING";m.className=n?"inline-log-status cursor-pointer rounded-md "+(l?"bg-orange-600 hover:bg-orange-700":"bg-emerald-600 hover:bg-emerald-700")+" px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider text-white shadow-sm transition-colors":"inline-log-status cursor-pointer rounded-md border "+(l?"border-orange-400 text-orange-700 hover:border-orange-600 hover:bg-orange-50":"border-emerald-400 text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50")+" bg-transparent px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors dark:border-slate-600 dark:text-slate-300"})};ce(),V.querySelectorAll(".inline-log-status").forEach(m=>m.addEventListener("click",async n=>{n.stopPropagation(),G=m.dataset.status,ce();const l=J?.value||Q,g=ne(new Date(l+"T00:00:00"));V.querySelectorAll(".inline-log-status").forEach(b=>{b.disabled=!0}),m.textContent="SAVING";try{const b={type:B,id:C,status:G};B==="dtr"?(b.record_date=l,b.weekday=g):b.period=g;const k=await Ot("api/logs.php",b),S=k.success?k.data:{success:!1,error:k.error};if(!S.success)throw new Error(S.error||"Failed to update log.");M("success","Log submitted!",1500),window.viewBeneficiary&&window.viewBeneficiary(e,x.currentPage)}catch(b){V.querySelectorAll(".inline-log-status").forEach(k=>{k.disabled=!1}),m.textContent=G==="VERIFIED"?"SUBMITTED":"PENDING",M("error",b.message)}}));const he=m=>{V.contains(m.target)||(J?._datepicker?.hide(),V.remove(),document.removeEventListener("click",he,!0))};setTimeout(()=>document.addEventListener("click",he,!0),0)};v.querySelectorAll(".edit-log-btn").forEach(w=>{w.addEventListener("click",B=>{B.target.closest(".delete-log-control")||(w.dataset.type,w.dataset.id,w.dataset.val,w.dataset.status,Le(w))})}),v.querySelectorAll(".delete-log-control").forEach(w=>{const B=w.querySelector(".delete-log-trigger"),C=w.querySelector(".delete-log-confirm"),Y=w.querySelector(".delete-log-cancel");B?.addEventListener("click",Z=>{Z.stopPropagation(),$(w),w.dataset.confirming="true",w.classList.remove("w-11","opacity-0","pointer-events-none"),w.classList.add("w-22","opacity-100","pointer-events-auto"),w.closest(".edit-log-btn")?.querySelector(".log-status-label")?.classList.add("!pr-24"),B.classList.replace("flex","hidden"),w.querySelector(".delete-confirm-actions")?.classList.replace("hidden","flex")}),Y?.addEventListener("click",Z=>{Z.stopPropagation(),F(w)}),C?.addEventListener("click",async Z=>{if(Z.stopPropagation(),w.dataset.loading==="true")return;const G=w.dataset.id,le=w.dataset.type;w.dataset.loading="true",C.disabled=!0,Y.disabled=!0,C.querySelector(".delete-confirm-icon")?.classList.add("hidden"),C.querySelector(".delete-loading-icon")?.classList.replace("hidden","block");try{const Q=await yt(`api/logs.php?type=${le}`,{log_id:G,action:"delete"}),V=Q.success?Q.data:{success:!1,error:Q.error};if(!V.success)throw new Error(V.error||"Failed to delete data.");M("success","Deleted"),window.viewBeneficiary&&window.viewBeneficiary(e,x.currentPage)}catch(Q){w.dataset.loading="false",C.disabled=!1,Y.disabled=!1,C.querySelector(".delete-loading-icon")?.classList.replace("block","hidden"),C.querySelector(".delete-confirm-icon")?.classList.remove("hidden"),F(w),M("error",Q.message)}})})}).catch(c=>{})}function hr(e){const t=Ee(),a="w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600",s="w-full resize-none overflow-hidden rounded-none border-0 border-b-2 border-blue-200 bg-transparent px-0 py-2 text-xl font-black leading-tight tracking-tight text-royal-blue placeholder-gray-300 outline-none focus:border-brand focus:ring-0 sm:text-2xl dark:border-slate-700 dark:text-white",o="mb-1.5 block text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";function r(x){const h=String(x||"").trim();if(!h)return{month:"",day:"",year:"",iso:""};let L=h.match(/^(\d{4})-(\d{2})-(\d{2})/);if(L)return{year:L[1],month:L[2],day:L[3],iso:`${L[1]}-${L[2]}-${L[3]}`};if(L=h.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/),L){const M=L[1].padStart(2,"0"),F=L[2].padStart(2,"0");return{year:L[3],month:M,day:F,iso:`${L[3]}-${M}-${F}`}}return{month:"",day:"",year:"",iso:""}}function d(x,h,L){const M=Number.parseInt(x,10),F=Number.parseInt(h,10),$=Number.parseInt(L,10);if(!Number.isInteger(M)||!Number.isInteger(F)||!Number.isInteger($)||$<1900||$>new Date().getFullYear())return"";const D=new Date($,M,0).getDate();return M<1||M>12||F<1||F>D?"":`${String($).padStart(4,"0")}-${String(M).padStart(2,"0")}-${String(F).padStart(2,"0")}`}function i(x){const h=r(x);if(!h.iso)return"";const L=Number.parseInt(h.year,10),M=Number.parseInt(h.month,10),F=Number.parseInt(h.day,10),$=new Date;let D=$.getFullYear()-L;return($.getMonth()+1<M||$.getMonth()+1===M&&$.getDate()<F)&&D--,D>=0?D:""}const u=r(e.birthday),p=Array.from({length:12},(x,h)=>{const L=String(h+1).padStart(2,"0");return`<option value="${L}" ${u.month===L?"selected":""}>${L}</option>`}).join(""),f=Array.from({length:31},(x,h)=>{const L=String(h+1).padStart(2,"0");return`<option value="${L}" ${u.day===L?"selected":""}>${L}</option>`}).join("");function v(x){if(!x)return"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700";const h=String(x).toUpperCase();return h==="ONGOING"?"bg-green-100 text-green-700 border-green-200":h==="EXPIRED"?"bg-red-400 text-white border-red-400":h==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":h==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700"}const A=`
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
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${v(e.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
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
                <input type="hidden" name="birthday" id="edit-bday-input" value="${u.iso}">
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-[0.8fr_0.8fr_1.2fr_1.4fr]">
                    <label class="block">
                        <span class="${o}">Month (MM)</span>
                        <select id="edit-birth-month" class="${a} cursor-pointer appearance-none font-mono" aria-label="Birth month">
                            <option value="">MM</option>
                            ${p}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${o}">Day (DD)</span>
                        <select id="edit-birth-day" class="${a} cursor-pointer appearance-none font-mono" aria-label="Birth day">
                            <option value="">DD</option>
                            ${f}
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
                    ${st.map(x=>`<button type="button" class="edit-education-option w-full border-b border-slate-100 px-3 py-2 text-left text-[0.6875rem] font-bold text-slate-700 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"><span class="option-text">${x.name}</span></button>`).join("")}
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
                    ${Ct.map(x=>`<option value="${x}" ${String(e.relationshipToAssured||"").toUpperCase()===x.toUpperCase()?"selected":""}>${x}</option>`).join("")}
                </select>
            </label>
        </div>
    </section>

    <!-- Contract & Work Info Tab -->
    <div class="flex items-center justify-between border-b border-default pb-2 mt-8">
        <h4 class="text-sm font-bold text-heading whitespace-nowrap">Contract & Work Details</h4>
        <span id="edit-contract-duration-badge" class="text-[0.5625rem] font-bold text-royal-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 transition-all hidden"></span>
    </div>
    
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
    `;let c=document.getElementById("edit-drawer-container");c&&(c.remove(),document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")),c=document.createElement("div"),c.id="edit-drawer-container",c.className="fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full border-l border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0",c.setAttribute("tabindex","-1"),c.innerHTML=A,document.body.appendChild(c),document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden"),setTimeout(()=>{const x=c.querySelector('textarea[name="name"]');x&&(x.style.height="auto",x.style.height=x.scrollHeight+"px")},10);const y=c.querySelector("#edit-education-suggestions-box");y&&(y.innerHTML=st.map(x=>`
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${x.name}</span>
            </button>
        `).join(""));const E=c.querySelector("#edit-designation-suggestions-box");E&&(E.innerHTML=Ie.map(x=>`
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${x}</span>
            </button>
        `).join("")),Dt(async()=>{const{Drawer:x}=await import("./vendor-flowbite-BS-fTmyB.js").then(h=>h.b);return{Drawer:x}},__vite__mapDeps([0,1]),import.meta.url).then(({Drawer:x})=>{const h=new x(c,{placement:"right",backdrop:!0,bodyScrolling:!1,edge:!1,edgeOffset:"",backdropClasses:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50",onHide:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{c&&c.parentNode&&c.remove()},400)}});h.show(),window.initFlowbite&&window.initFlowbite();const L=()=>{document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),h.hide()};c.querySelector("#close-edit-drawer-btn").addEventListener("click",L),c.querySelector("#edit-drawer-cancel-btn").addEventListener("click",L);const M=c.querySelector("#edit-beneficiary-drawer-form"),F=c.querySelector("#edit-bday-input"),$=c.querySelector("#edit-birth-month"),D=c.querySelector("#edit-birth-day"),W=c.querySelector("#edit-birth-year"),_=c.querySelector("#edit-birthday-calendar"),xe=c.querySelector("#edit-birthday-error"),ne=c.querySelector("#edit-age-display"),K=c.querySelector("#edit-startDate-input"),ee=c.querySelector("#edit-endDate-input"),fe=c.querySelector('input[name="seriesNo"]'),j=c.querySelector('input[name="gip_id"]'),ye=(n=D?.value||"")=>{if(!D)return;const l=Number.parseInt($?.value||"",10),g=Number.parseInt(W?.value||"",10),b=Number.isInteger(l)&&l>=1&&l<=12?new Date(Number.isInteger(g)&&g>=1900?g:2e3,l,0).getDate():31,k=document.createDocumentFragment(),S=document.createElement("option");S.value="",S.textContent="DD",k.append(S);for(let q=1;q<=b;q++){const I=document.createElement("option");I.value=String(q).padStart(2,"0"),I.textContent=I.value,I.selected=I.value===String(n).padStart(2,"0"),k.append(I)}D.replaceChildren(k)},ve=(n=!1)=>{const l=!!($?.value||D?.value||W?.value),g=l?d($?.value,D?.value,W?.value):"";return F&&(F.value=g),_&&_.value!==g&&(_.value=g),ne&&(ne.value=g?i(g):""),xe&&xe.classList.toggle("hidden",!!g||!l||!n),{isoBirthday:g,hasBirthdayInput:l}},Le=n=>{const l=r(n);return l.iso?($&&($.value=l.month),W&&(W.value=l.year),ye(l.day),D&&(D.value=l.day),ve(!1),!0):!1};$&&$.addEventListener("change",()=>{ye(),ve(!1)}),D&&D.addEventListener("change",()=>ve(!1)),W&&W.addEventListener("input",()=>{W.value=W.value.replace(/\D/g,"").slice(0,4),ye(),ve(!1)}),_&&_.addEventListener("change",()=>{_.value&&Le(_.value)}),ye(u.day),ve(!1);const w=c.querySelector("#edit-drawer-remarks"),B=c.querySelector("#edit-extension-log-container"),C=()=>{if(!B)return;const n=w.value,l=Ee();if(n==="ABSORBED"){const g=e.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,b=g.getTimezoneOffset()*6e4,k=new Date(g.getTime()-b).toISOString().slice(0,16);B.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${l?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${l?"text-green-500":"text-[#2e7d32]"} border-b ${l?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${l?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${k}" class="w-full ${l?"bg-slate-800 text-white border-slate-700":"bg-green-50 text-slate-900 border-green-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${l?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${e.absorb_where||""}" class="w-full ${l?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${l?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${e.absorb_position||""}" class="w-full ${l?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${l?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${e.absorb_agency||""}" class="w-full ${l?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `}else if(n==="RESIGNED"){const g=e.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,b=g.getTimezoneOffset()*6e4,k=new Date(g.getTime()-b).toISOString().slice(0,16);B.innerHTML=`
                    <div class="mt-4 pt-4 border-t ${l?"border-slate-800":"border-gray-100"}">
                        <p class="text-[0.5625rem] uppercase font-black ${l?"text-red-500":"text-[#ce1126]"} border-b ${l?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${l?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${k}" class="w-full ${l?"bg-slate-800 text-white border-slate-700":"bg-red-50 text-slate-900 border-red-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${l?"text-slate-500":"text-gray-400"} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${e.resigned_reason||""}" class="w-full ${l?"bg-slate-800 text-white border-slate-700":"bg-gray-50 text-slate-900 border-gray-200"} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `}};w&&w.addEventListener("change",n=>{const l="text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";w.className=`${v(n.target.value)} ${l} editable-indicator`,C(),(w.value==="ABSORBED"||w.value==="RESIGNED")&&setTimeout(()=>{B.scrollIntoView({behavior:"smooth",block:"center"}),B.classList.add("pulse-highlight"),setTimeout(()=>B.classList.remove("pulse-highlight"),1500)},50)}),C();let Y=!1;const Z=(n,l)=>{n.addEventListener("paste",g=>{g.preventDefault();let b=(g.clipboardData||window.clipboardData).getData("text");if(b){b=b.replace(/[-.\s]/g,"/");const k=b.split("/");if(k.length===3){const S=k[0].padStart(2,"0"),q=k[1].padStart(2,"0");let I=k[2];if(I.length===2){const P=new Date().getFullYear(),X=Math.floor(P/100)*100;I=String(X+parseInt(I))}else I=I.padStart(4,"0");const U=`${S}/${q}/${I}`;n.value=U;const N=new Event("input",{bubbles:!0});n.dispatchEvent(N);const O=window.__parseFormattedDate(U);if(O&&l&&(Y||l(O),document.activeElement===n&&n.blur()),n._datepicker)n._datepicker.hide();else{const P=n.parentNode&&n.parentNode._datepicker;P&&typeof P.hide=="function"&&P.hide()}}}}),n.addEventListener("input",g=>{const b=g.target.value,k=window.__maskDate(b);if(b!==k&&(g.target.value=k),k.length===10){const S=window.__parseFormattedDate(k);if(S&&l)if(Y||l(S),document.activeElement===n&&n.blur(),n._datepicker)n._datepicker.hide();else{const q=n.parentNode&&n.parentNode._datepicker;q&&typeof q.hide=="function"&&q.hide()}}}),n.addEventListener("changeDate",g=>{g.detail&&g.detail.date&&l&&(Y||l(g.detail.date),n._datepicker&&n._datepicker.hide())})},G=()=>{const n=c.querySelector("#edit-contract-duration-badge");if(!n||!K||!ee)return;const l=K.value,g=ee.value,b=Xe(l,g);b.text?(n.textContent=b.text,n.classList.remove("hidden")):n.classList.add("hidden")};K&&Z(K,n=>{if(ee){const g=new Date(n);g.setMonth(g.getMonth()+6),g.setDate(g.getDate()-1);const b=String(g.getMonth()+1).padStart(2,"0"),k=String(g.getDate()).padStart(2,"0"),S=g.getFullYear();ee.value=`${b}/${k}/${S}`}G();const l=n.getFullYear();l>1900&&j&&fe&&Promise.all([be(`api/beneficiaries.php?next_id&year=${encodeURIComponent(l)}`),be(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(l)}`)]).then(([g,b])=>{const k=g.success&&g.data?.success?g.data.nextId:null,S=b.success&&b.data?.success?b.data.nextSeries:null,q=String(j.value||"").match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/),I=String(fe.value||"").match(/^(\d{4})-\d{2}-\d{3}$/),U=q?Number(q[1]):null,N=I?Number(I[1]):null;k&&(U===null||U!==l)&&(j.value=k),S&&(N===null||N!==l)&&(fe.value=S)}).catch(g=>{})}),ee&&Z(ee,()=>G()),window.Datepicker||typeof Datepicker<"u"&&Datepicker;const le=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),Q=c.querySelector("#edit-date-range-picker");if(le&&Q){const n=new le(Q,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});K&&(K._datepicker=n.datepickers[0]),ee&&(ee._datepicker=n.datepickers[1])}e.id&&(Y=!0,be(`api/beneficiaries.php?id=${encodeURIComponent(e.id)}`).then(n=>{if(n.success&&n.data&&n.data.beneficiary){const l=n.data.beneficiary;if(l.birthday&&Le(l.birthday),K&&l.startDate){const g=new Date(l.startDate);isNaN(g)||(K.value=l.startDateFormatted||"",K._datepicker&&K._datepicker.setDate(g))}if(ee&&l.endDate){const g=new Date(l.endDate);isNaN(g)||(ee.value=l.endDateFormatted||"",ee._datepicker&&ee._datepicker.setDate(g))}G()}setTimeout(()=>{Y=!1},100)}).catch(n=>{Y=!1}));const V=(n,l,g)=>{const b=c.querySelector(n),k=c.querySelector(l);if(!b||!k)return;const S=()=>k.classList.add("hidden"),q=()=>k.classList.remove("hidden");b.addEventListener("focus",q),b.addEventListener("input",()=>{const I=b.value.toLowerCase().trim();let U=0;k.querySelectorAll(g).forEach(N=>{const P=(N.querySelector(".option-text")?.textContent||N.textContent||"").toLowerCase().includes(I);N.style.display=P?"block":"none",P&&U++}),U>0?q():S()}),k.addEventListener("click",I=>{const U=I.target.closest(g);U&&(b.value=(U.querySelector(".option-text")?.textContent||U.textContent||"").trim(),S(),b.dispatchEvent(new Event("change")))}),document.addEventListener("click",I=>{!b.contains(I.target)&&!k.contains(I.target)&&S()})};V("#edit-education-input","#edit-education-suggestions-box",".edit-education-option"),V("#edit-designation-input","#edit-designation-suggestions-box",".edit-designation-option"),(()=>{const n=c.querySelector("#edit-office-input"),l=c.querySelector("#edit-office-suggestions-box");if(!n||!l)return;l.classList.add("mt-[52px]");let g="OFFICES",b=null,k=[];const S={textLabel:t?"text-slate-400":"text-slate-500",borderDivide:t?"border-slate-800":"border-slate-100",courseHover:t?"hover:bg-slate-800/80":"hover:bg-blue-50",textCourseOpt:t?"text-slate-300":"text-slate-700"},q=async()=>{const U="dole_offices_cache",N=async()=>{let P=[];try{const X=await be("api/beneficiaries.php?get_offices_advanced=1");X.success&&X.data?.success&&Array.isArray(X.data.offices)&&(P=X.data.offices)}catch{}return P.length>0&&(k=P,localStorage.setItem(U,JSON.stringify({data:P,timestamp:Date.now()}))),P},O=localStorage.getItem(U);if(O)try{const{data:P,timestamp:X}=JSON.parse(O);return k=P,Date.now()-X>1800*1e3&&N().then(()=>{g==="OFFICES"&&I("OFFICES",b,n.value)}),P}catch{localStorage.removeItem(U)}return k.length===0?await N():k},I=async(U="OFFICES",N=null,O="")=>{if(g=U,b=N,U==="OFFICES"){const X=(await q()).filter(R=>R.office.toLowerCase().includes(O.toLowerCase()));l.innerHTML=`
                        <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${S.textLabel} opacity-70 border-b ${S.borderDivide} mb-1">OFFICE CODE</div>
                        <div class="max-h-64 overflow-y-auto scrollbar-hide">
                            ${X.length>0?X.map(R=>{const se=parseInt(R.location_count||0)>0;return`
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${S.textCourseOpt} ${S.courseHover} rounded-none cursor-pointer transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${R.id}" data-name="${R.office}" data-has-locations="${se}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-none bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-none bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                            </div>
                                            <span class="option-text">${R.office}</span>
                                        </div>
                                        ${se?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                    </div>
                                `}).join(""):`
                                <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${S.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                ${O.trim()?`
                                <div class="px-2 pb-2 flex flex-col gap-1.5">
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${S.textLabel} opacity-50 px-1">New office: "${O.trim()}"</div>
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
                    `;const oe=O.trim(),te=l.querySelector("#add-office-location-row-edit"),pe=l.querySelector("#new-office-loc-input-edit"),re=l.querySelector("#confirm-office-with-loc-edit"),T=l.querySelector("#add-office-with-loc-btn-edit"),z=l.querySelector("#skip-office-loc-btn-edit");if(T&&te&&T.addEventListener("click",R=>{R.stopPropagation(),te.classList.remove("hidden"),te.classList.add("flex"),setTimeout(()=>pe?.focus(),50)}),re&&pe){const R=se=>{se.stopPropagation();const de=pe.value.trim();n.value=de?`${oe} - ${de}`:oe,l.classList.add("hidden"),n.dispatchEvent(new Event("change"))};re.addEventListener("click",R),pe.addEventListener("keydown",se=>{se.key==="Enter"&&R(se)}),pe.addEventListener("click",se=>se.stopPropagation())}z&&z.addEventListener("click",R=>{R.stopPropagation(),n.value=oe,l.classList.add("hidden"),n.dispatchEvent(new Event("change"))}),l.querySelectorAll(".office-code-option").forEach(R=>{R.addEventListener("click",se=>{se.stopPropagation(),R.dataset.hasLocations==="true"?I("LOCATIONS",{id:R.dataset.id,name:R.dataset.name}):(n.value=R.dataset.name,l.classList.add("hidden"),n.dispatchEvent(new Event("change")))})})}else{l.innerHTML=`
                        <div class="flex items-center justify-between px-3 py-2 border-b ${S.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-none">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-none bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${S.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-none bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${S.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${N.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-none transition-all"
                                    value="${O.includes(" - ")?O.split(" - ")[1]:""}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${S.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;const P=l.querySelector("#loc-list-edit"),X=l.querySelector("#location-search-edit"),oe=`dole_locs_cache_${N.id}`;let te=[];const pe=localStorage.getItem(oe);if(pe)try{const{data:z,timestamp:R}=JSON.parse(pe);te=z,Date.now()-R<3600*1e3}catch{localStorage.removeItem(oe)}const re=async()=>{let z=[];if(me&&Ce()){const{data:R,error:se}=await me.from("office_locations").select("location").eq("office_id",N.id).order("location");!se&&R&&(z=R)}if(z.length===0)try{const R=await be(`api/beneficiaries.php?get_office_locations=1&office_id=${N.id}`);R.success&&R.data?.success&&Array.isArray(R.data.locations)&&(z=R.data.locations)}catch{}z.length>0&&(te=z,localStorage.setItem(oe,JSON.stringify({data:z,timestamp:Date.now()})),T(X.value))},T=(z="")=>{const R=te.filter(de=>de.location.toLowerCase().includes(z.toLowerCase())),se=z.trim();R.length>0?P.innerHTML=R.map(de=>`
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${S.textCourseOpt} ${S.courseHover} rounded-none cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${de.location}">
                                    <div class="w-1 h-1 rounded-none bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${de.location}</span>
                                </div>
                            `).join(""):te.length===0?P.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${S.textLabel} animate-pulse">Fetching...</div>`:(P.innerHTML=`
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${S.textLabel} opacity-60">No matching locations.</div>
                                ${se?`
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${se}" as location
                                    </button>
                                </div>`:""}
                            `,se&&P.querySelector("#add-new-location-edit")?.addEventListener("click",()=>{n.value=`${N.name} - ${se}`,l.classList.add("hidden"),n.dispatchEvent(new Event("change"))})),P.querySelectorAll(".location-option-edit").forEach(de=>{de.addEventListener("click",()=>{n.value=`${N.name} - ${de.dataset.location}`,l.classList.add("hidden"),n.dispatchEvent(new Event("change"))})})};T(X.value),re(),setTimeout(()=>X.focus(),50),X.addEventListener("input",()=>T(X.value)),X.addEventListener("click",z=>z.stopPropagation()),l.querySelector("#back-to-offices-edit").addEventListener("click",z=>{z.stopPropagation(),I("OFFICES")})}};n.addEventListener("focus",()=>{l.classList.remove("hidden"),I(g,b,n.value)}),n.addEventListener("input",()=>{g==="OFFICES"&&I("OFFICES",null,n.value)}),document.addEventListener("click",U=>{!n.contains(U.target)&&!l.contains(U.target)&&l.classList.add("hidden")})})();const ae=c.querySelector("#edit-replacement-input"),ce=c.querySelector("#edit-replacement-suggestions-box"),he=c.querySelector("#edit-replacement-loading");let m=null;ae&&ce&&(ae.addEventListener("input",n=>{const l=n.target.value.trim();clearTimeout(m),ce.classList.add("hidden"),!(l.length<2)&&(he&&he.classList.remove("hidden"),m=setTimeout(async()=>{try{const g=await je(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(l)}&limit=10`);g.success&&g.data&&g.data.candidates&&g.data.candidates.length>0?(ce.innerHTML=g.data.candidates.map(b=>`
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${b.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${b.name}</span>
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${b.id}</span>
                                </button>
                            `).join(""),ce.classList.remove("hidden")):(ce.innerHTML='<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>',ce.classList.remove("hidden"))}catch{}finally{he&&he.classList.add("hidden")}},400))}),ce.addEventListener("click",n=>{const l=n.target.closest("button");l&&(ae.value=l.dataset.name,ce.classList.add("hidden"))}),document.addEventListener("click",n=>{!ae.contains(n.target)&&!ce.contains(n.target)&&ce.classList.add("hidden")})),M.querySelectorAll("input, select, textarea").forEach(n=>{const l=(n.getAttribute("type")||"").toLowerCase(),g=!n.disabled&&!n.readOnly&&l!=="hidden";n.classList.remove("editable-indicator"),g&&n.classList.add("editable-indicator")}),M.addEventListener("submit",n=>{n.preventDefault();const l=c.querySelector("#edit-drawer-submit-btn");c.querySelector("#edit-drawer-submit-icon");const g=c.querySelector("#edit-drawer-submit-text"),b=()=>{l&&(l.disabled=!1,l.classList.remove("opacity-75","cursor-not-allowed"));const O=c.querySelector("#edit-drawer-submit-icon");O&&(O.outerHTML='<svg id="edit-drawer-submit-icon" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>'),g&&(g.textContent="Save Changes")},k=()=>{l&&(l.disabled=!0,l.classList.add("opacity-75","cursor-not-allowed"));const O=c.querySelector("#edit-drawer-submit-icon");O&&(O.outerHTML='<svg id="edit-drawer-submit-icon" class="animate-spin w-4 h-4 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>'),g&&(g.textContent="Saving Changes...")},{isoBirthday:S,hasBirthdayInput:q}=ve(!0);if(q&&!S){$?.focus(),H.fire({toast:!0,position:"top-end",icon:"error",title:"Enter a valid birthday",text:"Complete the MM, DD, and YYYY fields.",showConfirmButton:!1,timer:3500});return}k();const I=O=>{const P=String(O||"").trim();if(!P)return"";const X=P.match(/^(\d{4})-(\d{2})-(\d{2})/);if(X)return`${X[1]}-${X[2]}-${X[3]}`;const oe=window.__parseFormattedDate?.(P);if(!oe)return P;const te=oe.getFullYear(),pe=String(oe.getMonth()+1).padStart(2,"0"),re=String(oe.getDate()).padStart(2,"0");return`${te}-${pe}-${re}`},U=new FormData(M),N={};U.forEach((O,P)=>{N[P]=["birthday","startDate","endDate"].includes(P)?I(O):O}),N.birthday=S,N.id=e.id,N.gip_id=N.gip_id||e.id,window.addBeneficiaryData?(async()=>{try{await window.addBeneficiaryData(N,!0,!1)?(L(),await new Promise(P=>setTimeout(P,450)),await H.fire({toast:!0,position:"bottom-end",icon:"success",title:"RECORD UPDATED",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),window.viewBeneficiary&&await window.viewBeneficiary({...N,id:e.id,gip_id:e.id},0)):b()}catch{b()}})():b()})})}let He=null,ht=null,xt=null;function xr(e,t,a,s){if(!Ce()||!me||!t)return;const o=String(t);if(ht===o)return;He&&(me.removeChannel(He),He=null),ht=o;const r=()=>{clearTimeout(xt),xt=setTimeout(()=>{document.getElementById("beneficiary-drawer-container")?.dataset.beneficiaryId===String(e)&&window.viewBeneficiary&&window.viewBeneficiary({...a,id:e},s)},100)},d=`beneficiary_id=eq.${t}`;He=me.channel(`gip-drawer-logs-${o}`).on("postgres_changes",{event:"*",schema:"public",table:"daily_time_records",filter:d},r).on("postgres_changes",{event:"*",schema:"public",table:"accomplishment_reports",filter:d},r).on("postgres_changes",{event:"*",schema:"public",table:"beneficiary_documents",filter:d},r).on("postgres_changes",{event:"*",schema:"public",table:"absorption_logs",filter:d},r).subscribe(i=>{})}function _r(){window.showAddDataModal=Ve,window.__maskDate=function(e){let t=e.replace(/\D/g,"").slice(0,8);return t.length>2&&t.length<=4?t=t.slice(0,2)+"/"+t.slice(2):t.length>4&&(t=t.slice(0,2)+"/"+t.slice(2,4)+"/"+t.slice(4)),t},window.__parseFormattedDate=function(e){if(!e)return null;const t=e.split("/");if(t.length===3){const a=parseInt(t[0])-1,s=parseInt(t[1]),o=parseInt(t[2]);if(o>1e3&&a>=0&&a<12&&s>0&&s<=31)return new Date(o,a,s)}return null},window.calculateAge=function(e){if(!e)return"";const t=e instanceof Date?e:new Date(e),a=new Date;let s=a.getFullYear()-t.getFullYear();const o=a.getMonth()-t.getMonth();return(o<0||o===0&&a.getDate()<t.getDate())&&s--,s>=0?s:0},window.calculateContractDuration=Xe,window.viewBeneficiary=async function(e,t=0){const a=e?.id||e?.gip_id||null;if(!a)return;const s=!!(e?.name&&e?.office&&e?.remarks),o=!s;let r={...e,id:a};if(o&&Ue({id:a,_isLoadingProfile:!0,_isLoadingLogs:!0},t),!s){const u=await be(`api/beneficiaries.php?id=${encodeURIComponent(a)}`);u.success&&u.data?.success&&u.data?.beneficiary&&(r={...u.data.beneficiary,...r,id:a})}const d=null,i=!1;r.arLogs=[],r.dtrLogs=[],r.docs=[],r._isLoadingProfile=!1,r._isLoadingLogs=!i,r._noAnimation=o,Ue(r,t);try{const u={success:!1,error:"Supabase browser read unavailable",data:{success:!1,logs:[]}},p=async()=>{const{data:D,error:W}=await me.from("beneficiaries").select("beneficiary_id").eq("gip_id",a).maybeSingle();if(W||!D?.beneficiary_id)return[u,u,u,u];const _=D.beneficiary_id;xr(a,_,r,t);const[xe,ne,K,ee]=await Promise.all([me.from("accomplishment_reports").select("ar_id, period, date_submitted, status, created_at, updated_at").eq("beneficiary_id",_).order("date_submitted",{ascending:!1}),me.from("daily_time_records").select("dtr_id, record_date, weekday, status, created_at, updated_at").eq("beneficiary_id",_).order("record_date",{ascending:!1}),me.from("beneficiary_documents").select("doc_id, document_name, status, updated_at").eq("beneficiary_id",_).order("document_name"),me.from("absorption_logs").select("log_id, absorption_datetime, where, position, agency").eq("beneficiary_id",_).order("absorption_datetime",{ascending:!1})]),fe=(j,ye)=>({success:!j.error,data:{success:!j.error,logs:(j.data||[]).map(ye)}});return[fe(xe,j=>({id:j.ar_id,period:j.period,date:j.date_submitted,status:j.status,created_at:j.created_at,updated_at:j.updated_at})),fe(ne,j=>({id:j.dtr_id,date:j.record_date,day:j.weekday,period:j.record_date,status:j.status,created_at:j.created_at,updated_at:j.updated_at})),fe(K,j=>({id:j.doc_id,name:j.document_name,status:j.status,updated_at:j.updated_at})),fe(ee,j=>({id:j.log_id,absorption_datetime:j.absorption_datetime,where:j.where,position:j.position,agency:j.agency}))]},f=()=>Promise.all([be(`api/logs.php?type=ar&gip_id=${encodeURIComponent(a)}`),be(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(a)}`),be(`api/logs.php?type=docs&gip_id=${encodeURIComponent(a)}`),be(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(a)}`)]);let v=Ce()&&me?await p():await f();v.every(D=>D.success&&D.data?.success)||(v=await f());const[A,c,y,E]=v,x=A.success&&A.data?.success?A.data.logs:[],h=c.success&&c.data?.success?c.data.logs:[],L=y.success&&y.data?.success?y.data.logs:[],M=E.success&&E.data?.success?E.data.logs:[];if(M.length>0){const D=M[0];r.absorbDate=D.absorption_datetime,r.absorb_where=D.where||D.absorb_where,r.absorb_position=D.position||D.absorb_position,r.absorb_agency=D.agency||D.absorb_agency}const F=JSON.stringify({ar:d?.arLogs||[],dtr:d?.dtrLogs||[],docs:d?.docs||[],absorption:[]}),$=JSON.stringify({ar:x,dtr:h,docs:L,absorption:M});if(!i||F!==$){const D=document.getElementById("beneficiary-drawer-container");D&&D.dataset.beneficiaryId===String(a)&&(r.arLogs=x,r.dtrLogs=h,r.docs=L,r._isLoadingProfile=!1,r._isLoadingLogs=!1,Ue({...r,_noAnimation:!0},t))}}catch{{const p=document.getElementById("beneficiary-drawer-container");p&&p.dataset.beneficiaryId===String(a)&&(r._isLoadingProfile=!1,r._isLoadingLogs=!1,Ue({...r,_noAnimation:!0},t))}}},window.showAddDataModal=function(e){Ve(e)},window.editBeneficiary=function(e){hr(e)},window.showExportConfigModal=function(e){wr(e)},window.showProfileModal=function(){vr()},window.showSearchExtraStatsModal=function(){kr()}}async function vr(){try{if(Ce()&&me){let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=s.id)}catch{}if(!e)throw new Error("User not logged in");const{data:t,error:a}=await me.from("users").select("*").eq("user_id",e).single();if(a)throw a;vt(t)}else{let e="";try{const s=JSON.parse(localStorage.getItem("user"));s&&s.id&&(e=`?user_id=${s.id}`)}catch{}const a=await(await fetch(`${ke()}api/profile.php${e}`)).json();if(a.success){const s=a.profile;vt(s)}else H.fire({icon:"error",title:"Error",text:a.error||"Failed to load profile"})}}catch{}}function vt(e){const t=e.profile_picture_path?`${ke()}${e.profile_picture_path}`:null,a=e.full_name?e.full_name.split(" ").map(o=>o[0]).join("").substring(0,2).toUpperCase():"US",s=`
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
    `;H.fire({html:s,width:"450px",showConfirmButton:!1,showCloseButton:!0,padding:"1.5rem",customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:o=>{const r=o.querySelector("#profile-edit-form"),d=o.querySelector("#profile-pic-input"),i=o.querySelector("#profile-avatar-preview");d.addEventListener("change",u=>{const p=u.target.files[0];if(p){const f=new FileReader;f.onload=v=>{i.innerHTML=`<img src="${v.target.result}" class="w-full h-full object-cover" />`},f.readAsDataURL(p)}}),r.addEventListener("submit",async u=>{u.preventDefault();const p=new FormData(r);try{const f=JSON.parse(localStorage.getItem("user"));f&&f.id&&p.append("user_id",f.id)}catch{}try{const v=await(await fetch(`${ke()}api/profile.php`,{method:"POST",body:p})).json();v.success?(v.profile&&(localStorage.setItem("user",JSON.stringify(v.profile)),yr(v.profile)),H.close(),H.fire({toast:!0,position:"top-end",icon:"success",title:"Profile Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})):H.fire({icon:"error",title:"Update Failed",text:v.error||"Something went wrong"})}catch{}})}})}function yr(e){if(!e)return;const t=e.full_name||e.name||e.username||"System User",a=e.email||(e.username?`${e.username}@dole.gov.ph`:"user@dole.gov.ph"),s=e.profile_picture_path?e.profile_picture_path.startsWith("http")?e.profile_picture_path:`${ke()}${e.profile_picture_path.replace(/^\//,"")}`:localStorage.getItem("user_avatar")||null,o=t.trim().split(" ").map(r=>r[0]).join("").substring(0,2).toUpperCase()||"US";document.querySelectorAll(".sidebar-user-name").forEach(r=>r.textContent=t),document.querySelectorAll(".sidebar-user-email").forEach(r=>r.textContent=a),document.querySelectorAll(".sidebar-user-avatar").forEach(r=>{const d=r.querySelector(".sidebar-avatar-initials"),i=r.querySelector(".sidebar-avatar-img");s?(i?(i.src=s,i.classList.remove("hidden")):r.innerHTML=`<img src="${s}" class="w-full h-full object-cover" />`,d&&d.classList.add("hidden")):d?(d.textContent=o,d.classList.remove("hidden"),i&&i.classList.add("hidden")):r.textContent=o}),localStorage.setItem("user_full_name",t),s&&localStorage.setItem("user_avatar",s)}function wr(e){const t=["id","name","age","address","gender","assignedunit","status"],a=window.getExportFilters?window.getExportFilters():{office:"ALL",remarks:"ALL",gender:"ALL",assignedUnit:"ALL",ageGroup:"ALL",dtrStatus:"ALL",arStatus:"ALL",documentStatus:"ALL",search:"",sort:"name",section:"ALL",columns:t,preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""},s=Array.isArray(a.columns)&&a.columns.length>0?a.columns:t,o=[{id:"id",label:"ID Number"},{id:"name",label:"Full Name"},{id:"age",label:"Age"},{id:"address",label:"Address"},{id:"gender",label:"Gender"},{id:"office",label:"Office"},{id:"assignedunit",label:"Assigned Unit"},{id:"startdate",label:"Start Date"},{id:"enddate",label:"End Date"},{id:"status",label:"Status"},{id:"dtrstatus",label:"DTR Status"},{id:"arstatus",label:"AR Status"},{id:"documentstatus",label:"Document Status"},{id:"education",label:"Educational Attainment"},{id:"contact",label:"Contact Number"},{id:"birthday",label:"Birthday"},{id:"designatedbeneficiary",label:"Designated Beneficiary"},{id:"relationship",label:"Relationship to Assured"}],r=`
        <div class="w-full text-left font-montserrat">
            <!-- Modal Header -->
            <div class="flex flex-col gap-4 border-l-4 border-royal-blue bg-gradient-to-r from-blue-50 to-white p-4 dark:from-blue-950/40 dark:to-slate-900 sm:flex-row sm:items-center sm:p-5 rounded-t-xl">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal-blue/10 sm:h-12 sm:w-12">
                    <svg class="h-6 w-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div class="min-w-0 flex-1">
                    <h2 class="text-lg font-black leading-tight text-heading sm:text-xl uppercase tracking-tight">Report &amp; Export Configurator</h2>
                    <p class="mt-1 text-[0.6875rem] font-medium leading-relaxed text-gray-500 dark:text-gray-300 sm:text-xs">Customize filters, sort ordering, and visible output columns for live preview, Excel export, and printouts.</p>
                </div>
            </div>

            <form id="export-config-form" class="mt-4 space-y-4">
                <!-- Apply Actions Top Bar -->
                <div class="rounded-xl border border-blue-100 bg-blue-50/80 p-3 dark:border-blue-900/60 dark:bg-blue-950/40 sm:p-4 shadow-xs">
                    <button type="submit" class="flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-royal-blue px-4 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md transition-all hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-[0.99] dark:focus:ring-blue-900">
                        <svg class="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                        Apply Configuration &amp; Update Preview
                    </button>
                </div>

                <!-- Section 1: Global Filters & Search -->
                <div class="rounded-xl border border-gray-200 bg-gray-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/50 space-y-4">
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-4 bg-royal-blue rounded-full"></span>
                        <label class="text-xs font-black text-gray-500 dark:text-white! uppercase tracking-widest leading-none">Global Filters &amp; Sorting</label>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Search Beneficiary</label>
                            <div class="relative group">
                                <input type="text" id="export-search" value="${a.search||""}" placeholder="Name or ID..." 
                                    class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-9 py-2.5 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Office Category</label>
                            <div class="relative group">
                                <select id="export-office" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-3 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${a.office==="ALL"?"selected":""}>ALL OFFICES</option>
                                    <!-- Options populated dynamically -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Sort Data By</label>
                            <div class="relative group">
                                <select id="export-sort" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-3 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="name" ${a.sort==="name"?"selected":""}>NAME (A-Z)</option>
                                    <option value="name_desc" ${a.sort==="name_desc"?"selected":""}>NAME (Z-A)</option>
                                    <option value="id" ${a.sort==="id"?"selected":""}>ID NUMBER</option>
                                    <option value="address" ${a.sort==="address"?"selected":""}>ADDRESS (A-Z)</option>
                                    <option value="assignedunit" ${a.sort==="assignedunit"?"selected":""}>ASSIGNED UNIT</option>
                                    <option value="office" ${a.sort==="office"?"selected":""}>OFFICE NAME</option>
                                    <option value="startdate" ${a.sort==="startdate"?"selected":""}>START DATE (NEWEST FIRST)</option>
                                    <option value="startdate_asc" ${a.sort==="startdate_asc"?"selected":""}>START DATE (OLDEST FIRST)</option>
                                    <option value="age" ${a.sort==="age"?"selected":""}>AGE (YOUNGEST FIRST)</option>
                                    <option value="age_desc" ${a.sort==="age_desc"?"selected":""}>AGE (OLDEST FIRST)</option>
                                    <option value="status" ${a.sort==="status"?"selected":""}>STATUS / REMARKS</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <!-- Location, Assigned Unit, and Year row -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Office Location</label>
                            <div class="relative group">
                                <select id="export-location" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-3 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed" ${a.office==="ALL"?"disabled":""}>
                                    <option value="ALL">ALL LOCATIONS</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Assigned Unit</label>
                            <div class="relative group">
                                <select id="export-assigned-unit" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-3 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL">ALL ASSIGNED UNITS</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1 sm:col-span-2 lg:col-span-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Year (Start Date)</label>
                            <div class="relative group">
                                <select id="export-year" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-3 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${(a.year||"ALL")==="ALL"?"selected":""}>ALL YEARS</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 2: Submission Status Controls -->
                <div class="rounded-xl border border-gray-200 bg-gray-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/50 space-y-3">
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-4 bg-emerald-600 rounded-full"></span>
                        <label class="text-xs font-black text-gray-500 dark:text-white! uppercase tracking-widest leading-none">Submission Status Filter</label>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        ${[["dtr","DTR STATUS",a.dtrStatus||"ALL"],["ar","AR STATUS",a.arStatus||"ALL"],["document","REQUIRED DOCUMENTS",a.documentStatus||"ALL"]].map(([d,i,u])=>`
                            <div class="space-y-1 bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-gray-100 dark:border-slate-700/60">
                                <label class="text-[0.625rem] font-black uppercase tracking-wider text-gray-500 dark:text-gray-300 block">${i}</label>
                                <select id="export-${d}-status" class="w-full min-h-9 cursor-pointer rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-black uppercase text-heading dark:border-slate-600 dark:bg-slate-800">
                                    <option value="ALL" ${u==="ALL"?"selected":""}>ALL</option>
                                    <option value="SUBMITTED" ${u==="SUBMITTED"?"selected":""}>SUBMITTED</option>
                                    <option value="PENDING" ${u==="PENDING"?"selected":""}>PENDING</option>
                                    <option value="REJECTED" ${u==="REJECTED"?"selected":""}>REJECTED</option>
                                    <option value="NOT SUBMITTED" ${u==="NOT SUBMITTED"?"selected":""}>NOT SUBMITTED</option>
                                </select>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Section 3: Demographic & Status Category Badges -->
                <div class="rounded-xl border border-gray-200 bg-gray-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/50 space-y-4">
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-4 bg-indigo-600 rounded-full"></span>
                        <label class="text-xs font-black text-gray-500 dark:text-white! uppercase tracking-widest leading-none">Categorical Filters</label>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Gender Filter -->
                        <div class="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-gray-100 dark:border-slate-700/60 space-y-2">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter block">Gender Filter</label>
                            <div class="flex flex-wrap gap-2">
                                ${["ALL","FEMALE","MALE"].map(d=>{const i={ALL:"peer-checked:bg-emerald-600",FEMALE:"peer-checked:bg-pink-600",MALE:"peer-checked:bg-indigo-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-gender" value="${d}" ${a.gender===d?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 border border-gray-200 bg-white text-[0.625rem] sm:text-xs font-black text-gray-600 dark:text-white! uppercase tracking-wider ${i[d]} peer-checked:text-white peer-checked:border-transparent transition-all shadow-xs cursor-pointer hover:border-emerald-500/40">${d}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Report Volume Section -->
                        <div class="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-gray-100 dark:border-slate-700/60 space-y-2">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter block">Report Volume Section</label>
                            <div class="flex flex-wrap gap-2">
                                ${[{id:"ALL",label:"Overall (All)",color:"peer-checked:bg-emerald-600"},{id:"ACTIVE",label:"Active",color:"peer-checked:bg-green-500"},{id:"ARCHIVED",label:"Archived",color:"peer-checked:bg-red-600"}].map(d=>`
                                    <label class="cursor-pointer">
                                        <input type="radio" name="export-section" value="${d.id}" ${a.section===d.id?"checked":""} class="hidden peer">
                                        <div class="min-h-9 sm:min-h-10 px-3.5 py-2 bg-white border border-gray-200 rounded-lg flex items-center justify-center transition-all ${d.color} peer-checked:text-white peer-checked:border-transparent shadow-xs cursor-pointer hover:border-emerald-500/40">
                                            <span class="whitespace-nowrap text-[0.625rem] sm:text-xs font-black uppercase tracking-wider">${d.label}</span>
                                        </div>
                                    </label>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Remarks Filter -->
                        <div class="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-gray-100 dark:border-slate-700/60 space-y-2">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter block">Remarks Filter</label>
                            <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                ${["ALL","ONGOING","EXPIRED","RESIGNED","ABSORBED"].map(d=>{const i={ALL:"peer-checked:bg-emerald-600",ONGOING:"peer-checked:bg-green-600",EXPIRED:"peer-checked:bg-red-600",RESIGNED:"peer-checked:bg-slate-600",ABSORBED:"peer-checked:bg-teal-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-remarks" value="${d}" ${a.remarks===d?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 sm:px-3 py-2 border border-gray-200 bg-white text-[0.625rem] sm:text-xs font-black text-gray-600 dark:text-white! uppercase tracking-wider ${i[d]} peer-checked:text-white peer-checked:border-transparent transition-all shadow-xs cursor-pointer hover:border-emerald-500/40">${d}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>

                        <!-- Age Filter -->
                        <div class="bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-gray-100 dark:border-slate-700/60 space-y-2">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter block">Age Group Filter</label>
                            <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                ${["ALL","18-24","25-30","31-40","41+"].map(d=>{const i={ALL:"peer-checked:bg-emerald-600","18-24":"peer-checked:bg-teal-600","25-30":"peer-checked:bg-yellow-600","31-40":"peer-checked:bg-orange-600","41+":"peer-checked:bg-slate-600"};return`
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-age-group" value="${d}" ${a.ageGroup===d?"checked":""} class="hidden peer">
                                            <span class="flex min-h-9 sm:min-h-10 items-center justify-center whitespace-nowrap rounded-lg px-2.5 sm:px-3 py-2 border border-gray-200 bg-white text-[0.625rem] sm:text-xs font-black text-gray-600 dark:text-white! uppercase tracking-wider ${i[d]} peer-checked:text-white peer-checked:border-transparent transition-all shadow-xs cursor-pointer hover:border-emerald-500/40">${d}</span>
                                        </label>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Signatures Section -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-gray-200/80 dark:border-slate-700/80">
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Prepared By (Signature Line)</label>
                            <input type="text" id="export-prepared" value="${a.preparedBy||""}" placeholder="e.g. Mary Joy Q. Nuñez" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-3 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[0.625rem] sm:text-xs font-black text-gray-500 uppercase tracking-tighter ml-1">Approved By (Signature Line)</label>
                            <input type="text" id="export-approved" value="${a.approvedBy||""}" placeholder="e.g. Noel B. Orias" class="w-full bg-white border border-gray-200 rounded-xl min-h-10 sm:min-h-11 px-3 py-2 text-xs sm:text-sm font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                    </div>
                </div>

                <!-- Section 4: Output Column Selection -->
                <div class="rounded-xl border border-gray-200 bg-gray-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/50 space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="w-1.5 h-4 bg-golden-yellow rounded-full"></span>
                            <label class="text-xs font-black text-gray-500 dark:text-white! uppercase tracking-widest leading-none">Output Column Selection</label>
                        </div>
                        <div class="flex items-center gap-2 text-[0.625rem] font-bold">
                            <button type="button" id="select-default-cols-btn" class="text-royal-blue hover:underline cursor-pointer">Set Recommended Default</button>
                            <span class="text-gray-300">|</span>
                            <button type="button" id="select-all-cols-btn" class="text-emerald-600 hover:underline cursor-pointer">Select All</button>
                            <span class="text-gray-300">|</span>
                            <button type="button" id="deselect-all-cols-btn" class="text-red-500 hover:underline cursor-pointer">Clear All</button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                        ${o.map(d=>{const i=d.id,u=s.includes(i),p=`col-switch-${i}`;return`
                                <label for="${p}" class="flex min-h-11 items-center justify-between gap-2 bg-white dark:bg-slate-900/70 px-3 py-2 border border-gray-200 dark:border-slate-700/80 rounded-xl cursor-pointer hover:border-emerald-500/40 hover:shadow-xs transition-all group select-none">
                                    <span class="truncate text-[0.625rem] sm:text-xs font-black uppercase tracking-tight text-gray-700 dark:text-gray-200 group-hover:text-emerald-600">${d.label}</span>
                                    <div class="relative flex items-center shrink-0">
                                        <input type="checkbox" id="${p}" name="export-column" value="${i}" ${u?"checked":""} class="sr-only peer">
                                        <div class="w-9 h-5 bg-gray-200 dark:bg-slate-700 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:shadow-sm after:transition-all peer-checked:after:translate-x-4"></div>
                                    </div>
                                </label>
                            `}).join("")}
                    </div>
                </div>
            </form>
        </div>
    `;H.fire({html:r,width:"min(1120px, calc(100vw - clamp(0.5rem, 2vw, 1.5rem)))",showConfirmButton:!1,showCloseButton:!0,padding:"clamp(0.75rem, 2vw, 1.5rem)",customClass:{container:"font-montserrat",popup:"max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl shadow-2xl ldn-modal-popup",closeButton:"focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer"},didOpen:d=>{const i=d.querySelector("#export-config-form"),u=i.querySelector("#export-office"),p=i.querySelector("#export-location"),f=i.querySelector("#export-year"),v=i.querySelector("#export-assigned-unit"),A=d.querySelector("#select-default-cols-btn"),c=d.querySelector("#select-all-cols-btn"),y=d.querySelector("#deselect-all-cols-btn");if(A&&A.addEventListener("click",()=>{i.querySelectorAll('input[name="export-column"]').forEach(x=>{x.checked=t.includes(x.value)})}),c&&c.addEventListener("click",()=>{i.querySelectorAll('input[name="export-column"]').forEach(x=>{x.checked=!0})}),y&&y.addEventListener("click",()=>{i.querySelectorAll('input[name="export-column"]').forEach(x=>{x.checked=!1})}),v){const x=window.getExportAssignedUnits?window.getExportAssignedUnits():Ie,h=a.assignedUnit||"ALL";v.innerHTML=`<option value="ALL" ${h==="ALL"?"selected":""}>ALL ASSIGNED UNITS</option>`+x.map(L=>`<option value="${L}" ${h===L?"selected":""}>${L}</option>`).join("")}if(f&&window.getExportYears){const x=window.getExportYears(),h=a.year||"ALL";let L=`<option value="ALL" ${h==="ALL"?"selected":""}>ALL YEARS</option>`;x.forEach(M=>{L+=`<option value="${M}" ${h===M?"selected":""}>${M}</option>`}),f.innerHTML=L}const E=async(x,h)=>{if(p){if(!x){p.disabled=!0,p.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}p.disabled=!1,p.innerHTML='<option value="ALL">Loading...</option>';try{const L=await be(`api/beneficiaries.php?get_office_locations=1&office_id=${x}`),M=L.success&&L.data?.success&&Array.isArray(L.data.locations)?L.data.locations:L.success&&Array.isArray(L.locations)?L.locations:Array.isArray(L.data)?L.data:[];let F='<option value="ALL">ALL LOCATIONS</option>';M.forEach($=>{const D=typeof $=="string"?$:$.location||$.name||"";D&&(F+=`<option value="${D}" ${h===D?"selected":""}>${D}</option>`)}),p.innerHTML=F}catch{p.innerHTML='<option value="ALL">ALL LOCATIONS</option>'}}};u&&(async()=>{let x=[],h={};try{const $=await be("api/beneficiaries.php?get_offices_advanced=1");$.success&&$.data?.success&&Array.isArray($.data.offices)?(x=$.data.offices,h=$.data.locations_by_office||{}):$.success&&Array.isArray($.offices)&&(x=$.offices,h=$.locations_by_office||{})}catch{}(!x||x.length===0)&&window.getExportOffices&&(x=window.getExportOffices().map((D,W)=>({id:W+1,office:D})));const L=a.office||"ALL";let M=`<option value="ALL" ${L==="ALL"?"selected":""}>ALL OFFICES</option>`;x.forEach($=>{const D=typeof $=="string"?$:$.office||$.office_name||"",W=typeof $=="object"&&($.id||$.office_id)||"";D&&(M+=`<option value="${D}" data-id="${W}" ${L.toUpperCase()===D.toUpperCase()?"selected":""}>${D}</option>`)}),u.innerHTML=M;const F=async()=>{const D=u.options[u.selectedIndex]?.dataset?.id,W=u.value;if(!W||W==="ALL"){p.disabled=!0,p.innerHTML='<option value="ALL">ALL LOCATIONS</option>';return}if(p.disabled=!1,D&&h[D]&&h[D].length>0){const _=h[D];let xe='<option value="ALL">ALL LOCATIONS</option>';_.forEach(ne=>{const K=typeof ne=="string"?ne:ne.location||ne.name||"";K&&(xe+=`<option value="${K}" ${a.location===K?"selected":""}>${K}</option>`)}),p.innerHTML=xe;return}await E(D,a.location||"ALL")};await F(),u.addEventListener("change",async()=>{a.location="ALL",await F()})})(),i.addEventListener("submit",x=>{x.preventDefault();const h=i.querySelectorAll('input[name="export-column"]:checked');let L=Array.from(h).map(ne=>ne.value);L.length===0&&(L=t);const M=i.querySelector('input[name="export-gender"]:checked'),F=i.querySelector('input[name="export-section"]:checked'),$=i.querySelector('input[name="export-remarks"]:checked'),D=i.querySelector('input[name="export-age-group"]:checked'),W=i.querySelector("#export-prepared").value.trim(),_=i.querySelector("#export-approved").value.trim();localStorage.setItem("ldn_export_prepared",W),localStorage.setItem("ldn_export_approved",_);const xe={office:i.querySelector("#export-office").value,location:i.querySelector("#export-location")?.value||"ALL",year:i.querySelector("#export-year")?.value||"ALL",gender:M?M.value:a.gender||"ALL",assignedUnit:i.querySelector("#export-assigned-unit")?.value||"ALL",remarks:$?$.value:a.remarks||"ALL",ageGroup:D?D.value:a.ageGroup||"ALL",dtrStatus:i.querySelector("#export-dtr-status")?.value||"ALL",arStatus:i.querySelector("#export-ar-status")?.value||"ALL",documentStatus:i.querySelector("#export-document-status")?.value||"ALL",search:i.querySelector("#export-search").value.trim().toLowerCase(),sort:i.querySelector("#export-sort").value,section:F?F.value:"ALL",preparedBy:W,approvedBy:_,columns:L};e(xe),H.close(),setTimeout(()=>{H.fire({toast:!0,position:"top-end",icon:"success",title:"Report configuration applied",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,customClass:{popup:"rounded-xl shadow-lg border border-emerald-100"}})},150)})}})}const st=[{name:"BS Information Technology",icon:'<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Computer Science",icon:'<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'},{name:"BS Criminology",icon:'<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'},{name:"BS Business Administration",icon:'<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"BS Accountancy",icon:'<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>'},{name:"BS Civil Engineering",icon:'<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'},{name:"BS Electrical Engineering",icon:'<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'},{name:"BS Mechanical Engineering",icon:'<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'},{name:"BS Nursing",icon:'<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'},{name:"BS Hospitality Management",icon:'<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'},{name:"Bachelor of Secondary Education",icon:'<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"Bachelor of Elementary Education",icon:'<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'},{name:"BS Psychology",icon:'<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'},{name:"BS Biology",icon:'<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>'},{name:"Senior High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"High School Graduate",icon:'<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'},{name:"College Graduate",icon:'<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>'}],Ct=["MOTHER","FATHER","STEP MOTHER","STEP FATHER","BROTHER","SISTER","GRANDFATHER","GRANDMOTHER","HUSBAND","SPOUSE","SON","DAUGHTER","UNCLE","AUNT","NEPHEW","NIECE","COUSIN","GUARDIAN","RELATIVE"];function Ve(e=null){const t=!!e&&!e._isBulk,a=t?"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z":"M12 4v16m8-8H4",s=t?"Edit Beneficiary":e?._isBulk?`Bulk Adding (${e._bulkCurrent} of ${e._bulkTotal})`:"New Beneficiary",o=Ee(),r={borderBase:o?"border-slate-800":"border-gray-100/80",borderInput:o?"border-slate-700":"border-gray-200",borderSugg:o?"border-slate-700":"border-gray-200",borderDivide:o?"divide-slate-700":"divide-gray-50",borderSuggHead:o?"border-slate-700":"border-gray-100",borderStatus:o?"border-slate-700":"border-gray-100",bgInput:o?"bg-slate-900":"bg-white",bgSugg:o?"bg-slate-800":"bg-white",bgStatusWrap:o?"bg-slate-800/50":"bg-gray-50",bgSaveBtn:o?"bg-green-600 hover:bg-green-700":"bg-[#2e7d32] hover:bg-[#1b5e20]",bgCancelBtn:o?"bg-red-900/20":"bg-[#fef2f2]",textHeading:o?"text-green-500":"text-[#2e7d32]",textSubtitle:o?"text-slate-500":"text-gray-400 dark:!text-white",textLabel:o?"text-slate-500":"text-gray-400 dark:!text-white",textSectionTitle:o?"text-slate-400":"text-gray-500",textInput:o?"text-white":"text-slate-900",textAge:o?"text-green-400":"text-[#2e7d32]",textWorkSuggHead:o?"text-slate-500":"text-slate-400",textWorkOpt:o?"text-slate-300":"text-slate-600",textCourseOpt:o?"text-slate-300":"text-gray-600",textCancel:o?"text-red-400":"text-red-700",focusGreen:o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]",focusBlue:o?"focus:ring-blue-500/10 focus:border-blue-500":"focus:ring-royal-blue/10 focus:border-royal-blue",focusYellow:o?"focus:ring-yellow-500/10 focus:border-yellow-500":"focus:ring-golden-yellow/10 focus:border-golden-yellow",focusRed:o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-philippine-red/10 focus:border-philippine-red",gfGreen:o?"group-focus-within:text-green-500":"group-focus-within:text-[#2e7d32]",gfBlue:o?"group-focus-within:text-blue-500":"group-focus-within:text-royal-blue",iconBg:o?"bg-green-900/20":"bg-white",iconText:o?"text-green-400":"text-[#2e7d32]",iconBorder:o?"border-green-800/30":"border-[#c8e6c9]",dotGreen:o?"bg-green-500":"bg-[#2e7d32]",dotBlue:o?"bg-blue-500":"bg-royal-blue",idText:o?"text-white":"text-royal-blue",placeholder:o?"placeholder:text-slate-600":"placeholder:text-gray-300",courseHover:o?"hover:bg-green-900/40 hover:text-green-400":"hover:bg-[#e8f5e9] hover:text-[#2e7d32]",workHover:o?"hover:bg-blue-900/40 hover:text-blue-400":"hover:bg-blue-50/80 hover:text-royal-blue",workDot:o?"bg-slate-700 group-hover/opt:bg-blue-500":"bg-gray-200 group-hover/opt:bg-royal-blue",workArrow:o?"text-blue-400":"text-royal-blue",iconColor:o?"text-slate-500":"text-gray-400 dark:!text-white",cancelBorder:o?"border-red-900/30":"border-[#fee2e2]",saveShadow:o?"hover:shadow-green-500/20":"hover:shadow-[#2e7d32]/40",actionBarBorder:o?"border-slate-700":"border-gray-100/80"},d=`
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
            <div class="mb-3 pb-3 border-b ${r.borderBase} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3.5 py-2 bg-blue-50/50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-700/80 rounded-xl hover:border-blue-600 hover:bg-blue-100/60 dark:hover:bg-blue-900/50 transition-all duration-300 w-full sm:w-auto focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm shrink-0 me-1 my-1">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[0.625rem] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                `:""}
            </div>
            <div class="mb-4 pb-1 border-b border-gray-200 dark:border-slate-700/80 grid grid-cols-2 gap-2 text-[0.6875rem] sm:text-xs font-black uppercase tracking-wider">
                <button type="button" id="tab-btn-general" class="py-2.5 px-2 text-royal-blue dark:text-blue-400 border-b-2 border-royal-blue dark:border-blue-400 flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black">
                    <span class="w-2 h-2 rounded-full bg-royal-blue dark:bg-blue-400 flex-shrink-0"></span>
                    <span class="truncate">GENERAL INFORMATION</span>
                </button>
                <button type="button" id="tab-btn-employee" class="py-2.5 px-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 border-b-2 border-transparent flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black">
                    <span class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0"></span>
                    <span class="truncate">EMPLOYEE INFORMATION</span>
                </button>
            </div>

            <form id="add-beneficiary-form" class="space-y-5" autocomplete="off" data-is-edit="${t}">
                <!-- TAB 1: GENERAL INFORMATION (Personal & Educational Information) -->
                <div id="tab-content-general" class="space-y-4">
                    <div class="flex items-center gap-2 mb-2 px-1">
                        <div class="w-1.5 h-5 ${r.dotGreen} rounded-full"></div>
                        <p class="text-[0.6875rem] uppercase font-black ${r.textSectionTitle} tracking-widest dark:text-white!">Personal & Educational Information</p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="group">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Full Name (Last, First, MI) <span class="text-red-500">*</span></label>
                            <input type="text" name="name" id="name-input-field" autocomplete="off" value="${e?.name||""}" required class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder} dark:text-white!" placeholder="e.g. Dela Cruz, Juan M.">
                            <div id="duplicate-warning" class="hidden mt-1.5 text-[0.6875rem] font-bold items-center gap-1.5 animate-pulse">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Beneficiary already exist</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Contact No.</label>
                                <input type="text" name="contact" autocomplete="off" value="${e?.contact||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder} font-mono" placeholder="09XX-XXX-XXXX">
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Address</label>
                                <input type="text" name="address" autocomplete="off" value="${e?.address||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" placeholder="Barangay, City">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Birthday</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="birthday" autocomplete="off" value="${e?.birthday||""}" id="birthday-input" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Age</label>
                                <input type="text" name="age" autocomplete="off" value="${e?.age||""}" id="age-display" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-black ${r.textAge} outline-none font-mono focus:ring-4 ${r.focusGreen}" placeholder="Auto/Manual">
                                <div id="age-warning" class="hidden mt-1.5 text-[0.6875rem] font-bold items-center gap-1.5 animate-pulse">
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Age must be between 18 and 29 years old</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Gender</label>
                                <select name="gender" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="Male" ${e?.gender==="Male"?"selected":""}>Male</option>
                                    <option value="Female" ${e?.gender==="Female"?"selected":""}>Female</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Education</label>
                                <div class="relative" id="education-container">
                                    <input type="text" name="education" id="education-input" autocomplete="off"
                                        value="${e?.education||""}" 
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 pl-10 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="Course/Level...">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                    </div>
                                    <div id="course-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-48 overflow-y-auto font-montserrat ${r.borderDivide} p-1.5">
                                        ${st.map(i=>`
                                            <div class="course-option px-3 py-2 text-[0.6875rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${i.icon}
                                                <span class="option-text">${i.name}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t ${o?"border-slate-800/70":"border-gray-100"}">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" autocomplete="off" value="${e?.designatedBeneficiary||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm ${r.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${Ct.map(i=>`
                                        <option value="${i}" ${e?.relationshipToAssured===i?"selected":""}>${i}</option>
                                    `).join("")}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: EMPLOYEE INFORMATION (Work, Contract, Status & History) -->
                <div id="tab-content-employee" class="space-y-4 hidden">
                    <div class="flex items-center gap-2 mb-2 px-1">
                        <div class="w-1.5 h-5 ${r.dotBlue} rounded-full"></div>
                        <p class="text-[0.6875rem] uppercase font-black ${r.textSectionTitle} tracking-widest">Work & Administrative Data</p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="group">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfBlue}">ID Number</label>
                            <input type="text" name="gip_id" id="full-id-input" autocomplete="off"
                                value="${e?.id||""}" 
                                class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.75rem] font-black ${r.idText} font-mono outline-none focus:ring-4 ${r.focusBlue} transition-all uppercase cursor-text" 
                                placeholder="ROX-RD-ESIG-2025-0001">
                            <input type="hidden" name="id" value="${e?.id||""}">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 transition-colors ${r.gfBlue}">Assigned Office</label>
                                <div class="relative" id="office-container">
                                    <input type="text" name="office" id="office-input" autocomplete="off"
                                        value="${e?.office||""}" 
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="e.g. DOLE Field Office">
                                    <div class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                    <div id="office-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-48 overflow-y-auto font-montserrat ${r.borderDivide} p-1.5">
                                        <!-- Will be populated by JS -->
                                        <div class="px-3 py-4 text-center text-[0.625rem] font-bold ${r.textLabel} animate-pulse">Loading offices...</div>
                                    </div>
                                </div>
                            </div>

                            <div class="group">
                                <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5 tracking-widest ${o?"":"transition-colors"} ${o?"":"group-focus-within:text-royal-blue"}">Assigned Unit</label>
                                <div class="relative" id="work-container">
                                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <svg class="w-3.5 h-3.5 ${r.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    </div>
                                    <input type="text" name="designation" id="designation-input" autocomplete="off"
                                        value="${e?.designation||"N/A"}"
                                        class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}" 
                                        placeholder="N/A">
                                    <div id="work-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-56 overflow-y-auto font-montserrat ${r.borderDivide} p-2 transform origin-top transition-all duration-200">
                                        <div class="px-2 py-1.5 mb-1.5 border-b ${r.borderSuggHead}">
                                            <p class="text-[0.5625rem] font-black ${r.textWorkSuggHead} uppercase tracking-widest">Quick Select Units</p>
                                        </div>
                                        ${Ie.map(i=>`
                                            <div class="work-option px-3 py-2.5 text-[0.6875rem] font-black ${r.textWorkOpt} ${r.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
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
                        </div>

                        <!-- Contract Duration Block -->
                        <div class="pt-3 border-t ${o?"border-slate-800/70":"border-gray-100"}">
                            <div class="flex items-center justify-between gap-2 mb-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-1.5 h-5 bg-golden-yellow rounded-full"></div>
                                    <p class="text-[0.625rem] uppercase font-black ${r.textSectionTitle} tracking-widest">Contract Duration</p>
                                </div>
                                <span id="contract-duration-badge" class="text-[0.625rem] font-bold text-royal-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 transition-all hidden"></span>
                            </div>
                            <div id="date-range-picker" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="group">
                                    <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5">Start Date</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                        </div>
                                        <input type="text" name="startDate" autocomplete="off" id="datepicker-range-start" value="${e?.startDate||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusYellow} outline-none transition-all shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                                    </div>
                                </div>
                                <div class="group">
                                    <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5">End Date</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 ${r.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                        </div>
                                        <input type="text" name="endDate" autocomplete="off" id="datepicker-range-end" value="${e?.endDate||""}" class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg pl-10 pr-3.5 py-2.5 text-[0.8125rem] font-bold ${r.textInput} focus:ring-4 ${r.focusRed} outline-none transition-all shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="group pt-2 border-t ${o?"border-slate-800/70":"border-gray-100"}">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-1.5">Replacement History (Optional)</label>
                            <input type="hidden" name="replacement" id="replacement-hidden" value="${e?.replacement||""}">
                            <div class="relative" id="replacement-container">
                                <input type="text" id="replacement-search-input" autocomplete="off"
                                    value="${e?.replacement||""}"
                                    class="w-full ${r.bgInput} border ${r.borderInput} rounded-lg px-3.5 py-2.5 text-[0.75rem] font-bold ${r.textInput} focus:ring-4 ${r.focusBlue} outline-none transition-all shadow-sm ${r.placeholder}"
                                    placeholder="Search beneficiary name...">
                                <div id="replacement-suggestions" class="hidden absolute left-0 right-0 mt-2 ${r.bgSugg} border ${r.borderSugg} rounded-xl shadow-2xl z-[100] max-h-56 overflow-y-auto font-montserrat ${r.borderDivide} p-2"></div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.625rem] ${r.textLabel} font-black uppercase block mb-2">Employment Status Record</label>
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
                                        class="px-3.5 py-3 rounded-xl bg-[#2e7d32] text-white text-[0.625rem] font-black hover:bg-[#1b5e20] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        ABSORB
                                    </button>
                                    <button type="button" id="resign-btn" 
                                        class="px-3.5 py-3 rounded-xl bg-[#ce1126] text-white text-[0.625rem] font-black hover:bg-[#b71c1c] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        RESIGN
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="extension-log-container" class="mt-auto transition-all duration-300">
                            <!-- Absorption Log will be injected here via JS -->
                        </div>
                    </div>
                </div>

                <!-- 2-Grid Action Footer Buttons (OUTSIDE tabs: Always visible on both General and Employee tabs) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 pt-4 border-t ${r.actionBarBorder}">
                    <div class="flex items-center w-full order-2 sm:order-1">
                        <button type="button" id="cancel-modal-btn"
                            class="w-full h-11 group flex items-center justify-center gap-2 px-6 ${r.bgCancelBtn} ${r.textCancel} font-black rounded-xl hover:bg-[#ce1126] hover:text-white transition-all duration-300 shadow-sm border ${r.cancelBorder} hover:border-[#ce1126] cursor-pointer text-xs uppercase tracking-wider active:scale-[0.99] whitespace-nowrap">
                            <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                            <span>CANCEL</span>
                        </button>
                    </div>

                    <div class="flex items-center w-full order-1 sm:order-2">
                        <button type="submit" form="add-beneficiary-form" id="submit-beneficiary-btn"
                            class="w-full h-11 group flex items-center justify-center gap-2 px-6 ${r.bgSaveBtn} text-white font-black rounded-xl transition-all duration-300 shadow-lg ${r.saveShadow} cursor-pointer text-xs transform active:scale-[0.99] uppercase tracking-wider whitespace-nowrap">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                            <span>${t?"UPDATE RECORD":"SAVE RECORD"}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    `;H.fire({html:d,width:window.innerWidth<640?"100vw":"820px",showConfirmButton:!1,showCloseButton:!1,padding:window.innerWidth<640?"1rem":"1.5rem",customClass:{container:"font-montserrat p-0 sm:p-4",popup:"rounded-none sm:rounded-2xl ldn-modal-popup max-w-full sm:max-w-4xl w-full m-0 sm:m-auto min-h-screen sm:min-h-0"},willOpen:()=>{document.documentElement.classList.add("overflow-hidden"),document.body.classList.add("overflow-hidden")},didClose:()=>{document.documentElement.classList.remove("overflow-hidden"),document.body.classList.remove("overflow-hidden")},didOpen:i=>{window.initFlowbite&&window.initFlowbite();const u=m=>{const n=i.querySelector("#tab-btn-general"),l=i.querySelector("#tab-btn-employee"),g=i.querySelector("#tab-content-general"),b=i.querySelector("#tab-content-employee"),k="py-2.5 px-2 text-royal-blue dark:text-blue-400 border-b-2 border-royal-blue dark:border-blue-400 flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black",S="py-2.5 px-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 border-b-2 border-transparent flex items-center justify-center gap-1.5 cursor-pointer text-center transition-all outline-none w-full text-xs font-black";m==="general"?(g&&g.classList.remove("hidden"),b&&b.classList.add("hidden"),n&&(n.className=k),l&&(l.className=S)):m==="employee"&&(g&&g.classList.add("hidden"),b&&b.classList.remove("hidden"),n&&(n.className=S),l&&(l.className=k))},p=i.querySelector("#tab-btn-general"),f=i.querySelector("#tab-btn-employee");p&&p.addEventListener("click",()=>u("general")),f&&f.addEventListener("click",()=>u("employee"));const v=i.querySelector("#cancel-modal-btn");v&&v.addEventListener("click",()=>{!t&&!e?._isBulk&&localStorage.removeItem("add_beneficiary_draft"),H.close(),e?._isBulk&&Ge.onCancel()});const A=i.querySelector("#bulk-add-btn");A&&A.addEventListener("click",()=>{H.close(),Ge.init()});const c=(m,n)=>{m.addEventListener("paste",l=>{l.preventDefault();let g=(l.clipboardData||window.clipboardData).getData("text");if(g){g=g.trim().replace(/[-.\s]/g,"/");const b=g.split("/");if(b.length===3){const k=b[0].padStart(2,"0"),S=b[1].padStart(2,"0");let q=b[2];if(q.length===2){const O=new Date().getFullYear(),P=Math.floor(O/100)*100;q=String(P+parseInt(q))}else q=q.padStart(4,"0");const I=`${k}/${S}/${q}`;m.value=I;const U=window.__parseFormattedDate(I);U&&n&&n(U);const N=m._datepicker||m.parentNode&&m.parentNode._datepicker;N&&typeof N.hide=="function"&&N.hide()}}}),m.addEventListener("input",l=>{const g=m._datepicker||m.parentNode&&m.parentNode._datepicker;g&&typeof g.hide=="function"&&g.hide();const b=window.__maskDate(l.target.value);if(l.target.value!==b&&(l.target.value=b),b.length===10){const k=window.__parseFormattedDate(b);k&&n&&n(k)}}),m.addEventListener("changeDate",l=>{if(l.detail&&l.detail.date&&n){n(l.detail.date);const g=m._datepicker||m.parentNode&&m.parentNode._datepicker;g&&typeof g.hide=="function"&&g.hide()}})},y=i.querySelector("#birthday-input"),E=i.querySelector("#age-display"),x=i.querySelector("#age-warning"),h=i.querySelector("#submit-beneficiary-btn"),L=m=>{if(!m)return x&&x.classList.add("hidden"),h&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer")),!0;const n=parseInt(m),l=!isNaN(n)&&n>=18&&n<=29;return x&&(x.className=`mt-1 text-[0.625rem] font-bold ${l?"hidden":"flex"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`),h&&(l?(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed","grayscale"),h.classList.add("cursor-pointer","active:scale-[0.98]")):(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),l};if(E&&(E.addEventListener("input",m=>{L(m.target.value)}),E.value&&L(E.value)),y){c(y,n=>{E&&(E.value=window.calculateAge(n),L(E.value),E.classList.add("animate-pulse"),setTimeout(()=>E.classList.remove("animate-pulse"),400))});const m=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);m&&(y._datepicker=new m(y,{format:"mm/dd/yyyy",autohide:!0,orientation:"bottom right"}))}const M=i.querySelector("#name-input-field"),F=i.querySelector("#duplicate-warning");if(M&&F){let m;const n=()=>{try{return JSON.parse(localStorage.getItem("user")||"{}")?.id||null}catch{return null}},l=(b,k="")=>{F.className=`mt-1 text-[0.625rem] font-bold ${b?"flex":"hidden"} items-center gap-1.5 animate-pulse ${Ee()?"text-red-400":"text-red-600"}`;const S=F.querySelector("span");S&&(S.textContent=k?`Beneficiary already exists: ${k}`:"Beneficiary already exists")},g=async b=>{const k=n(),S=await fetch(`${ke()}api/check_duplicate.php`,{method:"POST",headers:{"Content-Type":"application/json",...k?{"X-User-Id":String(k)}:{}},body:JSON.stringify({name:b,user_id:k,exclude_id:t?e?.id:null})});if(!S.ok)throw new Error(`Duplicate check failed (${S.status})`);return S.json()};M.addEventListener("input",b=>{const k=b.target.value.trim();if(clearTimeout(m),k.length<3){l(!1);return}m=setTimeout(async()=>{try{const S=await g(k);S.success&&S.exists?l(!0,S.match||S.name):l(!1)}catch{}},500)}),e?.name&&(l(!1),(async()=>{const b=await g(e.name);b.success&&b.exists&&l(!0,b.match||b.name)})())}const $=i.querySelector("#full-id-input"),D=i.querySelector("#series-no-input"),W=i.querySelector('input[name="startDate"]'),_=i.querySelector('input[name="endDate"]'),xe=i.querySelectorAll('input[name="remarks"]'),ne=i.querySelector("#extension-log-container"),K=async m=>{if(!m)return;const n=[$,D].filter(Boolean);n.forEach(l=>{l.classList.add("animate-pulse"),l.placeholder="Syncing..."});try{const[l,g]=await Promise.all([be(`api/beneficiaries.php?next_id&year=${encodeURIComponent(m)}`),be(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(m)}`)]),b=l.success&&l.data?.success?l.data.nextId:null,k=g.success&&g.data?.success?g.data.nextSeries:null;b&&$&&($.value=b),k&&D&&(D.value=k)}catch{}finally{n.forEach(l=>l.classList.remove("animate-pulse"))}},ee=i.querySelector("#replacement-search-input"),fe=i.querySelector("#replacement-hidden"),j=i.querySelector("#replacement-suggestions"),ye=m=>{const n=(m.name||"").toUpperCase().trim(),l=m.startDateFormatted||m.startDate||"N/A",g=m.endDateFormatted||m.endDate||"N/A";return`${n} (${l.toUpperCase()} - ${g.toUpperCase()})`},ve=m=>{if(j){if(!m.length){j.innerHTML=`<div class="px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt}">No matching beneficiary found.</div>`,j.classList.remove("hidden");return}j.innerHTML=m.map(n=>{const l=ye(n);return`
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${l.replace(/"/g,"&quot;")}">
                            ${l}
                        </button>
                    `}).join(""),j.classList.remove("hidden"),j.querySelectorAll(".replacement-option").forEach(n=>{n.addEventListener("click",()=>{const l=n.getAttribute("data-replacement")||"";ee&&(ee.value=l),fe&&(fe.value=l),j.classList.add("hidden")})})}};let Le=null;const w=async(m="")=>{const n=(m||"").trim(),l=`api/beneficiaries.php?replacement_candidates=1&limit=20${n?`&q=${encodeURIComponent(n)}`:""}`,g=await be(l);g.success&&g.data?.success&&Array.isArray(g.data.candidates)&&ve(g.data.candidates)};ee&&fe&&j&&(ee.addEventListener("focus",()=>{w(ee.value||"")}),ee.addEventListener("input",()=>{fe.value=ee.value.trim(),clearTimeout(Le),Le=setTimeout(()=>{w(ee.value||"")},250)}),document.addEventListener("click",m=>{ee&&j&&!ee.contains(m.target)&&!j.contains(m.target)&&j.classList.add("hidden")}));const B=()=>{const m=i.querySelector('input[name="remarks"]:checked');return m?m.value:"ONGOING"},C=m=>{const n=i.querySelector(`input[name="remarks"][value="${m}"]`);n&&(n.checked=!0,Z())},Y=()=>{if(_&&_.value){const m=window.__parseFormattedDate(_.value);if(!m)return;const n=new Date;n.setHours(0,0,0,0);let l="ONGOING";m<n&&(l="EXPIRED"),C(l)}},Z=()=>{if(!ne)return;const m=B();if(m==="ABSORBED"){const n=e?.absorbDate&&!String(e.absorbDate).includes("0000-00-00")?new Date(e.absorbDate):new Date,l=n.getTimezoneOffset()*6e4,g=new Date(n.getTime()-l).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-green-500":"text-[#2e7d32]"} border-b ${o?"border-slate-800":"border-green-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-green-500":"text-[#2e7d32]"} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${g}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-green-500/10 focus:border-green-500":"focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
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
                    `}else if(m==="RESIGNED"){const n=e?.resignedDate&&!String(e.resignedDate).includes("0000-00-00")?new Date(e.resignedDate):new Date,l=n.getTimezoneOffset()*6e4,g=new Date(n.getTime()-l).toISOString().slice(0,16);ne.innerHTML=`
                        <div class="mt-4 pt-4 border-t ${o?"border-slate-800":"border-gray-100"}">
                            <p class="text-[0.5625rem] uppercase font-black ${o?"text-red-500":"text-[#ce1126]"} border-b ${o?"border-slate-800":"border-red-100"} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-red-500":"text-[#ce1126]"} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${g}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${o?"text-slate-500":"text-gray-400 dark:text-white!"} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${e?.resigned_reason||""}" class="w-full ${o?"bg-slate-900 text-white border-slate-700":"bg-white text-slate-900 border-gray-300"} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${o?"focus:ring-red-500/10 focus:border-red-500":"focus:ring-[#ce1126]/10 focus:border-[#ce1126]"} outline-none transition-all shadow-sm ${o?"placeholder:text-slate-600":"placeholder:text-gray-300"}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `}else ne.innerHTML=""},G=()=>{const m=i.querySelector("#contract-duration-badge");if(!m||!W||!_)return;const n=W.value,l=_.value,g=Xe(n,l);g.text?(m.textContent=g.text,m.classList.remove("hidden")):m.classList.add("hidden")};if(W){let m=null;c(W,b=>{const k=b.getFullYear();if(_){const S=new Date(b);S.setMonth(S.getMonth()+6),S.setDate(S.getDate()-1);const q=String(S.getMonth()+1).padStart(2,"0"),I=String(S.getDate()).padStart(2,"0"),U=S.getFullYear();_.value=`${q}/${I}/${U}`}Y(),G(),k>1900&&k!==m&&(m=k,K(k))}),_&&c(_,()=>{Y(),G()});const n=i.querySelector("#date-range-picker"),l=window.DateRangePicker||(typeof DateRangePicker<"u"?DateRangePicker:null),g=window.Datepicker||(typeof Datepicker<"u"?Datepicker:null);if(l&&n&&W&&_){const b=new l(n,{format:"mm/dd/yyyy",autohide:!0,allowOneSidedRange:!0,orientation:"auto"});W._datepicker=b.datepickers?.[0]||null,_._datepicker=b.datepickers?.[1]||null}else g&&(W&&(W._datepicker=new g(W,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})),_&&(_._datepicker=new g(_,{format:"mm/dd/yyyy",autohide:!0,orientation:"auto"})));if(!t){const b=new Date().getFullYear();K(b)}}xe.forEach(m=>m.addEventListener("change",Z));const le=i.querySelector("#resign-btn"),Q=i.querySelector("#absorb-btn");le&&le.addEventListener("click",()=>C("RESIGNED")),Q&&Q.addEventListener("click",()=>C("ABSORBED")),i.querySelectorAll('input[type="text"], textarea').forEach(m=>{["id-number-input","full-id-input"].includes(m.id)||m.addEventListener("input",()=>{const n=m.selectionStart,l=m.selectionEnd;m.value=m.value.toUpperCase(),m.setSelectionRange(n,l)})}),Y(),Z(),G(),J("education-input","course-suggestions","course-option"),J("designation-input","work-suggestions","work-option"),(()=>{const m=i.querySelector("#office-input"),n=i.querySelector("#office-suggestions");if(!m||!n)return;let l="OFFICES",g=null,b=[];const k=async()=>{const q="dole_offices_cache",I=async()=>{let N=[];try{if(me&&Ce()){const[{data:O,error:P},{data:X}]=await Promise.all([me.from("offices").select("*").order("office"),me.from("office_locations").select("office_id")]);if(!P&&O?.length){const oe={};X&&X.forEach(te=>{oe[te.office_id]=(oe[te.office_id]||0)+1}),N=O.map(te=>({id:te.id??te.office_id,office:te.office||te.office_name||"",location_count:oe[te.id??te.office_id]||0})).filter(te=>te.office)}}}catch{}if(!N.length)try{const O=await be("api/beneficiaries.php?get_offices_advanced=1");O.success&&O.data?.success&&Array.isArray(O.data.offices)&&(N=O.data.offices)}catch{}return N.length>0&&(b=N,localStorage.setItem(q,JSON.stringify({data:N,timestamp:Date.now()}))),N},U=localStorage.getItem(q);if(U)try{const{data:N,timestamp:O}=JSON.parse(U);return b=N,Date.now()-O>300*1e3&&I().then(()=>{l==="OFFICES"&&S("OFFICES",g,m.value)}),N}catch{localStorage.removeItem(q)}return b.length===0?await I():b},S=async(q="OFFICES",I=null,U="")=>{if(l=q,g=I,q==="OFFICES"){const O=(await k()).filter(T=>T.office.toLowerCase().includes(U.toLowerCase()));n.innerHTML=`
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-70 border-b ${r.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${O.length>0?O.map(T=>{const z=parseInt(T.location_count||0)>0;return`
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${T.id}" data-name="${T.office}" data-has-locations="${z}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${T.office}</span>
                                            </div>
                                            ${z?'<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':""}
                                        </div>
                                    `}).join(""):`
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${U.trim()?`
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${r.textLabel} opacity-50 px-1">New office: "${U.trim()}"</div>
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
                        `;const P=U.trim(),X=n.querySelector("#add-office-location-row-modal"),oe=n.querySelector("#new-office-loc-input-modal"),te=n.querySelector("#confirm-office-with-loc-modal"),pe=n.querySelector("#add-office-with-loc-btn-modal"),re=n.querySelector("#skip-office-loc-btn-modal");if(pe&&X&&pe.addEventListener("click",T=>{T.stopPropagation(),X.classList.remove("hidden"),X.classList.add("flex"),setTimeout(()=>oe?.focus(),50)}),te&&oe){const T=z=>{z.stopPropagation();const R=oe.value.trim();m.value=R?`${P} - ${R}`:P,m.dataset.locationName=R||"",n.classList.add("hidden"),m.dispatchEvent(new Event("change"))};te.addEventListener("click",T),oe.addEventListener("keydown",z=>{z.key==="Enter"&&T(z)}),oe.addEventListener("click",z=>z.stopPropagation())}re&&re.addEventListener("click",T=>{T.stopPropagation(),m.value=P,m.dataset.locationName="",n.classList.add("hidden"),m.dispatchEvent(new Event("change"))}),n.querySelectorAll(".office-code-option").forEach(T=>{T.addEventListener("click",z=>{z.stopPropagation(),T.dataset.hasLocations==="true"?S("LOCATIONS",{id:T.dataset.id,name:T.dataset.name}):(m.value=T.dataset.name,m.dataset.officeId=T.dataset.id,delete m.dataset.locationName,n.classList.add("hidden"),m.dispatchEvent(new Event("change")))})})}else{n.innerHTML=`
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
                                    <input type="text" id="location-search-internal" placeholder="Search in ${I.name}..." 
                                        class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-900/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                        value="${U.includes(" - ")?U.split(" - ")[1]:""}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;const N=n.querySelector("#locations-list-container"),O=n.querySelector("#location-search-internal"),P=`dole_locs_cache_${I.id}`;let X=[];const oe=localStorage.getItem(P);if(oe)try{const{data:re,timestamp:T}=JSON.parse(oe);X=re}catch{localStorage.removeItem(P)}const te=async()=>{let re=[];if(me&&Ce()){const{data:T,error:z}=await me.from("office_locations").select("location").eq("office_id",I.id).order("location");!z&&T&&(re=T)}if(re.length===0)try{const T=await be(`api/beneficiaries.php?get_office_locations=1&office_id=${I.id}`);T.success&&T.data?.success&&Array.isArray(T.data.locations)&&(re=T.data.locations)}catch{}re.length>0&&(X=re,localStorage.setItem(P,JSON.stringify({data:re,timestamp:Date.now()})),pe(O.value))},pe=(re="")=>{const T=X.filter(R=>R.location.toLowerCase().includes(re.toLowerCase())),z=re.trim();T.length>0?N.innerHTML=T.map(R=>`
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${r.textCourseOpt} ${r.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${R.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${R.location}</span>
                                    </div>
                                `).join(""):X.length===0?N.innerHTML=`<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${r.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`:(N.innerHTML=`
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${r.textLabel} opacity-60">No matching locations.</div>
                                    ${z?`
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${z}" as location
                                        </button>
                                    </div>`:""}
                                `,z&&N.querySelector("#add-new-location-modal")?.addEventListener("click",()=>{m.value=`${I.name} - ${z}`,m.dataset.officeId=I.id,m.dataset.locationName=z,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})),N.querySelectorAll(".location-option").forEach(R=>{R.addEventListener("click",se=>{const de=R.dataset.location;m.value=`${I.name} - ${de}`,m.dataset.officeId=I.id,m.dataset.locationName=de,n.classList.add("hidden"),m.dispatchEvent(new Event("change"))})})};pe(O.value),te(),setTimeout(()=>O.focus(),50),O.addEventListener("input",()=>pe(O.value)),O.addEventListener("click",re=>re.stopPropagation()),n.querySelector("#back-to-offices").addEventListener("click",re=>{re.stopPropagation(),S("OFFICES")})}};m.addEventListener("focus",()=>{n.classList.remove("hidden"),S(l,g,m.value)}),m.addEventListener("input",()=>{delete m.dataset.officeId,delete m.dataset.locationName,l="OFFICES",g=null,n.classList.remove("hidden"),S("OFFICES",null,m.value)}),document.addEventListener("click",q=>{!m.contains(q.target)&&!n.contains(q.target)&&(n.classList.add("hidden"),m.value||(l="OFFICES",g=null))})})();function J(m,n,l){const g=i.querySelector(`#${m}`),b=i.querySelector(`#${n}`);if(!g||!b)return;let k=!1;g.addEventListener("focus",()=>b.classList.remove("hidden")),document.addEventListener("click",S=>{!g.contains(S.target)&&!b.contains(S.target)&&b.classList.add("hidden")}),g.addEventListener("input",()=>{if(k){k=!1;return}const S=g.value.toLowerCase(),q=b.querySelectorAll(`.${l}`);let I=!1;q.forEach(U=>{const N=U.querySelector(".option-text");(N?N.innerText:U.innerText).toLowerCase().includes(S)?(U.style.display="block",I=!0):U.style.display="none"}),I?b.classList.remove("hidden"):b.classList.add("hidden")}),b.addEventListener("click",S=>{const q=S.target.closest(`.${l}`);if(!q)return;const I=q.querySelector(".option-text");g.value=I?I.innerText.trim():q.innerText.trim(),k=!0,b.classList.add("hidden"),g.dispatchEvent(new Event("change"))})}const ae=i.querySelector("#add-beneficiary-form"),ce="add_beneficiary_draft";if(!t){const m=localStorage.getItem(ce);if(m)try{const n=JSON.parse(m);Object.entries(n).forEach(([l,g])=>{const b=ae.elements[l];b&&b.type!=="file"&&b.type!=="hidden"&&(b.value=g)})}catch{}}ae.addEventListener("input",m=>{if(!t){const n=new FormData(ae),l={};n.forEach((g,b)=>l[b]=g),localStorage.setItem(ce,JSON.stringify(l))}});let he=!1;ae&&ae.addEventListener("submit",async m=>{if(m.preventDefault(),he)return;ae.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(se=>{se.classList.remove("ring-2","ring-red-500","!border-red-500")});const l=new FormData(ae);let g=!1;const b=se=>{const de=ae.querySelector(`[name="${se}"]`);de&&de.classList.add("ring-2","ring-red-500","!border-red-500"),g=!0},k=l.get("name"),S=l.get("contact"),q=l.get("startDate"),I=l.get("endDate"),U=(l.get("designation")||"").trim(),N=l.get("birthday"),O=(l.get("office")||"").trim(),P=l.get("remarks"),X=(l.get("gip_id")||"").trim();(!k||k.trim()===""||/[0-9]/.test(k))&&b("name"),S&&S.trim()!==""&&/[^0-9]/.test(S.replace(/[\s\-\+\(\)]/g,""))&&b("contact"),(!N||!window.__parseFormattedDate(N))&&b("birthday"),(!q||!window.__parseFormattedDate(q))&&b("startDate"),(!I||!window.__parseFormattedDate(I))&&b("endDate");const oe=window.__parseFormattedDate(q),te=window.__parseFormattedDate(I);oe&&te&&te<oe&&(b("startDate"),b("endDate")),O||b("office"),P||b("remarks"),!t&&!/^ROX-RD-ESIG-\d{4}-\d{4}$/.test(X)&&b("gip_id"),!t&&F&&!F.classList.contains("hidden")&&b("name");const pe=l.get("age"),re=parseInt(pe);if((!pe||isNaN(re)||re<18||re>29)&&(g=!0,x&&(x.className=`mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof Ee=="function"&&Ee()?"text-red-400":"text-red-600"}`),h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed","grayscale"),h.classList.remove("cursor-pointer","active:scale-[0.98]"))),g)return;const T={};l.forEach((se,de)=>{if(["birthday","startDate","endDate"].includes(de)){const Me=window.__parseFormattedDate(se);if(Me){const Ke=Me.getFullYear(),Qe=String(Me.getMonth()+1).padStart(2,"0"),It=String(Me.getDate()).padStart(2,"0");T[de]=`${Ke}-${Qe}-${It}`}else T[de]=se}else T[de]=se}),U||(T.designation="N/A"),T.replacement||(T.replacement="");const z=i.querySelector("#office-input");z?.dataset.officeId&&(T.officeId=z.dataset.officeId),z?.dataset.locationName&&(T.locationName=z.dataset.locationName);const R=i.querySelector("#full-id-input")?.value;if(t?(T.id=e?.id,R&&(T.gip_id=R)):(T.id=null,R&&(T.gip_id=R)),window.addBeneficiaryData){he=!0,h&&(h.disabled=!0,h.classList.add("opacity-50","cursor-not-allowed"));try{if(await window.addBeneficiaryData(T)){if(!t){const de="add_beneficiary_draft",Me=ae.querySelector('[name="office"]')?.value||"",Ke=ae.querySelector('[name="designation"]')?.value||"",Qe=ae.querySelector('[name="education"]')?.value||"";localStorage.setItem(de,JSON.stringify({office:Me,designation:Ke,education:Qe}))}H.close(),setTimeout(()=>{H.fire({toast:!0,position:"bottom-end",icon:"success",title:`Record ${t?"Updated":"Added"} Successfully`,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),!t&&e?._isBulk&&Ge.onSaveSuccess()},100)}}finally{he=!1,h&&document.body.contains(h)&&(h.disabled=!1,h.classList.remove("opacity-50","cursor-not-allowed"))}}})}})}window.handleContactSubmit=async function(e){e.preventDefault();const t=e.target,a=t.querySelector('button[type="submit"]'),s=a.innerHTML;a.disabled=!0,a.innerHTML=`
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;try{const o=new FormData(t);if((await fetch(t.action,{method:"POST",body:o,headers:{Accept:"application/json"}})).ok)H.fire({toast:!0,position:"top-end",icon:"success",title:"Message Sent Successfully!",text:"Thank you for reaching out. I will get back to you soon!",showConfirmButton:!1,timer:4e3,timerProgressBar:!0,didOpen:d=>{d.addEventListener("mouseenter",H.stopTimer),d.addEventListener("mouseleave",H.resumeTimer)},customClass:{popup:"rounded-2xl border-l-4 border-teal-500 shadow-2xl"}}),t.reset();else throw new Error("Failed to send")}catch{H.fire({toast:!0,position:"top-end",icon:"error",title:"Oops! Something went wrong.",text:"Could not send your message. Please try again later.",showConfirmButton:!1,timer:4e3,customClass:{popup:"rounded-2xl border-l-4 border-red-500 shadow-2xl"}})}finally{a.disabled=!1,a.innerHTML=s}return!1};function kr(){H.fire({html:`
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
        `,width:"800px",showConfirmButton:!1,showCloseButton:!1,backdrop:!0,position:"top",scrollbarPadding:!1,customClass:{container:"font-montserrat !backdrop-blur-md !bg-slate-900/70",popup:"!bg-transparent border-0 !shadow-none p-0 !overflow-visible mt-24",htmlContainer:"!overflow-visible",closeButton:"hidden"},didOpen:()=>{const e=document.getElementById("extraStatsSearchForm"),t=document.getElementById("statsSearchInput"),a=document.getElementById("statsDatePickerContainer"),s=document.getElementById("datepicker-range-start"),o=document.getElementById("datepicker-range-end"),r=document.getElementById("statsSortDropdownBtn"),d=document.getElementById("statsSortDropdown"),i=document.getElementById("statsSortDropdownLabel");let u="keyword";r&&d&&(r.addEventListener("click",p=>{p.stopPropagation(),d.classList.toggle("hidden")}),document.querySelectorAll(".stats-sort-option").forEach(p=>{p.addEventListener("click",f=>{const v=f.target.getAttribute("data-sort");u=v,i.textContent=f.target.textContent,d.classList.add("hidden"),v==="date"?(t.classList.add("hidden"),t.required=!1,a.classList.remove("hidden"),a.classList.add("flex"),t.value=""):(a.classList.add("hidden"),a.classList.remove("flex"),t.classList.remove("hidden"),t.required=!1,s.value="",o.value="",v==="offices"?t.placeholder="Search by Office name (e.g. Iligan)...":v==="education"?t.placeholder="Search by Education level (e.g. College)...":v==="ages"?t.placeholder="Search by Age (e.g. 24)...":t.placeholder="Search by name, office, status...")})}),document.addEventListener("click",p=>{!r.contains(p.target)&&!d.contains(p.target)&&d.classList.add("hidden")})),setTimeout(()=>t?.focus(),100),e.addEventListener("submit",async p=>{p.preventDefault();const f={mode:u,query:t.value.trim().toLowerCase(),startDate:s.value,endDate:o.value};await Sr(f)})}})}async function Sr(e){const t=document.getElementById("statsSearchLoader"),a=document.getElementById("statsSearchResult");t.classList.remove("hidden"),a.classList.add("hidden"),a.classList.remove("grid");let s=await We();if(!s||s.length===0){const o=await be("api/beneficiaries.php?all=true");o&&o.status==="success"&&o.data?(s=o.data,typeof _e=="function"&&_e(s)):o&&o.data&&(s=Array.isArray(o.data)?o.data:Array.isArray(o)?o:[],typeof _e=="function"&&_e(s))}setTimeout(()=>{const{mode:o,query:r,startDate:d,endDate:i}=e,u=s.filter(c=>{if(o==="date"){const y=c.startDate||c.createdAt;if(!y)return!1;const E=new Date(y);if(isNaN(E.getTime()))return!1;if(E.setHours(0,0,0,0),d){const x=new Date(d);if(x.setHours(0,0,0,0),E<x)return!1}if(i){const x=new Date(i);if(x.setHours(0,0,0,0),E>x)return!1}return!0}else return o==="offices"?c.office?.toLowerCase().includes(r)||!1:o==="education"?c.education?.toLowerCase().includes(r)||!1:o==="ages"?c.age==r:r?c.name?.toLowerCase().includes(r)||!1||c.id?.toLowerCase().includes(r)||!1||c.office?.toLowerCase().includes(r)||!1||c.remarks?.toLowerCase().includes(r)||!1||c.designation?.toLowerCase().includes(r)||!1:!0});let p="";o==="date"?d&&i?p=`Date: ${d} to ${i}`:d?p=`Date: From ${d}`:i?p=`Date: Until ${i}`:p="Date: All Time":p=`${o.charAt(0).toUpperCase()+o.slice(1)}: "${r||"ALL"}"`,document.getElementById("statsSearchTermDisplay").textContent=p;const f=document.getElementById("statsTopResults");f&&(f.innerHTML="",u.length>0?u.slice(0,3).forEach(y=>{const E=(y.remarks||"No Status").toUpperCase();let x="text-gray-500";E==="ONGOING"?x="text-green-500":E==="EXPIRED"?x="text-red-500":E==="ABSORBED"?x="text-emerald-600":E==="RESIGNED"?x="text-[#ce1126]":x="text-royal-blue",f.innerHTML+=`
                        <div class="flex flex-col border-b border-gray-200 dark:border-slate-700 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-100 truncate">${y.name||"Unknown Beneficiary"}</span>
                            <div class="flex justify-between items-center text-xs mt-1">
                                <span class="text-gray-500 truncate max-w-[60%]">${y.office||"N/A"}</span>
                                <span class="${x} font-bold text-[10px] uppercase tracking-wider">${E}</span>
                            </div>
                        </div>
                    `}):f.innerHTML='<div class="text-center text-gray-400 font-bold text-xs mt-6 uppercase tracking-widest">No matching records found.</div>'),u.length,u.filter(c=>(c.remarks||"").toUpperCase()==="ONGOING").length,u.filter(c=>(c.remarks||"").toUpperCase()==="EXPIRED").length,u.filter(c=>(c.remarks||"").toUpperCase()==="ABSORBED").length,u.filter(c=>(c.remarks||"").toUpperCase()==="RESIGNED").length;const v=new Date,A={month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};document.getElementById("statsCurrentDateTime").textContent=v.toLocaleString("en-US",A),ar(u,"statsModalChartContainer"),t.classList.add("hidden"),a.classList.remove("hidden"),a.classList.add("grid")},400)}function Xe(e,t){if(!e||!t)return{months:0,days:0,text:""};const a=v=>{if(!v)return null;if(v instanceof Date)return isNaN(v.getTime())?null:v;const A=String(v).trim();if(!A)return null;if(A.includes("/")){const y=A.split("/");if(y.length===3){const E=parseInt(y[0],10)-1,x=parseInt(y[1],10),h=parseInt(y[2],10);if(h>1e3&&E>=0&&E<12&&x>0&&x<=31)return new Date(h,E,x)}}if(/^\d{4}-\d{2}-\d{2}/.test(A)){const y=A.split("T")[0].split("-");if(y.length===3){const E=parseInt(y[0],10),x=parseInt(y[1],10)-1,h=parseInt(y[2],10);if(E>1e3&&x>=0&&x<12&&h>0&&h<=31)return new Date(E,x,h)}}const c=new Date(A);return isNaN(c.getTime())?null:c},s=a(e),o=a(t);if(!s||!o||o<s)return{months:0,days:0,text:""};const r=1e3*60*60*24,d=Math.abs(o.getTime()-s.getTime()),i=Math.round(d/r),u=i+1;let p=(o.getFullYear()-s.getFullYear())*12+(o.getMonth()-s.getMonth());o.getDate()<s.getDate()-1&&p--,p<0&&(p=0);let f="";return p>0?f=`${p} Month${p>1?"s":""} (${u} Days)`:f=`${u} Day${u!==1?"s":""}`,{months:p,days:u,daysExact:i,text:f}}export{Ie as C,Dt as _,je as a,be as b,Nr as c,Br as d,Xe as e,Tr as f,ke as g,$r as h,Ce as i,Or as j,Ar as k,Cr as l,Ir as m,Je as n,_r as o,Mr as r,me as s,yr as u};
