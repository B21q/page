import Link from "next/link";

export default function Projects() {
  return (
    <main
      id="Projetos"
      className="h-screen lg:h-screen xl:h-screen flex flex-col justify-center items-center bg-bg bg-[radial-gradient(#171518_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <div className="mx-4 md:mx-8 lg:mx-48 xl:mx-48 flex flex-col">
        <p className="font-marope text-2xl text-gray-200 font-bold py-8 drop-shadow-xl text-center lg:text-start">
          PROJECTS
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-open">
          <section className="border border-thorium p-8 flex flex-col justify-center rounded-sm">
            <p className="font-open text-gray-50 text-2xl font-bold">Thorium</p>
            <h1 className="text-gray-200 py-2 text-lg">
              Página do navegador web Thorium, desenvolvida com NextJs,
              Tailwindcss e Typescript.
            </h1>
            <Link
              href="/Thorium"
              className="text-thorium w-max p-1.5 font-bold text-lg rounded-sm"
            >
              Visualizar
            </Link>
          </section>
          <section className="border border-igray-10 p-8 flex flex-col justify-center rounded-sm">
            <p className="font-open text-gray-50 text-2xl font-bold">
              Construindo...
            </p>
            <h1 className="text-gray-300 py-2 text-lg">
              Atualmente envolvido em um projeto promissor e ansioso para
              compartilhar suas novidades em breve.
            </h1>
            <Link
              href="/Thorium"
              className="text-iblue-10 font-bold text-lg"
            ></Link>
          </section>
          <section className="border border-igray-10 p-8 flex flex-col justify-center rounded-sm">
            <p className="font-open text-gray-50 text-2xl font-bold">
              Construindo...
            </p>
            <h1 className="text-gray-300 py-2 text-lg">
              Atualmente envolvido em um projeto promissor e ansioso para
              compartilhar suas novidades em breve.
            </h1>
            <Link
              href="/Thorium"
              className="text-iblue-10 font-bold text-lg"
            ></Link>
          </section>
        </div>
      </div>
    </main>
  );
}
