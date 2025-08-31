export function PokeballIcon() {
  return (
    <span aria-hidden="true" className="relative inline-block h-5 w-5" role="img">
      {/* Outer ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#7A1C1C] bg-white" />
      {/* Top red cap */}
      <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-[#E53935]" />
      {/* Center button */}
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#7A1C1C] bg-white" />
    </span>
  )
}
