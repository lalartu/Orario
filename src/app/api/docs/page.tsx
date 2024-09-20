import { orario } from "../../../../db/schema";
import { db } from "../../../../db/client";

export default function Docs() {
    
    const records = db.select().from(orario).all()
    
    return (
    <div className="grid gap-8 items-center justify-items-center p-5 font-[var(--font-geist-sans)]">
        <h1 className="font-bold text-3xl">API Docs</h1>
        <h2 className="font-semibold text-xl text-slate-400">GET</h2>
        <span className="inline-block py-1 px-2 break-all text-[0.9rem] text-white italic border border-gray-400/50 rounded-md">/api/orario</span>
        <div className="items-center justify-center p-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg overflow-x-auto max-w-3xl mx-auto">
      <div className="text-xs font-semibold text-white-400 mb-4">
          200 Response
        </div>
        <pre className="text-sm text-gray-100">
          <code>{JSON.stringify(records, null, 2)}</code>
        </pre>
      </div>
    </div>
    </div>
    )
}