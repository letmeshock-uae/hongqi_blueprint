import { GlassNavbar } from "@/components/shared/glass-navbar";
import { ActionDock } from "@/components/shared/action-dock";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlassNavbar />
      <main className="min-h-screen pt-16">{children}</main>
      <ActionDock />
      <footer className="border-t border-glass-stroke px-6 py-12 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm font-bold tracking-tight text-foreground">
              HONGQI
            </p>
            <p className="mt-1 text-xs text-muted">
              Premium Automotive Experience
            </p>
          </div>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Hongqi. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
