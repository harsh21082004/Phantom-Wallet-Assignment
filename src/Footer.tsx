import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="bg-dark footer-light">
                <footer className="py-3">
                    <p className='text-center px-2 text-light'>Made with ❤️ By Harsh Tiwari</p>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Home</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Features</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Pricing</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-light">FAQs</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-light">About</a></li>
                    </ul>
                    <p className="text-center text-light">© 2024 Company, Inc</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer
