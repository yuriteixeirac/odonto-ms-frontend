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
        placeholder={props.placeholder}
        className="w-full border rounded-xl p-2 h-32"
      ></textarea>
    </div>
  );
}
