# TripUp – interactive prototype

Static HTML/CSS/JS. No build step, no backend. Works on GitHub Pages as-is.

## Files
- index.html – entry point
- styles.css – design tokens + components
- app.js – mock data, screens and interactions
- assets/ – Lisbon illustration and app icon
- .nojekyll – tells GitHub Pages to serve files as they are

## Publish on GitHub Pages
1. Create a new public repository on github.com (e.g. `tripup-prototype`).
2. Upload the contents of this folder to the root of the repo (Add file → Upload files). Keep the folder structure (assets/ must stay a folder).
3. Go to Settings → Pages. Under "Build and deployment" choose Source: Deploy from a branch, Branch: main, Folder: / (root). Save.
4. After about a minute the site is live at `https://<your-username>.github.io/tripup-prototype/`.

## Viewing
- Desktop: shows an iPhone 16 frame (393 × 852). If the window is shorter, the frame scales down to fit.
- Mobile: opens full screen, respects the notch and home indicator.
- Add to Home Screen on iPhone (Share → Add to Home Screen) to open it without Safari's bars.
- Add `?bare` to the URL to show only the phone, without the side text.

## Notes
- Explore photos load from Wikipedia at runtime; everything else works offline.
- "Restart demo": tap an empty area of the screen.
