"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const CONTRACT_ADDRESS =
  "0x280DD55C468cc00AadD675fA030E9914EB3Cee70";

const BSCSCAN_URL =
  `https://bscscan.com/token/${CONTRACT_ADDRESS}`;

const PANCAKESWAP_URL =
  `https://pancakeswap.finance/swap?chainId=56&outputCurrency=${CONTRACT_ADDRESS}`;

const TELEGRAM_URL =
  "https://t.me/saadareserve";

const TWITTER_URL =
  "https://x.com/LanDewa8zme/status/2071886373431500952?s=20";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main style={styles.page}>

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header style={styles.navbar}>
        <div style={styles.navInner}>

          <a
            href="#home"
            style={styles.logoLink}
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="SAADA Reserve Logo"
              style={styles.logo}
            />

            <div style={styles.logoText}>
              <strong style={styles.logoName}>
                SAADA
              </strong>

              <span style={styles.logoSub}>
                RESERVE
              </span>
            </div>
          </a>

          <nav
            style={{
              ...styles.desktopNav,
              ...(menuOpen ? styles.mobileNavOpen : {}),
            }}
          >
            <a
              href="#about"
              style={styles.navLink}
              onClick={closeMenu}
            >
              About
            </a>

            <a
              href="#founder"
              style={styles.navLink}
              onClick={closeMenu}
            >
              Founder
            </a>

            <a
              href="#token"
              style={styles.navLink}
              onClick={closeMenu}
            >
              SAR Token
            </a>

            <a
              href="#tokenomics"
              style={styles.navLink}
              onClick={closeMenu}
            >
              Tokenomics
            </a>

            <a
              href="#security"
              style={styles.navLink}
              onClick={closeMenu}
            >
              Security
            </a>

            <a
              href="#roadmap"
              style={styles.navLink}
              onClick={closeMenu}
            >
              Roadmap
            </a>

            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.navLink}
              onClick={closeMenu}
            >
              Whitepaper
            </a>

            <a
              href="#community"
              style={styles.navLink}
              onClick={closeMenu}
            >
              Community
            </a>
          </nav>

          <a
            href={PANCAKESWAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navBuy}
          >
            Buy SAR
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>


      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        style={styles.hero}
      >
        <div style={styles.heroGlowOne} />
        <div style={styles.heroGlowTwo} />

        <div style={styles.heroContent}>

          <div style={styles.badge}>
            <span style={styles.liveDot} />
            BUILT ON BNB SMART CHAIN
          </div>

          <p style={styles.eyebrow}>
            SAADA RESERVE
          </p>

          <h1 style={styles.heroTitle}>
            The Future of
            <br />
            <span style={styles.goldText}>
              Digital Reserve
            </span>
          </h1>

          <p style={styles.heroDescription}>
            SAADA Reserve is a digital reserve ecosystem
            powered by community intelligence and built on
            BNB Smart Chain.
          </p>

          <div style={styles.heroButtons}>

            <a
              href={PANCAKESWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.primaryButton}
            >
              <span>Buy SAR</span>
              <span style={styles.buttonArrow}>
                ↗
              </span>
            </a>

            <a
              href={BSCSCAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.secondaryButton}
            >
              View on BscScan
            </a>

            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.textButton}
            >
              Read Whitepaper →
            </a>

          </div>

          <div style={styles.contractHero}>

            <span style={styles.contractLabel}>
              SAR CONTRACT
            </span>

            <button
              type="button"
              onClick={copyContract}
              style={styles.contractCopyButton}
            >
              <span style={styles.contractAddress}>
                {CONTRACT_ADDRESS}
              </span>

              <span style={styles.copyText}>
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>

          </div>

        </div>


        <div style={styles.heroVisual}>

          <div style={styles.orbitOuter} />
          <div style={styles.orbitMiddle} />

          <div style={styles.orbitDotOne} />
          <div style={styles.orbitDotTwo} />

          <div style={styles.heroOrb}>

            <div style={styles.orbInner}>

              <img
                src="/logo.png"
                alt="SAR"
                style={styles.orbLogo}
              />

              <div style={styles.orbSymbol}>
                SAR
              </div>

              <div style={styles.orbNetwork}>
                BNB SMART CHAIN
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ====================================================== */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>

          <StatCard
            number="1B"
            label="TOTAL SUPPLY"
            description="1,000,000,000 SAR"
          />

          <StatCard
            number="18"
            label="DECIMALS"
            description="Standard ERC-20 precision"
          />

          <StatCard
            number="0%"
            label="BUY TAX"
            description="No buy tax"
          />

          <StatCard
            number="0%"
            label="SELL TAX"
            description="No sell tax"
          />

        </div>
      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section
        id="about"
        style={styles.section}
      >

        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>
            01
          </span>

          <span style={styles.sectionLabel}>
            ABOUT SAR
          </span>
        </div>


        <div style={styles.aboutGrid}>

          <div>

            <h2 style={styles.sectionTitle}>
              A digital reserve
              <br />
              <span style={styles.goldText}>
                built for the future.
              </span>
            </h2>

          </div>


          <div style={styles.aboutText}>

            <p>
              SAADA Reserve is a digital reserve ecosystem
              designed around long-term sustainability,
              transparency, and community-driven growth.
            </p>

            <p>
              Built on BNB Smart Chain, SAR provides a
              transparent foundation for a growing digital
              reserve ecosystem.
            </p>


            <div style={styles.featureList}>

              <Feature
                number="01"
                title="Transparency"
                text="Verified and open-source smart contract."
              />

              <Feature
                number="02"
                title="Community"
                text="Growth powered by a global community."
              />

              <Feature
                number="03"
                title="Long-Term Vision"
                text="Designed with sustainability at its core."
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER
      ====================================================== */}
      <section
        id="founder"
        style={styles.founderSection}
      >

        <div style={styles.founderGlow} />

        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>
            02
          </span>

          <span style={styles.sectionLabel}>
            FOUNDER & VISION
          </span>
        </div>


        <div style={styles.founderGrid}>

          {/* LEFT */}
          <div style={styles.founderImageWrap}>

            <div style={styles.founderImageFrame}>

              <div style={styles.founderImageGlow} />

              <img
                src="/founder.png"
                alt="Zulfakkar - Founder of SAADA Reserve"
                style={styles.founderImage}
              />

            </div>

            <div style={styles.founderNameCard}>

              <span style={styles.founderSmallLabel}>
                FOUNDER & VISION HOLDER
              </span>

              <h3 style={styles.founderName}>
                ZULFAKKAR
              </h3>

              <div style={styles.founderBrand}>
                SAADA RESERVE
              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div style={styles.founderContent}>

            <span style={styles.founderEyebrow}>
              THE VISION BEHIND
            </span>

            <h2 style={styles.founderTitle}>
              Building a
              <br />
              <span style={styles.goldText}>
                Digital Reserve
              </span>
            </h2>

            <p style={styles.founderDescription}>
              SAADA Reserve was founded with a simple
              vision — to build a transparent, sustainable,
              and community-driven digital reserve ecosystem
              for the future.
            </p>

            <p style={styles.founderDescription}>
              As Founder & Vision Holder, Zulfakkar leads
              the long-term direction of SAADA Reserve and
              its vision for an open digital ecosystem built
              on BNB Smart Chain.
            </p>


            <div style={styles.founderValues}>

              <FounderValue
                number="01"
                title="TRANSPARENCY"
                text="Open and verifiable"
              />

              <FounderValue
                number="02"
                title="COMMUNITY"
                text="Driven by the people"
              />

              <FounderValue
                number="03"
                title="SUSTAINABILITY"
                text="Built for the long term"
              />

              <FounderValue
                number="04"
                title="INNOVATION"
                text="Future-focused ecosystem"
              />

            </div>

          </div>

        </div>


        <div style={styles.founderQuote}>

          <div style={styles.quoteMark}>
            “
          </div>

          <div>

            <p style={styles.quoteText}>
              Our vision is simple:
              <br />
              <span>
                A transparent reserve,
                owned by the community,
                built for the future.
              </span>
            </p>

            <div style={styles.quoteSignature}>
              Zulfakkar
            </div>

            <div style={styles.quoteRole}>
              ZULFAKKAR — FOUNDER & VISION HOLDER
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TOKEN
      ====================================================== */}
      <section
        id="token"
        style={styles.darkSection}
      >

        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>
            03
          </span>

          <span style={styles.sectionLabel}>
            SAR TOKEN
          </span>
        </div>


        <div style={styles.tokenHeader}>

          <div>

            <h2 style={styles.sectionTitle}>
              SAR
              <br />
              <span style={styles.mutedGold}>
                The reserve token.
              </span>
            </h2>

          </div>

          <div style={styles.tokenIntro}>
            <p>
              The native digital asset of the SAADA Reserve
              ecosystem.
            </p>
          </div>

        </div>


        <div style={styles.tokenGrid}>

          <InfoCard
            label="TOKEN NAME"
            value="SAADA Reserve"
          />

          <InfoCard
            label="SYMBOL"
            value="SAR"
          />

          <InfoCard
            label="NETWORK"
            value="BNB Smart Chain"
          />

          <InfoCard
            label="TOTAL SUPPLY"
            value="1,000,000,000 SAR"
          />

          <InfoCard
            label="DECIMALS"
            value="18"
          />

          <InfoCard
            label="BUY TAX"
            value="0%"
            positive
          />

          <InfoCard
            label="SELL TAX"
            value="0%"
            positive
          />


          <div style={styles.contractCard}>

            <span style={styles.cardLabel}>
              CONTRACT ADDRESS
            </span>

            <p style={styles.contractFull}>
              {CONTRACT_ADDRESS}
            </p>

            <div style={styles.contractActions}>

              <button
                type="button"
                onClick={copyContract}
                style={styles.smallButton}
              >
                {copied
                  ? "Copied!"
                  : "Copy Contract"}
              </button>

              <a
                href={BSCSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.smallOutlineButton}
              >
                BscScan ↗
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TOKENOMICS
      ====================================================== */}
      <section
        id="tokenomics"
        style={styles.section}
      >

        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>
            04
          </span>

          <span style={styles.sectionLabel}>
            TOKENOMICS
          </span>
        </div>


        <div style={styles.tokenomicsHeader}>

          <h2 style={styles.sectionTitle}>
            Built with
            <br />
            <span style={styles.goldText}>
              clear allocation.
            </span>
          </h2>

          <p style={styles.tokenomicsDescription}>
            The total supply of 1 billion SAR is allocated
            across liquidity, development, marketing, team,
            and reserve functions.
          </p>

        </div>


        <div style={styles.tokenomicsGrid}>

          <div style={styles.allocationVisual}>

            <div style={styles.donut}>

              <div style={styles.donutCenter}>
                <strong>
                  1B
                </strong>

                <span>
                  SAR
                </span>
              </div>

            </div>

          </div>


          <div style={styles.allocationList}>

            <Allocation
              percentage="40%"
              title="Liquidity"
              description="Liquidity provision"
            />

            <Allocation
              percentage="20%"
              title="Development"
              description="Product and ecosystem development"
            />

            <Allocation
              percentage="20%"
              title="Marketing"
              description="Community and market expansion"
            />

            <Allocation
              percentage="10%"
              title="Team"
              description="Core team allocation"
            />

            <Allocation
              percentage="10%"
              title="Reserve"
              description="Long-term reserve allocation"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          SECURITY
      ====================================================== */}
      <section
        id="security"
        style={styles.darkSection}
      >

        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>
            05
          </span>

          <span style={styles.sectionLabel}>
            SECURITY & TRANSPARENCY
          </span>
        </div>


        <div style={styles.securityHeader}>

          <h2 style={styles.sectionTitle}>
            Verify the
            <br />
            <span style={styles.goldText}>
              contract yourself.
            </span>
          </h2>

          <p style={styles.securityDescription}>
            Transparency is a core principle of SAADA
            Reserve. The SAR contract is open source and
            verified on BscScan.
          </p>

        </div>


        <div style={styles.securityGrid}>

          <SecurityItem
            label="Open Source"
            value="YES"
          />

          <SecurityItem
            label="Contract Verified"
            value="YES"
          />

          <SecurityItem
            label="Buy Tax"
            value="0%"
          />

          <SecurityItem
            label="Sell Tax"
            value="0%"
          />

          <SecurityItem
            label="Tax Modifiable"
            value="NO"
          />

          <SecurityItem
            label="Hidden Owner"
            value="NO"
          />

          <SecurityItem
            label="Honeypot"
            value="NO"
          />

          <SecurityItem
            label="Proxy Contract"
            value="NO"
          />

          <SecurityItem
            label="Mintable"
            value="NO"
          />

          <SecurityItem
            label="Transfer Pausable"
            value="NO"
          />

          <SecurityItem
            label="Trading Cooldown"
            value="NO"
          />

          <SecurityItem
            label="Blacklist"
            value="NO"
          />

          <SecurityItem
            label="Whitelist"
            value="NO"
          />

          <SecurityItem
            label="Anti Whale"
            value="NO"
          />

          <SecurityItem
            label="External Call"
            value="NO"
          />

          <SecurityItem
            label="Owner Can Change Balance"
            value="NO"
          />

        </div>


        <div style={styles.securityNotice}>

          <div style={styles.noticeIcon}>
            ✓
          </div>

          <div>

            <strong style={styles.noticeTitle}>
              Verified Smart Contract
            </strong>

            <p style={styles.noticeText}>
              The contract source code is publicly verified.
              Anyone can independently inspect the SAR
              contract on BscScan.
            </p>

          </div>

          <a
            href={BSCSCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.noticeButton}
          >
            Verify on BscScan ↗
          </a>

        </div>

      </section>


      {/* =====================================================
          ROADMAP
      ====================================================== */}
      <section
        id="roadmap"
        style={styles.section}
      >

        <div style={styles.sectionHeader}>
          <span style={styles.sectionNumber}>
            06
          </span>

          <span style={styles.sectionLabel}>
            ROADMAP
          </span>
        </div>


        <div style={styles.roadmapHeader}>

          <h2 style={styles.sectionTitle}>
            From launch
            <br />
            <span style={styles.goldText}>
              to ecosystem.
            </span>
          </h2>

          <p style={styles.roadmapDescription}>
            A long-term development path focused on
            community, accessibility, and ecosystem
            expansion.
          </p>

        </div>


        <div style={styles.roadmap}>

          <RoadmapItem
            phase="PHASE 01"
            title="Launch"
            items={[
              "Token launch",
              "Official website",
              "Smart contract verification",
              "Initial community",
            ]}
            active
          />

          <RoadmapItem
            phase="PHASE 02"
            title="Growth"
            items={[
              "Community expansion",
              "Marketing initiatives",
              "Brand development",
              "Ecosystem preparation",
            ]}
          />

          <RoadmapItem
            phase="PHASE 03"
            title="Expansion"
            items={[
              "Exchange opportunities",
              "Strategic partnerships",
              "Market expansion",
              "Community programs",
            ]}
          />

          <RoadmapItem
            phase="PHASE 04"
            title="Ecosystem"
            items={[
              "Ecosystem development",
              "New utility opportunities",
              "Global expansion",
              "Long-term reserve vision",
            ]}
          />

        </div>

      </section>


      {/* =====================================================
          WHITEPAPER
      ====================================================== */}
      <section style={styles.whitepaperSection}>

        <div style={styles.whitepaperGlow} />

        <div style={styles.whitepaperContent}>

          <span style={styles.sectionLabel}>
            DOCUMENTATION
          </span>

          <h2 style={styles.whitepaperTitle}>
            Explore the
            <br />
            <span style={styles.goldText}>
              SAADA Reserve vision.
            </span>
          </h2>

          <p style={styles.whitepaperText}>
            Read the official SAADA Reserve whitepaper
            to learn more about the project, token structure,
            and long-term vision.
          </p>

          <a
            href="/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryButton}
          >
            <span>
              Read Whitepaper
            </span>

            <span style={styles.buttonArrow}>
              ↗
            </span>
          </a>

        </div>


        <div style={styles.documentVisual}>

          <div style={styles.documentCard}>

            <img
              src="/logo.png"
              alt="SAADA"
              style={styles.documentLogo}
            />

            <div style={styles.documentName}>
              SAADA
              <br />
              <span>
                RESERVE
              </span>
            </div>

            <div style={styles.documentLine} />

            <div style={styles.documentSmall}>
              OFFICIAL WHITEPAPER
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMUNITY
      ====================================================== */}
      <section
        id="community"
        style={styles.communitySection}
      >

        <div style={styles.communityContent}>

          <span style={styles.sectionLabel}>
            COMMUNITY
          </span>

          <h2 style={styles.sectionTitle}>
            Join the
            <br />
            <span style={styles.goldText}>
              SAADA community.
            </span>
          </h2>

          <p style={styles.communityText}>
            Follow SAADA Reserve and stay connected with
            the latest project updates and ecosystem
            developments.
          </p>


          <div style={styles.socialButtons}>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialButton}
            >
              <span style={styles.socialIcon}>
                ✈
              </span>

              Telegram

              <span>
                ↗
              </span>
            </a>


            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialButton}
            >
              <span style={styles.socialIcon}>
                𝕏
              </span>

              X / Twitter

              <span>
                ↗
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer style={styles.footer}>

        <div style={styles.footerTop}>

          <div style={styles.footerBrand}>

            <img
              src="/logo.png"
              alt="SAADA Reserve Logo"
              style={styles.footerLogo}
            />

            <div>

              <strong style={styles.footerName}>
                SAADA RESERVE
              </strong>

              <p style={styles.footerTagline}>
                The Future of Digital Reserve
              </p>

            </div>

          </div>


          <div style={styles.footerLinks}>

            <a
              href="#home"
              style={styles.footerLink}
            >
              Home
            </a>

            <a
              href="#about"
              style={styles.footerLink}
            >
              About
            </a>

            <a
              href="#founder"
              style={styles.footerLink}
            >
              Founder
            </a>

            <a
              href="#token"
              style={styles.footerLink}
            >
              Token
            </a>

            <a
              href="#tokenomics"
              style={styles.footerLink}
            >
              Tokenomics
            </a>

            <a
              href="#security"
              style={styles.footerLink}
            >
              Security
            </a>

            <a
              href="#roadmap"
              style={styles.footerLink}
            >
              Roadmap
            </a>

          </div>

        </div>


        <div style={styles.footerContract}>

          <span style={styles.footerContractSpan}>
            CONTRACT
          </span>

          <code style={styles.footerCode}>
            {CONTRACT_ADDRESS}
          </code>

          <button
            type="button"
            onClick={copyContract}
            style={styles.footerCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>

        </div>


        <div style={styles.footerBottom}>

          <span>
            © 2026 SAADA Reserve.
            All rights reserved.
          </span>

          <span>
            BNB SMART CHAIN
          </span>

        </div>

      </footer>

    </main>
  );
}


/* ============================================================
   COMPONENTS
============================================================ */

function StatCard({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div style={styles.statCard}>

      <div style={styles.statNumber}>
        {number}
      </div>

      <div style={styles.statLabel}>
        {label}
      </div>

      <div style={styles.statDescription}>
        {description}
      </div>

    </div>
  );
}


function Feature({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div style={styles.feature}>

      <span style={styles.featureNumber}>
        {number}
      </span>

      <div>

        <strong style={styles.featureTitle}>
          {title}
        </strong>

        <p style={styles.featureText}>
          {text}
        </p>

      </div>

    </div>
  );
}


function FounderValue({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div style={styles.founderValue}>

      <span style={styles.founderValueNumber}>
        {number}
      </span>

      <div>

        <strong style={styles.founderValueTitle}>
          {title}
        </strong>

        <p style={styles.founderValueText}>
          {text}
        </p>

      </div>

    </div>
  );
}


function InfoCard({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div style={styles.infoCard}>

      <span style={styles.cardLabel}>
        {label}
      </span>

      <strong
        style={{
          ...styles.infoValue,
          ...(positive
            ? styles.positiveValue
            : {}),
        }}
      >
        {value}
      </strong>

    </div>
  );
}


function Allocation({
  percentage,
  title,
  description,
}: {
  percentage: string;
  title: string;
  description: string;
}) {
  return (
    <div style={styles.allocationItem}>

      <div style={styles.allocationTop}>

        <strong style={styles.allocationPercentage}>
          {percentage}
        </strong>

        <strong style={styles.allocationTitle}>
          {title}
        </strong>

      </div>

      <p style={styles.allocationDescription}>
        {description}
      </p>

      <div style={styles.allocationBar}>

        <div
          style={{
            ...styles.allocationFill,
            width: percentage,
          }}
        />

      </div>

    </div>
  );
}


function SecurityItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const positive =
    value === "YES" ||
    value === "0%";

  return (
    <div style={styles.securityItem}>

      <div style={styles.securityStatus}>

        <span
          style={{
            ...styles.statusDot,
            ...(positive
              ? styles.statusDotPositive
              : {}),
          }}
        />

        <span style={styles.securityValue}>
          {value}
        </span>

      </div>

      <span style={styles.securityLabel}>
        {label}
      </span>

    </div>
  );
}


function RoadmapItem({
  phase,
  title,
  items,
  active,
}: {
  phase: string;
  title: string;
  items: string[];
  active?: boolean;
}) {
  return (
    <div
      style={{
        ...styles.roadmapItem,
        ...(active
          ? styles.roadmapActive
          : {}),
      }}
    >

      <div style={styles.roadmapPhase}>
        {phase}
      </div>

      <h3 style={styles.roadmapTitle}>
        {title}
      </h3>

      <div style={styles.roadmapItems}>

        {items.map((item) => (
          <div
            key={item}
            style={styles.roadmapRow}
          >

            <span style={styles.check}>
              ✓
            </span>

            <span>
              {item}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}


/* ============================================================
   STYLES
============================================================ */

const styles: Record<string, CSSProperties> = {

  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#f5f2e9",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    overflowX: "hidden",
    scrollBehavior: "smooth",
  },


  /* NAVBAR */

  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(5,5,5,0.90)",
    backdropFilter: "blur(20px)",
    borderBottom:
      "1px solid rgba(255,255,255,0.08)",
  },

  navInner: {
    maxWidth: 1400,
    margin: "0 auto",
    minHeight: 78,
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    gap: 22,
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none",
    color: "#fff",
    marginRight: "auto",
  },

  logo: {
    width: 42,
    height: 42,
    objectFit: "contain",
  },

  logoText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1,
  },

  logoName: {
    fontSize: 17,
    letterSpacing: "0.18em",
  },

  logoSub: {
    marginTop: 5,
    fontSize: 8,
    letterSpacing: "0.35em",
    color: "#b9a46a",
  },

  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },

  mobileNavOpen: {},

  navLink: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: 12,
    fontWeight: 500,
    transition: "color 0.2s ease",
    whiteSpace: "nowrap",
  },

  navBuy: {
    textDecoration: "none",
    color: "#090909",
    background: "#d6bd72",
    borderRadius: 999,
    padding: "11px 18px",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },

  menuButton: {
    display: "none",
    width: 42,
    height: 42,
    background: "transparent",
    border:
      "1px solid rgba(255,255,255,0.15)",
    borderRadius: 10,
    cursor: "pointer",
    padding: 9,
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },


  /* HERO */

  hero: {
    position: "relative",
    minHeight: "calc(100vh - 78px)",
    maxWidth: 1400,
    margin: "0 auto",
    padding: "80px 7% 110px",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    alignItems: "center",
    gap: 50,
    overflow: "hidden",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    padding: "8px 13px",
    borderRadius: 999,
    border:
      "1px solid rgba(214,189,114,0.28)",
    background:
      "rgba(214,189,114,0.06)",
    color: "#c9b87e",
    fontSize: 10,
    letterSpacing: "0.15em",
    fontWeight: 800,
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#d6bd72",
    boxShadow:
      "0 0 12px rgba(214,189,114,0.9)",
  },

  eyebrow: {
    marginTop: 32,
    marginBottom: 12,
    color: "#b9a46a",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.3em",
  },

  heroTitle: {
    margin: 0,
    fontSize:
      "clamp(52px, 7vw, 96px)",
    lineHeight: 0.96,
    letterSpacing: "-0.055em",
    fontWeight: 800,
  },

  goldText: {
    color: "#d6bd72",
  },

  mutedGold: {
    color: "#8e8059",
  },

  heroDescription: {
    maxWidth: 650,
    marginTop: 28,
    color: "#9c9c9c",
    fontSize: 17,
    lineHeight: 1.8,
  },

  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 12,
    marginTop: 34,
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: 20,
    padding: "15px 21px",
    borderRadius: 10,
    background: "#d6bd72",
    color: "#090909",
    textDecoration: "none",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  buttonArrow: {
    fontSize: 17,
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "14px 20px",
    borderRadius: 10,
    border:
      "1px solid rgba(214,189,114,0.4)",
    color: "#d6bd72",
    textDecoration: "none",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.06em",
  },

  textButton: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: 12,
    padding: "12px 6px",
  },

  contractHero: {
    marginTop: 45,
    maxWidth: 650,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  contractLabel: {
    color: "#676767",
    fontSize: 9,
    fontWeight: 800,
    letterSpacing: "0.18em",
  },

  contractCopyButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    width: "100%",
    padding: "12px 14px",
    background:
      "rgba(255,255,255,0.035)",
    border:
      "1px solid rgba(255,255,255,0.09)",
    borderRadius: 9,
    color: "#aaa",
    cursor: "pointer",
    textAlign: "left",
  },

  contractAddress: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "monospace",
    fontSize: 11,
  },

  copyText: {
    color: "#d6bd72",
    fontSize: 10,
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  heroVisual: {
    position: "relative",
    minHeight: 540,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroOrb: {
    position: "relative",
    zIndex: 3,
    width: 300,
    height: 300,
    borderRadius: "50%",
    padding: 1,
    background:
      "linear-gradient(135deg, rgba(214,189,114,0.9), rgba(214,189,114,0.08), rgba(255,255,255,0.35))",
    boxShadow:
      "0 0 100px rgba(214,189,114,0.16), inset 0 0 70px rgba(214,189,114,0.08)",
  },

  orbInner: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 50% 35%, #29251a 0%, #0c0c0b 45%, #050505 75%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "inset 0 0 60px rgba(214,189,114,0.12)",
  },

  orbLogo: {
    width: 95,
    height: 95,
    objectFit: "contain",
    marginBottom: 10,
  },

  orbSymbol: {
    fontSize: 34,
    fontWeight: 900,
    letterSpacing: "0.12em",
    color: "#d6bd72",
  },

  orbNetwork: {
    marginTop: 8,
    color: "#777",
    fontSize: 8,
    letterSpacing: "0.2em",
  },

  orbitOuter: {
    position: "absolute",
    width: 520,
    height: 520,
    border:
      "1px solid rgba(214,189,114,0.14)",
    borderRadius: "50%",
  },

  orbitMiddle: {
    position: "absolute",
    width: 410,
    height: 410,
    border:
      "1px solid rgba(214,189,114,0.18)",
    borderRadius: "50%",
    transform: "rotate(30deg)",
  },

  orbitDotOne: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#d6bd72",
    boxShadow:
      "0 0 20px rgba(214,189,114,0.8)",
    top: 55,
    right: 110,
  },

  orbitDotTwo: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#fff",
    boxShadow:
      "0 0 15px rgba(255,255,255,0.6)",
    bottom: 100,
    left: 95,
  },

  heroGlowOne: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background:
      "rgba(214,189,114,0.08)",
    filter: "blur(100px)",
    right: -180,
    top: 80,
  },

  heroGlowTwo: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background:
      "rgba(214,189,114,0.05)",
    filter: "blur(90px)",
    left: -150,
    bottom: 0,
  },


  /* STATS */

  statsSection: {
    borderTop:
      "1px solid rgba(255,255,255,0.08)",
    borderBottom:
      "1px solid rgba(255,255,255,0.08)",
    background: "#090909",
  },

  statsGrid: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns:
      "repeat(4,1fr)",
  },

  statCard: {
    padding: "38px 35px",
    borderRight:
      "1px solid rgba(255,255,255,0.08)",
  },

  statNumber: {
    color: "#d6bd72",
    fontSize: 36,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },

  statLabel: {
    marginTop: 8,
    fontSize: 10,
    letterSpacing: "0.18em",
    fontWeight: 800,
  },

  statDescription: {
    marginTop: 7,
    color: "#666",
    fontSize: 11,
  },


  /* GENERAL */

  section: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "130px 7%",
  },

  darkSection: {
    background: "#090909",
    padding: "130px 7%",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 13,
    marginBottom: 55,
  },

  sectionNumber: {
    color: "#d6bd72",
    fontFamily: "monospace",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: "0.15em",
  },

  sectionLabel: {
    color: "#737373",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: "0.25em",
  },

  sectionTitle: {
    margin: 0,
    fontSize:
      "clamp(40px, 5vw, 68px)",
    lineHeight: 1,
    letterSpacing: "-0.045em",
  },


  /* ABOUT */

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 100,
  },

  aboutText: {
    color: "#999",
    fontSize: 16,
    lineHeight: 1.8,
  },

  featureList: {
    marginTop: 35,
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },

  feature: {
    display: "flex",
    gap: 18,
    paddingBottom: 22,
    borderBottom:
      "1px solid rgba(255,255,255,0.08)",
  },

  featureNumber: {
    color: "#d6bd72",
    fontFamily: "monospace",
    fontSize: 11,
  },

  featureTitle: {
    color: "#eee",
    fontSize: 14,
  },

  featureText: {
    margin: "5px 0 0",
    color: "#6f6f6f",
    fontSize: 12,
  },


  /* FOUNDER */

  founderSection: {
    position: "relative",
    maxWidth: 1400,
    margin: "0 auto",
    padding: "130px 7%",
    overflow: "hidden",
    background:
      "linear-gradient(180deg, #070707 0%, #0b0a08 50%, #070707 100%)",
  },

  founderGlow: {
    position: "absolute",
    width: 550,
    height: 550,
    borderRadius: "50%",
    background:
      "rgba(214,189,114,0.07)",
    filter: "blur(120px)",
    right: -200,
    top: 100,
    pointerEvents: "none",
  },

  founderGrid: {
    position: "relative",
    zIndex: 2,
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: 90,
    alignItems: "center",
  },

  founderImageWrap: {
    position: "relative",
    maxWidth: 470,
    margin: "0 auto",
    width: "100%",
  },

  founderImageFrame: {
    position: "relative",
    borderRadius: 22,
    overflow: "hidden",
    border:
      "1px solid rgba(214,189,114,0.35)",
    background: "#0d0d0d",
    boxShadow:
      "0 25px 80px rgba(0,0,0,0.55), 0 0 50px rgba(214,189,114,0.08)",
  },

  founderImageGlow: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(214,189,114,0.04), transparent 35%, rgba(0,0,0,0.25))",
    zIndex: 2,
    pointerEvents: "none",
  },

  founderImage: {
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: 650,
    objectFit: "cover",
    objectPosition: "center top",
  },

  founderNameCard: {
    position: "relative",
    marginTop: -55,
    marginLeft: 25,
    marginRight: 25,
    padding: "22px 25px",
    borderRadius: 16,
    background:
      "rgba(12,12,12,0.94)",
    border:
      "1px solid rgba(214,189,114,0.3)",
    backdropFilter: "blur(15px)",
    zIndex: 4,
    boxShadow:
      "0 20px 45px rgba(0,0,0,0.45)",
  },

  founderSmallLabel: {
    color: "#d6bd72",
    fontSize: 9,
    fontWeight: 800,
    letterSpacing: "0.22em",
  },

  founderName: {
    margin: "7px 0 0",
    fontSize: 31,
    letterSpacing: "0.08em",
    color: "#f4f0e5",
  },

  founderBrand: {
    marginTop: 6,
    color: "#8e8059",
    fontSize: 9,
    letterSpacing: "0.3em",
    fontWeight: 700,
  },

  founderContent: {
    position: "relative",
    zIndex: 2,
  },

  founderEyebrow: {
    color: "#d6bd72",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: "0.24em",
  },

  founderTitle: {
    margin: "18px 0 0",
    fontSize:
      "clamp(42px, 5vw, 72px)",
    lineHeight: 0.98,
    letterSpacing: "-0.05em",
  },

  founderDescription: {
    maxWidth: 700,
    marginTop: 27,
    color: "#969696",
    fontSize: 16,
    lineHeight: 1.85,
  },

  founderValues: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0,1fr))",
    gap: 14,
  },

  founderValue: {
    display: "flex",
    gap: 14,
    padding: "18px 18px",
    borderRadius: 12,
    background:
      "rgba(255,255,255,0.025)",
    border:
      "1px solid rgba(255,255,255,0.07)",
  },

  founderValueNumber: {
    color: "#d6bd72",
    fontFamily: "monospace",
    fontSize: 10,
  },

  founderValueTitle: {
    color: "#eee",
    fontSize: 11,
    letterSpacing: "0.1em",
  },

  founderValueText: {
    margin: "6px 0 0",
    color: "#686868",
    fontSize: 11,
  },

  founderQuote: {
    position: "relative",
    zIndex: 2,
    marginTop: 90,
    padding: "45px 50px",
    display: "flex",
    gap: 30,
    alignItems: "flex-start",
    borderRadius: 20,
    background:
      "linear-gradient(135deg, rgba(214,189,114,0.07), rgba(255,255,255,0.02))",
    border:
      "1px solid rgba(214,189,114,0.16)",
  },

  quoteMark: {
    color: "#d6bd72",
    fontSize: 72,
    lineHeight: 0.7,
    fontFamily: "Georgia, serif",
  },

  quoteText: {
    margin: 0,
    color: "#e6e1d5",
    fontSize:
      "clamp(24px, 3vw, 38px)",
    lineHeight: 1.25,
    letterSpacing: "-0.025em",
  },

  quoteTextSpan: {},

  quoteSignature: {
    marginTop: 28,
    color: "#d6bd72",
    fontSize: 24,
    fontFamily: "cursive",
    fontStyle: "italic",
  },

  quoteRole: {
    marginTop: 6,
    color: "#666",
    fontSize: 9,
    letterSpacing: "0.18em",
    fontWeight: 800,
  },


  /* TOKEN */

  tokenHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "end",
    marginBottom: 55,
  },

  tokenIntro: {
    color: "#888",
    lineHeight: 1.8,
    fontSize: 16,
  },

  tokenGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4,1fr)",
    gap: 12,
  },

  infoCard: {
    minHeight: 150,
    padding: 24,
    background: "#101010",
    border:
      "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  cardLabel: {
    color: "#626262",
    fontSize: 9,
    fontWeight: 800,
    letterSpacing: "0.18em",
  },

  infoValue: {
    color: "#eee",
    fontSize: 22,
    lineHeight: 1.2,
  },

  positiveValue: {
    color: "#d6bd72",
  },

  contractCard: {
    gridColumn: "span 4",
    padding: 28,
    background: "#101010",
    border:
      "1px solid rgba(214,189,114,0.18)",
    borderRadius: 14,
  },

  contractFull: {
    margin: "18px 0",
    color: "#d6bd72",
    fontFamily: "monospace",
    fontSize: 13,
    overflowWrap: "anywhere",
  },

  contractActions: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },

  smallButton: {
    border: "none",
    background: "#d6bd72",
    color: "#090909",
    borderRadius: 8,
    padding: "10px 14px",
    cursor: "pointer",
    fontSize: 11,
    fontWeight: 800,
  },

  smallOutlineButton: {
    display: "inline-flex",
    alignItems: "center",
    border:
      "1px solid rgba(214,189,114,0.35)",
    background: "transparent",
    color: "#d6bd72",
    borderRadius: 8,
    padding: "10px 14px",
    textDecoration: "none",
    fontSize: 11,
    fontWeight: 800,
  },


  /* TOKENOMICS */

  tokenomicsHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "end",
    marginBottom: 65,
  },

  tokenomicsDescription: {
    maxWidth: 600,
    color: "#888",
    fontSize: 16,
    lineHeight: 1.8,
  },

  tokenomicsGrid: {
    display: "grid",
    gridTemplateColumns: "0.75fr 1.25fr",
    gap: 80,
    alignItems: "center",
  },

  allocationVisual: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  donut: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    background:
      "conic-gradient(#d6bd72 0deg 144deg, #8f7d4c 144deg 216deg, #665a3b 216deg 288deg, #413b2b 288deg 324deg, #29271f 324deg 360deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 0 80px rgba(214,189,114,0.10)",
  },

  donutCenter: {
    width: 190,
    height: 190,
    borderRadius: "50%",
    background: "#070707",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border:
      "1px solid rgba(214,189,114,0.12)",
  },

  allocationList: {
    display: "flex",
    flexDirection: "column",
    gap: 23,
  },

  allocationItem: {
    paddingBottom: 20,
    borderBottom:
      "1px solid rgba(255,255,255,0.08)",
  },

  allocationTop: {
    display: "flex",
    alignItems: "center",
    gap: 18,
  },

  allocationPercentage: {
    color: "#d6bd72",
    fontSize: 18,
    minWidth: 52,
  },

  allocationTitle: {
    color: "#eee",
    fontSize: 14,
  },

  allocationDescription: {
    margin: "8px 0 12px 70px",
    color: "#666",
    fontSize: 11,
  },

  allocationBar: {
    height: 4,
    background: "#1c1c1c",
    borderRadius: 99,
    marginLeft: 70,
    overflow: "hidden",
  },

  allocationFill: {
    height: "100%",
    background:
      "linear-gradient(90deg, #8e8059, #d6bd72)",
    borderRadius: 99,
  },


  /* SECURITY */

  securityHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "end",
    marginBottom: 55,
  },

  securityDescription: {
    color: "#888",
    fontSize: 16,
    lineHeight: 1.8,
  },

  securityGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4,1fr)",
    gap: 10,
  },

  securityItem: {
    minHeight: 92,
    padding: 18,
    border:
      "1px solid rgba(255,255,255,0.07)",
    background: "#101010",
    borderRadius: 11,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 15,
  },

  securityStatus: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#555",
  },

  statusDotPositive: {
    background: "#d6bd72",
    boxShadow:
      "0 0 10px rgba(214,189,114,0.7)",
  },

  securityValue: {
    color: "#ddd",
    fontSize: 10,
    fontWeight: 900,
    letterSpacing: "0.08em",
  },

  securityLabel: {
    color: "#656565",
    fontSize: 10,
  },

  securityNotice: {
    marginTop: 30,
    padding: 24,
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: 18,
    border:
      "1px solid rgba(214,189,114,0.2)",
    background:
      "rgba(214,189,114,0.035)",
    borderRadius: 14,
  },

  noticeIcon: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "rgba(214,189,114,0.1)",
    color: "#d6bd72",
    fontWeight: 900,
  },

  noticeTitle: {
    color: "#eee",
    fontSize: 13,
  },

  noticeText: {
    margin: "6px 0 0",
    color: "#707070",
    fontSize: 11,
    lineHeight: 1.6,
  },

  noticeButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "11px 15px",
    border:
      "1px solid rgba(214,189,114,0.35)",
    borderRadius: 8,
    color: "#d6bd72",
    textDecoration: "none",
    fontSize: 10,
    fontWeight: 800,
    whiteSpace: "nowrap",
  },


  /* ROADMAP */

  roadmapHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "end",
    marginBottom: 55,
  },

  roadmapDescription: {
    color: "#888",
    fontSize: 16,
    lineHeight: 1.8,
  },

  roadmap: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4,1fr)",
    gap: 12,
  },

  roadmapItem: {
    minHeight: 330,
    padding: 25,
    borderRadius: 14,
    background: "#0e0e0e",
    border:
      "1px solid rgba(255,255,255,0.07)",
  },

  roadmapActive: {
    border:
      "1px solid rgba(214,189,114,0.35)",
    boxShadow:
      "inset 0 3px 0 #d6bd72",
  },

  roadmapPhase: {
    color: "#d6bd72",
    fontFamily: "monospace",
    fontSize: 9,
    fontWeight: 800,
    letterSpacing: "0.18em",
  },

  roadmapTitle: {
    margin: "15px 0 28px",
    fontSize: 25,
  },

  roadmapItems: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },

  roadmapRow: {
    display: "flex",
    gap: 10,
    color: "#777",
    fontSize: 11,
    lineHeight: 1.5,
  },

  check: {
    color: "#d6bd72",
    fontWeight: 900,
  },


  /* WHITEPAPER */

  whitepaperSection: {
    position: "relative",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 70,
    alignItems: "center",
    padding: "120px 7%",
    background:
      "linear-gradient(135deg, #090909, #15120b)",
    borderTop:
      "1px solid rgba(214,189,114,0.08)",
    borderBottom:
      "1px solid rgba(214,189,114,0.08)",
  },

  whitepaperGlow: {
    position: "absolute",
    width: 450,
    height: 450,
    borderRadius: "50%",
    background:
      "rgba(214,189,114,0.08)",
    filter: "blur(110px)",
    right: -100,
    top: -100,
  },

  whitepaperContent: {
    position: "relative",
    zIndex: 2,
  },

  whitepaperTitle: {
    margin: "20px 0 0",
    fontSize:
      "clamp(42px, 5vw, 68px)",
    lineHeight: 1,
    letterSpacing: "-0.045em",
  },

  whitepaperText: {
    maxWidth: 600,
    color: "#888",
    fontSize: 16,
    lineHeight: 1.8,
    margin: "25px 0 30px",
  },

  documentVisual: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
  },

  documentCard: {
    width: 290,
    height: 380,
    borderRadius: 18,
    border:
      "1px solid rgba(214,189,114,0.28)",
    background:
      "linear-gradient(145deg, #18150d, #090909)",
    boxShadow:
      "0 35px 80px rgba(0,0,0,0.55)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(4deg)",
  },

  documentLogo: {
    width: 90,
    height: 90,
    objectFit: "contain",
  },

  documentName: {
    marginTop: 22,
    textAlign: "center",
    color: "#d6bd72",
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: "0.12em",
  },

  documentNameSpan: {},

  documentLine: {
    width: 70,
    height: 1,
    background: "#d6bd72",
    margin: "28px 0",
    opacity: 0.5,
  },

  documentSmall: {
    color: "#777",
    fontSize: 9,
    letterSpacing: "0.2em",
    fontWeight: 800,
  },


  /* COMMUNITY */

  communitySection: {
    padding: "130px 7%",
    background: "#050505",
    textAlign: "center",
  },

  communityContent: {
    maxWidth: 800,
    margin: "0 auto",
  },

  communityText: {
    maxWidth: 600,
    margin: "25px auto 0",
    color: "#777",
    fontSize: 16,
    lineHeight: 1.8,
  },

  socialButtons: {
    marginTop: 35,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
  },

  socialButton: {
    minWidth: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: "14px 18px",
    border:
      "1px solid rgba(255,255,255,0.08)",
    background: "#0d0d0d",
    color: "#ddd",
    borderRadius: 10,
    textDecoration: "none",
    fontSize: 12,
    fontWeight: 700,
  },

  socialIcon: {
    color: "#d6bd72",
    fontSize: 17,
  },


  /* FOOTER */

  footer: {
    borderTop:
      "1px solid rgba(255,255,255,0.08)",
    background: "#030303",
    padding: "55px 7% 25px",
  },

  footerTop: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
  },

  footerBrand: {
    display: "flex",
    alignItems: "center",
    gap: 13,
  },

  footerLogo: {
    width: 45,
    height: 45,
    objectFit: "contain",
  },

  footerName: {
    fontSize: 13,
    letterSpacing: "0.16em",
  },

  footerTagline: {
    margin: "5px 0 0",
    color: "#555",
    fontSize: 10,
  },

  footerLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: 18,
  },

  footerLink: {
    color: "#777",
    textDecoration: "none",
    fontSize: 11,
  },

  footerContract: {
    maxWidth: 1400,
    margin: "45px auto 30px",
    padding: 18,
    borderTop:
      "1px solid rgba(255,255,255,0.07)",
    borderBottom:
      "1px solid rgba(255,255,255,0.07)",
    display: "flex",
    alignItems: "center",
    gap: 15,
    flexWrap: "wrap",
  },

  footerContractSpan: {
    color: "#555",
  },

  footerCode: {
    color: "#777",
    fontFamily: "monospace",
    fontSize: 10,
    overflowWrap: "anywhere",
  },

  footerCopy: {
    marginLeft: "auto",
    border:
      "1px solid rgba(214,189,114,0.3)",
    background: "transparent",
    color: "#d6bd72",
    borderRadius: 7,
    padding: "7px 11px",
    cursor: "pointer",
    fontSize: 10,
  },

  footerBottom: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    color: "#444",
    fontSize: 9,
    letterSpacing: "0.08em",
  },
};


/* ============================================================
   RESPONSIVE CSS
============================================================ */

if (typeof document !== "undefined") {
  const styleId = "saada-responsive-styles";

  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");

    style.id = styleId;

    style.innerHTML = `
      @media (max-width: 1050px) {

        nav {
          gap: 12px !important;
        }

      }

      @media (max-width: 900px) {

        .saada-mobile-placeholder {
          display: block;
        }

      }

      @media (max-width: 760px) {

        header nav {
          position: absolute !important;
          top: 78px !important;
          left: 0 !important;
          right: 0 !important;
          padding: 18px 6% !important;
          background: rgba(5,5,5,0.97) !important;
          border-bottom: 1px solid rgba(255,255,255,0.08) !important;
          display: none !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 18px !important;
        }

        header nav a {
          font-size: 13px !important;
        }

        header nav[style*="display"] {
          display: flex !important;
        }

        main section {
          scroll-margin-top: 80px;
        }

      }

      @media (max-width: 700px) {

        .saada-mobile-placeholder {
          display: none;
        }

      }
    `;

    document.head.appendChild(style);
  }
}