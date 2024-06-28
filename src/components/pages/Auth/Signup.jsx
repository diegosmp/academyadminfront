import Input from '../../form/Input'

const Signup = () => {
  const handleChange = () => {
    console.log('Olá mundo')
  }
  return (
    <section className="flex flex-col items-center py-6 gap-3 font-bold">
      <h1>Cadastro</h1>
      <form className="flex flex-col items-center gap-1">
        <Input
          title="Nome completo:"
          type="text"
          name="username"
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
        />
        <Input
          title="Email:"
          type="email"
          name="email"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
        />
        <Input
          title="Senha:"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
        />
        <Input
          title="Confirmarção de senha:"
          type="password"
          name="password"
          placeholder="Digite sua senha novamente"
          handleOnChange={handleChange}
        />
        <button className="border-2 h-8 w-24 rounded-md border-zinc-900 hover:bg-zinc-900 hover:text-zinc-200 transition-all duration-300">
          Cadastrar
        </button>
      </form>
    </section>
  )
}

export default Signup
