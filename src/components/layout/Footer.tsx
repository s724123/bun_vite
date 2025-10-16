// src/components/layout/Footer.jsx
import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover" href="/about">關於我們</a>
                <a className="link link-hover" href="/contact">聯絡我們</a>
                <a className="link link-hover" href="/menu">菜單</a>
                <a className="link link-hover" href="/privacy">隱私政策</a>
            </nav>

            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a
                        href="https://twitter.com"
                        className="btn btn-ghost btn-circle"
                        aria-label="Twitter"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>

                    <a
                        href="https://facebook.com"
                        className="btn btn-ghost btn-circle"
                        aria-label="Facebook"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>

                    <a
                        href="https://instagram.com"
                        className="btn btn-ghost btn-circle"
                        aria-label="Instagram"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l1.381-1.381c.48.6 1.21.98 2.018.98 1.428 0 2.587-1.159 2.587-2.587 0-.808-.38-1.538-.98-2.018l1.381-1.381c.937.757 1.533 1.908 1.533 3.205 0 2.299-1.862 4.161-4.161 4.161z"/>
                        </svg>
                    </a>
                </div>
            </nav>

            <aside>
                <p>
                    © {currentYear} 早餐時光. 版權所有 -
                    <span className="font-semibold ml-1">美味早餐，新鮮現做</span>
                </p>
            </aside>
        </footer>
    )
}

export default Footer
