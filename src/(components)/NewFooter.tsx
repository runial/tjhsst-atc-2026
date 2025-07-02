import {
  FOOTER_LEFTHAND_TEXT,
  FOOTER_AUTHOR_INFO,
  FOOTER_LINKS,
} from "@/app/constants";
import { ExternalLink } from "@/(components)/ExternalLink";

export function Footer() {
  return (
    <footer className="grid grid-cols-2 md:flex justify-between pt-4 pb-12 w-7xl max-w-full mx-auto px-10">
      <div className="flex flex-col md:flex-row gap-5">
        <p>{FOOTER_LEFTHAND_TEXT}</p>
        <p>{FOOTER_AUTHOR_INFO}</p>
      </div>
      <ul className="flex flex-col md:flex-row gap-5">
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