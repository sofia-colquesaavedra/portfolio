window.VISUALS = {
  system: `
  <svg viewBox="0 0 400 260" aria-hidden="true">
    <rect x="24" y="24" width="352" height="212" rx="16" fill="var(--paper)"/>
    <g font-family="Inter, sans-serif" font-size="10" fill="var(--muted)">
      <text x="44" y="52">color.primary</text><text x="44" y="122">radius / spacing</text><text x="232" y="52">components</text>
    </g>
    <g>
      <rect x="44" y="62" width="34" height="34" rx="8" fill="var(--accent)"/>
      <rect x="84" y="62" width="34" height="34" rx="8" fill="var(--accent)" opacity=".65"/>
      <rect x="124" y="62" width="34" height="34" rx="8" fill="var(--accent)" opacity=".35"/>
      <rect x="164" y="62" width="34" height="34" rx="8" fill="var(--accent-2)"/>
    </g>
    <g fill="none" stroke="var(--ink)" stroke-width="1.5" opacity=".5">
      <rect x="44" y="134" width="30" height="30" rx="2"/><rect x="84" y="134" width="30" height="30" rx="8"/><rect x="124" y="134" width="30" height="30" rx="15"/>
    </g>
    <g fill="var(--ink)" opacity=".15"><rect x="44" y="180" width="8" height="36"/><rect x="58" y="188" width="8" height="28"/><rect x="72" y="196" width="8" height="20"/><rect x="86" y="202" width="8" height="14"/></g>
    <rect x="232" y="62" width="124" height="32" rx="16" fill="var(--accent)"/>
    <rect x="262" y="74" width="64" height="8" rx="4" fill="#fff" opacity=".9"/>
    <rect x="232" y="104" width="124" height="32" rx="16" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
    <rect x="262" y="116" width="64" height="8" rx="4" fill="var(--accent)" opacity=".7"/>
    <rect x="232" y="148" width="124" height="68" rx="12" fill="var(--bg)"/>
    <circle cx="252" cy="170" r="10" fill="var(--accent-2)"/>
    <rect x="270" y="164" width="70" height="6" rx="3" fill="var(--ink)" opacity=".5"/>
    <rect x="270" y="176" width="44" height="5" rx="2.5" fill="var(--ink)" opacity=".2"/>
    <rect x="244" y="194" width="100" height="10" rx="5" fill="var(--ink)" opacity=".08"/>
  </svg>`,
  ops: `
  <svg viewBox="0 0 400 260" aria-hidden="true">
    <g font-family="Inter, sans-serif" font-size="10" font-weight="600">
      <rect x="28" y="96" width="88" height="68" rx="14" fill="var(--paper)"/>
      <text x="72" y="124" text-anchor="middle" fill="var(--ink)">Design</text>
      <rect x="48" y="134" width="48" height="6" rx="3" fill="var(--accent)" opacity=".5"/>
      <rect x="156" y="40" width="88" height="68" rx="14" fill="var(--paper)"/>
      <text x="200" y="68" text-anchor="middle" fill="var(--ink)">Dev</text>
      <rect x="176" y="78" width="48" height="6" rx="3" fill="var(--accent-2)" opacity=".6"/>
      <rect x="156" y="152" width="88" height="68" rx="14" fill="var(--paper)"/>
      <text x="200" y="180" text-anchor="middle" fill="var(--ink)">QA</text>
      <rect x="176" y="190" width="48" height="6" rx="3" fill="var(--accent)" opacity=".3"/>
      <rect x="284" y="96" width="88" height="68" rx="14" fill="var(--accent)"/>
      <text x="328" y="124" text-anchor="middle" fill="#fff">Release</text>
      <text x="328" y="146" text-anchor="middle" fill="#fff" font-size="16">−67%</text>
    </g>
    <g fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 4" opacity=".35">
      <path d="M116 120 C 136 120, 136 74, 156 74"/><path d="M116 140 C 136 140, 136 186, 156 186"/>
      <path d="M244 74 C 264 74, 264 120, 284 120"/><path d="M244 186 C 264 186, 264 140, 284 140"/>
    </g>
    <g transform="translate(200 130)">
      <circle r="18" fill="var(--accent-2)"/>
      <path d="M0 -9 L2.5 -2.5 L9 0 L2.5 2.5 L0 9 L-2.5 2.5 L-9 0 L-2.5 -2.5 Z" fill="#fff"/>
    </g>
  </svg>`,
  mvp: `
  <svg viewBox="0 0 400 260" aria-hidden="true">
    <rect x="70" y="24" width="120" height="236" rx="22" fill="var(--ink)"/>
    <rect x="78" y="32" width="104" height="228" rx="16" fill="var(--paper)"/>
    <rect x="90" y="48" width="40" height="6" rx="3" fill="var(--ink)" opacity=".4"/>
    <rect x="90" y="64" width="80" height="50" rx="10" fill="var(--accent)"/>
    <rect x="100" y="76" width="30" height="5" rx="2.5" fill="#fff" opacity=".7"/>
    <rect x="100" y="90" width="50" height="10" rx="3" fill="#fff"/>
    <g fill="var(--bg)"><circle cx="102" cy="134" r="10"/><circle cx="130" cy="134" r="10"/><circle cx="158" cy="134" r="10"/></g>
    <g><rect x="90" y="156" width="80" height="22" rx="6" fill="var(--bg)"/><rect x="90" y="184" width="80" height="22" rx="6" fill="var(--bg)"/><rect x="90" y="212" width="80" height="22" rx="6" fill="var(--bg)"/></g>
    <g fill="none" stroke="var(--ink)" stroke-width="1.5" opacity=".5">
      <rect x="226" y="52" width="70" height="44" rx="8"/><rect x="226" y="120" width="70" height="44" rx="8"/><rect x="226" y="188" width="70" height="44" rx="8"/>
      <path d="M261 96 V120 M261 164 V188"/>
    </g>
    <rect x="306" y="62" width="64" height="24" rx="12" fill="var(--accent-2)"/>
    <text x="338" y="78" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#fff">CL</text>
    <g fill="var(--ink)" opacity=".25"><rect x="236" y="66" width="40" height="5" rx="2.5"/><rect x="236" y="134" width="50" height="5" rx="2.5"/><rect x="236" y="202" width="34" height="5" rx="2.5"/></g>
  </svg>`
};
