# Skatebit API

A lightweight, community-driven API for curated Skater XL mods.

## 🔧 Features

- Versioned mod list endpoints at `/api/mods/[version]`
- Version index available at `/api/mods/versions`
- CORS-enabled for client-side use
- Deployable to Vercel with zero config

## 📁 File Structure

```
/skatebit-api
├── api/
│   └── mods/
│       ├── [version].ts      // Dynamic version endpoint
│       └── versions.ts       // Lists all supported versions
├── data/
│   └── mods/
│       ├── v1256.json        // Mods for SXL v1.2.5.6
│       └── v133.json         // Mods for SXL v1.3.3
├── vercel.json               // CORS headers
└── README.md
```

## 🚀 Deploy

Push this repo to GitHub and connect it to Vercel.

## 💡 Future Plans

- Admin-only edit UI
- Discord bot integration
- Community suggestions
- Mod status flags
