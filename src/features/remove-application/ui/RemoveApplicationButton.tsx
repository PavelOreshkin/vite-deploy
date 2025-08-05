import Button from "@/shared/ui/Button";
import TrashIcon from "@icons/trash.svg?react";
import { useMobile } from "@/shared/lib/mobile";
import { useApplicationStore } from "@/entities/application";

type RemoveApplicationButtonProps = {
  id: string;
};

const RemoveApplicationButton = ({ id }: RemoveApplicationButtonProps) => {
  const isMobile = useMobile();
  const { removeApplication } = useApplicationStore();

  const handleRemove = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (!id) return;
    e?.stopPropagation();
    removeApplication(id);
  };

  const iconSize = isMobile ? 16 : 20;

  return (
    <Button
      variant="text"
      startIcon={<TrashIcon height={iconSize} width={iconSize} />}
      onClick={handleRemove}
      aria-label="delete"
    >
      Delete
    </Button>
  );
};

export default RemoveApplicationButton;
