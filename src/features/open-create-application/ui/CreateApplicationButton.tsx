import Button from "@/shared/ui/Button";
import PlusIcon from "@icons/plus.svg?react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/shared/routes";

type CreateApplicationButtonProps = {
  size?: "medium" | "large";
  className?: string;
};

const CreateApplicationButton = ({
  size,
  className,
  ...props
}: CreateApplicationButtonProps) => {
  const navigate = useNavigate();

  const handleGoToCreatePage = () => {
    navigate(AppRoutes.CREATE_APPLICATION);
  };

  const iconSize = size === "large" ? 24 : 20;

  return (
    <Button
      variant="contained"
      size={size}
      startIcon={<PlusIcon height={iconSize} width={iconSize} />}
      className={className}
      onClick={handleGoToCreatePage}
      aria-label="create new"
      {...props}
    >
      Create New
    </Button>
  );
};

export default CreateApplicationButton;
