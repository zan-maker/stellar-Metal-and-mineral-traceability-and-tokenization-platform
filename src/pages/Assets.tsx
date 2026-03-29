import { Gem } from "lucide-react";

const Assets = () => (
  <div className="px-6 py-6 space-y-6">
    <div className="flex items-center gap-3">
      <Gem className="w-5 h-5 text-primary" />
      <h1 className="text-xl font-semibold text-foreground">Asset Registry</h1>
    </div>
    <p className="text-sm text-muted-foreground">
      SEP-41 token assets representing critical minerals across the supply chain.
    </p>
    <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground text-sm">
      Asset management interface coming soon.
    </div>
  </div>
);

export default Assets;
