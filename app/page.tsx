"use client";

export default function Home() {
  return (
    <main style={styles.container}>
      
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h1 style={styles.logo}>SAADA</h1>
        <div>
          <a href="#about" style={styles.link}>About</a>
          <a href="#tokenomics" style={styles.link}>Tokenomics</a>
          <a href="#roadmap" style={styles.link}>Roadmap</a>
          <a href="/whitepaper.pdf" style={styles.link} target="_blank">Whitepaper</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <img src="/logo.png" alt="SAADA Logo" style={styles.heroLogo} />
        <h1 style={styles.title}>SAADA Reserve</h1>
        <p style={styles.subtitle}>
          The Future Digital Reserve on Binance Smart Chain
        </p>

        <div style={styles.buttons}>
          <a href="https://t.me/saadareserve" target="_blank" style={styles.button}>
            Telegram
          </a>
          <a href="https://x.com/LanDewa8zme/status/2071886373431500952?s=20" target="_blank" style={styles.buttonOutline}>
            Twitter
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About SAADA</h2>
        <p style={styles.text}>
          SAADA Reserve is a decentralized digital reserve asset built on Binance Smart Chain (BSC).
          Designed for long-term sustainability, transparency, and community-driven growth.
        </p>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" style={styles.section}>
        <h2 style={styles.sectionTitle}>Tokenomics</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Total Supply</h3>
            <p>1,000,000,000 SAADA</p>
          </div>

          <div style={styles.card}>
            <h3>Network</h3>
            <p>BSC (Binance Smart Chain)</p>
          </div>

          <div style={styles.card}>
            <h3>Contract</h3>
            <p style={{ fontSize: "12px" }}>
              0x280DD55C468cc00AadD675fA030E9914EB3Cee70
            </p>
          </div>
        </div>

        {/* MINI CHART LOOK */}
        <div style={styles.chartBox}>
          <h3 style={{ marginBottom: "10px" }}>Allocation</h3>
          <div style={styles.bar}><span style={{ width: "40%" }}>Liquidity 40%</span></div>
          <div style={styles.bar}><span style={{ width: "20%" }}>Development 20%</span></div>
          <div style={styles.bar}><span style={{ width: "20%" }}>Marketing 20%</span></div>
          <div style={styles.bar}><span style={{ width: "10%" }}>Team 10%</span></div>
          <div style={styles.bar}><span style={{ width: "10%" }}>Reserve 10%</span></div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" style={styles.section}>
        <h2 style={styles.sectionTitle}>Roadmap</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Phase 1</h3>
            <p>Launch Website & Token</p>
          </div>

          <div style={styles.card}>
            <h3>Phase 2</h3>
            <p>Community Growth & Marketing</p>
          </div>

          <div style={styles.card}>
            <h3>Phase 3</h3>
            <p>Exchange Listings</p>
          </div>

          <div style={styles.card}>
            <h3>Phase 4</h3>
            <p>Expansion & Ecosystem</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 SAADA Reserve. All rights reserved.</p>
      </footer>

    </main>
  );
}

/* STYLES */
const styles = {
  container: {
    fontFamily: "Arial",
    background: "#0a0a0a",
    color: "white",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderBottom: "1px solid #222",
  },

  logo: {
    color: "#00ffcc",
  },

  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
  },

  hero: {
    textAlign: "center" as const,
    padding: "80px 20px",
  },

  heroLogo: {
    width: "120px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "40px",
  },

  subtitle: {
    color: "#aaa",
    marginTop: "10px",
  },

  buttons: {
    marginTop: "20px",
  },

  button: {
    background: "#00ffcc",
    color: "#000",
    padding: "10px 20px",
    marginRight: "10px",
    textDecoration: "none",
  },

  buttonOutline: {
    border: "1px solid #00ffcc",
    padding: "10px 20px",
    color: "#00ffcc",
    textDecoration: "none",
  },

  section: {
    padding: "60px 20px",
    textAlign: "center" as const,
  },

  sectionTitle: {
    marginBottom: "30px",
  },

  text: {
    maxWidth: "600px",
    margin: "0 auto",
    color: "#aaa",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    background: "#111",
    padding: "20px",
    borderRadius: "10px",
  },

  chartBox: {
    marginTop: "40px",
    background: "#111",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "500px",
    marginInline: "auto" as const,
  },

  bar: {
    background: "#222",
    borderRadius: "6px",
    marginBottom: "10px",
    overflow: "hidden",
  },

  footer: {
    textAlign: "center" as const,
    padding: "20px",
    borderTop: "1px solid #222",
    color: "#777",
  },
};