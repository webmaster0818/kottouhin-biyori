import { Metadata } from "next";
import SoubaClient from "./SoubaClient";

export const metadata: Metadata = {
  title: "骨董品買取相場まとめ【2026年最新】品目別・作家別の買取価格一覧｜骨董品買取びより",
  description: "骨董品の買取相場を品目別・作家別に徹底解説。掛軸・茶道具・絵画・陶磁器の作家40名の参考相場、高く売るための5つのコツ、2026年の市場トレンドをまとめました。",
  alternates: { canonical: "/guide/souba" },
};

export default function SoubaPage() {
  return <SoubaClient />;
}
