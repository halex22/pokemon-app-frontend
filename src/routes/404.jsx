import { ColoredPokeballSVG } from "../components/svg/pokeball"

export function NotFoundRoute() {
  return (
    <section id="no-route-found" className="w-auto h-screen flex flex-col items-center justify-center">
      <ColoredPokeballSVG />
      <p className="text-lg font-semibold mt-8">looks like you are looking for something that does not exists in this site</p>

    </section>
  )
}