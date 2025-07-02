import { ExternalLink } from "@/(components)/ExternalLink";

interface Link {
  linkUrl: string;
  linkText: string;
  isExternal: boolean;
}

interface BannerNoticeProps {
  text: string;
  link?: Link;
}

export function BannerNotice({ text, link }: BannerNoticeProps) {
  return (
    <div className="w-full flex justify-between px-10 py-3 bg-primary">
      <h3 className="text-bg">{text}</h3>
      {
        link && (
          link.isExternal
            ? <ExternalLink href={link.linkUrl}><h3 className="text-bg underline">{link.linkText}</h3></ExternalLink>
            : <a href={link.linkUrl}><h3 className="text-bg underline">{link.linkText}</h3></a>
        )
      }
    </div>
  );
}