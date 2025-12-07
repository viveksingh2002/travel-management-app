import React from 'react'

function ToggleRoleButton({role, setRole}) {
  return (
    <div className="flex justify-center mb-10">
      <div className="relative bg-amber-200 rounded-full w-80 h-12 flex">
        <div
          className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-amber-400 shadow transition-all duration-300 ${role === "customer" ? "left-1" : "left-[50%]"
            }`}
        />

        {["customer", "agent"].map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`w-1/2 z-10 font-semibold transition ${role === r ? "text-red-600" : "text-gray-600"
              }`}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ToggleRoleButton