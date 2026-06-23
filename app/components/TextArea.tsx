type TextAreaProps = {
  placeholder: string;
  label: string;
  name: string;
};

export default function TextArea(props: TextAreaProps) {
  return (
    <div>
      <label htmlFor={props.name} className="text-xl font-semibold">
        {props.label}
      </label>
      <textarea
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        className="w-full border-2 rounded-xl p-2 h-32"
      ></textarea>
    </div>
  );
}
