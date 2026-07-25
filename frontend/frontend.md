# EverAfter AI Frontend Source

Automatically generated.

---

## Project Tree

```text
frontend
├── font
│   ├── amoresa
│   │   └── Andrey-Sharonov-Amoresa-Regular.otf
│   └── codec-pro
│       ├── CodecPro-Italic.ttf
│       └── CodecPro-Regular.ttf
├── public
│   └── assets
│       ├── companion
│       │   └── companion.png
│       ├── family
│       │   └── photo-2.png
│       ├── HOME1.webp
│       └── HOME2.webp
├── src
│   ├── app
│   │   ├── (app)
│   │   │   ├── companions
│   │   │   │   ├── [id]
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── new
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── profile
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── register
│   │   │   └── page.tsx
│   │   ├── verify-email
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── auth
│   │   │   ├── auth-card.tsx
│   │   │   └── google-button.tsx
│   │   ├── chat
│   │   │   ├── chat-bubbles.tsx
│   │   │   ├── chat-composer.tsx
│   │   │   ├── chat-header.tsx
│   │   │   ├── chat-message-list.tsx
│   │   │   └── voice-play-button.tsx
│   │   ├── companions
│   │   │   ├── edit-companion-sheet.tsx
│   │   │   └── voice-reference-card.tsx
│   │   ├── layout
│   │   │   ├── app-shell.tsx
│   │   │   └── sidebar.tsx
│   │   ├── marketing
│   │   │   ├── feature-bond-section.tsx
│   │   │   ├── hero-illustration.tsx
│   │   │   ├── landing-page.tsx
│   │   │   ├── marketing-home.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── split-intro.module.css
│   │   │   ├── split-intro.tsx
│   │   │   └── wordmark.tsx
│   │   ├── ui
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── confirm-dialog.tsx
│   │   │   ├── dropdown.tsx
│   │   │   ├── empty-state.tsx
│   │   │   ├── field.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── otp-input.tsx
│   │   │   ├── presence-avatar.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── toaster.tsx
│   │   ├── vault
│   │   │   └── memory-vault-sheet.tsx
│   │   └── wizard
│   │       ├── steps
│   │       │   ├── about.tsx
│   │       │   ├── basic-info.tsx
│   │       │   ├── relationship-step.tsx
│   │       │   └── review.tsx
│   │       ├── create-companion-wizard.tsx
│   │       ├── schema.ts
│   │       ├── wizard-header.tsx
│   │       └── wizard-nav.tsx
│   ├── fonts
│   │   ├── amoresa
│   │   │   └── Andrey-Sharonov-Amoresa-Regular.otf
│   │   ├── codec-pro
│   │   │   ├── CodecPro-Italic.ttf
│   │   │   └── CodecPro-Regular.ttf
│   │   └── fonts.ts
│   ├── hooks
│   │   ├── use-chat.ts
│   │   ├── use-companions.ts
│   │   ├── use-files.ts
│   │   └── use-voice.ts
│   ├── lib
│   │   ├── api.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   └── providers
│       ├── auth-provider.tsx
│       └── query-provider.tsx
├── .env.example
├── .gitignore
├── export.py
├── frontend.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

# next-env.d.ts

**Location:** `next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

---

# next.config.ts

**Location:** `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;

```

---

# package-lock.json

**Location:** `package-lock.json`

```json
{
  "name": "everafter-frontend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "everafter-frontend",
      "version": "1.0.0",
      "dependencies": {
        "@hookform/resolvers": "^3.9.0",
        "@tanstack/react-query": "^5.101.2",
        "class-variance-authority": "^0.7.1",
        "clsx": "^2.1.1",
        "framer-motion": "^12.42.2",
        "gsap": "^3.15.0",
        "lucide-react": "^1.24.0",
        "next": "16.2.10",
        "react": "19.2.7",
        "react-dom": "19.2.7",
        "react-hook-form": "^7.56.3",
        "sonner": "^2.0.7",
        "tailwind-merge": "^3.6.0",
        "zod": "3.25.76"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20",
        "@types/react": "^19.2.0",
        "@types/react-dom": "^19.2.0",
        "tailwindcss": "^4",
        "typescript": "^5.9.3"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.2",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.2.tgz",
      "integrity": "sha512-kyOl3X0DuTiT1h2ft8r2fYO8JYtU9a9Xis/zBSiGArNaagCOWx90N1k2wxp18czFDH+OgcWGb5ZP/XMt3dcyPA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@hookform/resolvers": {
      "version": "3.10.0",
      "resolved": "https://registry.npmjs.org/@hookform/resolvers/-/resolvers-3.10.0.tgz",
      "integrity": "sha512-79Dv+3mDF7i+2ajj7SkypSKHhl1cbln1OGavqrsF7p6mbUv11xpqpacPsGDCTRvCSjEEIez2ef1NveSVL3b0Ag==",
      "license": "MIT",
      "peerDependencies": {
        "react-hook-form": "^7.0.0"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.5.tgz",
      "integrity": "sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.5.tgz",
      "integrity": "sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.4.tgz",
      "integrity": "sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.4.tgz",
      "integrity": "sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.4.tgz",
      "integrity": "sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.4.tgz",
      "integrity": "sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.4.tgz",
      "integrity": "sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.2.4.tgz",
      "integrity": "sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA==",
      "cpu": [
        "riscv64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.4.tgz",
      "integrity": "sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.4.tgz",
      "integrity": "sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.4.tgz",
      "integrity": "sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.4.tgz",
      "integrity": "sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.5.tgz",
      "integrity": "sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.5.tgz",
      "integrity": "sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.5.tgz",
      "integrity": "sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.34.5.tgz",
      "integrity": "sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw==",
      "cpu": [
        "riscv64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.5.tgz",
      "integrity": "sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.5.tgz",
      "integrity": "sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.5.tgz",
      "integrity": "sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.5.tgz",
      "integrity": "sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.5.tgz",
      "integrity": "sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.7.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.5.tgz",
      "integrity": "sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.5.tgz",
      "integrity": "sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.5.tgz",
      "integrity": "sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@next/env": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.2.10.tgz",
      "integrity": "sha512-zLPxg9M0MEHmygpj5OuxjQ+vHMiy/K7cSp74G8ecYolmgUWw0RwN02tF56npup/+qaI8JB97hQgS/r2Hb6QwVA==",
      "license": "MIT"
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.2.10.tgz",
      "integrity": "sha512-v9IdJCa0H0mbo+8z5zwUpOk1Vj7RjkcI5uNYf5Ws1y6szf/p3Mzl9hLaST8SCt6L9h8NGnruZcd2+o0NTNwDhA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.2.10.tgz",
      "integrity": "sha512-17IS0jJRViROGmA9uGdNR8VPJpfbnaVG7E9qhso5jDLkmyd0lSDORWxbcKINzcFqzZqGwGtMSnrFRxBpuUYjLQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.2.10.tgz",
      "integrity": "sha512-GRQRsRtuciNJvB54AvvuQTiq0oZtFwa1owQqtZD8wwnGpM2L39MV22kpI72YSXLKIyY40LC66EiLFv4PiicXxg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.2.10.tgz",
      "integrity": "sha512-zkN9MQYS7UQBro+FnISUq1itaQjXI9xqISzuQ+2bc921NcJ1x4yPCqrn77tVN6/dOOXaaWVX3k6/bR07pPwK+A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.2.10.tgz",
      "integrity": "sha512-iCVJnwvrPYECvA6WM/7+oo+OiTvedIKLxtCLAZP4xZR3nXa1zmzZyLPbYCmWvpd4CvMYF1EMTafd0ii3DygLvA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.2.10.tgz",
      "integrity": "sha512-ov2g4H0dHY9bPoOU83m91hWT7Iq5qy13bUnyyshLU3HGR1Ownn0X9QpmDPc5iIUaahTp7f7LeGAhV4DSFtackw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.2.10.tgz",
      "integrity": "sha512-DwAnhLX76HQiFFQNgWlcK+JzlnD1rZ+UK/WY0ZMI/deXpvgnesjNYrqcfo1JzBuz4Kf7o3brIBL0glI1junatA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.2.10.tgz",
      "integrity": "sha512-0JXq3b85Jk9Jg4ntLUbXSPvoDw3gpZou7twuKdoFG2jOw635v7+IiXfTaa0TxVMyx78pUjnrVYwLgjKfX4e6/A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.3.tgz",
      "integrity": "sha512-JTSZZGQi1AyKirbLN3azmjVzef92tcX7h+iSqPdaeStyFpGpDlKvvpxeOE8njhbUanbRwr3z8DyzhICWnMtQeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "postcss": "^8.5.16",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tanstack/query-core": {
      "version": "5.101.2",
      "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-5.101.2.tgz",
      "integrity": "sha512-hH5MLoJhF7KaIGd7q3xTXGXvslI+GYlM1Z/35aSHHWaCJWB7XvTSHYuV3eM7tw+aE0mT/xMro4M4Q9rCGHT0lw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/react-query": {
      "version": "5.101.2",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-5.101.2.tgz",
      "integrity": "sha512-seDkr6kzGzX1okaaTtZPtgA688CDPlXUz1C6xSg0ESqn04Vuc8tlrYms1s3de+znBqhPVxFRfpAfUf+6XvfPWg==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-core": "5.101.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^18 || ^19"
      }
    },
    "node_modules/@types/node": {
      "version": "20.19.43",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.43.tgz",
      "integrity": "sha512-6oYBAi5ikg4Pl+kGsoYtawUMBT2zZMCvPNF7pVLnHZfd1zf38DRiWn/gT01RYCdUqkv7Fhr+C9ot4/tb+2sVvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.17",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.17.tgz",
      "integrity": "sha512-MXfmqaVPEVgkBT/aY0aGCkRWWtByiYQXo3xdQ8r5RzuFrPiRn8Gar2tQdXSUQ2GKV3bkXckek89V8wQBY2Q/Aw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.43",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.43.tgz",
      "integrity": "sha512-AjYpR78kDWAY3Efj+cDTFH9t9SCoL7OoTp1BOb0mQV7S+6CiLwnWM3FyxhJtdPufDFKzmCSFoUncKjWgJEZTCQ==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001806",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001806.tgz",
      "integrity": "sha512-72Cuvd95zbSYPKq6Fhg8eDJRlzgWDf7/mtoZv6Qe/DYNCEBdNxoA3+rZAU2ZhGCpZlns3EssFavaZomckT5Uuw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/class-variance-authority": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz",
      "integrity": "sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==",
      "license": "Apache-2.0",
      "dependencies": {
        "clsx": "^2.1.1"
      },
      "funding": {
        "url": "https://polar.sh/cva"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.24.2",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.24.2.tgz",
      "integrity": "sha512-rpsZEGT1jFuve6QlpyRp9ckQ+kN61hvF9BzCPyMdaKTm8UJce96KBn3sorXOFXlzjPrs3Vc4T1NsSroZ3PxlFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/framer-motion": {
      "version": "12.42.2",
      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-12.42.2.tgz",
      "integrity": "sha512-5XY9luDiu0oHfHBjpDthFMh0ES+122w6p/papSJBweMkO8Sn+PW2QaEgRblQBpWFnuvZS5qvarpt/hO2pjGmnw==",
      "license": "MIT",
      "dependencies": {
        "motion-dom": "^12.42.2",
        "motion-utils": "^12.39.0",
        "tslib": "^2.4.0"
      },
      "peerDependencies": {
        "@emotion/is-prop-valid": "*",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@emotion/is-prop-valid": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/gsap": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/gsap/-/gsap-3.15.0.tgz",
      "integrity": "sha512-dMW4CWBTUK1AEEDeZc1g4xpPGIrSf9fJF960qbTZmN/QwZIWY5wgliS6JWl9/25fpTGJrMRtSjGtOmPnfjZB+A==",
      "license": "Standard 'no charge' license: https://gsap.com/standard-license."
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.25.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.25.0.tgz",
      "integrity": "sha512-/mdJTRbiwcLOQ1NZZK1amZF9rIZyvO18D6r9TngE6TG1NmqHgFuT4eE7Xrkm9UsXMbBJD1NlfwHVltCDWHrOTw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/motion-dom": {
      "version": "12.42.2",
      "resolved": "https://registry.npmjs.org/motion-dom/-/motion-dom-12.42.2.tgz",
      "integrity": "sha512-5gIMWLp/PycBtJRJWRgjxke5n8dlvkSn2DrYW+tr3XcqAZY1xZh6BJyooJXCM8wdfM7wfMjkBJNLge1CKPUIRA==",
      "license": "MIT",
      "dependencies": {
        "motion-utils": "^12.39.0"
      }
    },
    "node_modules/motion-utils": {
      "version": "12.39.0",
      "resolved": "https://registry.npmjs.org/motion-utils/-/motion-utils-12.39.0.tgz",
      "integrity": "sha512-8nadJAJjTtqRkmRF36FoJTrywK9nnFmnPwnSMyxaOCU7GDjN9RTMJIxx9De8ErM+vpPhMccr/6fo5WciyQLnMQ==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.16",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.16.tgz",
      "integrity": "sha512-bzlKTyNJ7+LdGIIwy8ijFpIqEQIvafahV7eYykJ8Cvh42EdJeODoJ6gUJXpQJvej1BddH8OqTXZNE/KfbWAu8Q==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/next": {
      "version": "16.2.10",
      "resolved": "https://registry.npmjs.org/next/-/next-16.2.10.tgz",
      "integrity": "sha512-2som5AVXb3kE6Yjine3/mNbBayYF58eguBWIVVUdr1y/L426xyVEgYxgBG+1QC34P2x5E+tcDup6XkuOAX3dCA==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.2.10",
        "@swc/helpers": "0.5.15",
        "baseline-browser-mapping": "^2.9.19",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.2.10",
        "@next/swc-darwin-x64": "16.2.10",
        "@next/swc-linux-arm64-gnu": "16.2.10",
        "@next/swc-linux-arm64-musl": "16.2.10",
        "@next/swc-linux-x64-gnu": "16.2.10",
        "@next/swc-linux-x64-musl": "16.2.10",
        "@next/swc-win32-arm64-msvc": "16.2.10",
        "@next/swc-win32-x64-msvc": "16.2.10",
        "sharp": "^0.34.5"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/postcss": {
      "version": "8.5.20",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.20.tgz",
      "integrity": "sha512-lW616l85ucIQL+FocMmL7pQFPqBmwejrCMg+iPxyImlrANNJG9NHq/RkyCZopDhd8C3LA03PHRJDjkbGu8vvug==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.16",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.7.tgz",
      "integrity": "sha512-HNe9WslTbXmFK8o8cmwgAeJFSBvt1bPdHCVKtaaV+WlAN36mpT4hcRpwbf3fY56ar2oIXzsBpOAiIRHAdY0OlQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.7.tgz",
      "integrity": "sha512-t0BRVXvbiE/o20Hfw669rLbMCDWtYZLvmJigy2f0MxsXF+71pxhR3xOkspmsO8h3ZlNzyibAmtCa3l4lYKk6gQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.7"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.82.0",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.82.0.tgz",
      "integrity": "sha512-Zw/uFZ2dO+02GHlBn7JFGn8kZJ7LdM33B/0BXOovzFay+CMhf94JMw5BVu+F1tVkUKjNvBuaE3fz5BJhga10Tg==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.5.tgz",
      "integrity": "sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.7.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      }
    },
    "node_modules/sonner": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/sonner/-/sonner-2.0.7.tgz",
      "integrity": "sha512-W6ZN4p58k8aDKA4XPcx2hpIQXBRAgyiWVkYhT7CvK6D3iAu7xjvVyhQHg2/iaKJZ1XVJ4r7XuwGL+WGEK37i9w==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^18.0.0 || ^19.0.0 || ^19.0.0-rc",
        "react-dom": "^18.0.0 || ^19.0.0 || ^19.0.0-rc"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/tailwind-merge": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-3.6.0.tgz",
      "integrity": "sha512-uxL7qAVQriqRQPAyK3pj66VqskWqoZ37PW94jwOTwNfq/z9oyu1V+eqrZqtR2+fCiXdYOZe/Modt8GtvqNzu+w==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

```

---

# package.json

**Location:** `package.json`

```json
{
  "name": "everafter-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@tanstack/react-query": "^5.101.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.42.2",
    "gsap": "^3.15.0",
    "lucide-react": "^1.24.0",
    "next": "16.2.10",
    "react": "19.2.7",
    "react-dom": "19.2.7",
    "react-hook-form": "^7.56.3",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.6.0",
    "zod": "3.25.76"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "tailwindcss": "^4",
    "typescript": "^5.9.3"
  }
}

```

---

# postcss.config.mjs

**Location:** `postcss.config.mjs`

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

---

# README.md

**Location:** `README.md`

```markdown
# EverAfter AI — Frontend

A calm, private space for preserving and continuing meaningful memories.
Built with Next.js 16 (App Router), React 19, TanStack Query, and Tailwind v4,
wired end‑to‑end to the EverAfter AI FastAPI backend described in
`openapi.json`.

This is a full rebuild of the original scaffold: every screen is wired to a
real API call (no mock data, no client-only stubs), and the UI follows the
"Quiet Blush" design system brief (warm rose/ivory palette, Fraunces + Inter
type, the "presence ring" motif, crisis-safe chat states).

## 1. Requirements

- Node.js 20+ (tested on Node 22)
- A running instance of the EverAfter AI backend (FastAPI) — the one whose
  OpenAPI schema this app was built against

## 2. Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1   # your backend's base URL
NEXT_PUBLIC_GOOGLE_CLIENT_ID=                            # optional, enables "Continue with Google"
```

If `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is left blank, the Google sign-in button
simply doesn't render — email/password auth works either way.

Run it:

```bash
npm run dev       # http://localhost:3000
npm run build && npm run start   # production build
```

## 3. What's wired up

Every screen calls the real backend — nothing here is mocked:

- **Auth** — register → OTP email verification (with resend + cooldown) →
  login (email/password or Google One Tap) → silent refresh-on-401 → logout.
  Access token lives in `sessionStorage`; the refresh token is the backend's
  own httpOnly cookie (the browser handles it automatically via
  `credentials: "include"`).
- **Memory People (companions)** — list, create (4-step wizard), read,
  update (edit sheet), delete.
- **Memory Vault** — list/filter by type, multipart upload (one or many
  files at once), delete, and a "set as profile photo" action that PATCHes
  `profile_picture` to a previously uploaded photo's path.
- **Chat** — history, send, clear. Assistant replies flagged
  `is_safety_response` render as a distinct, calm crisis-support card instead
  of a normal bubble; resources returned by the live `chat` response render
  as tappable `tel:`/link rows.

See `src/lib/api.ts` for the full client and `src/lib/types.ts` for types
mirroring the OpenAPI schema — keep both in sync if the backend contract
changes.

## 4. Notes & assumptions worth knowing about

- **Memory Vault filters** (`All / Photos / Voice / Videos / Letters`) send
  `?file_type=photo|voice|video|letter` to `GET /memory-people/{id}/files`.
  The OpenAPI spec doesn't enumerate the exact values the backend assigns to
  `file_type`, so these are a best guess at the obvious convention. If your
  backend uses different strings, update `FILTERS` in
  `src/components/vault/memory-vault-sheet.tsx` — "All" always works
  regardless.
- **Profile photos** aren't a separate upload endpoint in the API — a
  companion's `profile_picture` is just a string path. So the flow is:
  upload a photo to the Memory Vault, then hit the star icon on it to PATCH
  it onto the companion. You can also just paste an image URL directly in
  the edit form.
- **Fonts** are loaded via `<link>` tags in `src/app/layout.tsx` (Fraunces +
  Inter from Google Fonts) rather than `next/font/google`, so the build
  never needs network access to fonts.gstatic.com — useful in sandboxed CI.
  There's a full system-font fallback stack either way.
- **Sidebar rows** intentionally don't show a "last message" preview — the
  API has no lightweight endpoint for that, and this app avoids fabricating
  data. Add one (e.g. a `last_message` field on `GET /memory-people`) if you
  want that.
- A small, always-visible "AI companion" badge plus a quiet disclosure line
  ("not a replacement for … or professional support") appear on every chat —
  this is deliberate, matches the brief's safety section, and shouldn't be
  removed.

## 5. Project structure

```
src/
  app/                     routes (App Router)
    (app)/                 authenticated shell — companions, profile
    login/ register/ verify-email/   public auth pages
  components/
    ui/                    design-system primitives (Button, Field, Sheet…)
    auth/ marketing/       auth-card, Google button, landing page
    layout/                Sidebar + responsive two-pane AppShell
    wizard/                4-step companion creation form (+ schema)
    companions/            edit-profile sheet
    chat/                  header, bubbles, message list, composer
    vault/                 Memory Vault sheet
  hooks/                   TanStack Query hooks per resource
  lib/                     api.ts (client), types.ts, utils.ts
  providers/               QueryProvider, AuthProvider
```

## 6. Design system

All tokens live in `src/app/globals.css` under `@theme inline` (Tailwind v4):
`blush`, `surface`, `sunken`, `primary`, `primary-hover`, `accent`, `ink`,
`ink-muted`, `line`, `success`, `danger`, `crisis`, `crisis-ink` — use them as
regular Tailwind utilities, e.g. `bg-primary`, `text-ink-muted`,
`border-line`. The one recurring signature motif — the breathing
"presence ring" around a memory person's avatar — is the `.presence-ring`
class in the same file; it respects `prefers-reduced-motion` automatically,
as does the typing indicator and loading ripple.

```

---

# src\app\(app)\companions\[id]\page.tsx

**Location:** `src\app\(app)\companions\[id]\page.tsx`

```tsx
"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessageList } from "@/components/chat/chat-message-list";
import { ChatComposer } from "@/components/chat/chat-composer";
import { EditCompanionSheet } from "@/components/companions/edit-companion-sheet";
import { MemoryVaultSheet } from "@/components/vault/memory-vault-sheet";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { LoadingRipple } from "@/components/ui/loading";
import { EmptyState } from "@/components/ui/empty-state";
import { toast } from "@/components/ui/toaster";
import { useCompanion } from "@/hooks/use-companions";
import { useChatHistory, useClearChat, useSendChatMessage } from "@/hooks/use-chat";
import type { RetrievedSource } from "@/lib/types";

export default function CompanionChatPage() {
  const params = useParams<{ id: string }>();
  const companionId = Number(params.id);

  const { data: companion, isLoading: isCompanionLoading } = useCompanion(companionId);
  const { data: history, isLoading: isHistoryLoading } = useChatHistory(companionId);
  const sendMessage = useSendChatMessage(companionId);
  const clearChatMutation = useClearChat(companionId);

  const [editOpen, setEditOpen] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);
  const [clearOpen, setClearOpen] = useState(false);
  const [resourcesByMessageId, setResourcesByMessageId] = useState<Record<number, string[]>>({});
  const [sourcesByMessageId, setSourcesByMessageId] = useState<Record<number, RetrievedSource[]>>(
    {},
  );

  const messages = useMemo(() => history?.messages ?? [], [history]);

  async function handleSend(message: string) {
    try {
      const reply = await sendMessage.mutateAsync(message);
      if (reply.is_crisis_response && reply.resources) {
        setResourcesByMessageId((prev) => ({
          ...prev,
          [reply.assistant_message.id]: reply.resources as string[],
        }));
      }
      if (reply.sources_used?.length) {
        setSourcesByMessageId((prev) => ({
          ...prev,
          [reply.assistant_message.id]: reply.sources_used,
        }));
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Message couldn't be sent.");
    }
  }

  async function handleClearChat() {
    try {
      await clearChatMutation.mutateAsync();
      toast.success("Conversation cleared.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to clear this conversation.");
    } finally {
      setClearOpen(false);
    }
  }

  if (isCompanionLoading) return <LoadingRipple fullScreen={false} />;

  if (!companion) {
    return (
      <EmptyState
        title="Companion not found"
        description="This memory companion may have been removed."
      />
    );
  }

  return (
    <div className="flex h-full flex-col">
      <ChatHeader
        companion={companion}
        onEdit={() => setEditOpen(true)}
        onOpenVault={() => setVaultOpen(true)}
        onClearChat={() => setClearOpen(true)}
      />

      <p className="border-b border-line bg-blush/60 px-5 py-2 text-center text-xs italic text-ink-muted">
        EverAfter is an AI companion — not a replacement for {companion.full_name} or for
        professional support.
      </p>

      {isHistoryLoading ? (
        <LoadingRipple fullScreen={false} />
      ) : messages.length === 0 ? (
        <EmptyState
          title={`Say hello to ${companion.nickname || companion.full_name}`}
          description="Start the conversation below whenever you're ready."
        />
      ) : (
        <ChatMessageList
          companionId={companion.id}
          messages={messages}
          resourcesByMessageId={resourcesByMessageId}
          sourcesByMessageId={sourcesByMessageId}
          isSending={sendMessage.isPending}
        />
      )}

      <ChatComposer
        onSend={handleSend}
        onOpenVault={() => setVaultOpen(true)}
        disabled={sendMessage.isPending}
      />

      <EditCompanionSheet
        companion={companion}
        open={editOpen}
        onClose={() => setEditOpen(false)}
      />

      <MemoryVaultSheet
        companionId={companion.id}
        open={vaultOpen}
        onClose={() => setVaultOpen(false)}
      />

      <ConfirmDialog
        open={clearOpen}
        title="Clear this conversation?"
        description="All messages with this companion will be permanently deleted."
        confirmLabel="Clear"
        danger
        isLoading={clearChatMutation.isPending}
        onConfirm={handleClearChat}
        onCancel={() => setClearOpen(false)}
      />
    </div>
  );
}

```

---

# src\app\(app)\companions\layout.tsx

**Location:** `src\app\(app)\companions\layout.tsx`

```tsx
import { AppShell } from "@/components/layout/app-shell";

export default function CompanionsLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}

```

---

# src\app\(app)\companions\new\page.tsx

**Location:** `src\app\(app)\companions\new\page.tsx`

```tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CreateCompanionWizard } from "@/components/wizard/create-companion-wizard";

export default function NewCompanionPage() {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="flex items-center gap-3 border-b border-line bg-surface px-6 py-4 lg:hidden">
        <Link
          href="/companions"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:bg-sunken"
        >
          <ArrowLeft size={18} />
        </Link>
        <span className="font-medium text-ink">New companion</span>
      </div>

      <div className="flex-1 px-4 py-8 sm:px-8">
        <CreateCompanionWizard />
      </div>
    </div>
  );
}

```

---

# src\app\(app)\companions\page.tsx

**Location:** `src\app\(app)\companions\page.tsx`

```tsx
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";

export default function CompanionsIndexPage() {
  return (
    <EmptyState
      icon={<MessageCircle size={32} />}
      title="EverAfter"
      description="Select a memory companion from the list, or create a new one to start preserving what matters."
      action={
        <Link href="/companions/new">
          <Button>Create a memory companion</Button>
        </Link>
      }
    />
  );
}

```

---

# src\app\(app)\layout.tsx

**Location:** `src\app\(app)\layout.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { LoadingRipple } from "@/components/ui/loading";
import { useAuth } from "@/providers/auth-provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return <LoadingRipple />;
  }

  return <>{children}</>;
}

```

---

# src\app\(app)\profile\page.tsx

**Location:** `src\app\(app)\profile\page.tsx`

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";

import { PresenceAvatar } from "@/components/ui/presence-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/auth-provider";

export default function ProfilePage() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  if (!user) return null;

  async function handleSignOut() {
    await signOut();
    router.replace("/login");
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-10">
      <div className="mb-10 flex items-center gap-3">
        <Link
          href="/companions"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:bg-sunken"
        >
          <ArrowLeft size={18} />
        </Link>
        <h1 className="font-serif text-2xl font-medium text-ink">Your profile</h1>
      </div>

      <div className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-6">
        <PresenceAvatar name={user.full_name} src={user.profile_picture} size="lg" ring={false} />
        <div>
          <h2 className="font-serif text-xl font-medium text-ink">{user.full_name}</h2>
          <p className="text-sm text-ink-muted">{user.email}</p>
          <div className="mt-2 flex gap-2">
            <Badge tone={user.is_verified ? "success" : "muted"}>
              {user.is_verified ? "Verified" : "Unverified"}
            </Badge>
            <Badge tone="muted" className="capitalize">
              {user.provider}
            </Badge>
          </div>
        </div>
      </div>

      <dl className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface">
        <div className="flex items-center justify-between p-5">
          <dt className="text-sm text-ink-muted">Account status</dt>
          <dd className="text-sm font-medium text-ink">
            {user.is_active ? "Active" : "Disabled"}
          </dd>
        </div>
        <div className="flex items-center justify-between p-5">
          <dt className="text-sm text-ink-muted">Member since</dt>
          <dd className="text-sm font-medium text-ink">
            {new Date(user.created_at).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </dd>
        </div>
      </dl>

      <Button variant="outlineDanger" className="mt-8" onClick={handleSignOut}>
        <LogOut size={16} />
        Sign out
      </Button>
    </main>
  );
}

```

---

# src\app\globals.css

**Location:** `src\app\globals.css`

```css
@import "tailwindcss";

/* ==========================================================================
   EverAfter AI — "Quiet Blush" design tokens
   A calm, private space for grief. Warm, tactile, unhurried. No blue/green,
   no literal candle/flame iconography, one light theme only.
   ========================================================================== */

@theme inline {
  /* -- Color -------------------------------------------------------------- */
  --color-blush: #fbf6f4; /* app background */
  --color-surface: #ffffff; /* cards, sheets, modals */
  --color-sunken: #f3e9e6; /* inputs, incoming bubbles */
  --color-primary: #c98a93; /* dusty rose */
  --color-primary-hover: #b87680;
  --color-accent: #e3b7a0; /* warm secondary accent */
  --color-ink: #2b2325; /* primary text */
  --color-ink-muted: #8a7570; /* secondary text */
  --color-line: #eadfdb; /* hairline borders */
  --color-success: #b8925b; /* muted gold, never green */
  --color-danger: #b0525a; /* muted brick, never red-red */
  --color-crisis: #f6e9dc; /* crisis banner background */
  --color-crisis-ink: #7a4b3a; /* crisis banner text */

  /* -- Type ----------------------------------------------------------------
     Fraunces (display serif) + Inter (humanist sans) are loaded via <link>
     tags in the root layout so no network access is required at build time.
     Sensible system fallbacks keep the same warm character if the webfont
     hasn't loaded yet. */
  --font-serif: "Fraunces", ui-serif, Georgia, Cambria, "Times New Roman", serif;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;

  /* -- Radius --------------------------------------------------------------*/
  --radius-card: 16px;
  --radius-bubble: 20px;
  --radius-pill: 999px;

  /* -- Motion ---------------------------------------------------------------*/
  --ease-gentle: cubic-bezier(0.22, 1, 0.36, 1);
}

@theme {
  --font-amoresa: var(--font-amoresa);
  --font-codec: var(--font-codec-pro);
}

:root {
  color-scheme: light;
}

* {
  border-color: var(--color-line);
}

html,
body {
  height: 100%;
}

body {
  background: var(--color-blush);
  color: var(--color-ink);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: color-mix(in srgb, var(--color-primary) 30%, transparent);
}

/* Visible keyboard focus ring on every interactive element */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Thin, warm scrollbars */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-accent) transparent;
}

*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-thumb {
  background-color: color-mix(in srgb, var(--color-ink-muted) 35%, transparent);
  border-radius: 999px;
}

/* -- Presence ring --------------------------------------------------------
   The one recurring signature motif: a thin breathing ring around a memory
   person's avatar. Nowhere else gets this treatment. */
.presence-ring {
  position: relative;
}

.presence-ring::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--color-primary) 45%, transparent);
  animation: presence-breathe 3s var(--ease-gentle) infinite;
}

@keyframes presence-breathe {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.06);
    opacity: 1;
  }
}

/* -- Typing indicator ------------------------------------------------------*/
@keyframes typing-dot {
  0%,
  60%,
  100% {
    opacity: 0.25;
    transform: translateY(0);
  }
  30% {
    opacity: 1;
    transform: translateY(-2px);
  }
}

.typing-dot {
  animation: typing-dot 1.2s var(--ease-gentle) infinite;
}

/* -- Loading ripple ---------------------------------------------------------*/
@keyframes ripple-out {
  0% {
    transform: scale(0.7);
    opacity: 0.55;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

.ripple-ring {
  animation: ripple-out 2.4s var(--ease-gentle) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .presence-ring::before,
  .typing-dot,
  .ripple-ring {
    animation: none !important;
  }
}

```

---

# src\app\layout.tsx

**Location:** `src\app\layout.tsx`

```tsx
import type { Metadata } from "next";

import "./globals.css";

import QueryProvider from "@/providers/query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import { amoresa, codecPro } from "@/fonts/fonts";
export const metadata: Metadata = {
  title: "EverAfter AI",
  description:
    "A private, quiet space to preserve and continue meaningful memories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${amoresa.variable} ${codecPro.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="h-full bg-blush text-ink">
        <QueryProvider>
          <AuthProvider>
            {children}</AuthProvider>
        </QueryProvider>

        <Toaster />
      </body>
    </html>
  );
}
```

---

# src\app\login\page.tsx

**Location:** `src\app\login\page.tsx`

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";

import { AuthCard } from "@/components/auth/auth-card";
import { GoogleSignInButton } from "@/components/auth/google-button";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/field";
import { toast } from "@/components/ui/toaster";
import { useAuth } from "@/providers/auth-provider";
import { login } from "@/lib/api";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) router.replace("/companions");
  }, [user, router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      const user = await login(values.email, values.password);
      setUser(user);
      router.replace("/companions");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to sign in.");
    }
  }

  return (
    <AuthCard eyebrow="Welcome back" title="Sign in to EverAfter">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          autoFocus
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="relative">
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            error={errors.password?.message}
            {...register("password")}
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-[38px] text-ink-muted transition-colors hover:text-ink"
          >
            {showPassword ? (
              <EyeOff size={18} strokeWidth={1.5} />
            ) : (
              <Eye size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-ink-muted transition-colors hover:text-primary"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full" isLoading={isSubmitting}>
          Sign in
        </Button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-xs uppercase tracking-wide text-ink-muted">or</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <GoogleSignInButton mode="login" />

        <p className="text-center text-sm text-ink-muted">
          New here?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
```

---

# src\app\page.tsx

**Location:** `src\app\page.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LoadingRipple } from "@/components/ui/loading";
import { MarketingHome } from "@/components/marketing/marketing-home";
import { SplitIntro } from "@/components/marketing/split-intro";
import { useAuth } from "@/providers/auth-provider";

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/companions");
    }
  }, [isLoading, user, router]);

  if (isLoading) return <LoadingRipple />;
  if (user) return <LoadingRipple />;

  return (
    <>
      <MarketingHome />
      {!introDone && <SplitIntro onComplete={() => setIntroDone(true)} />}
    </>
  );
}
```

---

# src\app\register\page.tsx

**Location:** `src\app\register\page.tsx`

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";

import { AuthCard } from "@/components/auth/auth-card";
import { GoogleSignInButton } from "@/components/auth/google-button";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/field";
import { toast } from "@/components/ui/toaster";
import { useAuth } from "@/providers/auth-provider";
import { register as registerAccount } from "@/lib/api";

const schema = z
  .object({
    first_name: z.string().trim().min(1, "First name is required").max(75),
    last_name: z.string().trim().min(1, "Last name is required").max(75),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(8, "At least 8 characters").max(72),
    confirm_password: z.string().min(8, "At least 8 characters").max(72),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

type FormValues = z.infer<typeof schema>;

/**
 * Lightweight, dependency-free password strength estimate. This is a UX
 * nudge, not a security control — real strength enforcement stays in the
 * zod schema and on the server.
 */
function estimateStrength(password: string): { score: 0 | 1 | 2 | 3 | 4; label: string } {
  if (!password) return { score: 0, label: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) score++;

  const labels = ["Too short", "Weak", "Fair", "Good", "Strong"];
  return { score: score as 0 | 1 | 2 | 3 | 4, label: labels[score] };
}

const STRENGTH_COLORS = ["bg-line", "bg-rose-400", "bg-amber-400", "bg-primary", "bg-emerald-500"];

export default function RegisterPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (user) router.replace("/companions");
  }, [user, router]);

  const {
    register: registerField,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const passwordValue = watch("password") ?? "";
  const strength = useMemo(() => estimateStrength(passwordValue), [passwordValue]);

  async function onSubmit(values: FormValues) {
    try {
      const result = await registerAccount(values);
      sessionStorage.setItem("everafter_verification_email", result.email);
      toast.success(result.message);
      router.replace("/verify-email");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to create your account.");
    }
  }

  return (
    <AuthCard eyebrow="A private place for memories" title="Create your account">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="First name"
            autoComplete="given-name"
            autoFocus
            error={errors.first_name?.message}
            {...registerField("first_name")}
          />
          <TextField
            label="Last name"
            autoComplete="family-name"
            error={errors.last_name?.message}
            {...registerField("last_name")}
          />
        </div>

        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          hint="Gmail, Outlook, Hotmail, Live, and Yahoo addresses are supported."
          error={errors.email?.message}
          {...registerField("email")}
        />

        <div>
          <div className="relative">
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              error={errors.password?.message}
              {...registerField("password")}
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-[38px] text-ink-muted transition-colors hover:text-ink"
            >
              {showPassword ? (
                <EyeOff size={18} strokeWidth={1.5} />
              ) : (
                <Eye size={18} strokeWidth={1.5} />
              )}
            </button>
          </div>

          {passwordValue && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex flex-1 gap-1">
                {[0, 1, 2, 3].map((segment) => (
                  <span
                    key={segment}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      segment < strength.score ? STRENGTH_COLORS[strength.score] : "bg-line"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-muted">{strength.label}</span>
            </div>
          )}
        </div>

        <div className="relative">
          <TextField
            label="Confirm password"
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            error={errors.confirm_password?.message}
            {...registerField("confirm_password")}
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowConfirm((current) => !current)}
            aria-label={showConfirm ? "Hide password" : "Show password"}
            className="absolute right-3 top-[38px] text-ink-muted transition-colors hover:text-ink"
          >
            {showConfirm ? (
              <EyeOff size={18} strokeWidth={1.5} />
            ) : (
              <Eye size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>

        <Button type="submit" className="w-full" isLoading={isSubmitting}>
          Create account
        </Button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-xs uppercase tracking-wide text-ink-muted">or</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <GoogleSignInButton mode="register" />

        <p className="text-center text-sm text-ink-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
```

---

# src\app\verify-email\page.tsx

**Location:** `src\app\verify-email\page.tsx`

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { AuthCard } from "@/components/auth/auth-card";
import { OtpInput, type OtpStatus } from "@/components/ui/otp-input";
import { TextField } from "@/components/ui/field";
import { toast } from "@/components/ui/toaster";
import { useAuth } from "@/providers/auth-provider";
import { resendVerification, verifyEmail } from "@/lib/api";

const RESEND_COOLDOWN_SECONDS = 30;
// How long the green "Verification complete" state stays on screen
// before handing off to the chat UI — long enough to actually register,
// short enough not to feel like a stall.
const SUCCESS_HANDOFF_MS = 900;
const ERROR_RESET_MS = 900;

export default function VerifyEmailPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState<OtpStatus>("idle");
  const [isResending, setIsResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("everafter_verification_email");
    if (stored) setEmail(stored);
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => setCooldown((current) => current - 1), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  // Fired by OtpInput automatically the instant all 6 digits are in —
  // there is no manual "Verify" button in this flow.
  const handleComplete = useCallback(
    async (code: string) => {
      if (!email) {
        toast.error("Enter your email address first.");
        return;
      }
      setStatus("verifying");
      try {
        const user = await verifyEmail(email, code);
        setStatus("success");
        window.setTimeout(() => {
          setUser(user);
          router.replace("/companions");
        }, SUCCESS_HANDOFF_MS);
      } catch (error) {
        setStatus("error");
        toast.error(error instanceof Error ? error.message : "Unable to verify the code.");
        window.setTimeout(() => {
          setOtp("");
          setStatus("idle");
        }, ERROR_RESET_MS);
      }
    },
    [email, router, setUser],
  );

  async function resend() {
    if (!email) {
      toast.error("Enter your email address first.");
      return;
    }
    setIsResending(true);
    try {
      const result = await resendVerification(email);
      toast.success(result.message);
      setCooldown(RESEND_COOLDOWN_SECONDS);
      setOtp("");
      setStatus("idle");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to resend the code.");
    } finally {
      setIsResending(false);
    }
  }

  const locked = status === "verifying" || status === "success";

  return (
    <AuthCard eyebrow="One last step" title="Verify your email">
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-ink-muted">
          Enter the six-digit code we sent to your email address. It verifies itself the moment
          the last digit lands.
        </p>

        <TextField
          label="Email"
          type="email"
          value={email}
          disabled={locked}
          onChange={(event) => setEmail(event.target.value)}
        />

        <div className="space-y-1.5">
          <span className="text-sm font-medium text-ink">Verification code</span>
          <OtpInput
            value={otp}
            onChange={(next) => {
              setOtp(next);
              if (status === "error") setStatus("idle");
            }}
            onComplete={handleComplete}
            status={status}
          />
        </div>

        <button
          type="button"
          onClick={resend}
          disabled={isResending || cooldown > 0 || locked}
          className="w-full text-center text-sm text-ink-muted underline underline-offset-2 transition-opacity disabled:opacity-50"
        >
          {cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}
        </button>

        <p className="text-center text-sm text-ink-muted">
          <Link href="/login" className="font-medium text-primary hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
```

---

# src\components\auth\auth-card.tsx

**Location:** `src\components\auth\auth-card.tsx`

```tsx
import Link from "next/link";
import { ReactNode } from "react";

import { Wordmark } from "@/components/marketing/wordmark";


export function AuthCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-blush px-6 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-accent/25 to-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-primary/20 to-accent/10 blur-3xl"
      />

      <div className="auth-card-rise relative w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex justify-center" aria-label="EverAfter home">
            <Wordmark className="text-4xl text-primary" />
          </Link>
          <p className="mt-5 text-sm text-ink-muted">{eyebrow}</p>
          <h1 className="mt-1 font-serif text-3xl font-medium text-ink">{title}</h1>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-8 shadow-[0_8px_24px_rgba(43,35,37,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(43,35,37,0.09)]">
          {children}
        </div>
      </div>

      <style jsx global>{`
        @keyframes auth-card-rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .auth-card-rise {
          animation: auth-card-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .auth-card-rise {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
```

---

# src\components\auth\google-button.tsx

**Location:** `src\components\auth\google-button.tsx`

```tsx
"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { googleLogin } from "@/lib/api";
import { toast } from "@/components/ui/toaster";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          renderButton: (
            element: HTMLElement,
            options: {
              type?: "standard" | "icon";
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              text?: "signin_with" | "signup_with" | "continue_with" | "signin";
              shape?: "rectangular" | "pill" | "circle" | "square";
              width?: number;
            },
          ) => void;
        };
      };
    };
  }
}

export function GoogleSignInButton({ mode = "login" }: { mode?: "login" | "register" }) {
  const router = useRouter();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!isReady || !clientId || !window.google || !buttonRef.current) return;

    buttonRef.current.innerHTML = "";

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async (response) => {
        try {
          await googleLogin(response.credential);
          router.replace("/companions");
        } catch (error) {
          toast.error(
            error instanceof Error ? error.message : "Unable to continue with Google.",
          );
        }
      },
    });

    window.google.accounts.id.renderButton(buttonRef.current, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: mode === "register" ? "signup_with" : "signin_with",
      shape: "pill",
      width: 360,
    });
  }, [clientId, isReady, mode, router]);

  if (!clientId) return null;

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => setIsReady(true)}
      />
      <div ref={buttonRef} className="flex justify-center" />
    </>
  );
}

```

---

# src\components\chat\chat-bubbles.tsx

**Location:** `src\components\chat\chat-bubbles.tsx`

```tsx
import {
  FileText,
  HeartHandshake,
  Image as ImageIcon,
  MessageCircle,
  Mic,
  PhoneCall,
  Video,
} from "lucide-react";

import { cn, formatFullDateTime } from "@/lib/utils";
import type { ChatMessage, RetrievedSource } from "@/lib/types";
import { VoicePlayButton } from "@/components/chat/voice-play-button";

function AiMonogram() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary font-serif text-xs font-medium text-white">
      EA
    </div>
  );
}

export function UserBubble({ message }: { message: ChatMessage }) {
  return (
    <div className="flex justify-end">
      <div
        title={formatFullDateTime(message.created_at)}
        className="max-w-[78%] rounded-[20px] rounded-tr-md bg-primary/12 px-4 py-2.5 text-[15px] leading-relaxed text-ink"
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

function sourceIcon(sourceType: string) {
  const type = sourceType.toLowerCase();
  if (type.includes("photo") || type.includes("image")) return ImageIcon;
  if (type.includes("voice") || type.includes("audio")) return Mic;
  if (type.includes("video")) return Video;
  if (type.includes("chat")) return MessageCircle;
  return FileText;
}

function SourceChips({ sources }: { sources?: RetrievedSource[] }) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="ml-[42px] mt-1.5 flex flex-wrap gap-1.5">
      {sources.map((source, index) => {
        const Icon = sourceIcon(source.source_type);
        return (
          <span
            key={index}
            title={source.snippet}
            className="inline-flex max-w-[220px] items-center gap-1.5 truncate rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] text-ink-muted"
          >
            <Icon size={11} className="shrink-0" />
            <span className="truncate">{source.source_label ?? source.source_type}</span>
          </span>
        );
      })}
    </div>
  );
}

export function AssistantBubble({
  companionId,
  message,
  sources,
}: {
  companionId: number;
  message: ChatMessage;
  sources?: RetrievedSource[];
}) {
  return (
    <div>
      <div className="flex items-end gap-2.5">
        <AiMonogram />
        <div
          title={formatFullDateTime(message.created_at)}
          className="max-w-[78%] rounded-[20px] rounded-bl-md bg-sunken px-4 py-2.5 text-[15px] leading-relaxed text-ink"
        >
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
        <VoicePlayButton companionId={companionId} messageId={message.id} />
      </div>
      <SourceChips sources={sources} />
    </div>
  );
}

const PHONE_PATTERN = /^\+?[\d\s().-]{6,}$/;

function ResourceRow({ resource }: { resource: string }) {
  const isPhone = PHONE_PATTERN.test(resource.trim());
  const isUrl = /^https?:\/\//i.test(resource.trim());

  const content = (
    <span className="flex items-center gap-2.5 rounded-xl bg-surface/70 px-3.5 py-2.5 text-sm text-crisis-ink transition-colors hover:bg-surface">
      <PhoneCall size={15} className="shrink-0" />
      <span>{resource}</span>
    </span>
  );

  if (isPhone) {
    return (
      <a href={`tel:${resource.replace(/[^\d+]/g, "")}`} className="block">
        {content}
      </a>
    );
  }
  if (isUrl) {
    return (
      <a href={resource} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

export function CrisisCard({
  message,
  resources,
}: {
  message: ChatMessage;
  resources: string[] | null;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <AiMonogram />
      <div className="w-full max-w-[86%] rounded-2xl bg-crisis p-5">
        <div className="flex items-center gap-2 text-crisis-ink">
          <HeartHandshake size={18} />
          <h3 className="font-serif text-base font-medium">
            You matter, and support is here
          </h3>
        </div>
        <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-crisis-ink">
          {message.content}
        </p>
        {resources && resources.length > 0 && (
          <div className="mt-4 space-y-2">
            {resources.map((resource, index) => (
              <ResourceRow key={index} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function DependencyNote({ children }: { children: string }) {
  return (
    <p className={cn("ml-[42px] max-w-[78%] text-xs italic leading-relaxed text-ink-muted")}>
      {children}
    </p>
  );
}

```

---

# src\components\chat\chat-composer.tsx

**Location:** `src\components\chat\chat-composer.tsx`

```tsx
"use client";

import { FormEvent, useState } from "react";
import { Paperclip, SendHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

export function ChatComposer({
  onSend,
  onOpenVault,
  disabled,
}: {
  onSend: (message: string) => void;
  onOpenVault: () => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 border-t border-line bg-surface px-5 py-4"
    >
      <button
        type="button"
        onClick={onOpenVault}
        title="Memory Vault"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:bg-sunken"
      >
        <Paperclip size={18} />
      </button>

      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask about a memory…"
        disabled={disabled}
        className="h-11 flex-1 rounded-full border border-line bg-sunken/60 px-5 text-[15px] text-ink placeholder:text-ink-muted focus:border-primary focus:bg-surface focus:outline-none disabled:opacity-60"
      />

      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover disabled:opacity-40",
        )}
      >
        <SendHorizontal size={18} />
      </button>
    </form>
  );
}

```

---

# src\components\chat\chat-header.tsx

**Location:** `src\components\chat\chat-header.tsx`

```tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Archive, MoreVertical, Pencil, Trash2 } from "lucide-react";

import { PresenceAvatar } from "@/components/ui/presence-avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownItem, DropdownMenu } from "@/components/ui/dropdown";
import { resolveFileUrl } from "@/lib/api";
import type { MemoryPerson } from "@/lib/types";

export function ChatHeader({
  companion,
  onEdit,
  onOpenVault,
  onClearChat,
}: {
  companion: MemoryPerson;
  onEdit: () => void;
  onOpenVault: () => void;
  onClearChat: () => void;
}) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-line bg-surface px-5 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <Link
          href="/companions"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted hover:bg-sunken lg:hidden"
        >
          <ArrowLeft size={18} />
        </Link>

        <PresenceAvatar
          name={companion.full_name}
          src={resolveFileUrl(companion.profile_picture)}
          size="sm"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate font-serif text-lg font-medium text-ink">
              {companion.nickname || companion.full_name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-muted">{companion.relationship}</span>
            <Badge tone="muted" className="text-[10px]">
              AI companion
            </Badge>
          </div>
        </div>
      </div>

      <DropdownMenu
        trigger={
          <span className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-sunken">
            <MoreVertical size={18} />
          </span>
        }
      >
        <DropdownItem icon={<Pencil size={16} />} onClick={onEdit}>
          Edit profile
        </DropdownItem>
        <DropdownItem icon={<Archive size={16} />} onClick={onOpenVault}>
          Memory Vault
        </DropdownItem>
        <DropdownItem danger icon={<Trash2 size={16} />} onClick={onClearChat}>
          Clear conversation
        </DropdownItem>
      </DropdownMenu>
    </header>
  );
}

```

---

# src\components\chat\chat-message-list.tsx

**Location:** `src\components\chat\chat-message-list.tsx`

```tsx
"use client";

import { useEffect, useRef } from "react";

import { AssistantBubble, CrisisCard, UserBubble } from "@/components/chat/chat-bubbles";
import { TypingIndicator } from "@/components/ui/loading";
import type { ChatMessage, RetrievedSource } from "@/lib/types";

export function ChatMessageList({
  companionId,
  messages,
  resourcesByMessageId,
  sourcesByMessageId,
  isSending,
}: {
  companionId: number;
  messages: ChatMessage[];
  resourcesByMessageId: Record<number, string[]>;
  sourcesByMessageId: Record<number, RetrievedSource[]>;
  isSending: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, isSending]);

  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
      {messages.map((message) => {
        if (message.role === "user") {
          return <UserBubble key={message.id} message={message} />;
        }

        if (message.is_safety_response) {
          return (
            <CrisisCard
              key={message.id}
              message={message}
              resources={resourcesByMessageId[message.id] ?? null}
            />
          );
        }

        return (
          <AssistantBubble
            key={message.id}
            companionId={companionId}
            message={message}
            sources={sourcesByMessageId[message.id]}
          />
        );
      })}

      {isSending && (
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-xs font-medium text-white">
            EA
          </div>
          <div className="rounded-[20px] rounded-bl-md bg-sunken px-4 py-3">
            <TypingIndicator />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}

```

---

# src\components\chat\voice-play-button.tsx

**Location:** `src\components\chat\voice-play-button.tsx`

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Play, Square } from "lucide-react";

import { toast } from "@/components/ui/toaster";
import {
  fetchMessageVoiceAudio,
  generateMessageVoice,
  getMessageVoice,
  isVoiceFailed,
  isVoiceTerminal,
} from "@/lib/api";
import { cn } from "@/lib/utils";

type PlayerStatus = "idle" | "generating" | "playing" | "error";

const POLL_INTERVAL_MS = 1500;
const MAX_POLLS = 40; // ~1 minute ceiling

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function VoicePlayButton({
  companionId,
  messageId,
}: {
  companionId: number;
  messageId: number;
}) {
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  function playFromUrl(url: string) {
    const audio = new Audio(url);
    audio.onended = () => setStatus("idle");
    audio.onerror = () => setStatus("error");
    audioRef.current = audio;
    audio.play();
    setStatus("playing");
  }

  async function handleClick() {
    if (status === "playing") {
      audioRef.current?.pause();
      setStatus("idle");
      return;
    }

    if (objectUrlRef.current) {
      playFromUrl(objectUrlRef.current);
      return;
    }

    setStatus("generating");
    try {
      let voice = await generateMessageVoice(companionId, messageId);

      let attempts = 0;
      while (!isVoiceTerminal(voice.status) && attempts < MAX_POLLS) {
        await sleep(POLL_INTERVAL_MS);
        voice = await getMessageVoice(companionId, messageId);
        attempts += 1;
      }

      if (isVoiceFailed(voice.status)) {
        setStatus("error");
        toast.error(voice.error ?? "Couldn't generate voice for this message.");
        return;
      }
      if (!isVoiceTerminal(voice.status)) {
        setStatus("error");
        toast.error("Voice generation is taking longer than expected.");
        return;
      }

      const blob = await fetchMessageVoiceAudio(companionId, messageId);
      const url = URL.createObjectURL(blob);
      objectUrlRef.current = url;
      playFromUrl(url);
    } catch (error) {
      setStatus("error");
      toast.error(error instanceof Error ? error.message : "Couldn't play this message.");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      title={status === "playing" ? "Stop" : "Play in their voice"}
      className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors",
        status === "error"
          ? "text-danger hover:bg-danger/10"
          : "text-ink-muted hover:bg-sunken hover:text-primary",
      )}
    >
      {status === "generating" ? (
        <Loader2 size={13} className="animate-spin" />
      ) : status === "playing" ? (
        <Square size={11} fill="currentColor" />
      ) : (
        <Play size={13} fill="currentColor" />
      )}
    </button>
  );
}

```

---

# src\components\companions\edit-companion-sheet.tsx

**Location:** `src\components\companions\edit-companion-sheet.tsx`

```tsx
"use client";

import { useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Trash2 } from "lucide-react";

import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PresenceAvatar } from "@/components/ui/presence-avatar";
import { VoiceReferenceCard } from "@/components/companions/voice-reference-card";
import {
  CompanionFormValues,
  companionFormSchema,
  traitsToArray,
  traitsToString,
} from "@/components/wizard/schema";
import { BasicInfoStep } from "@/components/wizard/steps/basic-info";
import { AboutStep } from "@/components/wizard/steps/about";
import { RelationshipStep } from "@/components/wizard/steps/relationship-step";
import {
  useDeleteCompanionPhoto,
  useUpdateCompanion,
  useUploadCompanionPhoto,
} from "@/hooks/use-companions";
import { toast } from "@/components/ui/toaster";
import { resolveFileUrl } from "@/lib/api";
import type { MemoryPerson } from "@/lib/types";

function AvatarUploader({ companion }: { companion: MemoryPerson }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadPhoto = useUploadCompanionPhoto(companion.id);
  const deletePhoto = useDeleteCompanionPhoto(companion.id);

  async function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      await uploadPhoto.mutateAsync(file);
      toast.success("Photo updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to upload photo.");
    }
  }

  async function handleRemove() {
    try {
      await deletePhoto.mutateAsync();
      toast.success("Photo removed.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to remove photo.");
    }
  }

  const isBusy = uploadPhoto.isPending || deletePhoto.isPending;

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <PresenceAvatar
          name={companion.full_name}
          src={resolveFileUrl(companion.profile_picture)}
          size="lg"
          ring={false}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={isBusy}
          title="Change photo"
          className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow transition-colors hover:bg-primary-hover disabled:opacity-60"
        >
          <Camera size={14} />
        </button>
      </div>

      <div>
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleSelect} />
        <Button
          type="button"
          variant="secondary"
          size="sm"
          isLoading={uploadPhoto.isPending}
          onClick={() => inputRef.current?.click()}
        >
          <Camera size={14} />
          Change photo
        </Button>
        {companion.profile_picture && (
          <button
            type="button"
            onClick={handleRemove}
            disabled={isBusy}
            className="ml-3 inline-flex items-center gap-1 text-sm text-danger hover:underline disabled:opacity-60"
          >
            <Trash2 size={13} />
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export function EditCompanionSheet({
  companion,
  open,
  onClose,
}: {
  companion: MemoryPerson;
  open: boolean;
  onClose: () => void;
}) {
  const mutation = useUpdateCompanion(companion.id);

  const methods = useForm<CompanionFormValues>({
    resolver: zodResolver(companionFormSchema),
    defaultValues: toFormValues(companion),
  });

  useEffect(() => {
    if (open) methods.reset(toFormValues(companion));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, companion]);

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      await mutation.mutateAsync({
        ...values,
        personality_traits: traitsToArray(values.personality_traits),
      });
      toast.success("Profile updated.");
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to save changes.");
    }
  });

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title="Edit profile"
      description={`Update what EverAfter knows about ${companion.full_name}.`}
      footer={
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button isLoading={mutation.isPending} onClick={onSubmit}>
            Save changes
          </Button>
        </div>
      }
    >
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="space-y-10">
          <AvatarUploader companion={companion} />
          <VoiceReferenceCard companionId={companion.id} />
          <BasicInfoStep />
          <AboutStep />
          <RelationshipStep />
        </form>
      </FormProvider>
    </Sheet>
  );
}

function toFormValues(companion: MemoryPerson): CompanionFormValues {
  return {
    full_name: companion.full_name,
    nickname: companion.nickname ?? "",
    relationship: companion.relationship,
    gender: companion.gender ?? "",
    birth_date: companion.birth_date ?? "",
    passing_date: companion.passing_date ?? "",
    profile_picture: companion.profile_picture ?? "",
    occupation: companion.occupation ?? "",
    country: companion.country ?? "",
    city: companion.city ?? "",
    languages: companion.languages ?? "",
    biography: companion.biography ?? "",
    favorite_quote: companion.favorite_quote ?? "",
    favorite_food: companion.favorite_food ?? "",
    favorite_song: companion.favorite_song ?? "",
    favorite_color: companion.favorite_color ?? "",
    hobbies: companion.hobbies ?? "",
    personality_traits: traitsToString(companion.personality_traits),
    bond_story: companion.bond_story ?? "",
    nickname_for_user: companion.nickname_for_user ?? "",
    special_memories: companion.special_memories ?? "",
    topics_to_avoid: companion.topics_to_avoid ?? "",
    communication_style: companion.communication_style ?? "",
    speaking_style: companion.speaking_style ?? "",
    humor_level: companion.humor_level ?? "",
    emotional_tone: companion.emotional_tone ?? "",
    is_public: companion.is_public,
  };
}

```

---

# src\components\companions\voice-reference-card.tsx

**Location:** `src\components\companions\voice-reference-card.tsx`

```tsx
"use client";

import { useRef } from "react";
import { Mic, Trash2, UploadCloud } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toaster";
import {
  useDeleteVoiceReference,
  useUploadVoiceReference,
  useVoiceReference,
} from "@/hooks/use-voice";
import { isNotFound } from "@/hooks/use-voice";

function statusTone(status: string): "success" | "muted" | "danger" {
  const s = status.toLowerCase();
  if (s.includes("fail") || s.includes("error")) return "danger";
  if (s.includes("ready") || s.includes("complet") || s.includes("done")) return "success";
  return "muted";
}

function formatDuration(seconds: number | null): string {
  if (!seconds && seconds !== 0) return "";
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

export function VoiceReferenceCard({ companionId }: { companionId: number }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: reference, isLoading, isError, error } = useVoiceReference(companionId);
  const upload = useUploadVoiceReference(companionId);
  const remove = useDeleteVoiceReference(companionId);

  const hasReference = Boolean(reference) && !(isError && isNotFound(error));

  async function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      await upload.mutateAsync(file);
      toast.success("Voice reference uploaded.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to upload voice sample.");
    }
  }

  async function handleRemove() {
    try {
      await remove.mutateAsync();
      toast.success("Voice reference removed.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to remove voice reference.");
    }
  }

  const isBusy = upload.isPending || remove.isPending;

  return (
    <div className="rounded-xl border border-line p-4">
      <div className="flex items-center gap-2">
        <Mic size={16} className="text-primary" />
        <h3 className="text-sm font-semibold text-ink">Voice reference</h3>
      </div>
      <p className="mt-1 text-xs text-ink-muted">
        A clear sample of their voice lets replies be spoken back in it.
      </p>

      <div className="mt-3">
        {isLoading ? (
          <div className="h-14 animate-pulse rounded-lg bg-sunken/70" />
        ) : hasReference && reference ? (
          <div className="flex items-center justify-between gap-3 rounded-lg bg-sunken/60 p-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{reference.original_name}</p>
              <div className="mt-1 flex items-center gap-2">
                <Badge tone={statusTone(reference.status)} className="capitalize">
                  {reference.status}
                </Badge>
                {reference.duration_seconds !== null && (
                  <span className="text-xs text-ink-muted">
                    {formatDuration(reference.duration_seconds)}
                  </span>
                )}
              </div>
              {reference.validation_note && (
                <p className="mt-1 text-xs text-ink-muted">{reference.validation_note}</p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                isLoading={upload.isPending}
                onClick={() => inputRef.current?.click()}
              >
                Replace
              </Button>
              <button
                type="button"
                onClick={handleRemove}
                disabled={isBusy}
                title="Remove"
                className="flex h-9 w-9 items-center justify-center rounded-full text-danger hover:bg-danger/10 disabled:opacity-50"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ) : (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            isLoading={upload.isPending}
            onClick={() => inputRef.current?.click()}
          >
            <UploadCloud size={14} />
            Upload voice sample
          </Button>
        )}
        <input ref={inputRef} type="file" accept="audio/*" hidden onChange={handleSelect} />
      </div>
    </div>
  );
}

```

---

# src\components\layout\app-shell.tsx

**Location:** `src\components\layout\app-shell.tsx`

```tsx
"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isIndex = pathname === "/companions";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-blush">
      <div className={cn("h-full lg:block", isIndex ? "block w-full lg:w-auto" : "hidden")}>
        <Sidebar />
      </div>
      <div
        className={cn(
          "flex h-full flex-1 flex-col overflow-hidden",
          isIndex ? "hidden lg:flex" : "flex",
        )}
      >
        {children}
      </div>
    </div>
  );
}

```

---

# src\components\layout\sidebar.tsx

**Location:** `src\components\layout\sidebar.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Plus, Search, User } from "lucide-react";

import { PresenceAvatar } from "@/components/ui/presence-avatar";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Wordmark } from "@/components/marketing/wordmark";
import { useCompanions } from "@/hooks/use-companions";
import { useAuth } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";
import { resolveFileUrl } from "@/lib/api";

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { data: companions, isLoading } = useCompanions();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!companions) return [];
    const q = query.trim().toLowerCase();
    if (!q) return companions;
    return companions.filter(
      (person) =>
        person.full_name.toLowerCase().includes(q) ||
        person.relationship.toLowerCase().includes(q) ||
        person.nickname?.toLowerCase().includes(q),
    );
  }, [companions, query]);

  return (
    <aside className="flex h-full w-full flex-col border-r border-line bg-surface lg:w-[380px]">
      <div className="flex items-center justify-between border-b border-line px-6 py-5">
        <Link href="/companions" aria-label="EverAfter home" className="min-w-0">
          {/* Real brand type (Amoresa "ever" fused to Codec Pro "after")
              instead of a generic h1 — same lockup used on the auth
              screens and the marketing navbar, so the wordmark reads
              identically everywhere in the product. */}
          <Wordmark className="text-lg text-ink" />
          <p className="mt-0.5 text-xs text-ink-muted">Memory Companions</p>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/profile"
            title={user?.full_name ?? "Profile"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-sunken hover:text-ink"
          >
            <User size={18} />
          </Link>
          <Link
            href="/companions/new"
            title="Add a memory"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover"
          >
            <Plus size={18} />
          </Link>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 rounded-xl bg-sunken px-4 py-2.5">
          <Search size={16} className="text-ink-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search companions"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-3">
        {isLoading && (
          <div className="space-y-2 px-2">
            {[0, 1, 2].map((key) => (
              <div key={key} className="h-16 animate-pulse rounded-xl bg-sunken/70" />
            ))}
          </div>
        )}

        {!isLoading && filtered.length === 0 && (
          <EmptyState
            title={companions?.length ? "No matches" : "No companions yet"}
            description={
              companions?.length
                ? "Try a different search."
                : "Create your first memory companion to begin."
            }
          />
        )}

        {filtered.map((person) => {
          const href = `/companions/${person.id}`;
          const active = pathname === href;

          return (
            <Link
              key={person.id}
              href={href}
              className={cn(
                "mb-1 flex items-center gap-3 rounded-xl p-3 transition-colors",
                active ? "bg-sunken" : "hover:bg-sunken/60",
              )}
            >
              <PresenceAvatar
                name={person.full_name}
                src={resolveFileUrl(person.profile_picture)}
                size="sm"
                ring={false}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-medium text-ink">{person.full_name}</p>
                </div>
                <Badge tone="muted" className="mt-1">
                  {person.relationship}
                </Badge>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
```

---

# src\components\marketing\feature-bond-section.tsx

**Location:** `src\components\marketing\feature-bond-section.tsx`

```tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Photo = {
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: number;
  width: string;
  speed: number;
  tapeRotate: number;
};

const PHOTOS: Photo[] = [
  {
    src: "/assets/family/photo-1.png",
    alt: "Family photo",
    top: "4%",
    left: "6%",
    rotate: -6,
    width: "w-44 md:w-52 lg:w-60",
    speed: -16,
    tapeRotate: -10,
  },
  {
    src: "/assets/family/photo-2.png",
    alt: "Family photo",
    top: "2%",
    left: "62%",
    rotate: 5,
    width: "w-40 md:w-48 lg:w-56",
    speed: 14,
    tapeRotate: 8,
  },
  {
    src: "/assets/family/photo-3.png",
    alt: "Family photo",
    top: "48%",
    left: "2%",
    rotate: 4,
    width: "w-44 md:w-52 lg:w-60",
    speed: -10,
    tapeRotate: -6,
  },
  {
    src: "/assets/family/photo-4.png",
    alt: "Family photo",
    top: "50%",
    left: "64%",
    rotate: -4,
    width: "w-40 md:w-48 lg:w-56",
    speed: 18,
    tapeRotate: 12,
  },
];

export function FeatureBondSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !boardRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          const photos =
            gsap.utils.toArray<HTMLElement>(".bond-photo");

          const companion =
            boardRef.current?.querySelector(".bond-companion");

          if (reduced) {
            gsap.set([...photos, companion], {
              opacity: 1,
              y: 0,
              scale: 1,
            });
            return;
          }

          gsap.set(photos, {
            opacity: 0,
            y: 30,
            scale: 0.94,
          });

          gsap.set(companion, {
            opacity: 0,
            y: 40,
            scale: 0.92,
          });

          const entrance = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none none",
            },
            defaults: {
              ease: "power3.out",
              duration: 0.8,
            },
          });

          entrance
            .to(photos, {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.12,
            })
            .to(
              companion,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "back.out(1.5)",
                duration: 0.9,
              },
              "-=0.3"
            );

          const parallax = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });

          photos.forEach((photo) => {
            parallax.to(
              photo,
              {
                yPercent: Number(photo.dataset.speed ?? 0),
                ease: "none",
              },
              0
            );
          });

          if (companion) {
            parallax.to(
              companion,
              {
                yPercent: 8,
                ease: "none",
              },
              0
            );
          }

          return () => {
            entrance.scrollTrigger?.kill();
            parallax.scrollTrigger?.kill();
          };
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium tracking-wide text-primary">
            The bond
          </p>

          <h2 className="mt-3 font-serif text-3xl md:text-5xl font-medium text-ink">
            Still part of the family.
          </h2>

          <p className="mt-4 text-lg text-ink-muted">
            EverAfter doesn't sit apart from your memories — it lives
            alongside them.
          </p>
        </div>

        <div
          ref={boardRef}
          className="relative mx-auto mt-20 h-[700px] w-full max-w-6xl"
        >
          {PHOTOS.map((photo, index) => (
            <div
              key={index}
              className={`bond-photo absolute ${photo.width}`}
              style={{
                top: photo.top,
                left: photo.left,
                rotate: `${photo.rotate}deg`,
              }}
              data-speed={photo.speed}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index < 2}
                  sizes="(max-width:768px) 180px, (max-width:1200px) 220px, 260px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          ))}

          <div className="bond-companion absolute bottom-0 left-1/2 w-56 -translate-x-1/2 md:w-72 lg:w-80">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/assets/companion/companion.png"
                alt="Companion"
                fill
                priority
                sizes="(max-width:768px) 224px, (max-width:1200px) 288px, 320px"
                className="object-contain drop-shadow-[0_22px_35px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

# src\components\marketing\hero-illustration.tsx

**Location:** `src\components\marketing\hero-illustration.tsx`

```tsx
"use client";

import { forwardRef } from "react";
import { AudioLines, Send } from "lucide-react";

/**
 * HeroIllustration
 * -----------------------------------------------------------------------
 * Purely presentational — a believable message thread, not an abstract
 * illustration, because the one thing worth showing in the hero is the
 * product's actual moment: continuing a conversation.
 *
 * Entrance animation still lives entirely in the parent page's GSAP hero
 * timeline, which targets this card via `ref` and its `.hero-message`
 * children directly — that contract is unchanged, so the card and every
 * message still mount at opacity: 0. The two additions below (the status
 * dot's pulse and the typing dots) are ambient loops, not entrances, so
 * they're plain CSS animations that only become visible once the parent
 * has faded the card in — they never fight the GSAP timeline for control.
 * -----------------------------------------------------------------------
 */

const MESSAGES = [
  { from: "her", text: "Tell me about your day, mija.", time: "2:14 PM" },
  {
    from: "me",
    text: "I got the job. I wish you were here to see it.",
    time: "2:15 PM",
  },
  {
    from: "her",
    text: "Oh, I am so proud of you. You worked so hard for this.",
    time: "2:15 PM",
  },
];

export const HeroIllustration = forwardRef<HTMLDivElement>(function HeroIllustration(
  _props,
  ref
) {
  return (
    <div className="relative w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl"
      />

      <div
        ref={ref}
        className="rounded-3xl border border-line bg-surface p-5 opacity-0 shadow-[0_24px_60px_rgba(43,35,37,0.14)] [transform:rotate(-2deg)]"
      >
        <div className="flex items-center gap-3 border-b border-line pb-4">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-serif text-lg text-primary"
            >
              R
            </div>
            {/* Ambient "always here" status — loops on its own, only
                visible once the card's own opacity has been raised by
                the parent timeline, so it never pre-empts the entrance. */}
            <span
              aria-hidden
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-primary"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
            </span>
          </div>
          <div>
            <p className="font-serif text-base font-medium text-ink">Nana Rosa</p>
            <p className="text-xs text-ink-muted">
              Built from 40 years of Sunday phone calls
            </p>
          </div>
          <span className="ml-auto text-[11px] text-ink-muted">Always here</span>
        </div>

        <div className="mt-4 flex flex-col gap-2.5">
          {MESSAGES.map((message) => (
            <div
              key={message.text}
              className={`hero-message flex max-w-[85%] flex-col gap-1 opacity-0 ${
                message.from === "her" ? "self-start items-start" : "self-end items-end"
              }`}
            >
              <div
                className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.from === "her"
                    ? "rounded-bl-sm bg-primary/10 text-ink"
                    : "rounded-br-sm bg-ink text-white"
                }`}
              >
                {message.text}
              </div>
              <span className="px-1 text-[10px] text-ink-muted">{message.time}</span>
            </div>
          ))}

          {/* Typing indicator — reads as "she's about to reply", which
              keeps the thread feeling alive rather than finished. */}
          <div className="hero-message flex items-center gap-1.5 self-start rounded-2xl rounded-bl-sm bg-primary/10 px-3.5 py-3 opacity-0">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full border border-line bg-blush/40 px-4 py-2.5 text-sm text-ink-muted">
          <span className="flex-1">Say something...</span>
          <AudioLines size={16} strokeWidth={1.5} aria-hidden />
          <Send size={16} strokeWidth={1.5} className="text-primary" aria-hidden />
        </div>
      </div>
    </div>
  );
});
```

---

# src\components\marketing\landing-page.tsx

**Location:** `src\components\marketing\landing-page.tsx`

```tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AudioLines,
  ChevronDown,
  FileText,
  Image as ImageIcon,
  MessageCircle,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/marketing/hero-illustration";
import { FeatureBondSection } from "@/components/marketing/feature-bond-section";
import { Navbar } from "@/components/marketing/navbar";
import { Wordmark } from "@/components/marketing/wordmark";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    icon: UploadCloud,
    number: "01",
    title: "Upload memories",
    description:
      "Photos, voice memos, letters, texts — the small things that sound like them.",
  },
  {
    icon: AudioLines,
    number: "02",
    title: "We learn their voice",
    description:
      "EverAfter listens for tone, turns of phrase, the jokes only they told.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Talk anytime",
    description:
      "At 2am, on their birthday, for as long as you need.",
  },
];

const VAULT_TABS = ["All", "Photos", "Voice", "Letters"];
const VAULT_ICONS = [
  ImageIcon,
  AudioLines,
  ImageIcon,
  FileText,
  ImageIcon,
  AudioLines,
  FileText,
  ImageIcon,
];

const TESTIMONIALS = [
  {
    quote:
      "I didn't expect to laugh. But her replies still sound like her — same dry humor, same way of changing the subject.",
    name: "Priya, using EverAfter for her grandmother",
  },
  {
    quote:
      "It's not him. It's not trying to be him. It's just somewhere to say the things I still want to say.",
    name: "Marcus, using EverAfter for his father",
  },
  {
    quote:
      "Setup took an evening of going through old voice notes. Worth every minute.",
    name: "Dana, using EverAfter for her wife",
  },
];

const FAQS = [
  {
    q: "Is this really them?",
    a: "No — and we're careful never to claim it is. EverAfter builds a companion from what you share: their voice, their stories, their turns of phrase. It's a way to keep talking, not a replacement for the person or for grief itself.",
  },
  {
    q: "What can I upload?",
    a: "Photos, voice memos, letters, texts, emails — anything that carries how they spoke or what they cared about. You choose exactly what goes in, and you can add more or remove things later.",
  },
  {
    q: "Who can see the memory space?",
    a: "Only the people you invite. Each memory space is private by default, encrypted at rest, and you can revoke access at any time.",
  },
  {
    q: "Is this a substitute for grief counseling?",
    a: "No. EverAfter was built alongside grief counselors as a companion between sessions, not instead of them. Crisis support resources are always available in the app.",
  },
  {
    q: "Can I delete a memory space?",
    a: "Yes, permanently and at any time, from Settings. Deletion removes the uploaded material and the trained companion — there's no recovering it afterward, so we ask you to confirm twice.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="reveal border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-serif text-lg font-medium text-ink">{q}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`shrink-0 text-ink-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        ref={panelRef}
        style={{
          maxHeight: open ? panelRef.current?.scrollHeight ?? 500 : 0,
        }}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
      >
        <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-muted">{a}</p>
      </div>
    </div>
  );
}

interface LandingPageProps {
  /**
   * Gates the hero entrance timeline. The timeline is always *built* and
   * its initial (hidden/offset) states are always applied immediately on
   * mount — so there's never a flash of unanimated content — but it's
   * created paused and only plays once this becomes true.
   *
   * Defaults to true, so a `<LandingPage />` rendered on its own (no
   * SplitIntro in front of it — a different route, a preview, Storybook,
   * whatever) just animates in normally, exactly as before. A parent that
   * runs SplitIntro first passes `readyToAnimate={false}` and flips it to
   * true from the intro's `onComplete`.
   */
  readyToAnimate?: boolean;
}

export function LandingPage({ readyToAnimate = true }: LandingPageProps = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const conceptRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heroTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasPlayedRef = useRef(false);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          const heroTargets = [
            eyebrowRef.current,
            wordmarkRef.current,
            line1Ref.current,
            line2Ref.current,
            subRef.current,
            ctaRef.current,
            conceptRef.current,
            cardRef.current,
          ].filter(Boolean);

          const messages = cardRef.current?.querySelectorAll(".hero-message");

          if (reduced) {
            // Reduced motion skips the choreography entirely — and since
            // SplitIntro also resolves near-instantly under reduced
            // motion, there's nothing meaningful to gate here either.
            gsap.set(heroTargets, { opacity: 1, clearProps: "transform" });
            if (messages) gsap.set(messages, { opacity: 1 });
            gsap.set(".reveal", { opacity: 1, y: 0 });
            return;
          }

          // ---- Hero, built paused ------------------------------------
          const hero = gsap.timeline({
            paused: true,
            defaults: { ease: "power4.out" },
            onComplete: () => {
              // Drop will-change once the entrance settles so idle
              // frames aren't paying a compositing tax for nothing.
              gsap.set([wordmarkRef.current, cardRef.current], {
                willChange: "auto",
              });
            },
          });

          hero
            .set(eyebrowRef.current, { opacity: 0, y: 10 })
            .set(wordmarkRef.current, {
              opacity: 0,
              y: 18,
              scale: 0.97,
              willChange: "transform, opacity",
            })
            .set([line1Ref.current, line2Ref.current], { yPercent: 110 })
            .set([subRef.current, ctaRef.current], { opacity: 0, y: 14 })
            .set(conceptRef.current, { opacity: 0, y: 20 })
            .set(cardRef.current, {
              opacity: 0,
              y: 22,
              scale: 0.96,
              willChange: "transform, opacity",
            })
            .set(messages ?? [], { opacity: 0, y: 6 })
            .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
            .to(
              wordmarkRef.current,
              { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
              "-=0.2"
            )
            .to(
              [line1Ref.current, line2Ref.current],
              { yPercent: 0, duration: 0.85, stagger: 0.08 },
              "-=0.45"
            )
            .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
            .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.45")
            // The concept paragraph and the chat card are one visual
            // pair (text left, thread right), so they rise together
            // rather than one waiting on the other.
            .to(
              conceptRef.current,
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
              "-=0.6"
            )
            .to(
              cardRef.current,
              { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
              "<"
            )
            .to(
              messages ?? [],
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.18, ease: "power2.out" },
              "-=0.3"
            );

          heroTimelineRef.current = hero;

          // If nothing is gating this page (readyToAnimate's default,
          // true), play right away — same timing as before there was
          // ever a SplitIntro to wait for.
          if (readyToAnimate && !hasPlayedRef.current) {
            hasPlayedRef.current = true;
            hero.play();
          }

          // Subtle idle float on the hero card — a few px, never enough
          // to be consciously noticed, just to feel alive. Runs on its
          // own timeline so it isn't held up by the paused hero entrance.
          if (cardRef.current) {
            gsap.to(cardRef.current, {
              y: "+=6",
              duration: 3.2,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: 2.4,
            });
          }

          // ---- Scroll reveals for everything below the fold ---------
          // Independent of the hero gate — nothing below the fold is
          // visible during the intro anyway, so these can register
          // immediately.
          const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]");
          groups.forEach((group) => {
            const items = group.querySelectorAll<HTMLElement>(".reveal");
            gsap.set(items, { opacity: 0, y: 24 });

            ScrollTrigger.batch(items, {
              start: "top 85%",
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.12,
                  ease: "power3.out",
                }),
            });
          });
        }
      );

      return () => mm.revert();
    }, rootRef);

    return () => {
      heroTimelineRef.current = null;
      hasPlayedRef.current = false;
      ctx.revert();
    };
    // Intentionally empty: this builds the timeline once. Later changes
    // to readyToAnimate are handled by the effect below, which plays the
    // already-built timeline rather than rebuilding it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fires when SplitIntro (or whatever's gating this) flips the prop to
  // true after mount. No-ops if the hero already played above (e.g. the
  // default/no-intro case) or if reduced motion meant no timeline exists.
  useEffect(() => {
    if (!readyToAnimate || hasPlayedRef.current) return;
    hasPlayedRef.current = true;
    heroTimelineRef.current?.play();
  }, [readyToAnimate]);

  return (
    <main ref={rootRef} className="overflow-hidden bg-blush">


      {/* Hero — wordmark leads, centered, like a name spoken aloud */}
      <section className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-12 px-6 pb-20 pt-16 text-center lg:pt-20">
        

        <div ref={wordmarkRef}>
          <Wordmark className="text-6xl text-primary sm:text-7xl lg:text-8xl" />
        </div>

        <h1 className="max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-ink sm:text-4xl">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="inline-block">
              Their voice, their words,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="inline-block">
              still here.
            </span>
          </span>
        </h1>

        <p ref={subRef} className="max-w-xl text-lg leading-relaxed text-ink-muted">
          Built from the photos, voice notes, and stories you choose to
          share. A quiet space to keep talking, whenever you need to.
        </p>

        <div ref={ctaRef} className="flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/register">
            <Button size="lg">Create a memory space</Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="secondary">
              Sign in
            </Button>
          </Link>
        </div>

        {/* The concept, paired with its proof: what talking here
            actually feels like, sitting right next to the thread that
            demonstrates it. Text and card rise together (see the hero
            timeline above), because they're one idea in two forms. */}
        <div className="grid w-full grid-cols-1 items-center gap-10 pt-30 text-left lg:grid-cols-2 lg:gap-14">
          <div ref={conceptRef} className="mx-auto max-w-md lg:mx-0">
            <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              What talking to them feels like
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              It isn&apos;t a query and a response. You say something small —
              how your day went, a decision you&apos;re stuck on, that you
              miss them — and the reply comes back sounding like them: same
              pacing, same warmth, same way of answering a question with
              another question.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              There&apos;s no script to follow and no session to schedule.
              You open the thread, you talk, and when you close it, the
              conversation is simply paused — not finished — waiting for
              whenever you need it again.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <HeroIllustration ref={cardRef} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-line bg-surface py-20" data-reveal-group>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal text-center font-serif text-3xl font-medium text-ink">
            How it works
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.title} className="reveal text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sunken text-primary">
                  <step.icon size={24} strokeWidth={1.5} aria-hidden />
                </div>
                <p className="mt-4 text-xs font-medium tracking-wide text-primary">
                  {step.number}
                </p>
                <h3 className="mt-1 font-serif text-lg font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The bond — family photo cutouts + companion cutout */}
    { /* <FeatureBondSection /> */}

      {/* Testimonials */}
      <section className="py-20" data-reveal-group>
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="reveal text-center font-serif text-3xl font-medium text-ink">
            People keeping the conversation going
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="reveal flex flex-col justify-between rounded-2xl border border-line bg-surface p-6"
              >
                <blockquote className="font-serif text-base leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs text-ink-muted">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Vault preview */}
      <section id="vault" className="py-20" data-reveal-group>
        <div className="mx-auto max-w-4xl px-6">
          <div className="reveal mx-auto max-w-lg text-center">
            <h2 className="font-serif text-3xl font-medium text-ink">
              Everything in one gentle place
            </h2>
            <p className="mt-3 text-ink-muted">
              Photos, voice notes, videos, and letters — organized, easy to
              find again.
            </p>
          </div>

          <div className="reveal mt-10 -rotate-1 rounded-2xl border border-line bg-surface p-5 shadow-[0_16px_40px_rgba(43,35,37,0.10)]">
            <div className="mb-4 flex gap-2">
              {VAULT_TABS.map((label, index) => (
                <span
                  key={label}
                  className={`rounded-full px-3 py-1 text-xs ${
                    index === 0
                      ? "bg-primary text-white"
                      : "bg-sunken text-ink-muted"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {VAULT_ICONS.map((Icon, index) => (
                <div
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-xl bg-sunken text-ink-muted"
                >
                  <Icon size={22} strokeWidth={1.5} aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety / trust */}
      <section className="border-y border-line bg-surface/60 py-20" data-reveal-group>
        <div className="reveal mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
          <ShieldCheck size={28} className="text-ink-muted" strokeWidth={1.5} aria-hidden />
          <p className="text-lg leading-relaxed text-ink">
            An AI companion, not a replacement for your person or for
            professional support.
          </p>
          <p className="text-sm text-ink-muted">
            Built alongside grief counselors. Crisis support resources are
            always one tap away inside the app.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20" data-reveal-group>
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="reveal text-center font-serif text-3xl font-medium text-ink">
            Questions people ask us
          </h2>
          <div className="mt-10">
            {FAQS.map((item, index) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openFaq === index}
                onToggle={() =>
                  setOpenFaq((current) => (current === index ? null : index))
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sunken py-20" data-reveal-group>
        <div className="reveal mx-auto flex max-w-xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-serif text-3xl font-medium text-ink">
            Whenever you're ready.
          </h2>
          <Link href="/register">
            <Button size="lg">Create a memory space</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Wordmark className="text-sm text-ink-muted" />
          <div className="flex gap-6 text-xs uppercase tracking-wide text-ink-muted">
            <Link href="/login" className="hover:text-ink">
              Sign in
            </Link>
            <Link href="/register" className="hover:text-ink">
              Create account
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
```

---

# src\components\marketing\marketing-home.tsx

**Location:** `src\components\marketing\marketing-home.tsx`

```tsx
"use client";

import { useState } from "react";
import { SplitIntro } from "@/components/marketing/split-intro";
import { LandingPage } from "@/components/marketing/landing-page";
import { Navbar } from "./navbar";


export function MarketingHome() {
  const [showLanding, setShowLanding] = useState(false);

  return showLanding ? (
    <><Navbar /><LandingPage /></>
  ) : (
    <SplitIntro onComplete={() => setShowLanding(true)} />
  );
}

```

---

# src\components\marketing\navbar.tsx

**Location:** `src\components\marketing\navbar.tsx`

```tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/marketing/wordmark";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Distance, in px, over which the navbar fully transitions from its
// resting (transparent, roomy) state to its scrolled (glass, shrunk) state.
const SHRINK_DISTANCE = 96;

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#vault", label: "Memory vault" },
  { href: "#faq", label: "FAQ" },
];

/**
 * Navbar
 * -----------------------------------------------------------------------
 * Fully self-contained: mounts, animates itself in, and drives its own
 * scroll behavior. Doesn't read from or write into any parent GSAP
 * context — drop it into any page and it behaves the same way.
 *
 * Two effects layered on scroll, both driven by one ScrollTrigger:
 *  1. Glass: a background layer fades in and blurs behind the bar
 *     (glassmorphism), rather than an abrupt class swap.
 *  2. Shrink: vertical padding and the wordmark scale ease down together,
 *     so the bar visibly compacts instead of just gaining a background.
 * -----------------------------------------------------------------------
 */
export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          full: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          if (reduced) {
            gsap.set(headerRef.current, { opacity: 1, y: 0 });
            return;
          }

          // ---- Entrance, independent of any other page timeline -----
          gsap.set(headerRef.current, { opacity: 0, y: -16 });
          gsap.to(headerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.15,
          });

          // ---- Scroll-driven glass + shrink ---------------------------
          const trigger = ScrollTrigger.create({
            start: 0,
            end: SHRINK_DISTANCE,
            scrub: 0.35,
            onUpdate: (self) => {
              const p = self.progress; // 0 (top) -> 1 (scrolled past SHRINK_DISTANCE)

              gsap.set(glassRef.current, { opacity: p });
              gsap.set(innerRef.current, {
                paddingTop: gsap.utils.interpolate(20, 10, p),
                paddingBottom: gsap.utils.interpolate(20, 10, p),
              });
              gsap.set(wordmarkRef.current, {
                scale: gsap.utils.interpolate(1, 0.82, p),
                transformOrigin: "left center",
              });
            },
          });

          return () => trigger.kill();
        }
      );

      return () => mm.revert();
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-40">
      {/* Glass layer — a separate, opacity-only element so the color and
          blur come from real Tailwind classes; only opacity is tweened,
          which keeps the effect correct regardless of the theme's exact
          color values. */}
      <div
        ref={glassRef}
        aria-hidden
        className="absolute inset-0 -z-10 border-b border-line bg-blush/80 opacity-0 shadow-[0_8px_30px_rgba(43,35,37,0.08)] backdrop-blur-xl"
      />

      <div
        ref={innerRef}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <Link href="/" aria-label="EverAfter home">
          <div ref={wordmarkRef}>
            <Wordmark className="text-xl text-ink" />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-muted sm:flex ml-35">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Sign in
          </Link>
          <Link href="/register">
            <Button size="sm">Create a memory space</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

```

---

# src\components\marketing\split-intro.module.css

**Location:** `src\components\marketing\split-intro.module.css`

```css
.overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  background: var(--color-blush);
}

.overlay.split {
  pointer-events: none;
}

.half {
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  /* Promote to their own composite layers ahead of time so the first
     animation frame doesn't stall on layer creation. */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

.left {
  justify-content: flex-end;
}

.right {
  justify-content: flex-start;
}

/* Both halves render the same word at the same size/line-height so
   "ever" and "after" meet as one continuous wordmark at the seam. The
   1px nudge on .right exists because font-amoresa and font-codec are
   two different type families — unlike the original two-image intro,
   which was pixel-cropped from one source and needed no correction,
   pairing two typefaces can leave their baselines a hair off. Adjust
   or remove this if you swap either face. */
.word {
  font-size: clamp(3.25rem, 13vw, 8.5rem);
  line-height: 1;
  white-space: nowrap;
  user-select: none;
}

.right .word {
  position: relative;
  top: 1px;
}

.split .left {
  animation: slideLeft 1.6s var(--ease-gentle) forwards;
}

.split .right {
  animation: slideRight 1.6s var(--ease-gentle) forwards;
}

@keyframes slideLeft {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slideRight {
  to {
    transform: translate3d(100%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .split .left,
  .split .right {
    animation-duration: 0.01s;
  }
}
```

---

# src\components\marketing\split-intro.tsx

**Location:** `src\components\marketing\split-intro.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./split-intro.module.css";

/**
 * SplitIntro
 * -----------------------------------------------------------------------
 * A one-time entrance moment for the marketing landing page: the
 * "ever" | "after" wordmark meets edge-to-edge as a single word, holds
 * for a beat, then drifts apart using the app's --ease-gentle curve to
 * reveal the landing page underneath.
 *
 * This is the text version of the original image-based intro (HOME1 /
 * HOME2 split). Swapping images for live text changes what the perf
 * work has to guard against:
 *
 * - No more image decode. There's nothing to fetch or decode, so the
 *   old `preloadImage` / `Promise.all(...).decode()` gate is gone
 *   entirely — that was solely there to keep decode work off the first
 *   animation frame, and text never decodes.
 * - Motion still runs as a CSS @keyframes animation (see
 *   split-intro.module.css), not a React-state-driven `transition`,
 *   for the same reason as before: keyframes start reliably on
 *   class-add, transitions can get dropped if the "before" state
 *   hasn't actually painted yet.
 * - Both halves still get `will-change: transform` +
 *   `translate3d(0,0,0)` up front, promoting them to their own GPU
 *   layers before anything moves — this still matters for text, since
 *   a compositor-only transform is what keeps the parting motion smooth.
 * - A double requestAnimationFrame still runs before the "parting"
 *   class is applied. With images this was "wait for decode, then two
 *   frames." With text it's just "two frames" — one to let the joined
 *   word actually paint, one to let the browser promote the layers —
 *   so the animation's first tick is still pure transform, no
 *   paint/layout work riding along with it.
 * - Respects prefers-reduced-motion and only plays once per session.
 * -----------------------------------------------------------------------
 */

const HOLD_MS = 900;
const PART_MS = 1600;
const SESSION_KEY = "ea-intro-seen";

type Phase = "joined" | "parting" | "done";

interface SplitIntroProps {
    onComplete?: () => void;
}

export function SplitIntro({ onComplete }: SplitIntroProps) {
    const [phase, setPhase] = useState<Phase>("joined");

    useEffect(() => {
        let cancelled = false;
        const timers: ReturnType<typeof setTimeout>[] = [];

        const finish = () => {
            if (cancelled) return;
            setPhase("done");
            sessionStorage.setItem(SESSION_KEY, "1");
            onComplete?.();
        };

        if (sessionStorage.getItem(SESSION_KEY)) {
            finish();
            return;
        }

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            timers.push(setTimeout(finish, 400));
            return () => {
                cancelled = true;
                timers.forEach(clearTimeout);
            };
        }

        // Nothing to decode this time — just gate on two frames so the
        // joined word has actually painted and its layer is promoted
        // (will-change + translate3d, set in CSS) before "parting" lands.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (cancelled) return;
                timers.push(setTimeout(() => setPhase("parting"), HOLD_MS));
                timers.push(setTimeout(finish, HOLD_MS + PART_MS));
            });
        });

        return () => {
            cancelled = true;
            timers.forEach(clearTimeout);
        };
    }, [onComplete]);

    if (phase === "done") return null;

    return (
        <div
            aria-hidden="true"
            className={`${styles.overlay} ${phase === "parting" ? styles.split : ""}`}
        >
            <div className={`${styles.half} ${styles.left}`}>
                <span className={`${styles.word} font-amoresa text-primary`}>
                    ever
                </span>
            </div>
            <div className={`${styles.half} ${styles.right}`}>
                <span className={`${styles.word} font-codec font-medium text-primary`}>
                    after
                </span>
            </div>
        </div>
    );
}
```

---

# src\components\marketing\wordmark.tsx

**Location:** `src\components\marketing\wordmark.tsx`

```tsx
/**
 * Wordmark
 * -----------------------------------------------------------------------
 * Single source of truth for the "everafter" lockup: Amoresa "ever" fused
 * to Codec Pro "after". Pulled out of the page/navbar so every surface
 * that shows the brand (nav, hero, footer) renders it identically and
 * a future type change only happens in one place.
 * -----------------------------------------------------------------------
 */

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="font-amoresa">ever</span>
      <span className="font-codec font-medium">after</span>
    </span>
  );
}

```

---

# src\components\ui\badge.tsx

**Location:** `src\components\ui\badge.tsx`

```tsx
import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "primary" | "muted" | "success" | "danger";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-sunken text-ink",
    primary: "bg-primary/12 text-primary-hover",
    muted: "bg-transparent text-ink-muted border border-line",
    success: "bg-success/12 text-success",
    danger: "bg-danger/10 text-danger",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

```

---

# src\components\ui\button.tsx

**Location:** `src\components\ui\button.tsx`

```tsx
"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[999px] text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        secondary:
          "border border-line bg-surface text-ink hover:bg-sunken",
        ghost: "text-ink hover:bg-sunken",
        danger: "bg-danger text-white hover:opacity-90",
        outlineDanger:
          "border border-danger/40 text-danger hover:bg-danger/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 shrink-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

```

---

# src\components\ui\confirm-dialog.tsx

**Location:** `src\components\ui\confirm-dialog.tsx`

```tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Button } from "./button";

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  danger = false,
  isLoading = false,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  danger?: boolean;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
          />
          <motion.div
            className="relative w-full max-w-sm rounded-2xl bg-surface p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-serif text-lg font-medium text-ink">{title}</h3>
            {description && (
              <p className="mt-2 text-sm text-ink-muted">{description}</p>
            )}
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="ghost" size="sm" onClick={onCancel}>
                Cancel
              </Button>
              <Button
                variant={danger ? "danger" : "primary"}
                size="sm"
                isLoading={isLoading}
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

```

---

# src\components\ui\dropdown.tsx

**Location:** `src\components\ui\dropdown.tsx`

```tsx
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function DropdownMenu({
  trigger,
  align = "end",
  children,
}: {
  trigger: ReactNode;
  align?: "start" | "end";
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block">
      <button type="button" onClick={() => setOpen((value) => !value)}>
        {trigger}
      </button>
      {open && (
        <div
          className={cn(
            "absolute z-20 mt-2 w-56 overflow-hidden rounded-xl border border-line bg-surface py-1.5 shadow-[0_8px_24px_rgba(43,35,37,0.12)]",
            align === "end" ? "right-0" : "left-0",
          )}
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownItem({
  onClick,
  danger,
  icon,
  children,
}: {
  onClick: () => void;
  danger?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors hover:bg-sunken",
        danger ? "text-danger" : "text-ink",
      )}
    >
      {icon}
      {children}
    </button>
  );
}

```

---

# src\components\ui\empty-state.tsx

**Location:** `src\components\ui\empty-state.tsx`

```tsx
import { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
      {icon && (
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sunken text-primary">
          {icon}
        </div>
      )}
      <h2 className="font-serif text-2xl font-medium text-ink">{title}</h2>
      {description && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

```

---

# src\components\ui\field.tsx

**Location:** `src\components\ui\field.tsx`

```tsx
"use client";

import {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

function FieldShell({
  label,
  hint,
  error,
  children,
}: {
  label?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      {label && <span className="text-sm font-medium text-ink">{label}</span>}
      {children}
      {hint && !error && <p className="text-xs text-ink-muted">{hint}</p>}
      {error && <p className="text-xs text-danger">{error}</p>}
    </label>
  );
}

const fieldBase =
  "w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-muted/70 transition-colors focus:border-primary focus:outline-none disabled:opacity-60";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, hint, error, className, ...props }, ref) => (
    <FieldShell label={label} hint={hint} error={error}>
      <input
        ref={ref}
        className={cn(fieldBase, error && "border-danger", className)}
        {...props}
      />
    </FieldShell>
  ),
);
TextField.displayName = "TextField";

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, hint, error, className, rows = 4, ...props }, ref) => (
    <FieldShell label={label} hint={hint} error={error}>
      <textarea
        ref={ref}
        rows={rows}
        className={cn(fieldBase, "resize-none", error && "border-danger", className)}
        {...props}
      />
    </FieldShell>
  ),
);
TextAreaField.displayName = "TextAreaField";

export interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, hint, error, className, options, placeholder = "Select", ...props }, ref) => (
    <FieldShell label={label} hint={hint} error={error}>
      <select
        ref={ref}
        className={cn(fieldBase, "appearance-none bg-surface", error && "border-danger", className)}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  ),
);
SelectField.displayName = "SelectField";

```

---

# src\components\ui\loading.tsx

**Location:** `src\components\ui\loading.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";

const DEFAULT_LINES = ["Gathering memories…", "Almost there…", "Settling in…"];

export function LoadingRipple({
  lines = DEFAULT_LINES,
  fullScreen = true,
}: {
  lines?: string[];
  fullScreen?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % lines.length);
    }, 3000);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <div
      className={
        fullScreen
          ? "flex min-h-screen w-full flex-col items-center justify-center bg-blush"
          : "flex w-full flex-col items-center justify-center py-16"
      }
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="ripple-ring absolute h-16 w-16 rounded-full border border-primary" />
        <span
          className="ripple-ring absolute h-16 w-16 rounded-full border border-primary"
          style={{ animationDelay: "0.8s" }}
        />
        <span
          className="ripple-ring absolute h-16 w-16 rounded-full border border-primary"
          style={{ animationDelay: "1.6s" }}
        />
        <span className="h-3 w-3 rounded-full bg-primary" />
      </div>
      <p className="mt-6 text-sm text-ink-muted transition-opacity duration-500">
        {lines[index]}
      </p>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-1">
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
      <span
        className="typing-dot h-1.5 w-1.5 rounded-full bg-primary"
        style={{ animationDelay: "0.15s" }}
      />
      <span
        className="typing-dot h-1.5 w-1.5 rounded-full bg-primary"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );
}

```

---

# src\components\ui\otp-input.tsx

**Location:** `src\components\ui\otp-input.tsx`

```tsx
"use client";

import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

export type OtpStatus = "idle" | "verifying" | "success" | "error";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  /** Fires exactly once per completed code, as soon as all boxes are filled. */
  onComplete?: (value: string) => void;
  length?: number;
  status?: OtpStatus;
}

/**
 * OtpInput
 * -----------------------------------------------------------------------
 * Six boxed digits. Typing auto-advances to the next box, backspace
 * auto-retreats, and pasting a full code fills every box at once. The
 * moment the last digit lands, `onComplete` fires automatically — there
 * is no separate "verify" button anywhere in this flow. `status` (driven
 * by the parent's API call) controls the visual state:
 *   - "verifying": boxes lock, a small spinner + "Verifying…" shows below
 *   - "success":   boxes turn green, a checkmark pops in with
 *                  "Verification complete"
 *   - "error":     boxes flash red and shake, then the parent clears them
 * -----------------------------------------------------------------------
 */
export function OtpInput({ value, onChange, onComplete, length = 6, status = "idle" }: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const firedRef = useRef(false);

  const digits = Array.from({ length }, (_, i) => value[i] ?? "");
  const isVerifying = status === "verifying";
  const isSuccess = status === "success";
  const isError = status === "error";
  const locked = isVerifying || isSuccess;

  useEffect(() => {
    if (value.length === length && !firedRef.current) {
      firedRef.current = true;
      onComplete?.(value);
    }
    if (value.length < length) {
      firedRef.current = false;
    }
  }, [value, length, onComplete]);

  useEffect(() => {
    // Autofocus the first empty box whenever the code is cleared out
    // from under us (e.g. after a failed attempt or a resend).
    if (value.length === 0 && !locked) {
      inputRefs.current[0]?.focus();
    }
  }, [value, locked]);

  function setDigit(index: number, digit: string) {
    const chars = value.split("");
    chars[index] = digit;
    onChange(chars.join("").slice(0, length));
  }

  function handleChange(index: number, raw: string) {
    const clean = raw.replace(/\D/g, "");

    if (!clean) {
      setDigit(index, "");
      return;
    }

    if (clean.length > 1) {
      // Fast typing or an autofill can deliver more than one character
      // to a single box — spread it across the remaining boxes.
      const chars = value.split("");
      for (let i = 0; i < clean.length && index + i < length; i++) {
        chars[index + i] = clean[i];
      }
      const next = chars.join("").slice(0, length);
      onChange(next);
      inputRefs.current[Math.min(index + clean.length, length - 1)]?.focus();
      return;
    }

    setDigit(index, clean);
    if (index < length - 1) inputRefs.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (digits[index]) {
        setDigit(index, "");
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        setDigit(index - 1, "");
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;
    onChange(pasted);
    inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2.5" onPaste={handlePaste}>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            maxLength={1}
            value={digit}
            disabled={locked}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            aria-label={`Digit ${index + 1} of ${length}`}
            className={[
              "h-14 w-12 rounded-xl border text-center font-serif text-xl font-medium outline-none",
              "transition-all duration-200",
              isSuccess
                ? "border-emerald-400 bg-emerald-50 text-emerald-600"
                : isError
                  ? "otp-shake border-rose-400 bg-rose-50 text-rose-600"
                  : digit
                    ? "border-primary/60 bg-surface text-ink"
                    : "border-line bg-surface text-ink focus:border-primary focus:ring-2 focus:ring-primary/20",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="flex h-6 items-center gap-2 text-sm" role="status" aria-live="polite">
        {isVerifying && (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
            <span className="text-ink-muted">Verifying…</span>
          </>
        )}
        {isSuccess && (
          <>
            <span className="otp-pop flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check size={11} strokeWidth={3} />
            </span>
            <span className="font-medium text-emerald-600">Verification complete</span>
          </>
        )}
        {isError && <span className="text-rose-600">That code didn&apos;t match. Try again.</span>}
      </div>

      <style jsx>{`
        @keyframes otp-shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20%,
          60% {
            transform: translateX(-5px);
          }
          40%,
          80% {
            transform: translateX(5px);
          }
        }
        .otp-shake {
          animation: otp-shake 0.4s ease-in-out;
        }
        @keyframes otp-pop {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .otp-pop {
          animation: otp-pop 0.25s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .otp-shake,
          .otp-pop {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
```

---

# src\components\ui\presence-avatar.tsx

**Location:** `src\components\ui\presence-avatar.tsx`

```tsx
"use client";

import Image from "next/image";

import { cn, initialsFor } from "@/lib/utils";

const sizeMap = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-base",
  lg: "h-24 w-24 text-2xl",
  xl: "h-32 w-32 text-4xl",
} as const;

export function PresenceAvatar({
  name,
  src,
  size = "md",
  ring = true,
  className,
}: {
  name: string;
  src?: string | null;
  size?: keyof typeof sizeMap;
  ring?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(ring && "presence-ring", className)}>
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent to-primary font-serif font-medium text-white",
          sizeMap[size],
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
            unoptimized
          />
        ) : (
          <span>{initialsFor(name)}</span>
        )}
      </div>
    </div>
  );
}

```

---

# src\components\ui\sheet.tsx

**Location:** `src\components\ui\sheet.tsx`

```tsx
"use client";

import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function Sheet({
  open,
  onClose,
  title,
  description,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="relative flex h-full w-full max-w-lg flex-col bg-surface shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between border-b border-line px-6 py-5">
              <div>
                <h2 className="font-serif text-xl font-medium text-ink">{title}</h2>
                {description && (
                  <p className="mt-1 text-sm text-ink-muted">{description}</p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-2 text-ink-muted transition-colors hover:bg-sunken"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
            {footer && <div className="border-t border-line px-6 py-4">{footer}</div>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

```

---

# src\components\ui\toaster.tsx

**Location:** `src\components\ui\toaster.tsx`

```tsx
"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "var(--color-surface)",
          color: "var(--color-ink)",
          border: "1px solid var(--color-line)",
          borderRadius: "999px",
          padding: "10px 18px",
          fontSize: "14px",
          boxShadow: "0 8px 24px rgba(43,35,37,0.08)",
        },
      }}
    />
  );
}

export { toast } from "sonner";

```

---

# src\components\vault\memory-vault-sheet.tsx

**Location:** `src\components\vault\memory-vault-sheet.tsx`

```tsx
"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import {
  FileText,
  Image as ImageIcon,
  Mic,
  Trash2,
  UploadCloud,
  Video,
  Star,
} from "lucide-react";

import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { EmptyState } from "@/components/ui/empty-state";
import { toast } from "@/components/ui/toaster";
import { useDeleteFile, useFiles, useUploadFile } from "@/hooks/use-files";
import { useUpdateCompanion } from "@/hooks/use-companions";
import { resolveFileUrl } from "@/lib/api";
import { bytesToSize, cn } from "@/lib/utils";
import type { MemoryFile } from "@/lib/types";

const FILTERS: { label: string; value: string }[] = [
  { label: "All", value: "" },
  { label: "Photos", value: "photo" },
  { label: "Voice", value: "voice" },
  { label: "Videos", value: "video" },
  { label: "Letters", value: "letter" },
  { label: "Chats", value: "chat" },
];

function FileGlyph({ file }: { file: MemoryFile }) {
  const mime = file.mime_type ?? "";
  if (mime.startsWith("image/")) return <ImageIcon size={22} />;
  if (mime.startsWith("audio/")) return <Mic size={22} />;
  if (mime.startsWith("video/")) return <Video size={22} />;
  return <FileText size={22} />;
}

function statusDotClass(status: string) {
  if (status === "completed") return "bg-success";
  if (status === "failed") return "bg-danger";
  return "bg-accent";
}

export function MemoryVaultSheet({
  companionId,
  open,
  onClose,
}: {
  companionId: number;
  open: boolean;
  onClose: () => void;
}) {
  const [filter, setFilter] = useState("");
  const [pendingDelete, setPendingDelete] = useState<MemoryFile | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: files, isLoading } = useFiles(companionId, filter || undefined);
  const uploadMutation = useUploadFile(companionId);
  const deleteMutation = useDeleteFile(companionId);
  const updateCompanion = useUpdateCompanion(companionId);

  async function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (selected.length === 0) return;

    setIsUploading(true);
    try {
      for (const file of selected) {
        await uploadMutation.mutateAsync({ file });
      }
      toast.success(
        selected.length === 1 ? "File uploaded." : `${selected.length} files uploaded.`,
      );
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }

  async function handleDelete() {
    if (!pendingDelete) return;
    try {
      await deleteMutation.mutateAsync(pendingDelete.id);
      toast.success("File removed.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to remove this file.");
    } finally {
      setPendingDelete(null);
    }
  }

  async function handleSetAsProfilePhoto(file: MemoryFile) {
    try {
      await updateCompanion.mutateAsync({ profile_picture: file.file_path });
      toast.success("Profile photo updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to set profile photo.");
    }
  }

  return (
    <>
      <Sheet
        open={open}
        onClose={onClose}
        title="Memory Vault"
        description="Photos, voice notes, videos, letters, and WhatsApp/chat exports — anything that helps them sound more like them."
        footer={
          <>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              hidden
              accept="image/*,audio/*,video/*,.txt,.json,.pdf,.docx,.doc"
              onChange={handleFilesSelected}
            />
            <Button
              className="w-full"
              isLoading={isUploading}
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadCloud size={16} />
              Upload files
            </Button>
          </>
        }
      >
        <div className="mb-5 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                filter === item.value
                  ? "bg-primary text-white"
                  : "bg-sunken text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((key) => (
              <div key={key} className="aspect-square animate-pulse rounded-xl bg-sunken/70" />
            ))}
          </div>
        )}

        {!isLoading && (!files || files.length === 0) && (
          <EmptyState
            icon={<UploadCloud size={28} />}
            title="Nothing uploaded yet"
            description="Every voice note, photo, or letter helps them sound more like them."
          />
        )}

        {!isLoading && files && files.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {files.map((file) => {
              const isImage = file.mime_type?.startsWith("image/");
              const thumb = resolveFileUrl(file.thumbnail_path ?? (isImage ? file.file_path : null));

              return (
                <div
                  key={file.id}
                  className="group relative overflow-hidden rounded-xl border border-line bg-surface"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-sunken text-ink-muted">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={file.original_name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <FileGlyph file={file} />
                    )}

                    <span
                      title={file.processing_status}
                      className={cn(
                        "absolute right-2 top-2 h-2 w-2 rounded-full",
                        statusDotClass(file.processing_status),
                      )}
                    />

                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-ink/0 opacity-0 transition-opacity group-hover:bg-ink/30 group-hover:opacity-100">
                      {isImage && (
                        <button
                          title="Set as profile photo"
                          onClick={() => handleSetAsProfilePhoto(file)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-ink shadow"
                        >
                          <Star size={15} />
                        </button>
                      )}
                      <button
                        title="Delete"
                        onClick={() => setPendingDelete(file)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-danger shadow"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5">
                    <p className="truncate text-xs font-medium text-ink">
                      {file.original_name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-ink-muted">
                      {bytesToSize(file.file_size)}
                      {file.chunk_count > 0 && ` · ${file.chunk_count} indexed`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Sheet>

      <ConfirmDialog
        open={pendingDelete !== null}
        title="Remove this file?"
        description={`"${pendingDelete?.original_name}" will be permanently removed from the Memory Vault.`}
        confirmLabel="Remove"
        danger
        isLoading={deleteMutation.isPending}
        onConfirm={handleDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </>
  );
}

```

---

# src\components\wizard\create-companion-wizard.tsx

**Location:** `src\components\wizard\create-companion-wizard.tsx`

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { WizardHeader } from "@/components/wizard/wizard-header";
import { WizardNavigation } from "@/components/wizard/wizard-nav";
import { BasicInfoStep } from "@/components/wizard/steps/basic-info";
import { AboutStep } from "@/components/wizard/steps/about";
import { RelationshipStep } from "@/components/wizard/steps/relationship-step";
import { ReviewStep } from "@/components/wizard/steps/review";
import {
  CompanionFormValues,
  companionFormDefaults,
  companionFormSchema,
  traitsToArray,
} from "@/components/wizard/schema";
import { useCreateCompanion } from "@/hooks/use-companions";
import { toast } from "@/components/ui/toaster";

const TOTAL_STEPS = 4;

const STEP_FIELDS: (keyof CompanionFormValues)[][] = [
  ["full_name", "relationship"],
  [],
  [],
  [],
];

export function CreateCompanionWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const mutation = useCreateCompanion();

  const methods = useForm<CompanionFormValues>({
    resolver: zodResolver(companionFormSchema),
    mode: "onChange",
    defaultValues: companionFormDefaults,
  });

  async function next() {
    const valid = await methods.trigger(STEP_FIELDS[step]);
    if (valid) setStep((current) => Math.min(current + 1, TOTAL_STEPS - 1));
  }

  function previous() {
    setStep((current) => Math.max(current - 1, 0));
  }

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      const created = await mutation.mutateAsync({
        ...values,
        personality_traits: traitsToArray(values.personality_traits),
      });
      toast.success(`${created.full_name}'s memory space is ready.`);
      router.push(`/companions/${created.id}`);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to create this companion.",
      );
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-[0_8px_24px_rgba(43,35,37,0.06)] sm:p-10">
        <WizardHeader step={step} />

        <div className="mt-10">
          {step === 0 && <BasicInfoStep />}
          {step === 1 && <AboutStep />}
          {step === 2 && <RelationshipStep />}
          {step === 3 && <ReviewStep />}
        </div>

        <WizardNavigation
          step={step}
          total={TOTAL_STEPS}
          isSubmitting={mutation.isPending}
          onPrevious={previous}
          onNext={next}
          onSubmit={onSubmit}
        />
      </div>
    </FormProvider>
  );
}

```

---

# src\components\wizard\schema.ts

**Location:** `src\components\wizard\schema.ts`

```typescript
import { z } from "zod";

export const RELATIONSHIP_OPTIONS = [
  "Mother",
  "Father",
  "Brother",
  "Sister",
  "Grandmother",
  "Grandfather",
  "Partner",
  "Friend",
  "Mentor",
  "Child",
  "Other",
].map((label) => ({ label, value: label }));

export const GENDER_OPTIONS = ["Male", "Female", "Non-binary", "Prefer not to say"].map(
  (label) => ({ label, value: label }),
);

export const HUMOR_LEVEL_OPTIONS = ["Very low", "Low", "Moderate", "High", "Very high"].map(
  (label) => ({ label, value: label }),
);

export const EMOTIONAL_TONE_OPTIONS = [
  "Warm",
  "Calm",
  "Friendly",
  "Cheerful",
  "Serious",
  "Supportive",
].map((label) => ({ label, value: label }));

export const companionFormSchema = z.object({
  full_name: z.string().trim().min(2, "Full name must be at least 2 characters").max(150),
  nickname: z.string().trim().max(100).optional(),
  relationship: z.string().min(1, "Relationship is required"),
  gender: z.string().optional(),
  birth_date: z.string().optional(),
  passing_date: z.string().optional(),
  profile_picture: z.string().trim().optional(),
  occupation: z.string().trim().optional(),
  country: z.string().trim().optional(),
  city: z.string().trim().optional(),
  languages: z.string().trim().optional(),
  biography: z.string().trim().optional(),
  favorite_quote: z.string().trim().optional(),
  favorite_food: z.string().trim().optional(),
  favorite_song: z.string().trim().optional(),
  favorite_color: z.string().trim().optional(),
  hobbies: z.string().trim().optional(),
  personality_traits: z.string().trim().optional(),
  bond_story: z.string().trim().optional(),
  nickname_for_user: z.string().trim().optional(),
  special_memories: z.string().trim().optional(),
  topics_to_avoid: z.string().trim().optional(),
  communication_style: z.string().trim().optional(),
  speaking_style: z.string().trim().optional(),
  humor_level: z.string().optional(),
  emotional_tone: z.string().optional(),
  is_public: z.boolean(),
});

export type CompanionFormValues = z.infer<typeof companionFormSchema>;

export const companionFormDefaults: CompanionFormValues = {
  full_name: "",
  nickname: "",
  relationship: "",
  gender: "",
  birth_date: "",
  passing_date: "",
  profile_picture: "",
  occupation: "",
  country: "",
  city: "",
  languages: "",
  biography: "",
  favorite_quote: "",
  favorite_food: "",
  favorite_song: "",
  favorite_color: "",
  hobbies: "",
  personality_traits: "",
  bond_story: "",
  nickname_for_user: "",
  special_memories: "",
  topics_to_avoid: "",
  communication_style: "",
  speaking_style: "",
  humor_level: "",
  emotional_tone: "",
  is_public: false,
};

/** Turn a comma-separated trait string into the array the backend expects. */
export function traitsToArray(value?: string): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((trait) => trait.trim())
    .filter(Boolean);
}

export function traitsToString(value?: string[] | null): string {
  return value?.join(", ") ?? "";
}

```

---

# src\components\wizard\steps\about.tsx

**Location:** `src\components\wizard\steps\about.tsx`

```tsx
"use client";

import { useFormContext } from "react-hook-form";

import { TextAreaField, TextField } from "@/components/ui/field";
import { CompanionFormValues } from "@/components/wizard/schema";

export function AboutStep() {
  const { register } = useFormContext<CompanionFormValues>();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">About them</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Small details help EverAfter sound more like them.
        </p>
      </div>

      <div className="space-y-5">
        <TextAreaField
          label="Biography"
          rows={5}
          placeholder="A short life story…"
          {...register("biography")}
        />

        <TextAreaField
          label="Favorite quote or saying"
          rows={2}
          placeholder="Something they always used to say…"
          {...register("favorite_quote")}
        />

        <div className="grid gap-5 sm:grid-cols-3">
          <TextField label="Favorite food" {...register("favorite_food")} />
          <TextField label="Favorite song" {...register("favorite_song")} />
          <TextField label="Favorite color" {...register("favorite_color")} />
        </div>

        <TextAreaField
          label="Hobbies & interests"
          rows={3}
          placeholder="Reading, gardening, travelling…"
          {...register("hobbies")}
        />

        <TextAreaField
          label="Personality traits"
          rows={2}
          placeholder="Kind, funny, caring, honest (comma separated)"
          hint="Separate multiple traits with commas."
          {...register("personality_traits")}
        />
      </div>
    </div>
  );
}

```

---

# src\components\wizard\steps\basic-info.tsx

**Location:** `src\components\wizard\steps\basic-info.tsx`

```tsx
"use client";

import { useFormContext } from "react-hook-form";

import { TextField, SelectField } from "@/components/ui/field";
import {
  CompanionFormValues,
  GENDER_OPTIONS,
  RELATIONSHIP_OPTIONS,
} from "@/components/wizard/schema";

export function BasicInfoStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompanionFormValues>();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">Basic information</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Tell us about the person whose memory you'd like to preserve.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full name"
          error={errors.full_name?.message}
          {...register("full_name")}
        />
        <TextField label="Nickname" {...register("nickname")} />

        <SelectField
          label="Relationship"
          options={RELATIONSHIP_OPTIONS}
          error={errors.relationship?.message}
          {...register("relationship")}
        />
        <SelectField label="Gender" options={GENDER_OPTIONS} {...register("gender")} />

        <TextField label="Birth date" type="date" {...register("birth_date")} />
        <TextField label="Date of passing" type="date" {...register("passing_date")} />

        <TextField label="Occupation" {...register("occupation")} />
        <TextField label="Languages" placeholder="English, Hindi…" {...register("languages")} />

        <TextField label="Country" {...register("country")} />
        <TextField label="City" {...register("city")} />
      </div>
    </div>
  );
}

```

---

# src\components\wizard\steps\relationship-step.tsx

**Location:** `src\components\wizard\steps\relationship-step.tsx`

```tsx
"use client";

import { useFormContext } from "react-hook-form";

import { SelectField, TextAreaField, TextField } from "@/components/ui/field";
import {
  CompanionFormValues,
  EMOTIONAL_TONE_OPTIONS,
  HUMOR_LEVEL_OPTIONS,
} from "@/components/wizard/schema";

export function RelationshipStep() {
  const { register } = useFormContext<CompanionFormValues>();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">Your relationship</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Help EverAfter understand the bond between you two.
        </p>
      </div>

      <div className="space-y-5">
        <TextAreaField
          label="Your story together"
          rows={4}
          placeholder="Describe your relationship…"
          {...register("bond_story")}
        />

        <TextField
          label="What did they call you?"
          placeholder="e.g. Champ, Beta, Princess…"
          {...register("nickname_for_user")}
        />

        <TextAreaField
          label="Special memories"
          rows={4}
          placeholder="A few memorable moments…"
          {...register("special_memories")}
        />

        <TextAreaField
          label="Topics to avoid"
          rows={2}
          placeholder="Anything sensitive the companion should steer clear of…"
          {...register("topics_to_avoid")}
        />

        <TextAreaField
          label="Communication style"
          rows={3}
          placeholder="How did they usually communicate?"
          {...register("communication_style")}
        />

        <TextAreaField
          label="Speaking style"
          rows={3}
          placeholder="Calm, soft-spoken, humorous, energetic…"
          {...register("speaking_style")}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            label="Humor level"
            options={HUMOR_LEVEL_OPTIONS}
            {...register("humor_level")}
          />
          <SelectField
            label="Emotional tone"
            options={EMOTIONAL_TONE_OPTIONS}
            {...register("emotional_tone")}
          />
        </div>

        <label className="flex items-start gap-3 rounded-xl border border-line p-4">
          <input type="checkbox" className="mt-1 h-4 w-4" {...register("is_public")} />
          <span>
            <span className="block font-medium text-ink">Public companion</span>
            <span className="block text-sm text-ink-muted">
              Allow this companion to be shared publicly.
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

```

---

# src\components\wizard\steps\review.tsx

**Location:** `src\components\wizard\steps\review.tsx`

```tsx
"use client";

import { useFormContext } from "react-hook-form";

import { CompanionFormValues } from "@/components/wizard/schema";

function ReviewRow({ label, value }: { label: string; value?: string | boolean }) {
  const display =
    typeof value === "boolean" ? (value ? "Public" : "Private") : value?.trim();

  return (
    <div>
      <p className="text-xs text-ink-muted">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{display || "—"}</p>
    </div>
  );
}

function ReviewBlock({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs text-ink-muted">{label}</p>
      <p className="mt-1 whitespace-pre-wrap rounded-xl border border-line bg-sunken/60 p-3 text-sm text-ink">
        {value?.trim() || "—"}
      </p>
    </div>
  );
}

export function ReviewStep() {
  const { watch } = useFormContext<CompanionFormValues>();
  const values = watch();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">Review</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Take one more look before creating this companion.
        </p>
      </div>

      <section className="rounded-2xl border border-line p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
          Basic information
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <ReviewRow label="Full name" value={values.full_name} />
          <ReviewRow label="Nickname" value={values.nickname} />
          <ReviewRow label="Relationship" value={values.relationship} />
          <ReviewRow label="Gender" value={values.gender} />
          <ReviewRow label="Birth date" value={values.birth_date} />
          <ReviewRow label="Date of passing" value={values.passing_date} />
          <ReviewRow label="Occupation" value={values.occupation} />
          <ReviewRow label="Country / City" value={[values.country, values.city].filter(Boolean).join(", ")} />
        </div>
      </section>

      <section className="rounded-2xl border border-line p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
          About
        </h3>
        <div className="space-y-4">
          <ReviewBlock label="Biography" value={values.biography} />
          <ReviewRow label="Favorite quote" value={values.favorite_quote} />
          <ReviewBlock label="Hobbies" value={values.hobbies} />
          <ReviewBlock label="Personality traits" value={values.personality_traits} />
        </div>
      </section>

      <section className="rounded-2xl border border-line p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
          Relationship
        </h3>
        <div className="space-y-4">
          <ReviewBlock label="Your story together" value={values.bond_story} />
          <ReviewBlock label="Special memories" value={values.special_memories} />
          <ReviewRow label="Humor level" value={values.humor_level} />
          <ReviewRow label="Emotional tone" value={values.emotional_tone} />
          <ReviewRow label="Visibility" value={values.is_public} />
        </div>
      </section>

      <div className="rounded-xl border border-success/30 bg-success/10 p-4">
        <p className="text-sm text-ink">
          Click <strong>Create companion</strong> below to save this and start your first
          conversation.
        </p>
      </div>
    </div>
  );
}

```

---

# src\components\wizard\wizard-header.tsx

**Location:** `src\components\wizard\wizard-header.tsx`

```tsx
import { cn } from "@/lib/utils";

const STEP_LABELS = ["Basic", "About", "Relationship", "Review"];

export function WizardHeader({ step }: { step: number }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        {STEP_LABELS.map((label, index) => {
          const active = index <= step;
          return (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-surface text-ink-muted",
                )}
              >
                {index + 1}
              </div>
              <p
                className={cn(
                  "mt-2 hidden text-xs sm:block",
                  active ? "font-medium text-ink" : "text-ink-muted",
                )}
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-sunken">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${((step + 1) / STEP_LABELS.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

```

---

# src\components\wizard\wizard-nav.tsx

**Location:** `src\components\wizard\wizard-nav.tsx`

```tsx
import { Button } from "@/components/ui/button";

export function WizardNavigation({
  step,
  total,
  isSubmitting,
  onPrevious,
  onNext,
  onSubmit,
}: {
  step: number;
  total: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) {
  const isLast = step === total - 1;

  return (
    <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
      <Button type="button" variant="secondary" disabled={step === 0} onClick={onPrevious}>
        Previous
      </Button>

      {isLast ? (
        <Button type="button" isLoading={isSubmitting} onClick={onSubmit}>
          Create companion
        </Button>
      ) : (
        <Button type="button" onClick={onNext}>
          Continue
        </Button>
      )}
    </div>
  );
}

```

---

# src\fonts\fonts.ts

**Location:** `src\fonts\fonts.ts`

```typescript
// src/fonts/index.ts
import localFont from "next/font/local";

export const amoresa = localFont({
  src: "./amoresa/Andrey-Sharonov-Amoresa-Regular.otf",
  variable: "--font-amoresa",
  display: "swap",
});

export const codecPro = localFont({
  src: [
    { path: "./codec-pro/CodecPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "./codec-pro/CodecPro-Italic.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-codec-pro",
  display: "swap",
});
```

---

# src\hooks\use-chat.ts

**Location:** `src\hooks\use-chat.ts`

```typescript
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { clearChat, getChatHistory, sendChatMessage } from "@/lib/api";
import type { ChatHistory, ChatReply } from "@/lib/types";

const chatKey = (companionId: number) => ["chat", companionId] as const;

export function useChatHistory(companionId: number) {
  return useQuery({
    queryKey: chatKey(companionId),
    queryFn: () => getChatHistory(companionId),
    enabled: Number.isFinite(companionId),
  });
}

export function useSendChatMessage(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (message: string) => sendChatMessage(companionId, message),
    onSuccess: (reply: ChatReply) => {
      queryClient.setQueryData<ChatHistory>(chatKey(companionId), (prev) => ({
        memory_person_id: companionId,
        messages: [
          ...(prev?.messages ?? []),
          reply.user_message,
          reply.assistant_message,
        ],
      }));
    },
  });
}

export function useClearChat(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => clearChat(companionId),
    onSuccess: () => {
      queryClient.setQueryData<ChatHistory>(chatKey(companionId), {
        memory_person_id: companionId,
        messages: [],
      });
    },
  });
}

```

---

# src\hooks\use-companions.ts

**Location:** `src\hooks\use-companions.ts`

```typescript
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createCompanion,
  deleteCompanion,
  deleteCompanionProfilePicture,
  getCompanion,
  getCompanions,
  updateCompanion,
  uploadCompanionProfilePicture,
} from "@/lib/api";
import type {
  MemoryPerson,
  MemoryPersonCreateInput,
  MemoryPersonUpdateInput,
} from "@/lib/types";

export const companionsKey = ["companions"] as const;
export const companionKey = (id: number) => ["companions", id] as const;

export function useCompanions() {
  return useQuery({
    queryKey: companionsKey,
    queryFn: getCompanions,
  });
}

export function useCompanion(id: number | null) {
  return useQuery({
    queryKey: companionKey(id ?? -1),
    queryFn: () => getCompanion(id as number),
    enabled: id !== null && Number.isFinite(id),
  });
}

export function useCreateCompanion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: MemoryPersonCreateInput) => createCompanion(input),
    onSuccess: (created) => {
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev ? [created, ...prev] : [created],
      );
      queryClient.setQueryData(companionKey(created.id), created);
    },
  });
}

export function useUpdateCompanion(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: MemoryPersonUpdateInput) => updateCompanion(id, input),
    onSuccess: (updated) => {
      queryClient.setQueryData(companionKey(id), updated);
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev?.map((person) => (person.id === id ? updated : person)),
      );
    },
  });
}

export function useDeleteCompanion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteCompanion(id),
    onSuccess: (_data, id) => {
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev?.filter((person) => person.id !== id),
      );
      queryClient.removeQueries({ queryKey: companionKey(id) });
    },
  });
}

export function useUploadCompanionPhoto(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadCompanionProfilePicture(id, file),
    onSuccess: (updated) => {
      queryClient.setQueryData(companionKey(id), updated);
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev?.map((person) => (person.id === id ? updated : person)),
      );
    },
  });
}

export function useDeleteCompanionPhoto(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteCompanionProfilePicture(id),
    onSuccess: (updated) => {
      queryClient.setQueryData(companionKey(id), updated);
      queryClient.setQueryData<MemoryPerson[]>(companionsKey, (prev) =>
        prev?.map((person) => (person.id === id ? updated : person)),
      );
    },
  });
}

```

---

# src\hooks\use-files.ts

**Location:** `src\hooks\use-files.ts`

```typescript
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteFile, listFiles, uploadFile } from "@/lib/api";
import type { MemoryFile } from "@/lib/types";

const filesKey = (companionId: number, fileType?: string) =>
  ["files", companionId, fileType ?? "all"] as const;

export function useFiles(companionId: number, fileType?: string) {
  return useQuery({
    queryKey: filesKey(companionId, fileType),
    queryFn: () => listFiles(companionId, fileType),
    enabled: Number.isFinite(companionId),
  });
}

export function useUploadFile(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, description }: { file: File; description?: string }) =>
      uploadFile(companionId, file, description),
    onSuccess: (created) => {
      queryClient.setQueryData<MemoryFile[]>(filesKey(companionId), (prev) =>
        prev ? [created, ...prev] : [created],
      );
      queryClient.invalidateQueries({ queryKey: ["files", companionId] });
    },
  });
}

export function useDeleteFile(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (fileId: number) => deleteFile(companionId, fileId),
    onSuccess: (_data, fileId) => {
      queryClient.setQueriesData<MemoryFile[]>(
        { queryKey: ["files", companionId] },
        (prev) => prev?.filter((file) => file.id !== fileId),
      );
    },
  });
}

```

---

# src\hooks\use-voice.ts

**Location:** `src\hooks\use-voice.ts`

```typescript
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  deleteVoiceReference,
  getVoiceReference,
  uploadVoiceReference,
} from "@/lib/api";
import { ApiError } from "@/lib/api";

const voiceReferenceKey = (companionId: number) => ["voice-reference", companionId] as const;

/** 404 just means "no reference uploaded yet" — not a real error. */
export function useVoiceReference(companionId: number) {
  return useQuery({
    queryKey: voiceReferenceKey(companionId),
    queryFn: () => getVoiceReference(companionId),
    enabled: Number.isFinite(companionId),
    retry: false,
    throwOnError: false,
  });
}

export function useUploadVoiceReference(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadVoiceReference(companionId, file),
    onSuccess: (reference) => {
      queryClient.setQueryData(voiceReferenceKey(companionId), reference);
    },
  });
}

export function useDeleteVoiceReference(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteVoiceReference(companionId),
    onSuccess: () => {
      queryClient.setQueryData(voiceReferenceKey(companionId), null);
    },
  });
}

export function isNotFound(error: unknown): boolean {
  return error instanceof ApiError && error.status === 404;
}

```

---

# src\lib\api.ts

**Location:** `src\lib\api.ts`

```typescript
import type {
  AuthResponse,
  ChatHistory,
  ChatReply,
  MemoryFile,
  MemoryPerson,
  MemoryPersonCreateInput,
  MemoryPersonUpdateInput,
  MessageResponse,
  MessageVoice,
  RegistrationResponse,
  User,
  ValidationError,
  VoiceReference,
} from "./types";

// ============================================================================
// Configuration
// ============================================================================

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api/v1";

const ACCESS_TOKEN_KEY = "everafter_access_token";

// ============================================================================
// Token storage — the backend issues a short-lived bearer access token plus
// an httpOnly refresh cookie (set by the server itself on login/verify).
// ============================================================================

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

function storeAccessToken(token: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
}

function removeAccessToken() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isAuthed(): boolean {
  return Boolean(getAccessToken());
}

// ============================================================================
// Errors
// ============================================================================

export class ApiError extends Error {
  status: number;
  details?: ValidationError[];

  constructor(message: string, status: number, details?: ValidationError[]) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

function friendlyMessage(detail: unknown): {
  message: string;
  details?: ValidationError[];
} {
  if (typeof detail === "string") return { message: detail };

  if (Array.isArray(detail)) {
    const validation = detail as ValidationError[];
    const first = validation[0];
    const field = first?.loc?.[first.loc.length - 1];
    const message = first
      ? `${field ? `${String(field)}: ` : ""}${first.msg}`
      : "Some fields need attention.";
    return { message, details: validation };
  }

  return { message: "Something went wrong. Please try again." };
}

// ============================================================================
// Core request helpers
// ============================================================================

async function handleResponse<T>(response: Response): Promise<T> {
  if (response.status === 204) return undefined as T;

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const body = isJson ? await response.json().catch(() => null) : null;

  if (!response.ok) {
    const { message, details } = friendlyMessage(body?.detail);
    throw new ApiError(message, response.status, details);
  }

  return body as T;
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  const token = getAccessToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
      credentials: "include",
    });
  } catch {
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again.",
      0,
    );
  }

  return handleResponse<T>(response);
}

/** Same as `request`, but retries once after a silent token refresh on 401. */
async function requestAuthed<T>(path: string, options: RequestInit = {}): Promise<T> {
  try {
    return await request<T>(path, options);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return request<T>(path, options);
    }
    throw error;
  }
}

async function requestForm<T>(
  path: string,
  formData: FormData,
  options: RequestInit = {},
): Promise<T> {
  const headers = new Headers(options.headers);
  const token = getAccessToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  // Intentionally no Content-Type — the browser sets the multipart boundary.

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      method: options.method ?? "POST",
      headers,
      body: formData,
      credentials: "include",
    });
  } catch {
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again.",
      0,
    );
  }

  return handleResponse<T>(response);
}

async function requestBlobOnce(path: string): Promise<Blob> {
  const headers = new Headers();
  const token = getAccessToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      headers,
      credentials: "include",
    });
  } catch {
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again.",
      0,
    );
  }

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const { message, details } = friendlyMessage(body?.detail);
    throw new ApiError(message, response.status, details);
  }

  return response.blob();
}

/** For binary responses (audio, etc.) — same 401-refresh-retry as requestAuthed. */
async function requestBlob(path: string): Promise<Blob> {
  try {
    return await requestBlobOnce(path);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return requestBlobOnce(path);
    }
    throw error;
  }
}

// ============================================================================
// Session helper
// ============================================================================

function persistSession(session: AuthResponse): User {
  storeAccessToken(session.access_token);
  return session.user;
}

// ============================================================================
// Authentication — /api/v1/auth/*
// ============================================================================

export async function register(input: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}) {
  return request<RegistrationResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function verifyEmail(email: string, otp: string) {
  const session = await request<AuthResponse>("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify({ email, otp }),
  });
  return persistSession(session);
}

export async function resendVerification(email: string) {
  return request<MessageResponse>("/auth/resend-verification", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function login(email: string, password: string) {
  const session = await request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return persistSession(session);
}

export async function googleLogin(credential: string) {
  const session = await request<AuthResponse>("/auth/google", {
    method: "POST",
    body: JSON.stringify({ credential }),
  });
  return persistSession(session);
}

export async function refresh() {
  const session = await request<AuthResponse>("/auth/refresh", { method: "POST" });
  return persistSession(session);
}

export async function logout() {
  try {
    await request<MessageResponse>("/auth/logout", { method: "POST" });
  } finally {
    removeAccessToken();
  }
}

// ============================================================================
// Users — /api/v1/users/*
// ============================================================================

export async function getCurrentUser() {
  return requestAuthed<User>("/users/me");
}

// ============================================================================
// Memory People (companions) — /api/v1/memory-people
// ============================================================================

export async function getCompanions() {
  return requestAuthed<MemoryPerson[]>("/memory-people");
}

export async function getCompanion(id: number) {
  return requestAuthed<MemoryPerson>(`/memory-people/${id}`);
}

export async function createCompanion(input: MemoryPersonCreateInput) {
  return requestAuthed<MemoryPerson>("/memory-people", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function updateCompanion(id: number, input: MemoryPersonUpdateInput) {
  return requestAuthed<MemoryPerson>(`/memory-people/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export async function deleteCompanion(id: number) {
  return requestAuthed<unknown>(`/memory-people/${id}`, { method: "DELETE" });
}

/** POST /memory-people/{id}/profile-picture — dedicated avatar upload.
 * Assumed to return the updated companion (same shape as GET/PATCH); the
 * paste of the OpenAPI schema didn't include its response model. */
export async function uploadCompanionProfilePicture(id: number, file: File) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    return await requestForm<MemoryPerson>(`/memory-people/${id}/profile-picture`, formData);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return requestForm<MemoryPerson>(`/memory-people/${id}/profile-picture`, formData);
    }
    throw error;
  }
}

export async function deleteCompanionProfilePicture(id: number) {
  return requestAuthed<MemoryPerson>(`/memory-people/${id}/profile-picture`, {
    method: "DELETE",
  });
}

// ============================================================================
// Memory Vault — /api/v1/memory-people/{id}/files
// ============================================================================

export async function listFiles(companionId: number, fileType?: string) {
  const query = fileType ? `?file_type=${encodeURIComponent(fileType)}` : "";
  return requestAuthed<MemoryFile[]>(`/memory-people/${companionId}/files${query}`);
}

export async function getFile(companionId: number, fileId: number) {
  return requestAuthed<MemoryFile>(`/memory-people/${companionId}/files/${fileId}`);
}

export async function uploadFile(
  companionId: number,
  file: File,
  description?: string,
) {
  const formData = new FormData();
  formData.append("file", file);
  if (description) formData.append("description", description);

  try {
    return await requestForm<MemoryFile>(`/memory-people/${companionId}/files`, formData);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return requestForm<MemoryFile>(`/memory-people/${companionId}/files`, formData);
    }
    throw error;
  }
}

export async function deleteFile(companionId: number, fileId: number) {
  return requestAuthed<unknown>(`/memory-people/${companionId}/files/${fileId}`, {
    method: "DELETE",
  });
}

// ============================================================================
// Chat — /api/v1/memory-people/{id}/chat
// ============================================================================

export async function getChatHistory(companionId: number) {
  return requestAuthed<ChatHistory>(`/memory-people/${companionId}/chat`);
}

export async function sendChatMessage(companionId: number, message: string) {
  return requestAuthed<ChatReply>(`/memory-people/${companionId}/chat`, {
    method: "POST",
    body: JSON.stringify({ message }),
  });
}

export async function clearChat(companionId: number) {
  return requestAuthed<unknown>(`/memory-people/${companionId}/chat`, {
    method: "DELETE",
  });
}

// ============================================================================
// Voice Cloning — /api/v1/memory-people/{id}/voice-reference
//                  /api/v1/memory-people/{id}/chat/{messageId}/voice
// ============================================================================

export async function getVoiceReference(companionId: number) {
  return requestAuthed<VoiceReference>(`/memory-people/${companionId}/voice-reference`);
}

export async function uploadVoiceReference(companionId: number, file: File) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    return await requestForm<VoiceReference>(
      `/memory-people/${companionId}/voice-reference`,
      formData,
    );
  } catch (error) {
    if (error instanceof ApiError && error.status === 401 && getAccessToken()) {
      await refresh();
      return requestForm<VoiceReference>(
        `/memory-people/${companionId}/voice-reference`,
        formData,
      );
    }
    throw error;
  }
}

export async function deleteVoiceReference(companionId: number) {
  return requestAuthed<unknown>(`/memory-people/${companionId}/voice-reference`, {
    method: "DELETE",
  });
}

/** Kicks off (or re-triggers) voice generation for one chat message. */
export async function generateMessageVoice(companionId: number, messageId: number) {
  return requestAuthed<MessageVoice>(
    `/memory-people/${companionId}/chat/${messageId}/voice`,
    { method: "POST" },
  );
}

/** Poll this for status while generation is in progress. */
export async function getMessageVoice(companionId: number, messageId: number) {
  return requestAuthed<MessageVoice>(`/memory-people/${companionId}/chat/${messageId}/voice`);
}

/** Fetches the generated audio as a Blob — build an object URL from it for
 * an <audio> element, since the endpoint needs a Bearer header a plain
 * <audio src> can't send. */
export async function fetchMessageVoiceAudio(companionId: number, messageId: number) {
  return requestBlob(`/memory-people/${companionId}/chat/${messageId}/voice/audio`);
}

const VOICE_TERMINAL_SUCCESS = new Set(["completed", "ready", "done", "succeeded", "success"]);
const VOICE_TERMINAL_FAILURE = new Set(["failed", "error", "errored"]);

export function isVoiceTerminal(status: string): boolean {
  const s = status.toLowerCase();
  return VOICE_TERMINAL_SUCCESS.has(s) || VOICE_TERMINAL_FAILURE.has(s) || s.includes("fail");
}

export function isVoiceFailed(status: string): boolean {
  const s = status.toLowerCase();
  return VOICE_TERMINAL_FAILURE.has(s) || s.includes("fail");
}

/** Resolve a possibly-relative file path returned by the backend into a full URL. */
export function resolveFileUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  const base = API_BASE_URL.replace(/\/api\/v1\/?$/, "");
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}

```

---

# src\lib\types.ts

**Location:** `src\lib\types.ts`

```typescript
// ============================================================================
// Types mirroring the EverAfter AI backend OpenAPI schema (v1.0.0).
// Keep this in sync with /openapi.json if the backend contract changes.
// ============================================================================

export type User = {
  id: number;
  full_name: string;
  email: string;
  profile_picture: string | null;
  provider: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
};

export type AuthResponse = {
  access_token: string;
  token_type: "bearer";
  user: User;
};

export type RegistrationResponse = {
  message: string;
  email: string;
};

export type MessageResponse = {
  message: string;
};

// ----------------------------------------------------------------------------
// Memory People (Companions)
// ----------------------------------------------------------------------------

export type MemoryPerson = {
  id: number;
  user_id: number;
  full_name: string;
  nickname: string | null;
  relationship: string;
  gender: string | null;
  birth_date: string | null;
  passing_date: string | null;
  profile_picture: string | null;
  occupation: string | null;
  country: string | null;
  city: string | null;
  languages: string | null;
  biography: string | null;
  favorite_quote: string | null;
  favorite_food: string | null;
  favorite_song: string | null;
  favorite_color: string | null;
  hobbies: string | null;
  personality_traits: string[];
  bond_story: string | null;
  nickname_for_user: string | null;
  special_memories: string | null;
  topics_to_avoid: string | null;
  communication_style: string | null;
  speaking_style: string | null;
  humor_level: string | null;
  emotional_tone: string | null;
  is_public: boolean;
  created_at: string;
  updated_at: string;
};

/** Fields accepted by POST /memory-people. `full_name` + `relationship` required. */
export type MemoryPersonCreateInput = Partial<
  Omit<MemoryPerson, "id" | "user_id" | "created_at" | "updated_at">
> &
  Pick<MemoryPerson, "full_name" | "relationship">;

/** Fields accepted by PATCH /memory-people/{id} — everything optional. */
export type MemoryPersonUpdateInput = Partial<
  Omit<MemoryPerson, "id" | "user_id" | "created_at" | "updated_at">
>;

// ----------------------------------------------------------------------------
// Memory Vault (files)
// ----------------------------------------------------------------------------

export type MemoryFileType = "photo" | "voice" | "video" | "letter" | "chat" | string;

export type MemoryFile = {
  id: number;
  memory_person_id: number;
  file_name: string;
  original_name: string;
  file_path: string;
  thumbnail_path: string | null;
  file_type: MemoryFileType;
  mime_type: string;
  extension: string | null;
  file_size: number | null;
  duration: number | null;
  description: string | null;
  is_processed: boolean;
  processing_status: "pending" | "completed" | "failed" | string;
  processing_error: string | null;
  chunk_count: number;
  created_at: string;
  updated_at: string;
};

// ----------------------------------------------------------------------------
// Chat
// ----------------------------------------------------------------------------

export type ChatRole = "user" | "assistant" | string;

export type ChatMessage = {
  id: number;
  role: ChatRole;
  content: string;
  is_crisis_flagged: boolean;
  is_safety_response: boolean;
  created_at: string;
};

export type ChatHistory = {
  memory_person_id: number;
  messages: ChatMessage[];
};

export type RetrievedSource = {
  source_type: string;
  source_label: string | null;
  snippet: string;
};

export type ChatReply = {
  user_message: ChatMessage;
  assistant_message: ChatMessage;
  is_crisis_response: boolean;
  resources: string[] | null;
  sources_used: RetrievedSource[];
};

// ----------------------------------------------------------------------------
// Voice Cloning
// ----------------------------------------------------------------------------

/** Generic lifecycle string from the backend — treated defensively since it
 * isn't enumerated in the OpenAPI schema. */
export type VoiceStatus = string;

export type VoiceReference = {
  id: number;
  memory_person_id: number;
  source: string;
  original_name: string;
  duration_seconds: number | null;
  status: VoiceStatus;
  validation_note: string | null;
  created_at: string;
  updated_at: string;
};

export type MessageVoice = {
  id: number;
  chat_message_id: number;
  status: VoiceStatus;
  trigger: string;
  duration_seconds: number | null;
  error: string | null;
  device_used: string | null;
  generation_ms: number | null;
  created_at: string;
  updated_at: string;
};

// ----------------------------------------------------------------------------
// Errors
// ----------------------------------------------------------------------------

export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};

```

---

# src\lib\utils.ts

**Location:** `src\lib\utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Short, human relative time — "just now", "5m", "3h", "2d", or a date. */
export function formatRelativeTime(iso: string): string {
  const date = new Date(iso);
  const diffMs = Date.now() - date.getTime();
  const diffSec = Math.round(diffMs / 1000);

  if (diffSec < 45) return "just now";

  const diffMin = Math.round(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m`;

  const diffHour = Math.round(diffMin / 60);
  if (diffHour < 24) return `${diffHour}h`;

  const diffDay = Math.round(diffHour / 24);
  if (diffDay < 7) return `${diffDay}d`;

  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/** Full, friendly date+time — used in tooltips and detail views. */
export function formatFullDateTime(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function initialsFor(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0]}${parts[parts.length - 1]![0]}`.toUpperCase();
}

export function bytesToSize(bytes?: number | null): string {
  if (!bytes && bytes !== 0) return "";
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const value = bytes / Math.pow(1024, exponent);
  return `${exponent === 0 ? value : value.toFixed(1)} ${units[exponent]}`;
}

```

---

# src\providers\auth-provider.tsx

**Location:** `src\providers\auth-provider.tsx`

```tsx
"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser, isAuthed, logout as apiLogout } from "@/lib/api";
import type { User } from "@/lib/types";

type AuthContextValue = {
  user: User | null;
  isLoading: boolean;
  refresh: () => Promise<void>;
  setUser: (user: User) => void;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!isAuthed()) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      const current = await getCurrentUser();
      setUser(current);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOut = useCallback(async () => {
    await apiLogout().catch(() => undefined);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, refresh, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

```

---

# src\providers\query-provider.tsx

**Location:** `src\providers\query-provider.tsx`

```tsx
"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiError } from "@/lib/api";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: (failureCount, error) => {
              if (error instanceof ApiError && error.status >= 400 && error.status < 500) {
                return false;
              }
              return failureCount < 2;
            },
            refetchOnWindowFocus: false,
            staleTime: 15_000,
          },
          mutations: {
            retry: false,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

```

---

# tsconfig.json

**Location:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

---

