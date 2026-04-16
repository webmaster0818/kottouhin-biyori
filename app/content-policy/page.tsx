import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "記事の制作ポリシー | 骨董品買取びより",
  description: "骨董品買取びよりの記事制作ポリシーです。コンテンツ制作の基本方針、情報の正確性への取り組み、制作フローについて説明します。",
};

export default function ContentPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#8B7D72] mb-8">
            <Link href="/" className="hover:text-[#8B4513] transition">トップ</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2C1810]">記事の制作ポリシー</span>
          </nav>

          <h1 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-8 pb-4 border-b-2 border-[#C9A96E]">記事の制作ポリシー</h1>

          <div className="prose-policy space-y-10 text-[#2C1810] text-sm leading-relaxed">
            <p>
              「骨董品買取びより」は、骨董品・美術品の売却を検討される方に向けて、正確で公平な情報を提供することを使命としています。本ポリシーでは、当サイトのコンテンツ制作における基本方針と品質管理体制について説明します。
            </p>

            {/* 基本方針 */}
            <section>
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-6">基本方針</h2>

              <div className="grid md:grid-cols-2 gap-5">
                {/* 方針1 */}
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                    <h3 className="font-bold text-[#2C1810]">ユーザーファースト</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed">
                    骨董品の正しい知識と最適な売却先の提供を最優先とします。利用者が安心して骨董品の売却判断ができるよう、鑑定の基礎知識、市場の動向、信頼できる業者の情報を包括的にお届けします。売上や広告収益よりも、利用者の利益を常に優先します。
                  </p>
                </div>

                {/* 方針2 */}
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                    <h3 className="font-bold text-[#2C1810]">情報の正確性</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed">
                    買取相場や業者情報は定期的に更新し、最新の状態を保ちます。作家情報、流派の解説、鑑定ポイントなどの専門的な内容は、信頼できる文献・資料に基づいて正確に記述します。誤った情報が利用者の判断を誤らせないよう、ファクトチェックを徹底します。
                  </p>
                </div>

                {/* 方針3 */}
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                    <h3 className="font-bold text-[#2C1810]">中立性・公平性</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed">
                    特定の買取業者への偏りのない、公平な情報提供に努めます。業者の比較・評価にあたっては、統一した基準を用い、アフィリエイト報酬の有無によって評価やランキングを操作することはありません。メリット・デメリットの両面を正直に伝えます。
                  </p>
                </div>

                {/* 方針4 */}
                <div className="bg-white rounded-xl border border-[#E0D5C8] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8B4513] text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                    <h3 className="font-bold text-[#2C1810]">わかりやすさ</h3>
                  </div>
                  <p className="text-[#5C4A3A] leading-relaxed">
                    骨董品の世界には専門用語が多く、初心者にとっては敷居が高い分野です。当サイトでは、専門用語を初心者にもわかりやすく解説し、骨董品に詳しくない方でも安心して情報を活用できるよう配慮します。必要に応じて用語解説や図解を用います。
                  </p>
                </div>
              </div>
            </section>

            {/* 制作フロー */}
            <section>
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-6">コンテンツ制作フロー</h2>
              <p className="mb-6">
                当サイトでは、すべてのコンテンツを以下の4つのステップを経て制作・公開しています。
              </p>

              <div className="bg-white rounded-2xl border border-[#E0D5C8] p-6 md:p-8 space-y-8">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#8B4513] text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
                    <div className="w-0.5 flex-1 bg-[#E0D5C8] mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-bold text-[#2C1810] text-base mb-2">企画・調査</h3>
                    <p className="text-[#5C4A3A] leading-relaxed">
                      利用者のニーズと検索意図を分析し、テーマを選定します。骨董品・美術品に関する文献、業界資料、公式情報を収集し、信頼性の高い情報源に基づいて記事の骨格を設計します。買取相場については、複数の情報源を照合して参考値を算出します。
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#8B4513] text-white flex items-center justify-center font-bold text-lg shrink-0">2</div>
                    <div className="w-0.5 flex-1 bg-[#E0D5C8] mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-bold text-[#2C1810] text-base mb-2">執筆・制作</h3>
                    <p className="text-[#5C4A3A] leading-relaxed">
                      骨董品・美術品の知識を持つライターが、調査結果に基づいて記事を執筆します。専門用語にはわかりやすい解説を付け、初心者でも理解できる構成を心がけます。作家の経歴や作品の特徴については、美術辞典や展覧会図録等の信頼できる資料に基づきます。
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#8B4513] text-white flex items-center justify-center font-bold text-lg shrink-0">3</div>
                    <div className="w-0.5 flex-1 bg-[#E0D5C8] mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-bold text-[#2C1810] text-base mb-2">校正・ファクトチェック</h3>
                    <p className="text-[#5C4A3A] leading-relaxed">
                      編集担当者が内容を精査し、事実関係の確認（ファクトチェック）を行います。買取相場の数値、業者の基本情報（対応品目、エリア、買取方法等）、作家の生没年・代表作品などの事実情報に誤りがないかを複数の資料で確認します。
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#8B4513] text-white flex items-center justify-center font-bold text-lg shrink-0">4</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#2C1810] text-base mb-2">公開・定期更新</h3>
                    <p className="text-[#5C4A3A] leading-relaxed">
                      校正・ファクトチェック完了後に記事を公開します。公開後も、買取相場の変動、業者のサービス内容変更、新たな知見の追加等に応じて定期的に情報を更新します。古くなった情報が利用者の判断を誤らせないよう、継続的なメンテナンスを行います。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* アフィリエイトについて */}
            <section>
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">アフィリエイト広告について</h2>
              <div className="bg-white rounded-xl border border-[#E0D5C8] p-6">
                <p className="text-[#5C4A3A] leading-relaxed">
                  当サイトはアフィリエイトプログラムに参加しており、掲載する買取業者へのリンクを通じて利用者がサービスを利用された場合、当社が紹介報酬を受け取ることがあります。ただし、アフィリエイト報酬の有無や金額は、記事の内容、業者の評価、ランキングの順位に一切影響を与えません。すべてのコンテンツは、上記の基本方針に基づき、利用者にとって有益かつ公正な情報提供を目的として制作しています。
                </p>
              </div>
            </section>

            {/* 情報の訂正について */}
            <section>
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">情報の訂正・ご指摘について</h2>
              <div className="bg-white rounded-xl border border-[#E0D5C8] p-6">
                <p className="text-[#5C4A3A] leading-relaxed">
                  当サイトに掲載されている情報に誤りや不正確な点を発見された場合は、お問い合わせフォームよりご連絡ください。いただいたご指摘は速やかに確認し、必要に応じて記事の修正・更新を行います。利用者からのフィードバックは、コンテンツの品質向上に欠かせないものと考えています。
                </p>
              </div>
            </section>

            {/* 運営者情報 */}
            <section>
              <h2 className="font-serif-jp text-xl font-bold text-[#8B4513] mb-4">運営者情報</h2>
              <div className="bg-white rounded-xl border border-[#E0D5C8] p-6">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#E0D5C8]">
                      <th className="text-left py-2 pr-4 text-[#8B7D72] font-medium w-32">運営者</th>
                      <td className="py-2 text-[#2C1810]">株式会社MediaX</td>
                    </tr>
                    <tr className="border-b border-[#E0D5C8]">
                      <th className="text-left py-2 pr-4 text-[#8B7D72] font-medium">所在地</th>
                      <td className="py-2 text-[#2C1810]">東京都渋谷区</td>
                    </tr>
                    <tr>
                      <th className="text-left py-2 pr-4 text-[#8B7D72] font-medium">サイト名</th>
                      <td className="py-2 text-[#2C1810]">骨董品買取びより</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 制定日 */}
            <div className="bg-white rounded-xl border border-[#E0D5C8] p-6 text-center">
              <p className="text-[#8B7D72]">制定日: 2026年4月16日</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
