import cx from "classnames";
import type { ButtonBaseProps } from "../atoms/ButtonBase";
import ButtonBase from "../atoms/ButtonBase";
import type { MaterialIconProps } from "../atoms/MaterialIcon";
import MaterialIcon from "../atoms/MaterialIcon";

export type IconButtonProps = {
  icon: MaterialIconProps["icon"];
  iconProps?: Omit<MaterialIconProps, "icon">;
} & ButtonBaseProps;

export default function IconButton({
  icon,
  iconProps,
  ...props
}: IconButtonProps) {
  return (
    <ButtonBase {...props} className={cx("p-3 rounded-lg", props?.className)}>
      <MaterialIcon icon={icon} {...iconProps} />
    </ButtonBase>
  );
}
