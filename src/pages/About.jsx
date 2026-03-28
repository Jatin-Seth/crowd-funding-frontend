import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-white p-6 sm:p-10 max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl sm:text-5xl mb-4">
          About Hope Fund
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Hope Fund is a decentralized crowdfunding platform built on Web3
          technology, empowering individuals to raise funds transparently and
          support meaningful causes worldwide.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🌍 Our Mission</h2>
        <p className="text-gray-400 leading-7">
          Our mission is to revolutionize fundraising by eliminating
          intermediaries and creating a trustless environment where donors can
          directly support causes they believe in. We aim to make crowdfunding
          more transparent, secure, and accessible using blockchain technology.
        </p>
      </div>

      {/* What We Do */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🚀 What We Do</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Create campaigns for personal, social, or innovative causes</li>
          <li>Allow users to fund campaigns securely using Web3 wallets</li>
          <li>Ensure transparency of all transactions on blockchain</li>
          <li>Provide a decentralized platform with no central authority</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">✨ Key Features</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-[#1c1c24] p-5 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">🔒 Transparency</h3>
            <p className="text-gray-400 text-sm">
              Every transaction is recorded on the blockchain, ensuring full
              transparency and trust.
            </p>
          </div>

          <div className="bg-[#1c1c24] p-5 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">⚡ Decentralized</h3>
            <p className="text-gray-400 text-sm">
              No middlemen. Funds go directly from donors to campaign creators.
            </p>
          </div>

          <div className="bg-[#1c1c24] p-5 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">🌐 Global Access</h3>
            <p className="text-gray-400 text-sm">
              Anyone from anywhere in the world can create or fund campaigns.
            </p>
          </div>

          <div className="bg-[#1c1c24] p-5 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">💰 Secure Payments</h3>
            <p className="text-gray-400 text-sm">
              Powered by blockchain wallets ensuring safe and verified
              transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💡 Why Hope Fund?</h2>
        <p className="text-gray-400 leading-7">
          Traditional crowdfunding platforms often suffer from high fees, lack
          of transparency, and delayed fund transfers. Hope Fund solves these
          issues by leveraging Web3 technology, allowing instant, transparent,
          and secure funding without unnecessary intermediaries.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔮 Our Vision</h2>
        <p className="text-gray-400 leading-7">
          We envision a world where financial support is borderless, trust is
          built through technology, and anyone with a genuine cause can receive
          help instantly. Hope Fund is not just a platform—it’s a movement toward
          decentralized compassion.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Join the Movement 🚀
        </h2>
        <p className="text-gray-400 mb-6">
          Start a campaign or support one today and be part of the future of
          decentralized crowdfunding.
        </p>

        <Link to="https://github.com/Jatin-Seth/Web3-crowd-funding"
        className="bg-[#8c6dfd] px-6 py-3 rounded-lg font-semibold hover:bg-[#7a5df0] transition">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default About;