"use client";

import { useI18n } from "./language-provider";

export default function T({ k }: { k: string }) {
  const { t } = useI18n();
  return <>{t(k)}</>;
}
