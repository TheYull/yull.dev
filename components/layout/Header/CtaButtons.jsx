import UIButton from "@/components/ui/Button";

export default function CtaButtons() {
  return (
    <div className="flex gap-[10px]">
      <UIButton className="border-[var(--color-scheme-2-text)] text-[var(--color-scheme-2-text)]" variant="outline">Button</UIButton>
      <UIButton variant="solid">Button</UIButton>
    </div>
  );
}
