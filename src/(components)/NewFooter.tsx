import {
  FOOTER_LEFTHAND_TEXT,
  FOOTER_LINKS,
} from "@/app/constants";
import { ExternalLink } from "@/(components)/ExternalLink";

export function Footer() {
  return (
    <footer className="flex justify-between pt-4 pb-12 w-7xl max-w-full mx-auto px-10">
      <p>{FOOTER_LEFTHAND_TEXT}</p>
      <ul className="flex gap-5">
        {
          FOOTER_LINKS.map(({ linkText, linkUrl }) => (
            <li key={linkText}>
              <ExternalLink href={linkUrl}>{linkText}</ExternalLink>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}