# Reflink Merchant Demo

A demo store implementation showcasing the Reflink affiliate marketing platform on Solana. This project demonstrates how merchants can integrate with the Reflink protocol to enable decentralized affiliate marketing on their e-commerce platforms.

## 🚀 Features

- Next.js 15 with App Router
- Solana Wallet Integration
- Modern UI with Tailwind CSS
- React Query for Data Management
- Dark Mode Support
- TypeScript Support
- Reflink Protocol Integration
- Affiliate Marketing Capabilities

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 15.2
- **Blockchain:** Solana (@solana/web3.js, @coral-xyz/anchor)
- **Styling:** Tailwind CSS
- **State Management:** TanStack Query (React Query)
- **UI Components:** Radix UI
- **Package Manager:** pnpm
- **Development Tools:**
  - TypeScript
  - ESLint
  - TurboRepo

## 📦 Prerequisites

- Node.js 18 or higher
- pnpm 10.10.0 or higher
- Solana CLI tools (optional for blockchain development)

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd reflink-merchant-demo
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🏗️ Project Structure

```
├── app/                  # Next.js app directory
├── components/           # React components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and shared logic
├── anchor-idl/          # Solana program interfaces
└── public/              # Static assets
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌐 Deployment

This application can be deployed on Vercel with zero configuration. For other platforms, build the application using:

```bash
pnpm build
```

Then start the production server:

```bash
pnpm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
