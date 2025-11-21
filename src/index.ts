export interface Agent {
  name: string;
  role: string;
  capabilities: string[];
}

export const AGENTS: Agent[] = [
  { name: 'coder', role: 'Implementation', capabilities: ['code-generation', 'refactoring'] },
  { name: 'tester', role: 'Quality Assurance', capabilities: ['test-writing', 'coverage-analysis'] },
  { name: 'security', role: 'Security Review', capabilities: ['vulnerability-scanning', 'code-review'] },
  { name: 'docs', role: 'Documentation', capabilities: ['doc-generation', 'api-docs'] },
];
