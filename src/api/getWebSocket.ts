const getWebSocket = (() => {
  let ws: WebSocket;
  return ({ token }: { token: string | null }) => {
    if (!ws) {
      ws = new WebSocket(`${process.env.REACT_APP_WS_URL}?token=${token}`);
    }
    return ws;
  };
})();

export default getWebSocket;
