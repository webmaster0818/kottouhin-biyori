import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "利用規約 | 骨董品買取びより",
  description: "骨董品買取びよりの利用規約です。本サービスのご利用にあたっての条件・禁止事項・免責事項等をご確認ください。",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#8B7D72] mb-8">
            <Link href="/" className="hover:text-[#8B4513] transition">トップ</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2C1810]">利用規約</span>
          </nav>

          <h1 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-8 pb-4 border-b-2 border-[#C9A96E]">利用規約</h1>

          <div className="prose-policy space-y-10 text-[#2C1810] text-sm leading-relaxed">
            <p>
              この利用規約（以下「本規約」といいます）は、株式会社MediaX（以下「当社」といいます）が運営するウェブサイト「骨董品買取びより」（以下「本サービス」といいます）の利用条件を定めるものです。本サービスをご利用になるすべての方（以下「利用者」といいます）は、本規約に同意のうえご利用ください。
            </p>

            {/* 第1条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第1条（サービスの目的）</h2>
              <p>
                本サービスは、骨董品・美術品の買取業者比較情報、鑑定知識、買取相場情報その他関連情報を提供することを目的とした情報メディアです。本サービスは買取業者そのものではなく、骨董品・美術品の売買契約の当事者とはなりません。
              </p>
            </section>

            {/* 第2条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第2条（定義）</h2>
              <p>本規約において使用する用語の定義は以下のとおりとします。</p>
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>「本サービス」とは、当社が運営するウェブサイト「骨董品買取びより」およびそれに付随する一切のサービスをいいます。</li>
                <li>「利用者」とは、本サービスを利用するすべての方をいいます。</li>
                <li>「コンテンツ」とは、本サービス上で提供されるテキスト、画像、動画その他一切の情報をいいます。</li>
                <li>「提携業者」とは、本サービスにおいて紹介する骨董品・美術品の買取業者をいいます。</li>
              </ol>
            </section>

            {/* 第3条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第3条（規約への同意）</h2>
              <p>
                利用者は、本サービスを利用することにより、本規約のすべての条項に同意したものとみなします。本規約に同意いただけない場合は、本サービスの利用をお控えください。
              </p>
            </section>

            {/* 第4条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第4条（規約の変更）</h2>
              <p>
                当社は、必要と判断した場合には、利用者への事前の通知なく本規約を変更することがあります。変更後の利用規約は、本サービス上に掲載した時点から効力を生じるものとし、利用者が変更後に本サービスを利用した場合、変更後の規約に同意したものとみなします。
              </p>
            </section>

            {/* 第5条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第5条（提供する情報について）</h2>
              <p>本サービスでは、以下の情報を提供します。</p>
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>骨董品・美術品の買取業者の比較・紹介情報</li>
                <li>骨董品・美術品の鑑定に関する知識・解説</li>
                <li>骨董品・美術品の買取相場に関する情報</li>
                <li>骨董品の保管・管理に関する情報</li>
                <li>骨董品・美術品に関する作家・流派の解説</li>
                <li>その他骨董品・美術品に関連する情報</li>
              </ol>
              <p className="mt-3">
                ただし、掲載情報は参考情報であり、実際の買取価格・査定額を保証するものではありません。
              </p>
            </section>

            {/* 第6条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第6条（禁止事項）</h2>
              <p>利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                <li>本サービスのサーバーまたはネットワークに過度の負荷をかける行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                <li>他の利用者に成りすます行為</li>
                <li>当社のサービスに関連して反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>本サービスのコンテンツを無断で複製、転載、改変、配布する行為</li>
                <li>本サービスの情報を利用して、虚偽の買取依頼や査定依頼を行う行為</li>
                <li>本サービス上の情報を営利目的で無断利用する行為</li>
                <li>当社または提携業者の信用を毀損する行為</li>
                <li>自動化されたスクリプト等により本サービスにアクセスする行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            {/* 第7条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第7条（知的財産権）</h2>
              <p>
                本サービスに掲載されているコンテンツ（テキスト、画像、デザイン、ロゴ、レイアウト等）に関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。利用者は、当社の事前の書面による許可なく、これらを複製、転載、改変、頒布、公衆送信その他の方法により利用することはできません。
              </p>
            </section>

            {/* 第8条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第8条（外部リンク・提携業者について）</h2>
              <p>
                本サービスには、提携業者を含む外部のウェブサイトへのリンクが含まれます。当社は、外部サイトの内容、安全性、適法性等について一切の責任を負いません。外部サイトの利用は、利用者ご自身の責任において行ってください。
              </p>
            </section>

            {/* 第9条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第9条（アフィリエイトプログラムについて）</h2>
              <p>
                本サービスは、アフィリエイトプログラムに参加しており、掲載する買取業者へのリンクを通じて利用者がサービスを利用された場合、当社が報酬を受け取ることがあります。ただし、アフィリエイト報酬の有無は、コンテンツの内容や業者の評価・ランキングには影響を与えません。当社は、利用者にとって有益かつ公正な情報提供に努めます。
              </p>
            </section>

            {/* 第10条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第10条（買取相場情報について）</h2>
              <p>
                本サービスに掲載される買取相場情報は、公開情報および独自調査に基づく参考値であり、実際の買取価格を保証するものではありません。骨董品・美術品の価格は、品物の状態、市場動向、鑑定士の評価等により大きく変動する可能性があります。実際の売却にあたっては、必ず複数の買取業者に査定を依頼してください。
              </p>
            </section>

            {/* 第11条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第11条（免責事項）</h2>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>当社は、本サービスに掲載する情報の正確性、完全性、有用性、最新性等について保証するものではありません。</li>
                <li>当社は、利用者が本サービスの情報を利用したことにより生じた一切の損害について、直接的・間接的を問わず責任を負いません。</li>
                <li>当社は、利用者と提携業者との間で生じたトラブル・紛争について、一切の責任を負いません。</li>
                <li>当社は、本サービスの中断、停止、変更、終了等により生じた損害について責任を負いません。</li>
                <li>当社は、本サービスにおけるセキュリティ上の欠陥、エラー、バグ等の不具合がないことを保証しません。</li>
              </ol>
            </section>

            {/* 第12条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第12条（損害賠償）</h2>
              <p>
                利用者が本規約に違反し、当社または第三者に損害を与えた場合、利用者はその損害を賠償する責任を負うものとします。
              </p>
            </section>

            {/* 第13条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第13条（サービスの変更・終了）</h2>
              <p>
                当社は、利用者への事前の通知なく、本サービスの内容を変更し、または本サービスの提供を終了することがあります。これにより利用者に生じた損害について、当社は一切の責任を負いません。
              </p>
            </section>

            {/* 第14条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第14条（個人情報の取扱い）</h2>
              <p>
                本サービスにおける個人情報の取扱いについては、別途定める「<Link href="/privacy/" className="text-[#8B4513] underline hover:text-[#C9A96E] transition">プライバシーポリシー</Link>」に従うものとします。
              </p>
            </section>

            {/* 第15条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第15条（分離可能性）</h2>
              <p>
                本規約のいずれかの条項が法令等により無効または執行不能と判断された場合であっても、本規約の残りの条項は引き続き有効に存続するものとします。
              </p>
            </section>

            {/* 第16条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第16条（準拠法・管轄裁判所）</h2>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
              </ol>
            </section>

            {/* 第17条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第17条（運営者情報）</h2>
              <div className="bg-white rounded-xl border border-[#E0D5C8] p-6 mt-3">
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
                      <th className="text-left py-2 pr-4 text-[#8B7D72] font-medium">お問い合わせ</th>
                      <td className="py-2 text-[#2C1810]">本サイトに掲載されている情報に関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。</td>
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
