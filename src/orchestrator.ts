/**
 * Workflow orchestrator
 */

import { Agent, ALL_AGENTS } from './agents.js';

export interface Workflow {
  task: string;
  agents: string[];
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  currentAgent?: string;
  results: Map<string, any>;
}

export class Orchestrator {
  private workflows: Map<string, Workflow> = new Map();

  async createWorkflow(task: string, agents?: string[]): Promise<string> {
    const workflowId = Date.now().toString();
    const workflow: Workflow = {
      task,
      agents: agents || ['coder', 'tester', 'security', 'docs'],
      status: 'pending',
      results: new Map(),
    };

    this.workflows.set(workflowId, workflow);
    return workflowId;
  }

  async executeWorkflow(workflowId: string): Promise<void> {
    const workflow = this.workflows.get(workflowId);
    if (!workflow) throw new Error('Workflow not found');

    workflow.status = 'in_progress';

    for (const agentName of workflow.agents) {
      const agent = ALL_AGENTS.find(a => a.name === agentName);
      if (!agent) {
        console.error(`Agent ${agentName} not found`);
        continue;
      }

      workflow.currentAgent = agentName;
      console.log(`\n🤖 ${agent.role} starting...`);

      const result = await agent.execute(workflow.task, workflow.results);
      workflow.results.set(agentName, result);

      if (!result.success) {
        workflow.status = 'failed';
        console.error(`❌ ${agent.role} failed`);
        return;
      }

      console.log(`✅ ${agent.role} completed`);
    }

    workflow.status = 'completed';
    console.log(`\n🎉 Workflow completed successfully!`);
  }

  getWorkflowStatus(workflowId: string): Workflow | undefined {
    return this.workflows.get(workflowId);
  }
}
