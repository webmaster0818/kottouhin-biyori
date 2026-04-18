import { Metadata } from "next";
import categories from "@/data/categories.json";
import CategoryPageClient from "./CategoryPageClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.name}買取おすすめ業者3選【2026年最新】相場・査定のポイント｜骨董品買取びより`,
    description: `${cat.name}の買取相場は${cat.priceRange}。${cat.name}を高く売るための査定ポイントやおすすめ買取業者を徹底比較。`,
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  return <CategoryPageClient slug={slug} />;
}
