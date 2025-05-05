# Skatebit API

A lightweight, versioned API for curated Skater XL mods.

> Example: https://skatebit-api.vercel.app/api/mods/12104

## ✨ Features

- ✅ Versioned endpoints: `GET /api/mods/[version]`
- ✅ Version list endpoint: `GET /api/mods/versions`
- ✅ CORS-enabled: ready for use in websites and apps
- ✅ Instantly deployable on [Vercel](https://vercel.com)

## 📁 Project Structure

```
├── api/
│ └── mods/
│ ├── [version].ts # Dynamic route: returns JSON for a specific game version
│ └── versions.ts # Lists all available version files
├── data/
│ └── mods/
│ ├── v1256.json # Mods for Skater XL v1.2.5.6
│ └── v1228.json # Mods for Skater XL v1.2.2.8
├── vercel.json # Sets CORS headers for API access
└── README.md
```

## 🔮 Roadmap

- [ ] Admin web UI to edit mods from the browser
- [ ] Discord bot for syncing with channels
- [ ] Community mod feedback system
- [ ] Mod status flags (e.g. working, broken, outdated)

---

Feel free to fork, contribute, or build tools around it.
