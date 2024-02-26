import { FC } from "react";
import Link from "next/link";
import { QucharaFullLogo } from "../Icons/QucharaFullLogo";

interface Props {
  width?: number;
  height?: number;
}

export const QucharaAdminLogo: FC<Props> = ({ width = 120, height = 50 }) => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <QucharaFullLogo width={width} height={height} />
      </Link>
    </div>
  );
};
