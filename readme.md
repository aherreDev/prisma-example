# Getting started
Everything that you need to get started
```bash
# Install dependencies
yarn

# Run the Project
yarn start

# Run Prisma studio
npx prisma studio
```

# Start from zero

## Express
Basic setup for express
```bash
# Install dependencies
yarn add express debug morgan
```

## Prisma
```bash
# Install prisma on your project
yarn add -D prisma
```

```bash
# SetUp prisma with npx
npx prisma init --datasource-provider sqlite
```

Finally, Update your model, you need to go to `./prisma/schema.prisma` and add your models

## TypeScript and nodemon setup
```bash
# Install dependencies
yarn add -D @types/cookie-parser @types/debug @types/express @types/morgan @types/node ts-node typescript

# Create ts config file
touch  tsconfig.json

# Create nodemon config
touch nodemon.json
```

Configure Ts
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

Configure nodemon
```json
{
  "watch": ["app.ts", "routes", "prisma/schema.prisma", "controllers", "nodemon.js"],
  "ext": "ts,json,prisma",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node --type-check ./bin/www"
}
```

