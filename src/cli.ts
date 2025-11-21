#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import { AGENTS } from './index.js';

program.name('crew-dev').version('1.0.0');

program.command('agents').action(() => {
  console.log(chalk.bold.cyan('\n👥 Available Agents\n'));
  AGENTS.forEach(a => {
    console.log(chalk.bold(a.name) + chalk.gray(` - ${a.role}`));
    console.log(chalk.gray(`  Capabilities: ${a.capabilities.join(', ')}\n`));
  });
});

program.command('init').action(() => {
  console.log(chalk.green('✓ Crew Dev initialized'));
});

program.parse();
