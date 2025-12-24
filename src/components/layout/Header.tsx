// src/components/layout/Header.jsx
import {useState} from "react";
import { Link, useLocation } from 'react-router-dom'
import { HiBars3 } from "react-icons/hi2";
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    // 判斷目前路徑是否為活躍狀態
    const isActive = (path:string) => {
        if (path === '/' && location.pathname === '/') return true
        if (path !== '/' && location.pathname.startsWith(path)) return true
        return false
    }

    // 導航選單項目
    const navItems = [
        { path: '/', label: '首頁', icon: '🏠' },
        { path: '/menu', label: '菜單', icon: '🍳' },
        { path: '/about', label: '關於我們', icon: '📋' },
        { path: '/contact', label: '聯絡我們', icon: '📞' },
    ]

    return (
        <header className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
            <div className="navbar-start">
                {/* 手機版選單按鈕 */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <HiBars3 className="h-6 w-6" />
                    </div>

                    {/* 手機版下拉選單 */}
                    { (
                            <ul
                            tabIndex={0}
                            className="menu menu-sm menu-vertical dropdown-content  dropdown-bottom mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={isActive(item.path) ? 'active' : ''}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 網站 Logo */}
                <Link to="/" className="btn btn-ghost text-xl">
                    <span className="text-2xl mr-2">🥞</span>
                    早餐時光
                </Link>
            </div>

            {/* 桌面版導航選單 */}
            <div className="navbar-center ">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`${isActive(item.path) ? 'active' : ''} flex items-center`}
                            >
                                <span className="mr-2">{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 右側功能按鈕 */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                            <span className="text-sm font-bold">😊</span>
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm menu-vertical dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>個人資料</a></li>
                        <li><a>設定</a></li>
                        <li><a>登出</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
