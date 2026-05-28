export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          e-commerce security
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Find over-privileged Shopify apps<br />
          <span className="text-[#58a6ff]">stealing your data</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Instantly scan every app installed in your Shopify store and get a clear audit report showing which ones have permissions they have no business having.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Audit — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Works with any Shopify store.</p>
      </section>

      {/* Flags */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { icon: '🔍', title: 'Deep Permission Scan', desc: 'Maps every OAuth scope each app holds against what it actually needs.' },
          { icon: '🚨', title: 'Risk Flagging', desc: 'Highlights apps with read_customers, write_orders, or other high-risk scopes.' },
          { icon: '📋', title: 'Audit Report', desc: 'Downloadable PDF report you can share with your team or compliance officer.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited app scans',
              'Full permission breakdown',
              'Risk severity scoring',
              'PDF audit reports',
              'Email alerts on new installs',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the app connect to my Shopify store?',
              a: 'We use Shopify OAuth to request read-only access to your installed apps list. We never write to your store or access customer data.',
            },
            {
              q: 'What counts as an "excessive" permission?',
              a: 'We maintain a curated database mapping each app category to the minimum scopes required. Any scope beyond that baseline is flagged as excessive.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. Cancel from your billing portal with one click. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Shopify App Permissions Audit. All rights reserved.
      </footer>
    </main>
  )
}
