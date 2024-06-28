const Input = ({ type, title, name, placeholder, handleOnChange, value }) => {
  return (
    <div className="flex flex-col h-16 w-72 gap-1">
      <label className="font-semibold" htmlFor={name}>
        {title}
      </label>
      <input
        className="border-2 rounded-sd px-2 h-8 font-normal text-sm"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )
}

export default Input
