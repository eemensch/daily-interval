# Daily Ten

A ten-minute full-body workout timer for seven days a week. It installs to a phone's home screen and runs offline.

## What is in this folder

- `index.html`: the app.
- `manifest.webmanifest`: the app name, icons and full-screen setting.
- `sw.js`: caches every file on the first visit so the app works offline.
- `fonts/` and `icons/`: local copies, so nothing loads from the internet.

## 1. Host the folder

The phone must load the app once from an HTTPS address. Offline mode and installation do not work from a file opened directly on the phone.

Any static host works. Two free options:

- **GitHub Pages:** create a repository and upload the contents of this folder to it. Then turn on Pages in the repository settings for the main branch. The app's address is `https://<username>.github.io/<repository>/`.
- **Netlify or Cloudflare Pages:** create a site and upload this folder.

Upload the folder's contents, not the zip file.

## 2. Install on the phone

- **iPhone (Safari):** open the address, tap Share, then Add to Home Screen.
- **Android (Chrome):** open the address, open the menu, then tap Install app or Add to home screen.

The app now opens from its icon without browser bars. After the first launch it works without a connection.

## Notes

- Completed sessions are stored on that phone only. Clearing the browser's site data removes them.
- On iPhone, turn off silent mode to hear the beeps.
- To change the app, edit the files, raise the version in `sw.js` (`daily-ten-v1` to `daily-ten-v2`) and upload again. The phone picks up the new version on its next launch with a connection.

## Try it on a computer first

From inside this folder, run:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.
