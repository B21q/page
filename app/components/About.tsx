export default function About() {
  return (
    <main className="h-max lg:h-screen xl:h-screen flex flex-col items-center justify-center bg-bg bg-[radial-gradient(#171518_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex flex-col gap-8 mx-4 md:mx-8 lg:mx-44 xl:mx-44">
        <section>
          <h1 className="flex text-gray-100 font-manrope text-4xl drop-shadow-xl">
            Combino design, minimalismo, desenvolvimento front-end e habilidades
            profissionais para destacar seu produto e criar projetos incríveis.
          </h1>

          <h1 className="flex text-gray-300 font-manrope text-xl drop-shadow-xl py-4">
            Sou estudante de Sistemas de Informação, apaixonado por programação
            e Linux. Tenho experiência em Front-end usando NextJS e TypeScript.
            Atualmente estou aprendendo C.
          </h1>

          <section className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="flex flex-col border border-igray-10 p-8 justify-center rounded-sm">
                <p className="font-open text-iblue-10 text-2xl font-bold">
                  Desenvolvimento Front-End
                </p>
                <h1 className="text-gray-200 py-2 text-lg font-open">
                  Crio aplicativos e sites, tornando ideias digitais acessíveis
                  e interativas.
                </h1>
              </div>

              <div className="flex flex-col border border-igray-10 p-8 justify-center rounded-sm">
                <p className="font-open text-iblue-10 text-2xl font-bold">
                  Administrador de Sistemas Linux
                </p>
                <h1 className="text-gray-200 py-2 text-lg font-open">
                  Gerencio servidores Linux, otimizo desempenho e resolvo
                  questões operacionais.
                </h1>
              </div>

              <div className="flex flex-col border border-igray-10 p-8 justify-center rounded-sm">
                <p className="font-open text-iblue-10 text-2xl font-bold">
                  Scrum Master
                </p>
                <h1 className="text-gray-200 py-2 text-lg font-open">
                  Facilitador ágil e líder de equipe, maximizando a eficiência
                  na entrega iterativa.
                </h1>
              </div>
            </div>
          </section>
        </section>

        <section className="flex flex-col text-white">
          <p className="pt-4 text-gray-50 font-open font-bold text-lg"></p>
        </section>
      </div>
    </main>
  );
}
