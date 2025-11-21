# 👥 Crew Dev

**Multi-Agent Orchestration for Software Development**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)

Specialized AI agents (coder, tester, security-reviewer, doc-writer) coordinate on features end-to-end with built-in governance.

## 🔥 The Problem
- No multi-agent system specifically for software development workflows
- AI agents dominating (AutoGen, CrewAI, 1.1M+ LLM SDK repos +178% YoY)
- Need development-specific agent coordination

## ✨ Solution
**Crew Dev** provides specialized development agents that:
- **Coordinate** on features end-to-end
- **Built-in Governance** - security agent must approve
- **Learn** team patterns and conventions
- **Extensible** - add custom agents

## 🤖 Agents

1. **Coder** - Implements features following project conventions
   - Capabilities: code-generation, refactoring, bug-fixing
2. **Tester** - Writes comprehensive test suites
   - Capabilities: test-writing, coverage-analysis, e2e-testing
3. **Security Reviewer** - Scans for vulnerabilities
   - Capabilities: vulnerability-scanning, code-review, dependency-audit
4. **Doc Writer** - Generates documentation
   - Capabilities: doc-generation, api-docs, readme-updates

## 📦 Installation

```bash
npm install -g crew-dev
```

## 🚀 Quick Start

```bash
# Initialize project
crew-dev init

# View available agents
crew-dev agents

# Assign feature to crew
crew-dev assign "Add user authentication"

# Custom agent workflow
crew-dev assign "Fix login bug" --agents coder,tester
```

## 📊 Example Workflow

```bash
$ crew-dev assign "Add user notifications"

✓ Assigning task to crew
  Task: Add user notifications
  Agents: coder → tester → security → docs

Workflow ID: 1234567890

🚀 Starting workflow execution...

🤖 Implementation starting...
[Coder] Implementing: Add user notifications
✅ Implementation completed

🤖 Quality Assurance starting...
[Tester] Writing tests for: Add user notifications
✅ Quality Assurance completed
Test suite complete. Coverage: 92%

🤖 Security Review starting...
[Security] Reviewing: Add user notifications
✅ Security Review completed
Security scan complete. No critical issues found.

🤖 Documentation starting...
[Docs] Documenting: Add user notifications
✅ Documentation completed

🎉 Workflow completed successfully!
```

## 🏗️ Architecture

```
Task Assignment
     ↓
Orchestrator
     ↓
┌────┴────┬────────┬──────────┐
│ Coder   │ Tester │ Security │ Docs
│         │        │          │
│ Implements → Tests → Scans → Documents
└─────────┴────────┴──────────┘
```

## 🎯 Star Potential: 30k-50k
- Rides agent coordination wave (AutoGen/CrewAI momentum)
- Fills dev-specific gap
- Combines multiple trends (agents + development)

## 📄 License

MIT License
