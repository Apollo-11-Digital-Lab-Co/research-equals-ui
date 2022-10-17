import Input, { InputProps } from "../atoms/Input";
import MaterialIcon from "../atoms/MaterialIcon";

export default function SearchInput(props: InputProps) {
  return (
    <Input
      {...props}
      startIcon={<MaterialIcon icon="search" className="text-button" />}
    />
  );
}
