export default function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white"
      aria-label="SajooDev home"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-soft text-sm text-white">
        S
      </span>
      Sajoo<span className="text-accent">Dev</span>
    </a>
  );
}
