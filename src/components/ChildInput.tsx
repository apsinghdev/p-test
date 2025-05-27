export function ChildInput(props: any) {

  return (
    <div className="border">
      <label htmlFor={`userInput${props.id}`}>Input: {props.id}</label>
      <input
        type="text"
        name={`userInput${props.id}`}
        id={`userInput${props.id}`}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
