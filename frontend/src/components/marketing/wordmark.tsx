/**
 * Wordmark
 * -----------------------------------------------------------------------
 * Single source of truth for the "everafter" lockup: Amoresa "ever" fused
 * to Codec Pro "after". Pulled out of the page/navbar so every surface
 * that shows the brand (nav, hero, footer) renders it identically and
 * a future type change only happens in one place.
 * -----------------------------------------------------------------------
 */

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="font-amoresa">ever</span>
      <span className="font-codec font-medium">after</span>
    </span>
  );
}
