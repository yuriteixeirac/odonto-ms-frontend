type TextInputProps = {
  placeholder: string;
  label: string;
  name: string;
  type: "text" | "email";
  onChange?: () => void;
};

export default function TextInput(props: TextInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name} className="text-xl font-semibold">
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        className="border-2 p-2 rounded-xl"
        onChange={props.onChange}
      ></input>
    </div>
  );
}
