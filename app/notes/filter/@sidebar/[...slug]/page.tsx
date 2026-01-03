"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import css from "./SidebarNotes.module.css";

const TAGS = ["All notes", "Todo", "Work", "Personal", "Shopping"];

export default function SidebarNotes() {
  const params = useParams();
  const currentSlug = params.slug?.[0] || "all";

  return (
    <aside>
      <ul className={css.menuList}>
        {TAGS.map((tag) => {
          const tagSlug = tag === "All notes" ? "all" : tag;
          const href =
            tag === "All notes" ? "/notes/filter/all" : `/notes/filter/${tag}`;
          const isActive = currentSlug === tagSlug;

          return (
            <li key={tag} className={css.menuItem}>
              <Link
                href={href}
                className={`${css.menuLink} ${isActive ? css.active : ""}`}
              >
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
