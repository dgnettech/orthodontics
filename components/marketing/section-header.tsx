import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left mx-0")}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{copy}</p> : null}
    </div>
  );
}
