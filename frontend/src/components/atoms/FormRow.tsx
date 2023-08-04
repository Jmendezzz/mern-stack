type Props = {
    name: string,
    type: string,
    labelText: string
}

export const FormRow = ({name, type, labelText}:Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        id={name}
        name={name}
        className="border-2 border-input_border rounded-lg py-3 px-2 bg-slate-200 focus:outline-principal" 
      />
    </div>
  );
};
