import { MonitorIcon, StudentIcon, TeacherIcon } from '@/components/homepage'

const AsideHomePage = () => {
  return (
    <aside className="relative rounded-2xl bg-neutral-300 pb-12 pl-10 pt-16 font-coolvetica text-2xl font-normal leading-5 tracking-wide text-teal-900 ">
      <div className="mb-7  max-w-[312px]">
        <p className="w-full">
          Nós somos o MeuMonitor, mais do que uma simples ferramenta digital,
          somos uma comunidade dedicada a transformar a experiência educacional.
          Promovendo a integração eficaz entre monitores e alunos em uma jornada
          de aprendizado enriquecedora.
        </p>
      </div>
      <div className="mb-12 mr-2 max-w-[540px]">
        <p className="w-full">
          Aproveite ao máximo sua experiência no MeuMonitor e embarque na
          jornada que o levará ao sucesso acadêmico. Explore e alcance seus
          objetivos. A educação é uma jornada, e estamos aqui para apoiá-lo a
          cada passo do caminho. Seja parte da mudança!
        </p>
      </div>
      <div className="flex flex-row items-center justify-between pr-7">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-900">
          <MonitorIcon />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-900">
          <StudentIcon />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-900">
          <TeacherIcon />
        </div>
      </div>
      <img
        className="absolute -right-32 -top-4"
        alt="alunos lendo"
        src="/images/alunos-lendo.png"
        width={319}
        height={288}
        sizes="200%"
      />
    </aside>
  )
}

export default AsideHomePage
