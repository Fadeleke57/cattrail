import './Button.css';
import dynamic from "next/dynamic";

function Button({value, type}) {
  if (type !== "btn-secondary") {
    return (
      <a href="#" className={type} style={{color: 'white'}}>{value}</a>
    )
  }
  return (
    <a href="#" className={type}>{value}</a>
  )
}

export default Button;