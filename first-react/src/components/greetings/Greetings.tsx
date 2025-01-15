import { FC } from 'react'
import './Greetings.scss'

export interface GreetingProps {
    name?: string
    lang?: string
}

//function Greeting(props: GreetingProps) {
//  if ((props.lang ?? 'it') === 'en')
//    return (
//      <p>Hello, {props.name ?? 'World'}!</p>
//    )
//  return (
//    <p>Ciao, {props.name ?? 'Mondo'}!</p>
//  )
//}

const Greeting: FC<GreetingProps> = ({ name, lang }: GreetingProps) => {
    if ((lang ?? 'it') === 'en')
        return (
            <p>Hello, {name ?? 'World'}!</p>
        )
    return (
        <p>Ciao, {name ?? 'Mondo'}!</p>
    )
}
export default Greeting