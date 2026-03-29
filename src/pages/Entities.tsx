import { Building2 } from "lucide-react";

const Entities = () => (
  <div className="px-6 py-6 space-y-6">
    <div className="flex items-center gap-3">
      <Building2 className="w-5 h-5 text-primary" />
      <h1 className="text-xl font-semibold text-foreground">Entity Management</h1>
    </div>
    <p className="text-sm text-muted-foreground">
      Registered supply chain participants with Stellar addresses and roles.
    </p>
    <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground text-sm">
      Entity management interface coming soon.
    </div>
  </div>
);

export default Entities;
