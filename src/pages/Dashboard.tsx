export function Dashboard() {
  return (
    <div className="w-full h-full">
      {/* layout mobile */}
      <div className="grid grid-cols-1 gap-4 pl-10 p-6 w-full h-full max-h-screen overflow-y-auto md:hidden">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-24"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-24"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-24"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-24"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-24"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm h-24"></div>
      </div>

      {/* layout tablet and laptop */}
      <div className="hidden md:grid grid-cols-4 grid-rows-5 gap-4 p-6 w-full h-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="col-span-2 row-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-4 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="row-span-2 col-start-3 row-start-2 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="row-span-2 col-start-4 row-start-2 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="row-span-2 col-start-3 row-start-4 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
        <div className="row-span-2 col-start-4 row-start-4 bg-white rounded-2xl border border-slate-200 shadow-sm"></div>
      </div>
    </div>
  );
}
