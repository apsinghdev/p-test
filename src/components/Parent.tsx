import { ChildInput } from "./ChildInput";

interface ParentProps {
  values: any;
  setValues: any;
}


export const Parent = (props: ParentProps) => {
    const handleInputChange = (id: any) => (e: any) => {
      props.setValues((prev: any) => ({
        ...prev,
        [`input${id}`]: e.target.value,
      }));
    };
    return (
    <>
      {Array.from({ length: 20 }, (_, i) => (
        <ChildInput
          key={i}
          id={i + 1}
          value={props.values[`input${i + 1}`]}
          setValue={props.setValues}
          onChange={handleInputChange(i + 1)}
        ></ChildInput>
      ))}
    </>
  );
};
