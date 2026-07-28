import"./vendor-DHtNC8Ux.js";import{i as ze,D as Ge,a as We}from"./vendor-flowbite-B7rSfpuT.js";import N from"./vendor-swal-BSk0fVSb.js";import{g as S,a as A,_ as Ye,b as Ve,u as be,l as V,d as Je,c as Be,e as Ke,f as Ze,r as Xe,h as $e,i as we,j as te,k as Qe,m as Ne,s as _,n as H,o as et,p as tt,q as rt,t as nt,v as ot,w as st,x as at,y as it,z as lt,A as ct,B as dt}from"./modal-CseOjSZQ.js";import"./vendor-charts-BjInCqFR.js";let ae=null,ie="default",le=0,re=localStorage.getItem("last_notified_id")?parseInt(localStorage.getItem("last_notified_id")):0;function ut(){const t=S();ae=new Audio(`${t}backend/src/assets/sounds/ping-ding.mp3`),ft(),pt(),bt(),K()}async function ft(){if(!("Notification"in window)){console.log("This browser does not support notifications");return}if(Notification.permission==="default"){const{default:t}=await Ye(async()=>{const{default:n}=await import("./vendor-swal-BSk0fVSb.js");return{default:n}},[],import.meta.url);if((await t.fire({title:"Enable Notifications?",html:`
                <div class="text-left">
                    <p class="text-sm text-gray-600 mb-3">Stay updated with real-time alerts when:</p>
                    <ul class="text-sm text-gray-700 space-y-2 mb-4">
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span>New beneficiaries are added to the system</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span>Documents require your review and approval</span>
                        </li>
                    </ul>
                    <p class="text-xs text-gray-500 italic">Recommended for better user experience</p>
                </div>
            `,icon:"question",showCancelButton:!0,confirmButtonText:"Allow Notifications",cancelButtonText:"Maybe Later",confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",customClass:{popup:"rounded-2xl",confirmButton:"font-bold",cancelButton:"font-bold"}})).isConfirmed){const n=await Notification.requestPermission();ie=n,n==="granted"&&t.fire({icon:"success",title:"Notifications Enabled!",text:"You will now receive real-time updates.",timer:3e3,showConfirmButton:!1})}}else ie=Notification.permission}function pt(){const t=document.getElementById("notificationBellButton"),e=document.getElementById("notificationDropdown");!t||!e||t.addEventListener("click",()=>{K()})}async function K(){S(),document.getElementById("notificationDropdown");const t=document.getElementById("notificationList");if(t){gt(t);try{const e=await A("api/notifications.php"),n=e.data;e.success&&n.success?(Oe(n.notifications),O(n.unread_count)):xe(t)}catch(e){console.error("Error loading notifications:",e),xe(t)}}}function gt(t){t.innerHTML=`
        <div role="status" class="max-w-md p-4 space-y-4 border-b border-default divide-y divide-default rounded-base animate-pulse md:p-6 dark:divide-slate-700/50">
            <div class="flex items-center justify-between pt-4 first:pt-0">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 skeleton-component rounded-full shrink-0"></div>
                    <div>
                        <div class="h-2.5 skeleton-component rounded-full w-32 mb-2"></div>
                        <div class="w-48 h-2 skeleton-component opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div class="h-5 skeleton-component opacity-40 rounded-md w-16"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 skeleton-component rounded-full shrink-0"></div>
                    <div>
                        <div class="h-2.5 skeleton-component rounded-full w-24 mb-2"></div>
                        <div class="w-56 h-2 skeleton-component opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div class="h-5 skeleton-component opacity-40 rounded-md w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 skeleton-component rounded-full shrink-0"></div>
                    <div>
                        <div class="h-2.5 skeleton-component rounded-full w-28 mb-2"></div>
                        <div class="w-40 h-2 skeleton-component opacity-60 rounded-full"></div>
                    </div>
                </div>
                <div class="h-5 skeleton-component opacity-40 rounded-md w-20"></div>
            </div>
            <span class="sr-only">Loading notifications...</span>
        </div>
    `}function xe(t){t.innerHTML=`
        <div class="flex items-center justify-center py-8 text-gray-500 text-sm">
            <p>Unable to load notifications</p>
        </div>
    `}function Oe(t){const e=document.getElementById("notificationList");if(!e)return;const n=e.scrollTop;if(t.length===0){e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 text-center">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Empty</p>
                <p class="text-slate-300 text-[0.625rem] mt-1 italic">No recent activity detected</p>
            </div>
        `;return}const r=t.map(o=>mt(o)).join("");e.innerHTML=r,requestAnimationFrame(()=>{e.scrollTop=n})}function mt(t){const e=yt(t.created_at),n=ht(e),r=t.is_read===0;return`
        <a href="javascript:void(0)" 
           class="flex px-4 py-3 hover:bg-neutral-secondary-medium transition-all duration-300 cursor-pointer border-b border-slate-100 dark:border-slate-700/50 ${r?"bg-emerald-50/30 dark:bg-emerald-500/10 border-l-4 border-emerald-500 shadow-md ring-1 ring-emerald-500/10 z-10":"opacity-60 grayscale-[0.2] border-l-4 border-transparent"}" 
           data-notification-id="${t.id}"
           onclick="markAsRead(${t.id}); return false;">
            <div class="shrink-0 relative">
                <div class="w-11 h-11 rounded-full ${r?"bg-gradient-to-br from-royal-blue to-blue-700":"bg-slate-200 dark:bg-slate-700"} flex items-center justify-center text-white font-black text-sm shadow-sm transition-all duration-500">
                    <svg class="w-6 h-6 ${r?"":"text-slate-400 dark:text-slate-500"}" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>
                </div>
                ${r?`
                <div class="notification-marker absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full shadow-sm z-10 transition-opacity duration-300">
                    <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </div>
                `:""}
            </div>
            <div class="w-full ps-3">
                <div class="text-body text-sm mb-1.5 ${r?"font-semibold":""}">
                    ${t.message}
                </div>
                <div class="flex items-center gap-2">
                    ${n}
                </div>
            </div>
        </a>
    `}function ht(t){const e=t.minutes;return e<1?`
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Just now
            </span>
        `:e<2?`
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-success-medium" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#009966"/>
                </svg>
                <span>1 min ago</span>
            </span>
        `:e<3?`
            <span class="flex items-center bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-neutral-quaternary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/>
                </svg>
                <span>2 mins ago</span>
            </span>
        `:`
            <span class="flex items-center bg-neutral-primary-soft border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <span>${t.text}</span>
            </span>
        `}function yt(t){const e=new Date,n=new Date(t),r=e-n,o=Math.floor(r/6e4),s=Math.floor(r/36e5),a=Math.floor(r/864e5);let l="";return o<1?l="Just now":o<60?l=`${o} min${o>1?"s":""} ago`:s<24?l=`${s} hour${s>1?"s":""} ago`:l=`${a} day${a>1?"s":""} ago`,{text:l,minutes:o,hours:s,days:a}}function O(t){le=t;const e=document.getElementById("notificationBadge"),n=document.getElementById("notificationBellIcon");e&&(t>0?(e.textContent=t>99?"99+":t,e.classList.remove("hidden")):e.classList.add("hidden")),n&&(t>0?n.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                </svg>
            `:n.innerHTML=`
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                </svg>
            `)}window.markAllAsRead=async function(){if(S(),!!document.getElementById("notificationList")){O(0);try{const e=await A("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_all_read"})}),n=e.data;e.success&&n.success&&(O(0),K())}catch(e){console.error("Error marking all as read:",e),O(0),K()}}};window.clearNotificationView=async function(){S();const t=document.getElementById("notificationList");if(t){O(0),t.style.opacity="0",setTimeout(()=>{t.innerHTML=`
            <div class="flex flex-col items-center justify-center py-12 px-4 transition-all duration-500">
                <svg class="w-16 h-16 text-slate-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Inbox Cleared</p>
                <p class="text-slate-300 text-[0.625rem] mt-1 italic">Notifications have been archived</p>
            </div>
        `,t.style.opacity="1"},300);try{const e=await A("api/notifications.php",{method:"POST",body:JSON.stringify({action:"clear_all"})}),n=e.data;e.success&&n.success}catch(e){console.error("Error clearing notifications:",e)}}};window.markAsRead=async function(t){S();const e=document.querySelector(`[data-notification-id="${t}"]`);if(e){const n=e.querySelector(".notification-marker");n&&(n.style.display="none"),e.classList.remove("bg-emerald-50/20","dark:bg-emerald-500/5","border-l-4","border-emerald-500","shadow-xs"),e.classList.add("opacity-60","grayscale-[0.2]","border-l-4","border-transparent");const r=e.querySelector(".rounded-full");if(r){r.classList.remove("bg-gradient-to-br","from-royal-blue","to-blue-700"),r.classList.add("bg-slate-200","dark:bg-slate-700");const o=r.querySelector("svg");o&&o.classList.add("text-slate-400","dark:text-slate-500")}}le>0&&O(le-1);try{await A("api/notifications.php",{method:"POST",body:JSON.stringify({action:"mark_read",notification_id:t})})}catch(n){console.error("Error marking notification as read:",n)}};function bt(){setInterval(async()=>{await Me()},1e4)}async function Me(){S();const t=document.getElementById("notificationDropdown");try{const e=await A("api/notifications.php?check_new=1"),n=e.data;if(e.success&&n.success){if(O(n.unread_count),t&&!t.classList.contains("hidden")){const r=await A("api/notifications.php"),o=r.data;r.success&&o.success&&Oe(o.notifications)}if(n.has_new){const r=n.latest_notification;r&&r.id>re&&(re=r.id,localStorage.setItem("last_notified_id",re),wt(),xt(r))}}}catch(e){console.error("Error checking notifications:",e)}}function wt(){const t=JSON.parse(localStorage.getItem("user")||"{}"),e=t.notifications_enabled!==void 0?parseInt(t.notifications_enabled)===1:!0;e&&ae?ae.play().catch(n=>{console.log("Could not play notification sound (Interaction-required or muted):",n)}):e||console.log("Notification sound muted by user preference")}function xt(t){if(ie==="granted"&&t){const e=JSON.parse(localStorage.getItem("user")||"{}"),n=e.notifications_enabled!==void 0?parseInt(e.notifications_enabled)===1:!0;new Notification("DOLE-GIP System",{body:t.message,icon:`${S()}frontend/images/logo/doleiligan.png`,badge:`${S()}frontend/images/logo/doleiligan.png`,tag:`notification-${t.id}`,requireInteraction:!1,silent:!n})}}async function vt(t,e="info"){S();try{const n=await A("api/notifications.php",{method:"POST",body:JSON.stringify({action:"create",message:t,type:e})}),r=n.data;return n.success&&r.success&&await Me(),r}catch(n){return console.error("Error creating notification:",n),{success:!1,error:n.message}}}const kt=3,ve=8e3;let ke=null,ne=!1,T=null;function Et(){if(document.getElementById("sync-status-pill"))return;const t=document.createElement("div");t.id="sync-status-pill",t.style.cssText=`
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        transition: all 0.4s ease;
        opacity: 0;
        pointer-events: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    `,document.body.appendChild(t),T=t}function F(t,e=0){if(!T)return;const n={synced:{bg:"#dcfce7",color:"#15803d",border:"1px solid #bbf7d0",icon:"●",label:"All Synced",opacity:"1"},pending:{bg:"#fef9c3",color:"#854d0e",border:"1px solid #fde68a",icon:"⏳",label:`${e} Pending`,opacity:"1"},syncing:{bg:"#dbeafe",color:"#1d4ed8",border:"1px solid #bfdbfe",icon:"↑",label:"Syncing...",opacity:"1"},offline:{bg:"#fee2e2",color:"#b91c1c",border:"1px solid #fecaca",icon:"✕",label:"Offline – data saved locally",opacity:"1"}},r=n[t]||n.synced;Object.assign(T.style,{background:r.bg,color:r.color,border:r.border,opacity:r.opacity}),T.innerHTML=`<span>${r.icon}</span><span>${r.label}</span>`,t==="synced"&&setTimeout(()=>{T&&(T.style.opacity="0")},4e3)}async function Lt(t){return await St(t)}async function St(t){const e={method:t.method};let n=t.endpoint;t.method==="PATCH"?n=`${t.endpoint}?${new URLSearchParams(t.payload).toString()}`:t.method!=="GET"&&(e.body=JSON.stringify(t.payload));const r=await A(n,e);if(!r.success)throw new Error(r.error||"Failed to sync with remote server");return V.debug("[Sync] Remote ack",{method:t.method,endpoint:n,success:!0}),r.data||{success:!0}}async function J(){if(ne)return;if(!navigator.onLine){F("offline");return}const t=await Ve();if(t.length===0)return;ne=!0,F("syncing",t.length);let e=0,n=0;for(const o of t){if((o.attempts||0)>=kt){await be(o.queueId,"failed"),n++;continue}try{V.debug("[Sync] Pushing",{queueId:o.queueId,method:o.method,endpoint:o.endpoint,payloadKeys:o.payload?Object.keys(o.payload):[]});const s=await Lt(o);if(o.method==="POST"&&o.endpoint==="api/beneficiaries.php"&&o.payload&&o.payload._tempId&&s&&s.success&&s.id){const a=s.id,l=o.payload._tempId;try{await Je(l);const p={...o.payload,id:a};delete p._tempId,await Be(p),V.debug("[Sync] Upgraded temp id",{tempId:l,realId:a})}catch(p){V.warn("[Sync] Failed upgrading temp id",p?.message||p)}}await Ke(o.queueId),e++,console.log(`[Sync] ✓ Pushed ${o.method} ${o.endpoint} (queueId: ${o.queueId})`)}catch(s){console.warn(`[Sync] ✗ Failed ${o.method} ${o.endpoint}:`,s.message),await be(o.queueId,"pending",{lastError:s.message}),n++}}ne=!1;const r=await Ze();r===0?F("synced"):F("pending",r),console.log(`[Sync] Batch complete. ✓ ${e} synced, ✗ ${n} failed. ${r} remaining.`),e>0&&window.dispatchEvent(new CustomEvent("dataSynced",{detail:{count:e}}))}function It(){ke||(J(),ke=setInterval(()=>{J()},ve),window.addEventListener("online",()=>{console.log("[Sync] Back online — flushing queue immediately"),F("syncing"),J()}),window.addEventListener("offline",()=>{console.log("[Sync] Gone offline"),F("offline")}),console.log(`[Sync] Worker started (interval: ${ve}ms)`))}function Ee(t){if(!t||t==="N/A")return"N/A";const e=t.split("/");if(e.length===3){const n=parseInt(e[0]),r=e[1],o=e[2],s=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];if(n>=1&&n<=12)return`${s[n-1]} ${r.padStart(2,"0")}, ${o}`}return t.toUpperCase()}let y=[],oe=null;const Ct="ldn_current_page";let m=_t();const R=10;let Te=null,ce=!0,Le=parseInt(localStorage.getItem("ldn_last_supabase_fetch")||"0");const Dt=300*1e3;let se={},Se={},Ie={},L=localStorage.getItem("ldn_status_filter")||"ONGOING",E=localStorage.getItem("ldn_year_filter")||"ALL",C=localStorage.getItem("ldn_office_filter")||"ALL";const Fe="ldn_filter_mode",Re="ldn_filter_mode",ge="ONGOING",me="ALL";let w=(localStorage.getItem(Re)||"OFF")==="ON";function _t(){const t=Number.parseInt(new URLSearchParams(window.location.search).get("page")||"1",10);return Number.isFinite(t)&&t>0?t:1}function B(t){sessionStorage.setItem(Ct,String(t));const e=new URL(window.location.href);t>1?e.searchParams.set("page",String(t)):e.searchParams.delete("page"),window.history.replaceState({},"",e)}function At(t){const n=`; ${document.cookie}`.match(new RegExp(`;\\s*${t}=([^;]+)`));return n?decodeURIComponent(n[1]):null}function Bt(t,e,n=30){const r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3),document.cookie=`${t}=${encodeURIComponent(e)};expires=${r.toUTCString()};path=/`}const Ce=At(Fe);Ce&&(w=Ce==="ON");function Pe(){let t=y;w&&(L!=="ALL"&&(t=t.filter(r=>(r.remarks||"UNKNOWN").toUpperCase()===L)),E!=="ALL"&&(t=t.filter(r=>{const o=r.startDate||r.createdAt;if(!o)return!1;const s=new Date(o);return isNaN(s.getTime())?!1:s.getFullYear().toString()===E})),C!=="ALL"&&(t=t.filter(r=>(r.office||"").toUpperCase().includes(C.toUpperCase()))));const e=document.getElementById("table-search"),n=e?e.value.toLowerCase().trim():"";return n!==""&&(t=t.filter(r=>r.name?.toLowerCase().includes(n)||!1||r.id?.toLowerCase().includes(n)||!1||r.contact?.toLowerCase().includes(n)||!1||r.office?.toLowerCase().includes(n)||!1||r.remarks?.toLowerCase().includes(n)||!1||r.designation?.toLowerCase().includes(n)||!1||r.address?.toLowerCase().includes(n)||!1||r.education?.toLowerCase().includes(n)||!1)),w?t:qe(t)}const De=1,$t={ONGOING:0,EXPIRED:1};function _e(t){const e=$t[(t||"").toUpperCase()];return e===void 0?2:e}function qe(t){return[...t].sort((e,n)=>{const r=Number(e.officeId)===De?0:1,o=Number(n.officeId)===De?0:1;if(r!==o)return r-o;const s=_e(e.remarks)-_e(n.remarks);return s!==0?s:(e.name||"").localeCompare(n.name||"")})}function Nt(t,e){const n=[...t];switch(e){case"name_asc":n.sort((r,o)=>r.name.localeCompare(o.name));break;case"name_desc":n.sort((r,o)=>o.name.localeCompare(r.name));break;case"office":n.sort((r,o)=>(r.office||"").localeCompare(o.office||""));break;case"remarks":n.sort((r,o)=>(r.remarks||"").localeCompare(o.remarks||""));break;case"education":n.sort((r,o)=>(r.education||"").localeCompare(o.education||""));break;case"work":n.sort((r,o)=>(r.designation||"").localeCompare(o.designation||""));break;case"address":n.sort((r,o)=>(r.address||"").localeCompare(o.address||""));break;default:return qe(n)}return n}function de(){if(!w)return;const t=document.getElementById("filter-status"),e=document.getElementById("filter-year");t&&(L=t.value,localStorage.setItem("ldn_status_filter",L)),e&&(E=e.value,localStorage.setItem("ldn_year_filter",E)),m=1,B(m),I();const n=document.getElementById("filter-dropdown");n&&!n.classList.contains("hidden")&&n.classList.add("hidden")}function M(){const t=document.getElementById("filter-status"),e=document.getElementById("filter-year");t&&(t.value=w?L:ge),e&&(e.value=w?E:me)}function Q(t){w=t;const e=t?"ON":"OFF";localStorage.setItem(Re,e),Bt(Fe,e,30)}function U(){const t=document.getElementById("apply-filters-button");t&&(t.textContent=`Filter Mode: ${w?"ON":"OFF"}`,t.setAttribute("aria-pressed",w?"true":"false"),t.classList.remove("bg-blue-700","hover:bg-royal-blue","bg-royal-blue","hover:bg-blue-700"),w?t.classList.add("bg-royal-blue","hover:bg-blue-700"):t.classList.add("bg-blue-700","hover:bg-royal-blue"))}function j(){const t=document.getElementById("filter-status"),e=document.getElementById("filter-year");t&&(t.disabled=!w),e&&(e.disabled=!w)}function Ot(){const t=!w;if(Q(t),!t)L=ge,E=me,localStorage.setItem("ldn_status_filter",L),localStorage.setItem("ldn_year_filter",E);else{const e=document.getElementById("filter-status"),n=document.getElementById("filter-year");e&&(L=e.value),n&&(E=n.value),localStorage.setItem("ldn_status_filter",L),localStorage.setItem("ldn_year_filter",E)}M(),j(),U(),q(),m=1,I()}function Ae(){const t=document.getElementById("filter-year");if(!t)return;const e=[...new Set(y.map(r=>{const o=r.startDate||r.createdAt;if(!o)return null;const s=new Date(o);return isNaN(s.getTime())?null:s.getFullYear().toString()}).filter(r=>r))].sort((r,o)=>o-r);let n='<option value="ALL">All Years</option>';e.forEach(r=>{n+=`<option value="${r}">Year ${r}</option>`}),t.innerHTML=n,t.value=E}async function P(t=!1){let e=await $e();if(e.length>0&&e[0].officeId===void 0&&(await we([]),e=[],t=!0),e.length>0){y=e,ue(y);const o=y.some(a=>!a.startDateFormatted&&!a.startDate||!a.endDateFormatted&&!a.endDate);window.__ldn_hasMissingDates=o,oe=te(y),Ae(),M();const s=localStorage.getItem("ldn_sort_preference");pe(s||"name_asc",!1),console.log(`[Offline-First] Rendered ${e.length} records from local cache`)}else{const o=document.getElementById("beneficiary-table-body");if(o){const s=l=>`
                <div class="flex items-center justify-between py-3">
                    ${l.map(p=>`<div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full ${p}"></div>`).join("")}
                </div>`,a=[["w-16","w-40","w-20","w-16","w-24","w-14","w-10"],["w-20","w-32","w-16","w-20","w-20","w-12","w-10"],["w-14","w-44","w-18","w-14","w-28","w-16","w-10"],["w-18","w-36","w-20","w-18","w-20","w-14","w-10"],["w-16","w-40","w-14","w-16","w-24","w-12","w-10"],["w-20","w-28","w-18","w-20","w-20","w-16","w-10"],["w-14","w-44","w-16","w-14","w-28","w-14","w-10"],["w-18","w-32","w-20","w-18","w-20","w-12","w-10"]];o.innerHTML=`
                <tr>
                    <td colspan="7" class="px-6 pt-2 pb-1">
                        <div role="status" class="animate-pulse">
                            ${a.map(s).join("")}
                            <span class="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>`,o.setAttribute("aria-busy","true")}}const n=await Qe(),r=30*1e3;if(!t&&n<r&&e.length>0){if(!(window.__ldn_hasMissingDates===!0)){console.log(`[Offline-First] Cache is fresh (${Math.round(n/1e3)}s old), skipping remote fetch`),ce=!1;return}console.log("[Offline-First] Cache fresh but missing dates detected — refreshing remote")}try{let o=[];if(Ne()&&_){const l=Date.now();if(!t&&l-Le<Dt)console.log("[Offline-First] Throttling Supabase fetch (using local cache)");else{if(console.log("[Offline-First] Fetching directly from Supabase (Optimized)..."),Object.keys(se).length===0)try{const[{data:i},{data:f},{data:d},{data:g}]=await Promise.all([_.from("genders").select("gender_id, gender_name"),_.from("status_types").select("status_id, status_name"),_.from("offices").select("*").limit(500),_.from("office_locations").select("id, office_id, location").limit(500)]);if(i&&i.forEach(x=>se[x.gender_id]=x.gender_name),f&&f.forEach(x=>Se[x.status_id]=x.status_name),d){const x={};g&&g.forEach(v=>{x[v.office_id]||(x[v.office_id]=[]),x[v.office_id].push(v.location||"")}),d.forEach(v=>{const z=v.office_name||v.office||v.name||"",G=x[v.id]||[];Ie[v.id]=G.length===1?`${z} - ${G[0]}`:z})}}catch(i){console.warn("Mapping fetch failed:",i)}const{data:p,error:c}=await _.from("beneficiaries").select(`
                        gip_id,
                        full_name,
                        contact_number,
                        address,
                        birthday,
                        age,
                        education,
                        start_date,
                        end_date,
                        series_number,
                        designation,
                        replacement_notes,
                        is_archived,
                        created_at,
                        gender_id,
                        office_id,
                        status_id
                    `).eq("is_archived",!1).order("created_at",{ascending:!1});!c&&p?(Le=l,localStorage.setItem("ldn_last_supabase_fetch",String(l)),o=p.map(i=>({id:i.gip_id,name:i.full_name,contact:i.contact_number,address:i.address,birthday:i.birthday,age:i.age,gender:se[i.gender_id]||(i.gender_id==1?"Male":i.gender_id==2?"Female":"N/A"),education:i.education,startDate:i.start_date,endDate:i.end_date,seriesNo:i.series_number,officeId:i.office_id??null,office:i.office_id&&Ie[i.office_id]||"N/A",designation:i.designation,replacement:i.replacement_notes,remarks:Se[i.status_id]||"UNKNOWN",createdAt:i.created_at}))):c&&console.warn("[Offline-First] Supabase direct fetch failed, falling back to PHP Bridge:",c.message)}}if(o.length===0){const l=await H("api/beneficiaries.php");if(l.success&&l.data?.success&&l.data?.beneficiaries)o=l.data.beneficiaries;else throw new Error(l.error||"Fetch failed from API")}const s=te(e),a=te(o);if(s!==a){await we(o),y=o,ue(y),Ae(),M();const l=localStorage.getItem("ldn_sort_preference");pe(l||"name_asc",!1),oe=a,console.log(`[Offline-First] Remote data synced and rendered (${o.length} records)`)}else console.log("[Offline-First] Remote data matches cache — no re-render needed"),oe=a}catch(o){console.warn("[Offline-First] Remote fetch failed (using local cache):",o.message)}finally{ce=!1}}function ue(t){t.forEach(e=>{typeof e.remarks=="string"&&(e.remarks=e.remarks.trim().toUpperCase())})}function Mt(){const t=document.getElementById("office-filter-dropdown");if(!t)return;let e=[];const n=async()=>{if(e.length>0)return e;try{const o=await H("api/beneficiaries.php?get_offices_advanced=1");o.success&&o.data?.success&&Array.isArray(o.data.offices)&&(e=o.data.offices)}catch(o){console.error("Filter office fetch failed:",o)}return e},r=async(o="OFFICES",s=null,a="")=>{if(o==="OFFICES"){const p=(await n()).filter(i=>i.office.toLowerCase().includes(a.toLowerCase()));t.innerHTML=`
                <div class="px-4 py-3 bg-blue-50/50 rounded-t-xl border-b border-gray-100 flex items-center justify-between">
                    <span class="block text-[0.625rem] font-black text-royal-blue uppercase tracking-wider">OFFICE CODE</span>
                </div>
                <div class="p-2">
                    <div class="relative mb-2">
                        <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </div>
                        <input type="text" id="office-filter-search" placeholder="Search offices..." dir="ltr"
                            class="w-full pl-8 pr-3 py-1.5 text-[0.625rem] font-bold bg-gray-50 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 rounded-lg outline-none"
                            value="${a}">
                    </div>
                    <ul class="max-h-60 overflow-y-auto py-1 text-xs font-bold text-gray-700 scrollbar-hide">
                        ${p.length>0?p.map(i=>{const f=parseInt(i.location_count||0)>0;return`
                                <li class="mb-0.5">
                                    <button class="office-filter-opt flex items-center justify-between w-full px-4 py-2 rounded-lg transition-colors group cursor-pointer ${f?"hover:bg-blue-50 hover:text-royal-blue":"text-gray-400 hover:bg-gray-100 hover:text-gray-600"}"
                                        data-id="${i.id}" data-name="${i.office}" data-has-locations="${f}">
                                        <span class="truncate">${i.office}</span>
                                        ${f?'<svg class="w-3 h-3 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>':'<svg class="w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>'}
                                    </button>
                                </li>
                            `}).join(""):'<li class="px-4 py-3 text-center text-gray-400 italic">No offices found.</li>'}
                    </ul>
                </div>
            `;const c=t.querySelector("#office-filter-search");c.addEventListener("input",()=>r("OFFICES",null,c.value)),c.addEventListener("click",i=>i.stopPropagation()),setTimeout(()=>c.focus(),50),t.querySelectorAll(".office-filter-opt").forEach(i=>{i.addEventListener("click",f=>{f.stopPropagation(),i.dataset.hasLocations==="true"?r("LOCATIONS",{id:i.dataset.id,name:i.dataset.name}):(window.setOfficeFilter(i.dataset.name),t.classList.add("hidden"))})})}else{t.innerHTML=`
                <div class="px-4 py-3 bg-blue-50/50 rounded-t-xl border-b border-gray-100 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                         <div class="p-1 rounded-md bg-green-500/10 text-green-600">
                            <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <span class="block text-[0.625rem] font-black text-royal-blue uppercase tracking-wider">OFFICE LOCATION</span>
                    </div>
                    <button id="back-to-offices-filter" class="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                    </button>
                </div>
                <div class="p-2">
                    <div class="relative mb-2">
                        <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </div>
                        <input type="text" id="loc-filter-search" placeholder="Search in ${s.name}..." 
                            class="w-full pl-8 pr-3 py-1.5 text-[0.625rem] font-bold bg-gray-50 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 rounded-lg outline-none">
                    </div>
                    <ul id="loc-filter-list" class="max-h-60 overflow-y-auto py-1 text-xs font-bold text-gray-700 scrollbar-hide">
                        <li class="px-4 py-4 text-center text-gray-400 animate-pulse">Fetching...</li>
                    </ul>
                </div>
            `;const l=t.querySelector("#loc-filter-list"),p=t.querySelector("#loc-filter-search");let c=[];try{const f=await H(`api/beneficiaries.php?get_office_locations=1&office_id=${s.id}`);f.success&&f.data?.success&&Array.isArray(f.data.locations)&&(c=f.data.locations)}catch(f){console.error("Filter locations fetch failed:",f)}const i=(f="")=>{const d=c.filter(g=>g.location.toLowerCase().includes(f.toLowerCase()));l.innerHTML=d.length>0?d.map(g=>`
                    <li class="mb-0.5">
                        <button class="loc-filter-opt group/loc flex items-center w-full px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-royal-blue transition-colors cursor-pointer" data-location="${g.location}">
                            <div class="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/loc:bg-blue-500 mr-3 shrink-0"></div>
                            <span class="truncate">${g.location}</span>
                        </button>
                    </li>
                `).join(""):'<li class="px-4 py-3 text-center text-gray-400 italic">No locations found.</li>',l.querySelectorAll(".loc-filter-opt").forEach(g=>{g.addEventListener("click",()=>{window.setOfficeFilter(`${s.name} - ${g.dataset.location}`)})})};i(),setTimeout(()=>p.focus(),50),p.addEventListener("input",()=>i(p.value)),p.addEventListener("click",f=>f.stopPropagation()),t.querySelector("#back-to-offices-filter").addEventListener("click",f=>{f.stopPropagation(),r("OFFICES")})}};r(),q()}function Tt(){const t=document.getElementById("office-quick-filter-btn"),e=document.getElementById("office-quick-filter-panel"),n=document.getElementById("office-quick-filter-close"),r=document.getElementById("office-qf-back"),o=document.getElementById("office-qf-label"),s=document.getElementById("office-qf-scroll"),a=document.getElementById("office-qf-list"),l=document.getElementById("office-qf-arrow-left"),p=document.getElementById("office-qf-arrow-right");if(!t||!e||!a||!s)return;let c=!1,i=[],f={},d=!1;const g=200,x=()=>{if(!l||!p)return;const{scrollLeft:h,scrollWidth:b,clientWidth:$}=s;l.classList.toggle("hidden",h<=2),p.classList.toggle("hidden",h+$>=b-2)};s.addEventListener("scroll",x,{passive:!0}),l&&l.addEventListener("click",()=>{s.scrollBy({left:-g,behavior:"smooth"})}),p&&p.addEventListener("click",()=>{s.scrollBy({left:g,behavior:"smooth"})});const v=async()=>{if(!d){d=!0;try{const h=await H("api/beneficiaries.php?get_offices_advanced=1");if(h.success&&h.data?.success&&Array.isArray(h.data.offices)&&(i=h.data.offices,f=h.data.locations_by_office||{},!localStorage.getItem("ldn_office_filter"))){const $=i.find(D=>D.office.toUpperCase().includes("LDNPFO"));$&&(C=$.office,localStorage.setItem("ldn_office_filter",C),w||(Q(!0),M(),j(),U()),q(),m=1,I())}}catch(h){console.error("QF prefetch failed:",h),d=!1}}},z=async()=>(await v(),i),G=async h=>(await v(),f[h]||[]),Ue=()=>{c=!0,e.style.pointerEvents="auto",e.style.maxHeight="80px",e.style.opacity="1",t.classList.add("bg-violet-50","text-violet-700","border-violet-200")},W=()=>{c=!1,e.style.maxHeight="0",e.style.opacity="0",e.style.pointerEvents="none",t.classList.remove("bg-violet-50","text-violet-700","border-violet-200"),setTimeout(()=>{c||ee()},350)},ye=()=>{a.innerHTML=[1,2,3,4,5].map(()=>'<div class="h-7 w-20 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse shrink-0"></div>').join(""),s.scrollLeft=0,setTimeout(x,50)},Y=()=>{s.scrollLeft=0,setTimeout(x,60)},ee=async()=>{o.textContent="Filter by Office",r.classList.add("hidden"),r.classList.remove("flex"),ye();const h=await z();if(!h.length){a.innerHTML='<span class="text-xs text-gray-400 italic px-2">No offices found.</span>',Y();return}a.innerHTML=h.map(b=>`<button class="office-qf-opt shrink-0 px-3 py-1 rounded-full text-[0.6875rem] font-bold border transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95 ${fe(b.office)}"
                data-id="${b.id}" data-name="${b.office}" data-has-locations="${parseInt(b.location_count||0)>0}">
                ${b.office}
            </button>`).join(""),a.querySelectorAll(".office-qf-opt").forEach(b=>{b.addEventListener("click",()=>{b.dataset.hasLocations==="true"?je({id:b.dataset.id,name:b.dataset.name}):(window.setOfficeFilter(b.dataset.name),W())})}),Y()},je=async h=>{o.textContent=h.name,r.classList.remove("hidden"),r.classList.add("flex"),ye();const b=await G(h.id);if(!b.length){a.innerHTML='<span class="text-xs text-gray-400 italic px-2">No locations found.</span>',Y();return}const $=fe(h.name);a.innerHTML=b.map(D=>`
            <button class="loc-qf-opt shrink-0 px-3 py-1 rounded-full text-[0.6875rem] font-bold border transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95 ${$}"
                data-location="${D.location}" data-office="${h.name}">
                📍 ${D.location}
            </button>
        `).join(""),a.querySelectorAll(".loc-qf-opt").forEach(D=>{D.addEventListener("click",()=>{window.setOfficeFilter(`${D.dataset.office} - ${D.dataset.location}`),W()})}),Y()};t.addEventListener("click",()=>{if(c){W();return}Ue(),ee()}),n.addEventListener("click",()=>W()),r.addEventListener("click",()=>ee()),v()}function q(){const t=document.getElementById("ldn-header-prefix"),e=document.getElementById("clear-office-filter-btn");if(!t)return;t.textContent=C==="ALL"?"ALL BENEFICIARIES":C;const n=w||C!=="ALL";e&&(e.classList.toggle("hidden",!n),e.classList.toggle("flex",n))}window.setOfficeFilter=t=>{C=t,localStorage.setItem("ldn_office_filter",t),w||(Q(!0),M(),j(),U()),q(),m=1,I();const e=document.getElementById("office-filter-dropdown"),n=document.getElementById("sort-dropdown");e&&e.classList.add("hidden"),n&&n.classList.add("hidden")};window.clearOfficeFilter=async()=>{L=ge,E=me,C="ALL",localStorage.setItem("ldn_status_filter",L),localStorage.setItem("ldn_year_filter",E),localStorage.setItem("ldn_office_filter","ALL"),localStorage.setItem("ldn_sort_preference","name_asc"),Q(!1),M(),j(),U(),q();const t=document.getElementById("table-search");t&&(t.value="");const e=document.getElementById("office-filter-dropdown"),n=document.getElementById("sort-dropdown"),r=document.getElementById("filter-dropdown");e&&e.classList.add("hidden"),n&&n.classList.add("hidden"),r&&r.classList.add("hidden"),m=1,B(m),await P(!0),I()};function Ft(){q()}function Rt(){P(),Ft(),Wt(),qt(),Mt(),Tt(),Pt();const t=document.getElementById("ldn-export-logs-btn");t&&t.addEventListener("click",()=>{rt(y)}),window.addEventListener("dataSynced",()=>{P(!0)})}function Pt(){!Ne()||!_||(console.log("[Supabase Realtime] Subscribing to beneficiaries..."),_.channel("beneficiaries_changes").on("postgres_changes",{event:"*",schema:"public",table:"beneficiaries"},async t=>{if(console.log("[Supabase Realtime] Change detected:",t.eventType),await P(!0),t.eventType==="INSERT")N.fire({toast:!0,position:"top-end",icon:"success",title:"New Beneficiary Added",showConfirmButton:!1,timer:3e3,timerProgressBar:!0});else if(t.eventType==="UPDATE"){if(t.new.is_archived===!0&&t.old.is_archived===!1)return;N.fire({toast:!0,position:"top-end",icon:"info",title:"Record Updated",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})}}).subscribe(t=>{t==="SUBSCRIBED"&&console.log("[Supabase Realtime] Listening for live changes! ⚡")}))}function qt(){const t=document.getElementById("apply-filters-button");if(!t)return;M(),j(),U(),t.addEventListener("click",Ot);const e=document.getElementById("filter-status"),n=document.getElementById("filter-year");e&&e.addEventListener("change",de),n&&n.addEventListener("change",de)}function I(t=null){t||(t=Pe());const e=document.getElementById("beneficiary-table-body");if(!e)return;if(Te=t,t.length===0){e.innerHTML=`
            <tr>
                <td colspan="7" class="px-6 py-10 text-center text-gray-400 font-medium">
                    <div class="flex flex-col items-center gap-2">
                        <svg class="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>No beneficiaries found matching your search.</span>
                    </div>
                </td>
            </tr>
        `;const d=document.getElementById("pagination-controls");d&&(d.innerHTML="");return}const n=t.length,r=Math.ceil(n/R),o=Math.min(Math.max(m,1),r||1);ce&&o!==m&&m>1||(m=o,B(m));const a=(o-1)*R,l=a+R,p=t.slice(a,l),c=document.getElementById("table-search"),i=c?c.value.toLowerCase().trim():"",f=i!==""&&/\d/.test(i);e.innerHTML=p.map(d=>`
        <tr class="bg-blue-50 border-b border-blue-100 hover:bg-blue-100 transition-colors group cursor-pointer"
            onclick='viewBeneficiary(${JSON.stringify(d)})'>
            <th scope="row" class="px-4 py-3 font-medium text-heading whitespace-nowrap font-mono text-xs text-center">
                ${d.id}
            </th>
            <td class="px-4 py-3 font-bold text-royal-blue text-center">
                <div class="flex items-center justify-center gap-1.5 flex-wrap">
                    <span class="text-xs sm:text-sm font-black leading-tight">${d.name}</span>
                    ${f&&d.contact?`
                        <span class="inline-flex items-center bg-royal-blue text-white text-[10px] px-2 py-0.5 rounded font-black gap-1 animate-pulse shadow-sm" title="Contact No: ${d.contact}">
                            <svg class="w-2.5 h-2.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>${d.contact}</span>
                        </span>
                    `:""}
                </div>
            </td>
            <td class="px-4 py-3 text-center">
                <div class="flex justify-center">
                    <span class="${fe(d.office)} text-[0.625rem] sm:text-xs font-bold px-2.5 py-0.5 rounded whitespace-nowrap">
                        ${d.office||"N/A"}
                    </span>
                </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${d.startDateFormatted||d.startDate?"font-black text-royal-blue uppercase tracking-tight":"font-bold text-gray-300 italic"}">${Ee(d.startDateFormatted||d.startDate)}</span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${d.endDateFormatted||d.endDate?"font-black text-philippine-red uppercase tracking-tight":"font-bold text-gray-300 italic"}">${Ee(d.endDateFormatted||d.endDate)}</span>
            </td>
            <td class="px-4 py-3 text-center">
                <span class="${jt(d.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
                    ${d.remarks||"N/A"}
                </span>
            </td>
            <td class="px-4 py-3 flex gap-2">
                <button type="button"
                    class="font-medium text-royal-blue hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Edit Details" onclick='event.stopPropagation(); editBeneficiary(${JSON.stringify(d)})'>
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="font-medium text-philippine-red hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Archive" onclick="event.stopPropagation(); archiveRecord('${d.id}')">
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                </button>
            </td>
        </tr>
    `).join(""),Ht(n,r,o),Xe()}function Ht(t,e,n=m){const r=document.getElementById("pagination-controls");if(!r)return;if(t<=R){r.innerHTML=`
            <span class="text-xs font-bold text-gray-500">Showing all ${t} results</span>
            <div></div>
        `;return}const o=(n-1)*R+1,s=Math.min(n*R,t);r.innerHTML=`
        <span class="text-xs font-bold text-gray-500 shrink-0">
            Showing <span class="text-royal-blue">${o}–${s}</span> of <span class="text-royal-blue">${t}</span>
        </span>
        <div class="flex items-center gap-1 flex-wrap justify-end">
            <!-- Previous -->
            <button onclick="changePage(${n-1})" ${n===1?"disabled":""}
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>

            ${Ut(n,e)}

            <!-- Next -->
            <button onclick="changePage(${n+1})" ${n===e?"disabled":""}
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>

            <!-- Go To -->
            <div class="flex items-center gap-1 ml-1 shrink-0">
                <span class="text-[0.625rem] sm:text-xs font-bold text-gray-400 hidden sm:inline">Go to</span>
                <input type="number" id="goto-page-input" min="1" max="${e}" placeholder="—"
                    class="w-14 h-8 text-center text-xs font-black rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-800 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all shadow-sm"
                    aria-label="Go to page"
                    onkeydown="if(event.key==='Enter'){const v=parseInt(this.value);if(v){window.changePage(Math.min(${e},Math.max(1,v)));this.value='';this.blur();}}"
                    >
                <button
                    onclick="const inp=document.getElementById('goto-page-input');const v=parseInt(inp.value);if(v){window.changePage(Math.min(${e},Math.max(1,v)));inp.value='';inp.blur();}"
                    class="h-8 px-3 text-xs font-black bg-royal-blue text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all cursor-pointer shrink-0">
                    Go
                </button>
            </div>
        </div>
    `}function Ut(t,e){const r=Math.min(4,e);let o=Math.max(1,t-1),s=o+r-1;s>e&&(s=e,o=Math.max(1,s-r+1));let a="";for(let l=o;l<=s;l++)a+=`
            <button onclick="changePage(${l})"
                class="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-black transition-all cursor-pointer
                ${l===t?"bg-royal-blue text-white shadow-md shadow-royal-blue/20":"bg-white text-gray-600 hover:bg-royal-blue/10 hover:text-royal-blue border border-gray-100"}">
                ${l}
            </button>`;return a}window.changePage=t=>{m=t,B(m),I(Te)};function fe(t){if(!t||t==="N/A")return"bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white";const e=t.toUpperCase();if(e.includes("LGU"))return/ILIGAN/i.test(t)?"bg-yellow-400 text-white border border-yellow-500":"bg-yellow-100 text-yellow-700 border border-yellow-200 dark:!text-white";if(e.includes("DOLE"))return"bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white";if(e.includes("DEPED")||e.includes("DEPED"))return"bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white";if(e.includes("DICT"))return"bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white";if(e.includes("DOH"))return"bg-red-100 text-red-700 border border-red-200 dark:!text-white";if(e.includes("DSWD"))return"bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white";if(e.includes("DTI"))return"bg-green-100 text-green-700 border border-green-200 dark:!text-white";if(e.includes("DPWH"))return"bg-stone-100 text-stone-700 border border-stone-200 dark:!text-white";if(e.includes("DILG"))return"bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white";if(e.includes("DOST"))return"bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white";if(e.includes("DENR"))return"bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white";if(e.includes("CHED"))return"bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white";if(e.includes("TESDA"))return"bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white";if(e.includes("DOJ"))return"bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white";if(e.includes("DOT")||e.includes("TOURISM"))return"bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white";if(e.includes("DA")&&!e.includes("DPWH")&&!e.includes("DILG"))return"bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white";if(e.includes("PRC"))return"bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white";if(e.includes("SSS"))return"bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white";if(e.includes("GSIS"))return"bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white";if(e.includes("PHIC")||e.includes("PHILHEALTH"))return"bg-blue-200 text-blue-800 border border-blue-300 dark:!text-white";if(e.includes("NBI"))return"bg-zinc-100 text-zinc-700 border border-zinc-200 dark:!text-white";const n=["bg-purple-100 text-purple-700 border border-purple-200","bg-rose-100 text-rose-700 border border-rose-200","bg-amber-100 text-amber-700 border border-amber-200","bg-teal-100 text-teal-700 border border-teal-200","bg-indigo-100 text-indigo-700 border border-indigo-200","bg-lime-100 text-lime-700 border border-lime-200","bg-sky-100 text-sky-700 border border-sky-200","bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200","bg-emerald-100 text-emerald-700 border border-emerald-200","bg-orange-100 text-orange-700 border border-orange-200","bg-pink-100 text-pink-700 border border-pink-200","bg-green-100 text-green-700 border border-green-200","bg-violet-100 text-violet-700 border border-violet-200","bg-cyan-100 text-cyan-700 border border-cyan-200","bg-red-100 text-red-700 border border-red-200"];let r=0;for(let o=0;o<t.length;o++)r=r*31+t.charCodeAt(o)>>>0;return n[r%n.length]+" dark:!text-white"}function jt(t){if(!t)return"bg-gray-100 text-gray-600 border-gray-200";const e=t.toUpperCase();return e==="ONGOING"?"bg-green-100 text-green-700 border-green-200":e==="EXPIRED"?"bg-red-400 text-white border-red-400":e==="RESIGNED"?"bg-[#ce1126] text-white border-[#ce1126]":e==="ABSORBED"?"bg-[#2e7d32] text-white border-[#2e7d32]":"bg-gray-100 text-gray-600 border-gray-200"}function pe(t,e=!0){if(!w){e&&(localStorage.setItem("ldn_sort_preference",t),m=1,B(m)),I(Nt(Pe(),t));const r=document.getElementById("sort-dropdown");r&&!r.classList.contains("hidden")&&r.classList.add("hidden");return}switch(e&&(localStorage.setItem("ldn_sort_preference",t),m=1,B(m)),t){case"name_asc":y.sort((r,o)=>{const s=r.name.localeCompare(o.name);return s!==0?s:new Date(r.createdAt)-new Date(o.createdAt)});break;case"name_desc":y.sort((r,o)=>{const s=o.name.localeCompare(r.name);return s!==0?s:new Date(r.createdAt)-new Date(o.createdAt)});break;case"office":y.sort((r,o)=>(r.office||"").localeCompare(o.office||""));break;case"remarks":y.sort((r,o)=>(r.remarks||"").localeCompare(o.remarks||""));break;case"education":y.sort((r,o)=>(r.education||"").localeCompare(o.education||""));break;case"work":y.sort((r,o)=>(r.designation||"").localeCompare(o.designation||""));break;case"address":y.sort((r,o)=>(r.address||"").localeCompare(o.address||""));break}I();const n=document.getElementById("sort-dropdown");n&&!n.classList.contains("hidden")&&n.classList.add("hidden")}async function zt(t){const e={...t};["name","address","education","designation","designatedBeneficiary","relationshipToAssured"].forEach(a=>{e[a]&&typeof e[a]=="string"&&(e[a]=e[a].toUpperCase().trim())});const r=a=>typeof a=="string"&&a.startsWith("temp_"),s=!!e.id&&!r(e.id)?"PUT":"POST";!e.id&&!e.gip_id&&(e._tempId=`temp_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,e.id=e._tempId);try{await Be(e),y=await $e(),ue(y),I(),console.log(`[Offline-First] ✓ Saved "${e.name}" to local cache`)}catch(a){console.error("[Offline-First] Local save failed:",a)}s==="POST"&&vt(`New user <strong>${e.name}</strong> added. pending "Required Documents" for review.`,"success");try{await tt(s,"api/beneficiaries.php",e),J()}catch(a){console.error("[Offline-First] Failed to enqueue sync:",a)}return!0}async function Gt(t){if(!(await N.fire({title:'<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',html:`
            <div class="py-4">
                <p class="text-sm font-medium text-gray-500">Are you sure you want to archive this record?</p>
                <p class="text-[0.625rem] font-black text-philippine-red mt-1 uppercase tracking-widest">ID: ${t}</p>
            </div>
        `,showCancelButton:!0,confirmButtonText:`
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                <span>YES</span>
            </div>
        `,cancelButtonText:`
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>NO</span>
            </div>
        `,reverseButtons:!0,customClass:{container:"font-montserrat",popup:"rounded-[1.5rem] shadow-2xl border border-gray-100",confirmButton:"bg-green-50 text-green-700 hover:bg-green-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-green-200 shadow-sm mx-2 cursor-pointer",cancelButton:"bg-red-50 text-red-700 hover:bg-red-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-red-200 shadow-sm mx-2 cursor-pointer"},buttonsStyling:!1})).isConfirmed)return!1;try{const n=await et("api/beneficiaries.php",{id:t,action:"archive"});if(n.success&&n.data?.success)return N.fire({toast:!0,position:"top-end",icon:"success",title:"Record Archived",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}),await P(),!0;throw new Error(data.error||"Failed to archive")}catch(n){return console.error("Error archiving beneficiary:",n),N.fire({icon:"error",title:"Archive Failed",text:n.message}),!1}}function Wt(){const t=document.getElementById("table-search"),e=document.getElementById("clear-search-btn");t&&(t.addEventListener("input",n=>{m=1,B(m),I(),e&&e.classList.toggle("hidden",t.value.length===0)}),e&&e.addEventListener("click",()=>{t.value="",m=1,B(m),I(),e.classList.add("hidden"),t.focus()}),window.addEventListener("keydown",n=>{n.key==="/"&&document.activeElement!==t&&(n.preventDefault(),t.focus())}))}window.sortData=pe;window.archiveRecord=Gt;window.addBeneficiaryData=zt;window.applyFilters=de;let Z=[],k=["id","name","age","office","position","status"],u={office:"ALL",location:"ALL",remarks:"ALL",gender:"ALL",ageGroup:"ALL",year:"ALL",search:"",sort:"name",section:"ALL",columns:["id","name","age","office","position","status"],preparedBy:localStorage.getItem("ldn_export_prepared")||"",approvedBy:localStorage.getItem("ldn_export_approved")||""};async function Yt(){Vt(),await Kt()}function Vt(){const t=localStorage.getItem("ldn_export_config");if(t)try{const e=JSON.parse(t);u={...u,...e},k=u.columns}catch(e){console.error("Error loading saved export config",e)}}function Jt(){localStorage.setItem("ldn_export_config",JSON.stringify(u))}async function Kt(){try{const t=await H("api/beneficiaries.php?all=true");if(!t.success)throw new Error(t.error||"Failed to fetch beneficiaries");const e=t.data||{};Z=Array.isArray(e.beneficiaries)?e.beneficiaries:e.data?.success&&Array.isArray(e.data.beneficiaries)?e.data.beneficiaries:[],window.getExportYears=()=>[...new Set(Z.map(r=>{const o=new Date(r.startDate||r.createdAt||"");return isNaN(o.getTime())?null:o.getFullYear().toString()}).filter(Boolean))].sort((r,o)=>o-r),window.handleFilterUpdate(u)}catch(t){console.error("Error loading data for export",t);const e=document.getElementById("web-table-body");e&&(e.innerHTML=`<tr><td colspan="${k.length}" class="px-6 py-12 text-center text-red-500 font-bold uppercase text-[0.625rem] tracking-widest">Failed to load data</td></tr>`),N.fire({toast:!0,position:"top-end",icon:"error",title:"Failed loading export data",showConfirmButton:!1,timer:2800})}}window.handleFilterUpdate=function(t){u={...u,...t},t.columns&&(k=t.columns,u.columns=t.columns),t.preparedBy!==void 0&&(u.preparedBy=t.preparedBy),t.approvedBy!==void 0&&(u.approvedBy=t.approvedBy),Jt();let e=[...Z];u.search&&(e=e.filter(n=>(n.name||"").toLowerCase().includes(u.search)||(n.id||"").toLowerCase().includes(u.search))),u.office!=="ALL"&&(e=e.filter(n=>(n.office||"").toUpperCase().includes(u.office.toUpperCase()))),u.location&&u.location!=="ALL"&&(e=e.filter(n=>(n.office||"").toUpperCase().includes(u.location.toUpperCase()))),u.year&&u.year!=="ALL"&&(e=e.filter(n=>{const r=new Date(n.startDate||n.createdAt||"");return!isNaN(r.getTime())&&r.getFullYear().toString()===u.year})),u.gender&&u.gender!=="ALL"&&(e=e.filter(n=>Zt(n.gender)===u.gender)),u.remarks&&u.remarks!=="ALL"&&(e=e.filter(n=>(n.remarks||"").toUpperCase()===u.remarks.toUpperCase())),u.ageGroup&&u.ageGroup!=="ALL"&&(e=e.filter(n=>Xt(n.age)===u.ageGroup)),u.section==="ACTIVE"?e=e.filter(n=>!n.isArchived):u.section==="ARCHIVED"&&(e=e.filter(n=>n.isArchived)),u.sort&&e.sort((n,r)=>{switch(u.sort){case"name":return(n.name||"").localeCompare(r.name||"");case"id":return(n.id||"").localeCompare(r.id||"");case"office":return(n.office||"").localeCompare(r.office||"");case"startdate":const o=new Date(n.startDate||0);return new Date(r.startDate||0)-o;default:return 0}}),Qt(e)};window.getExportFilters=()=>u;function Zt(t){const e=String(t||"").trim().toUpperCase();return e==="F"||e==="FEMALE"?"FEMALE":e==="M"||e==="MALE"?"MALE":"UNKNOWN"}function Xt(t){const e=parseInt(t,10);return Number.isNaN(e)?"UNKNOWN":e>=18&&e<=24?"18-24":e>=25&&e<=30?"25-30":e>=31&&e<=40?"31-40":e>=41?"41+":"UNKNOWN"}function Qt(t){tr(t),rr(t);const e=document.getElementById("record-count");e&&(e.textContent=t.length);const n=document.getElementById("print-filter-summary");if(n){const r=[];u.office!=="ALL"&&r.push(`OFFICE: ${u.office}`),u.remarks!=="ALL"&&r.push(`REMARKS: ${u.remarks}`),u.gender!=="ALL"&&r.push(`GENDER: ${u.gender}`),u.ageGroup!=="ALL"&&r.push(`AGE: ${u.ageGroup}`),n.textContent=r.length?r.join(" | "):"FILTER: ALL RECORDS"}window.currentFilteredData=t}window.exportToExcel=function(){const t=window.currentFilteredData||Z,e=k,n=`
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="UTF-8">
            <!--[if gte mso 9]>
            <xml>
                <x:ExcelWorkbook>
                    <x:ExcelWorksheets>
                        <x:ExcelWorksheet>
                            <x:Name>LDN Beneficiaries</x:Name>
                            <x:WorksheetOptions>
                                <x:DisplayGridlines/>
                            </x:WorksheetOptions>
                        </x:ExcelWorksheet>
                    </x:ExcelWorksheets>
                </x:ExcelWorkbook>
            </xml>
            <![endif]-->
            <style>
                .header { background-color: #0046ad; color: #ffffff; font-weight: bold; text-transform: uppercase; border: 1px solid #003080; }
                .cell { border: 1px solid #e5e7eb; padding: 10px; font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; }
                .title { font-size: 18px; font-weight: bold; color: #0046ad; margin-bottom: 20px; }
                .status-ongoing { color: #16a34a; font-weight: bold; }
                .status-absorbed { color: #d97706; font-weight: bold; }
                .status-resigned { color: #64748b; font-weight: bold; }
                .status-expired { color: #dc2626; font-weight: bold; }
                .divider { background-color: #f8fafc; font-weight: bold; color: #475569; text-align: center; }
            </style>
        </head>
        <body>
            <table>
                <tr><td colspan="${e.length}" class="title">DOLE LDNPFO - BENEFICIARY REPORT</td></tr>
                <tr><td colspan="${e.length}" style="color: #64748b; font-size: 10px;">Generated on: ${new Intl.DateTimeFormat("en-PH",{timeZone:"Asia/Manila",dateStyle:"long",timeStyle:"short"}).format(new Date)}</td></tr>
                <tr><td colspan="${e.length}"></td></tr>
                <tr height="40">
                    ${e.map(a=>`<th class="header cell">${he[a]||a.toUpperCase()}</th>`).join("")}
                </tr>
                ${(()=>{let a=null,l="";return[...t].sort((c,i)=>c.isArchived-i.isArchived).forEach(c=>{c.isArchived!==a&&(a=c.isArchived,l+=`<tr><td colspan="${e.length}" class="cell divider">${a?"ARCHIVED RECORDS":"ACTIVE BENEFICIARIES"}</td></tr>`),l+=`<tr>${e.map(i=>{let f=c[i]||"-";return i==="position"&&(f=c.designation||"-"),i==="startdate"&&(f=c.startDateFormatted||c.startDate||"-"),i==="enddate"&&(f=c.endDateFormatted||c.endDate||"-"),i==="status"?(f=c.remarks||"N/A",`<td class="cell ${"status-"+f.toLowerCase()}">${f}</td>`):`<td class="cell">${f}</td>`}).join("")}</tr>`}),l})()}
                <tr><td colspan="${e.length}"></td></tr>
                <tr><td colspan="${e.length}"></td></tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Prepared by:</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Approved by:</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${u.preparedBy||""}</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${u.approvedBy||""}</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                    <td colspan="${Math.max(1,e.length-4)}"></td>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                </tr>
            </table>
        </body>
        </html>
    `,r=new Blob([n],{type:"application/vnd.ms-excel"}),o=window.URL.createObjectURL(r),s=document.createElement("a");s.href=o,s.download=`LDN_RECORDS_${new Date().toISOString().slice(0,10)}.xls`,document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(o),document.body.removeChild(s)};const he={id:"ID NO.",name:"NAME",age:"AGE",office:"OFFICE",position:"DESIGNATION",status:"STATUS",startdate:"START DATE",enddate:"END DATE"};function er(t,e="px-4 py-2.5"){return`
        <tr class="text-[0.6875rem] text-white uppercase bg-royal-blue font-bold tracking-widest text-center">
            ${t.map(n=>{let r="";return n==="name"&&(r=' title="Last Name, First Name, Middle Initial"'),`<th scope="col" class="${e}"${r}>${he[n]||n.toUpperCase()}</th>`}).join("")}
        </tr>
    `}function He(t,e,n=!1){return e.map(r=>{let o=t[r]||"-";if(r==="position"&&(o=t.designation||"-"),r==="startdate"&&(o=t.startDateFormatted||t.startDate||"-"),r==="enddate"&&(o=t.endDateFormatted||t.endDate||"-"),r==="status"&&(o=t.remarks||"N/A"),r==="age"&&(o=t.age||"-"),n){let s="px-3 py-2 border border-gray-200 text-center";return r==="id"&&(s+=" font-mono font-bold"),r==="name"&&(s+=" font-bold text-black uppercase leading-tight text-left px-4"),r==="status"&&(s+=` text-center font-bold uppercase ${{ABSORBED:"text-golden-yellow",RESIGNED:"text-slate-500",EXPIRED:"text-philippine-red",ONGOING:"text-green-600"}[o]||"text-gray-500"}`),(r==="startdate"||r==="enddate")&&(s+=" text-center font-mono text-[0.5625rem]"),`<td class="${s}">${o}</td>`}else return r==="id"?`<th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap font-mono text-xs text-center">${o}</th>`:r==="name"?`<td class="px-4 py-3 font-bold text-royal-blue group-hover/row:translate-x-1 transition-transform uppercase">${o}</td>`:r==="age"?`<td class="px-4 py-3 text-center text-[0.6875rem] font-black text-emerald-700 uppercase tracking-tight">${o}</td>`:r==="office"?`<td class="px-4 py-3 text-center"><span class="bg-white text-blue-700 px-2 py-0.5 rounded text-[0.625rem] border border-blue-100 font-bold shadow-sm">${o}</span></td>`:r==="status"?`<td class="px-4 py-3 text-center"><span class="${{ABSORBED:"bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20",RESIGNED:"bg-slate-100 text-slate-500 border-slate-200",EXPIRED:"bg-red-50 text-philippine-red border-red-100",ONGOING:"bg-green-50 text-green-600 border-green-100"}[o]||"bg-gray-100 text-gray-700 border-gray-200"} px-2 py-0.5 rounded text-xs border uppercase font-bold text-[0.625rem] shadow-sm">${o}</span></td>`:r==="startdate"?`<td class="px-4 py-3 text-center text-[0.6875rem] font-black text-royal-blue uppercase tracking-tight">${o}</td>`:r==="enddate"?`<td class="px-4 py-3 text-center text-[0.6875rem] font-black text-philippine-red uppercase tracking-tight">${o}</td>`:`<td class="px-4 py-3 text-xs font-semibold text-gray-500 text-center">${o}</td>`}).join("")}function tr(t){const e=document.querySelector(".overflow-x-auto table");if(!e)return;const n=e.querySelector("thead"),r=document.getElementById("web-table-body");if(n.innerHTML=er(k),t.length===0){r.innerHTML=`<tr><td colspan="${k.length}" class="px-6 py-12 text-center text-gray-400 font-medium italic">No matching records found.</td></tr>`;return}const o=[...t].sort((c,i)=>c.isArchived!==i.isArchived?c.isArchived-i.isArchived:0);let s=null,a=null,l="";const p=u.section==="ALL";o.forEach(c=>{p&&c.isArchived!==s&&(s=c.isArchived,a=null,l+=`
                <tr class="${s?"bg-red-50/30":"bg-green-50/30"}">
                    <td colspan="${k.length}" class="px-6 py-3 border-y border-gray-100 text-center">
                        <span class="px-3 py-1 rounded-full text-[0.625rem] font-black uppercase tracking-widest ${s?"bg-red-100 text-red-600 border border-red-200":"bg-green-100 text-green-600 border border-green-200"}">
                            ${s?"Archived Records":"Active Beneficiaries"}
                        </span>
                    </td>
                </tr>
            `),c.office!==a&&(a=c.office,l+=`
                <tr class="bg-gray-50/50">
                    <td colspan="${k.length}" class="px-8 py-2 border-b border-gray-100">
                        <div class="flex items-center gap-2 opacity-60">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            <span class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-widest">${a||"UNASSIGNED OFFICE"}</span>
                        </div>
                    </td>
                </tr>
            `),l+=`
            <tr class="bg-white hover:bg-gray-50 transition-colors group/row border-b border-gray-50">
                ${He(c,k)}
            </tr>
        `}),r.innerHTML=l}function rr(t){const e=document.getElementById("print-area");if(!e)return;const r=e.querySelector("table").querySelector("thead"),o=document.getElementById("print-table-body");r.innerHTML=`
        <tr class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[0.625rem] text-center">
            ${k.map(d=>{let g="";return d==="name"&&(g=' title="Last Name, First Name, Middle Initial"'),`<th class="px-3 py-2 border border-royal-blue"${g}>${he[d]||d.toUpperCase()}</th>`}).join("")}
        </tr>
    `;const s=document.getElementById("print-prepared-by"),a=document.getElementById("print-approved-by");s&&(s.textContent=u.preparedBy),a&&(a.textContent=u.approvedBy);const l=[...t].sort((d,g)=>d.isArchived!==g.isArchived?d.isArchived-g.isArchived:0);let p=null,c=null,i="";const f=u.section==="ALL";l.forEach((d,g)=>{f&&d.isArchived!==p&&(p=d.isArchived,c=null,i+=`
                <tr class="print:bg-gray-200 bg-gray-200">
                    <td colspan="${k.length}" class="px-3 py-1 border border-gray-400 text-center">
                        <span class="text-[0.625rem] font-black uppercase tracking-[0.2em]">${p?"SECTION: ARCHIVED RECORDS":"SECTION: ACTIVE BENEFICIARIES"}</span>
                    </td>
                </tr>
            `),d.office!==c&&(c=d.office,i+=`
                <tr class="bg-gray-50 print:bg-gray-50">
                    <td colspan="${k.length}" class="px-3 py-1.5 border border-gray-200 text-center">
                        <span class="text-[0.5625rem] font-black text-gray-800 uppercase tracking-widest text-center">Office: ${c||"N/A"}</span>
                    </td>
                </tr>
            `),i+=`
            <tr class="${g%2===0?"bg-white":"bg-gray-50/30"} border-b border-gray-200">
                ${He(d,k,!0)}
            </tr>
        `}),o.innerHTML=i}function nr(){const t=(r,o=!1)=>{const s=document.documentElement;switch(r){case"small":s.style.fontSize="85%";break;case"medium":s.style.fontSize="115%";break;case"large":s.style.fontSize="130%";break;case"extra-large":s.style.fontSize="150%";break;default:s.style.fontSize="100%";break}},e=localStorage.getItem("text-size")||"normal";t(e);const n=document.getElementById("pref-text-size");document.getElementById("settings-form"),n&&(n.value=e,n.addEventListener("change",r=>{const o=r.target.value;t(o,!0)}),document.addEventListener("preferencesSaved",()=>{const r=n.value;localStorage.setItem("text-size",r)}))}class X{static DAILY_RATES={normal:500,compressed:625};static REGULAR_HOURS=8;static PERIOD_WORK_DAYS={semimonthly:{normal:10,compressed:8},monthly:{normal:20,compressed:16},annually:{normal:260,compressed:208}};constructor(e){this.root=e,this.currency=new Intl.NumberFormat("en-PH",{style:"currency",currency:"PHP",minimumFractionDigits:2}),this.fields={period:e.querySelector("#wage-period"),workDays:e.querySelector("#wage-work-days"),absentDays:e.querySelector("#wage-absent-days"),lateMinutes:e.querySelector("#wage-late-minutes"),schedules:e.querySelectorAll('input[name="work-schedule"]')},this.outputs={salary:e.querySelector("#wage-net-salary"),periodLabel:e.querySelector("#wage-output-period"),gross:e.querySelector("#wage-gross-pay"),absence:e.querySelector("#wage-absence-deduction"),late:e.querySelector("#wage-late-deduction"),deductions:e.querySelector("#wage-total-deductions"),paidDays:e.querySelector("#wage-paid-days"),schedule:e.querySelector("#wage-schedule-label"),scheduleHours:e.querySelector("#wage-schedule-hours"),dailyRate:e.querySelector("#wage-daily-rate"),headerDailyRate:e.querySelector("#wage-header-daily-rate")}}init(){this.fields.period.addEventListener("change",()=>this.applyWorkDayPreset()),[this.fields.workDays,this.fields.absentDays,this.fields.lateMinutes].forEach(e=>{e.addEventListener("input",()=>this.calculate()),e.addEventListener("change",()=>this.calculate())}),this.fields.schedules.forEach(e=>{e.addEventListener("change",()=>this.applyWorkDayPreset())}),this.root.querySelector("#wage-reset").addEventListener("click",()=>this.reset()),this.calculate()}getSchedule(){return this.root.querySelector('input[name="work-schedule"]:checked')?.value||"normal"}applyWorkDayPreset(){const e=this.fields.period.value;this.fields.workDays.value=X.PERIOD_WORK_DAYS[e][this.getSchedule()],this.fields.absentDays.value=Math.min(this.getNumber(this.fields.absentDays),Number(this.fields.workDays.value)),this.calculate()}getNumber(e,n=Number.POSITIVE_INFINITY){const r=Number.parseFloat(e.value);return Number.isFinite(r)?Math.min(Math.max(r,0),n):0}calculate(){const e=this.getNumber(this.fields.workDays,366),n=this.getNumber(this.fields.absentDays,e),r=this.getNumber(this.fields.lateMinutes,1e5),o=this.getSchedule(),s=X.DAILY_RATES[o],a=Math.max(e-n,0),l=62.5/60,p=e*s,c=n*s,i=Math.min(r*l,a*s),f=Math.min(c+i,p),d=Math.max(p-f,0),g=o==="compressed";this.fields.absentDays.max=e,Number(this.fields.absentDays.value)>e&&(this.fields.absentDays.value=e),this.outputs.salary.textContent=this.currency.format(d),this.outputs.periodLabel.textContent=this.fields.period.options[this.fields.period.selectedIndex].text,this.outputs.gross.textContent=this.currency.format(p),this.outputs.absence.textContent=`- ${this.currency.format(c)}`,this.outputs.late.textContent=`- ${this.currency.format(i)}`,this.outputs.deductions.textContent=`- ${this.currency.format(f)}`,this.outputs.paidDays.textContent=`${a.toLocaleString("en-PH")} day${a===1?"":"s"}`,this.outputs.schedule.textContent=g?"Compressed Work":"Normal Work",this.outputs.scheduleHours.textContent=g?"Mon-Thu | 7:00 AM - 6:00 PM":"Mon-Fri | 8:00 AM - 5:00 PM",this.outputs.dailyRate.textContent=this.currency.format(s),this.outputs.headerDailyRate.textContent=`${this.currency.format(s)} Daily Rate`}reset(){this.fields.period.value="semimonthly",this.fields.absentDays.value=0,this.fields.lateMinutes.value=0,this.root.querySelector('input[name="work-schedule"][value="normal"]').checked=!0,this.applyWorkDayPreset()}}function or(){const t=document.getElementById("wage-calculator");t&&new X(t).init()}window.Swal=N;nt();ot();window.initFlowbite=ze;window.Datepicker=Ge;window.DateRangePicker=We;document.addEventListener("DOMContentLoaded",()=>{console.log("DOLE System initialized. Mode: [SUPABASE]");const t=window.location.pathname;st(),at(),it(),lt(),nr(),document.getElementById("beneficiary-table-body")&&Rt(),ct(),ir(),lr(),ut(),or(),Et(),It(),t.includes("/export/")&&!t.includes("log.php")&&Yt();const e=document.getElementById("beneficiary-table-body")!==null,n=localStorage.getItem("isLoggedIn")==="true";!e&&n&&setTimeout(()=>P(),2e3),sr(),ar()});function sr(){document.querySelectorAll(".togglePassword").forEach(e=>{const n=e.closest(".relative").querySelector("input");e&&n&&e.addEventListener("click",()=>{const r=n.getAttribute("type")==="password"?"text":"password";n.setAttribute("type",r);const o=e.querySelector(".eye-open"),s=e.querySelector(".eye-closed");o&&s&&(o.classList.toggle("hidden"),s.classList.toggle("hidden"))})})}function ar(){const t=new Image;t.crossOrigin="Anonymous",t.onload=function(){const e=document.createElement("canvas"),n=64;e.width=n,e.height=n;const r=e.getContext("2d");r.beginPath(),r.arc(n/2,n/2,n/2,0,2*Math.PI),r.closePath(),r.clip(),r.drawImage(t,0,0,n,n);let o=document.querySelector("link[rel~='icon']");o||(o=document.createElement("link"),o.rel="icon",document.getElementsByTagName("head")[0].appendChild(o)),o.type="image/png",o.href=e.toDataURL()},t.src=`${S()}frontend/images/logo/doleiligan.png`}function ir(){const t=document.querySelectorAll(".auto-year"),e=new Date().getFullYear();t.forEach(n=>{n.textContent=e})}async function lr(){try{let t="";try{const o=JSON.parse(localStorage.getItem("user"));o&&o.id&&(t=`?user_id=${o.id}`)}catch{}const e=async(o,s={},a=1,l=1200)=>{try{return await fetch(o,s)}catch(p){if(a<=0)throw p;return await new Promise(c=>setTimeout(c,l)),e(o,s,a-1,l)}},r=await(await e(`${S()}api/profile.php${t}`)).json();r.success&&dt(r.profile)}catch(t){console.error("Error loading user profile:",t)}}
