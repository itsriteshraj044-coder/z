import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-inner">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-text">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
