type PhotoProps = {
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

/**
 * Placeholder for a real photograph. Swap by replacing this component's
 * usage with a Next <Image> once real assets are supplied — the label
 * describes exactly which photo belongs here.
 */
export default function Photo({ label, className = "", tone = "light" }: PhotoProps) {
  const gradient =
    tone === "light"
      ? "bg-[linear-gradient(160deg,#e4d9c4_0%,#cdbd9c_55%,#a8916c_100%)]"
      : "bg-[linear-gradient(160deg,#8a7256_0%,#5c4a37_55%,#3a2a1e_100%)]";
  const textColor = tone === "light" ? "text-espresso/50" : "text-cream/60";

  return (
    <div
      className={`relative overflow-hidden ${gradient} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-end p-4">
        <span
          className={`font-body italic text-sm ${textColor} tracking-wide`}
        >
          {label}
        </span>
      </div>
      <div className="absolute top-4 right-4 opacity-30">
        <span className="lattice-mark" aria-hidden="true" />
      </div>
    </div>
  );
}
