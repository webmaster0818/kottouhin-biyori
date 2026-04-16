import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 骨董品買取びより",
  description: "骨董品買取びよりのプライバシーポリシーです。個人情報の取扱い方針、Cookie・アクセス解析ツールの利用等について説明します。",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <SiteHeader />
      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#8B7D72] mb-8">
            <Link href="/" className="hover:text-[#8B4513] transition">トップ</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2C1810]">プライバシーポリシー</span>
          </nav>

          <h1 className="font-serif-jp text-2xl md:text-3xl font-bold text-[#2C1810] mb-8 pb-4 border-b-2 border-[#C9A96E]">プライバシーポリシー</h1>

          <div className="prose-policy space-y-10 text-[#2C1810] text-sm leading-relaxed">
            <p>
              株式会社MediaX（以下「当社」といいます）は、当社が運営するウェブサイト「骨董品買取びより」（以下「本サービス」といいます）において取得する個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>

            {/* 第1条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第1条（個人情報の定義）</h2>
              <p>
                本ポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できる情報、および個人識別符号が含まれる情報をいいます。
              </p>
            </section>

            {/* 第2条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第2条（個人情報の収集方法）</h2>
              <p>当社は、以下の方法により個人情報を取得することがあります。</p>
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>お問い合わせフォームへの入力</li>
                <li>メールによるお問い合わせ</li>
                <li>アクセス解析ツール（Google Analytics等）による自動取得</li>
                <li>Cookie等の技術による自動取得</li>
                <li>提携業者への送客時に利用者が入力した情報（当該業者を通じて間接的に取得する場合）</li>
              </ol>
            </section>

            {/* 第3条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第3条（個人情報の利用目的）</h2>
              <p>当社は、取得した個人情報を以下の目的で利用します。</p>
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>お問い合わせへの対応・回答</li>
                <li>本サービスの提供・運営・維持・改善</li>
                <li>利用者の利用状況の分析・統計処理</li>
                <li>本サービスの品質向上およびコンテンツの改善</li>
                <li>新機能・新コンテンツの開発</li>
                <li>不正利用の防止・対応</li>
                <li>利用規約に違反する行為への対応</li>
                <li>本サービスに関する重要なお知らせの通知</li>
                <li>骨董品・美術品に関する情報提供（利用者の同意がある場合）</li>
                <li>提携業者へのご案内・送客</li>
                <li>アフィリエイトプログラムの運用・効果測定</li>
                <li>広告の配信・効果測定</li>
                <li>その他上記利用目的に付随する業務</li>
              </ol>
            </section>

            {/* 第4条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第4条（個人情報の第三者提供）</h2>
              <p>当社は、以下の場合を除き、利用者の同意を得ることなく個人情報を第三者に提供しません。</p>
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ol>
            </section>

            {/* 第5条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第5条（Google Analyticsの利用について）</h2>
              <p>
                本サービスでは、利用状況の把握・改善のためにGoogle LLC が提供する「Google Analytics」を使用しています。Google Analyticsは、Cookieを使用して利用者の情報を収集しますが、個人を特定する情報は含まれません。
              </p>
              <p className="mt-2">
                Google Analyticsによるデータ収集・処理の仕組みについては、<a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] underline hover:text-[#C9A96E] transition">Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用</a>をご確認ください。
              </p>
              <p className="mt-2">
                Google Analyticsによるデータ収集を無効にしたい場合は、<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] underline hover:text-[#C9A96E] transition">Google Analyticsオプトアウトアドオン</a>をご利用ください。
              </p>
            </section>

            {/* 第6条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第6条（Cookieの利用について）</h2>
              <p>
                本サービスでは、利用者の利便性向上、アクセス状況の把握、広告配信の最適化のためにCookieを使用しています。Cookieとは、ウェブサイトがブラウザを通じて利用者の端末に保存する小さなテキストデータです。
              </p>
              <p className="mt-2">本サービスでは以下の目的でCookieを使用します。</p>
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>アクセス解析（Google Analytics）</li>
                <li>広告配信・効果測定（アフィリエイト広告を含む）</li>
                <li>サイトの利便性向上</li>
              </ol>
              <p className="mt-2">
                利用者はブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、本サービスの一部機能がご利用いただけなくなることがあります。
              </p>
            </section>

            {/* 第7条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第7条（広告配信について）</h2>
              <p>
                本サービスでは、アフィリエイトプログラムを通じて広告を掲載しています。これらの広告配信にあたり、第三者の広告配信事業者がCookieを使用して、利用者の本サービスおよび他のサイトへのアクセス情報に基づいた広告を配信することがあります。
              </p>
            </section>

            {/* 第8条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第8条（個人情報の管理）</h2>
              <p>
                当社は、利用者の個人情報を正確かつ最新の状態に保つよう努めるとともに、個人情報への不正アクセス、紛失、破壊、改ざんおよび漏洩等を防止するため、合理的な安全管理措置を講じます。
              </p>
            </section>

            {/* 第9条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第9条（個人情報の開示・訂正・削除）</h2>
              <p>
                利用者ご本人から個人情報の開示、訂正、追加、削除、利用停止の請求があった場合、本人確認のうえ、合理的な期間内に対応します。ご請求は、下記のお問い合わせ窓口までご連絡ください。
              </p>
            </section>

            {/* 第10条 */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">第10条（プライバシーポリシーの変更）</h2>
              <p>
                当社は、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、本サービス上に掲載した時点から効力を生じるものとします。重要な変更がある場合は、本サービス上で適切な方法でお知らせします。
              </p>
            </section>

            {/* お問い合わせ */}
            <section>
              <h2 className="font-serif-jp text-lg font-bold text-[#8B4513] mb-3">お問い合わせ窓口</h2>
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
                      <th className="text-left py-2 pr-4 text-[#8B7D72] font-medium">お問い合わせ</th>
                      <td className="py-2 text-[#2C1810]">本サイトのお問い合わせフォームよりご連絡ください。</td>
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
