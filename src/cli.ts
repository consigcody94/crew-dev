#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import { ALL_AGENTS } from './agents.js';
import { Orchestrator } from './orchestrator.js';

const orchestrator = new Orchestrator();

program.name('crew-dev').version('1.0.0');

program.command('agents').action(() => {
  console.log(chalk.bold.cyan('\n👥 Available Agents\n'));
  ALL_AGENTS.forEach(a => {
    console.log(chalk.bold(a.name) + chalk.gray(` - ${a.role}`));
    console.log(chalk.gray(`  Capabilities: ${a.capabilities.join(', ')}\n`));
  });
});

program.command('assign <task>')
  .option('--agents <agents>', 'Comma-separated agent names', 'coder,tester,security,docs')
  .action(async (task, options) => {
    const agents = options.agents.split(',');
    
    console.log(chalk.green(`\n✓ Assigning task to crew`));
    console.log(chalk.gray(`  Task: ${task}`));
    console.log(chalk.gray(`  Agents: ${agents.join(' → ')}\n`));

    const workflowId = await orchestrator.createWorkflow(task, agents);
    console.log(chalk.cyan(`Workflow ID: ${workflowId}`));
    
    console.log(chalk.yellow('\n🚀 Starting workflow execution...\n'));
    await orchestrator.executeWorkflow(workflowId);
  });

program.command('init').action(() => {
  console.log(chalk.green('✓ Crew Dev initialized'));
  console.log(chalk.gray('  Run "crew-dev agents" to see available agents'));
  console.log(chalk.gray('  Run "crew-dev assign <task>" to start a workflow'));
});

program.parse();
