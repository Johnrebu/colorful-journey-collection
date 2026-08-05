import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  /** Focus returns here when the menu closes. */
  triggerRef?: React.RefObject<HTMLButtonElement>;
  id?: string;
}

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/bio", label: "Bio" },
  { to: "/wikipedia", label: "Wiki Profile" },
  { to: "/ai-videos", label: "AI Videos" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const MobileNav = ({ isOpen, onClose, triggerRef, id = "mobile-menu" }: MobileNavProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const getItems = useCallback(
    () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
      ),
    [],
  );

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (!isOpen) return;
    const items = getItems();
    const active = items.find((el) => el.getAttribute("aria-current") === "page");
    (active ?? items[0])?.focus();
  }, [isOpen, getItems]);

  const closeAndRestoreFocus = useCallback(() => {
    onClose();
    triggerRef?.current?.focus();
  }, [onClose, triggerRef]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const items = getItems();
    if (items.length === 0) return;
    const index = items.indexOf(document.activeElement as HTMLAnchorElement);

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        closeAndRestoreFocus();
        break;
      case "ArrowDown":
        event.preventDefault();
        items[(index + 1 + items.length) % items.length].focus();
        break;
      case "ArrowUp":
        event.preventDefault();
        items[(index - 1 + items.length) % items.length].focus();
        break;
      case "Home":
        event.preventDefault();
        items[0].focus();
        break;
      case "End":
        event.preventDefault();
        items[items.length - 1].focus();
        break;
      case "Tab": {
        // Trap focus inside the open menu.
        if (event.shiftKey && index <= 0) {
          event.preventDefault();
          items[items.length - 1].focus();
        } else if (!event.shiftKey && index === items.length - 1) {
          event.preventDefault();
          items[0].focus();
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          className="md:hidden"
          ref={panelRef}
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          <nav
            aria-label="Mobile"
            className="mt-3 rounded-3xl border border-white/40 bg-white/85 p-3 shadow-[0_10px_30px_rgba(14,25,40,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90"
          >
            <ul className="list-none">
              {links.map((link) => (
                <li key={link.to}>
                  <MobileNavLink to={link.to} onClick={onClose}>
                    {link.label}
                  </MobileNavLink>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
