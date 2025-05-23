'use client'

import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useEffect, useState } from "react"
import { Wallet } from 'lucide-react';

export default function WalletConnectButton() {
    const { publicKey } = useWallet()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <div>
            <WalletMultiButton>
                {publicKey ? (
                    `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
                ) : (
                    <>Connect <Wallet className="pl-2"/></>
                )}
            </WalletMultiButton>
        </div>
    )
}