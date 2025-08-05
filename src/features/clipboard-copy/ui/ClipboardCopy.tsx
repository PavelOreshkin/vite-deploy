import Button from "@/shared/ui/Button";
import CopyIcon from "@icons/copy.svg?react";
import { useMobile } from "@/shared/lib/mobile";
import { copy } from "../api/copy";
import { useRef, useState } from "react";

type ClipboardCopyProps = {
  content?: string;
};

const ClipboardCopy = ({ content }: ClipboardCopyProps) => {
  const isMobile = useMobile();
  const timerId = useRef<number | undefined>(undefined);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();

    clearTimeout(timerId.current);

    setCopied(true);

    await copy(content);

    timerId.current = setTimeout(
      () => setCopied(false),
      2000
    ) as unknown as number;
  };

  const iconSize = isMobile ? 16 : 20;

  return (
    <Button
      variant="text"
      endIcon={<CopyIcon height={iconSize} width={iconSize} />}
      onClick={handleCopy}
      aria-label="copy"
    >
      {copied ? "Copied!" : "Copy to clipboard"}
    </Button>
  );
};

export default ClipboardCopy;
