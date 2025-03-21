import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/login-button"

export function HeroSection() {
  return (
    <section className="py-20 flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Secure, Private & Decentralized Chat
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Experience the future of communication with our blockchain-powered chat platform. No central servers, no data
          mining, just secure peer-to-peer messaging.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LoginButton size="lg" />
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/dheeraj5988/blockchainchatapp/blob/main/README.md">Learn More</a>
          </Button>
        </div>
      </div>

      <div className="mt-16 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75"></div>
        <div className="relative bg-black rounded-lg p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">DC</span>
              </div>
              <span className="font-medium">DecentralChat</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>End-to-end encrypted</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
              <div className="bg-gray-800 rounded-lg rounded-tl-none p-3 text-sm text-left">
                Hey there! How's it going? This message is secured by blockchain technology.
              </div>
            </div>
            <div className="flex items-start gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
              <div className="bg-primary/20 rounded-lg rounded-tr-none p-3 text-sm text-left">
                Hi! I'm good. Love how secure this feels knowing no one can access our conversation!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

