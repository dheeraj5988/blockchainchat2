export function FeaturesSection() {
  const features = [
    {
      title: "End-to-End Encryption",
      description:
        "All messages are encrypted before being stored on the blockchain. Only the sender and recipient can decrypt messages using their private keys.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          <circle cx="12" cy="16" r="1"></circle>
        </svg>
      ),
    },
    {
      title: "Decentralized Storage",
      description:
        "Messages are recorded on a blockchain ledger, ensuring immutability and tamper-proof communication.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
        </svg>
      ),
    },
    {
      title: "Wallet Authentication",
      description: "Users authenticate via a blockchain wallet (e.g., MetaMask), ensuring secure and anonymous access.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      ),
    },
    {
      title: "P2P Communication",
      description:
        "Messages are transmitted through a decentralized P2P network instead of relying on a centralized server.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="M18 13l-6 6"></path>
          <path d="M6 13l6 6"></path>
          <path d="M18 11l-6-6"></path>
          <path d="M6 11l6-6"></path>
        </svg>
      ),
    },
    {
      title: "Real-Time Messaging",
      description: "WebSocket or a decentralized notification protocol ensures real-time message updates.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 3 3 9-3 9 19-9Z"></path>
          <path d="M13 13h5a3 3 0 1 0 0-6h-5v9Z"></path>
        </svg>
      ),
    },
    {
      title: "Anonymous Identity",
      description: "No personal data is stored centrally. Users interact using blockchain addresses or pseudonyms.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M5 21v-2a7 7 0 0 1 14 0v2"></path>
          <line x1="5" x2="19" y1="21" y2="21"></line>
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Choose DecentralChat?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our blockchain-based chat application offers unparalleled security and privacy features that traditional
          messaging platforms simply can't match.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20" id="how-it-works">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our decentralized architecture ensures your messages remain private and secure.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 to-primary/20"></div>

          <div className="space-y-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-medium mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400">
                  Login securely with MetaMask or any Web3 wallet. Your wallet address serves as your unique identifier.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 order-1 md:order-2">
                <span className="font-bold">1</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                <span className="font-bold">2</span>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-medium mb-2">Send Encrypted Messages</h3>
                <p className="text-gray-400">
                  Your messages are encrypted with the recipient's public key, ensuring only they can decrypt and read
                  them.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-medium mb-2">Blockchain Storage</h3>
                <p className="text-gray-400">
                  Message metadata is stored on the blockchain while content is stored on IPFS for efficiency and
                  cost-effectiveness.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 order-1 md:order-2">
                <span className="font-bold">3</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                <span className="font-bold">4</span>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-medium mb-2">Real-Time Communication</h3>
                <p className="text-gray-400">
                  Receive messages instantly through our P2P network, with blockchain verification ensuring
                  authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

