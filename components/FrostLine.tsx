type FrostLineProps = {
    variant?: "cool" | "warm";
    className?: string;
};

export default function FrostLine({
    variant = "cool",
    className = "",
}: FrostLineProps) {
    const base =
        "w-full h-px relative z-10";

    const style =
        variant === "warm"
            ? {
                  background:
                      "linear-gradient(90deg, transparent 5%, rgba(212,169,106,0.08) 30%, rgba(212,169,106,0.2) 50%, rgba(212,169,106,0.08) 70%, transparent 95%)",
              }
            : {
                  background:
                      "linear-gradient(90deg, transparent 5%, rgba(142,194,232,0.08) 30%, rgba(142,194,232,0.4) 50%, rgba(142,194,232,0.08) 70%, transparent 95%)",
              };

    return <div className={`${base} ${className}`} style={style} aria-hidden />;
}

