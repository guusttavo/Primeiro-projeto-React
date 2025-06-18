import './Button.css'

const Button = ({id, text, action}) => {
    const handleAction = (e) => {
        action(e);
    }
  return (
    <button id={id} type="button" onClick={handleAction}>
        {text}
    </button>
  )
}

export default Button