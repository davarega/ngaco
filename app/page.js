"use client";
import React, { useState, useEffect } from "react";

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigateToPrivacy = () => {
        // For React Router, you would use navigate('/privacy')
        window.location.href = "/privacy";
    };

    const features = [
        {
            icon: "🔐",
            title: "Keamanan Terjamin",
            description:
                "Data Anda dilindungi dengan enkripsi tingkat enterprise menggunakan Firebase Security. Privasi adalah prioritas utama kami.",
        },
        {
            icon: "👥",
            title: "Grup Mudah",
            description:
                "Buat grup baru atau gabung dengan mudah menggunakan ID grup. Tidak perlu ribet, langsung chat!",
        },
        {
            icon: "⚡",
            title: "Real-time Chat",
            description:
                "Pesan terkirim secara real-time tanpa delay. Rasakan pengalaman chatting yang lancar dan responsif.",
        },
        {
            icon: "📱",
            title: "Mobile First",
            description:
                "Didesain khusus untuk mobile dengan interface yang intuitif dan user-friendly. Mudah digunakan oleh siapa saja.",
        },
        {
            icon: "🎨",
            title: "Interface Modern",
            description:
                "Tampilan yang fresh dan modern dengan Material Design. Nyaman di mata dan mudah digunakan sehari-hari.",
        },
        {
            icon: "🌐",
            title: "Cross Platform",
            description:
                "Tersedia untuk Android dengan rencana ekspansi ke platform lain. Satu akun untuk semua perangkat.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    overflow-x: hidden;
                }

                .navbar {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background: ${isScrolled
                        ? "rgba(255, 255, 255, 0.98)"
                        : "rgba(255, 255, 255, 0.95)"};
                    backdrop-filter: blur(10px);
                    padding: 15px 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
                    transition: all 0.3s ease;
                    box-shadow: ${isScrolled
                        ? "0 2px 20px rgba(0, 0, 0, 0.1)"
                        : "none"};
                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.8em;
                    font-weight: bold;
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-decoration: none;
                    cursor: pointer;
                }

                .nav-links {
                    display: flex;
                    list-style: none;
                    gap: 30px;
                    align-items: center;
                }

                .nav-links li {
                    position: relative;
                }

                .nav-links a {
                    text-decoration: none;
                    color: #333;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    position: relative;
                }

                .nav-links a:hover {
                    color: #667eea;
                    transform: translateY(-2px);
                }

                .nav-links a::after {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -5px;
                    left: 0;
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    transition: width 0.3s ease;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .hero {
                    height: 100vh;
                    background: linear-gradient(
                        135deg,
                        #667eea 0%,
                        #764ba2 100%
                    );
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .hero::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="90" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
                    animation: float 20s infinite linear;
                }

                @keyframes float {
                    0% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    100% {
                        transform: translateY(-20px) rotate(360deg);
                    }
                }

                .hero-content {
                    max-width: 800px;
                    padding: 0 20px;
                    z-index: 2;
                    position: relative;
                }

                .hero h1 {
                    font-size: 3.5em;
                    margin-bottom: 20px;
                    animation: slideInUp 1s ease-out;
                }

                .hero p {
                    font-size: 1.3em;
                    margin-bottom: 40px;
                    opacity: 0.9;
                    animation: slideInUp 1s ease-out 0.2s both;
                }

                .cta-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                    animation: slideInUp 1s ease-out 0.4s both;
                }

                .btn {
                    padding: 15px 30px;
                    border: none;
                    border-radius: 50px;
                    font-size: 1.1em;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }

                .btn-primary {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(10px);
                }

                .btn-primary:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-3px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .btn-secondary {
                    background: white;
                    color: #667eea;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                }

                .btn-secondary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .features {
                    padding: 100px 0;
                    background: #f8f9ff;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section-title h2 {
                    font-size: 2.5em;
                    color: #333;
                    margin-bottom: 15px;
                }

                .section-title p {
                    font-size: 1.2em;
                    color: #666;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 40px;
                    margin-top: 60px;
                }

                .feature-card {
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .feature-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                .feature-card:hover::before {
                    transform: scaleX(1);
                }

                .feature-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .feature-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(45deg, #667eea, #764ba2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    font-size: 2em;
                    color: white;
                }

                .feature-card h3 {
                    font-size: 1.5em;
                    margin-bottom: 15px;
                    color: #333;
                }

                .feature-card p {
                    color: #666;
                    line-height: 1.6;
                }

                .download {
                    padding: 100px 0;
                    background: linear-gradient(
                        135deg,
                        #667eea 0%,
                        #764ba2 100%
                    );
                    color: white;
                    text-align: center;
                }

                .download h2 {
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }

                .download p {
                    font-size: 1.2em;
                    margin-bottom: 40px;
                    opacity: 0.9;
                }

                .footer {
                    background: #1a1a1a;
                    color: white;
                    padding: 60px 0 30px;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 40px;
                    margin-bottom: 40px;
                }

                .footer-section h3 {
                    margin-bottom: 20px;
                    font-size: 1.3em;
                }

                .footer-section p {
                    color: #ccc;
                    line-height: 1.6;
                }

                .footer-links {
                    list-style: none;
                }

                .footer-links li {
                    margin-bottom: 10px;
                }

                .footer-links a {
                    color: #ccc;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    cursor: pointer;
                }

                .footer-links a:hover {
                    color: #667eea;
                }

                .footer-bottom {
                    border-top: 1px solid #333;
                    padding-top: 30px;
                    text-align: center;
                    color: #999;
                }

                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    cursor: pointer;
                }

                .mobile-menu span {
                    width: 25px;
                    height: 3px;
                    background: #333;
                    margin: 3px 0;
                    transition: 0.3s;
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: ${isMobileMenuOpen ? "flex" : "none"};
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        flex-direction: column;
                        padding: 20px;
                        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                    }

                    .mobile-menu {
                        display: flex;
                    }

                    .hero h1 {
                        font-size: 2.5em;
                    }

                    .hero p {
                        font-size: 1.1em;
                    }

                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .section-title h2 {
                        font-size: 2em;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }

                    .download h2 {
                        font-size: 2em;
                    }
                }
            `}</style>

            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-container">
                    <a
                        href="/"
                        className="logo"
                        onClick={() => scrollToSection("home")}
                    >
                        NGACO
                    </a>
                    <ul className="nav-links">
                        <li>
                            <a onClick={() => scrollToSection("home")}>Home</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("features")}>
                                Fitur
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("download")}>
                                Download
                            </a>
                        </li>
                        <li>
                            <a onClick={navigateToPrivacy}>Privacy Policy</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("contact")}>
                                Kontak
                            </a>
                        </li>
                    </ul>
                    <div
                        className="mobile-menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>NGACO</h1>
                    <p>
                        Aplikasi chat grup yang aman, mudah, dan menyenangkan.
                        Buat grup baru atau gabung dengan teman-temanmu!
                    </p>
                    <div className="cta-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection("download")}
                        >
                            📱 Download Sekarang
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={navigateToPrivacy}
                        >
                            🔒 Privacy Policy
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-title">
                        <h2>Kenapa Pilih NGACO?</h2>
                        <p>
                            Fitur-fitur unggulan yang membuat chatting jadi
                            lebih seru
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card"
                                style={{
                                    animation: `slideInUp 0.6s ease-out ${
                                        index * 0.1
                                    }s both`,
                                }}
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="download">
                <div className="container">
                    <h2>Siap untuk Mulai Ngobrol?</h2>
                    <p>
                        Download NGACO sekarang dan rasakan pengalaman chat grup
                        yang berbeda!
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-secondary">
                            📱 Download untuk Android
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={navigateToPrivacy}
                        >
                            📋 Baca Privacy Policy
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>NGACO</h3>
                            <p>
                                Aplikasi chat grup terpercaya yang mengutamakan
                                keamanan dan kemudahan pengguna. Bergabunglah
                                dengan komunitas NGACO dan rasakan pengalaman
                                chatting yang berbeda.
                            </p>
                        </div>

                        <div className="footer-section">
                            <h3>Fitur</h3>
                            <ul className="footer-links">
                                <li>
                                    <a
                                        onClick={() =>
                                            scrollToSection("features")
                                        }
                                    >
                                        Chat Real-time
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            scrollToSection("features")
                                        }
                                    >
                                        Grup Management
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            scrollToSection("features")
                                        }
                                    >
                                        Keamanan Data
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            scrollToSection("features")
                                        }
                                    >
                                        Mobile Friendly
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3>Legal</h3>
                            <ul className="footer-links">
                                <li>
                                    <a onClick={navigateToPrivacy}>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a>Terms of Service</a>
                                </li>
                                <li>
                                    <a>Cookie Policy</a>
                                </li>
                                <li>
                                    <a>Data Protection</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3>Kontak</h3>
                            <ul className="footer-links">
                                <li>
                                    <a href="mailto:info@ngaco.app">
                                        info@ngaco.app
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:support@ngaco.app">
                                        support@ngaco.app
                                    </a>
                                </li>
                                <li>
                                    <a onClick={navigateToPrivacy}>
                                        Privacy Concerns
                                    </a>
                                </li>
                                <li>
                                    <a>Help Center</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>
                            &copy; 2025 NGACO. All rights reserved. | Made with
                            ❤️ for better communication
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
