import { Activity } from "lucide-react";

const Events = () => (
  <div className="px-6 py-6 space-y-6">
    <div className="flex items-center gap-3">
      <Activity className="w-5 h-5 text-primary" />
      <h1 className="text-xl font-semibold text-foreground">Event Log</h1>
    </div>
    <p className="text-sm text-muted-foreground">
      Real-time Soroban contract events and transaction history.
    </p>
    <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground text-sm">
      Event log interface coming soon.
    </div>
  </div>
);

export default Events;
