export default function DocsMaintenance() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        {/* Subtle spinning indicator */}
        <div className="w-10 h-10 border-[1.5px] border-black/10 border-t-black rounded-full animate-spin mb-10"></div>
        
        {/* Core Message */}
        <h1 className="text-2xl text-black font-normal tracking-tight mb-4">
          Rine Documentation
        </h1>
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          The documentation portal is currently offline for structural maintenance.
          <br />
          We will be back up in a couple of hours.
        </p>
      </div>
    </div>
  );
}
