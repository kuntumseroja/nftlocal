/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Material Metric Marketplace</p>
        <div className="flex mt-4">
          <Link legacyBehavior href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/create-nft">
            <a className="mr-6 text-pink-500">
              Generate Material NFT
            </a>
          </Link>
          <Link legacyBehavior href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link legacyBehavior href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
