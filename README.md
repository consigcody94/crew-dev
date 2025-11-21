# 👥 Crew Dev

**Multi-Agent Orchestration for Software Development**

Specialized AI agents (coder, tester, security-reviewer, doc-writer) coordinate on features end-to-end with built-in governance.

## The Problem
- No multi-agent system specifically for software development workflows
- AI agents dominating (AutoGen, CrewAI, 1.1M+ LLM SDK repos +178% YoY)
- Need development-specific agent coordination

## Solution
**Crew Dev** provides specialized development agents that:
- **Coordinate** on features end-to-end
- **Built-in Governance** - security agent must approve
- **Learn** team patterns and conventions
- **MCP Integration** for tool access

## Agents
1. **Coder** - Implements features following project conventions
2. **Tester** - Writes comprehensive test suites
3. **Security Reviewer** - Scans for vulnerabilities (integrates with code-guardian)
4. **Doc Writer** - Generates documentation
5. **Orchestrator** - Coordinates workflow and handoffs

## Quick Start
```bash
npm install -g crew-dev

# Initialize project
crew-dev init

# Assign feature to crew
crew-dev assign "Add user authentication" --agents coder,tester,security

# Monitor progress
crew-dev status
```

## Star Potential: 30k-50k
- Rides agent coordination wave (AutoGen/CrewAI momentum)
- Fills dev-specific gap
- Combines multiple trends (MCP + agents)

MIT License
