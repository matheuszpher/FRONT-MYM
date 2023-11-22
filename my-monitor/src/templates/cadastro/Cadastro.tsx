import { FormCadastro } from '@/components/cadastro';

const Cadastro = () => {
  return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-stone-50 px-40 text-teal-900">
        <h1 className="mb-12 mt-11  text-center text-5xl font-bold">
          Registrar
        </h1>     
        <FormCadastro />
    </div>
  );
};

export default Cadastro;