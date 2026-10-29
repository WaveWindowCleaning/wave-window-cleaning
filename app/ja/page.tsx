import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageSquare, ShieldCheck, CloudRain, Sparkles, MapPin } from 'lucide-react'
import { SITE, BUSINESS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'ウェーブ窓清掃｜ユタ州セントジョージの窓・ソーラーパネル清掃',
  description:
    'ユタ州セントジョージの住宅・店舗向け窓清掃、ソーラーパネル清掃、網戸・硬水汚れの除去。お見積もり無料。ご連絡は英語でお願いいたします。',
  alternates: {
    canonical: '/ja',
    languages: { 'ja-JP': '/ja', 'en-US': '/', 'es-US': '/es' },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: `${SITE.url}/ja`,
    siteName: 'Wave Window Cleaning',
    title: 'ウェーブ窓清掃｜ユタ州セントジョージ',
    description: 'すじ残りのない窓清掃とソーラーパネル清掃。お見積もり無料。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Wave Window Cleaning' }],
  },
}

const SMS = 'sms:+14355009720?&body=Hello%2C%20I%27d%20like%20a%20free%20quote%20from%20Wave%20Window%20Cleaning.'

const services = [
  { title: '住宅の窓清掃', desc: '内側・外側の窓ガラスを清掃します。外側の清掃では、サッシ・窓枠・敷居も含まれます。', img: '/photos/picture-window-view.jpg', alt: '砂漠の景色が見える、きれいな大きな窓' },
  { title: 'ソーラーパネル清掃', desc: 'ほこりや汚れの膜を丁寧に洗い流し、パネルが本来の性能を発揮できるようお手伝いします。', img: '/photos/solar-panels-red-rocks.jpg', alt: '赤い岩山を背景にしたきれいなソーラーパネル' },
  { title: '網戸・硬水汚れの除去', desc: 'ユタ州の水はミネラル分が多く、通常の清掃では落ちにくい汚れが付きます。網戸の清掃と硬水汚れの除去に対応します。', img: '/hardwater-after.png', alt: '硬水汚れを落とした後の窓' },
  { title: '店舗・事業所の窓清掃', desc: '店舗、オフィス、小規模な商業ビルに対応し、営業時間に合わせてお伺いします。', img: '/photos/commercial-studio.jpg', alt: '店舗のきれいな大きな窓' },
]

const steps = [
  { n: '1', title: 'お見積もり（無料）', desc: 'お電話またはテキストメッセージでご連絡ください。ご依頼は英語でお願いします。' },
  { n: '2', title: '料金と日時の確認', desc: '作業開始前に料金を確定します。追加料金はありません。' },
  { n: '3', title: 'すっきりきれいな窓', desc: '外側の窓清掃後7日以内に雨で汚れた場合は、無料で再清掃します。' },
]

export default function JapanesePage() {
  return (
    <div lang="ja">
      <header className="bg-brand-navy px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/ja" aria-label="Wave Window Cleaning ホーム">
            <Image src="/logo.png" alt="Wave Window Cleaning" width={120} height={38} className="h-9 w-auto brightness-200" />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/" lang="en" hrefLang="en" className="text-white text-sm font-medium underline hover:no-underline">
              English
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 text-white text-sm font-semibold hover:underline">
              <Phone size={15} aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="relative overflow-hidden bg-brand-navy">
          <Image
            src="/photos/patio-windows.jpg"
            alt="セントジョージの庭に面したきれいな窓"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2535]/95 via-[#0F2535]/80 to-[#0F2535]/55" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              ウェーブ窓清掃
              <span className="block mt-2 text-brand-accent text-3xl sm:text-4xl lg:text-5xl">ユタ州セントジョージの窓・ソーラーパネル清掃</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
              セントジョージとワシントン郡の住宅・店舗向けに、窓とソーラーパネルの清掃を行っています。お見積もりは無料です。
              なお、ご連絡・作業の対応言語は英語となります。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-black text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition"
              >
                <Phone size={18} aria-hidden="true" />
                {SITE.phoneDisplay} に電話
              </a>
              <a
                href={SMS}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/15 transition"
              >
                <MessageSquare size={18} aria-hidden="true" />
                テキストを送る
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { Icon: Sparkles, title: 'Googleで星5つ', sub: 'すべてのレビューが星5つです' },
              { Icon: ShieldCheck, title: '許可・保険加入済み', sub: '保険の証明書は ご希望により提示します' },
              { Icon: CloudRain, title: '7日間の雨天保証', sub: '雨で汚れたら無料で再清掃' },
            ].map(({ Icon, title, sub }) => (
              <div key={title}>
                <Icon className="mx-auto text-brand-navy" size={28} aria-hidden="true" />
                <p className="mt-2 font-bold text-charcoal">{title}</p>
                <p className="text-sm text-muted">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl lg:text-4xl font-black text-charcoal tracking-tight">サービス内容</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <article key={s.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                  <div className="relative aspect-[4/3]">
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-charcoal leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-center text-3xl lg:text-4xl font-black text-charcoal tracking-tight">ご利用の流れ</h2>
            <ol className="mt-10 grid md:grid-cols-3 gap-6">
              {steps.map((st) => (
                <li key={st.n} className="bg-surface rounded-2xl p-6 border border-gray-100">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white font-black">{st.n}</span>
                  <h3 className="mt-4 font-bold text-lg text-charcoal">{st.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{st.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-14 bg-brand-navy text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight">お客様の声</h2>
            <p className="mt-3 text-white/85">Googleのレビューはすべて星5つです。レビューは英語で書かれています。</p>
            <a
              href="https://share.google/XBO6pCy18W05LUGLt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-white text-brand-navy font-bold px-6 py-3 rounded-full hover:-translate-y-0.5 transition"
            >
              Googleでレビューを見る
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-charcoal tracking-tight">お見積もりは無料です</h2>
            <p className="mt-3 text-muted">お電話またはテキストでご連絡ください。ご連絡は英語でお願いいたします。</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-black px-8 py-4 rounded-full hover:bg-brand-navy-dark transition"
              >
                <Phone size={18} aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={SMS}
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy font-bold px-8 py-4 rounded-full hover:bg-brand-navy hover:text-white transition"
              >
                <MessageSquare size={18} aria-hidden="true" />
                テキストを送る
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-navy-dark text-white/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 text-sm text-center space-y-3">
          <p className="flex items-center justify-center gap-1.5">
            <MapPin size={14} aria-hidden="true" /> {BUSINESS.location} · 月曜〜土曜 午前8時〜午後6時
          </p>
          <p>
            <a href={`mailto:${SITE.email}`} className="underline hover:text-white">{SITE.email}</a> · {SITE.phoneDisplay}
          </p>
          <p className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Link href="/privacy" lang="en" className="underline hover:text-white">Privacy Policy (English)</Link>
            <Link href="/terms" lang="en" className="underline hover:text-white">Terms &amp; Guarantee (English)</Link>
            <Link href="/" lang="en" className="underline hover:text-white">English</Link>
          </p>
          <p className="text-white/70">© {new Date().getFullYear()} Wave Window Cleaning（{BUSINESS.legalName} の屋号）</p>
        </div>
      </footer>
    </div>
  )
}
