import { ComponentType, SVGProps } from "react";

type TypeWriterButtonProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const TypewriterButton = ({ icon: Icon }: TypeWriterButtonProps) => {
  return (
    <div>
      <Icon width={24} height={24} />
    </div>
  );
};

export default TypewriterButton;
