(async () => {
	window.opener.postMessage(
    await (
      await fetch("https://unpkg.com/react@17/umd/react.development.js")
    ).text(),
    "*"
  );
	window.opener.postMessage(
    await (
      await fetch("https://unpkg.com/react-dom@17/umd/react-dom.development.js")
    ).text(),
    "*"
  );
  window.opener.postMessage(
    await (
      await fetch("https://jacobjuneau6.github.io/blooket/index.js")
    ).text(),
    "*"
  );
})();
