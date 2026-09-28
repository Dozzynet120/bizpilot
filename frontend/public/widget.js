(function () {
  'use strict';

  const currentScript = document.currentScript;

  if (!currentScript) {
    console.error(
      'BizPilot Widget: Unable to locate the widget script.'
    );
    return;
  }

  const widgetId =
    currentScript.getAttribute('data-widget-id');

  if (!widgetId) {
    console.error(
      'BizPilot Widget: Missing data-widget-id.'
    );
    return;
  }

  const scriptUrl = new URL(currentScript.src);
  const origin = scriptUrl.origin;

  /*
   * ---------------------------------------------------------
   * Launcher
   * ---------------------------------------------------------
   */

  const launcher = document.createElement('button');

  launcher.type = 'button';
  launcher.setAttribute(
    'aria-label',
    'Open BizPilot AI'
  );

  launcher.innerHTML = '🤖';

  launcher.style.position = 'fixed';
  launcher.style.right = '24px';
  launcher.style.bottom = '24px';
  launcher.style.width = '60px';
  launcher.style.height = '60px';
  launcher.style.border = '0';
  launcher.style.borderRadius = '50%';
  launcher.style.background =
    'linear-gradient(135deg, #2563EB, #4F46E5)';
  launcher.style.color = '#ffffff';
  launcher.style.fontSize = '26px';
  launcher.style.cursor = 'pointer';
  launcher.style.boxShadow =
    '0 10px 30px rgba(15, 23, 42, 0.25)';
  launcher.style.zIndex = '2147483647';
  launcher.style.display = 'flex';
  launcher.style.alignItems = 'center';
  launcher.style.justifyContent = 'center';
  launcher.style.transition =
    'transform 0.2s ease, box-shadow 0.2s ease';

  launcher.addEventListener(
    'mouseenter',
    function () {
      launcher.style.transform = 'scale(1.06)';
      launcher.style.boxShadow =
        '0 14px 35px rgba(15, 23, 42, 0.32)';
    }
  );

  launcher.addEventListener(
    'mouseleave',
    function () {
      launcher.style.transform = 'scale(1)';
      launcher.style.boxShadow =
        '0 10px 30px rgba(15, 23, 42, 0.25)';
    }
  );

  /*
   * ---------------------------------------------------------
   * Chat iframe
   * ---------------------------------------------------------
   */

  const iframe = document.createElement('iframe');

  iframe.src =
    origin +
    '/widget/' +
    encodeURIComponent(widgetId);

  iframe.title = 'BizPilot AI Chatbot';

  iframe.setAttribute(
    'allow',
    'clipboard-write'
  );

  iframe.style.position = 'fixed';
  iframe.style.right = '20px';
  iframe.style.bottom = '20px';
  iframe.style.width = '390px';
  iframe.style.height = '620px';
  iframe.style.maxWidth = 'calc(100vw - 40px)';
  iframe.style.maxHeight = 'calc(100vh - 40px)';
  iframe.style.border = '0';
  iframe.style.borderRadius = '18px';
  iframe.style.background = 'transparent';
  iframe.style.boxShadow =
    '0 20px 50px rgba(15, 23, 42, 0.25)';
  iframe.style.zIndex = '2147483646';
  iframe.style.display = 'none';

  document.body.appendChild(launcher);
  document.body.appendChild(iframe);

  /*
   * ---------------------------------------------------------
   * Open widget
   * ---------------------------------------------------------
   */

  function openWidget() {
    launcher.style.display = 'none';
    iframe.style.display = 'block';
  }

  /*
   * ---------------------------------------------------------
   * Close widget
   * ---------------------------------------------------------
   */

  function closeWidget() {
    iframe.style.display = 'none';
    launcher.style.display = 'flex';
  }

  launcher.addEventListener(
    'click',
    openWidget
  );

  /*
   * ---------------------------------------------------------
   * Messages from BizPilot iframe
   * ---------------------------------------------------------
   */

  window.addEventListener(
    'message',
    function (event) {
      if (event.origin !== origin) {
        return;
      }

      if (
        event.data &&
        event.data.type ===
          'BIZPILOT_WIDGET_CLOSE'
      ) {
        closeWidget();
      }
    }
  );

  /*
   * ---------------------------------------------------------
   * Responsive mobile behavior
   * ---------------------------------------------------------
   */

  function applyResponsiveStyles() {
    if (window.innerWidth <= 600) {
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '100vw';
      iframe.style.height = '100vh';
      iframe.style.maxWidth = '100vw';
      iframe.style.maxHeight = '100vh';
      iframe.style.borderRadius = '0';

      launcher.style.right = '18px';
      launcher.style.bottom = '18px';
    } else {
      iframe.style.right = '20px';
      iframe.style.bottom = '20px';
      iframe.style.width = '390px';
      iframe.style.height = '620px';
      iframe.style.maxWidth =
        'calc(100vw - 40px)';
      iframe.style.maxHeight =
        'calc(100vh - 40px)';
      iframe.style.borderRadius = '18px';

      launcher.style.right = '24px';
      launcher.style.bottom = '24px';
    }
  }

  applyResponsiveStyles();

  window.addEventListener(
    'resize',
    applyResponsiveStyles
  );
})();