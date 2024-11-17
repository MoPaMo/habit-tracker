(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2294)}])},2294:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_});var a=s(4848),r=s(6540),l=s(8097),i=s(6715),n=s(1852),d=s(9936),c=s(1556),o=s(3004),x=s(4164),m=s(856);function h(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,m.QP)((0,x.$)(t))}let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});u.displayName="Card";let f=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("flex flex-col space-y-1.5 p-6",s),...r})});f.displayName="CardHeader";let g=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("text-2xl font-semibold leading-none tracking-tight",s),...r})});g.displayName="CardTitle",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("text-sm text-muted-foreground",s),...r})}).displayName="CardDescription";let p=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("p-6 pt-0",s),...r})});p.displayName="CardContent",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter";let j=(0,s(6990).F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),N=r.forwardRef((e,t)=>{let{className:s,variant:r,...l}=e;return(0,a.jsx)("div",{ref:t,role:"alert",className:h(j({variant:r}),s),...l})});N.displayName="Alert",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h5",{ref:t,className:h("mb-1 font-medium leading-none tracking-tight",s),...r})}).displayName="AlertTitle";let b=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:h("text-sm [&_p]:leading-relaxed",s),...r})});b.displayName="AlertDescription";var y=s(949),v=s(9669),w=s(7323),k=s(1672),D=s(3087),S=s(5466),C=s(431);let A=()=>{let[e,t]=(0,r.useState)([]),[s,x]=(0,r.useState)(""),[m,h]=(0,r.useState)("daily"),[j,A]=(0,r.useState)(!1);(0,r.useEffect)(()=>{A(!0);let e=window.localStorage.getItem("habits");if(e)try{t(JSON.parse(e))}catch(e){console.error("Error parsing saved habits:",e),t([])}},[]),(0,r.useEffect)(()=>{j&&window.localStorage.setItem("habits",JSON.stringify(e))},[e,j]);let _=s=>{let a=new Date().toISOString().split("T")[0];t(e.map(e=>{if(e.id===s){let t,s;return e.completedDates.includes(a)?(t=e.completedDates.filter(e=>e!==a),s=Math.max(0,e.streak-1)):(t=[...e.completedDates,a],s=e.streak+1),{...e,completedDates:t,streak:s}}return e}))},R=s=>{t(e.filter(e=>e.id!==s))},E=e=>{if(0===e.completedDates.length)return 0;let t=Math.ceil((new Date-new Date(e.created))/864e5);return Math.round(e.completedDates.length/t*100)};return j?(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 p-8",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto space-y-8",children:[(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-gray-900 mb-2",children:"Habit Tracker"}),(0,a.jsx)("p",{className:"text-gray-600",children:"Build better habits, one day at a time"})]}),(0,a.jsx)(u,{className:"bg-white",children:(0,a.jsx)(p,{children:(0,a.jsxs)("form",{onSubmit:a=>{a.preventDefault(),s.trim()&&(t([...e,{id:Date.now(),name:s,frequency:m,streak:0,completedDates:[],created:new Date().toISOString()}]),x(""))},className:"flex gap-4 items-end py-4",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"New Habit"}),(0,a.jsx)("input",{type:"text",value:s,onChange:e=>x(e.target.value),className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",placeholder:"Enter a new habit..."})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Frequency"}),(0,a.jsxs)("select",{value:m,onChange:e=>h(e.target.value),className:"px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",children:[(0,a.jsx)("option",{value:"daily",children:"Daily"}),(0,a.jsx)("option",{value:"weekly",children:"Weekly"})]})]}),(0,a.jsxs)("button",{type:"submit",className:"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",children:[(0,a.jsx)(l.A,{size:20})," Add Habit"]})]})})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,a.jsxs)(u,{children:[(0,a.jsxs)(f,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,a.jsx)(g,{className:"text-sm font-medium",children:"Total Habits"}),(0,a.jsx)(i.A,{className:"h-4 w-4 text-gray-500"})]}),(0,a.jsx)(p,{children:(0,a.jsx)("div",{className:"text-2xl font-bold",children:e.length})})]}),(0,a.jsxs)(u,{children:[(0,a.jsxs)(f,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,a.jsx)(g,{className:"text-sm font-medium",children:"Highest Streak"}),(0,a.jsx)(n.A,{className:"h-4 w-4 text-gray-500"})]}),(0,a.jsx)(p,{children:(0,a.jsx)("div",{className:"text-2xl font-bold",children:Math.max(...e.map(e=>e.streak),0)})})]}),(0,a.jsxs)(u,{children:[(0,a.jsxs)(f,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,a.jsx)(g,{className:"text-sm font-medium",children:"Completion Rate"}),(0,a.jsx)(d.A,{className:"h-4 w-4 text-gray-500"})]}),(0,a.jsx)(p,{children:(0,a.jsxs)("div",{className:"text-2xl font-bold",children:[e.length?Math.round(e.reduce((e,t)=>e+E(t),0)/e.length):0,"%"]})})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(f,{children:(0,a.jsx)(g,{children:"7-Day Progress"})}),(0,a.jsx)(p,{children:(0,a.jsx)("div",{className:"h-[200px]",children:(0,a.jsx)(y.u,{width:"100%",height:"100%",children:(0,a.jsxs)(v.b,{data:[...Array(7)].map((e,t)=>{let s=new Date;return s.setDate(s.getDate()-t),s.toISOString().split("T")[0]}).reverse().map(t=>({date:t,completed:e.reduce((e,s)=>e+(s.completedDates.includes(t)?1:0),0)})),children:[(0,a.jsx)(w.d,{strokeDasharray:"3 3"}),(0,a.jsx)(k.W,{dataKey:"date"}),(0,a.jsx)(D.h,{}),(0,a.jsx)(S.m,{}),(0,a.jsx)(C.N,{type:"monotone",dataKey:"completed",stroke:"#2563eb",strokeWidth:2})]})})})})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[0===e.length&&(0,a.jsx)(N,{children:(0,a.jsx)(b,{children:"No habits added yet. Start by adding a new habit above!"})}),e.map(e=>(0,a.jsx)(u,{className:"bg-white",children:(0,a.jsxs)(p,{className:"flex items-center justify-between p-6",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("button",{onClick:()=>_(e.id),className:"p-2 rounded-full transition-colors ".concat(e.completedDates.includes(new Date().toISOString().split("T")[0])?"bg-green-100 text-green-600":"bg-gray-100 text-gray-400"),children:(0,a.jsx)(c.A,{size:24})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-lg",children:e.name}),(0,a.jsxs)("p",{className:"text-sm text-gray-500",children:[e.frequency.charAt(0).toUpperCase()+e.frequency.slice(1)," •"," ",E(e),"% completion rate"]})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-6",children:[(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("p",{className:"text-2xl font-bold text-blue-600",children:e.streak}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"day streak"})]}),(0,a.jsx)("button",{onClick:()=>R(e.id),className:"p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors",children:(0,a.jsx)(o.A,{size:20})})]})]})},e.id))]})]})}):(0,a.jsx)("div",{className:"min-h-screen bg-gray-50 p-8 flex items-center justify-center",children:(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("p",{className:"text-lg text-gray-600",children:"Loading..."})})})};function _(){return(0,a.jsx)(A,{})}}},e=>{var t=t=>e(e.s=t);e.O(0,[445,636,593,792],()=>t(2022)),_N_E=e.O()}]);