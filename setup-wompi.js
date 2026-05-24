#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

console.log(`\n${colors.bright}${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
console.log(`${colors.bright}  🔐 Configuración de Wompi para ParkTony${colors.reset}`);
console.log(`${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

async function setupWompi() {
  try {
    const envPath = join(__dirname, '.env');
    let envContent = '';

    try {
      envContent = readFileSync(envPath, 'utf8');
    } catch (error) {
      console.log(`${colors.yellow}⚠ Archivo .env no encontrado. Se creará uno nuevo.${colors.reset}\n`);
    }

    console.log(`${colors.bright}¿Qué tipo de llaves vas a usar?${colors.reset}`);
    console.log(`${colors.green}1${colors.reset} - Pruebas/Sandbox (pub_test_ / prv_test_)`);
    console.log(`${colors.green}2${colors.reset} - Producción (pub_prod_ / prv_prod_)\n`);

    const choice = await question(`Selecciona una opción (1 o 2): `);
    const isProduction = choice.trim() === '2';
    const envType = isProduction ? 'production' : 'sandbox';
    const prefix = isProduction ? 'prod' : 'test';

    console.log(`\n${colors.bright}Ingresa tus llaves de Wompi:${colors.reset}\n`);
    console.log(`${colors.yellow}Tip: Las encuentras en tu panel de Wompi → Desarrollo → Programadores${colors.reset}\n`);

    const publicKey = await question(`Public Key (pub_${prefix}_...): `);
    const secretKey = await question(`Secret Key (prv_${prefix}_...): `);

    // Validar formato de llaves
    if (!publicKey.startsWith(`pub_${prefix}_`)) {
      console.log(`\n${colors.red}❌ Error: La Public Key debe empezar con "pub_${prefix}_"${colors.reset}`);
      rl.close();
      process.exit(1);
    }

    if (!secretKey.startsWith(`prv_${prefix}_`)) {
      console.log(`\n${colors.red}❌ Error: La Secret Key debe empezar con "prv_${prefix}_"${colors.reset}`);
      rl.close();
      process.exit(1);
    }

    // Actualizar o crear archivo .env
    const newEnvContent = `# Wompi Configuration
VITE_WOMPI_PUBLIC_KEY=${publicKey}
VITE_WOMPI_SECRET_KEY=${secretKey}
VITE_WOMPI_ENV=${envType}

# App Configuration
VITE_APP_ENV=development
VITE_APP_NAME=ParkTony
VITE_APP_URL=http://localhost:5173
VITE_API_URL=http://localhost:3000/api
`;

    writeFileSync(envPath, newEnvContent, 'utf8');

    console.log(`\n${colors.green}✅ Configuración guardada exitosamente!${colors.reset}\n`);
    console.log(`${colors.bright}Resumen de configuración:${colors.reset}`);
    console.log(`  ${colors.blue}•${colors.reset} Entorno: ${colors.bright}${envType}${colors.reset}`);
    console.log(`  ${colors.blue}•${colors.reset} Public Key: ${colors.bright}${publicKey.substring(0, 20)}...${colors.reset}`);
    console.log(`  ${colors.blue}•${colors.reset} Secret Key: ${colors.bright}${secretKey.substring(0, 20)}...${colors.reset}\n`);

    console.log(`${colors.yellow}⚠ Importante:${colors.reset}`);
    console.log(`  ${colors.blue}1.${colors.reset} Reinicia tu servidor de desarrollo (Ctrl+C y luego npm run dev)`);
    console.log(`  ${colors.blue}2.${colors.reset} Verifica que useWompi.js esté usando la versión real (no demo)`);
    console.log(`  ${colors.blue}3.${colors.reset} El archivo .env está en .gitignore y NO se subirá a Git\n`);

    console.log(`${colors.green}${colors.bright}¡Listo para procesar pagos con Wompi! 🎉${colors.reset}\n`);

  } catch (error) {
    console.error(`\n${colors.red}❌ Error: ${error.message}${colors.reset}\n`);
    process.exit(1);
  } finally {
    rl.close();
  }
}

setupWompi();
