interface HelloTwoProps {
    name: string
}

const Greetings = ({name}: HelloTwoProps) => {
  return (
    <div>Hello {name}!</div>
  )
}

export default Greetings