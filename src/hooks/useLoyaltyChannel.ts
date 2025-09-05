import { useCallback, useEffect, useRef } from "react";

export interface SendInformationArgs {
  data: string;
  url: string;
}

const useLoyaltyChannel = ({ message }: { message: SendInformationArgs }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const sendInformationToLoyaltyProtocol = useCallback(
    ({ data, url }: SendInformationArgs) => {
      const iframe = iframeRef.current;
      if (!iframe || typeof iframe.contentWindow === "undefined")
        return void console.warn(
          `Element with ID: loyalty-protocol is not iframe window`
        );

      iframe.contentWindow?.postMessage(data, url);
    },
    [iframeRef.current]
  );

  useEffect(() => {
    const eventHandler = ({ data }: MessageEvent) => {
      if (data?.eventName === "init-handshake") {
        sendInformationToLoyaltyProtocol(message);
      }
    };
    window.addEventListener("message", eventHandler);

    return () => window.removeEventListener("message", eventHandler);
  }, []);

  return { iframeRef };
};

export { useLoyaltyChannel };
