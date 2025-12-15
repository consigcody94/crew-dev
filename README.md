<div align="center">

<!-- Animated Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=8,10,12&height=200&section=header&text=👥%20CREW%20DEV&fontSize=70&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Multi-Agent%20Orchestration%20for%20Software%20Development&descAlignY=55&descSize=18"/>

<br/>

<!-- Badges Row 1 -->
<p>
<a href="#"><img src="https://img.shields.io/badge/Multi--Agent-Orchestration-9b59b6?style=for-the-badge" alt="Multi-Agent"/></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License"/></a>
<a href="#"><img src="https://img.shields.io/badge/TypeScript-5.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
</p>

<!-- Badges Row 2 -->
<p>
<img src="https://img.shields.io/badge/Agent-Coder-00d4aa?style=flat-square" alt="Coder"/>
<img src="https://img.shields.io/badge/Agent-Tester-ff6b6b?style=flat-square" alt="Tester"/>
<img src="https://img.shields.io/badge/Agent-Security-F7931E?style=flat-square" alt="Security"/>
<img src="https://img.shields.io/badge/Agent-Docs-3178c6?style=flat-square" alt="Docs"/>
</p>

<br/>

<!-- Tagline Box -->
<table>
<tr>
<td>

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   👥  CREW DEV: Specialized AI agents for development workflows             ║
║                                                                              ║
║       🤖  Coder → Tester → Security → Docs (end-to-end pipeline)            ║
║       🛡️   Built-in governance - security agent must approve                 ║
║       📚  Learns your team's patterns and conventions                        ║
║       🔧  Extensible - add custom agents for your workflow                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</td>
</tr>
</table>

<br/>

<!-- Quick Links -->
[**🚀 Quick Start**](#-quick-start) · [**🤖 Agents**](#-agents) · [**🏗️ Architecture**](#-architecture) · [**📊 Example**](#-example-workflow)

<br/>

</div>

---

<br/>

## 🎯 The Problem vs Solution

<table>
<tr>
<td width="50%">

### ❌ The Problem
```
Agent ecosystems (AutoGen, CrewAI)
are generic - not built for
software development workflows.

You need:
├── Code that follows conventions
├── Tests with good coverage
├── Security review
└── Updated documentation

No tool does all of this.
```

</td>
<td width="50%">

### ✅ The Solution
```
$ crew-dev assign "Add notifications"

✓ Coder: Implements feature
✓ Tester: 92% coverage
✓ Security: No vulnerabilities
✓ Docs: README updated

🎉 Feature complete!
```

</td>
</tr>
</table>

<br/>

---

<br/>

## 🤖 Agents

<div align="center">

| Agent | Role | Capabilities |
|:------|:-----|:-------------|
| **🔧 Coder** | Implements features | code-generation, refactoring, bug-fixing |
| **🧪 Tester** | Writes test suites | test-writing, coverage-analysis, e2e-testing |
| **🛡️ Security** | Scans for vulnerabilities | vulnerability-scanning, code-review, dependency-audit |
| **📝 Docs** | Generates documentation | doc-generation, api-docs, readme-updates |

</div>

```
┌─────────────────────────────────────────────────────────────────┐
│                    AGENT PIPELINE                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Task Assignment                                                │
│       ↓                                                         │
│  Orchestrator                                                   │
│       ↓                                                         │
│  ┌────┴────┬────────┬──────────┐                               │
│  │ Coder   │ Tester │ Security │ Docs                          │
│  │         │        │          │                                │
│  │ Implements → Tests → Scans → Documents                      │
│  └─────────┴────────┴──────────┘                               │
│                                                                 │
│  Security agent MUST approve before merge                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

---

<br/>

## 🚀 Quick Start

### Installation

```bash
npm install -g crew-dev
```

### Usage

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

<br/>

---

<br/>

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

<br/>

---

<br/>

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    CREW DEV ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ┌──────────────┐                            │
│                    │    Task      │                            │
│                    │   Manager    │                            │
│                    └──────┬───────┘                            │
│                           │                                     │
│                    ┌──────▼───────┐                            │
│                    │ Orchestrator │                            │
│                    └──────┬───────┘                            │
│           ┌───────────────┼───────────────┐                    │
│           ▼               ▼               ▼                    │
│     ┌─────────┐     ┌─────────┐     ┌─────────┐              │
│     │  Coder  │────▶│ Tester  │────▶│Security │              │
│     │  Agent  │     │  Agent  │     │  Agent  │              │
│     └─────────┘     └─────────┘     └────┬────┘              │
│                                          │                     │
│                                   ┌──────▼───────┐            │
│                                   │    Docs      │            │
│                                   │   Agent      │            │
│                                   └──────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

---

<br/>

## ✨ Features

```
┌─────────────────────────────────────────────────────────────────┐
│                    KEY FEATURES                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🔄  END-TO-END AUTOMATION                                      │
│      From code to docs in one command                           │
│                                                                 │
│  🛡️  BUILT-IN GOVERNANCE                                        │
│      Security agent must approve all changes                    │
│                                                                 │
│  📚  LEARNS YOUR PATTERNS                                       │
│      Adapts to team conventions over time                       │
│                                                                 │
│  🔧  EXTENSIBLE                                                 │
│      Add custom agents for specialized tasks                    │
│                                                                 │
│  📊  VISIBILITY                                                 │
│      Track progress and see what each agent does                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

---

<br/>

## 📄 License

<div align="center">

**MIT License** © Crew Dev

</div>

<br/>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=8,10,12&height=100&section=footer"/>

<br/>

**👥 Crew Dev** — *Your AI development team*

<br/>

*"One command, full feature delivery."*

<br/>

[⬆ Back to Top](#-crew-dev)

</div>
