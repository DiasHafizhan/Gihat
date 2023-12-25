const Input = (props) => {
  const { type, placeholder, name } = props

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      name={name}
      id={name}
    />
  )
}

export default Input