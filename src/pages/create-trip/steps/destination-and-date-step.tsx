import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export function DestinationAndDateStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
      <div className="flex items-center flex-1 gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando?"
          className="w-40 text-lg bg-transparent outline-none placeholder-zinc-400"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestsInput}
          className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-lime-300 text-lime-950 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  );
}
