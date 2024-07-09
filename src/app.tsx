import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestModalOpen(false);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-pattern">
      <div className="w-full max-w-3xl px-6 space-y-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" className="w-[172px] h-11" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
            <div className="flex items-center flex-1 gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para aonde você vai?"
                className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
                disabled={isGuestInputOpen}
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="w-40 text-lg bg-transparent outline-none placeholder-zinc-400"
                disabled={isGuestInputOpen}
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
              >
                <Settings2 className="size-5" />
                Alterar local/data
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

          {isGuestInputOpen && (
            <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 rounded-xl shadow-shape">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex items-center flex-1 gap-2 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="flex-1 text-lg bg-transparent outline-none text-zinc-400">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-lime-300 text-lime-950 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="underline text-zinc-300">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="underline text-zinc-300">
            políticas de privacidade
          </a>{" "}
          .
        </p>
      </div>

      {isGuestModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button" onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">jessica.white44@yahoo.com</span>
                <button type="button">
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <div className="flex items-center flex-1 gap-2 px-2">
                <AtSign className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o email do convidado"
                  className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-lime-300 text-lime-950 hover:bg-lime-400"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
