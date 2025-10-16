// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const features = [
        {
            icon: '🥞',
            title: '新鮮現做',
            description: '每日新鮮食材，現點現做，確保最佳品質'
        },
        {
            icon: '⚡',
            title: '快速服務',
            description: '高效率製作流程，最短等待時間'
        },
        {
            icon: '💰',
            title: '價格實惠',
            description: '物超所值的價格，學生族群首選'
        }
    ]

    return (
        <div className="space-y-12">
            {/* 主要橫幅區塊 */}
            <section className="hero bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <div className="hero-content text-center py-16">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold text-gradient mb-6">
                            美味早餐，新鮮現做
                        </h1>
                        <p className="text-lg text-base-content/80 mb-8">
                            歡迎來到早餐時光！我們提供最新鮮、最美味的早餐選擇，
                            用心製作每一份餐點，為您開啟美好的一天。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/menu" className="btn btn-primary btn-lg">
                                <span className="mr-2">🍳</span>
                                查看菜單
                            </Link>
                            <Link to="/about" className="btn btn-outline btn-lg">
                                <span className="mr-2">📖</span>
                                了解更多
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 特色服務區塊 */}
            <section className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">為什麼選擇我們？</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        我們致力於提供最優質的早餐體驗，從食材選擇到服務品質，每個細節都精心把關
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card-custom p-6 text-center">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-base-content/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 行動呼籲區塊 */}
            <section className="bg-primary/5 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">準備好開始您的美味之旅了嗎？</h2>
                <p className="text-base-content/80 mb-6">
                    立即瀏覽我們的完整菜單，發現更多令人驚艷的早餐選擇
                </p>
                <Link to="/menu" className="btn btn-primary btn-wide">
                    立即點餐
                </Link>
            </section>
        </div>
    )
}

export default Home
