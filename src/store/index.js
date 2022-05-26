import create from 'zustand';

export const useWallet = create(set => ({
  walletAddress: "",
  setWalletAddress: () => set(state => ({ wallet: state })),
}))