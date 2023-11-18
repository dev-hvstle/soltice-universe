"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="text-[#fff] bg-gradient-to-r from-[#7229e2] to-[#2159df] flex items-center gap-2 px-4 py-2 rounded-md font-bold hover:opacity-50 duration-150"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="px-3 py-2 flex justify-center items-center gap-3 text-cNeutral-100 bg-cSecondary-500 rounded-lg w-full text-base font-[spacegrotesk] hover:opacity-50 duration-150"
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="text-[#fff] bg-gradient-to-r from-[#7229e2] to-[#2159df] flex items-center gap-2 px-4 py-2 rounded-lg font-bold hover:opacity-50 duration-150"
                  >
                    {/* <WalletIcon color={"#12202F"} />{" "} */}
                    {/* {account.hasPendingTransactions.toString()} */}
                    {account.hasPendingTransactions ? (
                      "Pending..."
                    ) : (
                      <>
                        {" "}
                        {account.ensName === undefined
                          ? account.displayName
                          : account.ensName}
                      </>
                    )}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
