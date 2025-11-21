/**
 * Agent definitions and implementations
 */

export interface Agent {
  name: string;
  role: string;
  capabilities: string[];
  execute: (task: string, context?: any) => Promise<AgentResult>;
}

export interface AgentResult {
  success: boolean;
  output: string;
  artifacts?: string[];
  nextAgent?: string;
}

export class CoderAgent implements Agent {
  name = 'coder';
  role = 'Implementation';
  capabilities = ['code-generation', 'refactoring', 'bug-fixing'];

  async execute(task: string, context?: any): Promise<AgentResult> {
    console.log(`[Coder] Implementing: ${task}`);
    
    return {
      success: true,
      output: `Code implementation complete for: ${task}`,
      artifacts: ['src/feature.ts', 'src/feature.test.ts'],
      nextAgent: 'tester',
    };
  }
}

export class TesterAgent implements Agent {
  name = 'tester';
  role = 'Quality Assurance';
  capabilities = ['test-writing', 'coverage-analysis', 'e2e-testing'];

  async execute(task: string, context?: any): Promise<AgentResult> {
    console.log(`[Tester] Writing tests for: ${task}`);
    
    return {
      success: true,
      output: `Test suite complete. Coverage: 92%`,
      artifacts: ['tests/feature.spec.ts'],
      nextAgent: 'security',
    };
  }
}

export class SecurityAgent implements Agent {
  name = 'security';
  role = 'Security Review';
  capabilities: ['vulnerability-scanning', 'code-review', 'dependency-audit'];

  async execute(task: string, context?: any): Promise<AgentResult> {
    console.log(`[Security] Reviewing: ${task}`);
    
    return {
      success: true,
      output: `Security scan complete. No critical issues found.`,
      artifacts: ['security-report.json'],
      nextAgent: 'docs',
    };
  }
}

export class DocsAgent implements Agent {
  name = 'docs';
  role = 'Documentation';
  capabilities = ['doc-generation', 'api-docs', 'readme-updates'];

  async execute(task: string, context?: any): Promise<AgentResult> {
    console.log(`[Docs] Documenting: ${task}`);
    
    return {
      success: true,
      output: `Documentation generated successfully`,
      artifacts: ['README.md', 'docs/api.md'],
    };
  }
}

export const ALL_AGENTS: Agent[] = [
  new CoderAgent(),
  new TesterAgent(),
  new SecurityAgent(),
  new DocsAgent(),
];
