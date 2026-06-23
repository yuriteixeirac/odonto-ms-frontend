type TextInputProps = {
  placeholder: string;
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
};

export default function TextInput(props: TextInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name} className="text-xl font-semibold">
        {props.label}
      </label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        className="border p-2 rounded-xl"
      ></input>
    </div>
  );
}
