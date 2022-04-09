const getWebSocket = (() => {
  let ws: (WebSocket & { closeAndClear: () => void }) | null;
  let token: string | null;
  const closeAndClear = () => {
    if (ws) {
      ws.close();
      ws = null;
    }
  };
  const onerror: WebSocket['onerror'] = (error) => {
    if (ws) {
      console.error('Ошибка при подключении к вебсоккету', error);
      ws.close();
    }
  };
  const onclose: WebSocket['onclose'] = () => {
    if (ws) {
      const onmessage = ws.onmessage;
      ws.closeAndClear();
      setTimeout(() => {
        ws = getWebSocket({ token });
        ws.onmessage = onmessage;
      }, 3000);
    }
  };
  return ({ token: ownerToken }: { token: string | null }) => {
    if (!ws) {
      // записываем токен, чтобы использовать для реконнекта
      token = ownerToken;
      ws = Object.assign(new WebSocket(`${process.env.REACT_APP_WS_URL}?token=${token}`), {
        closeAndClear,
        onerror,
        onclose,
      });
    }
    return ws;
  };
})();

export default getWebSocket;
