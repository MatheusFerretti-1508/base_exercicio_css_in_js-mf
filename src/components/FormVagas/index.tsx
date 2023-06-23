import { FormEvent, useState } from 'react'

import { BotaoStyle, InputStyle, FormStyle } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyle onSubmit={aoEnviarForm}>
      <InputStyle
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoStyle type="submit">Pesquisar</BotaoStyle>
    </FormStyle>
  )
}
export default FormVagas
