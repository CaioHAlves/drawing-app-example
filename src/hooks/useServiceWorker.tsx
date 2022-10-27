import { useState, useCallback, useEffect } from "react";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

export const useServiceWorker = () => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [showReload, setShowReload] = useState<boolean>(false);

  // chamado quando um service worker
  // atualiza. esta função é um retorno de chamada
  // para o service worker real
  // registro onUpdate.
  const onSWUpdate = useCallback((registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  }, []);

  // simplesmente, isso diz ao serviço
  // trabalhador para pular a fase de espera e, em seguida, recarrega a página
  const reloadPage = useCallback(() => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  }, [waitingWorker]);

  // registrar o service worker
  useEffect(() => {
    // Se você quiser que seu aplicativo funcione offline e carregue mais rápido, você pode alterar
    // unregister() para register() abaixo. Observe que isso vem com algumas armadilhas.
    // Saiba mais sobre service workers: https://cra.link/PWA
    serviceWorkerRegistration.register({
      onUpdate: onSWUpdate,
    });
  }, [onSWUpdate]);
  return { showReload, waitingWorker, reloadPage };
}
