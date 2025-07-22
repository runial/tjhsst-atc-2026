import { BannerNotice } from "@/(components)/BannerNotice";
import {
  ATCONNECT_BANNER_TEXT,
  ATCONNECT_BANNER_LINK,
} from "@/app/constants";

export function ATConnectBanner() {
  return (
    <BannerNotice text={ATCONNECT_BANNER_TEXT} link={ATCONNECT_BANNER_LINK} />
  );
}