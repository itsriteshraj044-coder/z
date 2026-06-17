import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'
import './PageCommon.css'

const categories = ['All', 'Store Exterior', 'Store Interior', 'Products', 'Events']

const galleryItems = [
  { id: 1, cat: 'Store Exterior', label: 'Zudio Store — Mall Entry', color: '#1e3a5f' },
  { id: 2, cat: 'Store Interior', label: 'Women\'s Collection Section', color: '#2d4a6f' },
  { id: 3, cat: 'Products', label: 'Men\'s Casual Wear', color: '#1a3050' },
  { id: 4, cat: 'Store Interior', label: 'Kids\' Zone', color: '#163060' },
  { id: 5, cat: 'Store Exterior', label: 'High Street Outlet', color: '#1e3a5f' },
  { id: 6, cat: 'Products', label: 'Ethnic Wear Collection', color: '#254060' },
  { id: 7, cat: 'Store Interior', label: 'Fitting Rooms & Trial Zone', color: '#1e2a5f' },
  { id: 8, cat: 'Events', label: 'Grand Opening Celebration', color: '#1a3a50' },
  { id: 9, cat: 'Products', label: 'Footwear Collection', color: '#203050' },
  { id: 10, cat: 'Store Interior', label: 'Accessories Section', color: '#1e3560' },
  { id: 11, cat: 'Store Exterior', label: 'Standalone Store', color: '#1a2f5e' },
  { id: 12, cat: 'Events', label: 'Seasonal Sale Event', color: '#16345a' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.cat === active)

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <p className="breadcrumb-nav"><Link to="/">Home</Link> › Gallery</p>
          <h1 className="page-title">Zudio Store Gallery</h1>
          <p className="page-subtitle">
            Explore Zudio store interiors, exteriors, products, and events from franchise locations across India.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map(item => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-img" style={{ background: `linear-gradient(135deg, ${item.color}, #0a1a30)` }}>
                  <span className="gallery-img-text">zudio</span>
                  <span className="gallery-img-sub">{item.label}</span>
                </div>
                <div className="gallery-caption">
                  <span className="gallery-cat-tag">{item.cat}</span>
                  <p className="gallery-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Your Images Notice */}
      <section className="section section-alt">
        <div className="container">
          <div className="upload-notice">
            <div className="upload-icon">🖼️</div>
            <h2 className="upload-title">Add Your Store Images</h2>
            <p className="upload-desc">
              Replace the placeholder images above with real photos of your Zudio franchise store. Place your images in the <code>src/assets/gallery/</code> folder and update the gallery data in <code>Gallery.jsx</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Zudio Product Categories</h2>
          <p className="section-subtitle">Zudio stores carry a wide range of fashion categories at affordable prices starting from ₹100.</p>
          <div className="products-grid">
            {[
              { icon: '👗', cat: 'Women\'s Wear', items: 'Kurtas, Tops, Dresses, Sarees', price: '₹199 – ₹999' },
              { icon: '👕', cat: 'Men\'s Wear', items: 'T-Shirts, Shirts, Trousers, Jeans', price: '₹199 – ₹899' },
              { icon: '👶', cat: 'Kids\' Wear', items: 'Tops, Shorts, Dresses, Innerwear', price: '₹99 – ₹599' },
              { icon: '👟', cat: 'Footwear', items: 'Sandals, Flats, Sneakers, Heels', price: '₹299 – ₹1,499' },
              { icon: '👜', cat: 'Accessories', items: 'Bags, Belts, Jewellery, Scarves', price: '₹99 – ₹699' },
              { icon: '🧥', cat: 'Winter Wear', items: 'Jackets, Hoodies, Sweaters', price: '₹399 – ₹1,999' },
            ].map(p => (
              <div key={p.cat} className="product-cat-card">
                <div className="product-cat-icon">{p.icon}</div>
                <h3 className="product-cat-title">{p.cat}</h3>
                <p className="product-cat-items">{p.items}</p>
                <div className="product-cat-price">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container cta-block">
          <h2 className="sec-title">Own a Zudio Franchise Store</h2>
          <p className="body-text" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 28px' }}>
            Interested in bringing a Zudio store to your city? Apply for a franchise now and be part of India's fastest growing fashion retail brand.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Apply for Franchise</Link>
            <Link to="/franchise-cost" className="btn-outline">View Investment Details</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
