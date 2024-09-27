import React, { useEffect, useRef, useState } from 'react';

export interface UseBroadcastChannelReturn<D, P> {
  channel: BroadcastChannel | undefined;
  data: D | undefined;
  post: (data: P) => void;
  close: () => void;
  error: Event | null;
}

export function useBroadcastChannel<D, P>(
  channelName: string
): UseBroadcastChannelReturn<D, P> {
  const [channel, setChannel] = useState<BroadcastChannel | undefined>();
  const [data, setData] = useState<D>();
  const [error, setError] = useState<Event | null>(null);
  const channelRef = useRef<BroadcastChannel>();

  useEffect(() => {
    try {
      const newChannel = new BroadcastChannel(channelName);
      newChannel.onmessage = (event) => {
        setData(event.data);
      };
      channelRef.current = newChannel;
      setChannel(newChannel);
    } catch (e) {
      setError(e as Event | null);
    }

    return () => void close();
  }, [channelName]);

  const post = (dataToSend: P) => {
    if (channelRef.current) {
      channelRef.current.postMessage(dataToSend);
    }
  };

  const close = () => {
    if (channelRef.current) {
      channelRef.current.close();
    }
  };

  return {
    channel,
    data,
    post,
    close,
    error
  };
}

