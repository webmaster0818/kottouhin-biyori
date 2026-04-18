import { Metadata } from "next";
import IhinSeiriClient from "./IhinSeiriClient";

export const metadata: Metadata = {
  title: "遺品整理で骨董品が出てきたら【2026年最新】対処法・相続税・注意点｜骨董品買取びより",
  description: "遺品整理で骨董品が出てきた時の正しい対処法を解説。やるべきこと・やってはいけないこと、相続税の考え方、遺品整理業者と骨董品買取業者の違い、失敗事例と教訓をまとめました。",
  alternates: { canonical: "/guide/ihin-seiri" },
};

export default function IhinSeiriPage() {
  return <IhinSeiriClient />;
}
