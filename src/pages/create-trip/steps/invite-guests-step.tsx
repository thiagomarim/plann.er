import { UserRoundPlus, ArrowRight } from "lucide-react";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center flex-1 gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="flex-1 text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="flex-1 text-lg text-zinc-400">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <button
        onClick={openConfirmTripModal}
        className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-lime-300 text-lime-950 hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
